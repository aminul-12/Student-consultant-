import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, FileText, CheckCircle, AlertCircle, Loader2, Award, Briefcase, GraduationCap, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { generateSOP, getProfileAssessment } from '../services/geminiService';
import { AiAssessmentResult } from '../types';

type Tab = 'assessment' | 'sop';

export const AiTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('assessment');

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Powered by Gemini AI
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Consultancy Tools</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leverage artificial intelligence to assess your admission chances, predict visa success, and draft professional documents.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('assessment')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'assessment' 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <BrainCircuit size={18} /> Profile & Visa Assessor
            </button>
            <button
              onClick={() => setActiveTab('sop')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'sop' 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <FileText size={18} /> SOP Generator
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'assessment' ? (
            <ProfileAssessmentSection key="assessment" />
          ) : (
            <SopGeneratorSection key="sop" />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

// --- Sub-components ---

const ProfileAssessmentSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiAssessmentResult | null>(null);
  const [formData, setFormData] = useState({
    cgpa: '',
    ielts: '',
    budget: '',
    country: 'Canada',
    field: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await getProfileAssessment(formData);
      setResult(res);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      {/* Input Form */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <BrainCircuit className="text-primary-600" /> Assessment Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CGPA (out of 4.0)</label>
              <input 
                type="number" step="0.01" required placeholder="e.g. 3.5"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                value={formData.cgpa} onChange={e => setFormData({...formData, cgpa: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">IELTS Score</label>
              <input 
                type="number" step="0.5" required placeholder="e.g. 7.0"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                value={formData.ielts} onChange={e => setFormData({...formData, ielts: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Annual Budget ($)</label>
            <input 
              type="number" required placeholder="e.g. 25000"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Country</label>
            <select 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})}
            >
              <option>Canada</option>
              <option>USA</option>
              <option>Germany</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Field of Interest</label>
            <input 
              type="text" required placeholder="e.g. Data Science"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              value={formData.field} onChange={e => setFormData({...formData, field: e.target.value})}
            />
          </div>
          
          <Button 
            type="submit" 
            fullWidth 
            size="lg" 
            className="mt-4"
            disabled={loading}
          >
            {loading ? <><Loader2 className="animate-spin mr-2" /> Analyzing Profile...</> : 'Analyze Profile'}
          </Button>
        </form>
      </div>

      {/* Results View */}
      <div className="space-y-6">
        {result ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Visa Probability Score */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
               <div className="flex justify-between items-start mb-6 relative z-10">
                 <div className="max-w-[65%]">
                   <h3 className="text-xl font-bold text-gray-900 mb-1">Visa Success Probability</h3>
                   <p className="text-gray-500 text-sm mb-4">{result.visaReason}</p>
                   
                   {/* Risk Factors */}
                   {result.visaRisks && result.visaRisks.length > 0 && (
                     <div className="mt-4">
                       <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                         <AlertTriangle size={12} className="text-orange-500" /> Potential Risks
                       </h4>
                       <ul className="space-y-1">
                         {result.visaRisks.map((risk, i) => (
                           <li key={i} className="text-sm text-red-500 flex items-start gap-2">
                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400"></span>
                             {risk}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}
                 </div>

                 {/* Circular Score */}
                 <div className="relative flex items-center justify-center w-28 h-28 rounded-full border-[6px] border-gray-50 shadow-inner bg-white">
                    <span className={`text-3xl font-extrabold ${
                      result.visaProbability > 75 ? 'text-green-600' : result.visaProbability > 50 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {result.visaProbability}%
                    </span>
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
                      <path
                        className={`${
                          result.visaProbability > 75 ? 'text-green-500' : result.visaProbability > 50 ? 'text-yellow-500' : 'text-red-500'
                        }`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${result.visaProbability}, 100`}
                        strokeLinecap="round"
                      />
                    </svg>
                 </div>
               </div>
               
               {/* Background decoration */}
               <div className={`absolute right-0 top-0 w-40 h-40 rounded-full blur-3xl opacity-10 -mr-10 -mt-10 ${
                 result.visaProbability > 75 ? 'bg-green-500' : 'bg-red-500'
               }`}></div>
            </div>

            {/* Eligibility Status */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-3 mb-3">
                 <div className={`p-2 rounded-lg ${
                   result.eligibility === 'High' ? 'bg-green-100 text-green-600' : 
                   result.eligibility === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                 }`}>
                   <Award size={20} />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900">Academic Eligibility: {result.eligibility}</h3>
               </div>
               <p className="text-gray-600 text-sm">
                 {result.eligibilityReason}
               </p>
            </div>

            {/* Recommendations */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="text-primary-600" /> AI Recommendations
              </h3>
              <div className="space-y-4">
                {result.recommendations.map((rec, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-colors">
                    <h4 className="font-bold text-gray-900">{rec.program}</h4>
                    <p className="text-primary-600 text-sm font-medium mb-1">{rec.university}</p>
                    <p className="text-xs text-gray-500">{rec.reason}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        ) : (
          <div className="h-full bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-12 text-center text-gray-400 min-h-[500px]">
            {loading ? (
              <div className="space-y-4">
                <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
                <p className="text-gray-500 font-medium">Analyzing Global Databases & Visa Rules...</p>
              </div>
            ) : (
              <>
                <BrainCircuit size={48} className="mb-4 text-gray-300" />
                <p className="max-w-xs mx-auto">Fill out the profile form to generate your detailed Visa & Eligibility Assessment.</p>
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SopGeneratorSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sop, setSop] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    university: '',
    background: '',
    goals: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const generatedText = await generateSOP(formData);
      setSop(generatedText || "Error generating SOP.");
    } catch (error) {
      alert("Failed to generate SOP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-fit">
         <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary-600" /> Application Details
         </h2>
         <form onSubmit={handleSubmit} className="space-y-5">
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
             <input 
               type="text" required
               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"
               value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
             />
           </div>
           <div className="grid grid-cols-2 gap-5">
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Target Course</label>
               <input 
                 type="text" required placeholder="MSc CS"
                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"
                 value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})}
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Target University</label>
               <input 
                 type="text" required
                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"
                 value={formData.university} onChange={e => setFormData({...formData, university: e.target.value})}
               />
             </div>
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Academic Background</label>
             <textarea 
               required rows={3} placeholder="e.g. BSc in CSE with 3.8 CGPA. Final year project on AI..."
               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"
               value={formData.background} onChange={e => setFormData({...formData, background: e.target.value})}
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Career Goals</label>
             <textarea 
               required rows={3} placeholder="e.g. To become a machine learning engineer and work on..."
               className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"
               value={formData.goals} onChange={e => setFormData({...formData, goals: e.target.value})}
             />
           </div>

           <Button type="submit" fullWidth size="lg" className="mt-4" disabled={loading}>
              {loading ? <><Loader2 className="animate-spin mr-2" /> Drafting SOP...</> : 'Generate SOP'}
           </Button>
         </form>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-[600px]">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-between">
           <span className="flex items-center gap-2"><FileText className="text-primary-600" /> Generated Draft</span>
           {sop && (
             <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(sop)}>
               Copy Text
             </Button>
           )}
        </h2>
        <div className="flex-1 bg-gray-50 rounded-xl p-6 overflow-y-auto border border-gray-200 font-serif text-gray-700 whitespace-pre-line leading-relaxed">
          {sop ? (
             sop
          ) : (
             <div className="h-full flex flex-col items-center justify-center text-gray-400">
               {loading ? (
                  <div className="w-12 h-12 border-4 border-gray-200 border-t-primary-600 rounded-full animate-spin"></div>
               ) : (
                  <>
                    <FileText size={48} className="mb-4 text-gray-300" />
                    <p>Enter details to generate your Statement of Purpose.</p>
                  </>
               )}
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};