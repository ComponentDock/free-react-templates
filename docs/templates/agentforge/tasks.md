# Agentforge (Colorlib Agentforge) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-agentforge`.

## Design notes (replication findings)

- **Original:** ColorLib "Agentforge" — AI agent platform template
  (source: https://colorlib.com/wp/template/agentforge/).
- **Demo DOM analyzed:** https://agentforge-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/agentforge/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** dark-themed AI platform
  landing — `gray-800/900/950` surfaces with light text, Manrope font,
  "Build Autonomous AI Agents" hero, a 6-card feature grid (Agent Builder,
  Workflow Orchestration, Knowledge Base, Multi-Agent Teams, API Gateway,
  Monitoring & Observability), a "Trusted by AI Teams Everywhere" social
  proof band, and a "Talk to Our Team" CTA.
- **Structure (1:1, section order):**
  1. Navbar: Platform, Pricing, Integrations, About, Blog, Contact,
     Start Building.
  2. Hero: "Build Autonomous AI Agents" + CTA.
  3. Features: "Everything You Need to Build AI Agents" grid.
  4. Social proof: "Trusted by AI Teams Everywhere".
  5. CTA: "Talk to Our Team".
  6. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Dark surfaces (`gray-800/900/950`), light text, subtle borders.
  - Font: **"Manrope"** (Google Fonts `<link>`).
- **Recreation name:** Agentforge (kept — matches ColorLib name). App
  folder `apps/agentforge`, package `@free-react-templates/agentforge`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/agentforge-<n>/<w>/<h>`); lucide-react icons;
  Manrope via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-agentforge/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/agentforge` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/agentforge`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-agentforge`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
