import { University, Program, Testimonial, Scholarship, TeamMember, CountryDetails } from './types';
import { BookOpen, Users, Award, Globe, DollarSign, Clock, CheckCircle, Briefcase, FileText, Landmark } from 'lucide-react';
import React from 'react';

// --- TEAM DATA ---
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sup1',
    name: 'Abdullah Rajib',
    role: 'Project Supervisor',
    gender: 'Male',
    designation: 'Assistant Professor, Dept of CSE',
    image: 'https://ui-avatars.com/api/?name=Abdullah+Rajib&background=0f172a&color=fff',
    contributions: ['Academic Supervision', 'Project Guidance', 'Requirement Analysis'],
    techResponsibility: 'System Oversight',
    isSupervisor: true
  },
  {
    id: 'dev1',
    name: 'Aminul Islam',
    role: 'Full Stack Developer',
    gender: 'Male',
    image: '/aminul-islam.jpg',
    contributions: ['System architecture design', 'React frontend modules', 'Student dashboard', 'Program search engine', 'API integration'],
    techResponsibility: 'Architecture & Integration'
  },
  {
    id: 'dev2',
    name: 'Ifthekar',
    role: 'Backend & Database Developer',
    gender: 'Male',
    image: 'https://ui-avatars.com/api/?name=Ifthekar&background=4f46e5&color=fff',
    contributions: ['Node.js & Express backend', 'MongoDB schema design', 'Authentication & role system', 'Admin APIs', 'Document system'],
    techResponsibility: 'Backend & DB'
  },
  {
    id: 'dev3',
    name: 'Tasnia Jannath',
    role: 'Frontend & UI/UX Developer',
    gender: 'Female',
    image: 'https://ui-avatars.com/api/?name=Tasnia+Jannath&background=ec4899&color=fff',
    contributions: ['UI/UX design system', 'Responsive layouts', 'Dashboard components', 'Forms & interaction design', 'Accessibility & usability'],
    techResponsibility: 'UI/UX & Design'
  }
];

// --- UNIVERSITIES ---
export const UNIVERSITIES: University[] = [
  // Canada
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
    id: 'c2',
    name: 'University of British Columbia',
    country: 'Canada',
    location: 'Vancouver, BC',
    province: 'British Columbia',
    ranking: 2,
    image: 'https://images.unsplash.com/photo-1592305098197-2a6230f3a675?q=80&w=800&auto=format&fit=crop',
    description: 'A global centre for research and teaching, consistently ranked among the 40 best universities in the world.',
    website: 'https://www.ubc.ca',
    type: 'Public'
  },
  // USA
  {
    id: 'u1',
    name: 'Massachusetts Institute of Technology (MIT)',
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
    id: 'u2',
    name: 'Stanford University',
    country: 'USA',
    location: 'Stanford, CA',
    province: 'California',
    ranking: 2,
    image: 'https://images.unsplash.com/photo-1627964177202-9a6741762c90?q=80&w=800&auto=format&fit=crop',
    description: 'Known for its academic strength, wealth, proximity to Silicon Valley, and ranking as one of the world\'s top universities.',
    website: 'https://www.stanford.edu',
    type: 'Private'
  },
  // Germany
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
    id: 'g2',
    name: 'RWTH Aachen University',
    country: 'Germany',
    location: 'Aachen',
    province: 'North Rhine-Westphalia',
    ranking: 3,
    image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=800&auto=format&fit=crop',
    description: 'The largest technical university in Germany and one of the most renowned in Europe.',
    website: 'https://www.rwth-aachen.de',
    type: 'Public'
  }
];

// --- PROGRAMS ---
export const PROGRAMS: Program[] = [
  // Canada Programs
  {
    id: 'p1',
    universityId: 'c1',
    universityName: 'University of Toronto',
    country: 'Canada',
    name: 'MSc Computer Science',
    degree: 'MSc',
    field: 'IT',
    tuition: 28000,
    currency: 'CAD',
    duration: '2 Years',
    intake: ['Fall', 'Winter'],
    ielts: 7.0,
  },
  {
    id: 'p2',
    universityId: 'c2',
    universityName: 'UBC',
    country: 'Canada',
    name: 'Master of Data Science',
    degree: 'MSc',
    field: 'Data Science',
    tuition: 45000,
    currency: 'CAD',
    duration: '10 Months',
    intake: ['Fall'],
    ielts: 7.0,
  },
  // USA Programs
  {
    id: 'p3',
    universityId: 'u1',
    universityName: 'MIT',
    country: 'USA',
    name: 'MSc Artificial Intelligence',
    degree: 'MSc',
    field: 'AI',
    tuition: 57000,
    currency: 'USD',
    duration: '2 Years',
    intake: ['Fall'],
    ielts: 7.5,
    greRequired: true
  },
  {
    id: 'p4',
    universityId: 'u2',
    universityName: 'Stanford',
    country: 'USA',
    name: 'MS Software Engineering',
    degree: 'MSc',
    field: 'Software Engineering',
    tuition: 62000,
    currency: 'USD',
    duration: '2 Years',
    intake: ['Fall'],
    ielts: 7.5,
    greRequired: true
  },
  // Germany Programs
  {
    id: 'p5',
    universityId: 'g1',
    universityName: 'TUM',
    country: 'Germany',
    name: 'MSc Informatics (Computer Science)',
    degree: 'MSc',
    field: 'IT',
    tuition: 0,
    currency: 'EUR',
    duration: '2 Years',
    intake: ['Winter', 'Summer'],
    ielts: 6.5,
  },
  {
    id: 'p6',
    universityId: 'g2',
    universityName: 'RWTH Aachen',
    country: 'Germany',
    name: 'MSc Data Science',
    degree: 'MSc',
    field: 'Data Science',
    tuition: 0,
    currency: 'EUR',
    duration: '2 Years',
    intake: ['Winter'],
    ielts: 6.5,
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 's1',
    name: 'Vanier Canada Graduate Scholarships',
    country: 'Canada',
    provider: 'Govt of Canada',
    amount: '$50,000 / year',
    deadline: 'Nov 1, 2025',
    eligibility: 'Doctoral research & leadership.',
    type: 'Research'
  },
  {
    id: 's2',
    name: 'Fulbright Foreign Student Program',
    country: 'USA',
    provider: 'USA Gov',
    amount: 'Full Funding',
    deadline: 'Oct 11, 2025',
    eligibility: 'Graduate students, young professionals.',
    type: 'Merit-based'
  },
  {
    id: 's3',
    name: 'DAAD Scholarship',
    country: 'Germany',
    provider: 'DAAD',
    amount: '€861 / month',
    deadline: 'Varies',
    eligibility: 'Graduates from developing countries.',
    type: 'DAAD'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Khan',
    university: 'U of Toronto',
    country: 'Canada',
    program: 'MSc CS',
    image: 'https://ui-avatars.com/api/?name=Sarah+Khan&background=random',
    quote: 'The PGWP opportunities in Canada are amazing. The team helped me secure my visa effortlessly.',
  },
  {
    id: 't2',
    name: 'John Doe',
    university: 'TUM',
    country: 'Germany',
    program: 'Informatics',
    image: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
    quote: 'Studying tuition-free in Germany was a dream come true. The block account guidance was crucial.',
  },
];

// --- PROVINCE DATA ---
export const PROVINCE_DATA = [
  { name: 'Ontario', avgTuition: 'CAD 35,000', costOfLiving: 'High', prOpportunity: 'Medium' },
  { name: 'British Columbia', avgTuition: 'CAD 32,000', costOfLiving: 'High', prOpportunity: 'Medium' },
  { name: 'Alberta', avgTuition: 'CAD 22,000', costOfLiving: 'Medium', prOpportunity: 'High' },
  { name: 'Quebec', avgTuition: 'CAD 20,000', costOfLiving: 'Medium', prOpportunity: 'High' },
  { name: 'Nova Scotia', avgTuition: 'CAD 19,000', costOfLiving: 'Low', prOpportunity: 'High' },
  { name: 'Manitoba', avgTuition: 'CAD 17,000', costOfLiving: 'Low', prOpportunity: 'High' },
  { name: 'Saskatchewan', avgTuition: 'CAD 16,000', costOfLiving: 'Low', prOpportunity: 'High' },
];

// --- DYNAMIC COUNTRY CONTENT ---
export const COUNTRY_DETAILS_DATA: Record<string, CountryDetails> = {
  canada: {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    description: 'Known for its high-quality education, welcoming environment, and straightforward path to permanent residency via PGWP.',
    techStack: ['AI', 'Cybersecurity', 'Data Science', 'Software Engineering'],
    features: [
      { icon: Briefcase, title: 'PGWP & PR', desc: 'Up to 3 years open work permit after graduation.' },
      { icon: DollarSign, title: 'Tuition', desc: 'Moderate tuition fees compared to US/UK.' },
      { icon: Users, title: 'Multicultural', desc: 'One of the most diverse and welcoming nations.' }
    ],
    visaSteps: [
      { step: 1, title: 'Offer Letter', desc: 'Get acceptance from a DLI (Designated Learning Institution).' },
      { step: 2, title: 'GIC ($20,635)', desc: 'Secure Guaranteed Investment Certificate for living expenses.' },
      { step: 3, title: 'Study Permit', desc: 'Apply via IRCC portal with medicals and biometrics.' }
    ],
    costs: [
      { label: 'Avg Tuition (Masters)', value: 'CAD 20k - 45k /yr' },
      { label: 'Living Cost', value: 'CAD 15k - 20k /yr' },
      { label: 'GIC Requirement', value: 'CAD 20,635' }
    ]
  },
  usa: {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    description: 'Home to the world\'s top-ranked universities and the global hub for technology and innovation.',
    techStack: ['Computer Science', 'AI', 'Machine Learning', 'Cloud Computing'],
    features: [
      { icon: Briefcase, title: 'OPT / CPT', desc: 'Work up to 3 years on STEM OPT after graduation.' },
      { icon: Award, title: 'Funding', desc: 'High chances of RA/TA (Assistantships) for research profiles.' },
      { icon: Globe, title: 'Innovation', desc: 'Proximity to Silicon Valley and tech giants.' }
    ],
    visaSteps: [
      { step: 1, title: 'I-20 Form', desc: 'Receive I-20 from the university after financial proof.' },
      { step: 2, title: 'SEVIS Fee', desc: 'Pay the SEVIS I-901 fee.' },
      { step: 3, title: 'DS-160 & Interview', desc: 'Submit DS-160 and attend high-stakes embassy interview.' }
    ],
    costs: [
      { label: 'Avg Tuition (Private)', value: 'USD 40k - 60k /yr' },
      { label: 'Avg Tuition (Public)', value: 'USD 25k - 40k /yr' },
      { label: 'Living Cost', value: 'USD 15k - 25k /yr' }
    ]
  },
  germany: {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'The land of ideas offering world-class engineering education with little to no tuition fees at public universities.',
    techStack: ['Embedded Systems', 'Automotive', 'AI', 'Data Science'],
    features: [
      { icon: DollarSign, title: 'Low/No Tuition', desc: 'Public universities charge only semester contribution (€200-€500).' },
      { icon: Briefcase, title: 'Job Seeker Visa', desc: '18-month post-study visa to find a job.' },
      { icon: BookOpen, title: 'English Programs', desc: 'Many Masters programs in Tech are taught in English.' }
    ],
    visaSteps: [
      { step: 1, title: 'Admission', desc: 'Secure admission (Zulassung) from a German university.' },
      { step: 2, title: 'Block Account', desc: 'Deposit ~€11,208 into a blocked bank account.' },
      { step: 3, title: 'Visa Interview', desc: 'Apply at the German mission in your country.' }
    ],
    costs: [
      { label: 'Tuition (Public)', value: '€0 - €3,000 /yr' },
      { label: 'Semester Contribution', value: '€200 - €800 /yr' },
      { label: 'Living Cost (Block Acc)', value: '€11,208 /yr' }
    ]
  }
};