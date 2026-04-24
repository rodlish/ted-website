import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Globe2, Mail, Phone, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { services } from '../data/constants';
import CountryAutocomplete from './CountryAutocomplete';

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
      const response = await fetch('https://formspree.io/f/xlgobboq', {
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
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en externalisation and obtenir un devis personnalisé.
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
                    <label htmlFor="contact-name" className="text-sm font-bold text-zinc-400">Nom Complet</label>
                    <input id="contact-name" name="name" type="text" required className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-none rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors text-black dark:text-white" placeholder="Jean Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-bold text-zinc-400">Email</label>
                    <input id="contact-email" name="email" type="email" required className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-none rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors text-black dark:text-white" placeholder="jean@entreprise.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-country" className="text-sm font-bold text-zinc-400">Pays</label>
                    <CountryAutocomplete 
                      id="contact-country"
                      name="country" 
                      required 
                      onCountryChange={(country) => setCountryCode(country.code)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-bold text-zinc-400">Téléphone</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-zinc-500 font-medium pointer-events-none">
                        {countryCode}
                      </div>
                      <input 
                        id="contact-phone"
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
                    <label htmlFor="contact-service" className="text-sm font-bold text-zinc-400">Service</label>
                    <div className="relative">
                      <select 
                        id="contact-service"
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
                  <label htmlFor="contact-message" className="text-sm font-bold text-zinc-400">Message</label>
                  <textarea id="contact-message" name="message" rows={4} required className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 backdrop-blur-none rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors text-black dark:text-white" placeholder="Décrivez votre projet..." />
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

export default Contact;
