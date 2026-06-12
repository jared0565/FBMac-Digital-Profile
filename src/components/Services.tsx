"use client";

import { buildCategories } from "@/data/portfolio";
import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#10151d]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#c9a45e] text-sm font-semibold tracking-normal mb-4">
              What I Build
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe6] mb-4">
              Types of Applications I Develop
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#b8c0cc] text-lg">
              Human-led, AI-assisted development across three product categories —
              each built through structured requirements, workflow design, and
              iterative implementation.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {buildCategories.map((item, index) => (
            <FadeIn key={item.title} delay={0.1 * index}>
              <div className="group p-8 rounded-lg bg-[#171f2a] border border-[#2a3441]/50 hover:border-[#c9a45e]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-[#c9a45e]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a45e]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#c9a45e]" />
                </div>
                <h3 className="text-xl font-bold text-[#f4efe6] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#b8c0cc] leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-[#c9a45e] bg-[#c9a45e]/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#b8c0cc]/60 italic">{item.evidence}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
