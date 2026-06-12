"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import { featuredProjects, projects } from "@/data/portfolio";
import FadeIn from "./FadeIn";

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
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              Human-led, AI-assisted applications built through structured
              requirements, workflow design and iterative development.
            </p>
          </FadeIn>
        </div>

        {/* Featured Case Studies */}
        <FadeIn>
          <h3 className="text-lg font-bold text-[#f9fafb] mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#f59e0b]"></span>
            Case Studies
          </h3>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.name} delay={0.1 * index}>
              <article
                className="group rounded-2xl bg-[#111827] border transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
                style={{ borderColor: `${project.color}30` }}
              >
                {/* Card header */}
                <div className="p-6 border-b" style={{ borderColor: `${project.color}20` }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${project.color}15` }}
                      >
                        <project.icon className="w-5 h-5" style={{ color: project.color }} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#f9fafb]">{project.name}</h4>
                        <p className="text-xs font-medium" style={{ color: project.color }}>{project.tagline}</p>
                      </div>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#1f2937] text-[#9ca3af] hover:text-[#f59e0b] transition-colors"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex-1 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-[#9ca3af]/60 uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-sm text-[#9ca3af] leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#9ca3af]/60 uppercase tracking-wide mb-1">Solution</p>
                    <p className="text-sm text-[#9ca3af] leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#9ca3af]/60 uppercase tracking-wide mb-2">Technical highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technical.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 text-xs font-medium text-[#9ca3af] bg-[#1f2937] rounded-full border border-[#374151]/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key decision footer */}
                <div className="px-6 py-4 bg-[#0f172a] border-t border-[#374151]/30">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: project.color }} />
                    <p className="text-xs text-[#9ca3af] italic leading-relaxed">{project.decision}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* All Projects */}
        <FadeIn>
          <h3 className="text-lg font-bold text-[#f9fafb] mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#f59e0b]"></span>
            All Projects
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={0.1 * index}>
              <article className="group flex flex-col h-full rounded-2xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
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
                          className="p-2 rounded-lg bg-[#1f2937] text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
                          aria-label={`${project.name} GitHub`}
                        >
                          <CodeIcon size={16} />
                        </a>
                      )}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#1f2937] text-[#9ca3af] hover:text-[#f59e0b] transition-colors"
                        aria-label={`${project.name} Live Demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#f9fafb] mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
                    {project.tagline}
                  </p>
                  <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-[#9ca3af] bg-[#1f2937] rounded-full border border-[#374151]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#0f172a] border-t border-[#374151]/30 flex gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-1.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-xs font-medium text-[#9ca3af]">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
