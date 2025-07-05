import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'sreevaishnavirao@gmail.com',
      description: 'Get in touch for support or inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9100742769',
      description: 'Mon-Fri, 9AM-6PM IST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Piler, Andhra Pradesh (India)',
      description: 'Agricultural Innovation Hub'
    },
    {
      icon: Globe,
      title: 'Global Support',
      details: '24/7 Online',
      description: 'Worldwide technical assistance'
    }
  ];

  const faqItems = [
    {
      question: 'How accurate is the disease detection?',
      answer: 'Our AI model achieves 95.7% accuracy across 150+ plant species and diseases.'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support JPG, PNG, and HEIC formats up to 10MB in size.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade encryption and never store your images permanently.'
    },
    {
      question: 'Can I use this for commercial purposes?',
      answer: 'Yes, we offer commercial licenses for farms, research institutions, and agtech companies.'
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-green-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-green-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about CropHealthNet++? We're here to help you get the most 
            out of our AI-powered plant disease diagnosis platform.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                <info.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <div className="text-green-600 font-medium mb-2">{info.details}</div>
              <p className="text-gray-600 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="business">Business Partnership</option>
                  <option value="research">Research Collaboration</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">
                Quick answers to common questions about our platform.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Response Time Info */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Response Times</h3>
              <ul className="space-y-2 text-green-800">
                <li>• General inquiries: Within 24 hours</li>
                <li>• Technical support: Within 4-8 hours</li>
                <li>• Business partnerships: Within 48 hours</li>
                <li>• Emergency issues: Within 2 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;