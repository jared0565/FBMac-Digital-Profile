"use client";

import {
  Globe,
  ArrowUpCircle,
  LayoutTemplate,
  BrainCircuit,
} from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications built with Next.js, React, and TypeScript. From landing pages to complex dashboards — fast, secure, and scalable.",
    features: ["Next.js & React", "TypeScript", "Responsive Design", "SEO Optimized"],
  },
  {
    icon: ArrowUpCircle,
    title: "Website Upgrade",
    description:
      "Modernise legacy sites with improved performance, accessibility, and design. I migrate platforms, refresh UX, and boost Core Web Vitals scores.",
    features: ["Performance Tuning", "Accessibility (a11y)", "UX Refresh", "Platform Migration"],
  },
  {
    icon: LayoutTemplate,
    title: "Customized Application Development",
    description:
      "Bespoke SaaS platforms, CRMs, booking systems, and multi-tenant apps tailored to your business workflows — not off-the-shelf compromises.",
    features: ["SaaS Platforms", "Multi-tenant Architecture", "API Integration", "Database Design"],
  },
  {
    icon: BrainCircuit,
    title: "AI Implementation",
    description:
      "Integrate generative AI into your products and processes. From AI governance (ISO 42001) to customer-facing AI features and automation.",
    features: ["Generative AI Integration", "AI Governance", "Process Automation", "Chatbots & Agents"],
  },
];

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
              What I Do
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              Services
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              End-to-end digital solutions for businesses ready to modernise,
              scale, and compete.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * index}>
              <div className="group p-8 rounded-2xl bg-[#1f2937] border border-[#374151]/50 hover:border-[#f59e0b]/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-6 group-hover:bg-[#f59e0b]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#f59e0b]" />
                </div>
                <h3 className="text-xl font-bold text-[#f9fafb] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#9ca3af] leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium text-[#f59e0b] bg-[#f59e0b]/10 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
