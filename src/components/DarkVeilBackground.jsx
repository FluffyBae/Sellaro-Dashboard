import React from 'react';

const DarkVeilBackground = ({
  speed = 1,
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
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at center, rgba(4, 128, 254, 0.1) 0%, rgba(11, 196, 238, 0.05) 50%, transparent 100%)'
    }}>
      {/* Main flowing gradient layers */}
      <div className="veil-flow-1" />
      <div className="veil-flow-2" />
      <div className="veil-flow-3" />
      <div className="veil-flow-4" />
      
      {/* Overlay gradients for depth */}
      <div className="veil-overlay-1" />
      <div className="veil-overlay-2" />
      
      {/* Particle effects */}
      <div className="veil-particles" />
      
      <style jsx>{`
        .veil-flow-1 {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: radial-gradient(
            ellipse 800px 400px at 30% 50%, 
            rgba(4, 128, 254, 0.3) 0%, 
            rgba(4, 128, 254, 0.1) 30%,
            transparent 60%
          );
          animation: veilFlow1 ${30 / speed}s ease-in-out infinite;
          transform-origin: center;
        }
        
        .veil-flow-2 {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: radial-gradient(
            ellipse 600px 800px at 70% 30%, 
            rgba(11, 196, 238, 0.25) 0%, 
            rgba(11, 196, 238, 0.08) 35%,
            transparent 65%
          );
          animation: veilFlow2 ${35 / speed}s ease-in-out infinite reverse;
          transform-origin: center;
        }
        
        .veil-flow-3 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            ellipse 1000px 300px at 20% 80%, 
            rgba(4, 128, 254, 0.2) 0%, 
            rgba(4, 128, 254, 0.05) 40%,
            transparent 70%
          );
          animation: veilFlow3 ${25 / speed}s ease-in-out infinite;
          transform-origin: center;
        }
        
        .veil-flow-4 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            ellipse 400px 600px at 80% 70%, 
            rgba(11, 196, 238, 0.18) 0%, 
            rgba(11, 196, 238, 0.06) 45%,
            transparent 75%
          );
          animation: veilFlow4 ${40 / speed}s ease-in-out infinite reverse;
          transform-origin: center;
        }
        
        .veil-overlay-1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg, 
            rgba(4, 128, 254, 0.15) 0%, 
            transparent 30%,
            rgba(11, 196, 238, 0.12) 70%,
            transparent 100%
          );
          animation: veilOverlay1 ${20 / speed}s ease-in-out infinite;
        }
        
        .veil-overlay-2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            -45deg, 
            transparent 0%, 
            rgba(4, 128, 254, 0.08) 25%,
            transparent 50%,
            rgba(11, 196, 238, 0.06) 75%,
            transparent 100%
          );
          animation: veilOverlay2 ${28 / speed}s ease-in-out infinite reverse;
        }
        
        .veil-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 15% 25%, rgba(4, 128, 254, 0.6), transparent),
            radial-gradient(1px 1px at 35% 45%, rgba(11, 196, 238, 0.4), transparent),
            radial-gradient(1px 1px at 65% 15%, rgba(4, 128, 254, 0.5), transparent),
            radial-gradient(2px 2px at 85% 35%, rgba(11, 196, 238, 0.3), transparent),
            radial-gradient(1px 1px at 25% 75%, rgba(4, 128, 254, 0.4), transparent),
            radial-gradient(1px 1px at 75% 85%, rgba(11, 196, 238, 0.5), transparent),
            radial-gradient(2px 2px at 45% 65%, rgba(4, 128, 254, 0.3), transparent);
          background-size: 250px 250px;
          animation: veilParticleFloat ${45 / speed}s linear infinite;
          opacity: 0.8;
        }
        
        @keyframes veilFlow1 {
          0% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          25% { 
            transform: translate(40px, -60px) rotate(2deg) scale(1.1);
            opacity: 0.9;
          }
          50% { 
            transform: translate(-20px, -30px) rotate(-1deg) scale(1.05);
            opacity: 1;
          }
          75% { 
            transform: translate(60px, 40px) rotate(3deg) scale(0.95);
            opacity: 0.8;
          }
          100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.6;
          }
        }
        
        @keyframes veilFlow2 {
          0% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.5;
          }
          33% { 
            transform: translate(-50px, 30px) rotate(-2deg) scale(1.08);
            opacity: 0.8;
          }
          66% { 
            transform: translate(30px, -40px) rotate(1deg) scale(0.92);
            opacity: 0.9;
          }
          100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.5;
          }
        }
        
        @keyframes veilFlow3 {
          0% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          40% { 
            transform: translate(80px, -20px) rotate(4deg) scale(1.15);
            opacity: 0.7;
          }
          80% { 
            transform: translate(-40px, 60px) rotate(-2deg) scale(0.9);
            opacity: 0.6;
          }
          100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.4;
          }
        }
        
        @keyframes veilFlow4 {
          0% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translate(-70px, -50px) rotate(-3deg) scale(1.2);
            opacity: 0.6;
          }
          100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.3;
          }
        }
        
        @keyframes veilOverlay1 {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.02) rotate(1deg);
          }
        }
        
        @keyframes veilOverlay2 {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 0.6;
            transform: scale(0.98) rotate(-1deg);
          }
        }
        
        @keyframes veilParticleFloat {
          0% { 
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-10px) translateX(-15px);
            opacity: 1;
          }
          75% { 
            transform: translateY(-30px) translateX(5px);
            opacity: 0.7;
          }
          100% { 
            transform: translateY(-50px) translateX(-10px);
            opacity: 0.5;
          }
        }
        
        /* Enhanced effects for dark themes */
        @media (prefers-color-scheme: dark) {
          .veil-flow-1 {
            background: radial-gradient(
              ellipse 800px 400px at 30% 50%, 
              rgba(4, 128, 254, 0.4) 0%, 
              rgba(4, 128, 254, 0.15) 30%,
              transparent 60%
            );
          }
          
          .veil-flow-2 {
            background: radial-gradient(
              ellipse 600px 800px at 70% 30%, 
              rgba(11, 196, 238, 0.35) 0%, 
              rgba(11, 196, 238, 0.12) 35%,
              transparent 65%
            );
          }
          
          .veil-flow-3 {
            background: radial-gradient(
              ellipse 1000px 300px at 20% 80%, 
              rgba(4, 128, 254, 0.3) 0%, 
              rgba(4, 128, 254, 0.08) 40%,
              transparent 70%
            );
          }
          
          .veil-flow-4 {
            background: radial-gradient(
              ellipse 400px 600px at 80% 70%, 
              rgba(11, 196, 238, 0.25) 0%, 
              rgba(11, 196, 238, 0.1) 45%,
              transparent 75%
            );
          }
          
          .veil-overlay-1 {
            background: linear-gradient(
              135deg, 
              rgba(4, 128, 254, 0.2) 0%, 
              transparent 30%,
              rgba(11, 196, 238, 0.18) 70%,
              transparent 100%
            );
          }
          
          .veil-particles {
            background-image: 
              radial-gradient(2px 2px at 15% 25%, rgba(4, 128, 254, 0.8), transparent),
              radial-gradient(1px 1px at 35% 45%, rgba(11, 196, 238, 0.6), transparent),
              radial-gradient(1px 1px at 65% 15%, rgba(4, 128, 254, 0.7), transparent),
              radial-gradient(2px 2px at 85% 35%, rgba(11, 196, 238, 0.5), transparent),
              radial-gradient(1px 1px at 25% 75%, rgba(4, 128, 254, 0.6), transparent),
              radial-gradient(1px 1px at 75% 85%, rgba(11, 196, 238, 0.7), transparent),
              radial-gradient(2px 2px at 45% 65%, rgba(4, 128, 254, 0.5), transparent);
          }
        }
        
        /* Ensure hardware acceleration */
        .veil-flow-1, .veil-flow-2, .veil-flow-3, .veil-flow-4,
        .veil-overlay-1, .veil-overlay-2, .veil-particles {
          will-change: transform, opacity;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default DarkVeilBackground;