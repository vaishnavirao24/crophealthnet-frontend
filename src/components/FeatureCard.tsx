import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;