import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, PieChart, Calculator, TrendingUp, FileText, ShieldCheck, Zap } from 'lucide-react';

const ComptaServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: PieChart, title: "Analyse Financière", desc: "Vision claire de votre rentabilité and de vos flux de trésorerie." },
    { icon: Calculator, title: "Comptabilité Générale", desc: "Tenue rigoureuse de vos comptes selon les normes en vigueur." },
    { icon: TrendingUp, title: "Optimisation Fiscale", desc: "Conseils stratégiques pour réduire légalement votre charge fiscale." },
    { icon: FileText, title: "Bilans & Rapports", desc: "Production de documents financiers précis pour vos partenaires." },
    { icon: ShieldCheck, title: "Conformité Totale", desc: "Veille permanente sur les évolutions réglementaires and légales." },
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

export default ComptaServiceDetail;
