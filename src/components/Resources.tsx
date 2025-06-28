'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import {
  DocumentTextIcon,
  BookOpenIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const Resources = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const resources = [
    {
      icon: DocumentTextIcon,
      title: 'Documentation',
      description: 'Comprehensive guides and API references for developers.',
      link: '#docs',
      color: 'bg-blue-500',
    },
    {
      icon: BookOpenIcon,
      title: 'Blog & Insights',
      description: 'Latest trends, tutorials, and industry insights.',
      link: '#blog',
      color: 'bg-green-500',
    },
    {
      icon: VideoCameraIcon,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and webinars.',
      link: '#videos',
      color: 'bg-red-500',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Community Forum',
      description: 'Connect with other developers and get support.',
      link: '#forum',
      color: 'bg-purple-500',
    },
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed project timelines during our initial consultation.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes, we offer comprehensive post-launch support including hosting, maintenance, updates, and technical support. We have various support packages to meet different needs and budgets.',
    },
    {
      question: 'Can you work with our existing design or brand guidelines?',
      answer: 'Absolutely! We can work with your existing brand guidelines, design assets, and style guides. We also offer design services if you need help creating or updating your brand identity.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and various cloud platforms. We stay current with the latest technologies to ensure your project uses the best tools available.',
    },
    {
      question: 'Do you offer mobile app development?',
      answer: 'Yes, we develop both native and cross-platform mobile applications. We can create iOS and Android apps, as well as progressive web apps (PWAs) that work across all devices.',
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We maintain regular communication through scheduled meetings, progress reports, and project management tools. You will have direct access to your project manager and can track progress in real-time.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed quotes after understanding your requirements. We also offer monthly retainer options for ongoing work.',
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Yes, we build SEO-friendly websites and can help with digital marketing strategies. While development is our core focus, we partner with marketing specialists to provide comprehensive digital solutions.',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Resources Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Resources & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed with your project. From documentation 
              to community support, we have got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className={`w-12 h-12 ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {resource.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-600 font-semibold text-sm">
                    Explore →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We have answers. Here are some of the most common 
              questions we receive from our clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We would love to help you find the answers.
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
