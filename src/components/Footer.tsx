import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-16 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold text-primary mb-4">CEEDD</h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
            Experience the finest dining with our world-class chefs and carefully curated menu.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-border text-muted-foreground flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About Us", "Our Menu", "Our Chefs", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-muted-foreground text-sm font-body hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground">
            <li className="flex justify-between"><span>Monday - Friday</span><span className="text-primary">11AM - 10PM</span></li>
            <li className="flex justify-between"><span>Saturday</span><span className="text-primary">10AM - 11PM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span className="text-primary">10AM - 9PM</span></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact Us</h4>
          <ul className="space-y-3">
            {[
              { icon: MapPin, text: "123 Gourmet Street, Food City" },
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: Mail, text: "hello@ceedd.com" },
              { icon: Clock, text: "Mon-Fri: 11AM - 10PM" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                <Icon size={14} className="text-primary flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-border py-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-body">
        <p>© 2024 Ceedd Restaurant. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
