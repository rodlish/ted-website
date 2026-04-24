import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowLeft } from 'lucide-react';

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
                src="https://ted-companygroup.com/image/ted-company-with-letter%20(1).png" 
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
              aria-label="Changer le thème"
              title="Changer le thème"
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
              aria-label="Changer le thème"
              title="Changer le thème"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <button 
              className="text-zinc-100" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
              title="Ouvrir le menu"
            >
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
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fermer le menu"
                  title="Fermer le menu"
                >
                  <X className="w-8 h-8" />
                </button>
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

export default Navbar;
