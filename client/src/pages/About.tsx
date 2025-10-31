import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Card } from '@/components/ui/card';
import { Award, GraduationCap, Heart, Target } from 'lucide-react';
import doctorImage from '@assets/generated_images/Siddha_doctor_professional_portrait_4d0ffa40.png';
import clinicImage from '@assets/generated_images/Modern_clinic_interior_view_b9e77fbd.png';

export default function About() {
  const qualifications = [
    'Bachelor of Siddha Medicine and Surgery (BSMS)',
    'Advanced Diploma in Varma Therapy',
    'Certified Siddha Practitioner - Tamil Nadu Board',
    'Member of Indian Siddha Medical Association'
  ];

  const certifications = [
    { icon: Award, title: 'Excellence Award', year: '2023' },
    { icon: GraduationCap, title: 'Advanced Training', year: '2020' },
    { icon: Heart, title: 'Best Practitioner', year: '2021' },
    { icon: Target, title: 'Research Contribution', year: '2022' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              About Dr Maneksha Hospital
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to preserving and practicing the ancient art of Siddha medicine
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over 15 years, I have dedicated my life to the practice and preservation of Siddha medicine, one of the world's oldest medical systems. My journey began with a deep fascination for the healing power of nature and the ancient Tamil wisdom passed down through generations.
                </p>
                <p>
                  After completing my Bachelor of Siddha Medicine and Surgery (BSMS), I pursued advanced training in Varma therapy and specialized treatments. My mission is to bridge the gap between ancient healing traditions and modern healthcare needs.
                </p>
                <p>
                  Every patient I treat reinforces my belief that true healing comes from treating the whole person - body, mind, and spirit. Through personalized care and natural remedies, I've witnessed countless transformations and recoveries.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={doctorImage}
                alt="Dr Maneksha Hospital"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-about-doctor"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Qualifications & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground font-medium" data-testid={`text-qualification-${index}`}>{qual}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Certifications & Recognition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="py-16 md:py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Clinic
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src={clinicImage}
              alt="Clinic interior"
              className="rounded-lg shadow-lg w-full"
              data-testid="img-clinic-1"
            />
            <img
              src={clinicImage}
              alt="Treatment room"
              className="rounded-lg shadow-lg w-full"
              data-testid="img-clinic-2"
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
}
