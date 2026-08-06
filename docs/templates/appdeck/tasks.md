# Appdeck (ColorLib Prantokon) — Tasks & Design Notes

> Prep artifacts for the recreation of ColorLib "Prantokon" under the NEW
> original name **Appdeck** (the ColorLib source name must never be reused).
> Written while the OnePage PR (#56) bookkeeping landed on `main`.
> Implementation ships on `feat/template-appdeck`.

## Design notes (replication findings)

- **Original:** ColorLib "Prantokon" — apps landing HTML template
  (source: https://colorlib.com/wp/template/prantokon/).
- **Live preview analyzed:** https://preview.colorlib.com/theme/prantokon/
  (HTTP 200 — full rendered DOM fetched + `css/preview.css` (4KB) extracted).
  The ColorLib preview for this entry is a **product showcase page**
  ("Prantokon Preview — Apps Landing Html Template") advertising the
  template's 3 home-page variants and blog layouts; the TEMPLATES.md
  screenshot (`prantokon-free-template.jpg`) matches it.
- **Section order (1:1, from DOM):**
  1. Navbar: logo "Appdeck" + tagline "Apps Landing Html Template" +
     "Purchase Now" / "View Demo" links.
  2. Hero (`hero-wrap`): full-viewport photo background darkened with a
     `#353535` overlay at 0.9 opacity; h1 "Prantokon Apps Landing Html
     Template" (white, uppercase, 72px, letter-spacing 4px; 50px on mobile);
     subline `#f9f9f9` 24px uppercase; purchase CTAs.
  3. Showcase (`page-layout`): heading "3 HOME PAGE | AND OTHER LAYOUT'S" +
     five cards (`single-preview`): #1 HOME (IMAGE), #2 HOME (SLIDER),
     #3 HOME (VIDEO), #4 BLOG, #5 BLOG-DETAILS — each a 1px `#f4f4f4`
     bordered card with a 250px preview thumb and a blue-bordered title link
     (hover: shadow + translateY(-3px)).
  4. CTA band (top of `preview-footer`): "MAKE YOUR WEBSITE WITH OUR Apps
     Awesome Landing TEMPALTE" + "PURCHASE NOW!" button.
  5. Footer (`preview-footer`): background `#111`, text `#999`, copyright
     line.
- **Design tokens extracted from `preview.css`:**
  - Primary accent: **blue `#0F7CDD`** (button borders/fill, section titles,
    card-title borders). Buttons: transparent bg, 3px solid `#0F7CDD`,
    radius 25px; hover → bg `#0F7CDD`, white text.
  - Hero: `#353535` overlay @ 0.9 opacity; white uppercase headline.
  - Cards: 1px solid `#f4f4f4` border; 250px thumb; hover shadow +
    translateY(-3px).
  - Footer: `#111` bg, `#999` text.
  - Font: system sans stack.
- **Recreation name:** Appdeck (NEW name — distinct from ColorLib "Prantokon"
  and from every existing app). App folder `apps/appdeck`, package
  `@free-react-templates/appdeck`.
- **Recreation approach:** dark showcase page: Navbar (dark-mode toggle) →
  Hero (picsum photo + darkened overlay) → Showcase (5 variant cards) →
  CTA band → Footer. lucide-react icons; repo-standard chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Replication: fetch live preview DOM + `css/preview.css` (HTTP 200).
- [x] Write `openspec/specs/template-appdeck/spec.md` (Gherkin requirements + scenarios).
- [ ] Create `apps/appdeck` (copy simplest existing app; rename package to
      `@free-react-templates/appdeck`).
- [ ] Write tests first (red): App, Navbar, Hero, Showcase, CtaBand, Footer.
- [ ] Implement (green): components per spec; 100% coverage.
- [ ] Run full gate: typecheck → lint → test:coverage → build → knip → fallow
      (+ spec:validate).
- [ ] Mark TEMPLATES.md item `[~]` on the branch; commit conventionally.
- [ ] Push branch, open PR (recreation of ColorLib Prantokon), merge
      immediately.
- [ ] Bookkeeping on main: TEMPLATES.md `[x]` + Surge URL, homepage,
      `node scripts/update-readme-status.mjs`.
