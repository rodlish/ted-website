import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { UserCheck, Clock } from 'lucide-react';
import { JobTitlesMarquee } from './Marquees';

export const TalentSearchSection = () => {
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
