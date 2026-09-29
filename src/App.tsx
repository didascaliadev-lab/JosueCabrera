import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Scene } from './pages/Scene';
import { Pedagogy } from './pages/Pedagogy';
import { BodyPage } from './pages/BodyPage';
import { CodePage } from './pages/CodePage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--black)] text-[var(--white)] flex flex-col justify-between selection:bg-[var(--red)] selection:text-[var(--white)]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scene" element={<Scene />} />
            <Route path="/pedagogy" element={<Pedagogy />} />
            <Route path="/body" element={<BodyPage />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
