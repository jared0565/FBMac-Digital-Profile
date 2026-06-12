"use client";

import { ArrowDown, Mail, Download } from "lucide-react";
import FadeIn from "./FadeIn";

function GitHubIcon({ size = 22 }: { size?: number }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a12.5 12.5 0 0 0-6 0C7 1 6 1 6 1a9.5 9.5 0 0 0 0 3.5A4.8 4.8 0 0 0 5 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
    </svg>
  );
}

function LinkedInIcon({ size = 22 }: { size?: number }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32"
    >
      <div className="absolute inset-0 bg-[#07090d]">
        <div className="absolute inset-0 opacity-[0.42] bg-[linear-gradient(90deg,rgba(244,239,230,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(244,239,230,0.04)_1px,transparent_1px)] bg-[size:96px_96px]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-[#c9a45e]/40"></div>
        <div className="absolute left-[8%] top-24 h-[72%] w-px bg-[#c9a45e]/20"></div>
        <div className="absolute right-[12%] bottom-12 h-[48%] w-px bg-[#6bc7c4]/16"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_380px] gap-12 lg:gap-16 items-end min-h-[calc(100vh-11rem)]">
        <div>
          <FadeIn delay={0}>
            <p className="inline-flex items-center gap-3 text-sm font-medium text-[#c9a45e] mb-7">
              <span className="h-px w-10 bg-[#c9a45e]"></span>
              London based digital product builder
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#f4efe6] tracking-tight leading-[0.98] mb-7 max-w-4xl">
              Ferdinand <span className="text-[#c9a45e]">Macagba</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="max-w-3xl text-2xl sm:text-3xl lg:text-4xl text-[#f4efe6] font-light leading-tight mb-5">
              AI-assisted application developer with product judgment,
              responsible AI discipline and live shipped work.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-base sm:text-lg text-[#b8c0cc] leading-relaxed mb-10">
              I research the problem, define requirements, specify the workflow
              and direct every revision. AI assists implementation. I own the
              product decisions, review and release.
            </p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
              <a
                href="/downloads/Ferdinand_Macagba_CV.pdf"
                download
                className="px-7 py-4 text-base font-semibold bg-[#c9a45e] text-[#07090d] rounded-lg hover:bg-[#e3c77f] transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#projects"
                className="px-7 py-4 text-base font-semibold border border-[#c9a45e]/40 text-[#f4efe6] rounded-lg hover:border-[#c9a45e] hover:bg-[#c9a45e]/8 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Review shipped work
              </a>
              <a
                href="#contact"
                className="px-7 py-4 text-base font-semibold bg-[#171f2a] text-[#f4efe6] rounded-lg hover:bg-[#2a3441] transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Start a conversation
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.34}>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/jared0565"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#171f2a] text-[#b8c0cc] hover:text-[#c9a45e] hover:bg-[#c9a45e]/10 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/fbmacagba/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#171f2a] text-[#b8c0cc] hover:text-[#c9a45e] hover:bg-[#c9a45e]/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={22} />
              </a>
              <a
                href="mailto:fbmacagba@gmail.com"
                className="p-3 rounded-lg bg-[#171f2a] text-[#b8c0cc] hover:text-[#c9a45e] hover:bg-[#c9a45e]/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.18} direction="left">
          <aside className="border border-[#2a3441] bg-[#10151d]/86 p-6 sm:p-7">
            <p className="text-sm text-[#c9a45e] font-semibold mb-6">
              Hiring brief
            </p>
            <div className="space-y-6">
              {[
                ["Focus", "SaaS, e-commerce, booking systems and AI-enabled applications"],
                ["Evidence", "6 live projects across product, commerce, education and games"],
                ["Method", "Human-led requirements, workflow design, AI-assisted implementation"],
                ["Risk posture", "Input validation, human review gates, output checks and least privilege"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-[#2a3441] pt-4">
                  <p className="text-xs font-semibold text-[#6bc7c4] mb-1">
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed text-[#b8c0cc]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to About section" className="text-[#b8c0cc] hover:text-[#c9a45e] transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
