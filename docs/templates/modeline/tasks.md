# Modeline (ColorLib Glamour) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-modeline`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-modeline/spec.md` and
> `docs/templates/modeline/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Modeline** (one word: "model" + "-ine"; `git grep -il modeline origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/modeline/`, `theme/modeline/` and `theme/bootstrap/modeline/` all 404) |
| App / package | `apps/modeline` · `@free-react-templates/modeline` |
| Deploy target | `modeline.free.componentdock.com` |
| Source | ColorLib **Glamour** — https://colorlib.com/wp/template/glamour/ |
| Preview | https://preview.colorlib.com/theme/glamour/ (HTTP 200, **11,445 B** HTML, sha256 `3d5514b8…`; `css/style.css` **28,429 B**, sha256 `42e090e9…`; `js/main.js` **3,877 B**, sha256 `93fa56be…`; Bootstrap 4 grid + jQuery 3.2.1 + Owl Carousel 2 + isotope + magnific-popup + circle-progress; `<title>` = "Glamour - Fashion HTML Template"; `/downloads/free/glamour.zip` **404** — no archive exists) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/glamour-free-template.jpg (AVIF 1200×946 — **top fold only**, hero + header; the rest of the page was measured from the live render) |
| Category | Fashion — model agency (single page build of a 5-page theme) |
| TEMPLATES.md rows | lines **1028**, **1583**, **1712** (`grep -c 'wp/template/glamour/'` = 3) — all `[x]`, wrongly credited to the `glamour` app |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: the `glamour` app's spec names a different ColorLib design (**Look**, `theme/look/`; `row-excl / spec-excl` = 0 / 36) |

## Structure (1:1, DOM order from the live preview, 1440×900, doc ≈5,055px)

1. `#preloder` — full-screen **`#000`**, fades out 400ms after `load`.
2. `header.header-section` — **93px**, `#081624`, `padding: 16px 90px`:
   left list Home / About the Brand / Portfolio, centred **156×61** crest
   wordmark, right list Shop / News / Contact (13px uppercase white,
   `margin-right: 50px`, `padding: 22px 0`), plus the absolute **92px white
   search square** at the right edge.
3. `section.hero-section` — **965px**: B&W photo (`cover`, top centre) + the
   halftone panel, an `h2` **160px/192/700 `#081624`** ("Fashionista"), two
   **186×66** CTAs (white, navy, 24px apart), the **five 48px navy circles**
   rail at the right edge, the rotated "We love our brand" line, and **84×84**
   prev (navy) / next (white) squares at the bottom-left.
4. `section.quote-section` — **444px** white, `padding: 125px 0`: 36px italic
   quote + 30px bold attribution.
5. `div.portfolio-section` — **864px**, full-bleed 5×3 mosaic of **288px**
   squares (11 photos + one empty gap tile + one 2×2 tile): tile map in the
   spec, `#161024` hover overlay with a white "loadmore" label.
6. `section.about-secton` — **1,496px**, `padding: 128px 0 115px`:
   A) 7-of-12 text (686px) — 48px/400 heading, paragraph, **233×84** signature,
   portrait bleeding `right: -63px`;
   B) `about-img-box-warp` (**777px**, `padding: 120px 0 135px`) — flush-left
   **720×522** photo + right column **534px** with `padding-left: 171px`
   (`max-width: 655px`), 48px/400 heading, two paragraphs, halftone panel behind.
7. `section.shop-section` — **713px**, `padding: 0 0 100px`, no heading: four
   cards (portrait **264×411**, 30px/400 name, 16px italic price, **130×46**
   navy "Add to cart").
8. `section.newsletter-section` — **271px** `#081624`, `padding: 110px 0 104px`:
   30px/400 white heading (3-of-12) + **556×57** field (**164×57** white
   Subscribe button) in 9-of-12, 30px gap.
9. `footer.footer-section` — **210px**, `padding: 56px 62px`: dark wordmark +
   12px copyright at **23% opacity** (left), Address/Phone/Mail list with
   **75px navy labels** (right), `id="contact"`.
10. `div.search-model` — fixed `#000` overlay: 500px/40px transparent field,
    `2px #333` underline, `#999` text, 50px `#333` circular close.

## Build tasks (order)

- [ ] Scaffold `apps/modeline` from the simplest existing app; package name,
      `homepage`, `public/CNAME` = `modeline.free.componentdock.com`;
      `vite.config.ts` keeps `injectUiSource()`.
- [ ] `src/index.css` — `@theme` palette (`--color-ink: #081624`,
      `--color-popup: #161024`, `--color-body: #60656b`,
      `--color-steel: #8d9eaf`, `--color-surface: #fff`,
      `--color-line: #efefef`), Jost via one Google Fonts `<link>`, and the
      halftone utility (`.halftone` = `radial-gradient(circle,
      rgba(29,29,27,.17) 1.2px, transparent 1.4px)` `background-size: 24px
      24px`).
- [ ] `Navbar.tsx` + `MobileMenu` state (hamburger `aria-expanded`, white
      drawer, `Escape`), search square, wordmark = crest glyph + MODELINE.
- [ ] `SearchOverlay.tsx` (focus trap, clear on close, `aria-label`).
- [ ] `Preloader.tsx` (derive from `document.readyState === 'complete'` rather
      than setState from an effect — oxlint `react(set-state-in-effect)` is an
      error here).
- [ ] `Hero.tsx` — two slides, halftone panel, single `h1` at 160px, two CTAs,
      social rail, rotated brand line, 84×84 controls; autoplay pauses on
      hover/focus and under reduced motion; `IntersectionObserver` NOT needed
      (no reveal animation on this design).
- [ ] `Quote.tsx` (paraphrased aphorism + attribution).
- [ ] `Portfolio.tsx` — CSS grid 5×3 with the measured map: `gap` 0, the
      empty tile rendering the halftone, the 2×2 tile via `grid-column/row:
      span 2`, `aspect-ratio: 1` on every tile (never measure with JS),
      overlay `#161024` at 80%→100% with focus parity.
- [ ] `AboutStatement.tsx` — text column + absolutely positioned portrait
      (`right: -63px`) inside `overflow-hidden`, signature placeholder.
- [ ] `AboutSplit.tsx` — flush-left photo + inset text column
      (`padding-left: 171px`, `max-width: 655px`), offset halftone panel.
- [ ] `Shop.tsx` — four distinct products, inline `aria-live` add-to-cart
      confirmation, no network.
- [ ] `Newsletter.tsx` — client-side validation, `aria-invalid` + inline
      error, `aria-live` success, no UA inset border (deliberate focus ring).
- [ ] `Footer.tsx` — wordmark, faded copyright with a rendered year, contact
      list, `id="contact"`, **Component Dock** link to
      https://www.componentdock.com/.
- [ ] Tests before implementation per component (mirror the spec's Gherkin
      scenarios one-to-one); `npm install` at the repo root so the lockfile
      registers the workspace.
- [ ] Re-open rows **1028 / 1583 / 1712** `[x]` → `[ ]` on the branch; after
      merge mark them `[x]` with the surge URL and run `npm run readme:status`.
- [ ] `scripts/verify-app.sh modeline` green; desktop + mobile compared
      band-by-band against the reference; PR lists the deltas
      (`docs/templates/modeline/design-notes.md` §Deltas).

## Token summary (copy into the app; full table in the spec)

| Role | Value |
|---|---|
| Brand navy (header, buttons, headings, newsletter band) | `#081624` |
| Popup / hover navy | `#161024` |
| Body copy | `#60656b` |
| Muted steel (roles, meta) | `#8d9eaf` |
| Surface | `#ffffff` (band), `#f4f5fa` + `#f4f4f5` (blog search field), `#efefef` (drawer rules) |
| Chrome | `#000` (preloader, search overlay), `#333` (search field/circle), `#999` (search text) |
| Type | Jost 300/400/700 + 400 italic (substitute for self-hosted Futura LT Book) |
| Radii | **0** everywhere; 50% only on the five social circles and the search-close disc |
| Halftone | 24px pitch, ~2px dots, `rgba(29,29,27,.17)` |
