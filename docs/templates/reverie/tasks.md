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
      and **Raleway** (300–700) **with `&display=swap`**:
      `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap`
      — the source's 14 self-hosted design faces all set `font-display: swap`
      (only its Font Awesome 7 icon face is `block`), so a link without
      `display=swap` blocks text for up to ~3 s where the reference swaps; no
      `.woff2` is ever copied. Plus **our own** head facts — `<title>`,
      `meta description`, `rel=canonical` (`https://reverie.free.componentdock.com/`),
      an own SVG favicon and (optionally) own `og:`/`twitter:` tags. The source's
      head is placeholder data never to be reused: `rel=canonical`
      `https://your-domain.com/`, `og:image`/`twitter:image` `img/og-image.jpg`, a
      `Dreams Wedding Planner` JSON-LD block, `meta name=generator`
      "Wedding Dreams 3.0.2" and a `G-XXXXXXXXXX` analytics script.
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

- [ ] `Counters.tsx` — full-bleed photo band (`spad` = `padding:100px 0`; a second `.counter{padding-bottom:300px}` rule adds the deep bottom edge).
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
- [ ] Real `<select name="service">` / `<select name="guests">` carrying the
      source's options — Services · Photos & Video · Wedding Makeup · Restaurant ·
      Live Music & DJ · Wedding Cake · Honeymoon, and Guest · Up to 50 ·
      50 to 100 · 100 to 200 · More than 200 (the source sets no `value` on them,
      so the label is the value).
- [ ] **No hidden decoy field:** the source's enquiry *and* footer forms each end
      with `<input type="text" name="website" tabindex="-1" autocomplete="off"
      hidden>` (a bot trap). Ship nothing of the kind — a documented delta, since
      a client-side form has no server-side POST to protect.
- [ ] Square `SEND A REQUEST` button (`#a3a698`/`#111`).
- [ ] Client-side validation, per-field messages, focus to first invalid field.
      The source has **two** posts — the enquiry card to `php/send-email.php`
      ("we will reply within one working day") and the footer pill to
      `php/subscribe.php` ("you are on the list") — so ship **two distinct**
      inline success states, keyed to the form submitted (no `php/` request).

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
- [ ] The year in that bar is **computed** (`new Date().getFullYear()`), matching
      the source's `.js-year` span + `main.min.js` hook — assert no hardcoded
      `2026` in the component.

## 11. Image delivery (source-only format layer)

- [ ] Every photograph = one seeded `picsum.photos` URL, every line-art icon = a
      `lucide-react` glyph — **flatten the source's format layer**: no `<picture>`,
      `<source>`, `srcset`, `sizes` or `image-set()` in app code, no `.avif`
      request, no image `<link rel="preload">` in `index.html`.
- [ ] Keep the source's fallback delivery attributes: explicit `width`/`height` on
      the blog cards (`360×240`) and icon images, `loading="lazy"` below the fold,
      the hero image eager, `alt=""` on decorative imagery.

## 12. Document head + source-only third-party surface

- [ ] Own `<title>`/description/canonical/favicon (and own `og:`/`twitter:`/JSON-LD
      if any) — never the source's placeholder values, host or `img/og-image.jpg`.
- [ ] Host layer excluded: the served reference head opens with the preview
      host's `<meta name="robots" content="noindex, nofollow">` +
      `<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">` pair and
      answers `x-robots-tag: noindex, nofollow` behind a host `robots.txt`
      (`Disallow: /`) — none of it in `apps/reverie` (no `noindex`, no `robots`
      meta, no `dns-prefetch`, no `cdnjs`, no `preview.colorlib.com`); the theme's
      own head starts *below* that pair.
- [ ] No third-party tag: no `gtag`, `dataLayer`, `googletagmanager`, `G-…` id, no
      CDN script/stylesheet — only the app bundle + the Google Fonts `<link>`.
- [ ] Guard test: `grep -rE 'gtag|dataLayer|googletagmanager|your-domain\.com|og-image'
      apps/reverie` is empty.

## 13. Verification

- [ ] `openspec validate template-reverie --type spec` passes.
- [ ] TDD: tests first, `npm run test:coverage` at 100% for the app.
- [ ] `scripts/verify-app.sh reverie` passes (typecheck + lint + coverage + build).
- [ ] No ColorLib string anywhere in `apps/reverie`; no source head value, no
      third-party tag, and both forms show their own success state.
- [ ] README status regenerated (`npm run readme:status`), TEMPLATES.md `[ ]`→`[x]`
      with the surge URL, PR opened and squash-merged.
