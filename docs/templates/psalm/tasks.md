# Psalm (ColorLib Byfaith) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-psalm`.

## Design notes (replication findings)

- **Original:** ColorLib "Byfaith" — a free **Bootstrap 5** church website
  template (source: https://colorlib.com/wp/template/byfaith/). TEMPLATES.md
  has **TWO copies** (line 554 and line 1289, both `- [ ]` unchecked —
  bookkeep BOTH `[x]` + surge URL when done). This prep: Byfaith → **Psalm**
  (a sacred song or hymn — fits the worship theme; single lowercase word,
  no collision with `apps/`, `openspec/specs/`, `docs/templates/` —
  verified 2026-08-16).
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/byfaith/` (HTTP 200, 23,513 bytes,
  `<title>ByFaith — Free Bootstrap 5 Website Template by Colorlib</title>`).
  Stylesheets: `fonts/icomoon/style.css` (icon font), `fonts/flaticon/
font/flaticon.css` (service glyphs), `css/tiny-slider.css` (carousel),
  `css/glightbox.min.css` (video lightbox), `css/aos.css` (scroll reveal),
  `css/style.css` (56,913 bytes, theme's own rules; Bootstrap 5.x comes
  from the cdnjs link in the head). Key vars: `--bs-primary: #f79918`,
  `--bs-font-sans-serif: "Poppins", sans-serif`.
- **Screenshot:** `byfaith-free-template.jpg` (viewed in browser, 1200×946)
  — hero photo (rocky mountain landscape, sunrise tones, man in a mustard-
  yellow jacket with raised hand) + white about with an open-Bible photo +
  top of the dark-teal band. Live render confirms: hero dark, about/sermons/
  services WHITE, Why-Us + CTA `#10495c`, footer cream `#ede1d0`. **NO
  variance between screenshot and live DOM.**
- **Design rhythm:** LIGHT, warm, earthy church aesthetic. Orange
  (`#f79918`) accents on white + two deep-teal bands (`#10495c`) + cream
  footer. Pill buttons everywhere (radius 30px, uppercase 10px text, black
  on orange). Poppins 400/700 for everything (no serif — the "serif" look
  in the screenshot is Poppins 700 at 40px).
- **JS stack in source:** bootstrap.bundle, tiny-slider, glightbox, AOS,
  navbar.js, counter.js, custom.js, gtag. Recreation needs NONE of these —
  plain React: state-driven slider (dots + Prev/Next), burger menu toggle,
  video links (open the YouTube URL in a new tab — the source's glightbox
  opens a modal; a new-tab link is a documented simplification), optional
  CSS-only fade for the AOS effect (decorative, may be skipped).
- **Brand color: `#f79918`** — `.btn-primary` bg/border (text BLACK),
  subheadings on light sections, service icons (60px), slider active dot,
  slider Prev/Next pills, preloader spinner (Bootstrap `text-primary`).
  Hover: `#f8a83b` (buttons) / `#f8a431` (slider pills).
- **Secondary: `#10495c`** (deep teal) — Why-Us band, CTA band, footer
  widget h3 color.
- **Fonts:** Poppins 400 + 700 via Google Fonts `<link>` in index.html.
- **Nav:** `nav.site-nav` ABSOLUTE over the hero (top 0, z-9, padding 20px
  0, transparent). Logo white 20px/700. Links 14px `rgba(255,255,255,.7)`,
  padding 10px 15px, hover `#fff`; "Home" active. Sermons has a dropdown
  (Sermons / Sermons Single / Dropdown → Sub Menu One/Two/Three) — an
  accessible disclosure is fine. Mobile: burger → panel with the same
  links (`aria-expanded`; the source's off-canvas `site-mobile-menu` is a
  clone of the same menu).
- **Hero:** `height: 100vh; min-height: 640px`, bg image cover + overlay
  `rgba(0,0,0,.3)` (`:before`). Left col-lg-4: white uppercase 12px
  subheading "Welcome to Byfaith church" → rename to **"Welcome to Psalm
  church"**; white h1 40px/700 "Oh Safe To the Rock That Is Higher Than I";
  white p; orange pill "Go to sermons". Right col-lg-5: `a.video-bg` →
  `span.icon` 80px circle (border 2px rgba(255,255,255,.2), white 30px
  play glyph) over a rounded img; href = `https://www.youtube.com/watch?
v=mwtbEGNABWU`; needs an aria-label (source alt is just "Image").
- **About (white, `.section` padding 7rem):** col-lg-4 — orange subheading
  "About us", 40px/700 "Living and Sharing The Gospel" (source has a `<br>`
  before "The Gospel" — keep the two-line feel), 2 lorem paragraphs,
  `p.mt-5` orange pill "Know more about us"; col-lg-6 — rounded img.
- **Sermons (`.section.pt-0` — NO top padding, abuts about):** centered
  orange subheading "Sermons" + h2 "Recent Sermons" (row mb-4 text-center);
  `row.g-5` → 3× `col-12 col-sm-6 col-md-6 col-lg-4` (1/2/3 responsive):
  `sermon-entry` = rounded img (mb-3) + `sermon-body` (padding 20px):
  `span.date` "15 Jan 2020 • By Pastor Campbell" (`#999`, block, mb-10px),
  h3 20px `#000` link "Living and Sharing The Gospel", p.mb-5 blurb,
  `btn.btn-primary.btn-sm` "Read more". (btn-sm: padding .25rem .5rem,
  font-size .875rem, radius .2rem.)
- **Why Us (`section.bg-secondary` = `#10495c`):**
  - Header row (mb-5, justify-between, align-items-center): col-lg-5 —
    orange subheading "Why Us" + white h2 "You matter to God, you matter
    to us."; col-lg-5 align-self-end — white p.
  - Content row (align-items-center, g-5): col-lg-6 — 2nd `a.video-bg`
    (rounded img + play circle, same YouTube link); col-lg-5 ms-auto —
    `row.g-4` with 2×2 `col-lg-6.feature-1`: white h3 ("Peace with God" /
    "Relationship for the Soul" / "Identifying Limitations" / "His
    Kingdom") + `p.opac-white-5` (= rgba(255,255,255,.5)) blurbs; then
    `row.mt-5` → orange pill "Send us your prayer request".
- **Testimonials (white):** centered orange subheading "Testimonials" +
  h2 "Living Testimonies" (col-lg-7 mx-auto). Slider (source: tiny-slider
  center mode): NINE `.item` cards — white `testimonial-item-inner`
  (padding 50px 30px, radius 0): h3 18px/700 mb-30 "Far far away, behind
  the word mountains", blockquote 18px italic `#000`, author: 40px circle
  avatar + strong 16px/700 "James Campbell" + span 14px "Person". Controls
  (source = `span.prev`/`span.next` → recreation MUST use `<button>`s):
  orange pills, white uppercase 12px text, hover `#f8a431`, disabled
  opacity .4. Dots: 7px circles rgba(0,0,0,.2), active `#f79918`. Keep ≥5
  cards (all 9 fine); plain React state slider (no tiny-slider).
- **Services (`section.bg-white.mx-2.mx-md-5.sec-services-wrap` — white,
  inset margins, `margin-bottom: -50px` OVERLAPS the CTA below):** centered
  orange subheading "Our Services" + h2 "Church Services"; `row.g-5` → 3×
  col-lg-4 centered cards: 60px `#f79918` icon + 18px h3 + p + "+ Read
  more" link. Source glyphs: `flaticon-wheat` / `flaticon-church` /
  `flaticon-bible` → lucide **`Wheat`**, **`Church`**, **`BookOpen`**
  (probe exports with `typeof` first — fall back to inline SVG if missing).
  Card copy: "Praise and Worship" / "Marriage" / "Exhortation".
- **CTA (`section.sec-cta.bg-secondary` — `padding-top: 10rem`, tall
  because the services wrap pulls up −50px):** col-lg-7 (text-center on
  mobile, text-start on md+) white h2 "Join with us as we worship the
  Lord" + col-lg-5 (text-center/text-md-end) `btn.btn-primary.py-3.px-5`
  "Join Us".
- **Footer (`site-footer`: `#ede1d0`, 70px 0, 14px `#888`, links `#777`):**
  - Contact widget: h3 "Contact" (12px/700 uppercase `#10495c`, mb 15px)
    - address "43 Raymouth Rd. Baltemoer, London 3910" + 2× `tel:` links
      "+1(123)-456-7890" + `mailto:` "info@mydomain.com".
  - Sources widget: h3 "Sources" + TWO float-start columns (`.links`
    width 150px each): "About us, Services, Vision, Mission, Terms,
    Privacy" | "Partners, Business, Careers, Blog, FAQ, Creative".
  - Links widget: h3 "Links" + "Our Vision, About us, Contact us" + `ul.
social`: SIX 40×40 WHITE rounded-square links (radius 40%, glyph
    absolute-centered): Instagram, Twitter, Facebook, LinkedIn, Pinterest,
    Dribbble → inline SVG brand icons (lucide removed brand icons — probe
    with `typeof`), each with `aria-label`.
  - Bottom bar (row mt-5, col-12 text-center): "© <year> All rights
    reserved | This template is made with ♥ by Colorlib" → recreation
    **"© <current year> Psalm — made with ♥ by Component Dock"** (link
    `https://www.componentdock.com/`; NO ColorLib in app code).
- **Preloader (optional):** `#overlayer` white fixed overlay + Bootstrap
  spinner; `text-primary` = `#f79918` (theme var). Skippable in the
  recreation — note it in the PR if omitted.

## Structure order (1:1)

1. `nav.site-nav` (absolute over hero): logo "Psalm" (white 20px/700) +
   links Home / Sermons (dropdown) / Ministries / Events / Contact +
   burger toggle (mobile)
2. `div.hero.overlay` (100vh min-640px, bg image + rgba(0,0,0,.3)):
   - col-lg-4: subheading "Welcome to Psalm church" · h1 "Oh Safe To the
     Rock That Is Higher Than I" · p · pill "Go to sermons"
   - col-lg-5: video-bg link (play circle + rounded img) → YouTube
3. `div.section` (About, white): col-lg-4 text ("About us" / "Living and
   Sharing The Gospel" / 2 p / "Know more about us") + col-lg-6 rounded img
4. `div.section.pt-0` (Sermons, white): centered "Sermons" / "Recent
   Sermons" + 3 sermon cards (img, date, h3 link, p, btn-sm "Read more")
5. `div.section.bg-secondary` (Why Us, #10495c): "Why Us" + white h2 +
   white p; video-bg img; 2×2 features + "Send us your prayer request"
6. `div.section` (Testimonials, white): "Testimonials" / "Living
   Testimonies" + slider (≥5 cards) + dots + Prev/Next pills
7. `div.section.bg-white.mx-2.mx-md-5.sec-services-wrap` (Services,
   white): "Our Services" / "Church Services" + 3 cards (Wheat / Church /
   BookOpen icons) — margin-bottom −50px
8. `div.section.sec-cta.bg-secondary` (CTA, #10495c, pt 10rem): h2 +
   "Join Us" pill (py-3 px-5)
9. `footer.site-footer` (#ede1d0): Contact / Sources / Links widgets +
   socials + copyright with Component Dock link
10. (optional) preloader spinner

## Implementation tasks

- [ ] Scaffold `apps/psalm` (copy simplest existing app; package
      `@free-react-templates/psalm`; `public/CNAME` =
      `psalm.free.componentdock.com`; homepage =
      `https://psalm.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Psalm — Church", Poppins 400+700 Google Fonts
      `<link>`
- [ ] `src/index.css` tokens: `#f79918` (primary/brand), `#f8a83b` (btn
      hover), `#10495c` (secondary bands), `#ede1d0` (footer bg), `#888`
      (footer text), `#777` (footer links), `#999` (sermon date),
      `rgba(255,255,255,.5)` (opac-white copy), `rgba(0,0,0,.3)` (hero
      overlay); pill button recipe: radius 30px, padding 12px 20px,
      10px/700 uppercase with letter-spacing .1rem
- [ ] Components: `Navbar` (logo, links + Sermons dropdown, burger menu
      with aria-expanded), `Hero` (bg image, overlay, subheading/h1/p/CTA,
      video-bg play circle), `About`, `Sermons` (3-card grid), `WhyUs`
      (2×2 features + video-bg + CTA), `Testimonials` (state-driven
      slider: dots + `<button>` Prev/Next), `Services` (3 icon cards),
      `Cta`, `Footer` (3 widgets + socials + Component Dock credit)
- [ ] Images: picsum seeds only — hero `psalm-1/1920/1080`, hero video
      thumb `psalm-2`, about `psalm-3`, sermons `psalm-4/5/6`, why-us
      video thumb `psalm-7`, avatar `psalm-8`
- [ ] Icons: lucide `Wheat` / `Church` / `BookOpen` (probe with `typeof`;
      fall back to inline SVG); social brand glyphs as inline SVG
      (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble) with
      aria-labels
- [ ] Video links: `https://www.youtube.com/watch?v=mwtbEGNABWU` opened
      in a new tab (documented glightbox simplification), aria-label on
      both play links
- [ ] AOS: optional CSS-only fade or skip (documented deviation)
- [ ] Tests: 100% coverage — navbar links + dropdown + burger
      aria-expanded; hero copy + CTA + play link; about; 3 sermon cards
      (date line, title, Read more); why-us features ×4 + prayer CTA;
      slider cards + dot/pill navigation (state transitions); 3 services
      with icons; CTA; footer widgets + 6 social aria-labels + Component
      Dock link; responsive classes
- [ ] `npm run verify:app psalm` passes; commit `feat: add psalm …`; PR +
      immediate squash merge; then TEMPLATES.md bookkeeping — BOTH line
      554 AND line 1289 (Byfaith) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Navbar absolute over hero; "Psalm" white 20px/700; links 14px
      `rgba(255,255,255,.7)` hover `#fff`; accessible burger below lg
- [ ] Hero: 100vh/min-640px, cover image + `rgba(0,0,0,.3)` overlay;
      "Welcome to Psalm church" / "Oh Safe To the Rock That Is Higher
      Than I" (white 40px/700) / "Go to sermons" pill; play circle 80px
      over rounded img linking YouTube
- [ ] About: white, "About us" orange, "Living and Sharing The Gospel"
      40px/700, 2 paragraphs, "Know more about us" pill, rounded img
- [ ] Sermons: centered "Sermons" / "Recent Sermons"; 3 cards (photo,
      "15 Jan 2020 • By Pastor Campbell" `#999`, black 20px h3 link,
      blurb, btn-sm "Read more"); 1/2/3 responsive columns
- [ ] Why Us: `#10495c`; white h2 "You matter to God, you matter to us.";
      white copy; video-bg; 2×2 features (Peace with God / Relationship
      for the Soul / Identifying Limitations / His Kingdom) with
      `rgba(255,255,255,.5)` blurbs; "Send us your prayer request" pill
- [ ] Testimonials: "Testimonials" / "Living Testimonies"; ≥5 white cards
      (18px/700 heading, italic 18px quote, 40px avatar, "James
      Campbell"/"Person"); Prev/Next as `<button>` pills + dots (active
      `#f79918`); works without frameworks
- [ ] Services: white inset (mx-2 mx-md-5), "Our Services" / "Church
      Services"; 3 cards (60px `#f79918` lucide icons, 18px headings,
      "+ Read more"); −50px overlap onto CTA; CTA pt 10rem
- [ ] CTA: `#10495c`; "Join with us as we worship the Lord" + "Join Us"
      py-3 px-5 pill
- [ ] Footer: `#ede1d0` 70px 0 14px `#888`; Contact / Sources (2×6) /
      Links widgets; 6 white rounded-square socials with aria-labels;
      "© <year> Psalm — made with ♥ by Component Dock" →
      `https://www.componentdock.com/`
- [ ] Responsive: all rows stack below lg; no horizontal overflow
- [ ] Poppins Google Fonts link; picsum-only images; no ColorLib anywhere
      in `apps/psalm`
- [ ] `npm run verify:app psalm` green; TEMPLATES.md lines 554 + 1289
      bookkept `[x]`
