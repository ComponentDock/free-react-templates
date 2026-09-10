# Fleetly — Implementation Notes

Source: ColorLib Car Rental (slug: `carrental`)
Preview: https://preview.colorlib.com/theme/carrental/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carrental-free-template.jpg

## Structure order (match original 1:1)

1. Navbar — fixed top, logo left, 7 nav links + Pages dropdown
2. Hero/Banner — full-screen bg image + overlay, left text + right booking form
3. Features — 6 cards in 3×2 grid (icon + title + description)
4. About — full-width split (left image, right text + CTA)
5. Car Models — heading + owl-carousel of car cards (image + specs + CTA)
6. Facts/Stats — yellow bar (`#fab700`), 5 counters in a row
7. Reviews — heading + 6 review cards in 3×2 grid (name + text + stars)
8. Call-to-Action — bg image + dark overlay, centered white heading + outlined button
9. Blog — heading + 4 blog cards in 4-col grid (image, date, title, excerpt, likes/comments)
10. Footer — dark navy bg, 4 link columns + newsletter + copyright

## Section-by-section fidelity notes

### Navbar

- White bg, fixed position
- Logo image left (use a car/rental-themed placeholder or text logo)
- Nav links: Home, About, Cars, Service, Team, Blog, Contact
- Pages dropdown with sub-items (Blog Single, Elements) — use a simple dropdown
- Mobile hamburger menu

### Hero/Banner

- Full-screen height, bg image with `rgba(0,0,0,0.8)` overlay
- Left column (col-lg-7): subtitle, heading (uppercase), paragraph, gold CTA
- Right column (col-lg-5): "Book Your Car Today!" heading + booking form
  - Form fields: car select (BMW, Ferrari, Toyota), pickup location, pickup date, dropoff location, dropoff date, name, email, phone
  - "Confirm Car Booking" button (btn-default, full-width, uppercase)
- Use native HTML select elements (simpler than custom dropdowns)
- Date inputs with calendar icons

### Features

- White bg, centered heading "What Services we offer to our clients"
- 6 cards: icon (lucide-react equivalent), title, description
- Hover effect: background color change + icon color change
- 3×2 grid layout

### About

- Full-width, no section-gap padding (touches hero visually)
- Split 50/50: left = image, right = text block
- Heading: "Globally Connected by Large Network"
- Subtitle in a span: "We are here to listen from you deliver excellence"
- Paragraph + "get details" gold CTA button

### Car Models

- White bg, centered heading
- Carousel (can use a simple slide mechanism or static cards)
- Each card: 50/50 split — left image, right details
- Car details: name, price ($149/day), description, specs list
- "Book This Car Now" gold CTA
- 3 sample cars with different names/specs

### Facts/Stats

- Full-width yellow bg (`#fab700`)
- 5 stat counters in equal columns
- Numbers rendered large, labels below
- White text on yellow bg
- Counter animation on scroll (optional, can be static)

### Reviews

- Light bg (`#f9f9ff`)
- Centered heading "Some Features that Made us Unique"
- 6 review cards in 3×2 grid
- Each: reviewer name, review text, 5-star rating (3 filled, 2 empty)
- Star icons from lucide-react (Star, StarHalf)

### Call-to-Action

- Bg image with dark navy overlay `rgba(4,9,30,0.75)`
- Centered: white heading "Experience Great Support"
- Paragraph text
- "Reach Our Support Team" outlined button (callaction-btn)

### Blog

- White bg, centered heading "Latest From Our Blog"
- 4 blog cards in 4-col grid
- Each: thumbnail image, date label, title link, excerpt, bottom row with heart icon + likes, bubble icon + comments

### Footer

- Dark navy bg (`#04091e`)
- 5 columns: Quick Links, Features, Resources (link lists), Follow Us (social icons), Newsletter
- Newsletter: email input + arrow submit button
- Social icons: Facebook, Twitter, Dribbble, Behance
- Copyright text at bottom
- Replace Colorlib attribution with Component Dock link

## Design token mapping (Tailwind)

```css
/* index.css @theme */
--color-brand: #fab700; /* primary gold */
--color-brand-dark: #e0a500; /* hover state */
--color-footer: #04091e; /* dark navy */
--color-text: #222; /* headings */
--color-text-light: #777; /* body text */
--color-bg-alt: #f9f9ff; /* light alternate bg */
--font-family-base: 'Poppins', sans-serif;
```
