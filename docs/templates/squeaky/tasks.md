# Squeaky — Implementation Tasks & Design Notes

Source: ColorLib Cleanex (https://preview.colorlib.com/theme/cleanex/)
New name: Squeaky
Spec: openspec/specs/template-squeaky/spec.md

## Section Order (implement top-to-bottom)

1. **Navbar.tsx** — Dark transparent navbar, brand text logo, 6 nav links, "Request A Quote" secondary button. Collapses to hamburger on mobile.

2. **Hero.tsx** — Full-viewport-height hero with background image (picsum), dark overlay, subheading "Professional Cleaning" with left accent line, h1 "A Clean Home is A Happy Home", body paragraph, CTA button(s).

3. **AboutAppointment.tsx** — Split layout. Left: booking form (First Name, Last Name, Service dropdown with 7 options, Phone, Date, Time, Submit). Right: "About Company" heading, description paragraphs, then 4 feature cards with icons (Trained Staff, Best Equipment, 100% Warranty, Fast & Effective).

4. **CounterStats.tsx** — Parallax background section with 4 animated counter blocks: 4,800 Projects, 14,000 Employees, 200 Clients, 71,650 Awards. Use lucide-react icons (CheckCircle, Users, Star, Award).

5. **ServicesGrid.tsx** — "Offering Best Cleaning Services" heading, 3×2 grid of 6 service cards. Each card: background image, title, "Starting from $50", circular arrow button. Services: Residential, Commercial, Construction, Windows, Carpet, Furniture.

6. **ProcessSteps.tsx** — "How it Works" section on solid blue (#225ae1) background. 3 numbered steps with circular icons: "Pick a suitable plan", "Set your schedule", "Get things done".

7. **Testimonials.tsx** — Light background, carousel of testimonial cards. Each: circular avatar, name, location, quote text. Use simple state-based carousel (no external lib).

8. **Pricing.tsx** — 4 pricing cards: Basic ($29), Standard ($59), Premium ($79, highlighted), Ultimate ($89.50). Blue header bar, yellow price text, feature list, "Sign Up" button.

9. **CTASection.tsx** — Blue overlay section: "Need to clean your house? Just hire us!" heading, phone and email buttons (btn-primary and btn-secondary).

10. **BlogPosts.tsx** — Light background, "Recent Post" heading, 3 blog cards with image, date, author, comment count, title.

11. **Footer.tsx** — Blue overlay background. Logo + description, social icons (Twitter/Facebook/Instagram from lucide-react), Recent Posts thumbnails, contact info. "Made with Component Dock" link.

## Design Fidelity Notes

### Colors
- Primary blue: `#225ae1` — use as `--color-brand` in `@theme`
- Accent yellow: `#fedd32` — use as `--color-accent`
- Dark navy: `#161655` — service card headings
- Footer overlay: `#1947b7` at 0.9 opacity
- Button primary: `#007bff` (Bootstrap blue)
- Button secondary: `#6c757d` (Bootstrap gray)
- Light bg: `#f7f7f7`
- Service card off-white: `#f4f5f0`

### Typography
- Font: Roboto (Google Fonts) — add to index.html
- Subheading: 14px, 700, uppercase, with 40px left line accent
- Service card title: 22px, 500
- Pricing price: 28px, 900, yellow

### Card Shapes
- Service cards: 5px border-radius, subtle shadow on hover
- Pricing cards: default Bootstrap radius, blue header bar
- Circular icons: 60×60px (features), 80×80px (process steps)

### Background Patterns
- Hero: full-viewport bg image + dark overlay
- Counter: parallax bg image
- Process section: solid blue overlay
- CTA: blue overlay at 0.8 opacity
- Footer: blue overlay at 0.9 opacity
- Testimonials/Blog: light gray bg

### Component Patterns
- Use `cn()` from packages/ui for all class composition
- Form uses native HTML select (not custom dropdown)
- Testimonials carousel: useState + CSS transform, no external dep
- Pricing highlight: "active" class on Premium card
- Counter animation: use IntersectionObserver + requestAnimationFrame
- All sections animate on scroll (fade-in-up)

### Placeholder Images
- Hero: `https://picsum.photos/seed/squeaky-hero/1920/1080`
- Counter bg: `https://picsum.photos/seed/squeaky-counter/1920/600`
- Service cards: `https://picsum.photos/seed/squeaky-svc-1/400/260` through svc-6
- Process bg: solid blue (no image needed)
- Blog images: `https://picsum.photos/seed/squeaky-blog-1/400/300` through blog-3
- Testimonial avatars: `https://picsum.photos/seed/squeaky-person-1/100/100` through person-3
- CTA bg: `https://picsum.photos/seed/squeaky-cta/1920/600`
- Footer bg: same as counter or separate `https://picsum.photos/seed/squeaky-footer/1920/600`
