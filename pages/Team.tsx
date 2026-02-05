import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { BadgeCheck, Code, Database, Layout, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const Team: React.FC = () => {
  const supervisor = TEAM_MEMBERS.find(m => m.isSupervisor);
  const students = TEAM_MEMBERS.filter(m => !m.isSupervisor);

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            CSE Final Year Project
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Contribution & Supervision</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Developed as part of the BSc in Computer Science & Engineering curriculum.
          </p>
        </div>

        {/* Supervisor Section */}
        {supervisor && (
          <div className="max-w-3xl mx-auto mb-20">
             <div className="flex items-center gap-4 mb-6">
               <div className="h-px bg-gray-200 flex-1"></div>
               <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Under Supervision Of</span>
               <div className="h-px bg-gray-200 flex-1"></div>
             </div>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row gap-8 items-center"
             >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-50 flex-shrink-0">
                  <img src={supervisor.image} alt={supervisor.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{supervisor.name}</h2>
                  <p className="text-primary-600 font-medium mb-4">{supervisor.designation}</p>
                  <div className="space-y-2">
                    {supervisor.contributions.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600 justify-center md:justify-start">
                        <BadgeCheck size={16} className="text-green-500" />
                        <span className="text-sm">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
             </motion.div>
          </div>
        )}

        {/* Team Grid */}
        <div className="mb-8">
           <div className="flex items-center gap-4 mb-10">
             <div className="h-px bg-gray-200 flex-1"></div>
             <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Development Team</span>
             <div className="h-px bg-gray-200 flex-1"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {students.map((member, idx) => (
               <motion.div 
                 key={member.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.15 }}
                 className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
               >
                 <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 flex justify-center relative">
                   <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-sm z-10">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-xs font-bold text-gray-500 shadow-sm">
                     {member.id === 'dev1' ? 'ID: 101' : member.id === 'dev2' ? 'ID: 102' : 'ID: 103'}
                   </div>
                 </div>
                 
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{member.name}</h3>
                   <p className="text-primary-600 text-sm font-medium text-center mb-6">{member.role}</p>

                   <div className="space-y-4">
                     <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                       <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-500 uppercase">
                         {member.id === 'dev1' ? <Layout size={14} /> : member.id === 'dev2' ? <Database size={14} /> : <Code size={14} />}
                         Key Modules
                       </div>
                       <ul className="space-y-1">
                         {member.contributions.slice(0, 3).map((con, i) => (
                           <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                             <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5"></div>
                             {con}
                           </li>
                         ))}
                       </ul>
                     </div>
                     
                     <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                       <span>Responsibility</span>
                       <span className="font-semibold text-gray-700">{member.techResponsibility}</span>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Acknowledgement */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 text-sm italic">
            "We express our sincere gratitude to our supervisor for his continuous guidance throughout the development of this Global Consultancy Platform. This project represents our cumulative learning in Full Stack Development."
          </p>
        </div>

      </div>
    </div>
  );
};
