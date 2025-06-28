'use client';

import React from 'react';

const Community = () => {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Founder & CEO',
      image: '/api/placeholder/150/150',
      description: 'Visionary leader with 10+ years in digital transformation.',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: '/api/placeholder/150/150',
      description: 'Full-stack expert specializing in modern web technologies.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Design Director',
      image: '/api/placeholder/150/150',
      description: 'Award-winning designer creating beautiful user experiences.',
    },
    {
      name: 'Emily Johnson',
      role: 'Project Manager',
      image: '/api/placeholder/150/150',
      description: 'Ensures every project delivers on time and exceeds expectations.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries' },
    { number: '500+', label: 'Projects' },
    { number: '5', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our
            <span className="text-blue-600"> Amazing Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a diverse group of passionate professionals dedicated to creating 
            exceptional digital experiences. Our team combines creativity, technical expertise, 
            and strategic thinking to deliver outstanding results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Profile Image */}
              <div className="relative mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Journey in Numbers
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Since our founding, we have grown into a global team serving clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Culture & Values
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation First</h4>
                  <p className="text-gray-600">We embrace cutting-edge technologies and creative solutions to solve complex problems.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client Success</h4>
                  <p className="text-gray-600">Your success is our success. We go above and beyond to deliver exceptional results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                  <p className="text-gray-600">We invest in our team&apos;s growth and stay ahead of industry trends.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Join Our Team
              </h4>
              <p className="text-gray-600 mb-6">
                We&apos;re always looking for talented individuals who share our passion for 
                creating amazing digital experiences. Check out our open positions.
              </p>
              <a
                href="#careers"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                View Open Positions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
