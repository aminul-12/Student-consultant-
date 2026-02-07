
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Globe size={24} className="text-primary-500" />
              <span className="font-bold text-xl tracking-tight">GlobalStudy</span>
            </div>
            <p className="text-sm text-slate-400">
              Your gateway to international education. Expert guidance for Canada, USA, Germany, France, and Italy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Search Programs</Link></li>
              <li><Link to="/universities" className="hover:text-white transition-colors">Universities</Link></li>
              <li><Link to="/scholarships" className="hover:text-white transition-colors">Scholarships</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Admission Counseling</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Visa Assistance</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">SOP & Resume Writing</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Pre-departure Briefing</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-primary-400" />
                <span>Shahi-Edgha,RTM Aktu,Tv Gate,<br/>Sylhet, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:+8801306466265" className="hover:text-white transition-colors">+880 1306-466265</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400" />
                <a href="mailto:mdaminulislam3963@gmail.com" className="hover:text-white transition-colors break-all">mdaminulislam3963@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} GlobalStudy Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
