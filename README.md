# TRUST CODE SYSTEM — Modular Event Perimeter Infrastructure

> **"Transforming Event Perimeters Into Revenue-Generating Infrastructure. Every Inch Matters."**

This is the official, production-ready corporate website and investor presentation platform for **TRUST CODE SYSTEM**, a company developing a Modular Event Perimeter System designed to unlock new commercial revenue across large-scale festivals, concerts, sporting tournaments, and temporary outdoor venues.

---

## 1. Executive Summary & Core Platform Pillars

1. **The Innovation:** A modular infrastructure system combining deployable pods (20ft & 40ft footprint cassettes), customized architectural containers, and connected perimeter panels with integrated utility channels and wind-load certified ballasts.
2. **The Business Opportunity:** Turning underutilized event perimeter fencing into structured commercial storefronts, VIP viewing suites, sponsor showcases, and code-compliant sanitation modules.
3. **The Investment Potential:** A scalable infrastructure business model with a stated potential gross revenue opportunity of **$200 million–$500 million**, subject to project scope, deployment scale, commercial partnerships, and financial validation.

---

## 2. Technical Architecture & Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript 5.9+ (Strict Mode)
- **Styling:** Tailwind CSS v4 with custom architectural tokens
- **Design System:** Strict light-themed corporate aesthetic (`#FFFFFF` background, `#14243A` deep navy, `#2457A7` cobalt blue, `#D9A65A` champagne gold, `#E4E8EF` light gray borders)
- **Centralized Tokens:** `src/config/theme.ts`
- **Iconography:** `lucide-react`
- **Video:** Responsive 16:9 YouTube video embed (`https://www.youtube.com/embed/XpX3g_WcJ1E?si=CywOK-8z63XMLUyA`)
- **Interactive Tools:** Live Illustrative Revenue Calculator with dual-scenario modeling (annual & multi-year fleet ramp) and deployment scenario blueprints.
- **Inquiry Backend:** Next.js API Route (`app/api/inquiry/route.ts`) with input sanitization, RFC 5322 email validation, and structured error responses.

---

## 3. Project Directory Structure

```text
├── app/
│   ├── api/
│   │   └── inquiry/
│   │       └── route.ts          # Server-side inquiry handling & logging
│   ├── globals.css               # Tailwind CSS v4 imports & base variables
│   ├── layout.tsx                # Root layout with SEO, OpenGraph, JSON-LD schema
│   └── page.tsx                  # Home page assembling all 15 sections
├── components/
│   ├── Navbar.tsx                # Sticky header obeying Top Bar Contract
│   ├── HeroSection.tsx           # Hero section with architectural visual & proof strip
│   ├── OpportunitySection.tsx    # Problem explanation & Before/After comparison
│   ├── ModularSystemSection.tsx  # Exploded architectural diagram & component explorer
│   ├── SolutionsGrid.tsx         # 6 ecosystem solution cards with inspection modals
│   ├── BusinessModelSection.tsx  # 4-stage operational process & value pipeline
│   ├── RevenueStreamsSection.tsx # 7 distinct commercial revenue channels
│   ├── RevenueCalculator.tsx     # Interactive $200M–$500M revenue model calculator
│   ├── DeploymentScenarios.tsx   # Regional, Multi-Day, & Ecosystem scenarios
│   ├── VisionVideoSection.tsx    # Responsive 16:9 executive vision video embed
│   ├── InvestorThesisSection.tsx # 6 investment pillars & qualification notes
│   ├── GoToMarketTimeline.tsx    # 4-phase staged execution roadmap
│   ├── CapitalDeploymentSection.tsx # Strategic funding allocation pillars
│   ├── InvestorContactForm.tsx   # Validated lead capture & inquiry submission
│   ├── Footer.tsx                # Light footer with brand links & legal dialogs
│   └── LegalModal.tsx            # Accessible Privacy Policy & Terms of Use dialogs
├── lib/
│   ├── data.ts                   # Structured content, specs, scenarios, and streams
│   └── utils.ts                  # ClassName helper & utility functions
├── public/
│   └── images/                   # High-resolution architectural renderings
├── src/
│   ├── assets/images/            # High-fidelity architectural generated images
│   └── config/
│       └── theme.ts              # Centralized theme tokens & color variables
├── types/
│   └── index.ts                  # TypeScript definitions for forms, scenarios, etc.
├── .env.example                  # Environment configuration template
├── metadata.json                 # AI Studio application metadata
└── package.json                  # Dependencies & npm scripts
```

---

## 4. Local Installation & Development

### Prerequisites

- Node.js 20.x or later
- npm or pnpm

### Setup Steps

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (runs on port 3000)
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 5. Environment Variables & Backend Integration

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Supported Variables

- `GEMINI_API_KEY`: Automatically injected at runtime for server-side AI tasks.
- `APP_URL`: Base deployment URL for Open Graph and canonical metadata.
- `MONGODB_URI` *(Optional)*: MongoDB connection string for persisting inquiry records.
- `RESEND_API_KEY` *(Optional)*: Email dispatch service for immediate executive alerts.
- `NOTIFICATION_RECIPIENT_EMAIL` *(Optional)*: Destination address for confidential investor inquiries.

---

## 6. Production Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 7. Financial Integrity & Compliance Notice

The stated figure of **$200 million–$500 million** represents a preliminary potential gross revenue opportunity at scale and is not verified annual company revenue, net profit, valuation, or a guaranteed financial forecast. Actual performance is subject to negotiated commercial agreements, event cadence, unit utilization, capital requirements, operating costs, and market demand.
