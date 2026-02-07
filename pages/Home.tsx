import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Award, Globe, CheckCircle, Users, Briefcase, Zap, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';

// --- SUBCOMPONENTS ---
const TypingHeadline = ({ text }: { text: string }) => {
  const characters = Array.from(text);
  return (
    <motion.div className="flex flex-wrap justify-center">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: i * 0.03 }}
          className={char === " " ? "mr-4" : ""}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const GraduationCap = ({size, className}: {size: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
);

const DollarSign = ({size, className}: {size: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);

// --- MAIN COMPONENT ---
export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop" 
             alt="Global Education" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
           
           <motion.div 
             animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 20, repeat: Infinity }}
             className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]"
           />
           <motion.div 
             animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0], opacity: [0.2, 0.4, 0.2] }}
             transition={{ duration: 15, repeat: Infinity }}
             className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px]"
           />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-primary-300 text-sm font-bold mb-4 shadow-xl"
            >
              <Zap size={14} className="fill-current" /> Next-Gen Consultancy Platform
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] md:leading-[0.9]">
              <TypingHeadline text="Your Gateway to" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-300 to-indigo-400">Global Education</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Master-level guidance to top-tier universities in 
              <span className="text-white"> Canada, USA, Germany, France, and Italy</span>.
              Grounded in real-time Data analytics.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
            >
              <Link to="/programs">
                <Button size="lg" className="w-full sm:w-auto gap-3 py-6 px-10 bg-primary-600 hover:bg-primary-500 shadow-2xl shadow-primary-600/40 text-lg font-bold">
                  Explore Programs <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/ai-tools">
                <Button size="lg" variant="outline" className="w-full sm:w-auto py-6 px-10 text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm text-lg font-bold">
                  Start Our Agency Assessment
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative z-20 -mt-10 max-w-6xl mx-auto rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Students Placed', value: 120, suffix: '+', icon: <Users className="text-primary-500" /> },
            { label: 'Partner Institutions', value: 30, suffix: '+', icon: <Globe className="text-blue-500" /> },
            { label: 'Visa Success Rate', value: 18, suffix: '%', icon: <CheckCircle className="text-green-500" /> },
            { label: 'Scholarships Awarded', value: 15, suffix: '+', icon: <Award className="text-yellow-500" /> },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="space-y-3">
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-slate-50 rounded-2xl">{stat.icon}</div>
              </div>
              <div className="text-4xl font-black text-slate-900 tracking-tight">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Countries */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
             <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Global Destinations</h2>
             <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Strategic guidance tailored to specific immigration pathways.</p>
           </motion.div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { name: 'Canada', flag: '🇨🇦', path: '/study/canada', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=600&auto=format&fit=crop', color: 'bg-red-500' },
                { name: 'USA', flag: '🇺🇸', path: '/study/usa', img: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=600&auto=format&fit=crop', color: 'bg-blue-600' },
                { name: 'Germany', flag: '🇩🇪', path: '/study/germany', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop', color: 'bg-amber-500' },
                { name: 'France', flag: '🇫🇷', path: '/study/france', img: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=600&auto=format&fit=crop', color: 'bg-indigo-600' },
                { name: 'Italy', flag: '🇮🇹', path: '/study/italy', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop', color: 'bg-emerald-600' },
              ].map((c, i) => (
                <motion.div key={c.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link to={c.path} className="group block relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl transform transition-all hover:-translate-y-2">
                    <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-all"></div>
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${c.color} animate-pulse`} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Available</span>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                      <div className="text-4xl mb-3 transform transition-transform group-hover:scale-125 group-hover:-translate-y-1 origin-left duration-500">{c.flag}</div>
                      <h3 className="text-2xl font-black mb-1 tracking-tight">{c.name}</h3>
                      <div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-500 mb-4" />
                      <div className="flex items-center gap-2 text-primary-300 font-bold text-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Guide <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-24">
             <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Our Core Expertise</h2>
             <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full mb-8" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: 'Admission Strategy', desc: 'University selection based on your profile.', icon: <GraduationCap size={40} /> },
               { title: 'Visa Excellence', desc: 'Meticulous documentation and prep.', icon: <Briefcase size={40} /> },
               { title: 'Financial Assistance', desc: 'Unlocking grants and scholarships.', icon: <DollarSign size={40} /> }
             ].map((s, i) => (
               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary-200 transition-all">
                 <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary-600/20">{s.icon}</div>
                 <h3 className="text-2xl font-black text-gray-900 mb-4">{s.title}</h3>
                 <p className="text-gray-500 leading-relaxed font-medium">{s.desc}</p>
                 <div className="mt-8">
                   <Link to="/contact" className="text-primary-600 font-black text-sm flex items-center gap-2 group">
                     Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.01 }} className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl overflow-hidden relative">
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Ready to start your <br/><span className="text-primary-400">global journey?</span></h2>
              <p className="text-slate-400 text-xl max-w-xl mx-auto font-medium">Our advisors are standing by to help you map out your academic career.</p>
              <div className="pt-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 py-6 px-12 rounded-2xl text-xl font-black shadow-2xl">Book Free Consult</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};