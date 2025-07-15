import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-cars.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your Perfect Car Rental Solution
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're driving for income or exploring for pleasure, David's Rentals offers 
                reliable vehicles and unbeatable rates starting from just <span className="font-bold text-accent">R300 per day</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Earning Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Vehicles
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">5-Star Service</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img 
                src={heroImage} 
                alt="Professional car rental fleet" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">R300</div>
              <div className="text-sm">per day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;