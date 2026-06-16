"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { featuredProjects, projects } from "@/data/portfolio";
import FadeIn from "./FadeIn";
import Lightbox from "./Lightbox";

function CodeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#07090d]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#c9a45e] text-sm font-semibold tracking-normal mb-4">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe6] mb-4">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#b8c0cc] text-lg">
              Human-led, AI-assisted applications built through structured
              requirements, workflow design and iterative development.
            </p>
          </FadeIn>
        </div>

        {/* Featured Case Studies */}
        <FadeIn>
          <h3 className="text-lg font-bold text-[#f4efe6] mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#c9a45e]"></span>
            Case Studies
          </h3>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.name} delay={0.1 * index}>
              <article
                className="group rounded-lg bg-[#10151d] border transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
                style={{ borderColor: `${project.color}30` }}
              >
                {/* Card header */}
                <div className="p-6 border-b" style={{ borderColor: `${project.color}20` }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${project.color}15` }}
                      >
                        <project.icon className="w-5 h-5" style={{ color: project.color }} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#f4efe6]">{project.name}</h4>
                        <p className="text-xs font-medium" style={{ color: project.color }}>{project.tagline}</p>
                      </div>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#171f2a] text-[#b8c0cc] hover:text-[#c9a45e] transition-colors"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex-1 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-[#b8c0cc]/60 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-sm text-[#b8c0cc] leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#b8c0cc]/60 uppercase tracking-wide mb-1">Solution</p>
                    <p className="text-sm text-[#b8c0cc] leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#b8c0cc]/60 uppercase tracking-wide mb-2">Technical highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technical.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 text-xs font-medium text-[#b8c0cc] bg-[#171f2a] rounded-full border border-[#2a3441]/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key decision footer */}
                <div className="px-6 py-4 bg-[#0b1018] border-t border-[#2a3441]/30">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: project.color }} />
                    <p className="text-xs text-[#b8c0cc] italic leading-relaxed">{project.decision}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* All Projects */}
        <FadeIn>
          <h3 className="text-lg font-bold text-[#f4efe6] mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#c9a45e]"></span>
            All Projects
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={0.1 * index}>
              <article className="group flex flex-col h-full rounded-lg bg-[#10151d] border border-[#2a3441]/50 hover:border-[#c9a45e]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`View ${project.name} screenshots`}
                  className="group/thumb relative block w-full aspect-[16/10] overflow-hidden bg-[#0b1018] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9a45e]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.screenshotDesktop}
                    alt={project.screenshotAlt}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1018]/50 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300" />
                  <span className="pointer-events-none absolute bottom-2 right-2 px-2 py-1 rounded-md text-[10px] font-semibold bg-black/60 text-[#f4efe6] opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                    Click to expand
                  </span>
                </button>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <project.icon
                        className="w-6 h-6"
                        style={{ color: project.color }}
                      />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#171f2a] text-[#b8c0cc] hover:text-[#f4efe6] transition-colors"
                          aria-label={`${project.name} GitHub`}
                        >
                          <CodeIcon size={16} />
                        </a>
                      )}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#171f2a] text-[#b8c0cc] hover:text-[#c9a45e] transition-colors"
                        aria-label={`${project.name} Live Demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#f4efe6] mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
                    {project.tagline}
                  </p>
                  <p className="text-[#b8c0cc] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-[#b8c0cc] bg-[#171f2a] rounded-full border border-[#2a3441]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#0b1018] border-t border-[#2a3441]/30 flex gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-1.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-xs font-medium text-[#b8c0cc]">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {openIndex !== null && (
          <Lightbox
            project={projects[openIndex]}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </div>
    </section>
  );
}
