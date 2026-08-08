# Inkling (ColorLib Readit) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-inkling`.

## Source mapping

- **ColorLib item:** "Readit" (TEMPLATES.md — ONE copy, line 282; mark it
  `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/readit/
- **Preview URL:** https://preview.colorlib.com/theme/readit/
  (HTTP 200, 25.8 KB DOM — live, analyzed 2026-08-08).
- **Preview CSS:** `https://preview.colorlib.com/theme/readit/css/style.css`
  (65.9 KB, classic FTCO Bootstrap 4 stylesheet; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`readit-free-template.jpg`, 1200×946; verified via vision)

Blog/magazine template. Hero: full-height photo blended into a diagonal
magenta (`#f200ff`, left) → amber (`#ffba42`, right) gradient overlay — photo
of a smiling woman with a tablet on the right side, translucent blend; small
white "Hello! Welcome to" subheading; huge bold white "Readit blog" headline;
white paragraph copy; amber scroll chevron bottom-left. Below: blog rows with
a large rectangular image left (vintage car crashing through a wall) and text
right — uppercase light-grey category "ILLUSTRATION", bold dark title "Build
a website in minutes with Adobe Templates", faint grey meta (date + read
time). Dark navbar on top: brand left, Home / Articles / Team / Contact
right-aligned.

### Live DOM (primary reference — matches the screenshot)

Section order: navbar (`nav.ftco_navbar bg-dark ftco-navbar-light`: brand
"Readit." with yellow "it" span, right nav Home (active) / Articles / Team /
Contact, "Menu" toggler; `.scrolled` → fixed white bar, black links, yellow
active) → hero (`.hero-wrap.js-fullheight`: bg image `images/bg_1.jpg` +
overlay `linear-gradient(45deg, #f200ff 0%, #ffba42 100%)` opacity .8;
subheading "Hello! Welcome to"; h1 "Readit blog" (10vw white Poppins 700,
span yellow); p "Far far away, behind the word mountains…" 18px
`rgba(255,255,255,0.9)`; `.mouse` scroll indicator) → blog list
(`.ftco-section`: 9 `.case` rows — `col-xl-8` image `a.img` 400px tall +
`col-xl-4` text: `.subheading` uppercase category 14px `rgba(0,0,0,0.2)`
(Illustration / Application / Design), h2 title 40px 700 black, tag links,
`.media-social` share icons (50×50 `rgba(0,0,0,0.05)` radius 4px,
opacity 0→1 on hover, hover bg `#ffd369`), `.meta p` 12px: "11/13/2019 · 12
min read"; hover dims title) → pagination (`.block-27`: 40×40 circles,
1px `#e6e6e6`, active `#ffd369` bg white text; ‹ 1 2 3 4 5 ›) → footer
(`.ftco-footer.ftco-bg-dark` bg `#222831`, padding 5em 0 3em: logo "Readit."
34px 800 white + yellow span, blurb, socials; "Latest News" widget — 2 posts
80×80 rounded img + heading 16px `rgba(255,255,255,0.7)` + yellow meta
"Oct. 16, 2019 · Admin · 19"; "Information" — Home/About/Articles/Contact
(white, hover yellow); "Have a Questions?" — 203 Fake St. Mountain View,
San Francisco, California, USA · +2 392 3929 210 · info@yourdomain.com;
copyright bar "Copyright © <year> All rights reserved | This template is
made with ♥ by Colorlib").

## Design tokens (from preview CSS)

- Brand yellow `#ffd369` — brand "it" span, nav hover/active, btn-primary
  (3px radius; hover = transparent bg + yellow text), media-social hover,
  pagination active, footer logo span + link hover, latest-news meta.
- Hero gradient `#f200ff` (magenta) → `#ffba42` (amber), 45deg, opacity .8.
- Footer bg `#222831` (dark slate); hero/footer text white + alpha variants
  (`rgba(255,255,255,0.9/.8/.7)`); blog text black `#000000` + muted
  `rgba(0,0,0,0.2/.5)`.
- Pagination border `#e6e6e6`, text gray `#6c757d`.
- Font: Poppins (Google Fonts, weights 300–900); headings weight 700–900.
- Container max-width 1210px; blog image height 400px; share icons 50×50
  radius 4px; pagination circles 40×40 radius 50%; latest-news img 80×80
  rounded.

## Implementation outline (section order 1:1)

1. **Navbar** — dark transparent bar (absolute over hero): wordmark "Inkling"
   (Poppins 900, 26px, accent letter yellow), right nav Home (active) /
   Articles / Team / Contact (18px, white 80%, hover yellow), "Menu" toggler
   → collapsible mobile panel; scroll listener switches to fixed white bar
   (`shadow-sm`), black links, yellow active.
2. **Hero** — `min-h-screen` relative section: `bg-cover bg-center`
   background image (picsum seed `inkling-0`, 1600×900) + absolute overlay
   `bg-gradient-to-br from-[#f200ff] to-[#ffba42] opacity-80`; subheading
   "Hello! Welcome to" (white 18px), h1 "Inkling blog" (white 700, ~10vw,
   one word in `#ffd369`), paragraph 18px `text-white/90`; bottom mouse
   scroll indicator (bordered pill + animated dot, yellow, CSS keyframes).
3. **Blog list** — white section, 9 rows: `grid` with image block (h-[400px]
   rounded-none, picsum `inkling-<n>` 800×600) + text block: uppercase
   category (14px, `text-black/20`), h2 title (40px 700 black), tag links,
   share icon row (50×50 `bg-black/5`, `opacity-0 group-hover:opacity-100`,
   hover `bg-[#ffd369]`), meta 12px `text-black/20` (Calendar date · Clock
   "12 min read"); group hover dims title.
4. **Pagination** — centered row of circular 40×40 buttons (border
   `#e6e6e6`, gray text); active: `bg-[#ffd369] text-white`; ‹ 1 2 3 4 5 ›.
5. **Footer** — `bg-[#222831]` (dark), 4 columns: (a) logo "Inkling" +
   blurb + social icons; (b) "Latest News" — 2 posts (80×80 rounded img +
   heading + yellow meta); (c) "Information" — Home / About / Articles /
   Contact; (d) "Have a Questions?" — MapPin address, Phone number, Mail
   email; bottom bar: copyright line + heart.
6. **Composition** — skip link, `<main>`, banner/contentinfo landmarks,
   document title "Inkling — Blog Magazine Template".

## Fidelity notes

- Match the live DOM: dark navbar → white fixed on scroll, full-height hero
  with `#f200ff`→`#ffba42` overlay + photo, 9 image/text blog rows,
  circular pagination, `#222831` footer with 4 widgets. Section order 1:1.
- `#ffd369` brand yellow everywhere the source uses it (brand span, nav
  active/hover, share-icon hover, pagination active, footer links/meta).
- Never use "Readit" or "Colorlib" as the brand; brand is "Inkling".
- Multi-page links (Articles / Team / Contact, post pages) → decorative
  anchors; single-page deliverable (note in PR).
- Placeholders: `picsum.photos/seed/inkling-<n>/<w>/<h>` — hero 1600×900,
  blog rows 800×600 (400px tall), latest-news 80×80. No copied assets.
- Icons: lucide-react (Menu, ChevronDown, Calendar, Clock, Share2, MapPin,
  Phone, Mail, Heart, ArrowLeft, ArrowRight, Twitter/X, Facebook, Instagram,
  Linkedin — brand icons inline SVG if exact).
- Fonts: Google Fonts Poppins (300–900) via `<link>` in `index.html`.
- Newsletter/subscribe (footer btn-primary): client-side only, no backend.
- Scroll indicator: CSS keyframes translateY loop, no dependency.

## Commit + PR conventions

- Prep commit (this): `docs: prep Inkling (ColorLib Readit) spec + research`.
- Implementation branch: `feat/template-inkling`; PR title: `feat: Inkling
— blog magazine website template (ColorLib Readit)`.
- PR body: source URL, preview URL, tokens, differences (rename,
  placeholders, single-page anchors), TEMPLATES.md line-282 note.
- After merge: surge URL `https://free-react-templates-inkling.surge.sh`,
  TEMPLATES.md `[x]` on line 282, `npm run readme:status`.
