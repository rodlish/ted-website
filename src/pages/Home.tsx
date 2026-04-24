import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';

const About = lazy(() => import('../components/About'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const Process = lazy(() => import('../components/Process'));
const BlogPreview = lazy(() => import('../components/BlogPreview'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Stats />
      <Suspense fallback={<div className="h-40 flex items-center justify-center opacity-20">Chargement...</div>}>
        <About />
        <ServicesSection />
        <Process />
        <BlogPreview />
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
