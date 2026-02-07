import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Trash2, Plus, History, ChevronLeft, Trash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAiConsultationStream } from '../services/geminiService';
import { Button } from './ui/Button';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  timestamp: number;
}

const STORAGE_KEY = 'globalstudy_sessions_v2';
const INITIAL_GREETING_TEXT = 'Greetings! I am the GlobalStudy Intelligence Engine, developed by the dedicated RTM AKTU backbencher team (Aminul & Iftekhar) under the guidance of Rajib sir—our most dedicated and helpful teacher. How can I assist your academic journey today?';

export const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load sessions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSessions(parsed);
          setCurrentSessionId(parsed[0].id);
        } else {
          createNewSession();
        }
      } catch (e) {
        createNewSession();
      }
    } else {
      createNewSession();
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (sessions.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    }
  }, [sessions]);

  const createNewSession = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'New Conversation',
      messages: [{ role: 'bot', text: INITIAL_GREETING_TEXT }],
      timestamp: Date.now()
    };
    setSessions(prev => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
    setShowHistory(false);
  };

  const currentSession = sessions.find(s => s.id === currentSessionId) || sessions[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !showHistory) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [currentSession?.messages, isOpen, showHistory]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !currentSessionId) return;

    const userMsg = input.trim();
    setInput('');
    setIsLoading(true);

    const updatedSessions = sessions.map(s => {
      if (s.id === currentSessionId) {
        const newTitle = s.messages.length === 1 ? userMsg.substring(0, 30) + '...' : s.title;
        return {
          ...s,
          title: newTitle,
          messages: [...s.messages, { role: 'user', text: userMsg } as Message, { role: 'bot', text: '' } as Message],
          timestamp: Date.now()
        };
      }
      return s;
    });

    setSessions(updatedSessions);

    try {
      const stream = getAiConsultationStream(userMsg, currentSession.messages);
      let fullResponse = '';

      for await (const chunk of stream) {
        fullResponse += chunk;
        setSessions(prev => prev.map(s => {
          if (s.id === currentSessionId) {
            const msgs = [...s.messages];
            msgs[msgs.length - 1] = { role: 'bot', text: fullResponse };
            return { ...s, messages: msgs };
          }
          return s;
        }));
      }
    } catch (error) {
      setSessions(prev => prev.map(s => {
        if (s.id === currentSessionId) {
          const msgs = [...s.messages];
          msgs[msgs.length - 1] = { role: 'bot', text: 'Connection issue. Please retry.' };
          return { ...s, messages: msgs };
        }
        return s;
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSessions = sessions.filter(s => s.id !== id);
    if (newSessions.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
      createNewSession();
    } else {
      setSessions(newSessions);
      if (currentSessionId === id) {
        setCurrentSessionId(newSessions[0].id);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-[2.5rem] shadow-3xl border border-slate-100 overflow-hidden flex flex-col h-[600px]"
          >
            {/* Header */}
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Sparkles className="w-full h-full text-primary-400" />
              </div>
              <div className="flex items-center gap-4 relative z-10">
                {showHistory ? (
                  <button onClick={() => setShowHistory(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                ) : (
                  <div className="bg-primary-600 p-2.5 rounded-2xl shadow-xl shadow-primary-600/20">
                    <Bot size={22} className="text-white" />
                  </div>
                )}
                <div>
                  <h3 className="font-black text-sm tracking-tight uppercase">
                    {showHistory ? 'Chat History' : 'Intelligence Engine'}
                  </h3>
                  {!showHistory && (
                    <p className="text-[9px] text-primary-400 font-black uppercase tracking-[0.2em] flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      Proprietary Node Active
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 relative z-10">
                {!showHistory && (
                  <>
                    <button onClick={() => setShowHistory(true)} className="p-2 hover:bg-white/10 rounded-xl text-white/60 hover:text-white transition-all">
                      <History size={18} />
                    </button>
                    <button onClick={createNewSession} className="p-2 hover:bg-white/10 rounded-xl text-white/60 hover:text-white transition-all">
                      <Plus size={18} />
                    </button>
                  </>
                )}
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-all p-2 hover:bg-white/10 rounded-xl">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto bg-slate-50/30 scrollbar-hide relative">
              <AnimatePresence mode="wait">
                {showHistory ? (
                  <motion.div key="history" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="p-4 space-y-3">
                    {sessions.map(s => (
                      <div 
                        key={s.id} 
                        onClick={() => { setCurrentSessionId(s.id); setShowHistory(false); }}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer group flex justify-between items-center ${
                          s.id === currentSessionId ? 'bg-primary-50 border-primary-200' : 'bg-white border-slate-100 hover:border-primary-100'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-black truncate ${s.id === currentSessionId ? 'text-primary-700' : 'text-slate-700'}`}>
                            {s.title}
                          </p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">
                            {new Date(s.timestamp).toLocaleDateString()}
                          </p>
                        </div>
                        <button 
                          onClick={(e) => deleteSession(s.id, e)}
                          className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <Trash size={14} />
                        </button>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 space-y-6">
                    {currentSession?.messages.map((msg, idx) => (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                          msg.role === 'user' ? 'bg-primary-600 text-white' : 'bg-white text-slate-900 border border-slate-100'
                        }`}>
                          {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                        </div>
                        <div className={`p-4 rounded-3xl text-sm leading-relaxed max-w-[82%] whitespace-pre-wrap font-medium shadow-sm border ${
                          msg.role === 'user' ? 'bg-slate-900 text-white rounded-br-none border-slate-800' : 'bg-white text-slate-700 rounded-bl-none border-slate-100'
                        }`}>
                          {msg.text || (isLoading && idx === currentSession.messages.length - 1 ? (
                            <div className="flex gap-1 items-center py-1">
                              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce"></span>
                              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                            </div>
                          ) : "")}
                        </div>
                      </motion.div>
                    ))}
                    <div ref={messagesEndRef} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            {!showHistory && (
              <div className="p-6 bg-white border-t border-slate-100">
                <div className="flex gap-3 relative">
                  <textarea
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about visas, programs..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 resize-none transition-all scrollbar-hide font-bold text-slate-900"
                    style={{ maxHeight: '140px' }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-primary-600 text-white w-12 h-12 rounded-2xl hover:bg-slate-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl shadow-primary-600/20 active:scale-90 flex items-center justify-center self-end"
                  >
                    <Send size={20} />
                  </button>
                </div>
                <p className="text-[10px] font-black text-slate-300 mt-4 text-center uppercase tracking-widest">GlobalStudy Proprietary AI</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="bg-slate-900 text-white p-5 rounded-[2rem] shadow-3xl shadow-slate-900/30 flex items-center justify-center hover:bg-primary-600 transition-all duration-500 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        {isOpen ? <X size={26} className="relative z-10" /> : <MessageSquare size={26} className="relative z-10" />}
      </motion.button>
    </div>
  );
};