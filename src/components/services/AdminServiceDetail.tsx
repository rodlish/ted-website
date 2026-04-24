import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, PhoneIncoming, PhoneOutgoing, Mail, LifeBuoy, Wrench, ShieldCheck, Target, TrendingUp, Clock, Star, Zap, Coins, Shield, Users2, Globe } from 'lucide-react';

const AdminServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: PhoneIncoming, title: "Appel Entrant", desc: "Gestion professionnelle de vos flux d'appels pour une satisfaction client immédiate." },
    { icon: PhoneOutgoing, title: "Appel Sortant", desc: "Campagnes proactives and suivi rigoureux pour atteindre vos objectifs de croissance." },
    { icon: Mail, title: "Gestion Mail", desc: "Traitement rapide and précis de votre correspondance numérique pour une réactivité totale." },
    { icon: LifeBuoy, title: "Help Desk", desc: "Support de premier niveau pour résoudre les problématiques courantes de vos utilisateurs." },
    { icon: Wrench, title: "Support Technique", desc: "Assistance spécialisée pour guider vos clients dans l'utilisation de vos solutions." },
    { icon: ShieldCheck, title: "Respect des Consignes", desc: "Une exécution stricte de vos protocoles pour une qualité de service constante." }
  ];

  const stats = [
    { label: "Taux de Résolution", value: "95%", icon: CheckCircle2 },
    { label: "Temps de Réponse", value: "< 2min", icon: Clock },
    { label: "Satisfaction", value: "4.9/5", icon: Star },
    { label: "Disponibilité", value: "24/7", icon: Zap }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
              Efficacité & Dévouement
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              L'Assistance <br />
              <span className="text-gradient from-purple-400 to-pink-500">Sans Faille.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Familiarisés avec toutes les activités administratives, nos personnels dévoués sont orientés résultats and performance, dans le respect total de vos consignes.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-4 py-2 rounded-xl glass border-purple-500/20 text-sm font-bold text-purple-400 flex items-center gap-2">
                <Target className="w-4 h-4" /> Orienté Résultat
              </div>
              <div className="px-4 py-2 rounded-xl glass border-pink-500/20 text-sm font-bold text-pink-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Haute Performance
              </div>
            </div>
            <Link 
              to="/demarrer-un-projet?service=admin"
              className="bg-purple-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-400 transition-all shadow-2xl shadow-purple-500/30"
            >
              Optimiser ma gestion
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-square shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Assistante souriante" 
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border-purple-500/30 shadow-xl z-20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Agent Dédié</span>
              </div>
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-[10px] text-zinc-500 uppercase font-bold">Engagement</div>
            </motion.div>

            <div className="absolute -inset-10 bg-purple-500/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 text-center group hover:border-purple-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-4xl font-black mb-2 text-gradient from-white to-zinc-500">{stat.value}</div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-purple-500/5 rounded-[4rem] p-12 md:p-20 mb-32 border border-purple-500/10 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Un Engagement <span className="text-gradient from-purple-400 to-pink-500">Durable & Diversifié.</span></h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-10">
                Nous croyons en la force de la diversité and de l'engagement. Déléguer vos tâches administratives à nos experts n'est pas seulement un gain de temps, c'est une décision stratégique pour votre croissance.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Coins className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Optimisation Budgétaire</h4>
                    <p className="text-zinc-400">Réduisez vos coûts fixes and transformez-les en charges variables. Pas de charges sociales, pas de frais de bureau, juste du résultat.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center shrink-0">
                    <Shield className="w-7 h-7 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Normes Internationales</h4>
                    <p className="text-zinc-400">Nous respectons scrupuleusement les normes RGPD and les standards internationaux de protection des données pour une sécurité totale.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Users2 className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Gestion Simplifiée</h4>
                    <p className="text-zinc-400">Plus besoin de gérer les recrutements ou les absences. Nous assurons la continuité de service quoi qu'il arrive.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                <motion.img 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=1000" 
                  alt="Équipe diversifiée" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-2 border-dashed border-purple-500/30 rounded-full -z-10"
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl rounded-full -z-10"
              />
              
              <div className="absolute top-10 -left-10 glass p-4 rounded-2xl border-white/10 shadow-2xl z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase">Compliance</div>
                  <div className="text-sm font-bold">ISO & RGPD Ready</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default AdminServiceDetail;

// Simple CheckCircle2 component as icons are imported
function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
