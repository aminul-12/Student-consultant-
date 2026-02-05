import React from 'react';
import { UNIVERSITIES } from '../constants';
import { MapPin, Award, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Universities: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner Universities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Canada's top-ranked institutions. We are official partners with over 500+ DLI colleges and universities.
          </p>
        </div>

        <div className="space-y-8">
          {UNIVERSITIES.map((uni) => (
            <div key={uni.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto relative">
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                  Rank #{uni.ranking}
                </div>
              </div>
              
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{uni.name}</h2>
                    <div className="flex items-center gap-2 text-gray-500 mt-1">
                      <MapPin size={18} />
                      <span>{uni.location}</span>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                     <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                       Public University
                     </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {uni.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <Button>View Programs</Button>
                  <Button variant="outline" className="gap-2">
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