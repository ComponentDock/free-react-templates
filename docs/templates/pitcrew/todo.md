# PitCrew — Implementation Notes

## Source
- **ColorLib slug:** automotive
- **Preview:** https://preview.colorlib.com/theme/automotive/
- **New name:** pitcrew

## Section-by-Section Design Notes

### 1. Header
- Two-tier header: thin top bar (dark bg, phone/hours/social) + main nav bar (white bg, logo left, menu center, search/cart right)
- Top bar: bg #353535 or similar dark, white text, phone icon + number, clock icon + hours, map link
- Main nav: white bg, logo image, menu links (Home, Services, Shop, Pages dropdown, Blog), search icon + cart icon
- Mobile: hamburger menu (offcanvas slide-in from right)

### 2. Hero
- Full-width section with dark background image (parallax or cover)
- Centered text: small "Welcome To" span (40px, font-weight 400) above main "PitCrew Garage" heading (60px, 700)
- Subtitle paragraph (24px, white)
- "Our Services" primary button (#5F67FF bg, white text, 2px radius, bold)
- Padding: ~170px top/bottom on desktop

### 3. Services
- Section title: "What We Do?" centered
- 4 services in alternating layout (text+image pairs):
  - Engine Overhaul (icon + text | image)
  - Power Steering (image | icon + text)
  - Oil Change (icon + text | image)
  - Upgrades Car (image | icon + text)
- Each text block: icon image, h4 title, p description
- Each image block: service photo
- Use CSS grid or flexbox with order classes for the alternating pattern

### 4. Choose Us
- No top padding (overlaps slightly with services)
- Left 48%: background image (garage/car photo)
- Right 52%: section title ("We Have 20 Years Of Experience In Auto Car"), paragraph, bullet list with check icons (use lucide-react Check), "About Us" primary button
- Bullet items are text with a colored (#5F67FF) icon prefix

### 5. Products
- Section title: "Our Products" centered
- 4-column grid of product cards
- Each card: image container with hover overlay (4 icon buttons: heart, cart, eye, exchange), product name link, price
- Hover: subtle shadow, overlay slides in from right
- Use lucide-react icons for the hover overlay

### 6. Testimonial
- Simple carousel/slider (can use state-based auto-advance)
- White background, padding around slider
- 3 testimonial items, each with: quotation icon (lucide-react Quote), blockquote text
- Dots navigation at bottom
- Auto-advance every ~5 seconds

### 7. Counter / Stats
- Parallax dark background image
- White text overlay
- Section title: "About Our Statistics"
- 3 counter items in a row, each with: icon, large animated number (useCountUp or similar), label
- Numbers: 560 for all three (can vary slightly for realism)
- Counter animation triggers on scroll into view (IntersectionObserver)

### 8. Latest News
- Section title: "Latest News" centered
- 3-column grid of blog cards
- Each card: image with date/author overlay badge, title link, description snippet, "Continue Reading" link
- Date overlay positioned absolute at bottom of image

### 9. Footer
- Top bar (dark bg ~#25282C): 3 columns
  - Column 1: "Booking Repair" small text + "Appointment" heading
  - Column 2: "Contact Us Now!" + phone number "123-4567-7890"
  - Column 3: "Location" + "Find us on map" with arrow icon
- Main footer (dark bg): 4-column layout
  - About: paragraph text + "Contact Us" button with phone icon
  - Quick Links: list of links (Services, About, Contact, etc.)
  - News: 3 news item links with date
  - Office: address, phone, email
- Bottom bar: copyright + "Made with ❤ by Component Dock" (replaces Colorlib credit)

## Component List

1. `Header.tsx` — TopBar + NavBar (or split into TopBar.tsx + NavBar.tsx)
2. `Hero.tsx` — Full-width hero with bg image
3. `Services.tsx` — 4 alternating service cards
4. `ChooseUs.tsx` — Split layout with image + text
5. `Products.tsx` — 4-column product grid with cards
6. `Testimonial.tsx` — Carousel with quotes
7. `Counter.tsx` — Stats section with animated counters
8. `LatestNews.tsx` — 3-column blog card grid
9. `Footer.tsx` — Top bar + main footer + bottom bar

## Implementation Order
1. Header (TopBar + NavBar)
2. Hero
3. Services
4. ChooseUs
5. Products
6. Testimonial
7. Counter
8. LatestNews
9. Footer
10. App.tsx composition
11. Tests (TDD — write tests for each component)
12. Styling polish + responsive tweaks

## Dependencies
- No new npm packages needed
- lucide-react for icons (already in shared UI or installable)
- picsum.photos for placeholder images
- Google Fonts "Public Sans" via index.html link
