# EstateLink — Design Notes & Task Outline

Source: ColorLib Royalestate (https://colorlib.com/wp/template/royalestate/)

## Section implementation order

1. **Hero slider** — full-width background image, dark overlay, address + price + pill CTA
2. **Search bar** — white bar with keyword, city, type, beds, bath, price, area inputs
3. **Feature cards** — 4 cards on light bg, each with icon + title + description
4. **Recent properties** — 4 property cards (image, price, address, stats)
5. **Most recommended** — same layout as Recent, light bg variant
6. **Counter / fun facts** — bg image, 4 animated stat blocks, white text
7. **Testimonials** — carousel with avatar + quote on light bg
8. **Blog entries** — 4 cards (image, date, title, excerpt)
9. **Newsletter parallax** — bg image, email input + subscribe CTA
10. **Footer** — dark bg, 4 columns, social icons, Component Dock link

## Fidelity notes

### Hero
- Full-viewport-width background image (use picsum.photos/seed/estatelink-hero/1920/1080)
- Dark overlay at 20% opacity over the image
- Property details in bottom-right card: address, suburb, price, "View Details" pill button
- Button: border-radius 30px, primary cyan (#78d5ef) bg, white text on hover

### Search bar
- White bar immediately below hero
- Left side: magnifying glass icon + "Search Property" heading
- Two rows of inputs: keyword, city, type dropdowns + beds/bath/price/area
- Dark "Search" button on the right

### Feature cards
- Section bg: #f8f9fa (light gray)
- 4 columns, each with a circular icon, heading, and descriptive paragraph
- Icons: house, detective (agents), selection (buy/rent), purse (money)

### Property cards
- 4-card grid, each card: image with overlay, price badge, address, beds/bath count
- Image overlay with semi-transparent dark gradient
- Price shown in primary cyan color

### Counter section
- Full-width background image with dark overlay
- 4 stat counters: Happy Customers, Properties, Agents, Awards
- Numbers animate on scroll (count-up effect)
- White text, centered layout

### Testimonials
- Light gray background
- Owl-carousel with testimonial cards
- Each card: avatar circle, name, quote text

### Blog entries
- White background
- 4 blog cards in a row
- Each: image header, date, title, excerpt

### Newsletter
- Parallax background image
- White text heading + description
- Email input + subscribe button in a form

### Footer
- Dark background (#212529)
- 4 columns: Company (logo + text), Buy, Sell, Have a Question
- Social media icon row
- Must include Component Dock link

## Placeholder images

- Hero: `https://picsum.photos/seed/estatelink-hero/1920/1080`
- Property cards: `https://picsum.photos/seed/estatelink-prop-{1-4}/400/300`
- Blog cards: `https://picsum.photos/seed/estatelink-blog-{1-4}/400/250`
- Counter bg: `https://picsum.photos/seed/estatelink-counter/1920/600`
- Newsletter bg: `https://picsum.photos/seed/estatelink-newsletter/1920/500`
- Testimonial avatars: `https://picsum.photos/seed/estatelink-avatar-{1-3}/100/100`

## Tasks

- [ ] Create app scaffold (copy from simplest existing app, rename package)
- [ ] Implement Hero section with slider and overlay
- [ ] Implement Search bar with input fields
- [ ] Implement Feature cards section
- [ ] Implement Recent properties grid
- [ ] Implement Most recommended section
- [ ] Implement Counter / fun facts with animation
- [ ] Implement Testimonials carousel
- [ ] Implement Blog entries section
- [ ] Implement Newsletter parallax section
- [ ] Implement Footer with all columns
- [ ] Wire up App.tsx composing all sections
- [ ] Add Tailwind theme tokens (primary #78d5ef, Work Sans font)
- [ ] Write tests for each component (100% coverage)
- [ ] Run verification gate
- [ ] Update README and TEMPLATES.md
