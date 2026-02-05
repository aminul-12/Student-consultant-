import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap size={24} />
              <span className="font-bold text-xl">EduCanada</span>
            </div>
            <p className="text-sm text-slate-400">
              Helping students achieve their dreams of studying in Canada with expert guidance, from university selection to visa approval.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Search Programs</Link></li>
              <li><Link to="/universities" className="hover:text-white transition-colors">Universities</Link></li>
              <li><Link to="/study-in-canada" className="hover:text-white transition-colors">Visa Guide</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Admission Counseling</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Visa Assistance</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">SOP & Resume Writing</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Pre-departure Briefing</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-primary-400" />
                <span>123 Education Blvd,<br/>Toronto, ON, Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400" />
                <span>hello@educanada.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} EduCanada Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};