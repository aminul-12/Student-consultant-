import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import { Button } from '../components/ui/Button';
import { Search, Filter, Clock, DollarSign, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const Programs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDegree, setSelectedDegree] = useState<string>('All');
  const [selectedField, setSelectedField] = useState<string>('All');

  const fields = ['All', 'IT', 'AI', 'Business', 'Cybersecurity', 'Health'];
  const degrees = ['All', 'Diploma', 'BSc', 'MSc', 'Post-Grad'];

  const filteredPrograms = PROGRAMS.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          program.universityName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDegree = selectedDegree === 'All' || program.degree === selectedDegree;
    const matchesField = selectedField === 'All' || program.field === selectedField;
    
    return matchesSearch && matchesDegree && matchesField;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Program</h1>
          <p className="text-gray-600 mt-2">Search through hundreds of programs available for international students.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-gray-900 font-semibold">
                <Filter size={20} /> Filters
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Program or University..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                    <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Degree Level</label>
                  <div className="space-y-2">
                    {degrees.map(degree => (
                      <label key={degree} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="degree" 
                          checked={selectedDegree === degree}
                          onChange={() => setSelectedDegree(degree)}
                          className="text-primary-600 focus:ring-primary-500 h-4 w-4 border-gray-300"
                        />
                        <span className="text-sm text-gray-600">{degree}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Field of Study</label>
                  <div className="flex flex-wrap gap-2">
                    {fields.map(field => (
                      <button
                        key={field}
                        onClick={() => setSelectedField(field)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedField === field 
                            ? 'bg-primary-100 text-primary-700' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {field}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
             <div className="mb-4 text-sm text-gray-500">
               Showing {filteredPrograms.length} programs
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {filteredPrograms.map((program) => (
                 <motion.div 
                   key={program.id}
                   layout
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                 >
                   <div className="flex justify-between items-start mb-4">
                     <div>
                       <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded mb-2 inline-block">
                         {program.degree}
                       </span>
                       <h3 className="font-bold text-lg text-gray-900 leading-tight">{program.name}</h3>
                       <p className="text-sm text-gray-500 mt-1">{program.universityName}</p>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4 my-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign size={16} className="text-gray-400" />
                        <span>${program.tuition.toLocaleString()}/yr</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} className="text-gray-400" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                         <BookOpen size={16} className="text-gray-400" />
                         <span>IELTS: {program.ielts}</span>
                      </div>
                   </div>

                   <div className="flex gap-3 mt-auto">
                     <Button fullWidth size="sm">Apply Now</Button>
                     <Button fullWidth size="sm" variant="outline">Details</Button>
                   </div>
                 </motion.div>
               ))}

               {filteredPrograms.length === 0 && (
                 <div className="col-span-full py-12 text-center text-gray-500">
                   No programs found matching your filters. Try adjusting your search.
                 </div>
               )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};