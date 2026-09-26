# Capturelab (ColorLib Phozogy) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-capturelab`.

## Design notes (replication findings)

- **Original:** ColorLib "Phozogy" — photography studio template
  (source: https://colorlib.com/wp/template/phozogy/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/phozogy/ (HTTP 200,
  full rendered DOM). Page title "Phozogy | Template". Stylesheets: bootstrap,
  font-awesome, elegant-icons, owl-carousel, magnific-popup, slicknav, style.css.
  Fonts: **Quantico** (headings/buttons, 400/700) + **Open Sans** (body, 400/600/700)
  via Cloudflare Fonts.
- **Screenshot:** `phozogy-free-template.jpg` (viewed in browser) — photography
  studio theme: dark hero slider with overlaid white text, green accent buttons,
  white body sections, dark near-black footer. The brand "Phozogy" is a camera
  gear-themed name; recreation uses the NEW name **Capturelab**.
- **Visual design (from DOM + CSS tokens + screenshot):** Clean professional
  photography studio aesthetic. Green accent `#009603` is dominant brand color.
  Square buttons (no border-radius), uppercase Quantico headings, Open Sans body
  text. White sections with generous padding. Dark footer with Instagram grid.
- **Structure (1:1, section order):**
  1. **Preloader** — black background, animated loader circle (optional, omit in React).
  2. **Header** — sticky, logo image left, nav links center, search icon right.
     Mobile: hamburger + slicknav. Nav: Home (active), About, Services, Pricing,
     Portfolio, Blog, Pages (dropdown: Gallery, Portfolio Details, Blog Details),
     Contact.
  3. **Hero** — `owl-carousel` slider, 2 slides. Each: full-width background image
     with dark overlay, centered content, h2 "Photography Studio", paragraph lorem,
     "Contact us" green `.primary-btn`.
  4. **Services** — `services-section spad`, 3-column grid (`col-lg-4 col-md-6`),
     each card: image + h3 title + paragraph. Cards float over hero by
     `margin-top: -70px; z-index: 99`. Items: Shooting, Videos, Editing.
  5. **Categories** — title "Categories" + "View all" `.primary-btn`, owl-carousel
     of `.cs-item` (background image + h4 name + span count). Items: Animal (120),
     Natural (325), Portrait (540), Animal (120), Animal (120).
  6. **Portfolio** — "Our latest works" title, `.filter-controls` tabs (All active,
     Fashion, Lifestyle, Natural, Wedding, Videos). `.portfolio-filter` masonry grid:
     items with `.pf-item` class, some `.large-width` / `.large-height` for varied
     sizes. Each: background image, magnific-popup link with `.icon_plus` overlay,
     hover text ("COLORS SPEAK" + category). 11 items total across categories.
  7. **Footer** — `footer-section` with bg `#000606`. 4 columns:
     - Col 1: `.fs-about` — logo image + description + social icons (fa-facebook,
       fa-twitter, fa-youtube-play, fa-instagram).
     - Col 2: Instagram grid — 3 images.
     - Col 3: Quick links — Home, About, Contact + Gallery, Portfolio, Services.
     - Col 4: Subscribe — description + email input + send button (fa-send icon).
     - Copyright row: "All rights reserved | ..." → replace with Component Dock link.
- **Design tokens extracted from `style.css`:**
  - Brand/accent: **`#009603`** (green) — buttons, active states, hover.
  - Text: headings `#111111`, body `#666666`, white `#ffffff` on dark bg.
  - Footer bg: **`#000606`** (near-black).
  - Preloader bg: `#000`.
  - Fonts: **Quantico** (headings, buttons, uppercase) + **Open Sans** (body).
  - Buttons: `.primary-btn` — `#009603` bg, `#fff` text, `padding: 14px 30px`,
    `font-size: 16px`, uppercase, bold, Quantico, no border-radius.
  - `.site-btn` — same green bg, `padding: 14px 30px 12px`, letter-spacing 2px.
  - Hero overlay: `rgba(0, 0, 0, 0.5)` on images.
  - Portfolio overlay: `rgba(0, 0, 0, 0.5)` bg, `border-radius: 50%` on plus icon.
  - Filter active: `#009603` text.
  - Section spacing: `.spad` = `padding: 100px 0`.
  - Services offset: `margin-top: -70px; z-index: 99`.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-capturelab/spec.md` already on main
      (prep). Open a `feat/template-capturelab` branch.
- [ ] Copy the simplest existing app (e.g. `apps/shutter` or similar), rename
      package to `@free-react-templates/capturelab`, run `npm install` at root
      so `package-lock.json` registers the workspace (grep
      `free-react-templates/capturelab`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap).
- [ ] TDD: write tests first per spec requirement, then implement:
      1. `Navbar` — logo + nav links (Home, About, Services, Pricing, Portfolio,
         Blog, Pages dropdown, Contact) + search icon + mobile hamburger.
         Dropdown on "Pages" shows Gallery, Portfolio Details, Blog Details.
      2. `HeroSlider` — 2+ slides, each with background image, "Photography
         Studio" heading, description paragraph, "Contact us" green CTA.
         Auto-advance with owl-carousel style. Manual prev/next navigation.
      3. `Services` — 3-column cards (Shooting, Videos, Editing) with images
         and descriptions. Cards float over hero with negative margin.
      4. `Categories` — "Categories" heading + "View all" button, carousel of
         category items (Animal 120, Natural 325, Portrait 540, etc.) with
         background images and picture counts.
      5. `Portfolio` — "Our latest works" heading, filter tabs (All, Fashion,
         Lifestyle, Natural, Wedding, Videos), masonry grid of 11 items with
         varied sizes (normal, large-width, large-height). Hover overlay with
         plus icon and title/category text. Filter functionality.
      6. `Footer` — 4-column: logo+social, Instagram grid, quick links,
         subscribe form. Copyright with Component Dock link.
- [ ] Theme tokens in `@theme`: `--color-brand: #009603`, text `#111111`,
      body `#666666`, footer bg `#000606`.
- [ ] Quantico + Open Sans Google Fonts `<link>` in index.html.
- [ ] Placeholders: `picsum.photos/seed/capturelab-<n>/<w>/<h>`; lucide-react
      icons for social (replace Font Awesome); magnific-popup replacement via
      React lightbox or simple modal.
- [ ] Paraphrase demo copy where needed but keep the same kind of content
      (hero studio statement, service descriptions, category names/counts,
      portfolio overlay text).
- [ ] Verify: `scripts/verify-app.sh capturelab` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md Phozogy `[x]` with Surge URL
      `https://capturelab.free.componentdock.com` + homepage, run
      `npm run readme:status`, commit + push. Verify `npx knip` + curl the
      Surge URL.
