# Tasks: Zenith (Saasify)

## Overview

Recreation of ColorLib **Saasify** (`https://colorlib.com/wp/template/saasify/`, live demo
`https://preview.colorlib.com/theme/saasify/`) as **Zenith** — a SaaS product landing page shipped as
one page: sticky translucent navbar, violet-wash hero with stat row and dashboard frame, six feature
cards, three pricing tiers with a monthly/annual switch, three testimonials, a gradient CTA band and
a dark four-column footer.

Spec: `openspec/specs/template-zenith/spec.md` (rewritten 2026-10-24; it previously recorded a
ColorLib button-gallery demo — see `docs/spec-row-mismatch.md`).
Brief with measured tokens, DOM skeleton and the delta table: `docs/templates/zenith/design-notes.md`.

Row note: `TEMPLATES.md` lines **158** (`## Astro (48)`) and **2929** (`## Tailwind Css (48)`) list
the same design twice and both link `zenith`; the spec now records `saasify`, so row and spec agree.
Two rows for one slug is not `ROW-MULTI` — that flag is two *different* designs claiming one app.

## Section order & architecture

| # | file | band | status |
| --- | --- | --- | --- |
| 0 | `src/components/Navbar.tsx` | sticky `bg-white/80 backdrop-blur-lg` bar, wordmark tile, 5 entries + Resources group, moon toggle, "Get Started" | [x] |
| 1 | `src/components/Hero.tsx` | badge pill, `h1` with gradient second line, blurb, 2 CTAs, 4 stats, dashboard frame | [x] |
| 2 | `src/components/Features.tsx` | 6 cards in `sm:2 / lg:3`, icon tile + `h3` + blurb | [x] |
| 3 | `src/components/Pricing.tsx` | monthly/annual switch (`role="switch"`), 3 tiers, "Most Popular" badge | [x] |
| 4 | `src/components/Testimonials.tsx` | 3 cards: 5 stars, quote, initial avatar, name + role | [x] |
| 5 | `src/components/CtaBanner.tsx` | `from-primary-600 to-primary-800` band, 2 CTAs, blur orbs | [x] |
| 6 | `src/components/Footer.tsx` | brand + 3 link columns + "Stay Updated" newsletter + bordered legal bar | [x] |
| — | `src/components/Reveal.tsx` | `IntersectionObserver` fade-in-up wrapper (the source's 32 `data-animate` hooks) | [x] |
| — | `src/index.css` | `@theme`: violet scale `#7c3aed`…, Inter, soft shadows, `.text-gradient` | [x] |

## Tasks

- [x] Spec rewritten to the measured `saasify` reference; Requirements aligned to the app
- [x] Brief (`design-notes.md`) rewritten with measured tokens, DOM skeleton and the delta table
- [x] Sticky translucent navbar with wordmark tile, nav entries, dark toggle and filled CTA
- [x] Hero: badge with pulsing dot, gradient-clipped second headline line, two CTAs, four-stat row
- [x] Dashboard preview panel framed in `rounded-2xl` (DOM mock, not the source's screenshot)
- [x] Six feature cards on a `#f9fafb` band
- [x] Three pricing tiers with a `role="switch"` monthly/annual toggle that reprices and swaps the
      annual note (`$276` / `$756` / `$1908` per year)
- [x] Three testimonial cards with accessible five-star ratings and initial avatars
- [x] Gradient CTA band with white fill + `border-2 border-white/30` secondary
- [x] `#111827` footer: brand + socials, three link columns, newsletter form, bordered copyright bar
- [x] Class-based dark mode toggled from the navbar, persisted to `localStorage`
- [x] Footer credit to Component Dock
- [x] No source-site name, domain or URL anywhere under `apps/zenith/`
- [ ] **Headline gradient** — `to right in oklab, #7c3aed → #06b6d4` (currently
      `linear-gradient(90deg, #a78bfa, #7c3aed)`; the cyan endpoint is missing)
- [ ] **Popular pricing card** — `bg-white` + `ring-2 ring-primary-600` instead of the dark
      `bg-gray-950` card
- [ ] **Card grounds** — non-popular tiers `bg-gray-50`, and a solid grey `bg-gray-200 py-3` CTA on
      every tier (currently outline buttons, "Contact sales" on Enterprise)
- [ ] **Section kickers** — the three `rounded-full bg-primary-100` pills ("Features", "Pricing",
      "Testimonials") the reference puts above each `h2`
- [ ] **Hero air** — `py-32` at `lg` (currently `pb-28 pt-24`)
- [ ] **Soft shadow** — `0 4px 16px -4px #0000001a` (currently `0 2px 12px -2px rgb(15 23 42 / .08)`)
- [ ] Typecheck / lint / 100% coverage / build — per-app gate, run by the implementer on any app
      change (`bash scripts/verify-app.sh zenith`)
