import {
  AlertTriangle,
  Bot,
  Brain,
  BrainCircuit,
  CheckCircle,
  ClipboardCheck,
  ClipboardList,
  FileText,
  Gamepad2,
  GitBranch,
  GitCommit,
  Hash,
  IterationCw,
  LayoutDashboard,
  LayoutTemplate,
  Lightbulb,
  Lock,
  RefreshCw,
  Scissors,
  Search,
  ShieldCheck,
  ShoppingBag,
  TestTube,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface FeaturedProject {
  name: string;
  url: string;
  tagline: string;
  color: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  technical: string[];
  decision: string;
}

export interface Project {
  name: string;
  url: string;
  github: string | null;
  tagline: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  metrics: string[];
  color: string;
}

export interface ProcessStage {
  icon: LucideIcon;
  number: string;
  label: string;
}

export interface CaseStudyRow {
  heading: string;
  body: string;
}

export interface CaseStudy {
  label: string;
  title: string;
  rows: CaseStudyRow[];
}

export interface ResponsibleAiControl {
  icon: LucideIcon;
  title: string;
  description: string;
  example: string;
}

export interface BuildCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  evidence: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "BytesCRM",
    url: "https://bytescrm.app",
    tagline: "LeadGen & CRM Multi-Tenant Platform",
    color: "#2dd4bf",
    icon: Users,
    problem:
      "Agencies managing leads across scattered spreadsheets and disconnected tools — no single source of truth, no automation.",
    solution:
      "Centralised multi-tenant CRM with 5 data types (contacts, leads, deals, subscribers, tasks), admin dashboards, automation workflows, and billing.",
    technical: [
      "Multi-tenant architecture",
      "Next.js + Node.js",
      "Role-based access control",
      "Per-tenant data isolation",
    ],
    decision:
      "Chose multi-tenant with hard data isolation over single-tenant to support agency resellers — a product decision made before a line of code was written.",
  },
  {
    name: "Pivot Parlor",
    url: "https://pivotparlor.com",
    tagline: "Smart Booking for Beauty & Barber Shops",
    color: "#a78bfa",
    icon: Scissors,
    problem:
      "Independent salons need online booking but subscription SaaS is too expensive — Fresha takes commission, Booksy charges monthly fees.",
    solution:
      "Commission-only booking platform: £100 one-time setup, 10% commission on completed bookings only. AI generates branded booking pages per partner.",
    technical: [
      "Multi-tenant booking engine",
      "AI-generated pages (with human review gate)",
      "SMS + email reminders",
      "Waitlists + QR booking links",
    ],
    decision:
      "Commercial model (£100 + 10% commission) was a product decision based on market research — not a default SaaS pricing template.",
  },
];

export const projects: Project[] = [
  {
    name: "BytesAI Learn",
    url: "https://learn.bytesai.uk/",
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
    icon: ShoppingBag,
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

export const processStages: ProcessStage[] = [
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

export const processCaseStudies: CaseStudy[] = [
  {
    label: "Case Study — BytesCRM",
    title: "Building a Multi-Tenant CRM",
    rows: [
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
    ],
  },
  {
    label: "Case Study — Pivot Parlor",
    title: "AI-Powered Booking for Salons",
    rows: [
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
    ],
  },
];

export const responsibleAiControls: ResponsibleAiControl[] = [
  {
    icon: ShieldCheck,
    title: "Input Validation & Data Quality",
    description:
      "Validate format, type, and length on all inputs. Treat external content as untrusted by default. Reject unexpected or malformed inputs before they reach any AI or backend system.",
    example: "Pivot Parlor booking forms · BytesCRM contact imports",
  },
  {
    icon: AlertTriangle,
    title: "Prompt Injection Awareness",
    description:
      "Separate trusted system instructions from user-supplied content. Restrict what AI can access. Test adversarial inputs during development — not just happy-path scenarios.",
    example: "AI-generated booking pages · BytesAI Learn quiz generation",
  },
  {
    icon: UserCheck,
    title: "Human Approval Gates",
    description:
      "AI-generated content requires human review before publishing. Consequential actions — releasing features, publishing pages, triggering automations — require explicit human sign-off.",
    example: "Pivot Parlor: staff reviews AI pages before going live",
  },
  {
    icon: ClipboardCheck,
    title: "Output Verification",
    description:
      "Check AI outputs against requirements. Cross-check factual claims. Confident-sounding output is not a substitute for verification — hallucination is always a risk, treated as such.",
    example: "PRD critique workflow · Case study content review",
  },
  {
    icon: Lock,
    title: "Permission Controls & Guardrails",
    description:
      "Least-privilege access throughout. AI systems have no more authority than needed for their task. Structured outputs, rate limits, and error handling reduce blast radius from failures.",
    example: "BytesCRM role-based access · per-tenant data isolation",
  },
  {
    icon: Brain,
    title: "Context Engineering",
    description:
      "Maintain project purpose, requirements, decisions and task lists across sessions. Prevent context degradation from compounding errors. Compact and restart with a handover document when context limits approach.",
    example: "This portfolio — built and maintained using this exact practice",
  },
];

export const buildCategories: BuildCategory[] = [
  {
    icon: LayoutTemplate,
    title: "SaaS & Booking Platforms",
    description:
      "Multi-tenant SaaS systems, CRM platforms, booking engines, and member portals. Built through structured requirements, workflow design, and AI-assisted implementation — not ad-hoc generation.",
    tags: ["Multi-tenant", "SaaS", "Bookings", "Subscriptions"],
    evidence: "BytesCRM · Pivot Parlor · BytesAI Learn",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Shopify",
    description:
      "Custom Shopify themes, conversion-focused storefronts, and product catalogues. Designed around real user behaviour and commercial objectives — not just aesthetics.",
    tags: ["Shopify", "Custom Theme", "Conversion", "UX"],
    evidence: "Active Paw",
  },
  {
    icon: BrainCircuit,
    title: "AI-Enabled Applications",
    description:
      "Generative AI integration with responsible-AI controls: input validation, human approval gates, output verification, and permission guardrails built in from the start — not added later.",
    tags: ["Generative AI", "Responsible AI", "Automation", "Governance"],
    evidence: "Pivot Parlor · BytesAI Learn · BytesCRM",
  },
];
