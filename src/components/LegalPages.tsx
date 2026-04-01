import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Scale, Info, Cookie } from 'lucide-react';

const LegalLayout = ({ children, title, icon: Icon }: { children: React.ReactNode, title: string, icon: any }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-blue max-w-none space-y-8 text-zinc-400"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export const MentionsLegales = () => (
  <LegalLayout title="Mentions Légales" icon={Scale}>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Info className="w-5 h-5 text-blue-400" /> 1. Édition du site
      </h2>
      <p>
        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>ted-companygroup.com</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Propriétaire du site :</strong> Ted-Company Group - Contact : contact@ted-companygroup.com - Adresse : Antananarivo, Madagascar.</li>
        <li><strong>Identification de l'entreprise :</strong> Ted-Company Group - Siège social : Antananarivo, Madagascar.</li>
        <li><strong>Directeur de la publication :</strong> Direction de Ted-Company Group.</li>
        <li><strong>Hébergeur :</strong> Google Cloud Platform - 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Shield className="w-5 h-5 text-blue-400" /> 2. Propriété intellectuelle et contrefaçons
      </h2>
      <p>
        Nous sommes propriétaires des droits de propriété intellectuelle et détenons les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf notre autorisation écrite préalable.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Scale className="w-5 h-5 text-blue-400" /> 3. Limitations de responsabilité
      </h2>
      <p>
        Nous ne pourrons être tenus pour responsables des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site ted-companygroup.com.
      </p>
      <p>
        Nous déclinons toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur ted-companygroup.com.
      </p>
    </section>
  </LegalLayout>
);

export const Confidentialite = () => (
  <LegalLayout title="Politique de Confidentialité" icon={Lock}>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Eye className="w-5 h-5 text-blue-400" /> 1. Gestion des données personnelles
      </h2>
      <p>
        Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Shield className="w-5 h-5 text-blue-400" /> 2. Responsables de la collecte des données personnelles
      </h2>
      <p>
        Pour les Données Personnelles collectées dans le cadre de la navigation de l’Utilisateur sur le Site, le responsable du traitement des Données Personnelles est : Ted-Company Group.
      </p>
      <p>
        En tant que responsable du traitement des données que nous collectons, nous nous engageons à respecter le cadre des dispositions légales en vigueur.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Lock className="w-5 h-5 text-blue-400" /> 3. Finalité des données collectées
      </h2>
      <p>Nous sommes susceptibles de traiter tout ou partie des données :</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur.</li>
        <li>Pour prévenir et lutter contre la fraude informatique (spamming, hacking…).</li>
        <li>Pour améliorer la navigation sur le Site.</li>
        <li>Pour mener des enquêtes de satisfaction facultatives.</li>
        <li>Pour mener des campagnes de communication (mail).</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Scale className="w-5 h-5 text-blue-400" /> 4. Droit d’accès, de rectification et d’opposition
      </h2>
      <p>
        Conformément à la réglementation européenne en vigueur, les Utilisateurs de ted-companygroup.com disposent des droits suivants :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs.</li>
        <li>Droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD).</li>
        <li>Droit de retirer à tout moment un consentement (article 13-2c RGPD).</li>
        <li>Droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD).</li>
        <li>Droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD).</li>
      </ul>
      <p>
        Si l’Utilisateur souhaite savoir comment nous utilisons ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut nous contacter par écrit à l’adresse suivante : contact@ted-companygroup.com.
      </p>
    </section>
  </LegalLayout>
);

export const Cookies = () => (
  <LegalLayout title="Gestion des Cookies" icon={Cookie}>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Cookie className="w-5 h-5 text-blue-400" /> 1. Qu'est-ce qu'un cookie ?
      </h2>
      <p>
        Un "cookie" est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Eye className="w-5 h-5 text-blue-400" /> 2. Pourquoi utilisons-nous des cookies ?
      </h2>
      <p>
        Nous sommes susceptibles de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations nous permettent d’améliorer le contenu du Site et la navigation de l’Utilisateur.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Scale className="w-5 h-5 text-blue-400" /> 3. Comment gérer vos cookies ?
      </h2>
      <p>
        Conformément à notre volonté d'optimisation continue, <strong>l'utilisation de ce site implique l'acceptation automatique des cookies</strong> nécessaires à l'analyse du trafic et à l'amélioration de nos services.
      </p>
      <p>
        L’Utilisateur peut néanmoins configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur.
      </p>
      <p>
        Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Info className="w-5 h-5 text-blue-400" /> 4. Information sur le consentement
      </h2>
      <p>
        En poursuivant votre navigation sur <strong>ted-companygroup.com</strong>, vous reconnaissez avoir été informé que des cookies sont utilisés pour collecter des informations statistiques anonymes sur votre visite. Ces données nous sont précieuses pour adapter nos offres et nos contenus à vos besoins réels.
      </p>
    </section>
  </LegalLayout>
);
