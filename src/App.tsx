/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation, useSearchParams, useNavigationType } from 'react-router-dom';
import { 
  Globe, 
  PhoneCall, 
  FileText, 
  Calculator, 
  Scale, 
  Headphones, 
  Users, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Sun,
  Moon,
  ArrowLeft,
  Code,
  Cpu,
  Zap,
  Layout,
  PenTool,
  Search,
  Smartphone,
  Monitor,
  Rocket,
  Globe2,
  Clock,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Heart,
  BarChart3,
  Briefcase,
  Gavel,
  Settings,
  Shield,
  Award,
  Target,
  ZapOff,
  Activity,
  PieChart,
  BookOpen,
  UserCheck,
  MessageCircle,
  Share2,
  ThumbsUp,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Music,
  PhoneIncoming,
  PhoneOutgoing,
  LifeBuoy,
  Wrench,
  Star,
  Coins,
  Users2,
  Terminal,
  Video,
  Image,
  Laptop,
  MonitorSmartphone,
  HardDrive,
  ShieldAlert
} from 'lucide-react';
import CountryAutocomplete from './components/CountryAutocomplete';
import { MentionsLegales, Confidentialite, Cookies } from './components/LegalPages';
import Chatbot from './components/Chatbot';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on new navigations (PUSH) and if there's no hash
    if (navType !== 'POP' && !hash) {
      window.scrollTo(0, 0);
    }
    
    // If there is a hash, scroll to the element
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
    "logo": "https://www.ted-companygroup.com/assets/img/logos/ted-company.png",
    "description": "Expert en externalisation (BPO) à Antananarivo, Madagascar. Services bilingues : Multimédia, Relation Client, IA et Développement Web. Solutions d'externalisation et digitales.",
    "keywords": "BPO Madagascar, Antananarivo, Antananarive, capitale de Madagascar, externalisation, recrutement international, centre d'appel, call center, services bilingues, photo retouching, montage vidéo, IA, AI, développement web, secteurs d'activité",
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

const categories = [
  { id: 'digital', title: 'Solutions Digitales', icon: Laptop },
  { id: 'client', title: 'Relation Client', icon: Headphones },
  { id: 'admin', title: 'Gestion & RH', icon: Briefcase }
];

const services = [
  {
    id: 'web',
    categoryId: 'digital',
    title: 'Création Site Web & SEO',
    description: 'Développement web sur mesure et SEO. Solutions performantes pour votre croissance digitale.',
    icon: Globe,
    image: 'https://www.ted-companygroup.com/assets/img/service/1.png',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ai',
    categoryId: 'digital',
    title: 'IA & Automatisation',
    description: 'Intégration d\'Intelligence Artificielle et automatisation de processus métier.',
    icon: Cpu,
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'call',
    categoryId: 'client',
    title: 'Centre d\'Appel Bilingue',
    description: 'Gestion professionnelle de vos appels à Antananarivo, Madagascar.',
    icon: PhoneCall,
    image: 'https://www.ted-companygroup.com/assets/img/service/5.png',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'admin',
    categoryId: 'admin',
    title: 'Assistance Administrative',
    description: 'Support administratif dédié pour optimiser votre temps.',
    icon: FileText,
    image: 'https://www.ted-companygroup.com/assets/img/service/2.png',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'compta',
    categoryId: 'admin',
    title: 'Comptabilité',
    description: 'Gestion comptable rigoureuse et transparente.',
    icon: Calculator,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'juridique',
    categoryId: 'admin',
    title: 'Juridique',
    description: 'Conseils et accompagnement juridique sécurisé.',
    icon: Scale,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'rh',
    categoryId: 'admin',
    title: 'Solution RH & Recrutement',
    description: 'Recrutement international et profils spécialisés.',
    icon: Users2,
    color: 'from-orange-400 to-amber-600'
  },
  {
    id: 'sav',
    categoryId: 'client',
    title: 'SAV & Support Client',
    description: 'Service après-vente réactif et multilingue.',
    icon: Headphones,
    color: 'from-rose-500 to-orange-500'
  },
  {
    id: 'cm',
    categoryId: 'digital',
    title: 'Community Manager',
    description: 'Boostez votre présence sur les réseaux sociaux.',
    icon: Users,
    color: 'from-cyan-500 to-emerald-500'
  },
  {
    id: 'support',
    categoryId: 'client',
    title: 'Support Technique',
    description: 'Assistance technique à distance et helpdesk.',
    icon: Terminal,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'medical',
    categoryId: 'client',
    title: 'Télésecrétariat Médical',
    description: 'Support administratif pour praticiens et hôpitaux.',
    icon: Activity,
    color: 'from-emerald-400 to-cyan-600'
  },
  {
    id: 'multimedia',
    categoryId: 'digital',
    title: 'Multimédia & Création de Contenu',
    description: 'Retouche photo, montage vidéo et création visuelle.',
    icon: Video,
    color: 'from-pink-500 to-rose-600'
  }
];

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const navItems = ['Services', 'À propos', 'Processus', 'Blog', 'Contact'];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-xl border-b border-blue-500/20' : 'bg-transparent py-5 border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div onClick={handleLogoClick} className="cursor-pointer">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <img 
                src="https://www.ted-companygroup.com/assets%20ancien/img/logos/ted-company-with-letter.png" 
                alt="Ted-Company Group Logo" 
                className="h-10 md:h-12 w-auto"
                referrerPolicy="no-referrer"
              />
              <span className="text-[15px] font-bold tracking-tighter flex items-center gap-1 whitespace-nowrap">
                Ted-Company <span className="text-blue-400 font-light">Group</span>
              </span>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 nav-links">
            {navItems.map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item === 'Blog' ? (
                  <Link 
                    to="/blog" 
                    className="hover:text-blue-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                  </Link>
                ) : isHome ? (
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-blue-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                  </a>
                ) : (
                  <Link 
                    to={`/#${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-blue-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                  </Link>
                )}
              </motion.div>
            ))}
            
            {!isHome && (
              <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Accueil
              </Link>
            )}
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl glass hover:text-blue-400 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <Link 
              to="/demarrer-un-projet"
              className="bg-blue-500 text-zinc-950 px-6 py-2.5 rounded-full transition-all font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              Démarrer un projet
            </Link>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl glass text-zinc-100"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <button className="text-zinc-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 z-40 md:hidden glass bg-zinc-950/95 flex flex-col p-12 gap-8"
            >
              <div className="flex justify-end">
                <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
              </div>
              {navItems.map((item) => (
                item === 'Blog' ? (
                  <Link 
                    key={item} 
                    to="/blog" 
                    className="text-4xl font-bold hover:text-blue-400" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ) : isHome ? (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-4xl font-bold hover:text-blue-400" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ) : (
                  <Link 
                    key={item} 
                    to={`/#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-4xl font-bold hover:text-blue-400" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              ))}
              <Link 
                to="/demarrer-un-projet"
                className="bg-blue-500 text-zinc-950 px-5 py-4 rounded-2xl font-bold mt-auto text-xl text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Démarrer un projet
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-110"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-business-people-working-in-the-office-4340-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950 hero-overlay" />
      </div>

      {/* Floating Animated Graphics */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Ted-Company Group Innovation
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1] mb-8">
            L'innovation <br />
            <span className="text-gradient">au service</span> <br />
            de demain.
          </h1>
          <p className="text-xl text-zinc-400 mb-12 max-w-lg leading-relaxed">
            Propulsez votre entreprise vers de nouveaux sommets avec nos solutions d'externalisation intelligentes et innovantes.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link 
              to="/demarrer-un-projet"
              className="bg-blue-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all flex items-center gap-3 group shadow-2xl shadow-blue-500/30 hover:scale-105 active:scale-95"
            >
              Démarrer un projet
              <Rocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="/#services"
              className="glass px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
            >
              Explorer nos Solutions
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass rounded-[3rem] p-6 animate-float shadow-2xl shadow-blue-500/20">
            <div className="bg-zinc-900 rounded-[2.5rem] overflow-hidden aspect-square relative">
              <motion.img 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Groupe Innovation" 
                className="object-cover w-full h-full opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Animated HUD elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 w-24 h-24 border-2 border-dashed border-blue-500/30 rounded-full flex items-center justify-center"
              >
                <div className="w-16 h-16 border border-blue-500/50 rounded-full border-t-transparent animate-spin" />
              </motion.div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-12 -right-12 glass p-6 rounded-3xl z-20 border border-blue-500/30 backdrop-blur-2xl"
          >
            <div className="text-blue-400 font-black text-3xl mb-1">99.9%</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Service de Disponibilité</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Clients Actifs', value: '250+' },
    { label: 'Projets Réalisés', value: '1.2k' },
    { label: 'Experts Dédiés', value: '85' },
    { label: 'Satisfaction', value: '98%' }
  ];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="à-propos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">Notre Histoire</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              C'est notre histoire <br />
              <span className="text-gradient">qui nous unit.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Ted-Company Group est né d'une vision simple : offrir aux entreprises une plateforme unique de services d'externalisation de haute qualité. Nous croyons que la réussite de nos clients est le moteur de notre propre succès.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <CheckCircle2 className="text-blue-400 mb-4" />
                <h4 className="font-bold mb-2">Innovation</h4>
                <p className="text-sm text-zinc-500">Toujours à la pointe des technologies.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <CheckCircle2 className="text-blue-400 mb-4" />
                <h4 className="font-bold mb-2">Excellence</h4>
                <p className="text-sm text-zinc-500">Un standard de qualité sans compromis.</p>
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="glass rounded-[3rem] p-4 rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="À propos de Ted-Company" 
                className="rounded-[2.5rem] w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block">
              <div className="text-blue-400 font-bold text-sm mb-2">Fondé en</div>
              <div className="text-3xl font-bold">2021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();
  const bgImages = [
    'https://www.ted-companygroup.com/assets/img/service/1.png',
    'https://www.ted-companygroup.com/assets/img/service/5.png',
    'https://www.ted-companygroup.com/assets/img/service/2.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={bgImages[activeImage]}
            alt="Ted-Company Group Service Background"
            initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            animate={{ opacity: 0.2, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Nos Solutions <br />
              <span className="text-gradient">Multi-Services</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-xl leading-relaxed">
              Une gamme complète de services d'externalisation conçus pour optimiser votre productivité et réduire vos coûts opérationnels.
            </p>
          </motion.div>
        </div>

        {categories.map((category, catIndex) => (
          <div key={category.id} className="mb-24 last:mb-0">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <category.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold">{category.title}</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services
                .filter(s => s.categoryId === category.id)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      y: -15, 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                    }}
                    onClick={() => navigate(`/service/${service.id}`)}
                    className="glass p-10 rounded-[3rem] group cursor-pointer relative overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                  >
                    <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity blur-[80px]`} />
                    
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-8 shadow-2xl shadow-blue-500/20`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm font-black text-blue-400 uppercase tracking-widest group-hover:gap-5 transition-all">
                      En savoir plus <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: 'Analyse', desc: 'Nous étudions vos besoins et vos objectifs spécifiques.' },
    { title: 'Stratégie', desc: 'Élaboration d\'un plan d\'action personnalisé et efficace.' },
    { title: 'Exécution', desc: 'Mise en place de nos équipes et outils pour votre projet.' },
    { title: 'Optimisation', desc: 'Suivi continu et amélioration des performances.' }
  ];

  return (
    <section id="processus" className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -z-10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
              Comment nous <br />
              <span className="text-gradient">concrétisons</span> <br />
              vos projets
            </h2>
            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-8 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="flex-shrink-0 w-16 h-16 rounded-2xl glass flex items-center justify-center font-mono text-2xl text-blue-400 font-black border border-blue-500/30 shadow-xl shadow-blue-500/10 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-all duration-500"
                  >
                    0{i + 1}
                  </motion.div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h4>
                    <p className="text-zinc-400 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[4rem] p-10 aspect-square flex items-center justify-center relative z-10">
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden group">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Teamwork" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:bg-blue-500/0 transition-all duration-500" />
              </div>
            </div>
            {/* Animated floating stats */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-[2.5rem] shadow-2xl border border-blue-500/30 backdrop-blur-3xl z-20"
            >
              <div className="text-5xl font-black text-blue-400 mb-2">98%</div>
              <div className="text-xs uppercase tracking-widest font-bold text-zinc-500">Taux de satisfaction</div>
            </motion.div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');
  const [selectedService, setSelectedService] = useState(preselectedService || "Autre");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    if (preselectedService) {
      const service = services.find(s => s.id === preselectedService);
      if (service) {
        setSelectedService(service.title);
      }
    }
  }, [preselectedService]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xlgobboq', { // Remplacez par votre ID Formspree
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Nouveau message de ${data.name} - Ted-Company Group` }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Formspree error');
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback to mailto
      const subject = encodeURIComponent(`Nouveau message de ${data.name} - Ted-Company Group`);
      const body = encodeURIComponent(
        `Nom: ${data.name}\nEmail: ${data.email}\nPays: ${data.country}\nService: ${data.service}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:contact@ted-companygroup.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* World Map Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-80 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=100&w=2500" 
          alt="Flat World Map" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-150"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 backdrop-blur-[2px] rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Prêt à <span className="text-gradient">collaborer</span> ?
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en externalisation et obtenir un devis personnalisé.
              </p>
              
              <div className="flex items-center gap-4 mb-12 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 w-fit">
                <Globe2 className="w-6 h-6 text-blue-400" />
                <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Disponible partout dans le monde</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-bold">contact@ted-companygroup.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Téléphone</div>
                    <div className="font-bold">+261 34 94 857 12</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Adresse</div>
                    <div className="font-bold">Antananarivo Madagascar</div>
                  </div>
                </div>
              </div>
            </div>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold">Message Envoyé !</h3>
                <p className="text-zinc-400">
                  Merci pour votre message. Notre équipe vous contactera à l'adresse <strong>contact@ted-companygroup.com</strong> sous 24h ouvrées.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:underline font-bold"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Nom Complet</label>
                    <input name="name" type="text" required className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-none rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors text-black dark:text-white" placeholder="Jean Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Email</label>
                    <input name="email" type="email" required className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-none rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors text-black dark:text-white" placeholder="jean@entreprise.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Pays</label>
                    <CountryAutocomplete 
                      name="country" 
                      required 
                      onCountryChange={(country) => setCountryCode(country.code)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Téléphone</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-zinc-500 font-medium pointer-events-none">
                        {countryCode}
                      </div>
                      <input 
                        name="phone" 
                        type="tel" 
                        required 
                        className={`w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-none rounded-xl py-3 focus:outline-none focus:border-blue-500/50 transition-colors text-black dark:text-white ${countryCode ? 'pl-20' : 'px-4'}`}
                        placeholder="00 00 00 00" 
                      />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Service</label>
                    <div className="relative">
                      <select 
                        name="service" 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-none rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none text-black dark:text-white"
                      >
                        {services.map(s => (
                          <option key={s.id} value={s.title} className="bg-white dark:bg-zinc-900 text-black dark:text-white">{s.title}</option>
                        ))}
                        <option className="bg-white dark:bg-zinc-900 text-black dark:text-white">Autre</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400">Message</label>
                  <textarea name="message" rows={4} required className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-none rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors text-black dark:text-white" placeholder="Décrivez votre projet..." />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-zinc-950 font-bold py-4 rounded-xl hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div 
          onClick={() => window.location.href = '/'} 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://www.ted-companygroup.com/assets%20ancien/img/logos/ted-company-with-letter.png" 
            alt="Ted-Company Group Logo" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
          <span className="text-sm md:text-base font-bold tracking-tighter">Ted-Company <span className="text-blue-400 font-light text-xs uppercase">Group</span></span>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-500">
          <Link to="/mentions-legales" className="hover:text-blue-400 transition-colors">Mentions Légales</Link>
          <Link to="/confidentialite" className="hover:text-blue-400 transition-colors">Confidentialité</Link>
          <Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link>
        </div>
        
        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Ted-company. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

const WebServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  
  const features = [
    { icon: Code, title: "Architecture Moderne", desc: "Utilisation de React, Next.js et TypeScript pour des applications robustes." },
    { icon: Zap, title: "Performance Ultime", desc: "Optimisation Core Web Vitals pour un chargement instantané." },
    { icon: Layout, title: "Design Adaptatif", desc: "Expérience utilisateur parfaite sur mobile, tablette et desktop." },
    { icon: PenTool, title: "Rédaction Stratégique", desc: "Contenu captivant conçu pour convertir vos visiteurs en clients." },
    { icon: Search, title: "SEO Avancé", desc: "Structure optimisée pour dominer les résultats de recherche." },
    { icon: Cpu, title: "Web Apps & API", desc: "Développement de solutions complexes et intégrations sur mesure." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/#services')}
          className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        {/* Hero Section for Web */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
          {/* Background Animated Shapes */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] -z-10"
          />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              Expertise Full-Stack & Copywriting
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              L'art du <span className="text-gradient">Web</span> <br />
              Haute Performance.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Nous ne créons pas seulement des sites, nous forgeons des expériences digitales mémorables. Alliant puissance technologique et rédaction persuasive pour propulser votre marque.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/demarrer-un-projet?service=web"
                className="bg-blue-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-3"
              >
                Lancer mon projet <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            {/* Animated Code Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="glass rounded-3xl p-6 shadow-2xl relative z-10 font-mono text-sm overflow-hidden"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <pre className="text-blue-400">
                <code>{`const WebApp = () => {
  const [performance, setPerformance] = useState(100);
  
  return (
    <Experience 
      quality="Premium"
      design="Modern"
      seo={true}
    >
      <Success />
    </Experience>
  );
};`}</code>
              </pre>
              
              {/* Floating Element 1: Performance */}
              <motion.div 
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 glass p-4 rounded-2xl border border-blue-500/30 backdrop-blur-3xl z-20"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold">Vitesse 99/100</span>
                </div>
              </motion.div>

              {/* Floating Element 2: SEO */}
              <motion.div 
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 glass p-4 rounded-2xl border border-cyan-500/30 backdrop-blur-3xl z-20"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold">SEO Optimized</span>
                </div>
              </motion.div>

              {/* Floating Element 3: Responsive */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -right-12 glass p-3 rounded-xl border border-purple-500/30 backdrop-blur-3xl z-20"
              >
                <Smartphone className="w-5 h-5 text-purple-400" />
              </motion.div>
            </motion.div>
            
            {/* Background Glows */}
            <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-blue-500/10 rounded-full scale-150 -z-20" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Copywriting Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="glass rounded-[3rem] p-8 aspect-video flex flex-col justify-center gap-6">
              <div className="h-2 w-1/3 bg-blue-500/30 rounded-full" />
              <div className="h-2 w-full bg-zinc-800 rounded-full" />
              <div className="h-2 w-5/6 bg-zinc-800 rounded-full" />
              <div className="h-2 w-4/6 bg-zinc-800 rounded-full" />
              <motion.div 
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 bg-blue-500 rounded-full"
              />
              <p className="text-sm font-mono text-zinc-500 mt-4 italic">"Des mots qui captivent, des designs qui convertissent."</p>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              La puissance de la <br />
              <span className="text-gradient">Rédaction Web.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Un beau site sans contenu stratégique est une coquille vide. Nos experts en rédaction web créent des textes percutants qui captent l'attention de vos visiteurs et les guident vers l'action.
            </p>
            <ul className="space-y-4">
              {['Storytelling captivant', 'SEO Copywriting', 'Appels à l\'action optimisés', 'Clarté et persuasion'].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Showcase / Tech Stack Marquee */}
        <div className="relative py-20 overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10" />
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'Vite', 'PostgreSQL', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'Prisma'].map((tech, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter opacity-20 hover:opacity-100 hover:text-blue-400 transition-all cursor-default">
                {tech}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'Vite', 'PostgreSQL', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'Prisma'].map((tech, i) => (
              <span key={`dup-${i}`} className="text-4xl md:text-6xl font-black tracking-tighter opacity-20 hover:opacity-100 hover:text-blue-400 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CallServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Target, title: "Prospection B2B & B2C", desc: "Expertise pointue en acquisition de nouveaux clients pour tous secteurs d'activité." },
    { icon: BarChart3, title: "Qualification de Leads", desc: "Identification et filtrage des prospects à haut potentiel pour vos équipes commerciales." },
    { icon: MessageCircle, title: "Sondages & Enquêtes", desc: "Collecte de données précieuses et analyse de satisfaction pour vos études de marché." },
    { icon: Rocket, title: "Appels Sortants", desc: "Campagnes proactives pour booster vos ventes et votre notoriété." },
    { icon: ShieldCheck, title: "Sécurité & Qualité", desc: "Protocoles de confidentialité stricts et formation continue de nos agents." },
    { icon: Zap, title: "Performance Garantie", desc: "Atteinte systématique de vos KPIs grâce à un management orienté résultats." }
  ];

  const stats = [
    { label: "Taux de Conversion", value: "24%", icon: TrendingUp },
    { label: "Satisfaction Client", value: "98%", icon: ThumbsUp },
    { label: "Appels / Mois", value: "500k+", icon: PhoneCall },
    { label: "Objectifs Atteints", value: "100%", icon: CheckCircle2 }
  ];

  const countries = [
    { name: "Madagascar", flag: "🇲🇬" },
    { name: "Maroc", flag: "🇲🇦" },
    { name: "Maurice", flag: "🇲🇺" },
    { name: "Sénégal", flag: "🇸🇳" },
    { name: "Tunisie", flag: "🇹🇳" }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/#services')}
          className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              Expertise & Performance
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              L'Excellence <br />
              <span className="text-gradient from-emerald-400 to-teal-500">Téléphonique.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Professionnels et experts du domaine, nous propulsons votre business via des campagnes de prospection, sondages et qualification de leads ultra-performantes.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-4 py-2 rounded-xl glass border-white/10 text-sm font-bold text-emerald-400">Projets Court Terme</div>
              <div className="px-4 py-2 rounded-xl glass border-white/10 text-sm font-bold text-teal-400">Projets Long Terme</div>
            </div>
            <Link 
              to="/demarrer-un-projet?service=call"
              className="bg-emerald-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/30"
            >
              Lancer ma campagne
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1000" 
                alt="Agents souriants" 
                className="w-full h-full object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border-emerald-500/20 hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">Performance en Direct</span>
              </div>
              <div className="text-3xl font-black">99.9%</div>
              <div className="text-xs text-zinc-500">Qualité de service</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 text-center group hover:border-emerald-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-4xl font-black mb-2 text-gradient from-white to-zinc-500">{stat.value}</div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* International Presence */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Une Force <span className="text-gradient">Multiculturelle.</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Nous disposons de collaborateurs experts de toutes langues et de tous pays, avec une présence forte en Afrique pour une proximité culturelle et linguistique optimale.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {countries.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 glass rounded-2xl border-white/5 hover:border-emerald-500/30 transition-all"
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="font-bold">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Us Section */}
        <div className="bg-emerald-500/5 rounded-[4rem] p-12 md:p-20 mb-32 border border-emerald-500/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Pourquoi nous choisir ?</h2>
              <div className="space-y-6">
                {[
                  { t: "Expertise B2B & B2C", d: "Une approche adaptée à chaque cible pour maximiser vos conversions." },
                  { t: "Flexibilité Totale", d: "Nous gérons vos projets ponctuels ou vos besoins récurrents sur le long terme." },
                  { t: "Technologie de Pointe", d: "Outils de CRM et de téléphonie IP de dernière génération." },
                  { t: "Rapport Qualité/Prix", d: "Une excellence opérationnelle à des tarifs compétitifs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                      <p className="text-zinc-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl shadow-2xl"
                alt="Collaboration"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-10" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AdminServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: PhoneIncoming, title: "Appel Entrant", desc: "Gestion professionnelle de vos flux d'appels pour une satisfaction client immédiate." },
    { icon: PhoneOutgoing, title: "Appel Sortant", desc: "Campagnes proactives et suivi rigoureux pour atteindre vos objectifs de croissance." },
    { icon: Mail, title: "Gestion Mail", desc: "Traitement rapide et précis de votre correspondance numérique pour une réactivité totale." },
    { icon: LifeBuoy, title: "Help Desk", desc: "Support de premier niveau pour résoudre les problématiques courantes de vos utilisateurs." },
    { icon: Wrench, title: "Support Technique", desc: "Assistance spécialisée pour guider vos clients dans l'utilisation de vos solutions." },
    { icon: ShieldCheck, title: "Respect des Consignes", desc: "Une exécution stricte de vos protocoles pour une qualité de service constante." }
  ];

  const stats = [
    { label: "Taux de Résolution", value: "95%", icon: CheckCircle2 },
    { label: "Temps de Réponse", value: "< 2min", icon: Clock },
    { label: "Satisfaction", value: "4.9/5", icon: Star },
    { label: "Disponibilité", value: "24/7", icon: Zap }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
              Efficacité & Dévouement
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              L'Assistance <br />
              <span className="text-gradient from-purple-400 to-pink-500">Sans Faille.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Familiarisés avec toutes les activités administratives, nos personnels dévoués sont orientés résultats et performance, dans le respect total de vos consignes.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-4 py-2 rounded-xl glass border-purple-500/20 text-sm font-bold text-purple-400 flex items-center gap-2">
                <Target className="w-4 h-4" /> Orienté Résultat
              </div>
              <div className="px-4 py-2 rounded-xl glass border-pink-500/20 text-sm font-bold text-pink-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Haute Performance
              </div>
            </div>
            <Link 
              to="/demarrer-un-projet?service=admin"
              className="bg-purple-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-400 transition-all shadow-2xl shadow-purple-500/30"
            >
              Optimiser ma gestion
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-square shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Assistante souriante" 
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border-purple-500/30 shadow-xl z-20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Agent Dédié</span>
              </div>
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-[10px] text-zinc-500 uppercase font-bold">Engagement</div>
            </motion.div>

            <div className="absolute -inset-10 bg-purple-500/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 text-center group hover:border-purple-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-4xl font-black mb-2 text-gradient from-white to-zinc-500">{stat.value}</div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* New Section: Engagement & Advantages */}
        <div className="bg-purple-500/5 rounded-[4rem] p-12 md:p-20 mb-32 border border-purple-500/10 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Un Engagement <span className="text-gradient from-purple-400 to-pink-500">Durable & Diversifié.</span></h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-10">
                Nous croyons en la force de la diversité et de l'engagement. Déléguer vos tâches administratives à nos experts n'est pas seulement un gain de temps, c'est une décision stratégique pour votre croissance.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Coins className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Optimisation Budgétaire</h4>
                    <p className="text-zinc-400">Réduisez vos coûts fixes et transformez-les en charges variables. Pas de charges sociales, pas de frais de bureau, juste du résultat.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center shrink-0">
                    <Shield className="w-7 h-7 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Normes Internationales</h4>
                    <p className="text-zinc-400">Nous respectons scrupuleusement les normes RGPD et les standards internationaux de protection des données pour une sécurité totale.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Users2 className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Gestion Simplifiée</h4>
                    <p className="text-zinc-400">Plus besoin de gérer les recrutements ou les absences. Nous assurons la continuité de service quoi qu'il arrive.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                <motion.img 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=1000" 
                  alt="Équipe diversifiée" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Animated Vectors/Shapes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-2 border-dashed border-purple-500/30 rounded-full -z-10"
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl rounded-full -z-10"
              />
              
              {/* Floating Compliance Badge */}
              <div className="absolute top-10 -left-10 glass p-4 rounded-2xl border-white/10 shadow-2xl z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase">Compliance</div>
                  <div className="text-sm font-bold">ISO & RGPD Ready</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />
        </div>
      </div>
    </div>
  );
};

const SupportServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: MonitorSmartphone, title: "Bureau à Distance", desc: "Intervention rapide via AnyDesk et Remote Desktop pour résoudre vos problèmes en temps réel." },
    { icon: Video, title: "Google Meet Support", desc: "Assistance visuelle en direct pour vous guider pas à pas dans vos configurations." },
    { icon: HardDrive, title: "Maintenance Serveur", desc: "Surveillance et optimisation de vos infrastructures critiques 24h/24." },
    { icon: ShieldAlert, title: "Sécurité & Backup", desc: "Protection contre les menaces et gestion rigoureuse de vos sauvegardes de données." },
    { icon: Laptop, title: "Helpdesk Utilisateur", desc: "Un point de contact unique pour toutes les demandes techniques de vos collaborateurs." },
    { icon: Wrench, title: "Dépannage Logiciel", desc: "Installation, mise à jour et résolution de conflits logiciels à distance." }
  ];

  const tools = [
    { name: "Google Meet", icon: Video, color: "text-blue-400" },
    { name: "AnyDesk", icon: MonitorSmartphone, color: "text-red-400" },
    { name: "Remote Desktop", icon: Laptop, color: "text-blue-500" },
    { name: "Support Facture", icon: FileText, color: "text-emerald-400" }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              Support & Maintenance
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Votre Expert <br />
              <span className="text-gradient from-blue-400 to-indigo-500">À Distance.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Bénéficiez d'une assistance technique de haut niveau. Nos techniciens experts interviennent instantanément pour garantir la continuité de votre activité.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              {tools.map((tool, i) => (
                <div key={i} className="glass p-4 rounded-2xl flex items-center gap-3 border-white/5">
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                  <span className="font-bold text-sm">{tool.name}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/demarrer-un-projet?service=support"
              className="bg-blue-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all shadow-2xl shadow-blue-500/30"
            >
              Demander une assistance
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-video shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1573163231162-80113439c8f9?auto=format&fit=crop&q=80&w=1000" 
                alt="Technicien en ligne" 
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border-blue-500/30 shadow-xl z-20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Support Actif</span>
              </div>
              <div className="text-2xl font-black text-white">24/7</div>
              <div className="text-[10px] text-zinc-500 uppercase font-bold">Disponibilité</div>
            </motion.div>

            <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>

        {/* Advantages Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pourquoi choisir notre <span className="text-gradient">Compagnie de Développement ?</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Nous ne nous contentons pas de résoudre vos problèmes, nous optimisons votre infrastructure pour prévenir les pannes futures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Expertise Technique", d: "Des ingénieurs certifiés sur les dernières technologies." },
              { t: "Réactivité Éclair", d: "Intervention en moins de 15 minutes pour les urgences." },
              { t: "Sécurité Maximale", d: "Chiffrement de bout en bout lors des interventions." },
              { t: "Coûts Maîtrisés", d: "Des forfaits adaptés à la taille de votre entreprise." }
            ].map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">{adv.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{adv.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ComptaServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: PieChart, title: "Analyse Financière", desc: "Vision claire de votre rentabilité et de vos flux de trésorerie." },
    { icon: Calculator, title: "Comptabilité Générale", desc: "Tenue rigoureuse de vos comptes selon les normes en vigueur." },
    { icon: TrendingUp, title: "Optimisation Fiscale", desc: "Conseils stratégiques pour réduire légalement votre charge fiscale." },
    { icon: FileText, title: "Bilans & Rapports", desc: "Production de documents financiers précis pour vos partenaires." },
    { icon: ShieldCheck, title: "Conformité Totale", desc: "Veille permanente sur les évolutions réglementaires et légales." },
    { icon: Zap, title: "Digitalisation", desc: "Outils de comptabilité en ligne pour un suivi en temps réel." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8">
              Précision & Croissance
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              La clarté de vos <br />
              <span className="text-gradient from-orange-400 to-red-500">Chiffres.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Ne naviguez plus à vue. Nous transformons vos données comptables en leviers de croissance stratégiques pour votre entreprise.
            </p>
            <Link 
              to="/demarrer-un-projet?service=compta"
              className="bg-orange-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-400 transition-all shadow-2xl shadow-orange-500/30"
            >
              Sécuriser ma gestion
            </Link>
          </motion.div>

          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="glass rounded-[3rem] p-10 relative z-10"
            >
              <div className="flex items-end gap-4 h-48">
                {[40, 70, 55, 90, 65, 85].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.2, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-orange-500 to-red-500 rounded-t-xl"
                  />
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm font-bold text-zinc-500">Croissance Annuelle</span>
                <span className="text-2xl font-black text-orange-400">+24.8%</span>
              </div>
            </motion.div>
            <div className="absolute -inset-10 bg-orange-500/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-orange-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LegalServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Gavel, title: "Conseil Juridique", desc: "Accompagnement stratégique pour toutes vos décisions d'entreprise." },
    { icon: Shield, title: "Protection des Actifs", desc: "Sécurisation de votre propriété intellectuelle et de vos biens." },
    { icon: FileText, title: "Rédaction de Contrats", desc: "Élaboration de contrats solides pour protéger vos intérêts." },
    { icon: Scale, title: "Gestion des Litiges", desc: "Résolution efficace et discrète de vos différends juridiques." },
    { icon: BookOpen, title: "Veille Réglementaire", desc: "Anticipation des changements législatifs impactant votre secteur." },
    { icon: UserCheck, title: "Audit de Conformité", desc: "Vérification complète de la conformité de vos processus." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
              Sécurité & Droit
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Bâtir sur des <br />
              <span className="text-gradient from-indigo-400 to-blue-500">Bases Solides.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              La loi ne doit pas être un frein, mais un bouclier. Nous sécurisons votre présent pour garantir votre avenir.
            </p>
            <Link 
              to="/demarrer-un-projet?service=juridique"
              className="bg-indigo-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-400 transition-all shadow-2xl shadow-indigo-500/30"
            >
              Protéger mon entreprise
            </Link>
          </motion.div>

          <div className="relative">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass rounded-[3rem] p-10 relative z-10 flex items-center justify-center"
            >
              <div className="relative">
                <Scale className="w-32 h-32 text-indigo-500" />
                <motion.div 
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-full h-1 bg-indigo-500/30" />
                </motion.div>
              </div>
            </motion.div>
            <div className="absolute -inset-10 bg-indigo-500/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SavServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Heart, title: "Empathie Client", desc: "Une approche humaine pour transformer chaque problème en solution positive." },
    { icon: Zap, title: "Résolution Rapide", desc: "Traitement prioritaire des demandes pour minimiser l'insatisfaction." },
    { icon: MessageCircle, title: "Support Multicanal", desc: "Présence là où vos clients se trouvent : chat, mail, téléphone." },
    { icon: ThumbsUp, title: "Fidélisation", desc: "Stratégies post-résolution pour renforcer le lien avec votre marque." },
    { icon: Activity, title: "Analyse des Retours", desc: "Identification des points d'amélioration de vos produits/services." },
    { icon: Headphones, title: "Disponibilité", desc: "Une équipe prête à répondre quand vos clients en ont besoin." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-8">
              Sourire & Satisfaction
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Le bonheur de <br />
              <span className="text-gradient from-rose-400 to-orange-500">Vos Clients.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Le service après-vente n'est pas un coût, c'est votre meilleur investissement marketing. Nous prenons soin de vos clients comme des nôtres.
            </p>
            <Link 
              to="/demarrer-un-projet?service=sav"
              className="bg-rose-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-rose-400 transition-all shadow-2xl shadow-rose-500/30"
            >
              Enchanter mes clients
            </Link>
          </motion.div>

          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass rounded-[3rem] p-10 relative z-10 flex flex-col items-center gap-6"
            >
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.div key={i} animate={{ scale: [1, 1.2, 1] }} transition={{ delay: i * 0.1, repeat: Infinity }} >
                    <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-4xl font-black">98%</div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Satisfaction Score</div>
              </div>
            </motion.div>
            <div className="absolute -inset-10 bg-rose-500/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-rose-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* New Section: Satisfied Customer & Advantages */}
        <div className="space-y-32">
          {/* Satisfied Customer Photo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[4rem] overflow-hidden aspect-[21/9] group"
          >
            <img 
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=2000" 
              alt="Client satisfait" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-transparent to-transparent flex items-end p-12 md:p-20">
              <div className="max-w-2xl">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  "Leur équipe SAV a transformé nos détracteurs en <span className="text-rose-400">ambassadeurs</span> de marque."
                </h3>
                <p className="text-zinc-300 text-lg font-medium">— Directeur Relation Client, Retail Global</p>
              </div>
            </div>
          </motion.div>

          {/* Advantages of Delegation Section */}
          <div className="bg-rose-500/5 rounded-[4rem] p-12 md:p-20 border border-rose-500/10 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-8">Pourquoi nous <span className="text-gradient from-rose-400 to-orange-500">Déléguer votre SAV ?</span></h2>
                <p className="text-xl text-zinc-400 leading-relaxed mb-10">
                  L'externalisation de votre service après-vente vous permet de vous concentrer sur votre cœur de métier tout en garantissant une expérience client irréprochable et professionnelle.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-rose-400" />
                    </div>
                    <h4 className="text-xl font-bold">Traitement des Factures</h4>
                    <p className="text-zinc-500 text-sm">Gestion rigoureuse de la facturation, des avoirs et des litiges de paiement pour une fluidité financière.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <ShieldAlert className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-xl font-bold">Gestion des Réclamations</h4>
                    <p className="text-zinc-500 text-sm">Traitement diplomatique et efficace des plaintes pour désamorcer les tensions et trouver des solutions.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-pink-400" />
                    </div>
                    <h4 className="text-xl font-bold">Suivi de Commandes</h4>
                    <p className="text-zinc-500 text-sm">Information en temps réel de vos clients sur l'état de leurs livraisons et résolution des problèmes logistiques.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-bold">Enquêtes & Retours</h4>
                    <p className="text-zinc-500 text-sm">Collecte proactive des avis clients pour identifier les axes d'amélioration de vos produits.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1000" 
                    alt="Support Client Professionnel" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-rose-500/20 blur-[100px] -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CmServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const features = [
    { icon: Share2, title: "Stratégie Sociale", desc: "Planification de contenu alignée sur vos objectifs de marque." },
    { icon: PenTool, title: "Création de Contenu", desc: "Visuels et textes percutants pour engager votre audience." },
    { icon: Users, title: "Gestion de Communauté", desc: "Interaction quotidienne avec vos abonnés pour créer du lien." },
    { icon: TrendingUp, title: "Croissance Organique", desc: "Augmentation de votre visibilité sans dépendre uniquement de la pub." },
    { icon: Activity, title: "Reporting Détaillé", desc: "Analyse précise de vos KPIs et de l'engagement." },
    { icon: Zap, title: "Veille Tendances", desc: "Réactivité face aux nouvelles modes et formats émergents." }
  ];

  const reactions = [
    { emoji: "❤️", label: "J'adore", color: "text-red-500" },
    { icon: ThumbsUp, label: "J'aime", color: "text-blue-500" },
    { emoji: "😘", label: "Bisou", color: "text-pink-500" },
    { emoji: "🔥", label: "Feu", color: "text-orange-500" },
    { emoji: "🚀", label: "Fusée", color: "text-purple-500" },
    { emoji: "✨", label: "Brille", color: "text-yellow-400" }
  ];

  const socialLogos = [
    { name: "Facebook", icon: Facebook, color: "text-blue-600" },
    { name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
    { name: "TikTok", icon: Music, color: "text-white" } // Using Music icon as placeholder for TikTok
  ];

  const articles = [
    { 
      title: "Comment doubler votre engagement en 30 jours ?", 
      tag: "Stratégie",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
      content: `L'engagement sur les réseaux sociaux est le moteur de votre croissance digitale. En 2026, l'algorithme ne privilégie plus seulement le nombre de likes, mais la profondeur des interactions. Pour doubler votre engagement en seulement 30 jours, vous devez opérer un virage stratégique majeur : passez d'une logique de diffusion descendante à une logique de conversation horizontale.

Voici les piliers fondamentaux de cette transformation :

1. L'Authenticité Radicale : Les audiences sont lassées des flux parfaits et filtrés. Montrez les coulisses de votre entreprise, partagez vos défis quotidiens et humanisez votre marque. Une vidéo "brute" de 15 secondes a souvent plus d'impact qu'une production studio coûteuse.

2. La Règle des 60 Minutes : L'algorithme analyse la vitesse de réaction. Répondez à chaque commentaire de manière personnalisée dans l'heure qui suit la publication. Cela signale à la plateforme que votre contenu génère une conversation active, ce qui booste instantanément votre portée organique.

3. Maîtrise des Formats Verticaux : Les Reels et TikTok sont les rois de la découverte. Utilisez-les pour attirer de nouveaux abonnés, puis utilisez les Stories pour approfondir la relation. Chaque format a un rôle précis dans votre entonnoir d'engagement.

En appliquant rigoureusement ces méthodes, nos partenaires constatent une augmentation moyenne de 120% de leurs interactions dès le premier mois. C'est un travail de longue haleine qui nécessite une attention constante aux détails et une compréhension fine de votre audience cible.`
    },
    { 
      title: "Le secret des vidéos virales sur TikTok enfin révélé.", 
      tag: "Viral",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=1000",
      content: `La viralité sur TikTok n'est pas un coup de chance aléatoire, c'est le résultat d'une ingénierie psychologique précise. Pour qu'une vidéo devienne virale, elle doit satisfaire deux indicateurs clés : le taux de complétion et le taux de partage.

Le Secret de l'Accroche (The Hook) :
Les deux premières secondes déterminent le destin de votre vidéo. Vous devez "arrêter le pouce" de l'utilisateur. Utilisez des contrastes visuels forts, des questions provocatrices ou des promesses de valeur immédiate. Si l'utilisateur ne comprend pas l'intérêt de la vidéo en moins de 2 secondes, il passera à la suivante.

La Structure Narrative :
Une vidéo virale suit souvent une structure en trois actes compressée :
- L'Accroche : Capte l'attention et pose une problématique.
- Le Développement : Délivre la promesse ou l'information de manière rythmée.
- Le Rebond (The Payoff) : La conclusion satisfaisante ou l'appel à l'action.

L'Utilisation Stratégique de l'Audio :
Ne vous contentez pas d'utiliser une musique tendance. Utilisez-la pour rythmer vos coupures au montage. Le cerveau humain adore la synchronisation entre l'image et le son. Les tendances sonores agissent comme des ancres mémorielles pour votre audience.

Enfin, n'oubliez pas les "boucles de curiosité". Posez une question au début et ne donnez la réponse qu'à la toute fin pour maximiser le temps de visionnage. Plus le temps de visionnage est élevé, plus TikTok poussera votre vidéo vers de nouveaux utilisateurs.`
    },
    { 
      title: "Pourquoi votre marque doit être sur LinkedIn en 2026.", 
      tag: "B2B",
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1000",
      content: `LinkedIn a achevé sa mutation : ce n'est plus un simple annuaire de CV, c'est devenu le carrefour mondial de l'influence B2B. En 2026, ne pas y être présent de manière active revient à être invisible pour vos partenaires commerciaux et vos futurs talents.

Le Pouvoir du Personal Branding :
Les entreprises n'achètent plus à d'autres entreprises, les humains achètent à d'autres humains. Le Personal Branding de vos dirigeants et de vos employés est votre actif le plus précieux. Un post publié par un employé a 8 fois plus d'engagement qu'un post publié par la page entreprise. C'est l'ère de l'Employee Advocacy.

Le Thought Leadership :
Pour dominer LinkedIn, vous devez devenir une source d'autorité. Ne partagez pas seulement vos actualités, partagez votre vision du marché, vos analyses de tendances et vos solutions aux problèmes de votre secteur. C'est ainsi que vous bâtissez une confiance inébranlable avant même le premier contact commercial.

L'Algorithme de Proximité :
LinkedIn privilégie désormais les relations réelles et les interactions de qualité. Engagez-vous sur les posts de vos prospects, commentez intelligemment et apportez de la valeur sans rien attendre en retour immédiatement. Le "Social Selling" est un marathon, pas un sprint.

Une présence optimisée sur LinkedIn permet de réduire le cycle de vente de 30% et d'augmenter le taux de conversion de vos leads qualifiés de manière spectaculaire. C'est l'outil ultime pour bâtir une réputation solide dans le monde professionnel moderne.`
    }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
              Influence & Engagement
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Dominez les <br />
              <span className="text-gradient from-cyan-400 to-emerald-500">Réseaux.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Ne soyez pas juste présent, soyez influent. Nous créons des conversations qui comptent et bâtissons des communautés passionnées autour de votre marque.
            </p>
            
            {/* Social Logos */}
            <div className="flex gap-6 mb-12">
              {socialLogos.map((social, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 glass rounded-2xl ${social.color} hover:scale-110 transition-transform`}
                >
                  <social.icon className="w-8 h-8" />
                </motion.div>
              ))}
            </div>

            <Link 
              to="/demarrer-un-projet?service=cm"
              className="bg-cyan-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30"
            >
              Booster mon influence
            </Link>
          </motion.div>

          <div className="relative">
            {/* Decorative Floating Images */}
            <motion.img 
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=200"
              className="absolute -top-20 -right-20 w-40 h-40 rounded-3xl object-cover shadow-2xl rotate-12 z-0 opacity-50 hidden md:block"
              animate={{ y: [0, 20, 0], rotate: [12, 15, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
              referrerPolicy="no-referrer"
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=200"
              className="absolute -bottom-20 -left-20 w-40 h-40 rounded-3xl object-cover shadow-2xl -rotate-12 z-0 opacity-50 hidden md:block"
              animate={{ y: [0, -20, 0], rotate: [-12, -15, -12] }}
              transition={{ duration: 5, repeat: Infinity }}
              referrerPolicy="no-referrer"
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=200"
              className="absolute -top-40 left-1/4 w-32 h-32 rounded-3xl object-cover shadow-2xl rotate-6 z-0 opacity-40 hidden md:block"
              animate={{ y: [0, 15, 0], rotate: [6, 8, 6] }}
              transition={{ duration: 6, repeat: Infinity }}
              referrerPolicy="no-referrer"
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=200"
              className="absolute top-1/2 -right-40 -translate-y-1/2 w-36 h-36 rounded-3xl object-cover shadow-2xl -rotate-6 z-0 opacity-40 hidden md:block"
              animate={{ x: [0, 10, 0], rotate: [-6, -8, -6] }}
              transition={{ duration: 7, repeat: Infinity }}
              referrerPolicy="no-referrer"
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=200"
              className="absolute bottom-1/2 -left-40 translate-y-1/2 w-28 h-28 rounded-3xl object-cover shadow-2xl rotate-12 z-0 opacity-40 hidden md:block"
              animate={{ x: [0, -10, 0], rotate: [12, 15, 12] }}
              transition={{ duration: 8, repeat: Infinity }}
              referrerPolicy="no-referrer"
            />

            {/* Animated Reactions Overlay */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
              {reactions.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100, x: Math.random() * 200 - 100 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    y: [-20, -200],
                    x: [Math.random() * 100 - 50, Math.random() * 200 - 100]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity, 
                    delay: i * 0.5 
                  }}
                  className="absolute bottom-0 left-1/2 text-3xl"
                >
                  {r.emoji || <r.icon className={`w-8 h-8 ${r.color}`} />}
                </motion.div>
              ))}
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="glass rounded-[3rem] p-10 relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="glass p-4 rounded-2xl flex flex-col items-center gap-2">
                <ThumbsUp className="text-cyan-400" />
                <span className="text-xl font-black">+12k</span>
                <span className="text-[10px] uppercase font-bold text-zinc-500">J'aime</span>
              </div>
              <div className="glass p-4 rounded-2xl flex flex-col items-center gap-2">
                <Share2 className="text-emerald-400" />
                <span className="text-xl font-black">+4.5k</span>
                <span className="text-[10px] uppercase font-bold text-zinc-500">Partages</span>
              </div>
              <div className="col-span-2 glass p-4 rounded-2xl flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800" />
                  ))}
                </div>
                <span className="text-xs font-bold text-cyan-400">Communauté Active</span>
              </div>
            </motion.div>
            <div className="absolute -inset-10 bg-cyan-500/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>

        {/* Attention Grabbing Articles */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">Contenus qui <span className="text-gradient">Captivent</span></h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedArticle(article)}
                className="glass rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group cursor-pointer overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-3 block">{article.tag}</span>
                  <h3 className="text-lg font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs">
                    <Clock className="w-3 h-3" /> 5 min de lecture
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Section: Human Connection */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              L'impact d'une <br />
              <span className="text-gradient from-cyan-400 to-blue-500">Connexion Réelle.</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              Parce que derrière chaque écran se trouve un humain, nous humanisons votre communication pour créer des émotions durables. Un simple sourire, une réponse attentionnée, et votre marque devient inoubliable.
            </p>
            <div className="flex items-center gap-4 text-cyan-400 font-bold">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <span>+85% de fidélisation client</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1000" 
                alt="Engagement mobile" 
                className="w-full h-full object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-zinc-950 text-zinc-100 w-full max-w-2xl rounded-[2.5rem] relative z-10 border border-white/10 overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
              >
                <div className="h-64 w-full relative">
                  <img src={selectedArticle.image} className="w-full h-full object-cover" alt={selectedArticle.title} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 transition-colors z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4 block">{selectedArticle.tag}</span>
                  <h2 className="text-3xl font-bold mb-6 leading-tight">{selectedArticle.title}</h2>
                  <div className="text-zinc-400 leading-relaxed whitespace-pre-wrap text-lg">
                    {selectedArticle.content}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <PenTool className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-base font-bold">Expert CM</div>
                        <div className="text-sm text-zinc-500">Stratège Digital</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="bg-cyan-500 text-zinc-950 px-8 py-3 rounded-xl font-bold text-base hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AiServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Cpu, title: "Automatisation Intelligente", desc: "Optimisez vos processus avec des agents IA autonomes." },
    { icon: Zap, title: "Analyse de Données", desc: "Extrayez des insights précieux de vos données grâce au Machine Learning." },
    { icon: MessageSquare, title: "Chatbots Avancés", desc: "Support client 24/7 avec compréhension du langage naturel." },
    { icon: Target, title: "Prédiction & Stratégie", desc: "Anticipez les tendances du marché avec des modèles prédictifs." },
    { icon: ShieldCheck, title: "Sécurité IA", desc: "Protection de vos données et éthique dans l'utilisation de l'IA." },
    { icon: Rocket, title: "Innovation Continue", desc: "Intégration des dernières avancées en IA générative." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
              Intelligence Artificielle & Automatisation
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              L'IA au service de <br />
              <span className="text-gradient from-purple-400 to-blue-500">votre Croissance.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Propulsez votre entreprise dans l'ère de l'intelligence. Nous concevons des solutions IA sur mesure pour automatiser vos tâches et décupler votre efficacité.
            </p>
            <Link to="/demarrer-un-projet?service=ai" className="bg-purple-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-400 transition-all shadow-2xl shadow-purple-500/30">
              Automatiser mon business
            </Link>
          </motion.div>
          <div className="relative">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[100px] rounded-full" />
            <div className="glass rounded-[3rem] p-10 relative z-10 aspect-square flex items-center justify-center">
              <Cpu className="w-32 h-32 text-purple-400 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const africanCountries = [
  { name: "Afrique du Sud", code: "za" },
  { name: "Algérie", code: "dz" },
  { name: "Angola", code: "ao" },
  { name: "Bénin", code: "bj" },
  { name: "Cameroun", code: "cm" },
  { name: "Côte d'Ivoire", code: "ci" },
  { name: "Égypte", code: "eg" },
  { name: "Éthiopie", code: "et" },
  { name: "Ghana", code: "gh" },
  { name: "Kenya", code: "ke" },
  { name: "Madagascar", code: "mg" },
  { name: "Maroc", code: "ma" },
  { name: "Maurice", code: "mu" },
  { name: "Nigeria", code: "ng" },
  { name: "Sénégal", code: "sn" },
  { name: "Tunisie", code: "tn" }
];

const AfricanFlagsMarquee = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-zinc-900/50 border-y border-white/5">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Notre Expertise en <span className="text-gradient">Outsourcing Africain</span></h3>
        <p className="text-zinc-400">Une présence forte sur tout le continent pour un recrutement sans frontières.</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10 pointer-events-none" />
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center whitespace-nowrap"
      >
        {[...africanCountries, ...africanCountries].map((country, i) => (
          <div key={i} className="flex flex-col items-center gap-4 group">
            <div className="w-32 h-20 rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <img 
                src={`https://flagcdn.com/w160/${country.code}.png`} 
                alt={country.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold text-zinc-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest">{country.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const jobTitles = [
  "Développeur Web", "Expert IA", "Conseiller Client", "Assistant Administratif",
  "Comptable", "Conseiller Juridique", "Responsable RH", "Agent SAV",
  "Community Manager", "Technicien Support", "Télésecrétaire Médical",
  "Data Scientist", "UX Designer", "Chef de Projet", "Commercial B2B",
  "Expert Marketing", "Analyste Financier", "Développeur Mobile",
  "Architecte Cloud", "Spécialiste Cybersécurité"
];

const JobTitlesMarquee = () => {
  return (
    <div className="relative py-10 overflow-hidden bg-blue-500/5 border-y border-white/5 mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10 pointer-events-none" />
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center px-8"
        >
          {[...jobTitles, ...jobTitles, ...jobTitles, ...jobTitles].map((title, i) => (
            <span key={i} className="text-2xl md:text-3xl font-black uppercase tracking-tighter opacity-30 hover:opacity-100 hover:text-orange-400 transition-all cursor-default">
              {title}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const TalentSearchSection = () => {
  const talents = [
    { role: "Développeur Full-Stack", exp: "5 ans", skills: ["React", "Node.js", "AWS"], lang: "FR/EN" },
    { role: "Expert Relation Client", exp: "3 ans", skills: ["CRM", "Vente", "Support"], lang: "FR/EN/ES" },
    { role: "Comptable Senior", exp: "8 ans", skills: ["Audit", "Fiscalité", "SAP"], lang: "FR/EN" },
    { role: "Community Manager", exp: "4 ans", skills: ["Social Media", "Ads", "Design"], lang: "FR/EN" }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trouvez votre <span className="text-gradient">Prochain Talent.</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
            Accédez à notre base de données de profils qualifiés et présélectionnés pour accélérer votre croissance.
          </p>
        </div>

        <JobTitlesMarquee />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {talents.map((talent, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-xl font-bold mb-2">{talent.role}</h4>
              <div className="text-sm text-zinc-500 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" /> {talent.exp} d'expérience
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {talent.skills.map(skill => (
                  <span key={skill} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-zinc-400 uppercase font-bold">{skill}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs font-bold text-orange-400">{talent.lang}</span>
                <Link to="/demarrer-un-projet?service=rh" className="text-xs font-black uppercase tracking-widest hover:text-orange-400 transition-colors">Recruter</Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="glass p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-orange-500/20">
          <div>
            <h3 className="text-2xl font-bold mb-2">Besoin d'un profil spécifique ?</h3>
            <p className="text-zinc-400">Dites-nous ce que vous recherchez, nous le trouvons pour vous en moins de 72h.</p>
          </div>
          <Link 
            to="/demarrer-un-projet?service=rh"
            className="bg-orange-500 text-zinc-950 px-8 py-4 rounded-2xl font-bold hover:bg-orange-400 transition-all whitespace-nowrap"
          >
            Lancer une recherche personnalisée
          </Link>
        </div>
      </div>
    </section>
  );
};

const RhServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Users2, title: "Sourcing International", desc: "Accès à un vivier de talents qualifiés à travers le monde sans distinction d'origine." },
    { icon: Globe2, title: "Profils Multilingues", desc: "Recrutement de collaborateurs maîtrisant plusieurs langues pour vos marchés globaux." },
    { icon: UserCheck, title: "Chasse de Tête", desc: "Approche directe des meilleurs profils pour vos postes clés, partout dans le monde." },
    { icon: Briefcase, title: "Gestion de Paie", desc: "Externalisation complète de l'administration du personnel et conformité locale." },
    { icon: ShieldCheck, title: "Conformité RH", desc: "Respect des réglementations internationales et éthique de recrutement stricte." },
    { icon: Heart, title: "Marque Employeur", desc: "Valorisation de votre image pour attirer les talents qui partagent vos valeurs." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8">
              Solutions RH & Recrutement Inclusif
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              Recruter est <span className="text-orange-400">notre métier</span>,<br />
              <span className="text-gradient from-orange-400 to-amber-500">l'optimiser est notre art.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Trouvez les profils d'exception dont votre entreprise a besoin. Nous gérons votre recrutement international avec une approche inclusive et performante.
            </p>
            <Link to="/demarrer-un-projet?service=rh" className="bg-orange-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-400 transition-all shadow-2xl shadow-orange-500/30">
              Recruter maintenant
            </Link>
          </motion.div>
          <div className="relative">
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-square shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=1200" 
                alt="Équipe souriante debout" 
                className="w-full h-full object-cover rounded-[2.5rem]" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border-orange-500/20 z-20"
            >
              <div className="text-orange-400 font-black text-3xl mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Inclusion & Diversité</div>
            </motion.div>
          </div>
        </div>

        <AfricanFlagsMarquee />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-orange-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <TalentSearchSection />
      </div>
    </div>
  );
};

const MedicalServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Clock, title: "Gestion d'Agenda", desc: "Organisation optimale de vos rendez-vous et consultations." },
    { icon: PhoneIncoming, title: "Accueil Téléphonique", desc: "Réception professionnelle de vos patients 24/7." },
    { icon: FileText, title: "Frappe Médicale", desc: "Saisie rapide et précise de vos comptes-rendus et courriers." },
    { icon: ShieldCheck, title: "Confidentialité Totale", desc: "Respect strict du secret médical et protection des données." },
    { icon: Headphones, title: "Support Patients", desc: "Réponse aux questions administratives courantes." },
    { icon: Calculator, title: "Gestion Facturation", desc: "Suivi des paiements et télétransmission (selon pays)." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              Télésecrétariat Médical
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Sérénité pour <br />
              <span className="text-gradient from-emerald-400 to-cyan-500">les Praticiens.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Déléguez vos tâches administratives stressantes. Nous assistons les docteurs et hôpitaux pour une organisation parfaite.
            </p>
            <Link to="/demarrer-un-projet?service=medical" className="bg-emerald-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/30">
              Libérer mon temps
            </Link>
          </motion.div>
          <div className="relative">
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1505751172107-573967a4f22a?auto=format&fit=crop&q=80&w=800" alt="Médical" className="w-full h-full object-cover rounded-[2.5rem]" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MultimediaServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Image, title: "Retouche Photo", desc: "Correction colorimétrique, détourage et amélioration de vos visuels." },
    { icon: Video, title: "Montage Vidéo", desc: "Création de vidéos percutantes pour vos réseaux sociaux et publicités." },
    { icon: Zap, title: "Amélioration", desc: "Optimisation de la qualité de vos médias existants (upscaling, réduction de bruit)." },
    { icon: PenTool, title: "Création de Contenu", desc: "Conception graphique et visuelle adaptée à votre identité de marque." },
    { icon: Share2, title: "Formatage Social", desc: "Adaptation de vos contenus pour tous les réseaux (Reels, TikTok, YouTube)." },
    { icon: Layout, title: "Design Graphique", desc: "Logos, bannières et supports de communication visuelle." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest mb-8">
              Solutions Multimédia
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Sublimez votre <br />
              <span className="text-gradient from-pink-400 to-rose-500">Image de Marque.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              De la retouche photo au montage vidéo professionnel, nous donnons vie à vos idées avec une qualité visuelle exceptionnelle.
            </p>
            <Link to="/demarrer-un-projet?service=multimedia" className="bg-pink-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-pink-400 transition-all shadow-2xl shadow-pink-500/30">
              Démarrer mon projet
            </Link>
          </motion.div>
          <div className="relative">
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-video">
              <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200" alt="Multimédia" className="w-full h-full object-cover rounded-[2.5rem]" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-pink-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StartProject = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');
  const [selectedService, setSelectedService] = useState(() => {
    if (preselectedService) {
      const service = services.find(s => s.id === preselectedService);
      return service ? service.title : "Autre";
    }
    return "Autre";
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xeepggvo', { // Remplacez par votre ID Formspree
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Nouveau Projet : ${data.company} - ${data.name}` }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Formspree error');
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback to mailto
      const subject = encodeURIComponent(`Nouveau Projet : ${data.project_name} - ${data.name}`);
      const body = encodeURIComponent(
        `Nom: ${data.name}\nEmail: ${data.email}\nPays: ${data.country}\nEntreprise: ${data.company}\nService: ${data.service}\nBudget: ${data.budget}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:contact@ted-companygroup.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 overflow-hidden relative">
      {/* Background Animations */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          initial={{ x: -20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Retour à l'accueil
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              Nouveau Projet
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              Donnons vie à <br />
              votre <span className="text-gradient">Vision.</span>
            </h1>
            <p className="text-2xl text-zinc-400 leading-relaxed mb-12">
              Nous sommes <span className="text-blue-400 font-bold">très impatients</span> de faire connaissance avec vos souhaits et vos demandes pour faire décoller votre activité et votre business.
            </p>

            <div className="space-y-8">
              {[
                { icon: Rocket, title: "Accélération", desc: "Nous mettons toute notre énergie pour propulser votre projet rapidement." },
                { icon: Target, title: "Précision", desc: "Chaque détail compte pour atteindre vos objectifs stratégiques." },
                { icon: Heart, title: "Passion", desc: "Nous aimons ce que nous faisons, et cela se voit dans nos résultats." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-[3rem] p-8 md:p-12 relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] -z-10" />
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-[3rem] p-12 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold">Projet Lancé !</h3>
                <p className="text-zinc-400">
                  Merci pour votre confiance. Nos experts analysent votre demande et vous recontacteront à l'adresse <strong>contact@ted-companygroup.com</strong> sous 24h.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:underline font-bold"
                >
                  Modifier ou renvoyer
                </button>
              </motion.div>
            ) : (
              <form 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Nom Complet</label>
                    <input name="name" type="text" required className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Jean Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Email Professionnel</label>
                    <input name="email" type="email" required className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="jean@entreprise.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Pays</label>
                    <CountryAutocomplete 
                      name="country" 
                      required 
                      className="h-full" 
                      onCountryChange={(country) => setCountryCode(country.code)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Téléphone</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-zinc-500 font-medium pointer-events-none">
                        {countryCode}
                      </div>
                      <input 
                        name="phone" 
                        type="tel" 
                        required 
                        className={`w-full glass bg-white/5 border-white/10 rounded-xl py-4 focus:outline-none focus:border-blue-500/50 transition-colors ${countryCode ? 'pl-20' : 'px-4'}`}
                        placeholder="00 00 00 00" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Nom de l'Entreprise</label>
                    <input name="company" type="text" className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Votre Société" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Service Souhaité</label>
                    <select 
                      name="service" 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.title} className="bg-zinc-900">{s.title}</option>
                      ))}
                      <option className="bg-zinc-900">Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Budget Estimé</label>
                    <select name="budget" className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
                      <option className="bg-zinc-900">Moins de 1 000€</option>
                      <option className="bg-zinc-900">1 000€ - 5 000€</option>
                      <option className="bg-zinc-900">5 000€ - 10 000€</option>
                      <option className="bg-zinc-900">Plus de 10 000€</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400">Détails du Projet</label>
                  <textarea name="message" rows={5} required className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Parlez-nous de vos objectifs, de vos défis et de ce que vous attendez de nous..." />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-zinc-950 font-bold py-5 rounded-2xl hover:bg-blue-400 transition-all shadow-2xl shadow-blue-500/30 text-lg flex items-center justify-center gap-3 group disabled:opacity-50"
                >
                  {isSubmitting ? "Envoi en cours..." : "Lancer l'aventure"} <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-zinc-500">
                  En envoyant ce formulaire, vous acceptez d'être recontacté par nos experts sous 24h ouvrées.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Smiling People Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] overflow-hidden aspect-[21/9] mb-20 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000" 
            alt="Notre équipe souriante" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <h3 className="text-4xl font-bold mb-4">Une équipe passionnée à votre service.</h3>
              <p className="text-zinc-300 text-lg">
                Derrière chaque projet réussi, il y a des visages, des sourires et une volonté inébranlable de réussir ensemble.
              </p>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-zinc-950 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Expert" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/5">
          {[
            { label: "Réponse sous", value: "24h" },
            { label: "Satisfaction", value: "99%" },
            { label: "Projets livrés", value: "1.2k+" },
            { label: "Support", value: "24/7" }
          ].map((badge, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-blue-500 mb-1">{badge.value}</div>
              <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Service non trouvé</h1>
        <button onClick={() => navigate('/')} className="text-blue-400 flex items-center gap-2 mx-auto">
          <ArrowLeft /> Retour à l'accueil
        </button>
      </div>
    </div>
  );

  if (id === 'web') return <WebServiceDetail service={service} />;
  if (id === 'call') return <CallServiceDetail service={service} />;
  if (id === 'admin') return <AdminServiceDetail service={service} />;
  if (id === 'support') return <SupportServiceDetail service={service} />;
  if (id === 'compta') return <ComptaServiceDetail service={service} />;
  if (id === 'juridique') return <LegalServiceDetail service={service} />;
  if (id === 'sav') return <SavServiceDetail service={service} />;
  if (id === 'cm') return <CmServiceDetail service={service} />;
  if (id === 'ai') return <AiServiceDetail service={service} />;
  if (id === 'rh') return <RhServiceDetail service={service} />;
  if (id === 'medical') return <MedicalServiceDetail service={service} />;
  if (id === 'multimedia') return <MultimediaServiceDetail service={service} />;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/#services')}
          className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} p-5 mb-8 shadow-2xl shadow-blue-500/20`}>
              <service.icon className="w-full h-full text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              {service.description} Nous mettons à votre disposition une expertise pointue et des outils innovants pour garantir la réussite de vos projets.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to={`/demarrer-un-projet?service=${service.id}`}
                className="bg-blue-500 text-zinc-950 px-8 py-4 rounded-2xl font-bold hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/20"
              >
                Demander un devis
              </Link>
              <button 
                onClick={() => navigate('/')}
                className="glass px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                En savoir plus
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-[4rem] p-6 aspect-video overflow-hidden">
              <img 
                src={service.image || `https://picsum.photos/seed/${service.id}/800/600`} 
                alt={service.title}
                className="w-full h-full object-cover rounded-[3rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-30`} />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Expertise', desc: 'Une équipe de spécialistes dédiés à votre réussite.' },
            { title: 'Qualité', desc: 'Un standard de service élevé et constant.' },
            { title: 'Support', desc: 'Un accompagnement personnalisé à chaque étape.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold mb-4 text-blue-400">{item.title}</h4>
              <p className="text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const BlogPreview = () => {
  const navigate = useNavigate();
  const [recentPosts, setRecentPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const q = query(collection(db, 'blog_posts'), where('published', '==', true), orderBy('date', 'desc'), limit(2));
        const snap = await getDocs(q);
        if (!snap.empty) {
          setRecentPosts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setRecentPosts([
            {
              title: 'L\'Impact de l\'IA sur l\'Externalisation en 2026',
              slug: 'impact-ia-externalisation-2026',
              category: 'IA & Innovation',
              date: new Date().toISOString(),
              imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
            },
            {
              title: 'Pourquoi Madagascar est le hub BPO de demain',
              slug: 'madagascar-hub-bpo',
              category: 'Relation Client',
              date: new Date(Date.now() - 86400000).toISOString(),
              imageUrl: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=800'
            }
          ]);
        }
      } catch (e) {
        setRecentPosts([
          {
            title: 'L\'Impact de l\'IA sur l\'Externalisation en 2026',
            slug: 'impact-ia-externalisation-2026',
            category: 'IA & Innovation',
            date: new Date().toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Pourquoi Madagascar est le hub BPO de demain',
            slug: 'madagascar-hub-bpo',
            category: 'Relation Client',
            date: new Date(Date.now() - 86400000).toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=800'
          }
        ]);
      }
    };
    fetchRecent();
  }, []);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Actualités
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Notre <span className="text-gradient">Blog.</span></h2>
          </div>
          <Link 
            to="/blog"
            className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 font-bold uppercase text-xs tracking-widest transition-colors mb-2"
          >
            Tout voir <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {recentPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-[3rem] overflow-hidden group cursor-pointer border border-white/5 flex flex-col md:flex-row"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-4">
                  {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-black text-blue-400 uppercase tracking-widest group-hover:gap-4 transition-all mt-auto">
                  Lire <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

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
      <Services />
      <Process />
      <BlogPreview />
      <Contact />
    </>
  );
};

const LoadingScreen = ({ onComplete, theme }: { onComplete: () => void, theme: string }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  const isLight = theme === 'light';

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center p-6 ${isLight ? 'bg-zinc-50' : 'bg-zinc-950'}`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center relative"
      >
        {/* Blue Glow behind logo */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-10 bg-blue-500/20 blur-[60px] rounded-full -z-10"
        />

        {/* Animated Logo */}
        <motion.img 
          src="https://www.ted-companygroup.com/assets%20ancien/img/logos/ted-company-with-letter.png" 
          alt="Ted-Company Group Logo" 
          className="h-20 md:h-24 w-auto mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          animate={{ 
            y: [0, -10, 0],
            filter: ["drop-shadow(0 0 10px rgba(59,130,246,0.2))", "drop-shadow(0 0 25px rgba(59,130,246,0.5))", "drop-shadow(0 0 10px rgba(59,130,246,0.2))"]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          referrerPolicy="no-referrer"
        />
        
        <div className={`text-2xl md:text-3xl font-bold tracking-tighter flex items-center gap-2 ${isLight ? 'text-zinc-950' : 'text-white'}`}>
          Ted-Company <span className="text-blue-400 font-light">Group</span>
        </div>
      </motion.div>

      <div className="w-full max-w-xs md:max-w-md space-y-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Chargement</span>
          <span className={`text-2xl font-bold tabular-nums ${isLight ? 'text-zinc-950' : 'text-white'}`}>{Math.min(progress, 100)}%</span>
        </div>
        <div className={`h-1.5 w-full rounded-full overflow-hidden border ${isLight ? 'bg-zinc-200 border-zinc-300' : 'bg-white/5 border-white/10'}`}>
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] text-center pt-4 animate-pulse">
          Innovation • Excellence • Africa
        </p>
      </div>
    </motion.div>
  );
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

  // Dynamic SEO Title & Description
  const SEOUpdater = () => {
    const location = useLocation();
    const params = useParams();
    
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
        // We'll handle this primarily in the BlogDetail component for precise titles,
        // but let's set a default here.
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

      // Track page view in Google Analytics
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-6JVBHF375J', {
          page_path: location.pathname + location.search,
          page_title: title
        });
      }
    }, [location]);

    return null;
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div key="loader">
          <LoadingScreen theme={theme} onComplete={() => setIsLoading(false)} />
        </motion.div>
      ) : (
        <motion.div 
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Router>
            <ScrollToTop />
            <SEOUpdater />
            <StructuredData />
            <div className="min-h-screen transition-colors duration-500">
              <Navbar theme={theme} toggleTheme={toggleTheme} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/service/:id" element={<ServiceDetail />} />
                <Route path="/demarrer-un-projet" element={<StartProject />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/confidentialite" element={<Confidentialite />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
              </Routes>
              <Footer />
              <Chatbot />
            </div>
          </Router>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
