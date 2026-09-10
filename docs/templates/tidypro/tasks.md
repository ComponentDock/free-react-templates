# TidyPro — Tasks & Design Notes

## Template Info

- **New name:** tidypro
- **Source:** ColorLib Cleaning Company
- **Preview:** https://preview.colorlib.com/theme/cleaningcompany/
- **Category:** Cleaning Company / Home Services
- **Layout:** Standard top navbar + full-width hero with appointment form

## Implementation Tasks

### 1. Project Setup

- [ ] Copy simplest existing app as starter
- [ ] Rename package to `@free-react-templates/tidypro`
- [ ] Set up `public/CNAME` with `tidypro.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Roboto font link to `index.html` (Google Fonts)
- [ ] Configure Tailwind theme with brand tokens (#2b98f0 blue, #f3e53d yellow, #111111 footer)

### 2. Navbar Component

- [ ] Dark bg navbar, sticky positioning
- [ ] Brand text "TidyPro" (white, Roboto bold)
- [ ] Nav links: Home, About, Services, Portfolio, Pricing, Blog, Contact
- [ ] Mobile hamburger toggle

### 3. Hero Section

- [ ] Full-width background image (picsum.photos seed: tidypro-hero)
- [ ] Dark overlay
- [ ] Subheading: "Leave the house cleaning chores to us" (white)
- [ ] Heading: "Let us do the dirty work, so you don't have to." (white, large)
- [ ] "Learn more" blue CTA button with arrow icon

### 4. Appointment Form

- [ ] Dark overlay background
- [ ] White card form centered
- [ ] Fields: Name, Phone number, Select Services dropdown, Select Cleaners dropdown, Date, Time
- [ ] Service options: Office Cleaning, Pool Cleaning, Carpet Cleaning, Kitchen Cleaning, Garden Cleaning, Other
- [ ] Cleaner options: John Doe, William Smith, Danny Green, Jason Thompson
- [ ] "Request A Quote" blue CTA button

### 5. Business Hours + About Section

- [ ] 2-column layout
- [ ] Left: background image with overlay card
  - "Business Hours" heading
  - Opening Days: Monday-Friday 9am-8pm, Saturday 9am-5pm
  - Vacations: All Sundays, All Official Holidays
  - Emergency phone number (yellow bg card)
- [ ] Right: "Welcome to TidyPro" heading, description, checkmark list of services

### 6. Services Section ("How We Works")

- [ ] Section heading with "Services" subheading
- [ ] 3-column grid, 2 rows = 5 service cards (+ 1 empty or 6th service)
- [ ] Services: Office Cleaning, Pool Cleaning, Carpet Cleaning, Kitchen Cleaning, Garden Cleaning
- [ ] Each card: icon (lucide-react), heading, description, "Read more" link
- [ ] Icons: building, waves, sofa, cooking-pot, trees

### 7. Team Section ("Our Team")

- [ ] 3-column grid
- [ ] 3 team member cards: photo (picsum.photos), name, position, description
- [ ] Members: Lloyd Wilson (Office Cleaner), Lloyd Wilson (Office Cleaner), Lloyd Wilson (Office Cleaner)
- [ ] Social icons on hover (Twitter, Facebook, LinkedIn)

### 8. Testimonials Section ("Happy Customer")

- [ ] Dark bg (#33313b)
- [ ] Carousel of testimonial cards
- [ ] Each card: quote icon, circular user photo (picsum.photos), name, location, quote
- [ ] 5 testimonial items
- [ ] Carousel navigation

### 9. Portfolio Section ("We have done many latest cleaning project")

- [ ] 4-column grid
- [ ] 4 project items: background image (picsum.photos), expand icon on hover, title
- [ ] Projects: House Cleaning, Window Cleaning, Pool Cleaning, Office Cleaning

### 10. Blog Section ("Latest News")

- [ ] 3-column grid
- [ ] 3 blog cards: image, date/author/comments meta, title
- [ ] Blog titles: "10 Tips to clean your window" etc.

### 11. CTA Section ("Together we will explore new things")

- [ ] Background image (picsum.photos seed: tidypro-cta) + dark overlay
- [ ] Heading: "Together we will explore new things" (white)
- [ ] Video play button (circle icon)

### 12. Pricing Section ("Choose Your Perfect Plans")

- [ ] Light bg (#f8f9fa), 3-column grid
- [ ] 3 plan cards: Starter ($49), Standard ($79 — highlighted), Premium ($109)
- [ ] Each: icon, plan name, price, 5-item feature list (checkmarks), "Get Started" blue CTA
- [ ] Standard plan highlighted (active state)

### 13. Footer

- [ ] Dark bg (#111111), 4-column layout:
  - About: "TidyPro" heading, description, social icons (Twitter, Facebook, Instagram)
  - Latest News: 2 blog post previews with images + meta
  - Quick Links: Home, About, Services, Works, Blog, Contact
  - Contact: address, phone, email
- [ ] Copyright line
- [ ] "Made with Component Dock" link (componentdock.com)

### 14. Design Tokens & Theme

- [ ] brand-blue: #2b98f0 (primary)
- [ ] brand-yellow: #f3e53d (secondary/highlight)
- [ ] btn-primary: #007bff (Bootstrap blue)
- [ ] footer-dark: #111111 (footer bg)
- [ ] testimonial-dark: #33313b (testimonials bg)
- [ ] Font: Roboto (Google Fonts)

## Fidelity Notes

- **Appointment form is prominent** — sits below the hero with dark overlay bg
- **Business Hours section** has a split layout: image with hours card (left) + about text (right)
- **Emergency phone number** uses yellow bg card within the hours section
- **Services use icon + text layout** (icon left, text right), not image cards
- **Team section has 3 members** with social icons on hover
- **Testimonials use dark bg** (#33313b) — distinctive dark treatment
- **Portfolio uses expand icon** on hover (lightbox/magnific popup style)
- **Pricing has 3 plans** (not 4) — Starter, Standard (highlighted), Premium
- **Footer uses very dark bg** (#111111) — nearly black
- **Original uses Flaticon icons** — replace with lucide-react equivalents
- **Original uses Bootstrap 4 grid** — replace with Tailwind CSS grid/flex
- **Original uses Owl Carousel** for testimonials — use lightweight React carousel
- **Service dropdown options in the form are from a different template** (medical) — replace with cleaning services
