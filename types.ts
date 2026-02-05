export interface University {
  id: string;
  name: string;
  location: string;
  province: string;
  ranking: number;
  image: string;
  description: string;
}

export interface Program {
  id: string;
  universityId: string;
  universityName: string;
  name: string;
  degree: 'Diploma' | 'BSc' | 'MSc' | 'PhD' | 'Post-Grad';
  field: string;
  tuition: number; // CAD per year
  duration: string;
  intake: string[];
  ielts: number;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  program: string;
  image: string;
  quote: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: any;
}

export interface ProvinceInfo {
  name: string;
  avgTuition: string;
  costOfLiving: string;
  prOpportunity: 'High' | 'Medium' | 'Low';
}
