
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-medium">
          Poetic Voices
        </Link>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-background z-40 p-6 animate-fade-in">
                <nav className="flex flex-col gap-6 text-lg">
                  <Link 
                    to="/interviews" 
                    onClick={toggleMenu}
                    className="border-b pb-2 hover:text-primary transition-colors"
                  >
                    Interviews
                  </Link>
                  <Link 
                    to="/poets" 
                    onClick={toggleMenu}
                    className="border-b pb-2 hover:text-primary transition-colors"
                  >
                    Poets
                  </Link>
                  <Link 
                    to="/events" 
                    onClick={toggleMenu}
                    className="border-b pb-2 hover:text-primary transition-colors"
                  >
                    Events
                  </Link>
                  <Link 
                    to="/collections" 
                    onClick={toggleMenu}
                    className="border-b pb-2 hover:text-primary transition-colors"
                  >
                    City Collections
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={toggleMenu}
                    className="border-b pb-2 hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex gap-8 text-base">
            <Link to="/interviews" className="hover:text-primary transition-colors">
              Interviews
            </Link>
            <Link to="/poets" className="hover:text-primary transition-colors">
              Poets
            </Link>
            <Link to="/events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link to="/collections" className="hover:text-primary transition-colors">
              City Collections
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
