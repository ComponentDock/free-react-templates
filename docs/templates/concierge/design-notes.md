# Concierge — prep notes (ColorLib "Hotell")

Recreation target: https://colorlib.com/wp/template/hotell/
Preview: https://preview.colorlib.com/theme/hotell/ (HTTP 200, fetched 2026-08-13)
App: `apps/concierge` · package `@free-react-templates/concierge`
CNAME/homepage: `concierge.free.componentdock.com`

## Structure order (build top to bottom)

1. Navbar (transparent over hero; brand + 8 links + dropdown + phone)
2. Hero (100vh cover photo, black/40 overlay, 50px/700 white headline,
   teal pill "See video")
3. Booking search bar (white card, -50px overlap, 4 fields + Find now)
4. Our Services (bg-light; 6 feature cards carousel + Prev/Next pills)
5. About (teal bleeding panel behind photo + heading + 2 paragraphs)
6. Blog Posts (5 image cards carousel + Prev/Next)
7. FAQ (heading col + 3-item accordion, flush)
8. Testimonials (bg-light; quote cards carousel, centered Prev/Next)
9. Instagram (8 image tiles carousel)
10. Footer (bg-light; 3 link widgets + Contact + Connect socials +
    copyright w/ Component Dock)

## Design notes (fidelity-critical)

- Palette: teal `#00917c` on white / `#f8f9fa` light sections. Section
  headings are UPPERCASE 24px bold teal (Work Sans). Body 14px Roboto.
- Buttons: ALL pills (radius 30px), padding 15px 30px, 14px. Primary =
  teal bg, white text; hover `#26a290`; active `#33a796`. Slider nav pills
  are transparent with 1px `rgba(0,0,0,0.1)` border, hover border black.
- Hero overlay: flat `rgba(0,0,0,0.4)` pseudo-element — NOT a gradient.
- Booking widget: white, `margin-top:-50px` (overlaps hero), padding 30px,
  shadow `0 15px 30px rgba(0,0,0,0.1)`. Inputs 54px tall, transparent bg,
  border `rgba(0,0,0,0.1)`. Dates = flatpickr in source → use NATIVE date
  inputs + lucide Calendar icons (no new dep). Select = "# of Person" with
  1/2/3/4/5+.
- Services: `.feature` card = white, padding 50px 50px 100px, shadow
  `0 15px 30px rgba(0,0,0,0.05)`, 70px teal icon, 20px bold h3, black-50
  blurb, "Learn More" = uppercase 12px/700 `#888` ls .1rem → black hover.
  Wrap has `margin-bottom:-250px` (next section tucks under).
  Icons (flaticon → lucide): Trekking→Mountain, The Map→Map,
  Suitcase→Briefcase, Island Hoping→Palmtree, World Round→Globe,
  Travel with Plane→Plane.
- About: `.has-bg:before` = absolute teal `#00917c`, width 200%,
  left -150%, top/bottom -100px, z-index -1 (panel bleeds behind photo).
  Image rounded + shadow. Right col: heading + 2 paragraphs.
- Blog: `.post-entry` = thumbnail img + body (pencil icon, h3 title,
  "Read More" uppercase link).
- FAQ: Bootstrap accordion-flush → client-side expand/collapse. Active
  state: text `#008370`, bg `#e6f4f2`. 3 items only (Is it free? / How to
  install this template? / Where can i get help?) + paraphrased answers.
- Testimonials: white card padding 40px, shadow `0 10px 20px
rgba(0,0,0,0.05)`, Quote icon floating at top -20px (shadow 0.2). Nav
  pills centered BELOW the slider (absolute bottom center). Paraphrase
  name/role (source: John Doe, Creative Director).
- Instagram: image tiles + Instagram icon overlay.
- Footer: 3 link widgets (Home: 7 links / Practice Area: 5 / Services: 4)
  - Contact (address, 2 phones, email) + Connect socials (30px teal
    circles, black icons, radius 50%) + copyright bar. Footer links
    `rgba(0,0,0,0.5)`, hover black with teal underline `:before`.
    Copyright MUST include https://www.componentdock.com/ link (replaces
    "made with ❤ by Colorlib").
- Carousels: 4 of them (services, posts, testimonials, instagram) — all
  tiny-slider in source → client-side state (index + Prev/Next). No
  tiny-slider dep.
- AOS fade-up animations in source → optional; keep subtle or skip
  (client-side) — fidelity of layout matters more than scroll fx.
- Navbar: transparent over hero; links 14px `rgba(255,255,255,0.5)`,
  hover/active white. Dropdown ("Dropdown" item w/ 3 sub items) →
  hover/click submenu. Mobile: hamburger + slide-in menu (site-mobile-menu
  pattern).
- Video "See video" = glightbox → YouTube in source; implement as modal
  with embedded player or decorative button — no glightbox dep.

## Tasks outline

- [ ] Scaffold `apps/concierge` (copy simplest existing app; rename
      package; CNAME; injectUiSource in vite.config.ts; MemoryStorage
      polyfill in test setup if localStorage used).
- [ ] `npm install` at root (lockfile registration) + verify
      `grep -c "free-react-templates/concierge" package-lock.json`.
- [ ] index.css: `@theme` tokens (brand-teal #00917c, teal-hover #26a290,
      teal-active #33a796, teal-deep #008370, teal-tint #e6f4f2, light-bg
      #f8f9fa); Google Fonts Work Sans + Roboto in index.html.
- [ ] Navbar (+ dropdown, mobile menu) + tests.
- [ ] Hero + See video modal/button + tests.
- [ ] Booking search bar (native date inputs, select, Find now) + tests.
- [ ] Services carousel (6 cards + Prev/Next) + tests.
- [ ] About (teal panel + copy) + tests.
- [ ] Blog carousel (5 cards + Prev/Next) + tests.
- [ ] FAQ accordion (3 items) + tests.
- [ ] Testimonials carousel (3+ cards, centered nav) + tests.
- [ ] Instagram carousel (8 tiles) + tests.
- [ ] Footer (widgets, socials, Component Dock copyright) + tests.
- [ ] `npm run verify:app -- concierge` green (typecheck + lint + knip +
      fallow + 100% coverage + build).
- [ ] PR: branch `feat/template-concierge` → PR w/ provenance + tokens →
      immediate squash merge → bookkeep TEMPLATES.md row(s) [x] + surge
      URL + readme:status.

## Reference

- Preview HTML: /tmp/hotell.html (34 KB)
- Stylesheet: /tmp/hotell-style.css (64 KB, parsed for tokens)
- Screenshot: /tmp/hotell.png (converted from AVIF jpg, 1200×946)
