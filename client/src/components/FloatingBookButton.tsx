import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'wouter';

export default function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Link href="/appointment">
      <Button
        size="lg"
        className="hidden md:flex fixed bottom-6 right-6 z-40 shadow-lg animate-pulse hover:animate-none"
        data-testid="button-floating-book"
      >
        <Calendar className="w-5 h-5 mr-2" />
        <span>Book Appointment</span>
      </Button>
    </Link>
  );
}
