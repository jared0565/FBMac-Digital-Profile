import {
  AlertTriangle,
  Bot,
  Brain,
  CheckCircle,
  ClipboardCheck,
  ClipboardList,
  FileText,
  Gamepad2,
  GitCommit,
  Star,
  IterationCw,
  LayoutDashboard,
  Lightbulb,
  Lock,
  MessageSquareCode,
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
  screenshotDesktop: string;
  screenshotMobile: string;
  screenshotAlt: string;
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

export const featuredProjects: FeaturedProject[] = [
  {
    name: "BytesCRM",
    url: "https://bytescrm.app",
    tagline: "LeadGen & CRM Multi-Tenant Platform",
    color: "#6bc7c4",
    icon: Users,
    problem:
      "Agencies managing leads across scattered spreadsheets and disconnected tools, with no single source of truth and no automation.",
    solution:
      "Centralised multi-tenant CRM with 5 data types (contacts, leads, deals, subscribers, tasks), admin dashboards, automation workflows, and billing.",
    technical: [
      "Multi-tenant architecture",
      "Next.js + Node.js",
      "Role-based access control",
      "Per-tenant data isolation",
    ],
    decision:
      "Chose multi-tenant with hard data isolation over single-tenant to support agency resellers, a product decision made before a line of code was written.",
  },
  {
    name: "Active Paw",
    url: "https://activepaw.co.uk",
    tagline: "Demand-Driven Pet Store: Shopify Theme + AI Backend",
    color: "#f472b6",
    icon: ShoppingBag,
    problem:
      "A pet store where every product listing required manual effort: sourcing from suppliers, writing descriptions, managing prices, and retiring dead stock. The owner wanted customer demand to drive the catalogue automatically.",
    solution:
      "A two-repo system: a Shopify Liquid theme that captures visitor demand via search backfill and ghost cards, paired with PawScout, a Cloudflare Worker that runs LLM quality gates, vision-vets images, and auto-imports products the moment a real visitor shows interest.",
    technical: [
      "Shopify Liquid theme + App Proxy",
      "Cloudflare Worker (PawScout)",
      "LLM quality gates + vision-vetted images",
      "Import-on-first-interest pipeline",
    ],
    decision:
      "Built on Shopify App Proxy so PawScout can fail completely without breaking the store; all calls degrade to no-ops. The theme is deliberately stateless on quality; all intelligence lives in the worker.",
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
    color: "#c9a45e",
    screenshotDesktop: "/projects/bytesai-learn-desktop.webp",
    screenshotMobile: "/projects/bytesai-learn-mobile.webp",
    screenshotAlt: "BytesAI Learn homepage: curated free AI courses with a searchable catalogue",
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
    color: "#6bc7c4",
    screenshotDesktop: "/projects/bytescrm-desktop.webp",
    screenshotMobile: "/projects/bytescrm-mobile.webp",
    screenshotAlt: "BytesCRM landing page showing the live lead-pipeline dashboard",
  },
  {
    name: "Active Paw",
    url: "https://activepaw.co.uk",
    github: null,
    tagline: "Shopify Custom Theme: Pet Care Marketplace",
    description:
      "A fully customised Shopify storefront for a UK pet care marketplace. Features collection-based navigation, review-led product confidence, free-shipping threshold prompts, and a care-first support UX optimised for pet owners browsing grooming, toys, and health essentials.",
    icon: ShoppingBag,
    tags: ["Shopify", "E-commerce", "Custom Theme", "UX"],
    metrics: ["UK Market", "Conversion-Focused"],
    color: "#f472b6",
    screenshotDesktop: "/projects/active-paw-desktop.webp",
    screenshotMobile: "/projects/active-paw-mobile.webp",
    screenshotAlt: "Active Paw pet-care storefront homepage with featured collections",
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
    screenshotDesktop: "/projects/pivot-parlor-desktop.webp",
    screenshotMobile: "/projects/pivot-parlor-mobile.webp",
    screenshotAlt: "Pivot Parlor booking platform landing page with a sample booking widget",
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
    screenshotDesktop: "/projects/shikaku-desktop.webp",
    screenshotMobile: "/projects/shikaku-mobile.webp",
    screenshotAlt: "Shikaku: Puzzle Quest game menu with play and battle-arena options",
  },
  {
    name: "Oak Hill Park Cafe",
    url: "https://oak.bytesfx.com",
    github: null,
    tagline: "Real-Time Booking Platform: Family Cafe and Soft Play",
    description:
      "Full-stack platform for a Barnet family cafe: dependency-free static front end paired with a serverless booking system built on Cloudflare Pages Functions and D1. Features real-time party slot availability, a soft-hold workflow that prevents double-bookings at the database level, an owner admin panel, bot-protected enquiry forms with Resend email integration, and GDPR cookie consent. Pitched as a modernisation of their outdated site, timed around their new 5-star Food Hygiene Rating.",
    icon: Star,
    tags: ["Booking System", "Cloudflare D1", "Serverless", "Client Proposal"],
    metrics: ["5-Star Hygiene", "No SaaS Dependency"],
    color: "#4ade80",
    screenshotDesktop: "/projects/oak-hill-desktop.webp",
    screenshotMobile: "/projects/oak-hill-mobile.webp",
    screenshotAlt: "Oak Hill Park Cafe redesign hero with 5-star hygiene certificate and soft play info",
  },
];

export const processStages: ProcessStage[] = [
  { icon: Search, number: "01", label: "Problem Research" },
  { icon: Lightbulb, number: "02", label: "Idea Development" },
  { icon: ClipboardList, number: "03", label: "Product Planning" },
  { icon: FileText, number: "04", label: "Requirements (PRD)" },
  { icon: MessageSquareCode, number: "05", label: "Prompt Engineering" },
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
    label: "Case Study: BytesCRM",
    title: "Building a Multi-Tenant CRM",
    rows: [
      {
        heading: "Problem",
        body: "Agencies managing leads across scattered spreadsheets, email threads and disconnected SaaS tools, with no single source of truth.",
      },
      {
        heading: "Research",
        body: "Identified need for a centralised CRM with automation, multi-tenant data isolation, and role-based access, not a generic off-the-shelf tool.",
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
        body: "Automation guardrails: user-defined rules only. AI does not make business decisions. Permission controls: least privilege per role. Data isolation enforced at query level.",
      },
      {
        heading: "Iteration",
        body: "Multiple revision rounds on dashboard layouts, automation workflow logic, and billing integration, each driven by a specific gap or test failure.",
      },
      {
        heading: "MVP",
        body: "Core CRM pipeline + agency dashboards + basic automation rules. Deployed. Feature planning for next cycle already documented.",
      },
    ],
  },
  {
    label: "Case Study: Active Paw",
    title: "Demand-Driven Shopify Store with AI Backend",
    rows: [
      {
        heading: "Problem",
        body: "A pet accessories store requiring constant manual effort: sourcing from suppliers, writing listings, managing prices, and retiring dead stock. The owner wanted customer demand to decide what gets listed, not manual buying decisions.",
      },
      {
        heading: "Research",
        body: "Identified that Shopify's native search gap (fewer than 12 results) was wasted demand signal. Real visitor searches were revealing products the store didn't stock but suppliers could fulfil, and the opportunity was to capture that signal and act on it automatically.",
      },
      {
        heading: "Architecture Decision",
        body: "Two-repo system: Shopify Liquid theme as the demand surface, PawScout Cloudflare Worker as the intelligence layer. All supplier calls, quality gates, pricing, and import logic live in the worker; the theme is stateless. Shopify App Proxy used throughout so PawScout outages degrade gracefully to standard search.",
      },
      {
        heading: "AI Integration",
        body: "LLM quality gates on every ghost card: pet-relevance check prevents off-category products appearing in backfill. Vision API vets product images before caching, ensuring ghost cards show the correct hero image rather than a mismatched supplier thumbnail.",
      },
      {
        heading: "Responsible AI",
        body: "Pet-relevance guard added after an LLM outage let kitchen tools slip through quality gates, so the store now stays stocked with genuine pet products regardless of LLM availability. Ghost cards only surface quality-gated results; if the worker is down, the store runs as plain Shopify search with no errors shown.",
      },
      {
        heading: "Iteration",
        body: "Three real bugs fixed post-launch: ghost card showing a cat image while the product showed a dog (fixed by caching vision-vetted hero image in PawScout); modal loading slowly on first open (fixed by pre-caching supplier data on search, not on click); off-category products slipping through during LLM outages (fixed by worker-level pet-relevance fallback).",
      },
      {
        heading: "MVP",
        body: "Search backfill with ghost cards, import-on-first-interest (product live within seconds of first click), 30-day performance cull, and fulfilment automation. Live at activepaw.co.uk.",
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
    example: "Active Paw ghost-card quality gates · BytesCRM contact imports",
  },
  {
    icon: AlertTriangle,
    title: "Prompt Injection Awareness",
    description:
      "Separate trusted system instructions from user-supplied content. Restrict what AI can access. Test adversarial inputs during development, not just happy-path scenarios.",
    example: "PawScout LLM quality gates · BytesAI Learn quiz generation",
  },
  {
    icon: UserCheck,
    title: "Human Approval Gates",
    description:
      "AI-generated content requires human review before publishing. Consequential actions (releasing features, publishing pages, triggering automations) require explicit human sign-off.",
    example: "Pivot Parlor: staff reviews AI pages before going live",
  },
  {
    icon: ClipboardCheck,
    title: "Output Verification",
    description:
      "Check AI outputs against requirements. Cross-check factual claims. Confident-sounding output is not a substitute for verification; hallucination is always a risk, treated as such.",
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
    example: "This portfolio, built and maintained using this exact practice",
  },
];
