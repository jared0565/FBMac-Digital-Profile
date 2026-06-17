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
    tagline: "AI-Powered CRM with Embeddable Chatbot Widget",
    color: "#6bc7c4",
    icon: Users,
    problem:
      "Small businesses lose website visitors without capturing them as leads, then manage the few they do get across disconnected tools: a separate chatbot, a separate CRM, and separate billing.",
    solution:
      "A single platform: an embeddable AI chatbot widget that captures leads from any website, a full CRM pipeline to manage them, and a pay-per-lead overflow model so businesses start free and only pay as they grow.",
    technical: [
      "Multi-tenant SaaS architecture",
      "React 18 + shadcn/ui + Base44 serverless (Deno)",
      "Embeddable JS chatbot widget (GDPR-compliant)",
      "Stripe subscriptions + pay-per-lead billing",
      "OpenRouter / Claude / Gemini AI",
      "Lead attribution engine (UTM, GA4, Google Ads, Meta Pixel)",
    ],
    decision:
      "The overflow lead model was a deliberate product decision: leads above the plan limit are locked behind a one-time unlock payment rather than lost or auto-billed. This kept the free tier genuinely useful while creating a natural, low-friction upsell path.",
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
    tagline: "Curated Discovery Platform for Free AI Courses",
    description:
      "A human-curated platform surfacing 100+ verified-free AI courses from Google, Anthropic, Stanford, DeepLearning.AI, Microsoft, NVIDIA, and 20+ other providers. Curation is the product: every course verified free, precisely categorised, and contextualised so learners can decide in under 60 seconds without signing up. Features intelligent search and filters, a Gemini-powered recommendation chatbot, personalised knowledge-gap quiz, AI Insights editorial feed, progress tracking (saved, started, completed), and engagement-based trending rankings. Built on Next.js 16 (App Router, React 19) running on Cloudflare Workers via OpenNext, with Cloudflare D1, KV, and R2.",
    icon: TrendingUp,
    tags: ["Curation Platform", "EdTech", "AI Chatbot", "Cloudflare"],
    metrics: ["100+ Free Courses", "20+ Providers"],
    color: "#c9a45e",
    screenshotDesktop: "/projects/bytesai-learn-desktop.webp",
    screenshotMobile: "/projects/bytesai-learn-mobile.webp",
    screenshotAlt: "BytesAI Learn homepage: curated free AI courses with a searchable catalogue",
  },
  {
    name: "BytesCRM",
    url: "https://bytescrm.app",
    github: null,
    tagline: "AI-Powered CRM with Embeddable Chatbot Widget",
    description:
      "A full-stack multi-tenant CRM for small businesses and freelancers: an embeddable AI chatbot widget (single script tag, GDPR-compliant with cookie consent) captures leads from any website; a Kanban pipeline, contact management, autoresponder sequences, and Gmail reply tracking manage them. Leads above plan limit enter an overflow queue with a one-time pay-per-lead unlock. Built on React 18, shadcn/ui, TanStack Query v5, Base44 serverless (Deno, ~78 functions), with Stripe, Resend, and OpenRouter (Claude + Gemini). Attribution engine ties leads back to UTM parameters, Google Ads click IDs, and Meta Pixel events.",
    icon: Users,
    tags: ["Multi-tenant", "CRM", "AI Chatbot", "Lead Capture"],
    metrics: ["Free Tier", "Pay-Per-Lead"],
    color: "#6bc7c4",
    screenshotDesktop: "/projects/bytescrm-desktop.webp",
    screenshotMobile: "/projects/bytescrm-mobile.webp",
    screenshotAlt: "BytesCRM landing page showing the live lead-pipeline dashboard",
  },
  {
    name: "Active Paw",
    url: "https://activepaw.co.uk",
    github: null,
    tagline: "Shopify Liquid Theme: Demand-Driven Catalogue with AI Import Pipeline",
    description:
      "A demand-driven Shopify Liquid theme where the catalogue self-manages: no manual product listings. When Shopify returns fewer than 12 search results, the theme calls PawScout (a Cloudflare Worker) and fills the grid with quality-gated ghost cards sourced live from suppliers. Clicking a ghost card opens an instant preview modal while PawScout imports the product in the background; when ready, the CTA flips from 'View details' to 'Add to cart'. Performance beacons track real human engagement; products with no activity in 30 days are auto-archived. Orders trigger automated CJ fulfilment with tracking written back to Shopify. Degrades gracefully via App Proxy if PawScout is unavailable.",
    icon: ShoppingBag,
    tags: ["Shopify Liquid", "Demand-Driven", "Cloudflare Worker", "App Proxy"],
    metrics: ["Ghost Card Backfill", "Auto Fulfilment"],
    color: "#f472b6",
    screenshotDesktop: "/projects/active-paw-desktop.webp",
    screenshotMobile: "/projects/active-paw-mobile.webp",
    screenshotAlt: "Active Paw pet-care storefront homepage with featured collections",
  },
  {
    name: "Pivot Parlor",
    url: "https://pivotparlor.com",
    github: null,
    tagline: "Multi-tenant SaaS: AI-Generated Booking Sites for Barbershops",
    description:
      "A multi-tenant SaaS platform where each barbershop or beauty salon gets its own AI-generated, fully branded booking site at pivotparlor.com/<shopSlug>: theme, copy, logo, hero image, and per-service photography generated per shop. Customers book as guests (no platform account required). Each shop has a dedicated AI chatbot grounded in its own live services, pricing, and promotions, answering only from real data. Shop owners manage staff, schedules, bookings, walk-in queues, waitlists, and revenue analytics via Stripe Connect. Built on Remix (Cloudflare Pages BFF) + Hono API (Cloudflare Workers), with D1, KV, R2, and Queues as a Turborepo monorepo.",
    icon: Scissors,
    tags: ["Multi-tenant SaaS", "AI Site Generation", "Cloudflare Edge", "Guest Booking"],
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
    tagline: "Competitive Logic Puzzle PWA: 100 Levels, Real-Time ELO Battles",
    description:
      "A competitive browser-based PWA built with zero frameworks: vanilla HTML5, CSS3, and JavaScript with HTML5 Canvas dual-layer rendering and procedurally synthesized audio (no audio files to download). Features 100 hand-crafted Shikaku puzzles across 10 themed worlds with 3-star scoring, and a Battle Arena with ELO-rated 1v1 matchmaking, live opponent progress bars, fair-play puzzle rotation, and server-side solution validation via SHA-256 hashing to prevent cheating. Progress syncs across devices via Cloudflare KV; offline-first via LocalStorage with cloud migration on login. Deployed on Cloudflare Pages with serverless Workers API.",
    icon: Gamepad2,
    tags: ["No Framework", "Real-time Multiplayer", "ELO Matchmaking", "PWA Offline"],
    metrics: ["100 Levels", "1v1 ELO Battles"],
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
    title: "AI-Powered CRM with Embeddable Chatbot",
    rows: [
      {
        heading: "Problem",
        body: "Small businesses lose website visitors without capturing them as leads. The tools that exist are either too expensive (Salesforce, HubSpot at scale), too generic (no built-in lead capture), or disconnected (chatbot, CRM, and billing are three separate products stitched together).",
      },
      {
        heading: "Research",
        body: "Identified three gaps: solo founders cannot afford per-seat enterprise pricing; standard CRMs have no website lead capture built in; and the setup required is too complex for a business owner without a developer.",
      },
      {
        heading: "Requirements (PRD)",
        body: "Embeddable chatbot widget (single script tag), lead inbox with overflow-and-unlock model, CRM pipeline (contacts, deals, tasks), autoresponder email sequences, Stripe-powered tiered billing with pay-per-lead unlocks, and role-based access (User, Admin, Developer).",
      },
      {
        heading: "Architecture Decision",
        body: "Multi-tenant SaaS: each business account has isolated data, its own chatbot configuration, and independent billing. React 18 frontend, Base44 (Deno-based serverless) for the backend and entity store, Stripe for subscriptions and per-lead payments, Resend for transactional email, OpenRouter with Claude and Gemini powering the chatbot AI. The chatbot ships as a standalone embeddable JS widget, separate from the main app bundle.",
      },
      {
        heading: "AI-Assisted Implementation",
        body: "Each module scaffolded with AI assistance, output reviewed, gaps identified, corrections specified, then retested. Human sign-off at each module before moving on. AI provider cost monitored via a built-in pricing governance dashboard.",
      },
      {
        heading: "Responsible AI",
        body: "Chatbot conversations are rule-scoped: AI cannot take actions outside its defined flow. Role-based access enforced throughout (User, Admin, Developer). Stripe environment switching (Test vs Live) requires explicit developer-level action with full audit logging. Overflow lead expiry emails give business owners 48h and 24h warnings before leads are permanently removed.",
      },
      {
        heading: "Iteration",
        body: "Five real pain points drove post-launch additions: losing website visitors (added chatbot widget); cost barrier (free tier with overflow model); attribution blind spots (UTM, Google Ads click ID, Meta Pixel tracking); onboarding friction (guided setup, under 10 minutes to first lead); and account recovery (structured deletion cooldown and re-registration flow).",
      },
      {
        heading: "MVP",
        body: "Chatbot widget + lead inbox + CRM pipeline + Stripe billing deployed. Tiered plans (Free, Starter, Pro, Business, Enterprise) live. Smart Chatbot AI add-on and message top-up packs in the roadmap.",
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
    example: "PawScout LLM quality gates · BytesAI Learn chatbot and AI article generation",
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
    example: "BytesCRM role-based access (User, Admin, Developer) · Stripe environment gating",
  },
  {
    icon: Brain,
    title: "Context Engineering",
    description:
      "Maintain project purpose, requirements, decisions and task lists across sessions. Prevent context degradation from compounding errors. Compact and restart with a handover document when context limits approach.",
    example: "This portfolio, built and maintained using this exact practice",
  },
];
