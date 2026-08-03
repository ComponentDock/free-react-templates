# Serenity (Colorlib Serenity) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-serenity`.

## Design notes (replication findings)

- **Original:** ColorLib "Serenity" — retreat center / spiritual sanctuary
  template (source: https://colorlib.com/wp/template/serenity/).
- **Demo DOM analyzed:** https://serenity-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/serenity/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** calm, contemplative
  retreat landing — earthy palette (forest green #4d5b4a, warm browns
  #847160/#6c5d51, cream #e6e1d8), Cormorant Garamond display + Inter body
  fonts, rounded cards, pill buttons, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: Retreats, Spiritual Direction, Sacred Spaces, Resources,
     Connect + "Book a Retreat".
  2. Hero: "Find Rest for Your Soul" + Begin Spiritual Direction / Enter
     the Stillness.
  3. Daily Office: Lauds 6:30 AM, Midday Prayer 12:00 PM, Vespers 5:30 PM,
     Compline 8:30 PM.
  4. About: "A Place Set Apart" + stats (35+ Years, 12,000+ Guests, 80
     Acres, 4 Offices).
  5. Practices: Centering Prayer, Lectio Divina, Walking Meditation,
     Labyrinth Walk, Examen, Silent Sitting.
  6. Retreats: Spring Silence Retreat, Introduction to Contemplative
     Prayer, Day of Rest.
  7. Sacred Spaces: The Chapel, The Labyrinth, Prayer Garden, Forest
     Trails.
  8. Directors: Sr. Margaret Anne OSB, Fr. David Brennan, Dr. Sarah Chen,
     Brother Thomas.
  9. Testimonials: "Transformed by Stillness" (3 quotes).
  10. CTA: "Begin Your Journey Inward" + Contact Us.
  11. Footer: Join Us in Prayer (times) + Experience / Explore / Connect +
      © 2025 Stillwater Retreat.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **#4d5b4a** (forest green; scale #7d8f79, #62735e,
    #3f4a3d, #2d332c) + warm neutrals (#e6e1d8, #847160, #6c5d51,
    #594d44).
  - Fonts: **"Cormorant Garamond"** (display) + **"Inter"** (body) via
    Google Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation name:** Serenity (kept — matches ColorLib name). App folder
  `apps/serenity`, package `@free-react-templates/serenity`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/serenity-<n>/<w>/<h>`); lucide-react icons; Cormorant
  Garamond + Inter via Google Fonts; repo-standard Navbar (dark-mode toggle)
  - Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-serenity/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/serenity` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/serenity`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-serenity`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
