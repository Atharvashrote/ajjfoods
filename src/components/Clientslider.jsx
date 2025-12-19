import React from 'react';

export default function ContinuousLogoSlider() {
  const logos = [
    { name: 'Client 1', url: '/images/c1.jpg' },
    { name: 'Client 2', url: '/images/c2.jpg' },
    { name: 'Client 3', url: '/images/c3.jpg' },
    { name: 'Client 4', url: '/images/c4.jpg' },
    { name: 'Client 5', url: '/images/c5.jpg' },
    { name: 'Client 6', url: '/images/c6.jpg' },
    { name: 'Client 7', url: '/images/c7.jpg' },
    { name: 'Client 8', url: '/images/c8.jpg' }, 
  ];

  return (
    <div className="w-full flex justify-center bg-linear-to-br from-amber-400 via-yellow-500 to-orange-400 py-12">
      <div className="w-full max-w-7xl px-4">
      {/* Continuous Slider Container */}
      <div className="relative overflow-hidden bg-white/30 backdrop-blur-md shadow-xl py-8 rounded-2xl border border-white/20">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white/30 to-transparent z-10" />

        {/* Slider Track */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="shrink-0 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                style={{ width: '180px', height: '80px' }}
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="shrink-0 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                style={{ width: '180px', height: '80px' }}
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      </div>
    </div>
  );
}