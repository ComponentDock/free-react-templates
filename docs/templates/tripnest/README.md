# TripNest -- Implementation Notes

Source: ColorLib Travello (https://preview.colorlib.com/theme/travello/)
New name: tripnest (apps/tripnest)

## Component structure (App.tsx composition order)

1. Navbar.tsx -- Fixed header with logo, nav links, phone, social icons, hamburger
2. HeroSlider.tsx -- Swiper carousel with background images + large headings
3. SearchBar.tsx -- Overlapping search form (City, Departure, Arrival, Budget + button)
4. IntroFeatures.tsx -- 3-column icon cards (Top Destinations, Best Prices, Amazing Services)
5. DestinationsGrid.tsx -- 3x2 grid of destination cards with images, badges, prices
6. WhyChooseUs.tsx -- Parallax section with 3 feature cards
7. FeaturedTours.tsx -- Swiper carousel of tour cards with details
8. Testimonials.tsx -- Background image section with testimonial slider
9. InstagramFeed.tsx -- 6-column image grid with hover overlay
10. NewsSection.tsx -- 3 blog posts + sidebar promo card
11. Footer.tsx -- Newsletter form + 3 contact columns + copyright

## Design fidelity notes

- Navbar: transparent bg, becomes semi-transparent dark on scroll (rgba(24,24,24,0.6))
- Hero height: 834px, headings at Oswald 100px white, centered
- Search bar: white bg card overlapping hero bottom, inputs #f8fafc bg, pill button
- Destination cards: 16px radius, hover scale 1.03 on image, shadow deepens
- Why cards: white bg, 16px radius, icon circle 73px diameter, parallax bg behind
- Tour cards: image with badge overlay, duration pill, star rating in amber
- Testimonials: full bg image with white text overlay, author name below quote
- Instagram: 6 equal columns, dark overlay with centered white Instagram icon
- News: left column 3 posts (image + date badge + title + category + text), right sidebar promo
- Footer: bg image, newsletter form with transparent inputs, 3 contact icon columns
- All buttons: pill radius (24px), dark #1a1a2e bg, hover lifts 2px + deeper shadow
- Transitions: 200ms cubic-bezier(0.4, 0, 0.2, 1) throughout

## Implementation order

1. Scaffold app from simplest existing template
2. Set up Tailwind theme tokens (colors, fonts)
3. Build Navbar + HeroSlider + SearchBar
4. Build IntroFeatures + DestinationsGrid
5. Build WhyChooseUs (parallax)
6. Build FeaturedTours carousel
7. Build Testimonials slider
8. Build InstagramFeed + NewsSection
9. Build Footer with newsletter + contacts
10. Add mobile hamburger + responsive breakpoints
11. Write tests for all components (100% coverage)
12. Run verify-app.sh
