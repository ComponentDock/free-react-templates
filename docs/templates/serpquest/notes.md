# SerpQuest — Prep Notes

Source: ColorLib Seogo (https://colorlib.com/wp/template/seogo/)
Preview: https://preview.colorlib.com/theme/seogo/
Spec: openspec/specs/template-serpquest/spec.md

## Structure order

1. Header (sticky navbar)
2. Hero (full-width dark bg + illustration + CTA)
3. Services (3 cards)
4. Case Studies (project grid)
5. Accordion / Why Choose Us (FAQ)
6. Features (grid of capabilities)
7. Testimonials (carousel)
8. Footer (4 columns + copyright)

## Fidelity notes

### Header
- Sticky positioning, dark/transparent over hero
- Logo on left, centered nav links, "Appointment" pill button on right
- Mobile: hamburger menu
- Use lucide-react icons for hamburger

### Hero
- Dark background image with illustration element
- Centered text: "BoostUp your Business & Get top of Search Engine"
- "Get Started" pill button (primary pink #FF008C)
- Decorative shape images (can skip purely decorative, or use CSS shapes)

### Services
- 3-column row, white background
- Each card: icon (Themify → lucide), title, short text, "Learn More" link
- Subtle hover effects

### Case Studies
- Dark or colored section background
- Heading: "Our Selected Case Study"
- Grid of project cards with image overlay (category label on hover/caption)
- Categories: Product Design, Custom Website, Digital Marketing

### Accordion / Why Choose Us
- Dark background section
- Heading: "Why Choose Us" + description text
- 3 accordion items with plus/minus toggle
- Answer text below each question

### Features
- White background
- Heading: "We have some awesome features to rank your business"
- Grid of feature cards (icon + title + description)
- Items: Custom Design, Paid Search Result, Global Search Option, Email Marketing, Custom Software, Setup Business Goal

### Testimonials
- Light background (#f9f9ff)
- Carousel/slider of testimonial cards
- Each: quote text, author name, role ("Business Owner")
- Navigation arrows (prev/next)
- Can use simple state-based carousel

### Footer
- Dark background (#1a1a2e)
- 4 columns: About text, Quick Links, Newsletter signup, Contact info
- Copyright bar at bottom
- MUST include Component Dock link

## Design tokens to use in Tailwind @theme

```
--color-primary: #FF008C;
--color-secondary: #4cd3e3;
--color-accent: #ff5e13;
--color-bg-light: #f9f9ff;
--color-bg-dark: #1a1a2e;
--font-family: "Poppins", sans-serif;
```

## Implementation notes

- Use `picsum.photos/seed/serpquest-<n>/w/h` for case study images
- Use `picsum.photos/seed/serpquest-testimonial-<n>/w/h` for avatar placeholders
- Icons: lucide-react (replace Themify/FA)
- Carousel: simple useState-based or CSS-only scroll-snap
- Accordion: useState for expand/collapse
