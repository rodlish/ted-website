import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

const BlogPreview = () => {
  const navigate = useNavigate();
  const [recentPosts, setRecentPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const q = query(collection(db, 'blog_posts'), where('published', '==', true), orderBy('date', 'desc'), limit(2));
        const snap = await getDocs(q);
        if (!snap.empty) {
          setRecentPosts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setRecentPosts([
            {
              title: 'L\'Impact de l\'IA sur l\'Externalisation en 2026',
              slug: 'impact-ia-externalisation-2026',
              category: 'IA & Innovation',
              date: new Date().toISOString(),
              imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
            },
            {
              title: 'Pourquoi Madagascar est le hub BPO de demain',
              slug: 'madagascar-hub-bpo',
              category: 'Relation Client',
              date: new Date(Date.now() - 86400000).toISOString(),
              imageUrl: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=800'
            }
          ]);
        }
      } catch (e) {
        setRecentPosts([
          {
            title: 'L\'Impact de l\'IA sur l\'Externalisation en 2026',
            slug: 'impact-ia-externalisation-2026',
            category: 'IA & Innovation',
            date: new Date().toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Pourquoi Madagascar est le hub BPO de demain',
            slug: 'madagascar-hub-bpo',
            category: 'Relation Client',
            date: new Date(Date.now() - 86400000).toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=800'
          }
        ]);
      }
    };
    fetchRecent();
  }, []);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Actualités
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Notre <span className="text-gradient">Blog.</span></h2>
          </div>
          <Link 
            to="/blog"
            className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 font-bold uppercase text-xs tracking-widest transition-colors mb-2"
          >
            Tout voir <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {recentPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-[3rem] overflow-hidden group cursor-pointer border border-white/5 flex flex-col md:flex-row"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-4">
                  {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-black text-blue-400 uppercase tracking-widest group-hover:gap-4 transition-all mt-auto">
                  Lire <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
