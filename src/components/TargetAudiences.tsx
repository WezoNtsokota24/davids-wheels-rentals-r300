import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DollarSign, MapPin, Users, Calendar } from "lucide-react";
import driverImage from "@/assets/driver-success.jpg";
import familyImage from "@/assets/family-vacation.jpg";

const TargetAudiences = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Designed For Your Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From professional drivers to weekend adventurers, we have the perfect rental solution for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Drivers Section */}
          <Card id="drivers" className="group hover:shadow-card transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-4">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={driverImage} 
                  alt="Professional ride-hailing driver" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                For Professional Drivers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Start or grow your ride-hailing business with our affordable R300 daily rental scheme. 
                Perfect for Uber, Bolt, or delivery drivers looking for reliable, well-maintained vehicles.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Unbeatable R300 daily rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Fuel-efficient vehicles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">24/7 roadside assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Flexible rental periods</span>
                </div>
              </div>

              <Button variant="accent" className="w-full group">
                Start Earning Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Leisure Section */}
          <Card id="leisure" className="group hover:shadow-card transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-4">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={familyImage} 
                  alt="Family enjoying vacation with rental car" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                For Leisure & Personal Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Make your trips memorable with our diverse fleet of well-maintained vehicles. 
                Perfect for vacations, business trips, or whenever you need reliable transportation.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Wide range of vehicle types</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Competitive daily & weekly rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Easy online booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Comprehensive insurance</span>
                </div>
              </div>

              <Button variant="default" className="w-full group">
                Book Your Adventure
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <Calendar className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust David's Rentals for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Contact Us Today
              </Button>
              <Button variant="outline" size="lg">
                View Our Fleet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudiences;