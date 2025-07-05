import React, { useState } from 'react';
import UploadForm from '../components/UploadForm';
import ResultCard from '../components/ResultCard';
import FeedbackSection from '../components/FeedbackSection';
import LoadingSpinner from '../components/LoadingSpinner';

interface DiagnosisResult {
  prediction: string;
  confidence: number;
  heatmap_url?: string;
}

const Diagnose: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      // Simulate API call with mock data for demonstration
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock response - replace with actual API call
      const mockResult: DiagnosisResult = {
        prediction: Math.random() > 0.5 ? 'Healthy Plant' : 'Leaf Blight',
        confidence: 0.85 + Math.random() * 0.15,
        heatmap_url: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400'
      };

      setResult(mockResult);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (feedback: { correct: boolean; comment?: string }) => {
    console.log('Feedback received:', feedback);
    // In a real app, this would send feedback to the server
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plant Disease Diagnosis
          </h1>
          <p className="text-xl text-gray-600">
            Upload an image of your plant for instant AI-powered health analysis
          </p>
        </div>

        <div className="space-y-8">
          {/* Upload Form */}
          <UploadForm onUpload={handleUpload} isLoading={isLoading} />

          {/* Loading State */}
          {isLoading && <LoadingSpinner />}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <div className="text-center">
                <div className="text-red-600 font-semibold mb-2">Analysis Failed</div>
                <div className="text-red-700">{error}</div>
              </div>
            </div>
          )}

          {/* Results */}
          {result && (
            <>
              <ResultCard 
                prediction={result.prediction}
                confidence={result.confidence}
                heatmapUrl={result.heatmap_url}
              />
              <FeedbackSection onFeedback={handleFeedback} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diagnose;