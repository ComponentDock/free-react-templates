# Stylux — Implementation Todo & Design Notes

> Source: ColorLib "Melan" — https://colorlib.com/wp/template/melan/
> Preview: https://preview.colorlib.com/theme/melan/

## Section Order (top to bottom)

1. **Header** — sticky, logo left, nav center, CTA right
2. **Hero** — full-width background image, centered headline, right-side social links, decorative grid
3. **Services** — 3-column grid, SVG icons, centered text
4. **Portfolio Banner** — dark overlay on background image, white text
5. **Portfolio Gallery** — 5 items, 2-row asymmetric grid, hover overlays, "More Folio" button
6. **About Me** — two-column, large decorative "About" bg text, portrait with color grid decoration
7. **Counters** — 3 bordered cards with purple numbers
8. **Testimonials** — carousel over dark image with gradient, quote icon, author info
9. **Discuss Projects CTA** — dark navy, centered heading + button
10. **Footer** — two-part: nav + social top, copyright bottom

## Structure Notes

### Header
- Transparent initially, transitions to dark (#000) with shadow on scroll
- Nav items: Home, About, Services, Portfolio, Contact (with dropdowns for Blog, Pages)
- "Contact Me" border button on right (square corners)
- Mobile: hamburger menu with dropdown

### Hero
- Full-width background image, 900px height on desktop
- Centered text: "Hello This is Stylux" / "Creative Designer"
- Social links vertically stacked on right side (circular, 40×40px)
- Decorative grid pattern on right side (desktop only)
- Gradient overlay on social link hover: #615CFD → #d465ef

### Services
- Section title: "Service Provided" + subtitle
- 3 cards in a row: Graphic Design, Web Design, Mobile App
- Each card: SVG icon + h3 title + description paragraph
- 120px top/bottom padding

### Portfolio Banner
- Full-width, background image with #001D38 overlay
- White text: "Portfolios" (span) + "Some of my awesome stuffs here" (h3)
- 180px top padding, 340px bottom padding (overlaps with gallery)

### Portfolio Gallery
- 2 rows: Row 1 = 5/7 col split, Row 2 = 4/4/4 col split
- Each item: image thumbnail + hover overlay with "Product Design" title
- Hover: purple overlay slides up
- "More Folio" line button (border #615CFD, hover fills)
- Negative margin (-295px) to overlap with banner section

### About Me
- Large decorative "About" text (#F5F6F7, 235px, positioned absolute)
- Left column: "About me" heading + paragraph + "Download CV" button
- Right column: portrait image with color grid decoration overlay
- Button: solid purple, square corners, transparent on hover

### Counters
- 3 cards in a row, each bordered (#E8E8E8)
- Numbers: #615CFD, 50px, bold
- Labels: #001D38, 15px
- Hover: border changes to #615CFD
- Data: 520+ Total Projects, 244 On Going Projects, 95% Job Success

### Testimonials
- Background image with right-to-left gradient overlay (transparent → #001D38)
- Carousel with 3 testimonial cards
- Each card: quote SVG icon, testimonial text (white, 20px), author thumbnail (42px circle), name, role
- Owl Carousel navigation arrows

### Discuss Projects
- Dark navy (#001D38) background
- Centered: "Let's discuss for a project" (white, 50px, bold)
- Description text (white, 15px)
- "Start Talking" button (solid purple, square corners)

### Footer
- Top: dark navy (#001D38), nav links left, social icons right
- Border: #334A60 separator
- Bottom: copyright text centered, links to Component Dock

## Fidelity Checklist

- [ ] Header: sticky behavior, nav items, CTA button, mobile menu
- [ ] Hero: background image, headline, subtitle, social links, decorative grid
- [ ] Services: 3-column, correct titles, SVG icons
- [ ] Portfolio Banner: dark overlay, white text
- [ ] Portfolio Gallery: 5 items, asymmetric grid, hover overlays, "More Folio"
- [ ] About Me: decorative bg text, portrait, color grid, CV button
- [ ] Counters: 3 cards, correct data, purple numbers
- [ ] Testimonials: carousel, dark bg, gradient overlay, author info
- [ ] Discuss CTA: dark bg, heading, button
- [ ] Footer: nav links, social icons, copyright with Component Dock
- [ ] Design tokens: #615CFD, Muli font, square buttons, circular social icons
- [ ] Mobile: all sections stack correctly
