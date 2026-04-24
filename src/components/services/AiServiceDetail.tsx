import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BrainCircuit, Sparkles, Database, Code2, LineChart, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

const AiServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();

  const scatteredIcons = [
    { src: "https://www.google.com/s2/favicons?sz=128&domain=openai.com", delay: 0, x: "-150%", y: "-150%", scale: 1.2 },
    { src: "https://www.google.com/s2/favicons?sz=128&domain=anthropic.com", delay: 0.2, x: "150%", y: "-120%", scale: 1.4 },
    { src: "https://www.google.com/s2/favicons?sz=128&domain=google.com", delay: 0.4, x: "-180%", y: "150%", scale: 1.1 },
    { src: "https://www.google.com/s2/favicons?sz=128&domain=microsoft.com", delay: 0.6, x: "180%", y: "130%", scale: 1.3 },
    { src: "https://www.google.com/s2/favicons?sz=128&domain=midjourney.com", delay: 0.8, x: "0%", y: "-250%", scale: 1.5 },
    { src: "https://www.google.com/s2/favicons?sz=128&domain=ringover.com", delay: 1, x: "0%", y: "250%", scale: 1.2 },
  ];

  const features = [
    { icon: BrainCircuit, title: "Custom LLMs", desc: "Développement de modèles de langage entraînés sur vos propres données métier." },
    { icon: Sparkles, title: "Génération de Contenu", desc: "Automatisation de la création de textes, images and vidéos de haute qualité." },
    { icon: Database, title: "Analyse Prédictive", desc: "Exploitation de vos données pour anticiper les tendances and comportements clients." },
    { icon: Code2, title: "Agents IA Autonomes", desc: "Conception d'agents capables de réaliser des tâches complexes sans supervision." },
    { icon: LineChart, title: "Optimisation de Workflow", desc: "Intégration de l'IA pour automatiser vos processus and gagner en productivité." },
    { icon: ShieldCheck, title: "IA Éthique & Sécurisée", desc: "Mise en place de solutions respectueuses de la confidentialité and des normes." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/#services')}
          className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              Intelligence Artificielle & Automatisation
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              L'IA au <span className="text-gradient">Service</span> <br />
              de votre Humain.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Ne subissez pas la révolution, menez-la. Nous intégrons les technologies IA les plus avancées pour décupler les capacités de vos équipes.
            </p>
            <Link 
              to="/demarrer-un-projet?service=ai"
              className="bg-blue-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-3 w-fit"
            >
              Transformer mon business <Rocket className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="relative flex items-center justify-center">
            {/* Central Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
            
            {/* Core AI Icon */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-10 w-48 h-48 rounded-full glass border border-blue-500/30 flex items-center justify-center group"
            >
              <div className="absolute inset-2 border-2 border-dashed border-blue-500/20 rounded-full" />
              <BrainCircuit className="w-20 h-20 text-blue-400 group-hover:scale-110 transition-transform" />
            </motion.div>

            {/* Orbiting Icons */}
            {scatteredIcons.map((icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: icon.scale,
                  x: icon.x,
                  y: icon.y
                }}
                transition={{ 
                  delay: icon.delay,
                  duration: 0.8,
                  type: "spring"
                }}
                className="absolute z-20"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="w-16 h-16 rounded-2xl glass p-3 border border-white/10 shadow-2xl overflow-hidden"
                >
                  <img src={icon.src} alt="AI Tool" className="w-full h-full object-contain" />
                </motion.div>
              </motion.div>
            ))}

            {/* Decorative Rings */}
            <div className="absolute inset-0 border border-blue-500/10 rounded-full scale-110" />
            <div className="absolute inset-0 border border-blue-500/5 rounded-full scale-150" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-all">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
              <ChevronRight className="w-5 h-5 text-zinc-600 mt-6 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                L'IA n'est plus <br />
                une option, c'est <br />
                <span className="text-blue-400">votre moteur.</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-10">
                Nous accompagnons les entreprises dans leur transition vers l'intelligence artificielle en proposant des solutions concrètes, sécurisées and directement rentables.
              </p>
              <div className="space-y-6">
                {[
                  "Réduction des coûts opérationnels de 30%+",
                  "Automatisation des tâches répétitives",
                  "Prise de décision basée sur la donnée",
                  "Expérience client ultra-personnalisée"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    <span className="text-lg font-medium text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass p-1 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                  alt="AI Visualization" 
                  className="w-full h-auto rounded-[2.8rem]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              {/* Data visualization elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-6 rounded-3xl border border-blue-500/30 backdrop-blur-3xl"
              >
                <div className="text-blue-400 font-black text-2xl mb-1">+400%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Productivité</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiServiceDetail;
