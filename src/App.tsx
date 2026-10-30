
import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';

// Carga diferida de páginas secundarias
const Scene = lazy(() =>
  import('./pages/Scene').then((module) => ({
    default: module.Scene,
  })),
);

const Pedagogy = lazy(() =>
  import('./pages/Pedagogy').then((module) => ({
    default: module.Pedagogy,
  })),
);

const CodePage = lazy(() =>
  import('./pages/CodePage').then((module) => ({
    default: module.CodePage,
  })),
);

const About = lazy(() =>
  import('./pages/About').then((module) => ({
    default: module.About,
  })),
);

const Contact = lazy(() =>
  import('./pages/Contact').then((module) => ({
    default: module.Contact,
  })),
);

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scene" element={<Scene />} />
              <Route path="/pedagogy" element={<Pedagogy />} />
              <Route path="/code" element={<CodePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

