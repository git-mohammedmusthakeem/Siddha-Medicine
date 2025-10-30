import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PhilosophySection from '@/components/PhilosophySection';
import TreatmentsGrid from '@/components/TreatmentsGrid';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PhilosophySection />
      <TreatmentsGrid />
      <TestimonialsCarousel />
      <Footer />
      <FloatingBookButton />
    </div>
  );
}
