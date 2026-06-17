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
    skills: ["Claude", "ChatGPT", "Gemini", "GitHub Copilot", "Ollama", "Cursor", "Base44", "AntiGravity", "Visual Studio"],
  },
];

const professionalSkills = [
  {
    name: "Product Development",
    skills: ["Requirements Definition", "PRD Development", "Workflow Design", "Structured Prompting", "MVP Scoping", "Feature Prioritisation"],
  },
  {
    name: "Responsible AI",
    skills: ["Input Validation", "Prompt Injection Awareness", "Human Approval Gates", "Output Verification", "Context Engineering", "Hallucination Awareness", "AI Governance (ISO 42001)"],
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
        <h3 className="text-xl font-bold text-[#f4efe6] mb-6 pb-3 border-b border-[#2a3441]/50">
          {title}
        </h3>
      </FadeIn>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <FadeIn key={category.name} delay={0.05 * index}>
            <div className="p-5 rounded-lg bg-[#171f2a] border border-[#2a3441]/50">
              <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${accentColor}`}>
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-[#b8c0cc] bg-[#10151d] rounded-lg border border-[#2a3441]/50 hover:text-[#c9a45e] hover:border-[#c9a45e]/30 transition-colors cursor-default"
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
    <section id="skills" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#10151d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#c9a45e] text-sm font-semibold tracking-normal mb-4">
              Toolkit
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4efe6] mb-4">
              Skills &amp; Technologies
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#b8c0cc] text-lg">
              AI-assisted delivery combined with product and operations
              expertise: the practical toolkit for directing, reviewing and
              shipping real applications.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <SkillColumn
            title="AI-Assisted Technical Toolkit"
            categories={technicalSkills}
            accentColor="text-[#c9a45e]"
          />
          <SkillColumn
            title="Professional Skills"
            categories={professionalSkills}
            accentColor="text-[#6bc7c4]"
          />
        </div>
      </div>
    </section>
  );
}
