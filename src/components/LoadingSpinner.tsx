import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <Loader2 className="h-8 w-8 text-green-600 animate-spin" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Analyzing Your Plant
        </h3>
        <p className="text-gray-600 mb-4">
          Our AI is processing your image and detecting potential diseases...
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-pulse" style={{ width: '70%' }} />
        </div>
        <p className="text-sm text-gray-500 mt-2">This usually takes 3-5 seconds</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;