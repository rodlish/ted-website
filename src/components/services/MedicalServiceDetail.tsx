import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, PhoneIncoming, FileText, ShieldCheck, Headphones, Calculator } from 'lucide-react';

const MedicalServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Clock, title: "Gestion d'Agenda", desc: "Organisation optimale de vos rendez-vous and consultations." },
    { icon: PhoneIncoming, title: "Accueil Téléphonique", desc: "Réception professionnelle de vos patients 24/7." },
    { icon: FileText, title: "Frappe Médicale", desc: "Saisie rapide and précise de vos comptes-rendus and courriers." },
    { icon: ShieldCheck, title: "Confidentialité Totale", desc: "Respect strict du secret médical and protection des données." },
    { icon: Headphones, title: "Support Patients", desc: "Réponse aux questions administratives courantes." },
    { icon: Calculator, title: "Gestion Facturation", desc: "Suivi des paiements and télétransmission (selon pays)." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} onClick={() => navigate('/#services')} className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              Télésecrétariat Médical
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Sérénité pour <br />
              <span className="text-gradient from-emerald-400 to-cyan-500">les Praticiens.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Déléguez vos tâches administratives stressantes. Nous assistons les docteurs and hôpitaux pour une organisation parfaite.
            </p>
            <Link to="/demarrer-un-projet?service=medical" className="bg-emerald-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/30">
              Libérer mon temps
            </Link>
          </motion.div>
          <div className="relative">
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1505751172107-573967a4f22a?auto=format&fit=crop&q=80&w=800" 
                alt="Médical" 
                className="w-full h-full object-cover rounded-[2.5rem]" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
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

export default MedicalServiceDetail;
