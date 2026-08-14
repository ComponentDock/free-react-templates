# Ascenda (ColorLib Stodeo) — Tasks & Design Notes

> Recreation of ColorLib "Stodeo — Free Bootstrap 5 Website Template by
> Colorlib" (https://colorlib.com/wp/template/stodeo/) under the NEW name
> **Ascenda** (ascend — growth, matching the "best solution for your
> business to grow" hero copy; single lowercase word, no collision with
> `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-14), per the monorepo naming mandate (never reuse the ColorLib
> source name). TEMPLATES.md category: Bootstrap (216).

## Design notes (replication findings)

- **Original:** ColorLib "Stodeo" — free Bootstrap 5 business/agency
  landing page (transparent navbar + flat white centered hero, image +
  navy-box welcome band, overlapping counter section, navy "Grow your
  business" split with 2 service cards, 3-post blog strip, 4-icon "Why Are
  We Awesome?" grid, 4-slide testimonial slider, light-grey 5-widget
  footer). The recreation brands itself **Ascenda**.
- **Live preview analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/stodeo/` — HTTP 200, ~207 KB HTML +
  `css/style.css` ~57 KB (curl; plus tiny-slider, aos, glightbox, icomoon,
  flaticon). Standard preview.colorlib.com host. The TEMPLATES.md
  screenshot (`stodeo-free-template.jpg`, 1200×946, viewed in browser)
  shows navbar + hero + welcome band + top of counters; it matches the
  live render 1:1 (below-the-fold sections captured from the live DOM +
  CSS instead).
- **Visual design (screenshot):** white/transparent navbar — blue "Stodeo"
  logo left, blue-grey links right; hero = centered: uppercase cyan
  "WELCOME TO OUR SITE" eyebrow, bold dark-navy headline "We have the best
  solution for your business to grow.", grey subtext, solid blue PILL
  "Get started" button; welcome band = office team photo left, deep-navy
  `#133ea1` box overlapping on the right with white text + outline
  "About us →" pill; counter section top peeks in with big cyan "12" over
  "Years of experience". Color story: BLUE `#3369e7` primary, deep navy
  `#133ea1` boxes, cyan `#00aaff` accents, white backgrounds, light grey
  `#efefef` footer. Not a dark/parallax template — clean corporate look.

## Section order (1:1 — implement in this order)

1. **Navbar** — transparent absolute bar over the hero (`position:
absolute; top: 0; z-index: 9; width: 100%; padding: 20px 0`). Left:
   logo "Ascenda" (24px/700/`#3369e7`). Right: links 14px
   `rgba(51,105,231,0.7)` hover `#3369e7`: Home · Why Ascenda · Menu One ·
   Menu Two · Dropdown (submenu: Sub Menu One/Two/Three) · Our Services ·
   Gallery · About · Contact Us. Mobile <lg: burger toggle → slide-in
   `.site-mobile-menu` panel (same links + close control).
2. **Hero** — `.section`-less, flat WHITE, padding 7rem 0, centered
   `col-lg-7 text-center`: subheading "Welcome To Our Site" (uppercase,
   14px, `#00aaff`) → h1 "We have the best solution for your business to
   grow." (700, `#081b46`) → paragraph (`w-75 mx-auto`) → "Get started"
   btn-primary (solid `#3369e7` pill, radius 30px, padding 8px 25px /
   left-right 30px, 13px). NO hero image.
3. **Welcome band** — `.row.g-0`: left photo `col-lg-6` (`.img-wrap`,
   `margin-right: -100px` so the image tucks under the box); right
   `col-lg-6` `.box` navy `#133ea1` (padding 50px 100px 50px 150px,
   z-index 2): white/50 paragraph + "About us" outline pill
   (`.btn-outline-dark-bg.has-arrow`: transparent, `#00aaff` border, white
   text, trailing ArrowLeft icon, padding-right 45px).
4. **Why choose us + counters** — `.row.g-0`: left `col-lg-5` aside-box
   (padding-top 80px): counters "12 / Years of experience" and "34 / Team
   members" (`strong` 50px `#00aaff` + label); right `col-lg-7` white box
   `margin-top: -50px` (OVERLAPS counter column; box-inner padding 140px
   100px): subheading "Why Stodeo?" (→ keep as "Why Ascenda?") + h2
   "You still thinking about why you should choose us?" + paragraph +
   "Why Stodeo" outline pill (→ "Why Ascenda").
5. **Grow your business** — `.row.g-0`: left photo `col-lg-6`; right
   `col-lg-6.relative` `.box-wrap` (absolute, left 0, bottom 0, z-2, navy
   `#133ea1`, `::after` width 200% extends the band right; inner padding
   15rem 50px 100px): h2 white "Grow your business" → white/50 paragraph →
   2 `.service-2` cards (Lightbulb / Trophy icons 50px white + h3 16px
   white + white/50 blurb) → "Our services" outline pill (mt-4).
6. **Recent Blog Posts** — `.row.g-0`: left `col-lg-3` EMPTY spacer; right
   `col-lg-9` box: subheading "Our Blogs" + h2 "Recent Blog Posts" + 3
   `.post-entry` cards (`.row.g-5`): date "23 Aug 2020" (13px `#9a9a9a`) +
   h3 link + lorem. NO images in post entries (unlike most ColorLib
   templates).
7. **Why Are We Awesome?** — centered subheading "Why Us" + h2 "Why Are We
   Awesome?" + paragraph; 4 `col-lg-3` columns: Camera · Home · Send ·
   Search icons + titles (Photograpy · Find it here · Inspire Photograpy ·
   Fly Your Dreams) + lorem.
8. **Happy Clients testimonials** — subheading "Testimonial" + h2 "Happy
   Clients"; slider with 4 slides: circular 100px avatar (person_1..4) +
   18px blockquote + name; dots bottom-center (absolute, translateX(-50%),
   bottom 0; track padding-bottom 100px).
9. **Footer** — `#efefef`, padding 70px 0, 14px: widgets "About Ascenda."
   (paragraph) · "Connect" (social circles 40px `#ccc` radius 40%, hover
   `#3369e7`) · "Navagation" (HTML5 · CSS3 · jQuery · Bootstrap ·
   Javascript) · "Services" (Web Design · eCommerce · WordPress · Frontend)
   · "Contact" (43 Raymouth Rd. Baltemoer, London 3910 · +1(123)-456-7890
   ×2 · info@mydomain.com). Copyright bar MUST credit Component Dock:
   "© <year> Ascenda — All rights reserved | Free website template at
   Component Dock" linking https://www.componentdock.com/.

## Design tokens (from css/style.css, verified 2026-08-14)

- Primary `#3369e7` (logo, nav hover, btn-primary, footer links, social
  hover) — `@theme` token.
- Deep navy `#133ea1` (welcome box, box-wrap band).
- Accent cyan `#00aaff` (subheadings, counter numbers, outline btn border
  - hover fill) — `@theme` token.
- Heading navy `#081b46` (`.heading` h1/h2).
- Neutrals: `#fff`, `#212529`, `#7a7a7a`, `#9a9a9a` (dates), `#efefef`
  (footer), `#777`/`#888` (footer text), `#ccc` (social circles).
- Font: "Noto Sans JP" ONLY (body + headings + logo) via Google Fonts.
- Buttons: ALL pills — radius 30px, padding 8px 25px (LR 30px), 13px.
  Primary solid `#3369e7`; outline variants transparent + `#00aaff`
  border, hover fill `#00aaff`; `.has-arrow` = trailing ArrowLeft at
  right 15px, padding-right 45px.
- Radius: pills 30px, avatars 50% 100px, social circles 40% 40px.
- Spacing: sections + hero 7rem padding; box paddings 50/100/150px;
  box-wrap 15rem/50px/100px; footer 70px; counters 50px numbers.

## Implementer tasks

1. `apps/ascenda` scaffold: copy simplest existing app (e.g. `apps/soar`),
   rename package `@free-react-templates/ascenda`, set `public/CNAME` →
   `ascenda.free.componentdock.com`, `homepage` →
   `https://ascenda.free.componentdock.com`, register workspace +
   `npm install` at root (lockfile!), verify
   `grep -c "free-react-templates/ascenda" package-lock.json`.
2. `src/index.css`: Tailwind v4 `@theme` tokens (`--color-brand:
#3369e7; --color-accent: #00aaff; --color-navy: #133ea1; --color-ink:
#081b46`), Noto Sans JP via `<link>` in index.html; keep
   `injectUiSource()` in vite.config.ts.
3. Components (one `describe` per component, scenario-style tests first):
   `Navbar` (dropdown + burger/mobile menu), `Hero`, `WelcomeBand`,
   `Counters`, `GrowBusiness` (service cards), `BlogPosts`, `WhyUs`,
   `Testimonials` (slider), `Footer`.
4. Placeholder images: `https://picsum.photos/seed/ascenda-<n>/<w>/<h>`
   (welcome img_1 ≈ office/team scene, grow img_2 ≈ desk/workspace,
   persons 1–4 ≈ portrait-ish seeds; screen seeds before committing).
5. Icons: lucide-react (Lightbulb, Trophy, Camera, Home, Send, Search,
   ArrowLeft); social brands as inline SVG.
6. jsdom 30: copy MemoryStorage polyfill from `apps/cura/src/test/setup.ts`
   if the app needs localStorage.
7. Gate: `scripts/verify-app.sh ascenda` (typecheck + lint + knip + fallow
   - vitest 100% + build). PR: `feat: add Ascenda (ColorLib Stodeo)`,
     immediate squash merge, TEMPLATES.md `[x]` + surge URL + homepage +
     `npm run readme:status` bookkeeping.
