import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Hero */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          alt="Office Background"
          className="w-full h-full object-cover opacity-20 scale-110"
          fetchPriority="high"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950 hero-overlay" />
      </div>

      {/* Floating Animated Graphics */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0.5, x: -20 }} // Start with 0.5 opacity for LCP
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Faster duration
        >
          <motion.div 
            initial={{ opacity: 0.8, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }} // No delay
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Ted-Company Group Innovation
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1] mb-8">
            L'innovation <br />
            <span className="text-gradient">au service</span> <br />
            de demain.
          </h1>
          <p className="text-xl text-zinc-400 mb-12 max-w-lg leading-relaxed">
            Propulsez votre entreprise vers de nouveaux sommets avec nos solutions d'externalisation intelligentes and innovantes.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link 
              to="/demarrer-un-projet"
              className="bg-blue-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all flex items-center gap-3 group shadow-2xl shadow-blue-500/30 hover:scale-105 active:scale-95"
            >
              Démarrer un projet
              <Rocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="/#services"
              className="glass px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
            >
              Explorer nos Solutions
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass rounded-[3rem] p-6 animate-float shadow-2xl shadow-blue-500/20">
            <div className="bg-zinc-900 rounded-[2.5rem] overflow-hidden aspect-square relative">
              <motion.img 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Groupe Innovation" 
                className="object-cover w-full h-full opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Animated HUD elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 w-24 h-24 border-2 border-dashed border-blue-500/30 rounded-full flex items-center justify-center"
              >
                <div className="w-16 h-16 border border-blue-500/50 rounded-full border-t-transparent animate-spin" />
              </motion.div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-12 -right-12 glass p-6 rounded-3xl z-20 border border-blue-500/30 backdrop-blur-2xl"
          >
            <div className="text-blue-400 font-black text-3xl mb-1">99.9%</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Service de Disponibilité</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
