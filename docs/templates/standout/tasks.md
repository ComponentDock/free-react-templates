# Standout (Colorlib Standout) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-standout`.

## Design notes (replication findings)

- **Original:** ColorLib "Standout" — mail-app landing page template
  (source: https://colorlib.com/wp/template/standout/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/standout/
  (HTTP 200, full rendered DOM + `css/main.css` (89KB) extracted).
- **Visual design (from DOM + CSS tokens):** mail-app landing with a
  **green** brand (`#00a650`), IBM Plex Sans + Serif fonts, an "An Amazing
  App That Does It All." hero, about with 4 feature points, and a 4-step
  how-it-works.
- **Structure (1:1, section order):**
  1. Navbar: logo "Standout" + Intro, About, Features, Pricing, Blog,
     Menu.
  2. Hero: h1 "An Amazing App That Does It All." + blurb + **Get The App**
     - Scroll Down.
  3. About: "The Most Popular And Number 1 Mail App." + blurb + 4 points —
     **Smart., User-Friendly., Powerful., Secure.** (icon + blurb).
  4. How The App Works?: **Sign Up, Create, Compose, Send** (numbered
     steps + blurb).
  5. Features + Pricing sections.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `main.css`:**
  - Primary **green `#00a650`**; dark green `#006933`.
  - White / dark (`#121619`) backgrounds.
  - Fonts: **"IBM Plex Sans"** + **"IBM Plex Serif"** (Google Fonts
    `<link>`).
  - Green buttons with white text.
- **Recreation name:** Standout (kept — matches ColorLib name, distinct
  from existing names). App folder `apps/standout`, package
  `@free-react-templates/standout`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/standout-<n>/<w>/<h>`); lucide-react icons; IBM Plex
  Sans via Google Fonts; green primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-standout/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/standout` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/standout`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-standout`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
