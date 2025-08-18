import React from 'react';

const DarkVeilBackground = ({
  speed = 0.8,
  className = ''
}) => {
  return (
    <div className={`dark-veil-background ${className}`} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <div className="veil-layer-1" />
      <div className="veil-layer-2" />
      <div className="veil-layer-3" />
      <div className="veil-particles" />
      
      <style jsx>{`
        .veil-layer-1 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 20% 30%, 
            rgba(4, 128, 254, 0.15) 0%, 
            transparent 40%
          ),
          radial-gradient(
            circle at 80% 70%, 
            rgba(11, 196, 238, 0.12) 0%, 
            transparent 45%
          );
          animation: veilFloat1 ${20 / speed}s ease-in-out infinite;
        }
        
        .veil-layer-2 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 60% 20%, 
            rgba(4, 128, 254, 0.08) 0%, 
            transparent 50%
          ),
          radial-gradient(
            circle at 30% 80%, 
            rgba(11, 196, 238, 0.06) 0%, 
            transparent 55%
          );
          animation: veilFloat2 ${25 / speed}s ease-in-out infinite reverse;
        }
        
        .veil-layer-3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg, 
            rgba(4, 128, 254, 0.02) 0%, 
            transparent 30%,
            rgba(11, 196, 238, 0.03) 70%,
            transparent 100%
          );
          animation: veilPulse ${15 / speed}s ease-in-out infinite;
        }
        
        .veil-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, rgba(4, 128, 254, 0.3), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(11, 196, 238, 0.2), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(4, 128, 254, 0.25), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(11, 196, 238, 0.15), transparent),
            radial-gradient(1px 1px at 160px 30px, rgba(4, 128, 254, 0.2), transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: veilParticles ${30 / speed}s linear infinite;
          opacity: 0.6;
        }
        
        @keyframes veilFloat1 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          33% { 
            transform: translate(20px, -30px) rotate(1deg) scale(1.05);
            opacity: 1;
          }
          66% { 
            transform: translate(-15px, 20px) rotate(-1deg) scale(0.95);
            opacity: 0.9;
          }
        }
        
        @keyframes veilFloat2 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-25px, 15px) rotate(2deg) scale(1.08);
            opacity: 0.8;
          }
        }
        
        @keyframes veilPulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.02);
          }
        }
        
        @keyframes veilParticles {
          0% { 
            transform: translateY(0);
            opacity: 0.6;
          }
          100% { 
            transform: translateY(-100px);
            opacity: 0.8;
          }
        }
        
        /* Dark theme enhancements */
        @media (prefers-color-scheme: dark) {
          .veil-layer-1 {
            background: radial-gradient(
              circle at 20% 30%, 
              rgba(4, 128, 254, 0.2) 0%, 
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 70%, 
              rgba(11, 196, 238, 0.18) 0%, 
              transparent 45%
            );
          }
          
          .veil-layer-2 {
            background: radial-gradient(
              circle at 60% 20%, 
              rgba(4, 128, 254, 0.12) 0%, 
              transparent 50%
            ),
            radial-gradient(
              circle at 30% 80%, 
              rgba(11, 196, 238, 0.1) 0%, 
              transparent 55%
            );
          }
          
          .veil-particles {
            background-image: 
              radial-gradient(1px 1px at 20px 30px, rgba(4, 128, 254, 0.4), transparent),
              radial-gradient(1px 1px at 40px 70px, rgba(11, 196, 238, 0.3), transparent),
              radial-gradient(1px 1px at 90px 40px, rgba(4, 128, 254, 0.35), transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(11, 196, 238, 0.25), transparent),
              radial-gradient(1px 1px at 160px 30px, rgba(4, 128, 254, 0.3), transparent);
          }
        }
      `}</style>
    </div>
  );
};

export default DarkVeilBackground;