# Callcraft (ColorLib Callcenter) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-callcraft`. Recreation name: **Callcraft** (NEW name
> — the ColorLib source keeps its name "Callcenter").

## Source mapping

- **ColorLib item:** "Callcenter" (TEMPLATES.md line 922)
- **Source URL:** https://colorlib.com/wp/template/callcenter/
- **Preview URL:** https://preview.colorlib.com/theme/callcenter/ (reachable,
  verified 2026-09-10)
- **Preview CSS:** `css/main.css` (28,930 bytes) + Bootstrap 4
- **Screenshot:** `callcenter-free-call-center-website-template.jpg`

## Reference research (done — do not redo)

### Live preview DOM analysis

Fetched 2026-09-10 via curl. Page is 27,382 bytes HTML with 10 `<section>`
elements. Font: Poppins (Google Fonts, weights 300–700, loaded via
`<style>` preload block). Framework: Bootstrap 4 + jQuery. Icons: Font Awesome
+ Linearicons. Sections (in DOM order):

1. `banner-area relative` — photo bg (`header-bg.jpg`), overlay, h1 "Efficiency
   Booster", subhead "Discover the Colorful World", CTA "Discover Now" button
2. `feature-area section-gap` — 3 columns: Online Support, 24/7 Round the Clock,
   Handling All Issues
3. `testimonial-area relative section-gap` — carousel, photo bg
   (`testimonial-bg.jpg`), dark overlay
4. `offered-area` — service cards with icons, "View Details" links
5. `facts-area section-gap` — 5 stat counters: 2536, 6784, 1059, 2239, 435
6. `service-area section-gap relative` — 6 cards on photo bg
   (`service-bg.jpg`): Expert Technicians, Professional Service, Great Support,
   Technical Skills, Highly Recommended, Positive Reviews
7. `info-area` — gradient bg CTA: "Responsible Customer Support"
8. `about-area` — "We Believe that Interior beautifies the Total Architecture"
   + play button
9. `brand-area` — logo bar (light `#f9f9ff` bg)
10. `contact-area section-gap` — contact form + footer 3-col

### Screenshot visual analysis

Browsed 2026-09-10. Clean professional look:
- White navbar with blue diamond logo + "Call Center" text
- Hero: photo of smiling headset operator overlaid on blue watercolor
  brushstroke, right side has headline + gradient pill CTA button
- Features: 3 clean columns with colorful flat icons
- Overall: blue-gradient accent palette, Poppins font, ample white space
- Footer: dark `#222` with 3-column layout

### Design tokens extracted from `css/main.css`

**Primary gradient:** `linear-gradient(0deg, #62bdfc 0%, #8490ff 100%)` — used
on `.primary-btn`, `.header-btn`, `.testimonial-area .overlay-bg`,
`.single-service:hover`, `.about-right .overlay-bg`.

**Key colors:** `#8490ff` (blue-purple, primary), `#62bdfc` (light blue,
gradient start), `#38a4ff` (accent blue), `#4cd3e3` (cyan), `#f4e700`
(yellow), `#f44a40` (red), `#73fbaf` (green), `#a367e7` (purple), `#f09359`
(orange), `#f9f9ff` (light bg), `#222` (dark/footer), `#777` (body text),
`#222` (headings), `#f1f1f1` (alt bg).

**Typography:** `"Poppins", sans-serif` throughout. Weights 300–700.

**Buttons:** `.primary-btn` has gradient bg, `border-radius: 25px` (pill),
uppercase text, padding ~10px 28px. `.play-btn` is circular (50% radius)
with gradient bg.

**Section backgrounds:** Banner = photo + cover; Testimonial = photo + cover +
dark overlay; Service area = photo + cover; Info area = gradient bg;
Brand area = `#f9f9ff`; Footer = `#222`.

## Implementation tasks

### Phase 1: Scaffold
- [ ] Create `apps/callcraft/` from simplest existing app (copy + rename)
- [ ] Rename package to `@free-react-templates/callcraft`
- [ ] Set `homepage` to `https://callcraft.free.componentdock.com`
- [ ] Create `public/CNAME` with `callcraft.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design tokens + global styles
- [ ] Add Poppins font link to `index.html` (weights 400, 500, 600, 700)
- [ ] Set up `@theme` tokens in `index.css`: primary gradient colors, footer bg,
  body text color
- [ ] Register `injectUiSource()` in `vite.config.ts`

### Phase 3: Components (in section order)
- [ ] `Navbar.tsx` — sticky, white bg, logo "Call Center", nav links (Home,
  Feature, We Offer, About, Contact), active state highlighted blue
- [ ] `Hero.tsx` — photo bg (picsum seed), overlay, subhead uppercase,
  headline, paragraph, gradient pill CTA button
- [ ] `Features.tsx` — 3 columns with icons (lucide-react), titles, descriptions
- [ ] `Testimonials.tsx` — carousel with quote, reviewer, stars, bg photo +
  dark overlay. Use state for cycling.
- [ ] `OfferedServices.tsx` — card grid with icons, titles, "View Details" links
- [ ] `Facts.tsx` — 5 stat counters with labels, animated on scroll (optional
  count-up)
- [ ] `ServicesGrid.tsx` — 6 cards on photo bg with overlay, icon + title
- [ ] `InfoCta.tsx` — gradient bg banner with headline "Responsible Customer Support"
- [ ] `About.tsx` — headline, play button (circular gradient), description
- [ ] `BrandLogos.tsx` — row of placeholder partner logos on `#f9f9ff` bg
- [ ] `Contact.tsx` — heading, contact form (name, email, message, submit)
- [ ] `Footer.tsx` — dark `#222` bg, 3 columns (About Us, Contact Us,
  Newsletter), copyright with Component Dock link

### Phase 4: Assembly
- [ ] `App.tsx` — compose all sections in DOM order
- [ ] Ensure section gap spacing matches (Tailwind `py-16` / `py-20` as needed)

### Phase 5: Tests + verification
- [ ] Write tests for each component (100% coverage)
- [ ] Run `npm run verify:app -- callcraft` (typecheck + lint + tests + build)
- [ ] Visual diff vs preview URL
- [ ] Responsive check at 768px
- [ ] No ColorLib references in app code; footer links Component Dock

## Fidelity notes

- **Section order must match preview DOM exactly** (12 sections).
- **Gradient buttons** — use Tailwind `bg-gradient-to-r from-[#62bdfc] to-[#8490ff]`
  or CSS custom properties for the brand gradient.
- **Photo sections** (hero, testimonial, services grid) — use `picsum.photos`
  with deterministic seeds: `callcraft-hero`, `callcraft-testimonial`,
  `callcraft-services-1` through `-6`.
- **Brand logos** — use 5 placeholder logo images (gray rectangles or text).
- **Testimonial carousel** — simple state-based cycling (no external dependency).
- **Facts counters** — optional scroll-triggered count-up animation (use
  `IntersectionObserver` + `useState`, no external dependency).
- **Icons** — use `lucide-react` for all icons. Map source FA/Linearicons to
  lucide equivalents.
