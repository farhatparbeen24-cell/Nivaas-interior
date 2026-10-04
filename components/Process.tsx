'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Reveal } from './ui/Reveal';

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative bg-[#FFFFFF] text-[#111111] py-20 md:py-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <Reveal direction="up">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#2A2AA8] block mb-2">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium font-heading tracking-[-0.03em] leading-[1.15] text-[#111111] mb-3">
              A clear path from idea to handover.
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              No guesswork, no indefinite waits. Every phase has clear deliverables, weekly updates, and milestone sign-offs.
            </p>
          </div>
        </Reveal>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-neutral-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 relative z-10">
            {siteConfig.processSteps.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08} direction="up">
                <div className="flex flex-col h-full bg-neutral-50 lg:bg-transparent p-5 lg:p-0 rounded-xl border border-neutral-200 lg:border-0">
                  {/* Step number dot & timing pill */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#111111] text-[#E5FF6E] flex items-center justify-center font-mono text-sm font-bold shadow-md shrink-0">
                      {step.step}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-neutral-200 text-[#111111] text-xs font-semibold">
                      {step.timing}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#111111] font-heading mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed flex-1 mb-4">
                    {step.description}
                  </p>

                  {/* Deliverable badge */}
                  <div className="pt-3 border-t border-neutral-200 text-[11px] text-neutral-700 flex items-start gap-1.5 font-medium">
                    <CheckCircle2 size={13} className="text-[#2330F5] shrink-0 mt-0.5" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
