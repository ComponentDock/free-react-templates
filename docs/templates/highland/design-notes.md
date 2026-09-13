# Highland — Implementation Notes

Source: ColorLib Montana → https://preview.colorlib.com/theme/montana/
New name: highland

## Implementation order

1. Scaffold app (copy simplest existing app, rename to @free-react-templates/highland)
2. index.css: add Tailwind theme tokens (brand-blue: #009DFF, heading: #1F1F1F, body: #4D4D4D, footer-bg: #000, muted: #919191)
3. Navbar component (transparent → sticky black, logo center, nav links left, social icons + Book A Room right)
4. HeroSlider component (4 slides, background images, centered white text, owl-carousel equivalent)
5. AboutSection component (2-column: text left with label/heading/paragraph/line-button, images right)
6. OffersSection component (3-column cards, each with image, heading, bullets, outlined book-now button)
7. VideoSection component (bg image + dark overlay, centered text, circular play button)
8. DiningSection component (reversed 2-column: images left, text right)
9. FeaturedRooms component (4 room cards with gradient overlays, price, room name, line-button)
10. ReservationBar component (bordered box, left text, right phone pill button)
11. InstagramFeed component (5-column image grid with hover overlay + icon)
12. Footer component (black bg, 4 columns, newsletter form, copyright bar with social icons)
13. App.tsx: compose all sections in order
14. Tests for each component (TDD)
15. Verify with scripts/verify-app.sh highland

## Design fidelity notes

### Navbar

- Initially transparent (absolute positioning, no background)
- Becomes sticky with solid black #000 background on scroll, reduced padding
- Logo centered, nav links left, book room right
- Nav links: Home (active), Rooms, About, Blog, Pages, Contact
- Right side: "Book A Room" blue button (#009DFF bg, white text)
- Hamburger menu on mobile

### Hero Slider

- Full viewport height (100vh)
- 4 slides with background images cycling
- Centered white text: heading + subtitle
- Background images: use picsum.photos/seed/highland-hero-N/1920/1080
- Carousel auto-rotation (5s interval)

### About section

- White background
- 2-column layout: text left, images right
- Label "About Us" in blue #009DFF
- Heading in #1F1F1F
- Paragraph in #4D4D4D
- "Learn More" line-button (gray underline, turns blue on hover)
- Right side: two overlapping images

### Offers section

- White background
- Centered label "Our Offers", heading "Ongoing Offers"
- 3-column grid
- Each card: image, heading, bullet list, "book now" outlined button

### Video section

- Background image with dark overlay
- Centered content: label + heading (white)
- Circular play button: 60x60 white circle, blue icon

### Dining section

- White background
- Reversed layout: images left, text right
- Label "Delicious Food", heading, paragraph, line-button

### Featured Rooms

- White background
- Centered label "Featured Rooms", heading "Choose a Better Room"
- 4 room cards in a row
- Each card: full-width image with gradient overlay, price, room name, line-button

### Reservation bar

- White background
- Centered bordered box
- Left: "For Reservation or Query?" text
- Right: phone number in blue pill button

### Instagram feed

- 5 equal-width columns
- Dark overlay on hover with Instagram icon
- Image scales on hover

### Footer

- Solid black #000 background
- 4 columns: Address, Reservation, Navigation, Newsletter
- Newsletter form with email input and "Sign Up" button
- Copyright bar with "Made with Component Dock" link
