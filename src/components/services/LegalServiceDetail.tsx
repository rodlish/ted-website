import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Gavel, Shield, FileText, Scale, BookOpen, UserCheck } from 'lucide-react';

const LegalServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Gavel, title: "Conseil Juridique", desc: "Accompagnement stratégique pour toutes vos décisions d'entreprise." },
    { icon: Shield, title: "Protection des Actifs", desc: "Sécurisation de votre propriété intellectuelle and de vos biens." },
    { icon: FileText, title: "Rédaction de Contrats", desc: "Élaboration de contrats solides pour protéger vos intérêts." },
    { icon: Scale, title: "Gestion des Litiges", desc: "Résolution efficace and discrète de vos différends juridiques." },
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

export default LegalServiceDetail;
