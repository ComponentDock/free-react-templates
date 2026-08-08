# Bullion (ColorLib Newsbit) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bullion`.

## Design notes (replication findings)

- **Original:** ColorLib "Newsbit" — bitcoin / cryptocurrency news
  magazine template (source: https://colorlib.com/wp/template/newsbit/).
  TEMPLATES.md has TWO copies of this item (lines 275 and 2206 — mark
  BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/newsbit/
  (HTTP 200, 25 KB, title "Newsbit"). Stylesheet `common/styles.css`
  (77.8 KB) on a custom utility-class framework (w-2-3, h-600x, abs-blr,
  ptb-50…) + bootstrap.css + fonts/ionicons.css (icon font). Font:
  'Encode Sans Expanded' via Cloudflare cf-fonts @font-face in the head
  (use Google Fonts `<link>` in the recreation). jQuery + Bootstrap JS
  only for menu collapse / search toggle — no carousels.
- **Screenshot:** `newsbit-free-template.jpg` — verified live in a
  browser (vision, 1200×946): dark charcoal utility top bar (About /
  Advertise / Submit Press Release / Contact left, social icons right);
  white header with bold all-caps logo left and uppercase nav right
  (NEWS, GUIDES & ANALYTICS, EVENTS, EXPLAINED, ICON CLAENDER); 600px
  featured mosaic (large story left 2/3 + two stacked right, bottom row
  of three, all over images with bottom-up black gradient and white
  captions with accent author + bolt/comment counts); two-column body:
  left RECENT NEWS (image card + 4 mini posts) → CRYPTO MINING NEWS
  (5 cards) → yellow-bordered VIEW MORE button; right sidebar: solid
  yellow price ticker (1 BTC = $13,2323…), POPULAR POSTS mini list,
  dark-overlay "Available for mobile & desktop / Download for free"
  banner, NEWSLETTER form (yellow-bordered input + yellow paper-plane
  button); very dark `#191919` footer (white logo, blurb, copyright, two
  MOST POPULAR columns, thin divider, bottom bar with Terms/Privacy
  links + social icons).
- **Visual design:** crypto-news magazine — white page, near-black
  `#111` text, golden-yellow `#F9B500` accent (author names, view/chat
  icons, ticker bg, button borders/fills, newsletter button, footer
  headings), `#191919` top bar + footer, `#888` meta, `#aaa` utility
  links, uppercase bold section titles with 1px `#ccc` underline, 2px
  radius 45px bordered buttons, Encode Sans Expanded display font.

## Design tokens (from common/styles.css)

| Token           | Value                                                                                                                                                                                                          | Where                                                                                                                                                               |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accent yellow   | `#F9B500`                                                                                                                                                                                                      | `.color-primary` (byline, bolt/chat icons, footer h5, download link), `.bg-primary` (ticker bg), button border/text + hover bg, newsletter input border + button bg |
| Dark charcoal   | `#191919`                                                                                                                                                                                                      | `.bg-191` top utility bar + footer bg; footer text `#ccc`, footer headings accent                                                                                   |
| Ink             | `#111`                                                                                                                                                                                                         | `.color-black` bylines on white; `.bg-layer-7` banner overlay (opacity .7); text on accent fills                                                                    |
| Black           | `#000`                                                                                                                                                                                                         | hero gradient `linear-gradient(to top, #000 0%, rgba(0,0,0,.4) 100%)` (opacity .6); newsletter button hover bg                                                      |
| Meta grey       | `#888`                                                                                                                                                                                                         | `.color-lite-black` dates/byline rows                                                                                                                               |
| Ash grey        | `#aaa`                                                                                                                                                                                                         | `.color-ash` top/bottom bar links, copyright                                                                                                                        |
| Border grey     | `#ccc` / `#ddd` / `#eee`                                                                                                                                                                                       | p-title underline + brdr-ash-1 borders / dropdown separators / mobile menu separators                                                                               |
| Font            | **'Encode Sans Expanded', sans-serif**                                                                                                                                                                         | body 14px/400; h3 1.7em, h4 1.3em, h5 1.1em, h6 .85em (headlines bold)                                                                                              |
| Section titles  | bold uppercase; pb 20px; mb 40px; 1px `#ccc` underline (`:after`)                                                                                                                                              | `.p-title`                                                                                                                                                          |
| Bordered button | 45px tall, lh 43px, 1px solid `#F9B500`, radius 2px, accent text; hover bg `#F9B500`, text `#000`                                                                                                              | `.btn-brdr-primary` ("VIEW MORE CRYPTO MINING EVENTS")                                                                                                              |
| Newsletter form | input 45px, 1px `#F9B500` border, padding 0 65px 0 20px; button 45×45 absolute right, bg `#F9B500`, black icon 1.3em; hover bg `#000` icon `#fff`                                                              | `.nwsltr-primary-1`                                                                                                                                                 |
| Hero mosaic     | container 600px; top row 2/3 height (big story 2/3 width + 2-stack 1/3), bottom row 1/3 (3 stories); captions abs bottom, white, p-20; gradient overlay opacity .6                                             | `.h-600x`, `.h-2-3`, `.h-1-3`, `.w-2-3`, `.w-1-3`, `.bg-grad-layer-6`                                                                                               |
| Ticker list     | solid `#F9B500` bg, 15px row padding, 1px white bottom borders, centered bold                                                                                                                                  | `.list-block.list-li-ptb-15.list-btm-border-white.bg-primary.text-center`                                                                                           |
| Mini posts      | 100×100 thumbnail (`wh-100x`) + `ml-120` text block, `h5` bold + `h6` byline/date                                                                                                                              | RECENT NEWS side column, POPULAR POSTS                                                                                                                              |
| Spacing         | `mtb-50` sidebar blocks, `mb-20` mini posts, `pt-20` card headlines, `list-li-mr-20` meta gaps, footer `pt-50 pb-20`                                                                                           | vertical rhythm                                                                                                                                                     |
| Icons           | ionicons (source) → lucide: search, close/x, menu, chevron-down, zap (views), message-circle (comments), send (paperplane), heart; brand socials (facebook, twitter, google, instagram, bitcoin) as inline SVG | header, meta rows, newsletter, socials                                                                                                                              |

## Tasks (implementation order)

1. Scaffold `apps/bullion` (copy simplest existing app; package
   `@free-react-templates/bullion`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/bullion" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-accent: #F9B500`,
   `--color-dark: #191919`, `--color-ink: #111111`,
   `--color-meta: #888888`, `--color-ash: #aaaaaa`,
   `--font-display: 'Encode Sans Expanded', sans-serif`. Add Encode Sans
   Expanded Google Fonts `<link>` to `index.html`.
4. `TopBar.tsx` — `bg-dark` (#191919) strip, `text-ash` .9em: links
   About / Advertise / Submit Press Release / Contact left; 5 social
   icon buttons right (inline SVG brand icons).
5. `Header.tsx` — white bar, container: wordmark "Bullion" left (bold,
   ink, all-caps style); search toggle button (lucide `Search`/`X`)
   expanding a search form (input placeholder "Search here" + submit);
   nav right: uppercase links NEWS / GUIDES & ANALYTICS (dropdown with
   2 items, chevron-down) / EVENTS / EXPLAINED / CONTACT (fix source
   typo "ICON CLAENDER"); mobile: hamburger (lucide `Menu`) + collapsible
   stacked menu (aria-expanded, `#eee` separators).
6. `HeroMosaic.tsx` — 600px grid: top row 2/3 height — big story (2/3
   width, picsum ~1200×800, gradient overlay `bg-gradient-to-t from-black/60`,
   caption: bold h3 + meta: byline accent, date, zap + count,
   message-circle + count) + two stacked stories (1/3 width); bottom row
   1/3 height — three stories; all captions absolute bottom-left, white;
   mobile: stack full-width with fixed heights. One `articles` data
   array drives all six stories (headline, seed, author, date, views,
   comments).
7. `RecentNews.tsx` — p-title "RECENT NEWS" (uppercase bold, pb-5,
   1px #ccc underline) + row: left col — 600×450 card (image, h4 bold
   headline, meta row, paragraph); right col — 4 mini posts (100×100
   thumb + ml-28 text: h5 bold + byline/date).
8. `CryptoMining.tsx` — p-title "CRYPTO MINING NEWS" + grid of FIVE
   600×450 cards (h4 bold + meta with mb-8); then
   `<ButtonLink>`-style bordered anchor "VIEW MORE CRYPTO MINING
   EVENTS" (45px, border-accent, radius 2px, accent text, hover
   bg-accent text-black) — use packages/ui Button/ButtonLink + cn.
9. `Sidebar.tsx` — (a) ticker: `bg-accent` list, 6 rows "1 BTC =
   $13,2323" etc., centered bold, white bottom borders; (b) POPULAR
   POSTS: 4 mini posts; (c) banner: image + `bg-black/70` overlay,
   centered "Available for mobile & desktop" + accent underline link
   "Download for free"; (d) NEWSLETTER: p-title + blurb + form (input
   45px border-accent, button 45×45 bg-accent send icon, hover bg-ink
   text-white), zod validation, success message on valid submit.
10. `Footer.tsx` — `bg-dark` (#191919), text #ccc: col 1 white wordmark
    "Bullion" + blurb + copyright line (credit "made with ♥ by
    Colorlib" kept per CC BY 3.0); col 2 + col 3 "MOST POPULAR"
    (accent h5 + white bold links + dates, `border-white/20` dividers);
    thin divider; bottom bar (ash .9em): Terms & Conditions / Privacy
    policy / Jobs advertising / Contact us left, social icons right.
    Decorative map watermark: optional faint SVG, may be dropped.
11. `App.tsx` — compose TopBar + Header + HeroMosaic + main (RecentNews
    - CryptoMining + Sidebar) + Footer; document title "Bullion — Crypto
      News Template".
12. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
13. Run `scripts/verify-app.sh bullion` (typecheck + lint + coverage
    tests + build) until green.
14. Update TEMPLATES.md lines 275 AND 2206 `[ ]` → `[x]` (BOTH copies)
    with surge URL + homepage after deploy; `npm run readme:status`;
    commit `feat: Bullion — crypto news template (ColorLib Newsbit)`;
    PR → main → merge immediately.

## Fidelity gotchas

- The price-ticker list bg is `#F9B500` with **white** row separators
  and centered bold text — solid accent block, not a bordered widget.
- Hero captions sit at the **bottom** of each story over the black
  gradient; byline author is accent-colored, view/comment icons accent.
- Section titles are the `p-title` pattern: bold uppercase, generous
  bottom padding, 1px `#ccc` underline — reproduce in all four places
  (RECENT NEWS, CRYPTO MINING NEWS, POPULAR POSTS, NEWSLETTER).
- Buttons are 45px with **2px radius** and 1px accent border — NOT the
  default rounded-full; hover inverts to accent bg + black text.
- Newsletter button is an icon-only 45×45 square with paper-plane
  glyph; input has no rounded corners and a 1px accent border.
- Nav labels are UPPERCASE in the source; "ICON CLAENDER" is a source
  typo — rename to a sensible item (e.g. "CONTACT").
- ionicons is a font in the source — swap to lucide-react (search, x,
  menu, chevron-down, zap, message-circle, send, heart); brand socials
  must be inline SVG (lucide-react removed brand glyphs).
- Header logo is a black PNG in the source (white PNG in footer) —
  recreate as text wordmarks; do NOT try to copy the image assets.
- Two TEMPLATES.md copies (275, 2206): BOTH must be marked `[x]`.
