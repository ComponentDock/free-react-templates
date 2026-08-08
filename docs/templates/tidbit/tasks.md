# Tidbit (ColorLib Miniblog) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tidbit`.

## Design notes (replication findings)

- **Original:** ColorLib "Miniblog" — blog/magazine template
  (source: https://colorlib.com/wp/template/miniblog/). TEMPLATES.md has
  THREE copies of this item (lines 273, 454, 1100 — mark ALL THREE `[x]`
  when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/miniblog/ (HTTP
  200, 22.8 KB, title "Mini Blog"). Stylesheet `css/style.css` (24.2 KB) on
  Bootstrap 4 base; Google Fonts loads Muli (300/400/700) + Playfair Display
  (400/700/900) — Playfair is loaded but unreferenced in any CSS (drop it or
  use for the logo). No carousel on the homepage.
- **Screenshot:** `miniblog-free-template.jpg` — also verified live in a
  browser (vision): white editorial blog; logo left + bold nav right; hero =
  asymmetric 3-col photo grid with dark bottom gradient, white titles/dates,
  taller middle card with colored category tags; "Recent Posts" 3×3 cards
  (rounded images, tiny uppercase colored pills, black headlines, grey
  byline, "Read More" blue text link); circular pagination (active = solid
  blue circle); second asymmetric photo grid on light-grey band; centered
  newsletter form with square blue Subscribe button; dark charcoal footer
  with About Us + link columns + socials + copyright.
- **Visual design:** modern editorial blog — white page bg, ink `#000`
  headlines, blue `#2f89fc` interactive accent, `#f8f9fa` light bands,
  square buttons (radius 0), rounded images (4px), 40px circular pagination,
  dark `#333333` footer.

## Design tokens (from css/style.css)

| Token           | Value                                                                                              | Where                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Accent blue     | `#2f89fc`                                                                                          | `a` links, active nav link + hover, active pagination circle bg, bg-primary pill |
| Accent hover    | `#046df4`                                                                                          | `a:hover`                                                                        |
| Ink             | `#000`                                                                                             | headings, nav links (700), `.entry2 h2 a`, logo                                  |
| Body text       | Bootstrap gray `#808080`, weight 300, 1rem, lh 1.7                                                 | paragraphs                                                                       |
| Meta text       | `#b3b3b3`, 13px                                                                                    | `.post-meta` (byline "By Carrol Atkinson — July 19, 2019")                       |
| Light bands     | `#f8f9fa` (`bg-light`)                                                                             | hero section, retro section (newsletter is white)                                |
| Footer          | bg `#333333`; headings `#fff`; body `#737373`; links `#999999`→white                               | `.site-footer`, `.footer-heading` 16px                                           |
| Buttons         | radius **0** (square); Bootstrap `.btn-primary` blue `#007bff`, white text                         | subscribe button ("Subscribe")                                                   |
| Category pills  | padding 2px 10px, radius 4px, letter-spacing .2em, weight 700, size .6rem, white text              | `.post-category` on `bg-primary/bg-danger/bg-secondary/...`                      |
| Images          | `.rounded` (4px); `.entry2 img` mb 30px                                                            | post cards                                                                       |
| Pagination      | 40×40 circles, radius 50%; active `#2f89fc` bg white text; inactive light-grey circles             | `.custom-pagination`                                                             |
| Hero overlay    | `linear-gradient(to bottom, transparent 0%, transparent 18%, rgba(0,0,0,0.8) 99%)`                 | `.gradient:before` (hero + retro cards)                                          |
| Hero text       | absolute bottom, padding 20px, max-width 350px; h2 18px white lh 1.5; date rgba(255,255,255,0.5)   | `.retro-layout-2 .text`                                                          |
| Section spacing | `.site-section` 2.5em/5em; `.site-footer` 4em/5em                                                  | vertical rhythm                                                                  |
| Header          | white bg, z-index 1999; logo 1.5rem; nav li padding 10px; links 700 `#000`, hover/active `#2f89fc` | `.site-navbar`                                                                   |
| Fonts           | **Muli** (body + headings)                                                                         | Google Fonts (Playfair Display loaded but unused)                                |

## Tasks (implementation order)

1. Scaffold `apps/tidbit` (copy simplest existing app; package
   `@free-react-templates/tidbit`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json).
3. `index.css` `@theme` tokens: `--color-accent: #2f89fc`,
   `--color-accent-hover: #046df4`, `--color-ink: #000000`,
   `--color-muted: #808080`, `--color-meta: #b3b3b3`, `--color-soft:
#f8f9fa`, `--color-footer: #333333`, `--font-sans: "Muli"`. Load Muli
   (300/400/700) via Google Fonts in `index.html` (Playfair optional).
4. Tests first (TDD, 100% coverage), then components:
   - `Header` — white bar: logo "Tidbit" (1.5rem) left; nav links Home
     (active, accent) / Politics / Tech / Entertainment / Travel / Sports
     (700 weight, ink, hover accent) right; search icon toggling a
     full-width white search form; hamburger + off-canvas mobile menu
     (same links, dark `rgba(0,0,0,0.6)` overlay, close button).
   - `HeroGrid` — `bg-light` band, `retro-layout-2`: 3 columns (left: 2
     stacked, middle: 1 tall with category pills, right: 2 stacked). Cards
     = image (object-cover) + bottom gradient + white h2 (18px) + date
     (50% white). Middle card pills: Travel (danger red) + Food (primary
     blue).
   - `RecentPosts` — "Recent Posts" heading + 3×3 `entry2` cards: rounded
     image, category pill (bg-secondary etc.), h2 (24px/700) link, post-meta
     (avatar circle + "By <Author> — <date>", 13px #b3b3b3), excerpt,
     "Read More" link (accent).
   - `Pagination` — circular links 1 2 3 4 … 15 (40px circles), active =
     accent bg white text.
   - `RetroLayout` — `bg-light` band: right tall Travel card (order-md-2),
     left Nature card, two-col row (Sports, Lifestyle); 300px images,
     gradient overlays, text-sm variants, date "February 12, 2019".
   - `Newsletter` — centered `subscribe-1`: h2 "Subscribe to our
     newsletter" (20px), description, `d-flex` form: email input
     (placeholder "Enter your email address") + square Subscribe button
     (accent blue bg, white text), validation + success states.
   - `Footer` — `#333333`: About Us col (text #737373), two link columns
     (About Us/Advertise/Careers/Subscribes + Travel/Lifestyle/Sports/
     Nature, links #999999→white), Connect With Us + social icons
     (Facebook, Twitter, Instagram, RSS, Mail), copyright line "Copyright ©
     <year> All rights reserved | made with ♥ by Colorlib".
5. Section order in `App.tsx`: Header → HeroGrid → RecentPosts →
   Pagination → RetroLayout → Newsletter → Footer.
6. Placeholder images: `https://picsum.photos/seed/tidbit-<n>/<w>/<h>`
   (e.g. `tidbit-1/600/400` hero cards, `tidbit-10/600/400` retro, avatars
   `tidbit-p1/50/50`). Hero/retro cards: `img` + `object-cover` + gradient
   overlay div (or bg-image + ::before) — match the bottom-fade look.
7. Verify: `scripts/verify-app.sh tidbit` (typecheck + lint + 100% coverage
   tests + build). PR description must list source template, preview URL,
   tokens, renames, and that picsum/lucide replace assets.
8. After merge: mark ALL THREE Miniblog lines in TEMPLATES.md `[x]`
   (273, 454, 1100) — surge URL + `npm run readme:status`.
