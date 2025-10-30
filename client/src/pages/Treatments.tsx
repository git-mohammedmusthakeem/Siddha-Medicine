import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Leaf, HandHeart, Droplet, Sparkles, HeartPulse, Clock, IndianRupee } from 'lucide-react';
import { Link } from 'wouter';
import herbalImage from '@assets/generated_images/Herbal_medicine_consultation_scene_6c3ad91f.png';
import varmaImage from '@assets/generated_images/Varma_therapy_treatment_session_76664ca6.png';
import detoxImage from '@assets/generated_images/Detox_therapy_wellness_setup_b224cff6.png';
import skinImage from '@assets/generated_images/Natural_skin_care_products_035b5ec6.png';

export default function Treatments() {
  const treatments = [
    {
      icon: Stethoscope,
      title: 'Siddha Consultation',
      description: 'Comprehensive health assessment and personalized treatment plans based on Siddha principles and pulse diagnosis.',
      benefits: ['Complete health evaluation', 'Personalized treatment plan', 'Dietary recommendations', 'Follow-up support'],
      duration: '45-60 minutes',
      image: herbalImage
    },
    {
      icon: Leaf,
      title: 'Herbal Medicine',
      description: 'Traditional herbal formulations using carefully selected natural ingredients to treat various ailments and promote overall wellness.',
      benefits: ['Natural healing', 'No side effects', 'Customized formulations', 'Improves immunity'],
      duration: 'Ongoing treatment',
      image: herbalImage
    },
    {
      icon: HandHeart,
      title: 'Varma Therapy',
      description: 'Ancient pressure point therapy to relieve pain, improve circulation, restore energy flow, and treat musculoskeletal conditions.',
      benefits: ['Pain relief', 'Improved mobility', 'Better circulation', 'Energy restoration'],
      duration: '30-45 minutes',
      image: varmaImage
    },
    {
      icon: Droplet,
      title: 'Detox Programs',
      description: 'Natural detoxification treatments designed to cleanse the body, eliminate toxins, and rejuvenate your entire system.',
      benefits: ['Body cleansing', 'Increased energy', 'Better digestion', 'Mental clarity'],
      duration: '7-21 days',
      image: detoxImage
    },
    {
      icon: Sparkles,
      title: 'Skin & Joint Care',
      description: 'Specialized Siddha treatments for various skin conditions, arthritis, rheumatism, and other joint-related problems.',
      benefits: ['Natural skin healing', 'Joint pain relief', 'Reduces inflammation', 'Long-term results'],
      duration: '4-12 weeks',
      image: skinImage
    },
    {
      icon: HeartPulse,
      title: 'Wellness Counseling',
      description: 'Holistic lifestyle and dietary guidance for long-term health, disease prevention, and maintaining balance in daily life.',
      benefits: ['Lifestyle optimization', 'Preventive care', 'Stress management', 'Wellness maintenance'],
      duration: '30 minutes',
      image: herbalImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our Treatments & Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience authentic Siddha healing with our comprehensive range of traditional treatments tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-12">
            {treatments.map((treatment, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-[4/3] md:aspect-auto">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-treatment-${index}`}
                    />
                  </div>
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <treatment.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{treatment.title}</h2>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {treatment.description}
                    </p>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Key Benefits:</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {treatment.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{treatment.duration}</span>
                      </div>
                    </div>

                    <Link href="/appointment">
                      <Button variant="default" className="w-full md:w-auto" data-testid={`button-book-${index}`}>
                        Book Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
}
