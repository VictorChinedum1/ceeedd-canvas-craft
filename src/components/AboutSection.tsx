import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    "The only thing we're serious about is food",
    "We speak the good food language",
    "Crafted with passion and precision",
    "Food so fresh our chefs are always running",
    "Creating memories one meal at a time",
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&fit=crop"
                alt="Restaurant interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Chef badge overlay */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-card border border-border p-4 flex items-center gap-4 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=150&h=150&fit=crop"
                alt="Marcus Chen"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <p className="text-primary font-display text-xl font-bold">25+</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Years Experience</p>
                <p className="text-foreground font-display text-sm mt-1">Marcus Chen</p>
                <p className="text-muted-foreground text-xs">Founder & Executive Chef</p>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Come to Our Restaurant, Enjoy Your Food
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body">
              At Ceedd, we believe that dining is an experience that goes beyond just eating. Our chefs meticulously craft each dish using only the finest, freshest ingredients sourced from local farms and trusted suppliers.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />
                  <span className="text-muted-foreground font-body text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href="#menu"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground hover:bg-gold-light transition-all duration-300 text-sm tracking-widest uppercase font-body"
            >
              Explore Our Menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
