# Chisel (ColorLib Reshape) — Tasks & Design Notes

> Prep artifacts renamed from `docs/templates/reshape` by the implementer
> (naming rule: never keep the ColorLib source name). Implementation ships
> on `feat/template-chisel`.

## Design notes (replication findings)

- **Original:** ColorLib "Reshape" — architecture firm template
  (source: https://colorlib.com/wp/template/reshape/). TEMPLATES.md has TWO
  copies of this item (lines 119 and 1980 — mark BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/reshape/
  (HTTP 200, 27.6 KB, title "Reshape Free HTML Template by Colorlib").
  Stylesheet `css/style.css` (34.8 KB) on Bootstrap 4 base; icomoon icon
  font; Mulish via cf-fonts in the head (use Google Fonts `<link>` in the
  recreation).
- **Screenshot:** `reshape-free-template.jpg` — verified live in a browser
  (vision): modern minimal architecture landing; split hero (architectural
  photo right), dark stats band, 6-card services grid with icon circles,
  portfolio image+text slider, testimonial quote, blog cards, dark `#222`
  footer.
- **Section order (1:1) — VERIFIED against the live DOM (the old prep spec
  had this wrong):**
  1. Navbar: "Reshape." logo (blue dot) + Home, About us, Our services,
     How we work?, Portfolio, Contact us; transparent over hero.
  2. Hero: full-viewport split — left: eyebrow paragraph + H1 "We are
     Reshape, and we shape buildings." (strong emphasis) + "About us" blue
     btn + "Our services" black btn; right: photo.
  3. Stats band: 1087 Number of Projects · 57 Year of Experience · 670
     Number of Employees · 900 Number of Clients (count-up numbers).
  4. About: image + heading + 2 paragraphs + "About us" link.
  5. Services: "OUR SERVICES" eyebrow + H2 intro + 6 cards (icon + title +
     blurb + "Learn more"): Construction Consultation, House Renovation,
     Planning, Interior Design, Architecture, Installation Works.
  6. Portfolio: "PORTFOLIO" heading + image slider (4 photos) with
     prev/next arrows + text slides (Project Title One..Four + "See Case
     Study" button).
  7. Testimonials: blockquote + author "James Anderson" + avatar.
  8. Blog Posts: 4 cards (image + "Separated they live in" + "Aug 4, 2020
     by Admin in Architect").
  9. Footer: `#222` with Home links / Practice Area / Services / Contact
     (address + phone + email) columns + "Connect" social icons + black
     copyright bar.
- **Design tokens:** primary blue `#0779e4` (hover `#0883f7`); secondary
  black `#000000` (hover `#0a0a0a`); ink `#000000`; muted `#aaa` (footer);
  footer bg `#222`; section title 2rem/900; eyebrow 12px uppercase
  letter-spacing .1rem; font Mulish (Google Fonts).
- **Icons:** lucide-react HardHat, PencilRuler, DraftingCompass, Ruler,
  Building2, Wrench (services); ArrowLeft/ArrowRight (slider); inline SVG
  BrandIcon (socials).

## Task outline

1. Scaffold `apps/chisel` (copy simplest existing app; keep
   `injectUiSource()` in vite.config.ts; rename package to
   `@free-react-templates/chisel`; homepage surge URL).
2. `npm install` at repo root (lockfile) — verify
   `grep -c "free-react-templates/chisel" package-lock.json >= 1`.
3. TDD: Navbar (dark toggle + mobile menu), Hero (heading + 2 CTAs),
   Stats (4 counters), About, Services (6 cards), Portfolio (slider),
   Testimonials, Blog (4 posts), Footer (columns + socials + contact).
4. `bash scripts/verify-app.sh chisel` + `npm run spec:validate`.
5. PR `feat: Chisel — architecture template (ColorLib Reshape)` → merge →
   bookkeeping (TEMPLATES.md both lines `[x]` + surge URL, homepage,
   `npm run readme:status`).
