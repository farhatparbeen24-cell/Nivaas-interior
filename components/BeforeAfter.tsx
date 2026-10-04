'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, MoveHorizontal, CheckCircle, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Reveal } from './ui/Reveal';

export const BeforeAfter: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = siteConfig.beforeAfter[activeTab];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="transformations" className="relative bg-[#111111] text-white py-20 md:py-32 bg-dark-grid border-b border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal direction="up">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#E5FF6E] block mb-3">
              THE TRANSFORMATION
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-medium font-heading tracking-[-0.03em] leading-[1.1] text-white">
              See the difference design makes.
            </h2>
          </Reveal>

          {/* Room Selection Tabs */}
          <Reveal direction="up" delay={0.1}>
            <div
              role="tablist"
              aria-label="Select room transformation"
              className="flex items-center gap-1.5 p-1 bg-[#1A1A1A] rounded-full border border-[#2A2A2A]"
            >
              {siteConfig.beforeAfter.map((item, idx) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={activeTab === idx}
                  onClick={() => {
                    setActiveTab(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    activeTab === idx
                      ? 'bg-[#E5FF6E] text-[#111111] font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.room}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Comparison Slider Component */}
        <Reveal direction="up" delay={0.15}>
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A] shadow-2xl">
            {/* Aspect container */}
            <div
              ref={containerRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                setIsDragging(true);
                if (e.touches[0]) handleMove(e.touches[0].clientX);
              }}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] cursor-ew-resize select-none overflow-hidden"
              tabIndex={0}
              role="slider"
              aria-label="Before and after transformation comparison"
              aria-valuenow={sliderPosition}
              aria-valuemin={0}
              aria-valuemax={100}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(0, prev - 5));
                if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(100, prev + 5));
              }}
            >
              {/* After Image (Background layer - 100% width) */}
              <div className="absolute inset-0">
                <Image
                  src={currentItem.afterImage}
                  alt={`After: ${currentItem.title}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                {/* AFTER label */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-xs font-semibold text-[#E5FF6E] border border-[#E5FF6E]/30 shadow-md">
                  AFTER · NIVAAS FINISH
                </div>
              </div>

              {/* Before Image (Clipped overlay layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={currentItem.beforeImage}
                  alt={`Before: ${currentItem.title}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover grayscale contrast-105"
                  referrerPolicy="no-referrer"
                />
                {/* BEFORE label */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-xs font-semibold text-neutral-300 border border-white/20 shadow-md">
                  BEFORE · BARE SHELL
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#E5FF6E] shadow-[0_0_12px_rgba(229,255,110,0.8)] z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Draggable Circle Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111111] border-2 border-[#E5FF6E] text-[#E5FF6E] flex items-center justify-center shadow-xl active:scale-95 transition-transform">
                  <MoveHorizontal size={18} />
                </div>
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="p-5 sm:p-6 bg-[#1A1A1A] border-t border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-semibold text-white">{currentItem.title}</h4>
                  <span className="text-xs text-neutral-500">·</span>
                  <span className="text-xs text-neutral-400">{currentItem.location}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400">{currentItem.details}</p>
              </div>

              <div className="flex items-center gap-2 sm:self-center shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#262626] border border-[#333333] text-xs font-medium text-white">
                  <Clock size={13} className="text-[#E5FF6E]" />
                  Completed in {currentItem.days}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#E5FF6E]/10 border border-[#E5FF6E]/30 text-xs font-medium text-[#E5FF6E]">
                  <CheckCircle size={13} />
                  Exactly as rendered
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
