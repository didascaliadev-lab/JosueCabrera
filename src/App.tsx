import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Scene } from './pages/Scene';
import { Pedagogy } from './pages/Pedagogy';
import { CodePage } from './pages/CodePage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      requestAnimationFrame(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col justify-between bg-slate-950 text-amber-50 selection:bg-amber-500 selection:text-slate-950">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scene" element={<Scene />} />
            <Route path="/pedagogy" element={<Pedagogy />} />
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