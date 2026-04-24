import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const LoadingScreen = ({ onComplete, theme }: { onComplete: () => void, theme: string }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 100); // Reduced from 500ms
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 10; // Increased step (originally 15 + 5)
      });
    }, 80); // Reduced from 150ms

    return () => clearInterval(interval);
  }, [onComplete]);

  const isLight = theme === 'light';

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center p-6 ${isLight ? 'bg-zinc-50' : 'bg-zinc-950'}`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center relative"
      >
        {/* Blue Glow behind logo */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-10 bg-blue-500/20 blur-[60px] rounded-full -z-10"
        />

        {/* Animated Logo */}
        <motion.img 
          src="https://ted-companygroup.com/image/ted-company-with-letter%20(1).png" 
          alt="Ted-Company Group Logo" 
          className="h-20 md:h-24 w-auto mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          animate={{ 
            y: [0, -10, 0],
            filter: ["drop-shadow(0 0 10px rgba(59,130,246,0.2))", "drop-shadow(0 0 25px rgba(59,130,246,0.5))", "drop-shadow(0 0 10px rgba(59,130,246,0.2))"]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          referrerPolicy="no-referrer"
        />
        
        <div className={`text-2xl md:text-3xl font-bold tracking-tighter flex items-center gap-2 ${isLight ? 'text-zinc-950' : 'text-white'}`}>
          Ted-Company <span className="text-blue-400 font-light">Group</span>
        </div>
      </motion.div>

      <div className="w-full max-w-xs md:max-w-md space-y-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Chargement</span>
          <span className={`text-2xl font-bold tabular-nums ${isLight ? 'text-zinc-950' : 'text-white'}`}>{Math.min(progress, 100)}%</span>
        </div>
        <div className={`h-1.5 w-full rounded-full overflow-hidden border ${isLight ? 'bg-zinc-200 border-zinc-300' : 'bg-white/5 border-white/10'}`}>
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] text-center pt-4 animate-pulse">
          Innovation • Excellence • Africa
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
