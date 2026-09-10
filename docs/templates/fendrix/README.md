# Fendrix — Implementation Plan

Source: ColorLib Buri (https://preview.colorlib.com/theme/buri/)

## Tasks

### 1. Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/bolt`)
- [ ] Rename package to `@free-react-templates/fendrix`
- [ ] Create `public/CNAME` with `fendrix.free.componentdock.com`
- [ ] Update `vite.config.ts` to register `injectUiSource()`
- [ ] Add Google Fonts to `index.html`: Playfair Display + Montserrat

### 2. Components (section by section)
- [ ] `Navbar.tsx` — transparent overlay, logo, nav links (Home/About/Menu/Blog/Contact), social icons, mobile hamburger
- [ ] `Hero.tsx` — full-height bg image, subtitle + heading + CTA button
- [ ] `About.tsx` — split layout (text left, image right), negative margin top overlap
- [ ] `FoodMenu.tsx` — section title, 2-column grid of 6 items (image + name + desc + price)
- [ ] `VideoIntro.tsx` — parallax bg image, centered play button
- [ ] `Testimonials.tsx` — carousel with review cards (quote, avatar, name, stars)
- [ ] `Contact.tsx` — bg image, white card overlay with address/hours/reservation
- [ ] `Footer.tsx` — dark bg, 3-column (logo+social, quick links, newsletter), copyright bar

### 3. Styling
- [ ] `index.css` — Tailwind `@theme` block with brand colors:
  - `--color-brand: #d6ad86`
  - `--color-brand-hover: #ffb830`
  - `--color-footer: #1c1a18`
  - `--color-text: #2c3033`
- [ ] Font classes: headings → Playfair Display, body → Montserrat
- [ ] Button styles: primary (tan bg, rounded, uppercase), secondary (black bg)

### 4. Tests (TDD)
- [ ] Each component: render test, content assertions, responsive behavior
- [ ] 100% coverage

### 5. Build & Verify
- [ ] `npm run verify:app fendrix` passes
- [ ] `npm install` at root to register workspace

## Design notes

### Section structure order
1. Navbar (transparent, fixed/sticky)
2. Hero (full-height, image bg, CTA)
3. About (white bg, negative margin overlap, 2-col)
4. Food Menu (white bg, section title, 2-col grid, 6 items)
5. Video Intro (image bg, play button overlay)
6. Testimonials (light bg, carousel)
7. Contact (image bg, white card overlay)
8. Footer (dark bg `#1c1a18`, 3-col, newsletter)

### Visual design (from screenshot)
- Premium fine-dining aesthetic, moody & sophisticated
- Dark textured hero bg with warm food photography
- Sharp contrast: dark hero → white about section
- Warm tan `#d6ad86` as the accent color stands out against cool dark backgrounds
- Serif headings (Playfair Display) convey elegance
- Clean sans-serif body (Montserrat) ensures readability
- Minimalist social icons in top-right of navbar
- The about section overlaps the hero with a strong negative margin, creating depth

### Key fidelity notes
- Hero must be full viewport height (1080px desktop, 650px mobile)
- About section MUST overlap hero with `margin-top: -250px` (desktop) / `-100px` (mobile)
- Food menu items: image on left, text on right (media object pattern)
- Video intro: parallax background with play button popup
- Contact: white card floats over a background image
- Footer: very dark brown `#1c1a18` (not pure black)
- All headings use Playfair Display; body/nav/buttons use Montserrat
- CTA buttons have generous padding (23px 60px for primary)
