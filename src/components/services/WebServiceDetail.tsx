import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Code, Zap, Layout, PenTool, Search, Cpu, Rocket, Smartphone, CheckCircle2 } from 'lucide-react';

const WebServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  
  const features = [
    { icon: Code, title: "Architecture Moderne", desc: "Utilisation de React, Next.js and TypeScript pour des applications robustes." },
    { icon: Zap, title: "Performance Ultime", desc: "Optimisation Core Web Vitals pour un chargement instantané." },
    { icon: Layout, title: "Design Adaptatif", desc: "Expérience utilisateur parfaite sur mobile, tablette and desktop." },
    { icon: PenTool, title: "Rédaction Stratégique", desc: "Contenu captivant conçu pour convertir vos visiteurs en clients." },
    { icon: Search, title: "SEO Avancé", desc: "Structure optimisée pour dominer les résultats de recherche." },
    { icon: Cpu, title: "Web Apps & API", desc: "Développement de solutions complexes and intégrations sur mesure." }
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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] -z-10"
          />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              Expertise Full-Stack & Copywriting
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              L'art du <span className="text-gradient">Web</span> <br />
              Haute Performance.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Nous ne créons pas seulement des sites, nous forgeons des expériences digitales mémorables. Alliant puissance technologique and rédaction persuasive pour propulser votre marque.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/demarrer-un-projet?service=web"
                className="bg-blue-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-3"
              >
                Lancer mon projet <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="glass rounded-3xl p-6 shadow-2xl relative z-10 font-mono text-sm overflow-hidden"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <pre className="text-blue-400">
                <code>{`const WebApp = () => {
  const [performance, setPerformance] = useState(100);
  
  return (
    <Experience 
      quality="Premium"
      design="Modern"
      seo={true}
    >
      <Success />
    </Experience>
  );
};`}</code>
              </pre>
              
              <motion.div 
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 glass p-4 rounded-2xl border border-blue-500/30 backdrop-blur-3xl z-20"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold">Vitesse 99/100</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 glass p-4 rounded-2xl border border-cyan-500/30 backdrop-blur-3xl z-20"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold">SEO Optimized</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -right-12 glass p-3 rounded-xl border border-purple-500/30 backdrop-blur-3xl z-20"
              >
                <Smartphone className="w-5 h-5 text-purple-400" />
              </motion.div>
            </motion.div>
            
            <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-blue-500/10 rounded-full scale-150 -z-20" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
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
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="glass rounded-[3rem] p-8 aspect-video flex flex-col justify-center gap-6">
              <div className="h-2 w-1/3 bg-blue-500/30 rounded-full" />
              <div className="h-2 w-full bg-zinc-800 rounded-full" />
              <div className="h-2 w-5/6 bg-zinc-800 rounded-full" />
              <div className="h-2 w-4/6 bg-zinc-800 rounded-full" />
              <motion.div 
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 bg-blue-500 rounded-full"
              />
              <p className="text-sm font-mono text-zinc-500 mt-4 italic">"Des mots qui captivent, des designs qui convertissent."</p>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              La puissance de la <br />
              <span className="text-gradient">Rédaction Web.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Un beau site sans contenu stratégique est une coquille vide. Nos experts en rédaction web créent des textes percutants qui captent l'attention de vos visiteurs and les guident vers l'action.
            </p>
            <ul className="space-y-4">
              {['Storytelling captivant', 'SEO Copywriting', 'Appels à l\'action optimisés', 'Clarté and persuasion'].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="relative py-20 overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10" />
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'Vite', 'PostgreSQL', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'Prisma'].map((tech, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter opacity-20 hover:opacity-100 hover:text-blue-400 transition-all cursor-default">
                {tech}
              </span>
            ))}
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'Vite', 'PostgreSQL', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'Prisma'].map((tech, i) => (
              <span key={`dup-${i}`} className="text-4xl md:text-6xl font-black tracking-tighter opacity-20 hover:opacity-100 hover:text-blue-400 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebServiceDetail;
