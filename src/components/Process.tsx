"use client";

import {
  Search,
  Lightbulb,
  ClipboardList,
  FileText,
  GitBranch,
  Workflow,
  Bot,
  TestTube,
  IterationCw,
  CheckCircle,
  LayoutDashboard,
  RefreshCw,
  ShieldCheck,
  Lock,
  UserCheck,
  GitCommit,
} from "lucide-react";
import FadeIn from "./FadeIn";

const stages = [
  { icon: Search, number: "01", label: "Problem Research" },
  { icon: Lightbulb, number: "02", label: "Idea Development" },
  { icon: ClipboardList, number: "03", label: "Product Planning" },
  { icon: FileText, number: "04", label: "Requirements (PRD)" },
  { icon: GitBranch, number: "05", label: "Tech Decisions" },
  { icon: Workflow, number: "06", label: "Workflow Definition" },
  { icon: Bot, number: "07", label: "AI-Assisted Build" },
  { icon: TestTube, number: "08", label: "Review & Testing" },
  { icon: IterationCw, number: "09", label: "Iterative Development" },
  { icon: CheckCircle, number: "10", label: "MVP Approval" },
  { icon: LayoutDashboard, number: "11", label: "Feature Planning" },
  { icon: RefreshCw, number: "12", label: "Application Lifecycle" },
  { icon: ShieldCheck, number: "13", label: "Responsible AI Controls" },
  { icon: Lock, number: "14", label: "Input Validation" },
  { icon: UserCheck, number: "15", label: "Human Approval Gates" },
  { icon: GitCommit, number: "16", label: "Version Control & Continuity" },
];

function CaseStudySection({
  label,
  title,
  rows,
}: {
  label: string;
  title: string;
  rows: { heading: string; body: string }[];
}) {
  return (
    <div className="p-8 rounded-2xl bg-[#1f2937] border border-[#374151]/50">
      <p className="text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-2">
        {label}
      </p>
      <h4 className="text-2xl font-bold text-[#f9fafb] mb-6">{title}</h4>
      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row.heading} className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-4">
            <span className="text-sm font-semibold text-[#2dd4bf] pt-0.5 shrink-0">
              {row.heading}
            </span>
            <span className="text-sm text-[#9ca3af] leading-relaxed">{row.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const bytescrmRows = [
  {
    heading: "Problem",
    body: "Agencies managing leads across scattered spreadsheets, email threads and disconnected SaaS tools — no single source of truth.",
  },
  {
    heading: "Research",
    body: "Identified need for a centralised CRM with automation, multi-tenant data isolation, and role-based access — not a generic off-the-shelf tool.",
  },
  {
    heading: "Requirements (PRD)",
    body: "Defined 5 core data types: contacts, leads, deals, subscribers, tasks. Specified admin dashboards, billing integration, and per-agency data isolation.",
  },
  {
    heading: "Architecture Decision",
    body: "Multi-tenant with hard data isolation per agency. Next.js frontend, Node.js API layer, SQLite with per-tenant scoping, Cloudflare deployment.",
  },
  {
    heading: "AI-Assisted Implementation",
    body: "Scaffolded each module with AI assistance → reviewed output → identified gaps → specified corrections → retested. Human sign-off at each module before moving on.",
  },
  {
    heading: "Responsible AI",
    body: "Automation guardrails: user-defined rules only — AI does not make business decisions. Permission controls: least privilege per role. Data isolation enforced at query level.",
  },
  {
    heading: "Iteration",
    body: "Multiple revision rounds on dashboard layouts, automation workflow logic, and billing integration — each iteration driven by a specific gap or test failure.",
  },
  {
    heading: "MVP",
    body: "Core CRM pipeline + agency dashboards + basic automation rules. Deployed. Feature planning for next cycle already documented.",
  },
];

const pivotParlorRows = [
  {
    heading: "Problem",
    body: "Salons and barbershops need online booking but Fresha takes commission, Booksy charges monthly subscriptions — neither model fits micro-businesses.",
  },
  {
    heading: "Research",
    body: "Market gap: no low-cost one-time-setup model with commission only on completed bookings. Commercial decision: £100 setup + 10% commission — zero monthly cost to partner.",
  },
  {
    heading: "AI Integration",
    body: "AI generates branded booking pages for each partner — reduces onboarding friction significantly. Staff review required before any page goes live.",
  },
  {
    heading: "Responsible AI Controls",
    body: "Input validation on all booking form fields (type, format, length — reject unexpected inputs). AI-generated pages reviewed by staff before publishing (human approval gate). Output verification: pages checked against brand requirements. Rollback: previous page version can be restored instantly.",
  },
  {
    heading: "Architecture",
    body: "Multi-tenant booking engine: each salon has isolated schedule, staff roster, and customer data. No cross-tenant data access by design.",
  },
  {
    heading: "Iteration",
    body: "Post-launch additions driven by real partner feedback: SMS and email reminders, waitlist management, QR booking links — each specified, reviewed, and tested before release.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              My Process
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              My Development Process
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              AI assists research, planning and implementation. I remain
              responsible for the product decisions, requirements, workflow,
              testing, risk controls and release approval.
            </p>
          </FadeIn>
        </div>

        {/* 16-Stage Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-20">
          {stages.map((stage, index) => (
            <FadeIn key={stage.number} delay={0.03 * index}>
              <div className="group p-4 rounded-xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/30 transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-[#f59e0b]/60">{stage.number}</span>
                  <stage.icon className="w-4 h-4 text-[#f59e0b]/70 group-hover:text-[#f59e0b] transition-colors" />
                </div>
                <p className="text-xs font-medium text-[#9ca3af] group-hover:text-[#f9fafb] transition-colors leading-snug">
                  {stage.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Case Studies */}
        <FadeIn>
          <h3 className="text-xl font-bold text-[#f9fafb] mb-8 text-center">
            Process in Practice
          </h3>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <CaseStudySection
              label="Case Study — BytesCRM"
              title="Building a Multi-Tenant CRM"
              rows={bytescrmRows}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <CaseStudySection
              label="Case Study — Pivot Parlor"
              title="AI-Powered Booking for Salons"
              rows={pivotParlorRows}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
