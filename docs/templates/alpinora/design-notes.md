# Alpinora (ColorLib "Adventure") — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | "Adventure" (kept on ColorLib's side only; preview `<title>`: "Adventure \| Free Bootstrap Template") |
| Recreation name | **Alpinora** (NEW — alpine + "-ora" travel-brand suffix; single lowercase word; never "Adventure") |
| Slug | `adventure` |
| Source page | https://colorlib.com/wp/template/adventure/ |
| Live preview | ✅ **REACHABLE** — https://preview.colorlib.com/theme/adventure/ HTTP 200, **29,492 bytes** (verified 2026-10-01). Single page: transparent nav over full-bleed coastal hero slider, 8 content sections, dark footer |
| Stylesheets | `css/main.css` HTTP 200 **34,840 B** (custom theme — canonical tokens) · `css/bootstrap.css` (stock Bootstrap 4 — layout only) · `linearicons.css` + `font-awesome.min.css` (icon fonts — NEVER copied → lucide-react) · `owl.carousel.css` (slider lib — NEVER copied → React state) · `magnific-popup.css` (lightbox — → local popover) · `animate.min.css` (optional) · Google Fonts: **Poppins** 300–700 |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/adventure-free-travel-website-template.jpg — real **JPEG 1200×946** (167,794 B, verified 2026-10-01). Shows coastal-cliffs full-bleed hero, transparent nav, giant white "NEW EXPERIENCE" + white pill "DISCOVER NOW", white section below with centered dark title + split image/card. Screenshot is authoritative for the WHITE hero copy (main.css `.default-banner h1 { color: #222 }` is overridden on the photo in the live render) |
| TEMPLATES.md | `## Travel (44)` at line 2972; item at line **2974**; slug `adventure` appears exactly once (checked against origin/main @ 04d6ad3c4) |
| Name collision check | "alpinora" = **0 hits** (case-insensitive) in `ls apps/` (1626 folders), `openspec/specs/` (3152 folders), and `git grep -i alpinora origin/main` (whole tree), 2026-10-01. Loose substring checks clean too. Distinct from travel-family names on main: trailquest, roam, wander, quest, expedition, getaway, driftwood, sunlodge, luxstay, voyager-family names |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## Design token summary (full table in the spec)

- **Fonts:** Poppins throughout — headings 600 (h1 700), body copy
  300/400, buttons/nav 500–600. Google Fonts `<link>` only.
- **Brand gradient:** `linear-gradient(0deg, #b21aff 0%, #732bde 100%)`
  (bottom→top: vivid purple → deep indigo). Applied to: `.primary-btn`,
  `.single-feature:hover`, `.video-area .overlay-bg` (opacity .6),
  `.single-footer-widget .bb-btn`, `.counter-left h2` (gradient TEXT via
  `background-clip: text`), `.footer-social a:hover i`, `.generic-banner`.
- **Greens/reds (utility only, not core page):** `.genric-btn` success
  `#4cd3e3`, info `#38a4ff`, warning `#f4e700`, danger `#f44a40`;
  progress-table bars `#6382e6`/`#e66686`/`#f09359`/`#73fbaf` —
  elements-page extras; skip on the index page.
- **Text:** headings `#222222`; body `#777777`; hero copy white (on photo).
- **Backgrounds:** page white; project band + feature cards `#f9f9ff`
  (light lavender); FAQ section white; footer `#222222`; newsletter input
  `#191919`; sticky/mobile header `#222222`; social icons idle `#cccccc`.
- **Radii:** primary pill `25px`; hero CTA `20px`; newsletter button `0`
  (square); newsletter input `0`.
- **Buttons:**
  - `.primary-btn` — gradient bg, radius 25px, line-height 42px,
    padding-left 30px / padding-right 60px, white 500 text, arrow span
    absolutely `right: 30px` → `20px` on hover (0.3s).
  - `.header-btn` — white bg, `#222` text, padding 8px 40px, weight 600,
    radius 20px, shadow `0 20px 20px rgba(0,0,0,0.1)`, uppercase;
    hover → transparent + 1px white border + white text.
  - `.bb-btn` — gradient, white, weight 300, radius 0 (square).
- **Shadows:** info card `0 0 50px rgba(157,157,157,0.3)` + edge strip
  `-35.355px 35.355px 50px rgba(157,157,157,0.3)`; gallery arrows
  `-14.142px 14.142px 20px rgba(157,157,157,0.2)`; hero CTA
  `0 20px 20px rgba(0,0,0,0.1)`.
- **Rhythm:** section-gap padding on about/project/features/faq/contact/
  footer sections; video section `padding: 200px 0 60px`; hero h1 72px/1em
  desktop (scales 45px @1199px, 36px @991px); counters 48px/700;
  feature card padding `30px 30px 15px`.

## DOM skeleton (from adventure-preview.html, in order)

```
header.default-header (absolute, transparent → #222 mobile/sticky)
  brand: diamond mark + "Adventure" → Alpinora
  nav: Home · About · Service · Gallery · Faq · Contact
  nav item "Pages" → dropdown: Generic · Elements (inner pages NOT recreated)
section#home.banner-area
  .default-banner.active-blog-slider (owl; 3 slides)
    slide ×3: h4 eyebrow "Discover the Colorful World" +
      h1 ("New Adventure" | "New Trip" | "New Experience") +
      p lorem ×2 + a.header-btn "Discover Now"
section#about.info-area
  title: h1 "Why Choose Us Your Fitness Builder" +
         p "Who are in extremely love with eco friendly system."
  split: img (info-thumb) + .info-content (white card):
    h2 with <br> "We Realize that / there are reduced / Wastege Stand out" +
    p ×3
section#project.project-area (#f9f9ff)
  title: h1 "Latest Project on the go" + p lorem ×2
  5 × project card: img + h6 "Vector Illustration" + p (LCD screens blurb)
section#secvice.feature-area  [reference typo id "secvice"]
  title: h1 "Some Features that Made us Unique" + p subtitle
  6 × .single-feature (bg #f9f9ff, hover → gradient):
    lnr icon + h4 + p — Expert Technicians · Professional Service ·
    Great Support · Technical Skills · Highly Recomended · Positive Reviews
section#gallery.gallery-area
  owl slider: 6 × .single-gallery-image (img/g1..g6; height 200px cover)
  controls: .lnr-arrow-up / .lnr-arrow-down (white boxes, bottom-right
    at left:90% top:89%)
section#faq.faq-area (bg #fff)
  title: h1 "Frequently Asked Questions" + p subtitle
  .counter-left (right-aligned): h2 gradient-text 48px ×4 —
    5962 Projects Completed · 2394 New Projects ·
    1439 Tickets Submitted · 933 Cup of Coffee
  accordion h2 ×3 — "Are your Templates responsive?" ·
    "Does it have all the plugin as mentioned?" ·
    "Can i use the these theme for my client?" (+ body copy each)
section.video-area (padding 200px 0 60px; bg video-bg.jpg cover)
  .overlay-bg (gradient, opacity .6)
  play icon link (magnific popup → React popover) +
  h3 "Being unique is the preference" (600/18px/ls 2px) +
  h4 "Youtube video will appear in popover" (300/14px) +
  .video-desc (right-aligned, margin-top 120px)
section.logo-area
  container > row — **EMPTY** in live preview (no logos, no imgs)
section#contact.contact-area
  title: h1 "If you need, Just drop us a line" + p subtitle
  form: input name="name" (req, "Enter your name") ·
    input name="email" (req, pattern regex, "Enter email address") ·
    input name="subject" (req, "Enter your subject") ·
    textarea name="message" (req, "Messege" [sic]) ·
    button.primary-btn "Send Message"
footer.footer-area (#222222, padding-top 100px)
  widget h6 "About Us" + lorem p
  widget h6 "Newsletter" — p "Stay update with our latest" +
    input (bg #191919, color #777, radius 0, width 80%) + .bb-btn (gradient)
  widget h6 "Follow Us" — p "Let us be social" + social icons (#cccccc,
    hover → gradient)
  copyright bar: "Copyright © <year> All rights reserved |
    This template is made with ❤ by Colorlib" → reword for Alpinora +
    Component Dock link https://www.componentdock.com/
```

## Section-by-section fidelity notes

1. **Header** — absolute over hero; transparent desktop, solid `#222`
   on mobile (<992px) and when `.is-sticky` engages on scroll. Brand mark
   is a 4-square diamond (recreate as inline SVG/lucide, never copy).
   White uppercase nav links per the screenshot; Pages dropdown is a
   static menu (Generic/Elements are dead links — no inner pages).
2. **Hero** — `margin-top: -48px` under the absolute header; full-bleed
   coastal photo (picsum seed per slide); white centered copy; giant
   h1 72px/700/1em. Reference uses owl-carousel — recreate with React
   state (autoplay + dots/arrows + pause-on-hover).
3. **About** — centered title row; then image left + white card right.
   The card's signature is the layered gray shadow + the 70px white edge
   strip with a diagonal `-35px 35px` shadow (an `::after` in main.css);
   recreate with a pseudo-element or an absolutely-positioned div. h2 uses
   deliberate `<br>` breaks — keep the 3-line rhythm.
4. **Projects** — `#f9f9ff` band; 5 cards each titled "Vector
   Illustration" with the LCD-screens blurb (paraphrase OK, keep kind of
   content). Reference is an owl slider — responsive carousel/grid with
   next/prev state is acceptable; keep multi-card row on desktop.
5. **Features** — the hover flood is the signature: card bg goes from
   `#f9f9ff` to the full purple gradient, text/icon → white, 0.3s ease.
   Icons: lucide replacements for the LinearIcons glyphs (wrench, headset,
   code, thumbs-up, badge-check, star — approximate the reference's
   generic tech icons).
6. **Gallery** — 6 cover images (~200px tall); vertical up/down arrow
   controls bottom-right in white boxes with the diagonal shadow — a
   distinctive control placement; keep it.
7. **FAQ** — counters first (right-aligned block) with gradient TEXT
   (background-clip: text + transparent fill — not a gradient fill);
   then the 3-question accordion. 2-column desktop layout (facts left,
   accordion right) is a reasonable reading of the reference.
8. **Video CTA** — full-bleed photo under the gradient at 0.6 opacity;
   play icon opens a local popover/modal (no third-party embed needed);
   keep the 200px top padding rhythm.
9. **Logo strip** — reference container is empty. Render empty spacing;
   do NOT invent a partner-logo grid (fidelity rule).
10. **Contact** — 4 fields, all required; email uses the pattern regex;
    submit = primary gradient pill with sliding arrow; zod +
    react-hook-form per repo conventions; local success state.
11. **Footer** — `#222222`; three widgets (About / Newsletter / Follow
    Us); newsletter input dark `#191919` + square gradient button;
    social icons `#cccccc` → gradient on hover; copyright reworded (no
    ColorLib credit); **Component Dock link mandatory**
    (https://www.componentdock.com/).

## Prep provenance

- Research fetched 2026-10-01 from `https://preview.colorlib.com/theme/adventure/`
  (HTML 29,492 B; `css/main.css` 34,840 B) and the TEMPLATES.md screenshot
  JPEG (1200×946); artifacts cached at `/tmp/adventure-preview.html`,
  `/tmp/adventure-main.css`, `/tmp/adventure-screenshot.jpg`.
- Spec authored by the prep stream; implementation happens later on
  `feat/template-alpinora` (implementers: follow `docs/templates/alpinora/tasks.md`).
