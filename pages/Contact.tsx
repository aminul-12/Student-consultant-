
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h2>
          <p className="text-gray-600">Our counselor will contact you shortly to confirm your appointment time.</p>
          <Button className="mt-6" onClick={() => setSubmitted(false)}>Back to Form</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Book Free Consultation</h1>
          <p className="text-gray-600 mt-2">Speak with our expert counselors to plan your study abroad journey.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-primary-900 p-8 md:p-12 text-white md:w-1/3">
            <h3 className="text-xl font-bold mb-8">Contact Info</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-primary-300" />
                <div>
                  <p className="text-xs text-primary-300 uppercase font-bold tracking-wider mb-1">Office</p>
                  <p className="font-medium">Shahi-Edgha,RTM Aktu, Tv Gate<br/>Sylhet, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-primary-300" />
                <div>
                  <p className="text-xs text-primary-300 uppercase font-bold tracking-wider mb-1">Phone</p>
                  <a href="tel:+8801306466265" className="font-medium block hover:text-primary-200 transition-colors">+880 1306-466265</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-primary-300" />
                <div>
                  <p className="text-xs text-primary-300 uppercase font-bold tracking-wider mb-1">Email</p>
                  <a href="mailto:mdaminulislam3963@gmail.com" className="font-medium block hover:text-primary-200 transition-colors break-all text-sm">mdaminulislam3963@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-primary-300" />
                <div>
                  <p className="text-xs text-primary-300 uppercase font-bold tracking-wider mb-1">Hours</p>
                  <p className="font-medium">Mon - Fri: 9AM - 6PM</p>
                  <p className="font-medium">Sat: 10AM - 2PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <div className="relative">
                    <input type="text" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" />
                    <User size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <div className="relative">
                     <input type="text" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" />
                     <User size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input type="email" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" />
                  <Mail size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <input type="tel" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" />
                  <Phone size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                  <div className="relative">
                    <input type="date" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" />
                    <Calendar size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Intended Intake</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all cursor-pointer">
                    <option>Fall 2025</option>
                    <option>Winter 2026</option>
                    <option>Summer 2026</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all resize-none"></textarea>
              </div>

              <Button type="submit" fullWidth size="lg" className="rounded-xl py-4 shadow-lg shadow-primary-500/20">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
