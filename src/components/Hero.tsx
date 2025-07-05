import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-16 pb-20">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 mb-8">
            <Sparkles className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">AI-Powered Technology</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">CropHealthNet</span>
            <span className="text-emerald-600">++</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
            AI-Powered Plant Disease Diagnosis
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your crop management with cutting-edge AI technology. Get 
            instant, accurate disease diagnosis with confidence scores and treatment 
            recommendations.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/diagnose"
              className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Diagnose Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <div className="text-sm text-gray-500">
              Free • Instant Results • High Accuracy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;