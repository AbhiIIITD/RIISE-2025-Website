import React from 'react';

const WavePattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#1e40af" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        
        {/* Main wave */}
        <path
          d="M0,800 C320,720 640,880 960,800 C1280,720 1600,880 1920,800 L1920,1080 L0,1080 Z"
          fill="url(#waveGradient1)"
          className="animate-pulse"
        />
        
        {/* Secondary wave */}
        <path
          d="M0,900 C480,820 960,980 1440,900 C1680,860 1800,920 1920,880 L1920,1080 L0,1080 Z"
          fill="url(#waveGradient2)"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Flowing curves */}
        <path
          d="M-200,300 Q400,200 800,350 T1600,250 Q1800,300 2000,200"
          stroke="url(#waveGradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        
        <path
          d="M-100,500 Q500,400 900,550 T1700,450"
          stroke="url(#waveGradient2)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </svg>
    </div>
  );
};

export default WavePattern;