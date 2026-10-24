# Amberline (ColorLib Buildream) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-amberline`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-amberline/spec.md` and
> `docs/templates/amberline/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Amberline** (one word, the amber accent "line"; `git grep -il amberline origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `grep -c 'template/amberline/' TEMPLATES.md` = 0) |
| App / package | `apps/amberline` · `@free-react-templates/amberline` |
| Deploy target | `amberline.free.componentdock.com` |
| Source | ColorLib **Buildream** — https://colorlib.com/wp/template/buildream/ |
| Preview | https://preview.colorlib.com/theme/buildream/ (HTTP 200, **65,152 B** HTML + **206,159 B** `css/style.min.css?v=3.0.3`, fetched 2026-10-24; Bootstrap 5.3.8 + Swiper 14.3.0 + PhotoSwipe 5.4.4 + AOS + Font Awesome 7, no jQuery) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/buildream-free-template.jpg (JPEG 1200×946, 162,476 B — top fold) |
| TEMPLATES.md rows | lines **553**, **1339** (`grep -c 'wp/template/buildream/'` = 2) — both `[x]` and wrongly credited to `mortar` |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: `mortar`'s spec names **Grunt** (`row-excl / spec-excl` = 1 / 4) |
| Category | Construction / Home Services |

## Structure (1:1, DOM order from the live preview)

1. `top-wrap` — 48px `#363b42` strip, 14px: bold amber "Call us:" + number,
   amber "Email us:" + address, three 40×40 social squares
   (`rgba(255,255,255,.05)`, `#a66000` glyphs). Still renders on mobile.
2. `ftco-navbar-light` — 91px `#3d424a`; 147×91 amber wordmark block
   (`::after` = 100px amber parallelogram, `right:-20px`, `skew(20deg)`);
   seven 14px/500 UPPERCASE links, `padding: 32px 25px`, active = amber with a
   skewed `::before`; burger below 992px (Bootstrap collapse in the source).
3. `hero-wrap` — 100vh (starts at y=139, **below** the header), fixed-attachment
   cover photo, `#3d424a` overlay 0.6, centred `col-lg-9`: UPPERCASE 16px
   eyebrow "Since 1982" with side dashes, `h1` 60px/700 UPPERCASE 3px tracking
   with one amber phrase, amber + charcoal square buttons (53px,
   `padding:16px 24px`, trailing arrow). Not a slider.
4. `ftco-about-section` (pt/pb 128) — left photo with a **−90° rotated charcoal
   strip** (`bottom:107px; right:-107px; padding:30px`) holding a 54px amber
   crane, amber "38", white "Years of experience"; right: eyebrow, `h2`
   54px/500, paragraph, `h3` "We Can Help You", 2×2 white mini-cards
   (308px, `padding:25px`, 60px amber icon, 20px/500 title).
5. `ftco-no-pb bg-light` — eyebrow + `h2` "Companies We Work With" + **six text
   wordmarks** (the source ships no logo images), no bottom padding.
6. `ftco-intro img` — 244px fixed photo with an **amber `::after` sheet**
   (`50%` wide, `left:-50px`, `skew(20deg)`, `.9`): white small line, `h2`
   40px/400 `#3d424a`, amber button 276×68 (`padding:24px 48px`).
7. `ftco-services-section` — centred "What We Do"/"Services", then a left photo
   column and three stacked cards (`padding:30px`, 20px gap): **charcoal
   (`active`) → amber (`active-2`) → white**, each 60px icon + 26px/500 title +
   paragraph + `.btn-custom` chip (13px/700 UPPERCASE, `4px 10px`, radius 2px).
8. `video-cta-section` — 636×400 photo (radius 5px) + 80px amber circular play;
   right eyebrow, `h2` "Building Dreams Into Reality Since 1982", paragraph,
   four amber-check rows, amber square button.
9. `ftco-section-counter img` — photo + `#3d424a` 0.8, `padding:96px 0`; four
   amber cranes + 40px/700 amber numbers (3,000 / 320 / 1,000 / 587) over
   UPPERCASE white captions.
10. team (`ftco-section`) — "Team & Staff"/"Qualified Engineers"; four cards:
    306×420 portrait, white radius 4px + soft shadow, name 20px/500, role
    14px/500 UPPERCASE; hover flips the card amber, name white, three 40px
    charcoal socials fade in bottom-left.
11. `ftco-gallery` — full-bleed `g-0` grid, six 480×340 tiles; hover: `#000` at
    0.3 + amber 50×50 zoom square + caption sliding from `-50px`; lightbox.
12. pricing — "Our Pricing"/"Pricing & Packages"; four cards (`padding:40px 0`,
    radius 0, soft shadow): 14px/700 UPPERCASE name, `$` 24px `#6e6e6e` +
    50px/600 `#a66000` amount, six feature rows (14px, `10px 20px`, 1px
    hairlines, amber check / grey cross + line-through), 60%-width amber button;
    third card featured (2px amber border, `scale(1.02)`, amber "Most Popular"
    pill at `top:-12px`, radius 20px).
13. `testimony-section bg-light` — five slides, three visible (410px), white card
    `padding:35px 30px 30px`, 80px avatar + 30px amber quote badge, name
    20px/600 UPPERCASE, role 13px UPPERCASE `#a66000`; pagination = 30×2px bars.
14. blog (`bg-light ftco-no-pt`) — three cards 416px, radius 4px, shadow; photo
    with a 69×93 `#3d424a` date tile (day 30px), body `padding:30px`, UPPERCASE
    13px meta with amber icons, 24px/400 title.
15. `ftco-appointment img` — fixed photo + **white overlay 0.9**; left quote card
    (`padding:50px 50px 50px 0`): name, email, subject `select` (6), 7-row
    textarea, amber "Send message"; right FAQ: eyebrow, `h2`, paragraph,
    3-item accordion (closed white 18px/600 `16px 20px` radius 0, **open
    amber** with charcoal text).
16. `newsletter-section bg-primary` — `#ffa62b`, `padding:60px 0`; `h3` 28px/700
    `#212529`, 526px form = white input (53px, radius 5px) + charcoal button
    131×53 (radius 5px).
17. `ftco-footer` — `#363b42`, `padding-top:112px`; wordmark + blurb + three
    40×40 socials (radius 2px); recent posts (3 × 80×80 thumb, 16px/500 white
    titles, amber-icon meta); quick links (6, amber chevrons); contact rows
    (amber pin/phone/send); centred 13px bottom line → **Component Dock**.

## Gotchas measured on the live reference

- **Header is not overlaid**: top bar 48px + navbar 91px, so the hero starts at
  y=139 and its `100vh` height makes the document 11,489px. Do not subtract the
  header with negative margins.
- **Three skewed sheets, one angle**: brand `::after`, active nav `::before` and
  the CTA band `::after` are all `skew(20deg)`. Rotate/skew only the background
  layer, never the text.
- **Services order matters**: the source's `.services` cards carry
  `active` (charcoal) and `active-2` (amber) classes, i.e. it is a *content*
  decision, not a hover state. The third card is plain white.
- **Gallery captions are hover-only** in the source (`opacity:0`,
  `margin-bottom:-50px`); the zoom square too. Fine on desktop, unreachable on
  touch — make them visible below `md` and on `:focus-within`.
- **The about strip is rotated −90°** and hangs past the photo's right edge
  (`right:-107px`). Reproduce with `rotate(-90deg)` + `transform-origin`, and on
  ≤767px keep it fully inside the (400px-tall) photo.
- **Counters use a thousands separator** (3,000 / 1,000) but 320 / 587 do not;
  the separator is only applied when the value needs it.
- **0 `<img>` on the page** — every visual is a CSS background. Keep the crops:
  portraits `top center`, heroes `center center` with `fixed` attachment.
- **`#a66000` is the eyebrow/role/`$`-number colour**, not `#ffa62b`; the two
  ambers are easy to conflate and the eyebrow contrast depends on the darker one.
- **Footer and top bar are `#363b42`**, one step darker than the navbar's
  `#3d424a` — three dark tones, not two.
- **Documented deltas to honour:** brand → Amberline (no ColorLib string in
  `apps/`), services card-3 chip gets amber text (translucent white is invisible
  on white), lightbox/video as accessible React dialogs (no vendor JS), AOS
  reveals via `IntersectionObserver`, Poppins from Google Fonts, ColorLib credit
  → Component Dock link.
- **Two rows, one app.** Before building, re-open rows 553 and 1339
  `[x]` → `[ ]`; after merge mark both `[x]` with the surge URL. `mortar` keeps
  its own (Grunt) identity — do not edit it.

## Tasks (implementation outline)

- [ ] Branch `feat/template-amberline`; re-open TEMPLATES.md rows 553 + 1339
      (`[x]` → `[ ]`) in one docs commit.
- [ ] Scaffold `apps/amberline` from the simplest current app: `package.json`
      (`react`/`react-dom` = `latest`), `index.html` with the Poppins `<link>`,
      `vite.config.ts` **with `injectUiSource()`**, `tsconfig.json`,
      `vitest.config.ts`, `src/test/setup.ts`, `public/CNAME`.
- [ ] `src/index.css` → `@theme` tokens (`--color-brand: #ffa62b`,
      `--color-ink: #3d424a`, `--color-deep-amber: #a66000`,
      `--color-footer: #363b42`, `--color-body: #6e6e6e`, `--color-page:
      #f8f8f8`, `--color-band: #f8f9fa`) + square-button and skewed-sheet
      utilities in `packages/ui` classes.
- [ ] Data modules: `nav`, `contact`, `miniServices`, `wordmarks`, `services`,
      `videoChecks`, `stats`, `team`, `projects`, `plans`, `testimonials`,
      `posts`, `faq`, `subjects`, `footerMenu`, `socials` (typed `const`
      arrays, copy paraphrased).
- [ ] Components (each with a colocated `.test.tsx`, written first): `TopBar`,
      `Navbar` (controlled mobile panel), `Hero`, `About` (rotated strip +
      mini cards), `Wordmarks`, `IntroCta`, `Services` (three cards, ordered
      charcoal/amber/white), `VideoCta` (play dialog), `Counters` (reveal +
      no-observer fallback), `Team` (hover/focus-within socials), `Gallery`
      (hover + touch captions, lightbox), `Pricing` (featured card), `Testimonials`
      (3-up track, bar pagination), `Blog`, `Appointment` (accordion + validated
      quote form), `Newsletter` (validated), `Footer`.
- [ ] `App.tsx` composes in the order above; footer links
      https://www.componentdock.com/.
- [ ] Images: `https://picsum.photos/seed/amberline-<n>/<w>/<h>` per the sizing
      table in `design-notes.md`; icons from `lucide-react`; social glyphs as
      inline SVG (lucide has no brand icons).
- [ ] Accessibility: focus rings `2px #ffa62b`, `aria-expanded`/`aria-controls`
      on the mobile menu and accordion, `aria-current` on pagination bars,
      labelled inputs + `aria-invalid`, skip link to `#main-content`, dialogs
      trap focus and close on Escape, reveals respect `prefers-reduced-motion`.
- [ ] Gates: `scripts/verify-app.sh amberline` (typecheck + lint + knip + fallow
      + 100% coverage tests + build); `npm install` at the root so the
      lockfile registers the workspace.
- [ ] PR → squash merge → deploy (`gh workflow run deploy-surge.yml -f
      app="amberline"`) → verify `https://amberline.free.componentdock.com`
      returns 200 with `ssl_verify_result=0`.
- [ ] Flip rows 553 + 1339 to `[x]` with the URL, `npm run readme:status`,
      push.
