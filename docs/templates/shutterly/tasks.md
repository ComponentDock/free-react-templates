# Shutterly (ColorLib Josanclick) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shutterly`.

## Design notes (replication findings)

- **Original:** ColorLib "Josanclick" — photographer portfolio one-pager
  (source: https://colorlib.com/wp/template/josanclick/). TEMPLATES.md has
  TWO copies of this item (lines 595 and 2454 — mark ALL when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/josanclick/
  (HTTP 200, ~32 KB HTML, `<title>Photographer</title>`). Main stylesheet
  `assets/css/style.css` (~68 KB) parsed for tokens. Stack is jQuery +
  Bootstrap 4 + owl-carousel + slicknav + slick + counterup + waypoints +
  hover-direction-snake + wow — recreate all interactivity client-side in
  React.
- **Screenshot:** `josanclick-colorlib-template.jpg` (downloaded OK); visual
  design verified on the LIVE rendered preview in a browser (hero slide 1
  "MIAMI LAKE" dusk-lake photo + dark bottom gradient; transparent navbar
  "JOSANCLICK" with center links + right social icons; photographer photo in
  a red jacket; 6-photo gallery; pricing cards with black oval badge).
- **New name:** Shutterly ("shutter" + -ly, matches Hiredly/Shiply/Hoodly
  pattern). NOT "josanclick" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** moody monochrome
  portfolio. Brand black `#0A0A0A` on white/light canvas, white-on-dark
  sections (testimonial `#0A0A0A`, footer `#1E1E1E`), light services row
  `#F2F4F8`. Headings/hero/buttons in thin "Poiret One" (script-like at
  50px; hero h1 uppercase 70px), body + nav in "Jost". Buttons SQUARE
  (radius 0): solid black `.btn` (padding 22px 32px, 18px) and outline
  `.border-btn` (1px `#0A0A0A`, 14px, letter-spacing 1px, padding 11px 39px,
  hover → fill `#071112` white). Hero overlay is a dark gradient (0.8 → 0.7
  black, darkest at top). No bright accent color anywhere.

## Structure (1:1, section order — from the live DOM)

1. **Header** — transparent over hero; brand "Shutterly" left, nav center
   (Home active / Portfolios / Services / About / Blog ▾ [Blog, Blog
   Details, Elements] / Contact), social icons right; sticky bg on scroll;
   mobile hamburger.
2. **Hero slider** — 3 slides (950px, cover photos + dark gradient overlay,
   caption bottom-center): span (white 20px) + h1 (uppercase 70px Poiret
   One); slides = "Nature Beauty"/"Miami Lake", "Travel Shot"/"Kayaking on
   Lakee", "Action Shot"/"Electricity"; arrows + dots + scroll indicator.
3. **About** (white) — 3 cols: script h2 "I Click Moment, that you love"
   (Poiret One 50px) + paragraph + signature | vertical photographer photo |
   big thin "08" counter + "Years of Experience" + text + italic quote +
   "My Work" outline button.
4. **Gallery** — 6 tiles, tight 3-col grid (p-0, no gaps), 565px tall;
   hover overlay (snake effect) with caption span + h3 (demo repeats "Street
   Shot" — vary to 6 captions).
5. **Services** — light `#F2F4F8`; "I do for you"; 3 cards: photo + meta
   span + h5 (Event / Wedding / Family Photography) + blurb.
6. **Testimonial** — black `#0A0A0A`; h2 "Testimonial"; carousel (arrows):
   quote + founder (portrait + name 26px + role — rename "Graham Cracker,
   Designer at Colorlib" → no Colorlib string in app code).
7. **Pricing** (white) — "Choose a plan that suit you"; 3 cards (border
   1px `#DBDBDB`, padding 30px 0): black pill badge (radius 25px) + price
   "$ X USD" (Jost 30px) + 5 features + "Choose This Plan" outline button;
   DEMO REPEATS identical content in all 3 — vary plan label/price (e.g.
   Portrait $200 / Event $400 / Wedding $650).
8. **Instagram** — full-bleed horizontal strip of 6 square photos with
   hover (client-side scroll).
9. **Footer** — `#1E1E1E`; 4 cols: brand + pera + social | Navigation
   (Home/About/Services/Blog/Contact) | Contact (87/A, Green lane, CA 6732;
   Real State; info@josanclick.com; +10 236 327 3782) | Subscribe
   Newsletter (email + SUBSCRIBE → success state); bottom bar copyright +
   Component Dock link; back-to-top button.

## Token cheat-sheet

- ink `#0A0A0A` (brand: buttons, badge, testimonial bg, headings)
- footer-bg `#1E1E1E` · services-bg `#F2F4F8` · body-text `#656565` ·
  muted `#8F8F8F` · meta-text `#74706B` · card-border `#DBDBDB` ·
  hover-fill `#071112`
- fonts: "Poiret One" (display/h2/hero/buttons) + "Jost" (body/nav/price)
- hero overlay: `linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.05) 18%, rgba(10,10,10,0.7))` (simplified from the 0.8→0.7 reference)
- buttons: `.btn` solid black 18px padding 22px 32px; `.border-btn` outline
  14px letter-spacing 1px padding 11px 39px, hover fill `#071112` — BOTH
  radius 0

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-shutterly/`)
- [ ] Scaffold `apps/shutterly` (copy simplest existing app; package
      `@free-react-templates/shutterly`; `public/CNAME` =
      `shutterly.free.componentdock.com`; homepage
      `https://shutterly.free.componentdock.com`); run `npm install` at root
      and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — ink `#0A0A0A`, footer-bg `#1E1E1E`,
      services-bg `#F2F4F8`, body-text `#656565`, muted `#8F8F8F`,
      meta-text `#74706B`, card-border `#DBDBDB`, hover-fill `#071112`;
      Poiret One + Jost `<link>` in index.html
- [ ] `Navbar` — brand, 6 links + Blog dropdown, social icons, transparent →
      sticky, mobile hamburger (aria-expanded)
- [ ] `HeroSlider` — 3 slides (picsum seeds), dark overlay, bottom-center
      caption, arrows + dots + scroll indicator, autoplay optional
- [ ] `About` — script heading, paragraph, signature, photo, counter,
      quote, "My Work" outline button
- [ ] `Gallery` — 6 tiles, no-gap 3-col grid, hover overlay captions
- [ ] `Services` — light bg, 3 photo cards (Event/Wedding/Family)
- [ ] `Testimonial` — black bg carousel, quote + founder (renamed)
- [ ] `Pricing` — 3 varied cards (badge, "$ X USD", 5 features,
      "Choose This Plan")
- [ ] `Instagram` — horizontal strip of 6 square photos
- [ ] `Footer` — 4 columns + newsletter (success state) + copyright +
      Component Dock link + back-to-top
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh shutterly`
- [ ] PR `feat/template-shutterly` → merge immediately; TEMPLATES.md rows
      595 + 2454 → `[x]` + surge URL + readme:status
