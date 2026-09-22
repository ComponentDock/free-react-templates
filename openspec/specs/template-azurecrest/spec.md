# Template: AzureCrest (Hotel / Luxury Resort)

## Purpose

Recreation of ColorLib "The Grand Azure" as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `the-grand-azure`
- **Preview URL:** https://preview.colorlib.com/theme/grandazure/
- **Source page:** https://colorlib.com/wp/template/the-grand-azure/
- **Category:** Hotel / Luxury Resort
- **Original tech:** Astro 7 + Tailwind CSS 4.x

## Design tokens

Extracted from the live preview stylesheet (`Base.CVaHg8hR.css`) and HTML class attributes:

| Token | Value | Usage |
|-------|-------|-------|
| Primary 600 | `#1e40af` | Stat counters, headings, dark accents |
| Primary 700 | `#1e3a8a` | Hover states on primary |
| Primary 400 | `#60a5fa` | Dark mode primary text |
| Accent 500 | `#f59e0b` | CTA buttons, gold accent lines, price badges |
| Accent 600 | `#d97706` | Button hover |
| Accent 400 | `#fbbf24` | Focus rings, light gold accents |
| Body font | Plus Jakarta Sans | All body text |
| Heading font | Playfair Display | h1–h6 headings (serif) |
| Border radius | `.5rem` (lg), `.75rem` (xl), `1rem` (2xl) | Cards, buttons, inputs |
| Card shadow | `0 4px 16px -4px rgba(0,0,0,0.1)` | Default card |
| Card hover shadow | `0 12px 32px -8px rgba(0,0,0,0.14)` | Card hover |
| Hero gradient | `from-primary-900/70 via-primary-900/50 to-primary-900/80` | Hero overlay |
| CTA gradient | `bg-gradient-to-br from-primary-700 to-primary-900` | Bottom CTA section |
| Stats bg | `bg-gray-50` (light) / `bg-gray-900` (dark) | Stats section |
| Dark body bg | `#030712` (gray-950) | Dark mode body |
| Button shadow | `shadow-lg shadow-accent-500/25` | Primary button glow |

## Gherkin requirements

### Scenario: Hero section with booking form
- **Given** the visitor lands on the homepage
- **When** they view the hero
- **Then** a full-viewport hero image with a dark blue gradient overlay is displayed
- **And** a headline "Experience Timeless Luxury" with gold accent text
- **And** a subtitle about the oceanfront resort
- **And** a booking bar with check-in date, check-out date, guests dropdown, and "Book" button
- **And** the booking bar has a frosted glass effect (`bg-primary-900/60 backdrop-blur-md`)
- **And** a scroll-down bounce indicator at the bottom

### Scenario: Stats counter section
- **Given** the visitor scrolls past the hero
- **When** the stats section is visible
- **Then** four stat counters are shown in a 2-column (mobile) / 4-column (desktop) grid
- **And** the counters are: Guests Hosted (10,000+), Luxury Rooms (150+), Guest Rating (4.9), Years of Service (25+)
- **And** the stats section has a gray-50 background with border-y

### Scenario: Rooms & Suites section
- **Given** the visitor scrolls to the Rooms section
- **When** the section is rendered
- **Then** a centered section header with badge "Rooms & Suites", title, and description
- **And** a 3-column grid of room cards
- **And** each card has: room image, price badge (top-right), room name, description, amenity icons (bed, bath, size), and "View Details" link
- **And** cards have rounded-2xl corners and shadow-lg on hover

### Scenario: Amenities section
- **Given** the visitor scrolls to Amenities
- **When** the section renders
- **Then** a 2-column layout (image left, content right)
- **And** the left side shows a resort image with gold corner accents
- **And** the right side has badge "Amenities", title "World-Class Amenities", description
- **And** a 2-column grid of amenity cards with icon, name, and description
- **And** amenities include: Oceanfront Pool, Luxury Spa, Fitness Center, Private Beach, 24/7 Room Service, Concierge

### Scenario: Dining section
- **Given** the visitor scrolls to Dining
- **When** the section renders
- **Then** a 2-column layout (image left, content right)
- **And** the left side shows a restaurant image with gold corner accents
- **And** the right side has badge "Dining", title "Culinary Excellence", description
- **And** a list of restaurant items with icon, name, description, and hours
- **And** restaurants include: The Azure (Fine Dining), Coral Bar (Cocktails), Sunrise Cafe (Breakfast)

### Scenario: Gallery section
- **Given** the visitor scrolls to Gallery
- **When** the section renders
- **Then** a centered section header with badge "Gallery", title "A Glimpse of Paradise", description
- **And** a 3-column (desktop) / 2-column (mobile) grid of images
- **And** each image has a hover overlay with caption text
- **And** images use aspect-[4/3] ratio

### Scenario: Guest Reviews / Testimonials carousel
- **Given** the visitor scrolls to Reviews
- **When** the section renders
- **Then** a centered section header with badge "Guest Reviews", title "What Our Guests Say"
- **And** a carousel of testimonial cards
- **And** each card has: star rating (5 gold stars), quote text, reviewer name, role, avatar initial
- **And** carousel has prev/next arrow buttons and dot indicators

### Scenario: FAQ accordion
- **Given** the visitor scrolls to FAQ
- **When** the section renders
- **Then** a centered section header with badge "FAQ", title "Frequently Asked Questions"
- **And** an accordion list with 5 questions
- **And** each question has a toggle button with +/- icon
- **And** clicking a question expands/collapses the answer

### Scenario: Bottom CTA section
- **Given** the visitor scrolls to the bottom CTA
- **When** the section renders
- **Then** a full-width gradient section (primary-700 to primary-900) with decorative blur circles
- **And** a gold accent line, headline "Make Your Stay Extraordinary", description
- **And** two buttons: "Book Your Stay" (primary accent) and "View Offers" (white outline)

### Scenario: Footer
- **Given** the visitor scrolls to the footer
- **When** the footer renders
- **Then** a dark footer (bg-gray-900) with logo, description, social icons
- **And** contact info: address, phone, email
- **And** three link columns (Quick Links, Explore, Services)
- **And** bottom bar with copyright, Component Dock link, privacy/terms links

### Scenario: Sticky header with scroll behavior
- **Given** the visitor scrolls the page
- **When** the header is visible
- **Then** a sticky header with backdrop-blur-lg
- **And** logo, navigation links (About, Rooms, Amenities, Dining, Gallery, Rates, Blog, Experiences, Contact)
- **And** a dark mode toggle button
- **And** a "Book Now" CTA button
- **And** mobile hamburger menu

### Scenario: Dark mode toggle
- **Given** the visitor clicks the dark mode toggle
- **When** dark mode is activated
- **Then** the page switches to dark backgrounds (gray-950 body, gray-900/gray-800 cards)
- **And** text colors invert (white headings, gray-400 body text)
- **And** the toggle icon switches between sun and moon
- **And** the preference persists (localStorage)

### Scenario: Mobile responsiveness
- **Given** the visitor views on a mobile device
- **When** the page renders
- **Then** the hero booking form stacks vertically
- **And** room cards stack in a single column
- **And** amenities/dining grid collapses to single column
- **And** gallery images stack in 1–2 columns
- **And** a sticky mobile CTA bar appears at the bottom (Call + Book Room)

## Verification checklist

- [ ] Hero section: full-viewport, gradient overlay, booking form with date inputs + guests dropdown
- [ ] Stats section: 4 counters with labels, gray-50 background
- [ ] Rooms section: 3-column card grid, price badges, amenity icons
- [ ] Amenities section: 2-column layout, 6 amenity cards with icons
- [ ] Dining section: 2-column layout, 3 restaurant list items
- [ ] Gallery: image grid with hover captions, 4/3 aspect ratio
- [ ] Testimonials: carousel with star ratings, navigation arrows
- [ ] FAQ: accordion with 5 items, expand/collapse behavior
- [ ] Bottom CTA: gradient background, two action buttons
- [ ] Footer: dark bg, logo, links, contact info, Component Dock link
- [ ] Header: sticky, backdrop blur, nav links, dark mode toggle, Book Now CTA
- [ ] Dark mode: full toggle with localStorage persistence
- [ ] Mobile: responsive layout, sticky mobile CTA bar
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
