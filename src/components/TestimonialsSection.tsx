import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "Ceedd offers an exceptional dining experience. The attention to detail in every dish is remarkable, and the ambiance is perfect for any occasion. Highly recommended!",
    name: "Emily Thompson",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    text: "I've been coming to Ceedd for years, and they never disappoint. The consistency in quality and service is what keeps me coming back. It's my go-to spot for special occasions.",
    name: "David Martinez",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    text: "We hosted our company dinner at Ceedd, and it was flawless. The staff was professional, the food was outstanding, and our guests couldn't stop raving about the experience.",
    name: "Lisa Anderson",
    role: "Event Organizer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Feedback From Customers
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
            Hear what our valued guests have to say about their experience
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-elegant italic text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto">
                "{testimonials[current].text}"
              </p>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary mx-auto mb-4"
              />
              <h4 className="font-display text-lg font-semibold text-foreground">{testimonials[current].name}</h4>
              <p className="text-primary text-sm font-body">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all flex items-center justify-center">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all flex items-center justify-center">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
