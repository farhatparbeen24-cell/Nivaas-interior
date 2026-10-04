'use client';

import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { getPackageQuoteLink } from '@/lib/whatsapp';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const Packages: React.FC = () => {
  const [packageType, setPackageType] = useState<'full' | 'single'>('full');

  const currentPackages =
    packageType === 'full' ? siteConfig.packagesFullHome : siteConfig.packagesSingleRoom;

  return (
    <section id="packages" className="relative bg-[#111111] text-white py-20 md:py-32 bg-dark-grid border-b border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal direction="up">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#E5FF6E] block mb-3">
              PACKAGES
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-medium font-heading tracking-[-0.03em] leading-[1.1] text-white mb-3">
              Transparent pricing. No surprises.
            </h2>
            <p className="text-base text-neutral-400">
              {packageType === 'full'
                ? 'Indicative rates per sq ft. Final quote after site visit and design approval.'
                : 'Modular room packages designed for standalone upgrades and quick turnaround.'}
            </p>
          </Reveal>

          {/* Toggle Full Home vs Single Room */}
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-1 p-1 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] mt-6">
              <button
                onClick={() => setPackageType('full')}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  packageType === 'full'
                    ? 'bg-[#E5FF6E] text-[#111111] shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Full Home Turnkey
              </button>
              <button
                onClick={() => setPackageType('single')}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  packageType === 'single'
                    ? 'bg-[#E5FF6E] text-[#111111] shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Single Room Upgrades
              </button>
            </div>
          </Reveal>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {currentPackages.map((pkg, idx) => {
            const isFeatured = pkg.popular;
            return (
              <Reveal key={pkg.id} delay={idx * 0.08} direction="up" className="h-full">
                <div
                  className={`relative flex flex-col justify-between h-full rounded-2xl p-7 transition-all duration-300 ${
                    isFeatured
                      ? 'bg-[#1A1A1A] border-2 border-[#E5FF6E] shadow-[0_0_30px_rgba(229,255,110,0.15)] md:-translate-y-2'
                      : 'bg-[#1A1A1A] border border-[#2A2A2A] hover:border-neutral-700'
                  }`}
                >
                  {/* Popular Badge */}
                  {isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#E5FF6E] text-[#111111] text-[11px] font-bold rounded-full uppercase tracking-wider shadow-md">
                      Most Chosen in Bhubaneswar
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold font-heading text-white">{pkg.name}</h3>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed min-h-[36px] mb-5">
                      {pkg.tagline}
                    </p>

                    {/* Price figure */}
                    <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-[#2A2A2A]">
                      <span className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-neutral-400">{pkg.unit}</span>
                    </div>

                    {/* Feature list */}
                    <div className="space-y-3 mb-8">
                      <p className="text-[11px] uppercase tracking-[0.08em] font-semibold text-neutral-400">
                        What&apos;s Included:
                      </p>
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-snug">
                          <Check
                            size={14}
                            className={`shrink-0 mt-0.5 ${
                              isFeatured ? 'text-[#E5FF6E]' : 'text-neutral-400'
                            }`}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA button */}
                  <div>
                    <Button
                      href={getPackageQuoteLink(pkg.name, `${pkg.price} ${pkg.unit}`)}
                      target="_blank"
                      variant={isFeatured ? 'lime' : 'dark-outline'}
                      size="md"
                      className="w-full text-xs font-semibold"
                      icon={<MessageCircle size={15} />}
                    >
                      {pkg.ctaText}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-neutral-500 mt-10">
          *All rates are indicative. Final quotation provided in an itemised Bill of Quantities after free site laser measurement.
        </p>
      </div>
    </section>
  );
};
