# Soffit (ColorLib Archs) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-soffit`. Recreation name: **Soffit** (NEW name —
> the ColorLib source keeps its name "Archs").

## Source mapping

- **ColorLib item:** "Archs" (TEMPLATES.md line 2290).
- **Source URL:** https://colorlib.com/wp/template/archs/
- **Preview URL — REACHABLE (verified 2026-09-25):**
  `https://preview.colorlib.com/theme/archs/`
  (HTTP 200, full HTML with all 14 sections, Nunito Sans font via
  Cloudflare @font-face, Bootstrap 4, owl carousel, flaticon icons,
  AOS scroll animations).
- **Preview CSS:** `css/style.css` — hand-written, Bootstrap 4 based,
  all custom styles in one file.
- **Font:** Nunito Sans (weights 200–900) loaded via inline `<style>`
  @font-face. **Implementation: use Google Fonts `<link>` for weights
  300, 400, 700 (the only weights used by the demo CSS).**
- **Icons:** flaticon font (`fonts/flaticon/font/flaticon.css`) +
  icomoon icon font (`fonts/icomoon/style.css`) → **replace with
  lucide-react. Do NOT ship icon font files.**

## Reference research (done — do not redo)

### Screenshot (`archs-free-template.jpg`)

Browsed visually (template preview image). Architecture/interior design
firm onepage: dark hero with background image and centered play button,
clean white sections below, orange-red accent color on buttons and
interactive elements, dark grey footer. Aesthetic: professional,
minimal, corporate architecture firm. The hero uses a parallax-style
background image with a dark overlay. Team section has circular
portrait photos. Pricing uses clean card layout with borders.

### Live preview analysis (2026-09-25)

Fetched `https://preview.colorlib.com/theme/archs/` via curl. Confirmed
14 sections in order (see spec.md for full list). Key observations:
- Sticky navbar turns #ff5733 (orange-red) on scroll
- Hero has `data-stellar-background-ratio="0.5"` (parallax effect)
- Play button links to Vimeo video (317571768) via fancybox modal
- Team members use owl carousel for horizontal scrolling
- Pricing cards have "Buy Now" full-width buttons
- FAQ uses Bootstrap 4 accordion (collapseOne–collapseFive)
- Testimonials use owl carousel (block-13 class)
- Projects section has image overlay titles
- Contact form on `bg-light` section with white form card
- Footer has 3 columns: About/Nav, Recent News, Subscribe + Follow Us
- Copyright line: "All rights reserved | This template is made with ❤ by Colorlib"

### CSS token extraction

From `css/style.css`:
- `body { color: gray; font-weight: 300; font-size: 1rem; }`
- `h1–h6 { color: #000; }`
- `.btn.btn-primary { color: #fff; }` / hover: `color: #000; background-color: transparent`
- `.form-control:focus { border-color: #ff5733; }`
- `.site-footer { background: #333333; }` / `p { color: #737373; }` / `a { color: #999999; }`
- `.sticky-wrapper.is-sticky .site-navbar { background-color: #ff5733; }`
- `.site-section { padding: 5em 0; }` (desktop) / `2.5em 0` (mobile)
- `::selection { background: #000; color: #fff; }`
- `.dropdown { background: #fff; box-shadow: 0 0px 4px 0px rgba(0,0,0,0.25); }`
- `.dropdown > li > a:hover { background: #ebeef0; color: #212529; }`

## Implementation tasks (ordered)

### Phase 1: Scaffold
1. Copy simplest existing app as base (e.g. `apps/abjure` or another
   small template), rename package to `@free-react-templates/soffit`
2. Update `apps/soffit/package.json` — name, description, homepage
3. Create `apps/soffit/public/CNAME` with `soffit.free.componentdock.com`
4. Run `npm install` at repo root to register workspace in lockfile
5. Set up `src/index.css` with Tailwind v4 + theme tokens:
   - `@import "tailwindcss";`
   - `@theme { --color-brand: #ff5733; }` (or similar)
   - Google Fonts link in `index.html` for Nunito Sans 300/400/700

### Phase 2: Components (in page order)
6. `TopBar.tsx` — social icons (lucide: Twitter, Facebook, Linkedin,
   Instagram) + email + phone, transparent bg over hero
7. `Navbar.tsx` — "Soffit" logo, nav links with dropdown for About Us
   (Team, Pricing, FAQ), sticky on scroll with brand color bg
8. `Hero.tsx` — full-width bg image (picsum), dark overlay, play button
   (modal or skip), "Interior Design" h1, italic subtitle
9. `Features.tsx` — 3-column grid: icon (lucide: Building, Compass,
   Paintbrush) + heading + description
10. `About.tsx` — split layout: image left, text right with subtitle,
    heading, paragraph, 4-item checklist, CTA button
11. `Team.tsx` — 6 members in 3-col grid: circular photo (picsum),
    name, role, social icons
12. `Pricing.tsx` — 3 cards: Starter, Professional, Enterprise with
    price, features, "Buy Now" full-width button
13. `Faq.tsx` — 5 accordion items with Bootstrap-style collapse
    (use React state, not Bootstrap JS)
14. `Testimonials.tsx` — carousel with testimonial cards (quote, author,
    role). Use simple CSS carousel or minimal JS.
15. `Projects.tsx` — 6 project cards in 3-col grid: image + title overlay
16. `News.tsx` — 3 blog cards + "View All Posts" button
17. `Services.tsx` — 5 service items (media object): icon + heading + desc
18. `Contact.tsx` — bg-light section, white form card: Full Name, Email,
    Message textarea, "Send Message" button
19. `Footer.tsx` — dark bg, 3 columns (About/Nav, Recent News, Subscribe
    + Follow Us), copyright linking to Component Dock

### Phase 3: App composition
20. `App.tsx` — compose all sections in order
21. `App.test.tsx` — test that all sections render

### Phase 4: Verification
22. Run `scripts/verify-app.sh soffit` — typecheck + lint + tests + build
23. Visual check: compare with screenshot for fidelity
24. Ensure no ColorLib references in app code
25. Ensure footer links to Component Dock

## Design notes

- **Section order must match exactly:** TopBar → Navbar → Hero → Features
  → About → Team → Pricing → FAQ → Testimonials → Projects → News
  → Services → Contact → Footer
- **Sticky navbar:** Use IntersectionObserver or scroll event to toggle
  sticky class. Background transitions to #ff5733.
- **Hero parallax:** Use CSS `background-attachment: fixed` for parallax
  effect (or a lighter alternative if performance is a concern).
- **Play button:** In the original it opens a Vimeo video in a fancybox
  modal. For the recreation, either link to a placeholder video or skip
  the modal and just show the play icon as decorative.
- **Team carousel:** The original uses owl carousel for team members.
  Consider a CSS grid instead for simplicity, or a lightweight carousel.
- **Testimonials carousel:** Use a simple auto-rotating CSS carousel
  with JS interval, or a manual next/prev control.
- **Accordion:** Implement with React state (no Bootstrap JS dependency).
  Use `aria-expanded` and `aria-controls` for accessibility.
- **Form:** Use controlled inputs. No actual submission needed — show
  a success message or log to console.
- **Responsive:** Mobile hamburger menu, stacked columns on small screens,
  single-column layouts for cards.
- **Placeholder images:** Use `https://picsum.photos/seed/soffit-<n>/<w>/<h>`
  with deterministic seeds. Hero: 1920×1080, team: 400×400, projects:
  600×400, news: 600×400.
