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
              { t: "Réactivité Éclair", d: "Intervention en moins de 15 minutes pour les urgences." },
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
  },
  en: {
    translation: {
      nav: {
        services: 'Services',
        about: 'About',
        process: 'Process',
        contact: 'Contact',
        startProject: 'Start a project',
        backHome: 'Back to home'
      },
      hero: {
        badge: 'Ted-Company Group Innovation',
        title: "Innovation at the service of tomorrow.",
        subtitle: "Propel your business to new heights with our smart and innovative outsourcing solutions.",
        ctaStart: 'Start a project',
        ctaExplore: 'Explore our Solutions'
      },
      services: {
        title: 'Our Services',
        subtitle: 'A complete range of outsourcing services designed to optimize your productivity and reduce your operational costs.',
        web: {
          title: 'Web Creation',
          desc: 'Modern, high-performance websites optimized for your digital growth.'
        },
        call: {
          title: 'Call Center',
          desc: 'Professional management of your inbound and outbound calls for optimal customer satisfaction.'
        },
        admin: {
          title: 'Administrative Assistance',
          desc: 'Free yourself from time-consuming tasks with our dedicated administrative support.'
        },
        compta: {
          title: 'Accounting',
          desc: 'Rigorous and transparent accounting management for your company\'s peace of mind.'
        },
        juridique: {
          title: 'Legal',
          desc: 'Legal advice and support to secure your operations and contracts.'
        },
        sav: {
          title: 'After-Sales Service',
          desc: 'A responsive after-sales service to build customer loyalty and enhance your image.'
        },
        cm: {
          title: 'Community Manager',
          desc: 'Boost your presence on social networks and engage your community.'
        },
        support: {
          title: 'Technical Support',
          desc: 'Remote technical assistance and helpdesk for your infrastructure and users.'
        }
      },
      about: {
        title: 'Our Story',
        subtitle: 'Ted-Company Group was born from a simple vision: to offer companies a unique platform of high-quality outsourcing services. We believe that the success of our clients is the driver of our own success.',
        stats: {
          projects: 'Successful Projects',
          clients: 'Satisfied Clients',
          experts: 'Dedicated Experts',
          founded: 'Year Founded'
        }
      },
      process: {
        title: 'Our Process',
        subtitle: 'A rigorous methodology to guarantee excellence at every stage.',
        steps: [
          { title: 'Analysis', desc: 'Deep understanding of your needs and goals.' },
          { title: 'Strategy', desc: 'Development of a personalized and effective action plan.' },
          { title: 'Execution', desc: 'Rigorous implementation with constant monitoring.' },
          { title: 'Optimization', desc: 'Analysis of results and continuous improvement.' }
        ]
      },
      contact: {
        title: "Contact Us",
        subtitle: "Ready to turn your vision into reality? Our team of experts is ready to listen and propel your business to new heights.",
        form: {
          name: "Full Name",
          namePlaceholder: "John Doe",
          email: "Professional Email",
          emailPlaceholder: "john@company.com",
          service: "Desired Service",
          servicePlaceholder: "Select a service",
          message: "Your Message",
          messagePlaceholder: "Tell us about your project...",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "An error occurred. Please try again."
        },
        info: {
          email: "Email",
          phone: "Phone",
          address: "Address",
          worldwide: "Available Worldwide"
        }
      },
      stats: {
        clients: "Active Clients",
        projects: "Completed Projects",
        experts: "Dedicated Experts",
        satisfaction: "Satisfaction"
      },
      serviceDetails: {
        back: "Back to services",
        backHome: "Back to home",
        startProject: "Start a project",
        notFound: "Service not found",
        web: {
          badge: "Digital Innovation",
          title: "The Web at the service of tomorrow.",
          subtitle: "We design exceptional digital experiences, combining avant-garde design with cutting-edge technological performance.",
          floating: {
            speed: "100% Performance",
            seo: "SEO Optimized"
          },
          features: [
            { title: "Scalable Architecture", desc: "Solid foundations to support your growth without limits." },
            { title: "Ultimate Performance", desc: "Lightning-fast loading speed for a frictionless user experience." },
            { title: "Responsive Design", desc: "A perfect interface on all devices, from mobile to desktop." },
            { title: "User Experience", desc: "Intuitive journeys designed to maximize your conversions." },
            { title: "Maximum Visibility", desc: "Native SEO optimization to dominate search results." },
            { title: "Advanced Security", desc: "Robust protection of your data and that of your users." }
          ],
          copywriting: {
            title: "Copywriting & Strategy",
            subtitle: "Words are your best salespeople. We write content that captivates, persuades, and converts your visitors into loyal customers.",
            feature1: "Brand Storytelling",
            desc1: "We create a unique narrative that resonates with your audience.",
            feature2: "Conversion Optimization",
            desc2: "Every sentence is designed to guide the user towards action.",
            feature3: "International Presence",
            desc3: "Cultural and linguistic adaptation to conquer new markets."
          }
        },
        call: {
          badge: "Premium Customer Relations",
          title: "Excellence at the end of the line.",
          subtitle: "Transform every interaction into an opportunity. Our next-generation call center humanizes your customer relations.",
          cta: "Request a quote",
          startCampaign: "Start my campaign",
          types: {
            short: "Short Term Projects",
            long: "Long Term Projects"
          },
          live: {
            badge: "Live Performance",
            quality: "Service Quality"
          },
          features: [
            { title: "24/7 Support", desc: "A constant presence to reassure and support your customers at any time." },
            { title: "Multilingual", desc: "French, English, German... We speak your customers' language." },
            { title: "Certified Quality", desc: "Rigorous processes and active listening for guaranteed satisfaction." },
            { title: "Omnichannel", desc: "Phone, Chat, Email... Unified management of all your touchpoints." },
            { title: "Sales & Loyalty", desc: "Targeted prospecting and retention management to boost your revenue." },
            { title: "Live Reporting", desc: "Track your performance indicators in real-time via our dashboard." }
          ],
          stats: {
            conversion: "Conversion Rate",
            satisfaction: "Customer Satisfaction",
            calls: "Calls Processed",
            goals: "Goals Achieved"
          },
          presence: {
            title: "An International Presence",
            subtitle: "The world has no borders. We support your global expansion with native teams and multicultural expertise."
          },
          whyUs: {
            title: "Why us?",
            list: [
              { t: "Multicultural Expertise", d: "A fine understanding of local nuances for each market." },
              { t: "Cutting-edge Technology", desc: "Latest generation CRM and VoIP tools for maximum efficiency." },
              { t: "Continuous Training", d: "Our agents are trained monthly in the best customer relations techniques." }
            ]
          }
        },
        admin: {
          badge: "Operational Efficiency",
          title: "Unleash your Potential.",
          subtitle: "Delegate complexity. Our administrative experts optimize your processes to allow you to focus on the essential: your growth.",
          optimize: "Optimize my management",
          types: {
            result: "Result Oriented",
            performance: "High Performance"
          },
          stats: {
            resolution: "Resolution Rate",
            response: "Response Time",
            satisfaction: "Satisfaction",
            availability: "Availability"
          },
          features: [
            { title: "Calendar Management", desc: "Precise organization of your time and strategic priorities." },
            { title: "Invoicing & Reminders", desc: "Rigorous monitoring of your cash flow and professional management of unpaid invoices." },
            { title: "HR Support", desc: "Support in the administrative management of your talent and recruitment." },
            { title: "Data Organization", desc: "Intelligent structuring and archiving of your critical information." },
            { title: "Strategic Intelligence", desc: "Research and synthesis of information for your decision-making." },
            { title: "Travel Management", desc: "Complete organization of your professional travel and logistics." }
          ],
          engagement: {
            badge: "Quality Commitment",
            label: "Satisfaction",
            title: "Total Commitment.",
            subtitle: "We don't just execute tasks, we become your strategic partners on a daily basis.",
            list: [
              { t: "Cost Optimization", d: "Reduce your fixed costs by paying only for actual work." },
              { t: "Security & Confidentiality", d: "Your data is protected by strict security protocols." },
              { t: "Dedicated Team", d: "A single point of contact who knows your file perfectly." }
            ]
          }
        },
        support: {
          badge: "Support & Maintenance",
          title: "Your Remote Expert.",
          subtitle: "Benefit from high-level technical assistance. Our expert technicians intervene instantly to guarantee the continuity of your activity.",
          cta: "Request assistance",
          active: "Active Support",
          availability: "Availability",
          tools: [
            { name: "Google Meet" },
            { name: "AnyDesk" },
            { name: "Remote Desktop" },
            { name: "Invoice Support" }
          ],
          whyUs: {
            title: "Why choose our Development Company?",
            subtitle: "We don't just solve your problems, we optimize your infrastructure to prevent future failures.",
            list: [
              { t: "Technical Expertise", d: "Certified engineers on the latest technologies." },
              { t: "Lightning Reactivity", d: "Intervention in less than 15 minutes for emergencies." },
              { t: "Maximum Security", d: "End-to-end encryption during interventions." },
              { t: "Controlled Costs", d: "Packages adapted to the size of your company." }
            ]
          },
          features: [
            { title: "Remote Desktop", desc: "Fast intervention via AnyDesk and Remote Desktop to solve your problems in real-time." },
            { title: "Google Meet Support", desc: "Live visual assistance to guide you step-by-step through your configurations." },
            { title: "Server Maintenance", desc: "24/7 monitoring and optimization of your critical infrastructure." },
            { title: "Security & Backup", desc: "Protection against threats and rigorous management of your data backups." },
            { title: "User Helpdesk", desc: "A single point of contact for all technical requests from your employees." },
            { title: "Software Troubleshooting", desc: "Remote installation, updates, and resolution of software conflicts." }
          ]
        },
        compta: {
          badge: "Precision & Growth",
          title: "Clarity in your Numbers.",
          subtitle: "No longer navigate blindly. We transform your accounting data into strategic growth levers for your business.",
          cta: "Secure my management",
          growth: "Annual Growth",
          features: [
            { icon: "PieChart", title: "Financial Analysis", desc: "Clear vision of your profitability and cash flows." },
            { icon: "Calculator", title: "General Accounting", desc: "Rigorous bookkeeping according to current standards." },
            { icon: "TrendingUp", title: "Tax Optimization", desc: "Strategic advice to legally reduce your tax burden." },
            { icon: "FileText", title: "Balance Sheets & Reports", desc: "Production of precise financial documents for your partners." },
            { icon: "ShieldCheck", title: "Total Compliance", desc: "Permanent watch on regulatory and legal developments." },
            { icon: "Zap", title: "Digitalization", desc: "Online accounting tools for real-time monitoring." }
          ]
        },
        legal: {
          badge: "Security & Law",
          title: "Building on Solid Foundations.",
          subtitle: "The law should not be a brake, but a shield. We secure your present to guarantee your future.",
          cta: "Protect my business",
          features: [
            { title: "Legal Advice", desc: "Strategic support for all your business decisions." },
            { title: "Asset Protection", desc: "Securing your intellectual property and assets." },
            { title: "Contract Drafting", desc: "Development of solid contracts to protect your interests." },
            { title: "Dispute Management", desc: "Efficient and discreet resolution of your legal disputes." },
            { title: "Regulatory Watch", desc: "Anticipation of legislative changes impacting your sector." },
            { title: "Compliance Audit", desc: "Complete verification of the compliance of your processes." }
          ]
        },
        sav: {
          badge: "Smile & Satisfaction",
          title: "The happiness of Your Customers.",
          subtitle: "After-sales service is not a cost, it's your best marketing investment. We take care of your customers like our own.",
          cta: "Enchant my customers",
          satisfaction: "Satisfaction Score",
          quote: "\"Their after-sales team transformed our detractors into brand ambassadors.\"",
          quoteAuthor: "Customer Relations Director, Global Retail",
          whyUs: {
            title: "Why Delegate your After-Sales Service to us?",
            subtitle: "Outsourcing your after-sales service allows you to focus on your core business while guaranteeing an irreproachable and professional customer experience.",
            list: [
              { t: "Invoice Processing", d: "Rigorous management of invoicing, credits, and payment disputes for financial fluidity." },
              { t: "Complaint Management", d: "Diplomatic and efficient handling of complaints to defuse tensions and find solutions." },
              { t: "Order Tracking", d: "Real-time information for your customers on the status of their deliveries and resolution of logistical problems." },
              { t: "Surveys & Feedback", d: "Proactive collection of customer reviews to identify areas for improvement in your products." }
            ]
          },
          features: [
            { title: "Customer Empathy", desc: "A human approach to transform every problem into a positive solution." },
            { title: "Fast Resolution", desc: "Priority handling of requests to minimize dissatisfaction." },
            { title: "Multichannel Support", desc: "Presence where your customers are: chat, email, phone." },
            { title: "Loyalty", desc: "Post-resolution strategies to strengthen the link with your brand." },
            { title: "Feedback Analysis", desc: "Identification of points for improvement in your products/services." },
            { title: "Availability", desc: "A team ready to respond when your customers need it." }
          ]
        },
        cm: {
          badge: "Influence & Engagement",
          title: "Dominate the Networks.",
          subtitle: "Don't just be present, be influential. We create conversations that matter and build passionate communities around your brand.",
          cta: "Boost my influence",
          likes: "Likes",
          shares: "Shares",
          community: "Active Community",
          captivate: "Content that Captivates",
          readTime: "min read",
          close: "Close",
          author: {
            name: "CM Expert",
            title: "Digital Strategist"
          },
          impact: {
            title: "The Impact of a Real Connection.",
            subtitle: "Because behind every screen is a human, we humanize your communication to create lasting emotions. A simple smile, a thoughtful response, and your brand becomes unforgettable.",
            stat: "+85% customer loyalty"
          },
          features: [
            { title: "Social Strategy", desc: "Content planning aligned with your brand objectives." },
            { title: "Content Creation", desc: "Impactful visuals and texts to engage your audience." },
            { title: "Community Management", desc: "Daily interaction with your subscribers to build a link." },
            { title: "Organic Growth", desc: "Increase your visibility without depending solely on ads." },
            { title: "Detailed Reporting", desc: "Precise analysis of your KPIs and engagement." },
            { title: "Trend Watch", desc: "Reactivity to new fashions and emerging formats." }
          ],
          articles: [
            { 
              title: "How to double your engagement in 30 days?", 
              tag: "Strategy",
              content: "Social media engagement is the engine of your digital growth. In 2026, the algorithm no longer just prioritizes the number of likes, but the depth of interactions. To double your engagement in just 30 days, you must make a major strategic shift: move from a top-down broadcast logic to a horizontal conversation logic.\n\nHere are the fundamental pillars of this transformation:\n\n1. Radical Authenticity: Audiences are tired of perfect, filtered feeds. Show the behind-the-scenes of your business, share your daily challenges, and humanize your brand. A 15-second \"raw\" video often has more impact than an expensive studio production.\n\n2. The 60-Minute Rule: The algorithm analyzes reaction speed. Respond to every comment in a personalized way within the hour following publication. This signals to the platform that your content is generating active conversation, which instantly boosts your organic reach.\n\n3. Mastery of Vertical Formats: Reels and TikTok are the kings of discovery. Use them to attract new subscribers, then use Stories to deepen the relationship. Each format has a precise role in your engagement funnel.\n\nBy rigorously applying these methods, our partners see an average increase of 120% in their interactions from the first month. It's a long-term job that requires constant attention to detail and a fine understanding of your target audience."
            },
            { 
              title: "The secret of viral videos on TikTok finally revealed.", 
              tag: "Viral",
              content: "Virality on TikTok is not a random stroke of luck, it's the result of precise psychological engineering. For a video to go viral, it must satisfy two key indicators: completion rate and share rate.\n\nThe Secret of the Hook:\nThe first two seconds determine the fate of your video. You must \"stop the thumb\" of the user. Use strong visual contrasts, provocative questions, or promises of immediate value. If the user doesn't understand the point of the video in less than 2 seconds, they will move on to the next one.\n\nThe Narrative Structure:\nA viral video often follows a compressed three-act structure:\n- The Hook: Captures attention and poses a problem.\n- The Development: Delivers the promise or information in a rhythmic way.\n- The Payoff: The satisfying conclusion or call to action.\n\nStrategic Use of Audio:\nDon't just use trending music. Use it to rhythm your cuts in editing. The human brain loves synchronization between image and sound. Sound trends act as memory anchors for your audience.\n\nFinally, don't forget \"curiosity loops\". Ask a question at the beginning and don't give the answer until the very end to maximize watch time. The higher the watch time, the more TikTok will push your video to new users."
            },
            { 
              title: "Why your brand must be on LinkedIn in 2026.", 
              tag: "B2B",
              content: "LinkedIn has completed its mutation: it's no longer a simple CV directory, it has become the global crossroads of B2B influence. In 2026, not being present there in an active way is equivalent to being invisible to your business partners and your future talents.\n\nThe Power of Personal Branding:\nCompanies no longer buy from other companies, humans buy from other humans. The Personal Branding of your leaders and employees is your most precious asset. A post published by an employee has 8 times more engagement than a post published by the company page. It's the era of Employee Advocacy.\n\nThought Leadership:\nTo dominate LinkedIn, you must become a source of authority. Don't just share your news, share your vision of the market, your trend analyses, and your solutions to your sector's problems. This is how you build unshakable trust even before the first commercial contact.\n\nThe Proximity Algorithm:\nLinkedIn now prioritizes real relationships and quality interactions. Engage on your prospects' posts, comment intelligently, and bring value without expecting anything in return immediately. \"Social Selling\" is a marathon, not a sprint.\n\nAn optimized presence on LinkedIn allows reducing the sales cycle by 30% and increasing the conversion rate of your qualified leads spectacularly. It's the ultimate tool for building a solid reputation in the modern professional world."
            }
          ]
        },
        generic: {
          expertise: "Expertise",
          expertiseDesc: "A team of specialists dedicated to your success.",
          quality: "Quality",
          qualityDesc: "A high and constant standard of service.",
          support: "Support",
          supportDesc: "Personalized support at every stage.",
          quote: "We provide you with specialized expertise and innovative tools to guarantee the success of your projects.",
          ctaQuote: "Request a quote",
          ctaMore: "Learn more"
        }
      },
      startProject: {
        badge: "New Project",
        title: "Let's bring your Vision to life.",
        subtitle: "We are very eager to get to know your wishes and requests to make your activity and business take off.",
        back: "Back",
        features: {
          accel: { title: "Acceleration", desc: "We put all our energy into propelling your project quickly." },
          precision: { title: "Precision", desc: "Every detail counts to achieve your strategic objectives." },
          passion: { title: "Passion", desc: "We love what we do, and it shows in our results." }
        },
        form: {
          name: "Full Name",
          namePlaceholder: "John Doe",
          email: "Professional Email",
          emailPlaceholder: "john@company.com",
          company: "Company Name",
          companyPlaceholder: "Your Company",
          project: "Project Name",
          projectPlaceholder: "Ex: Website Redesign",
          service: "Desired Service",
          other: "Other",
          budget: "Estimated Budget",
          budgets: [
            "Less than 1,000€",
            "1,000€ - 5,000€",
            "5,000€ - 10,000€",
            "More than 10,000€"
          ],
          details: "Project Details",
          detailsPlaceholder: "Tell us about your goals, your challenges, and what you expect from us...",
          submit: "Launch the adventure",
          disclaimer: "By sending this form, you agree to be contacted by our experts within 24 business hours."
        },
        team: {
          title: "A passionate team at your service.",
          subtitle: "Behind every successful project, there are faces, smiles, and an unshakeable will to succeed together.",
          alt: "Our smiling team"
        },
        trust: [
          { label: "Response in", value: "24h" },
          { label: "Satisfaction", value: "99%" },
          { label: "Projects delivered", value: "1.2k+" },
          { label: "Support", value: "24/7" }
        ]
      },
      footer: {
        legal: 'Legal Mentions',
        privacy: 'Privacy',
        cookies: 'Cookies',
        rights: 'All rights reserved.'
      }
    }
  },
  de: {
    translation: {
      nav: {
        services: 'Dienstleistungen',
        about: 'Über uns',
        process: 'Prozess',
        contact: 'Kontakt',
        startProject: 'Projekt starten',
        backHome: 'Zurück zur Startseite'
      },
      hero: {
        badge: 'Ted-Company Group Innovation',
        title: "Innovation im Dienste von morgen.",
        subtitle: "Bringen Sie Ihr Unternehmen mit unseren intelligenten und innovativen Outsourcing-Lösungen auf ein neues Niveau.",
        ctaStart: 'Projekt starten',
        ctaExplore: 'Unsere Lösungen erkunden'
      },
      services: {
        title: 'Unsere Dienstleistungen',
        subtitle: 'Ein komplettes Spektrum an Outsourcing-Dienstleistungen zur Optimierung Ihrer Produktivität und Senkung Ihrer Betriebskosten.',
        web: {
          title: 'Web-Erstellung',
          desc: 'Moderne, leistungsstarke Websites, die für Ihr digitales Wachstum optimiert sind.'
        },
        call: {
          title: 'Callcenter',
          desc: 'Professionelle Verwaltung Ihrer ein- und ausgehenden Anrufe für optimale Kundenzufriedenheit.'
        },
        admin: {
          title: 'Administrative Unterstützung',
          desc: 'Befreien Sie sich von zeitaufwändigen Aufgaben mit unserer engagierten administrativen Unterstützung.'
        },
        compta: {
          title: 'Buchhaltung',
          desc: 'Strenge und transparente Buchhaltung für die Sicherheit Ihres Unternehmens.'
        },
        juridique: {
          title: 'Rechtliches',
          desc: 'Rechtliche Beratung und Unterstützung zur Absicherung Ihrer Geschäfte und Verträge.'
        },
        sav: {
          title: 'Kundendienst',
          desc: 'Ein reaktionsschneller Kundendienst zur Bindung Ihrer Kunden und Aufwertung Ihres Images.'
        },
        cm: {
          title: 'Community-Manager',
          desc: 'Steigern Sie Ihre Präsenz in sozialen Netzwerken und binden Sie Ihre Community ein.'
        },
        support: {
          title: 'Technischer Support',
          desc: 'Technische Fernunterstützung und Helpdesk für Ihre Infrastruktur und Benutzer.'
        }
      },
      about: {
        title: 'Unsere Geschichte',
        subtitle: 'Die Ted-Company Group entstand aus einer einfachen Vision: Unternehmen eine einzigartige Plattform für hochwertige Outsourcing-Dienstleistungen zu bieten. Wir glauben, dass der Erfolg unserer Kunden der Motor für unseren eigenen Erfolg ist.',
        stats: {
          projects: 'Erfolgreiche Projekte',
          clients: 'Zufriedene Kunden',
          experts: 'Engagierte Experten',
          founded: 'Gründungsjahr'
        }
      },
      process: {
        title: 'Unser Prozess',
        subtitle: 'Eine strenge Methodik, um Exzellenz in jeder Phase zu garantieren.',
        steps: [
          { title: 'Analyse', desc: 'Tiefes Verständnis Ihrer Bedürfnisse und Ziele.' },
          { title: 'Strategie', desc: 'Entwicklung eines personalisierten und effektiven Aktionsplans.' },
          { title: 'Ausführung', desc: 'Strenge Umsetzung mit ständiger Überwachung.' },
          { title: 'Optimierung', desc: 'Analyse der Ergebnisse und kontinuierliche Verbesserung.' }
        ]
      },
      contact: {
        title: "Kontaktieren Sie uns",
        subtitle: "Bereit, Ihre Vision in die Realität umzusetzen? Unser Expertenteam steht Ihnen zur Verfügung, um Ihr Unternehmen auf ein neues Niveau zu heben.",
        form: {
          name: "Vollständiger Name",
          namePlaceholder: "Max Mustermann",
          email: "Geschäftliche E-Mail",
          emailPlaceholder: "max@unternehmen.de",
          service: "Gewünschter Service",
          servicePlaceholder: "Wählen Sie einen Service",
          message: "Ihre Nachricht",
          messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt...",
          send: "Nachricht senden",
          sending: "Wird gesendet...",
          success: "Nachricht erfolgreich gesendet!",
          error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
        },
        info: {
          email: "E-Mail",
          phone: "Telefon",
          address: "Adresse",
          worldwide: "Weltweit verfügbar"
        }
      },
      stats: {
        clients: "Aktive Kunden",
        projects: "Abgeschlossene Projekte",
        experts: "Engagierte Experten",
        satisfaction: "Zufriedenheit"
      },
      serviceDetails: {
        back: "Zurück zu den Diensten",
        backHome: "Zurück zur Startseite",
        startProject: "Projekt starten",
        notFound: "Service nicht gefunden",
        web: {
          badge: "Digitale Innovation",
          title: "Das Web im Dienste von morgen.",
          subtitle: "Wir entwerfen außergewöhnliche digitale Erlebnisse, die avantgardistisches Design mit modernster technologischer Leistung verbinden.",
          floating: {
            speed: "100% Leistung",
            seo: "SEO Optimiert"
          },
          features: [
            { title: "Skalierbare Architektur", desc: "Solide Fundamente, um Ihr Wachstum grenzenlos zu unterstützen." },
            { title: "Ultimative Leistung", desc: "Blitzschnelle Ladegeschwindigkeit für ein reibungsloses Benutzererlebnis." },
            { title: "Responsives Design", desc: "Eine perfekte Benutzeroberfläche auf allen Geräten, vom Handy bis zum Desktop." },
            { title: "Benutzererfahrung", desc: "Intuitive Reisen, die darauf ausgelegt sind, Ihre Konversionen zu maximieren." },
            { title: "Maximale Sichtbarkeit", desc: "Native SEO-Optimierung zur Dominanz in den Suchergebnissen." },
            { title: "Erweiterte Sicherheit", desc: "Robuster Schutz Ihrer Daten und der Ihrer Benutzer." }
          ],
          copywriting: {
            title: "Copywriting & Strategie",
            subtitle: "Worte sind Ihre besten Verkäufer. Wir schreiben Inhalte, die fesseln, überzeugen und Ihre Besucher in treue Kunden verwandeln.",
            feature1: "Marken-Storytelling",
            desc1: "Wir erstellen eine einzigartige Erzählung, die bei Ihrem Publikum Anklang findet.",
            feature2: "Konversionsoptimierung",
            desc2: "Jeder Satz ist darauf ausgelegt, den Benutzer zum Handeln zu führen.",
            feature3: "Internationale Präsenz",
            desc3: "Kulturelle und sprachliche Anpassung zur Eroberung neuer Märkte."
          }
        },
        call: {
          badge: "Premium-Kundenbeziehungen",
          title: "Exzellenz am anderen Ende der Leitung.",
          subtitle: "Verwandeln Sie jede Interaktion in eine Chance. Unser Callcenter der nächsten Generation vermenschlicht Ihre Kundenbeziehungen.",
          cta: "Angebot anfordern",
          startCampaign: "Meine Kampagne starten",
          types: {
            short: "Kurzfristige Projekte",
            long: "Langfristige Projekte"
          },
          live: {
            badge: "Live-Performance",
            quality: "Servicequalität"
          },
          features: [
            { title: "24/7 Support", desc: "Eine ständige Präsenz, um Ihre Kunden jederzeit zu beruhigen und zu unterstützen." },
            { title: "Mehrsprachig", desc: "Französisch, Englisch, Deutsch... Wir sprechen die Sprache Ihrer Kunden." },
            { title: "Zertifizierte Qualität", desc: "Strenge Prozesse und aktives Zuhören für garantierte Zufriedenheit." },
            { title: "Omnichannel", desc: "Telefon, Chat, E-Mail... Einheitliche Verwaltung all Ihrer Kontaktpunkte." },
            { title: "Verkauf & Loyalität", desc: "Gezielte Akquise und Bindungsmanagement zur Steigerung Ihres Umsatzes." },
            { title: "Live-Reporting", desc: "Verfolgen Sie Ihre Leistungsindikatoren in Echtzeit über unser Dashboard." }
          ],
          stats: {
            conversion: "Konversionsrate",
            satisfaction: "Kundenzufriedenheit",
            calls: "Bearbeitete Anrufe",
            goals: "Erreichte Ziele"
          },
          presence: {
            title: "Eine internationale Präsenz",
            subtitle: "Die Welt hat keine Grenzen. Wir unterstützen Ihre globale Expansion mit muttersprachlichen Teams und multikultureller Expertise."
          },
          whyUs: {
            title: "Warum wir?",
            list: [
              { t: "Multikulturelle Expertise", d: "Ein feines Verständnis der lokalen Nuancen für jeden Markt." },
              { t: "Spitzentechnologie", desc: "CRM- und VoIP-Tools der neuesten Generation für maximale Effizienz." },
              { t: "Kontinuierliche Schulung", d: "Unsere Agenten werden monatlich in den besten Techniken der Kundenbeziehung geschult." }
            ]
          }
        },
        admin: {
          badge: "Operative Effizienz",
          title: "Entfesseln Sie Ihr Potenzial.",
          subtitle: "Delegieren Sie Komplexität. Unsere Verwaltungsexperten optimieren Ihre Prozesse, damit Sie sich auf das Wesentliche konzentrieren können: Ihr Wachstum.",
          optimize: "Meine Verwaltung optimieren",
          types: {
            result: "Ergebnisorientiert",
            performance: "Hochleistung"
          },
          stats: {
            resolution: "Lösungsrate",
            response: "Reaktionszeit",
            satisfaction: "Zufriedenheit",
            availability: "Verfügbarkeit"
          },
          features: [
            { title: "Kalendermanagement", desc: "Präzise Organisation Ihrer Zeit und strategischen Prioritäten." },
            { title: "Rechnungsstellung & Mahnwesen", desc: "Strenge Überwachung Ihres Cashflows und professionelles Management unbezahlter Rechnungen." },
            { title: "HR-Unterstützung", desc: "Unterstützung bei der administrativen Verwaltung Ihrer Talente und Rekrutierung." },
            { title: "Datenorganisation", desc: "Intelligente Strukturierung und Archivierung Ihrer kritischen Informationen." },
            { title: "Strategische Intelligenz", desc: "Recherche und Synthese von Informationen für Ihre Entscheidungsfindung." },
            { title: "Reisemanagement", desc: "Vollständige Organisation Ihrer Geschäftsreisen und Logistik." }
          ],
          engagement: {
            badge: "Qualitätsverpflichtung",
            label: "Zufriedenheit",
            title: "Volles Engagement.",
            subtitle: "Wir führen nicht nur Aufgaben aus, wir werden täglich zu Ihren strategischen Partnern.",
            list: [
              { t: "Kostenoptimierung", d: "Reduzieren Sie Ihre Fixkosten, indem Sie nur für die tatsächliche Arbeit bezahlen." },
              { t: "Sicherheit & Vertraulichkeit", d: "Ihre Daten sind durch strenge Sicherheitsprotokolle geschützt." },
              { t: "Engagiertes Team", d: "Ein einziger Ansprechpartner, der Ihre Akte perfekt kennt." }
            ]
          }
        },
        support: {
          badge: "Support & Wartung",
          title: "Ihr Remote-Experte.",
          subtitle: "Profitieren Sie von technischer Unterstützung auf hohem Niveau. Unsere Experten greifen sofort ein, um die Kontinuität Ihrer Aktivitäten zu gewährleisten.",
          cta: "Unterstützung anfordern",
          active: "Aktiver Support",
          availability: "Verfügbarkeit",
          tools: [
            { name: "Google Meet" },
            { name: "AnyDesk" },
            { name: "Remote Desktop" },
            { name: "Rechnungssupport" }
          ],
          whyUs: {
            title: "Warum unser Entwicklungsunternehmen wählen?",
            subtitle: "Wir lösen nicht nur Ihre Probleme, wir optimieren Ihre Infrastruktur, um zukünftige Ausfälle zu verhindern.",
            list: [
              { t: "Technische Expertise", d: "Zertifizierte Ingenieure für die neuesten Technologien." },
              { t: "Blitzschnelle Reaktivität", d: "Eingriff in weniger als 15 Minuten bei Notfällen." },
              { t: "Maximale Sicherheit", d: "End-to-End-Verschlüsselung bei Eingriffen." },
              { t: "Kontrollierte Kosten", d: "An die Größe Ihres Unternehmens angepasste Pakete." }
            ]
          },
          features: [
            { title: "Remote-Desktop", desc: "Schneller Eingriff über AnyDesk und Remote Desktop, um Ihre Probleme in Echtzeit zu lösen." },
            { title: "Google Meet Support", desc: "Live-Video-Unterstützung, um Sie Schritt für Schritt durch Ihre Konfigurationen zu führen." },
            { title: "Serverwartung", desc: "Rund-um-die-Uhr-Überwachung und Optimierung Ihrer kritischen Infrastruktur." },
            { title: "Sicherheit & Backup", desc: "Schutz vor Bedrohungen und strenges Management Ihrer Datensicherungen." },
            { title: "Benutzer-Helpdesk", desc: "Ein einziger Kontaktpunkt für alle technischen Anfragen Ihrer Mitarbeiter." },
            { title: "Software-Fehlerbehebung", desc: "Ferninstallation, Updates und Lösung von Softwarekonflikten." }
          ]
        },
        compta: {
          badge: "Präzision & Wachstum",
          title: "Klarheit in Ihren Zahlen.",
          subtitle: "Navigieren Sie nicht länger blind. Wir verwandeln Ihre Buchhaltungsdaten in strategische Wachstumshebel für Ihr Unternehmen.",
          cta: "Meine Verwaltung sichern",
          growth: "Jährliches Wachstum",
          features: [
            { icon: "PieChart", title: "Finanzanalyse", desc: "Klare Sicht auf Ihre Rentabilität und Cashflows." },
            { icon: "Calculator", title: "Finanzbuchhaltung", desc: "Strenge Buchführung nach aktuellen Standards." },
            { icon: "TrendingUp", title: "Steueroptimierung", desc: "Strategische Beratung zur legalen Reduzierung Ihrer Steuerlast." },
            { icon: "FileText", title: "Bilanzen & Berichte", desc: "Erstellung präziser Finanzdokumente für Ihre Partner." },
            { icon: "ShieldCheck", title: "Vollständige Compliance", desc: "Ständige Beobachtung regulatorischer und gesetzlicher Entwicklungen." },
            { icon: "Zap", title: "Digitalisierung", desc: "Online-Buchhaltungstools für Echtzeit-Überwachung." }
          ]
        },
        legal: {
          badge: "Sicherheit & Recht",
          title: "Bauen auf soliden Fundamenten.",
          subtitle: "Das Gesetz sollte keine Bremse, sondern ein Schutzschild sein. Wir sichern Ihre Gegenwart, um Ihre Zukunft zu garantieren.",
          cta: "Mein Unternehmen schützen",
          features: [
            { title: "Rechtsberatung", desc: "Strategische Unterstützung für all Ihre Geschäftsentscheidungen." },
            { title: "Vermögensschutz", desc: "Sicherung Ihres geistigen Eigentums und Ihrer Vermögenswerte." },
            { title: "Vertragsgestaltung", desc: "Erstellung solider Verträge zum Schutz Ihrer Interessen." },
            { title: "Streitbeilegung", desc: "Effiziente und diskrete Lösung Ihrer Rechtsstreitigkeiten." },
            { title: "Regulatorische Überwachung", desc: "Antizipation von Gesetzesänderungen, die Ihren Sektor betreffen." },
            { title: "Compliance-Audit", desc: "Vollständige Überprüfung der Einhaltung Ihrer Prozesse." }
          ]
        },
        sav: {
          badge: "Loyalität & Service",
          title: "Der Kunde im Mittelpunkt.",
          subtitle: "Verwandeln Sie Ihre Kunden in Botschafter. Unser außergewöhnlicher Kundendienst garantiert dauerhafte Zufriedenheit und ein tadelloses Markenimage.",
          cta: "Meine Kunden verzaubern",
          satisfaction: "Zufriedenheitswert",
          quote: "\"Ihr Kundendienstteam hat unsere Kritiker in Markenbotschafter verwandelt.\"",
          quoteAuthor: "Leiter Kundenbeziehungen, Global Retail",
          whyUs: {
            title: "Warum uns Ihren Kundendienst übertragen?",
            subtitle: "Die Auslagerung Ihres Kundendienstes ermöglicht es Ihnen, sich auf Ihr Kerngeschäft zu konzentrieren und gleichzeitig ein tadelloses und professionelles Kundenerlebnis zu garantieren.",
            list: [
              { t: "Rechnungsverarbeitung", d: "Strenge Verwaltung von Rechnungsstellung, Gutschriften und Zahlungsstreitigkeiten für finanzielle Liquidität." },
              { t: "Beschwerdemanagement", d: "Diplomatischer und effizienter Umgang mit Beschwerden, um Spannungen abzubauen und Lösungen zu finden." },
              { t: "Bestellverfolgung", d: "Echtzeit-Informationen für Ihre Kunden über den Status ihrer Lieferungen und Lösung logistischer Probleme." },
              { t: "Umfragen & Feedback", d: "Proaktive Sammlung von Kundenbewertungen, um Verbesserungspotenziale für Ihre Produkte zu identifizieren." }
            ]
          },
          features: [
            { title: "Ticket-Support", desc: "Zentralisierte und schnelle Verwaltung aller technischen Unterstützungsanfragen." },
            { title: "Rücksendungen & Umtausch", desc: "Reibungsloser Prozess zur Verwaltung von Produktrücksendungen und zur Zufriedenheit Ihrer Kunden." },
            { title: "Garantien", desc: "Strenge Überwachung und Anwendung Ihrer Herstellergarantierichtlinien." },
            { title: "Wissensdatenbank", desc: "Erstellung von FAQs und Anleitungen, um Ihren Kunden unabhängig zu helfen." },
            { title: "Bewertungsmoderation", desc: "Verwaltung Ihrer E-Reputation auf Bewertungsplattformen und sozialen Netzwerken." },
            { title: "Zufriedenheitsumfragen", desc: "Regelmäßige Messung des NPS zur kontinuierlichen Verbesserung Ihres Service." }
          ]
        },
        cm: {
          badge: "Einfluss & Engagement",
          title: "Dominieren Sie die Netzwerke.",
          subtitle: "Seien Sie nicht nur präsent, seien imflussreich. Wir erstellen Gespräche, die zählen, und bauen leidenschaftliche Communities um Ihre Marke auf.",
          cta: "Meinen Einfluss steigern",
          likes: "Likes",
          shares: "Shares",
          community: "Aktive Community",
          captivate: "Inhalte, die fesseln",
          readTime: "Min. Lesezeit",
          close: "Schließen",
          author: {
            name: "CM Experte",
            title: "Digitaler Strategist"
          },
          impact: {
            title: "Die Wirkung einer echten Verbindung.",
            subtitle: "Weil hinter jedem Bildschirm ein Mensch steht, vermenschlichen wir Ihre Kommunikation, um dauerhafte Emotionen zu wecken. Ein einfaches Lächeln, eine aufmerksame Antwort, und Ihre Marke wird unvergesslich.",
            stat: "+85% Kundenbindung"
          },
          features: [
            { title: "Soziale Strategie", desc: "Definition Ihrer redaktionellen Linie und Ziele auf jeder Plattform." },
            { title: "Inhaltserstellung", desc: "Produktion von wirkungsvollen visuellen Inhalten und Texten, die auf Ihr Publikum zugeschnitten sind." },
            { title: "Aktive Moderation", desc: "Tägliche Verwaltung von Kommentaren und Nachrichten für eine engagierte Community." },
            { title: "Anzeigenkampagnen", desc: "Optimierung Ihrer Werbebudgets für maximalen ROI." },
            { title: "Monatliches Reporting", desc: "Detaillierte Analyse Ihrer Leistung und strategische Empfehlungen." },
            { title: "Trendbeobachtung", desc: "Antizipation neuer Nutzungen, um immer einen Schritt voraus zu sein." }
          ],
          articles: [
            { 
              title: "Wie Sie Ihr Engagement in 30 Tagen verdoppeln?", 
              tag: "Strategie",
              content: "Engagement in sozialen Medien ist der Motor Ihres digitalen Wachstums. Im Jahr 2026 priorisiert der Algorithmus nicht mehr nur die Anzahl der Likes, sondern die Tiefe der Interaktionen. Um Ihr Engagement in nur 30 Tagen zu verdoppeln, müssen Sie einen großen strategischen Wandel vollziehen: Weg von einer Top-Down-Sende-Logik hin zu einer horizontalen Konversations-Logik.\n\nHier sind die fundamentalen Säulen dieser Transformation:\n\n1. Radikale Authentizität: Das Publikum ist müde von perfekten, gefilterten Feeds. Zeigen Sie die Hintergründe Ihres Unternehmens, teilen Sie Ihre täglichen Herausforderungen und vermenschlichen Sie Ihre Marke. Ein 15-sekündiges \"rohes\" Video hat oft mehr Wirkung als eine teure Studioproduktion.\n\n2. Die 60-Minuten-Regel: Der Algorithmus analysiert die Reaktionsgeschwindigkeit. Antworten Sie personalisiert auf jeden Kommentar innerhalb einer Stunde nach der Veröffentlichung. Dies signalisiert der Plattform, dass Ihr Inhalt eine aktive Konversation erzeugt, was Ihre organische Reichweite sofort steigert.\n\n3. Beherrschung vertikaler Formate: Reels und TikTok sind die Könige der Entdeckung. Nutzen Sie sie, um neue Abonnenten zu gewinnen, und verwenden Sie dann Stories, um die Beziehung zu vertiefen. Jedes Format hat eine präzise Rolle in Ihrem Engagement-Funnel.\n\nDurch die konsequente Anwendung dieser Methoden sehen unsere Partner eine durchschnittliche Steigerung ihrer Interaktionen um 120 % ab dem ersten Monat. Es ist eine langfristige Arbeit, die ständige Aufmerksamkeit für Details und ein feines Verständnis Ihrer Zielgruppe erfordert."
            },
            { 
              title: "Das Geheimnis viraler Videos auf TikTok endlich enthüllt.", 
              tag: "Viral",
              content: "Viralität auf TikTok ist kein Zufallstreffer, sondern das Ergebnis präziser psychologischer Technik. Damit ein Video viral geht, muss es zwei Schlüsselindikatoren erfüllen: Abschlussrate und Teilungsrate.\n\nDas Geheimnis des Hooks:\nDie ersten zwei Sekunden entscheiden über das Schicksal Ihres Videos. Sie müssen den \"Daumen stoppen\" des Benutzers. Verwenden Sie starke visuelle Kontraste, provokative Fragen oder Versprechen von unmittelbarem Wert. Wenn der Benutzer den Sinn des Videos in weniger als 2 Sekunden nicht versteht, wird er zum nächsten weitergehen.\n\nDie narrative Struktur:\nEin virales Video folgt oft einer komprimierten Drei-Akt-Struktur:\n- Der Hook: Erregt Aufmerksamkeit und stellt ein Problem dar.\n- Die Entwicklung: Liefert das Versprechen oder die Information rhythmisch.\n- Der Payoff: Der zufriedenstellende Abschluss oder Call-to-Action.\n\nStrategische Nutzung von Audio:\nVerwenden Sie nicht nur Trendmusik. Nutzen Sie sie, um Ihre Schnitte im Schnitt zu rhythmisieren. Das menschliche Gehirn liebt die Synchronisation zwischen Bild und Ton. Soundtrends fungieren als Gedächtnisanker für Ihr Publikum.\n\nVergessen Sie schließlich nicht die \"Neugierschleifen\". Stellen Sie am Anfang eine Frage und geben Sie die Antwort erst ganz am Ende, um die Wiedergabezeit zu maximieren. Je höher die Wiedergabezeit, desto mehr wird TikTok Ihr Video neuen Benutzern vorschlagen."
            },
            { 
              title: "Warum Ihre Marke 2026 auf LinkedIn sein muss.", 
              tag: "B2B",
              content: "LinkedIn hat seine Mutation abgeschlossen: Es ist kein einfaches Lebenslauf-Verzeichnis mehr, es ist zum globalen Knotenpunkt des B2B-Einflusses geworden. Im Jahr 2026 ist es gleichbedeutend mit Unsichtbarkeit für Ihre Geschäftspartner und Ihre zukünftigen Talente, dort nicht aktiv präsent zu sein.\n\nDie Macht des Personal Branding:\nUnternehmen kaufen nicht mehr bei anderen Unternehmen, Menschen kaufen bei anderen Menschen. Das Personal Branding Ihrer Führungskräfte und Mitarbeiter ist Ihr wertvollstes Gut. Ein von einem Mitarbeiter veröffentlichter Beitrag hat 8-mal mehr Engagement als ein von der Unternehmensseite veröffentlichter Beitrag. Es ist die Ära des Employee Advocacy.\n\nThought Leadership:\nUm LinkedIn zu dominieren, müssen Sie zu einer Autoritätsquelle werden. Teilen Sie nicht nur Ihre Neuigkeiten, teilen Sie Ihre Vision des Marktes, Ihre Trendanalysen und Ihre Lösungen für die Probleme Ihres Sektors. So bauen Sie unerschütterliches Vertrauen auf, noch vor dem ersten kommerziellen Kontakt.\n\nDer Proximity-Algorithmus:\nLinkedIn priorisiert jetzt echte Beziehungen und qualitativ hochwertige Interaktionen. Engagieren Sie sich bei den Beiträgen Ihrer Interessenten, kommentieren Sie intelligent und bringen Sie Mehrwert, ohne sofort etwas im Gegenzug zu erwarten. \"Social Selling\" ist ein Marathon, kein Sprint.\n\nEine optimierte Präsenz auf LinkedIn ermöglicht es, den Verkaufszyklus um 30 % zu verkürzen und die Konversionsrate Ihrer qualifizierten Leads spektakulär zu steigern. Es ist das ultimative Werkzeug für den Aufbau eines soliden Rufs in der modernen Berufswelt."
            }
          ]
        },
        generic: {
          expertise: "Expertise",
          expertiseDesc: "Ein Team von Spezialisten, das sich für Ihren Erfolg einsetzt.",
          quality: "Qualität",
          qualityDesc: "Ein hoher und konstanter Servicestandard.",
          support: "Support",
          supportDesc: "Personalisierte Unterstützung in jeder Phase.",
          quote: "Wir stellen Ihnen fundiertes Fachwissen und innovative Tools zur Verfügung, um den Erfolg Ihrer Projekte zu garantieren.",
          ctaQuote: "Angebot anfordern",
          ctaMore: "Mehr erfahren"
        }
      },
      startProject: {
        badge: "Neues Projekt",
        title: "Lassen Sie uns Ihre Vision zum Leben erwecken.",
        subtitle: "Wir freuen uns sehr darauf, Ihre Wünsche und Anforderungen kennenzulernen, um Ihre Aktivität und Ihr Geschäft voranzutreiben.",
        back: "Zurück",
        features: {
          accel: { title: "Beschleunigung", desc: "Wir setzen all unsere Energie ein, um Ihr Projekt schnell voranzutreiben." },
          precision: { title: "Präzision", desc: "Jedes Detail zählt, um Ihre strategischen Ziele zu erreichen." },
          passion: { title: "Leidenschaft", desc: "Wir lieben, was wir tun, und das zeigt sich in unseren Ergebnissen." }
        },
        form: {
          name: "Vollständiger Name",
          namePlaceholder: "Max Mustermann",
          email: "Geschäftliche E-Mail",
          emailPlaceholder: "max@unternehmen.de",
          company: "Name des Unternehmens",
          companyPlaceholder: "Ihre Firma",
          project: "Projektname",
          projectPlaceholder: "Z.B. Website-Redesign",
          service: "Gewünschter Service",
          other: "Andere",
          budget: "Geschätztes Budget",
          budgets: [
            "Weniger als 1.000€",
            "1.000€ - 5.000€",
            "5.000€ - 10.000€",
            "Mehr als 10.000€"
          ],
          details: "Projektdetails",
          detailsPlaceholder: "Erzählen Sie uns von Ihren Zielen, Ihren Herausforderungen und was Sie von uns erwarten...",
          submit: "Das Abenteuer starten",
          disclaimer: "Durch das Absenden dieses Formulars erklären Sie sich damit einverstanden, von unseren Experten innerhalb von 24 Geschäftsstunden kontaktiert zu werden."
        },
        team: {
          title: "Ein leidenschaftliches Team zu Ihren Diensten.",
          subtitle: "Hinter jedem erfolgreichen Projekt stehen Gesichter, Lächeln und ein unerschütterlicher Wille, gemeinsam erfolgreich zu sein.",
          alt: "Unser lächelndes Team"
        },
        trust: [
          { label: "Antwort in", value: "24h" },
          { label: "Zufriedenheit", value: "99%" },
          { label: "Gelieferte Projekte", value: "1.2k+" },
          { label: "Support", value: "24/7" }
        ]
      },
      footer: {
        legal: 'Rechtliche Hinweise',
        privacy: 'Datenschutz',
        cookies: 'Cookies',
        rights: 'Alle Rechte vorbehalten.'
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
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
