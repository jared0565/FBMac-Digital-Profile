"use client";

import FadeIn from "./FadeIn";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive Design",
      "Accessibility (a11y)",
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      "Node.js",
      "REST APIs",
      "SQLite",
      "Database Design",
      "Cloud Functions",
    ],
  },
  {
    name: "Platforms & Tools",
    skills: [
      "Shopify",
      "GitHub",
      "Google Workspace",
      "Microsoft Office",
      "Cloudflare",
      "Wrangler",
    ],
  },
  {
    name: "AI & Emerging Tech",
    skills: [
      "Generative AI",
      "AI Governance (ISO 42001)",
      "Google Cloud Platform",
      "Prompt Engineering",
      "AI Integration",
    ],
  },
  {
    name: "Operations & Business",
    skills: [
      "E-commerce Operations",
      "CRM Systems",
      "Customer Relations",
      "Process Automation",
      "Digital Marketing",
      "Remote Team Management",
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              Toolkit
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              Skills &amp; Technologies
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              A blend of modern web development, AI capabilities, and
              business operations expertise.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.name} delay={0.1 * index}>
              <div className="p-6 rounded-2xl bg-[#1f2937] border border-[#374151]/50">
                <h3 className="text-lg font-bold text-[#f9fafb] mb-4 pb-3 border-b border-[#374151]/50">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-[#9ca3af] bg-[#111827] rounded-lg border border-[#374151]/50 hover:text-[#f59e0b] hover:border-[#f59e0b]/30 transition-colors cursor-default"
                    >
                      {skill}
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
