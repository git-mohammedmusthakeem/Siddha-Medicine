import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/treatments', label: 'Treatments' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1" data-testid="link-home">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm md:text-base">Dr</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-base md:text-lg text-foreground">Dr Maneksha Hospital</div>
                <div className="text-xs text-muted-foreground">Siddha Medicine</div>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                    location === link.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('tel:+1234567890')}
              data-testid="button-call"
            >
              <Phone className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://wa.me/1234567890')}
              data-testid="button-whatsapp"
            >
              <SiWhatsapp className="h-5 w-5" />
            </Button>
            <Link href="/appointment">
              <Button variant="default" data-testid="button-book-appointment">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`block px-4 py-3 rounded-md text-base font-medium hover-elevate ${
                    location === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="pt-4 flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => window.open('tel:+1234567890')}
                data-testid="button-mobile-call"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => window.open('https://wa.me/1234567890')}
                data-testid="button-mobile-whatsapp"
              >
                <SiWhatsapp className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
            <Link href="/appointment">
              <Button
                variant="default"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-mobile-book-appointment"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
