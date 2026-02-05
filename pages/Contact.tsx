import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

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
          <h1 className="text-3xl font-bold text-gray-900">Book Free Consultation</h1>
          <p className="text-gray-600 mt-2">Speak with our expert counselors to plan your study abroad journey.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-primary-900 p-8 md:p-12 text-white md:w-1/3">
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-primary-300" />
                <div>
                  <p className="text-sm text-primary-200">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-primary-300" />
                <div>
                  <p className="text-sm text-primary-200">Email</p>
                  <p className="font-medium">consult@educanada.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-primary-300" />
                <div>
                  <p className="text-sm text-primary-200">Office Hours</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <div className="relative">
                    <input type="text" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                    <User size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <div className="relative">
                     <input type="text" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                     <User size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input type="email" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                  <Mail size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <input type="tel" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                  <Phone size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <div className="relative">
                    <input type="date" required className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                    <Calendar size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Intended Intake</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none">
                    <option>Fall 2025</option>
                    <option>Winter 2026</option>
                    <option>Summer 2026</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"></textarea>
              </div>

              <Button type="submit" fullWidth size="lg">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};