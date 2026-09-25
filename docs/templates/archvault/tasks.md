# Archvault — Tasks & Design Notes

## Template Info

- **New name:** archvault
- **Source:** ColorLib Archs
- **Preview:** https://preview.colorlib.com/theme/archs/
- **Category:** Architecture / Interior Design Onepage
- **Layout:** Full-width onepage with sticky transparent navbar, hero, and 14 sections

## Visual Design Notes (from screenshot + CSS analysis)

- Clean, professional architecture firm template
- Dark hero with building photo, dark overlay, white text
- White bg for most content sections
- Footer is dark gray (#333333)
- Sharp/square buttons (rounded-0) are the signature
- Primary accent is subtle — only #ff5733 on form focus; most CTAs are white buttons on dark/colored backgrounds
- Nunito Sans font family (light 300 for body, bold for headings)
- Section sub-titles are small uppercase accent text above headings
- Team cards have social icon overlay on hover
- Pricing cards have border + rounded corners
- FAQ uses Bootstrap accordion
- Projects use fancybox lightbox
- Testimonials use owl-carousel

## Section Order (must match 1:1)

1. Top Bar (social icons + contact info)
2. Navbar (logo + nav links + mobile hamburger)
3. Hero (full-width bg image + overlay + play button + heading + subtitle)
4. Features Strip (3 icon+text cards, border-bottom)
5. About Us (image left, text + checklist + CTA right)
6. Our Team (6 member cards in 3×2 grid with social overlay)
7. Pricing (3 plan cards in a row)
8. FAQ (image left, accordion right)
9. Testimonials (carousel of quotes)
10. Projects (3×2 gallery grid with lightbox)
11. Blog/News (3 post cards + View All button)
12. Services (3×2 icon+text grid)
13. Contact (form: name, email, message + send button)
14. Footer (3-column: about+nav, recent news, newsletter+social + copyright)

## Implementation Tasks

### 1. Project Setup
- [ ] Copy simplest existing app as starter
- [ ] Rename package to `@free-react-templates/archvault`
- [ ] Set up `public/CNAME` with `archvault.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Nunito Sans font link to `index.html`
- [ ] Configure Tailwind theme with brand tokens (#ff5733 accent, #333333 footer, #ebeef0 light bg)

### 2. Top Bar Component
- [ ] Social icons row (Twitter, Facebook, LinkedIn, Instagram)
- [ ] Contact info (email, phone) right-aligned
- [ ] Responsive: hide contact text on small screens, keep icons

### 3. Navbar Component
- [ ] Logo "Archvault" left-aligned, bold uppercase white text
- [ ] Nav links right-aligned (Home, About, Projects, News, Services, Contact)
- [ ] Sticky on scroll with background transition
- [ ] Mobile hamburger menu with slide-in nav
- [ ] Desktop: transparent over hero, solid bg on scroll

### 4. Hero Component
- [ ] Full-width background image with dark semi-transparent overlay
- [ ] Centered play button (video icon)
- [ ] "INTERIOR DESIGN" large uppercase heading
- [ ] Italic subtitle below heading
- [ ] Responsive: full-width on all screens

### 5. Features Strip Component
- [ ] 3-column grid (Innovative Structure, Architectural, Interior Design)
- [ ] Each: icon (lucide-react) + title + description
- [ ] Border-bottom separator
- [ ] Responsive: stack on mobile

### 6. About Us Component
- [ ] 2-column: large image left, text right
- [ ] Subtitle "Learn To Know" + heading "About Us"
- [ ] Paragraph text
- [ ] Checklist (4 items with checkmark icons)
- [ ] "Read More About Us" CTA button (rounded-0, primary style)

### 7. Our Team Component
- [ ] Centered subtitle + heading + description
- [ ] 3×2 grid of team member cards
- [ ] Each card: photo, name, role, social overlay on hover, description
- [ ] Social icons: Facebook, Twitter, Instagram

### 8. Pricing Component
- [ ] Centered subtitle + heading
- [ ] 3 pricing cards (Starter $30/yr, Professional $72/yr, Enterprise $130/yr)
- [ ] Each: plan name, price, feature list (checkmarks + strikethrough for unavailable)
- [ ] "Buy Now" button per card

### 9. FAQ Component
- [ ] 2-column: image left, accordion right
- [ ] 5 FAQ items with Bootstrap-style accordion behavior
- [ ] First item expanded by default
- [ ] Toggle open/close on click

### 10. Testimonials Component
- [ ] Centered subtitle + heading
- [ ] Carousel/slider with 4 testimonial slides
- [ ] Each: image, name, role, quote text
- [ ] Auto-play or manual navigation

### 11. Projects Component
- [ ] Centered subtitle + heading + description
- [ ] 3×2 project gallery grid
- [ ] Each: image link (lightbox), project name, category label
- [ ] Lightbox/modal on image click

### 12. Blog/News Component
- [ ] Centered subtitle + heading
- [ ] 3 blog post cards (image, date, title)
- [ ] "View All Posts" CTA button centered below

### 13. Services Component
- [ ] Centered subtitle + heading + description
- [ ] 3×2 service card grid
- [ ] Each: icon (lucide-react) + title + description

### 14. Contact Component
- [ ] Centered subtitle + heading + description
- [ ] Full-width form with white bg container
- [ ] Fields: Full Name, Email, Message (textarea)
- [ ] "Send Message" submit button
- [ ] Basic form validation (required fields)

### 15. Footer Component
- [ ] Dark bg (#333333)
- [ ] 3-column: About Us text + Navigation links | Recent News (3 items) | Newsletter + Social
- [ ] Newsletter: email input + Send button
- [ ] Social icons: Facebook, Twitter, Instagram, LinkedIn
- [ ] Copyright bar with Component Dock link

### 16. Testing
- [ ] Component tests for each section
- [ ] Navbar sticky behavior test
- [ ] FAQ accordion toggle test
- [ ] Form validation test
- [ ] 100% coverage verification
