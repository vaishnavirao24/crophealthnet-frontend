import React, { useState, useRef } from 'react';
import { Upload, Image, X, FileText } from 'lucide-react';

interface UploadFormProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
}

const UploadForm: React.FC<UploadFormProps> = ({ onUpload, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Plant Image</h2>
        <p className="text-gray-600">Upload a clear image of your plant for AI-powered diagnosis</p>
      </div>

      {!selectedFile ? (
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
            dragActive 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-700 mb-2">
            Drag and drop your image here
          </p>
          <p className="text-gray-500 mb-4">or</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Browse Files
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Supports JPG, PNG files up to 10MB
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              onClick={clearFile}
              className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleUpload}
              disabled={isLoading}
              className={`flex-1 py-3 px-6 rounded-full font-medium transition-all duration-200 ${
                isLoading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              }`}
            >
              {isLoading ? 'Processing...' : 'Upload & Diagnose'}
            </button>
            <button
              onClick={clearFile}
              className="px-6 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadForm;