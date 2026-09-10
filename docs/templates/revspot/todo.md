# Revspot — Implementation Tasks

Source: ColorLib CarRental (slug: `carrentals`)
Preview: https://preview.colorlib.com/theme/carrentals/

## Structure Order (top to bottom)

1. Navbar — sticky header, logo left, nav links right
2. Hero — full-viewport bg image, heading, search form
3. How it Works — 3 numbered steps in a row + video play link
4. Promo Split — image right, heading + text + CTA left
5. Car Listings — light bg, 6 cards in 3-col grid
6. Features — 6 service cards in 3x2 grid
7. Testimonials — light bg, 3 cards in 3-col grid
8. CTA Banner — blue bg, heading + white button
9. Footer — 5 columns + copyright

## Section-by-Section Fidelity Notes

### Navbar
- Logo: bold text "CarRental" (replace with template brand name or generic)
- Links: Home (active), Listing, Testimonials, Blog, About, Contact
- Sticky on scroll, mobile hamburger menu
- On scroll sticky: logo turns blue (#0779e4)

### Hero
- Full viewport height (100vh, min-height 570px)
- Background image (use picsum.photos placeholder)
- Dark overlay for text legibility
- Heading: "Rent a car is within your finger tips." — h1, 50px, font-weight 900
- Search form in a row:
  - Select Type dropdown (col-md-3)
  - Pick up date input with date icon (col-md-3)
  - Drop off date input with date icon (col-md-3)
  - "Search Now" button (btn-primary, full-width col-md-3)

### How it Works
- Section heading: "How it works?" (strong, 700)
- Subtitle: "Easy steps to get you started"
- 3 steps in a row (col-lg-4 each):
  - Each step: numbered circle "01." / "02." / "03." in brand blue
  - Title: "Select a car" / "Fill up form" / "Payment"
  - Description text
- Below steps: "Video how it works" play link with circular icon

### Promo Split
- Two-column layout (image right col-lg-7, text left col-lg-4)
- Image: feature_01.png (use picsum placeholder)
- Heading: "You can easily avail our promo for renting a car."
- Body text paragraph
- CTA: "Meet them now" btn-primary

### Car Listings
- Light background (bg-light)
- Heading: "Car Listings"
- 6 cards in 3-col grid (col-md-6 col-lg-4):
  - Each card: car image with 7px border-radius + box-shadow
  - Car name (h3, 18px, font-weight 900)
  - Price: "$389.00" in brand blue (font-weight 700, 18px) + "/day" gray
  - Feature row: Luggage, Doors, Passenger with counts
  - "Rent Now" btn-primary btn-sm
  - Card padding 20px, white bg, shadow

### Features
- White background
- Heading: "Features" with subtitle
- 6 service cards in 3x2 grid:
  - White circle icon container (90x90px)
  - Icon (use lucide-react equivalents: Home, Settings, Clock, ShieldCheck, Video, Key)
  - Title (h3, 20px, font-weight 900 dark)
  - Description (gray #888)
  - "Learn more" link
  - Hover shadow: 0 15px 30px rgba(0,0,0,0.05)

### Testimonials
- Light background (bg-light)
- Heading: "Testimonials" with subtitle
- 3 cards in 3-col grid:
  - White bg, 7px border-radius, 30px padding, shadow
  - Blockquote text (18px)
  - Author row: circular avatar (50px, border-radius 50%), name + role
  - Author name bold, role in #ccc

### CTA Banner
- Blue background (bg-primary, #007bff)
- Heading: "What are you waiting for?" (white)
- Subtitle text below (slightly transparent white)
- "Rent a car now" btn-white (bg #fff, color #0779e4)

### Footer
- White background, padding 4em 0 (8em on lg)
- 5 columns:
  - About Us: paragraph text + social icons (Facebook, Instagram, Twitter, LinkedIn)
  - Quick Links: 5 links
  - Resources: 5 links
  - Support: 5 links
  - Company: 5 links
- Footer heading: 16px
- Footer link color: rgba(0,0,0,0.5), hover black
- Bottom border-top line
- Copyright line with Component Dock link (NOT ColorLib)

## Key Implementation Notes

- Brand color #0779e4 goes in `@theme` as the primary color
- Font: load Roboto via Google Fonts link in index.html
- Icons: use lucide-react (Home, Settings, Clock, ShieldCheck, Video, Key for features; Play for video; Calendar for dates; ChevronDown for dropdown)
- Date pickers: use a simple date input or a lightweight library
- Search form: controlled React form with useState
- Car data: define in a local data array (6 cars with name, price, image, specs)
- Testimonial data: define in local data array (3 entries)
- Footer: static content with 5 column layout
- All placeholder images via picsum.photos with seed for determinism
