# Interiora (ColorLib Franclin) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-interiora`.

## Source mapping

- **ColorLib item:** "Franclin" (TEMPLATES.md — appears 2×: lines 585 and
  1966; both rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/franclin/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/franclin/
- **Preview URL:** https://preview.colorlib.com/theme/franclin/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~36 KB HTML; browsed visually too). Do not
  redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/franclin/assets/css/style.css
  (~71 KB, minified, one line) — also imports animate.min.css,
  bootstrap.min.css, fontawesome-all.min.css, magnific-popup.css,
  nice-select.css, owl.carousel.min.css, slick.css, slicknav.css,
  themify-icons.css (assets/css/). Site is Bootstrap 5 + jQuery + Owl
  Carousel + slick + slicknav + wow + magnific-popup — NOT Tailwind. Font:
  Google Fonts `Jost` 300–900 via `@import` as the FIRST line of style.css.

## Reference research (done — do not redo)

### Screenshot (`franclin-free-template.jpg`)

The live preview was browsed visually (browser screenshot taken): full-bleed
interior-photo hero with centered white headline ("My home is almost put
together, but I could really use a new rug.", "almost put together"
underlined), dark pill "Check Our Services" button, warm orange accents on
buttons/stars/counters, white body with generous spacing, peach
(`#f1c4a3`) testimonial band, dark (`#1a1a1a`) CTA band. The live preview
DOM + parsed stylesheet are the authoritative reference; the screenshot
confirms the same design.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS + browser)

1. **Header** `div.header-area.header-sticky` — 3-part flex layout:
   - `header-info-left` > `ul.main-menu` (inline-block li): Home / What We
     Do? / Projects (`li` > `ul.multipage` — white dropdown panel width
     150px, shadow `0 0 10px 3px rgba(0,0,0,0.05)`, padding 17px 0,
     `visibility:hidden; opacity:0` → visible on `li:hover`, top 100%).
   - `header-info-mid` — centered brand logo img.
   - `header-info-right` (d-flex align-items-center): Blog / Contact Us +
     `a.header-btn2` "Free Quote" (orange pill: bg `#e67118`, padding
     13px 25px, radius 25px, white 16px 500).
   - Nav links: 18px weight 500 `#2a2a2a`, padding 26px 8px; hover
     `#e67118` + `::after` 3px `#e67118` underline (width 0 → 100% sweep);
     sticky (`.sticky-bar`): white bg + shadow `0 10px 15px
rgba(25,25,25,0.1)`.
2. **Hero slider** `div.slider-area` (bg `#f2f4f8`) >
   `div.slider-active.dot-style` (Owl carousel; 3 ×
   `div.single-slider.slider-height.hero-overly.slider-bg1 d-flex
align-items-center`): height 850px, bg photo `h1_hero.jpg` cover, overlay
   `rgba(84,84,84,0.2)` via `.hero-overly::before`; `div.hero-caption
text-center`:
   - `h1` white 60px weight 500 line-height 1.3 (55/43/33px responsive):
     "My home is <span>almost put together,</span> but I could really use
     a new rug." — `<span>` has `text-decoration: underline`.
   - `p` white 20px (mb 41px).
   - `a.btn_1.hero-btn` "Check Our Services" — dark pill: bg `#2a2a2a`,
     border 1px `#2a2a2a`, white 18px 500, padding 25–35px 55px, radius
     41px; hover: transparent bg, `#2a2a2a` text.
   - Dot navigation (`.dot-style`), slide transitions (wow/animate).
3. **Stats band** `section.about-low-area.section-padding` (padding 120px
   vertical):
   - `div.about-caption`: `div.section-tittle` (eyebrow `span` — 14px
     uppercase `#e67118` letter-spacing 0.3em rotated -90deg absolute
     left -36px top 35px — OPTIONAL detail, safe to skip if it complicates
     layout; + `h2` "We work side by side with you to create exceptional
     spaces." 34px weight 500 `#2a2a2a` mb 12px) + `p` 16px + `a.btn_10`
     "More About Us".
   - 2 × `div.single-counter`: `span.counter` "450" + "+ Successfully
     completed projects"; "860" + "Highly specialised employees" — numbers
     `#e67118` 50px weight 600 Jost line-height 1.
4. **About split** `section.about-area1.about-area2.fix`: `div.about-caption
about-caption1` (section-tittle h2 "Design the home you love" +
   paragraph + `a.btn_01` "Learn More" — outline pill: 2px `#e67118`
   border, `#e67118` 18px 500 text, padding 14px 32px, radius 40px; hover:
   filled `#e67118` + white text) + `div.about-img.about-img1` (interior
   photo).
5. **Client quote band** `div.brand-area.section-padding`: centered
   `div.section-tittle.text-center.mb-20` — `h2` quote "Franclin managed
   everything from furniture selection, purchase, delivery and assembly,
   and have been a pleasure working with" + attribution "– Shonda Leer,
   Chief of Staff at Franclin Technologies" + `div.brand-active.pt-50.pb-40`
   (Owl carousel) with 5 × `div.single-brand` logo images.
6. **Design profile** `section.our-services.section-padding.position-relative`
   > `div.tailor-details`:
   - `div.section-tittle.mb-70` — h2 "Personalized design solutions" +
     subtext `p` "Designed by Franclin" (→ "Designed by Interiora").
   - `div.ratting` — 5 × star icons (`fas fa-star`; color `#ffcc00` 14px).
   - `p` mission text.
   - `div.price-wrpper.d-flex.flex-wrap` — 2 × `div.single-price` /
     `div.single-price.mr-50`: "Budget" → `$5,000`; "Styles" → "Glam,
     Bohemian".
   - `a.btn_1.visit-btn` "View Gallery" (dark pill, padding 18px 34px).
7. **Services row** `section.our-services.section-padding.position-relative`
   (2nd) — `div.section-tittle` h2 "Interior design is for everyone." + 3 ×
   `div.single-services.mb-30`: `div.services-icon` (icon img, mb 26px
   centered) + `div.services-cap` `h5 > a` title (Home Interior / Party
   Interior / Office Interior) + `p` blurb. Source repeats the same blurb
   in all 3 cards — paraphrase into 3 distinct blurbs.
8. **Testimonials** `section.popular-directorya-area.section-padding.fix`
   (bg `#f1c4a3` peach): `div.section-tittle.text-center.mb-20` h2
   "Customer testimonial" + `div.testimonial-active` (Owl carousel,
   prev/next arrow controls — `button` elements with themify icons; 3+
   slides): `blockquote` quote + 5-star rating + author "Barb Ackue".
   Source titles: "What a great experience!", "I would recommend this
   design service", "This design service" — paraphrase into 3–4 distinct
   quotes with varied author names.
9. **Vendors + video** `section.about-area1.about-area2.fix` (2nd):
   `div.about-caption.about-caption1`: section-tittle h2 "We work with
   more than 200 vendors, big and small." + `p` + `a.btn_10` "Let's
   Discuss" + `div.video-area.position-relative` > `div.video-wrap` >
   `div.video-icon` (circular play button — video modal/link; keep
   accessible with aria-label; non-functional play overlay acceptable).
10. **CTA band** `section.wantToWork-area.w-padding2` (bg `#1a1a1a`,
    padding 80px vertical): `div.wantToWork-caption`: h2 white 30px weight
    600 "Any help needed?" + subtext + `a.btn_10` "Contact Us".
11. **Footer** `div.footer-wrapper` > `div.footer-area.footer-padding`
    (bg `#fff`, padding-top 99px; footer headings h4 `#1a1a1a` 20px 600
    mb 40px; text `#5e5e5e` 16px line-height 1.8):
    - `div.single-footer-caption.mb-50` — brand logo (mb 35px) + about
      excerpt + social icon row (4–6 icons; inline SVG brand icons).
    - `div.single-footer-caption.mb-30` — "Navigation": Home / About /
      Services / Blog / Contact (mb 15px per link).
    - `div.single-footer-caption.mb-50` — "Services": source has generic
      Drone Mapping / Real State / Commercial / Construction → paraphrase
      to Home Design / Office Design / Commercial / Consultation.
    - `div.single-footer-caption.mb-50` — "Subscribe newsletter" +
      `div.footer-form`: `form` > email `input` (placeholder "Email
      Address"; height 56px, padding 10px 20px, border 1px `#e67118`,
      radius 30px, white bg, text `#5e5e5e`) + `div.form-icon` submit
      button (arrow img → lucide ArrowRight; accessible aria-label).
    - `div.footer-bottom-area` > `div.footer-border` >
      `div.footer-copy-right.text-center` — copyright: source credits
      Colorlib → recreation credits Component Dock
      (https://www.componentdock.com/) per AGENTS.md.
12. `#back-top` — fixed bottom-right orange 40px circle scroll-to-top
    button (nice-to-have).

## Implementation checklist (order)

1. Scaffold: copy the simplest existing app, rename package to
   `@free-react-templates/interiora`; register workspace in package-lock.json
   (`npm install` at root before committing); `injectUiSource()` in
   vite.config.ts; Google Fonts `<link>` for Jost (300/400/500/600/700) in
   index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #e67118` (orange),
   `--color-ink: #2a2a2a`, `--color-body: #545454`, `--color-subtext:
#656565`, `--color-dark: #1a1a1a`, `--color-peach: #f1c4a3`,
   `--color-star: #ffcc00`, `--color-muted: #5e5e5e`, `--color-overlay:
rgba(84,84,84,0.2)`, `--color-paper: #fff`, `--font-sans: "Jost",
sans-serif`. Page bg white, body text `--color-body`, Jost everywhere.
3. Components: `Navbar` (3-part header: left menu + Projects dropdown,
   centered brand, right links + Free Quote pill; sticky white on scroll;
   mobile hamburger panel), `HeroSlider` (3 slides, photo bg + overlay,
   white 60px h1 with underlined span, dark pill CTA, dot nav),
   `StatsBand` (heading + text + btn_10 + 2 orange counters),
   `AboutSplit` (image + heading + btn_01 outline pill), `ClientQuote`
   (centered quote + attribution + 5 logo placeholders), `DesignProfile`
   (heading + stars + mission + Budget/Styles facts + View Gallery dark
   pill), `Services` (3 icon cards), `Testimonials` (client-side slider on
   peach bg, prev/next controls), `VendorsVideo` (heading + btn_10 + play
   button), `CtaBand` (dark bg, white heading + btn_10), `Footer` (4
   columns + newsletter form + Component Dock credit).
4. Buttons: three shapes — `btn10` orange pill (bg `#e67118`, white 18px,
   padding 17px 35px, radius 40px), `btn1` dark pill (bg `#2a2a2a`,
   border 1px `#2a2a2a`, white 18px 500, radius 41px, hover transparent +
   ink text), `btn01` orange outline pill (2px border, radius 40px, hover
   filled). Use `cn()` + typed variant maps.
5. Hero slider + testimonial slider: state-based index, no Owl Carousel
   dependency; dots (hero) and prev/next arrows (testimonials) wrap or
   clamp.
6. Navbar hover underline: `group`/`after:` utilities or a border span —
   3px `#e67118` sweep 0→100%.
7. Mobile menu: state-based open/close, Escape + toggle + link-click close,
   focus the panel on open.
8. Counters: static orange 50px numbers (source uses jQuery counter-up —
   no animation required; a simple count-up is optional, keep testable).
9. Footer form: controlled email input + submit; block submit until
   valid (or just prevent default + success state — match simplest
   existing app's form pattern); per-field error per conventions.
10. Tests per section (scenario-style `it` blocks mirroring the spec
    Gherkin), 100% coverage; `npm run verify:app -- interiora`.
11. PR: `feat: implement Interiora (ColorLib Franclin)`, description must
    list source template, preview URL, tokens, and renames/placeholder
    decisions.

## Fidelity notes

- Single dominant brand color: orange `#e67118` (buttons, counters, nav
  hover + underline, header CTA, footer-form border, back-top). Ink
  `#2a2a2a` for headings/nav + the dark pill buttons. Do NOT soften the
  orange; it is the template's identity.
- Buttons are PILLS (radius 40–41px) despite the base `.btn` rule having
  `border-radius:0` — the used variants `.btn_10`/`.btn_1`/`.btn_01`
  override it. Match the three pill variants above.
- Hero headline: keep the underline on "almost put together" (a `<span>`
  with `text-decoration: underline` — a real visual feature).
- Hero is a SLIDER (3 slides, same headline in source, dot nav) — implement
  as a state-driven slider; dots must switch slides.
- Section headings: 34px weight 500 `#2a2a2a` Jost, mb 12px; the rotated
  orange eyebrow `span` (letter-spacing 0.3em, -90deg, absolute) is a
  distinctive detail — implement if straightforward, else note the
  omission in the PR.
- Testimonial band bg `#f1c4a3` (peach) and CTA band bg `#1a1a1a`
  (near-black) are the two section-background features — mandatory.
- Stats numbers are orange 50px weight 600; suffix "+" is a separate text
  node for "450" ("+ Successfully completed projects") — split the value
  and suffix so tests can query the number directly.
- Source uses FontAwesome/themify icons + SVG imgs → lucide-react
  equivalents (Star, ArrowRight, Play, Menu, X, ChevronLeft,
  ChevronRight, Home, PartyPopper, Briefcase, Phone, Mail, MapPin) and
  inline SVG brand icons (Instagram, Facebook, Twitter/X, LinkedIn,
  Pinterest) in the footer.
- All images: `https://picsum.photos/seed/interiora-<n>/<w>/<h>` — hero
  slides interiora-1/2/3 (1600×850), about split interiora-4 (560×480),
  vendors video thumb interiora-5 (560×420). (picsum is photo-based —
  interior shots work fine for decorative use.)
- Footer "Services" list: source is generic (Drone Mapping / Real State /
  Commercial / Construction — reused from another template) → paraphrase
  to interior-appropriate: Home Design / Office Design / Commercial /
  Consultation.
- Attribution "Chief of Staff at Franclin Technologies" → rename company
  (e.g. "… at Interiora Studios") to avoid the source name in app code.
- Footer copyright credits Component Dock; NO ColorLib references anywhere
  in app code (provenance lives only in spec/TEMPLATES.md/PR).
