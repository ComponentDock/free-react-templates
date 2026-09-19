# Propwell — Design Notes & Implementation Outline

Source: ColorLib Royalestate → https://preview.colorlib.com/theme/royalestate/
New name: propwell

## Section Order (from preview DOM)

1. **Navbar** — dark bg, brand name left, nav links right, transparent on top → dark on scroll
2. **Hero Slider** — owl-carousel with 2 slides, full-bleed images, dark overlay, text overlay (headline + description)
3. **Search Bar** — below hero, white background strip with 4 inputs: Location, Property Type, Price Range, Search button (teal primary)
4. **Properties Grid** — section title "Properties", grid of property cards (3-col desktop). Each card: image, title, location, price badge, property type tag
5. **Features / About** — light gray bg (`bg-light`), section title, grid of feature items (icon + title + description). 3–4 items
6. **Counter / Stats** — background image with dark overlay, row of animated counters (properties, clients, countries, etc.)
7. **Testimonials** — light gray bg, section title, testimonial cards (quote, avatar, name). Carousel or grid
8. **Agents / Team** — white bg, section title, agent cards (photo, name, role, social icons). 3-col grid
9. **Parallax CTA** — background image with dark overlay, centered headline + CTA button (teal)
10. **Footer** — dark bg (`#252a2b`), multi-column: brand/description, quick links, contact, newsletter. Component Dock link at bottom

## Design Token Notes

- **Primary brand**: `#26baee` — used for nav active states, links, accents
- **Button/CTA teal**: `#78d5ef` — solid teal buttons with white text
- **Orange accent**: `#f05d23` — used sparingly for emphasis, price badges
- **Dark palette**: `#252a2b` (footer), `#2e3536` (footer alt)
- **Font stack**: "Work Sans" → "Open Sans" → system
- **Hero**: full-bleed image, dark semi-transparent overlay, large white text
- **Cards**: white bg, subtle border/shadow, image top, info bottom
- **Alternating sections**: white ↔ `#f8f9fa` light gray

## Fidelity Notes

- Match the owl-carousel hero with auto-play and dot navigation
- Search bar is a key visual element — must be prominent below the hero
- Property cards need the colored price badge and type tag overlay on image
- Counter section uses a background image with parallax and animated numbers
- Testimonials use an owl-carousel style with navigation arrows
- Agents section shows social media icons per agent
- Parallax CTA is a simple centered text + button over a bg image
- Footer is multi-column with dark background matching `#252a2b`
- Replace any ColorLib attribution with ComponentDock link

## Component Outline

```
apps/propwell/
  src/
    App.tsx                    — compose all sections
    components/
      Navbar.tsx               — dark navbar with scroll behavior
      HeroSlider.tsx           — carousel with slides + overlay
      SearchBar.tsx            — search form with inputs + button
      PropertiesGrid.tsx       — grid of PropertyCard components
      PropertyCard.tsx         — single property card
      FeaturesSection.tsx      — feature items with icons
      StatsSection.tsx         — animated counters over bg image
      TestimonialsSection.tsx  — testimonial cards/carousel
      AgentsSection.tsx        — team member cards
      ParallaxCTA.tsx          — parallax section with CTA
      Footer.tsx               — multi-column dark footer
    index.css                  — Tailwind + theme tokens (@theme)
    main.tsx                   — entry point
  index.html
  package.json
  public/CNAME                 — propwell.free.componentdock.com
  vite.config.ts
  tsconfig.json
```
