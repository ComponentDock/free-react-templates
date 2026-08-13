# Lotly (ColorLib Props) — Tasks & Design Notes

> Recreation of ColorLib "Props" — free Bootstrap 5 real estate website
> template (https://colorlib.com/wp/template/props/) under the NEW name
> **Lotly** ("lot" — the land/property parcel at the heart of real estate —
> plus the friendly "-ly" family suffix: Wingly, Drivly, Nestly, Bookly,
> Coastly, Restly, Sleeply, Dozely, Soarly, Lodgely, Sneakly; single
> lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-14), per the monorepo naming
> mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Props" — real-estate agency one-pager, Bootstrap
  5 based. TEMPLATES.md category: **Bootstrap 5 (89)**, first occurrence
  at line 619 (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP: the
  `props` slug also appears at line 2603 — both `- [ ]` rows of the SAME
  template; ONE implementation covers both rows (mark all `[x]` with the
  same surge URL at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/props/` — HTTP 200, ~214 KB HTML
  (REACHABLE). Custom CSS in `css/style.css` (~63 KB) + tiny-slider + aos
  - icomoon/flaticon icon fonts. Screenshot
    `props-free-template.jpg` (1200×946, viewed in browser) matches the live
    DOM for the visible top half (floating white nav over hero → 4 feature
    cards → Popular Properties header + first property card row).
- **Visual design:** modern, clean, professional real-estate agency look.
  Flat design, generous white space, cool-toned modern-architecture
  photography, bold magenta/pink gradient CTAs against teal headings.
  Hero: desaturated glass-and-steel building photo, centered white
  uppercase headline "FIND A PERFECT DREAM HOUSE", pill search bar with
  magenta Search button. Below: 4 white feature cards with teal line
  icons. "POPULAR PROPERTIES" teal heading left + pink gradient pill
  "View all properties" right; property cards with white content blocks
  overlapping the photos.
- **Design tokens (extracted from `css/style.css`):**
  - Brand primary `#1f6f8b` (teal/steel blue): nav links, section
    headings (`text-primary`), feature icons, pagination circles.
  - CTA gradient `linear-gradient(270deg, #f82a7e 0%, #752a90 100%)`
    (hot pink → deep purple), white text — ALL primary buttons AND the
    2px price underlines. (NOTE: the source's `.btn-primary` overrides
    Bootstrap blue with this gradient; do NOT use `#1f6f8b` on buttons.)
  - Font `"Noto Sans JP", sans-serif` (body + headings).
  - Buttons: pill `border-radius: 30px`, `border: 2px solid transparent`,
    padding `15px 30px`; hover lift `top: -2px` + shadow
    `0 15px 30px rgba(0,0,0,0.2)`.
  - Hero: `100vh` (min 600px), image + overlay `rgba(0,0,0,0.2)`, heading
    white 38px uppercase 700; search inputs pill `border-radius: 30px`,
    padding `18px 20px`, borderless; lead 14px white.
  - Navbar: floating white `.menu-bg-wrap` (`#fff`, padding 20px 30px,
    shadow `0 15px 30px -15px rgba(0,0,0,0.3)`).
  - Feature cards `.box-feature`: white, radius 4px, padding 30px, shadow
    `0 15px 30px rgba(0,0,0,0.1)`, icon 60px `#1f6f8b`, h3 16px; section
    overlaps hero (`margin-top: -50px`, z-index 8).
  - Section headings `.section .heading`: uppercase, bold, `#1f6f8b`.
  - Property cards: white content overlapping photo (`margin-top: -100px`,
    width 98%, shadow `0 1px 4px rgba(0,0,0,0.05)`); price 20px bold
    `#000` + 2px gradient underline; specs 18px icons / 13px captions.
  - Why-us `.feature-h`: circular 80px `#efefef` icon wraps (50% radius,
    2px transparent border).
  - Counters: bold large numbers + `text-black-50` captions.
  - Agents: section `bg #f8f9fa`; `.agent-box` 2px `#efefef` border,
    radius 4px, padding 20px, 80px circular avatar.
  - Footer: `#efefef`, padding 70px 0, 14px text `#888`/`#777`.
- **Section order (1:1, verified from live DOM):**
  1. Navbar `nav.site-nav` → `.menu-bg-wrap` (white floating bar): brand
     "Props" (→ Lotly) left; links Home (active) · Buy Property · Sell
     Property · Services · About · Contact Us; phone `+1(123)-456-7890`
     far right. Mobile: `.site-mobile-menu` slide-in panel.
  2. Hero slider `div.hero` → `.hero-slide` (TWO slides
     `images/hero_bg_1.jpg` / `images/hero_2.jpg`, full-height, overlay):
     centered h1 "Find a Perfect Dream House" (white uppercase 700), pill
     search form (placeholder "Your ZIP code or City, e.g. New York" +
     gradient Search btn), lorem lead, View Properties button.
  3. Feature grid `div.features-1` (overlaps hero, 4 × `.box-feature` in
     `col-6 col-lg-3` centered): New Properties · Contact Agent · Building
     for Sale · House for Sale (60px teal icon + 16px h3 + lorem).
  4. Popular Properties `section`: header row — `.heading` left (uppercase
     teal bold) + gradient pill "View all properties" right;
     `.property-slider-wrap` → `.property-slider` with 8 `.property-item`
     cards (photo; overlapping white content: price `$3,298,000` w/
     gradient underline, address "5232 North Carolina Ave. 21BC", city
     "Carolina, USA", specs `2 beds` · `2 baths`); `.controls` arrows.
  5. Testimonials `section.sec-testimonials.pt-0`: header row — heading
     left; slider with 4 cards (quote + name + role): James Smith —
     Designer, Co-founder · Carol Houston · Synthia Cameron · Davin
     Smith; Prev/Next + `tns-nav` dots below.
  6. About `section.section-4.border-top`: `.img-about` photo w/ dots;
     heading "We Bring Dream Homes To Reality" + lorem; 3 `.feature-h`
     rows (80px circular grey wraps): Quality properties · Top rated
     agents · Easy and safe; `.row.section-counter.mt-5` counters:
     2917 # of Buy Properties · 3918 # of Sell Properties · 38928 # of
     All Properties.
  7. Our Agents `section.section-5.bg-light`: heading + lorem subheading;
     `.agent-box` cards (80px circular avatar, name, "Real Estate Agent",
     lorem) e.g. James Doe.
  8. Footer `footer.site-footer` (#efefef): CTA row `.footer-cta` — "Be a
     part of our growing real state agents" + gradient pill "Apply for
     Real Estate agent"; columns Contact · Sources · Links; copyright bar.

## Implementation tasks (TDD, in order)

- [ ] Scaffold: copy simplest existing app → `apps/lotly`, rename package
      `@free-react-templates/lotly`, register workspace
      (`npm install --package-lock-only`), `public/CNAME` =
      `lotly.free.componentdock.com`, homepage
      `https://lotly.free.componentdock.com`; footer MUST link
      `https://www.componentdock.com/`
- [ ] `@theme` tokens: `--color-brand: #1f6f8b`; gradient utilities for
      `#f82a7e → #752a90` (buttons + price underline); body font Noto
      Sans JP via Google Fonts `<link>` in `index.html`
- [ ] Navbar (white floating bar, links, phone; mobile slide-in menu)
- [ ] Hero slider (2 slides, search form, CTAs) — TDD the slide
      visibility logic with `aria-hidden`
- [ ] Feature grid (4 cards, overlaps hero)
- [ ] Popular Properties (header + 8 property cards + slider arrows)
- [ ] Testimonials (4 cards + controls + dots)
- [ ] About (photo + dots, 3 feature-h rows, counters)
- [ ] Agents (bg-light, agent boxes)
- [ ] Footer (CTA row + 3 columns + copyright)
- [ ] Placeholder images: `picsum.photos/seed/lotly-<n>/<w>/<h>` — screen
      seeds for subject (modern architecture/houses; faces for
      testimonials/agents) per seed-screening method before pinning
- [ ] `scripts/verify-app.sh lotly` green (typecheck + lint + 100%
      coverage + build); spec:validate; PR with source/preview/tokens
      noted; bookkeeping: both `- [ ]` rows → `[x]` + same surge URL +
      `npm run readme:status`
