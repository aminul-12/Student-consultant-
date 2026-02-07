
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { COUNTRY_DETAILS_DATA } from '../constants';
import { DollarSign, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export const CountryGuide: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();
  
  const data = COUNTRY_DETAILS_DATA[countryId?.toLowerCase() || ''];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-bounce">{data.flag}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Study in {data.name}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{data.description}</p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {data.features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="p-4 bg-primary-50 text-primary-600 rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Info Grid (Costs & Tech) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Estimated Costs</h3>
            </div>
            <ul className="space-y-4">
              {data.costs.map((cost, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                  <span className="text-gray-600">{cost.label}</span>
                  <span className="font-bold text-gray-900">{cost.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-slate-900 p-8 rounded-2xl shadow-sm text-white"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-white/10 text-white rounded-xl">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold">Top Tech Programs</h3>
            </div>
            <p className="text-slate-300 mb-6">
              {data.name} is a global leader in technology. We specialize in placing students in these high-demand fields:
            </p>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visa Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <div className="w-8 h-1 bg-primary-600 rounded-full"></div>
            {data.name} Visa Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.visaSteps.map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:border-primary-200 transition-colors">
                <div className="absolute top-0 right-0 bg-gray-100 text-gray-500 font-bold px-3 py-1 rounded-bl-xl text-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  Step 0{s.step}
                </div>
                <h3 className="font-bold text-lg mb-2 mt-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
