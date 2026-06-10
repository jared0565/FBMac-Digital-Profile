"use client";

import { ExternalLink, TrendingUp, Users, ShoppingCart, Scissors, Gamepad2, Hash } from "lucide-react";
import FadeIn from "./FadeIn";

function CodeIcon({ size = 16 }: { size?: number }) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const projects = [
  {
    name: "BytesAI Learn",
    url: "https://learn.bytesai.co.uk",
    github: null,
    tagline: "Free AI Courses Membership Platform",
    description:
      "A dedicated e-learning platform democratising AI education through structured membership-based courses. Designed to guide learners from fundamentals to applied generative AI with clear learning paths and practical exercises.",
    icon: TrendingUp,
    tags: ["Next.js", "Membership", "EdTech", "AI"],
    metrics: ["Membership Model", "Course Progression"],
    color: "#f59e0b",
  },
  {
    name: "BytesCRM",
    url: "https://bytescrm.app",
    github: null,
    tagline: "LeadGen & CRM Multi-Tenant Platform",
    description:
      "A high-performance agency CRM combining lead generation, contact management, deal tracking, and subscriber management in one centralised platform. Features admin dashboards, automation workflows, billing subscriptions, and multi-tenant architecture for agencies.",
    icon: Users,
    tags: ["Multi-tenant", "CRM", "SaaS", "Dashboard"],
    metrics: ["5 Data Types", "Automation Engine"],
    color: "#2dd4bf",
  },
  {
    name: "Active Paw",
    url: "https://activepaw.co.uk",
    github: null,
    tagline: "Shopify Custom Theme — Pet Care Marketplace",
    description:
      "A fully customised Shopify storefront for a UK pet care marketplace. Features collection-based navigation, review-led product confidence, free-shipping threshold prompts, and a care-first support UX optimised for pet owners browsing grooming, toys, and health essentials.",
    icon: ShoppingCart,
    tags: ["Shopify", "E-commerce", "Custom Theme", "UX"],
    metrics: ["UK Market", "Conversion-Focused"],
    color: "#f472b6",
  },
  {
    name: "Pivot Parlor",
    url: "https://pivotparlor.com",
    github: null,
    tagline: "Smart Booking for Beauty & Barber Shops",
    description:
      "An AI-branded booking platform for independent salons and barbershops. Zero monthly fees, commission-based model. Features smart scheduling, staff management, waitlists, email/SMS reminders, and AI-generated branded booking pages.",
    icon: Scissors,
    tags: ["Booking System", "AI-Powered", "Multi-tenant", "SaaS"],
    metrics: ["£100 Setup", "10% Commission"],
    color: "#a78bfa",
  },
  {
    name: "Shikaku: Puzzle Quest",
    url: "https://shikaku.bytesai.uk",
    github: null,
    tagline: "Premium Logic Grid Multiplayer Game",
    description:
      "A real-time multiplayer logic puzzle game featuring 1v1 battle arena with ELO matchmaking, global leaderboards, QR-code friend invites, and fair-play rotation. Cross-platform responsive design with neon visual feedback and progressive quest ranks.",
    icon: Gamepad2,
    tags: ["Real-time", "Multiplayer", "ELO Matchmaking", "PWA"],
    metrics: ["1v1 Battles", "Global Leaderboard"],
    color: "#34d399",
  },
  {
    name: "NumNinja",
    url: "https://numninja.bytesai.uk",
    github: null,
    tagline: "The Number Guessing Challenge",
    description:
      "A fast-paced number guessing game with player authentication, guest play up to level 5, and progressive difficulty. Clean UI focused on quick-play engagement with session persistence and score tracking.",
    icon: Hash,
    tags: ["Game", "Auth", "Progressive Difficulty", "Quick Play"],
    metrics: ["Guest & Registered", "Level Progression"],
    color: "#60a5fa",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              Real applications deployed and used by real people. Each one solves a
              specific business problem.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={0.1 * index}>
              <article className="group flex flex-col h-full rounded-2xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <project.icon
                        className="w-6 h-6"
                        style={{ color: project.color }}
                      />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#1f2937] text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
                          aria-label={`${project.name} GitHub`}
                        >
                          <CodeIcon size={16} />
                        </a>
                      )}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#1f2937] text-[#9ca3af] hover:text-[#f59e0b] transition-colors"
                        aria-label={`${project.name} Live Demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#f9fafb] mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
                    {project.tagline}
                  </p>
                  <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-[#9ca3af] bg-[#1f2937] rounded-full border border-[#374151]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#0f172a] border-t border-[#374151]/30 flex gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-1.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-xs font-medium text-[#9ca3af]">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
