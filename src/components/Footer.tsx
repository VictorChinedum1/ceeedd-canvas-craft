import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Star } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-16 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img 
              src="/logo.png" 
              alt="CEEDD Restaurant" 
              className="h-24 w-auto object-contain drop-shadow-lg"
            />
          </div>
          <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
            Where Every Meal Tells a Story. Experience culinary excellence with every visit.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-gold/10 border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-all rounded-full"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-gold" size={16} fill="currentColor" />
            <h4 className="font-display text-lg font-semibold text-foreground">Quick Links</h4>
          </div>
          <ul className="space-y-2">
            {["Home", "About Us", "Our Menu", "Reservations", "Gallery", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-muted-foreground text-sm font-body hover:text-gold transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-gold" size={16} fill="currentColor" />
            <h4 className="font-display text-lg font-semibold text-foreground">Opening Hours</h4>
          </div>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li className="flex items-start gap-3">
              <Clock size={14} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <div>Monday - Friday</div>
                <div className="text-gold">11:00 AM - 10:00 PM</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={14} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <div>Saturday - Sunday</div>
                <div className="text-gold">10:00 AM - 11:00 PM</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-gold" size={16} fill="currentColor" />
            <h4 className="font-display text-lg font-semibold text-foreground">Contact Us</h4>
          </div>
          <ul className="space-y-3">
            {[
              { icon: MapPin, text: "123 Culinary Street, Food District, NY 10001" },
              { icon: Phone, text: "+234 814 783 2529" },
              { icon: Mail, text: "victormolokwu75@gmail.com" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-muted-foreground text-sm font-body">
                <Icon size={14} className="text-gold mt-0.5 flex-shrink-0" />
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
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
