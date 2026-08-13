# Patisserie (ColorLib Cakeshop) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-patisserie`.

## Design notes (replication findings)

- **Original:** ColorLib "Cakeshop" — free responsive Bootstrap bakery/cake
  shop website template (source: https://colorlib.com/wp/template/cakeshop/).
  TEMPLATES.md has TWO copies (line 555 and line 1775 — mark BOTH `[x]` when
  done). Both rows use the correct screenshot
  `cakeshop-colorlib-template.jpg`.
- **Demo DOM analyzed:** REACHABLE — `https://preview.colorlib.com/theme/cakeshop/`
  returns HTTP 200 (curl, 2026-08-13, 29.2 KB HTML). Title: "Cake |
  Template". This is a FULL-fidelity reference: section order, copy, buttons
  all taken from the live DOM. Token source: `assets/css/style.css` (69.5
  KB). NOTE: the preview is the "Schilers" family theme — the About heading
  literally reads "This is Schilers. Awesome Food Theme. Purchase it and eat
  Burgers." Keep the copy KIND (tagline + lorem), but the recreation brand is
  Patisserie, never "Schilers"/"Cakeshop".
- **Visual design (browser vision confirmed on the screenshot):** DARK
  bakery theme. Near-black `#0A0A0A` page background everywhere; muted gold
  `#E5BF4A` accent; white text. Thin top bar (social icons left, "Call Us"
  right), centered gold script logo, centered uppercase white nav. Hero =
  darkened cupcake photo, thin white headline, square gold "ORDER NOW" (black
  text, sharp corners). Screenshot cuts off at the About section — the rest
  (Latest Cakes carousel, video band, testimonials, blog, features,
  Instagram, footer) comes from the live DOM. Demo brands itself "Cakeshop"
  → recreation: **Patisserie**.

## Design tokens (from the live stylesheet)

| Token            | Value                                                                                                                                                                                                                    | Where                                                                                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand gold       | `#E5BF4A`                                                                                                                                                                                                                | `.btn_1` bg, section-tittle underline bar + rotated labels, gold caption h2, product price + "Add to cart" hover bar, video icon, star ratings, blog date badge, footer widget h4, nav/footer hover, browse-btn underline |
| Page dark        | `#0A0A0A` (`.body-bg`); sticky header bg `#0A0A0A`                                                                                                                                                                       | whole page, `.header-sticky.sticky-bar`                                                                                                                                                                                   |
| Dark dividers    | `rgba(255,255,255,0.2)`                                                                                                                                                                                                  | testimonial card top border, footer-menu bottom border, footer-border top                                                                                                                                                 |
| Headings (dark)  | `#DFDFDF` (`.section-tittle h2`, 40px)                                                                                                                                                                                   | section headings on the dark page                                                                                                                                                                                         |
| Headings (light) | `#2A2A2A` (base h1–h6 color), caption/body text `#545454` (Jost 16px lh 1.4)                                                                                                                                             | dropdown items, hero badge text, body copy                                                                                                                                                                                |
| Light surfaces   | `#F2F4F8` (slider-area bg behind hero photo), `#fff` (hero badge pill, video circle, dropdown)                                                                                                                           | hero + video + dropdown                                                                                                                                                                                                   |
| Fonts            | Headings **"Poiret One"** (cursive); body/nav **"Jost"** (sans-serif, 200–800) — Google Fonts @import in the original; use `<link>` in `index.html`                                                                      | h1–h6 / `.btn` use Poiret One; everything else Jost                                                                                                                                                                       |
| Buttons          | SQUARE (radius 0). `.btn_1`: `#E5BF4A` bg, 1px solid `#2A2A2A` border, `#0A0A0A` uppercase 15px text, padding 22px 41px; hover → transparent bg + gold border + gold text                                                | `.btn_1`, `.hero-btn` (padding 35px 55px), `.btn_02` (transparent, white border, for dark contexts)                                                                                                                       |
| Browse link      | `.browse-btn`: gold uppercase 14px/300 + 2px gold underline (`::before` width 100%, bottom -11px); hover letter-spacing 1px                                                                                              | "Learn More" / blog read links                                                                                                                                                                                            |
| Section title    | `.section-tittle h2` 40px Poiret One `#DFDFDF`; `.line::before` = 100px × 2px `#E5BF4A` bar centered 29px below; `.section-tittle > span` = ROTATED -90deg gold uppercase 14px label (letter-spacing .3em) at left -36px | every section heading block                                                                                                                                                                                               |
| Hero             | 700px cover photo (`h1_hero1.jpg` — darkened cupcake photo); h1 70px Poiret One white lh 1.2; p white 22px/300; badge = white pill `#2A2A2A` 14px radius 17px padding 6px 17px                                           | `.slider-height`, `.slider-bg1`, `.hero-caption`                                                                                                                                                                          |
| Video icon       | 100px white circle, gold play icon; pulse ring `border: 100px solid rgba(229,191,74,0.2)`; hover → gold bg + white icon                                                                                                  | `.video-icon a`                                                                                                                                                                                                           |
| Product card     | hover `.img-cap` bar: `#E5BF4A` bg, `#0A0A0A` 16px "Add to cart", padding 14px 0; price `$98.00` gold 20px/300                                                                                                           | `.properties-img .img-cap span`, `footer .price span`                                                                                                                                                                     |
| Testimonials     | 5 gold stars (fontawesome → lucide Star); card border-top `rgba(255,255,255,0.2)`                                                                                                                                        | `.single-cat`, `.rating`                                                                                                                                                                                                  |
| Blog date badge  | `#E5BF4A` bg, white text, radius 5px, overhangs image bottom edge (-10px)                                                                                                                                                | `.blog_item_date`                                                                                                                                                                                                         |
| Footer           | `footer-tittle` h4 gold 24px Poiret One; links white 16px/300 underline-on-hover; copy 14px white, gold link/i                                                                                                           | `.footer-area`, `.footer-tittle`, `.footer-copy-right`                                                                                                                                                                    |
| Section rhythm   | `section-padding` 120px 0 (100/70 responsive), `top-padding` 100px, `footer-padding` 99px top                                                                                                                            | —                                                                                                                                                                                                                         |

## Structure (1:1 section order)

1. Header — top bar: social icons (left, white 16px, gold + rotateY flip on
   hover) + "Call Us: +10 783 346 4378" (right); below: centered gold
   wordmark "Patisserie"; centered uppercase nav (white 15px Jost, padding
   32px 7px, gold underline on hover): Home / Cakes / About / Blog
   (dropdown: Blog, Blog Details, Elements — white 170px, `#2A2A2A` items,
   gold hover) / Contact; hamburger on mobile (slide-down menu). Sticky →
   bg `#0A0A0A`.
2. Hero — 700px cover photo (picsum `patisserie-hero`, darkened/cupcake-ish,
   see pitfalls) + white pill badge + h1 "Healthy Made Delicious Cake"
   (70px Poiret One white) + white 22px subcopy + square gold "Order Now"
   (padding 35px 55px).
3. About (`top-padding`) — centered section-tittle "This is Schilers..."
   headline (paraphrase to a bakery tagline) + gold underline bar; split
   row: caption (gold 24px h2 + 2 lorem paragraphs) left, round cake photo
   (`patisserie-about`) right.
4. Latest Cakes — NO heading; carousel of 4 product cards: photo, hover gold
   "Add to cart" bar, cake-name title, gold "$98.00" price; side arrows.
5. Video — full-width cover photo (`patisserie-video`) + centered 100px
   white circle gold play icon + gold pulse ring (decorative, no video).
6. Testimonials — "Food Lover's Say" heading; 3 cards: 5 gold stars, quote,
   avatar (`patisserie-person`), author "Wilma Mumduya" (same on all).
7. Blog — "Our Blogs" (left) + gold square "More Blog" button (right) in one
   row; 2 cards: photo, gold date badge overhanging image bottom, h3 title
   (paraphrase the tart title), meta, gold read link.
8. Features — 2 alternating rows (image right / image left): `features-img`
   - caption (h3, paragraph, gold "Learn More" underline link).
9. Instagram — "Follow us on Instagram" + gold "@patisserie" handle; 4-col
   grid of 4 square photos (`patisserie-insta-1..4`).
10. Footer — centered menu links (Home / Cakes / About / blog / Contact)
    - translucent divider; column 1: about blurb + Instagram/Facebook/Twitter
      icons (gold hover); column 2: gold "Location" + "4736 Poe Lane, HOT
      SPRINGS, Montana-59845"; column 3: gold "Contact" + "913-473-7000" +
      email; bottom bar: "Copyright © <year> All rights reserved | Made with
      Component Dock" with the mandatory link (https://www.componentdock.com/).

## Tasks (implementation order)

1. Scaffold `apps/patisserie` (copy the simplest existing app; package
   `@free-react-templates/patisserie`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/patisserie" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-brand: #E5BF4A`,
   `--color-ink: #0A0A0A`, `--color-heading-dark: #DFDFDF`,
   `--color-heading-light: #2A2A2A`, `--color-copy: #545454`,
   `--font-display: 'Poiret One', cursive`, `--font-sans: 'Jost',
sans-serif`.
4. `index.html`: Google Fonts `<link>` (Jost 200–800 + Poiret One);
   document title "Patisserie — Bakery Template".
5. Components (in order): `Header` (top bar + wordmark + nav + Blog dropdown
   - mobile menu + sticky) → `Hero` → `About` → `LatestCakes` (carousel) →
     `VideoBand` → `Testimonials` → `Blog` → `Features` → `Instagram` →
     `Footer`; compose in `App.tsx`.
6. Data: nav links + Blog dropdown (Blog, Blog Details, Elements), product
   cards (4 × cake name + $98.00), testimonials (3 × Wilma Mumduya + quote),
   blog cards (2 × date + title + meta), features (2 × title + copy),
   instagram handle "@patisserie", footer widgets (blurb, Location, Contact,
   socials).
7. Icons: lucide-react — Star (ratings ×5), Play (video circle), Menu
   (hamburger), Instagram, Facebook, Twitter, ShoppingBag (add-to-cart hover
   bar), ArrowLeft/ArrowRight (carousel arrows).
8. Placeholders: picsum seeds — `patisserie-hero`, `patisserie-about`,
   `patisserie-cake-1..4`, `patisserie-video`, `patisserie-blog-1..2`,
   `patisserie-feature-1..2`, `patisserie-insta-1..4`, `patisserie-person`.
9. Buttons: one `Button` variant "gold-square" (`#E5BF4A` bg, `#0A0A0A`
   uppercase text, 1px `#2A2A2A` border, radius 0, padding 22px 41px; hover
   → transparent + gold border/text); hero size = padding 35px 55px;
   "More Blog" uses the standard size. "Learn More"/read links use the
   `browse-btn` style (gold uppercase + 2px underline).
10. TDD per section; 100% coverage; verify with `scripts/verify-app.sh
patisserie` (or `npm run verify:app`).
11. PR description: source (ColorLib Cakeshop, preview URL), tokens,
    dup-rows (mark lines 555/1775 `[x]` after deploy), what differs (name,
    YouTube link → decorative play button, placeholders, paraphrased copy).

## Fidelity pitfalls to watch

- The page is DARK everywhere (`#0A0A0A`) with white text — NOT a light
  bakery theme. Gold `#E5BF4A` is the ONLY accent.
- Buttons are SQUARE (radius 0) with `#0A0A0A` (near-black) uppercase text on
  gold — the opposite of the Sanctus pill style. Hover inverts to outline.
- The section-tittle has a ROTATED (-90deg) gold uppercase label at the left
  edge (letter-spacing .3em) plus the 100px gold underline bar below the
  heading — both are signature elements; the rotated label is easy to miss.
- Demo copy says "Schilers" / "eat Burgers" / product names "Cashmere Tank +
  Bag" — PARAPHRASE to bakery content (tagline, cake names) but keep the
  same content KIND. Never copy "Cakeshop" branding into app files.
- Latest Cakes is a slick carousel with NO section heading — don't invent a
  heading; implement the carousel with CSS scroll snap or a tiny
  state-driven arrow control (no new dependency; tests must cover it).
- Video play button is DECORATIVE in the recreation (original is a YouTube
  popup link) — keep the 100px circle + gold pulse ring look.
- Hero: the white pill badge sits ABOVE the h1; h1 is 70px Poiret One WHITE
  (not gold); the "Order Now" button is the large hero padding (35px 55px).
- Blog "More Blog" button is on the SAME row as the "Our Blogs" heading
  (flex justify-between), NOT below it.
- Features rows alternate: first row image on the RIGHT (`.mr-10`), second
  image on the LEFT (`.ml-10`).
- Testimonials: 3 cards, all with the same author "Wilma Mumduya" and 5 gold
  stars each; card top border is a translucent white line on the dark bg.
- Footer menu includes the lowercase "blog" link as in the source.
- The original footer credit "made with ♥ by Colorlib" is replaced by the
  Component Dock link per repo conventions; the wordmark is "Patisserie",
  never "Cakeshop".
- picsum seeds are random photos — SCREEN the seeds (like the Pumply gym
  finding): `patisserie-hero` and `patisserie-cake-1..4` should ideally look
  food/bakery-ish (or at least neutral/pretty); swap seeds if a photo shows
  something wrong (people's faces, text, etc.). Note the chosen seed numbers
  in the PR.
- Blog date badge overhangs the image's bottom edge (negative bottom offset)
  — match that overlap.
- The `.line` underline sits 29px BELOW the heading text (not glued to it).
