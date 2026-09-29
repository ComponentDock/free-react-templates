# RankPulse — Replication Research & Design Notes

Source: ColorLib Seogo
Preview: https://preview.colorlib.com/theme/seogo/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seogo-free-template.jpg

## Replication Reference

### Live Preview Analysis (fetched 2026-09-29)

Preview DOM fetched via curl from `https://preview.colorlib.com/theme/seogo/`.
CSS fetched from `https://preview.colorlib.com/theme/seogo/css/style.css`.

### Design Tokens Extracted

- **Primary brand:** `#FF008C` (magenta/pink)
- **Gradient:** `linear-gradient(to right, #ff008c 0%, #ff6357 100%)` — used on CTA buttons
- **Font:** `"Poppins", sans-serif`
- **Heading color:** `#001D38` (dark navy)
- **Body text:** `#1F1F1F` (near-black)
- **Muted text:** `#727272` / `#7e7e7e`
- **Accent colors from CSS chips:** `#6382e6` (blue), `#e66686` (pink), `#f09359` (orange), `#73fbaf` (green), `#a367e7` (purple)
- **Light tint bg:** `#fbf9ff`
- **Button radius:** slight rounded (no hard corners)
- **Avatar:** `border-radius: 50%` circular

### Visual Design Notes (from screenshot + preview)

- **Color scheme:** White/light backgrounds with bold magenta-pink CTA buttons. Dark navy headings. Clean, modern SEO agency aesthetic.
- **Hero:** Full-width banner background image, centered headline with gradient CTA, decorative abstract polygon shapes overlaid, illustration below text.
- **Layout:** Bootstrap grid (12-col), consistent section padding, centered content with containers.
- **Footer:** Dark background with image overlay, multi-column widget layout, prominent CTA bar at top.

## Implementation Tasks

### 1. Project Setup
- [ ] Create `apps/rankpulse/` from simplest existing app
- [ ] Rename package to `@free-react-templates/rankpulse`
- [ ] Set `public/CNAME` to `rankpulse.free.componentdock.com`
- [ ] Add theme tokens to `src/index.css` (Tailwind `@theme` block)

### 2. Navbar Component
- [ ] Sticky header with logo, navigation links, phone CTA
- [ ] Dropdown for Pages and Blog items
- [ ] Mobile hamburger menu with slide-in
- [ ] Use `packages/ui` components where applicable

### 3. Hero Section
- [ ] Full-width banner background via CSS
- [ ] Headline: "BoostUp your Business & Get top of Search Engine"
- [ ] Gradient CTA button ("Get Started")
- [ ] Decorative polygon/abstract shapes (CSS/SVG)
- [ ] Illustration below headline (placeholder via picsum)

### 4. Services Section
- [ ] 3-column grid (SEO/SEM, Digital Marketing, Social Media)
- [ ] SVG icons (use lucide-react equivalents)
- [ ] Title + description + "Learn More" text link per card
- [ ] Responsive stacking on mobile

### 5. Company Info Section
- [ ] Split layout: illustration (left), text (right)
- [ ] Heading about SEO specialization
- [ ] Paragraph description
- [ ] "About Us" CTA button (gradient)

### 6. Case Study Section
- [ ] Dark background image
- [ ] Section heading "Our Selected Case Study"
- [ ] Carousel of case study cards (thumbnail, title, tags)
- [ ] Responsive: horizontal scroll or stacked on mobile

### 7. Accordion / FAQ Section
- [ ] Expandable/collapsible FAQ items
- [ ] Illustration on right side
- [ ] Smooth toggle animation

### 8. Features Section
- [ ] 3x2 grid of feature cards
- [ ] Each: icon (lucide-react), title, short description
- [ ] Light tint background (`#fbf9ff`)

### 9. Testimonials Section
- [ ] Carousel with quote icon, text, author info
- [ ] Circular avatar images
- [ ] Author name + role

### 10. Footer
- [ ] Dark background with image overlay
- [ ] CTA bar: "Let's Start your project, Mail Us" + phone + email
- [ ] 4-column widget: Logo + desc + social | Services links | Useful links | Newsletter form
- [ ] Copyright bar with Component Dock attribution
- [ ] Social media icon links

### 11. Testing
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Ensure 100% coverage
- [ ] Responsive behavior tests

### 12. Verification
- [ ] Run `scripts/verify-app.sh rankpulse`
- [ ] Verify no ColorLib references in app code
- [ ] Confirm footer links to Component Dock
