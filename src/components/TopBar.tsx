import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-background border-b border-border py-2 px-4 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-sm">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
        <a href="tel:+2348147832529" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Phone size={14} className="text-primary" />
          <span className="text-xs sm:text-sm">+234 814 783 2529</span>
        </a>
        <a href="mailto:victormolokwu75@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Mail size={14} className="text-primary" />
          <span className="text-xs sm:text-sm">victormolokwu75@gmail.com</span>
        </a>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Clock size={14} className="text-primary" />
        <span className="text-xs sm:text-sm">Mon-Fri: 11:00 AM - 10:00 PM</span>
      </div>
    </div>
  </div>
);

export default TopBar;
