# Schola (Colorlib Academix) — Tasks & Design Notes

> Recreation of ColorLib "Academix" (education landing). Prep artifacts were
> originally written under the source name; the implementer renamed them to
> the new template name **Schola** (source names are never reused).

## Design notes (replication findings)

- **Original:** ColorLib "Academix" — education template
  (source: https://colorlib.com/wp/template/academix/).
- **Demo DOM analyzed:** https://academix-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/academix/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).

⚠️ **Pointer status (re-verified 2026-10-13c):** the Cloudflare Pages mirror
`https://academix-colorlib.pages.dev/` **no longer resolves** — DNS
**NXDOMAIN** (`EAI_NONAME`), re-checked 2026-10-13c; all 48
`<slug>-colorlib.pages.dev` hosts this family of preps cites are gone. The
DOM/CSS evidence below was measured from that mirror at prep time and stays
the fidelity reference. The demo family now answers from the ColorLib preview
host `https://preview.colorlib.com/theme/academix/` (this prep recorded a
**404** on that path at prep time — the move onto the preview host happened
after it, so treat the path as unverified). The host answered the provider's
bot wall (**403**, 17 B `text/plain`, Cloudflare error 1106) while this note
was written, so its own reading could not be re-taken this run — re-probe it
before relying on it. ⚠️ `apps/schola` was built from the mirror's tokens
before this migration, so the app follows the mirror, not today's preview
host.
- **Visual design (from DOM + Tailwind classes):** modern education landing
  — light gray neutrals with dark-mode support, DM Sans + Space Grotesk
  fonts, teal (#008574) primary + orange (#e65f2a) accent, rounded-2xl
  cards, gradient CTA with glow.
- **Structure (1:1, section order):**
  1. Navbar: geometric logo, Courses, Categories, Instructors, Pricing,
     About, Sign in, Get Started, dark-mode toggle, mobile menu.
  2. Hero: "New: AI & Machine Learning Track" badge, H1 "Forge Your Future
     with Expert-Led Courses", blurb, Browse Courses / View Pricing CTAs,
     course-card visual, stats strip (100K+ learners, 500+ courses, 95%
     completion, 4.9 rating).
  3. Categories: "Browse by Category" — 8 colored icon tiles.
  4. Featured Courses: 5 course cards with badges, level, instructor,
     rating, price.
  5. Features: "Everything You Need to Succeed" — 6 tiles.
  6. Instructors: "Learn from Industry Leaders" — 5 profiles.
  7. Testimonials: "What Our Learners Say" — 4 quotes.
  8. Pricing: "Choose Your Learning Path" — monthly/yearly toggle, Explorer
     (free), Professional ($39/mo), Enterprise ($79/mo).
  9. CTA band: "Ready to Start Your Learning Journey?" + trust bullets.
  10. Footer: 4 link columns + socials + copyright.
- **Design tokens extracted from the DOM:**
  - Primary teal scale (primary-500 ≈ `#008574`, oklch(55% .14 180)).
  - Accent orange (accent-500 ≈ `#e65f2a`, oklch(65% .18 40)).
  - Gray neutrals, `bg-gray-100/50` section bands, dark-mode aware.
  - Fonts: **"DM Sans"** (body) + **"Space Grotesk"** (display) via Google
    Fonts `<link>`.
- **Recreation name:** Schola (NEW name — the ColorLib source name
  "Academix" is never reused). App folder `apps/schola`, package
  `@free-react-templates/schola`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/schola-<n>/<w>/<h>`); lucide-react icons + inline SVG
  brand icons; DM Sans + Space Grotesk via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-schola/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/schola` (copy the section-rich landing app pattern —
      Synapse; rename package to `@free-react-templates/schola`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh schola` + `npm run spec:validate`.
- [ ] Push `feat/template-schola`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
