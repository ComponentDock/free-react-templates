# Orchidcraft (ColorLib Rango) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-orchidcraft`. Recreation name: **Orchidcraft** (NEW
> name — the ColorLib source keeps its name "Rango").

## Source mapping

- **ColorLib item:** "Rango" (TEMPLATES.md line 1148).
- **Source URL:** https://colorlib.com/wp/template/rango/
- **Preview URL — REACHABLE (verified):** `https://preview.colorlib.com/theme/rango/`
  (HTTP 200, full HTML + CSS extracted for tokens and structure).
- **Preview CSS:** `styles/main_styles.css` + `styles/responsive.css`
  (Bootstrap 4 base + hand-written custom styles + OwlCarousel + Slick slider).
- **Fonts:** Google Fonts — Poppins (300–900) for body/headings, Roboto (300–900) for buttons.
- **Libraries (original):** jQuery 3.2.1, OwlCarousel 2.2.1, Slick 1.8.0,
  ScrollMagic + GSAP, Bootstrap 4, Font Awesome 5, custom icon font.
  **Recreation:** Pure React — no jQuery, no OwlCarousel (use CSS/JS carousel),
  no ScrollMagic (use Intersection Observer for parallax).

## Reference research (done — do not redo)

### Preview HTML structure (section order, top to bottom)

1. **Header** — `<header class="header">` — transparent bg, flex row,
   logo left ("Ran" + "go" in orange span), nav right (Home, About Us,
   Services, Portfolio, Blog, Contact), search button (SVG magnifier),
   hamburger for mobile. Scrolled class adds `rgba(27,11,51,0.92)` bg.

2. **Hero Slider** — `<div class="home">` — full-viewport parallax bg image
   (`slider_background.jpg`), OwlCarousel with 3 identical slides (centered
   text: "by [logo] GO! Get your freebie template now!"), left/right
   chevron nav arrows. Side text block: "Modern design easy to use" +
   description. Scroll-down chevron.

3. **Icon Boxes** — `<div class="icon_boxes">` — 3-column Bootstrap row.
   Left col: h1 "Build your entire website in minutes" + CTA button.
   Middle col: 2 icon box items (Great team, Modern Design).
   Right col: 2 icon box items (Online Marketing, Easy to use).
   Each item has h2 + paragraph.

4. **Vertical Slider Section** — `<div class="v_slider_section">` — 2-column.
   Left: large image (`v_slider_section.jpg`). Right: vertical auto-rotating
   slider with identical testimonials (h1 "Fast support to all our clients...
   give us a shout" + paragraph + person avatar + name/title). Uses GSAP
   TimelineMax for vertical animation.

5. **Services Carousel** — `<div class="services">` — Centered section title
   ("We take care of your business" + "Explore our services"). Horizontal
   OwlCarousel of 6 service cards, each with: icon (custom icon font),
   h2 title, paragraph, "discover more" CTA. Left/right nav arrows.

6. **Features** — `<div class="features">` — Centered title "Modern features".
   3-column layout: Left col = 2 feature items (Responsive, Clean code),
   Center = features image + CTA, Right col = 2 feature items (Retina ready,
   Great team) + CTA. Each item has h2 + paragraph.

7. **Call to Action** — `<div class="cta">` — Full-width parallax bg image
   (`cta_background.jpg`). 2-column: left = h1 "We love our customers" +
   paragraph; right = decorative image.

8. **Text Line** — `<div class="text_line">` — 2-column: left = image,
   right = h1 "We integrate the future" + paragraph + CTA button.

9. **Newsletter** — `<div class="newsletter">` — Centered: h1 "Subscribe to
   our newsletter" + subtitle + form (email input + "subscribe" button).

10. **Footer** — `<footer class="footer">` — Dark purple bg (`#1b0d37`).
    4-column layout: Col 1 = logo + description + social icons (6) +
    copyright. Col 2 = Services + Additionals link lists. Col 3 = Menu
    link list. Col 4 = About Us + Community link lists. Bottom row:
    secondary copyright.

### Design tokens (extracted from `main_styles.css`)

| Token                | Value                    | Source CSS selector / context                |
| -------------------- | ------------------------ | -------------------------------------------- |
| Primary purple       | `#452b78`                | `.button a`, `.icon_box_button:hover`, footer, services, features |
| Orange accent        | `#ff6b09`                | Logo `<span>`, `.header .logo span`, slider nav active, link hover |
| Salmon/light orange  | `#ffa07f`                | `p a` border-bottom, `p a:hover` bg          |
| Selection bg         | `#ffd9bf`                | `::selection`                                |
| Header transparent   | `rgba(27,11,51,0.52)`   | `.header`                                    |
| Header scrolled      | `rgba(27,11,51,0.92)`   | `.header.scrolled`                           |
| Dark purple bg       | `#1b0b32` / `#1b0d37`  | Menu bg, footer bg                           |
| Purple medium        | `#301b55`                | Search button active                         |
| Purple light         | `#d6cbed`                | Services bg, features section bg             |
| Purple accent light  | `#9878e2` / `#9c83ce`  | Slider nav, feature accents                  |
| Body text            | `#6e6e6e` / `#909090`  | `body`, `p`                                  |
| Headings             | `#28262d`                | `h1`–`h6`                                   |
| White                | `#FFFFFF`                | Page bg, hero text, button text              |
| Services bg          | `#fafbfb`                | Services section                             |
| Button font          | Roboto                   | `.button a`                                  |
| Body font            | Poppins                  | `body`, `p`                                  |

### Screenshot analysis (from TEMPLATES.md preview image)

The preview image shows a dark-purple/indigo creative agency landing page:
- Dark header with orange-accented logo
- Full-viewport hero with a dark photographic background and white centered text
- White icon boxes section below
- Purple-toned sections with alternating backgrounds
- Dark purple footer with orange accent links
- Overall aesthetic: modern corporate/agency, bold typography, purple + orange palette

## Implementation tasks (for implementer stream)

### Phase 1: Scaffold & Configuration

- [ ] Copy simplest existing app (e.g. `apps/abjure`) to `apps/orchidcraft`
- [ ] Rename package to `@free-react-templates/orchidcraft`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Create `public/CNAME` with `orchidcraft.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://orchidcraft.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Set up `src/index.css` with Tailwind v4 `@theme` tokens for the purple palette

### Phase 2: Components (top to bottom, TDD each)

- [ ] **Header** — Transparent navbar with logo (Orchidcraft, orange accent on
  second word), nav links, search icon, hamburger. Scroll listener for
  transparent→opaque transition. Mobile slide-in menu.
- [ ] **Hero** — Full-viewport section with parallax background image, centered
  text content (tagline + subtitle), left/right chevron navigation arrows.
  Implement as a simple fade slider (no OwlCarousel).
- [ ] **IconBoxes** — 3-column layout: heading + CTA left, 2+2 feature items right.
  Each item: h2 + paragraph.
- [ ] **VerticalSlider** — Left image, right auto-rotating vertical testimonial
  slider with person avatar/name/title. Use CSS transform + interval for rotation.
- [ ] **Services** — Section title + horizontal card carousel. 6 cards with
  lucide-react icons, h2, paragraph, CTA button. Left/right nav arrows.
- [ ] **Features** — 3-column: left features, center image + CTA, right features.
- [ ] **CTA** — Parallax background image with heading + paragraph overlay.
- [ ] **TextLine** — 2-column: image left, heading + paragraph + CTA right.
- [ ] **Newsletter** — Centered: heading + subtitle + email form (input + button).
- [ ] **Footer** — Dark purple bg. Logo + social icons (6 lucide icons) + 4 link
  columns + Component Dock link + copyright.

### Phase 3: App Assembly & Polish

- [ ] Compose all sections in `App.tsx` in correct order
- [ ] Verify responsive behavior at mobile/tablet/desktop breakpoints
- [ ] Ensure no ColorLib references in any app file
- [ ] Footer links to `https://www.componentdock.com/`

### Phase 4: Testing

- [ ] Write Vitest + Testing Library tests for each component
- [ ] 100% coverage on lines/functions/branches/statements
- [ ] Run `scripts/verify-app.sh orchidcraft` to pass local gate

### Phase 5: Deploy

- [ ] Commit as `feat: Orchidcraft — creative agency landing template (ColorLib Rango)`
- [ ] Open PR, merge immediately
- [ ] Verify Surge deploy at `orchidcraft.free.componentdock.com`

## Fidelity notes

- **Parallax:** Original uses ScrollMagic + GSAP. Recreation should use
  CSS `background-attachment: fixed` or Intersection Observer for a
  similar effect without heavy dependencies.
- **Carousels:** Original uses OwlCarousel. Recreation should use a
  simple CSS-based carousel or a lightweight React carousel (embla or
  custom).
- **Vertical slider:** Original uses GSAP TimelineMax. Recreation should
  use CSS transforms with `setInterval` for auto-rotation.
- **Icons:** Original uses a custom icon font. Replace with `lucide-react`.
- **Images:** Use `https://picsum.photos/seed/orchidcraft-<n>/<w>/<h>`
  for all placeholder images (deterministic per template).
- **Fonts:** Load Poppins + Roboto via Google Fonts `<link>` in `index.html`.
- **Color matching:** Use the extracted `#452b78` primary purple and `#ff6b09`
  orange accent throughout. Put brand tokens in `@theme` block in `index.css`.
