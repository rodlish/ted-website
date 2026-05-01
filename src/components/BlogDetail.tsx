import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  MessageCircle, 
  Bookmark,
  ChevronRight,
  Rocket
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../firebase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
  serviceId?: string;
  tags: string[];
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      setLoading(true);
      try {
        const postsRef = collection(db, 'blog_posts');
        // We must include 'published' == true filter to match security rules
        const q = query(
          postsRef, 
          where('slug', '==', slug), 
          where('published', '==', true),
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const docFetched = querySnapshot.docs[0];
          const postData = { id: docFetched.id, ...docFetched.data() } as BlogPost;
          
          // Hardcoded override for specific slug to ensure image update
          if (postData.slug === 'transformer-reclamation-opportunite') {
            postData.imageUrl = 'https://ted-companygroup.com/image/reclamation%20compres.png';
          }
          if (postData.slug === 'relation-client-antananarivo-bpo') {
            postData.imageUrl = 'https://ted-companygroup.com/image/antananarivo.jpg';
          }
          if (postData.slug === 'externalisation-administrative-rh-productivite') {
            postData.imageUrl = 'https://ted-companygroup.com/image/administrateur%20compres.png';
          }
          
          setPost(postData);
          
          // SEO Updates
          document.title = `${postData.title} | Ted-Company Group`;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', postData.excerpt);
          }

          // Fetch related posts (also with published: true)
          try {
            const relatedQ = query(
              postsRef, 
              where('category', '==', postData.category),
              where('published', '==', true),
              limit(3)
            );
            const relatedSnapshot = await getDocs(relatedQ);
            
            // Filter out current post manually to avoid index requirement for '!='
            const fetchedRelated = relatedSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as BlogPost[];
            const filteredRelated = fetchedRelated.filter(p => p.slug !== slug).slice(0, 2);
            setRelatedPosts(filteredRelated);
          } catch (relatedError) {
            console.error("Error fetching related posts:", relatedError);
            setRelatedPosts([]);
          }
        } else {
          console.warn(`No post found for slug: ${slug}. Ensure 'published' is true.`);
          // Check for fallback data in case DB is empty
          const fallbackData: Record<string, BlogPost> = {
            'impact-ia-externalisation-2026': {
              id: '1',
              title: 'L\'Impact de l\'IA sur l\'Externalisation en 2026',
              slug: 'impact-ia-externalisation-2026',
              excerpt: 'Découvrez comment l\'intelligence artificielle transforme les processus de BPO et améliore l\'efficacité opérationnelle.',
              content: `
# L'Impact de l'IA sur l'Externalisation en 2026

L'intelligence artificielle n'est plus une promesse futuriste, c'est aujourd'hui le moteur principal de la transformation du secteur BPO (Business Process Outsourcing). Chez **Ted-Company Group**, nous avons intégré l'IA au cœur de nos processus opérationnels pour offrir une valeur ajoutée sans précédent à nos partenaires.

## Une efficacité décuplée

L'automatisation intelligente permet de traiter des volumes de données massifs avec une précision chirurgicale. Nos équipes utilisent des agents IA pour :
- **Prétrier les demandes clients** : réduction du temps d'attente de 45%.
- **Analyse sémantique** : compréhension immédiate du besoin client pour un routage optimal.
- **Support à l'agent** : suggestions de réponses en temps réel basées sur la base de connaissance.

## L'humain au centre, l'IA comme levier

Contrairement aux idées reçues, l'IA ne remplace pas l'humain chez Ted-Company. Elle le libère des tâches répétitives pour lui permettre de se concentrer sur ce qui compte vraiment : **l'empathie, la résolution de problèmes complexes et la relation client personnalisée.**

---

### Conclusion

Le futur de l'externalisation est hybride. Une combinaison parfaite entre la puissance de calcul de l'IA et la finesse de l'intelligence humaine.

> "L'IA ne remplacera pas les managers, mais les managers qui utilisent l'IA remplaceront ceux qui ne l'utilisent pas."

Vous souhaitez automatiser vos processus ? [Contactez nos experts](/demarrer-un-projet) dès maintenant.
              `,
              date: new Date().toISOString(),
              author: 'Ted-Company Team',
              imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
              category: 'IA & Innovation',
              serviceId: 'ai',
              tags: ['IA', 'BPO', 'Futur']
            },
            'transformer-reclamation-opportunite': {
              id: '4',
              title: 'Comment transformer une réclamation en opportunité commerciale',
              slug: 'transformer-reclamation-opportunite',
              excerpt: 'Apprenez à gérer les plaintes clients de manière stratégique pour renforcer la fidélité et générer de nouvelles ventes.',
              content: `
# Comment transformer une réclamation en opportunité commerciale

Une réclamation client est souvent perçue comme un problème, mais un œil expert y voit une **opportunité en or**. Chez Ted-Company Group, nous formons nos agents à transformer chaque mécontentement en un levier de fidélisation et de croissance.

## 1. L'Écoute Active : Le premier pas vers la résolution
Lorsqu'un client se plaint, il veut avant tout être entendu. L'écoute empathique désamorce 80% des tensions initiales.

## 2. L'Analyse des besoins sous-jacents
Derrière une plainte se cache souvent un besoin non satisfait. En identifiant ce besoin, vous pouvez proposer une solution complémentaire (upsell) ou un service mieux adapté.

## 3. Le "Recovery Paradox"
Saviez-vous qu'un client dont le problème a été résolu efficacement est souvent PLUS fidèle qu'un client qui n'a jamais eu de problème ? C'est ce qu'on appelle le paradoxe de la récupération de service.

---

### Conclusion
Ne craignez plus les réclamations. Relevez le défi et montrez à vos clients que vous êtes leur meilleur partenaire, même dans les moments difficiles.
              `,
              date: new Date().toISOString(),
              author: 'Expert Relation Client',
              imageUrl: 'https://ted-companygroup.com/image/reclamation%20compres.png',
              category: 'Relation Client',
              serviceId: 'sav',
              tags: ['Relation Client', 'Vente', 'SAV']
            },
            'relation-client-antananarivo-bpo': {
              id: '5',
              title: 'Pourquoi externaliser votre relation client à Antananarivo ?',
              slug: 'relation-client-antananarivo-bpo',
              excerpt: 'Découvrez pourquoi la capitale de Madagascar est devenue le hub incontournable de l\'externalisation de la relation client francophone.',
              content: `
# Pourquoi externaliser votre relation client à Antananarivo ?

Antananarivo, la capitale de Madagascar, s'est imposée comme une destination de premier choix pour l'externalisation de la relation client (BPO).

## 1. Un bassin de talents qualifiés
Les agents à Madagascar sont reconnus pour leur excellent niveau de français et leur culture de service ancrée.

## 2. Un avantage concurrentiel majeur
L'externalisation à Antananarivo permet une optimisation significative des coûts opérationnels tout en maintenant une qualité de service élevée.

## 3. Une infrastructure technologique de pointe
Grâce aux câbles sous-marins, Madagascar bénéficie d'une connectivité internet fibre optique ultra-rapide et fiable.

---

### Conclusion
Externaliser à Antananarivo avec Ted-Company Group, c'est choisir la performance, la qualité et la proximité culturelle.
              `,
              date: new Date().toISOString(),
              author: 'Ted-Company Madagascar',
              imageUrl: 'https://ted-companygroup.com/image/antananarivo.jpg',
              category: 'Focus Pays',
              serviceId: 'bpo',
              tags: ['Madagascar', 'BPO', 'Relation Client']
            },
            'externalisation-administrative-rh-productivite': {
              id: '6',
              title: 'L\'impact de l\'externalisation administrative et RH sur la productivité',
              slug: 'externalisation-administrative-rh-productivite',
              excerpt: 'Libérez vos équipes des tâches répétitives pour vous concentrer sur votre cœur de métier et accélérer votre croissance.',
              content: `
# L'impact de l'externalisation administrative et RH sur la productivité

L'externalisation administrative et RH (BPO) n'est plus une simple option de réduction de coûts, c'est un moteur de performance stratégique.

## 1. Focalisation sur le Cœur de Métier
En déléguant la gestion de la paie, la saisie de données ou le support RH, vos talents internes se concentrent sur l'innovation et la stratégie.

## 2. Flexibilité et Scalabilité
L'externalisation permet d'ajuster vos ressources en fonction des pics d'activité sans les contraintes de recrutement direct.

## 3. Expertise et Conformité
Bénéficiez de processus optimisés et d'experts formés aux dernières réglementations RH et administratives.

---

### Conclusion
Optimisez votre organisation dès aujourd'hui avec Ted-Company Group.
              `,
              date: new Date().toISOString(),
              author: 'Ted-Company Administrative',
              imageUrl: 'https://ted-companygroup.com/image/administrateur%20compres.png',
              category: 'Productivité',
              serviceId: 'bpo',
              tags: ['RH', 'Administration', 'Productivité']
            }
          };
          
          if (slug && fallbackData[slug]) {
            setPost(fallbackData[slug]);
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-32 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
        <p className="text-zinc-500 mb-8">Désolé, l'article que vous recherchez n'existe pas ou a été déplacé.</p>
        <button onClick={() => navigate('/blog')} className="bg-blue-500 text-zinc-950 px-8 py-3 rounded-full font-bold">
          Retour au Blog
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-zinc-500 hover:text-blue-400 mb-12 transition-colors font-bold uppercase text-xs tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Retour au Blog
        </button>

        {/* Hero */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 py-8 border-y border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase font-black tracking-widest">Auteur</div>
                <div className="font-bold text-zinc-200">{post.author}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase font-black tracking-widest">Publié le</div>
                <div className="font-bold text-zinc-200">{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-colors cursor-pointer">
                <Share2 className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-colors cursor-pointer">
                <Bookmark className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[3rem] overflow-hidden mb-16 shadow-2xl relative"
        >
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full aspect-video object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Content */}
        <div className="prose prose-invert prose-blue max-w-none mb-20 text-zinc-400 leading-relaxed text-lg">
          <ReactMarkdown
            components={{
              a: ({ href, children }) => {
                const isInternal = href?.startsWith('/');
                if (isInternal) {
                  return <Link to={href} className="text-blue-400 font-bold hover:underline">{children}</Link>;
                }
                return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:underline">{children}</a>;
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-20">
          {post.tags.map(tag => (
            <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA Section */}
        <section className="glass rounded-[3rem] p-12 text-center relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-blue-500/10 -z-10" />
          <h3 className="text-3xl font-bold mb-4">Besoin d'aide pour votre projet ?</h3>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
            Nos experts sont à votre disposition pour transformer vos idées en réalité. Étudions ensemble votre stratégie.
          </p>
          <Link 
            to="/demarrer-un-projet"
            className="bg-blue-500 text-zinc-950 px-10 py-4 rounded-2xl font-bold hover:bg-blue-400 transition-all flex items-center gap-3 w-fit mx-auto group shadow-2xl shadow-blue-500/20"
          >
            Lancer l'aventure
            <Rocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-bold tracking-tighter">Articles Similaires</h3>
              <Link to="/blog" className="text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                Tout voir <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(rp => (
                <Link 
                  key={rp.id}
                  to={`/blog/${rp.slug}`}
                  className="glass rounded-[2rem] p-6 hover:border-blue-500/30 transition-all group border border-white/5"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                    <img src={rp.imageUrl} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{rp.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    <span>{rp.category}</span>
                    <span>•</span>
                    <span>5 min</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
