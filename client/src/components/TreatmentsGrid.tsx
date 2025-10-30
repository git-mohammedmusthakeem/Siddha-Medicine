import TreatmentCard from './TreatmentCard';
import { Stethoscope, Leaf, HandHeart, Droplet, Sparkles, HeartPulse } from 'lucide-react';
import herbalImage from '@assets/generated_images/Herbal_medicine_consultation_scene_6c3ad91f.png';
import varmaImage from '@assets/generated_images/Varma_therapy_treatment_session_76664ca6.png';
import detoxImage from '@assets/generated_images/Detox_therapy_wellness_setup_b224cff6.png';
import skinImage from '@assets/generated_images/Natural_skin_care_products_035b5ec6.png';

export default function TreatmentsGrid() {
  const treatments = [
    {
      icon: <Stethoscope className="w-6 h-6 text-primary" />,
      title: 'Siddha Consultation',
      description: 'Comprehensive health assessment and personalized treatment plans based on Siddha principles.',
      image: herbalImage
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: 'Herbal Medicine',
      description: 'Traditional herbal formulations using natural ingredients to treat various ailments and promote wellness.',
      image: herbalImage
    },
    {
      icon: <HandHeart className="w-6 h-6 text-primary" />,
      title: 'Varma Therapy',
      description: 'Ancient pressure point therapy to relieve pain, improve circulation, and restore energy flow.',
      image: varmaImage
    },
    {
      icon: <Droplet className="w-6 h-6 text-primary" />,
      title: 'Detox Programs',
      description: 'Natural detoxification treatments to cleanse the body and rejuvenate your system.',
      image: detoxImage
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: 'Skin & Joint Care',
      description: 'Specialized treatments for skin conditions, arthritis, and joint-related problems.',
      image: skinImage
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-primary" />,
      title: 'Wellness Counseling',
      description: 'Holistic lifestyle and dietary guidance for long-term health and disease prevention.',
      image: herbalImage
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Treatments & Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience authentic Siddha healing with our comprehensive range of traditional treatments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={index}
              {...treatment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
