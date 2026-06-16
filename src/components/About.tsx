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
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#07090d]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <p className="text-[#c9a45e] text-sm font-semibold tracking-normal mb-4">
                About Me
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe6] mb-6 leading-tight">
                From Operations to AI-Assisted Application Development
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4 text-[#b8c0cc] text-base sm:text-lg leading-relaxed">
                <p>
                  I spent over a decade in hospitality and remote operations,
                  managing e-commerce fulfilment, coordinating distributed teams,
                  and solving real business problems under pressure. That career
                  taught me what organisations actually need from software: tools
                  that work reliably, workflows that reduce friction, and systems
                  built for the people who use them daily.
                </p>
                <p>
                  Since 2023, I have been building production applications using a
                  structured, human-led process: I research the problem, define
                  requirements, design the workflow, and specify every decision.
                  AI assists implementation; I own the product. This means every
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
                <p className="text-[#f4efe6] font-medium">
                  Current focus: SaaS platforms, e-commerce and AI-enabled
                  applications, built for real users and real business problems.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={0.1 * index}>
                <div className="p-6 rounded-lg bg-[#10151d] border border-[#2a3441]/50 hover:border-[#c9a45e]/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-[#c9a45e] mb-4" />
                  <p className="text-2xl sm:text-3xl font-bold text-[#f4efe6] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#b8c0cc]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
