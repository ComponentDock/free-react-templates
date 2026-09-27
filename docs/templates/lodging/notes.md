# Lodging — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Homespace" — https://colorlib.com/wp/template/homespace/
- **Preview:** https://preview.colorlib.com/theme/homespace/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/homespace-free-template.jpg
- **Preview fetched:** Yes (HTML ~870 lines, CSS style.css analyzed for tokens)
- **CSS tokens extracted:** Yes — brand amber, green price, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Top Bar** — white bg, border-bottom, phone+email left, social icons right
2. **Main Navigation** — white bg, "HomeSpace." bold logo with danger dot, 5 nav links with Properties dropdown (nested submenu)
3. **Hero Slider** — full-viewport bg image carousel (2 slides), white info box bottom-right (address, location, green price, "More Details")
4. **Search Form** — 6 selects (Lot Area, Property Status, Location, Lot Area, Bedrooms, Bathrooms) + price range slider + Search button
5. **Features** — 3-col: "Wide Range of Properties", "Rent or Sale", "Property Location" with flaticon icons
6. **New Properties** — light bg, 6 property cards (3-col × 2 rows), hover-reveal overlay, pagination
7. **Our Services** — 3×2 bordered service cards with amber icons, "Learn More" links
8. **Our Blog** — light bg, 3 blog cards (image + white text area with date, title, excerpt)
9. **Our Agents** — owl carousel of 3 agent profiles (photo, name, role, bio, social)
10. **CTA Banner** — brand amber bg (#f89d13), heading + outline-white "See Properties" button
11. **Footer** — dark bg (#333), 3-col (About, Navigations, Follow Us), copyright with Component Dock

## Fidelity Notes

### Top Bar
- White bg with bottom border
- Left: phone icon + number, email icon + address (inline)
- Right: Facebook, Twitter, LinkedIn social icons
- Hidden text on mobile (icons only)
- Use lucide-react icons for phone, mail, social

### Main Navigation
- "HomeSpace." logo: bold, uppercase, with a red dot (text-danger) after it
- Nav links right-aligned
- Properties dropdown: Buy, Rent, Lease, nested Menu (Menu One/Two/Three)
- Dropdown: white bg, shadow, 4px top border in brand accent (#f89d13)
- Mobile: off-canvas slide-in menu with close button

### Hero Slider
- Replace OwlCarousel with React carousel (embla or simple CSS)
- 2 slides with different bg images
- Each slide has a white box at bottom-right (50% width, 40px padding)
- Box: h2 address (light weight 300), location with icon, price in green (#7cbd1e), "More Details" link
- Min-height: calc(100vh - ~134px)
- Parallax effect: optional, use CSS background-attachment: fixed or skip

### Search Form
- 8 fields in a flex/grid row
- All selects: square (no border-radius), custom arrow icon
- Price range: use a React slider component instead of jQuery UI
- Search button: primary, full-width, square, white text

### Features
- 3 equal columns
- Each: large icon (60px, amber #f89d13) + heading + description
- Use lucide-react icons instead of flaticon

### New Properties
- Light bg (#f9f9f9) section
- 6 property cards in 3-col grid
- Each card: image with hover-reveal overlay (gradient transparent → dark)
  - On hover: text box slides up showing price (green badge), title, location
  - Below: stats bar (Area, Beds, Baths, Garages)
- Pagination: circular page numbers at bottom
- Replace flaticon room icon with lucide-react

### Our Services
- White bg, centered title "Our Services"
- 3×2 grid of bordered cards (rounded corners)
- Each card: icon (60px, amber) + heading + "Learn More" (uppercase, letter-spacing)
- Original uses 3 unique services duplicated to 6 — use 3 unique services in 3-col layout or keep 6

### Our Blog
- Light bg (#f9f9f9) section
- 3 cards with AOS fade-up animation
- Each: image on top, white bg text area below
- Text area: date (uppercase small secondary), title (h5 black), excerpt

### Our Agents
- Replace OwlCarousel with a simple React carousel or flex row
- 3 agents: circular photo (50% width), name, "Real Estate Agent" role, bio, 3 social icons
- Carousel with repeated items for infinite scroll effect

### CTA Banner
- Brand amber bg (#f89d13)
- 2-col: text left ("Wide Range of Properties Just For You" + subtext), button right
- Button: outline-white, full-width, large padding (py-3, btn-lg)

### Footer
- Dark bg (#333), generous padding
- 3-col: About HomeSpace (text), Navigations (2-col link lists), Follow Us (social icons)
- Footer headings: uppercase, letter-spacing, white, with a 40px white bottom border line
- Copyright: "Made with ❤ by Component Dock" + link to componentdock.com

## Component Decomposition

```
src/
  App.tsx                      — Compose all sections
  components/
    TopBar.tsx                 — Phone, email, social icons
    Navbar.tsx                 — Logo + nav links + dropdowns + hamburger
    HeroSlider.tsx             — 2-slide bg image carousel with info boxes
    SearchForm.tsx             — 6 selects + slider + search button
    Features.tsx               — 3 feature cards with icons
    PropertiesSection.tsx      — 6 property cards grid + pagination
    PropertyCard.tsx           — Single property card with hover overlay
    ServicesSection.tsx        — 6 service cards in 3×2 grid
    ServiceCard.tsx            — Single service card
    BlogSection.tsx            — 3 blog post cards
    BlogCard.tsx               — Single blog card
    AgentsSection.tsx          — Agent carousel
    AgentCard.tsx              — Single agent profile
    CtaBanner.tsx              — Brand-colored CTA with button
    Footer.tsx                 — 3-col footer + copyright
  index.css                    — Tailwind entry + @theme tokens
```

## Key Decisions

1. **Hero carousel**: Use embla-carousel (lightweight) or simple CSS-based slider instead of OwlCarousel
2. **Agent carousel**: Same — embla or CSS-based
3. **Price range slider**: Use @rc-component/slider or custom range input instead of jQuery UI
4. **Icons**: Use lucide-react for all icons (phone, mail, social, flaticon replacements)
5. **Property hover overlay**: CSS transition on hover, slide text box up from bottom
6. **Logo**: Text "Lodging" with a styled dot accent (replace "HomeSpace." brand)
7. **Placeholder images**: picsum.photos/seed/lodging-{1..20}/{width}/{height}
8. **Off-canvas mobile menu**: Simple slide-in panel with React state toggle
