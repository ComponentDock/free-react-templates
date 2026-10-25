# Brawn (ColorLib Vigor) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-brawn`. This folder + the spec are the claim marker:
> the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-brawn/spec.md` and
> `docs/templates/brawn/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Brawn** (one word, "muscular strength"; `git grep -il brawn origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/brawn/`, `theme/brawn/` and `theme/bootstrap/brawn/` all 404) |
| App / package | `apps/brawn` · `@free-react-templates/brawn` |
| Deploy target | `brawn.free.componentdock.com` |
| Source | ColorLib **Vigor** — https://colorlib.com/wp/template/vigor/ |
| Preview | https://preview.colorlib.com/theme/vigor/ (HTTP 200, **22,653 B** HTML, sha256 `5c09921d…`; `css/style.css` **52,074 B**, sha256 `6a984e82…`; `js/main.js` **4,263 B**, sha256 `5c0398c8…`; Bootstrap 4 grid + jQuery 3.2.1 + Owl Carousel 2 + waypoints + fancybox + ionicons/FontAwesome/flaticon; `<title>` = "Vigor — Website Template by Colorlib"; `theme/bootstrap/vigor/` **404**, `theme/bb/vigor/` **404**, `/downloads/free/vigor.zip` **404** — no alias twin, no archive) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/vigor-free-template.jpg (AVIF **78,567 B**, 1200×946 — browser-chrome shot, **top fold only**: header + hero + the first ~140px of the services band with its four blue diamonds) |
| Category | Health & Fitness / crossfit gym (single-page build of a 6-page theme) |
| TEMPLATES.md rows | lines **1222** (`## Business`) and **1884** (`## Health Fitness`) — both `[x]`, wrongly credited to the `vigor` app |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: the `vigor` app's spec names a different ColorLib design (**Endurance**, also prepped as `stamina`; `row-excl / spec-excl` = 0 / 34) |

## Structure (1:1, DOM order from the live preview, 1440×900, doc ≈4,739px)

1. `header` — **85px white, in flow** (`position: relative`), not overlaying the
   hero. Wordmark **86×46** at (31, 19): 20px/400/UPPERCASE/**4px tracking**,
   `#007bff`. Six nav items, each **69×85** (`padding: 27.2px 8px`, Montserrat
   16.8px/300), idle `#666666`, active `#007bff`; `Services` owns a six-item
   hover dropdown (white, 4px radius, `0 2px 30px rgba(0,0,0,.2)`, items turn
   `#007bff` on hover). Search at the right edge: **234×44**, transparent, 30px
   left padding, 1px `rgba(0,0,0,.3)` underline, magnifier glyph.
2. `div.slider-item.overlay` — **900px (100vh, min 700)**, `hero_2.jpg` cover
   `top center` under a `#000` `:before` at **opacity .4**. Centred column
   **855×346** at y = 361: `h1` "Best Fitness In The City" **80px/96px/700/
   UPPERCASE** white (`margin-left: .5em`, 30px bottom gap), then a **60×60**
   white play disc (abs-centred in a `btn-play-wrap`, grows to 80×80 on hover)
   and the 16.8px white "Watch Video" label. **One slide — not a carousel.**
3. `div.section` — **540px white** (`padding: 7em 0` = 117.6px): four
   `.col-md-6.col-lg-3` service cards (255px copy column at x = 165), each a
   **90×90** square `rotate(45deg)`, `2px solid #007bff`, radius **7px**, with a
   **48px** glyph rotated −45° inheriting `#6c757d`; title 19.2px/900, copy
   16.8/30.24 `#6c757d`. Order: Quality Service · Spacious Gym · Live Healthy ·
   Crossfit.
4. `div.site-section.position-relative` — **504px**, "Enjoy The Fitness".
   `.img-1` **720×504 at x 0** (`hero_1.jpg`, absolute, bleed left); text column
   **445×504 at x 830** with `padding: 64px 0`: `h2` **48px/48px/900** +
   two paragraphs (16.8/30.24).
5. `div.section.bg-primary` — **449px `#007bff`**: three `.col-md-6.col-lg-4`
   columns (icon 50px white, title **20px/900** white, copy 16.8px white, no
   card surface). Order: Health Program · Lose Weight · Cross Fit. All three
   carry `.element-animate` (`opacity:0` until the waypoint fires).
6. `div.site-section.position-relative` — **504px**, "Be Fit & Healthy", mirror
   of #4: `.img-2` **720×504 at x 720** (`hero_2.jpg`, bleed right), text column
   **445px at x 165**.
7. `div.section.bg-light.block-11` — **717px `#f8f9fa`**: centred `h2`
   "Testimonial" **48px/900** at y = 3,099; one visible **700×242** white card
   (`padding: 40px`, **no shadow**) at x 370 — 60px round avatar, name
   **18px/300**, meta 16.8px `#a6a6a6` ("XYZ Inc. Client"), quote 16px/28.8 in
   typographic quotes; Owl nav **110×54** centred at `bottom: -40px`
   (arrow glyphs 30px, 20px padding, `.disabled` at opacity .2). **4 slides.**
8. `div.bg-primary.py-5` — **312px `#007bff`** (`padding: 48px 0`): centred
   635px column — `h3` "Join With Us Now!" **28px/900** white, `p.lead`
   **20px/36px/300** white, then the yellow button **174×54** (13px/900,
   2.6px tracking, UPPERCASE, radius 4px, `#212529` on `#ffc107` → `#e0a800`).
9. `footer.site-footer` — **730px `#333`** (`padding: 7em 0`): columns
   **4 / 5 / 3** of the 1,110px container (`md-4` About + four 30×30 social
   glyphs, `md-5` Contact Info rows + Subscribe form, `md-3` Quick Links) plus
   an empty `md-3` spacer in the source (drop it). Headings **16px/700** white,
   1.6px tracking; links `rgba(255,255,255,.7)` underlined → white on hover;
   subscribe field **295×50** (`2px solid #6c757d`, transparent, radius
   `4px 0 0 4px`) + **118×50** yellow button. Bottom row: centred copyright
   (year + mandate credit → Component Dock).

## Task list (implementation order, TDD)

### 0. Claim (implementer, not prep)

- [ ] `git fetch origin`, branch `feat/template-brawn`.
- [ ] Re-open rows **1222** and **1884** in `TEMPLATES.md` (`[x]` → `[ ]`),
      push the claim (they are false `[x]` — see §2 of
      `docs/row-multiplicity.md`). Do NOT touch `apps/vigor` — it recreates a
      different design (Endurance).
- [ ] Copy the smallest shipped app (`apps/amberline` is a good base), rename to
      `brawn`, set `@free-react-templates/brawn`, `public/CNAME`,
      `homepage`.

### 1. Scaffold + tokens

- [ ] `src/index.css` `@theme` block: `--color-brand: #007bff`,
      `--color-action: #ffc107`, `--color-action-hover: #e0a800`,
      `--color-ink: #000`, `--color-body: #6c757d`, `--color-nav: #666666`,
      `--color-surface-light: #f8f9fa`, `--color-surface-dark: #333`,
      `--color-meta: #a6a6a6`, `--radius-btn: 4px`, `--radius-diamond: 7px`.
- [ ] `index.html`: Montserrat 400/700/900 + Oxygen 300/400/700 via
      `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Oxygen:wght@300;400;700&display=swap`
      (verified 200), preconnect to `fonts.gstatic.com` and `picsum.photos`,
      Brawn `<title>` + meta description, `<html lang="en">`.

### 2. Shell + header (tests first)

- [ ] `src/components/Header.tsx`: in-flow white 85px bar, tracked blue
      wordmark, six nav items as in-page anchors (`#top`, `#about`,
      `#services`, `#gallery`, `#coaches`, `#contact`), hover + click +
      keyboard `Services` dropdown (six program names, **not** dead links),
      labelled search form that validates and never calls the network.
- [ ] Tests: bar height/position, active item colour, dropdown opens on
      Enter/Escape focus return, search empty-submit error, no `href="#"`.

### 3. Hero

- [ ] `src/components/Hero.tsx`: 100vh (min 700px) band, `picsum` photo,
      40% black wash, single `h1` (80px → 40px under 768), 60px play disc that
      grows to 80px and opens the video in a new tab (`rel="noopener
      noreferrer"`, accessible name), "Watch Video" label.
- [ ] Tests: only one `h1`, band height at desktop/mobile, overlay opacity,
      link target + rel, focus ring visible.

### 4. Services + split bands

- [ ] `src/components/Services.tsx`: four cards, 90px rotated-square icon
      (blue 2px border, grey glyph), 19.2px/900 title — 4/2/1 column reflow.
- [ ] `src/components/SplitBand.tsx` used twice (`variant="image-left"` /
      `"image-right"`): absolute 50% bleed image, 445px text column,
      `h2` 48px/900, two paragraphs; image-first stacking below 992.
- [ ] Tests: card count/names, diamond rotation + border, image half geometry at
      1440, stacking order at 390, no horizontal overflow.

### 5. Program band + reveal

- [ ] `src/components/ProgramBand.tsx`: `#007bff`, three white icon columns,
      no surfaces.
- [ ] `src/hooks/useReveal.ts`: IntersectionObserver, ~100ms stagger,
      `prefers-reduced-motion` → instant, content visible without JS.
- [ ] Tests: three columns, white text, reveal class applied once, reduced
      motion path, SSR/no-JS default visible.

### 6. Testimonials

- [ ] `src/components/Testimonials.tsx`: four **distinct** people, one 700px
      card visible, `aria-roledescription="slide"`, "n of 4", prev/next with
      `aria-disabled` at the ends, ~1s transition, **no autoplay**.
- [ ] Tests: one card visible, controls move slides, disabled at ends,
      keyboard operation, names are unique.

### 7. CTA + footer

- [ ] `src/components/CtaBand.tsx`: `#007bff`, 28px/900 heading, 20px/300 lead,
      174×54 yellow button → contact section.
- [ ] `src/components/Footer.tsx`: `#333`, 4/5/3 columns (no spacer), 16px/700
      tracked headings, social glyphs (lucide), contact rows, subscribe form
      with validation (`aria-invalid`, inline message, no request), Quick Links,
      centred copyright with the current year + Component Dock link.
- [ ] Tests: column counts, subscribe invalid/valid paths, Component Dock link
      present with correct href, no ColorLib string in `apps/brawn`.

### 8. Gates + bookkeeping

- [ ] `scripts/verify-app.sh brawn` clean (typecheck + lint + 100% coverage +
      build); `npm run spec:validate`.
- [ ] Flip rows 1222 / 1884 to `[x]` with `brawn.free.componentdock.com`,
      `npm run readme:status`, PR → squash merge → Surge deploy.
