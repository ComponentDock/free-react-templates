# Landly (ColorLib Realtors) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Landly** (NEW name —
> the ColorLib source keeps its name "Realtors"). Implementation ships on
> `feat/template-landly` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Realtors" — free real-estate website template
  (source: https://colorlib.com/wp/template/realtors/). TEMPLATES.md row:
  line 485. The `realtors` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/realtors/` (HTTP 200, 32.5KB HTML,
  `<title>Realtors &mdash; Website Template by Colorlib</title>`). No
  subpath quirk. Stylesheets: `css/style.css` (26KB — custom tokens),
  `css/bootstrap.min.css` (Bootstrap 4 with `$primary: #91b029`),
  owl/datepicker/fancybox/aos css, `fonts/flaticon` glyph icons. JS bundle
  (jquery, owl, sticky, waypoints, animateNumber, fancybox, stellar,
  datepicker, main.js) drives: sticky navbar, the two carousels (properties,
  testimonials), the For Rent/For Sale tabs, the mobile slide-in menu.
  React replacements: scroll listener (navbar), React tabs, scrollable rows
  for carousels, repo mobile-menu pattern. Screenshot
  (`realtors-free-template.jpg`, 1200×946, browser-verified 2026-08-14)
  matches the live render above the fold (hero + filter bar); live DOM is
  authoritative for the rest.
- **✅ Preview URL is the default one** — no `/bb/`-style subpath quirk.
- **⚠ Footer authoring artifact:** the middle link-list column's `h3` is a
  copy-paste duplicate "Subscribe" (same as the newsletter column). Use a
  sensible heading (e.g. "Quick Links") and note the deviation in the PR.
  Keep the link list itself 1:1.
- **⚠ Reference spelling:** the About section's second row is "Vission"
  (sic) — preserve as-is. Service subtitles all read "Estate Management".
- **⚠ Spec spelling:** the hero address in the reference is "156/10 Sapling
  Street" in the DOM (the screenshot OCR'd "Spring" — DOM is authoritative).
- **⚠ Bootstrap `.btn-primary` rest text color is `#212529`** but every
  usage on the page pairs it with `.text-white` — render white text.
- **⚠ "Realtors" logo text:** the recreation brand is **Landly** (logo +
  `<title>`), nav links unchanged: Home, Agents, Property, About, Blog,
  Contact.
- **Carousel replacement:** the Latest Properties section loops 3 unique
  cards twice (6 total) and testimonials show 3. Render as horizontally
  scrollable rows (overflow-x-auto + snap) so everything is reachable
  without JS; keep the exact card anatomy.

## Tasks (implementation order)

1. **Scaffold app** — copy the simplest existing app (e.g. `apps/kern` or
   `apps/wavelength`), rename package to `@free-react-templates/landly`,
   `public/CNAME` = `landly.free.componentdock.com`, `homepage` =
   `https://landly.free.componentdock.com`. Run `npm install` at repo root
   so `package-lock.json` registers the workspace. Keep `injectUiSource()`
   in `vite.config.ts`.
2. **Theme tokens** (`src/index.css` `@theme`): primary `#91b029`,
   primary-hover `#779122`, body `#364d59`, ink `#000`, light `#f6f5f5`,
   card `#222`, muted whites for footer/hero text. DM Sans via Google Fonts
   `<link>` in `index.html` (weights 300–700).
3. **Navbar** — transparent over hero; on scroll (window.scrollY > ~80):
   white bg + shadow `4px 0 20px -5px rgba(0,0,0,.2)` + tighter padding,
   logo/links → `#000`, active/hover → `#91b029`. Links: Home, Agents,
   Property, About, Blog, Contact (anchor `#`s). Mobile: hamburger toggle
   with `aria-expanded`, slide-in menu, closes on selection.
4. **Hero** — full-bleed section min-h 600px, bg image
   `https://picsum.photos/seed/landly-hero/1600/900` + `rgba(0,0,0,.6)`
   overlay, centered column: green price `$1,570,000`, h1 "Beautiful House
   In Australia" (3rem/2rem white), address + MapPin icon (green), specs
   row (Maximize + "2911 Sq Ft.", BedDouble + "2", Bath + "2"), green
   "Learn More" ButtonLink.
5. **Filter bar** — `-mt-*`/translate to overlap hero bottom, bg primary;
   For Rent (active: white bg/green text) / For Sale tabs via React state;
   form per spec: All Types select, Title input, Address input; Any
   Bedrooms, Any Bathrooms, Min Price, Max Price selects; black full-width
   Submit (Button). Fields 55px white, green focus ring. Labeled
   (visually-hidden labels OK).
6. **Services + About** — `col-lg-6` black panel with 2×2 service grid
   (House/Bathtub/Wind/Calculator icons green, uppercase 15px white titles,
   14px "Estate Management"); `col-lg-5 ml-auto` About column: uppercase
   heading + green rule (70×2px), two Mission/Vission rows with icon +
   heading + lorem.
7. **Latest Properties** — black section, centered white uppercase heading
   - rule + subtext; scrollable row of 6 cards (3 unique × 2): image,
     `#222` panel (padding 30px), spec row w/ green icons, price link
     (`$570,000` / `$1,570,000` / `$980,000`), address w/ MapPin. Card link
     href `#` (reference points to property-single.html).
8. **Our Agents** — 3 cards: photo with green L-corner frame (absolute
   2px solid `#91b029` box at -20px/-20px, width 50%), name, meta "N
   Properties", 3 round `#efefef` social icon links (Facebook, Twitter,
   Instagram from lucide-react).
9. **Testimonials** — `bg-primary` section, 3 cards: 90px photo, role meta,
   white 20px name, quote, 4 Star icons; scrollable row.
10. **Blog Posts** — `bg-light` section, 3 cards: image, white panel
    (padding 20px), 22px title link (hover green), meta "July 17, 2019 by
    Admin", excerpt.
11. **Footer** — black, 3 cols: Subscribe form (email input + green "Send
    Now"), link list w/ green arrow bullets (Quick Links heading — dev
    note above), About col; bottom bar with border-top and copyright
    linking **Component Dock** (https://www.componentdock.com/).
12. **Tests (TDD, 100% coverage)** — one `describe` per component;
    scenario-style `it`s mirroring the spec's Gherkin; user-event for tab
    switch, mobile menu toggle, scroll-to-sticky (mock scrollY),
    form submit. jsdom 30 has no localStorage — copy the MemoryStorage
    polyfill from `apps/cura/src/test/setup.ts` if needed.
13. **Gate + ship** — `scripts/verify-app.sh landly`; open PR
    `feat/template-landly` → merge immediately; update TEMPLATES.md
    Realtors row `[~]`→`[x]` + surge URL + `npm run readme:status`.

## Fidelity checklist (section → reference → landly)

| Section           | Reference anchor (live DOM)               | Key fidelity points                                 |
| ----------------- | ----------------------------------------- | --------------------------------------------------- |
| Navbar            | `header.site-navbar` (absolute, sticky)   | transparent→white on scroll; green active/hover     |
| Hero              | `site-section-cover overlay` (hero_1.jpg) | overlay rgba(0,0,0,.6); green price; specs row      |
| Filter bar        | `realestate-filter` (translateY(-100%))   | overlaps hero bottom; For Rent/For Sale tabs + form |
| Services + About  | `site-section` (bg-black p-5 panel)       | 2×2 services; Mission/Vission (sic)                 |
| Latest Properties | `site-section bg-black block-14` (owl)    | 6 cards, `#222` panels, prices $570k/$1,570k/$980k  |
| Our Agents        | `person-29381` (green L-corner frame)     | 3 agents, meta counts, round socials                |
| Testimonials      | `site-section bg-primary` (owl block-13)  | 90px pics, white stars, meta roles                  |
| Blog Posts        | `site-section bg-light` (post-entry-1)    | 3 cards, white panels, "by Admin" meta              |
| Footer            | `site-footer` (menu-arrow list)           | Subscribe form, link list, Component Dock copyright |
