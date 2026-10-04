'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Sparkles, Layers, Box, Compass, Hammer, ShieldCheck, Check, Heart, X } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { getGeneralConsultationLink } from '@/lib/whatsapp';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-[#E5FF6E] text-[#111111] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#D4F04F]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Hero Headings Zone */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2330F5]" />
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#111111]">
              INTERIOR DESIGN STUDIO · BHUBANESWAR
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-semibold font-heading tracking-[-0.04em] leading-[1.0] text-[#111111] text-balance">
            Homes designed around the way you live.
          </h1>

          <p className="text-base sm:text-lg md:text-[18px] text-[#3A3F1F] max-w-2xl mx-auto leading-relaxed">
            From first sketch to final handover, we design, build and style your home with{' '}
            <strong className="font-semibold text-[#111111]">fixed timelines</strong>,{' '}
            <strong className="font-semibold text-[#111111]">itemised costs</strong> and a{' '}
            <strong className="font-semibold text-[#111111]">10-year warranty</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              href={getGeneralConsultationLink()}
              target="_blank"
              variant="blue"
              size="lg"
              className="w-full sm:w-auto text-[15px] font-medium"
            >
              Get a free quote
            </Button>

            <Button
              onClick={() => setVideoModalOpen(true)}
              variant="ghost"
              size="lg"
              icon={<Play size={16} className="fill-current" />}
              className="w-full sm:w-auto text-[15px]"
            >
              Watch project tour
            </Button>
          </div>

          <p className="text-xs text-black/60 pt-1 flex items-center justify-center gap-1.5">
            <Sparkles size={13} className="text-[#2330F5]" />
            <span>Free 3D concept on every full-home project</span>
          </p>
        </div>

        {/* Hero Visual Mockup Frame with Floating Swatches */}
        <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
          {/* Floating Swatch Badges */}
          <div className="hidden lg:flex items-center gap-2 absolute -top-5 -left-8 z-20 px-3.5 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-black/10 shadow-lg animate-float-slow">
            <span className="w-5 h-5 rounded bg-[#9C6644] flex items-center justify-center text-white text-[10px] font-bold">
              W
            </span>
            <div className="text-left">
              <p className="text-[11px] font-semibold text-[#111111] leading-tight">BWP Marine Ply</p>
              <p className="text-[9px] text-neutral-500">10-Yr Guarantee</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute top-1/4 -right-10 z-20 px-3.5 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-black/10 shadow-lg animate-float-delayed">
            <span className="w-5 h-5 rounded bg-[#C0A080] flex items-center justify-center text-white text-[10px] font-bold">
              M
            </span>
            <div className="text-left">
              <p className="text-[11px] font-semibold text-[#111111] leading-tight">Calacatta Quartz</p>
              <p className="text-[9px] text-neutral-500">Non-Porous Surface</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute -bottom-4 -left-6 z-20 px-3.5 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-black/10 shadow-lg animate-float-alt">
            <span className="w-5 h-5 rounded bg-[#B8860B] flex items-center justify-center text-white text-[10px] font-bold">
              B
            </span>
            <div className="text-left">
              <p className="text-[11px] font-semibold text-[#111111] leading-tight">Brushed Brass</p>
              <p className="text-[9px] text-neutral-500">Anti-Tarnish Coating</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute bottom-10 -right-8 z-20 px-3.5 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-black/10 shadow-lg animate-float-slow">
            <span className="w-5 h-5 rounded bg-[#333333] flex items-center justify-center text-white text-[10px] font-bold">
              3D
            </span>
            <div className="text-left">
              <p className="text-[11px] font-semibold text-[#111111] leading-tight">Render Fidelity</p>
              <p className="text-[9px] text-neutral-500">1:1 Handover</p>
            </div>
          </div>

          {/* Current-Style Feed Mockup Card */}
          <div className="bg-white rounded-2xl border border-[#D4F04F] mockup-glow shadow-2xl overflow-hidden p-4 sm:p-6 text-left">
            {/* Mockup Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-100 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center text-xs font-bold font-heading">
                  N
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#111111] leading-tight">
                    Nivaas Studio Live Activity
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    Bhubaneswar & Cuttack Project Handover Feeds
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#E5FF6E]/60 text-[#111111] rounded-full text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Active Handover Cycle
                </span>
                <span className="text-neutral-400">·</span>
                <span className="text-[11px] text-neutral-500 font-mono">OCT 2026</span>
              </div>
            </div>

            {/* Mockup Grid - 6 Project Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {/* Tile 1 */}
              <div className="group rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50 hover:border-[#111111] transition-all">
                <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
                    alt="The Brass Residence"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-sm text-white text-[10px] rounded-full font-medium">
                    Patia · Living
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-[#111111]">The Brass Residence</h4>
                    <span className="text-[10px] text-neutral-400 font-mono">Day 58</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1 line-clamp-1">
                    Fluted acoustic panels & warm cove lighting completed.
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100 text-[10px] text-neutral-400">
                    <span>1,450 sq ft</span>
                    <span className="text-emerald-700 font-medium">Handover Ready ✓</span>
                  </div>
                </div>
              </div>

              {/* Tile 2 */}
              <div className="group rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50 hover:border-[#111111] transition-all">
                <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                    alt="Oak & Ivory Kitchen"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-sm text-white text-[10px] rounded-full font-medium">
                    Saheed Nagar · Kitchen
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-[#111111]">Oak and Ivory Kitchen</h4>
                    <span className="text-[10px] text-neutral-400 font-mono">Day 26</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1 line-clamp-1">
                    Calacatta quartz top & Blum soft-close installed.
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100 text-[10px] text-neutral-400">
                    <span>240 sq ft</span>
                    <span className="text-emerald-700 font-medium">Quality Checked ✓</span>
                  </div>
                </div>
              </div>

              {/* Tile 3 */}
              <div className="group rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50 hover:border-[#111111] transition-all">
                <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80"
                    alt="The Quiet Room"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-sm text-white text-[10px] rounded-full font-medium">
                    Jaydev Vihar · Bedroom
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-[#111111]">The Quiet Room</h4>
                    <span className="text-[10px] text-neutral-400 font-mono">Day 28</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1 line-clamp-1">
                    Bronze glass wardrobes & recessed ambient LEDs.
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100 text-[10px] text-neutral-400">
                    <span>320 sq ft</span>
                    <span className="text-emerald-700 font-medium">Handover Ready ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Good Company / Trust Logo Strip */}
        <div className="mt-16 pt-10 border-t border-black/10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#111111]/70 mb-6">
            TRUSTED BY 480+ HOMES · CERTIFIED MATERIALS & BUILDERS
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-black/10 rounded-xl overflow-hidden bg-white/40">
            {siteConfig.partners.map((partner, idx) => (
              <div
                key={partner.name}
                className={`py-4 px-3 flex items-center justify-center text-xs font-bold font-heading tracking-wider text-[#111111]/80 hover:bg-white hover:text-[#111111] transition-colors ${
                  idx !== 0 ? 'border-t sm:border-t-0 sm:border-l border-black/10' : ''
                }`}
              >
                {partner.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Project Tour Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="fixed inset-0" onClick={() => setVideoModalOpen(false)} />
          <div className="relative z-10 w-full max-w-3xl bg-[#111111] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
              <div>
                <h3 className="text-sm font-semibold text-white">Nivaas Studio · Project Walkthrough</h3>
                <p className="text-xs text-neutral-400">A look into finished turnkey homes in Patia & Khandagiri</p>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center text-neutral-300 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative aspect-video bg-neutral-900 flex items-center justify-center">
              {/* Visual player simulation */}
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="Walkthrough preview"
                fill
                className="object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 text-center p-6 space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-[#E5FF6E] text-[#111111] flex items-center justify-center mx-auto shadow-xl">
                  <Play size={24} className="fill-current ml-1" />
                </div>
                <h4 className="text-lg font-semibold text-white">Watch Real Site Handover</h4>
                <p className="text-xs text-neutral-300">
                  See how our 3D renders match 1:1 with real woodwork, lighting, and joinery execution.
                </p>
                <Button
                  href={getGeneralConsultationLink()}
                  target="_blank"
                  variant="lime"
                  size="sm"
                  className="text-xs"
                >
                  Book In-Person Site Visit →
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
