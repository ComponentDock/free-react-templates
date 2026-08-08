# Lantern (ColorLib Quitelight) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lantern`.

## Source mapping

- **ColorLib item:** "Quitelight" (TEMPLATES.md — THREE copies, lines 281,
  481, 2210; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/quitelight/
- **Preview URL:** https://preview.colorlib.com/theme/quitelight/
  (HTTP 200, 35 KB DOM — live, analyzed 2026-08-08).

## Reference research (done — do not redo)

### Screenshot (`quitelight-free-template.jpg`, 1200×946; verified via vision)

White overlay header (square logo icon + "QUITE LIGHT" wordmark, centered
nav: Home, Sport, Travel, Beauty, Music, Art, Fashion, Contact, search
right) over a dark architectural hero image (split-screen: featured article
left with "ART" tag + bold headline + "Continue Reading" outline button;
"HOT NEWS" right with a thin progress bar and white mini-cards). Below:
clean white 3-up article card grid (image, uppercase category tag, headline,
heart/comment meta row), trending + video blocks, and a right sidebar with
"TOP STORIES" list. Bold sans headlines, light grey metadata, yellow
`#F9B500` accents. Editorial, minimalist, modern.

### Live DOM (primary reference — matches the screenshot)

Section order: overlay header (logo + search + hamburger + nav with
Sport ▾ [PAGE 1, PAGE 2] dropdown) → `.slider-main h-800x` hero slider
(left: `h5 ART` + `h1` headline + "Continue Reading" `btn-brdr-grey`; right:
"HOT NEWS" swiper, 2-per-view white cards: 300×150 img, `h5.color-ash`
category, `h4` title, heart `15` + comment `105` meta) → `section
bg-1-white ptb-0` (`#F8F8F8`) with `col-lg-8` main (3-up `card h-100
bg-white` grid → `h4 Whats trending` + featured `sided-half` split card
(image left `bg-2`, category + `h2` + meta right) + small cards → `h4 Most
Popular Videos` + featured `sided-half` (`bg-9`) + video cards with
`circle-50 bg-tp-5` play buttons → centered "LOAD MORE" `btn-brdr-grey`)
and `col-lg-4` sidebar ("TOP STORIES" `sided-80x` 120×120 rows, ad banner
400×600, "NEWEST VIDEO" with `v-icn` play icons, ad banner 400×300) →
`footer.bg-191` (`#191919`): white logo, newsletter form (email input +
full-width "SUBSCRIBE" `btn-brdr-grey`), bottom bar "Copyright © All rights
reserved | This template is made with ♥ by Colorlib".

## Design tokens (from preview common/styles.css)

- Brand yellow `#F9B500` — `btn-fill-primary` bg/border + hover,
  `btn-brdr-grey:hover` bg (8 bg uses, 5 color uses).
- Ink `#111` / `#000` — headings/links, `btn-fill-primary:hover` text.
- Dark footer `#191919` (`bg-191`); white `#fff` — cards, text on dark.
- Light grey `#F8F8F8` (`bg-1-white` main section bg), `#F2F2F2`,
  `#EBEBEB`, `#ddd` — alt backgrounds / hairlines.
- Meta greys `#aaa` (`color-ash`), `#ccc` (`color-grey`), `#888`
  (`color-lt-black`).
- Tag accent colors `#E14A3D` (red), `#58ADEE` (blue), `#36D98A` (green),
  `#365B99` (indigo) — decorative category tags.
- Overlay `rgba(0,0,0,.5)` (`bg-tp-5` play circles), hero dark layer
  (`bg-layer-4`).
- Font: `'Poppins', sans-serif` everywhere; header font-weight 600.
- Buttons: height 45px, line-height 43px, 1px solid border, radius ~2px;
  fill-primary = `#F9B500` bg, hover → transparent; brdr-grey = grey
  border, hover → `#F9B500` bg + `#000` text.
- Cards: `bg-white`, radius ~2px, image top, 25px body padding.
- Header: absolute overlay, white text, logo left (70px), search right,
  centered nav, 1px `#aaa` bottom hairline.

## Implementation outline (section order 1:1)

1. **Header** — absolute overlay over hero, white text, weight 600;
   logo/wordmark "Lantern" left, search input + icon right, hamburger;
   centered nav: Home, Sport ▾, Travel, Beauty, Music, Art, Fashion,
   Contact; Sport dropdown (PAGE 1, PAGE 2) on hover/focus; mobile menu.
2. **Hero slider** — full-height (`h-800x` ≈ 800px) bg photo with dark
   overlay; left column (max-w 400px): category tag `ART`, `h1` bold
   headline, "Continue Reading" outline button; right: "HOT NEWS" heading +
   horizontally scrollable carousel of 4+ white mini-cards (2-per-view
   desktop / 1 mobile), each: image 300×150, category, title, heart +
   comment meta.
3. **Article grid** — `#F8F8F8` section; `col-lg-8` main:
   - 3-up white cards (image, category, `h4` title, meta row) — 6 cards.
   - "Whats trending" `h4` + featured split card (image left, category +
     `h2` + meta right) + 2–4 small cards.
   - "Most Popular Videos" `h4` + featured split card + video cards with
     round play buttons (`circle-50`, `rgba(0,0,0,.5)`).
   - Centered "LOAD MORE" outline button (decorative).
4. **Sidebar** (`col-lg-4`) — "TOP STORIES" heading + 4 rows (120×120
   thumb + title), ad placeholder 400×600, "NEWEST VIDEO" heading + 4 rows
   with play icons, ad placeholder 400×300.
5. **Footer** — `#191919`; white logo, short text, newsletter form
   (email input + full-width "SUBSCRIBE" outline button, validation +
   success state), bottom bar: copyright + paraphrased ColorLib credit.
6. **Composition** — skip link, `<main>`, banner/contentinfo landmarks,
   document title "Lantern — Blog Template".

## Fidelity notes

- Match the live DOM: overlay header, full-height hero with HOT NEWS
  carousel, light-grey article grid, sidebar, dark footer. Section order
  1:1.
- `#F9B500` brand yellow, Poppins, `#F8F8F8` section bg, `#191919` footer,
  white cards, `#aaa`/`#888` meta greys, uppercase category tags.
- Never use "Quitelight" as the brand; brand is "Lantern".
- Placeholders: `picsum.photos/seed/lantern-<n>/<w>/<h>` (deterministic):
  hero 1600×900, hot news 300×150, cards 400×250, sidebar 120×120, ads
  400×600 / 400×300 (or grey dashed ad blocks).
- Icons: lucide-react (Search, Menu, X, Heart, MessageCircle, Play,
  ChevronDown).
- Carousel: simple CSS scroll-snap row or lightweight auto-advance;
  no new dependency.
- Newsletter + search: client-side only; LOAD MORE + links decorative.

## Commit + PR conventions

- Prep commit (this): `docs: prep Lantern (ColorLib Quitelight) spec +
research`.
- Implementation branch: `feat/template-lantern`; PR title: `feat: Lantern
— blog website template (ColorLib Quitelight)`.
- PR body: source URL, preview URL (200), tokens, differences (rename,
  placeholders, single-page anchors), TEMPLATES.md three-copy note (lines
  281 / 481 / 2210).
- After merge: surge URL `https://free-react-templates-lantern.surge.sh`,
  TEMPLATES.md `[x]` on ALL THREE copies, `npm run readme:status`.
