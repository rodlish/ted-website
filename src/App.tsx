/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams, useNavigationType } from 'react-router-dom';
import { services } from './data/constants';

// Internal Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';

// Lazy Loaded Components
const Chatbot = lazy(() => import('./components/Chatbot'));
const ServiceDetail = lazy(() => import('./components/services/ServiceDetail'));
const StartProject = lazy(() => import('./components/StartProject'));
const Blog = lazy(() => import('./components/Blog'));
const BlogDetail = lazy(() => import('./components/BlogDetail'));
const Careers = lazy(() => import('./components/Careers'));
const JobApplication = lazy(() => import('./components/JobApplication'));
const MentionsLegales = lazy(() => import('./components/LegalPages').then(m => ({ default: m.MentionsLegales })));
const Confidentialite = lazy(() => import('./components/LegalPages').then(m => ({ default: m.Confidentialite })));
const Cookies = lazy(() => import('./components/LegalPages').then(m => ({ default: m.Cookies })));

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== 'POP' && !hash) {
      window.scrollTo(0, 0);
    }
    
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash, navType]);

  return null;
};

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ted-Company Group",
    "url": "https://www.ted-companygroup.com/",
    "logo": "https://ted-companygroup.com/image/ted-company-with-letter%20(1).png",
    "description": "Expert en externalisation (BPO) à Antananarivo, Madagascar. Services bilingues : Multimédia, Relation Client, IA et Développement Web. Solutions d'externalisation et digitales.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Madagascar"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ted-companygroup/",
      "https://www.facebook.com/tedcompanygroup/"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

const SEOUpdater = () => {
  const location = useLocation();
  
  useEffect(() => {
    let title = "Ted-Company Group | Solutions d'Externalisation & Recrutement";
    let description = "Expert en externalisation (BPO), solutions digitales, relation client et recrutement international inclusif.";

    if (location.pathname === '/') {
      title = "Ted-Company Group | Accueil - Solutions d'Externalisation & Recrutement";
    } else if (location.pathname.startsWith('/service/')) {
      const serviceId = location.pathname.split('/').pop();
      const service = services.find(s => s.id === serviceId);
      if (service) {
        title = `${service.title} | Ted-Company Group`;
        description = service.description;
      }
    } else if (location.pathname.startsWith('/blog/')) {
      title = "Blog | Ted-Company Group";
      description = "Découvrez nos articles sur l'IA, le BPO et les solutions digitales à Madagascar.";
    } else if (location.pathname === '/demarrer-un-projet') {
      title = "Démarrer un Projet | Ted-Company Group";
      description = "Lancez votre projet d'externalisation avec Ted-Company Group. Devis gratuit et personnalisé.";
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-6JVBHF375J', {
        page_path: location.pathname + location.search,
        page_title: title
      });
    }
  }, [location]);

  return null;
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.body;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <ScrollToTop />
      <SEOUpdater />
      <StructuredData />
      <div className="min-h-screen transition-colors duration-500 relative">
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[1000]"
            >
              <LoadingScreen theme={theme} onComplete={() => setIsLoading(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Suspense fallback={
          <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/demarrer-un-projet" element={<StartProject />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/carrieres" element={<Careers />} />
            <Route path="/postuler" element={<JobApplication />} />
          </Routes>
        </Suspense>
        <Footer />
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </div>
    </Router>
  );
}
