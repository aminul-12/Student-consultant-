import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Award, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { UNIVERSITIES, TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop" 
             alt="Students" 
             className="w-full h-full object-cover opacity-10"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="md:w-1/2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
                #1 Canada Education Consultants
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Study in Canada with <span className="text-primary-600">Expert Guidance</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 md:pr-10"
            >
              Navigate your journey to top Canadian universities. We provide end-to-end support for admission, visa, and settlement.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <Link to="/programs">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Find Programs <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Visa Success Rate</div>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-primary-500">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Partner Universities</div>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-primary-500">
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-primary-100">Students Placed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Canadian Universities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with the most prestigious institutions across Canada to provide you with world-class education opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {UNIVERSITIES.slice(0, 4).map((uni, idx) => (
              <motion.div 
                key={uni.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-sm text-primary-600 font-medium">
                    <Award size={16} /> Rank #{uni.ranking}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{uni.name}</h3>
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

      {/* Services/Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose EduCanada?</h2>
              <div className="space-y-6">
                {[
                  { title: "Expert Counseling", desc: "Certified counselors with 10+ years of experience in Canadian education." },
                  { title: "Visa Assistance", desc: "Complete guidance on study permit application and documentation." },
                  { title: "Scholarship Support", desc: "Help in identifying and applying for merit-based scholarships." },
                  { title: "Post-Landing Services", desc: "Airport pickup, accommodation assistance, and banking setup." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
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
              <div className="absolute -inset-4 bg-primary-100 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" 
                alt="Counseling" 
                className="relative rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Testimonials */}
       <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-primary-50" />
                <div>
                  <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-primary-600">{t.program} at {t.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary-900 rounded-3xl p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
              <p className="text-primary-200 mb-8 max-w-xl mx-auto">
                Book a free consultation today and let our experts guide you to your dream university in Canada.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                  Book Appointment Now
                </Button>
              </Link>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-700 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary-800 rounded-full opacity-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
};