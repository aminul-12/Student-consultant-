import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import { Button } from '../components/ui/Button';
import { Search, Filter, Clock, DollarSign, BookOpen, MapPin, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

export const Programs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedField, setSelectedField] = useState<string>('All');
  const [cgpa, setCgpa] = useState<string>('');
  const [maxBudget, setMaxBudget] = useState<string>('');

  const countries = ['All', 'Canada', 'USA', 'Germany', 'France', 'Italy'];
  const fields = ['All', 'IT', 'AI', 'Data Science', 'Software Engineering', 'Business', 'Health'];

  const filteredPrograms = PROGRAMS.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          program.universityName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'All' || program.country === selectedCountry;
    const matchesField = selectedField === 'All' || program.field === selectedField;
    
    // Simple mock budget logic
    const matchesBudget = !maxBudget || program.tuition <= parseInt(maxBudget);
    
    return matchesSearch && matchesCountry && matchesField && matchesBudget;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Program Search Engine</h1>
            <p className="text-gray-600 mt-2">AI-assisted matching for Tech & Engineering Masters.</p>
          </div>
          <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg border border-primary-100 text-primary-700 text-sm font-medium">
            <BrainCircuit size={18} />
            Smart Match Active
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6 text-gray-900 font-semibold border-b border-gray-100 pb-2">
                <Filter size={20} /> Smart Filters
              </div>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Keyword</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Computer Science"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                    <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>

                {/* Country Filter */}
                <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Destination</label>
                   <select 
                     value={selectedCountry}
                     onChange={(e) => setSelectedCountry(e.target.value)}
                     className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                   >
                     {countries.map(c => <option key={c} value={c}>{c}</option>)}
                   </select>
                </div>

                {/* Field Filter */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Discipline</label>
                  <div className="flex flex-wrap gap-2">
                    {fields.map(field => (
                      <button
                        key={field}
                        onClick={() => setSelectedField(field)}
                        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                          selectedField === field 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {field}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Student Profile Inputs */}
                <div className="pt-4 border-t border-gray-100">
                   <div className="mb-4">
                     <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Max Budget (Annual)</label>
                     <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-400 text-sm">$</span>
                        <input
                          type="number"
                          placeholder="e.g. 30000"
                          value={maxBudget}
                          onChange={(e) => setMaxBudget(e.target.value)}
                          className="w-full pl-7 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        />
                     </div>
                   </div>
                   
                   <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase mb-2">CGPA (Out of 4.0)</label>
                     <input
                        type="number"
                        step="0.1"
                        placeholder="e.g. 3.5"
                        value={cgpa}
                        onChange={(e) => setCgpa(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                   </div>
                </div>

              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
             <div className="mb-4 flex justify-between items-center">
               <span className="text-sm text-gray-500">Found {filteredPrograms.length} programs</span>
               {cgpa && parseFloat(cgpa) > 3.0 && (
                 <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium animate-pulse">
                   Excellent Profile! High Visa Chance.
                 </span>
               )}
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {filteredPrograms.map((program) => (
                 <motion.div 
                   key={program.id}
                   layout
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
                 >
                   <div className="absolute top-0 right-0 bg-gray-50 px-3 py-1 rounded-bl-xl border-l border-b border-gray-100 text-xs font-bold text-gray-500">
                     {program.country}
                   </div>

                   <div className="flex justify-between items-start mb-4">
                     <div>
                       <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded mb-2 inline-block">
                         {program.degree}
                       </span>
                       <h3 className="font-bold text-lg text-gray-900 leading-tight">{program.name}</h3>
                       <p className="text-sm text-gray-500 mt-1">{program.universityName}</p>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-y-4 gap-x-2 my-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign size={16} className="text-gray-400" />
                        <span className="font-medium">{program.currency} {program.tuition.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} className="text-gray-400" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                         <BookOpen size={16} className="text-gray-400" />
                         <span>IELTS: {program.ielts}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                         <MapPin size={16} className="text-gray-400" />
                         <span>{program.country}</span>
                      </div>
                   </div>

                   {/* Mock "Smart Match" indicator if CGPA is high */}
                   {cgpa && parseFloat(cgpa) >= 3.5 && (
                     <div className="mb-4 bg-green-50 text-green-700 text-xs px-3 py-2 rounded-lg flex items-center gap-2">
                       <Check size={14} /> 90% Match based on your profile
                     </div>
                   )}

                   <div className="flex gap-3 mt-auto">
                     <Button fullWidth size="sm">Check Eligibility</Button>
                     <Button fullWidth size="sm" variant="outline">Details</Button>
                   </div>
                 </motion.div>
               ))}

               {filteredPrograms.length === 0 && (
                 <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-dashed border-gray-300">
                   <p>No programs found matching these specific filters.</p>
                   <Button variant="ghost" onClick={() => {
                     setSearchTerm('');
                     setSelectedCountry('All');
                     setSelectedField('All');
                     setMaxBudget('');
                   }}>Clear All Filters</Button>
                 </div>
               )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Simple Check Icon component for local use
const Check = ({size}: {size: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);