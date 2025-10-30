import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface TreatmentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export default function TreatmentCard({ icon, title, description, image }: TreatmentCardProps) {
  return (
    <Card className="overflow-hidden group hover-elevate transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-treatment-${title.toLowerCase().replace(/\s+/g, '-')}`}
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Link href="/treatments">
          <Button variant="ghost" className="group/btn p-0 h-auto" data-testid={`button-learn-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            <span className="text-primary">Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
