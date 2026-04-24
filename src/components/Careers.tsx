import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle2, 
  Rocket, 
  Mail,
  ChevronRight,
  TrendingUp,
  Target,
  Award
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Careers = () => {
  const navigate = useNavigate();

  const job = {
    title: "Agent Prospecteur Senior B2B",
    type: "CDI - Temps Plein",
    location: "Antananarivo, Madagascar",
    department: "Développement Commercial",
    description: "Nous recherchons un Agent Prospecteur Senior B2B dynamique et expérimenté pour rejoindre notre équipe de vente. Vous serez responsable de l'identification de nouvelles opportunités d'affaires et de la qualification de prospects pour nos solutions d'externalisation.",
    missions: [
      "Identifier et qualifier des prospects B2B à fort potentiel sur le marché international.",
      "Mener des campagnes de prospection téléphonique (cold calling) et digitale (emailing, LinkedIn).",
      "Présenter les services de Ted-Company Group de manière percutante.",
      "Prendre des rendez-vous qualifiés pour l'équipe commerciale senior.",
      "Assurer un suivi rigoureux dans notre CRM.",
      "Atteindre et dépasser les objectifs de prospection hebdomadaires et mensuels."
    ],
    requirements: [
      "Expérience confirmée (minimum 2 ans) en prospection B2B ou centre d'appels.",
      "Excellente maîtrise du français à l'oral comme à l'écrit (sans accent).",
      "Forte capacité d'écoute et force de persuasion.",
      "Orienté résultats et goût pour le challenge.",
      "Maîtrise des outils informatiques et des techniques de vente.",
      "Esprit d'équipe et rigueur professionnelle."
    ],
    benefits: [
      "Salaire motivant (Fixe + Primes déplafonnées).",
      "Cadre de travail moderne et dynamique au cœur d'Antananarivo.",
      "Formation continue sur les techniques de vente et l'IA.",
      "Opportunités d'évolution rapide au sein du groupe.",
      "Assurance santé et avantages sociaux."
    ]
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-zinc-500 hover:text-blue-400 mb-12 transition-colors font-bold uppercase text-xs tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </motion.button>

        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Carrières & Opportunités
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
          >
            Rejoignez <span className="text-gradient">l'Aventure.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Ted-Company Group recrute les meilleurs talents pour construire le futur de l'externalisation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Job Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[3rem] border border-white/5"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> {job.type}</span>
                  </div>
                </div>
                <Link 
                  to="/postuler?job=prospecteur"
                  className="bg-blue-500 text-zinc-950 px-8 py-4 rounded-2xl font-bold hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/20 whitespace-nowrap"
                >
                  Postuler maintenant
                </Link>
              </div>

              <div className="space-y-12">
                <section>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Briefcase className="text-blue-400 w-6 h-6" /> Description du poste
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                    {job.description}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Target className="text-blue-400 w-6 h-6" /> Vos Missions
                  </h3>
                  <ul className="grid md:grid-cols-1 gap-4">
                    {job.missions.map((mission, i) => (
                      <li key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 hover:border-blue-500/30 transition-all group">
                        <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-zinc-900 dark:text-zinc-300">{mission}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Award className="text-blue-400 w-6 h-6" /> Profil recherché
                  </h3>
                  <ul className="grid md:grid-cols-1 gap-4">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span className="text-zinc-900 dark:text-zinc-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Benefits */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2.5rem] border border-white/5 sticky top-32"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="text-blue-400 w-6 h-6" /> Les Avantages
              </h3>
              <ul className="space-y-6">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-8 rounded-3xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 dark:border-blue-500/20 text-center">
                <Mail className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Candidature Spontanée ?</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed mb-6">
                  Vous ne trouvez pas le poste idéal ? Envoyez-nous votre CV.
                </p>
                <Link to="/postuler" className="text-blue-400 font-bold uppercase text-[10px] tracking-widest hover:text-blue-300 transition-colors">
                  Postuler via le formulaire
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
