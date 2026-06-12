"use client";

import { processCaseStudies, processStages, type CaseStudyRow } from "@/data/portfolio";
import FadeIn from "./FadeIn";

function CaseStudySection({
  label,
  title,
  rows,
}: {
  label: string;
  title: string;
  rows: CaseStudyRow[];
}) {
  return (
    <div className="p-8 rounded-2xl bg-[#1f2937] border border-[#374151]/50">
      <p className="text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-2">
        {label}
      </p>
      <h4 className="text-2xl font-bold text-[#f9fafb] mb-6">{title}</h4>
      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row.heading} className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
            <span className="text-sm font-semibold text-[#2dd4bf] pt-0.5 shrink-0">
              {row.heading}
            </span>
            <span className="text-sm text-[#9ca3af] leading-relaxed">{row.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              My Process
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              My Development Process
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              AI assists research, planning and implementation. I remain
              responsible for the product decisions, requirements, workflow,
              testing, risk controls and release approval.
            </p>
          </FadeIn>
        </div>

        {/* 16-Stage Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-20">
          {processStages.map((stage, index) => (
            <FadeIn key={stage.number} delay={0.03 * index}>
              <div className="group p-4 rounded-xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/30 transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-[#f59e0b]/60">{stage.number}</span>
                  <stage.icon className="w-4 h-4 text-[#f59e0b]/70 group-hover:text-[#f59e0b] transition-colors" />
                </div>
                <p className="text-xs font-medium text-[#9ca3af] group-hover:text-[#f9fafb] transition-colors leading-snug">
                  {stage.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Case Studies */}
        <FadeIn>
          <h3 className="text-xl font-bold text-[#f9fafb] mb-8 text-center">
            Process in Practice
          </h3>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          {processCaseStudies.map((caseStudy, index) => (
            <FadeIn key={caseStudy.label} delay={0.1 * (index + 1)}>
              <CaseStudySection
                label={caseStudy.label}
                title={caseStudy.title}
                rows={caseStudy.rows}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
