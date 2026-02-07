
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiChat } from './components/AiChat';
import { Home } from './pages/Home';
import { CountryGuide } from './pages/CountryGuide';
import { Programs } from './pages/Programs';
import { Universities } from './pages/Universities';
import { Scholarships } from './pages/Scholarships';
import { Contact } from './pages/Contact';
import { Team } from './pages/Team';
import { AiTools } from './pages/AiTools';

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
            {/* Dynamic Route for Destinations */}
            <Route path="/study/:countryId" element={<CountryGuide />} />
            
            <Route path="/programs" element={<Programs />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/ai-tools" element={<AiTools />} />
          </Routes>
        </main>
        <Footer />
        <AiChat />
      </div>
    </Router>
  );
};

export default App;
