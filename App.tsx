import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiChat } from './components/AiChat';
import { Home } from './pages/Home';
import { StudyCanada } from './pages/StudyCanada';
import { Programs } from './pages/Programs';
import { Universities } from './pages/Universities';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-in-canada" element={<StudyCanada />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AiChat />
      </div>
    </Router>
  );
};

export default App;