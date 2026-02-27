import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-background border-b border-border py-2 px-4 md:px-16">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
      <div className="flex items-center gap-6">
        <a href="tel:+15551234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Phone size={14} className="text-primary" />
          <span>+1 (555) 123-4567</span>
        </a>
        <a href="mailto:hello@ceedd.com" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Mail size={14} className="text-primary" />
          <span>hello@ceedd.com</span>
        </a>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Clock size={14} className="text-primary" />
        <span>Mon-Fri: 11:00 AM - 10:00 PM</span>
      </div>
    </div>
  </div>
);

export default TopBar;
