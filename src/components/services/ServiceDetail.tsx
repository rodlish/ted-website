import { useEffect, lazy, Suspense } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { services } from '../../data/constants';
import Breadcrumbs from '../Breadcrumbs';

const WebServiceDetail = lazy(() => import('./WebServiceDetail'));
const CallServiceDetail = lazy(() => import('./CallServiceDetail'));
const AdminServiceDetail = lazy(() => import('./AdminServiceDetail'));
const SupportServiceDetail = lazy(() => import('./SupportServiceDetail'));
const ComptaServiceDetail = lazy(() => import('./ComptaServiceDetail'));
const LegalServiceDetail = lazy(() => import('./LegalServiceDetail'));
const SavServiceDetail = lazy(() => import('./SavServiceDetail'));
const CmServiceDetail = lazy(() => import('./CmServiceDetail'));
const AiServiceDetail = lazy(() => import('./AiServiceDetail'));
const RhServiceDetail = lazy(() => import('./RhServiceDetail'));
const MedicalServiceDetail = lazy(() => import('./MedicalServiceDetail'));
const MultimediaServiceDetail = lazy(() => import('./MultimediaServiceDetail'));

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Service non trouvé</h1>
        <button onClick={() => navigate('/')} className="text-blue-400 flex items-center gap-2 mx-auto">
          <ArrowLeft /> Retour à l'accueil
        </button>
      </div>
    </div>
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Ted-Company Group",
      "url": "https://www.ted-companygroup.com"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "BPO & Digital Services",
      "itemListElement": services.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title
        }
      }))
    }
  };

  const renderContent = () => {
    switch (id) {
      case 'web': return <WebServiceDetail service={service} />;
      case 'call': return <CallServiceDetail service={service} />;
      case 'admin': return <AdminServiceDetail service={service} />;
      case 'support': return <SupportServiceDetail service={service} />;
      case 'compta': return <ComptaServiceDetail service={service} />;
      case 'juridique': return <LegalServiceDetail service={service} />;
      case 'sav': return <SavServiceDetail service={service} />;
      case 'cm': return <CmServiceDetail service={service} />;
      case 'ai': return <AiServiceDetail service={service} />;
      case 'rh': return <RhServiceDetail service={service} />;
      case 'medical': return <MedicalServiceDetail service={service} />;
      case 'multimedia': return <MultimediaServiceDetail service={service} />;
      default:
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-32 pb-20"
          >
            <div className="max-w-7xl mx-auto px-6">
              <Breadcrumbs items={[
                { label: 'Nos Services', path: '/#services' },
                { label: service.title }
              ]} />
              
              <motion.button 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={() => navigate('/#services')}
                className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors"
                aria-label="Retour aux services"
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
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
                    {service.title}
                  </h1>
                  <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                    {service.description} Nous mettons à votre disposition une expertise pointue and des outils innovants pour garantir la réussite de vos projets.
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
                      className="glass px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all text-white"
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
                  { title: 'Qualité', desc: 'Un standard de service élevé and constant.' },
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
    }
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950 flex items-center justify-center"><div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      {renderContent()}
    </Suspense>
  );
};

export default ServiceDetail;
