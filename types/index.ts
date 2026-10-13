export type InquiryType =
  | 'Investor'
  | 'Event Organizer'
  | 'Strategic Partner'
  | 'Brand or Sponsor'
  | 'Commercial Operator'
  | 'Other';

export interface InquiryFormData {
  fullName: string;
  company: string;
  businessEmail: string;
  inquiryType: InquiryType;
  projectScale?: string;
  message: string;
  consent: boolean;
}

export interface SolutionItem {
  id: string;
  title: string;
  headline: string;
  description: string;
  commercialOpportunity: string;
  image: string;
  capabilities: string[];
  operationalRequirements: string;
}

export interface RevenueStreamItem {
  id: string;
  number: string;
  title: string;
  whoPays: string;
  whatTheyReceive: string;
  revenueModel: string;
  operationalConsiderations: string;
  riskFactor: string;
}

export interface DeploymentScenario {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  conceptLayout: string;
  unitRange: string;
  tenantTypes: string[];
  indicativeConsiderations: string[];
  potentialRevenueSources: string[];
  operationalComplexity: 'Moderate' | 'High' | 'Advanced Complex';
  illustrativePotential: string;
}

export interface GtmPhase {
  phase: string;
  title: string;
  objective: string;
  milestones: string[];
  keyDeliverable: string;
}

export interface ThesisItem {
  number: string;
  title: string;
  summary: string;
  commercialRationale: string;
}
