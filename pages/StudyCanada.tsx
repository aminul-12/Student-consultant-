import React from 'react';
import { PROVINCE_DATA } from '../constants';
import { Check, DollarSign, Calendar, Map, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const StudyCanada: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Study in Canada Guide</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to know about tuition, visas, intakes, and life in Canada.</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Intakes</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="font-bold text-gray-900 w-24">Fall:</span>
                <span className="text-gray-600">September (Primary intake, all programs)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900 w-24">Winter:</span>
                <span className="text-gray-600">January (Secondary intake, many programs)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900 w-24">Summer:</span>
                <span className="text-gray-600">May (Limited programs, mostly diplomas)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cost Overview (CAD)</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Diploma Tuition</span>
                <span className="font-bold text-gray-900">$15,000 - $25,000 /yr</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Bachelors Tuition</span>
                <span className="font-bold text-gray-900">$20,000 - $60,000 /yr</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Living Expenses</span>
                <span className="font-bold text-gray-900">$15,000 - $20,000 /yr</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span className="text-gray-600">GIC Requirement</span>
                <span className="font-bold text-green-600">$20,635</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Visa Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <div className="w-8 h-1 bg-primary-600 rounded-full"></div>
            Visa Process Steps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Offer Letter", desc: "Get acceptance from a DLI (Designated Learning Institution)." },
              { step: 2, title: "GIC & Fees", desc: "Pay 1-year tuition and deposit $20,635 into GIC account." },
              { step: 3, title: "Medical", desc: "Complete medical exam with approved panel physician." },
              { step: 4, title: "Application", desc: "Submit study permit application via IRCC portal." },
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary-50 text-primary-600 font-bold px-3 py-1 rounded-bl-xl text-sm">
                  Step 0{s.step}
                </div>
                <h3 className="font-bold text-lg mb-2 mt-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Province Comparison */}
        <div className="mb-16">
           <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <div className="w-8 h-1 bg-primary-600 rounded-full"></div>
            Province Comparison
          </h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-700">Province</th>
                  <th className="p-4 font-semibold text-gray-700">Avg Tuition</th>
                  <th className="p-4 font-semibold text-gray-700">Cost of Living</th>
                  <th className="p-4 font-semibold text-gray-700">PR Opportunity</th>
                </tr>
              </thead>
              <tbody>
                {PROVINCE_DATA.map((p, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">{p.name}</td>
                    <td className="p-4 text-gray-600">{p.avgTuition}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        p.costOfLiving === 'High' ? 'bg-red-100 text-red-700' : 
                        p.costOfLiving === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {p.costOfLiving}
                      </span>
                    </td>
                    <td className="p-4">
                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        p.prOpportunity === 'High' ? 'bg-green-100 text-green-700' : 
                        p.prOpportunity === 'Medium' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {p.prOpportunity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Work Permit */}
        <div className="bg-primary-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
           <div className="flex-1">
             <div className="flex items-center gap-3 mb-4">
               <Briefcase size={28} className="text-primary-300" />
               <h2 className="text-2xl font-bold">Post-Graduation Work Permit (PGWP)</h2>
             </div>
             <p className="text-primary-100 mb-6">
               International students who graduate from a designated learning institution (DLI) can apply for a PGWP. This open work permit allows you to gain valuable Canadian work experience.
             </p>
             <ul className="space-y-2 text-sm text-primary-200">
               <li className="flex items-center gap-2"><Check size={16} /> Up to 3 years duration depending on program length</li>
               <li className="flex items-center gap-2"><Check size={16} /> Open work permit (work for any employer)</li>
               <li className="flex items-center gap-2"><Check size={16} /> Helps in qualifying for Permanent Residence (Express Entry)</li>
             </ul>
           </div>
           <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-bold text-lg mb-4">Eligibility</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>1 Year Program</span>
                  <span className="font-mono bg-white/20 px-2 rounded">1 Year PWGP</span>
                </li>
                <li className="flex justify-between">
                  <span>2+ Year Program</span>
                  <span className="font-mono bg-white/20 px-2 rounded">3 Year PWGP</span>
                </li>
                <li className="flex justify-between">
                  <span>Masters Degree</span>
                  <span className="font-mono bg-white/20 px-2 rounded">3 Year PWGP</span>
                </li>
              </ul>
           </div>
        </div>

      </div>
    </div>
  );
};