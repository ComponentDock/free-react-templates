# Homely (ColorLib Easylo) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-homely`. Source: ColorLib "Easylo" — online-loan /
> home-loan finance landing page (https://colorlib.com/wp/template/easylo/).
> Preview: https://preview.colorlib.com/theme/easylo/ (HTTP 200;
> ~36 KB HTML, `assets/css/style.css` ~105 KB parsed).

## Design notes (replication findings)

- **Original:** ColorLib "Easylo" — instant-cash-loan finance landing
  page (Bootstrap 5 + jQuery slicknav/owl/slick/nice-select; fontawesome
  - themify icons; Google Fonts Chivo (body) + Inter (headings) imported
    at the top of `css/style.css`). Screenshot
    `easylo-colorlib-template.jpg` (1200×946) viewed in browser.
- **Screenshot vs live DOM:** they MATCH (no drift) — split hero
  (marketing copy left, white loan-calculator card right) + white
  "Solutions for every business need." services row with 3 cards
  (Home Loan / Car Loan / Business Loan). Testimonial / blog / footer
  are below the fold in the screenshot — their anatomy comes from the
  DOM + CSS.
- **Visual design:** fresh green `#10c98f` accent over white and mint
  (`#e4f1ed` / `#f4fcfa`) surfaces; dark-green `#0f4332` testimonial
  band; split hero with floating white calculator card (pill selects,
  green slider amount, full-width green APPLY NOW); Chivo body over
  Inter headings; sharp corners except pill 25px selects; 110×3px green
  underline under every section heading (white variant under hero h1).
- **Signature motifs to preserve:**
  - HEADER: transparent over hero → sticky on scroll; green wordmark
    logo; inline links Home/About/Services/Blog/Contact; green
    "Apply For Loan" button (header-right-btn); mobile slide-in drawer
    (slicknav in source).
  - HERO: photo bg (`h1_hero1.jpg`-style house scene) + green overlay
    `rgba(16,201,143,0.4)`; left: h1 Inter 62px 700 white lh 1.1
    "The simple online home loan." + white 110×3 underline + p 24px 500
    white + outlined "Our Services" button (`.boxed-btn`: white bg,
    `#10c98f` text/border, padding 18px 44px, uppercase, ls 1px, hover
    fills green). Right: `.form-wrapper` white card (padding 45px 35px
    35px, shadow `0 16px 30px rgba(15,67,50,0.1)`, `margin-bottom:
-100px` overlap) — h2 "How much you want?" + green underline + p
    "We provide online instant cash loans." + 2 pill selects
    (`.nice-select`: height 50px, 1px `#eaeaea` border, radius 25px:
    "Select Amount" / "Select Month") + amount range slider with green
    value + full-width "Apply Now" (`.submit-btn2`: bg `#10c98f`,
    height 50px, uppercase 600, radius 0).
  - SERVICES 1 (white): centered tittle "Solutions for every business
    need." (h2 40px 700 `#0f4332`, green underline, p `#6d6d6d`);
    3 cards: outline icon + `span` 14px `#0c8760` label (Home Loan /
    Car Loan / Business Loan) + h5 24px 700 title + p + "Learn More".
  - ABOUT 1 (mint `#e4f1ed`): photo + floating green `.info-man` badge
    (absolute bottom -50px right -100px → 0 at lg; padding 63px 47px)
    "99%" + "Customer Satisfaction"; right: tittle2 (NO underline) "We
    guide projects and organizations in making the right decisions." +
    3 icon rows (icon + title + p, pera padding-left 26px).
  - SERVICES 2 (`#f4fcfa`): centered tittle "Why choose us?" + 4
    centered cards: Quick apply / Online & Secure / Just time / Low
    interest.
  - ABOUT 2 (mint): left tittle2 "Get loan in 3 easy steps" + 3 icon
    rows; right different photo.
  - TESTIMONIALS (bg `#0f4332`): dot carousel; slide padding
    100px 0 0 50px; big decorative quote mark (source: image behind,
    top -33px left -34px → styled “ glyph); quote span 24px 600
    `#d5ece5`; founder row = avatar + name + role.
  - BLOG (white): centered tittle "Latest News" + 3 cards: photo
    (mb-25) + meta span `#a4aca9` ("20 March 2021" format) + h5 24px
    700 title + p + underlined link (`a.red-btn` `#0f4332`, hover
    letter-spacing .5px).
  - FOOTER (bg `#f4fcfa`; padding 97px/37px): col1 brand blurb +
    social icons; col2 "Quick Links" (Work/Services/Products/Tips &
    Tricks); col3 "Solution" (Air freight/Ocean freight/Large
    projects); col4 "Newsletter" — email input (height 65px, radius 0,
    `border: 2px solid #10c98f`, no bg) + subscribe; bottom bar
    copyright → Component Dock credit.

## Tasks (implementation order)

1. Scaffold `apps/homely` from the simplest existing app; rename package
   to `@free-react-templates/homely`; `public/CNAME` =
   `homely.free.componentdock.com`; homepage
   `https://homely.free.componentdock.com`; `npm install` at root so the
   lockfile registers the workspace (verify with
   `grep -c "free-react-templates/homely" package-lock.json`).
2. `src/index.css` `@theme` tokens (see spec): brand `#10c98f`, deep
   `#0f4332`, label `#0c8760`, body `#4c5753`, muted `#6d6d6d`, meta
   `#a4aca9`, quote `#d5ece5`, mint `#e4f1ed`, soft `#f4fcfa`, faint
   `#f1fbff`; Chivo + Inter `<link>` in `index.html`; register
   `injectUiSource()` in `vite.config.ts` (copy from any app).
3. Header component: transparent-over-hero + sticky-on-scroll; green
   wordmark; 5 nav links; green "Apply For Loan" CTA; accessible mobile
   drawer (solid bg, tappable — user tests on phone).
4. Hero + LoanCalculator (the form is the hard part): 2 pill selects,
   controlled range slider with green value readout, zod validation,
   success state; card overlaps next section (`margin-bottom: -100px`
   equivalent: negative margin / translate-y).
5. Services 1 (3 cards) → About 1 (badge + 3 rows) → Services 2
   (4 cards) → About 2 (3 steps) — reuse a single ServiceCard /
   AboutRow pattern via `packages/ui` where sensible.
6. Testimonials carousel (state-based, dot nav; 3-4 distinct customers).
7. Blog (3 distinct posts) + Footer (4 widgets + Component Dock credit
   - inline SVG brand icons).
8. Picsum seeds: verify each seed renders the right subject before
   pinning (hero = house/home scene; about ×2; avatars ×4; blog ×3).
9. Tests first (TDD) mirroring the spec scenarios; 100% coverage;
   `bash scripts/verify-app.sh homely` green; PR + immediate squash
   merge; then bookkeeping.

## Pitfalls / notes

- The source repeats content everywhere — recreate with DISTINCT values:
  3 service paragraphs (same stock-options Lorem ×3), About-1 rows (same
  questions as the service cards), About-2 rows (same three questions
  AGAIN → turn into 3 loan steps), 4 "Why choose us" paragraphs (same
  Lorem ×4), testimonial attribution (only "Designer at Colorlib" ×2+),
  3 blog posts (same Lorem). Never ship the repeated filler.
- Brand green is `#10c98f` (lowercase hex in CSS); dark green `#0f4332`
  doubles as heading color AND testimonial band background; the small
  service label color is `#0c8760` — all three greens are distinct.
- Radii: ONLY the form selects are pill (25px). Buttons, form card,
  footer input are sharp (0px). Don't round the buttons — it's a
  signature of this design.
- The hero overlay is GREEN `rgba(16,201,143,0.4)` over a photo — not a
  black overlay.
- The form card overlaps the next section (`margin-bottom: -100px` in
  source) — replicate the overlap (negative margin or translate-y) or
  the layout looks wrong.
- `.info-man` badge: absolute, bottom -50px, right -100px (right: 0 at
  lg breakpoint), green bg, generous padding (63px 47px), "99%" big +
  caption small. It hangs OFF the photo edge.
- Header CTA text is "Apply For Loan" (header) — the hero button is
  "Our Services" (outlined, NOT filled) — don't swap them.
- lucide-react has no brand icons (Facebook/Twitter/Pinterest/
  Instagram) — inline SVGs; probe EVERY lucide export with the typeof
  check before importing (renamed exports throw "Element type is
  invalid" at runtime).
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-homely`.
- No `colorlib` string anywhere in `apps/homely/*` — provenance lives
  only here, TEMPLATES.md, and the PR. Testimonial roles must not say
  "Designer at Colorlib".
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); compute from a spaced display string at runtime
  or render as plain text.
- Picsum seeds need subject screening — hero should provably render a
  house/home scene; avoid known-bad portrait ids (91/177/338/65/1005/
  342/838); verified-good person ids: 1027, 64, 823, 996. Pin seeds in
  spec + tests + docs together.
- Mobile header: past templates shipped transparent mobile menus — make
  sure the mobile drawer is solid and tappable (user tests on phone).
- jsdom 30 has no localStorage — copy the MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into the new app if anything touches it.
- TEMPLATES.md lists "Easylo" TWICE (line ~575 and duplicate ~1750) —
  bookkeeping must mark BOTH rows `[x]` with the same live URL.
