import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, MessageCircle, BarChart3, TrendingUp, Users, Zap, Star, Shield, Heart } from 'lucide-react';

const CmServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Share2, title: "Stratégie Sociale", desc: "Définition d'une ligne éditoriale forte pour captiver votre audience." },
    { icon: MessageCircle, title: "Engagement Réseau", desc: "Animation and modération active de vos communautés pour créer du lien." },
    { icon: BarChart3, title: "Analyse d'Audience", desc: "Suivi précis de vos KPIs and ajustement stratégique en temps réel." },
    { icon: TrendingUp, title: "Croissance Organique", desc: "Augmentation de votre visibilité sans dépendre uniquement de la publicité." },
    { icon: Users, title: "Gestion d'Influence", desc: "Relation avec les créateurs de contenu pour amplifier votre message." },
    { icon: Zap, title: "Réactivité Totale", desc: "Réponse rapide aux commentaires and messages pour une image soignée." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
              Influence & Engagement
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Bâtissez votre <br />
              <span className="text-gradient from-cyan-400 to-blue-500">Communauté.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Les réseaux sociaux ne sont pas un monologue, c'est une conversation. Nous faisons de votre marque l'épicentre d'une communauté engagée.
            </p>
            <Link 
              to="/demarrer-un-projet?service=cm"
              className="bg-cyan-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30"
            >
              Devenir viral
            </Link>
          </motion.div>

          <div className="relative">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass rounded-[3rem] p-10 relative z-10 grid grid-cols-2 gap-6"
            >
              {[
                { label: "Reach", val: "2.4M", color: "text-blue-400" },
                { label: "Likes", val: "450k", color: "text-rose-400" },
                { label: "Comments", val: "12k", color: "text-cyan-400" },
                { label: "Shares", val: "8.5k", color: "text-emerald-400" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-3xl bg-white/5">
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.val}</div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            <div className="absolute -inset-10 bg-cyan-500/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise <span className="text-gradient">Plateforme par Plateforme.</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Chaque réseau a ses propres codes. Nous maîtrisons chaque écosystème pour maximiser votre impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "LinkedIn", d: "Leadership d'opinion and prospection B2B.", icon: Shield, color: "text-blue-600" },
              { t: "Instagram", d: "Esthétique visuelle and storytelling quotidien.", icon: Heart, color: "text-pink-500" },
              { t: "TikTok", d: "Viralité, tendances and format vidéo court.", icon: Zap, color: "text-cyan-400" },
              { t: "Facebook/X", d: "Gestion de communauté and actualités.", icon: MessageCircle, color: "text-blue-400" }
            ].map((plat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-500/30 transition-all text-center"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 ${plat.color}`}>
                  <plat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">{plat.t}</h4>
                <p className="text-zinc-500 text-sm">{plat.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] overflow-hidden aspect-[21/9] group mb-32"
        >
          <img 
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Social Media Management" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 via-cyan-950/20 to-transparent flex items-center p-12 md:p-20">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                Case Study
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Engagez votre <span className="text-cyan-400">Audience</span>.
              </h3>
              <p className="text-zinc-300 text-lg mb-8">
                "Grâce à une stratégie de contenu authentique and une modération proactive, nous avons multiplié l'engagement organique par 4 en seulement 6 mois."
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-cyan-950 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-white">+50k nouveaux followers</div>
                  <div className="text-cyan-400/80 text-xs">Mois dernier</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CmServiceDetail;
