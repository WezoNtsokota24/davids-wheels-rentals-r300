import { Button } from "@/components/ui/button";
import { Car, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">David's Rentals</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#drivers" className="text-foreground hover:text-primary transition-colors">
            For Drivers
          </a>
          <a href="#leisure" className="text-foreground hover:text-primary transition-colors">
            Leisure Rentals
          </a>
          <a href="#vehicles" className="text-foreground hover:text-primary transition-colors">
            Our Vehicles
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+27123456789" className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary">
            <Phone className="h-4 w-4" />
            <span>+27 12 345 6789</span>
          </a>
          <Button variant="accent" size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;