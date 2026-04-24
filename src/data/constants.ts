import { 
  Globe, 
  Cpu, 
  PhoneCall, 
  FileText, 
  Calculator, 
  Scale, 
  Users2, 
  Headphones, 
  Users, 
  Terminal, 
  Activity, 
  Video,
  Laptop,
  Briefcase
} from 'lucide-react';

export const categories = [
  { id: 'digital', title: 'Solutions Digitales', icon: Laptop },
  { id: 'client', title: 'Relation Client', icon: Headphones },
  { id: 'admin', title: 'Gestion & RH', icon: Briefcase }
];

export const services = [
  {
    id: 'web',
    categoryId: 'digital',
    title: 'Création Site Web & SEO',
    description: 'Développement web sur mesure and SEO. Solutions performantes pour votre croissance digitale.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ai',
    categoryId: 'digital',
    title: 'IA & Automatisation',
    description: 'Intégration d\'Intelligence Artificielle and automatisation de processus métier.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'call',
    categoryId: 'client',
    title: 'Centre d\'Appel Bilingue',
    description: 'Gestion professionnelle de vos appels à Antananarivo, Madagascar.',
    icon: PhoneCall,
    image: 'https://www.ted-companygroup.com/assets/img/service/5.png',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'admin',
    categoryId: 'admin',
    title: 'Assistance Administrative',
    description: 'Support administratif dédié pour optimiser votre temps.',
    icon: FileText,
    image: 'https://www.ted-companygroup.com/assets/img/service/2.png',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'compta',
    categoryId: 'admin',
    title: 'Comptabilité',
    description: 'Gestion comptable rigoureuse and transparente.',
    icon: Calculator,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'juridique',
    categoryId: 'admin',
    title: 'Juridique',
    description: 'Conseils and accompagnement juridique sécurisé.',
    icon: Scale,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'rh',
    categoryId: 'admin',
    title: 'Solution RH & Recrutement',
    description: 'Recrutement international and profils spécialisés.',
    icon: Users2,
    color: 'from-orange-400 to-amber-600'
  },
  {
    id: 'sav',
    categoryId: 'client',
    title: 'SAV & Support Client',
    description: 'Service après-vente réactif and multilingue.',
    icon: Headphones,
    color: 'from-rose-500 to-orange-500'
  },
  {
    id: 'cm',
    categoryId: 'digital',
    title: 'Community Manager',
    description: 'Boostez votre présence sur les réseaux sociaux.',
    icon: Users,
    color: 'from-cyan-500 to-emerald-500'
  },
  {
    id: 'support',
    categoryId: 'client',
    title: 'Support Technique',
    description: 'Assistance technique à distance and helpdesk.',
    icon: Terminal,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'medical',
    categoryId: 'client',
    title: 'Télésecrétariat Médical',
    description: 'Support administratif pour praticiens and hôpitaux.',
    icon: Activity,
    color: 'from-emerald-400 to-cyan-600'
  },
  {
    id: 'multimedia',
    categoryId: 'digital',
    title: 'Multimédia & Création de Contenu',
    description: 'Retouche photo, montage vidéo and création visuelle.',
    icon: Video,
    color: 'from-pink-500 to-rose-600'
  }
];

export const stats = [
  { label: 'Clients Actifs', value: '250+' },
  { label: 'Projets Réalisés', value: '1.2k' },
  { label: 'Experts Dédiés', value: '85' },
  { label: 'Satisfaction', value: '98%' }
];

export const steps = [
  { title: 'Analyse', desc: 'Nous étudions vos besoins and vos objectifs spécifiques.' },
  { title: 'Stratégie', desc: 'Élaboration d\'un plan d\'action personnalisé and efficace.' },
  { title: 'Exécution', desc: 'Mise en place de nos équipes and outils pour votre projet.' },
  { title: 'Optimisation', desc: 'Suivi continu and amélioration des performances.' }
];

export const countries = [
  { name: "France", code: "fr", phoneCode: "+33" },
  { name: "Belgique", code: "be", phoneCode: "+32" },
  { name: "Suisse", code: "ch", phoneCode: "+41" },
  { name: "Canada", code: "ca", phoneCode: "+1" },
  { name: "Luxembourg", code: "lu", phoneCode: "+352" },
  { name: "Sénégal", code: "sn", phoneCode: "+221" },
  { name: "Côte d'Ivoire", code: "ci", phoneCode: "+225" },
  { name: "Maroc", code: "ma", phoneCode: "+212" },
  { name: "États-Unis", code: "us", phoneCode: "+1" },
  { name: "Royaume-Uni", code: "gb", phoneCode: "+44" },
  { name: "Espagne", code: "es", phoneCode: "+34" },
  { name: "Italie", code: "it", phoneCode: "+39" },
  { name: "Allemagne", code: "de", phoneCode: "+49" },
  { name: "Madagascar", code: "mg", phoneCode: "+261" }
];
