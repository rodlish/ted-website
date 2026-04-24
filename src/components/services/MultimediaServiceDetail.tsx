import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Image, Video, Zap, PenTool, Share2, Layout, Star } from 'lucide-react';

const MultimediaServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Image, title: "Retouche Photo", desc: "Correction colorimétrique, détourage and amélioration de vos visuels." },
    { icon: Video, title: "Montage Vidéo", desc: "Création de vidéos percutantes pour vos réseaux sociaux and publicités." },
    { icon: Zap, title: "Amélioration", desc: "Optimisation de la qualité de vos médias existants (upscaling, réduction de bruit)." },
    { icon: PenTool, title: "Création de Contenu", desc: "Conception graphique and visuelle adaptée à votre identité de marque." },
    { icon: Share2, title: "Formatage Social", desc: "Adaptation de vos contenus pour tous les réseaux (Reels, TikTok, YouTube)." },
    { icon: Layout, title: "Design Graphique", desc: "Logos, bannières and supports de communication visuelle." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest mb-8">
              Solutions Multimédia
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Sublimez votre <br />
              <span className="text-gradient from-pink-400 to-rose-500">Image de Marque.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              De la retouche photo au montage vidéo professionnel, nous donnons vie à vos idées avec une qualité visuelle exceptionnelle.
            </p>
            <Link to="/demarrer-un-projet?service=multimedia" className="bg-pink-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-pink-400 transition-all shadow-2xl shadow-pink-500/30">
              Démarrer mon projet
            </Link>
          </motion.div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="glass rounded-[3rem] p-4 overflow-hidden aspect-video shadow-2xl relative z-10 border border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200" 
                alt="Création Multimédia" 
                className="w-full h-full object-cover rounded-[2.5rem]" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/60 via-transparent to-transparent" />
              
              {/* Overlay Text inside Image */}
              <div className="absolute bottom-10 left-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 backdrop-blur-md flex items-center justify-center border border-pink-500/30">
                    <Star className="w-5 h-5 text-pink-400" />
                  </div>
                  <span className="text-sm font-bold text-white px-3 py-1 rounded-full glass border-white/10 uppercase tracking-widest">Qualité Premium</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Brand Logos */}
            <div className="absolute -inset-6 md:-inset-12 pointer-events-none z-20">
              {[
                { name: "Photoshop", src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
                { name: "Illustrator", src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
                { name: "After Effects", src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" },
                { name: "Premiere", src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" }
              ].map((logo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    opacity: { delay: i * 0.15 + 0.5 },
                    scale: { delay: i * 0.15 + 0.5 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                  }}
                  className={`absolute w-14 h-14 md:w-20 md:h-20 glass p-3 md:p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center`}
                  style={{
                    top: i === 0 ? '0%' : i === 1 ? '10%' : 'auto',
                    bottom: i === 2 ? '0%' : i === 3 ? '10%' : 'auto',
                    left: i === 0 ? '0%' : i === 2 ? '10%' : 'auto',
                    right: i === 1 ? '0%' : i === 3 ? '10%' : 'auto',
                  }}
                >
                  <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-pink-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-zinc-950 transition-all">
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

export default MultimediaServiceDetail;
