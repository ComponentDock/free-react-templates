# Snapfold (ColorLib Photogallery) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/snapfold`
> (<https://snapfold.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

## Design notes

- **Original:** ColorLib "Photogallery" — free photography gallery website
  template (source: https://colorlib.com/wp/template/photogallery/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/photogallery/`
  (HTTP 200, 24.7KB). The rendered DOM is the reference; TEMPLATES.md
  screenshot (`photogallery-free-template.jpg`) confirms the visual design
  (dark sidebar, large hero photos, minimal aesthetic, PT Sans font).
- **Structure observed (1:1):** preloader (black, spinning loader) →
  top-right controls (search icon + hamburger, fixed) → sidebar header
  (fixed left 455px: logo, hamburger, nav: Home/Gallery/Single gallery/
  Blog/Contact, social links rotated -90deg, copyright bar) → hero slider
  (owl-carousel, 2 slides: full-bleed photo + white text box with
  "Photography" label + "Project No. N" heading + description + "Read
  More" CTA + next-slide preview thumbnail) → navigation arrows (prev
  dark / next white, bottom of hero) → slide counter (bottom-right) →
  search overlay (fullscreen black, large input, circular close btn).
- **Design tokens:** primary dark **#323232**; body text **#898d90**;
  accent light **#c6d7d8**; white **#fff**; black **#000**; font
  **PT Sans** (sans-serif, 400 + 700) via Cloudflare Fonts; buttons
  transparent + 2px solid black border + border-radius 0 + uppercase;
  sidebar fixed left 455px white bg z-9999; hero full viewport height,
  cover backgrounds.
- **Recreation name:** Snapfold. App folder `apps/snapfold`, package
  `@free-react-templates/snapfold`.
- **Design approach:** responsive sidebar (collapses on mobile), hero
  slider with single active slide + next preview, search overlay modal,
  preloader animation, slide counter; all images picsum-seeded
  (`picsum.photos/seed/snapfold-N/w/h`); PT Sans via Google Fonts
  `<link>` in index.html.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) — do NOT
  duplicate components.
- Closest existing apps to reference: `apps/photofolio` (photography),
  `apps/gallery` (gallery layout) — for structural patterns.

## Tasks

- [x] Write `openspec/specs/template-snapfold/spec.md` (Gherkin
      requirements + scenarios + replication findings).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/snapfold` (copy simplest photography app; rename
      package to `@free-react-templates/snapfold`).
- [ ] TDD: tests first for Sidebar, HeroSlider, SlideCounter,
      SearchOverlay, Preloader, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh snapfold` (typecheck → lint →
      100% coverage tests → build).
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge.
- [ ] Update README structure + `docs/ai-context.md` app list.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/snapfold/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/snapfold/public/CNAME` = `snapfold.free.componentdock.com`
  and the package `homepage` = `https://snapfold.free.componentdock.com`.
