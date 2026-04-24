import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import Process from '../components/Process';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

const HomePage = () => {
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
      <About />
      <ServicesSection />
      <Process />
      <BlogPreview />
      <Contact />
    </>
  );
};

export default HomePage;
