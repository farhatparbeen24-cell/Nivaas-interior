'use client';

import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, Clock, ArrowUpRight, Instagram, Youtube, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { getGeneralConsultationLink, getWhatsAppLink } from '@/lib/whatsapp';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const FinalCtaFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#111111] text-white pt-24 pb-12 bg-dark-grid">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* FINAL CTA BLOCK (Current Style) */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <Reveal direction="up">
            {/* Center Geometric Studio Mark */}
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mx-auto mb-6 text-[#E5FF6E]">
              <div className="grid grid-cols-2 gap-1 w-5 h-5">
                <span className="bg-[#E5FF6E] rounded-xs" />
                <span className="bg-[#E5FF6E]/40 rounded-xs" />
                <span className="bg-[#E5FF6E]/40 rounded-xs" />
                <span className="bg-[#E5FF6E] rounded-xs" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-[48px] font-medium font-heading tracking-[-0.03em] leading-[1.1] text-white mb-10 max-w-2xl mx-auto">
              Let&apos;s design a home you&apos;ll love coming back to.
            </h2>
          </Reveal>

          {/* Huge Full-Width Lime Button */}
          <Reveal direction="up" delay={0.1}>
            <a
              href={getGeneralConsultationLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-[#E5FF6E] hover:bg-[#D4F04F] text-[#111111] h-20 sm:h-24 rounded-full flex items-center justify-center text-xl sm:text-3xl font-semibold font-heading tracking-tight transition-all duration-200 active:scale-[0.99] shadow-2xl hover:shadow-[0_0_40px_rgba(229,255,110,0.3)] mb-4"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                Book free consultation →
              </span>
            </a>
          </Reveal>

          {/* Grid-line Frame with Two Bordered Cells (Current Style) */}
          <Reveal direction="up" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#2A2A2A] rounded-full overflow-hidden bg-[#1A1A1A]">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="py-4 px-6 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:bg-[#222222] transition-colors border-b sm:border-b-0 sm:border-r border-[#2A2A2A]"
              >
                <Phone size={15} className="text-[#E5FF6E]" />
                <span>Call us: {siteConfig.contact.phone}</span>
              </a>

              <a
                href={getWhatsAppLink('Hi Nivaas, I would like to book a site discussion for my home.')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:bg-[#222222] transition-colors"
              >
                <MessageSquare size={15} className="text-[#E5FF6E]" />
                <span>WhatsApp: Instant Reply</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* FOOTER 4 COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-16 border-t border-[#2A2A2A] pb-16">
          {/* Column 1: Studio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E5FF6E] rounded-sm" />
              <span className="text-xl font-bold font-heading tracking-tight text-white">
                {siteConfig.brand.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
              {siteConfig.brand.description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full text-[11px] text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Accepting new projects in Odisha
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {siteConfig.services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="hover:text-[#E5FF6E] transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-400 mb-4">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#E5FF6E] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#E5FF6E] shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#E5FF6E] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#E5FF6E] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Links & Social */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-400 mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E5FF6E] transition-colors"
              >
                <Instagram size={14} />
                <span>Instagram @nivaasinteriors</span>
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E5FF6E] transition-colors"
              >
                <Youtube size={14} />
                <span>YouTube Project Tours</span>
              </a>
              <a
                href={siteConfig.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E5FF6E] transition-colors"
              >
                <MapPin size={14} />
                <span>View Studio on Google Maps</span>
              </a>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A]">
              <p className="text-[11px] text-neutral-400">
                10-Year Woodwork Warranty · Fixed Handover Guarantee
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Nivaas Interiors. All rights reserved.</p>
          <p className="text-neutral-400">
            Designed and built with care for discerning homeowners.
          </p>
        </div>
      </div>
    </footer>
  );
};
