"use client";

import { buildCategories } from "@/data/portfolio";
import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#111827]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              What I Build
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              Types of Applications I Develop
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              Human-led, AI-assisted development across three product categories —
              each built through structured requirements, workflow design, and
              iterative implementation.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {buildCategories.map((item, index) => (
            <FadeIn key={item.title} delay={0.1 * index}>
              <div className="group p-8 rounded-2xl bg-[#1f2937] border border-[#374151]/50 hover:border-[#f59e0b]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-6 group-hover:bg-[#f59e0b]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#f59e0b]" />
                </div>
                <h3 className="text-xl font-bold text-[#f9fafb] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#9ca3af] leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-[#f59e0b] bg-[#f59e0b]/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#9ca3af]/60 italic">{item.evidence}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
