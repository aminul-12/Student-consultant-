import React from 'react';
import { SCHOLARSHIPS } from '../constants';
import { Award, Calendar, DollarSign, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

export const Scholarships: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
            Financial Aid Available
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Scholarships & Grants</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fund your education with prestigious awards. We assist high-achieving students in securing merit and need-based scholarships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SCHOLARSHIPS.map((scholarship, idx) => (
            <motion.div 
              key={scholarship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                  <Award size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  scholarship.type === 'Merit-based' ? 'bg-purple-100 text-purple-700' :
                  scholarship.type === 'Need-based' ? 'bg-blue-100 text-blue-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {scholarship.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{scholarship.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{scholarship.provider}</p>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign size={16} className="text-green-600" />
                  <span className="font-bold text-gray-900">{scholarship.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} className="text-gray-400" />
                  <span>Deadline: {scholarship.deadline}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <BookOpen size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{scholarship.eligibility}</span>
                </div>
              </div>

              <Button variant="outline" fullWidth className="gap-2 mt-auto">
                Check Eligibility <ExternalLink size={16} />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-20 bg-primary-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-2xl font-bold mb-4">Tips for Scholarship Success</h3>
               <ul className="space-y-4">
                 {[
                   "Apply early! Many deadlines are 8-12 months before start date.",
                   "Highlight leadership and community service, not just grades.",
                   "Customize your essay for each specific award.",
                   "Secure strong reference letters from teachers who know you well."
                 ].map((tip, i) => (
                   <li key={i} className="flex gap-3">
                     <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                       {i + 1}
                     </div>
                     <span className="text-primary-100">{tip}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
               <h4 className="font-bold text-lg mb-2">Need Help with Applications?</h4>
               <p className="text-sm text-primary-200 mb-4">
                 Our expert counselors can help you identify high-value scholarships and edit your essays to perfection.
               </p>
               <Button className="bg-white text-primary-900 hover:bg-gray-100" fullWidth>
                 Book Scholarship Strategy Session
               </Button>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};