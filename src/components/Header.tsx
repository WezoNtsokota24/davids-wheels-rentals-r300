import { Button } from "@/components/ui/button";
import { Car, Phone, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate('/');
    }
  };

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
          <a href="tel:+27644162558" className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary">
            <Phone className="h-4 w-4" />
            <span>+27 64 416 2558</span>
          </a>
          
          {!loading && (
            user ? (
              <div className="flex items-center gap-2">
                <Button variant="accent" size="sm">
                  Book Now
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="hidden sm:inline">Account</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
                  Sign In
                </Button>
                <Button variant="accent" size="sm" onClick={() => navigate('/auth')}>
                  Get Started
                </Button>
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;