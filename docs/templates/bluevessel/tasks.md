# BlueVessel — Implementation Tasks & Design Notes

Source: ColorLib Blueline (https://colorlib.com/wp/template/blueline/)
Preview: https://preview.colorlib.com/theme/blueline/
New name: bluevessel

## Section Order (fidelity to original)

1. **Navbar** — Fixed/floating, brand logo left, hamburger right, links: Home, About, Services, Portfolio, Contact
2. **Hero / Banner** — Fullscreen, blue gradient background (poly/angular geometric overlay), "INTRODUCING" super-heading, "BLUEVESSEL" massive title (white, uppercase, wide tracking, text-shadow), "Learn More" CTA button
3. **Features** — 3 numbered cards (01 Responsive View, 02 Multiple Layouts, 03 Flexible Design), gradient-text heading, each card: number + title + description
4. **Video** — "Great Modern Design" heading with gradient text, subtitle "Build with usability in mind", circular play button overlay, dark background area
5. **Services** — Two-column: left sidebar with "Services We Offered" heading + description; right side: 2x2 grid of service cards (icon + title + description), gradient icons
6. **Latest Works** — Centered heading "Some Of our Latest Works", carousel/grid of portfolio images with prev/next navigation arrows
7. **Subscription** — White background, "Subscribe for our Newsletter" heading, "We won't send any kind of spam" subtext, rounded email input (25px radius), "Get Started" gradient button
8. **Contact** — Dark background (#1e1e1e), white heading with letter-spacing, subtext, "Send Message" CTA, white-background form with name/email/message fields, validation
9. **Footer** — Dark (#1e1e1e) background, circular social media icon links with gradient hover, copyright text, Component Dock link (mandatory)

## Design Token Notes

- Primary gradient: #3c50ca → #77d5f7 (used on buttons, headings, icons, hover states)
- Secondary gradient: #3c50ca → #77d5f7 horizontal (service sidebar, features)
- Font: Poppins (Google Fonts), weights 200/300/600
- Button radius: 3px default, 20px circle variant, 25px input radius
- Dark sections: #1e1e1e (footer, contact, video)
- Light sections: #f9f9ff body, #fff cards/forms
- Heading style: light weight (200-300) with bold span (600) for emphasis

## Fidelity Notes

- Hero must be fullscreen with background image + geometric overlay. Use a gradient overlay with polygon/poly shapes via CSS clip-path or SVG.
- Banner title uses extreme letter-spacing (25px) and text-shadow for depth.
- Feature cards are simple numbered list items, not complex cards — keep them lightweight.
- Video section is mostly visual — a background area with overlay text and play button; no actual video needed (use placeholder or iframe).
- Services left sidebar is text-heavy with a description paragraph; right side has 4 identical card types with icons.
- Portfolio uses a carousel/slider pattern with prev/next arrows.
- Subscription input is pill-shaped (25px radius) with gradient button overlaid on the right.
- Contact section has dark bg with white text and a white form card on top.
- Footer social icons are small circular buttons with gradient hover effect.

## Implementation Order

1. Set up app scaffold (copy from simplest existing app, rename package)
2. Create index.css with Tailwind @theme tokens (brand gradient colors, Poppins font)
3. Build Navbar component
4. Build Hero component (fullscreen, gradient bg, title, CTA)
5. Build Features component (3 numbered cards)
6. Build Video component (heading + play button)
7. Build Services component (sidebar + 2x2 grid)
8. Build LatestWorks component (carousel/grid)
9. Build Subscription component (input + button)
10. Build Contact component (form + dark bg)
11. Build Footer component (social icons, copyright, ComponentDock link)
12. Compose all sections in App.tsx
13. Add responsive breakpoints (mobile hamburger, stacked layouts)
14. Write tests for each component (100% coverage)
15. Run verify:app and fix any issues
