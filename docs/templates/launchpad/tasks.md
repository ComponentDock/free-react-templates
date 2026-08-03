# Launchpad (Colorlib Launchpad) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-launchpad`.

## Design notes (replication findings)

- **Original:** ColorLib "Launchpad" — developer platform / CI-CD startup
  template (source: https://colorlib.com/wp/template/launchpad/).
- **Demo DOM analyzed:** https://launchpad-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/launchpad/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** crisp developer-tools
  startup landing — light surfaces with indigo (#4f46e5) primary accents,
  Manrope font, rounded cards, pill buttons, stats strip in hero, dark
  footer with newsletter, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: About, Features, How It Works, Pricing, Testimonials, FAQ,
     Integrations, Blog, Changelog, Contact + "Get Early Access".
  2. Hero: "Ship products 10x faster" + See it in action / Watch Demo +
     stats (2,000+ Beta Users, 99.9% Uptime, $2.5M Raised, 4.9 Rating).
  3. Features: CI/CD Pipeline, Real-time Analytics, Team Collaboration,
     Auto-scaling, Security First, Developer API.
  4. How It Works: Connect, Build, Deploy.
  5. Integrations: GitHub, GitLab, Slack, AWS, Vercel, Docker, Jira, Figma.
  6. Pricing: Hobby (free), Startup, Scale.
  7. Testimonials: "Trusted by fast-moving startups".
  8. FAQ (6 questions: CI/CD differences, migration, cloud providers, free
     tier, auto-scaling, support).
  9. Waitlist CTA: "Ready to launch faster?" + Get Early Access.
  10. Footer: Product / Resources / Company / Stay Updated (Subscribe) +
      © 2026 LaunchPad.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#4f46e5** (indigo-600; scale #818cf8, #c7d2fe).
  - Neutrals: white/gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827)/black.
  - Font: **"Manrope"** (300–800) via Google Fonts.
  - Shapes: rounded-lg cards, pill buttons and chips.
- **Recreation name:** Launchpad (kept — matches ColorLib name). App folder
  `apps/launchpad`, package `@free-react-templates/launchpad`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/launchpad-<n>/<w>/<h>`); lucide-react icons; Manrope
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome;
  FAQ as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-launchpad/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/launchpad` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/launchpad`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-launchpad`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
