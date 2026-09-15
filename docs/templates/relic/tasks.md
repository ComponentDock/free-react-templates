# Relic (ColorLib Unearth) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-unearth);
> renamed to the NEW name **Relic** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Unearth" — mining / industrial landing template
  (source: https://colorlib.com/wp/template/unearth/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unearth/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** dark industrial aesthetic
  with **orange `#ff8b00`** brand accents, hero sliders with mining
  imagery + dark overlay, white headline text, alternating image/text
  split blocks, icon feature grid, animated counters on dark bg,
  team cards with circular photos, pricing tiers, testimonial carousel,
  blog posts, contact form, and a distinctive **gradient footer**
  (purple `#7a5e86` → rose `#a75e67` → orange `#f77b2e`).
- **Structure (1:1, section order):**
  1. Top bar: contact info + social links, gradient bg.
  2. Navbar: "Relic" logo (orange), links (Home, Services, About, Press,
     Testimonials, Blog, Contact), sticky on scroll, hamburger on mobile.
  3. Hero slider: 2 slides with full-bleed images + dark overlay +
     white headline + white outline CTA.
  4. Services: 2 alternating image/text split blocks ("Land & Property",
     "Surface Mining") with orange checkmark lists.
  5. Features grid: 6 icon cards (Surface Mining, Gold Nuggets,
     Soil Carrier, Gold Refinery, Anvil Blacksmith, Gold Melt Crucible)
     on light bg.
  6. About / Counters: video thumbnail + play overlay + 4 animated
     counters (30+, 300+, 2000+, 1500+) on dark bg.
  7. Team: 6 member cards in 3-col grid, circular photos, social icons.
  8. Pricing: 3 tiers (Basic $47, Premium $200, Professional $750),
     checkmark lists, highlighted Premium.
  9. FAQ: 2-col, 8 Q&A items, orange heading.
  10. Press: 3 articles with dates.
  11. Testimonials: carousel, 4 cards, italic blockquotes, orange dots.
  12. Blog: 2 posts with images, date/author, "Read More".
  13. Contact: form + sidebar text on light bg.
  14. Footer: gradient bg (purple→orange), About Us, Features, Newsletter,
      social, copyright → Component Dock.
- **Design tokens extracted from `css/style.css`:**
  - Primary **orange `#ff8b00`** (buttons, accents, active states).
  - Footer gradient: `#7a5e86` → `#a75e67` → `#f77b2e`.
  - Body text: `#939393`; headings: `#000`.
  - Light bg: `#f8f9fa`; dark bg: Bootstrap `.bg-dark`.
  - Fonts: **"Oswald"** (headings, uppercase) + **"Rubik"** (body).
  - Buttons: white outline (hero), orange primary, secondary (pricing).
  - Team cards: white bg, 1px border, hover lift.
  - Testimonials: Georgia serif italic, orange carousel dots.
  - Counters: white 4rem numbers, 50px underline bar.
  - Section padding: `7rem 0` desktop, `3rem 0` mobile.
  - Hero: `calc(100vh - 196px)`, min 577px.
- **Recreation name:** Relic (NEW — the ColorLib source is "Unearth").
  App folder `apps/relic`, package `@free-react-templates/relic`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/relic-<n>/<w>/<h>`); lucide-react icons; Oswald +
  Rubik via Google Fonts `<link>`; hero slider → React state carousel;
  testimonial slider → React state carousel; animated counters → React
  useEffect + requestAnimationFrame; video play → overlay icon; forms
  prevent default (no backend); orange primary in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-relic/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/relic` (copy the simplest existing app, rename package
      to `@free-react-templates/relic`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh relic` + `npm run spec:validate`.
- [ ] Push `feat/template-relic`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
