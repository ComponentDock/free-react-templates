# Prism (Colorlib Appli) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-prism`.

## Design notes (replication findings)

- **Original:** ColorLib "Appli" — app landing / personalization platform
  (source: https://colorlib.com/wp/template/appli/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appli/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (55KB) extracted).
- **Visual design (from DOM + CSS tokens):** app landing with a **blue**
  brand (`#404DFF`), Raleway + Muli fonts, light (`#f9f9ff`, `#f0e9ff`)
  sections, stacked text/image splits, a 6-tile services grid, and a job
  CTA band.
- **Structure (1:1, section order):**
  1. Navbar: logo + links Home, Features, About, FAQ, Blog, Contact +
     **Log in** button.
  2. Hero: h1 "Stay connected together in your own business network" +
     blurb + **Get Started Now**.
  3. Split: "Finally focus on my marketing strategy and delegate" + blurb.
  4. Services: 6 tiles — **Design & creatives, Telecommunication,
     Restaurant, Programing, Architecture, …** — icon + title + blurb.
  5. Split: "You have the power to personalize your website coding." +
     blurb + **See how it work**.
  6. Split: "Personalized experiences are proven to increase conversions" +
     blurb + **See how it work**.
  7. Testimonials: "Amazing customer review" + quote + **Robart Brown —
     Creative designer at Colorlib** (2 slides in original).
  8. CTA: "Start finding your dream job" + blurb + **Browse Job**.
  9. Footer: blurb + **Our solutions / Company / Support** link columns
     (Design & creatives, Telecommunication, Restaurant, Programing,
     Architecture), social icons + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#404DFF`** (buttons, accents).
  - Dark navy `#1f2b7b`; light section bgs `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"Raleway"** + **"Muli"** (Google Fonts via `<link>`).
  - Buttons: blue bg, white text, rounded.
- **Recreation name:** Prism (personalization/app themed, distinct from
  "Appli" and all existing names). App folder `apps/prism`, package
  `@free-react-templates/prism`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/prism-<n>/<w>/<h>`); lucide-react icons (replaces
  flaticon/themify); Raleway + Muli via Google Fonts; forms prevent default
  (no backend); blue primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-prism/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/prism` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/prism`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-prism`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
