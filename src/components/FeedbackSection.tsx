import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

interface FeedbackSectionProps {
  onFeedback: (feedback: { correct: boolean; comment?: string }) => void;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ onFeedback }) => {
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');

  const handleFeedback = (correct: boolean) => {
    if (correct) {
      onFeedback({ correct: true });
      setFeedbackGiven(true);
    } else {
      setShowComment(true);
    }
  };

  const submitFeedback = () => {
    onFeedback({ correct: false, comment });
    setFeedbackGiven(true);
    setShowComment(false);
  };

  if (feedbackGiven) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
            <ThumbsUp className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">Your feedback helps us improve our AI model.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
      <div className="text-center mb-6">
        <MessageCircle className="h-8 w-8 text-gray-400 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Was this prediction correct?</h3>
        <p className="text-gray-600">Your feedback helps us improve our AI model</p>
      </div>

      {!showComment ? (
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => handleFeedback(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <ThumbsUp className="h-5 w-5" />
            <span>Yes, Correct</span>
          </button>
          <button
            onClick={() => handleFeedback(false)}
            className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <ThumbsDown className="h-5 w-5" />
            <span>No, Incorrect</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What was incorrect? (Optional)
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              placeholder="Please describe what was wrong with the prediction..."
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={submitFeedback}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Submit Feedback
            </button>
            <button
              onClick={() => setShowComment(false)}
              className="px-6 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;