# Boost (ColorLib Webapp) — Tasks & Design Notes

> Recreation of ColorLib "WebApp" under the NEW original name **Boost** (the
> original prep used the source name "WebApp", which predates the mandatory
> new-name rule — the spec/docs/app were renamed to Boost on
> `feat/template-boost`).

## Design notes (replication findings)

- **Original:** ColorLib "WebApp" — web app / software marketing template
  (source: https://colorlib.com/wp/template/webapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/webapp/
  (HTTP 200, full rendered DOM + `css/style.css` (60KB) extracted).
- **Visual design (from DOM + CSS tokens):** software marketing landing with
  an **orange** brand (`#fd7e14`), Open Sans font, light (`#f8f9fa`)
  sections, a "Boost Productivity" hero with a dashboard mockup image,
  feature grids, testimonials, pricing, blog, and a contact form.
- **Structure (1:1, section order):**
  1. Navbar: logo "Boost." + Home, Features, Pricing, Blog, Contact +
     dark-mode toggle.
  2. Hero: h1 "Boost Productivity with Boost" + blurb + **Try it for free**
     - dashboard illustration (picsum seed `boost-hero`).
  3. Features: "The Features" + 6 tiles — Powerful Apps, Strategic
     Partners, Business in Mind, Innovative Technologies, Many Features,
     Easy to use (icon + title + blurb).
  4. More Features: "More Features" + 2 image cards (Strategic Partners,
     Business in Mind).
  5. Testimonials: "What People Says" + User Collaboration, Mobile
     Integration, Smart Analytics.
  6. Pricing: "Pricing for All" + Starter $30/yr, Professional $72/yr,
     Enterprise $130/yr (feature lists + Buy Now buttons; Professional is
     the highlighted/primary tier per the source's `btn-primary`).
  7. Blog: "News & Updates" + 3 cards (image, title, author · date ·
     category, blurb, "Continue Reading...").
  8. Contact: CTA band "Join over 1,700 companies that trust us." + "Try
     it for free"; contact details (address 203 Fake St. Mountain View,
     phone +1 232 3235 324, email); form (First Name, Last Name, Email,
     Subject, Message + Send Message) — prevents default, no backend.
  9. Footer: About Us blurb, Quick Links (Terms, Policy, About Us,
     Services, Testimonials, Contact Us), Follow Us (social), Subscribe
     Newsletter (email + Send), copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#fd7e14`** (buttons, accents); white text on primary.
  - Light bgs `#f8f9fa` (`.bg-light`), borders `#dee2e6`.
  - Near-black headings `#212529`, secondary text `#6c757d`.
  - Font: **"Open Sans"** (Google Fonts `<link>`); icomoon icons (replaced
    by lucide-react).
- **Recreation name:** **Boost** — app folder `apps/boost`, package
  `@free-react-templates/boost` (NEW name, distinct from the ColorLib
  source "WebApp").
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/boost-<n>/<w>/<h>`); lucide-react icons; Open Sans
  via Google Fonts; forms prevent default (no backend); orange primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication: preview DOM + CSS tokens captured (above).
- [x] Write `openspec/specs/template-boost/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above, Boost naming).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/boost` (copy the catwalk app scaffold; rename package to
      `@free-react-templates/boost`; keep `injectUiSource()` in vite.config).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] `npm install` at root so package-lock.json registers the workspace.
- [ ] Per-app gate: `bash scripts/verify-app.sh boost` + `npm run spec:validate`.
- [ ] Push `feat/template-boost`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md Webapp entries `[~]` → `[x]` + Surge URL +
      homepage + `npm run readme:status` (bookkeeping on main, state D).
