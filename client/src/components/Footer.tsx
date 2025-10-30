import { Link } from 'wouter';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SiWhatsapp, SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Dr. [Name] Siddha Clinic</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Healing through Ancient Tamil Wisdom. Experience authentic Siddha medicine for holistic wellness.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => window.open('https://facebook.com')} data-testid="button-facebook">
                <SiFacebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('https://instagram.com')} data-testid="button-instagram">
                <SiInstagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('https://youtube.com')} data-testid="button-youtube">
                <SiYoutube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/"><a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-home">Home</a></Link>
              <Link href="/about"><a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">About</a></Link>
              <Link href="/treatments"><a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-treatments">Treatments</a></Link>
              <Link href="/blog"><a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-blog">Blog</a></Link>
              <Link href="/contact"><a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</a></Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Siddha Consultation</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Herbal Medicine</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Varma Therapy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Detox Programs</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Wellness Counseling</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>123 Wellness Street, Tamil Nadu, India - 600001</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>info@siddhaclinic.com</span>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>Mon-Sat: 9AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground">Get health tips and updates on Siddha medicine</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button variant="default" data-testid="button-newsletter-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Dr. [Name] Siddha Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
