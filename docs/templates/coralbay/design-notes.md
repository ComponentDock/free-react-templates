# CoralBay — Design Notes & Task Outline

**Source:** ColorLib Marimar (https://colorlib.com/wp/template/marimar/)
**Preview:** https://preview.colorlib.com/theme/marimar/

## Section order (from live preview DOM)

1. Navbar (header.header)
2. Hero (div.home) — parallax background, "Book Your Stay"
3. Booking Form (div.booking) — inline form overlapping hero
4. Intro (div.intro) — "Amazing Hotel in front of the Sea"
5. Gallery Slider (div.gallery) — owl-carousel, 4+ slides with overlay
6. Rooms Right (div.rooms_right) — "Luxury Double Suite" + slider
7. Rooms Left (div.rooms_left) — "Luxury Single Room" + slider
8. Discover (div.discover) — "Discover CoralBay" + experience cards
9. Testimonials (div.testimonials) — carousel with author info
10. Footer (footer.footer) — parallax bg, 3 columns, copyright

## Design fidelity notes

### Navbar
- Centered layout: logo on top, nav links below, social icons in a row
- Nav links: Home (active), About, Rooms, News, Contact
- Social icons: Pinterest, Facebook, Twitter, Dribbble, Behance (use lucide-react equivalents or similar)
- "Book Your Room Now" CTA link on the right
- Mobile: hamburger icon → full-screen overlay menu with centered links + CTA button + social icons
- Header background: semi-transparent dark overlay on parallax bg

### Hero
- Full-viewport-width parallax background image
- Centered content: h1 "Book Your Stay", paragraph text, amber "book now" button
- Dark overlay on parallax image (rgba(14,9,35,0.88))
- Button: 186×65px, bg #ff9000, border 2px solid #ff9000, border-radius 7px, uppercase white text, weight 700, letter-spacing 0.075em

### Booking Form
- Sits below hero, slightly overlapping
- Horizontal form: check-in datepicker, check-out datepicker, rooms dropdown, "book now" submit button
- White background card
- Amber submit button matches CTA style
- Use simple date inputs (HTML date or a lightweight picker)

### Intro
- Centered section heading (Playfair Display, 36px, #150f24)
- Paragraph below in Lato, #4a4f59
- Full-width, white background

### Gallery Slider
- Horizontal carousel with 4+ image slides
- Each slide has dark overlay on hover: venue name (white, centered) + small arrow/link icon
- Use CSS snap or a lightweight carousel (Swiper, embla) — avoid owl-carousel dependency
- Images: picsum.photos/seed/coralbay-gallery-1 through -4

### Rooms Right
- Split layout: left = image carousel, right = content
- Content: h1 "Luxury Double Suite" (Playfair Display), paragraph, amenity list (icon + label), price "$129/Night", "book now" button
- Amenity items: each with a lucide-react icon + text (e.g., bed, wifi, bath)
- Image slider: 3 slides, same room from different angles

### Rooms Left
- Mirror of Rooms Right: content on left, slider on right
- "Luxury Single Room", $89/Night
- Same amenity pattern

### Discover
- Two-column layout: left = heading "Discover CoralBay" + text + stat number + "discover" button, right = image slider of experience cards
- Experience cards: Weddings, Parties, Relax — each with background image + dark overlay + centered white text
- Stat number: large, bold, amber (#ff9000)
- "discover" button matches CTA style

### Testimonials
- Carousel of testimonial cards
- Each card: quote paragraph, author avatar (circular), author name + "Client" role
- Centered layout, white background
- 3 testimonials in the carousel

### Footer
- Parallax background (dark image)
- Centered logo at top
- Three-column grid: Useful Links | Address | Contact
- Contact column: phone + email
- Copyright bar at bottom: "Made with Component Dock" link (Component Dock → componentdock.com)
- No ColorLib attribution

## Implementation tasks

- [ ] Create `apps/coralbay/` from a boilerplate app, rename package
- [ ] Write `src/components/Navbar.tsx`
- [ ] Write `src/components/Hero.tsx`
- [ ] Write `src/components/BookingForm.tsx`
- [ ] Write `src/components/Intro.tsx`
- [ ] Write `src/components/Gallery.tsx`
- [ ] Write `src/components/RoomsRight.tsx`
- [ ] Write `src/components/RoomsLeft.tsx`
- [ ] Write `src/components/Discover.tsx`
- [ ] Write `src/components/Testimonials.tsx`
- [ ] Write `src/components/Footer.tsx`
- [ ] Compose in `src/App.tsx`
- [ ] Configure theme tokens in `src/index.css` (@theme block)
- [ ] Write tests for each component (100% coverage)
- [ ] Run `scripts/verify-app.sh coralbay`
- [ ] Update `public/CNAME` and `package.json` homepage
