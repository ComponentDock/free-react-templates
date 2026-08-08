# Scribe (ColorLib Moose) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-scribe`.

## Design notes (replication findings)

- **Original:** ColorLib "Moose" — personal blog / digital news magazine
  template (source: https://colorlib.com/wp/template/moose/). TEMPLATES.md
  has ONE copy of this item (line 274 — mark it `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/moose/ (HTTP
  200, 22 KB, title "Moose - Free Bootstrap 4 Template by Colorlib").
  Stylesheet `css/style.css` (59.9 KB) on Bootstrap 4 base; font-awesome
  4.7 + flaticon icon fonts; Poppins via Cloudflare @font-face in the head
  (no Google Fonts link — use Google Fonts `<link>` in the recreation);
  owl.carousel loaded but UNUSED on this page (drop it).
- **Screenshot:** `moose-colorlib-template.jpg` — verified live in a
  browser (vision): minimal white blog; black navbar ("moose" logo left,
  Home/Articles/About/Contact right); hero = giant outlined "Moose"
  wordmark + two-column intro (greeting + paragraph left, circular-avatar
  author card right); full-width alternating article rows (image
  left/right flip), uppercase meta + bold headline + author chip;
  light-grey newsletter band with square subscribe form; very dark footer
  (logo + blurb + round social icons, Info links, "Have a Questions?"
  contact block) + black copyright bar.
- **Visual design:** minimal editorial blog — white page bg, dark slate
  `#313b44` text/headlines, dusty blue `#588da8` accent, article rows
  alternate white / dark slate (text inverts to white), black navbar +
  bottom bar, `#141b25` footer, `#f8f9fa` newsletter band, 5px-radius
  subscribe controls, 400px article images, Poppins display headings.

## Design tokens (from css/style.css)

| Token              | Value                                                                                                                                                 | Where                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accent blue        | `#588da8`                                                                                                                                             | `a` links, active nav link, footer social circles (40px, radius 50%), block-23 icons, subscribe input text, newsletter h2 span bg                     |
| Ink                | `#313b44`                                                                                                                                             | body text (17px, lh 1.8), hero wordmark + outline stroke, blog h2 links, author h3, darken rows bg, subscribe button bg + input border, newsletter h2 |
| Black              | `#000000`                                                                                                                                             | navbar bg, footer bottom bar (`bg-black`)                                                                                                             |
| Footer bg          | `#141b25`; headings `#fff` (20px/600); links `rgba(255,255,255,0.7)`                                                                                  | `.ftco-footer`, padding 6em 0 0, text `rgba(255,255,255,0.9)`                                                                                         |
| Light band         | `#f8f9fa` (`bg-light`)                                                                                                                                | newsletter section (`ftco-intro`)                                                                                                                     |
| Headings font      | **Poppins**                                                                                                                                           | `h1–h5` font-family "Poppins", Arial, sans-serif; body = Bootstrap system stack                                                                       |
| Hero wordmark      | 16vw (20vw mobile), weight 900, `#313b44`, lh 1.2; inner span outlined (`-webkit-text-stroke: 1px #313b44`, fill transparent)                         | `.slider-text h1` (the hollow "oo")                                                                                                                   |
| Article rows       | 50/50 image/text; image 400px (`img-blog`); text padding `p-md-5 py-5 px-4`; h2 45px weight 800 lh 1.4; meta small grey (fa icons)                    | `.blog-wrap` ×7, alternating `.bg-darken` (`#313b44`); dark rows flip image side (`order-md-last`), text `rgba(255,255,255,0.5)`, h2/author white     |
| Author chip        | 70px circular avatar; h3/h4 name 18px/700 `#313b44` (white on dark)                                                                                   | hero author card + article rows                                                                                                                       |
| Subscribe controls | 50px tall; input radius 5px 0 0 5px (transparent bg, 1px `#313b44` border, `#588da8` text); submit radius 0 5px 5px 0, bg `#313b44`, white text, 16px | `.subscribe-form`                                                                                                                                     |
| Section spacing    | footer padding 6em 0 0; bottom bar `py-5` black                                                                                                       | vertical rhythm                                                                                                                                       |
| Loader             | `#F96D00` spinner on `#eeeeee` (pre-hydration only)                                                                                                   | `#ftco-loader` — decorative, drop in React app                                                                                                        |

## Tasks (implementation order)

1. Scaffold `apps/scribe` (copy simplest existing app; package
   `@free-react-templates/scribe`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/scribe" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-accent: #588da8`,
   `--color-ink: #313b44`, `--color-black: #000000`,
   `--color-footer: #141b25`, `--color-soft: #f8f9fa`,
   `--font-display: Poppins, sans-serif`. Add Poppins Google Fonts
   `<link>` to `index.html`.
4. `Navbar.tsx` — black bg, "Scribe" logo white, links Home/Articles/
   About/Contact right, active Home in accent; mobile collapse (use
   lucide `Menu`/`X` toggles, aria-expanded).
5. `Hero.tsx` — giant "Scribe" wordmark (Tailwind `text-[16vw]`,
   `font-black`, ink color; the two "o"s as outline text via
   `-webkit-text-stroke` or a `<span>` with
   `text-transparent [-webkit-text-stroke:1px_#313b44]`), then 2-col
   row: greeting h2 + paragraph left (col-md-8), author card right
   (col-md-4): 70px rounded-full avatar (picsum), name, bio.
6. `Articles.tsx` — SEVEN alternating rows; data array with image seed,
   meta (date "Sept. 27, 2020", "Admin", "3 comments"), headline (same
   "Turning a digital brand into a real world experience" in source —
   paraphrase to vary per row is allowed, keep the kind), author chip
   (name + role; cycle 4 authors). Row: grid-cols-2 on md, image 400px
   object-cover; even rows `order-last` on image + `bg-ink` text-white;
   author chip = small avatar + h4 + span.
7. `Newsletter.tsx` — `bg-soft` band, centered h2 "Subscribe to our
   Newsletter", inline form: email input (border ink, accent text, radius
   `rounded-l-md`) + submit button (ink bg, white, `rounded-r-md`), zod
   validation, success message on valid submit.
8. `Footer.tsx` — `bg-footer` (#141b25): col 1 logo + blurb + 3 circular
   accent social buttons (Twitter/Facebook/Instagram inline SVG);
   col 2 "Info" links (Blog, Career, Team) with chevron-right icons;
   col 3 "Have a Questions?" address/phone/email with accent icons;
   black bottom bar: "Copyright © <year> All rights reserved | made with
   ♥ by Colorlib" (credit kept per CC BY 3.0).
9. `App.tsx` — compose Navbar + Hero + Articles + Newsletter + Footer;
   document title "Scribe — Blog Template".
10. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
11. Run `scripts/verify-app.sh scribe` (typecheck + lint + coverage
    tests + build) until green.
12. Update TEMPLATES.md line 274 `[ ]` → `[x]` (ONLY copy) with surge
    URL + homepage after deploy; `npm run readme:status`; commit
    `feat: Scribe — blog template (ColorLib Moose)`; PR → main → merge
    immediately.

## Fidelity gotchas

- The hollow "o"s in the wordmark are the template's signature — do NOT
  render them as solid letters.
- Dark article rows: image on the RIGHT (source uses `order-md-last` on
  the image col for dark rows); text flips to white/50% white.
- Image_4.jpg is skipped in the source (rows use images 1,2,3,5,6,7,8) —
  keep 7 rows.
- Subscribe input has NO bg (transparent) over `bg-light`; the 5px
  radius split (left input / right button) must match.
- Font Awesome is used in source — swap to lucide-react equivalents
  (calendar, user, message-circle, chevron-right, map-pin, phone, mail)
  and inline SVGs for brand socials.
