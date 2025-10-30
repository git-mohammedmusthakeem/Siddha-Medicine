import FloatingBookButton from '../FloatingBookButton';
import { Router } from 'wouter';

export default function FloatingBookButtonExample() {
  return (
    <Router>
      <div className="h-screen">
        <FloatingBookButton />
      </div>
    </Router>
  );
}
