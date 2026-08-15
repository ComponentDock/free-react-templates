# Pixora (ColorLib Yaseen) — Tasks & Design Notes

> Implementer-owned prep: no prep-stream spec existed for this source, so the
> implementer wrote the spec (`openspec/specs/template-pixora/spec.md`) as
> part of the claim work. Implementation ships on `feat/template-pixora`.

## Design notes (replication findings)

- **Original:** ColorLib "Yaseen" — free creative / photography landing page
  template (source: https://colorlib.com/wp/template/yaseen/). TEMPLATES.md
  has FOUR copies of this item (lines 540, 2105, 2482, 2580 — mark EVERY
  copy `[x]` when done).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/yaseen/`
  (HTTP 200, 16.5 KB; master stylesheet `css/main.css` ~30 KB, fully
  extracted). Libs: bootstrap, font-awesome (footer social), linearicons
  (lnr icon font: menu, sun, arrow-right), nice-select, magnific-popup.
  Google Font **Poppins**. Cross-checked with the TEMPLATES.md screenshot
  (`yaseen-creative-photography-website-landing-page-template.jpg` 1200×972,
  browser-viewed): soft purple→blue gradient over a blurred hooded-figure
  photo in the hero; below, a white section with a warm golden-hour photo of
  a woman in a dark polaroid frame + "VISUALLY / CLEAN & PERFECT" heading +
  "LEARN DETAILS". Demo brands itself "YASEEN"; recreation uses the NEW name
  **Pixora** (photography/creative).
- **Visual design (DOM + CSS tokens + screenshot):** light, airy, minimalist
  creative landing. Header: logo left + 3 nav links (Home / Generic /
  Elements — demo pages; recreation uses single-page anchors Home / About /
  Contact) + hamburger right. Hero (540px): bg photo `img/banner-bg.jpg` +
  gradient overlay `hero-overlay-bg`; centered h1 uppercase white
  "<span>Brand</span> <br> What else do you need?" (36px weight 100, span
  600) + white paragraph. About (white): left polaroid photo (outline 10px
  #777 offset -54px + border 15px 10px 85px 85px transparent); right sun
  icon + h1 "Visually clean & Perfect" (36px 100 #a387ff, span 600 #000) +
  blurb + "Learn Details" uppercase link. Features (GRADIENT bg): 6 white
  cards (40px padding, h2 1.125em/600 uppercase letter-spacing 2px, no
  icons). Facts: 4 stats — 48px/600 number + 24px/100 #a387ff caption (2536
  New Followers / 6785 Site Visitors / 1059 Online now / 2239 New Customers).
  Services (#f9faff bg): 3 cards — image + h2 + blurb + "View Details" link
  (arrow icon). Feature-bottom (white): 3 rows — count h1 48px #a387ff
  (01/02/03) + dash-prefixed h2 + blurb. Subscription (GRADIENT bg):
  "Subscribe <br> for our Newsletter" (h3 36px 100, span 600) + "We won't
  send any kind of spam" + email input (radius 25px, #f9f9ff, lh 50px) +
  "Get Started" pill. Footer (white): 3-menu links, 4 social icons (facebook
  / twitter / dribbble / behance, #777 hover #a387ff), copyright line with
  the mandated Component Dock link.
- **Tokens:** gradient #91d1ff→#a387ff (135deg); brand purple #a387ff; dark
  #222222; body #777777; light bg #f9faff / #f9f9ff; Poppins 100–600; pill
  buttons (radius 20px, 1px white border, transparent bg, #222 text; hover
  gradient fill + white); section padding 100px (90 services, 60 footer).

## Implementation tasks

- [ ] Scaffold `apps/pixora` (copy the simplest existing app; keep
      `injectUiSource()` + `plugins: [react(), injectUiSource(),
      tailwindcss()]` in vite.config.ts; rename package
      `@free-react-templates/pixora`; homepage `https://pixora.free.componentdock.com`;
      public/CNAME `pixora.free.componentdock.com`; jsdom 30 localStorage
      polyfill only if persistence is used — newsletter uses component state,
      no storage needed)
- [ ] `npm install --package-lock-only` at the worktree root (NEVER full
      install — node_modules is a symlink to the shared tree) and verify
      `grep -c "free-react-templates/pixora" package-lock.json` >= 1
- [ ] index.html: title "Pixora — Creative Landing Page", Poppins Google
      Fonts link (100;300;400;500;600)
- [ ] index.css: `@theme` tokens — brand `#a387ff`, brand-light `#91d1ff`,
      ink `#222222`, body `#777777`, mist `#f9faff`; gradient utility
      (`bg-gradient-to-br` or `[background-image:...]` arbitrary)
- [ ] Components: Navbar (logo + 3 anchors + hamburger + mobile menu with
      close + Escape), Hero (bg photo + gradient overlay + h1 + p), About
      (polaroid photo + Sun icon + heading + blurb + Learn Details),
      Features (6 cards on gradient), Facts (4 stats), Services (3 image
      cards + View Details), NumberedRows (01/02/03), Newsletter (input +
      Get Started → success message), Footer (menu + 4 inline-SVG socials +
      Component Dock link)
- [ ] App.tsx composes sections in demo order; `main` landmark; header
      banner landmark; footer contentinfo landmark
- [ ] Tests (colocated *.test.tsx) for every component + App composition;
      newsletter submit → success; mobile menu open/close/Escape; 100%
      coverage
- [ ] Screen picsum seeds (hero bg + about + 3 services) — subject
      screening per the seed-screening method
- [ ] `scripts/verify-app.sh pixora` green + `npm run spec:validate` green
- [ ] PR "feat: Pixora — Creative landing page template (ColorLib Yaseen)"
      + immediate squash merge
- [ ] Bookkeeping on main: TEMPLATES.md `[x]` on ALL FOUR rows + surge URL,
      homepage, `npm run readme:status`, push
