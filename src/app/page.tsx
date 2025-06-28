// WebbyWolf Landing Page - Fully Responsive Next.js Landing Page
// Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
// Responsive design for mobile (360px+), tablet (768px+), and desktop (1440px+)

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Partners from '@/components/Partners'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Community from '@/components/Community'
import Resources from '@/components/Resources'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Navigation Header - Fixed positioning for smooth scrolling */}
      <Header />
      
      {/* Main Content Areas */}
      <main className="overflow-x-hidden">
        {/* Hero Section - Above the fold content */}
        <HeroSection />
        
        {/* Partners Section - Social proof with logo carousel */}
        <Partners />
        
        {/* Features Section - Product highlights and benefits */}
        <Features />
        
        {/* Testimonials Section - Customer reviews and social proof */}
        <Testimonials />
        
        {/* Contact Form Section - Lead capture form */}
        <ContactForm />
        
        {/* Community/Team Section - About the team and culture */}
        <Community />
        
        {/* Resources/FAQ Section - Support and additional info */}
        <Resources />
      </main>
      
      {/* Footer - Navigation links and contact info */}
      <Footer />
    </>
  )
}
