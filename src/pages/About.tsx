import React from 'react';
import { Users, Award, Globe, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Accuracy Rate', value: '95.7%' },
    { label: 'Images Analyzed', value: '500K+' },
    { label: 'Plant Species', value: '150+' },
    { label: 'Countries Served', value: '45+' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lead AI Researcher',
      description: 'PhD in Computer Vision, 10+ years in agricultural AI'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Plant Pathologist',
      description: 'Expert in crop diseases with 15+ years field experience'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Machine Learning Engineer',
      description: 'Specialist in deep learning and model optimization'
    }
  ];

  const achievements = [
    'Published in top-tier agricultural journals',
    'Winner of AgTech Innovation Award 2023',
    'Deployed in 45+ countries worldwide',
    'Trusted by 10,000+ farmers and researchers',
    'ISO 27001 certified for data security'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">CropHealthNet</span><span className="text-emerald-600">++</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing agriculture through AI-powered plant disease diagnosis, 
            helping farmers worldwide protect their crops and increase yields.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-green-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To democratize access to advanced plant disease diagnosis technology, 
                empowering farmers of all scales to make informed decisions about crop health 
                and maximize agricultural productivity while minimizing environmental impact.
              </p>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Agricultural research" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading researchers and engineers dedicated to advancing agricultural technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-green-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our AI models are trained on millions of plant images using state-of-the-art 
              deep learning techniques, ensuring the highest accuracy in disease detection.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Deep Learning</h3>
                <p className="text-gray-600 text-sm">Advanced neural networks trained on diverse datasets</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Computer Vision</h3>
                <p className="text-gray-600 text-sm">Sophisticated image analysis and pattern recognition</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600 text-sm">Scalable, secure, and reliable processing platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;