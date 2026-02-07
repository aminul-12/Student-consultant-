
import React, { useState } from 'react';
import { UNIVERSITIES } from '../constants';
import { MapPin, ExternalLink, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Universities: React.FC = () => {
  const [filterCountry, setFilterCountry] = useState('All');

  const filteredUniversities = filterCountry === 'All' 
    ? UNIVERSITIES 
    : UNIVERSITIES.filter(u => u.country === filterCountry);

  return (
    <div className="bg-white min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner Universities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore top-ranked institutions in Canada, USA, Germany, France, and Italy.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['All', 'Canada', 'USA', 'Germany', 'France', 'Italy'].map(c => (
              <button 
                key={c}
                onClick={() => setFilterCountry(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filterCountry === c 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredUniversities.map((uni) => (
            <div key={uni.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto relative">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold shadow-sm flex items-center gap-1">
                   {uni.country === 'Canada' ? '🇨🇦' : uni.country === 'USA' ? '🇺🇸' : uni.country === 'Germany' ? '🇩🇪' : uni.country === 'France' ? '🇫🇷' : '🇮🇹'} Rank #{uni.ranking}
                </div>
                <div className="absolute bottom-4 left-4 bg-slate-900/80 text-white backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                  {uni.type} University
                </div>
              </div>
              
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{uni.name}</h2>
                    <div className="flex items-center gap-4 text-gray-500 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Globe size={16} />
                        <span>{uni.country}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{uni.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {uni.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <Link to="/programs">
                    <Button>View Tech Programs</Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open(uni.website, '_blank')}
                  >
                    Official Website <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
