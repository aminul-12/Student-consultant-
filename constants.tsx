import { University, Program, Testimonial, Scholarship, TeamMember, CountryDetails } from './types';
import { BookOpen, Users, Award, Globe, DollarSign, Clock, CheckCircle, Briefcase, FileText, Landmark, ShieldCheck, GraduationCap, Laptop, Wallet } from 'lucide-react';
import React from 'react';

// --- HELPER COMPONENTS ---
const Star = ({size, className}: {size: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

// --- TEAM DATA ---
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sup1',
    name: 'Abdullah Rajib',
    role: 'Lead Supervisor',
    gender: 'Male',
    designation: 'Assistant Professor',
    department: 'Department of Computer Science & Engineering (CSE)',
    phone: '+880 1675-937860',
    email: 'abdullah.rajib@example.edu',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', 
    contributions: ['Academic Supervision', 'Project Guidance', 'Dedicated & Very Helpful Teacher'],
    techResponsibility: 'Senior Academic Advisor',
    isSupervisor: true
  },
  {
    id: 'dev1',
    studentId: '0992220005101015',
    name: 'Tasnia Jannat',
    role: 'CSE Final Year Student',
    gender: 'Female',
    phone: '+880 1861-156250',
    email: 'tasnia.jannat@example.edu',
    image: 'image_logo_eduglobe.png',
    contributions: ['UI/UX Design', 'System Architecture', 'Academic Documentation'],
    techResponsibility: 'Interface Design Lead'
  },
  {
    id: 'dev2',
    studentId: '0992210005101032',
    name: 'Abdullah Faysal Iftekhar',
    role: 'CSE Final Year Student',
    gender: 'Male',
    phone: '+880 1616-388371',
    email: 'abdullah.iftekhar@example.edu',
    image: 'image_logo_eduglobe.png',
    contributions: ['Core Intelligence', 'Backbencher Student of RTM AKTU', 'Core Friend of Aminul'],
    techResponsibility: 'Backend Systems Engineer (Irregular & Talented)'
  },
  {
    id: 'dev3',
    studentId: '0992510005101010',
    name: 'Aminul Islam',
    role: 'CSE Final Year Student',
    gender: 'Male',
    phone: '+880 1306-466265',
    email: 'mdaminulislam3963@gmail.com',
    portfolio: 'https://aminulport.netlify.app/',
    image: 'image_logo_eduglobe.png',
    contributions: ['Full Stack Integration', 'Backbencher Student of RTM AKTU', 'Core Friend of Iftekhar'],
    techResponsibility: 'Technical Integration Lead'
  }
];

// --- UNIVERSITIES ---
export const UNIVERSITIES: University[] = [
  {
    id: 'c1',
    name: 'University of Toronto',
    country: 'Canada',
    location: 'Toronto, Ontario',
    province: 'Ontario',
    ranking: 1,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800&auto=format&fit=crop',
    description: 'A global leader in research and teaching, providing a diverse and comprehensive range of programs.',
    website: 'https://www.utoronto.ca',
    type: 'Public'
  },
  {
    id: 'u1',
    name: 'MIT',
    country: 'USA',
    location: 'Cambridge, MA',
    province: 'Massachusetts',
    ranking: 1,
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=800&auto=format&fit=crop',
    description: 'World-class research university known for physical sciences and engineering.',
    website: 'https://www.mit.edu',
    type: 'Private'
  },
  {
    id: 'g1',
    name: 'Technical University of Munich (TUM)',
    country: 'Germany',
    location: 'Munich',
    province: 'Bavaria',
    ranking: 1,
    image: 'https://images.unsplash.com/photo-1590422749805-4747209930cb?q=80&w=800&auto=format&fit=crop',
    description: 'One of Europe\'s leading research universities, with a strong focus on engineering and technology.',
    website: 'https://www.tum.de',
    type: 'Public'
  },
  {
    id: 'f1',
    name: 'Sorbonne University',
    country: 'France',
    location: 'Paris',
    province: 'Île-de-France',
    ranking: 1,
    image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=800&auto=format&fit=crop',
    description: 'A world-class research university, offering a multidisciplinary approach to education.',
    website: 'https://www.sorbonne-universite.fr',
    type: 'Public'
  },
  {
    id: 'i1',
    name: 'Politecnico di Milano',
    country: 'Italy',
    location: 'Milan',
    province: 'Lombardy',
    ranking: 1,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
    description: 'The largest technical university in Italy, known for Engineering and Architecture.',
    website: 'https://www.polimi.it',
    type: 'Public'
  }
];

// --- PROGRAMS ---
export const PROGRAMS: Program[] = [
  { id: 'p1', universityId: 'c1', universityName: 'University of Toronto', country: 'Canada', name: 'MSc Computer Science', degree: 'MSc', field: 'IT', tuition: 28000, currency: 'CAD', duration: '2 Years', intake: ['Fall'], ielts: 7.0 },
  { id: 'p2', universityId: 'u1', universityName: 'MIT', country: 'USA', name: 'MSc Artificial Intelligence', degree: 'MSc', field: 'AI', tuition: 55000, currency: 'USD', duration: '2 Years', intake: ['Fall'], ielts: 7.5, greRequired: true },
  { id: 'p3', universityId: 'g1', universityName: 'Technical University of Munich', country: 'Germany', name: 'MSc Robotics', degree: 'MSc', field: 'AI', tuition: 0, currency: 'EUR', duration: '2 Years', intake: ['Fall', 'Winter'], ielts: 6.5 },
  { id: 'p4', universityId: 'f1', universityName: 'Sorbonne University', country: 'France', name: 'MSc Data Science', degree: 'MSc', field: 'Data Science', tuition: 3770, currency: 'EUR', duration: '2 Years', intake: ['Fall'], ielts: 6.5 },
  { id: 'p5', universityId: 'i1', universityName: 'Politecnico di Milano', country: 'Italy', name: 'MSc Computer Engineering', degree: 'MSc', field: 'IT', tuition: 3500, currency: 'EUR', duration: '2 Years', intake: ['Fall'], ielts: 6.0 }
];

// --- SCHOLARSHIPS ---
export const SCHOLARSHIPS: Scholarship[] = [
  { id: 's1', name: 'Lester B. Pearson Scholarship', country: 'Canada', provider: 'University of Toronto', amount: 'Full Tuition + Living', deadline: 'Jan 15', eligibility: 'High academic achievement, leadership skills', type: 'Merit-based' },
  { id: 's2', name: 'DAAD Scholarship', country: 'Germany', provider: 'German Government', amount: '€934/month + Travel', deadline: 'Oct 31', eligibility: 'Graduates with at least 2 years work experience', type: 'DAAD' },
  { id: 's3', name: 'Eiffel Excellence Scholarship', country: 'France', provider: 'French Government', amount: '€1,181/month + Airfare', deadline: 'Jan 10', eligibility: 'Top international candidates', type: 'Eiffel' },
  { id: 's4', name: 'Invest Your Talent in Italy', country: 'Italy', provider: 'Italian Government', amount: '€8,100 + Tuition Waiver', deadline: 'Feb 15', eligibility: 'Engineering, Design, Management students', type: 'Merit-based' },
  { id: 's5', name: 'Fulbright Foreign Student Program', country: 'USA', provider: 'US Government', amount: 'Full Tuition + Stipend', deadline: 'Varies', eligibility: 'Young professionals and graduates', type: 'Research' }
];

// --- TESTIMONIALS ---
export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Sarah Ahmed', university: 'University of Toronto', country: 'Canada', program: 'MSc CS', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', quote: 'The AI assessment was spot on about my visa chances. Highly recommend!' },
  { id: 't2', name: 'Michael Chen', university: 'TUM', country: 'Germany', program: 'MSc Robotics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', quote: 'Free education in Germany seemed impossible until I found this guide.' }
];

// --- PROVINCE DATA ---
export const PROVINCE_DATA = [
  { name: 'Ontario', avgTuition: '$25,000 - $40,000', costOfLiving: 'High', prOpportunity: 'Medium' },
  { name: 'British Columbia', avgTuition: '$20,000 - $35,000', costOfLiving: 'High', prOpportunity: 'High' },
  { name: 'Alberta', avgTuition: '$15,000 - $25,000', costOfLiving: 'Medium', prOpportunity: 'High' },
  { name: 'Quebec', avgTuition: '$18,000 - $30,000', costOfLiving: 'Medium', prOpportunity: 'Medium' },
  { name: 'Nova Scotia', avgTuition: '$12,000 - $20,000', costOfLiving: 'Low', prOpportunity: 'High' }
];

// --- COUNTRY DETAILS DATA ---
export const COUNTRY_DETAILS_DATA: Record<string, CountryDetails> = {
  canada: {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    description: 'Renowned for high quality of life, diverse culture, and welcoming immigration policies.',
    features: [
      { icon: Briefcase, title: 'PGWP', desc: 'Up to 3 years work permit after graduation.' },
      { icon: ShieldCheck, title: 'Safe Haven', desc: 'Consistently ranked as one of the safest countries.' },
      { icon: GraduationCap, title: 'Quality Edu', desc: 'Home to top 100 world-ranked universities.' }
    ],
    visaSteps: [
      { step: 1, title: 'Get LOA', desc: 'Receive Letter of Acceptance from a DLI.' },
      { step: 2, title: 'Pay Fees', desc: 'Pay 1st year tuition and deposit GIC.' },
      { step: 3, title: 'Biometrics', desc: 'Complete biometrics at a local VAC.' }
    ],
    costs: [
      { label: 'Avg Tuition', value: '$20,000 - $35,000 CAD' },
      { label: 'Living Cost', value: '$15,000 CAD/year' },
      { label: 'GIC Deposit', value: '$20,635 CAD' }
    ],
    techStack: ['AI Research', 'Software Engineering', 'Biotech', 'Clean Energy']
  },
  usa: {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    description: 'The world leader in technology, innovation, and career opportunities for ambitious students.',
    features: [
      { icon: Laptop, title: 'Silicon Valley', desc: 'Unmatched networking with tech giants.' },
      { icon: Star, title: 'STEM OPT', desc: 'Up to 3 years work authorization for STEM.' },
      { icon: Globe, title: 'Diversity', desc: 'Truly global melting pot of ideas.' }
    ],
    visaSteps: [
      { step: 1, title: 'I-20 Form', desc: 'Receive I-20 from your admitted university.' },
      { step: 2, title: 'SEVIS Fee', desc: 'Pay the $350 SEVIS I-901 fee.' },
      { step: 3, title: 'F1 Interview', desc: 'Attend visa interview at the embassy.' }
    ],
    costs: [
      { label: 'Avg Tuition', value: '$30,000 - $60,000 USD' },
      { label: 'Living Cost', value: '$18,000 USD/year' },
      { label: 'Health Insurance', value: '$2,000 USD' }
    ],
    techStack: ['Cybersecurity', 'Big Data', 'Fintech', 'Aerospace']
  },
  germany: {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'The engineering powerhouse of Europe, offering world-class education with no tuition fees at public universities.',
    features: [
      { icon: DollarSign, title: 'Zero Tuition', desc: 'Public universities charge no tuition to anyone.' },
      { icon: BookOpen, title: 'Research', desc: 'Leading in automotive and green tech.' },
      { icon: Landmark, title: 'Blocked Account', desc: 'Proof of funds required for visa.' }
    ],
    visaSteps: [
      { step: 1, title: 'Admission', desc: 'Get your Zulassungsbescheid (admission).' },
      { step: 2, title: 'Blocked Acc', desc: 'Deposit €11,208 in a German blocked account.' },
      { step: 3, title: 'Insurance', desc: 'Secure German health insurance coverage.' }
    ],
    costs: [
      { label: 'Public Tuition', value: '€0 (Only Semester Fees)' },
      { label: 'Semester Fee', value: '€150 - €400' },
      { label: 'Living Cost', value: '€10,000 - €12,000/year' }
    ],
    techStack: ['Automotive', 'Mechatronics', 'Renewables', 'Industry 4.0']
  },
  france: {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    description: 'A hub of art, culture, and high-tech research with very affordable public university tuition.',
    features: [
      { icon: Award, title: 'Affordability', desc: 'Public tuition is highly subsidized.' },
      { icon: Users, title: 'Alumni Network', desc: 'Strong connections in European business.' },
      { icon: Clock, title: 'Post-Study', desc: '1-year APS permit for graduates.' }
    ],
    visaSteps: [
      { step: 1, title: 'Campus France', desc: 'Apply through the Etudes en France portal.' },
      { step: 2, title: 'Interview', desc: 'Attend a mandatory pedagogical interview.' },
      { step: 3, title: 'VLS-TS', desc: 'Apply for the long-stay student visa.' }
    ],
    costs: [
      { label: 'Public Tuition', value: '€2,770 - €3,770 (Non-EU)' },
      { label: 'Living Cost', value: '€8,000 - €12,000/year' },
      { label: 'Housing Aid', value: 'CAF Subsidy available' }
    ],
    techStack: ['Fashion Tech', 'AI', 'Mathematics', 'Gastronomy']
  },
  italy: {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    description: 'Blending historic academic excellence with modern technical innovation and unique scholarship opportunities.',
    features: [
      { icon: Wallet, title: 'DSU Grant', desc: 'Income-based scholarships for everyone.' },
      { icon: Landmark, title: 'Ancient Unis', desc: 'Study in the worlds oldest institutions.' },
      { icon: ShieldCheck, title: 'Quality Life', desc: 'The best food and Mediterranean lifestyle.' }
    ],
    visaSteps: [
      { step: 1, title: 'Universitaly', desc: 'Register and pre-enroll on Universitaly.' },
      { step: 2, title: 'DOV', desc: 'Get Declaration of Value from the consulate.' },
      { step: 3, title: 'Study Visa', desc: 'Apply for National Visa (Type D).' }
    ],
    costs: [
      { label: 'Avg Tuition', value: '€1,000 - €4,000/year' },
      { label: 'Living Cost', value: '€7,000 - €10,000/year' },
      { label: 'Scholarship', value: 'Up to €7,000/year grant' }
    ],
    techStack: ['Industrial Design', 'Automotive', 'Robotics', 'Architecture']
  }
};