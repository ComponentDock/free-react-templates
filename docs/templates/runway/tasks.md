# Runway (ColorLib Libro) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-runway`.

## Design notes (replication findings)

- **Original:** ColorLib "Libro" — fashion/lifestyle magazine blog template
  (source: https://colorlib.com/wp/template/libro/). TEMPLATES.md has ONE
  copy of this item (line 268 — mark it `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/libro/ (HTTP 200,
  23.4 KB, title "Libro - Free Bootstrap 4 Template by Colorlib"). Main
  stylesheet `css/style.css` (58 KB). Fonts: **Playfair Display** (headings)
  - **Work Sans** (body).
- **Screenshot:** `libro-free-template.jpg` (1200×946, viewed in browser) —
  split-screen magazine: LEFT ~40% full-height hero slider (sunglasses photo,
  "FASHION" bordered tag, white serif headline, dots at bottom), RIGHT ~60%
  2-column blog grid (photo card → uppercase date/author → serif title →
  gray excerpt), white page. Hamburger top-right of the hero panel.
- **Visual design (from DOM + CSS tokens + screenshot):** elegant editorial
  magazine aesthetic. White background, Playfair Display black serif
  headlines (weight 300), thin light-gray Work Sans body (18px/1.8/300,
  `#737373`), pink `#ee76ad` accent (logo icon, hover links, meta, active
  dot, active pagination) with cyan `#29bae4`→pink 45° gradient overlay
  menu. Left hero column `position: fixed` on desktop; right content column
  scrolls.

## Tasks (implementation order)

1. Scaffold `apps/runway` (copy simplest existing app; package
   `@free-react-templates/runway`; `vite.config.ts` with `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json).
3. `index.css` `@theme` tokens: `--color-brand: #ee76ad`,
   `--color-brand-cyan: #29bae4`, `--color-mint: #79efb4`,
   `--font-display: "Playfair Display"`, `--font-body: "Work Sans"`.
   Load Playfair Display (400/700) + Work Sans (300/400) via Google Fonts in
   `index.html`.
4. Tests first (TDD, 100% coverage), then components:
   - `Navbar` — logo "Runway" (uppercase, letter-spacing 5px) + hamburger
     toggle (aria-label; two 2px bars → X when open).
   - `OverlayMenu` — fixed, 50% width desktop (100% mobile),
     `linear-gradient(45deg, #29bae4, #ee76ad)`, links Home/Fashion/
     Model/Travel/About Us/Contact (white, 30px, weight 400),
     `aria-expanded` on toggle, Esc/outside-click close optional.
   - `HeroSlider` — full-height (`min-h-[700px]`), 2 slides (tag + h1 +
     optional sub), dots (10px, `#999`/active `#ee76ad`), auto-advance +
     dot navigation.
   - `BlogGrid` — two-col grid (lg:grid-cols-2) of 8 cards: image
     (overflow-hidden, hover `scale-110` transition), `.meta` date+author
     (12px uppercase tracking-widest, pink links), h3 title (28px serif,
     black → pink hover), gray excerpt.
   - `Pagination` — 40×40 circles, border `#ccc`, active `#ee76ad` fill
     white text, `<`/`>` + 1–5.
   - `Footer` — copyright line (no Colorlib credit).
5. `App.tsx` composes: Navbar → HeroSlider → BlogGrid → Pagination → Footer.
6. `scripts/verify-app.sh runway` until green; commit conventional;
   PR to main, merge immediately.

## Fidelity notes

- Section order and card layout are the reference's signature — keep the
  split-screen feel (hero column `lg:sticky`/fixed, content column right).
- All 8 blog cards in the demo share identical placeholder copy ("Life looks
  happier" / "July 29, 2018" / "Admin"). Vary the images per card
  (`picsum.photos/seed/runway-<n>/800/600`); paraphrased varied headlines
  are fine, but the meta + title + excerpt card pattern must stay 1:1.
- The `#ee76ad` pink is the dominant brand accent; mint `#79efb4` only
  appears as the default link color (use sparingly).
- No filled CTA buttons exist on the reference home page — links only.
- Carousel behavior: owl.carousel auto-plays; a simple
  `useEffect`-interval slider with dots is a faithful equivalent.
