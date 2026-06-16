"use client";

import { Award } from "lucide-react";
import { responsibleAiControls } from "@/data/portfolio";
import FadeIn from "./FadeIn";

export default function ResponsibleAI() {
  return (
    <section
      id="responsible-ai"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#07090d]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#c9a45e] text-sm font-semibold tracking-normal mb-4">
              Responsible AI
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe6] mb-4">
              How I Build Safe Applications
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#b8c0cc] text-lg">
              AI is a powerful tool. I use it with controls, not blind trust.
            </p>
          </FadeIn>
        </div>

        {/* Controls Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {responsibleAiControls.map((control, index) => (
            <FadeIn key={control.title} delay={0.1 * index}>
              <div className="group p-6 rounded-lg bg-[#10151d] border border-[#2a3441]/50 hover:border-[#6bc7c4]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#6bc7c4]/10 flex items-center justify-center mb-4 group-hover:bg-[#6bc7c4]/20 transition-colors">
                  <control.icon className="w-6 h-6 text-[#6bc7c4]" />
                </div>
                <h3 className="text-base font-bold text-[#f4efe6] mb-2">
                  {control.title}
                </h3>
                <p className="text-sm text-[#b8c0cc] leading-relaxed mb-4 flex-1">
                  {control.description}
                </p>
                <p className="text-xs text-[#b8c0cc]/50 italic">{control.example}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ISO 42001 Anchor */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-lg bg-[#10151d] border border-[#2a3441]/50">
            <div className="w-12 h-12 rounded-lg bg-[#c9a45e]/10 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#c9a45e]" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-[#f4efe6] mb-1">
                Managing AI Governance in Organizations with ISO 42001
              </p>
              <p className="text-xs text-[#b8c0cc]">
                Alison · CPD Certified · April 2026
              </p>
            </div>
            <div className="sm:ml-auto">
              <p className="text-sm text-[#b8c0cc] italic text-center sm:text-right max-w-xs">
                &ldquo;Responsible AI is engineering discipline, not a compliance checkbox.&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
