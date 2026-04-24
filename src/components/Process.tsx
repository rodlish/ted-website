import { motion } from 'motion/react';
import { steps } from '../data/constants';

const Process = () => {
  return (
    <section id="processus" className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -z-10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
              Comment nous <br />
              <span className="text-gradient">concrétisons</span> <br />
              vos projets
            </h2>
            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-8 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="flex-shrink-0 w-16 h-16 rounded-2xl glass flex items-center justify-center font-mono text-2xl text-blue-400 font-black border border-blue-500/30 shadow-xl shadow-blue-500/10 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-all duration-500"
                  >
                    0{i + 1}
                  </motion.div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h4>
                    <p className="text-zinc-400 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[4rem] p-10 aspect-square flex items-center justify-center relative z-10">
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden group">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Teamwork" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:bg-blue-500/0 transition-all duration-500" />
              </div>
            </div>
            {/* Animated floating stats */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-[2.5rem] shadow-2xl border border-blue-500/30 backdrop-blur-3xl z-20"
            >
              <div className="text-5xl font-black text-blue-400 mb-2">98%</div>
              <div className="text-xs uppercase tracking-widest font-bold text-zinc-500">Taux de satisfaction</div>
            </motion.div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
