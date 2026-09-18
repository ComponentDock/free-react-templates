# Sweeply — Implementation Notes

Source: ColorLib Cleanex (https://preview.colorlib.com/theme/cleanex/)
Preview URL slug: `cleanex`
ColorLib page slug: `cleanex`

## Section Order (implement in this order)

1. Top Bar — light gray contact bar with email, phone, hours, social icons
2. Navbar — dark sticky, logo with cleaning icon, 6 nav links, gray CTA button
3. Hero — full-width bg image, diagonal right edge, dark overlay, subheading + headline + CTA
4. Appointment Form + About — two-column: booking form left, about text right
5. Stats Counter — bg image with blue overlay, 4 animated counters
6. Industries — heading + 6 industry cards with icons
7. Services — heading + 6 service cards with background images
8. 3-Step Flow — bg image with overlay, 3 numbered steps
9. Testimonials — light gray bg, owl-carousel reviews
10. Pricing — white bg, 4 plan cards (Basic/Standard/Premium/Ultimate)
11. Parallax CTA — bg image with blue overlay + CTA heading + button
12. Blog — light gray bg, 3 post cards
13. Footer — bg image with blue overlay, 4 columns + copyright

## Fidelity Notes

### Top Bar

- Light gray background (`bg-light` = `#f8f9fa`)
- Left: email (paper-plane icon) + phone (phone-square icon)
- Right: business hours text (clock-o icon) + social icons (Facebook, Twitter, Instagram, Dribbble)
- Use lucide-react icons: Mail, Phone, Clock, Facebook, Twitter, Instagram, Dribbble

### Navbar

- Dark background (Bootstrap `bg-dark` = `#343a40`)
- Logo: flaticon cleaning icon + "Sweeply." text (white, bold)
- Nav links: Home, About, Pricing, Services, Blog, Contact
- Right: gray "Request A Quote" button (`btn-secondary`, `#6c757d`)
- Mobile: hamburger toggle icon, collapse menu
- Font: Roboto

### Hero

- Full-width background image (use picsum: `https://picsum.photos/seed/sweeply-hero/1920/900`)
- Diagonal right edge via clip-path or CSS transform (degree-right class)
- Dark overlay (opacity varies)
- Left-aligned white text:
  - Subheading: "Introducing Sweeply" (uppercase, small, white, bold, with horizontal line after)
  - Headline: "A Clean Home is A Happy Home" (large, bold)
  - Description paragraph
  - Gray button: "Request A Quote" (`btn-secondary`, `#6c757d`)
- Height: 900px

### Appointment Form + About

- Two-column layout (5/7 split on desktop)
- Left column: white card with "Book A Service" heading
  - Form fields: First Name, Last Name (side by side), Service dropdown (Residential/Commercial/Construction/Windows/Carpet/Furniture/Other), Phone, Date (calendar icon), Time (clock icon)
  - Blue "Submit Details" button (`btn-primary`, `#007bff`, `py-3 px-4`)
- Right column: white bg
  - Subheading: "About Company" (blue, uppercase, with horizontal lines)
  - Headline: "Most Awarded Cleaning Company Since 2000"
  - Two description paragraphs

### Stats Counter

- Background image (`bg_2.jpg` → use picsum) with blue overlay (`#225ae1`)
- Four counters in a row (col-md-6 col-lg-3):
  - 4,800 Project Completed (flaticon-ok icon)
  - 14,000 Employees (flaticon-customers icon)
  - 200 Clients (flaticon-rating icon)
  - 71,650 Awards (flaticon-medal icon)
- White text, large bold numbers, uppercase labels
- Animate count-up on scroll into view

### Industries We Serve

- White background
- Centered heading section: subheading "Industries We Serve", description paragraph
- Six industry cards in 3x2 grid (col-md-6 col-lg-3):
  - Residential Cleaning, Commercial Cleaning, Construction Cleaning
  - Windows Cleaning, Carpet Cleaning, Furniture Cleaning
- Each with circular icon (flaticon-cleaning-staff, flaticon-cleaning-tools, flaticon-badge, etc.)
- Icon on left, text on right (horizontal layout)

### Services Section

- White background
- Centered heading section: subheading "Offering Best Cleaning Services", description paragraph
- Six service cards in 3x2 grid (col-md-4)
- Each card: background image (260px height), text below with title and description
- Cards have rounded corners (5px), subtle shadow, hover lift effect
- Use lucide-react icons or flaticon equivalents

### 3-Step Flow

- Background image with overlay
- Heading: "Get Amazing Cleaning in 3 Simple Ways"
- Three steps in a row (col-md-4):
  1. "Pick a suitable plan" — with icon, number "01", description
  2. "Set your schedule" — with icon, number "02", description
  3. "Get things done" — with icon, number "03", description
- White text on dark overlay

### Testimonials

- Light gray background (`#f8f9fa` / `bg-light`)
- Heading section: subheading "Testimonials", heading "What Are Clients Says"
- Carousel (owl-carousel style) with 5 reviews:
  - Avatar image (use picsum)
  - Reviewer name
  - Testimonial paragraph
- Use a simple carousel component or static grid

### Pricing

- White background
- Heading section: subheading "Pricing", heading "Our Plans & Pricing"
- Four pricing cards in a row (col-md-3):
  - Basic: $29.00/session — 1 Bathroom, 3 Bedrooms, 1 Livingroom, Carpet, Dining
  - Standard: $59.00/session — same features
  - Premium: $79.00/session — same features (HIGHLIGHTED/ACTIVE)
  - Ultimate: $89.50/session — same features
- Each card: blue header (`#225ae1`), white name, yellow price (`#fedd32`), feature list (alternating `#fafafa` bg), blue "Sign Up" button
- Premium card has `.active` class (lifted/highlighted)

### Parallax CTA

- Background image (`bg_4.jpg` → use picsum) with blue overlay at 80% opacity
- Centered white text: heading "Need to clean your house? Just hire us!"
- "Request A Quote" button (gray `btn-secondary`)
- Padding: 6em top/bottom

### Blog

- Light gray background (`bg-light`)
- Heading section: subheading "Our Blog", heading "Recent Post"
- Three blog cards in 3-column grid (col-md-4):
  - Background image (cover, rounded)
  - Meta: date (calendar icon), author (user icon), comments (comment icon)
  - Title link
  - Excerpt paragraph

### Footer

- Background image with blue overlay
- Four columns:
  1. Logo "Sweeply" + description + social icons (Twitter, Facebook, Instagram)
  2. Recent Posts: 2 blog previews with thumbnail images
  3. Explore: About, Contact, Services, Blog (chevron-right icons)
  4. Have a Questions?: address, phone, email
- Copyright bar at bottom with Component Dock link
- Font: Roboto
- Text: white/light on blue overlay

## Key Implementation Notes

- **Icons:** Original uses Font Awesome 4.7 + custom flaticon font. Use lucide-react equivalents.
- **Carousel:** Original uses Owl Carousel. Use a simple React carousel or static layout.
- **Parallax:** Original uses stellar.js for parallax. Use CSS `background-attachment: fixed`.
- **Date/Time pickers:** Original uses Bootstrap Datepicker + jQuery Timepicker. Use native HTML date/time inputs or a React date picker.
- **Animations:** Original uses animate.css. Use Tailwind transitions or framer-motion for scroll-triggered animations.
- **Counter animation:** Use IntersectionObserver to trigger count-up animation.
- **Diagonal hero edge:** The `degree-right` class creates a diagonal/angled right edge. Implement with `clip-path: polygon(...)` or a pseudo-element.
