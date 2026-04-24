import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, ChevronRight, ArrowRight, MapPin, Mail } from 'lucide-react';
import { services } from '../data/constants';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleFooterLink = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div 
              onClick={() => navigate('/')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src="https://ted-companygroup.com/image/ted-company-with-letter%20(1).png" 
                alt="Ted-Company Group Logo" 
                className="h-12 w-auto transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tighter">
                Ted-Company <span className="text-blue-400 font-light">Group</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Expert en externalisation and solutions digitales à Madagascar. Nous propulsons votre croissance grâce à l'innovation and l'excellence opérationnelle.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/tedcompanygroup/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all" aria-label="Suivez-nous sur Facebook">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.linkedin.com/company/ted-companygroup/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all" aria-label="Suivez-nous sur LinkedIn">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/tedcompanygroup/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all" aria-label="Suivez-nous sur Instagram">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-zinc-100 font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Nos Services
            </h4>
            <ul className="space-y-4">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/service/${service.id}`} className="text-zinc-500 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <button onClick={() => handleFooterLink('services')} className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-2">
                  Voir tous les services <ArrowRight className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </div>

          {/* Informations Column */}
          <div>
            <h4 className="text-zinc-100 font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Informations
            </h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => handleFooterLink('à-propos')} className="text-zinc-500 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  À propos
                </button>
              </li>
              <li>
                <Link to="/#partenaires" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  Nos Partenaires
                </Link>
              </li>
              <li>
                <Link to="/#processus" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  Notre Processus
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group font-bold">
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/carrieres" className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-2">
                  Offres d'emploi <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-zinc-100 font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Bureau</div>
                  <div className="text-sm text-zinc-300">Antananarivo, Madagascar</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Email</div>
                  <div className="text-sm text-zinc-300">contact@ted-companygroup.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-zinc-500 font-medium">
            © {new Date().getFullYear()} Ted-Company Group. Tous droits réservés.
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <Link to="/mentions-legales" className="hover:text-blue-400 transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-blue-400 transition-colors">Confidentialité</Link>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
