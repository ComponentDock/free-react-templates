# Steelcraft (ColorLib Lendo) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-steelcraft`.

## Design notes (replication findings)

- **Original:** ColorLib "Lendo" — corporate INDUSTRIAL / MANUFACTURING
  company site (source: https://colorlib.com/wp/template/lendo/, Bootstrap 5
  category; the live preview's `<title>` is "Industry | Template", so the
  slug hosts ColorLib's "Industry" theme). TEMPLATES.md has TWO copies of
  this item (lines 600, 1952 — mark ALL when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lendo/
  (HTTP 200, ~33 KB HTML; `assets/css/style.css` ~72 KB parsed for tokens).
  Stack is jQuery + Bootstrap 5 + Owl Carousel (hero/brands/testimonials) +
  Magnific Popup (video) + Slicknav (mobile menu) + FontAwesome/themify
  icon fonts — recreate all interactivity client-side in React.
- **Screenshot:** `lendo-free-template.jpg` (1200×946, viewed in browser) —
  thin black top bar with contact info; white nav bar ("Lendo" logo + red
  mark, menu Home/Services/Projects/About/Blog/Shop, red "Get Free Quote"
  button right); hero = dark-overlaid construction street scene (white
  truck with logo, orange traffic cones) with centered white headline "Best
  technology and awesome service we offer" + subtext + red "Check Our
  Services" button; below the fold a light-gray section with the
  "A height level service provider…" heading and four white cards with red
  line icons (factory, high-rise, growth chart, tools). Clean corporate
  industrial aesthetic.
- **New name:** Steelcraft (heavy-industry / steel-manufacturing vibe).
  Single lowercase word, no collision with `apps/` or existing spec
  folders. NOT "lendo" and NOT "industry" (the rendered title) — never
  reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** INDUSTRIAL RED
  `#E61818` brand (`.btn_10` buttons, "Get Free Quote" + "Learn More"
  links, counter numbers, 5px CTA top border, newsletter input border) on
  white / `#F2F4F8` (`section-bg`) canvas with `#000` top bar, `#1A1A1A`
  CTA band + footer headings, `#132E43` navy counter labels. Single font:
  Jost (body 16px; section h2 40px/400; counters 50px/600). All `.btn_10`
  buttons radius 0 (flat), padding `21px 33px 21px 25px`, arrow icon.
  Service cards white radius 5 padding `30px 20px 25px`. Video play button
  100px white circle, glyph `#F04506`. Hero overlay `rgba(29,29,29,0.5)`.

## Structure (1:1, section order — from the live DOM)

1. **Header** (`header-area header-transparent`):
   - `header-top` (hidden on mobile, bg `#000`): left phone "+10 (78)
     675-9064" / email "technology@industry.com" / hours "Sun - Fri
     (10AM - 7PM)"; right red text link "Get Free Quote".
   - `header-bottom header-sticky`: logo (red mark + "Steelcraft") + nav
     Home, Services, Projects, About, Blog, Contact (render the six
     top-level links; the demo's Blog Details/Elements pages are flat
     pages — drop or flatten) + hamburger → slide-in panel
     (`aria-expanded`).
2. **Hero** (`slider-area` > `slider-active dot-style` > `single-slider
hero-overly slider-bg1`): bg photo `h1_hero.jpg` + `rgba(29,29,29,0.5)`
   overlay; centered h1 "Best technology and awesome service we offer",
   p lorem, flat red btn_10 "Check Our Services" + arrow (→ services).
   The served HTML has ONE slide — a single-slide hero is faithful;
   optional 2-slide carousel with dots is acceptable.
3. **Services** (`categories-area section-bg`, #F2F4F8): eyebrow span
   "Services" + h2 "A height level service provider that recommended to
   any companies"; 4 `single-cat` white cards (radius 5, centered): red
   line icon (factory / high-rise / growth chart / tools) + h5 title +
   "Learn More" red link + arrow. NOTE: preview repeats "Power and Energ"
   ×4 — VARY to distinct services (Power and Energy + Gas & Oil appear in
   the page's JSON-LD; add Construction, Chemical Research).
4. **Brand strip** (`brand-area section-bg`): `brand-active` carousel of
   5–6 `single-brand` slides (brand1–4 repeated) — recreate as grayscale
   text/logo marks (no assets).
5. **About** (`about-low-area fix`):
   - left `col-xl-5`: `video-area section-img-bg2` (bg photo cover) —
     100px white circle play button (`#F04506` glyph) → video modal
     (YouTube `up68UAfH0d0` or a client-side dialog).
   - right `col-xl-6` `about-caption` (padding-left 50px): span "Why
     Choose Us" + h2 "We Are Largest Independent Manufacturing Company",
     p lorem, counters "450+" "Successfully completed projects" /
     "860+" "Highly specialised employees" (numbers `#E61818` 50px/600,
     labels navy), btn_10 "Learn More".
6. **Testimonial** (`testimonial-area fix top-padding`): h2 "Testimonial";
   `h1-testimonial-active dot-style` carousel of 3+ quotes + founder rows
   (name + role). VARY names; replace the demo's "Creative designer at
   Colorlib" role with a neutral title (e.g. "Creative Designer").
7. **CTA band** (`wantToWork-area w-padding2`): bg `#1A1A1A` + 5px
   `#E61818` top border; h2 "Any help needed?" (white), p lorem, btn_10
   "Contact Us".
8. **Footer** (`footer-area footer-padding`, light): 4 columns — about
   blurb + contact (phone "10 (87) 738-3940", email paraphrased — the
   demo's "contact@carwash.com" is an artifact); "Navigation" (Home,
   About, Services, Blog, Contact); "Services" (Drone Mapping, Real
   State, Commercial, Construction); "Subscribe newsletter" (white input
   `1px solid #E61818` radius 0 + submit icon button + promise copy).
   Bottom bar: copyright + social icons; the "made with by Colorlib"
   credit is REPLACED with the Component Dock link
   (https://www.componentdock.com/).

## Implementation tasks (for the implementer)

- [ ] `cp -r` the simplest existing app → `apps/steelcraft`; rename package
      to `@free-react-templates/steelcraft`; `npm install --package-lock-only`
      at root (lockfile registration); CNAME `steelcraft.free.componentdock.com` + homepage in package.json
- [ ] `src/index.css` — `@theme` tokens: brand `#E61818`, ink `#1A1A1A`,
      black `#000`, navy `#132E43`, section-bg `#F2F4F8`, overlay
      `rgba(29,29,29,0.5)`, play `#F04506`; Jost Google Fonts link in
      index.html
- [ ] Components: `TopBar`, `Navbar` (sticky + mobile toggle), `Hero`,
      `Services` (4 cards), `BrandStrip`, `About` (video popup + counters),
      `Testimonial`, `CtaBand`, `Footer` (newsletter form + Component Dock
      link)
- [ ] Tests per component mirroring the spec's Gherkin scenarios; 100%
      coverage via `scripts/verify-app.sh steelcraft`
- [ ] Placeholder images: `https://picsum.photos/seed/steelcraft-<n>/<w>/<h>`
      — screen the hero seed (industrial/urban scene) and video-bg seed
      before pinning
- [ ] TEMPLATES.md: mark BOTH lendo rows `[x]` (lines 600, 1952) + surge
      URL + `npm run readme:status` when shipped
