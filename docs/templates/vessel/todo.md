# Vessel — Implementation Todo

## Pre-Implementation

- [x] Spec written (`openspec/specs/template-vessel/spec.md`)
- [x] Design notes (`docs/templates/vessel/design-notes.md`)
- [x] Replication research: preview DOM, CSS tokens, screenshot analyzed
- [x] Design tokens mapped to Tailwind @theme values

## Implementation Tasks

### 1. Scaffold

- [ ] Copy simplest existing app as base (e.g. apps/dispatch)
- [ ] Rename to `vessel`, update package.json (`@free-react-templates/vessel`)
- [ ] Update `public/CNAME` to `vessel.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Run `npm install` at repo root for lockfile registration

### 2. Navbar Component

- [ ] Dark background, logo with icon + "Vessel" text
- [ ] Nav links: Home, About, Service, Blog, Contact
- [ ] Multi-level dropdown menus (desktop)
- [ ] Utility bar: user icon, search toggle, cart
- [ ] Sticky on scroll behavior
- [ ] Mobile hamburger menu

### 3. HeroSlider Component

- [ ] Full-width background image with dark overlay
- [ ] Centered headline (uppercase), subtitle, 2 CTA buttons
- [ ] Outlined button style with orange hover
- [ ] Optional: single slide or simple carousel

### 4. ServiceCards Component

- [ ] Gray background section
- [ ] 3-column grid: image + orange icon badge + title + description
- [ ] Icons: ship, plane, truck (lucide-react equivalents)
- [ ] Fade-in scroll animations (optional)

### 5. AboutStats Component

- [ ] Two-column: form area (left) + text/stats (right)
- [ ] Contact/quote form with input + send button
- [ ] 3 stat counters with numbers and "Project Done" labels
- [ ] Orange accent on stat boxes

### 6. ServiceCatalog Component

- [ ] White background, split layout
- [ ] Left: heading + description + "Learn More" link
- [ ] Right: dark background area with "Why Choose Us?" checklist
- [ ] Blue checkmark icons on checklist items

### 7. ServiceList Component

- [ ] Dark parallax background
- [ ] 4 hexagon-icon service items (Ware House, Road, Sea, Air Freight)
- [ ] Hex-shaped icon containers
- [ ] Title + description + "read more" per item

### 8. PromoFeatures Component

- [ ] White background, 2x2 grid
- [ ] 4 icon + text blocks (Location, News, Support, Delivery)
- [ ] Orange circle icon containers

### 9. PromoCTA Component

- [ ] Parallax background with dark overlay
- [ ] Centered headline about freight/logistics
- [ ] "Get a Quote" orange button

### 10. Testimonials Component

- [ ] White background, centered
- [ ] "What Client's Say" heading
- [ ] Client photo carousel with circular images
- [ ] Quote text + name + role
- [ ] Prev/next navigation arrows

### 11. Footer Component

- [ ] Dark background (`#5D6B82`)
- [ ] Newsletter signup (h2 + email input + subscribe)
- [ ] 4-column bottom (About, Tweets/News, Links, Images)
- [ ] Copyright with Component Dock link
- [ ] Replace all Colorlib references

### 12. App Assembly

- [ ] `src/App.tsx` composing all sections in order
- [ ] `src/index.css` with Tailwind @theme tokens
- [ ] Placeholder images via `picsum.photos/seed/vessel-*`

### 13. Tests (TDD)

- [ ] Each component: render test, content check, accessibility
- [ ] Navbar: sticky behavior, mobile toggle
- [ ] HeroSlider: CTA buttons visible
- [ ] Stats: counter values present
- [ ] Testimonials: carousel navigation
- [ ] Footer: newsletter form, Component Dock link
- [ ] 100% coverage gate passes

### 14. Verification

- [ ] `npm run verify:app vessel` passes (typecheck + lint + test + build)
- [ ] Visual review matches reference screenshot
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
