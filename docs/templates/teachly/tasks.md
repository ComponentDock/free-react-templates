# Teachly — Implementation Tasks & Design Notes

## Source
- ColorLib: Edusmart — https://colorlib.com/wp/template/edusmart/
- Preview: https://preview.colorlib.com/theme/edusmart/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/edusmart-free-template-1.jpg

## Section Implementation Order

### 1. Project Setup
- [ ] Copy simplest existing app (e.g. apps/aurora) as apps/teachly
- [ ] Rename package to @free-react-templates/teachly
- [ ] Update public/CNAME to teachly.free.componentdock.com
- [ ] Update homepage in package.json
- [ ] Add Google Fonts link for Montserrat + Crimson Text to index.html
- [ ] Run npm install at repo root for lockfile registration

### 2. Navbar
- [ ] Transparent background, logo left, 8 nav links (Montserrat uppercase)
- [ ] Mobile hamburger toggle
- [ ] Sticky on scroll with background transition

### 3. Home Banner
- [ ] Full-width section with background image (picsum.photos/seed/teachly-banner)
- [ ] Dark overlay (rgba(0,0,0,0.3))
- [ ] Left-aligned content: heading, paragraph, search form
- [ ] Search input with "Search Courses" placeholder + gradient button

### 4. Feature Area
- [ ] 3-column layout with negative margin to overlap banner
- [ ] 3 feature cards: New Classes, Top Courses, Full E-Books
- [ ] Each card: icon, title, description
- [ ] Third card uses brand gradient background

### 5. Department Area
- [ ] Grid of course category cards
- [ ] Each card: background image, dark overlay, category name, course count, student count
- [ ] Hover effect on cards

### 6. Popular Courses
- [ ] 4-column grid of course cards
- [ ] Each card: image with golden yellow (#f8b600) price badge, title, description, star rating, student count
- [ ] Image overlay on hover

### 7. Facts Area
- [ ] Dark overlay background section
- [ ] 6 stat cards in 3x2 grid
- [ ] Each card: icon, title, description
- [ ] Cards have 20px border-radius
- [ ] Stats: Expert Mentors, 25000+ Courses, Student Membership, Lifetime Access, Source File Included, Live Support

### 8. Testimonials
- [ ] Carousel component with auto-rotation
- [ ] Each slide: quote icon, name, 5-star rating, testimonial text
- [ ] Thumbnail navigation dots below

### 9. Registration Area
- [ ] Gradient background (cyan to teal)
- [ ] Left side: "Register Now" heading, description, countdown timer (Days/Hours/Mins/Secs)
- [ ] Right side: registration form (name, email, phone, submit)

### 10. Events Area
- [ ] 2-column layout of event cards
- [ ] Each card: thumbnail image, date, title, description
- [ ] Section heading: "Upcoming Events"

### 11. Footer
- [ ] Black background (#000000)
- [ ] 5-column layout: Top Products, Quick Links, Features, Resources, Newsletter
- [ ] Newsletter: email input + subscribe button
- [ ] Bottom bar: copyright + social icons + Component Dock link

## Design Fidelity Notes

- **Brand gradient:** linear-gradient(90deg, #00aee0 0%, #00fedc 100%) — used on buttons, CTA areas, registration section, third feature card
- **Golden accent:** #f8b600 — price badges, hover states on course cards
- **Typography:** Montserrat (headings/nav, uppercase, 600 weight) + Crimson Text (body copy)
- **Section rhythm:** Alternating white (#fff) and light blue-white (#f9f9ff) backgrounds
- **Overlays:** Dark semi-transparent on banner (20% black), facts area (dark background with overlay)
- **Buttons:** Pill-shaped (border-radius: 45px) for search/CTA, standard 5px radius for forms
- **Card style:** White background, subtle shadow, 5px border-radius
- **Stat cards:** 20px border-radius, white background on dark section
- **Footer:** Solid black with white text, social icon hover uses gradient
