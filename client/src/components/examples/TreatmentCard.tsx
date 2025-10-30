import TreatmentCard from '../TreatmentCard';
import { Stethoscope } from 'lucide-react';
import { Router } from 'wouter';
import herbalImage from '@assets/generated_images/Herbal_medicine_consultation_scene_6c3ad91f.png';

export default function TreatmentCardExample() {
  return (
    <Router>
      <div className="p-8 max-w-sm">
        <TreatmentCard
          icon={<Stethoscope className="w-6 h-6 text-primary" />}
          title="Herbal Medicine"
          description="Traditional herbal formulations using natural ingredients to treat various ailments and promote overall wellness."
          image={herbalImage}
        />
      </div>
    </Router>
  );
}
