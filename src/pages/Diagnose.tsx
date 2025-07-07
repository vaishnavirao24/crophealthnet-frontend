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
      formData.append("file", file);  // Match backend key

      const response = await fetch("https://srv-d1ko4795pdvs73b42csg.onrender.com/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      const actualResult: DiagnosisResult = {
        prediction: data.prediction,
        confidence: data.confidence,
        heatmap_url: data.heatmap_url,
      };

      setResult(actualResult);
    } catch (err) {
      setError("Failed to analyze image. Please try again.");
      console.error("Upload error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (feedback: { correct: boolean; comment?: string }) => {
    console.log('Feedback received:', feedback);
    // You can optionally send this to the backend later
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

          {/* Loading Spinner */}
          {isLoading && <LoadingSpinner />}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <div className="text-center">
                <div className="text-red-600 font-semibold mb-2">Analysis Failed</div>
                <div className="text-red-700">{error}</div>
              </div>
            </div>
          )}

          {/* Results and Feedback */}
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
