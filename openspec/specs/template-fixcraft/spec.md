# Template: Fixcraft (Auto Repair Services)

## Purpose

Recreation of ColorLib "Autorepair" — an auto repair and car services website.
- **Source:** https://colorlib.com/wp/template/autorepair/
- **Preview:** https://preview.colorlib.com/theme/autorepair/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| Font family | "Poppins", Arial, sans-serif | Google Fonts, geometric sans-serif |
| Brand primary | #007bff | Bootstrap blue — buttons, links, active states |
| Primary hover | #0069d9 | Darker blue on hover |
| Dark bg top bar | #171a1d | Top utility bar |
| Dark bg navbar | #1a1a1a / #202020 | Navigation bar |
| Dark bg footer | #16181b / #171a1d | Footer background |
| Body text | #333333 / #4d4d4d | Headings / body |
| Muted text | #6c757d / #999 | Descriptions |
| Light bg | #f8f9fa | Alternating sections (bg-light) |
| White bg | #ffffff | Default sections |
| Button radius | 0.25rem | Bootstrap default (4px) |
| Button padding | 12px 24px | Bootstrap .btn sizing |
| Section spacing | ~80px vertical | ftco-section padding |

## Section Structure (order from live preview)

1. **Top Bar** (dark #171a1d bg): phone, hours, social icons — left-aligned layout
2. **Navbar** (dark bg, navbar-dark): logo + nav links (Home, About, Services, Pricing, Blog, Contact) + search icon + appointment CTA
3. **Hero Slider** (owl-carousel, full-width bg images + black overlay): 2 slides — "Make your car last longer" + "It's time to come to repair your car" — white Poppins text, CTA buttons
4. **Intro** (white bg, "We care about your car"): icon + text blocks with phone CTA and stats
5. **Services** (white bg): "Our car services" heading, 3-column grid with 6 service cards (Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, Car Maintenance) — flaticon-car-service icons
6. **Counter** (dark bg with bg image): "45+ years serving customer" heading, 4 stat counters (years, projects, staff, happy clients)
7. **Appointment/CTA** (bg image section): "Free Consultation" heading, appointment form (name, date, time, phone, message)
8. **Testimonials** (bg-light): "Happy Clients & Feedbacks" heading, client testimonials
9. **Blog** (white bg): "Latest news from our blog" heading, 3 blog cards (image, date, title, excerpt)
10. **Pricing** (bg-light): "Pricing" heading, pricing cards
11. **Footer** (dark #16181b bg): 4 widgets — Services list, Done Projects, Contact info, Business Hours; social icons, copyright with "Component Dock" link

## Gherkin Requirements

### Scenario: Top bar displays contact information
- GIVEN the user visits the page
- WHEN the top bar renders
- THEN phone number and business hours are displayed on the left
- AND social media icons appear on the right
- AND the bar has a dark background

### Scenario: Navigation bar renders with links
- GIVEN the user views the navbar
- WHEN the page loads
- THEN a dark navigation bar shows the logo
- AND nav links include Home, About, Services, Pricing, Blog, Contact
- AND a search icon and appointment CTA are visible

### Scenario: Hero slider displays automotive imagery
- GIVEN the user views the hero section
- WHEN the page loads
- THEN a full-width slider shows background images with dark overlay
- AND slide 1 displays "Make your car last longer" heading
- AND slide 2 displays "It's time to come to repair your car" heading
- AND each slide has a CTA button

### Scenario: Services section shows service cards
- GIVEN the user scrolls to the services section
- WHEN the section is visible
- THEN "Our car services" heading appears
- AND a 3-column grid shows 6 service cards
- AND each card has an icon, title, and description

### Scenario: Counter section displays statistics
- GIVEN the user scrolls to the counter section
- WHEN the section is visible
- THEN a dark background section shows 4 animated stat counters
- AND counters include years of service, projects, staff count, happy clients

### Scenario: Appointment form collects consultation requests
- GIVEN the user scrolls to the appointment section
- WHEN the section is visible
- THEN "Free Consultation" heading appears over a background image
- AND a form with name, date, time, phone, and message fields is displayed
- AND form fields validate before submission

### Scenario: Testimonials section shows client feedback
- GIVEN the user scrolls to the testimonials section
- WHEN the section is visible
- THEN "Happy Clients & Feedbacks" heading appears
- AND client testimonials with name, role, and quote are displayed

### Scenario: Blog section shows recent posts
- GIVEN the user scrolls to the blog section
- WHEN the section is visible
- THEN "Latest news from our blog" heading appears
- AND 3 blog cards show image, date, title, and excerpt

### Scenario: Pricing section shows pricing tiers
- GIVEN the user scrolls to the pricing section
- WHEN the section is visible
- THEN "Pricing" heading appears
- AND pricing cards with tier names, prices, and feature lists are displayed

### Scenario: Footer renders with widgets
- GIVEN the user scrolls to the footer
- WHEN the footer loads
- THEN a dark background section shows Services, Done Projects, Contact info, Business Hours widgets
- AND social icons appear in the copyright bar
- AND a "Component Dock" link is present

### Scenario: Responsive layout adapts on mobile
- GIVEN the user views on mobile (width < 768px)
- WHEN the page renders
- THEN the navbar collapses to a hamburger menu
- THEN service cards stack to single-column
- AND hero text size reduces

## Verification Checklist

- [ ] Spec matches preview DOM section order (1:1)
- [ ] Brand color #007bff used for primary buttons
- [ ] Font "Poppins" loaded via Google Fonts
- [ ] Button radius 0.25rem (4px)
- [ ] Dark top bar with contact info
- [ ] Dark navbar with logo + nav links + appointment CTA
- [ ] Hero slider with bg images, overlay, headings, CTAs
- [ ] Intro section with "We care about your car"
- [ ] Services grid with 6 service cards and icons
- [ ] Counter section with dark bg and 4 stats
- [ ] Appointment/consultation form section
- [ ] Testimonials section with client feedback
- [ ] Blog cards section
- [ ] Pricing section with tier cards
- [ ] Dark footer with 4 widgets and copyright
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
