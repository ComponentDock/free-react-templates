# Zenasana — Design Notes & Tasks

Source: ColorLib "Yogalife" (https://colorlib.com/wp/template/yogalife/)
Preview: https://preview.colorlib.com/theme/yogalife/

## Section order (1:1 with original)

1. **Navbar** — White sticky bar, logo "Zenasana" left, nav right (Home, Yoga Classes [dropdown: Yoga Dance, Bare Workout, Peace of Mind, More], Events, About Studio, Contact). Mobile hamburger.
2. **Hero carousel** — Owl Carousel, 2 slides with background images, dark overlay, centered text (uppercase teal caption + white h1). "Yoga for everybody" / "Welcome To Zenasana" and "Enjoy With Us" / "Yoga & Meditation".
3. **Welcome section** — Split layout: left 50% image, right 50% text. Playfair Display heading "Welcome To Zenasana", teal caption "Hello there!", paragraph, teal pill CTA "See The Yoga Pricing".
4. **Programs section** — Light bg, heading "Our Programs", 3-column grid of 6 program cards (Embrace Your Edge, Yoga to Build Resilience, Rise & Shine, Bend & Stretch, Vinyasa Yoga, Barre Workout).
5. **Video section** — "Watch Video" heading, left 6 cols embedded video, right 5 cols description text.
6. **Pricing section** — "Yoga Pricing" heading, 4 pricing cards: New Client Trial Week (featured, image bg + teal overlay), 10 Days, 20 Days, 30 Days Yoga Class. Each with price, feature list, CTA.
7. **Features section** — Light bg, "Yoga Features" heading, 4 items: Peace of Mind, Mindfulness, Meditation, Yoga Carpet.
8. **Gallery section** — "Our Gallery" heading, image grid.
9. **Events section** — "Upcoming Events" heading, list of event items with image + heading + date.
10. **Testimonials section** — "What People Say" heading, carousel of 4 testimonials (Katie Johnson, Jane Mars, Shane Holmes, Mark Johnson).
11. **Location section** — "Location" heading, map.
12. **Footer** — Dark bg with image + 80% black overlay. Columns: About text, Quick Links, Social links, Newsletter signup. Copyright.

## Fidelity notes

- **Teal accent #87e5da** is the primary brand color: buttons, captions, pricing overlay, hover states. Very calming, yoga-appropriate.
- **Font pairing**: Work Sans (clean, modern) for body/UI. Playfair Display (elegant serif) for the "Welcome" heading and any serif accent text.
- **Pill buttons**: border-radius 30px, teal bg, white text. Outlined variant for pricing.
- **Caption badge**: uppercase, letter-spacing 0.2em, 12px, white text on teal bg or standalone.
- **Pricing cards**: Dashed border (#ccc). Featured card has image background with teal semi-transparent overlay (rgba(135,229,218,0.9)).
- **Footer**: Dark image background with rgba(0,0,0,0.8) overlay. Text at 50% white opacity, links at 30%, headings full white.
- **Hero**: Full-width carousel with dark overlay (rgba(0,0,0,0.6)). Text centered with caption above heading.
- **Light sections** alternate with white sections for visual rhythm.
- Use `picsum.photos/seed/zenasana-<n>/800/600` for placeholder images (deterministic).

## Implementation tasks

- [ ] Scaffold `apps/zenasana` from simplest existing app
- [ ] Set up package.json, vite.config.ts, index.html with Google Fonts (Work Sans + Playfair Display)
- [ ] Create index.css with Tailwind + custom tokens (@theme for brand teal #87e5da)
- [ ] Implement Navbar component (sticky, logo, nav links, dropdown, mobile hamburger)
- [ ] Implement HeroCarousel component (background images, overlay, captions, arrows)
- [ ] Implement WelcomeSection component (split layout, Playfair heading, teal caption, CTA)
- [ ] Implement ProgramsGrid component (3-col grid, 6 cards with images + headings)
- [ ] Implement VideoSection component (embedded video + description)
- [ ] Implement PricingSection component (4 cards, dashed border, featured overlay)
- [ ] Implement FeaturesGrid component (4 items with icons + headings)
- [ ] Implement GalleryGrid component (image grid with hover)
- [ ] Implement EventsList component (event items with images + dates)
- [ ] Implement TestimonialsCarousel component (4 reviews with avatars)
- [ ] Implement LocationSection component (map placeholder)
- [ ] Implement Footer component (dark bg, columns, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests (Vitest + RTL) for all components
- [ ] Verify 100% coverage, typecheck, lint, build
- [ ] Set public/CNAME, package name @free-react-templates/zenasana
