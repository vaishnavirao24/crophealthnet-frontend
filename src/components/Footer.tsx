import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and branding */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">
              CropHealthNet<span className="text-green-400">++</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2024 CropHealthNet++. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for farmers worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;