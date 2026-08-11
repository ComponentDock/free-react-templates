# Sonnet (ColorLib Quitelight) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sonnet`.

## Source mapping

- **ColorLib item:** "Quitelight" (TEMPLATES.md — THREE copies, lines 281,
  481, 2210; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/quitelight/
- **Preview URL:** https://preview.colorlib.com/theme/quitelight/
  (HTTP 200, 35 KB DOM — live, analyzed 2026-08-11).

## Reference research (done — do not redo)

### Screenshot (`quitelight-free-template.jpg`, 1200×946; verified via vision)

Magazine-style light blog. White background, dark text, mustard-gold accent
`#F9B500`. Transparent header (logo left, centered menu links, search
right) floats over a full-width hero photo (modern white architecture)
with a dark gradient overlay on the left; small "ART" tag + large bold
headline "The Shoddy Science Behind most Pregnancy Advice" + white-outline
"Continue Reading" button. Below the hero: "HOT NEWS" label + 3-column
grid of white article cards (photo, title, like/comment meta). Right edge
shows the start of the sidebar ("TOP STORIES" widget with thumbnail). The
footer is below the fold — not in the shot.

### Live DOM (primary reference — matches the screenshot)

Section order: `header` (absolute, transparent, white 600-weight text,
bottom hairline `1px solid #aaa`; logo 70px left, menu line-height 70px,
`src-form` search right, hamburger) → `.slider-main.h-800x` (hero, `pt-95`
header clearance, bg `slider_1_1900x1200.jpg` + `.bg-layer-4` dark
overlay; left col-md-5: h1 + `a.btn-brdr-grey.color-white` "Continue
Reading"; right col-md-6: h5 "HOT NEWS" + swiper of 4 white cards —
category h5 "ART" `color-ash` / h4 title / meta `ul` 15·105
`color-lt-black` — + custom white swiper-scrollbar 3px) → main content
`section.bg-1-white` (`#F8F8F8`, container-fluid): col-lg-8 column with:
(1) 3-card white grid; (2) h4 "Whats trending" + featured row — col-xl-8
sided card (image `trending_1_400X500` left + white text half: h5 ART,
h2, meta) + 3 col-xl-4 cards (image-top `trending_2_400X300`; dark
`trending_2_400X250`; dark `trending_3_400X250`); (3) h4 "Most Popular
Videos" + dark slider block (`bg-6` `slider_2_1900x1200`, `p-40`,
overlay, white) — intro block max-w 200px (h5 + h2) + swiper of photo
slides (`slider_5_1600x1000`, `slider_4_1600x1000`, `slider_3_1900x600`…)
each `a.abs-center.circle-50.bg-tp-5` circular play button; (4) h4 "Most
Popular Videos" (original repeats the heading — paraphrase to "Latest
Articles") + grid: 5 col-xl-4 cards (white FASHION card; image-top card;
dark `latest_articles_3_400x250`; tall dark `latest_articles_4_400x600`;
image-top `latest_articles_2_400x300`) + col-xl-8 sided big card
(`latest_articles_1_400x500` + text) + centered h6 "LOAD MORE" +
`a.btn-brdr-grey`; then col-lg-3 sidebar `bg-2-white` (`#F2F2F2`,
`ptb-50`): TOP STORIES (4 × 80px thumb + h5 title) → ad banner (photo +
overlay, two centered h1 lines "SA"/"LE" = SALE) → NEWEST VIDEO (4 rows:
80px thumb + centered `v-icn` play icon + h5 title) → ad banner (h3
"CHARITY" + h4 "tournament" over dark photo) → NEWEST VIDEO (4 rows:
square date cell h2 "16"/h4 "JAN" + h5 title) → footer `bg-191`
(`#191919`, `color-ash`, `pt-50 pb-20`): col-lg-6 brand + about `p`
`color-ash mt-25`, two col-lg-2 link lists (`ul.list-a-plr-10`),
newsletter `form.form-block.form-brdr-b.mx-w-400x.m-auto` (email input
underline style "Your Email" + full-width "SUBSCRIBE"
`btn-brdr-grey.color-ash`), bottom bar: "Copyright © <year> All rights
reserved | This template is made with by Colorlib" (paraphrased).

## Design tokens (from preview common/styles.css)

- Gold primary `#F9B500` — button hover (bg + border + black text), form
  focus underline, `color-primary`; `.btn-fill-primary` = gold bg, `#111`
  text; `.btn-brdr-primary` = gold outline.
- White `#fff` — card bg, text on dark, swiper-scrollbar drag; `#F8F8F8`
  main content bg; `#F2F2F2` sidebar bg; `#191919` footer bg; `#555`
  body text; `#888` card meta (`color-lt-black`); `#aaa` muted
  (`color-ash`, header hairline, footer text); `#ccc` button borders +
  dark-card meta (`color-grey`); `#111` headings/dropdown text; `#36D98A`
  minor green accent.
- Font: `"Poppins", sans-serif` (Google Fonts) — body 14px/400; h1 4em,
  h2 2.5em, h3 1.7em, h4 1.3em, h5 1.1em, h6 .95em; p 1.05em,
  line-height 1.7.
- Buttons `.btn-brdr-grey`: height 45px, line-height 43px, border 1px
  solid `#ccc`, radius 2px; hover → gold bg + gold border + black text.
- Cards `.card`: radius 0, no border/shadow; `.bg-white`; padding
  `plr-25 ptb-15`.
- Overlay `.bg-layer-4:after`: `#111` at 50% opacity; hero variant:
  linear-gradient to top `#000` → `rgba(0,0,0,.4)` at 60%; play buttons
  `rgba(0,0,0,.5)` 50px circles.
- Hero: 800px (`h-800x`), `pt-95`, text max-w 400px (`mx-w-400x`).
- Swiper scrollbar: 3px track `rgba(255,255,255,.5)`, 5px white drag.
- Image aspect ratios: hero 1900x1200; trending 400x500 / 400x300 /
  400x250; video slides 1600x1000 / 1900x600; latest 400x250 / 400x600 /
  400x500 / 400x300; sidebar thumbs 80x80; ad banners 400x300.

## Implementation outline (section order 1:1)

1. **Header** — absolute over hero, transparent, white 600-weight text,
   bottom 1px `#aaa` hairline; wordmark "Sonnet" left (70px logo), nav
   links Home / Sport ▾ (PAGE 1, PAGE 2) / Travel / Beauty / Music / Art
   / Fashion / Contact, search input + icon right, mobile hamburger;
   dropdowns white bg `#111` text.
2. **Hero** — 800px, picsum 1900x1200 + dark overlay, `pt-95`; left:
   category tag "ART", h1 headline (white, ~4em), "Continue Reading"
   outline button (white text); right: "HOT NEWS" label + scroll-snap
   row of 4 white cards (category / title / Heart 15 · MessageCircle 105)
   - custom white progress bar.
3. **Post grid** (`#F8F8F8`) — 3 white radius-0 cards (category, title,
   meta). Distinct paraphrased titles (original repeats one headline).
4. **Whats trending** — h4 heading; col-span-2 sided card (image
   400x500 left + text right) + 3 side cards: image-top 400x300, two
   dark 400x250 with overlay + white text.
5. **Most Popular Videos** — dark full-width block (image 1900x1200 +
   overlay, p-40): intro h5+h2 (max-w 200px) + scroll-snap photo slides
   (1600x1000 / 1900x600) each with a 50px circular play button
   (`rgba(0,0,0,.5)`, lucide Play).
6. **Latest Articles** (heading paraphrased; original duplicates "Most
   Popular Videos") — 5 cards (white / image-top / dark 400x250 / tall
   dark 400x600 / image-top 400x300) + col-span-2 sided card (400x500)
   - centered "LOAD MORE" outline button.
7. **Sidebar** (`#F2F2F2`) — TOP STORIES (4 thumb rows), SALE ad banner
   (overlay + big centered text), NEWEST VIDEO (4 play-icon rows),
   CHARITY tournament ad banner, NEWEST VIDEO date-list (4 rows: square
   day/month cell + title).
8. **Footer** (`#191919`) — brand + about, 2 link columns, newsletter
   form (underline input "Your Email" + full-width SUBSCRIBE outline
   button; validation + success state), bottom bar copyright +
   paraphrased ColorLib credit.
9. **Composition** — skip link, `<main>`, banner/contentinfo landmarks,
   document title "Sonnet — Blog Template".

## Fidelity notes

- Match the live DOM: transparent header over photo hero, light
  `#F8F8F8` content + `#F2F2F2` sidebar, dark video slider, `#191919`
  footer. Section order 1:1.
- `#F9B500` gold accent, Poppins font, radius-2 outline buttons (height
  45px, hover → gold bg + black text), radius-0 white cards, 25px card
  padding, dark 50%-opacity image overlays.
- Never use "Quitelight" as the brand; brand is "Sonnet".
- Placeholders: `picsum.photos/seed/sonnet-<n>/<w>/<h>` at original
  aspect ratios (list above).
- Icons: lucide-react (Heart, MessageCircle, Play, Search, Menu, ChevronDown,
  Facebook, Twitter, Instagram, Youtube).
- Forms (newsletter + header search): client-side only; search is
  decorative; nav dropdown + mobile menu interactive; video slider
  decorative (anchors); hero scroll-snap strip with custom progress bar.
- Demo repeats one article headline everywhere — write 4–6 distinct
  paraphrased titles (keep category + title + like/comment meta pattern).

## Commit + PR conventions

- Prep commit (this): `docs: prep Sonnet (ColorLib Quitelight) spec + research`.
- Implementation branch: `feat/template-sonnet`; PR title: `feat: Sonnet —
blog/magazine website template (ColorLib Quitelight)`.
- PR body: source URL, preview URL (200), tokens, differences (rename,
  placeholders, paraphrased headings/titles, decorative search/slider,
  single-page anchors, font via Google Fonts), TEMPLATES.md three-copy
  note (lines 281 / 481 / 2210).
- After merge: surge URL `https://free-react-templates-sonnet.surge.sh`,
  TEMPLATES.md `[x]` on ALL THREE copies, `npm run readme:status`.
