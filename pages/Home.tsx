import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Award, Briefcase, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { UNIVERSITIES, TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop" 
             alt="Global Students" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-36 md:pb-36 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-500/20 border border-primary-500/50 text-primary-300 text-sm font-semibold mb-4 backdrop-blur-sm">
              AI-Enabled Student Consultancy Platform
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Your Gateway to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-300">Global Education</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We guide you to the best universities in 
              <span className="text-white font-semibold"> Canada 🇨🇦, USA 🇺🇸, and Germany 🇩🇪</span>.
              Expert counseling for admissions, scholarships, and visas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/programs">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary-600 hover:bg-primary-500 border-none">
                  Find Programs <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:text-white">
                  Get Free Assessment
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Choose Your Destination</h2>
             <p className="text-gray-600 mt-2">Explore specific opportunities in our focus countries.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Canada', 
                  flag: '🇨🇦', 
                  path: '/study/canada', 
                  desc: 'High quality of life & direct PR pathways via PGWP.', 
                  img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=600&auto=format&fit=crop'
                },
                { 
                  name: 'USA', 
                  flag: '🇺🇸', 
                  path: '/study/usa', 
                  desc: 'Global tech hub with massive scholarship & funding.',
                  img: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=600&auto=format&fit=crop'
                },
                { 
                  name: 'Germany', 
                  flag: '🇩🇪', 
                  path: '/study/germany', 
                  desc: 'World-class engineering with low to zero tuition fees.',
                  img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop'
                },
              ].map(c => (
                <Link key={c.name} to={c.path} className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                   <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                   <div className="absolute bottom-0 left-0 p-8 text-white">
                     <div className="text-4xl mb-2">{c.flag}</div>
                     <h3 className="text-2xl font-bold mb-2">{c.name}</h3>
                     <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                       {c.desc}
                     </p>
                     <div className="flex items-center gap-2 text-primary-300 font-semibold text-sm">
                       Explore Hub <ArrowRight size={16} />
                     </div>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Partner Universities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with the most prestigious institutions across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UNIVERSITIES.slice(0, 3).map((uni, idx) => (
              <motion.div 
                key={uni.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                   <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold z-10">
                     {uni.country}
                   </span>
                  <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-sm text-primary-600 font-medium">
                    <Award size={16} /> Global Rank #{uni.ranking}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{uni.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                    <Globe size={14} /> {uni.location}
                  </p>
                  <Link to={`/universities`}>
                     <Button variant="outline" size="sm" fullWidth>View Details</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart AI-Driven Consultancy</h2>
              <div className="space-y-6">
                {[
                  { title: "Program Matcher", desc: "Input your CGPA and Budget to find the perfect fit." },
                  { title: "Scholarship Finder", desc: "Auto-match with DAAD, Fulbright, and Entrance awards." },
                  { title: "Visa Predictor", desc: "Assess your profile strength for F1, Study Permit, or German Visa." },
                  { title: "Document Checklist", desc: "Automated list for I-20, Block Account, and GIC." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-600 border border-primary-100">
                        <CheckCircle size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-200/50 rounded-3xl transform -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" 
                alt="AI Tech" 
                className="relative rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-900 rounded-3xl p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Ready to go Global?</h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Join 10,000+ students who have secured admissions in top tech universities.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                  Book Appointment Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};