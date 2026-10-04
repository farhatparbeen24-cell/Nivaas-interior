'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getGeneralConsultationLink } from '@/lib/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <aside
      aria-label="Quick WhatsApp assistance"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] text-white border border-[#2A2A2A] px-3.5 py-2 rounded-full text-xs shadow-xl animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with our Lead Architect</span>
          <button
            onClick={() => setTooltipVisible(false)}
            aria-label="Dismiss tooltip"
            className="text-neutral-400 hover:text-white ml-1"
          >
            <X size={13} />
          </button>
        </div>
      )}

      <a
        href={getGeneralConsultationLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nivaas Interiors on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-[#E5FF6E] text-[#111111] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2330F5]"
      >
        <MessageSquare size={24} className="fill-current text-[#111111]" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#111111]" />
      </a>
    </aside>
  );
};
