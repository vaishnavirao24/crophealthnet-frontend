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

    // Dummy disease predictions list
    const dummyResults: DiagnosisResult[] = [
  { prediction: "Tomato Early Blight", confidence: 0.91 },
  { prediction: "Tomato Late Blight", confidence: 0.87 },
  { prediction: "Leaf Mold", confidence: 0.89 },
  { prediction: "Bacterial Spot", confidence: 0.83 },
  { prediction: "Healthy Leaf", confidence: 0.97 },
  { prediction: "Septoria Leaf Spot", confidence: 0.85 },
  { prediction: "Powdery Mildew", confidence: 0.90 }
];


    // Select random disease result
    const randomResult = dummyResults[Math.floor(Math.random() * dummyResults.length)];

    // Simulate processing delay
    setTimeout(() => {
      setResult(randomResult);
      setIsLoading(false);
    }, 1200);
  };

  const handleFeedback = (feedback: { correct: boolean; comment?: string }) => {
    console.log('Feedback received:', feedback);
    // Future: We can send feedback to backend
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

          <UploadForm onUpload={handleUpload} isLoading={isLoading} />

          {isLoading && <LoadingSpinner />}

          {error && (
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <div className="text-center">
                <div className="text-red-600 font-semibold mb-2">Analysis Failed</div>
                <div className="text-red-700">{error}</div>
              </div>
            </div>
          )}

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
