import React from 'react';
import { CheckCircle, AlertTriangle, Download, TrendingUp } from 'lucide-react';

interface ResultCardProps {
  prediction: string;
  confidence: number;
  heatmapUrl?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ prediction, confidence, heatmapUrl }) => {
  const isHealthy = prediction.toLowerCase().includes('healthy');
  const confidencePercentage = Math.round(confidence * 100);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600';
    if (confidence >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getConfidenceBg = (confidence: number) => {
    if (confidence >= 0.8) return 'bg-green-100';
    if (confidence >= 0.6) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          isHealthy ? 'bg-green-100' : 'bg-red-100'
        }`}>
          {isHealthy ? (
            <CheckCircle className="h-8 w-8 text-green-600" />
          ) : (
            <AlertTriangle className="h-8 w-8 text-red-600" />
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Diagnosis Result</h3>
        <p className="text-gray-600">AI-powered analysis completed</p>
      </div>

      <div className="space-y-6">
        {/* Prediction */}
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {prediction}
          </div>
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${getConfidenceBg(confidence)}`}>
            <TrendingUp className={`h-4 w-4 ${getConfidenceColor(confidence)}`} />
            <span className={`font-semibold ${getConfidenceColor(confidence)}`}>
              {confidencePercentage}% Confidence
            </span>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Confidence Score</span>
            <span>{confidencePercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ${
                confidence >= 0.8 ? 'bg-green-500' :
                confidence >= 0.6 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${confidencePercentage}%` }}
            />
          </div>
        </div>

        {/* Heatmap */}
        {heatmapUrl && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Visual Analysis</h4>
            <div className="relative">
              <img 
                src={heatmapUrl} 
                alt="Disease heatmap" 
                className="w-full h-64 object-cover rounded-lg border border-gray-200"
              />
              <div className="absolute top-3 right-3">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                  <Download className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Red areas indicate potential disease locations detected by our AI model.
            </p>
          </div>
        )}

        {/* Recommendation */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Recommendation</h4>
          <p className="text-blue-800 text-sm">
            {isHealthy 
              ? "Your plant appears healthy! Continue with regular care and monitoring."
              : "Consider consulting with an agricultural expert for detailed treatment options. Monitor the affected areas closely."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;