# Capitex — Design Notes & Implementation Tasks

Source: ColorLib "Finlone" (https://preview.colorlib.com/theme/finlone/)
New name: Capitex | App: apps/capitex | Package: @free-react-templates/capitex

## Implementation Task List

### Phase 1: Project Setup
- [ ] Copy simplest existing app (e.g. apps/aurora) as skeleton
- [ ] Rename package to @free-react-templates/capitex
- [ ] Set up public/CNAME with capitex.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind v4 entry + @theme tokens
- [ ] Add Google Fonts (Heebo + Open Sans) to index.html

### Phase 2: Components (in section order)
- [ ] Navbar.tsx — transparent header, sticky blue bg, nav links, CTA button, mobile hamburger
- [ ] Hero.tsx — split layout: left text + right form card (selects + inputs + submit)
- [ ] About.tsx — split: left image + counter badge, right heading + text + button
- [ ] Services.tsx — gray bg, centered title, 3-column card grid (image + title + desc + button)
- [ ] Testimonials.tsx — parallax bg, slider with dots, quote + author
- [ ] Clients.tsx — 2×2 grid, two counters (2000+, 99%), two client images
- [ ] HowItWorks.tsx — centered title, 3 numbered steps with icons
- [ ] FAQ.tsx — gray bg, split: left image, right accordion (4 items)
- [ ] Footer.tsx — 3 columns: logo+contact+social, links, newsletter. Bottom: copyright + Component Dock

### Phase 3: App Composition
- [ ] App.tsx — compose all sections in order: Navbar → Hero → About → Services → Testimonials → Clients → HowItWorks → FAQ → Footer
- [ ] BackToTop.tsx — floating green circular button, scroll-to-top behavior

### Phase 4: Tests (TDD — write first)
- [ ] Navbar.test.tsx — renders nav items, sticky behavior, mobile toggle
- [ ] Hero.test.tsx — renders form fields, headline, button
- [ ] About.test.tsx — renders heading, counter, button
- [ ] Services.test.tsx — renders 3 cards with correct titles
- [ ] Testimonials.test.tsx — renders quote, author, dots
- [ ] Clients.test.tsx — renders counters and images
- [ ] HowItWorks.test.tsx — renders 3 steps
- [ ] FAQ.test.tsx — renders accordion, expand/collapse
- [ ] Footer.test.tsx — renders columns, newsletter, Component Dock link
- [ ] BackToTop.test.tsx — renders button, scroll behavior
- [ ] App.test.tsx — integration: renders all sections

### Phase 5: Verification
- [ ] 100% coverage (npm run test:coverage)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com

## Design Fidelity Notes

### Layout
- Hero: 2-column (6+4 col split), form card with white bg, no border-radius
- About: 2-column (6+6), image left with floating counter badge
- Services: 3 equal columns on gray bg
- Clients: 2×2 grid (counters + images)
- How It Works: 3 equal columns, numbered circles
- FAQ: 2-column (6+6), image left, accordion right

### Token Mapping (Tailwind @theme)
```
--color-brand: #0BDE8C      (primary green)
--color-navy: #204570       (headings, dark text)
--color-blue: #0077FF       (accent, sticky header)
--color-body: #3F4854       (paragraphs)
--color-gray: #F4F6F9       (section backgrounds)
--color-border: #DBE2E9     (form inputs)
--font-heading: 'Heebo', sans-serif
--font-body: 'Open Sans', sans-serif
```

### Key Details
- Buttons are square (border-radius: 0px) — match this exactly
- Form card has no border-radius, white bg, subtle shadow implied
- Testimonials use fixed parallax background image
- Counter badges use inline SVG/icon + animated count
- Accordion is single-open (only one item expanded at a time)
- Footer newsletter uses email input + submit button inline
- Mobile: hamburger menu, stacked columns, full-width form
