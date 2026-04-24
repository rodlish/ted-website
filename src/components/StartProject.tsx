import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Rocket, Target, Heart, CheckCircle2, ChevronDown } from 'lucide-react';
import { services } from '../data/constants';
import CountryAutocomplete from './CountryAutocomplete';

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
      const response = await fetch('https://formspree.io/f/xeepggvo', {
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
              Nous sommes <span className="text-blue-400 font-bold">très impatients</span> de faire connaissance avec vos souhaits and vos demandes pour faire décoller votre activité and votre business.
            </p>

            <div className="space-y-8">
              {[
                { icon: Rocket, title: "Accélération", desc: "Nous mettons toute notre énergie pour propulser votre projet rapidement." },
                { icon: Target, title: "Précision", desc: "Chaque détail compte pour atteindre vos objectifs stratégiques." },
                { icon: Heart, title: "Passion", desc: "Nous aimons ce que nous faisons, and cela se voit dans nos résultats." }
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
            className="bg-zinc-900 dark:bg-zinc-900/50 rounded-[3rem] p-8 md:p-12 relative border border-white/10 shadow-2xl"
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
                  Merci pour votre confiance. Nos experts analysent votre demande and vous recontacteront à l'adresse <strong>contact@ted-companygroup.com</strong> sous 24h.
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
                    <label htmlFor="project-name" className="text-sm font-bold text-zinc-300">Nom Complet</label>
                    <input id="project-name" name="name" type="text" required className="w-full bg-white border-zinc-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors text-zinc-900 placeholder:text-zinc-400 shadow-inner" placeholder="Jean Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project-email" className="text-sm font-bold text-zinc-300">Email Professionnel</label>
                    <input id="project-email" name="email" type="email" required className="w-full bg-white border-zinc-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors text-zinc-900 placeholder:text-zinc-400 shadow-inner" placeholder="jean@entreprise.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="project-country" className="text-sm font-bold text-zinc-300">Pays</label>
                    <CountryAutocomplete 
                      id="project-country"
                      name="country" 
                      required 
                      onCountryChange={(country) => setCountryCode(country.code)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project-phone" className="text-sm font-bold text-zinc-300">Téléphone</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-zinc-400 font-medium pointer-events-none">
                        {countryCode}
                      </div>
                      <input 
                        id="project-phone"
                        name="phone" 
                        type="tel" 
                        required 
                        className={`w-full bg-white border-zinc-200 rounded-xl py-4 focus:outline-none focus:border-blue-500 transition-colors text-zinc-900 shadow-inner ${countryCode ? 'pl-20' : 'px-4'}`}
                        placeholder="00 00 00 00" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="project-company" className="text-sm font-bold text-zinc-300">Nom de l'Entreprise</label>
                    <input id="project-company" name="company" type="text" className="w-full bg-white border-zinc-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors text-zinc-900 placeholder:text-zinc-400 shadow-inner" placeholder="Votre Société" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="project-service" className="text-sm font-bold text-zinc-300">Service Souhaité</label>
                    <div className="relative">
                      <select 
                        id="project-service"
                        name="service" 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-white border-zinc-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none text-zinc-900 shadow-inner"
                      >
                        {services.map(s => (
                          <option key={s.id} value={s.title} className="bg-white text-zinc-900">{s.title}</option>
                        ))}
                        <option value="Autre" className="bg-white text-zinc-900">Autre</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project-budget" className="text-sm font-bold text-zinc-300">Budget Estimé</label>
                    <div className="relative">
                      <select id="project-budget" name="budget" className="w-full bg-white border-zinc-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none text-zinc-900 shadow-inner">
                        <option className="bg-white text-zinc-900">Moins de 1 000€</option>
                        <option className="bg-white text-zinc-900">1 000€ - 5 000€</option>
                        <option className="bg-white text-zinc-900">5 000€ - 10 000€</option>
                        <option className="bg-white text-zinc-900">Plus de 10 000€</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="project-details" className="text-sm font-bold text-zinc-300">Détails du Projet</label>
                  <textarea id="project-details" name="message" rows={5} required className="w-full bg-white border-zinc-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors text-zinc-900 placeholder:text-zinc-400 shadow-inner" placeholder="Parlez-nous de vos objectifs, de vos défis and de ce que nous attendons de nous..." />
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
      </div>
    </div>
  );
};

export default StartProject;
