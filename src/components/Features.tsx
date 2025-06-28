'use client';

import React from 'react';
import {
  RocketLaunchIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: RocketLaunchIcon,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with modern frameworks and best practices. Your users will love the instant loading times.',
      color: 'bg-blue-500',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSL encryption, secure authentication, and regular security audits.',
      color: 'bg-green-500',
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business. Deploy globally with just one click.',
      color: 'bg-purple-500',
    },
    {
      icon: CogIcon,
      title: 'Easy Integration',
      description: 'Seamlessly connect with your existing tools and systems. RESTful APIs and webhooks included.',
      color: 'bg-orange-500',
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Detailed insights and real-time analytics to help you make data-driven decisions.',
      color: 'bg-red-500',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile First Design',
      description: 'Responsive design that looks perfect on any device. Progressive Web App capabilities included.',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="text-blue-600"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your digital presence. 
            Our platform combines cutting-edge technology with intuitive design.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-blue-600 font-semibold text-sm">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their digital presence with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="#testimonials"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                See Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
