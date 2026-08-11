# Lendly (ColorLib Loans2go) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lendly`.

## Source mapping

- **ColorLib item:** "Loans2go" (TEMPLATES.md — appears 3×: lines 440, 1079,
  1760; all rows point to the same source, one prep covers all; verified with
  `grep -c 'wp/template/loans2go/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/loans2go/
- **Preview URL:** https://preview.colorlib.com/theme/loans2go/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~60 KB HTML, `<title>LOANS2GO | Loans HTML
Template</title>`). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/loans2go/css/style.css
  (~22 KB) — also imports bootstrap.min, font-awesome, owl.carousel,
  flaticon, slicknav. Site is jQuery + Bootstrap 4 + owl-carousel + slicknav
  — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`loans2go-free-template.jpg`, 1200×946, served as AVIF)

Matches the live template: dark grey/black header bar with the white
uppercase "LOANS2GO" logo (the "2" stylized as a slash — recreate as a clean
text brand "LENDLY"), orange "Call us now!" button + orange phone block;
hero over blurred coins-and-clock photo with dark gradient: left white 60px
headline "Looking for a same day loan?", small white paragraph, dark grey
"FIND OUT MORE" pill, three carousel dots (white/orange/white); right dark
form box with 3 white inputs + orange "APPLY FOR A LOAN NOW!" pill; below,
the white "Why Choose us?" centered heading. The live preview DOM + parsed
stylesheet are the authoritative reference; the screenshot confirms the same
design.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Header** `header.header-section` (position absolute, top 0, w 100%,
   padding-left 53px, bg `rgba(0,0,0,0.7)`, z-index 999):
   - `a.site-logo` float left (padding 33px 0) — logo.png → text brand
     "LENDLY" (bold uppercase white).
   - `nav.header-nav` text-align right > `ul.main-menu` (padding-right 50px):
     Home (active), About Us, Pages ▸ dropdown, News, Contact — `a` 16px
     #fff 600, padding 33px 5px, margin-right 55px; hover/active `#f43f00`.
     Pages `ul.sub-menu` (absolute 220px, bg #fff, padding 20px 0, shadow
     `2px 7px 20px rgba(0,0,0,0.15)`; hover-reveal): About Us / Loans /
     elements — 16px #000, hover `#f43f00`.
   - `div.header-right` inline-flex: `a.hr-btn` "Call us now!" (bg
     `#313038`, padding 36px 30px 36px 60px, 16px 700 #fff) + 32px orange
     phone icon circle (absolute left 12px); `div.hr-btn.hr-btn-2` "+45 332
     65767 42" (bg `#f43f00`, padding 36px 20px, min-width 236px).
   - Mobile: slicknav → client-side hamburger.
2. **Hero** `section.hero-section` (padding 191px 0 108px) > container
   (z-index 99) > row:
   - `col-lg-6` > `div.hs-text` (padding-top 95px): h2 60px #fff lh 1.1
     "Looking for a same day loan?" (responsive 50px/36px) + p #fff mb 30px
     - `a.site-btn.sb-dark` "Find out more" (bg `#22242b`).
   - `col-lg-6` > `form.hero-form` (bg `#22242b`, padding 63px 42px 73px):
     3 × input (Your Name / Your E-mail / Your Phone) — 100% width, height
     49px, padding 5px 26px, mb 30px, italic 14px `#838383`; p 11px italic
     disclaimer (mb 25px); `button.site-btn` "Apply for a loan now!".
   - `div.hero-slider.owl-carousel` — 3 × `hs-item.set-bg` (cover photos);
     dots bottom center 8px, active `#f43f00`. → client-side slider.
3. **Why Choose us** `section.why-section.spad` (padding 102px 0):
   - centered h2 36px "Why Choose us?" (mb-5 pb-4).
   - 3 × `col-md-4` > `div.icon-box-item` (mb 30px): `div.ib-icon` 76px
     circle (3px solid `#f43f00` border, icon 39px `#f43f00`, float left,
     mr 20px; hover: bg `#f43f00` + white icon) — flaticon 24-hours /
     customer-service / info → lucide Clock / Headset / Info; `div.ib-text`
     (padding-top 3px): h5 18px mb 15px "Money in 1 Hour!" / "Helpfull
     Staff" / "Credit History Considered" + p 14px `#74757b`.
   - centered `a.site-btn.sb-big` "Apply Now!" (min-width 257px).
4. **CTA band** `section.cta-section.set-bg` (bg cta-bg.jpg cover top
   center; text-center, padding 100px 0 78px): h2 48px "Already have a
   <strong>L2Go</strong> Bank Loan?" (strong 900 `#f43f00` → "LENDLY") +
   h5 `#74757b` mb 35px "If you're thinking about borrowing more, we're
   here to help." + `a.site-btn.sb-dark.sb-big` "Find out More".
5. **Features** `section.feature-section.spad` — 2 × `div.feature-item`
   (mb 70px), alternating image side (`order-lg-2` / `order-lg-1`):
   - Item 1: img feature-1.jpg left + `div.feature-text` (padding-top 50px):
     h2 mb 35px "Get a personal loan from just 8.5% APR" + p mb 38px +
     `a.readmore` "Apply for a loan now" + arrow (16px 900 `#f43f00`,
     arrow → lucide ArrowRight).
   - Item 2 (mirrored): "Get aproved in minutes after you apply online".
6. **Help** `section.help-section.spad` (bg `#22242b`): centered white h2
   "How a personal loan can help" (mb-5 pb-4); 2 × col-md-6 intro p (14px
   lh 2; source keeps `#74757b` — lighten slightly for dark bg if needed);
   3 × col-md-4 `ul.help-list` (padding-top 55px): 4 × li (padding 6px 0
   6px 60px, mb 22px, 18px 600 #fff; `::after` ok-icon.png checkmark →
   lucide Check) — 12 items total (Buying a car / Take control of your
   finances / Pay school tuitions / Adding value to your home · Increese
   your budget / Have a day to remember / Get a new card / Go on a holliday
   · Get an Insurance / Take a trip / Help your kids / Renovate your home).
7. **Info** `section.info-section.spad` (padding-bottom 90px): col-lg-5 img
   (info-img.jpg) + col-lg-7 `div.info-text`: h2 36px "We're here to help" +
   h5 18px "Monday to Thursday (8am to 8pm), and Friday (8am to 5pm)." + p
   14px `#74757b` + ul: li "+34 56873 2246", li "contact@loans2go.com".
8. **Score** `section.score-section.text-white.set-bg` (bg score-bg.jpg
   cover; container padding 103px 15px 95px, relative) > col-xl-6 col-lg-8:
   h2 60px #fff mb 13px "Calculate my Score" + h4 mb 45px lh 1.4 "Check your
   credit reports as often as you want, it won't affect your scores." +
   `a.site-btn.sb-big` "show my score" (orange, lowercase label) +
   decorative `img.hand-img` (absolute right 170px bottom 0 — optional).
9. **Footer** `footer.footer-section` (bg `#22242b`, padding 100px 0 0):
   `a.footer-logo` (mb 50px) → text brand; 4 × col-lg-3 col-sm-6
   `div.footer-widget` (mb 50px): h2 18px 700 #fff mb 30px + ul li a 14px
   #fff mb 15px — What we do (6 links), About us (6 links), Legal (5
   links), Site Info (5 links); italic p mb 40px; `div.copyright` 14px
   `#74757b` pb 20px (heart `#f43f00`) → "© 2026 Lendly — Loans & Finance ·
   All rights reserved".

## Design tokens (see spec for full table)

- brand-orange `#f43f00` (primary pills, phone block, nav hover/active,
  icon circles, cta strong, readmore, slider dot, copyright heart), ink
  `#22242b` (dark pills, hero-form bg, help + footer bg), slate `#313038`
  ("Call us now!" pill bg), muted `#74757b` (p, h5, copyright), input-text
  `#838383` (form inputs italic), header-bg `rgba(0,0,0,0.7)`.
- Font: Open Sans only (nav 16/600, hero h2 60, h2 base 36, widget h2
  18/700, readmore 16/900, help-list 18/600, p 14/lh 2, buttons 14/600
  uppercase).
- Radii: 50px pills on every button; 50% circles (ib-icon 76px w/ 3px
  border, phone icon 32px); inputs square.
- Sections: spad 102px padding; hero 191/108px; cta 100/78px; score
  103/95px; footer 100px top; container max-width 1176px.

## Implementation tasks (todo outline)

1. Scaffold: copy simplest existing app → `apps/lendly`, package
   `@free-react-templates/lendly`; register workspace (npm install at root
   so package-lock.json registers it).
2. index.html: title "Lendly — Loans & Finance", Open Sans Google Fonts
   `<link>`.
3. `@theme`: brand-orange `#f43f00`, ink `#22242b`, slate `#313038`, muted
   `#74757b`, input-text `#838383`, fonts.
4. Data module `src/data.ts`: nav links, dropdown items, hero slides, why
   cards, features, help lists, footer widgets, contact strings (phone
   `"+45 332 65767 42"` as spaced string — NO literal tel: URI).
5. Components (tests first, per section):
   - `Header.tsx` — logo + nav + Pages dropdown (hover state) + call block
     - mobile hamburger.
   - `Hero.tsx` — slider (state) + hs-text + lead form (submit → success
     state; assert input unmount via `queryByLabelText` absence).
   - `WhyUs.tsx` — 3 icon cards + hover fill + Apply Now pill.
   - `CtaBand.tsx` — photo bg + orange brand word + dark pill.
   - `Features.tsx` — 2 alternating rows + readmore arrow links.
   - `Help.tsx` — dark bg + 12 checkmarked items.
   - `Info.tsx` — photo + hours + phone/email list.
   - `Score.tsx` — photo band + heading + show-my-score pill.
   - `Footer.tsx` — logo + 4 widgets + small print + copyright.
6. `App.tsx` composition in DOM order; `src/main.tsx` unchanged pattern.
7. Tests: 100% coverage; `getAllByRole` for duplicate nav links (desktop +
   mobile); hero slider + dropdown state tested with user-event.
8. Verify: `npm run verify:app -- @free-react-templates/lendly` (or
   `scripts/verify-app.sh lendly`), then push branch, open PR, squash merge
   immediately, confirm deploy workflow + surge URL 200.

## Fidelity notes / gotchas

- **tel: redaction trap:** never write literal `tel:` URIs in source —
  store `"+45 332 65767 42"` spaced in data.ts and compute
  `href={'tel:' + phone.replace(/[^\d+]/g, '')}`; assert href in a test;
  diff merged blob vs worktree after merge.
- owl-carousel (hero slider) + slicknav (mobile menu) → pure client-side
  state; no jQuery dependencies.
- `set-bg` backgrounds (`img/cta-bg.jpg`, `img/score-bg.jpg`, hero slides)
  → picsum seeds or CSS gradients; never copy ColorLib images.
- Source typos to fix in recreation: "Helpfull Staff", "aproved",
  "Increese your budget", "holliday", "elementS" (lowercase in dropdown),
  "It won't affect your scores." (keep meaning).
- Button labels: "show my score" is lowercase in the source — keep the
  lowercase look (text-transform: none on that one) or uppercase per
  site-btn default; match source.
- Hero form disclaimer is 11px italic — keep it small and muted.
- The hero h2 scales 60px → 50px → 36px across breakpoints; use a clamp()
  or Tailwind breakpoint classes.
- lucide-react has NO brand icons — the heart in the copyright is a simple
  lucide Heart (exists) or inline SVG.
- Placeholder images via `https://picsum.photos/seed/lendly-<n>/<w>/<h>`
  (deterministic per template).
