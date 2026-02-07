export type CountryCode = 'Canada' | 'USA' | 'Germany' | 'France' | 'Italy';

export interface University {
  id: string;
  name: string;
  country: CountryCode;
  location: string;
  province: string; // State/Province/Region
  ranking: number;
  image: string;
  description: string;
  website: string;
  type: 'Public' | 'Private' | 'Applied Sciences';
}

export interface Program {
  id: string;
  universityId: string;
  universityName: string;
  country: CountryCode;
  name: string;
  degree: 'Diploma' | 'BSc' | 'MSc' | 'PhD' | 'Post-Grad';
  field: string;
  tuition: number; // Converted to local currency or USD/EUR/CAD
  currency: string;
  duration: string;
  intake: string[];
  ielts: number;
  greRequired?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  country: CountryCode;
  program: string;
  image: string;
  quote: string;
}

export interface Scholarship {
  id: string;
  name: string;
  country: CountryCode;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string;
  type: 'Merit-based' | 'Need-based' | 'Research' | 'Entrance' | 'DAAD' | 'Assistantship' | 'DSU' | 'Eiffel';
}

export interface TeamMember {
  id: string;
  studentId?: string; // Long academic ID
  name: string;
  role: string;
  gender: 'Male' | 'Female';
  image: string;
  phone?: string;
  email?: string;
  portfolio?: string;
  contributions: string[];
  techResponsibility: string;
  isSupervisor?: boolean;
  designation?: string;
  department?: string;
}

export interface CountryDetails {
  id: string; // 'canada', 'usa', 'germany', etc
  name: string;
  flag: string;
  description: string;
  features: { icon: any; title: string; desc: string }[];
  visaSteps: { step: number; title: string; desc: string }[];
  costs: { label: string; value: string }[];
  techStack: string[];
}

export interface AiAssessmentResult {
  eligibility: 'High' | 'Medium' | 'Low';
  eligibilityReason: string;
  visaProbability: number; // 0-100
  visaReason: string;
  visaRisks: string[];
  recommendations: {
    program: string;
    university: string;
    reason: string;
  }[];
}

export interface ExtractedCvData {
  fullName?: string;
  cgpa?: number;
  ielts?: number;
  fieldOfStudy?: string;
  skills?: string[];
  backgroundSummary?: string;
  careerGoals?: string;
  experience?: string[];
  achievements?: string[];
  certifications?: string[];
  languages?: string[];
  suggestedImprovements?: string[];
  detectedCountryPreference?: string;
}