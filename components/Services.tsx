'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Check, Compass, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { getServiceInquiryLink } from '@/lib/whatsapp';
import { Reveal } from './ui/Reveal';

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative bg-[#111111] text-white py-20 md:py-32 bg-dark-grid border-b border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <Reveal direction="up">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#E5FF6E] block mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-medium font-heading tracking-[-0.03em] leading-[1.1] text-white mb-4">
              Every room, designed end to end.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              One team handles design, carpentry, electrical, false ceiling and styling, so you deal with one person, not ten vendors.
            </p>
          </div>
        </Reveal>

        {/* 6 Cards Grid (2x3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08} direction="up">
              <a
                href={getServiceInquiryLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between h-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 sm:p-7 hover:-translate-y-1 hover:border-[#E5FF6E] transition-all duration-300 relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5FF6E]"
              >
                {/* Visual Thumbnail */}
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-5 bg-[#262626]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-mono text-[#E5FF6E] border border-white/10">
                    {service.number}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium font-heading text-white group-hover:text-[#E5FF6E] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlight pills */}
                  <div className="space-y-1.5 pt-3 border-t border-[#262626]">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check size={12} className="text-[#E5FF6E] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore link */}
                <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">
                  <span>Explore specifications</span>
                  <div className="flex items-center gap-1 text-[#E5FF6E] group-hover:translate-x-1 transition-transform">
                    <span>Inquire</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
