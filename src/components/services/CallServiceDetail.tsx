import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Target, BarChart3, MessageCircle, Rocket, ShieldCheck, Zap, TrendingUp, ThumbsUp, PhoneCall, CheckCircle2 } from 'lucide-react';

const CallServiceDetail = ({ service }: { service: any }) => {
  const navigate = useNavigate();
  const features = [
    { icon: Target, title: "Prospection B2B & B2C", desc: "Expertise pointue en acquisition de nouveaux clients pour tous secteurs d'activité." },
    { icon: BarChart3, title: "Qualification de Leads", desc: "Identification and filtrage des prospects à haut potentiel pour vos équipes commerciales." },
    { icon: MessageCircle, title: "Sondages & Enquêtes", desc: "Collecte de données précieuses and analyse de satisfaction pour vos études de marché." },
    { icon: Rocket, title: "Appels Sortants", desc: "Campagnes proactives pour booster vos ventes and votre notoriété." },
    { icon: ShieldCheck, title: "Sécurité & Qualité", desc: "Protocoles de confidentialité stricts and formation continue de nos agents." },
    { icon: Zap, title: "Performance Garantie", desc: "Atteinte systématique de vos KPIs grâce à un management orienté résultats." }
  ];

  const stats = [
    { label: "Taux de Conversion", value: "24%", icon: TrendingUp },
    { label: "Satisfaction Client", value: "98%", icon: ThumbsUp },
    { label: "Appels / Mois", value: "500k+", icon: PhoneCall },
    { label: "Objectifs Atteints", value: "100%", icon: CheckCircle2 }
  ];

  const countries = [
    { name: "Madagascar", flag: "🇲🇬" },
    { name: "Maroc", flag: "🇲🇦" },
    { name: "Maurice", flag: "🇲🇺" },
    { name: "Sénégal", flag: "🇸🇳" },
    { name: "Tunisie", flag: "🇹🇳" }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/#services')}
          className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 mb-12 transition-colors"
          aria-label="Retour aux services"
        >
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              Expertise & Performance
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              L'Excellence <br />
              <span className="text-gradient from-emerald-400 to-teal-500">Téléphonique.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
              Professionnels and experts du domaine, nous propulsons votre business via des campagnes de prospection, sondages and qualification de leads ultra-performantes.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-4 py-2 rounded-xl glass border-white/10 text-sm font-bold text-emerald-400">Projets Court Terme</div>
              <div className="px-4 py-2 rounded-xl glass border-white/10 text-sm font-bold text-teal-400">Projets Long Terme</div>
            </div>
            <Link 
              to="/demarrer-un-projet?service=call"
              className="bg-emerald-500 text-zinc-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/30"
            >
              Lancer ma campagne
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-4 overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://ted-companygroup.com/image/3.jpg" 
                alt="Support Relation Client" 
                className="w-full h-full object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border-emerald-500/20 hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">Performance en Direct</span>
              </div>
              <div className="text-3xl font-black">99.9%</div>
              <div className="text-xs text-zinc-500">Qualité de service</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 text-center group hover:border-emerald-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-4xl font-black mb-2 text-gradient from-white to-zinc-500">{stat.value}</div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Une Force <span className="text-gradient">Multiculturelle.</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Nous disposons de collaborateurs experts de toutes langues and de tous pays, avec une présence forte en Afrique pour une proximité culturelle and linguistique optimale.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {countries.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 glass rounded-2xl border-white/5 hover:border-emerald-500/30 transition-all"
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="font-bold">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-500/5 rounded-[4rem] p-12 md:p-20 mb-32 border border-emerald-500/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Pourquoi nous choisir ?</h2>
              <div className="space-y-6">
                {[
                  { t: "Expertise B2B & B2C", d: "Une approche adaptée à chaque cible pour maximiser vos conversions." },
                  { t: "Flexibilité Totale", d: "Nous gérons vos projets ponctuels ou vos besoins récurrents sur le long terme." },
                  { t: "Technologie de Pointe", d: "Outils de CRM and de téléphonie IP de dernière génération." },
                  { t: "Rapport Qualité/Prix", d: "Une excellence opérationnelle à des tarifs compétitifs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                      <p className="text-zinc-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://ted-companygroup.com/image/3.jpg" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                alt="Collaboration"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-10" />
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

export default CallServiceDetail;
