# Forma (Colorlib Atelier) — Tasks & Design Notes

> Prep artifacts renamed to the NEW original name "Forma" by the
> implementer (the ColorLib source name "Atelier" is never reused).

## Design notes (replication findings)

- **Original:** ColorLib "Atelier" — design studio template
  (source: https://colorlib.com/wp/template/atelier/).
- **Demo DOM analyzed:** https://atelier-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/atelier/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes + screenshot):** elegant
  design-studio landing, LIGHT default with full dark mode (toggle in
  navbar), **gold/bronze** accents (`#c49536` accent-500, `#a87a2a`
  accent-600, `#d4a854` accent-400, `#8c6124` deep) on white/gray-50
  surfaces and `#030712`/`#111827` dark surfaces, **Playfair Display**
  serif display headings + **DM Sans** body, pill buttons, rounded cards,
  dark photographic hero with white serif headline.
- **Structure (1:1, section order from the live demo):**
  1. Header: logo, About / Portfolio / Services / Pricing / Blog /
     Contact, Book Consultation pill, dark-mode toggle (sticky,
     backdrop-blur).
  2. Hero: eyebrow, serif H1 "Transforming Spaces Into Extraordinary
     Experiences", blurb, primary + outline CTAs.
  3. Services (#services): "Comprehensive Design Services" — 6 cards
     (Residential Design, Commercial Design, Hospitality Design, Color &
     Material Consulting, Space Planning, Renovation Management).
  4. Portfolio (#portfolio): "Featured Projects" — 6 projects (Coral
     Gables Residence, SoFi Office Complex, The Setai Penthouse, Mandarin
     Oriental Suite, Wynwood Gallery, Brickell Heights Loft).
  5. Process (#process): "How We Work" — Consult, Design, Refine, Execute.
  6. Testimonials (#testimonials): "What Our Clients Say" + carousel
     (prev/next).
  7. Awards (#awards): "Awards & Accolades" — 6 items (Best Residential
     Design, Hospitality Design Award, Innovation in Commercial Design,
     Emerging Studio of the Year, Sustainable Design Leader, Top 50
     Interior Designers).
  8. FAQ (#faq): "Frequently Asked Questions" accordion (5+ items).
  9. Contact (#contact): "Start Your Design Journey" — form (Full Name,
     Email, Phone, Project Type, Details, Send Message) + contact info
     cards (Phone, Email, Studio, Studio Hours).
  10. CTA band: serif "Ready to Transform Your Space?" + buttons.
  11. Footer: blurb + contact, link columns, social (GitHub, X, LinkedIn),
      copyright bar.
- **Design tokens extracted from the demo CSS (`_astro/Base.*.css`):**
  - Primary brand gold/bronze scale: `#8c6124` (deep), `#a87a2a`
    (accent-600), `#c49536` (accent-500), `#d4a854` (accent-400), lighter
    gold tints for chips (accent-100/200/300).
  - Dark surfaces: `#030712` (950), `#111827` (900), `#1f2937` (800),
    `#374151` (700). Light surfaces: `#ffffff`, `#f9fafb` (50),
    `#e5e7eb` (200), `#d1d5db` (300).
  - Text: `#111827` headings, `#374151`/`#6b7280` body.
  - Fonts: **"Playfair Display"** (serif display) + **"DM Sans"** (body)
    via Google Fonts `<link>`.
  - Buttons: pill (rounded-full), solid gold primary, white/gray-border
    secondary. Cards rounded-xl/2xl with 1px hairlines.
- **Recreation name:** **Forma** (NEW name — ColorLib "Atelier" is never
  reused). App folder `apps/forma`, package
  `@free-react-templates/forma`, homepage
  `https://free-react-templates-forma.surge.sh`.
- **Recreation approach:** no asset copying — lucide-react icons (brand
  icons GitHub/X/LinkedIn as inline SVG), Playfair + DM Sans via Google
  Fonts, gold scale in `@theme`, dark-mode toggle on `<html>.dark`, hero
  background as dark gradient + seeded picsum image, portfolio gallery with
  seeded picsum images, maps-style contact info cards, repo-standard
  Navbar/Contact/FAQ/Testimonials patterns; shared Button/ButtonLink/Badge/
  Card/cn from `packages/ui`.

## Tasks

- [x] Rename prep folders to `openspec/specs/template-forma/` and
      `docs/templates/forma/`; rewrite spec + notes with the NEW name
      "Forma", the REAL 11-section DOM structure, and gold design tokens.
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/forma` (copy the section-rich landing app pattern —
      endpoint; rename package to `@free-react-templates/forma`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh forma` (typecheck → lint →
      test:coverage → build) + `npm run spec:validate`.
- [ ] Push `feat/template-forma`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
