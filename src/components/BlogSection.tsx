import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "The Art of Farm-to-Table Dining",
    desc: "Discover how we source the freshest ingredients directly from local farms to bring you the best flavors.",
    category: "Sustainability",
    date: "Mar 14, 2024",
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=500&q=80&fit=crop",
  },
  {
    title: "Behind the Scenes: A Day in Our Kitchen",
    desc: "Join us for an exclusive look at what goes into preparing your favorite dishes every day.",
    category: "Chef Stories",
    date: "Mar 9, 2024",
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=500&q=80&fit=crop",
  },
  {
    title: "Wine Pairing Guide for Beginners",
    desc: "Learn the basics of wine pairing to enhance your dining experience at home or in our restaurant.",
    category: "Tips & Tricks",
    date: "Mar 4, 2024",
    image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=500&q=80&fit=crop",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Our News</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Latest News & Blog</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
            Stay updated with our latest culinary stories and restaurant news
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-background border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 tracking-wider uppercase font-body">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar size={12} />
                  <span className="font-body">{post.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-2">{post.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase font-body hover:text-gold-light transition-colors group/link">
                  Read More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
