import { motion } from 'motion/react';

const africanCountries = [
  { name: "Sénégal", code: "sn" },
  { name: "Cote d'Ivoire", code: "ci" },
  { name: "Madagascar", code: "mg" },
  { name: "Cameroun", code: "cm" },
  { name: "Bénin", code: "bj" },
  { name: "Togo", code: "tg" },
  { name: "Gabon", code: "ga" },
  { name: "Congo", code: "cg" },
  { name: "Guinée", code: "gn" },
  { name: "Mali", code: "ml" }
];

export const AfricanFlagsMarquee = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-zinc-900/50 border-y border-white/5">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Notre Expertise en <span className="text-gradient">Outsourcing Africain</span></h3>
        <p className="text-zinc-400">Une présence forte sur tout le continent pour un recrutement sans frontières.</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10 pointer-events-none" />
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center whitespace-nowrap"
      >
        {[...africanCountries, ...africanCountries].map((country, i) => (
          <div key={i} className="flex flex-col items-center gap-4 group">
            <div className="w-32 h-20 rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <img 
                src={`https://flagcdn.com/w160/${country.code}.png`} 
                alt={country.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-sm font-bold text-zinc-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest">{country.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const jobTitles = [
  "Développeur Web", "Expert IA", "Conseiller Client", "Assistant Administratif",
  "Comptable", "Conseiller Juridique", "Responsable RH", "Agent SAV",
  "Community Manager", "Technicien Support", "Télésecrétaire Médical",
  "Data Scientist", "UX Designer", "Chef de Projet", "Commercial B2B",
  "Expert Marketing", "Analyste Financier", "Développeur Mobile",
  "Architecte Cloud", "Spécialiste Cybersécurité"
];

export const JobTitlesMarquee = () => {
  return (
    <div className="relative py-10 overflow-hidden bg-blue-500/5 border-y border-white/5 mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10 pointer-events-none" />
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center px-8"
        >
          {[...jobTitles, ...jobTitles, ...jobTitles, ...jobTitles].map((title, i) => (
            <span key={i} className="text-2xl md:text-3xl font-black uppercase tracking-tighter opacity-30 hover:opacity-100 hover:text-orange-400 transition-all cursor-default">
              {title}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
