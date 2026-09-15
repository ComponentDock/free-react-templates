# Litigate — Implementation Tasks & Design Notes

## Source
- ColorLib template: **Whisper**
- Preview URL: https://preview.colorlib.com/theme/whisper/
- Source URL: https://colorlib.com/wp/template/whisper/

## Task breakdown

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/litigate`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set `public/CNAME` to `litigate.free.componentdock.com`
- [ ] Set `"homepage"` in `package.json` to `https://litigate.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Components (TDD order)
- [ ] `Navbar.tsx` — dark bg, sticky, brand "Litigate", nav links (Home, About Us, Practice Areas, Attorneys, Blog, Contact), mobile hamburger
- [ ] `Hero.tsx` — full-screen bg image (picsum), dark overlay, italic subheading, h1, gold CTA
- [ ] `StatsSection.tsx` — split: left video thumbnail + play btn, right stat counters + heading
- [ ] `PracticeAreas.tsx` — light bg, heading, grid of circular gold icon cards
- [ ] `Attorneys.tsx` — dark bg, heading, 4-column flip cards (front: img+name+role, back: quote+avatar)
- [ ] `ConsultationForm.tsx` — split: left bg image w/ overlay + gold border, right form (name, email, subject, textarea, submit)
- [ ] `Testimonials.tsx` — dark bg, carousel of client review cards (avatar, quote, name, role)
- [ ] `BlogSection.tsx` — light bg, heading, 3-column blog cards (image, date, title, excerpt, link)
- [ ] `Gallery.tsx` — 4-column image grid with Instagram icon hover overlay
- [ ] `Newsletter.tsx` — parallax bg, heading, email input + submit
- [ ] `Footer.tsx` — dark bg, multi-column (About, Practice Areas, Business Hours, Contact), Component Dock link
- [ ] `App.tsx` — compose all sections in DOM order

### Phase 3: Styling
- [ ] Add Poppins + Lora fonts via `<link>` in `index.html`
- [ ] Define design tokens in `index.css` `@theme` block
- [ ] Primary button: #eac15a bg, white text, radius 3px, hover invert
- [ ] Practice area icons: circular (130×130px), gold bg, radius 50%, hover invert
- [ ] Section backgrounds: #2c2f3a (dark), #f8f9fa (light), #222831 (footer)
- [ ] Flip card CSS for attorneys (front/back transitions)
- [ ] Gallery hover overlay with icon
- [ ] Parallax effect for newsletter section
- [ ] Responsive breakpoints (mobile-first Tailwind)

### Phase 4: Tests
- [ ] One `describe` per component
- [ ] Scenario-style `it` blocks matching spec Gherkin
- [ ] 100% coverage (lines, functions, branches, statements)

### Phase 5: Verify & Ship
- [ ] `scripts/verify-app.sh litigate` passes
- [ ] Commit as `feat: add litigate template (ColorLib Whisper)`
- [ ] Push, open PR, squash merge
- [ ] Surge deploy verified at litigate.free.componentdock.com

## Design notes

### Section order (from DOM)
1. Navbar (dark, sticky)
2. Hero (full-screen, dark overlay bg image)
3. Stats / Counter (split: video left, counters right)
4. Practice Areas (light bg, circular icon grid)
5. Attorneys (dark bg, flip cards)
6. Free Consultation (split: image left, form right)
7. Testimonials (dark bg, carousel)
8. Blog (light bg, 3-column cards)
9. Gallery (4-column images, hover overlay)
10. Newsletter (parallax bg, email form)
11. Footer (dark, multi-column)

### Color palette from CSS
- Brand accent: #eac15a (gold) — buttons, icons, links, highlights
- Dark: #2c2f3a — services, attorneys, testimonials sections
- Darker: #16181d — alternating cards, consultation overlay
- Footer: #222831
- Light: #f8f9fa — counter cards, blog section
- White: #fff — text on dark, form bg, hover states
- Text: #212529 (dark body text)
- Hero overlay: #000000 at 50% opacity

### Typography
- Body font: Poppins (Google Fonts), weights 300–800
- Accent font: Lora (Google Fonts, serif) — italic slider text, breadcrumbs
- Hero h1: 50px, white, weight 900
- Subheading: 18px, italic, semi-transparent white
- Section headings: h2, dark or white depending on bg

### Button styles
- Primary: gold (#eac15a) bg, white text, border-radius 3px, uppercase, letter-spacing 1px
- Hover: transparent bg, gold text/border
- Form submit: same primary style

### Key interactions
- Attorney cards: CSS flip on hover (front → back transition)
- Practice area icons: background color invert on hover (gold → white)
- Gallery: Instagram icon fades in on hover (opacity 0 → 1)
- Testimonials: Owl-style carousel with dot navigation
- Hero: optional slider with navigation arrows

### Fidelity notes
- Hero uses background image with dark overlay — use picsum.photos placeholder
- Attorney photos use person images — use picsum with portrait seeds
- Gallery images are generic — use picsum.photos with varied seeds
- Video thumbnail uses about.jpg with play button overlay — use picsum placeholder
- Newsletter parallax uses background image — use picsum.photos
- Form is presentational only (no real backend)
- Footer attribution must link Component Dock, not Colorlib
- Practice area icons use Flaticon classes — replace with lucide-react icons
