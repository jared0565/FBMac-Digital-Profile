"use client";

import { ArrowDown, Mail } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#030712] to-[#111827]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2dd4bf]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <FadeIn delay={0}>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
            Available for Projects
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#f9fafb] tracking-tight leading-[1.1] mb-6">
            Ferdinand
            <br />
            <span className="text-[#f59e0b]">Macagba</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#9ca3af] font-light mb-4">
            Digital Transformation Specialist &amp; Web Developer
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9ca3af] leading-relaxed mb-10">
            10+ years of customer-focused operations, now building modern web
            applications and AI-enabled tools that help small businesses grow.
            Based in London, UK.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-[#f59e0b] text-[#030712] rounded-xl hover:bg-[#fbbf24] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold border border-[#374151] text-[#f9fafb] rounded-xl hover:border-[#f59e0b] hover:text-[#f59e0b] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get In Touch
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/jared0565"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#1f2937] text-[#9ca3af] hover:text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/fbmacagba/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#1f2937] text-[#9ca3af] hover:text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={22} />
            </a>
            <a
              href="mailto:fbmacagba@gmail.com"
              className="p-3 rounded-xl bg-[#1f2937] text-[#9ca3af] hover:text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section" className="text-[#9ca3af] hover:text-[#f59e0b] transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
