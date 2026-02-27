import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Cake, Leaf, ChefHat, Wine } from "lucide-react";

const services = [
  { icon: ShieldCheck, title: "100% ISO Certification", desc: "We maintain the highest standards of food safety and quality with our ISO certification" },
  { icon: Cake, title: "Special Occasions", desc: "Custom cakes and menus for your special celebrations and events" },
  { icon: Leaf, title: "Fresh Ingredients", desc: "Only the freshest, locally sourced organic ingredients in every dish" },
  { icon: ChefHat, title: "Expert Chefs", desc: "Our skilled culinary team brings decades of international experience" },
  { icon: Wine, title: "Organic Beverages", desc: "Freshly prepared juices and beverages with no artificial additives" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Always Stay With Our Special Food
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
            We offer exceptional services to make your dining experience memorable and delightful
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-gold-glow"
            >
              <service.icon size={40} className="text-primary mb-5" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
