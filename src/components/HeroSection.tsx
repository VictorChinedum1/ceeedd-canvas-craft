import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    subtitle: "Traditional & Hygienic",
    title: "Welcome to the World of Fine Dining",
    description: "Let's eat delicious food together and get lost in the world of culinary excellence",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&fit=crop",
  },
  {
    subtitle: "Delightful Experience",
    title: "Delicious Food Only At Ceedd",
    description: "Indulge in our signature dishes crafted by world-class chefs",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&fit=crop",
  },
  {
    subtitle: "Amazing & Delicious",
    title: "Get Lost In Delicious Food",
    description: "An intimate dining experience you'll never forget",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80&fit=crop",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-background/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-16 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl font-elegant italic mb-10 max-w-lg">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3.5 bg-primary text-primary-foreground hover:bg-gold-light transition-all duration-300 text-sm tracking-widest uppercase font-body group"
                >
                  Explore Our Menu
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center sm:justify-start px-6 sm:px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-widest uppercase font-body"
                >
                  Reserve Table
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full border border-primary transition-all ${i === current ? "bg-primary" : "bg-transparent"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
