import { Car, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6" />
              <h3 className="text-xl font-bold">David's Rentals</h3>
            </div>
            <p className="text-primary-foreground/80">
              Your trusted partner for reliable and affordable car rentals. 
              Serving drivers and families across South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#drivers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  For Drivers
                </a>
              </li>
              <li>
                <a href="#leisure" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Leisure Rentals
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Vehicles
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+27 64 416 2558</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">info@davidsrentals.co.za</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  123 Main Street, Johannesburg, 2000
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Operating Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent" />
                <div className="text-primary-foreground/80">
                  <div>Mon - Fri: 7:00 AM - 8:00 PM</div>
                  <div>Sat - Sun: 8:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="text-sm text-accent font-medium">
                24/7 Roadside Assistance Available
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 David's Rentals. All rights reserved. | Your journey starts here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;