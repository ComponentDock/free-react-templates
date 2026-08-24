# Tasks & Design Notes: Props (Real Estate Template)

## Source mapping

- **ColorLib slug**: `props`
- **Source URL**: `https://colorlib.com/wp/template/props/`
- **Live Preview**: `https://preview.colorlib.com/theme/props/`
- **Assigned Name**: `props` (New app folder: `apps/props`)

## Component Architecture (Section by Section)

1. `Navbar.tsx`: Fixed top navbar with brand logo "Props" and desktop/mobile navigation links.
2. `Hero.tsx`: Deep ocean blue (`#1f6f8b`) banner with overlay, bold heading "FIND A PERFECT DREAM HOUSE", search input for ZIP/City, search button, and introductory lead text.
3. `Features.tsx`: Overlapping 3-column feature cards container with icons (Quality Properties, Top Rated Agents, Easy and Safe).
4. `PopularProperties.tsx`: Section heading "POPULAR PROPERTIES", view-all link, and interactive property cards grid/carousel.
5. `StatsCounter.tsx`: 4-column metric counter display (Buy Properties, Sell Properties, All Properties, Agents).
6. `AboutSection.tsx`: "WE BRING DREAM HOMES TO REALITY" headline with descriptive text and featured image.
7. `Testimonials.tsx`: Client quotes slider/carousel with navigation buttons and client names.
8. `AgentsSection.tsx`: "OUR AGENTS" section showcasing agent profiles (James Doe, Jean Smith, Alicia Huston) with photos, titles, bios, and social icon links.
9. `AgentCta.tsx`: Recruitment banner ("Be a part of our growing real state agents") with application CTA button.
10. `Footer.tsx`: Comprehensive 4-column footer with contact details, source links, auxiliary links, social media icons, and mandatory Component Dock attribution footer link (`https://www.componentdock.com/`).

## Fidelity & Design Notes

- **Colors**: Deep ocean blue `#1f6f8b` for hero and CTA accents, crisp white `#fff` backgrounds for feature boxes, dark charcoal `#212529` for primary body text, and muted gray `#6c757d` for subtitles.
- **Typography**: Clean sans-serif hierarchy matching modern real estate aesthetics.
- **Images**: Deterministic placeholder images using `https://picsum.photos/seed/props-<section>-<n>/<w>/<h>`.
- **Interactivity**: Tab/carousel states for properties and testimonials, search input handling.
