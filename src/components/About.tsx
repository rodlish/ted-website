import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="à-propos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">Notre Histoire</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              C'est notre histoire <br />
              <span className="text-gradient">qui nous unit.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Ted-Company Group est né d'une vision simple : offrir aux entreprises une plateforme unique de services d'externalisation de haute qualité. Nous croyons que la réussite de nos clients est le moteur de notre propre succès.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <CheckCircle2 className="text-blue-400 mb-4" />
                <h4 className="font-bold mb-2">Innovation</h4>
                <p className="text-sm text-zinc-500">Toujours à la pointe des technologies.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <CheckCircle2 className="text-blue-400 mb-4" />
                <h4 className="font-bold mb-2">Excellence</h4>
                <p className="text-sm text-zinc-500">Un standard de qualité sans compromis.</p>
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="glass rounded-[3rem] p-4 rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="À propos de Ted-Company" 
                className="rounded-[2.5rem] w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block">
              <div className="text-blue-400 font-bold text-sm mb-2">Fondé en</div>
              <div className="text-3xl font-bold">2021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
