import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        services: 'Services',
        about: 'À propos',
        process: 'Processus',
        contact: 'Contact',
        startProject: 'Démarrer un projet',
        backHome: 'Retour à l\'accueil'
      },
      hero: {
        badge: 'Ted-Company Group Innovation',
        title: "L'innovation au service de demain.",
        subtitle: "Propulsez votre entreprise vers de nouveaux sommets avec nos solutions d'externalisation intelligentes et innovantes.",
        ctaStart: 'Démarrer un projet',
        ctaExplore: 'Explorer nos Solutions'
      },
      services: {
        title: 'Nos Services',
        subtitle: 'Une gamme complète de services d\'externalisation conçus pour optimiser votre productivité et réduire vos coûts opérationnels.',
        web: {
          title: 'Création Site Web',
          desc: 'Des sites web modernes, performants et optimisés pour votre croissance digitale.'
        },
        call: {
          title: 'Centre d\'Appel',
          desc: 'Gestion professionnelle de vos appels entrants et sortants pour une satisfaction client optimale.'
        },
        admin: {
          title: 'Assistance Administratif',
          desc: 'Libérez-vous des tâches chronophages avec notre support administratif dédié.'
        },
        compta: {
          title: 'Comptabilité',
          desc: 'Une gestion comptable rigoureuse et transparente pour la sérénité de votre entreprise.'
        },
        juridique: {
          title: 'Juridique',
          desc: 'Conseils et accompagnement juridique pour sécuriser vos opérations et contrats.'
        },
        sav: {
          title: 'SAV',
          desc: 'Un service après-vente réactif pour fidéliser vos clients et valoriser votre image.'
        },
        cm: {
          title: 'Community Manager',
          desc: 'Boostez votre présence sur les réseaux sociaux et engagez votre communauté.'
        },
        support: {
          title: 'Support Technique',
          desc: 'Assistance technique à distance et helpdesk pour vos infrastructures et utilisateurs.'
        }
      },
      about: {
        title: 'Notre Histoire',
        subtitle: 'Ted-Company Group est né d\'une vision simple : offrir aux entreprises une plateforme unique de services d\'externalisation de haute qualité. Nous croyons que la réussite de nos clients est le moteur de notre propre succès.',
        stats: {
          projects: 'Projets Réussis',
          clients: 'Clients Satisfaits',
          experts: 'Experts Dédiés',
          founded: 'Année de Création'
        }
      },
      process: {
        title: 'Notre Processus',
        subtitle: 'Une méthodologie rigoureuse pour garantir l\'excellence à chaque étape.',
        steps: [
          { title: 'Analyse', desc: 'Compréhension approfondie de vos besoins et objectifs.' },
          { title: 'Stratégie', desc: 'Élaboration d\'un plan d\'action personnalisé et efficace.' },
          { title: 'Exécution', desc: 'Mise en œuvre rigoureuse avec un suivi constant.' },
          { title: 'Optimisation', desc: 'Analyse des résultats et amélioration continue.' }
        ]
      },
      contact: {
        title: "Contactez-nous",
        subtitle: "Prêt à transformer votre vision en réalité ? Notre équipe d'experts est à votre écoute pour propulser votre business vers de nouveaux sommets.",
        form: {
          name: "Nom Complet",
          namePlaceholder: "Jean Dupont",
          email: "Email Professionnel",
          emailPlaceholder: "jean@entreprise.com",
          service: "Service Souhaité",
          servicePlaceholder: "Sélectionnez un service",
          message: "Votre Message",
          messagePlaceholder: "Parlez-nous de votre projet...",
          send: "Envoyer le message",
          sending: "Envoi en cours...",
          success: "Message envoyé avec succès !",
          error: "Une erreur est survenue. Veuillez réessayer."
        },
        info: {
          email: "Email",
          phone: "Téléphone",
          address: "Adresse",
          available: "Disponible 24/7",
          worldwide: "Disponible dans le monde entier"
        }
      },
      stats: {
        clients: "Clients Actifs",
        projects: "Projets Réalisés",
        experts: "Experts Dédiés",
        satisfaction: "Satisfaction"
      },
      serviceDetails: {
        back: "Retour aux services",
        backHome: "Retour à l'accueil",
        startProject: "Démarrer un projet",
        notFound: "Service non trouvé",
        learnMore: "En savoir plus",
        requestQuote: "Demander un devis",
        web: {
          badge: "Innovation Digitale",
          title: "Le Web au service de demain.",
          subtitle: "Nous concevons des expériences numériques d'exception, alliant design avant-gardiste et performances technologiques de pointe.",
          floating: {
            speed: "Performance 100%",
            seo: "SEO Optimisé"
          },
          features: [
            { title: "Architecture Scalable", desc: "Des fondations solides pour accompagner votre croissance sans limites." },
            { title: "Performance Ultime", desc: "Vitesse de chargement éclair pour une expérience utilisateur sans friction." },
            { title: "Design Adaptatif", desc: "Une interface parfaite sur tous les supports, du mobile au desktop." },
            { title: "Expérience Utilisateur", desc: "Parcours intuitifs conçus pour maximiser vos conversions." },
            { title: "Visibilité Maximale", desc: "Optimisation SEO native pour dominer les résultats de recherche." },
            { title: "Sécurité Avancée", desc: "Protection robuste de vos données et de celles de vos utilisateurs." }
          ],
          copywriting: {
            title: "Copywriting & Stratégie",
            subtitle: "Les mots sont vos meilleurs vendeurs. Nous rédigeons des contenus qui captivent, persuadent et convertissent vos visiteurs en clients fidèles.",
            feature1: "Storytelling de Marque",
            desc1: "Nous créons un récit unique qui résonne avec votre audience.",
            feature2: "Optimisation Conversion",
            desc2: "Chaque phrase est pensée pour guider l'utilisateur vers l'action.",
            feature3: "Présence Internationale",
            desc3: "Adaptation culturelle et linguistique pour conquérir de nouveaux marchés."
          }
        },
        call: {
          badge: "Relation Client Premium",
          title: "L'Excellence au bout du fil.",
          subtitle: "Transformez chaque interaction en une opportunité. Notre centre d'appels nouvelle génération humanise votre relation client.",
          cta: "Demander un devis",
          startCampaign: "Lancer ma campagne",
          types: {
            short: "Projets Court Terme",
            long: "Projets Long Terme"
          },
          live: {
            badge: "Live Performance",
            quality: "Qualité de service"
          },
          features: [
            { title: "Support 24/7", desc: "Une présence constante pour rassurer et accompagner vos clients à tout moment." },
            { title: "Multilingue", desc: "Français, Anglais, Allemand... Nous parlons la langue de vos clients." },
            { title: "Qualité Certifiée", desc: "Processus rigoureux et écoute active pour une satisfaction garantie." },
            { title: "Omnicanal", desc: "Téléphone, Chat, Email... Une gestion unifiée de tous vos points de contact." },
            { title: "Vente & Fidélisation", desc: "Prospection ciblée et gestion de la rétention pour booster votre CA." },
            { title: "Reporting Live", desc: "Suivez vos indicateurs de performance en temps réel via notre dashboard." }
          ],
          stats: {
            conversion: "Taux de Conversion",
            satisfaction: "Satisfaction Client",
            calls: "Appels Traités",
            goals: "Objectifs Atteints"
          },
          presence: {
            title: "Une Présence Internationale",
            subtitle: "Le monde n'a plus de frontières. Nous vous accompagnons dans votre expansion globale avec des équipes natives et une expertise multiculturelle."
          },
          whyUs: {
            title: "Pourquoi nous ?",
            list: [
              { t: "Expertise Multiculturelle", d: "Une compréhension fine des nuances locales pour chaque marché." },
              { t: "Technologie de Pointe", desc: "Des outils CRM et VoIP de dernière génération pour une efficacité maximale." },
              { t: "Formation Continue", d: "Nos agents sont formés mensuellement aux meilleures techniques de relation client." }
            ]
          }
        },
        admin: {
          badge: "Efficacité Opérationnelle",
          title: "Libérez votre Potentiel.",
          subtitle: "Déléguez la complexité. Nos experts administratifs optimisent vos processus pour vous permettre de vous concentrer sur l'essentiel : votre croissance.",
          optimize: "Optimiser ma gestion",
          types: {
            result: "Orienté Résultat",
            performance: "Haute Performance"
          },
          stats: {
            resolution: "Taux de Résolution",
            response: "Temps de Réponse",
            satisfaction: "Satisfaction",
            availability: "Disponibilité"
          },
          features: [
            { title: "Gestion Agenda", desc: "Organisation millimétrée de votre temps et de vos priorités stratégiques." },
            { title: "Facturation & Relances", desc: "Suivi rigoureux de votre trésorerie et gestion professionnelle des impayés." },
            { title: "Support RH", desc: "Accompagnement dans la gestion administrative de vos talents et recrutements." },
            { title: "Organisation Data", desc: "Structuration et archivage intelligent de vos informations critiques." },
            { title: "Veille Stratégique", desc: "Recherche et synthèse d'informations pour vos prises de décision." },
            { title: "Gestion Voyages", desc: "Organisation complète de vos déplacements professionnels et logistique." }
          ],
          engagement: {
            badge: "Engagement Qualité",
            label: "Satisfaction",
            title: "Un Engagement Total.",
            subtitle: "Nous ne nous contentons pas d'exécuter des tâches, nous devenons vos partenaires stratégiques au quotidien.",
            list: [
              { t: "Optimisation des Coûts", d: "Réduisez vos charges fixes en ne payant que pour le travail effectif." },
              { t: "Sécurité & Confidentialité", d: "Vos données sont protégées par des protocoles de sécurité stricts." },
              { t: "Équipe Dédiée", d: "Un interlocuteur unique qui connaît parfaitement votre dossier." }
            ]
          }
        },
        support: {
          badge: "Support & Maintenance",
          title: "Votre Expert À Distance.",
          subtitle: "Bénéficiez d'une assistance technique de haut niveau. Nos techniciens experts interviennent instantanément pour garantir la continuité de votre activité.",
          cta: "Demander une assistance",
          active: "Support Actif",
          availability: "Disponibilité",
          tools: [
            { name: "Google Meet" },
            { name: "AnyDesk" },
            { name: "Remote Desktop" },
            { name: "Support Facture" }
          ],
          whyUs: {
            title: "Pourquoi choisir notre Compagnie de Développement ?",
            subtitle: "Nous ne nous contentons pas de résoudre vos problèmes, nous optimisons votre infrastructure pour prévenir les pannes futures.",
            list: [
              { t: "Expertise Technique", d: "Des ingénieurs certifiés sur les dernières technologies." },
              { t: "Réactivité Éclair", d: "Intervention en moins de 15 minutes for les urgences." },
              { t: "Sécurité Maximale", d: "Chiffrement de bout en bout lors des interventions." },
              { t: "Coûts Maîtrisés", d: "Des forfaits adaptés à la taille de votre entreprise." }
            ]
          },
          features: [
            { title: "Bureau à Distance", desc: "Intervention rapide via AnyDesk et Remote Desktop pour résoudre vos problèmes en temps réel." },
            { title: "Google Meet Support", desc: "Assistance visuelle en direct pour vous guider pas à pas dans vos configurations." },
            { title: "Maintenance Serveur", desc: "Surveillance et optimisation de vos infrastructures critiques 24h/24." },
            { title: "Sécurité & Backup", desc: "Protection contre les menaces et gestion rigoureuse de vos sauvegardes de données." },
            { title: "Helpdesk Utilisateur", desc: "Un point de contact unique pour toutes les demandes techniques de vos collaborateurs." },
            { title: "Dépannage Logiciel", desc: "Installation, mise à jour et résolution de conflits logiciels à distance." }
          ]
        },
        compta: {
          badge: "Précision & Croissance",
          title: "La clarté de vos Chiffres.",
          subtitle: "Ne naviguez plus à vue. Nous transformons vos données comptables en leviers de croissance stratégiques pour votre entreprise.",
          cta: "Sécuriser ma gestion",
          growth: "Croissance Annuelle",
          features: [
            { icon: "PieChart", title: "Analyse Financière", desc: "Vision claire de votre rentabilité et de vos flux de trésorerie." },
            { icon: "Calculator", title: "Comptabilité Générale", desc: "Tenue rigoureuse de vos comptes selon les normes en vigueur." },
            { icon: "TrendingUp", title: "Optimisation Fiscale", desc: "Conseils stratégiques pour réduire légalement votre charge fiscale." },
            { icon: "FileText", title: "Bilans & Rapports", desc: "Production de documents financiers précis pour vos partenaires." },
            { icon: "ShieldCheck", title: "Conformité Totale", desc: "Veille permanente sur les évolutions réglementaires et légales." },
            { icon: "Zap", title: "Digitalisation", desc: "Outils de comptabilité en ligne pour un suivi en temps réel." }
          ]
        },
        legal: {
          badge: "Sécurité & Droit",
          title: "Bâtir sur des Bases Solides.",
          subtitle: "La loi ne doit pas être un frein, mais un bouclier. Nous sécurisons votre présent pour garantir votre avenir.",
          cta: "Protéger mon entreprise",
          features: [
            { title: "Conseil Juridique", desc: "Accompagnement stratégique pour toutes vos décisions d'entreprise." },
            { title: "Protection des Actifs", desc: "Sécurisation de votre propriété intellectuelle et de vos biens." },
            { title: "Rédaction de Contrats", desc: "Élaboration de contrats solides pour protéger vos intérêts." },
            { title: "Gestion des Litiges", desc: "Résolution efficace et discrète de vos différends juridiques." },
            { title: "Veille Réglementaire", desc: "Anticipation des changements législatifs impactant votre secteur." },
            { title: "Audit de Conformité", desc: "Vérification complète de la conformité de vos processus." }
          ]
        },
        sav: {
          badge: "Sourire & Satisfaction",
          title: "Le bonheur de Vos Clients.",
          subtitle: "Le service après-vente n'est pas un coût, c'est votre meilleur investissement marketing. Nous prenons soin de vos clients comme des nôtres.",
          cta: "Enchanter mes clients",
          satisfaction: "Satisfaction Score",
          quote: "\"Leur équipe SAV a transformé nos détracteurs en ambassadeurs de marque.\"",
          quoteAuthor: "Directeur Relation Client, Retail Global",
          whyUs: {
            title: "Pourquoi nous Déléguer votre SAV ?",
            subtitle: "L'externalisation de votre service après-vente vous permet de vous concentrer sur votre cœur de métier tout en garantissant une expérience client irréprochable et professionnelle.",
            list: [
              { t: "Traitement des Factures", d: "Gestion rigoureuse de la facturation, des avoirs et des litiges de paiement pour une fluidité financière." },
              { t: "Gestion des Réclamations", d: "Traitement diplomatique et efficace des plaintes pour désamorcer les tensions et trouver des solutions." },
              { t: "Suivi de Commandes", d: "Information en temps réel de vos clients sur l'état de leurs livraisons et résolution des problèmes logistiques." },
              { t: "Enquêtes & Feedback", d: "Collecte proactive des avis clients pour identifier les axes d'amélioration de vos produits." }
            ]
          },
          features: [
            { title: "Empathie Client", desc: "Une approche humaine pour transformer chaque problème en solution positive." },
            { title: "Résolution Rapide", desc: "Traitement prioritaire des demandes pour minimiser l'insatisfaction." },
            { title: "Support Multicanal", desc: "Présence là où vos clients se trouvent : chat, mail, téléphone." },
            { title: "Fidélisation", desc: "Stratégies post-résolution pour renforcer le lien avec votre marque." },
            { title: "Analyse des Retours", desc: "Identification des points d'amélioration de vos produits/services." },
            { title: "Disponibilité", desc: "Une équipe prête à répondre quand vos clients en ont besoin." }
          ]
        },
        cm: {
          badge: "Influence & Engagement",
          title: "Dominez les Réseaux.",
          subtitle: "Ne soyez pas juste présent, soyez influent. Nous créons des conversations qui comptent et bâtissons des communautés passionnées autour de votre marque.",
          cta: "Booster mon influence",
          likes: "Likes",
          shares: "Shares",
          community: "Communauté Active",
          captivate: "Contenus qui Captivent",
          readTime: "min de lecture",
          close: "Fermer",
          author: {
            name: "Expert CM",
            title: "Stratège Digital"
          },
          impact: {
            title: "L'impact d'une Connexion Réelle.",
            subtitle: "Parce que derrière chaque écran se trouve un humain, nous humanisons votre communication pour créer des émotions durables. Un simple sourire, une réponse attentionnée, et votre marque devient inoubliable.",
            stat: "+85% de fidélisation client"
          },
          features: [
            { title: "Stratégie Sociale", desc: "Planification de contenu alignée sur vos objectifs de marque." },
            { title: "Création de Contenu", desc: "Visuels et textes percutants pour engager votre audience." },
            { title: "Gestion de Communauté", desc: "Interaction quotidienne avec vos abonnés pour créer du lien." },
            { title: "Croissance Organique", desc: "Augmentation de votre visibilité sans dépendre uniquement de la pub." },
            { title: "Reporting Détaillé", desc: "Analyse précise de vos KPIs et de l'engagement." },
            { title: "Veille Tendances", desc: "Réactivité face aux nouvelles modes et formats émergents." }
          ],
          articles: [
            { 
              title: "Comment doubler votre engagement en 30 jours ?", 
              tag: "Stratégie",
              content: "L'engagement sur les réseaux sociaux est le moteur de votre croissance digitale. En 2026, l'algorithme ne privilégie plus seulement le nombre de likes, mais la profondeur des interactions. Pour doubler votre engagement en seulement 30 jours, vous devez opérer un virage stratégique majeur : passez d'une logique de diffusion descendante à une logique de conversation horizontale.\n\nVoici les piliers fondamentaux de cette transformation :\n\n1. L'Authenticité Radicale : Les audiences sont lassées des flux parfaits et filtrés. Montrez les coulisses de votre entreprise, partagez vos défis quotidiens et humanisez votre marque. Une vidéo \"brute\" de 15 secondes a souvent plus d'impact qu'une production studio coûteuse.\n\n2. La Règle des 60 Minutes : L'algorithme analyse la vitesse de réaction. Répondez à chaque commentaire de manière personnalisée dans l'heure qui suit la publication. Cela signale à la plateforme que votre contenu génère une conversation active, ce qui booste instantanément votre portée organique.\n\n3. Maîtrise des Formats Verticaux : Les Reels et TikTok sont les rois de la découverte. Utilisez-les pour attirer de nouveaux abonnés, puis utilisez les Stories pour approfondir la relation. Chaque format a un rôle précis dans votre entonnoir d'engagement.\n\nEn appliquant rigoureusement ces méthodes, nos partenaires constatent une augmentation moyenne de 120% de leurs interactions dès le premier mois. C'est un travail de longue haleine qui nécessite une attention constante aux détails et une compréhension fine de votre audience cible."
            },
            { 
              title: "Le secret des vidéos virales sur TikTok enfin révélé.", 
              tag: "Viral",
              content: "La viralité sur TikTok n'est pas un coup de chance aléatoire, c'est le résultat d'une ingénierie psychologique précise. Pour qu'une vidéo devienne virale, elle doit satisfaire deux indicateurs clés : le taux de complétion et le taux de partage.\n\nLe Secret de l'Accroche (The Hook) :\nLes deux premières secondes déterminent le destin de votre vidéo. Vous devez \"arrêter le pouce\" de l'utilisateur. Utilisez des contrastes visuels forts, des questions provocatrices ou des promesses de valeur immédiate. Si l'utilisateur ne comprend pas l'intérêt de la vidéo en moins de 2 secondes, il passera à la suivante.\n\nLa Structure Narrative :\nUne vidéo virale suit souvent une structure en trois actes compressée :\n- L'Accroche : Capte l'attention et pose une problématique.\n- Le Développement : Délivre la promesse ou l'information de manière rythmée.\n- Le Rebond (The Payoff) : La conclusion satisfaisante ou l'appel à l'action.\n\nL'Utilisation Stratégique de l'Audio :\nNe vous contentez pas d'utiliser une musique tendance. Utilisez-la pour rythmer vos coupures au montage. Le cerveau humain adore la synchronisation entre l'image et le son. Les tendances sonores agissent comme des ancres mémorielles pour votre audience.\n\nEnfin, n'oubliez pas les \"boucles de curiosité\". Posez une question au début et ne donnez la réponse qu'à la toute fin pour maximiser le temps de visionnage. Plus le temps de visionnage est élevé, plus TikTok poussera votre vidéo vers de nouveaux utilisateurs."
            },
            { 
              title: "Pourquoi votre marque doit être sur LinkedIn en 2026.", 
              tag: "B2B",
              content: "LinkedIn a achevé sa mutation : ce n'est plus un simple annuaire de CV, c'est devenu le carrefour mondial de l'influence B2B. En 2026, ne pas y être présent de manière active revient à être invisible pour vos partenaires commerciaux et vos futurs talents.\n\nLe Pouvoir du Personal Branding :\nLes entreprises n'achètent plus à d'autres entreprises, les humains achètent à d'autres humains. Le Personal Branding de vos dirigeants et de vos employés est votre actif le plus précieux. Un post publié par un employé a 8 fois plus d'engagement qu'un post publié par la page entreprise. C'est l'ère de l'Employee Advocacy.\n\nLe Thought Leadership :\nPour dominer LinkedIn, vous devez devenir une source d'autorité. Ne partagez pas seulement vos actualités, partagez votre vision du marché, vos analyses de tendances et vos solutions aux problèmes de votre secteur. C'est ainsi que vous bâtissez une confiance inébranlable avant même le premier contact commercial.\n\nL'Algorithme de Proximité :\nLinkedIn privilégie désormais les relations réelles et les interactions de qualité. Engagez-vous sur les posts de vos prospects, commentez intelligemment et apportez de la valeur sans rien attendre en retour immédiatement. Le \"Social Selling\" est un marathon, pas un sprint.\n\nUne présence optimisée sur LinkedIn permet de réduire le cycle de vente de 30% et d'augmenter le taux de conversion de vos leads qualifiés de manière spectaculaire. C'est l'outil ultime pour bâtir une réputation solide dans le monde professionnel moderne."
            }
          ]
        },
        generic: {
          expertise: "Expertise",
          expertiseDesc: "Une équipe de spécialistes dédiés à votre réussite.",
          quality: "Qualité",
          qualityDesc: "Un standard de service élevé et constant.",
          support: "Support",
          supportDesc: "Un accompagnement personnalisé à chaque étape.",
          quote: "Nous mettons à votre disposition une expertise pointue et des outils innovants pour garantir la réussite de vos projets.",
          ctaQuote: "Demander un devis",
          ctaMore: "En savoir plus"
        }
      },
      startProject: {
        badge: "Nouveau Projet",
        title: "Donnons vie à votre Vision.",
        subtitle: "Nous sommes très impatients de faire connaissance avec vos souhaits et vos demandes pour faire décoller votre activité et votre business.",
        back: "Retour",
        features: {
          accel: { title: "Accélération", desc: "Nous mettons toute notre énergie pour propulser votre projet rapidement." },
          precision: { title: "Précision", desc: "Chaque détail compte pour atteindre vos objectifs stratégiques." },
          passion: { title: "Passion", desc: "Nous aimons ce que nous faisons, et cela se voit dans nos résultats." }
        },
        form: {
          name: "Nom Complet",
          namePlaceholder: "Jean Dupont",
          email: "Email Professionnel",
          emailPlaceholder: "jean@entreprise.com",
          company: "Nom de l'Entreprise",
          companyPlaceholder: "Votre Société",
          project: "Nom du Projet",
          projectPlaceholder: "Ex: Refonte Site Web",
          service: "Service Souhaité",
          other: "Autre",
          budget: "Budget Estimé",
          budgets: [
            "Moins de 1 000€",
            "1 000€ - 5 000€",
            "5 000€ - 10 000€",
            "Plus de 10 000€"
          ],
          details: "Détails du Projet",
          detailsPlaceholder: "Parlez-nous de vos objectifs, de vos défis et de ce que vous attendez de nous...",
          submit: "Lancer l'aventure",
          disclaimer: "En envoyant ce formulaire, vous acceptez d'être recontacté par nos experts sous 24h ouvrées."
        },
        team: {
          title: "Une équipe passionnée à votre service.",
          subtitle: "Derrière chaque projet réussi, il y a des visages, des sourires et une volonté inébranlable de réussir ensemble.",
          alt: "Notre équipe souriante"
        },
        trust: [
          { label: "Réponse sous", value: "24h" },
          { label: "Satisfaction", value: "99%" },
          { label: "Projets livrés", value: "1.2k+" },
          { label: "Support", value: "24/7" }
        ]
      },
      footer: {
        legal: 'Mentions Légales',
        privacy: 'Confidentialité',
        cookies: 'Cookies',
        rights: 'Tous droits réservés.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    lng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
