import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Users2, Globe2, UserCheck, Briefcase, ShieldCheck, Heart } from 'lucide-react';
import { AfricanFlagsMarquee } from '../shared/Marquees';
import { TalentSearchSection } from '../shared/TalentSearchSection';

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
                loading="lazy"
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

export default RhServiceDetail;
