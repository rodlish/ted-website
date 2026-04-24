import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories, services } from '../data/constants';

const ServicesSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();
  const bgImages = [
    'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1000',
    'https://ted-companygroup.com/image/6.jpg',
    'https://ted-companygroup.com/image/3.jpg',
    'https://ted-companygroup.com/image/7.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={bgImages[activeImage]}
            alt="Ted-Company Group Service Background"
            initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            animate={{ opacity: 0.2, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Nos Solutions <br />
              <span className="text-gradient">Multi-Services</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-xl leading-relaxed">
              Une gamme complète de services d'externalisation conçus pour optimiser votre productivité and réduire vos coûts opérationnels.
            </p>
          </motion.div>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-24 last:mb-0">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <category.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold">{category.title}</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services
                .filter(s => s.categoryId === category.id)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      y: -15, 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                    }}
                    onClick={() => navigate(`/service/${service.id}`)}
                    className="glass p-10 rounded-[3rem] group cursor-pointer relative overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                  >
                    <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity blur-[80px]`} />
                    
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-8 shadow-2xl shadow-blue-500/20`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm font-black text-blue-400 uppercase tracking-widest group-hover:gap-5 transition-all">
                      En savoir plus <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
