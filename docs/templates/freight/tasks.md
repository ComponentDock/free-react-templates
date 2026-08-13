# Freight (ColorLib Logistic) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-freight`.

## Design notes (replication findings)

- **Original:** ColorLib "Logistic" — clean corporate LOGISTICS / TRANSPORT
  one-pager (source: https://colorlib.com/wp/template/logistic/, Logistics
  category). TEMPLATES.md has THREE copies of this item (lines 601, 1082,
  2962 — mark ALL `[x]` when done). Do NOT confuse with "Logistics" (with
  an s) — that is a DIFFERENT template, already shipped as `apps/shiply`
  (rows 442/1083 `[x]`).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/logistic/
  (HTTP 200, ~33 KB HTML; `assets/css/style.css` ~74 KB parsed for tokens).
  Stack is jQuery + Bootstrap + Owl Carousel (hero + testimonials) +
  SlickNav (mobile) + NiceSelect (form selects) + Magnific Popup + Font
  Awesome + Themify icons — recreate all interactivity client-side in React.
- **Screenshot:** `logistic-free-template.jpg` (1200×946, viewed in
  browser) — hero SPLIT over a shipping-port photo (cargo ship "GRIMALDI
  LINE", cranes, blue water): LEFT block solid red with white h1 "Give your
  business a flow" + white "Our Services" button; RIGHT block white with
  icon + dark h2 "Transport quality and excellence to enhance your
  business". Header: red logo mark + "Logistic" wordmark left, centered nav,
  red "Get Free Quote" button right. Below: "Our Services" 3-column photo
  cards — 01. Air Shipping, 02. Logistic Service, 03. Ground Shipping.
- **New name:** Freight (cargo/transport vibe, fits logistics). Single
  lowercase word, no collision with `apps/` or existing spec folders. NOT
  "logistic" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** VIVID RED `#F02930`
  brand (hero left block bg, nav hover, `.boxed-btn` border/text + hover
  fill, header "Get Free Quote" button, form phone) + dark navy ink
  `#1D2547` / `#232F55` (nav links, headings) on white / light-blue
  `#F1FBFF` canvas (`.gray-bg` about + quote form; testimonial card bg).
  Single font: Raleway (body 16px 400, nav 600, headings 600/700). All
  buttons `.boxed-btn` radius 0: white bg, red text, 1px red border,
  uppercase, letter-spacing 1px, padding 18px 44px; hover → red fill white
  text. Section rhythm `.section-padding` 120px/100px. Testimonial cards
  `#F1FBFF` radius 4, padding 45px 100px.

## Structure (1:1, section order — from the live DOM)

1. **Header** (white) — logo left (red square mark + "Freight" wordmark);
   centered `main-menu` nav: Home, Services, About, Blog ▾ (Blog, Blog
   Details, Elements), Contact — `#1D2547` 16px/600 Raleway capitalize,
   padding 28px 22px, hover `#F02930`; right: red `boxed-btn2` "Get Free
   Quote" (padding 4px 20px). Mobile: hamburger slide-in panel
   (`aria-expanded`).
2. **Hero slider** (`.hero-area`) — owl slider, 3 slides (`slider-height`
   min-height 850px, cover bg photos `h1_hero.jpg` / `h1_hero2.jpg` /
   `h1_hero3.jpg`); split content per slide: LEFT red block — white h1
   "Give your business a flow" + `a.hero-btn` "Our Services" (white bg, red
   text, padding 18px 52px); RIGHT white block — icon + h2 "Transport
   quality and excellence to enhance your business" (dark navy). Left/right
   arrows; client-side cycling.
3. **Services** (`sercices-area section-padding`, white) — centered h2 "Our
   Services"; 3 `col-lg-4` cards: photo + numbered caption + copy — "01.
   Air Shipping", "02. Logistic Service", "03. Ground Shipping" (VARY the
   repeated "Praesent eu rhoncus nibh…" copy per card).
4. **About** (`about-area section-padding gray-bg`, bg `#F1FBFF`) — left:
   h2 "We have a wide range of solutions for your business" + paragraph +
   `a.boxed-btn` "Learn More" + feature rows (icon + title + blurb):
   "Tracking Is Easy", "Multiple Warehouses"; right: truck photo.
5. **Quote form** (`contact-form-area gray-bg`, bg `#F1FBFF`) — left: h2
   "Get free quote" + paragraph + phone "+10(78) 267 3565" (red); right
   form: radio pills Ocean Freight (default) / Air Freight / Land
   Transport; selects CARGO TYPE, COUNTRY OF ORIGIN, DESTINATION; inputs
   QTY, WEIGHT, WIDTH, HEIGHT, LENGTH (original has typo "LEIGHT" — use
   LENGTH), NAME, E-MAIL, PHONE; `a.boxed-btn` "Request Quote" — zod
   validation + success state.
6. **Testimonials** (`testimonial-area section-bg1`, white — `.section-bg1`
   has NO css rule; bg stays white) — centered h2 "Client Testimonial";
   carousel of `.single-testimonial` cards (bg `#F1FBFF`, radius 4,
   padding 45px 100px → 45px 20px mobile): quote (lorem, paraphrase) +
   avatar + name + role; VARY the repeated "Jacson Miller" and REWORD
   "Designer @Colorlib" (e.g. "Product Designer" — no colorlib strings in
   app code); client-side cycling.
7. **Footer** — 4 columns: (1) footer logo + about copy + social icons
   (facebook-f, instagram, twitter, pinterest-p); (2) "Quick links":
   Listing, Submit your Business, About, Blog, Cities; (3) "Company": Our
   Team, Privacy Policy, Testimonial, User Stories; (4) "Address" (h3):
   "New York - 1060, Str. First Avenue 1", "+ (123) 1800-567-8990",
   "office@example.com", "Mon - Fri: 9:00 - 19:00", "Closed on Weekends".
   Bottom bar: "Copyright © <year> All rights reserved" + credit — Colorlib
   credit REPLACED with **Component Dock link**
   (https://www.componentdock.com/).

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-freight/`)
- [ ] Scaffold `apps/freight` (copy simplest existing app; package
      `@free-react-templates/freight`; `public/CNAME` =
      `freight.free.componentdock.com`; homepage
      `https://freight.free.componentdock.com`); run `npm install` at
      root and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — brand `#F02930`, ink `#1D2547`,
      heading-navy `#232F55`, light-bg `#F1FBFF`, muted `#999999`/
      `#888888`; Raleway Google Fonts `<link>` in index.html
- [ ] `Header` — white header (logo left, centered nav with Blog dropdown
      [Blog, Blog Details, Elements], red "Get Free Quote" button right),
      mobile hamburger toggle
- [ ] `HeroSlider` — 3 slides, cover bg photos, split red/white content
      blocks ("Give your business a flow" h1 + white "Our Services" btn /
      icon + "Transport quality and excellence…" h2), arrows +
      client-side cycling
- [ ] `Services` — white section, centered "Our Services" heading, 3 photo
      cards with numbered captions (01 Air Shipping / 02 Logistic Service /
      03 Ground Shipping)
- [ ] `About` — `#F1FBFF` band: heading + copy + "Learn More" boxed button + features (Tracking Is Easy, Multiple Warehouses) + truck photo
- [ ] `QuoteForm` — `#F1FBFF` band: "Get free quote" + phone; radio pills
      (Ocean/Air/Land Freight), selects + inputs (QTY…LENGTH, NAME, E-MAIL,
      PHONE), "Request Quote"; zod validation + success state
- [ ] `Testimonials` — white section, "Client Testimonial" heading,
      `#F1FBFF` cards (quote + avatar + name + role), client-side carousel
- [ ] `Footer` — 4 columns (about + socials / Quick links / Company /
      Address) + bottom bar with Component Dock link
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh freight`
- [ ] PR `feat/template-freight` → merge immediately; TEMPLATES.md rows
      601 + 1082 + 2962 → `[x]` + surge URL + readme:status
