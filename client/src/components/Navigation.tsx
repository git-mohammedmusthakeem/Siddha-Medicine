import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const getPageTitle = () => {
    const currentPage = navLinks.find(link => link.path === location);
    return currentPage?.label || 'Dr Maneksha Hospital';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location !== '/' 
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Mobile Header - Logo + Page Title */}
          <div className="flex items-center gap-3 md:hidden">
            <Link href="/">
              <a className="flex items-center gap-2" data-testid="link-home">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">Dr</span>
                </div>
              </a>
            </Link>
            <div className="flex flex-col">
              <div className="font-semibold text-sm text-foreground">{getPageTitle()}</div>
              <div className="text-[10px] text-muted-foreground">Siddha Medicine</div>
            </div>
          </div>

          {/* Desktop Logo */}
          <Link href="/">
            <a className="hidden md:flex items-center gap-2 hover-elevate rounded-md px-2 py-1" data-testid="link-home-desktop">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base">Dr</span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">Dr Maneksha Hospital</div>
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

          {/* Mobile Actions - Quick Call Button */}
          <div className="flex md:hidden items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('tel:+1234567890')}
              data-testid="button-mobile-call"
            >
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
