import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, FileText, CheckCircle, AlertCircle, Loader2, Award, Briefcase, GraduationCap, TriangleAlert, ExternalLink, Sparkles, Upload, X, Check, FileUp, Info, ShieldCheck, ListChecks, Lightbulb } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { generateSOP, getProfileAssessment, extractInfoFromCV } from '../services/geminiService';
import { AiAssessmentResult, ExtractedCvData } from '../types';

type Tab = 'assessment' | 'sop';

export const AiTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('assessment');
  const [extractedData, setExtractedData] = useState<ExtractedCvData | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-900 text-primary-100 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl border border-white/10"
          >
            <Sparkles size={14} className="text-primary-400" /> Proprietary Intelligence Engine
          </motion.div>
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">GlobalStudy <span className="text-primary-600">SmartTools</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Advanced analytics grounded in real-time immigration data and global education trends.
          </p>
        </div>

        {/* Global CV Upload Section */}
        <div className="mb-16">
           <ResumeUpload onDataExtracted={setExtractedData} />
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('assessment')}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-wider transition-all ${
                activeTab === 'assessment' 
                  ? 'bg-primary-600 text-white shadow-2xl shadow-primary-500/30' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              <BrainCircuit size={18} /> Profile Assessor
            </button>
            <button
              onClick={() => setActiveTab('sop')}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-wider transition-all ${
                activeTab === 'sop' 
                  ? 'bg-primary-600 text-white shadow-2xl shadow-primary-500/30' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              <FileText size={18} /> SOP Synthesizer
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'assessment' ? (
            <ProfileAssessmentSection key="assessment" prefill={extractedData} />
          ) : (
            <SopGeneratorSection key="sop" prefill={extractedData} />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

// --- Sub-components ---

const ResumeUpload: React.FC<{ onDataExtracted: (data: ExtractedCvData | null) => void }> = ({ onDataExtracted }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [extractedInfo, setExtractedInfo] = useState<ExtractedCvData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = async (file: File) => {
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      alert("Format not supported. Please upload a PDF or high-quality Image.");
      return;
    }

    setFileName(file.name);
    setIsUploading(true);
    setIsSuccess(false);
    setExtractedInfo(null);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(',')[1];
        const extracted = await extractInfoFromCV(base64, file.type);
        setExtractedInfo(extracted);
        onDataExtracted(extracted);
        setIsSuccess(true);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      alert("Document analysis failed. Please ensure the text is legible.");
      setIsUploading(false);
      setFileName(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const handleRemove = () => {
    setFileName(null);
    setIsSuccess(false);
    setExtractedInfo(null);
    onDataExtracted(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`group relative bg-white rounded-[2.5rem] p-10 border-2 border-dashed transition-all duration-500 ${
        isDragging ? 'border-primary-600 bg-primary-50 scale-[1.01]' :
        isSuccess ? 'border-green-300 bg-green-50/20' : 
        isUploading ? 'border-primary-300 bg-primary-50/10' : 
        'border-slate-200 hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-100'
      }`}>
        <div className="flex flex-col md:flex-row items-center gap-10">
           <div className={`p-8 rounded-[2rem] shadow-2xl transition-all duration-500 transform ${
             isSuccess ? 'bg-green-600 text-white scale-110' : 'bg-slate-900 text-white group-hover:bg-primary-600'
           }`}>
             {isUploading ? <Loader2 className="animate-spin" size={40} /> : isSuccess ? <Check size={40} /> : <FileUp size={40} />}
           </div>

           <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {isSuccess ? 'Intelligent Analysis Complete' : 'Smart CV Integration'}
                </h3>
                <div className="group/info relative">
                  <Info size={16} className="text-slate-300 cursor-help hover:text-primary-500 transition-colors" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-slate-900 text-white text-[10px] p-4 rounded-2xl opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all z-50 shadow-2xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-primary-400 font-bold uppercase tracking-widest">
                      <ShieldCheck size={12} /> Privacy Guaranteed
                    </div>
                    Data is extracted in real-time for session pre-filling only. We adhere to professional academic data standards.
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-sm font-bold leading-relaxed">
                {isSuccess 
                  ? `Engine has parsed "${fileName}". Use the tools below to view your results.` 
                  : 'Drag & Drop your Resume. Our local engine will extract your background, skills, and goals.'}
              </p>
           </div>

           <div className="flex flex-col gap-3 min-w-[160px]">
              {fileName ? (
                <Button variant="outline" className="gap-2 border-red-100 text-red-600 hover:bg-red-50 font-black text-xs uppercase" onClick={handleRemove}>
                  <X size={14} /> Remove File
                </Button>
              ) : (
                <Button className="gap-2 shadow-2xl shadow-primary-500/20 py-4 font-black text-xs uppercase tracking-widest" onClick={() => fileInputRef.current?.click()}>
                   <Upload size={14} /> Upload CV
                </Button>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleFileChange}
              />
              <p className="text-[10px] text-slate-400 text-center font-black uppercase tracking-tighter">PDF or Image (Max 5MB)</p>
           </div>
        </div>
      </div>

      {/* Suggested Improvements Section */}
      <AnimatePresence>
        {isSuccess && extractedInfo?.suggestedImprovements && extractedInfo.suggestedImprovements.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-primary-900 rounded-[2rem] p-8 text-white shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-xl"><Lightbulb className="text-yellow-400" size={24} /></div>
              <h3 className="text-xl font-black tracking-tight">AI Academic Feedback</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extractedInfo.suggestedImprovements.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                  <p className="text-xs font-bold text-primary-100 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProfileAssessmentSection: React.FC<{ prefill: ExtractedCvData | null }> = ({ prefill }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiAssessmentResult | null>(null);
  const [formData, setFormData] = useState({
    cgpa: '',
    ielts: '',
    budget: '',
    country: 'Canada',
    field: ''
  });

  React.useEffect(() => {
    if (prefill) {
      setFormData(prev => ({
        ...prev,
        cgpa: prefill.cgpa?.toString() || prev.cgpa,
        ielts: prefill.ielts?.toString() || prev.ielts,
        field: prefill.fieldOfStudy || prev.field,
        country: prefill.detectedCountryPreference || prev.country
      }));
    }
  }, [prefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await getProfileAssessment(formData);
      setResult(res);
    } catch (error) {
      alert("Proprietary engine connection failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
    >
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <BrainCircuit size={200} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3 tracking-tight">
          <div className="p-2 bg-primary-100 text-primary-600 rounded-xl"><BrainCircuit size={24} /></div>
          Data Parameters
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Academic CGPA</label>
              <input 
                type="number" step="0.01" min="0" max="4.0" required placeholder="0.00"
                className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-black text-xl"
                value={formData.cgpa} onChange={e => setFormData({...formData, cgpa: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">IELTS Overall</label>
              <input 
                type="number" step="0.1" min="0" max="9.0" required placeholder="0.0"
                className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-black text-xl"
                value={formData.ielts} onChange={e => setFormData({...formData, ielts: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Tuition Budget (USD)</label>
            <input 
              type="number" min="0" step="500" required placeholder="Annual Budget"
              className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-black text-xl"
              value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}
            />
          </div>

          <div className="space-y-3">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Destination Priority</label>
            <select 
              className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-black text-lg cursor-pointer appearance-none"
              value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})}
            >
              <option value="Canada">Canada 🇨🇦</option>
              <option value="USA">USA 🇺🇸</option>
              <option value="Germany">Germany 🇩🇪</option>
              <option value="France">France 🇫🇷</option>
              <option value="Italy">Italy 🇮🇹</option>
            </select>
          </div>

          <div className="space-y-3 pb-4">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Primary Discipline</label>
            <input 
              type="text" required placeholder="e.g. Applied AI, CSE"
              className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-black text-lg"
              value={formData.field} onChange={e => setFormData({...formData, field: e.target.value})}
            />
          </div>
          
          <Button 
            type="submit" 
            fullWidth 
            size="lg" 
            className="py-6 rounded-2xl shadow-2xl shadow-primary-600/20 text-sm font-black uppercase tracking-widest group bg-slate-900 hover:bg-primary-600"
            disabled={loading}
          >
            {loading ? (
              <><Loader2 className="animate-spin mr-3" /> Processing Parameters...</>
            ) : (
              <span className="flex items-center gap-3">
                Run Intelligence Engine <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              </span>
            )}
          </Button>
        </form>
      </div>

      <div className="space-y-8">
        {result ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8 pb-12"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative group overflow-hidden">
               <div className="flex justify-between items-start mb-8 relative z-10">
                 <div className="max-w-[60%]">
                   <div className="flex items-center gap-2 mb-2">
                     <ShieldCheck className="text-primary-600" size={20} />
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight">Visa Success Probability</h3>
                   </div>
                   <p className="text-slate-500 text-sm font-bold leading-relaxed mb-6">{result.visaReason}</p>
                   
                   {result.visaRisks && result.visaRisks.length > 0 && (
                     <div className="mt-6 bg-red-50 p-6 rounded-2xl border border-red-100">
                       <h4 className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                         <TriangleAlert size={14} /> Risk Mitigation Required
                       </h4>
                       <ul className="space-y-3">
                         {result.visaRisks.map((risk, i) => (
                           <li key={i} className="text-xs text-red-700 flex items-start gap-3 font-bold">
                             <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                             {risk}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}
                 </div>

                 <div className="relative flex items-center justify-center w-36 h-36 rounded-full border-[10px] border-slate-50 shadow-2xl bg-white group-hover:scale-105 transition-transform duration-500">
                    <span className={`text-4xl font-black ${
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
                        strokeWidth="3.5"
                        strokeDasharray={`${result.visaProbability}, 100`}
                        strokeLinecap="round"
                      />
                    </svg>
                 </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-50">
               <div className="flex items-center gap-4 mb-4">
                 <div className={`p-3 rounded-2xl shadow-lg ${
                   result.eligibility === 'High' ? 'bg-green-600 text-white' : 
                   result.eligibility === 'Medium' ? 'bg-yellow-500 text-white' : 'bg-red-600 text-white'
                 }`}>
                   <Award size={24} />
                 </div>
                 <div>
                   <h3 className="text-xl font-black text-slate-900 tracking-tight">Admission Rating: {result.eligibility}</h3>
                   <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Calculated by GlobalStudy Engine</p>
                 </div>
               </div>
               <p className="text-slate-500 text-sm font-bold leading-relaxed">{result.eligibilityReason}</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-primary-600" /> Strategic Recommendations
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {result.recommendations.map((rec, idx) => (
                  <motion.div 
                    key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:border-primary-100 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-black text-slate-900 group-hover:text-primary-700 transition-colors">{rec.program}</h4>
                      <div className="p-1.5 bg-primary-100 text-primary-600 rounded-lg"><ExternalLink size={14} /></div>
                    </div>
                    <p className="text-primary-600 text-xs font-black uppercase tracking-[0.2em] mb-4">{rec.university}</p>
                    <p className="text-sm text-slate-400 font-bold leading-relaxed italic">"{rec.reason}"</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="h-full bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center p-20 text-center min-h-[600px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 via-transparent to-transparent pointer-events-none" />
            {loading ? (
              <div className="space-y-8 relative z-10">
                <div className="relative inline-block">
                  <div className="w-24 h-24 border-8 border-slate-100 border-t-primary-600 rounded-full animate-spin"></div>
                  <BrainCircuit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-600 animate-pulse" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Analyzing Profile</h3>
                  <p className="text-slate-400 font-bold max-w-sm mx-auto">
                    Retrieving global policy updates and institutional data from our proprietary repository...
                  </p>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 relative z-10">
                <div className="w-24 h-24 bg-primary-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transform rotate-12">
                  <BrainCircuit size={48} className="text-primary-300" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">System Idle</h3>
                <p className="max-w-xs mx-auto text-slate-400 font-bold text-lg leading-relaxed">
                  Submit your academic profile to initiate a high-precision admission and visa success analysis.
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SopGeneratorSection: React.FC<{ prefill: ExtractedCvData | null }> = ({ prefill }) => {
  const [loading, setLoading] = useState(false);
  const [sop, setSop] = useState('');
  const [formData, setFormData] = useState({
    name: '', course: '', university: '', background: '', goals: ''
  });

  React.useEffect(() => {
    if (prefill) {
      setFormData(prev => ({
        ...prev,
        name: prefill.fullName || prev.name,
        course: prefill.fieldOfStudy || prev.course,
        background: prefill.backgroundSummary || prev.background,
        goals: prefill.careerGoals || prev.goals
      }));
    }
  }, [prefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSop('');
    try {
      const generatedText = await generateSOP(formData);
      setSop(generatedText || "");
    } catch (error) {
      alert("Failed to synthesize draft. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 h-fit">
         <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3 tracking-tight">
            <div className="p-2 bg-primary-100 text-primary-600 rounded-xl"><GraduationCap size={24} /></div>
            Synthesis Context
         </h2>
         <form onSubmit={handleSubmit} className="space-y-8">
           <div className="space-y-3">
             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Legal Name</label>
             <input 
               type="text" required
               className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none font-black text-xl"
               value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
             />
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div className="space-y-3">
               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Target Course</label>
               <input 
                 type="text" required placeholder="Masters in..."
                 className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none font-black text-lg"
                 value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})}
               />
             </div>
             <div className="space-y-3">
               <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Target Institution</label>
               <input 
                 type="text" required placeholder="e.g. U of Toronto"
                 className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none font-black text-lg"
                 value={formData.university} onChange={e => setFormData({...formData, university: e.target.value})}
               />
             </div>
           </div>
           <div className="space-y-3">
             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Academic & Research Focus</label>
             <textarea 
               required rows={5} placeholder="Describe your undergraduate research, core projects, and thesis..."
               className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none font-bold text-lg leading-relaxed scrollbar-hide resize-none"
               value={formData.background} onChange={e => setFormData({...formData, background: e.target.value})}
             />
           </div>
           <div className="space-y-3">
             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Career Vision</label>
             <textarea 
               required rows={5} placeholder="What are your professional goals after graduation?"
               className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none font-bold text-lg leading-relaxed scrollbar-hide resize-none"
               value={formData.goals} onChange={e => setFormData({...formData, goals: e.target.value})}
             />
           </div>

           <Button type="submit" fullWidth size="lg" className="py-6 rounded-2xl shadow-2xl shadow-primary-600/20 text-sm font-black uppercase tracking-widest bg-slate-900 hover:bg-primary-600" disabled={loading}>
              {loading ? <><Loader2 className="animate-spin mr-3" /> Synthesizing Professional Draft...</> : 'Synthesize Professional SOP'}
           </Button>
         </form>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col h-[800px] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <FileText size={400} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center justify-between relative z-10">
           <span className="flex items-center gap-3"><div className="p-2 bg-primary-100 text-primary-600 rounded-xl"><FileText size={24} /></div> Academic Narrative</span>
           {sop && (
             <Button size="sm" variant="outline" className="font-black text-[10px] uppercase border-2 py-3 px-6 rounded-xl hover:bg-slate-900 hover:text-white transition-all" onClick={() => {
               navigator.clipboard.writeText(sop);
               alert("SOP Draft copied to clipboard.");
             }}>
               Copy to Clipboard
             </Button>
           )}
        </h2>
        <div className="flex-1 bg-slate-50/50 rounded-3xl p-10 overflow-y-auto border border-slate-100 font-serif text-slate-800 whitespace-pre-line leading-relaxed text-lg shadow-inner scrollbar-hide relative z-10">
          {sop ? (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-slate max-w-none">
               {sop}
             </motion.div>
          ) : (
             <div className="h-full flex flex-col items-center justify-center text-slate-300">
               {loading ? (
                  <div className="w-20 h-20 border-8 border-slate-100 border-t-primary-600 rounded-full animate-spin"></div>
               ) : (
                  <>
                    <div className="p-6 bg-white rounded-full shadow-xl mb-6">
                      <FileText size={64} className="text-slate-100" />
                    </div>
                    <p className="font-black uppercase tracking-[0.2em] text-xs">Awaiting Synthesis</p>
                    <p className="text-sm font-bold text-slate-400 mt-4 max-w-[280px] text-center">Complete the application context to generate a master-level Statement of Purpose draft.</p>
                  </>
               )}
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};