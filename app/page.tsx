import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { ProjectsFeed } from '@/components/ProjectsFeed';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Process } from '@/components/Process';
import { Packages } from '@/components/Packages';
import { WhyUs } from '@/components/WhyUs';
import { TestimonialsFaq } from '@/components/TestimonialsFaq';
import { FinalCtaFooter } from '@/components/FinalCtaFooter';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      {/* 1. Sticky / Blur Navbar */}
      <Navbar />

      {/* 2. Hero Section (Lime #E5FF6E) + Feed Mockup + Partner Strip */}
      <Hero />

      {/* 3. Services Section (Dark #111111) */}
      <Services />

      {/* 4. Projects Feed Section (White #FFFFFF) */}
      <ProjectsFeed />

      {/* 5. Before & After Transformation Slider (Dark #111111) */}
      <BeforeAfter />

      {/* 6. Process Timeline Section (White #FFFFFF) */}
      <Process />

      {/* 7. Packages & Pricing Section (Dark #111111) */}
      <Packages />

      {/* 8. Why Choose Us / Trust Metrics & Promises (White #FFFFFF) */}
      <WhyUs />

      {/* 9. Testimonials & FAQ Section (Dark #111111) */}
      <TestimonialsFaq />

      {/* 10. Final CTA & 4-Column Footer (Dark #111111 with huge Lime Pill) */}
      <FinalCtaFooter />

      {/* Floating Sticky WhatsApp Interaction */}
      <FloatingWhatsApp />
    </main>
  );
}
