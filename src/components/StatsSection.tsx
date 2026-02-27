import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 150, suffix: "+", label: "Special Dishes" },
  { value: 30, suffix: "+", label: "Expert Chefs" },
  { value: 5000, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Awards Won" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="py-16 bg-card border-y border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Counter target={stat.value} suffix={stat.suffix} />
          <p className="text-muted-foreground text-sm mt-2 tracking-wider uppercase font-body">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
