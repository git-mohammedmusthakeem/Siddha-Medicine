import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import clinicImage from '@assets/generated_images/Modern_clinic_interior_view_b9e77fbd.png';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    concern: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request:', formData);
    alert('Thank you! Your appointment request has been received. We will confirm shortly.');
    setFormData({ name: '', phone: '', email: '', date: '', time: '', concern: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Take the first step towards natural healing. Schedule your consultation today.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 12345 67890"
                        required
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        data-testid="input-date"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        data-testid="input-time"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="concern">Health Concern *</Label>
                    <Textarea
                      id="concern"
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      placeholder="Please describe your health concern or reason for consultation..."
                      rows={5}
                      required
                      data-testid="input-concern"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" data-testid="button-submit-appointment">
                    Submit Appointment Request
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Consultation Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Monday - Saturday</div>
                      <div className="text-muted-foreground">9:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Sunday</div>
                      <div className="text-muted-foreground">Closed</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <img
                  src={clinicImage}
                  alt="Clinic"
                  className="w-full rounded-md"
                  data-testid="img-clinic-sidebar"
                />
                <h3 className="text-lg font-semibold text-foreground">Quick Contact</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open('https://wa.me/1234567890')}
                    data-testid="button-whatsapp-quick"
                  >
                    <SiWhatsapp className="w-5 h-5 mr-3 text-primary" />
                    WhatsApp Booking
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open('tel:+911234567890')}
                    data-testid="button-call-quick"
                  >
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    Call Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
