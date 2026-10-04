'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Maximize2, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '@/lib/site.config';
import { getProjectInquiryLink } from '@/lib/whatsapp';
import { Button } from './Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl text-white shadow-2xl flex flex-col"
      >
        {/* Top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#1A1A1A]/95 backdrop-blur-md border-b border-[#2A2A2A]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold tracking-[0.08em] text-[#E5FF6E] uppercase">
              {project.roomTag}
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs text-neutral-400">{project.area}</span>
          </div>

          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                aria-label="Previous project"
                className="w-8 h-8 rounded-full border border-[#2A2A2A] flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                aria-label="Next project"
                className="w-8 h-8 rounded-full border border-[#2A2A2A] flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full bg-[#262626] border border-[#333333] flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors ml-2"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Hero image container */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-neutral-900 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs text-white/90 border border-white/10">
              <Clock size={12} className="text-[#E5FF6E]" />
              Delivered in {project.timeline}
            </span>
          </div>
        </div>

        {/* Content details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-2 text-xs sm:text-sm text-neutral-400">
                <span className="inline-flex items-center gap-1 text-neutral-300">
                  <MapPin size={14} className="text-[#E5FF6E]" />
                  {project.location}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Maximize2 size={14} />
                  {project.area}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} />
                  Completed {project.year}
                </span>
              </div>
            </div>

            <Button
              href={getProjectInquiryLink(project.title, project.location)}
              target="_blank"
              variant="lime"
              size="md"
              icon={<MessageCircle size={16} />}
              className="shrink-0"
            >
              Get Similar Design
            </Button>
          </div>

          <div className="border-t border-[#2A2A2A] pt-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400 mb-2">
              Project Overview
            </h4>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Scope list */}
          <div className="border-t border-[#2A2A2A] pt-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400 mb-3">
              Included Scope & Joinery
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#262626]/60 border border-[#2E2E2E] text-xs text-neutral-200"
                >
                  <CheckCircle2 size={14} className="text-[#E5FF6E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
