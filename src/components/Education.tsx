"use client";

import { GraduationCap, Award, Cloud } from "lucide-react";
import FadeIn from "./FadeIn";

const educations = [
  {
    type: "degree",
    title: "Bachelor of Science in Electronics and Communications Engineering",
    institution: "Saint Louis University, Philippines",
    year: "1987",
    note: "UK Equivalent: Foundation Degree / HND Level (UK ENIC Statement of Comparability, April 2023)",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "Diploma in Applied Generative AI",
    provider: "Alison Learning",
    date: "April 2026",
    badge: "CPD Certified",
    icon: Award,
  },
  {
    title: "Managing AI Governance in Organisations with ISO 42001",
    provider: "Alison Learning",
    date: "April 2026",
    badge: null,
    icon: Award,
  },
  {
    title: "Generative AI for Businesses",
    provider: "Alison Learning",
    date: "February 2026",
    badge: null,
    icon: Award,
  },
  {
    title: "Google Cloud Fundamentals: Core Infrastructure",
    provider: "Google Cloud / Coursera",
    date: "In Progress",
    badge: "Current",
    icon: Cloud,
  },
  {
    title: "The Fundamentals of Digital Marketing",
    provider: "Google Digital Garage",
    date: "June 2023",
    badge: "IAB Endorsed",
    icon: Award,
  },
  {
    title: "Level 2 Certificate in Digital and IT Skills",
    provider: "Gateway Qualifications",
    date: "August 2023",
    badge: null,
    icon: Award,
  },
  {
    title: "Level 2 Certificate in Understanding Coding",
    provider: "NCFE",
    date: "March 2023",
    badge: null,
    icon: Award,
  },
];

export default function Education() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              Learning
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              Education &amp; Certifications
            </h2>
          </FadeIn>
        </div>

        <div className="mb-16">
          <FadeIn>
            <h3 className="text-xl font-bold text-[#f9fafb] mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#f59e0b]" />
              Education
            </h3>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {educations.map((edu, index) => (
              <FadeIn key={edu.title} delay={0.1 * index}>
                <div className="p-6 rounded-2xl bg-[#111827] border border-[#374151]/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-[#f59e0b]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#f9fafb] mb-1">
                        {edu.title}
                      </h4>
                      <p className="text-sm text-[#9ca3af] mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-[#9ca3af] italic">
                        {edu.note}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <FadeIn>
            <h3 className="text-xl font-bold text-[#f9fafb] mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#2dd4bf]" />
              Certifications
            </h3>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.title} delay={0.05 * index}>
                <div className="p-5 rounded-xl bg-[#111827] border border-[#374151]/50 hover:border-[#2dd4bf]/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <cert.icon
                      className={`w-5 h-5 ${
                        cert.badge === "Current"
                          ? "text-[#f59e0b]"
                          : "text-[#2dd4bf]"
                      }`}
                    />
                    {cert.badge && (
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                          cert.badge === "Current"
                            ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                            : "bg-[#2dd4bf]/10 text-[#2dd4bf]"
                        }`}
                      >
                        {cert.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-[#f9fafb] mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#9ca3af]">
                    {cert.provider}
                  </p>
                  <p className="text-xs text-[#6b7280] mt-1">{cert.date}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
