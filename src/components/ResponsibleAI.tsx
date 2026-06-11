"use client";

import {
  ShieldCheck,
  AlertTriangle,
  UserCheck,
  ClipboardCheck,
  Lock,
  Brain,
  Award,
} from "lucide-react";
import FadeIn from "./FadeIn";

const controls = [
  {
    icon: ShieldCheck,
    title: "Input Validation & Data Quality",
    description:
      "Validate format, type, and length on all inputs. Treat external content as untrusted by default. Reject unexpected or malformed inputs before they reach any AI or backend system.",
    example: "Pivot Parlor booking forms · BytesCRM contact imports",
  },
  {
    icon: AlertTriangle,
    title: "Prompt Injection Awareness",
    description:
      "Separate trusted system instructions from user-supplied content. Restrict what AI can access. Test adversarial inputs during development — not just happy-path scenarios.",
    example: "AI-generated booking pages · BytesAI Learn quiz generation",
  },
  {
    icon: UserCheck,
    title: "Human Approval Gates",
    description:
      "AI-generated content requires human review before publishing. Consequential actions — releasing features, publishing pages, triggering automations — require explicit human sign-off.",
    example: "Pivot Parlor: staff reviews AI pages before going live",
  },
  {
    icon: ClipboardCheck,
    title: "Output Verification",
    description:
      "Check AI outputs against requirements. Cross-check factual claims. Confident-sounding output is not a substitute for verification — hallucination is always a risk, treated as such.",
    example: "PRD critique workflow · Case study content review",
  },
  {
    icon: Lock,
    title: "Permission Controls & Guardrails",
    description:
      "Least-privilege access throughout. AI systems have no more authority than needed for their task. Structured outputs, rate limits, and error handling reduce blast radius from failures.",
    example: "BytesCRM role-based access · per-tenant data isolation",
  },
  {
    icon: Brain,
    title: "Context Engineering",
    description:
      "Maintain project purpose, requirements, decisions and task lists across sessions. Prevent context degradation from compounding errors. Compact and restart with a handover document when context limits approach.",
    example: "This portfolio — built and maintained using this exact practice",
  },
];

export default function ResponsibleAI() {
  return (
    <section
      id="responsible-ai"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              Responsible AI
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              How I Build Safe Applications
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              AI is a powerful tool. I use it with controls, not blind trust.
            </p>
          </FadeIn>
        </div>

        {/* Controls Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {controls.map((control, index) => (
            <FadeIn key={control.title} delay={0.1 * index}>
              <div className="group p-6 rounded-2xl bg-[#111827] border border-[#374151]/50 hover:border-[#2dd4bf]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#2dd4bf]/10 flex items-center justify-center mb-4 group-hover:bg-[#2dd4bf]/20 transition-colors">
                  <control.icon className="w-6 h-6 text-[#2dd4bf]" />
                </div>
                <h3 className="text-base font-bold text-[#f9fafb] mb-2">
                  {control.title}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-4 flex-1">
                  {control.description}
                </p>
                <p className="text-xs text-[#9ca3af]/50 italic">{control.example}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ISO 42001 Anchor */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-[#111827] border border-[#374151]/50">
            <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#f59e0b]" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-[#f9fafb] mb-1">
                Managing AI Governance in Organizations with ISO 42001
              </p>
              <p className="text-xs text-[#9ca3af]">
                Alison · CPD Certified · April 2026
              </p>
            </div>
            <div className="sm:ml-auto">
              <p className="text-sm text-[#9ca3af] italic text-center sm:text-right max-w-xs">
                &ldquo;Responsible AI is engineering discipline — not a compliance checkbox.&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
