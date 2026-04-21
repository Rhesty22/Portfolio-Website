import React from 'react';

const OrbAnimation = () => {
  return (
    <>
      <style>{`
        @keyframes orbFloat {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(300px, 100px);
          }
          50% {
            transform: translate(100px, 300px);
          }
          75% {
            transform: translate(400px, 150px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .orb-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          top: 0;
          left: 0;
        }

        .orb {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.6), rgba(6, 182, 212, 0.2), transparent);
          box-shadow: 0 0 100px rgba(6, 182, 212, 0.8), 0 0 200px rgba(6, 182, 212, 0.4);
          animation: orbFloat 15s infinite ease-in-out;
          filter: blur(3px);
        }

        .orb::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(168, 85, 247, 0.4),
            transparent 180deg
          );
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Purple orb */
        .orb-secondary {
          width: 200px;
          height: 200px;
          animation: orbFloat 20s infinite ease-in-out;
          animation-delay: -5s;
          background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.5), rgba(168, 85, 247, 0.15), transparent);
          box-shadow: 0 0 80px rgba(168, 85, 247, 0.6), 0 0 150px rgba(168, 85, 247, 0.3);
        }

        @media (max-width: 768px) {
          .orb {
            width: 200px;
            height: 200px;
          }

          .orb-secondary {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
      
      <div className="orb-container">
        <div className="orb" style={{ top: '-100px', right: '-100px' }}></div>
        <div className="orb orb-secondary" style={{ bottom: '-50px', left: '-100px' }}></div>
      </div>
    </>
  );
};

export default OrbAnimation;
