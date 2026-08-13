# Rankline (ColorLib Echo) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-rankline`. Source: ColorLib "Echo" — SEO / SEM agency
> landing page (https://colorlib.com/wp/template/echo/).
> Preview: https://preview.colorlib.com/theme/echo/ (HTTP 200;
> 29,941-byte HTML, `css/style.css` ~57 KB parsed; screenshot
> `echo-free-template.jpg` 1200×946 viewed in the browser).

## Design notes (replication findings)

- **Original:** ColorLib "Echo" — SEO/SEM agency landing (Bootstrap 5 +
  tiny-slider + aos; icomoon + flaticon icons; Google Fonts Montserrat
  (headings) + Open Sans (body)).
- **Screenshot vs live DOM:** they MATCH (no drift) — white navbar with
  wordmark + navy pill "Download now" CTA; split hero (amber eyebrow +
  navy h1 + gray paragraph + 2 pill buttons left, flat isometric team
  illustration right); centered "Our Features" 3-card grid. Testimonial /
  footer below the fold — anatomy from DOM + CSS.
- **Visual design:** brand navy `#081158` over white, amber `#FBB244`
  accent (eyebrow chips, icon circles, CTA text); Montserrat black
  headings over Open Sans gray body; ALL pills (30px radius); light-gray
  `#f8f9fa` testimonial + footer bands. Aesthetic: modern minimalist
  corporate SaaS/agency.
- **Signature motifs to preserve:**
  - HEADER: absolute over hero (top 0, z-index 9, padding 20px 0);
    Montserrat 24px wordmark; inline links Home/About/Services/FAQ/
    Contact Us; pill CTA "Download now" (navy bg `#081158` + 2px navy
    border, amber `#FBB244` text, radius 30px, padding 6px 20px);
    slide-in mobile drawer.
  - HERO: padding 12rem top / 10rem bottom, min-height 600px; decorative
    blob SVG right -200px / top -200px (z-index -1); left col: `.subheading`
    amber chip (10px uppercase, padding 5px 20px, bg
    `rgba(251,178,68,0.2)`, radius 30px) "Welcome to our site" + h1
    Montserrat "Expert SEO, SEM Services in London" + gray p + "How we
    work" (`.btn.btn-primary`: bg `#081158`, white, padding 12px 30px,
    radius 30px, hover → transparent/navy) + "Contact us"
    (`.btn.btn-outline-primary`: navy text/border on transparent);
    right: flat isometric illustration (hero_1.png).
  - FEATURES (white, `.section` 7rem/7rem): centered eyebrow "Features"
    - h2 "Our Features" + p; 3 `.feature.text-center` cards: 50px icon
    - amber 40px `rgba(251,178,68,0.5)` circle behind top-left
      (`:before`, z-index -1) + h3 title + p — Marketing Analysis /
      Digital Marketing / SEO and Backlinks (3 DISTINCT blurbs — source
      repeats Lorem).
  - ABOUT (white): left col-lg-7 illustration (about_1.png); right
    col-lg-4: eyebrow "About us" + h2 "Why our agency?" + p + 3
    checklist lines + "About us" pill link.
  - SERVICES (white): centered eyebrow "Services" + h2 "Our Services";
    2-col grid of `.service.d-flex` rows — icon column `flex: 0 0
80px`, 50px flaticon glyph + amber circle; text = h3 + p. SIX
    services: Design Marketing (shield), Internet Marketing (megaphone),
    Social Marketing (contract), SEO Marketing (startup/rocket),
    BackLinks Marketing (link), 6th = source DUPLICATES "Design
    Marketing" (trophy) → recreate as distinct "Brand Marketing" (or
    similar) with trophy icon; all six paragraphs distinct.
  - TESTIMONIALS (bg-light `#f8f9fa`): centered heading; slider of
    `.testimonial-v2` white cards: padding 40px, radius 7px, 1px
    `rgba(0,0,0,0.1)` border, hover border navy; blockquote 18px 300
    `rgba(0,0,0,0.5)`; author = 40px round avatar + name; 3 DISTINCT
    people (source duplicates Carl Anderson / Drew Wood / Michelle
    Alisson ×3 each); 7px round slider dots.
  - FOOTER (bg `#f8f9fa`, padding 7rem 0 → 30px top override): col1
    brand blurb ("About Cololib" → "About Rankline") + 30px navy social
    circles (radius 50%, white icon, shadow `0 5px 10px -2px
rgba(0,0,0,0.2)`); col2 "Pages" (Blog/About/Contact); col3
    "Resources" (Blog/About/Contact); col4 "Contact" (email, phone,
    address); bottom copyright → Component Dock credit.
- **Tokens (from css/style.css):** navy `#081158` (brand, 35 uses),
  dark navy `#060e46`/`#070e4b`, amber `#FBB244` (uppercase in CSS) +
  `rgba(251,178,68,0.5)` circles + `rgba(251,178,68,0.2)` chip bg,
  headings Montserrat `#000`, body Open Sans `#212529`/`#6c757d`,
  quote `rgba(0,0,0,0.5)`, footer text `#888`/links `#8488ac`,
  surfaces white/`#f8f9fa`/`#e9ecef`/`#efefef`; radii ALL pill —
  buttons 30px (padding 12px 30px), chips 30px, CTA 30px, avatars +
  social 50%, testimonial cards 7px, dots 7px; shadow social
  `0 5px 10px -2px rgba(0,0,0,0.2)`, focus ring
  `0 0 0 0.25rem rgba(8,17,88,0.25)`.

## Tasks (implementation order)

1. Scaffold `apps/rankline` from the simplest existing app; rename
   package to `@free-react-templates/rankline`; `public/CNAME` =
   `rankline.free.componentdock.com`; homepage
   `https://rankline.free.componentdock.com`; `npm install` at root so
   the lockfile registers the workspace (verify with
   `grep -c "free-react-templates/rankline" package-lock.json`).
2. `src/index.css` `@theme` tokens (see spec): brand `#081158`, deep
   `#060e46`, accent `#FBB244`, ink `#000`, body `#212529`, muted
   `#6c757d`, soft `#f8f9fa`, faint `#e9ecef`, footer `#888`;
   Montserrat + Open Sans `<link>` in `index.html`; register
   `injectUiSource()` in `vite.config.ts` (copy from any app).
3. Header component: absolute over hero; Montserrat wordmark; 5 nav
   links (anchor scroll); navy pill "Download now" with amber text;
   accessible mobile drawer (solid bg, tappable — user tests on phone).
4. Hero: blob decoration top-right; eyebrow chip + h1 + p; primary pill
   "How we work" + outline pill "Contact us"; right illustration area
   (picsum seed `rankline-hero` or decorative SVG composition).
5. Features (3 distinct cards) → About (illustration + checklist +
   pill link) → Services (6 rows, 2-col grid; 6th = distinct "Brand
   Marketing" — NOT the source's duplicated "Design Marketing").
6. Testimonials slider (state-based, dot nav; 3 distinct customers with
   generic roles — never "Designer at Colorlib").
7. Footer (4 widgets + social circles + Component Dock credit; inline
   SVG brand icons — lucide-react has no brand icons).
8. Picsum seeds: verify each seed renders a plausible subject before
   pinning (hero + about illustrations; avatars ×3); avoid known-bad
   ids (91/177/338/65/1005/342/838).
9. Tests first (TDD) mirroring the spec scenarios; 100% coverage;
   `bash scripts/verify-app.sh rankline` green; PR + immediate squash
   merge; then bookkeeping.

## Pitfalls / notes

- The source demo repeats content everywhere — recreate with DISTINCT
  values: 3 feature paragraphs (same Lorem), SIX service rows (the 6th
  literally repeats the 1st title "Design Marketing" with a trophy
  icon — do NOT ship the duplicate), 3 testimonial authors (each
  duplicated ×3 in the slider HTML), footer blurb. Never ship the
  repeated filler.
- THIS design is ALL PILLS (30px buttons/chips/CTA, 50% circles). Do
  NOT sharpen the corners — the pill radius is the signature (most
  other ColorLib templates are sharp-cornered; this one is not).
- Navy `#081158` is the primary (buttons, links, social circles);
  amber `#FBB244` is the ACCENT (chips, CTA text, icon circles) — the
  nav CTA is navy bg + AMBER text, not white.
- Hero buttons: primary "How we work" (solid navy) + outline "Contact
  us" — `.btn-primary:hover` flips to transparent bg + navy text (the
  source keeps this hover).
- The `.subheading` eyebrow chips are 10px uppercase amber on
  `rgba(251,178,68,0.2)` with 30px radius — used above EVERY section
  heading AND the hero ("Welcome to our site").
- lucide-react has no brand icons (Facebook/Twitter/LinkedIn/Instagram)
  — inline SVGs; probe EVERY lucide export with the typeof check
  before importing (renamed exports throw "Element type is invalid" at
  runtime).
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-rankline`.
- No `colorlib` string anywhere in `apps/rankline/*` — provenance lives
  only here, TEMPLATES.md, and the PR. Testimonial roles must not say
  "Designer at Colorlib".
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); compute from a spaced display string at runtime
  or render as plain text.
- Picsum seeds need subject screening — hero/about should render
  abstract or team-work-adjacent images; avoid known-bad portrait ids
  (91/177/338/65/1005/342/838); verified-good person ids: 1027, 64,
  823, 996. Pin seeds in spec + tests + docs together.
- Mobile header: past templates shipped transparent mobile menus — make
  sure the mobile drawer is solid and tappable (user tests on phone).
- jsdom 30 has no localStorage — copy the MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into the new app if anything touches it.
- TEMPLATES.md lists "Echo" THREE times (line ~576 plus duplicates
  ~988 and ~2780) — bookkeeping must mark ALL THREE rows `[x]` with the
  same live URL.
