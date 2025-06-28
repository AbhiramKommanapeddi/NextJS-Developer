'use client';

import React from 'react';

const Partners = () => {
  // Placeholder partner logos - in a real project, these would be actual company logos
  const partners = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'DigitalFirst', logo: 'DF' },
    { name: 'CloudSolutions', logo: 'CS' },
    { name: 'DataDriven', logo: 'DD' },
    { name: 'FutureWeb', logo: 'FW' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'SmartTech', logo: 'ST' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">
            Trusted by industry leaders and innovative companies worldwide
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center group cursor-pointer"
            >
              {/* Placeholder logo - Replace with actual logos */}
              <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <span className="text-gray-700 font-bold text-sm">{partner.logo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Join 500+ companies that trust us with their digital transformation
          </p>
        </div>
      </div>

      {/* Alternative: Scrolling logos version for better visual impact */}
      <div className="mt-16 relative overflow-hidden">
        <div className="flex animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-all duration-300">
                <span className="text-gray-700 font-bold">{partner.logo}</span>
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};

export default Partners;
