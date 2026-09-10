# Sparkle — Tasks & Design Notes

## Template Info

- **New name:** sparkle
- **Source:** ColorLib Cleanex
- **Preview:** https://preview.colorlib.com/theme/cleanex/
- **Category:** Cleaning Company / Home Services
- **Layout:** Standard top navbar + full-width hero with booking form

## Implementation Tasks

### 1. Project Setup

- [ ] Copy simplest existing app as starter
- [ ] Rename package to `@free-react-templates/sparkle`
- [ ] Set up `public/CNAME` with `sparkle.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Roboto font link to `index.html` (Google Fonts)
- [ ] Configure Tailwind theme with brand tokens (#225ae1 blue, #fedd32 yellow, #161655 navy)

### 2. Navbar Component

- [ ] Dark bg navbar, sticky positioning
- [ ] Brand text "Sparkle" (white, Roboto bold)
- [ ] Nav links: Home, About, Pricing, Services, Blog, Contact
- [ ] "Request A Quote" CTA button (highlighted style)
- [ ] Mobile hamburger toggle

### 3. Hero Section

- [ ] Full-width background image (picsum.photos seed: sparkle-hero)
- [ ] Dark overlay (rgba(0,0,0,0.5))
- [ ] Subheading: "Introducing Sparkle" (small, white)
- [ ] Heading: "A Clean Home is A Happy Home" (white, large)
- [ ] Description paragraph
- [ ] "Request A Quote" secondary CTA button

### 4. About Section ("Most Awarded Cleaning Company")

- [ ] White bg, 2-column layout
- [ ] Left (col-5): Booking form "Book A Service"
  - First Name + Last Name (side by side)
  - Service dropdown (Residential, Commercial, Construction, Windows, Carpet, Furniture, Other)
  - Phone input
  - Date picker
  - Time picker
  - "Request A Quote" submit button
- [ ] Right (col-7): About content with background image
  - Heading, description paragraphs
  - Checkmark list of services

### 5. Why Choose Us Features

- [ ] White bg, 4-column grid
- [ ] Cards: Highly Trained Staff (users icon), Best Equipments (tool icon), 100% Warranty (shield-check icon), Fast & Effective (clock icon)
- [ ] Each card: icon + heading + description
- [ ] Use lucide-react icons

### 6. Industries Section ("Industries We Serve")

- [ ] 2-column layout: image left, content right
- [ ] Background image on left (picsum.photos)
- [ ] Heading + description on right
- [ ] 2-column checklist of 8 industries:
  - Airport & Airlines, House & Offices, Auto Dealerships, Sports & Fitness Centers
  - Schools & Universities, Commercial Building, Medical Facilities, Entertainment Venues
- [ ] Checkmark icons via lucide-react

### 7. Services Section ("Offering Best Cleaning Services")

- [ ] Section heading with "Our Services" subheading
- [ ] 3-column grid, 2 rows = 6 service cards
- [ ] Each card: background image (picsum.photos), service name, "Starting from $50", circle "Learn more" button
- [ ] Services: Residential, Commercial, Construction, Windows, Carpet, Furniture Cleaning

### 8. How It Works Section

- [ ] Full-width background image (picsum.photos seed: sparkle-how) + dark overlay
- [ ] 3-column layout
- [ ] Steps: 01 Pick a suitable plan, 02 Set your schedule, 03 Get things done
- [ ] Each: numbered icon circle + heading + description
- [ ] White text on dark overlay

### 9. Testimonials Section ("What Are Clients Says")

- [ ] Light bg (#f8f9fa)
- [ ] Carousel/slider of testimonial cards
- [ ] Each card: circular user photo (picsum.photos), name, location, quote
- [ ] 5 testimonial items
- [ ] Carousel navigation

### 10. Pricing Section ("Our Plans & Pricing")

- [ ] White bg, 4-column grid
- [ ] 4 plan cards: Basic ($29), Standard ($59), Premium ($79 — highlighted), Ultimate ($99)
- [ ] Each: plan name, price with "/ session", 5-item feature list, "Sign Up" blue CTA
- [ ] Premium card highlighted (active state)

### 11. CTA Section ("Need to clean your house?")

- [ ] Full-width background image (picsum.photos seed: sparkle-cta) + dark overlay
- [ ] Heading: "Need to clean your house? Just hire us!" (white)
- [ ] Phone number button (blue) + Email button (secondary)

### 12. Blog Section ("Recent Post")

- [ ] Light bg, 3-column grid
- [ ] 3 blog cards: image, date/author/comments meta, title, description
- [ ] Blog titles paraphrased from original

### 13. Counters Section

- [ ] Background image + dark overlay, 4-column
- [ ] Stats: Project Completed (4800), Employees (14000), Clients (200), Awards (5000)
- [ ] Each: icon + animated count number + label
- [ ] Count-up animation on scroll

### 14. Footer

- [ ] Background image + dark overlay
- [ ] 4-column layout:
  - About: "Sparkle" logo, description, social icons (Twitter, Facebook, Instagram)
  - Recent Posts: 2 blog post previews with images
  - Explore: links (About, Contact, Services, Blog, Pricing)
  - Contact: address, phone, email
- [ ] Copyright line
- [ ] "Made with Component Dock" link (componentdock.com)

### 15. Design Tokens & Theme

- [ ] brand-blue: #225ae1 (primary)
- [ ] brand-yellow: #fedd32 (secondary/highlight)
- [ ] btn-primary: #007bff (Bootstrap blue)
- [ ] text-dark: #161655 (navy headings)
- [ ] text-body: #6c757d (paragraphs)
- [ ] bg-light: #f8f9fa (alternate sections)
- [ ] Font: Roboto (Google Fonts)

## Fidelity Notes

- **Booking form is prominent** — sits in the About section (left column), not in the hero
- **Service cards have background images** with overlay text and circle buttons
- **"How It Works" uses numbered steps** (01, 02, 03) with icon circles
- **Pricing Premium is highlighted** — the `.active` class on the Premium card
- **CTA section has phone + email buttons** — dual contact CTAs
- **Counters use background images** with dark overlay (same as hero treatment)
- **Footer uses background image** with dark overlay — not a solid dark color
- **Original uses Flaticon icons** — replace with lucide-react equivalents
- **Original uses Bootstrap 4 grid** — replace with Tailwind CSS grid/flex
- **Original uses Owl Carousel** for testimonials — use lightweight React carousel
- **Original uses Font Awesome** for social/contact icons — replace with lucide-react
- **Industries section has typo "Indestries"** — fix to "Industries" in our version
