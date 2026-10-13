import { NextRequest, NextResponse } from 'next/server';

interface InquiryPayload {
  fullName: string;
  company: string;
  businessEmail: string;
  inquiryType: string;
  projectScale?: string;
  message: string;
  consent: boolean;
}

const VALID_INQUIRY_TYPES = [
  'Investor',
  'Event Organizer',
  'Strategic Partner',
  'Brand or Sponsor',
  'Commercial Operator',
  'Other',
];

export async function POST(request: NextRequest) {
  try {
    const body: InquiryPayload = await request.json();

    // 1. Validation
    const { fullName, company, businessEmail, inquiryType, projectScale, message, consent } = body;

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (!company || typeof company !== 'string' || company.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide your company or organization name.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid business email address.' },
        { status: 400 }
      );
    }

    if (!inquiryType || !VALID_INQUIRY_TYPES.includes(inquiryType)) {
      return NextResponse.json(
        { error: 'Please select a valid inquiry type.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a brief message outlining your inquiry (minimum 10 characters).' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Consent to be contacted regarding this inquiry is required.' },
        { status: 400 }
      );
    }

    // 2. Sanitized record
    const inquiryRecord = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      receivedAt: new Date().toISOString(),
      fullName: fullName.trim(),
      company: company.trim(),
      businessEmail: businessEmail.trim().toLowerCase(),
      inquiryType,
      projectScale: projectScale ? projectScale.trim() : 'Unspecified',
      message: message.trim(),
      source: 'TRUST CODE SYSTEM Corporate Portal',
      ip: request.headers.get('x-forwarded-for') || '127.0.0.1',
    };

    // 3. Log inquiry securely on server
    console.log('[TRUST CODE SYSTEM INQUIRY RECEIVED]:', {
      id: inquiryRecord.id,
      company: inquiryRecord.company,
      inquiryType: inquiryRecord.inquiryType,
      email: inquiryRecord.businessEmail,
      timestamp: inquiryRecord.receivedAt,
    });

    // Production Hook note:
    // If process.env.MONGODB_URI or process.env.RESEND_API_KEY is configured,
    // dispatch email and persist to database.

    return NextResponse.json({
      success: true,
      referenceId: inquiryRecord.id,
      message:
        'Thank you for contacting TRUST CODE SYSTEM. Your inquiry has been received by our strategic relations team. We will review your submission and contact you within 1-2 business days.',
      data: {
        id: inquiryRecord.id,
        receivedAt: inquiryRecord.receivedAt,
      },
    });
  } catch (error) {
    console.error('[TRUST CODE SYSTEM INQUIRY ERROR]:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
