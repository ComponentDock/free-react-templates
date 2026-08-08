# Dealflow (ColorLib Pipelineiq) — Tasks & Design Notes

> Recreation of ColorLib "Pipelineiq"
> (https://colorlib.com/wp/template/pipelineiq/) under the NEW name
> **Dealflow** (deals + pipeline flow), per the monorepo naming mandate
> (never reuse the ColorLib source name). Replaces the stale
> `template-pipelineiq` prep (forbidden source name), same as
> Logitrans→Freightly.

## Design notes (replication findings)

- **Original:** ColorLib "Pipelineiq" — sales / CRM platform Astro
  template.
- **Demo DOM analyzed:** https://pipelineiq-colorlib.pages.dev/ (HTTP 200,
  ~70 KB HTML + `/_astro/Base.BWd83FKH.css` ~64 KB parsed for tokens; the
  official `https://preview.colorlib.com/theme/pipelineiq/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal, same
  pattern as Logitrans→Freightly).
- **Visual design (screenshot `pipelineiq-template-1771943984801.jpg`):**
  modern dark-themed SaaS landing — deep navy gradient hero with subtle
  mesh effect, glassmorphism dashboard mockup (macOS window dots, "$2.4M"
  - green "Live Demo" badge + 4-bar chart), electric blue (#2563eb)
    primary CTAs and headline highlight, pill buttons, stats row (10K+
    Teams Worldwide, 50M+ Deals Tracked, 99.9% Uptime SLA, 4.9/5 User
    Rating), Inter typography. Screenshot headline shows "Close More Deals
    with Smart Pipelines"; live DOM says "AI-Powered CRM" — use the DOM copy.
- **Structure (1:1, section order):**
  1. Navbar: "PipelineIQ" logo, links Features, Pricing, Integrations,
     About, Blog, Contact, "Start Free Trial" pill CTA, mobile hamburger,
     dark-mode toggle.
  2. Hero (dark `from-gray-950 via-blue-950/30 to-gray-950` gradient):
     badge "Trusted by 10,000+ sales teams worldwide", H1 "Close More
     Deals with AI-Powered CRM" (blue highlight on the tail phrase),
     subtext, "Start Free Trial" / "Book a Demo" buttons, stats row
     (10K+ / 50M+ / 99.9% / 4.9/5), dashboard mockup card ($2.4M +24%
     this month, $890K, bar chart New Leads/Qualified/Proposals/Closed
     Won, green "Live Demo" badge).
  3. Features: "Everything You Need to Sell Smarter" — 6 cards: Pipeline
     Management (drag-and-drop stages, workflows, forecasting), Contact
     Management, Email Automation (sequences, opens/clicks, follow-ups),
     Sales Analytics (dashboards, win/loss, forecasting), Team
     Collaboration (leads, notes, handoffs), AI Lead Scoring (ML
     engagement patterns).
  4. Testimonials: "Trusted by Sales Leaders" — 6-quote carousel with
     round prev/next buttons; attributions: VP of Sales TechScale Inc.,
     Sales Director GrowthWave, Sales Manager DataBridge, + 3 more.
  5. Contact: "Talk to Our Sales Team" — Phone (555) 234-5678, Email
     sales@pipelineiq.com, Address, Office Hours (Mon–Fri 8:00 AM – 6:00
     PM PST) + "Ready to transform your sales process?" blurb.
  6. FAQ: "Frequently Asked Questions" — accordion, 6 questions (setup
     time, CRM import, integrations, data security, free trial, support);
     confirmed in DOM: "Can I import data from my existing CRM?", "Do you
     offer a free trial?", "What kind of support is available?".
  7. CTA: "Ready to Close More Deals?" — "Join 10,000+ sales teams already
     using PipelineIQ..." + "Book a Demo" / "Start Trial" buttons on
     `from-primary-600 to-primary-800` gradient band.
  8. Footer (bg-gray-900): brand + blurb "Smart CRM that closes deals.
     AI-powered sales platform for modern teams...", columns Product /
     Company / Support, phone + email, copyright, Privacy + Terms, cookie
     banner (Accept All / Decline), back-to-top round button.
- **Design tokens (from Base.BWd83FKH.css + DOM):**
  - Brand: #2563eb (blue-600; #1d4ed8, #3b82f6, #60a5fa, #93c5fd).
  - Neutrals: #fff #f9fafb #f3f4f6 #e5e7eb #d1d5db #9ca3af #6b7280
    #4b5563 #374151 #1f2937 #111827 #030712.
  - Font: Inter 300–800 (Google Fonts).
  - Shapes: rounded-lg controls, rounded-xl cards, rounded-2xl dashboard,
    rounded-full pills/carousel-nav/back-to-top; CTA gradient
    from-primary-600 to-primary-800; hover:bg-primary-700; focus ring
    primary-500; dark-mode variants everywhere.
- **Recreation decisions:** seeded picsum placeholders
  (`picsum.photos/seed/dealflow-<n>/<w>/<h>`); lucide-react icons; Inter
  via Google Fonts `<link>`; shared packages/ui chrome (Navbar w/ dark
  toggle, Footer, Button, ButtonLink, Badge, Card, cn); dashboard mockup
  is pure divs/Tailwind (flex column bars), no chart lib; FAQ accordion
  with state (or `<details>`); no new dependencies.

## Tasks (implementation order)

- [ ] Scaffold `apps/dealflow` (copy simplest existing app; package
      `@free-react-templates/dealflow`; Tailwind 4 `@theme` with primary
      #2563eb scale + Inter)
- [ ] Spec-driven tests first (red): nav, hero, stats, dashboard mockup,
      features, testimonials, contact, FAQ, CTA, footer, page composition
- [ ] Navbar: logo "Dealflow", 6 anchor links, "Start Free Trial" pill,
      dark-mode toggle, mobile hamburger
- [ ] Hero: dark gradient, badge, H1 with blue-highlighted tail, subtext,
      dual CTAs, 4-stat row, dashboard mockup card
- [ ] Features: 6 cards (icon + title + blurb) under "Everything You Need
      to Sell Smarter"
- [ ] Testimonials: carousel with prev/next round buttons, 6 quotes with
      name/role attribution
- [ ] Contact: 4 info cards (Phone / Email / Address / Office Hours)
- [ ] FAQ: accordion, 6 questions
- [ ] CTA band: gradient, "Ready to Close More Deals?" + dual buttons
- [ ] Footer: brand blurb, 3 link columns, contact, copyright, Privacy +
      Terms
- [ ] Cookie banner (Accept All / Decline) + back-to-top button
- [ ] Green: `npm run verify:app dealflow` (typecheck, lint, vitest 100%
      coverage, build)
- [ ] PR → merge immediately; mark TEMPLATES.md `[x]` + surge URL +
      `npm run readme:status` after deploy
