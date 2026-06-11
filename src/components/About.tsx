"use client";

import { MapPin, Calendar, Briefcase, Award } from "lucide-react";
import FadeIn from "./FadeIn";

const stats = [
  { icon: Briefcase, value: "10+", label: "Years Client Experience" },
  { icon: Calendar, value: "6", label: "Live Projects Deployed" },
  { icon: Award, value: "10+", label: "Tech Certifications" },
  { icon: MapPin, value: "London", label: "Based in UK" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
                About Me
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-6 leading-tight">
                From Operations to AI-Assisted Application Development
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4 text-[#9ca3af] text-base sm:text-lg leading-relaxed">
                <p>
                  I spent over a decade in hospitality and remote operations —
                  managing e-commerce fulfilment, coordinating distributed teams,
                  and solving real business problems under pressure. That career
                  taught me what organisations actually need from software: tools
                  that work reliably, workflows that reduce friction, and systems
                  built for the people who use them daily.
                </p>
                <p>
                  Since 2023, I have been building production applications using a
                  structured, human-led process: I research the problem, define
                  requirements, design the workflow, and specify every decision —
                  AI assists implementation, I own the product. This means every
                  application starts with a PRD, progresses through defined stages,
                  and ships only after review, testing, and iteration.
                </p>
                <p>
                  I take responsible AI seriously as engineering discipline.
                  Every application I build applies input validation, human
                  approval gates, output verification, and least-privilege
                  permission controls. I hold a certification in Managing AI
                  Governance with ISO 42001 and a Diploma in Applied Generative AI.
                </p>
                <p className="text-[#f9fafb] font-medium">
                  Current focus: SaaS platforms, e-commerce and AI-enabled
                  applications — built for real users and real business problems.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={0.1 * index}>
                <div className="p-6 rounded-2xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-[#f59e0b] mb-4" />
                  <p className="text-2xl sm:text-3xl font-bold text-[#f9fafb] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#9ca3af]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
