import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Sparkles } from 'lucide-react';
import herbsImage from '@assets/generated_images/Medicinal_herbs_collection_display_cecf08ce.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Traditional Siddha Medicine</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Healing through Ancient Tamil Wisdom
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-serif italic leading-relaxed">
              "Nature itself is the best physician. Siddha medicine harmonizes body, mind, and spirit through the healing power of herbs and ancient knowledge."
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/appointment">
                <Button size="lg" variant="default" data-testid="button-hero-book">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" data-testid="button-hero-learn">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Patients Treated</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Medicinal Herbs Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <img
                src={herbsImage}
                alt="Traditional Siddha Medicinal Herbs"
                className="w-full h-full object-cover"
                data-testid="img-herbs"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
