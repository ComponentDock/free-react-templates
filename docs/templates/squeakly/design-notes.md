# Squeakly — Design Notes & Task Outline

**Source:** ColorLib Cleanex (`https://colorlib.com/wp/template/cleanex/`)
**Preview:** `https://preview.colorlib.com/theme/cleanex/`

## Section-by-Section Fidelity Notes

### 1. Top Bar
- Light gray (`#f8f9fa`) background strip
- Left: phone icon + number, email icon + address
- Right: social media icons (Twitter, Facebook, Instagram)
- Responsive: collapses on mobile

### 2. Navbar
- Dark background (`#1d2124` or similar dark)
- Logo text left-aligned
- Nav links right: Home, About, Pricing, Services, Blog, Contact
- Sticky on scroll with smooth transition
- Mobile: hamburger menu

### 3. Hero
- Full viewport height (`min-h-screen`)
- Background image with dark overlay (opacity ~0.5)
- Left-aligned content (col-md-6):
  - Small uppercase subheading: "Introducing Squeakly"
  - Large h1: "A Clean Home is A Happy Home"
  - Body paragraph
  - CTA button "Request A Quote" (btn-secondary style)
- Original uses `js-fullheight` + `stellar` parallax — replace with CSS `background-attachment: fixed`

### 4. About + Booking Form
- Two-column layout (5/7 or 4/8 split)
- LEFT column: Booking form card with cream/light bg
  - Fields: First Name, Last Name, Service (select dropdown), Date, Time, Phone, Email, Message (textarea)
  - Submit button
- RIGHT column: "About Company" text + "Most Awarded Cleaning Company Since 2000" heading + description paragraph
- Responsive: stacks on mobile, form first

### 5. Why Choose Us
- 4-column grid (3 on tablet, 2 on mobile)
- Each card: icon + heading + short description
- Items: Highly Trained Staff, Best Equipments, 100% Warranty, Fast & Effective Service
- Icons: use `lucide-react` equivalents (Users, Wrench, Shield, Zap)

### 6. Industries We Serve
- Two-column checklist with checkmark icons
- 8 items total, 4 per column
- Subheading: "Industries We Serve"
- Description paragraph above checklist
- Icons: use `lucide-react` CheckCircle

### 7. Our Services
- 3-column grid of service cards
- Each card: background image (top), text overlay area with title + "Starting from $50" + chevron link
- Services: Residential Cleaning, Commercial Cleaning, Construction Cleaning
- Cards have image on top, text below
- Use `picsum.photos` for service images

### 8. How it Works
- 3-step centered layout
- Each step: icon in circle + step number (01, 02, 03) + heading + description
- Steps: Pick a suitable plan, Set your schedule, Get things done
- Icons: `lucide-react` ClipboardList, Calendar, CheckCircle

### 9. Counter/Stats
- Full-width section with background image + dark overlay
- 4 stat items in a row
- Each: icon + large number + label
- Stats: 4,800 Projects Completed, 14,000 Employees, 200 Clients, 71,650 Awards
- Numbers animate/count up on scroll (use `react-countup` or Intersection Observer)

### 10. Testimonials
- Light background (`#f8f9fa`)
- Carousel of testimonial cards
- Each card: circular avatar, person name, location, quote text
- Use a simple carousel (CSS scroll-snap or lightweight library)

### 11. Pricing
- 4-column card grid
- Each card: plan name, price with "/session" suffix, feature list, "Sign Up" button
- Plans: Basic ($29), Standard ($59), Premium ($79), Ultimate ($89.50)
- Features per card: 1 Bathroom cleaning, Up to 3 bedrooms, 1 Livingroom, Carpet Cleaning, Dining Room
- Sign Up button uses primary brand color

### 12. CTA Banner
- Full-width section, dark/brand bg
- Heading: "Need to clean your house? Just hire us!"
- Two buttons: phone number + email (outlined/secondary style)

### 13. Blog
- 3-column card grid
- Each card: image (top), meta bar (date, author, comments), title, excerpt
- Use `picsum.photos` for blog images

### 14. Footer
- Dark background with bg image overlay (same treatment as hero/counter)
- 4 columns:
  1. Logo + description + social icons (Twitter, Facebook, Instagram)
  2. Recent Posts (3 items: thumbnail + title)
  3. Explore links
  4. Have a Questions? — address, phone, email
- Bottom bar: copyright + Component Dock link

## Implementation Tasks

1. Scaffold app from simplest existing template (copy + rename)
2. Set up `package.json` with `@free-react-templates/squeakly`
3. Add Roboto font via Google Fonts `<link>` in `index.html`
4. Add brand color `#225ae1` to Tailwind `@theme`
5. Build Navbar component (dark bg, sticky, responsive)
6. Build Hero component (bg image, overlay, heading, CTA)
7. Build BookingForm component (form fields, dropdown, submit)
8. Build AboutSection component (2-col: form + text)
9. Build WhyChooseUs component (4 feature cards)
10. Build Industries component (2-col checklist)
11. Build ServicesSection component (3 image cards)
12. Build HowItWorks component (3 steps)
13. Build StatsCounter component (4 animated counters)
14. Build Testimonials component (carousel)
15. Build Pricing component (4-tier cards)
16. Build CTABanner component (heading + phone/email)
17. Build BlogSection component (3 post cards)
18. Build Footer component (4 columns + copyright)
19. Compose App.tsx with all sections in order
20. Write tests (Vitest + Testing Library) for each component
21. Run `npm run test:coverage` — verify 100%
22. Run `scripts/verify-app.sh squeakly` — full local gate
23. Add `public/CNAME` + update `homepage`
24. Commit + push
