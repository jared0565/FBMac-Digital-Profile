"use client";

import FadeIn from "./FadeIn";

const technicalSkills = [
  {
    name: "AI-Assisted Development Stack",
    skills: [
      "Next.js / React project direction",
      "TypeScript-based app workflows",
      "Node.js / API feature planning",
      "REST API integration concepts",
      "Tailwind CSS UI iteration",
      "AI-assisted debugging and review",
    ],
  },
  {
    name: "Data & Storage",
    skills: ["SQLite", "Database Design", "Cloud Functions (Cloudflare Workers)"],
  },
  {
    name: "Platforms",
    skills: ["Shopify (Custom Themes)", "GitHub", "Cloudflare", "Google Cloud Platform (learning)"],
  },
  {
    name: "AI & Tooling",
    skills: ["Generative AI Integration", "Structured Prompting", "AI Governance (ISO 42001)", "Prompt Injection Awareness"],
  },
];

const professionalSkills = [
  {
    name: "Product Development",
    skills: ["Requirements Definition", "PRD Development", "Workflow Design", "MVP Scoping", "Feature Prioritisation"],
  },
  {
    name: "Responsible AI",
    skills: ["Input Validation", "Human Approval Gates", "Output Verification", "Context Engineering", "Hallucination Awareness"],
  },
  {
    name: "Operations & Commercial",
    skills: ["E-commerce Operations", "CRM Systems", "Customer Relations", "Remote Team Management", "ROI Assessment", "Process Improvement"],
  },
  {
    name: "Currently Learning",
    skills: ["Google Cloud Fundamentals: Core Infrastructure"],
  },
];

function SkillColumn({ title, categories, accentColor }: {
  title: string;
  categories: { name: string; skills: string[] }[];
  accentColor: string;
}) {
  return (
    <div>
      <FadeIn>
        <h3 className="text-xl font-bold text-[#f9fafb] mb-6 pb-3 border-b border-[#374151]/50">
          {title}
        </h3>
      </FadeIn>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <FadeIn key={category.name} delay={0.05 * index}>
            <div className="p-5 rounded-xl bg-[#1f2937] border border-[#374151]/50">
              <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${accentColor}`}>
                {category.name}
              </h4>
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
  );
}

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
              AI-assisted delivery combined with product and operations
              expertise — the practical toolkit for directing, reviewing and
              shipping real applications.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <SkillColumn
            title="AI-Assisted Technical Toolkit"
            categories={technicalSkills}
            accentColor="text-[#f59e0b]"
          />
          <SkillColumn
            title="Professional Skills"
            categories={professionalSkills}
            accentColor="text-[#2dd4bf]"
          />
        </div>
      </div>
    </section>
  );
}
