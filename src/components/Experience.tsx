"use client";

import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "AI-Assisted Application Developer (Independent Projects)",
    company: "Self-directed",
    location: "London, UK",
    period: "2023 – Present",
    highlights: [
      "Developed 6 live applications across SaaS, e-commerce, EdTech and games using a human-led, AI-assisted development workflow",
      "Responsible for all product decisions: research, requirements, workflow design, architecture, testing, iteration and release",
      "Applied responsible-AI principles throughout: input validation, human approval gates, output verification, and permission controls",
      "Used structured context engineering and version control to maintain continuity across development sessions",
    ],
  },
  {
    role: "Remote Operations Manager / E-Commerce Specialist",
    company: "Bytes Enterprises Ltd",
    location: "London",
    period: "July 2019 – December 2022",
    highlights: [
      "Managed all customer communications and order operations remotely for a high-volume e-commerce business",
      "Coordinated with 10+ suppliers and logistics partners to maintain seamless cross-organisational operations",
      "Analysed sales data to streamline processes, reducing order-processing time by 20% while maintaining 99% inventory accuracy",
      "Maintained detailed digital records using cloud-based tools, demonstrating strong digital systems proficiency",
    ],
  },
  {
    role: "Night Receptionist",
    company: "Radisson Edwardian Hotels – The Grafton Hotel",
    location: "London",
    period: "April 2015 – July 2019",
    highlights: [
      "Served as primary point of contact for guest needs during night shifts, handling check-ins, payments, and issue resolution with precision",
      "Managed front-desk operations independently, demonstrating reliability and decision-making without direct supervision",
      "Coordinated with multiple departments (housekeeping, maintenance, management) to resolve issues promptly and maintain guest satisfaction",
    ],
  },
  {
    role: "Central Reservations Agent",
    company: "Radisson Edwardian Hotels – Central Reservations Office",
    location: "London",
    period: "April 2010 – March 2015",
    highlights: [
      "Processed complex travel reservations using booking systems with 100% accuracy on client details, dates, and special requests",
      "Suggested additional services to enhance guest experiences, demonstrating ability to add value and tailor recommendations",
      "Trained new staff on reservation procedures and customer-service standards, showing clear communication and coaching ability",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#10151d]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#c9a45e] text-sm font-semibold tracking-normal mb-4">
              Career
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe6] mb-4">
              Work Experience
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#2a3441] md:-translate-x-px"></div>

          {experiences.map((exp, index) => (
            <FadeIn key={exp.period} delay={0.1 * index}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div className="p-6 rounded-lg bg-[#171f2a] border border-[#2a3441]/50 hover:border-[#c9a45e]/30 transition-colors">
                    <div className="flex flex-col md:items-end gap-1 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#c9a45e] bg-[#c9a45e]/10 rounded-full">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-bold text-[#f4efe6]">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[#b8c0cc]">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <ul className="space-y-2 md:text-right">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-[#b8c0cc] leading-relaxed"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#c9a45e] border-4 border-[#10151d] md:-translate-x-1.5 mt-6"></div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
