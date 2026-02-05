import { University, Program, Testimonial, ProvinceInfo } from './types';
import { BookOpen, Users, Award, Globe } from 'lucide-react';
import React from 'react';

export const UNIVERSITIES: University[] = [
  {
    id: '1',
    name: 'University of Toronto',
    location: 'Toronto, Ontario',
    province: 'Ontario',
    ranking: 1,
    image: 'https://picsum.photos/800/600?random=1',
    description: 'A global leader in research and teaching, providing a diverse and comprehensive range of programs.',
  },
  {
    id: '2',
    name: 'University of British Columbia',
    location: 'Vancouver, BC',
    province: 'British Columbia',
    ranking: 2,
    image: 'https://picsum.photos/800/600?random=2',
    description: 'A global centre for research and teaching, consistently ranked among the 40 best universities in the world.',
  },
  {
    id: '3',
    name: 'McGill University',
    location: 'Montreal, Quebec',
    province: 'Quebec',
    ranking: 3,
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Known for attracting the brightest students from across Canada and around the world.',
  },
  {
    id: '4',
    name: 'University of Waterloo',
    location: 'Waterloo, Ontario',
    province: 'Ontario',
    ranking: 7,
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Home to the world\'s largest co-operative education program.',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'p1',
    universityId: '1',
    universityName: 'University of Toronto',
    name: 'Computer Science',
    degree: 'BSc',
    field: 'IT',
    tuition: 58000,
    duration: '4 Years',
    intake: ['Fall', 'Winter'],
    ielts: 6.5,
  },
  {
    id: 'p2',
    universityId: '1',
    universityName: 'University of Toronto',
    name: 'Data Science Master',
    degree: 'MSc',
    field: 'AI',
    tuition: 42000,
    duration: '2 Years',
    intake: ['Fall'],
    ielts: 7.0,
  },
  {
    id: 'p3',
    universityId: '2',
    universityName: 'University of British Columbia',
    name: 'Business Administration',
    degree: 'BSc',
    field: 'Business',
    tuition: 45000,
    duration: '4 Years',
    intake: ['Fall', 'Summer'],
    ielts: 6.5,
  },
  {
    id: 'p4',
    universityId: '4',
    universityName: 'University of Waterloo',
    name: 'Software Engineering',
    degree: 'BSc',
    field: 'IT',
    tuition: 61000,
    duration: '5 Years (Co-op)',
    intake: ['Fall'],
    ielts: 7.0,
  },
  {
    id: 'p5',
    universityId: '3',
    universityName: 'McGill University',
    name: 'Cybersecurity Certificate',
    degree: 'Post-Grad',
    field: 'Cybersecurity',
    tuition: 22000,
    duration: '1 Year',
    intake: ['Fall', 'Winter', 'Summer'],
    ielts: 6.5,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Khan',
    university: 'University of Toronto',
    program: 'MSc Computer Science',
    image: 'https://picsum.photos/100/100?random=10',
    quote: 'EduCanada helped me navigate the complex visa process effortlessly. Now I am studying at my dream university!',
  },
  {
    id: 't2',
    name: 'Michael Chen',
    university: 'UBC',
    program: 'BSc Biology',
    image: 'https://picsum.photos/100/100?random=11',
    quote: 'The counselors were incredibly supportive. They matched me with the perfect program for my budget.',
  },
];

export const PROVINCE_DATA: ProvinceInfo[] = [
  { name: 'Ontario', avgTuition: '$35,000 - $60,000', costOfLiving: 'High', prOpportunity: 'Medium' },
  { name: 'British Columbia', avgTuition: '$30,000 - $50,000', costOfLiving: 'High', prOpportunity: 'Medium' },
  { name: 'Alberta', avgTuition: '$20,000 - $40,000', costOfLiving: 'Medium', prOpportunity: 'High' },
  { name: 'Nova Scotia', avgTuition: '$15,000 - $30,000', costOfLiving: 'Low', prOpportunity: 'High' },
];
