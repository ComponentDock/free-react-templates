# Excursio (ColorLib Tourbi) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Excursio** (NEW
> name — the ColorLib source keeps its name "Tourbi"). Implementation ships
> on `feat/template-excursio` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Tourbi" — free travel & tourism website template
  (source: https://colorlib.com/wp/template/tourbi/). TEMPLATES.md rows:
  lines 517 (Bootstrap section), 1207, 2999 — THREE duplicate `- [ ]` rows
  (mark ALL at ship time; see the dup-row trap in the replication skill).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/tourbi/` (HTTP 200, 34.9KB HTML,
  `<title>travel</title>`). Stylesheets: `css/style.css` (171KB — custom
  tokens; the top hexes are `#ffcc00` ×47, `#00c0ff` ×22, `#f0e9ff` ×13,
  `#415094` ×7 — the page itself uses yellow + blue + white),
  `css/bootstrap.min.css` (Bootstrap 4), `css/all.css` (Font Awesome),
  `css/flaticon.css` + `css/themify-icons.css` (icon fonts),
  `css/nice-select.css` (custom selects), `css/slick.css` +
  `css/owl.carousel.min.css` (sliders), `css/magnific-popup.css`,
  `css/animate.css`. JS (jQuery 1.12.1 + bootstrap + slick + owl +
  nice-select + waypoints + counterup + magnific-popup + ajaxchimp +
  `js/custom.js`): tour-package Slick carousel (6 cards = 3 unique × 2
  loop), custom dropdowns, video lightbox on the place-details play
  button, footer newsletter via ajaxchimp. React replacements:
  scrollable row for the carousel, native `<select>`s, decorative play
  link, newsletter success state, repo mobile-menu pattern. Screenshot
  (`tourbi-free-template.jpg`, 1200×946, browser-verified 2026-08-14)
  matches the live render above the fold; live DOM authoritative below.
- **✅ Preview URL is the default one** — no subpath quirk.
- **⚠ Reference spellings to preserve:** "chaina" (feature card),
  "Life of Egeft", "Tour of iceland" (popular place cards), "Sawpalo,
  Brasil" (tour package cards), "donation" (info cards), "Luxerious Car
  Rental" (blog titles), "Hot Line 052" (navbar pill). All section
  headings are lowercase in the reference ("Amazing tour", "Most Popular
  place", "our blog", "tour package") — render them sentence-case as in
  the source (title-casing is fine per copy latitude, but keep the SAME
  words).
- **⚠ The banner h5 + CTA h5 are Kaushan Script; the "read more"/"book
  now"/"join now" inline links are ALSO Kaushan Script 17px `#000`** —
  this script treatment is the template's signature. Load Kaushan Script
  - Poppins + Roboto from Google Fonts in `index.html`.
- **⚠ Navbar scroll behavior:** the reference header is transparent over
  the hero (`.main_menu.home_menu`); no explicit sticky token in the CSS —
  `custom.js` may add one. Verify visually; if the reference stays
  transparent, keep it transparent (don't invent a white sticky state).
- **⚠ Footer is WHITE** (computed `rgba(0,0,0,0)` on white page) with a
  decorative `img/overlay_2.png` (white + dark/red brush marks, 360×525,
  absolute top-left, `display:none` ≤991px) — recreate as a subtle
  decorative edge or omit it (decorative latitude); do NOT make the
  footer dark.
- **⚠ The donation cards have NO card box** — icon + h4 + p + script
  link directly on white. The popular-place and tour-package cards DO have
  boxes (shadow / `#fafafa`).
- **⚠ Hero banner CSS fallback color is `#ffcc00`** under the
  `banner_bg.png` sky-blue illustration — in the React version use a
  picsum/`#00c0ff` gradient sky with a balloon illustration or an
  appropriate sky photo (seed-screening: pick a sky/clouds seed, e.g.
  `excursio-sky`, per the seed-screening method in the replication skill).
- **Carousel replacement:** the Tour Package section loops 3 unique cards
  twice (6 total). Render as a horizontally scrollable row
  (overflow-x-auto + snap) so everything is reachable without JS; keep
  the exact card anatomy (image top + `#fafafa` panel + stars + script
  Join Now).

## Tasks (implementation order)

1. **Scaffold app** — copy the simplest existing app (e.g. `apps/landly`
   or `apps/kern`), rename package to `@free-react-templates/excursio`,
   `public/CNAME` = `excursio.free.componentdock.com`, `homepage` =
   `https://excursio.free.componentdock.com`. Run `npm install` at repo
   root so `package-lock.json` registers the workspace. Keep
   `injectUiSource()` in `vite.config.ts`.
2. **Theme tokens** (`src/index.css` `@theme`): yellow `#ffcc00`, blue
   `#00c0ff`, heading ink `#14182d`, card content `#fafafa`, divider
   `#cad7dc`, muted `#888` / select text `#c3c3c3`. Fonts via Google
   Fonts `<link>` in `index.html`: Poppins, Roboto, Kaushan Script.
3. **Navbar** — transparent over hero; brand "Excursio" in a cursive
   script style (Kaushan Script works); white links Home, About,
   Packages, Blog (dropdown: Blog, Single Blog), Pages (dropdown:
   Elements), Contact; yellow pill `btn_1` "Hot Line 052" on the right
   (hidden <lg). Mobile: hamburger + slide-in menu with aria-expanded.
4. **Banner hero** — sky-blue background (gradient or picsum sky photo),
   Kaushan Script "Best Way To Tour" (uppercase, white), bold white
   headline "Lorem Ipsum Dolor Amet Consec" with a marker-highlight
   streak behind it, wave/curve bottom edge.
5. **Search bar + donation cards** — yellow `#ffcc00` bar overlapping the
   hero bottom: Country + City selects (60px, square, divider) + blue
   `#00c0ff` square Search button; then 3 donation cards (icon, h4,
   paragraph, script Read More) on white.
6. **Amazing Tour features** — section title + decorative icon; split
   layout with a travel photo; 3 mini-cards: London 35 Places, Kashmir 75
   Places, Chaina 85 Places.
7. **Most Popular Place** — centered title + 3 white shadowed cards
   (Life of Egeft / Biking in Norway / Tour of iceland) with script Book
   Now links.
8. **Place Details** — left: title + paragraphs + photo; right: photo
   with play-button overlay; centered yellow View All pill below.
9. **Tour Package** — heading row (title + balloon card with script Join
   Now) + scrollable row of 6 cards (Sawpalo, Brasil ×6; image top,
   `#fafafa` panel, 5 stars, script Join Now).
10. **Newsletter CTA** — blue `#00c0ff` band with jagged bottom edge,
    Kaushan Script "Join Our Newsletter", white heading "Subscribe to get
    Updated with new offers", white input + yellow Subscribe Now
    (uppercase) with success state.
11. **Blog** — title + 3 cards (image, "Luxerious Car Rental", paragraph,
    meta: calendar 13th Dec / heart 15 / comments 10).
12. **Footer** — 4 columns (About Agency, Navigation Links, Newsletter
    with paper-plane submit, Instafeed 8-image grid), `#cad7dc` hr
    divider, copyright bar with gray text + Component Dock link
    (https://www.componentdock.com/) + social icons (hover blue).
13. **Verify** — `npm run spec:validate`, `scripts/verify-app.sh
excursio`, then PR + squash merge + bookkeeping (mark ALL THREE
    Tourbi rows `[x]` with `https://excursio.free.componentdock.com` +
    `npm run readme:status`).
