"use client";

import { GraduationCap, Award, Cloud } from "lucide-react";
import { ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

const educations = [
  {
    type: "degree",
    title: "Bachelor of Science in Electronics and Communications Engineering",
    institution: "Saint Louis University, Philippines",
    year: "1987",
    note: "UK Equivalent: Foundation Degree / HND Level (UK ENIC Statement of Comparability, April 2023)",
    icon: GraduationCap,
    url: "https://www.slu.edu/",
  },
];

const certifications = [
  {
    title: "Diploma in Applied Generative AI",
    provider: "Alison",
    date: "April 2026",
    badge: "CPD Certified",
    icon: Award,
    url: "https://alison.com/user/learner-verification/27668723/7213",
  },
  {
    title: "Managing AI Governance in Organizations With ISO 42001",
    provider: "Alison",
    date: "April 2026",
    badge: null,
    icon: Award,
    url: "https://alison.com/verify/a823eef71a",
  },
  {
    title: "Generative AI for Businesses",
    provider: "Alison",
    date: "February 2026",
    badge: null,
    icon: Award,
    url: "https://alison.com/user/learner-verification/27668723/7216",
  },
  {
    title: "Vibe Coding Basics",
    provider: "Alison",
    date: "April 2026",
    badge: null,
    icon: Award,
    url: "https://alison.com/verify/68cf157aa1",
  },
  {
    title: "Learn AI for Small Business Success",
    provider: "Founderz",
    date: "May 2026",
    badge: null,
    icon: Award,
    url: "https://learn.founderz.com/certificate/learn-ai-for-small-business-success/807585a5-523d-438b-9128-f3e28850d1c7",
  },
  {
    title: "Google Cloud Fundamentals: Core Infrastructure",
    provider: "Google Cloud / Coursera",
    date: "In Progress",
    badge: "Current",
    icon: Cloud,
    url: "https://www.coursera.org/learn/gcp-fundamentals",
  },
  {
    title: "Content Marketing",
    provider: "HubSpot Academy",
    date: "December 2025",
    badge: null,
    icon: Award,
    url: "https://app-eu1.hubspot.com/academy/achievements/8gw7grz6/en/1/ferdinand-macagba/content-marketing",
  },
  {
    title: "Inbound",
    provider: "HubSpot Academy",
    date: "September 2023",
    badge: null,
    icon: Award,
    url: "https://app-eu1.hubspot.com/academy/achievements/1z60sx82/en/1/ferdinand-macagba/inbound",
  },
  {
    title: "Level 2 Certificate in Digital Promotion for Business",
    provider: "NCFE",
    date: "September 2024",
    badge: null,
    icon: Award,
    url: "https://drive.google.com/file/d/10dNdPbBh3I1MtWrbOnPb_i0jDgWA3boa/view?usp=sharing",
  },
  {
    title: "Level 2 Certificate in Understanding Coding",
    provider: "NCFE",
    date: "May 2023",
    badge: null,
    icon: Award,
    url: "https://drive.google.com/file/d/1SGfdc9EA1VtMoK0EOWDQEcSUJozQ54cF/view?usp=sharing",
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
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#f59e0b]/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-[#f59e0b]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-lg font-bold text-[#f9fafb] mb-1">
                          {edu.title}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-[#9ca3af] group-hover:text-[#f59e0b] transition-colors shrink-0 mt-1" />
                      </div>
                      <p className="text-sm text-[#9ca3af] mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-[#9ca3af] italic">
                        {edu.note}
                      </p>
                    </div>
                  </div>
                </a>
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
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl bg-[#111827] border border-[#374151]/50 hover:border-[#2dd4bf]/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <cert.icon
                      className={`w-5 h-5 ${
                        cert.badge === "Current"
                          ? "text-[#f59e0b]"
                          : "text-[#2dd4bf]"
                      }`}
                    />
                    <ExternalLink className="w-4 h-4 text-[#9ca3af] group-hover:text-[#9ca3af] transition-colors shrink-0" />
                  </div>
                  <h4 className="text-sm font-bold text-[#f9fafb] mb-1 leading-snug group-hover:text-[#f9fafb]">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#9ca3af]">
                    {cert.provider}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-[#9ca3af]">{cert.date}</p>
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
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-8 text-center">
              <a
                href="https://www.linkedin.com/in/fbmacagba/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111827] border border-[#374151]/50 text-[#9ca3af] hover:text-[#f59e0b] hover:border-[#f59e0b]/40 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">View all 19 certifications on LinkedIn</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
