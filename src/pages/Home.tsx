import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { Brain, Zap, Shield, Lock } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms trained on thousands of plant images for accurate disease detection.",
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get diagnosis results in seconds with confidence scores and visual heatmaps highlighting affected areas.",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Proven Accuracy",
      description: "Research-backed technology with high precision in disease identification across multiple crop types.",
      color: "bg-gradient-to-r from-emerald-500 to-teal-500"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Your images are processed securely and never stored permanently. Complete privacy protection guaranteed.",
      color: "bg-gradient-to-r from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CropHealthNet++?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven plant disease diagnosis with our 
              cutting-edge technology designed for modern agriculture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;