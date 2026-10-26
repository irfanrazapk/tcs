import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';

export const runtime = 'nodejs';

interface InquiryPayload {
  fullName: string;
  company: string;
  businessEmail: string;
  projectScale?: string;
  message: string;
  consent: boolean;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char];
  });
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendEmail(payload: {
  to: string;
  subject: string;
  html: string;
  reply_to?: string;
}) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      text: payload.html.replace(/<[^>]*>/g, ' '),
      ...(payload.reply_to
        ? { reply_to: payload.reply_to }
        : {}),
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(15000),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    console.error('[EMAIL PROVIDER ERROR]', {
      status: response.status,
      message: result?.message || result?.error || 'Email request failed',
    });

    throw new Error('Email delivery request failed.');
  }

  return result;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as InquiryPayload;

    const {
      fullName,
      company,
      businessEmail,
      projectScale,
      message,
      consent,
    } = body;

    // 1. Validate submitted fields
    if (
      typeof fullName !== 'string' ||
      fullName.trim().length < 2 ||
      fullName.trim().length > 120
    ) {
      return NextResponse.json(
        { error: 'Please provide a valid full name.' },
        { status: 400 }
      );
    }

    if (
      typeof company !== 'string' ||
      company.trim().length < 2 ||
      company.trim().length > 200
    ) {
      return NextResponse.json(
        { error: 'Please provide a valid company or organization name.' },
        { status: 400 }
      );
    }

    if (
      typeof businessEmail !== 'string' ||
      businessEmail.trim().length > 254 ||
      !validEmail(businessEmail.trim())
    ) {
      return NextResponse.json(
        { error: 'Please provide a valid business email address.' },
        { status: 400 }
      );
    }

    if (
      typeof message !== 'string' ||
      message.trim().length < 10 ||
      message.trim().length > 10000
    ) {
      return NextResponse.json(
        { error: 'Your message must contain between 10 and 10000 characters.' },
        { status: 400 }
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        { error: 'Consent to be contacted is required.' },
        { status: 400 }
      );
    }

    if (
      projectScale !== undefined &&
      (typeof projectScale !== 'string' ||
        projectScale.length > 300)
    ) {
      return NextResponse.json(
        { error: 'Invalid project scale.' },
        { status: 400 }
      );
    }

    // 2. Check server environment variables
    // const apiKey = process.env.RESEND_API_KEY;
    // const fromEmail = process.env.RESEND_FROM_EMAIL;
    // const adminEmail = process.env.INQUIRY_TO_EMAIL;

    // if (!apiKey || !fromEmail || !adminEmail) {
    //   console.error('[INQUIRY ERROR] Email configuration is missing.');

    //   return NextResponse.json(
    //     { error: 'The email service is temporarily unavailable.' },
    //     { status: 500 }
    //   );
    // }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const adminEmail = process.env.INQUIRY_TO_EMAIL;

    console.log('[EMAIL CONFIG CHECK]', {
      apiKeyLoaded: Boolean(apiKey),
      apiKeyLooksValid: Boolean(apiKey?.startsWith('re_')),
      fromEmailLoaded: Boolean(fromEmail),
      adminEmailLoaded: Boolean(adminEmail),
    });

    console.log('apiKey : ' + apiKey)
    console.log('fromEmail : ' + fromEmail)
    console.log('adminEmail : ' + adminEmail)

    if (!apiKey || !fromEmail || !adminEmail) {
      return NextResponse.json(
        {
          error: 'Email configuration is missing. Check server environment variables.',
        },
        { status: 500 }
      );
    }

    // 3. Prepare sanitized values
    const name = fullName.trim();
    const organization = company.trim();
    const email = businessEmail.trim().toLowerCase();
    const inquiryMessage = message.trim();
    const scale =
      typeof projectScale === 'string' && projectScale.trim()
        ? projectScale.trim()
        : 'Unspecified';

    const referenceId = `inq_${randomUUID()}`;
    const receivedAt = new Date().toISOString();

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(organization);
    const safeEmail = escapeHtml(email);
    const safeScale = escapeHtml(scale);
    const safeMessage = escapeHtml(inquiryMessage).replace(/\n/g, '<br />');
    const safeReference = escapeHtml(referenceId);
    const safeDate = escapeHtml(receivedAt);

    // 4. Send notification email to TRUST CODE SYSTEM
    await sendEmail({
      to: adminEmail,
      subject: `New Website Inquiry — ${organization}`,
      reply_to: email,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#14243A;line-height:1.6">
          <div style="background:#14243A;color:#ffffff;padding:24px">
            <h2 style="margin:0">TRUST CODE SYSTEM</h2>
            <p style="margin-bottom:0">New Contact Form Inquiry</p>
          </div>

          <div style="padding:24px;border:1px solid #E4E8EF">
            <p>A new inquiry has been submitted through your website.</p>

            <p><strong>Reference ID:</strong> ${safeReference}</p>
            <p><strong>Received:</strong> ${safeDate}</p>
            <hr style="border:0;border-top:1px solid #E4E8EF" />

            <p><strong>Full Name:</strong> ${safeName}</p>
            <p><strong>Company:</strong> ${safeCompany}</p>
            <p><strong>Business Email:</strong> ${safeEmail}</p>
            <p><strong>Project Scale:</strong> ${safeScale}</p>

            <h3>Message</h3>
            <div style="padding:16px;background:#F7F8FA;overflow-wrap:anywhere">
              ${safeMessage}
            </div>

            <p style="font-size:12px;color:#657184">
              Reply directly to this email to contact the visitor.
            </p>
          </div>
        </div>
      `,
    });

    // 5. Send confirmation email to the visitor
    // If this email fails, retain the successful admin notification.
    let confirmationSent = false;

    try {
      await sendEmail({
        to: email,
        subject: 'We Received Your Inquiry — TRUST CODE SYSTEM',
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#14243A;line-height:1.7">
            <div style="background:#14243A;color:white;padding:24px">
              <h2 style="margin:0">TRUST CODE SYSTEM</h2>
              <p style="margin-bottom:0">Thank you for contacting us</p>
            </div>

            <div style="padding:24px;border:1px solid #E4E8EF">
              <p>Dear ${safeName},</p>

              <p>
                Thank you for contacting TRUST CODE SYSTEM.
                We have successfully received your inquiry.
              </p>

              <p>
                Our strategic relations team will review your message
                and aims to contact you within 1–2 business days.
              </p>

              <div style="background:#F7F8FA;padding:16px">
                <strong>Your inquiry reference:</strong><br />
                ${safeReference}
              </div>

              <p>
                Best regards,<br />
                <strong>TRUST CODE SYSTEM</strong><br />
                Strategic Relations Team
              </p>
            </div>
          </div>
        `,
      });

      confirmationSent = true;
    } catch (error) {
      console.error('[VISITOR CONFIRMATION FAILED]', error);
    }

    // 6. Log non-sensitive submission metadata
    console.log('[INQUIRY PROCESSED]', {
      referenceId,
      receivedAt,
      confirmationSent,
    });

    // 7. Return the response expected by your existing form
    return NextResponse.json({
      success: true,
      referenceId,
      message:
        'Thank you for contacting TRUST CODE SYSTEM. Your inquiry has been received by our strategic relations team. We will review your submission and contact you within 1-2 business days.',
      data: {
        id: referenceId,
        receivedAt,
      },
    });
  } catch (error) {
    console.error('[INQUIRY PROCESSING ERROR]', error);

    return NextResponse.json(
      {
        error:
          'We could not process your inquiry. Please try again later.',
      },
      { status: 500 }
    );
  }
}