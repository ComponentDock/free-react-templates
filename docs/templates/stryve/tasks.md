# Stryve (ColorLib Topgym) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-stryve`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-stryve/spec.md` and
> `docs/templates/stryve/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Stryve** (one word, "strive"; `git grep -il stryve origin/main` = 0 hits, absent from `TEMPLATES.md`, and `stryve` 404s on `colorlib.com/wp/template/`, `preview.colorlib.com/theme/` and `…/theme/bootstrap/` — not a ColorLib slug) |
| App / package | `apps/stryve` · `@free-react-templates/stryve` |
| Deploy target | `stryve.free.componentdock.com` |
| Source | ColorLib **Topgym** — https://colorlib.com/wp/template/topgym/ |
| Preview | https://preview.colorlib.com/theme/topgym/ (HTTP 200, 49,595 B HTML + 38,006 B `style.css` + 4,210 B `main.js`, fetched and rendered 2026-10-24; no archive zip — 404) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/topgym-free-template.jpg (AVIF 1200×946 → decoded, top fold on slide 2) |
| TEMPLATES.md rows | lines **515**, **1206**, **1883** (`grep -c 'wp/template/topgym/'` = 3) — all currently `[x]` and wrongly credited to `ironpulse` |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: `ironpulse`'s spec names **Crossbody** (`row-excl / spec-excl` = 0 / 21) |
| Category | Health & Fitness / Gym |

## Structure (1:1, DOM order from the live preview)

1. `header-section` — 142px absolute bar over the hero with a
   `rgba(0,0,0,.5)` `::after` wash; 85×85 wordmark absolutely centred;
   HOME / ABOUT US / CLASSES floated left of it, INSTRUCTORS / NEWS /
   CONTACT right of it (13px/500 UPPERCASE white), search glyph 152px past
   the last link. No scroll state.
2. `search-bar-wrap` — full-screen `#073B4C` overlay: `h2` "Search", one
   `type="search"` field ("Type Keywords"), blue "Search" submit, X close.
3. `top-social` — black 121px rail on the right screen edge, five 48px navy
   (`#081624`) circles, 22px gaps; flips to the left edge at ≤1400px and
   disappears ≤991px.
4. `hero-slider` — owl carousel of **3** `single-slide`, 895px tall,
   `padding-top:343px`, centred: 56px blue play circle → `h1` 130px/500
   white → blue square "Read More". Slides "Be Fit.Top Gym" / "…Top
   Trainer" / "…Top Body"; fade in/out, autoplay, `dots:true`, `nav:false`;
   three 6px dots 30px from the bottom, active one ringed 26px.
5. `features-section spad` (pt 95 / pb 90) — 3 × `col-md-4`: photo, then an
   88px `#233EDE` circle pulled 34px up over the photo, 18px UPPERCASE
   `#353535` title, 15px/30px `#7b7b7b` paragraph. Titles: Amazing Setting,
   Best Trainers, Diet Plans.
6. `services-section spad` on `#212122` — heading recipe ("Features" 12px
   `#233EDE` ls 6px / `h2` "Services" 48px white), 4 × `col-lg-3` items
   (icon, 18px UPPERCASE white title, 14.5px/30px copy), then a `p-70` row
   with the centred "see all the services" button.
7. `trainer-section set-bg` (patterned photo, pt 125 / pb 100) — white label
   "The Best" / `h2` "Trainers" with a `#212122` "See All" button pinned
   right (`bottom:13px`); 3 cards: portrait + always-visible `#233EDE` plus
   tab (`left:15px; top:0; padding:37px 40px`) + caption (name 18px/700
   UPPERCASE white, role 15px at 60% opacity, 48px top pad).
8. `upcoming-event-section spad-2` (pt/pb 100) — three 503px cards:
   hairline `#E5E7F3` class list (6 stopwatch rows) / blue-framed
   (22/24/21/20px) membership card with 72px blue "25%" / photo sign-up card
   with white copy + full-width blue "Sign up Now". Stack with 30px gaps
   ≤991px.
9. `footer-section set-bg` (photo, 641px, pt 109, centred) — wordmark, six
   links, 542px subscribe form (73px transparent input, 2px white border,
   italic UPPERCASE placeholder, 192×73 blue button overlaid right), five
   socials 60px apart, icon strip, 13px half-opacity copyright →
   **Component Dock** link.

## Fidelity notes (non-obvious)

- **Square, flat, electric blue.** Every button is `#233EDE`, 20px 50px
  padding, 14px/700 UPPERCASE, `letter-spacing:1.5px`, **radius 0**, and the
  source sheet defines **no hover state** at all. Do not round, gradient or
  outline them — that is the whole difference between this design and its
  gym siblings (`grithaus` is rounded + lime gradient; `ironpulse` is
  Crossbody).
- **The headline is huge and mid-weight.** `h1..h5` are 600 globally, but the
  hero `h1` is **130px at weight 500** (105 / 65 / 45px down the ladder) with
  `letter-spacing: normal` — tightly set, no uppercase. The section `h2`s, by
  contrast, are **48px/700 with 6px letter-spacing and UPPERCASE**.
- **Labels are 12px/900 with 6px tracking** in `#233EDE` (white inside the
  trainers band, `opacity:.6` in the closing cards). That tracking is the
  page's secondary signature — keep it exact.
- **Header text is weight 500, not 700** (unlike `grithaus`), and the header
  has **no scroll behaviour**: it is absolutely positioned over the hero and
  scrolls away with the page.
- **The blue plus tab on each trainer photo is always visible** — there is no
  hover rule in the sheet. On touch devices it is the only affordance.
- **The 88px feature circles overlap the photos** (`margin-top:-34px`,
  `line-height:83px`) — reproduce with a negative margin, not a grid gap, or
  the card rhythm breaks.
- **Three equal 503px cards** close the page; the middle one is a photo
  framed by four different blue border widths (22/24/21/20px) rather than a
  padded card. Reproduce the asymmetry — at 1× it reads as a hand-set frame.
- **The services band is the only dark band** (`#212122`); the trainers and
  footer bands are photography, so the page alternates white → dark → photo →
  white → photo.
- **`img/bg*.jpg`, `trainer-bg.jpg`, `m-card.jpg`, `signup-bg.jpg`,
  `footer-bg.jpg`** are the real backgrounds; the icon PNGs are glyph art
  (replace with `lucide-react` inside the same circles).
- **Copy is all lorem ipsum** — write real gym copy in the same shapes
  (one-line hero claim, 116-character feature blurb, one-sentence service
  blurb, two-sentence sign-up pitch). The source's own typos are "Upcomming
  Classes" and a services block labelled "Features" over `h2` "Services".
- **Documented deltas to honour:** no black `#preloder`, no duplicate
  slicknav "MENU" bar over the hero (a real bug in the source at desktop
  width), inner-page links become in-page/dead anchors, the YouTube play
  lightbox becomes a local poster dialog, Roboto from Google Fonts, and the
  ColorLib credit becomes the Component Dock link.
- **Three rows, one app.** Before building, re-open rows 515, 1206 and 1883
  `[x]` → `[ ]`; after merge mark all three `[x]` with the surge URL.
  `ironpulse` keeps its own (Crossbody) identity — do not edit it.

## Tasks (implementation outline)

- [ ] Branch `feat/template-stryve`; re-open TEMPLATES.md rows 515 + 1206 +
      1883 (`[x]` → `[ ]`) in one docs commit.
- [ ] Scaffold `apps/stryve` from the simplest current app: `package.json`
      (`react`/`react-dom` = `latest`), `index.html` with the Roboto
      `<link>`, `vite.config.ts` **with `injectUiSource()`**, `tsconfig.json`,
      `vitest.config.ts`, `src/test/setup.ts`, `public/CNAME`.
- [ ] `src/index.css` → `@theme` tokens (`--color-brand: #233EDE`,
      `--color-ink: #212122`, `--color-body: #7b7b7b`,
      `--color-hairline: #E5E7F3`, `--color-rail: #081624`,
      `--color-search: #073B4C`) + the square button recipe in
      `packages/ui` variants/classes.
- [ ] Data modules: `nav`, `slides`, `features`, `services`, `trainers`,
      `classes`, `membership`, `signup`, `footerMenu`, `socials` (typed
      `const` arrays, copy paraphrased).
- [ ] Components (each with a colocated `.test.tsx`, written first):
      `Header` (split nav + search overlay), `SocialRail`, `Hero` (slide
      index + dots + autoplay + play dialog), `Features`, `Services`
      (dark band), `Trainers` (plus tabs), `ClosingRow` (three 503px cards),
      `Footer` (subscribe validation + attribution).
- [ ] `App.tsx` composes in the order above; footer links
      https://www.componentdock.com/.
- [ ] Images: `https://picsum.photos/seed/stryve-<n>/<w>/<h>`; icons from
      `lucide-react`; social glyphs as inline SVG (lucide has no brand
      icons).
- [ ] Accessibility: dots carry `aria-current` + labels, autoplay pauses on
      hidden tab / focus / `prefers-reduced-motion`, dialogs trap focus and
      close on Escape, subscribe form has a label + `aria-invalid` errors.
- [ ] Gates: `scripts/verify-app.sh stryve` (typecheck + lint + knip + fallow
      + 100% coverage tests + build); `npm install` at the root so the
      lockfile registers the workspace.
- [ ] PR → squash merge → deploy (`gh workflow run deploy-surge.yml -f
      app="stryve"`) → verify `https://stryve.free.componentdock.com`
      returns 200 with `ssl_verify_result=0`.
- [ ] Flip rows 515 + 1206 + 1883 to `[x]` with the URL,
      `npm run readme:status`, push.
