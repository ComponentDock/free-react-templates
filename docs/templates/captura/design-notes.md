# Captura — Design Notes & Task Outline

Source: ColorLib Bato (https://colorlib.com/wp/template/bato/)
Preview: https://preview.colorlib.com/theme/bato/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bato-free-template.jpg

## Visual Design Summary

Bato is a minimalist photography portfolio with a strong editorial aesthetic. Key visual characteristics:

- **Typography pairing:** Karla (sans-serif) for body/UI + Playfair Display (serif) for headings/logo — creates an elegant contrast
- **Color palette:** Mostly black/white with vibrant yellow (#F9CE00) accent used sparingly for active states and hover effects
- **Layout philosophy:** Full-bleed imagery with asymmetric 60/40 splits — images dominate, text occupies a narrow panel
- **Buttons:** Square (zero border-radius), solid black, yellow on hover — sharp, editorial feel
- **Navigation:** Hidden sidebar overlay with search, links, and gallery thumbnails — unconventional, portfolio-focused
- **Overall aesthetic:** Clean, monochrome with a single pop of yellow. Photography-first design where images are the hero.

## Task Outline

### Phase 1: Scaffold

- [ ] Copy simplest existing app as template, rename package to @free-react-templates/captura
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Set up public/CNAME (captura.free.componentdock.com)
- [ ] Update package.json homepage
- [ ] Set up index.css with Tailwind + theme tokens (Karla, Playfair Display, #F9CE00 accent)

### Phase 2: Components (in order)

- [ ] **SidebarNav** — full-screen overlay, slide-in/out animation, search input, nav links, gallery thumbnails
  - Uses: search icon, gallery thumbnails (picsum.photos seeds)
  - Behavior: toggled by hamburger, closes on link click
- [ ] **Header** — sticky top bar, logo text, hamburger toggle
  - Logo: "Captura" in Playfair Display, uppercase, 24px
  - Toggle: hover effect (black bg)
- [ ] **HeroCarousel** — 3-slide carousel with 60/40 split
  - Left 60%: full-bleed background image (picsum.photos)
  - Right 40%: slide number (01/03), tag label, headline, description, CTA
  - Auto-advance with dots or arrows
  - Slide content:
    - Slide 1: "Welcome" / "Photography is on its way." / View Galleries
    - Slide 2: "Photography" / "Capture interesting things." / View Galleries
    - Slide 3: "Discover" / "Discover New Things" / View Galleries
- [ ] **WorksGallery** — "Works" heading + 5 work entries
  - Each entry: 60/40 split, alternating image left/right
  - Content: title (links), description, "View Photo" button
  - Image hover: semi-transparent overlay with search icon
  - Picsum.photos with deterministic seeds per entry
- [ ] **Subscribe** — centered email input + "Subscribe Now" button
  - Form layout: 3/4 input + 1/4 button
- [ ] **Footer** — 3-column layout
  - Column 1: Office address
  - Column 2: Get in Touch (email)
  - Column 3: Social icons (lucide-react equivalents)
  - Copyright line + Component Dock link

### Phase 3: App Composition

- [ ] Compose all sections in App.tsx in correct order
- [ ] Add smooth scroll for sidebar navigation links
- [ ] Ensure responsive behavior (mobile sidebar, stacked layout)

### Phase 4: Tests (TDD)

- [ ] SidebarNav.test.tsx — toggle, links, search, thumbnails
- [ ] Header.test.tsx — logo, toggle
- [ ] HeroCarousel.test.tsx — slide content, navigation, auto-advance
- [ ] WorksGallery.test.tsx — entries count, alternating layout, content
- [ ] Subscribe.test.tsx — form display, input placeholder
- [ ] Footer.test.tsx — columns, copyright, Component Dock link
- [ ] App.test.tsx — full page composition
- [ ] 100% coverage verification

## Section-by-Section Fidelity Notes

### Sidebar Nav

- Original: full-screen white overlay, slides from left, has search bar + nav + gallery grid
- React: Use CSS transform/transition for slide animation. Gallery thumbnails use picsum.photos.
- The nav toggle uses a hamburger icon that animates (three lines → X)

### Header

- Simple: white bg, logo left, hamburger right. Very minimal.
- Logo font is Playfair Display, uppercase, 24px.

### Hero Carousel

- The most complex section. Uses Owl Carousel in original.
- React: Use a simple state-based carousel or a lightweight library.
- The 60/40 split is crucial — image takes 60% width, text panel 40%.
- Text panel uses display: table/table-cell for vertical centering.
- Slide numbers are positioned absolute at bottom of text panel.
- Tags have 7px letter-spacing, displayed as block before headline.
- Headlines use Playfair Display, 58px desktop / 24px mobile.

### Works Gallery

- Alternating layout is the key design element.
- Entries use the same 60/40 split as hero but horizontally.
- Text alternates left/right via CSS push/pull classes.
- Image hover shows a search icon overlay (Magnific Popup in original → simple state in React).

### Subscribe

- Simple centered form. Yellow accent on button hover.
- Email input with placeholder text.

### Footer

- Dark footer area with 3 centered columns.
- Social icons in original use icomoon — replace with lucide-react.
- Copyright must link to Component Dock, not ColorLib.
