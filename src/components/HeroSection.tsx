'use client';

import React from 'react';
import { ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden gradient-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-custom flex items-center justify-center min-h-screen">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm font-medium mb-8 animate-pulse">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            🎉 New: Advanced Analytics Dashboard
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build Amazing{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge web solutions. We create fast, 
            scalable, and beautiful applications that drive real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-4 group"
            >
              Start Your Project
              <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
            </a>
            
            <button className="flex items-center text-white text-lg font-semibold hover:text-gray-200 transition-colors group">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                <PlayIcon className="w-6 h-6 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
