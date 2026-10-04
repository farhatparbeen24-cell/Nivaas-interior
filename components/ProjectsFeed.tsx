'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Maximize2, Calendar, ArrowUpRight, Filter } from 'lucide-react';
import { siteConfig, ProjectItem } from '@/lib/site.config';
import { ProjectModal } from './ui/Modal';
import { Reveal } from './ui/Reveal';

type CategoryFilter = 'All' | 'Living' | 'Kitchen' | 'Bedroom' | 'Full Home' | 'Office';

export const ProjectsFeed: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: CategoryFilter[] = ['All', 'Living', 'Kitchen', 'Bedroom', 'Full Home', 'Office'];

  const filteredProjects =
    activeFilter === 'All'
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeFilter);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = siteConfig.projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % siteConfig.projects.length;
    setSelectedProject(siteConfig.projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = siteConfig.projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + siteConfig.projects.length) % siteConfig.projects.length;
    setSelectedProject(siteConfig.projects[prevIndex]);
  };

  return (
    <section id="projects" className="relative bg-[#FFFFFF] text-[#111111] py-20 md:py-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal direction="up">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#2A2AA8] block mb-2">
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium font-heading tracking-[-0.03em] leading-[1.15] text-[#111111]">
              Recent projects, as they happen.
            </h2>
          </Reveal>

          {/* Filter Pills */}
          <Reveal direction="up" delay={0.1}>
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-full border border-neutral-200"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeFilter === cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'text-neutral-600 hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 9 Projects Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.05} direction="up">
              <div
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col justify-between h-full bg-white border border-[#E6E6E6] rounded-xl overflow-hidden hover:border-[#111111] hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-[#111111] tracking-wide shadow-sm">
                      {project.roomTag}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Hover "View" prompt */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-md">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-[#111111] group-hover:text-[#2330F5] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#6B6B6B] mt-1.5 line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="mt-4 pt-3 border-t border-[#E6E6E6] flex items-center justify-between text-[11px] text-neutral-500">
                    <span className="flex items-center gap-1 font-medium text-neutral-700">
                      <MapPin size={12} className="text-[#2330F5]" />
                      {project.location}
                    </span>
                    <div className="flex items-center gap-2">
                      <span>{project.area}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </section>
  );
};
