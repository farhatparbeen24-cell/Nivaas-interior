'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileText, Clock, ShieldCheck, Smartphone, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Reveal } from './ui/Reveal';

function CountUp({ target, suffix = '', duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <div ref={ref} className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
      {count}
      <span className="text-[#2330F5]">{suffix}</span>
    </div>
  );
}

export const WhyUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    FileText: <FileText size={20} className="text-[#2330F5]" />,
    Clock: <Clock size={20} className="text-[#2330F5]" />,
    ShieldCheck: <ShieldCheck size={20} className="text-[#2330F5]" />,
    Smartphone: <Smartphone size={20} className="text-[#2330F5]" />,
  };

  return (
    <section id="why-us" className="relative bg-[#FFFFFF] text-[#111111] py-20 md:py-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <Reveal direction="up">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#2A2AA8] block mb-2">
              WHY NIVAAS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium font-heading tracking-[-0.03em] leading-[1.15] text-[#111111] mb-3">
              Built on trust, finished on time.
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Interior fit-outs have a reputation for endless delays and hidden invoices. We designed our studio to solve both forever.
            </p>
          </div>
        </Reveal>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {siteConfig.trustStats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08} direction="up">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 text-left hover:border-neutral-400 transition-colors">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="text-sm font-semibold text-[#111111] mt-2">{stat.label}</p>
                <p className="text-xs text-neutral-500 mt-1">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 4 Trust Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.whyUsPromises.map((promise, idx) => (
            <Reveal key={promise.title} delay={idx * 0.08} direction="up">
              <div className="flex gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-sm">
                  {iconMap[promise.icon]}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#111111] font-heading mb-1.5">
                    {promise.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
