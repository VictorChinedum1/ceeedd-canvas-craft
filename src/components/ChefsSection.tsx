import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const chefs = [
  {
    name: "Marcus Chen",
    role: "Executive Chef",
    desc: "With over 20 years of international culinary experience, Chef Marcus brings innovation to every dish.",
    image: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=400&q=80&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Pastry Chef",
    desc: "Award-winning pastry chef specializing in artisan desserts and baked goods.",
    image: "https://images.unsplash.com/photo-1643834776503-891726ed42c6?w=400&q=80&fit=crop",
  },
  {
    name: "Antonio Rossi",
    role: "Sous Chef",
    desc: "Italian cuisine expert bringing authentic Mediterranean flavors to our kitchen.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80&fit=crop",
  },
];

const ChefsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chefs" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Our Experts</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Meet Our Professional Chefs
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
            Our talented culinary team brings passion and expertise to every dish
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((chef, i) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Social overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {[Facebook, Instagram, Twitter].map((Icon, j) => (
                    <a
                      key={j}
                      href="#"
                      className="w-10 h-10 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 text-center">
                <span className="text-primary text-xs tracking-[0.3em] uppercase font-body">{chef.role}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">{chef.name}</h3>
                <p className="text-muted-foreground text-sm font-body">{chef.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
