# Adviso (ColorLib Consultation) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-adviso`. Note: "Consultation" has TWO rows in TEMPLATES.md
> (duplicate slug) — when implemented, mark BOTH rows `[x]` with the same
> live URL (see memory: duplicate rows of one ColorLib slug).

## Design notes (replication findings)

- **Original:** ColorLib "Consultation" — business consulting company site,
  "Consulting | Template" (source: https://colorlib.com/wp/template/consultation/).
- **Preview analyzed:** https://preview.colorlib.com/theme/consultation/
  (HTTP 200, ~36 KB HTML). Live DOM + `assets/css/style.css` (~68 KB,
  complete/readable) parsed for structure and tokens; the live page was
  rendered in a browser and computed styles were read for the header/hero
  (the CSS file mixes several ColorLib themes, so verify with the live
  render). Screenshot `consultation-colorlib-template.jpg` (1200x946, AVIF)
  reviewed visually: light header, black "CONSULATION." wordmark, grey nav,
  "Let's Talk" mint-underline link; hero photo of a smiling businesswoman,
  white headline with "Online Growth" in mint; transparent outlined hero
  button; mission block with green rule; numbered 01/02/03 feature columns.
- **Live render (authoritative):** transparent header over the hero photo
  (white logo + white uppercase nav, Jost 14px — NOT the light header the
  screenshot shows); "Let's Talk" white link with mint underline; hero h1
  Oswald 100px white with a block span in mint `#00FFAB`; hero button
  transparent, `1px solid #fff` border; mission strip `#F2F2F2` with
  `border-top: 12px solid #55A48A`.
- **Visual design:** modern consulting site. Brand mint `#00FFAB` (hero
  highlight, browse-btn underlines, about heading block, blog hover overlay,
  play button, newsletter button) + secondary green `#55A48A` (mission
  border, mission Learn More, service numbers, counters) + ink `#1E1E1E`
  (buttons, footer). Headings **Oswald** (h1 100px w600; section h2 58px
  w500; counters 38px w700), body/nav **Jost** (body 18px `#656565`, nav
  14px uppercase w500). Square buttons (radius 0): `.btn` ink bg Oswald 18px
  padding 22px 32px with an `#ec583a` hover sweep; `.hero-btn` transparent +
  1px white border, hover mint; `.btn_1` `#2A2A2A`, hover outline. Section
  padding 100px; light rows `#F2F4F8` (solutions) and `#DFEBE6` (case study).
- **Structure (1:1, section order, home page):**
  1. Header `.header-area > .main-header.header-sticky` (transparent over
     hero, shadow on scroll): logo image (white "CONSULTATION." wordmark);
     nav HOME / ABOUT / SERVICES / CASE STUDY / BLOG (dropdown: Blog, Blog
     Details, Element) / CONTACT — white uppercase Jost 14px w500, white
     underline grow on hover; right `.button-header` "Let's Talk" browse-btn
     (white, 2px mint underline, hover mint). Mobile hamburger collapse.
  2. Hero slider `section.slider-area` (3 slides, `slider-bg1/2/3` photos,
     dark left overlay): h1 "Unlock Your Online Growth **Potential**" (span
     block mint), p 20px white, `.hero-btn` "CHECK OUR SERVICES" (transparent,
     1px white border, uppercase 14px, hover mint); vertical dots right.
  3. Mission strip `div.slider-footer > .footer-wrapper` (bg `#F2F2F2`,
     `border-top: 12px solid #55A48A`, width 60%, padding 45px 55px): span
     "Our Mission" + h3 "The Foremost & Premier Source For Everything
     Business." + placeholder paragraph + `a.browse-btn2` "Learn More"
     (`#55A48A` + `#55A48A` underline).
  4. Services `section.our-services2.section-padding` (white): 3
     `.single-services` — number "01"/"02"/"03" (`#55A48A` 16px w500) + h5
     28px w500 `#1E1E1E` title + placeholder paragraph. Titles: "Greet
     first-time visitors with a timely popup", "Annoying popups that show
     the minute you load", "Turn your email list into customers with
     unique".
  5. About `section.about-area.fix`: photo + `.about-caption` h2 Oswald 58px
     w500 "For local heroes with big hearts and growing champions" ON a mint
     `#00FFAB` background block (padding 45px 60px, `left: -300px` pull);
     placeholder paragraph; Learn More browse-btn.
  6. Solutions `section.home-blog.section-bg1` (bg `#F2F4F8`):
     `.section-tittle.section-tittle2` span "Our Solutions" + h2 38px "Our
     consulting solutions for the streaming era" + paragraph; 4
     `.single-blogs` cards (img + h5 + paragraph + Learn More): Strategic
     Planning · Trades & stocks · Audit & Assurance · Behind the mountains.
     Hover reveals a mint `#00FFAB` `.blog-btn` overlay (padding 25px 17px,
     `#1E1E1E` text).
  7. Video split CTA `section.visit-tailor-area.fix`: left `.tailor-offers`
     (50%, 850px, cover photo) with 100px mint circular play button (icon
     `#F04506`, `rgba(0,255,171,0.3)` pulse ring); right `.tailor-details`
     h2 "We boost our clients' bottom line by optimizing" + 2 placeholder
     paragraphs + `a.btn_1` "Learn More" (bg `#2A2A2A`, 18px, padding 25px
     34px, hover outline).
  8. Case study `section.home-blog.section-bg2` (bg `#DFEBE6`): span + h2
     "Case study" + "LEARN MORE" browse-btn; 3 cards: Behind the word
     mountains · Large language ocean · Behind the word mountains, each
     with image, h5, paragraph, "View Case" link.
  9. Stats `section.count-down-area.section-padding.border-bottom`: h2
     "Partner for your business" + paragraph ("We understand the
     complexities of modern markets...") + Learn More; 3 `.single-counter`
     figures **2500+ / 350+ / 20+** (Oswald 38px w700 `#55A48A`, `+` span,
     placeholder label).
  10. Footer `footer.footer-area` (bg `#1E1E1E`): 4 columns — about text
      "The automated process starts as soon as your clothes go into the
      machine." + social icons; "Navigation" (Home, About, Services, Blog,
      Contact); "Services" (Drone Mapping, Real State, Commercial,
      Construction); "Subscribe Newsletter" form (email input bg
      `rgba(255,255,255,0.1)` + full-width "SIGN UP" button bg `#00FFAB`
      text `#1E1E1E` uppercase). Bottom bar: copyright (Component Dock
      credit, NOT ColorLib) + "Go to Top" link.
- **Tokens:** mint `#00FFAB`; secondary `#55A48A`; ink `#1E1E1E`; dark-alt
  `#2A2A2A`; hover sweep `#ec583a`; play icon `#F04506`; surfaces white /
  `#F2F4F8` / `#DFEBE6` / `#F2F2F2` / footer `#1E1E1E`; inputs
  `rgba(255,255,255,0.1)`; body Jost 18px `#656565`; headings Oswald (hero
  100px w600, section 58px w500 / 38px, counters 38px w700); nav Jost 14px
  uppercase w500 white; buttons square, `.btn` 22px 32px Oswald 18px,
  `.hero-btn` transparent 1px white uppercase 14px, `.btn_1` 25px 34px 18px;
  browse-btn 2px underline; section padding 100px; mission strip border-top
  12px `#55A48A`; hero overlay dark left; play ring
  `rgba(0,255,171,0.3)`.

## Task outline (for the implementer)

1. Scaffold `apps/adviso` (copy simplest existing app; package
   `@free-react-templates/adviso`; CNAME `adviso.free.componentdock.com`;
   homepage `https://adviso.free.componentdock.com`; run `npm install` at
   root so the lockfile registers the workspace; keep `injectUiSource()` in
   `vite.config.ts`; copy the MemoryStorage polyfill from
   `apps/cura/src/test/setup.ts` if jsdom 30 lacks localStorage).
2. `index.html`: title "Adviso — Consulting Template"; Google Fonts `<link>`
   for Oswald (400, 500, 600, 700) + Jost (400, 500).
3. `src/index.css` `@theme`: `--color-brand: #00FFAB; --color-brand-dark:
#55A48A; --color-ink: #1E1E1E; --color-surface: #F2F4F8; --color-surface2:
#DFEBE6;` body font Jost, headings Oswald.
4. Components (TDD, 100% coverage):
   - `Navbar.tsx` — transparent bar over hero, wordmark, links, Blog
     dropdown, "Let's Talk" underline link, mobile hamburger
     (`aria-expanded`).
   - `HeroSlider.tsx` — 3 slides, mint-highlighted h1 span, subtext,
     outlined CTA, dots (vertical right), prev/next optional.
   - `MissionStrip.tsx` — `#F2F2F2` strip, 12px `#55A48A` top border,
     headline + Learn More.
   - `Services.tsx` — 3 numbered cards (01/02/03).
   - `About.tsx` — photo + mint-block heading + Learn More.
   - `Solutions.tsx` — heading block + 4 cards with mint hover overlay.
   - `VideoCta.tsx` — split: cover image + mint play button (placeholder
     link) + details + dark Learn More button.
   - `CaseStudy.tsx` — heading + 3 cards with View Case links.
   - `Stats.tsx` — "Partner for your business" + 3 counters.
   - `Footer.tsx` — 4 columns + newsletter form (label, input, SIGN UP
     button) + copyright bar with Component Dock credit + Go to Top.
5. Placeholder images `picsum.photos/seed/adviso-<n>/<w>/<h>`; icons from
   lucide-react; no colorlib references anywhere in `apps/`.
6. Gate: `bash scripts/verify-app.sh adviso` (typecheck + lint + 100%
   coverage tests + build); commit `feat: Adviso — Consulting template
(ColorLib Consultation)` on `feat/template-adviso`; PR to main with
   source slug, preview URL, tokens, and diffs (paraphrased copy, mint
   primary button mapping, placeholder video link, Component Dock credit);
   merge immediately.
7. Bookkeeping: mark BOTH "Consultation" rows in TEMPLATES.md `[x]` with
   `https://adviso.free.componentdock.com` + `npm run readme:status`.
