import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '261349485712';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-24 right-6 z-[100] font-sans flex items-center gap-3 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass px-4 py-2 rounded-xl border border-emerald-500/20 shadow-xl hidden md:block"
      >
        <span className="text-zinc-100 text-sm font-medium whitespace-nowrap">
          Contact direct WhatsApp
        </span>
      </motion.div>
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center shadow-2xl transition-all duration-300 pointer-events-auto group relative"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        
        {/* Tooltip for mobile or extra visibility */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:hidden">
          <div className="glass px-3 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap text-xs font-bold text-zinc-100">
            Contact direct WhatsApp
          </div>
        </div>

        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600"></span>
        </span>
      </motion.a>
    </div>
  );
}
