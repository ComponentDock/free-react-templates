# Cortex (Colorlib Agentforge) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-cortex`.

## Design notes (replication findings)

- **Original:** ColorLib "Agentforge" — AI agent platform template
  (source: https://colorlib.com/wp/template/agentforge/).
- **Demo DOM analyzed:** https://agentforge-colorlib.pages.dev/
  (HTTP 200; `preview.colorlib.com/theme/agentforge/` returns 404 — demo
  hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + bundled CSS + screenshot):** light-default AI
  platform landing with class-based dark mode (matching the original's
  `dark:` classes), Manrope font, emerald green primary
  (`#059669` = primary-600), "Build Autonomous AI Agents" hero with badge,
  stats row and Python code panel, 6-card feature grid, testimonial social
  proof, contact form + info cards, FAQ accordion, closing CTA, footer.
- **Structure (1:1, section order):**
  1. Navbar: Platform, Pricing, Integrations, About, Blog, Contact,
     Start Building.
  2. Hero: badge ("Trusted by 10,000+ developers worldwide") + H1 "Build
     Autonomous AI Agents" + blurb + Start Building Free / View
     Documentation + stats (100K+ / 5B+ / 200+ / 99.99%) + code panel.
  3. Features: "Everything You Need to Build AI Agents" — Agent Builder,
     Workflow Orchestration, Knowledge Base, Multi-Agent Teams, API
     Gateway, Monitoring & Observability.
  4. Social proof: "Trusted by AI Teams Everywhere" + testimonial cards.
  5. Contact: "Talk to Our Team" — form (Full Name, Email, Phone, Project
     Type, Details, Send Message) + Phone / Email / Address / Office Hours.
  6. FAQ: "Frequently Asked Questions" — accordion (4 Q&As).
  7. CTA: "Ready to Build Your First Agent?" + Start Building Free /
     Read the Docs.
  8. Footer: Platform / Resources / Company columns + copyright + socials.
- **Design tokens extracted from the DOM + CSS:**
  - Primary emerald scale: `#34d399` 400 / `#10b981` 500 / `#059669` 600 /
    `#047857` 700; solid `bg-primary-600 text-white` rounded-lg buttons.
  - Dark surfaces: `gray-950 #030712` / `gray-900 #111827` /
    `gray-800 #1f2937`; light surfaces: `gray-50`, `gray-100`.
  - Text: `gray-400/500/600`, headings `gray-900`.
  - Font: **"Manrope"** (Google Fonts, 300–800).
  - Cards: `rounded-2xl` white / dark `gray-800`.
- **Recreation name:** Cortex (NEW name — never reuse "Agentforge").
  App folder `apps/cortex`, package `@free-react-templates/cortex`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/cortex-<n>/<w>/<h>`); lucide-react icons; Manrope
  via Google Fonts `<link>`; emerald primary in `@theme` (so shared
  Button/ButtonLink `primary` variants resolve to the brand green);
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-cortex/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/cortex` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/cortex`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh cortex` (typecheck + lint +
      coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-cortex`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
