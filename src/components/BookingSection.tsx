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

  const inputClass = "w-full bg-white/10 border border-white/20 text-white px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-400 transition-colors placeholder:text-white/60 backdrop-blur-sm";
  const selectClass = "w-full bg-white/10 border border-white/20 text-white px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-400 transition-colors appearance-none placeholder:text-white/60 backdrop-blur-sm";

  return (
    <section id="booking" className="section-padding relative min-h-screen flex items-center" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-orange-900/60 to-blue-900/80"></div>
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange-400 text-sm tracking-[0.3em] uppercase font-body">Reservation</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">Book a Table</h2>
          <p className="text-white/80 mt-4 max-w-xl mx-auto font-body">
            Reserve your spot for an unforgettable dining experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
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
                className="w-full py-4 bg-gold hover:bg-gold-light text-primary-foreground transition-all duration-300 text-sm tracking-widest uppercase font-body font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {submitted ? "✓ Reservation Confirmed!" : "Reserve Table Now"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
