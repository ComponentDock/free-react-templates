# Rotator Tasks & Design Notes

- **Source Template:** ColorLib Carousel 16 (`https://colorlib.com/wp/template/carousel-16/`)
- **Assigned Name:** `rotator` (`apps/rotator`)
- **Preview Reference:** `https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-16.jpg`

## Structure & Section Order (1:1 Fidelity)

1. **Navbar:** Sticky header with logo, navigation links (Home, Features, Slides, Gallery, Contact), and "Get Started" CTA button.
2. **Hero Carousel Section:** Large immersive banner featuring interactive slide switcher, headline, description, background accent cards, and prev/next controls.
3. **Feature Highlight Grid:** 3-column card layout displaying key features with icons and hover effects.
4. **Interactive Slider Showcase:** Secondary carousel component demonstrating multi-item card sliding.
5. **Call to Action / Newsletter:** Clean banner prompting user subscription.
6. **Footer:** Copyright, social links, and mandatory attribution link to `https://www.componentdock.com/`.

## Design & Implementation Notes

- **Colors:** Deep blue primary tones with crisp white and neutral grays.
- **Interactivity:** React state-driven carousel index rotation with smooth CSS transitions.
- **Placeholder Images:** `https://picsum.photos/seed/rotator-1/800/600`, `https://picsum.photos/seed/rotator-2/800/600`, etc.
