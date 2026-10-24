# Flint (ColorLib Spark) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/flint`
> (<https://flint.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Written by this run's implementer stream (the design had no prepped spec: both
> its TEMPLATES.md rows credited an app that renders a different design).
> Implementation ships on `feat/template-flint`.

## Design notes (replication findings)

- **Original:** ColorLib "Spark" — Bootstrap 5 app/agency landing template
  (source: https://colorlib.com/wp/template/spark/). TEMPLATES.md has TWO rows
  for it (lines 626 and 1177 — mark ALL when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/spark/ (HTTP 200,
  24,939 B, `curl -4`; the preview host IP-bans IPv6). Title: "Spark &mdash;
  Free Bootstrap 5 Website Template by Colorlib". Stylesheets: `icomoon`,
  `flaticon`, `tiny-slider.css`, `aos.css` + **`css/style.css`** (main,
  60,200 B, sha256 `d463cfe0…`).
- **Screenshot:** `spark-free-templatel.jpg` (1200×946, viewed) — full-viewport
  interior photo with a 35 % solid teal panel down the left edge, white
  Playfair Display headline over the teal, a white caption card overlapping the
  photo edge, white testimonial under the headline; then a serif headline with
  a two-column quote/body block, a four-up row of round teal icon chips, and a
  pale-grey footer. Demo brands itself "Spark"; recreation uses **Flint**.
- **Visual design:** restrained editorial minimalism — Playfair Display headings
  on white, one teal accent (`#367f7c`), 7rem section rhythm, a 50×2px teal rule
  above every section heading, 30px pill buttons, photo-led bands.
- **Structure (1:1, section order):**
  1. `site-mobile-menu` — 300px white slide-in panel from the right, ✕ close,
     links `#000` → `#367f7c`.
  2. `site-nav` — absolute over the hero (not sticky), `padding: 20px 0`; logo
     24px Playfair `#fff`; links white 14px + a Dropdown (Menu One → Sub Menu
     One/Two/Three, Menu Two, Menu Three).
  3. `hero` — `100vh` / `min-height: 800px`, cover photo, `:before` 35 % teal
     panel, `:after` `rgba(0,0,0,.35)` scrim; `Welcome` 13px, `h1` 50px/700
     `#fff`, testimonial (`max-width: 300px`) with 40px round avatar.
  4. `section-1` — `.line` 50×2px teal, serif `h2`, then Georgia italic 18px
     pull quote + 3 paragraphs; right photo with an offset white card
     (`padding: 40px`, `width: 80%`, `margin-top: -50px`) headed "We love
     minimal".
  5. `section-2` — centred line + "Our Services Includes...", four
     `col-lg-3` features: 90px `rgba(54,127,124,.1)` circle, 50px teal icon,
     `h3` 20px/700.
  6. `post-entries` — centred line + `h2`, four cards: 200px cover link, white
     body (`padding: 20px 20px 50px`), 12px date, `h3` 16px/700, `Read More`
     with a 30px circular arrow (`border: 1px solid #efefef`).
  7. testimonials — three ink-coloured testimonial blocks (`col-lg-4`).
  8. `py-5 bg-primary` CTA — teal band, white `h3` left, outline-white pill
     "Get started" right.
  9. `site-footer` — `#efefef`, 14px `#888`, `70px 0`: About + Connect (six
     30px `#777` chips, hover `#45a39f`), Links, Company, Contact; centred
     copyright row.
  10. `loader` — Bootstrap spinner preloader. **Omitted** (page chrome).
- **Tokens:** teal `#367f7c` (×31), hover `#2e6c69`, active `#2b6663`, light
  `#45a39f`; surfaces `#fff` (×44), `#efefef` (footer), `#f8f9fa`/`#e9ecef`;
  ink `#000` (headings), body `#212529`, muted `#6c757d`, footer `#888`/`#777`;
  Playfair Display + Open Sans + Georgia (quotes); pills 30px
  (`padding: 12px 30px`, 12px uppercase, `letter-spacing: .1rem`).
- **Recreation decisions:** picsum seeds `flint-<n>`; lucide icons (`Lamp`,
  `BedDouble`, `Armchair`, `Bath`, `ArrowRight`, `ChevronDown`, `Menu`, `X`);
  social brand icons as inline SVG (lucide removed them); fonts via Google
  Fonts `<link>`; CTA reuses shared `ButtonLink` with pill/uppercase overrides.

## Tasks

### 1. Scaffold (test: `App.test.tsx` renders the page shell)

- [ ] `apps/flint` from the zine scaffold: `package.json`
      (`@free-react-templates/flint`, `homepage` https://flint.free.componentdock.com),
      `index.html` (Playfair Display + Open Sans, title "Flint — Design Studio
      Template", description without source provenance), `vite.config.ts` **with**
      `injectUiSource()`, `vitest.config.ts`, `tsconfig.json`,
      `public/CNAME` = `flint.free.componentdock.com`.
- [ ] `src/index.css` `@theme`: brand + primary scale + surfaces + fonts.

### 2. Section components (each with a colocated test first)

- [ ] `Navbar` — logo, desktop menu with CSS dropdown, mobile toggle
      (`aria-expanded`), mobile panel close.
- [ ] `Hero` — subheading, headline, testimonial with author.
- [ ] `Intro` — line, headline, pull quote, three paragraphs, caption card.
- [ ] `Services` — centred heading + four icon features.
- [ ] `BlogPosts` — four cards with dates and Read More links.
- [ ] `Testimonials` — three ink testimonial blocks.
- [ ] `CallToAction` — heading + shared `ButtonLink`.
- [ ] `Footer` — five widgets, contact details, social chips, Component Dock
      credit.

### 3. Composition + gate

- [ ] `App.tsx` composes the sections in reference order and sets the document
      title.
- [ ] `bash scripts/verify-app.sh flint` green (typecheck + lint + 100 %
      coverage + build).
- [ ] `npm run spec:validate` green.
- [ ] TEMPLATES.md both Spark rows → `[x]` + surge URL; `npm run readme:status`.
