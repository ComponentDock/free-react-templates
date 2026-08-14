# Waybill (ColorLib Thelogistico) — Tasks & Design Notes

> Recreation of ColorLib "Thelogistico — free Bootstrap 4 logistics /
> transport website template" (https://colorlib.com/wp/template/thelogistico/)
> under the NEW name **Waybill** (a waybill is the shipment document that
> travels with freight, naming route and parties — squarely in the logistics
> domain of the source; single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified 2026-08-14),
> per the monorepo naming mandate (never reuse the ColorLib source name).
> TEMPLATES.md category: Bootstrap (216). Appears 3× in TEMPLATES.md
> (duplicate rows, same slug) — when implementing, mark ALL rows `[x]` with
> the same URL/homepage.

## Design notes (replication findings)

- **Original:** ColorLib "Thelogistico" — dark-accent logistics landing:
  black header + orange phone CTA, full-bleed truck hero with floating
  white quote form, 4-icon services grid, about split (team photos), Road
  Transport accordion split, black "complete control of your shipments"
  band with numbered offers + video modal, orange "Need Help? Get Free
  quote!" CTA band, client testimonial slider, 3-post news strip, brand
  logo carousel, near-black 4-widget footer. The recreation brands itself
  **Waybill**.
- **Live preview analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/thelogistico/` — HTTP 200, ~35 KB
  HTML + `assets/css/style.css` ~81 KB (curl; plus bootstrap, owl.carousel,
  slicknav, animate, magnific-popup, fontawesome, themify, slick,
  nice-select). Standard preview.colorlib.com host. The TEMPLATES.md
  screenshot (`thelogistico-colorlib-template.jpg`, 1200×946, viewed in
  browser) shows the black header bar, the truck hero with the quote form
  floating right, and the 4-column services grid; it matches the live
  render 1:1 (below-the-fold sections captured from the live DOM + CSS).
- **Visual design (screenshot):** black header strip — white "LOGISTICO."
  wordmark + orange arrow left, centered white menu links, orange phone
  button right; hero = full-bleed semi-truck photo (dark overlay), orange
  "WELCOME TO LOGISTICO" eyebrow, bold white "A TRULY GLOBAL SERVICE
  PROVIDER" headline, white subtext, orange rectangular "EXPLORE US"
  button; floating white quote box on the right (TRUCKLOAD / COMMODITY /
  DISTANCE (MILES) fields, orange "Estimate Cost: $10,400.00"); services =
  white section, 4 columns of flat orange line icons + titles + circular
  arrow buttons; about split = photo left (sunset sky), white right with
  orange "About Us" eyebrow. Color story: ORANGE `#f60` primary accent,
  red-orange `#F04506` video/number accents, near-black `#071112` bands,
  white content sections, light-grey `#F8F8F8` brand strip. Not a
  light-corporate template — bold orange-on-black logistics look.

## Section order (1:1 — implement in this order)

1. **Header** — black bar, sticky. Left: logo "Waybill" (white wordmark +
   orange arrow icon). Center: links (Home · About · Service · Blog —
   dropdown Blog/Blog Details · Elements · Contact), 16px/500, hidden <lg
   → burger → slide-in panel. Right: SOLID ORANGE phone button
   "10 (87) 237 3784" (bg `#f60`, white text, uppercase).
2. **Hero** — full-bleed truck photo bg (`background-size: cover`), dark
   overlay, white text. Left `.hero__caption`: eyebrow "Welcome to
   Waybill" (orange) → h1 "A Truly Global Service Provider" (70px/700,
   lh-1) → p "We make your cargo transport simple" (24px) → buttons
   "Explore Us" (solid `#f60`, radius 0, padding 32px 58px, uppercase) +
   "Get a quick offer" (boxed: white bg, 1px `#f60` border, `#f60` text).
   Right: floating WHITE quote card "Get a quick offer" + subtitle:
   TRUCKLOAD select (Select · Category 1 · Category 2 · Category 3),
   COMMODITY select (Select · Year · week · Days 3), DISTANCE (MILES)
   input (placeholder "Write Distance"), estimate line "Estimate Cost:
   $10,400.00" in orange, submit button.
3. **Services grid** — white, section title + 4 `.single-cat` cards
   (grid: 4→3→2→1 cols): orange line icon + title + blurb + circular
   arrow affordance. IMPORTANT: live preview shows placeholder
   "Commercial Cleaning" on all 4 cards (source bug) — use logistics
   service titles instead: Air Freight · Ocean Freight · Road Transport ·
   Warehousing.
4. **About split** — photo left; right: orange eyebrow "About Us" + h2
   "A professional transportation business" + copy + 3 team portrait
   thumbnails + boxed "Learn More" button (white bg, `#f60` border/text,
   uppercase, radius 0, padding 18px 44px).
5. **Road Transport split** — h4 eyebrow "Air Freight" + h2 "Road
   Transport" + borderless accordion (2 items: **Road Transport** / **Sea
   Cargo**; headers black 20px/700, single-open) + image right.
6. **Shipments band** — BLACK bg `#071112`: h2 "We give you complete
   control of your shipments." + numbered offers (`.single-items` "01
   Logistic Solution …" / "02 …", numbering orange `#F04506`) +
   circular WHITE play button (100px, radius 50%, `#F04506` play icon) →
   opens video modal (magnific-popup equivalent) with close control.
7. **CTA band** — ORANGE `#f60`: "Need Help? Get Free quote!" + copy +
   button (white text on orange).
8. **Testimonials** — h4 "Client Testimonial" + slider, 2 slides: quote +
   founder portrait + name ("Graham Cracker De…"). Next/prev + dots.
9. **Latest News** — centered section title "Latest News" + 3 blog cards
   (image + date + h5 title): "Freight Transport in Alaska: The Haul of
   the Wild" (June 26, 2021) · "Delivery Your Stuff Quickly For Minimum:
   Cost Of Price" · "Perishable Logistics: Cold Chain on a Plane".
10. **Brand logos** — light-grey `#F8F8F8` strip, 6 partner logos in a
    carousel (next/prev or autoplay).
11. **Footer** — near-black `#071112`, 4 widgets: **Quick Links** (Work ·
    Services · Products · Tips & Tricks) · **Solution** (Air freight ·
    Ocean freight · Large projects · FAQ) · **Support** (Submit Ticket ·
    Contact Us) · **Newsletter** (email input + send icon + social
    icons). Copyright bar MUST credit Component Dock: "© <year> Waybill
    — All rights reserved | Free website template at Component Dock"
    linking https://www.componentdock.com/.

## Design tokens (from assets/css/style.css, verified 2026-08-14)

- Brand orange `#f60` (hero buttons, CTA band, phone CTA, boxed-btn
  border/text, eyebrow, cost estimate) — `@theme` token.
- Accent red-orange `#F04506` (video-icon, tailor-offers numbering,
  hover accents).
- Near-black `#071112` (footer, shipments band; headings `#000`).
- Neutrals: `#fff`, `#F8F8F8` (brand strip), `#f9f9ff`/`#f1f1f1`/`#f8f8f8`
  (light section bgs), text grays `#999`/`#888`/`#636363`/`#b2b2b2`/
  `#6e6575`.
- Font: "Roboto" (body + headings) via Google Fonts; "Roboto Condensed"
  for a couple of display elements.
- Buttons: ALL SQUARE (radius 0) + UPPERCASE. Solid = `#f60` bg white
  text (hero padding 32px 58px); boxed = white bg + 1px `#f60` border +
  `#f60` text (padding 18px 44px, 14px, letter-spacing 1px).
- Section titles: h2 40px/600, lh 1.3, mb-12; orange eyebrows.
- Video icon: 100px white circle, radius 50%, `#F04506` glyph.
- Accordion: borderless, black 20px/700 headers, padding 20px 0 21px.

## Implementer tasks

1. `apps/waybill` scaffold: copy simplest existing app, rename package
   `@free-react-templates/waybill`, set `public/CNAME` →
   `waybill.free.componentdock.com`, `homepage` →
   `https://waybill.free.componentdock.com`, register workspace +
   `npm install` at root (lockfile!), verify
   `grep -c "free-react-templates/waybill" package-lock.json`.
2. `src/index.css`: Tailwind v4 `@theme` tokens (`--color-brand: #f60;
--color-accent: #F04506; --color-ink: #071112`), Roboto via `<link>` in
   index.html; keep `injectUiSource()` in vite.config.ts.
3. Components (one `describe` per component, scenario-style tests first):
   `Navbar` (dropdown + burger/mobile panel), `Hero` (quote form),
   `Services`, `About`, `RoadTransport` (accordion), `ShipmentsBand`
   (video modal), `CtaBand`, `Testimonials` (slider), `LatestNews`,
   `BrandLogos` (carousel), `Footer`.
4. Placeholder images: `https://picsum.photos/seed/waybill-<n>/<w>/<h>`
   (hero truck scene ≈ seed 1, about photo ≈ seed 2, transport split
   ≈ 3, blog 4–6, team portraits 7–9, testimonial founders 10–11, brand
   logos 12–17; screen seeds before committing).
5. Icons: lucide-react (ArrowRight, Play, Send, Truck, Package, Plane,
   Ship, Warehouse/Box, Phone); social brands as inline SVG.
6. jsdom 30: copy MemoryStorage polyfill from `apps/cura/src/test/setup.ts`
   if the app needs localStorage.
7. Gate: `scripts/verify-app.sh waybill` (typecheck + lint + knip + fallow
   - vitest 100% + build). PR: `feat: add Waybill (ColorLib
Thelogistico)`, immediate squash merge, TEMPLATES.md `[x]` ×3 (all
     Thelogistico rows: 629, 1201, 2968) + surge URL + homepage + `npm run
readme:status` bookkeeping.
