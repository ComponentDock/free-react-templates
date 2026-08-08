# Headline (ColorLib World) — Tasks & Design Notes

> Recreation of ColorLib "World"
> (https://colorlib.com/wp/template/world/) under the NEW name
> **Headline** (a newspaper/magazine headline), per the monorepo naming
> mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "World" — blog & magazine HTML template (2018).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/world/ (HTTP
  200, ~214 KB HTML + `style.css` ~38.6 KB parsed for tokens; imports
  bootstrap/animate/owl.carousel/magnific-popup/font-awesome/themify-icons).
- **Visual design (screenshot `world-free-template-1.jpg`):** magazine
  editorial look — dark night-city skyline photo hero with gradient overlay
  and white text; transparent navbar with white "WORLD" logo; white content
  area, 2-column layout (2/3 posts + 1/3 sidebar); pure-blue (#0000ff)
  accents on tags, active tab underline, active hero number; clean
  sans-serif typography (Ubuntu + Work Sans); dark #161616 footer.
- **Structure (1:1, section order):**
  1. Preloader (dark #232323).
  2. Navbar: logo "WORLD", links Home (active) / Pages (dropdown) /
     Gadgets / Lifestyle / Video / Contact, search toggle (`#search-wrapper`
     - `#close-icon`); transparent over hero, black when sticky.
  3. Hero: owl-carousel of 2 full-bleed bg-image slides (600px,
     rgba(0,0,0,0.7) overlay); below it a numbered featured-post strip
     (`hero-post-slide`) — 4 items, each a number circle + title; active
     item gets blue-bordered circle (5px border: blue top/bottom/right,
     gray left) + white bold title.
  4. "Don't Miss" (col-lg-8): tabs All (active) / Style hunter / Vogue /
     Health & Fitness / Travel / Gadgets / More (dropdown: Sports,
     Politices, Features); 9 panes; each pane = 1 large card (thumbnail +
     post-cta tag + h5 headline + meta) + 4 small `post-style-2` horizontal
     cards.
  5. "What's Trending" (mt-50): tabs All / Style hunter / Vogue / Health &
     Fitness / Travel / Gadgets; 9 panes; each pane = a carousel slide of 4
     `post-style-2` cards (`single-cata-slide`).
  6. Sidebar (col-lg-4): About World widget (mango-quote blurb), Top
     Stories (5 widget-post rows), Stay Connected (social icon row),
     Today's Pick (thumbnail + headline card).
  7. Featured card row (3 cols): `post-style-3` cards — thumbnail,
     post-tag link, content meta.
  8. Latest Articles (col-lg-8, 4 horizontal `post-style-4` rows) + Most
     Popular Videos (col-lg-4, 2 stacked cards).
  9. Load More button (pill `world-btn`).
  10. Footer (#161616): col 1 copyright ("Copyright © 2018 All rights
      reserved | This template is made with <3 by Colorlib"), col 2 link
      list (Home, Fashion, Lifestyle, Contact, Gadgets, Video), col 3
      Subscribe widget (email input + subscribe button).

## Design tokens (from style.css)

- Brand: `#0000ff` (pure blue) — hover links, active tab underline, cta
  tag text, active hero number, button hover fill
- Neutrals: `#ffffff` `#f1f1f1` `#8d8d8d` `#000000` `#161616` `#232323`
  `#d7d7d7` `#d8d8d8` `#959595`
- Fonts: Ubuntu (300/400/500/700, headings/links) + Work Sans
  (300–700, body), Google Fonts
- Buttons `.world-btn`: pill (border-radius 50px), height 35px, padding
  0 25px, 1px solid #d7d7d7, transparent; hover = #0000ff fill + white text
- Post-cta tag: absolute top-left over thumbnail, white bg, uppercase 10px,
  blue text
- Sections: white content bg; hero photo + dark overlay; footer #161616;
  sidebar widgets separated by 2px #f1f1f1 borders

## Tasks (implementer order)

- [ ] Copy simplest existing app (e.g. apps/stratos) → `apps/headline`,
      rename package to `@free-react-templates/headline` (register in
      workspace + lockfile)
- [ ] `@theme` tokens: headline blue scale + neutrals + fonts
- [ ] `index.html`: title "Headline — Blog & Magazine Template", Google
      Fonts links (Ubuntu + Work Sans)
- [ ] Navbar (site name, anchor links, More dropdown, search toggle,
      sticky black variant)
- [ ] Hero (2-slide photo carousel + numbered featured-post strip with
      active highlight)
- [ ] "Don't Miss" tabs (tablist + 9 panes, 1 large + 4 small cards)
- [ ] "What's Trending" tabs + carousel slides (4 cards per slide)
- [ ] Sidebar (About, Top Stories, Stay Connected socials, Today's Pick)
- [ ] Featured card row (3 post-style-3 cards)
- [ ] Latest Articles (4 rows) + Most Popular Videos (2 cards)
- [ ] Load More pill button
- [ ] Footer (copyright + links + Subscribe widget) + preloader
- [ ] Tests first (red) per spec scenarios → implement (green) → 100%
      coverage
- [ ] `scripts/verify-app.sh headline` green; open PR, squash-merge
      immediately
- [ ] TEMPLATES.md: mark World line(s) `[x]` + surge URL; README status
      regen (`npm run readme:status`)

## Fidelity notes

- Match section order 1:1; paraphrase copy but keep content kinds (tab
  names, card headline + tag + meta, numbered strip, widget titles).
- The demo repeats the same van Gogh headline everywhere — use distinct
  plausible headlines per card (paraphrase OK) but keep the tab names and
  widget titles exact.
- Never copy assets: seeded picsum `headline-<n>` placeholders, lucide +
  inline SVG brand icons for socials, Google Fonts only.
- Brand color is PURE BLUE `#0000ff` (not a Tailwind default) — put it in
  `@theme` and use via Tailwind classes.
- Category tabs: real tab semantics (tablist/tab/tabpanel) with keyboard
  support; carousels = minimal prev/next + dots, no owl-carousel.
- "World" appears 3× in TEMPLATES.md (lines ~297, ~538, ~2222) — mark ALL
  matching World lines `[x]` when done.
