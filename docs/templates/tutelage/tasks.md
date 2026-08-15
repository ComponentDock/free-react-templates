# Tutelage (ColorLib "Tutor") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-tutelage` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Tutor" — free education website template
  (source: https://colorlib.com/wp/template/tutor/). Listed in
  TEMPLATES.md under **Bootstrap (216)** at line 521; duplicate row at
  line 1656 under **Education (43)** — same template, ONE app only.
  Mark BOTH rows `[x]` after merge.
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/tutor/`. DOM fetched
  (`/tmp/prep-tutor/preview.html`, 25,345 bytes, title "Tutor — Free
  Website Template by Colorlib") + stylesheet `css/style.css`
  (`/tmp/prep-tutor/style.css`, 22,645 bytes — the real token source) +
  `css/bootstrap.min.css` (RE-COMPILED Bootstrap v4.3.1 with the
  theme's blue `$primary`; `--primary: #0779e4; --blue: #0779e4;
--light: #f8f9fa` verified by grep) + TEMPLATES.md screenshot
  (`tutor-free-template.jpg`, AVIF → viewed in browser at 1200×946:
  "Tutor" logo in navbar, desk/workspace hero photo, "The Hub Of
  Tutorials" headline, featured card + small cards, 6 course tiles).
  ALSO: browser computed-style pass on the LIVE preview (nav links
  WHITE over hero, `.heading h2` blue 30px/700, `.course` tiles
  `#f8f9fa` radius 4px, `.btn-primary` blue bg, `.tutorial-item` white
  radius 4px, `.testimonial-2` white radius 7px, footer bg transparent
  → LIGHT, body `#364d59`).
- **Aesthetic:** clean modern minimalist e-learning design on
  white/`#f8f9fa`. ONE accent: bright blue `#0779e4` (Bootstrap
  `$primary` — buttons, heading h2s, category labels, course tile
  text, logo, testimonial bottom border, pagination active, social
  hover). Body text `#364d59` weight 300. Headings weight 300 (hero
  strong words 900). White cards, soft shadows, 4px radius (7px
  testimonials). Navbar TRANSPARENT (absolute, over hero photo).
- **Fonts:** **Raleway** — body 300, 1rem, lh 1.7; headings 300; hero
  h1 3rem/2rem white lh 1 with `<strong>` 900. Load via Google Fonts
  `<link>` in `index.html` (300/400/700/900).
- **Buttons:** `.btn` — `border-color:#fff`, padding 10px 20px; hover →
  white bg + `#0779e4` text. `.btn-primary` blue bg, white text, radius
  4px. Used for "Search" (px-4) and "View" (custom-btn).
- **Copy is placeholder/Lorem:** 4 featured/latest titles ("Learning
  React Native" repeated ×5, "Learning Angular 101", "Learning
  Photoshop", "Advance Illustrator"), identical blurbs ×2 patterns,
  meta "1hr 24m / Advanced / Jun 18, 2020" on every card, 3
  testimonials (4 filled + 1 outline stars each, same quote, names Mike
  Fisher "Owner, Ford" / Jean Stanley "Traveler" / Katie Rose
  "Customer"), footer blurb + 4 identical link columns. Paraphrase
  freely, VARY repeats, keep the kinds. Keep course tile names
  (Illustrator, Photoshop, Angular, JavaScript, React, Vue).
- **DOM oddities:** (1) navbar is TRANSPARENT/absolute — nav links are
  WHITE over the hero photo (computed `rgb(255,255,255)`), NOT black;
  (2) footer has NO background color rule — it's the white page bg
  (LIGHT footer, text `#364d59`), do NOT invent a dark footer; (3)
  `.heading h2` is BLUE `#0779e4` (30px, weight 700) — different from
  most ColorLib themes where it's black; (4) course tiles use the
  custom `brand` icon font (adobeillustrator, adobephotoshop, angular,
  javascript, react, vue-dot-js) — lucide-react has NO brand icons,
  use inline SVG brand marks; (5) testimonial stars = 4 filled + 1
  outline (4.5/5) via icon-star/text-warning classes; (6) pagination
  circle 2 is the ACTIVE one (no link, blue bg); (7) nav has no
  dropdowns (flat 6 links); (8) hero h1 strong words are "Hub" and
  "Tutorials"; (9) the featured band's row has `margin-top:-150px`
  (cards overlap the hero); (10) search form input is `type="search"`
  with a submit input styled as the blue button.

## Structure (top → bottom, single page)

1. **Navbar** (`.site-navbar`, TRANSPARENT, `position:absolute; top:0;
width:100%`, padding 1rem / 3rem mobile) — logo left (`.site-logo`,
   1.7rem, strong weight 900, BLUE link, text "Tutelage"); right nav
   (`.site-menu`, links 16px weight 300, WHITE, hover blue): Home
   (active) / Tutorials / Testimonials / Blog / About / Contact;
   mobile: hamburger (lucide Menu) → off-canvas drawer (`.site-mobile-
menu`, close X icon) with the same links.
2. **Hero** (`.site-section-cover.overlay`, bg photo + `:before`
   `rgba(0,0,0,0.3)`; height `calc(100vh - 196px)` min 577px, 70vh/400px
   mobile; row align-items-center justify-content-center) — col-lg-10
   text-center: h1 (3rem / 2rem mobile, white, weight 300, lh 1) "The
   **Hub** Of **Tutorials**".
3. **Featured tutorials** (`.site-section.bg-light.pb-0`) — row
   `align-items-stretch overlap` (`margin-top:-150px`, z-index 2):
   col-lg-8 → big `.box.h-100` (d-flex: `.img` 260px flex + `.text`:
   blue 11px uppercase `.category` "Tutorial" + h3 title link black +
   blurb p + brand icons row + `.meta` `#a6a6a6` "1hr 24m / Advanced /
   Jun 18, 2020"); col-lg-4 → 3 `.box.small.h-100` (d-flex mb-2: `.img`
   80px + `.text`: category + h3 16px). Vary the repeated titles.
4. **Choose Course** (`.site-section`, white) — heading: `.caption`
   12px uppercase "Tutorial Courses" + h2 BLUE 30px weight 700 "Choose
   Course"; row of 6 `.course` tiles (col-lg-2): 40px `.wrap-icon`
   brand SVG + h3 18px `#ccc`; tile `#f8f9fa` radius 4px text-center,
   hover → white bg + shadow `0 5px 10px 0 rgba(0,0,0,0.1)` + h3 black.
   Names: Illustrator / Photoshop / Angular / JavaScript / React / Vue.
5. **Latest Tutorials** (`.site-section.bg-light`) — top row
   (mb-5 align-items-center): col-lg-6 search form (`.search-form`
   d-flex: 55px white input placeholder "Search subjects" + blue
   "Search" submit) + col-lg-6 text-right "Share:" + 3 `.social-item`
   (40px white squares, blue hover bg); heading (caption "Latest" + h2
   "Tutorials"); row: col-lg-8 → 4 `.tutorial-item` cards (d-flex mb-4,
   white, padding 20px, radius 4px, shadow `0 10px 20px 0
rgba(0,0,0,0.1)`: `.img-wrap` 250px flex mr-30 + h3 20px + blurb +
   brand icons + `.meta` + `.btn.btn-primary.custom-btn` "View") +
   `.custom-pagination` (5 × 50px circles radius 50%, white bg; item 2
   active blue bg white text); col-lg-4 → 3 `.box-side` cards (white,
   padding 20px, radius 4px, shadow: horizontal thumb + h3 20px).
6. **Testimonials** (`.site-section.bg-light`) — centered heading
   (caption "Testimonials" + h2 "Student Reviews"); 3 `.testimonial-2`
   cards (col-lg-4, white, padding 30px, radius 7px, `border-bottom:
4px solid #0779e4`, shadow `0 15px 30px 0 rgba(0,0,0,0.1)`): h3
   title + 5-star row (4 filled + 1 outline, yellow) + blockquote
   (18px quote) + d-flex `v-card`: 50px round avatar + `.author-name`
   (name + `#ccc` role).
7. **Footer** (`.site-footer`, LIGHT/transparent bg, text `#364d59`,
   padding 4em 0 / 8em md) — row: col-lg-3 `.footer-heading` "About Us"
   (16px black) + blurb ("Far far away, behind the word mountains…") +
   4 social icon links (facebook / instagram / twitter / linkedin —
   inline SVG); 4 link columns (`.footer-heading` Quick Links /
   Resources / Support / Company) each with the SAME 5 links (About Us
   / Testimonials / Terms of Service / Privacy / Contact Us, li
   margin-bottom 10px, links `rgba(0,0,0,0.5)` → black hover);
   `.border-top` divider + copyright bar: "Copyright © <year> All
   rights reserved | This template is made with ♥ by **Component
   Dock**" → https://www.componentdock.com/ (replaces Colorlib credit,
   NO ColorLib credit).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/tutelage`; `npm install` at repo root;
      CNAME + homepage `tutelage.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#0779e4`, body `#364d59`,
      ink `#000000`, soft `#f8f9fa`, meta `#a6a6a6`, faint `#ccc`;
      Google Fonts `<link>` (Raleway 300/400/700/900)
- [ ] `src/data.ts` — nav (6 links), featured (1 big + 3 small),
      courses (6: name + brand icon), tutorials (4: title/blurb/meta),
      sidebar (3), testimonials (3: title/stars/quote/name/role),
      footer (blurb + 4 columns)
- [ ] Components: `Navbar` (transparent + mobile drawer), `Hero`,
      `Featured` (overlap row), `Courses` (6 tiles), `Tutorials`
      (search + share + 4 cards + pagination + sidebar), `Testimonials`,
      `Footer` (4 columns + Component Dock credit)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (mobile drawer open/close, search form submit)
- [ ] Subject-screen picsum seeds (hero wide desk, featured 1–4,
      tutorial 1–4, box-side 1–3, avatars 1–3 portraits) — pixel metric + browser verify; pin seeds in PR
- [ ] `bash scripts/verify-app.sh tutelage` green; PR with source,
      preview URL, tokens, deviations (inline SVG brand marks instead
      of brand font, Component Dock credit); squash-merge immediately
- [ ] After merge: mark BOTH TEMPLATES.md Tutor rows `[x]` + surge URL
      (lines 521, 1656 — Bootstrap 216 / Education 43);
      `npm run readme:status`

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop
  nav lists are `display:none` and getByRole excludes them — query
  desktop-only links with `{ hidden: true }`; CSS `uppercase` does NOT
  change accessible names — query the RAW text ("Search" not "SEARCH").
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- lucide-react REMOVED brand icons (Facebook/Twitter/Instagram,
  React/JS/Angular/Vue logos → undefined) — verify exports with
  `node -e "console.log(typeof require('lucide-react').Facebook)"`;
  use inline SVG brand paths (simple-icons) for course tiles + socials,
  lucide for Menu/X/Search.
- NAV COLOR TRAP: the source navbar is TRANSPARENT (absolute over the
  hero photo) and its links are WHITE (`rgb(255,255,255)` computed) —
  do NOT ship a solid white bar with black links. Logo stays blue.
- FOOTER COLOR TRAP: the source footer has NO background rule — it's
  the white page bg (LIGHT). Do NOT invent a dark footer. Text
  `#364d59`, links `rgba(0,0,0,0.5)`.
- `.heading h2` is BLUE `#0779e4` (30px weight 700) with a 12px
  uppercase `.caption` above — this theme is NOT black-heading like
  most ColorLib themes.
- Testimonial stars: 4 filled + 1 outline (4.5/5) — render 4 `Star`
  - 1 `StarOutline` (lucide `Star` / `StarHalf` won't match; use
    `Star` + `Star` with `fill="none"` or outline variant) in yellow
    (`text-warning` ~ `#ffc107`).
- Featured band overlap: the row needs `margin-top:-150px` + z-index
  above the hero; the section keeps `bg-light pb-0` so the cards'
  white bottom edge sits on grey.
- Brand icon font (`brand-*` classes) does not exist in lucide —
  inline SVG marks for React (atom), JavaScript (JS square), Angular
  (shield), Vue (V), Illustrator (Ai), Photoshop (Ps) or simple-icons
  paths; size 40px in tiles, small inline next to titles elsewhere.
- Course tiles: title is `#ccc` (light grey) and turns BLACK on hover
  (NOT blue) — the blue is the icon/tile text color.
- The search input is `type="search"` (role searchbox) with a submit
  button — test with `getByRole('searchbox')` + `getByRole('button',
{ name: 'Search' })`.
- Pagination: 5 circles, item 2 is active (blue) and not a link.
- The source repeats copy everywhere (same title ×5, identical blurbs,
  identical footer columns) — vary text, keep structure.
- No carousel/owl/fancybox/AOS on this template — testimonials are a
  static 3-card row; pagination decorative. Nothing to reimplement.
