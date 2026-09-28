# Carvery — Implementation Tasks

Source: ColorLib Steak (https://preview.colorlib.com/theme/steak/)
New name: carvery
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Task Outline

### Phase 1: Project Setup
- [ ] Copy simplest existing app as scaffold (e.g. apps/abjure)
- [ ] Rename package to @free-react-templates/carvery
- [ ] Update public/CNAME to carvery.free.componentdock.com
- [ ] Update homepage in package.json
- [ ] Run npm install at repo root to register workspace

### Phase 2: Design Tokens (index.css)
- [ ] Add @import for Playfair Display from Google Fonts
- [ ] Define @theme with brand-amber: #fba83b, brand-amber-hover: #e58405
- [ ] Set body font-family to Playfair Display
- [ ] Set body text color to #999999
- [ ] Set heading color to #000000
- [ ] Button base: border-radius: 0, text-transform: uppercase, letter-spacing: 0.1em

### Phase 3: Components (section by section)

#### Navbar.tsx
- Transparent header, logo left, hamburger toggle right
- On scroll: fixed white bg, black logo, subtle shadow
- Mobile: full-screen black overlay menu

#### Hero.tsx
- Full-viewport parallax background (picsum.photos/seed/carvery-hero)
- Dark overlay (#313137 @ 0.4)
- Centered white heading + white outline "Play Video" button
- Mouse scroll indicator at bottom

#### About.tsx
- Full-width, image left (parallax offset) + text right overlay
- Heading, two paragraphs, black outline "Read More" button

#### Services.tsx
- Light gray background section
- "Restaurant Services" heading + lead text
- 3×2 grid of service cards (icon + title + description)
- Use lucide-react icons for food items

#### Menu.tsx
- "Our Menu" heading + lead text
- 3 pill-style tabs (Breakfast / Lunch / Dinner) with border styling
- 2-column menu items: circular thumbnail, name, description, price
- Tab switching with React state

#### FunFacts.tsx
- Light gray background
- "Today's Fun Facts" heading
- Counter/statistics with large numbers and labels

#### NewsEvents.tsx
- "News & Events" heading
- Blog/event cards with thumbnail images and hover overlay

#### Testimonials.tsx
- Light gray background
- Blockquote-style with large quotation marks
- Author photo (circular), name, position

#### Reservation.tsx
- "Reserve A Table" heading + lead text
- Two-part layout:
  - Left: dark (#000) opening hours panel with white text
  - Right: reservation form (Party Size, Date, Time, Name, Phone, Email)
  - Bottom-border input style, full-width black submit button

#### Map.tsx
- Placeholder for Google Maps embed (static image or iframe)

#### Footer.tsx
- 4-column layout with widgets
- About, Quick Links, Support, About Us, Connect With Us
- Social icons (lucide-react)
- Copyright with Component Dock link

### Phase 4: App.tsx Assembly
- [ ] Import and compose all sections in order
- [ ] Verify section order matches spec

### Phase 5: Tests
- [ ] Write tests for each component (100% coverage)
- [ ] Test tab switching in Menu
- [ ] Test header scroll behavior
- [ ] Test responsive layout

### Phase 6: Verification
- [ ] Run scripts/verify-app.sh carvery
- [ ] Confirm 100% coverage
- [ ] Confirm build passes
