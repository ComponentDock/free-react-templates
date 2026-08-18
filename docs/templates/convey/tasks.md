# Convey (ColorLib Logistic) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-convey`. Recreation name: **Convey** (NEW name —
> the ColorLib source keeps its name "Logistic").

## Source mapping

- **ColorLib item:** "Logistic" (section "## Bootstrap 5 (89)", first
  unprepped row at line 601).
- **DUPLICATED — THREE rows to mark `[x]`:** the slug
  `wp/template/logistic/` appears in TEMPLATES.md at lines **601, 1082,
  2964** (all currently `- [ ]`). When shipping, mark ALL THREE rows with
  `https://convey.free.componentdock.com` + run `npm run readme:status`.
  (Do NOT confuse with "Logistics" `wp/template/logistics/` → already
  shipped as shiply, nor "Thelogistico" `wp/template/thelogistico/` —
  different templates.)
- **Source URL:** https://colorlib.com/wp/template/logistic/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch):**
  `https://preview.colorlib.com/theme/logistic/` (HTTP 200, 33,302
  bytes). Standard path — NOT the `/theme/bootstrap/` prefix (that is only
  for the Calendar/Carousel/Multiselect demo families). Do not redo this
  lookup.
- **Stylesheets:** `assets/css/bootstrap.min.css`,
  `owl.carousel.min.css`, `slicknav.css`, `animate.min.css`,
  `magnific-popup.css`, `fontawesome-all.min.css`, `themify-icons.css`,
  `slick.css`, `nice-select.css`, `assets/css/style.css` (73,574 B — ALL
  template CSS incl. blog/elements pages; index rules only for us).
  Fonts: Raleway 200–900 via Google Fonts (`@import` in style.css) →
  Google Fonts `<link>` in the recreation.
- **Scripts:** jquery + bootstrap + slick (+ owl/magnific loaded) +
  `js/main.js` (slick slider + sticky header + magnific popup wiring).
  Recreation supplies all of this in React (no jQuery).

## Reference research (done — do not redo)

### Screenshot (`logistic-free-template.jpg`, 1200×946, AVIF on the CDN) +

live page

- Screenshot: white navbar (red square logo + "Logistic." wordmark, menu
  Home/Services/About/Blog/Contact, social icons, red "Get Free Quote"
  button) over a full-width hero photo of a cargo ship at a container
  port with cranes; the hero caption is a SPLIT BOX — red left panel with
  "Give your business a flow" + white-outline button, white right panel
  with sub-headline — with slider arrows; below, centered "Our Services"
  with 3 photo cards (airplane at sunset / port cranes / red semi-truck).
- Visual style: corporate, professional, hard-edged (square corners),
  red-white-navy. Raleway typography.

### Live-computed confirmations (fetched HTML + CSS, verified 2026-08-18)

- **Hero is a 3-slide slick carousel** (`div.slider-active`), each slide
  `single-slider hero-overly1 slider-height slider-bg1|2|3`, min-height
  850px desktop. The caption box is NOT absolute over the whole slide —
  it sits on the left ~half as two side-by-side 437px panels: RED
  `.hero-caption-left` (h1 50px 900 white + `border-btn` white outline
  "Our Services") and WHITE `.hero-caption-right` (icon + h2 34px 700).
- **All primary buttons are SQUARE** (border-radius 0): `.btn` red
  `#F02930` 22×32 padding 16px 600 white; `.border-btn` white outline
  17×39 hover→white-fill red-text; `.submit-btn2` 50px tall 10×36 14px.
- **Brand palette:** red `#F02930` / hover sweep `#db2228` / checked
  checkbox `#ff4357`; navy `#1D2547` (footer + nav links) and `#232F55`
  (headings + text + inputs); ice blue `#F1FBFF` (`.gray-bg` bands +
  testimonial card + more-btn text); caret `#7EA0FF`; input border
  `#DBE2E9`; footer body `#C2C5DB`.
- **Quote form:** 3 custom checkboxes (Ocean Freight / Air Freight
  [checked] / Land Transport) + 11 labelled text inputs (CARGO TYPE,
  COUNTRY OF ORIGIN, DESTINATION / QTY, WEIGHT, WIDTH, HEIGHT, LEIGHT
  [length] / NAME, E-MAIL, PHONE) in a responsive grid + square red
  "Request Quote" button. Source: NO validation, posts to `#`.
  Recreation adds zod validation + inline success panel.
- **Video band:** full-bleed photo `video-bg.jpg` with
  `background-attachment: fixed`; centered `video-icon` = white 110px
  circle, red play glyph, Magnific-Popup YouTube modal
  (youtube.com/watch?v=up68UAfH0d0). Recreation: React lightbox w/ embed
  or inert link per conventions.
- **Testimonial slider:** second slick carousel, card bg `#F1FBFF`
  radius 4px, centered quote, round avatar, name "Jacson Miller", role
  "Designer @Colorlib" (paraphrase both — no ColorLib strings).
- **Footer `#1D2547`:** brand col (logo + paragraph + 4 circular social
  icons: red glyph on `rgba(240,41,48,0.05)` circle 40px, hover fill red
  - rotateY flip), "Quick links" (Listing, Submit your Business, About,
    Blog, Cities), "Company" (Our Team, Privacy Policy, Testimonial, User
    Stories), bottom bar copyright + "made with ♥ by Colorlib" → replace
    with Component Dock credit.

## Build order (suggested)

1. **Scaffold** — copy simplest app, package `@free-react-templates/convey`,
   register workspace (`npm install --package-lock-only` or full `npm
install`), `public/CNAME` = `convey.free.componentdock.com`, homepage
   in package.json.
2. **Tokens + font** — index.css `@theme` (brand/ink/ice/navy/caret…),
   Raleway `<link>` in index.html.
3. **Navbar** — sticky white header, logo, menu, socials, "Get Free
   Quote" button, mobile hamburger menu.
4. **Hero slider** — 3 slides, red/white split caption, auto-advance +
   arrows (a11y: aria-labels, keyboard reachable, only active slide
   visible).
5. **Services** — 3 numbered photo cards.
6. **About band** — ice-blue, heading + red button + 2 icon rows.
7. **Control band** — photo bg + headline + 2 solution blocks (one with
   red left rule).
8. **Video band** — fixed photo + white 110px play circle + lightbox.
9. **Quote form** — checkboxes + 11 fields + validation + success state.
10. **Testimonials** — slider card.
11. **Footer** — navy, social circles, link columns, Component Dock
    credit.
12. **Gate** — `scripts/verify-app.sh convey` → PR → squash merge →
    bookkeeping: mark TEMPLATES.md lines 601 + 1082 + 2964 `[x]` with
    `https://convey.free.componentdock.com`, `npm run readme:status`.

## Fidelity pitfalls (specific to this source)

- **SQUARE everything.** Do not round buttons/inputs/panels — radius 0
  is the design language.
- **Hero caption is a PANEL PAIR, not an overlay on the photo.** Left red
  - right white side-by-side, ~437px tall, sitting on the slide photo.
- **Checkbox "check" state:** source ships Air Freight checked with a
  red `#ff4357` square; the OTHER two are unchecked. Keep one default.
- **`LEIGHT` is the source's (misspelled) LENGTH field** — use
  `LENGTH` in the recreation (same grid position).
- **Phone display** — avoid literal `tel:+` strings in source (secret-scan
  redaction). Show phone as spaced display text (`+10(78) 267 3565`
  style); if you link it, compute the href at runtime.
- **Two slick carousels** (hero + testimonials) — both are distinct
  rotators; do not merge them into one.
- **No ColorLib strings in app code** — testimonials' "Designer
  @Colorlib" role line must be paraphrased (e.g. "Logistics Manager").
