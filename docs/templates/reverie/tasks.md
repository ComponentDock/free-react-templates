# tasks — Reverie (ColorLib Weddingdreams)

Prepped 2026-10-12 by the prep stream. Nothing below is checked until the
implementer ships it and the deploy is live.

## 0. Scaffold

- [ ] `apps/reverie` copied from the simplest current app; package renamed to
      `@free-react-templates/reverie`.
- [ ] **Skip link before the header**: `<a href="#main">Skip to content</a>` as the
      first focusable element (hidden at `top:-100px`, revealing at `top:10px` on
      `:focus`, `#111` fill / white 14 px 600), targeting a `<main id="main" tabindex="-1">`
      focus target; the footer landmark stays outside `<main>`.
- [ ] `vite.config.ts` keeps `injectUiSource()` (absolute `@source` for
      `packages/ui`).
- [ ] `public/CNAME` = `reverie.free.componentdock.com`; `"homepage"` =
      `https://reverie.free.componentdock.com`.
- [ ] `index.html`: Google Fonts `<link>` for **Cormorant Garamond** (300–700)
      and **Raleway** (300–700), `<title>`, favicon.
- [ ] `src/index.css`: `@theme` brand tokens (see design-notes token table).
- [ ] Run `npm install` at the repo root so `package-lock.json` registers the new
      workspace.

## 1. Header

- [ ] `Navbar.tsx` — absolute white bar (`box-shadow:0 5px 10px rgba(154,87,87,.102)`).
- [ ] Serif `REVERIE` wordmark (Cormorant Garamond) — no source logo/name.
- [ ] Six nav items (Home · Services · Portfolio · Pages ▾ · News · Contact),
      14 px uppercase `letter-spacing:2px`; current item gets the 5 px dot.
- [ ] `Pages` dropdown: `#111` panel, 140 px, white 12 px rows, hover + click +
      `Escape`, `aria-expanded`.
- [ ] Right cluster: social links (`#444`, 16 px) + magnifier button (`aria-label`)
      opening `SearchOverlay`.
- [ ] Mobile (`<992 px`): toggle (`lucide-react` Menu) → in-flow stacked panel,
      `aria-expanded`, closes on link click, `focus-visible` rings.

## 2. Search overlay

- [ ] `SearchOverlay.tsx` — fixed full-screen modal, `display:none` by default.
- [ ] Close control + centred `Search` field; `Escape` dismisses and returns focus
      to the magnifier; focus trap while open.

## 3. Hero

- [ ] `Hero.tsx` — 866 px full-bleed photo band, `padding-top:330px`,
      `background-position:top center`; deterministic picsum placeholder.
- [ ] Curved bottom edge (SVG mask / `clip-path`) reproducing the source's
      transparent-wave `hero.png` (do **not** copy the image).
- [ ] Overlay: ornament glyph (lucide), `h5` "WELCOME TO REVERIE", `h1` "Plan the
      perfect wedding" (uppercase, Cormorant Garamond, 48 px), subtext. No CTA.

## 4. Services

- [ ] `Services.tsx` — centred `h2` "OUR SERVICES" + ornament.
- [ ] Six cards (Photos & Video, Wedding Makeup, Restaurant, Live Music & DJ,
      Wedding cake, Honeymoons), white, centred, lucide icons.
- [ ] Hover: `border-radius:10px` + `box-shadow:0 5px 39px rgba(154,87,87,.102)`,
      `.5s`; mirror via `:focus-within`; reduced-motion safe.

## 5. Features (filter + masonry gallery)

- [ ] `Features.tsx` — `h2` "OUR WEDDING FEATURE" + six filter buttons (All ·
      Couple · Event · Music Live · Honeymoon · Photography), active underlined.
- [ ] CSS-grid masonry: `repeat(3,minmax(0,1fr))`, `grid-auto-rows:1px`,
      `column-gap:15px`; six tiles with spans 253 / 380 / 505 px.
- [ ] Tile hover overlay: `rgba(0,0,0,.7)` veil + category span (from −40 px) and
      white `h2` couple name (from +40 px), `.6s`.
- [ ] Tiles are focusable links with accessible names (delta vs source `div`s).
- [ ] Filter state wired (active button + visible set), `aria-pressed`.
- [ ] Centred "View more" link.

## 6. Counter band

- [ ] `Counters.tsx` — full-bleed photo band (`padding:100px 0 300px`).
- [ ] Four items (icon + number + label): 8365 Photos, 568 Happy Couples,
      849 Toasts, 2574 Wedding Cakes.
- [ ] `IntersectionObserver` count-up runs **once**; reduced-motion shows the
      final value immediately.

## 7. Request card

- [ ] `RequestForm.tsx` — section pulled up `margin-top:-235px` over the counter.
- [ ] Green header block (`#5e6350`, `padding:60px 145px 40px`, radius
      `10px 10px 0 0`): span "LET'S MEET" + `h2` "MAKE A REQUEST" + subtext.
- [ ] White panel (radius `0 0 10px 10px`, `box-shadow:0 5px 10px
      rgba(154,87,87,.102)`, `padding:60px 55px 50px`).
- [ ] Four fields (Name, Email, Services select, Guest select) 2×2; inputs
      `height:50px`, `1px solid #e1e1e1`, 14 px `#666`.
- [ ] Square `SEND A REQUEST` button (`#a3a698`/`#111`).
- [ ] Client-side validation, per-field messages, focus to first invalid field,
      inline success state (no `php/` post).

## 8. Blog

- [ ] `Blog.tsx` — `h2` "OUR BLOG" + three cards.
- [ ] Meta row "Inspiration · Nov 27, 2019 · 05 Comments" (17 px italic Cormorant
      Garamond `#6b705d`, 25 px apart).
- [ ] `h4` title link "Newlyweds share first wedding photos" (26 px/36 px `#111`),
      real link + `focus-visible` ring.

## 9. Logo strip

- [ ] `LogoStrip.tsx` — `#f7f8f3` band, `padding:35px 0`, ten placeholder vendor
      wordmarks, marquee/carousel that pauses on hover (reduced-motion safe).

## 10. Footer

- [ ] `Footer.tsx` — `#3b3e33`, `padding-top:65px`.
- [ ] Newsletter pill (translucent input + flush-right send button) + four 50 px
      social discs.
- [ ] Four columns: footer logo · OPEN TIME · PHONE & EMAIL · ADDRESS (source copy).
- [ ] Copyright bar: same shape, trailing link = **Component Dock**
      (https://www.componentdock.com/) — Colorlib credit never reproduced; Terms &
      Use / Privacy Policy as anchors.

## 11. Verification

- [ ] `openspec validate template-reverie --type spec` passes.
- [ ] TDD: tests first, `npm run test:coverage` at 100% for the app.
- [ ] `scripts/verify-app.sh reverie` passes (typecheck + lint + coverage + build).
- [ ] No ColorLib string anywhere in `apps/reverie`.
- [ ] README status regenerated (`npm run readme:status`), TEMPLATES.md `[ ]`→`[x]`
      with the surge URL, PR opened and squash-merged.
