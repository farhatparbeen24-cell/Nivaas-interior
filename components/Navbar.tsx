'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { getGeneralConsultationLink } from '@/lib/whatsapp';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Before & After', href: '#transformations' },
    { label: 'Process', href: '#process' },
    { label: 'Packages', href: '#packages' },
    { label: 'Why Us', href: '#why-us' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111111]/90 backdrop-blur-md border-b border-[#2A2A2A] py-3.5 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo Zone */}
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-none"
            aria-label="Nivaas Interiors Home"
          >
            <span
              className={`w-3.5 h-3.5 rounded-sm transition-colors duration-200 ${
                scrolled ? 'bg-[#E5FF6E]' : 'bg-[#111111]'
              }`}
            />
            <span
              className={`text-2xl font-bold tracking-tighter font-heading transition-colors duration-200 ${
                scrolled ? 'text-white' : 'text-[#111111]'
              }`}
            >
              {siteConfig.brand.name}
            </span>
          </a>

          {/* Navigation Links Zone */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-[14px] font-medium"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 hover:opacity-100 ${
                  scrolled
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-[#111111]/75 hover:text-[#111111]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={getGeneralConsultationLink()}
              target="_blank"
              variant={scrolled ? 'lime' : 'ink'}
              size="sm"
              className="text-xs font-medium"
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-white hover:bg-white/10'
                : 'text-[#111111] hover:bg-black/10'
            }`}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#111111] text-white flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-[#2A2A2A]">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-[#E5FF6E] rounded-sm" />
              <span className="text-2xl font-bold tracking-tight">{siteConfig.brand.name}</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-neutral-400 hover:text-white rounded-lg border border-[#2A2A2A]"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-5 text-xl font-heading font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-[#E5FF6E] transition-colors py-2 flex items-center justify-between border-b border-[#222222]"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} className="text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#2A2A2A] space-y-3">
            <Button
              href={getGeneralConsultationLink()}
              target="_blank"
              variant="lime"
              size="lg"
              className="w-full text-sm font-semibold"
              icon={<MessageSquare size={16} />}
            >
              Book Free Consultation
            </Button>
            <p className="text-center text-xs text-neutral-500">
              Patia, Bhubaneswar · Mon–Sat 10AM–7:30PM
            </p>
          </div>
        </div>
      )}
    </>
  );
};
