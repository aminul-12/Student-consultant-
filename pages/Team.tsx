import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { BadgeCheck, GraduationCap, Linkedin, Mail, Sparkles, Phone, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Team: React.FC = () => {
  const supervisor = TEAM_MEMBERS.find(m => m.isSupervisor);
  const students = TEAM_MEMBERS.filter(m => !m.isSupervisor);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Premium Background Ambiance */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[160px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40">
        {/* Page Header - Professional Academic Tone */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl border border-white/10"
          >
            <Sparkles size={14} className="text-primary-400" /> Institutional Collaboration
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
            Our Team & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-600 via-blue-700 to-primary-900">
              Academic Supervision
            </span>
          </h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
            This project represents a synthesis of rigorous academic inquiry and modern systems engineering, 
            developed within the Department of Computer Science & Engineering.
          </p>
        </motion.div>

        {/* Lead Supervisor - Spotlight Card */}
        {supervisor && (
          <section className="mb-40">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative max-w-6xl mx-auto"
            >
              {/* Glassmorphism Decorative Rings */}
              <div className="absolute -top-16 -left-16 w-32 h-32 border-4 border-primary-100/30 rounded-full animate-spin-slow" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 border-2 border-indigo-100/40 rounded-full animate-reverse-spin" />

              <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col lg:flex-row gap-16 items-center group transition-all duration-700 hover:shadow-primary-100/50">
                <div className="relative flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white ring-1 ring-slate-100"
                  >
                    <img 
                      src={supervisor.image} 
                      alt={supervisor.name} 
                      className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000" 
                    />
                  </motion.div>
                  <div className="absolute -inset-8 bg-primary-600/5 rounded-[4rem] blur-3xl group-hover:bg-primary-600/10 transition-colors" />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                    <div className="p-3 bg-primary-600 text-white rounded-2xl shadow-xl shadow-primary-600/40">
                      <GraduationCap size={24} />
                    </div>
                    <span className="text-primary-600 font-black text-xs uppercase tracking-[0.3em]">Lead Supervisor</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-primary-700 transition-colors">
                    {supervisor.name}
                  </h2>
                  <div className="space-y-1 mb-8">
                    <p className="text-2xl text-slate-700 font-bold">{supervisor.designation}</p>
                    <p className="text-slate-400 font-semibold tracking-tight uppercase text-xs">{supervisor.department}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {supervisor.contributions.map((c, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-4 bg-slate-50/50 p-5 rounded-2xl border border-slate-100 group-hover:bg-white transition-all"
                      >
                        <ShieldCheck size={24} className="text-primary-600" />
                        <span className="text-sm font-black text-slate-800 tracking-tight">{c}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a 
                      href={`tel:${supervisor.phone?.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-primary-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
                    >
                      <Phone size={18} /> {supervisor.phone}
                    </a>
                    <div className="flex gap-2">
                       <a href="#" className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:text-primary-600 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                        <Linkedin size={20} />
                      </a>
                      <a href={`mailto:${supervisor.email}`} className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:text-primary-600 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Student Development Team Section */}
        <section>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20"
          >
            <div className="max-w-xl">
              <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4 uppercase">
                Student Research & <span className="text-primary-600">Development</span> Team
              </h3>
              <p className="text-slate-500 font-bold leading-relaxed">
                "We are three CSE final year students working under the academic supervision of Abdullah Rajib."
              </p>
            </div>
            <div className="hidden lg:block h-px flex-1 bg-slate-200 mx-12" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {students.map((member) => (
              <motion.div 
                key={member.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-500 hover:shadow-primary-100/40 hover:border-primary-100"
              >
                {/* ID Tag */}
                <div className="absolute top-6 left-6 z-30 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-slate-900 shadow-xl border border-white">
                  ID: {member.studentId}
                </div>

                <div className="relative h-72 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-contain p-4 transition-all duration-1000" 
                  />
                  <a 
                    href={`tel:${member.phone?.replace(/\s/g, '')}`}
                    className="absolute bottom-6 left-6 right-6 z-20 bg-white text-slate-900 py-3 rounded-2xl flex items-center justify-center gap-2 font-black text-xs shadow-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hover:bg-primary-600 hover:text-white"
                  >
                    <Phone size={14} /> {member.phone}
                  </a>
                </div>
                
                <div className="p-10">
                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-slate-900 mb-1 tracking-tighter group-hover:text-primary-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 text-[10px] font-black uppercase tracking-[0.2em]">{member.role}</p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-slate-50">
                    <div className="flex flex-wrap gap-2">
                      {member.contributions.map((con, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-black rounded-lg border border-slate-100 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                          {con}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                       <div className="flex gap-3">
                         <a href="#" className="text-slate-300 hover:text-primary-600 transition-all hover:scale-125" title="LinkedIn"><Linkedin size={18} /></a>
                         {member.email && (
                           <a href={`mailto:${member.email}`} className="text-slate-300 hover:text-primary-600 transition-all hover:scale-125" title="Email">
                             <Mail size={18} />
                           </a>
                         )}
                         {member.portfolio && (
                           <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary-600 transition-all hover:scale-125" title="Portfolio">
                             <ExternalLink size={18} />
                           </a>
                         )}
                       </div>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">{member.techResponsibility}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Bottom Professional Credit */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-slate-900 px-10 py-12 rounded-[3rem] text-white shadow-3xl max-w-4xl">
             <div className="p-5 bg-white/10 rounded-full flex-shrink-0">
               <Heart className="text-primary-400 fill-primary-400 animate-pulse" size={32} />
             </div>
             <p className="text-left text-slate-300 font-bold leading-relaxed text-lg">
                "Developed with precision and academic integrity by the CSE Research Team. We thank the Department for the 
                technological resources and leadership that made this platform a reality."
             </p>
          </div>
          <div className="mt-12 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] flex justify-center items-center gap-6">
             <span>Copyright © 2024 CSE Research Repository</span>
             <span className="w-1 h-1 bg-primary-600 rounded-full" />
             <span>Verified Project Artifact</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </div>
  );
};