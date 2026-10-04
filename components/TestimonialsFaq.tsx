'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Plus, Minus, Star, Quote, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Reveal } from './ui/Reveal';

export const TestimonialsFaq: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = siteConfig.testimonials;
  const currentTestimonial = testimonials[activeTestimonial];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials-faq" className="relative bg-[#111111] text-white py-20 md:py-32 bg-dark-grid border-b border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Testimonials Header with Current-style square arrow cells */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal direction="up">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#E5FF6E] block mb-3">
              CLIENT STORIES
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-medium font-heading tracking-[-0.03em] leading-[1.1] text-white">
              Homes our clients love living in.
            </h2>
          </Reveal>

          {/* Current-style Square 1px-Bordered Navigation Cells */}
          <Reveal direction="up" delay={0.1}>
            <div className="flex items-center">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-14 h-14 border border-[#2A2A2A] bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#262626] hover:border-neutral-500 transition-colors cursor-pointer"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-14 h-14 border-t border-b border-r border-[#2A2A2A] bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#262626] hover:border-neutral-500 transition-colors cursor-pointer"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Current-style 2-Cell Bordered Testimonial Card */}
        <Reveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#2A2A2A] rounded-2xl overflow-hidden bg-[#1A1A1A] mb-24 shadow-xl">
            {/* Left Cell (Quote & Author) - 2 cols on lg */}
            <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2A2A2A]">
              <div className="space-y-6">
                <Quote size={28} className="text-[#E5FF6E] opacity-80" />
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-heading font-normal leading-relaxed">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author row */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#262626]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#333333] shrink-0">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {currentTestimonial.role} · {currentTestimonial.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Cell (Property Scope Badge / Stamp) */}
            <div className="p-8 sm:p-12 flex flex-col justify-between bg-[#151515]">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-[#E5FF6E]">
                  PROJECT DETAILS
                </span>
                <h4 className="text-xl font-semibold font-heading text-white">
                  {currentTestimonial.propertyType}
                </h4>
                <div className="space-y-2 pt-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#E5FF6E]" />
                    <span>{currentTestimonial.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#E5FF6E]" />
                    <span>10-Year Woodwork Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#E5FF6E]" />
                    <span>100% 3D Render Match</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#262626] flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>VERIFIED RESIDENTIAL CLIENT</span>
                <span className="text-[#E5FF6E]">0{activeTestimonial + 1} / 0{testimonials.length}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FAQ Accordion Sub-section */}
        <div className="max-w-3xl mx-auto pt-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#E5FF6E] block mb-2">
                FREQUENT QUESTIONS
              </span>
              <h3 className="text-2xl sm:text-4xl font-medium font-heading tracking-tight text-white">
                Everything you need to know.
              </h3>
            </div>
          </Reveal>

          <div className="space-y-3">
            {siteConfig.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={idx} delay={idx * 0.04} direction="up">
                  <div className="border border-[#2A2A2A] rounded-xl overflow-hidden bg-[#1A1A1A] transition-colors">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5FF6E]"
                    >
                      <span className="text-sm sm:text-base font-medium font-heading text-white">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#262626] border border-[#333333] flex items-center justify-center text-neutral-300 shrink-0">
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-[#262626] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
