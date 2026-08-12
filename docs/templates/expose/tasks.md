# Expose (ColorLib Shutter) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-expose`.

## Design notes (replication findings)

- **Original:** ColorLib "Shutter" —
  `https://colorlib.com/wp/template/shutter/` (Photography Portfolio
  Template). TEMPLATES.md lines **494, 1806, 2472** — THREE duplicate rows,
  all `- [ ]`; mark ALL THREE `[x]` when done. Recreation uses the NEW name
  **Expose** (single word, no collision with `ls apps/` or spec folders;
  "expose" appears nowhere in TEMPLATES.md; "shutter" itself is already
  taken as the NEW name of Elena Voss → `apps/shutter`, so it CANNOT be
  reused).
- **Preview URL:** `https://preview.colorlib.com/theme/shutter/` — **HTTP
  200** (15.3 KB), analyzed live. Stylesheet: `css/style.css` (201 KB:
  customized bootstrap + custom rules; the template-specific rules are the
  `.header-bar` sidebar, `.main-content`, `.photos .photo-item` and the
  `.site-mobile-menu` panel — the `.site-navbar`/`.site-section-heading`/
  `.custom-pagination` coral rules are generic leftovers from the base
  framework and are NOT used on this page). Font **Quicksand** (300/400/500/700)
  loaded via Google Fonts `<link>` — recreate with a Google Fonts `<link>`.
- **Screenshot / visual design** (`shutter-free-template.jpg`, verified via
  browser vision): split-screen dark layout — right ~25% black sidebar with
  white uppercase SHUTTER logo, coral nav links, faint white social icons;
  left ~75% masonry photo grid on black (surfer wave, red rock arch,
  portrait, moss texture, B&W mouth, blonde portrait, glass building, blue
  abstract, bridge cityscape). Minimalist editorial aesthetic.
- **Sections (from the live DOM, in order):** fixed right sidebar header
  (logo "Shutter" → "Expose" · nav Home[active]/Photos/Bio/Blog/Contact ·
  social: facebook, twitter, instagram, 500px, flickr) → masonry photo grid
  (19 cards, mixed col-lg 3/4/6/8) → centered copyright/credit row. **No
  hero, no buttons, no forms on this page.**
- **Notable quirks:** cards link to `single.html` in the original (separate
  pages) — recreation is single-page, so cards are non-navigating (or
  no-op `#` links). The mobile menu is a WHITE 300px slide-in from the
  right (NOT black); desktop sidebar is always visible (not a drawer).
  Social links point to `#`. Active nav item = Home. The column-span
  sequence (19 items): 8, 4, 3, 6, 3, 6, 6, 4, 4, 4, 3, 6, 3, 8, 4, 6, 6,
  4, 8. Original images cycle img_1..img_10 then img_1..img_9 — each card
  gets its own picsum seed instead (expose-1..19).
- **Tokens:** page + sidebar `#000`; accent `#ef6c57` (active nav link);
  logo/nav `#fff` uppercase; overlay heading `#fff` 16px; overlay meta
  `#cccccc` uppercase 12px; mobile-menu links `#212529` (hover/active
  `#ef6c57`); hover veil `rgba(0,0,0,0.6)`; font Quicksand; nav `.8rem`
  uppercase.

## Build order (implementer)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/altruist`),
   rename package to `@free-react-templates/expose`, add Google Fonts
   Quicksand 300/400/500/700 link, set `@theme` tokens: `--color-brand:
#ef6c57`, `--color-ink: #000`, `--color-meta: #cccccc`.
2. **Sidebar header** — desktop: fixed right, 250px, full height, `#000`,
   padding 30px, text-align right. Logo "Expose" white uppercase bold 20px;
   nav list (Home active in `#ef6c57`, others white) uppercase `.8rem`;
   social icons (lucide `facebook`, `twitter`, `instagram`, `camera`,
   `share-2` — or drop 500px/flickr, see fidelity call below) at the bottom.
3. **Mobile header** — `≤767px`: 70px black top bar, logo left, hamburger
   right (`aria-expanded`, Escape closes); white 300px slide-in panel from
   the right with the same nav + social (20px `#212529` links, active/hover
   `#ef6c57`).
4. **Photo grid** — `container-fluid` (15px padding) with a 19-card
   masonry row (`align-items-stretch`); per-card `col-span` from the
   sequence above (Tailwind: `col-span-3/4/6/8` at lg, `col-span-6` base).
   Each card: `img` cover-cropped 320px (200px mobile) + centered overlay
   (heading "Photos Title Here", meta "42 Photos"); hover → `rgba(0,0,0,0.6)`
   veil + overlay fades in and slides up (`.3s`).
5. **Footer** — centered `py-5` row: "Copyright © <year> All rights
   reserved" + recreation credit line.
6. **Seed screening (IMPORTANT)** — picsum `seed/expose-<n>/800/600`
   (or 900/700 for the lg-8 cards) for n=1..19. Screenshot each seed once
   in the browser and pin only seeds that render photographic subjects
   (landscape/portrait/texture/architecture — matching the original's mix);
   replace bad seeds (re-roll by bumping the number or changing the seed
   word) before shipping. Record the final seed map in the PR description.
7. **Tests** — one `describe` per component mirroring the spec scenarios
   (sidebar render, mobile menu open/close + Escape, grid renders 19 cards
   with overlays, hover overlay, footer credit, page composition + document
   title); 100% coverage enforced.

## Fidelity calls for the implementer

- Social icon set: original has 5 (facebook, twitter, instagram, 500px,
  flickr). lucide-react has no 500px/flickr — either approximate with
  `camera`/`share-2` or render 3 icons. Prefer 5 icons for 1:1 fidelity
  (two generic ones) unless it looks off; note the choice in the PR.
- Card links: original `href="single.html"` (dead in a single-page build).
  Render cards as non-navigating `<article>`/`<div>` or `href="#"` anchors
  — keep hover cursor + overlay either way.
- The bottom credit row in the original sits INSIDE `main.main-content`
  (no `<footer>` tag) — a semantic `<footer>` element is fine, keep it
  visually identical (centered, py-5, no columns).
