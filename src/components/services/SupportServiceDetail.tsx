import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MonitorSmartphone, Video, HardDrive, ShieldAlert, Laptop, Wrench, FileText, CheckCircle2 } from 'lucide-react';

const SupportServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: MonitorSmartphone, title: "Bureau à Distance", desc: "Intervention rapide via AnyDesk and Remote Desktop pour résoudre vos problèmes en temps réel." },
    { icon: Video, title: "Google Meet Support", desc: "Assistance visuelle en direct pour vous guider pas à pas dans vos configurations." },
    { icon: HardDrive, title: "Maintenance Serveur", desc: "Surveillance and optimisation de vos infrastructures critiques 24h/24." },
    { icon: ShieldAlert, title: "Sécurité & Backup", desc: "Protection contre les menaces and gestion rigoureuse de vos sauvegardes de données." },
    { icon: Laptop, title: "Helpdesk Utilisateur", desc: "Un point de contact unique pour toutes les demandes techniques de vos collaborateurs." },
    { icon: Wrench, title: "Dépannage Logiciel", desc: "Installation, mise à jour and résolution de conflits logiciels à distance." }
  ];

  const tools = [
    { name: "Google Meet", icon: Video, color: "text-blue-400" },
    { name: "AnyDesk", icon: MonitorSmartphone, color: "text-red-400" },
    { name: "Remote Desktop", icon: Laptop, color: "text-blue-500" },
    { name: "Support Facture", icon: FileText, color: "text-emerald-400" }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              Support & Maintenance
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Votre Expert <br />
              <span className="text-gradient from-blue-400 to-indigo-500">À Distance.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Bénéficiez d'une assistance technique de haut niveau. Nos techniciens experts interviennent instantanément pour garantir la continuité de votre activité.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              {tools.map((tool, i) => (
                <div key={i} className="glass p-4 rounded-2xl flex items-center gap-3 border-white/5">
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                  <span className="font-bold text-sm">{tool.name}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/demarrer-un-projet?service=support"
              className="bg-blue-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all shadow-2xl shadow-blue-500/30"
            >
              Demander une assistance
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-video shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1573163231162-80113439c8f9?auto=format&fit=crop&q=80&w=1000" 
                alt="Technicien en ligne" 
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border-blue-500/30 shadow-xl z-20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Support Actif</span>
              </div>
              <div className="text-2xl font-black text-white">24/7</div>
              <div className="text-[10px] text-zinc-500 uppercase font-bold">Disponibilité</div>
            </motion.div>

            <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pourquoi choisir notre <span className="text-gradient">Compagnie de Développement ?</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Nous ne nous contentons pas de résoudre vos problèmes, nous optimisons votre infrastructure pour prévenir les pannes futures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Expertise Technique", d: "Des ingénieurs certifiés sur les dernières technologies." },
              { t: "Réactivité Éclair", d: "Intervention en moins de 15 minutes pour les urgences." },
              { t: "Sécurité Maximale", d: "Chiffrement de bout en bout lors des interventions." },
              { t: "Coûts Maîtrisés", d: "Des forfaits adaptés à la taille de votre entreprise." }
            ].map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">{adv.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{adv.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-all">
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

export default SupportServiceDetail;
