# SlideCraft — Tasks & Design Notes

## Source Mapping

- **Original ColorLib Template:** Carousel V02 (`https://colorlib.com/wp/template/carousel-02/`)
- **Assigned App Name:** `slidecraft`
- **Deploy Target:** `slidecraft.free.componentdock.com`

## Section Structure & Order

1. **Navbar (`Navbar.tsx`):** Brand logo, navigation links (Home, Portfolio, Services, About, Contact), CTA button.
2. **Hero Carousel (`HeroCarousel.tsx`):** Large immersive carousel showcasing creative projects with next/previous controls, pagination indicators, item title, category badge, and action button.
3. **Featured Portfolio Grid (`PortfolioGrid.tsx`):** Grid of filtered portfolio cards with hover zoom and quick-view triggers.
4. **Stats / Highlights (`StatsSection.tsx`):** Key metrics and achievements (Projects Completed, Satisfied Clients, Awards Won).
5. **Testimonials / Quotes (`Testimonials.tsx`):** Client feedback carousel or grid.
6. **Footer (`Footer.tsx`):** Brand summary, quick links, newsletter subscription, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Design Notes & Fidelity

- Uses warm, high-contrast modern typography with vibrant orange accent buttons against clean slate surfaces.
- Fully responsive layout with mobile drawer menu support.
- Utilizes Picsum deterministic image seeding (`https://picsum.photos/seed/slidecraft-1/1200/800`) for placeholder visuals.
