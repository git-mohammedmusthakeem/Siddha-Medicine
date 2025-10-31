import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User } from 'lucide-react';
import herbalImage from '@assets/generated_images/Herbal_medicine_consultation_scene_6c3ad91f.png';
import herbsImage from '@assets/generated_images/Medicinal_herbs_collection_display_cecf08ce.png';
import detoxImage from '@assets/generated_images/Detox_therapy_wellness_setup_b224cff6.png';

export default function Blog() {
  const articles = [
    {
      title: '5 Essential Herbs for Daily Wellness',
      excerpt: 'Discover the power of Tulsi, Turmeric, Neem, Ashwagandha, and Amla in your daily routine for improved health and vitality.',
      category: 'Remedies',
      author: 'Dr Maneksha Hospital',
      readTime: '5 min read',
      image: herbsImage,
      featured: true
    },
    {
      title: 'Understanding Siddha Medicine Principles',
      excerpt: 'Learn about the fundamental concepts of Siddha medicine, including the three doshas and the importance of balance.',
      category: 'Wellness',
      author: 'Dr Maneksha Hospital',
      readTime: '8 min read',
      image: herbalImage
    },
    {
      title: 'Seasonal Detox: Spring Cleansing Guide',
      excerpt: 'A comprehensive guide to natural detoxification techniques perfect for the spring season to rejuvenate your body.',
      category: 'Seasonal Tips',
      author: 'Dr Maneksha Hospital',
      readTime: '6 min read',
      image: detoxImage
    },
    {
      title: 'Varma Points for Pain Relief',
      excerpt: 'Explore specific Varma pressure points you can use at home for common aches and pains.',
      category: 'Wellness',
      author: 'Dr Maneksha Hospital',
      readTime: '7 min read',
      image: herbalImage
    },
    {
      title: 'Natural Remedies for Better Sleep',
      excerpt: 'Traditional Siddha approaches to improving sleep quality through herbs and lifestyle practices.',
      category: 'Remedies',
      author: 'Dr Maneksha Hospital',
      readTime: '5 min read',
      image: herbsImage
    },
    {
      title: 'Monsoon Health Tips from Siddha',
      excerpt: 'Stay healthy during the rainy season with these time-tested Siddha medicine practices and precautions.',
      category: 'Seasonal Tips',
      author: 'Dr Maneksha Hospital',
      readTime: '6 min read',
      image: detoxImage
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
              Health & Wellness Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore articles on Siddha principles, natural remedies, and holistic wellness tips
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles[0].featured && (
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <Card className="overflow-hidden hover-elevate transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[16/10] md:aspect-auto">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                    data-testid="img-featured-article"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                  <Badge className="w-fit">{articles[0].category}</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {articles[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card key={index} className="overflow-hidden hover-elevate transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-article-${index}`}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <Badge className="w-fit">{article.category}</Badge>
                  <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
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
