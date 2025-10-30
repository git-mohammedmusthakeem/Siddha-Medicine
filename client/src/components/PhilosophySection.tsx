import { Heart, Leaf, Sparkles } from 'lucide-react';

export default function PhilosophySection() {
  const principles = [
    {
      icon: Leaf,
      title: 'Natural Healing',
      description: 'Harnessing the power of nature and herbs to restore balance and vitality to the body.'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Treating the whole person - body, mind, and spirit - for complete health and harmony.'
    },
    {
      icon: Sparkles,
      title: 'Ancient Wisdom',
      description: 'Drawing from thousands of years of Tamil Siddha tradition and knowledge.'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What is Siddha Medicine?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Siddha medicine is one of the oldest systems of medicine in India, rooted in Tamil culture and tradition. It emphasizes the balance of mind, body, and soul through natural remedies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="text-center space-y-4"
              data-testid={`card-principle-${index}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                <principle.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
