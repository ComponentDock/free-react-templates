# Dentawell — Design Notes & Task Outline

## Source

- ColorLib slug: `drcare`
- ColorLib URL: https://colorlib.com/wp/template/drcare/
- Preview URL: https://preview.colorlib.com/theme/drcare/
- New name: Dentawell

## Section order (from live preview DOM)

1. Top info bar (light bg, brand + address/email/phone)
2. Main navbar (dark bg, nav links + "Make An Appointment" button)
3. Hero slider (2 slides, bg images, dark overlay, headline + CTA)
4. Services strip (blue bg, 4 cards: Qualified Doctors, Emergency Care, Outdoor Checkup, 24 Hours Service)
5. About section (split: image left, text right with 2x2 feature cards)
6. CTA banner (parallax bg, blue overlay, "We Provide Free Health Care Consultation")
7. Departments section (5 horizontal tabs, each with image + feature cards)
8. Staff/Doctor section (4 cards with hover social links)
9. Testimonials (carousel on light bg)
10. Counter/Stats (parallax bg, animated numbers)
11. Blog section (3 entry cards on light bg)
12. Footer (dark bg, 4 columns + copyright bar)

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand blue | `#2f89fc` | Services strip, dept pills, CTA overlay, pricing, testimonials, blog dates, footer |
| Accent orange | `#ff8000` | Secondary/CTA buttons, staff social hover, pricing hover |
| Dark bg (navbar) | `#343a40` | Main navigation bar |
| Dark bg (footer) | `#141313` | Footer background |
| Light bg | `#fafafa` | Alternate sections, tab content |
| Body text | `#212529` | Main text color |
| Muted text | `#b3b3b3` | Position labels, blog meta |
| Font family | Work Sans | Google Fonts, weights 100-900 |
| Button radius | `40px` | All CTA / action buttons (pill shape) |
| Icon circle | `80px`, `border-radius: 50%` | Services strip icons |
| Department tab | `border-radius: 0`, bg `#2f89fc` active | Tab pills |
| Card border (pricing) | `2px solid #2f89fc` | Pricing cards |
| Footer social | `border-radius: 50%` | Social icon circles |

## Implementation tasks

### Task 1: Scaffold app
- Copy simplest existing app as base
- Rename package to `@free-react-templates/dentawell`
- Set up `public/CNAME` → `dentawell.free.componentdock.com`
- Set `homepage` in package.json
- Run `npm install` at root for lockfile registration

### Task 2: Index.html + fonts
- Add Google Fonts `<link>` for Work Sans (weights 400,500,600,700,800,900)
- Set page title to "Dentawell"

### Task 3: index.css + theme tokens
- Define Tailwind `@theme` tokens:
  - `--color-brand`: `#2f89fc`
  - `--color-accent`: `#ff8000`
  - `--color-dark-nav`: `#343a40`
  - `--color-dark-footer`: `#141313`
  - `--color-light-bg`: `#fafafa`

### Task 4: Components (section by section)
1. `TopBar.tsx` — brand name + contact info icons
2. `MainNav.tsx` — dark sticky navbar with links + CTA button + mobile hamburger
3. `HeroSlider.tsx` — bg image slider with overlay, headline, subheading, CTA
4. `ServicesStrip.tsx` — 4-column blue strip with circular icon cards
5. `AboutSection.tsx` — split layout with image + 2x2 feature grid
6. `CtaBanner.tsx` — parallax bg + blue overlay + headline + CTA button
7. `DepartmentsSection.tsx` — tabbed pills with department content + images
8. `StaffSection.tsx` — 4 doctor cards with hover social reveal
9. `TestimonialsSection.tsx` — carousel with quote, user image, name, position
10. `CounterSection.tsx` — parallax bg + animated stat counters
11. `BlogSection.tsx` — 3 blog entry cards with date badges
12. `Footer.tsx` — dark 4-column footer + copyright bar linking ComponentDock

### Task 5: App.tsx composition
- Assemble all sections in order matching the original

### Task 6: Tests (TDD)
- One `*.test.tsx` per component
- 100% coverage on all branches

### Task 7: Verification
- Typecheck, lint, test:coverage, build
- Cross-check all design tokens match original
- Verify no ColorLib references in app code
- Verify footer links to ComponentDock

## Fidelity notes

- Original uses Bootstrap 4 grid — translate to Tailwind grid/flex utilities
- Original uses Owl Carousel for hero + testimonials — use CSS-only or simple
  React state carousel instead
- Original uses AOS (Animate on Scroll) — can use framer-motion or CSS
  animations
- Original uses flaticon/icomoon icon fonts — use lucide-react equivalents
- Original uses `data-stellar-background-ratio` parallax — use CSS
  `background-attachment: fixed` or framer-motion
- Original department tabs use Bootstrap pills + jQuery — use React state
- All placeholder images via `https://picsum.photos/seed/dentawell-<n>/<w>/<h>`
