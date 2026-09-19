# Wanderer — Implementation Notes

## Template Info
- **New name:** Wanderer
- **ColorLib source:** Travelers (slug: `travelers`)
- **Preview:** https://preview.colorlib.com/theme/travelers/
- **Spec:** `openspec/specs/template-wanderer/spec.md`

## Structure Order (section-by-section)

### 1. Navbar
- Fixed top, white background, slight shadow on scroll
- Brand "Wanderer" left-aligned
- Nav links center: Home, About, Destinations, Services, Blog, Contact
- Mobile: hamburger toggle, off-canvas menu
- Fidelity: match link order and text exactly

### 2. Hero Slider
- Full-width carousel, 2 slides minimum
- Each slide: background image (picsum), dark gradient overlay (transparent → 80% black)
- Heading: white, light weight, centered
- CTA button: solid primary (coral), sharp corners, white text
- Arrow navigation left/right
- Fidelity: match gradient direction and darkness, button style

### 3. Travel Experiences (block-13)
- 3 cards in horizontal row (carousel on mobile)
- Each: image with gradient overlay + heading text at bottom
- Headings: "Write Down Your Experience", "Explore Asian Mountains", "Safe Trip With Airasia"
- Fidelity: gradient overlay on images, white text overlay

### 4. Services Grid
- 3 columns on desktop, stacked on mobile
- Each: icon (use lucide-react), heading, short description, link
- Services: "Air Ticketing" (plane icon), "Cruises" (ship icon), "Tour Packages" (map icon)
- Fidelity: icon + heading + description pattern, link styling in brand color

### 5. Testimonials
- Light gray bg (#f8f9fa)
- Centered heading "Testimonials"
- Carousel of 3 testimonial cards
- Each: quote text (lead/italic), author name with em dash
- Fidelity: centered layout, light bg, quote styling

### 6. Our Destinations
- White background
- Heading "Our Destinations" + subtitle "Choose Your Next Destination"
- 6 cards in 3-column grid (2 rows)
- Each: image with gradient overlay + location heading
- Locations: Santorini Greece, Rome Italy, Mount Fuji Japan, Camels Dubai, Elizabeth Tower London, Opera House Australia
- Fidelity: gradient overlay pattern, heading placement

### 7. Dark Services Banner
- Full-width dark section with background image
- Dark gradient overlay
- Heading "Experience Our Outstanding Services" in white, large
- Fidelity: dark overlay, white text, full-width image

### 8. Our Services (detail)
- Light background
- Icon + heading + description cards
- More detailed than the earlier services grid
- Fidelity: icon-forward layout

### 9. Newsletter CTA
- Simple centered section
- Email input + subscribe button
- Button: solid primary coral, sharp corners
- Fidelity: minimal form, centered

### 10. Footer
- Dark background (#25262a or similar)
- 3-column layout: brand description, quick links, contact info
- Copyright line at bottom
- Component Dock link required
- Fidelity: dark bg, 3-column, brand + links + contact

## Design Tokens Summary
- Accent: #ef6c57 (coral)
- Body text: #25262a
- Secondary text: #737373
- Light bg: #f8f9fa
- Font: Poppins (Google Fonts)
- Buttons: sharp corners, py-3 px-5
- Hero: transparent-to-black gradient overlay

## Placeholder Strategy
- Hero images: `https://picsum.photos/seed/wanderer-hero-1/1920/1080`
- Experience cards: `https://picsum.photos/seed/wanderer-exp-N/600/400`
- Destination cards: `https://picsum.photos/seed/wanderer-dest-N/600/400`
- Dark banner: `https://picsum.photos/seed/wanderer-services/1920/800`

## Shared Components to Reuse
- Check `packages/ui` for: Button, ButtonLink, Card, Input
- Use `cn()` for class composition
