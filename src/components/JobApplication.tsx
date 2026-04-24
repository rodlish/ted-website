import React, { useState, FormEvent, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Upload, 
  User, 
  Mail, 
  Phone, 
  Briefcase,
  FileText,
  AlertCircle,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CountryAutocomplete from './CountryAutocomplete';

const JobApplication = () => {
  const [searchParams] = useSearchParams();
  const preselectedJob = searchParams.get('job');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [countryCode, setCountryCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, we would use FormData to upload the file to a cloud storage (like Firebase Storage)
    // and then send the metadata to a DB or Email service.
    // For this demo, we simulate a successful submission after a short delay.
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Simulation of API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      
      // If we had a real backend, we'd do something like this:
      /*
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData, // Sending multipart/form-data
      });
      */
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.button 
          initial={{ x: -20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          onClick={() => navigate('/carrieres')} 
          className="flex items-center gap-2 text-zinc-500 hover:text-blue-400 mb-12 transition-colors font-bold uppercase text-xs tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Retour aux offres
        </motion.button>

        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Formulaire de Candidature
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            Postulez chez <span className="text-gradient">Ted-Company.</span>
          </motion.h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour nous envoyer votre profil. Nous étudions chaque candidature avec la plus grande attention.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-[3rem] p-16 text-center space-y-8 border border-emerald-500/20"
          >
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white">Candidature Reçue !</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md mx-auto">
                Merci d'avoir postulé. Notre équipe RH va examiner votre profil et vous recontactera très prochainement.
              </p>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-500 text-zinc-950 px-10 py-4 rounded-2xl font-bold hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/20 inline-flex items-center gap-3"
            >
              Retour à l'accueil
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Identity Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="job-name" className="text-sm font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" /> Prénom & Nom
                  </label>
                  <input 
                    id="job-name"
                    name="name" 
                    type="text" 
                    required 
                    className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600"
                    placeholder="Ex: Jean Dupont" 
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="job-email" className="text-sm font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" /> Email Professionnel
                  </label>
                  <input 
                    id="job-email"
                    name="email" 
                    type="email" 
                    required 
                    className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600"
                    placeholder="jean@exemple.com" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="job-phone" className="text-sm font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400" /> Téléphone
                  </label>
                  <div className="relative">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <CountryAutocomplete 
                        id="job-country"
                        name="country"
                        onCountryChange={(country) => setCountryCode(country.code)}
                      />
                    </div>
                    <input 
                      id="job-phone"
                      name="phone" 
                      type="tel" 
                      required 
                      className={`w-full glass bg-white/5 border border-white/10 rounded-2xl py-4 pr-6 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600 ${countryCode ? 'pl-24' : 'pl-6'}`}
                      placeholder="03X XX XXX XX" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="job-select" className="text-sm font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-400" /> Poste souhaité
                  </label>
                  <div className="relative">
                    <select 
                      id="job-select"
                      name="job" 
                      defaultValue={preselectedJob === 'prospecteur' ? "Prospecteur Senior" : "Candidature Spontanée"}
                      className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-white appearance-none"
                    >
                      <option className="bg-zinc-900" value="Candidature Spontanée">Candidature Spontanée</option>
                      <option className="bg-zinc-900" value="Prospecteur Senior">Agent Prospecteur Senior B2B</option>
                      <option className="bg-zinc-900" value="Support Client">Support Client Bilingue</option>
                      <option className="bg-zinc-900" value="Développeur Web">Développeur Web / Full-Stack</option>
                      <option className="bg-zinc-900" value="Expert IA">Expert Intelligence Artificielle</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Upload */}
              <div className="space-y-4">
                <label htmlFor="cv-upload" className="text-sm font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" /> Votre CV (PDF, DOCX)
                </label>
                <div className={`relative border-2 border-dashed rounded-[2rem] p-10 text-center transition-all ${cvFile ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 hover:border-blue-500/50 bg-white/5 hover:bg-blue-500/5'}`}>
                  <input 
                    id="cv-upload"
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-3">
                    <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center transition-colors ${cvFile ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>
                      <Upload className="w-8 h-8" />
                    </div>
                    <div className="text-lg font-bold">
                      {cvFile ? cvFile.name : "Cliquez ou glissez votre CV ici"}
                    </div>
                    <p className="text-zinc-500 text-sm">
                      Taille max : 5 Mo
                    </p>
                  </div>
                </div>
              </div>

              {/* Message Section */}
              <div className="space-y-3">
                <label htmlFor="job-message" className="text-sm font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-blue-400" /> Lettre de motivation / Message
                </label>
                <textarea 
                  id="job-message"
                  name="message" 
                  rows={5} 
                  required 
                  className="w-full glass bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600 resize-none"
                  placeholder="Dites-nous pourquoi vous êtes la perle rare que nous recherchons..." 
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-zinc-950 py-5 rounded-[2rem] font-bold text-xl hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-4 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-4 border-zinc-950/20 border-t-zinc-950 rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma candidature
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 text-xs text-zinc-500 leading-relaxed">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p>
                  En soumettant ce formulaire, vous acceptez que Ted-Company Group traite vos données personnelles à des fins de recrutement conformément à notre politique de confidentialité.
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JobApplication;
