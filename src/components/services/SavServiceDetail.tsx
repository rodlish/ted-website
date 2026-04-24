import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Zap, MessageCircle, ThumbsUp, Activity, Headphones, Star, Calculator, ShieldAlert, Clock, CheckCircle2 } from 'lucide-react';

const SavServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Heart, title: "Empathie Client", desc: "Une approche humaine pour transformer chaque problème en solution positive." },
    { icon: Zap, title: "Résolution Rapide", desc: "Traitement prioritaire des demandes pour minimiser l'insatisfaction." },
    { icon: MessageCircle, title: "Support Multicanal", desc: "Présence là où vos clients se trouvent : chat, mail, téléphone." },
    { icon: ThumbsUp, title: "Fidélisation", desc: "Stratégies post-résolution pour renforcer le lien avec votre marque." },
    { icon: Activity, title: "Analyse des Retours", desc: "Identification des points d'amélioration de vos produits/services." },
    { icon: Headphones, title: "Disponibilité", desc: "Une équipe prête à répondre quand vos clients en ont besoin." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-8">
              Sourire & Satisfaction
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Le bonheur de <br />
              <span className="text-gradient from-rose-400 to-orange-500">Vos Clients.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Le service après-vente n'est pas un coût, c'est votre meilleur investissement marketing. Nous prenons soin de vos clients comme des nôtres.
            </p>
            <Link 
              to="/demarrer-un-projet?service=sav"
              className="bg-rose-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-rose-400 transition-all shadow-2xl shadow-rose-500/30"
            >
              Enchanter mes clients
            </Link>
          </motion.div>

          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass rounded-[3rem] p-10 relative z-10 flex flex-col items-center gap-6"
            >
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.div key={i} animate={{ scale: [1, 1.2, 1] }} transition={{ delay: i * 0.1, repeat: Infinity }} >
                    <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-4xl font-black">98%</div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Satisfaction Score</div>
              </div>
            </motion.div>
            <div className="absolute -inset-10 bg-rose-500/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-rose-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[4rem] overflow-hidden aspect-[21/9] group"
          >
            <img 
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=2000" 
              alt="Client satisfait" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-transparent to-transparent flex items-end p-12 md:p-20">
              <div className="max-w-2xl">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  "Leur équipe SAV a transformé nos détracteurs en <span className="text-rose-400">ambassadeurs</span> de marque."
                </h3>
                <p className="text-zinc-300 text-lg font-medium">— Directeur Relation Client, Retail Global</p>
              </div>
            </div>
          </motion.div>

          <div className="bg-rose-500/5 rounded-[4rem] p-12 md:p-20 border border-rose-500/10 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-8">Pourquoi nous <span className="text-gradient from-rose-400 to-orange-500">Déléguer votre SAV ?</span></h2>
                <p className="text-xl text-zinc-400 leading-relaxed mb-10">
                  L'externalisation de votre service après-vente vous permet de vous concentrer sur votre cœur de métier tout en garantissant une expérience client irréprochable and professionnelle.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-rose-400" />
                    </div>
                    <h4 className="text-xl font-bold">Traitement des Factures</h4>
                    <p className="text-zinc-500 text-sm">Gestion rigoureuse de la facturation, des avoirs and des litiges de paiement pour une fluidité financière.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <ShieldAlert className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-xl font-bold">Gestion des Réclamations</h4>
                    <p className="text-zinc-500 text-sm">Traitement diplomatique and efficace des plaintes pour désamorcer les tensions and trouver des solutions.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-pink-400" />
                    </div>
                    <h4 className="text-xl font-bold">Suivi de Commandes</h4>
                    <p className="text-zinc-500 text-sm">Information en temps réel de vos clients sur l'état de leurs livraisons and résolution des problèmes logistiques.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-bold">Enquêtes & Retours</h4>
                    <p className="text-zinc-500 text-sm">Collecte proactive des avis clients pour identifier les axes d'amélioration de vos produits.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1000" 
                    alt="Support Client Professionnel" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-rose-500/20 blur-[100px] -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavServiceDetail;
