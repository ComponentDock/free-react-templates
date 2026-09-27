# Stephen (ColorLib Steve) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stephen`. Recreation name: **Stephen** (NEW name —
> the ColorLib source keeps its name "Steve").

## Source mapping

- **ColorLib item:** "Steve" (TEMPLATES.md line 2568; section
  "## Portfolio (89)" at line 2527). The `wp/template/steve/` slug appears
  TWICE in TEMPLATES.md (lines 2568 and 2728 — duplicate rows; prep targets
  line 2568, the first occurrence).
- **Source URL:** https://colorlib.com/wp/template/steve/
- **Preview URL — REACHABLE (verified 2026-09-27 by direct curl fetch):**
  **`https://preview.colorlib.com/theme/steve/`** (HTTP 200, full HTML +
  CSS fetched). `<title>Steve Portfolio</title>`.
- **Preview CSS:** `css/style.css` (hand-written, Bootstrap 4 base + custom).
  Google Fonts: `@import url("https://fonts.googleapis.com/css?family=Poppins:700|Roboto:400,500,500i")`.
  Additional CSS: `css/bootstrap.css`, `css/font-awesome.min.css`,
  `css/magnific-popup.css`, vendor CSS (owl-carousel, nice-select,
  animate-css, flaticon, linericon). JS: jQuery 3.2.1, Bootstrap, Owl
  Carousel, Isotope, Magnific Popup, Stellar parallax, ajaxchimp.

## Reference research (done — do not redo)

### Live preview DOM analysis (2026-09-27)

Fetched full HTML (151 lines) + CSS (300+ lines) via curl. The page title
is "Steve Portfolio". The template is a personal portfolio with these
sections in order:

1. **Header** — `header.header_area` with `nav.navbar.navbar-expand-lg`.
   Transparent bg over hero. Logo left, nav links right (Home, About,
   Portfolio [dropdown: Portfolio, Portfolio Details], Pages [dropdown:
   Elements], Blog [dropdown: Blog, Blog Details], Contact). Dropdown
   bg: `#ffd200` (golden-yellow). Sticky: `#ffd200` bg + box-shadow.

2. **Hero Banner** — `section.banner-area.owl-carousel` with 3 slides
   (`.slide_bg1`, `.slide_bg2`, `.slide_bg3`). Each slide: full-viewport
   bg image, centered content with h1 "Steve Henriques" (60px Poppins
   700, black), h3 "Personal portfolio Website" (30px Roboto 400, black),
   and `<a.primary-btn>Hire Me</a>` (red `#e45447` pill on hero, white
   text, transparent hover). Mobile: white bg overlay with 40px h1.

3. **Portfolio** — `section.portfolio_area` with `section_gap`. Title
   "Latest Works" with `main-title` red underline accent (`#e45447`
   2px line + 10px dot). Filter tabs (`.projects_fillter`): All Categories
   (active), Branding, Creative Work, Web Design. 8 `.projects_item` in
   masonry grid (`.projects_inner.row.grid`): 6-col + 3-col + 3-col
   layout. Each item: image + `.projects_text` overlay on hover (white
   text: h4 title + p "Client Project"). Categories: brand, work, web.

4. **About** — `section.about-area.section_gap.gray-bg` (`#f9f9ff`).
   Left col: illustration image. Right col: `main-title` "about myselt"
   [sic] + two paragraphs + `<a.primary-btn>More Info</a>`. Text
   left-aligned. fadeIn animation.

5. **Testimonials** — `div.section_gap.testimonial_area` with background
   photo (`testi-bg.jpg`). Left col (col-lg-7): Owl Carousel of
   `.single_testimonial` items — each has quote icon image, h4 name
   "Fanny Spencer", 5-star rating (`.review` with fa-star icons), and
   paragraph quote text. Right col (col-lg-4 offset-lg-1):
   `.testimonial_logos` white card with shadow containing 5 brand logo
   images in top/mid/bottom layout. Hidden on mobile.

6. **Newsletter** — `section.section_gap.newsletter-area` with background
   photo (`newsletter-bg.jpg`). Title "Join Our Newsletter" (white h1
   with white underline accent) + description (white). Form: pill-shaped
   white input (`border-radius: 50px`) + subscribe button. Uses
   ajaxchimp for form submission.

7. **Footer** — `footer.footer_area.section_gap` with `#ffd200`
   background. Centered: logo image + "Follow Me" h4 + social icons
   (fa-facebook, fa-twitter, fa-dribbble, fa-behance) + copyright line.
   Footer will link to Component Dock in recreation.

### Design tokens summary

| Token | Value | Source |
|-------|-------|--------|
| Brand red | `#e45447` | Primary buttons, title accents, dropdown hover |
| Golden yellow | `#ffd200` | Dropdowns, sticky nav, footer bg |
| Body text | `#777777` | Paragraphs, subtitles |
| Heading text | `#222222` | All headings |
| Gray section bg | `#f9f9ff` | About section |
| Button border | `#90acd1` | Primary button default border |
| Heading font | Poppins 700 | Google Fonts |
| Body font | Roboto 400/500/500i | Google Fonts |
| Button shape | Pill (50px radius) | `.primary-btn` |
| Section spacing | 120px vertical (80px mobile) | `.section_gap` |
| Newsletter form | Pill (50px radius), white bg | `.newsletter_form .navbar-form` |
| Testimonial bg | Full-width photo | `testi-bg.jpg` |
| Newsletter bg | Full-width photo | `newsletter-bg.jpg` |

### Screenshot reference

Preview image: `https://colorlib.com/wp/wp-content/uploads/sites/2/steve-free-template.jpg`
(1200× auto). Shows: dark background hero with centered text + red CTA
button, portfolio grid with hover overlays, clean modern personal
portfolio aesthetic. The visual confirms the DOM analysis.

## Implementation tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing portfolio app as base (e.g. `apps/aperture`
  or similar single-page portfolio)
- [ ] Rename package to `@free-react-templates/stephen`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `stephen.free.componentdock.com`
- [ ] Set `"homepage": "https://stephen.free.componentdock.com"` in
  `package.json`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design tokens in index.css
- [ ] Add `@theme` block with brand colors: `--color-brand: #e45447`,
  `--color-accent: #ffd200`, `--color-body: #777777`,
  `--color-heading: #222222`, `--color-gray-bg: #f9f9ff`
- [ ] Add font imports: Poppins 700 + Roboto 400/500/500i via
  `<link>` in `index.html`
- [ ] Define Tailwind theme extensions for fonts and colors

### Phase 3: Components (section by section)
- [ ] **Navbar.tsx** — Transparent header, logo, nav links with dropdowns,
  golden-yellow dropdown bg, sticky mode on scroll
- [ ] **HeroBanner.tsx** — Carousel with 3 slides, bg images, centered
  name + subtitle + red "Hire Me" pill button
- [ ] **Portfolio.tsx** — "Latest Works" title with red underline accent,
  filter tabs (All/Branding/Creative Work/Web Design), masonry grid of
  8 project items with hover overlay
- [ ] **About.tsx** — Gray bg section, illustration left, heading + text
  + "More Info" button right
- [ ] **Testimonials.tsx** — Background photo, carousel of testimonial
  cards (quote icon, name, stars, text), brand logos card right column
- [ ] **Newsletter.tsx** — Background photo, "Join Our Newsletter" heading,
  pill-shaped form input + subscribe button
- [ ] **Footer.tsx** — Golden-yellow bg, logo, "Follow Me" heading,
  social icons, copyright, Component Dock link

### Phase 4: App.tsx composition
- [ ] Compose all sections in correct order: Navbar → HeroBanner →
  Portfolio → About → Testimonials → Newsletter → Footer
- [ ] Ensure no ColorLib references in any app file

### Phase 5: Tests (TDD — write before/during implementation)
- [ ] Navbar: renders links, dropdowns open on hover, sticky activates
  on scroll
- [ ] HeroBanner: renders 3 slides, carousel rotates, CTA button renders
- [ ] Portfolio: renders 8 items, filter tabs work, hover overlay shows
- [ ] About: renders heading, text, button, gray background
- [ ] Testimonials: renders carousel items, stars, brand logos
- [ ] Newsletter: renders form, input is pill-shaped, submit works
- [ ] Footer: renders social links, copyright, Component Dock link
- [ ] App.tsx: all sections compose in correct order
- [ ] Achieve 100% line/function/branch/statement coverage

### Phase 6: Verification
- [ ] `npm run verify:app stephen` passes (typecheck + lint + tests +
  build)
- [ ] `npm run spec:validate` passes
- [ ] Surge deploy target: `stephen.free.componentdock.com`
- [ ] Commit: `feat: add Stephen (ColorLib Steve) portfolio template`
- [ ] PR with source mapping, design tokens, preview URL documented
