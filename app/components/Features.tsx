import { CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const features = [
  'Mobile-Responsive Design',
  'Blazing Fast Load Times',
  'SEO-Optimized Code',
  'WhatsApp & Contact Integration',
  'Google Maps + Business Info',
  'One-Time Payment — No Monthly Fees',
  'Easy to Maintain & Edit',
  'Free Domain Setup & SSL',
  'Optimized for Local Search',
  'Delivered in 72 Hours or Less',
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white px-4">
      <MotionWrapper>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Everything Your Local Business Needs</h2>
        <p className="mt-3 text-gray-600 text-lg">10 powerful features included in every site we deliver.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
              <p className="text-gray-800 text-sm sm:text-base">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      </MotionWrapper>
    </section>
  );
}