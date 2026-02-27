import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "w-full bg-secondary border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground";
  const selectClass = "w-full bg-secondary border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors appearance-none";

  return (
    <section id="booking" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Reservation</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Book a Table</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
            Reserve your spot for an unforgettable dining experience
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >
          <input type="text" placeholder="Full Name" required className={inputClass} />
          <input type="email" placeholder="Email Address" required className={inputClass} />
          <input type="tel" placeholder="Phone Number" required className={inputClass} />
          <select required className={selectClass}>
            <option value="">Number of Guests</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "Person" : "People"}</option>
            ))}
          </select>
          <input type="date" required className={inputClass} />
          <select required className={selectClass}>
            <option value="">Select Time</option>
            {["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground hover:bg-gold-light transition-all duration-300 text-sm tracking-widest uppercase font-body font-bold"
            >
              {submitted ? "✓ Reservation Confirmed!" : "Reserve Table Now"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
