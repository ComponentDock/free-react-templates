# Roadcraft — Tasks & Design Notes

## Template Info

- **New name:** roadcraft
- **Source:** ColorLib Autoroad
- **Preview:** https://preview.colorlib.com/theme/autoroad/
- **Category:** Car Rental / Vehicle Booking
- **Layout:** Standard top navbar + full-width hero with booking form

## Implementation Tasks

### 1. Project Setup

- [ ] Copy simplest existing app as starter
- [ ] Rename package to `@free-react-templates/roadcraft`
- [ ] Set up `public/CNAME` with `roadcraft.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Poppins font link to `index.html` (Google Fonts)
- [ ] Configure Tailwind theme with brand tokens (#fc983c orange, #3c312e footer dark, #007bff blue, #000 black)

### 2. Navbar Component

- [ ] Dark bg navbar, sticky positioning
- [ ] Brand text "Roadcraft" (white, Poppins bold)
- [ ] Nav links: Home, About, Pricing, Our Car, Blog, Contact
- [ ] Mobile hamburger toggle (collapse)
- [ ] Active link state

### 3. Hero Section

- [ ] Full-width background image (picsum.photos seed: roadcraft-hero)
- [ ] Dark overlay (rgba(0,0,0,0.4))
- [ ] Left column (col-6): heading "Now It's easy for you rent a car" with span accents (white text)
- [ ] Description paragraph below heading
- [ ] Video play icon link ("Easy steps for renting a car")
- [ ] Right column (col-4): Booking form "Make your trip"
  - Pick-up location input (text, placeholder "City, Airport, Station, etc")
  - Drop-off location input (text, placeholder "City, Airport, Station, etc")
  - Pick-up date input (date)
  - Drop-off date input (date)
  - Time input (time)
  - "Search Vehicle" blue CTA button (#007bff)
- [ ] Responsive: stacked on mobile

### 4. Search Wrap Section

- [ ] Secondary search area below hero (no padding top/bottom)
- [ ] Extended search form with car type dropdowns
- [ ] "Search" blue CTA button
- [ ] White/light background

### 5. Services Section ("Our Services")

- [ ] Section heading with "Services" subheading
- [ ] 4-column card grid
- [ ] Each card: icon (lucide-react) + heading + description
- [ ] Cards: 24/7 Car Support, Lots of Location, Reservation, Rental Cars
- [ ] Left-aligned icon + heading layout (icon left, heading right)
- [ ] White/light bg

### 6. Car Grid ("Choose Your Car")

- [ ] Section heading with "Car" subheading
- [ ] 4-column grid, 2 rows = 8 car cards
- [ ] Each card: background image (picsum.photos), price overlay ("$25 From /Day"), car name heading, brand subheading
- [ ] "Book now" + "Details" black outline buttons (side by side)
- [ ] Button hover: filled black bg, white text
- [ ] White/light bg

### 7. How It Works Section

- [ ] Full-width background image (picsum.photos seed: roadcraft-how) + dark overlay
- [ ] 4-column grid of steps
- [ ] Each step: centered icon (lucide-react) + heading + description
- [ ] Steps: Pick Destination, Select Term, Choose A Car, Enjoy The Ride
- [ ] White text on dark overlay

### 8. Testimonials Section ("Happy Clients")

- [ ] Carousel/slider of testimonial cards
- [ ] Each card: circular user photo (picsum.photos), quote text, name, position
- [ ] 5 testimonial items
- [ ] Centered layout with carousel navigation arrows
- [ ] White/light bg

### 9. About CTA Section ("Choose A Perfect Car")

- [ ] Heading + 2 descriptive paragraphs
- [ ] "Search Vehicle" blue CTA button
- [ ] White/light bg

### 10. Blog Section ("Recent Blog")

- [ ] Section heading with "Blog" subheading
- [ ] 3-column card grid
- [ ] Each card: background image (picsum.photos), date + author meta, title heading, "Read more" link
- [ ] Blog titles: "Why Lead Generation is Key for Business Growth" (paraphrased)
- [ ] White/light bg

### 11. Footer

- [ ] Dark warm brown bg (#3c312e)
- [ ] 4-column layout:
  - About: "About Roadcraft" heading, description, social icons (Twitter, Facebook, Instagram via lucide-react)
  - Information: links list (About, Services, Terms, Best Price Guarantee, Privacy)
  - Customer Support: links list (FAQ, Payment Option, Booking Tips, How it works, Contact Us)
  - Contact: address, phone, email
- [ ] Copyright line
- [ ] "Made with Component Dock" link (componentdock.com)

### 12. Design Tokens & Theme

- [ ] brand-orange: #fc983c (primary accent)
- [ ] brand-gold: #f7b71d (secondary)
- [ ] footer-dark: #3c312e (footer bg)
- [ ] btn-black: #000 (car card buttons)
- [ ] btn-primary: #007bff (search CTAs)
- [ ] Font: Poppins (Google Fonts)
- [ ] Overlay: rgba(0,0,0,0.4)

## Fidelity Notes

- **Section order matches original:** Navbar → Hero (with booking form) → Search Wrap → Services → Car Grid → How It Works → Testimonials → About CTA → Blog → Footer
- **Hero booking form is the key differentiator** — this template's hero has an inline booking form (pick-up/drop-off locations, dates, time), not just text + CTA
- **Car cards have price overlay** — a floating price badge on the car image ("$25 From /Day")
- **Two "search" areas** — hero booking form + secondary search wrap below
- **"How it works" section** uses a background image with dark overlay, same as hero treatment
- **Footer uses warm dark brown** (#3c312e) not pure black — distinctive warm tone
- **Black outline buttons** on car cards — not the blue primary buttons used elsewhere
- **Original uses Owl Carousel** for testimonials — implement with a lightweight React carousel or CSS-only approach
- **Original uses Flaticon icons** — replace with lucide-react equivalents
- **Original uses Bootstrap 4 grid** — replace with Tailwind CSS grid/flex utilities
