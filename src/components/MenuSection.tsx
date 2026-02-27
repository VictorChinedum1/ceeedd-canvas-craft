import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = ["All Items", "Starters", "Main Dishes", "Desserts", "Drinks"];

const menuItems = [
  { name: "Mediterranean Mezze Platter", desc: "Hummus, baba ganoush, falafel, and fresh pita", price: "$14.99", category: "Starters", image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=400&q=80&fit=crop" },
  { name: "Grilled Salmon Fillet", desc: "Fresh Atlantic salmon with herb butter and seasonal vegetables", price: "$28.99", category: "Main Dishes", image: "https://images.unsplash.com/photo-1607430986366-f9f767a9fc95?w=400&q=80&fit=crop" },
  { name: "Artisan Burger Deluxe", desc: "Wagyu beef, caramelized onions, aged cheddar, truffle aioli", price: "$18.50", category: "Main Dishes", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80&fit=crop" },
  { name: "Truffle Pasta Carbonara", desc: "Homemade fettuccine with black truffle, pancetta, parmesan", price: "$24.99", category: "Main Dishes", image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400&q=80&fit=crop" },
  { name: "Belgian Waffle Supreme", desc: "Crispy waffle with fresh strawberries, whipped cream, maple syrup", price: "$12.99", category: "Desserts", image: "https://images.unsplash.com/photo-1604961526670-74516908aa2f?w=400&q=80&fit=crop" },
  { name: "Blueberry Pancake Stack", desc: "Fluffy pancakes with fresh blueberries and butter", price: "$11.50", category: "Desserts", image: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=400&q=80&fit=crop" },
  { name: "Signature Cold Brew", desc: "Smooth cold brew coffee with vanilla notes", price: "$5.99", category: "Drinks", image: "https://images.unsplash.com/photo-1611854778891-6cff1a7fd8d4?w=400&q=80&fit=crop" },
  { name: "Layered Cappuccino", desc: "Artisan cappuccino with perfect layers and foam art", price: "$6.50", category: "Drinks", image: "https://images.unsplash.com/photo-1694050172060-836f5258ed0f?w=400&q=80&fit=crop" },
];

const MenuSection = () => {
  const [active, setActive] = useState("All Items");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All Items" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">Delicious Menu</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Discover Our Menu</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
            Explore our carefully curated selection of dishes made with the finest ingredients
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm tracking-wider uppercase font-body transition-all duration-300 border ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover-gold-glow"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-sm font-bold px-3 py-1">
                  {item.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-2">{item.desc}</p>
                <button className="text-primary text-sm tracking-wider uppercase font-body hover:text-gold-light transition-colors">
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#booking"
            className="inline-flex items-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-widest uppercase font-body"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
