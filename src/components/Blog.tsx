import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  User, 
  ArrowRight, 
  Tag, 
  Search,
  ChevronRight,
  Filter,
  Calendar,
  BookOpen
} from 'lucide-react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
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

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['Tous', 'Digital', 'Relation Client', 'RH & Gestion', 'IA & Innovation', 'Médical'];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const postsRef = collection(db, 'blog_posts');
        const q = query(
          postsRef, 
          where('published', '==', true),
          orderBy('date', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const fetchedPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as BlogPost[];
        
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        // Fallback to sample data if fetch fails (e.g. collection doesn't exist yet)
        setPosts([
          {
            id: '2',
            title: 'Pourquoi Madagascar est le hub BPO de demain',
            slug: 'madagascar-hub-bpo',
            excerpt: 'Antananarivo s\'impose comme une destination de choix pour l\'externalisation bilingue de haute qualité.',
            content: '# Madagascar Hub BPO...',
            date: new Date(Date.now() - 86400000).toISOString(),
            author: 'Direction Stratégique',
            imageUrl: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=800',
            category: 'Relation Client',
            serviceId: 'call',
            tags: ['Madagascar', 'BPO', 'Excellence']
          },
          {
            id: '3',
            title: '7 Conseils pour optimiser votre Relation Client',
            slug: 'conseils-relation-client',
            excerpt: 'Améliorez la satisfaction de vos clients avec ces stratégies éprouvées dans nos centres d\'appels.',
            content: '# Conseils Relation Client...',
            date: new Date(Date.now() - 172800000).toISOString(),
            author: 'Expert Relation Client',
            imageUrl: 'https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80&w=800',
            category: 'Relation Client',
            serviceId: 'sav',
            tags: ['Customer Success', 'SAV', 'Conseils']
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'Tous' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Insights & Actualités
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
          >
            Notre <span className="text-gradient">Blog.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez nos dernières réflexions sur l'IA, le digital et l'excellence opérationnelle pour propulser votre business.
          </motion.p>
        </div>

        {/* Search & Categories */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                    ? 'bg-blue-500 text-zinc-950 shadow-lg shadow-blue-500/20' 
                    : 'glass text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass bg-white/5 border-white/10 rounded-full px-12 py-3 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
      <motion.article
        key={post.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ y: -10 }}
        onClick={() => navigate(`/blog/${post.slug}`)}
        className="glass rounded-[2.5rem] overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
      >
        <div className="aspect-[16/10] overflow-hidden relative">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-blue-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 5 min</div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-zinc-400 mb-8 line-clamp-3 text-sm leading-relaxed flex-1">
            {post.excerpt}
          </p>
          
          <div 
            className="flex items-center gap-2 text-sm font-black text-blue-400 uppercase tracking-widest group-hover:gap-4 transition-all"
          >
            Lire l'article <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass rounded-[3rem] border border-dashed border-white/10">
            <BookOpen className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Aucun article trouvé</h3>
            <p className="text-zinc-500">Essayez d'ajuster vos filtres ou votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
