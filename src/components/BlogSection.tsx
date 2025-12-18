import { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';

const articles = [
  {
    title: 'Understanding the 27 Nakshatras',
    description: 'A comprehensive guide to the lunar mansions and their influence on your destiny.',
    readTime: '8 min read',
    category: 'Nakshatra',
    url: 'https://en.wikipedia.org/wiki/Nakshatra',
    img: 'https://imgs.search.brave.com/Jfk2KXKFSpo8c2A9EYQOXC8D_8Gajj9vdqYZXh47G_U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Ry/b3NpZ2h0LmFpL19u/ZXh0L2ltYWdlP3Vy/bD1odHRwczovL2Fj/Y2Vzc2libGUtZmVh/c3QtZDIyODdjMDMz/ZS5tZWRpYS5zdHJh/cGlhcHAuY29tL3do/YXRfaXNfYV9uYWtz/aGF0cmFfaW5fdmVk/aWNfYXN0cm9sb2d5/XzE0NGJkMDlmZmIu/d2VicCZ3PTE5MjAm/cT04NSZkcGw9ZHBs/X05ZZkhpUmN0dzh3/WEpCNEhBWGtFN2Ju/ZndvQ2M',
  },
  {
    title: 'Dasha Periods Explained',
    description: 'How planetary periods shape the chapters of your life journey.',
    readTime: '6 min read',
    category: 'Dasha',
    url: 'https://en.wikipedia.org/wiki/Dasha_(astrology)',
    img: 'https://imgs.search.brave.com/MQdN72bhFIot6Rm-ccUN8wd06cpD7ElM7Ehyip6D_dM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NGQ5YzA2ZWIyMGFh/MjhhMjg0YzZiZWIv/NjY5ZDgzOGZmMWQ1/NjZjYmIzNThhNWRm/X2NvdmVyJTIwaW1h/Z2UuUE5H'
  },
  {
    title: 'Remedies for Saturn Transit',
    description: 'Sacred practices to navigate challenging planetary transits with grace.',
    readTime: '5 min read',
    category: 'Remedies',
    url: 'https://en.wikipedia.org/wiki/Shani',
    img: 'https://imgs.search.brave.com/nijL2GmFjzA_awkHxiwl7-e2kOyKv5klRLXv2GPGgsw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Ry/b3NhbmhpdGEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL01lcmN1cnkt/UmVtZWRpZXMtSW4t/QXN0cm9sb2d5LVdl/YWtEZWJpbGl0YXRl/ZC1BZmZsaWN0ZWRD/b21idXN0LTEud2Vi/cA'
  },
];

export const BlogSection = () => {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  return (
    <>
      <section id="blog" className="relative py-24 md:py-32">
        <div className="container px-4">

          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1 mb-4 text-sm text-primary/80 font-body tracking-widest uppercase border border-primary/30 rounded-none">
              ज्ञान केंद्र
            </span>

            <h2 className="font-heading text-3xl md:text-5xl mb-4">
              Wisdom <span className="text-golden">Repository</span>
            </h2>

            <p className="max-w-2xl mx-auto text-muted-foreground font-body">
              Explore the depths of Vedic astrology through our curated articles
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <article
                key={article.title}
                onClick={() => setActiveArticle(article.url)}
                className="cosmic-card sacred-border rounded-none overflow-hidden group cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image Container */}
                <div className="h-48 relative overflow-hidden rounded-none bg-secondary">
                  {/* Image with fallback */}
                  <img 
                    src={article.img} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show fallback background if image fails to load
                      target.parentElement!.className += ' bg-gradient-to-br from-secondary to-cosmic-light';
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-body bg-primary/20 text-primary rounded-none backdrop-blur-sm border border-primary/30">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c9a227\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'28\'/%3E%3C/g%3E%3C/svg%3E')]" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>

                    <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IFRAME MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[80vh] bg-background border border-border rounded-none">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Iframe */}
            <iframe
              src={activeArticle}
              className="w-full h-full border-none"
              title="Blog Detail"
            />
          </div>
        </div>
      )}
    </>
  );
};