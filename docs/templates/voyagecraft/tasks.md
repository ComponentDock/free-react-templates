# VoyageCraft — Implementation Notes

## Template Overview
- **New name**: VoyageCraft
- **Source**: ColorLib "Vacation" (slug: `vacation`)
- **Preview**: https://preview.colorlib.com/theme/vacation/
- **Category**: Travel agency / tourism

## Section Order (from live preview DOM)

1. **Navbar** — dark bg, brand "VoyageCraft" + subtitle "Travel Agency", 5 nav links + Book Now CTA
2. **Hero** — full-width bg image, dark overlay, centered text + video play button
3. **Search Form** — white card overlay, 4 inputs (destination, dates, price dropdown) + search button
4. **Services** — light gray bg, heading + description (2-col) + 2×2 icon cards
5. **Counter / About** — split layout (image left, text right), 3 stat counters
6. **Best Place Destinations** — 4-column image cards with text overlay
7. **Tour Destinations** — 6 cards (2 rows × 3), image + price + duration + amenities
8. **Testimonials** — background image + gradient, carousel with avatar/name/position
9. **Recent Posts** — 3 blog cards with date badge + title + excerpt
10. **Footer** — 4-column (brand/social, Info links, Experience links, Contact), bg image, Component Dock link

## Design Token Mapping (for Tailwind @theme)

```css
@theme {
  --color-brand: #f9ab30;        /* gold/orange accent */
  --color-primary: #007bff;      /* Bootstrap blue CTA */
  --color-primary-hover: #0069d9;
  --color-dark: #33313b;         /* dark sections */
  --color-light-bg: #f7f7f7;     /* services section */
  --color-navy: #343a40;         /* navbar */
  --font-family: 'Poppins', sans-serif;
}
```

## Fidelity Notes

### Navbar
- Dark solid background (#343a40), translucent on scroll
- Brand: bold "VoyageCraft" + lighter "Travel Agency" subtitle
- Links: Home (active), About, Destination, Blog, Contact
- CTA: "Book Now" with accent color (#f9ab30)

### Hero
- Full-viewport background image (picsum placeholder)
- Dark semi-transparent overlay (.overlay)
- Circular play button icon (video modal trigger — simplify to static)
- Centered text: caps line + h1 heading, white on dark

### Search Form
- White card (.search-wrap-1) overlapping hero bottom
- 5-column row: Destination (search icon), Check-in (calendar), Check-out (calendar), Price (dropdown select), Search button
- Each input has an icon prefix

### Services
- Light gray bg (#f7f7f7)
- Left column: h2 heading + paragraphs + "Search Destination" CTA
- Right column: 2×2 grid of icon cards (paragliding, route, tour-guide, map icons)

### Counter/About
- Two-column: left = bg image, right = heading + paragraph + 3 counters
- Counters: 300 Successful Tours, 24000 Happy Tourist, 200 Place Explored
- Counter numbers animate on scroll

### Best Place Destinations
- 4-column row of image cards
- Each card: full bg image, dark overlay, destination name (h3) + tour count
- Singapore (8), Canada (2), Thailand (5), Australia (5)

### Tour Destinations
- 6 cards in 2 rows × 3 columns
- Each card: bg image, price badge ($300/person), duration badge (7-10 Days), destination name, location, amenity icons (shower, bed, mountain/beach)

### Testimonials
- Background image with gradient overlay (#2f88fc → #ff5959 at 45deg)
- Carousel of cards: quote text + circular avatar + name + position
- Owl Carousel in original → use CSS-based carousel or simple state

### Recent Posts
- 3 blog cards: bg image, date badge (day/month/year stacked), title, excerpt
- Date badge is positioned absolutely over the image

### Footer
- Background image with dark overlay
- 4-column: Brand + social icons | Information links | Experience links | Contact info
- Copyright line with Component Dock attribution
- Social: Twitter, Facebook, Instagram icons

## Implementation Tasks

- [ ] Scaffold `apps/voyagecraft` from simplest existing app
- [ ] Create `public/CNAME` with `voyagecraft.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind @theme tokens
- [ ] Implement Navbar component
- [ ] Implement Hero component
- [ ] Implement SearchForm component
- [ ] Implement Services component
- [ ] Implement CounterAbout component
- [ ] Implement BestDestinations component
- [ ] Implement TourDestinations component
- [ ] Implement Testimonials component
- [ ] Implement RecentPosts component
- [ ] Implement Footer component
- [ ] Compose in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
