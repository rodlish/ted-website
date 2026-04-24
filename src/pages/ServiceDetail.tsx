import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  image?: string;
}

interface ServiceDetailProps {
  services: Service[];
  WebServiceDetail: React.FC<{ service: Service }>;
  CallServiceDetail: React.FC<{ service: Service }>;
  AdminServiceDetail: React.FC<{ service: Service }>;
  SupportServiceDetail: React.FC<{ service: Service }>;
  ComptaServiceDetail: React.FC<{ service: Service }>;
  LegalServiceDetail: React.FC<{ service: Service }>;
  SavServiceDetail: React.FC<{ service: Service }>;
  CmServiceDetail: React.FC<{ service: Service }>;
  AiServiceDetail: React.FC<{ service: Service }>;
  RhServiceDetail: React.FC<{ service: Service }>;
  MedicalServiceDetail: React.FC<{ service: Service }>;
  MultimediaServiceDetail: React.FC<{ service: Service }>;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ 
  services,
  WebServiceDetail,
  CallServiceDetail,
  AdminServiceDetail,
  SupportServiceDetail,
  ComptaServiceDetail,
  LegalServiceDetail,
  SavServiceDetail,
  CmServiceDetail,
  AiServiceDetail,
  RhServiceDetail,
  MedicalServiceDetail,
  MultimediaServiceDetail
}) => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Service non trouvé</h1>
        <button onClick={() => navigate('/')} className="text-blue-400 flex items-center gap-2 mx-auto">
          <ArrowLeft /> Retour à l'accueil
        </button>
      </div>
    </div>
  );

  if (id === 'web') return <WebServiceDetail service={service} />;
  if (id === 'call') return <CallServiceDetail service={service} />;
  if (id === 'admin') return <AdminServiceDetail service={service} />;
  if (id === 'support') return <SupportServiceDetail service={service} />;
  if (id === 'compta') return <ComptaServiceDetail service={service} />;
  if (id === 'juridique') return <LegalServiceDetail service={service} />;
  if (id === 'sav') return <SavServiceDetail service={service} />;
  if (id === 'cm') return <CmServiceDetail service={service} />;
  if (id === 'ai') return <AiServiceDetail service={service} />;
  if (id === 'rh') return <RhServiceDetail service={service} />;
  if (id === 'medical') return <MedicalServiceDetail service={service} />;
  if (id === 'multimedia') return <MultimediaServiceDetail service={service} />;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/#services')}
          className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} p-5 mb-8 shadow-2xl shadow-blue-500/20`}>
              <service.icon className="w-full h-full text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              {service.description} Nous mettons à votre disposition une expertise pointue et des outils innovants pour garantir la réussite de vos projets.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to={`/demarrer-un-projet?service=${service.id}`}
                className="bg-blue-500 text-zinc-950 px-8 py-4 rounded-2xl font-bold hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/20"
              >
                Demander un devis
              </Link>
              <button 
                onClick={() => navigate('/')}
                className="glass px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                En savoir plus
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-[4rem] p-6 aspect-video overflow-hidden">
              <img 
                src={service.image || `https://picsum.photos/seed/${service.id}/800/600`} 
                alt={service.title}
                className="w-full h-full object-cover rounded-[3rem]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-30`} />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Expertise', desc: 'Une équipe de spécialistes dédiés à votre réussite.' },
            { title: 'Qualité', desc: 'Un standard de service élevé et constant.' },
            { title: 'Support', desc: 'Un accompagnement personnalisé à chaque étape.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold mb-4 text-blue-400">{item.title}</h4>
              <p className="text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
