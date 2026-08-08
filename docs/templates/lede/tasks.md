# Lede (ColorLib Magazine) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lede`.

## Design notes (replication findings)

- **Original:** ColorLib "Magazine" — news/magazine blog template
  (source: https://colorlib.com/wp/template/magazine/). TEMPLATES.md has TWO
  copies of this item (lines 270 and 2197 — mark BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/magazine/ (HTTP
  200, 37.3 KB, title "Magazine"). Main stylesheet `css/main.css` (50 KB).
  Fonts: **Poppins** via Cloudflare `@font-face` (latin + devanagari —
  use latin only). Icons: font-awesome (socials) + linearicons (lnr) —
  replace with lucide + inline SVG.
- **Screenshot:** `magazine-free-template.jpg` (1200×946, viewed in browser)
  — dark navy top utility bar (socials left, phone/email right), white logo
  strip (pink-red flower logo + wordmark left, 728×90 ad right), dark navy
  nav bar (HOME / ARCHIVE / CATEGORY / POST TYPES / ABOUT / CONTACT +
  search), hero masonry (big feature left ~2/3, two stacked right ~1/3,
  photos + white overlay text), white Breaking News ticker, lower two-column
  area: post list (pink tags, titles, meta, excerpts) + sidebar (Editor's
  Pick, ad, Newsletter, Most Popular, Social Networks).
- **Visual design (from DOM + CSS tokens + screenshot):** modern news
  aesthetic — navy `#04091e` header/nav/footer bars, pink-red `#f6214b`
  accent everywhere (tags, breaking-news label, subscribe button, hovers),
  white content on faint `#ecf0f1` page bg, Poppins sans-serif, dark-pill
  section titles, `rgba(0,0,0,0.4)` hero overlays, square corners only.

## Tasks (implementation order)

1. Scaffold `apps/lede` (copy simplest existing app; package
   `@free-react-templates/lede`; `vite.config.ts` with `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json).
3. `index.css` `@theme` tokens: `--color-navy: #04091e`,
   `--color-accent: #f6214b`, `--color-heading: #222222`,
   `--color-muted: #777777`, `--color-page: #ecf0f1`,
   `--color-fb: #4c63a2`, `--color-tw: #69c9ff`, `--color-yt: #c41713`,
   `--color-rss: #f17300`, `--font-sans: "Poppins"`. Load Poppins
   (300/400/500/600) via Google Fonts in `index.html`.
4. Tests first (TDD, 100% coverage), then components:
   - `TopBar` — dark navy strip: 4 social icons (inline SVG) left; phone +
     email right.
   - `LogoStrip` — white row: "Lede" wordmark left, ad placeholder right.
   - `Navbar` — dark navy bar: Home (active) / Archive / Category / Post
     Types (dropdown: Standard Post, Image Post, Gallery Post, Video Post,
     Audio Post) / About / Contact + search control; mobile toggler.
   - `TopPosts` — hero: 1 large feature post (left ~2/3, overlay
     rgba(0,0,0,0.4), white tag pill + h3 + meta absolute bottom-left) + 2
     stacked smaller posts (right ~1/3, h4 + tag + meta).
   - `NewsTicker` — white strip: "Breaking News:" span (accent) + headline
     link.
   - `LatestNews` — dark-pill title "Latest News" + 4 rows (image
     col-lg-5 / text col-lg-7: tag pill, h4 (hover → accent), meta #777,
     excerpt).
   - `AdWidget` — full-width banner placeholder (mt-30 mb-30).
   - `PopularPosts` — dark-pill title "Popular Posts" + 1 full-width feature
     post (h3 overlay bottom-left) + 2-up grid (image, tag, h4, meta,
     excerpt).
   - `RelevantStories` — dark-pill title "Relavent Stories" + 3 rows (same
     row layout as LatestNews).
   - `Sidebar` — widgets: Editor's Pick (feature img + tag + h4 + meta +
     excerpt + 3 mini thumb rows h6+meta), Ads (banner), Newsletter (intro,
     email input + square accent Subscribe button, success on submit,
     "You can unsubscribe us at any time" line), Most Popular (4 thumb rows,
     h6 hover → accent), Social Networks (4 colored rows: fb #4c63a2 / tw
     #69c9ff / yt #c41713 / rss #f17300, "983 Likes"-style count + follow
     link).
   - `Footer` — navy bg: 5 columns Top Products (3) / Quick Links (2) /
     Features (2) / Resources (2) / Instagram Feed (3, 8 square thumbs in a
     4×2 grid); bottom row: copyright (Lede name, no Colorlib credit) +
     4 social icons.
5. `App.tsx` composes: TopBar → LogoStrip → Navbar → TopPosts →
   NewsTicker → LatestNews → AdWidget → PopularPosts → RelevantStories →
   Sidebar → Footer (main column + sidebar side by side in latest-post
   area).
6. `scripts/verify-app.sh lede` until green; commit conventional; PR to
   main, merge immediately.

## Fidelity notes

- Square corners everywhere (border-radius: 0) — tags, buttons, inputs,
  pills. No rounded UI.
- Category tag pill: `#f6214b` bg, white 300 text, `padding: 4px 30px`,
  inline-block. Section-title pill: `#04091e` bg, white 14px 600,
  `padding: 10px 25px` (sidebar `12px 20px`).
- Subscribe button `.bbtns`: `#f6214b` bg, white 12px 500, `padding: 8px
20px`. Input: square, borderless/`form-control` style.
- Hero overlays: `rgba(0,0,0,0.4)`; details absolute `bottom: 30px; left:
40px` desktop (tighter on mobile: ~10/15px). Titles white on images,
  `#222222` on white.
- Nav links: white 12px 400 uppercase, `padding: 0 8px`; dropdown white bg
  with soft shadow. Nav bar `#04091e`, `padding: 15px 20px`.
- Rows: `align-items-center`, image col ~5/12, text col ~7/12; h4 title
  max-width ~300px, hover → `#f6214b`; meta `#777777` 12px 300.
- Footer: bg `#04091e`, `padding: 120px 0`; widget h4 white; links #777
  hover white; instafeed thumbs 25% width each (4 per row).
- Seeded picsum placeholders: `lede-1` (hero feature ~900×600), `lede-2/3`
  (right stacked ~500×400), `lede-4..7` (latest rows ~400×300),
  `lede-8..12` (popular/relevant), `lede-13..15` (sidebar), `lede-16..23`
  (instafeed squares).
- lucide-react has NO brand icons — use inline SVGs for social glyphs
  (facebook/twitter/dribbble/behance/youtube/rss).
- All copy may be paraphrased; keep the same content kinds (tag / title /
  meta per card, widget lists, footer columns). Section title typo
  "Relavent Stories" is intentional — matches the source.
