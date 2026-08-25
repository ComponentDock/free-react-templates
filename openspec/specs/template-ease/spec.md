# Template: Ease (Hotel Booking / Hospitality)

## Purpose

Recreation of the ColorLib **Unwind** template — a hotel booking agency single-page website.

- **Source:** https://colorlib.com/wp/template/unwind/
- **Preview:** https://preview.colorlib.com/theme/unwind/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/unwind-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `ease` (apps/ease, @free-react-templates/ease)

## Design tokens

| Token            | Value                                         | Source                                              |
| ---------------- | --------------------------------------------- | --------------------------------------------------- |
| Brand accent     | `#c5a880` (warm gold/brandy)                  | Links, hover states, service icons, heading accents |
| Primary button   | `#0d6efd` (Bootstrap blue)                    | `.btn-primary` (default Bootstrap 5)                |
| Hero overlay     | `#222222` at ~0.5–0.7 opacity                 | `.hero-wrap .overlay`, `.vid-section .overlay`      |
| Dark background  | `#151515`, `#1a1a1a`                          | Footer, dark sections                               |
| Light section bg | `#f8f9fa` (Bootstrap light)                   | `.bg-light` sections                                |
| Body font        | `"Nunito", Arial, sans-serif`                 | Primary body text                                   |
| Heading font     | `"Old Standard TT", Arial, sans-serif`        | Headings, decorative text                           |
| Border radius    | Default Bootstrap (0.375rem buttons)          | Standard Bootstrap 5                                |
| Button style     | Bootstrap `.btn-primary` with rounded corners | Standard Bootstrap 5 button                         |

## Visual design (from screenshot)

Dark, elegant hotel booking template with:

- Full-viewport hero with dark overlay on hotel imagery, white centered text
- Gold/brandy accent color (#c5a880) on links and icons
- Clean white sections with warm photography
- Dark video/parallax section with overlay
- Light gray testimonial and gallery sections
- Footer with dark background, multiple columns (logo, services, quick links, contact)

## Gherkin requirements

### Hero Section

Scenario: Full-viewport hero with booking form
Given the user visits the home page
Then a full-viewport hero section is displayed with a dark overlay background
And the heading reads "Most Relaxing Place"
And a booking form is visible with Check-In, Check-Out, Rooms, and Guests fields
And a "Book Now" submit button is present

### About Section

Scenario: Hotel description with service icons
Given the user scrolls past the hero
Then an about section displays the heading "Unwind A Hotel Booking Agency"
And a descriptive paragraph is shown
And a "Learn More" link is visible

### Services Section

Scenario: Six service cards in a grid
Given the user views the services area
Then six service cards are displayed: Free Wifi, Easy Booking, Restaurant, Swimming Pool, Beauty & Health, Help & Support
And each card has a gold (#c5a880) icon, heading, and description
And cards have a white background with subtle shadow on hover

### Call to Action / Intro Section

Scenario: Parallax banner with vacation heading
Given the user scrolls to the intro section
Then a full-width parallax image section is shown
And the heading reads "Find the Best Hotel in Your Next Vacation"
And a CTA button is present

### Featured Rooms Section

Scenario: Room cards with pricing
Given the user views the featured rooms
Then the heading reads "Featured Rooms"
And room cards are displayed with images, names, and pricing
And a "Take A Tour" button links to more details

### Restaurant & Bar Section

Scenario: Restaurant showcase
Given the user scrolls to the restaurant area
Then the heading reads "Restaurant & Bar"
And a descriptive paragraph is shown
And food/drink imagery is displayed

### Video Section

Scenario: Dark parallax video background
Given the user reaches the video section
Then a dark overlay section with background image is displayed
And the section has a 600px height with parallax effect

### Testimonials Section

Scenario: Guest testimonials
Given the user views the testimonials
Then the heading reads "Happy Guests"
And testimonial cards are displayed with guest names and quotes
And the section has a light gray (#f8f9fa) background

### Counter Section

Scenario: Statistics display
Given the user reaches the counter section
Then numerical counters are displayed (e.g., number of rooms, guests, staff)
And counters animate on scroll into view

### Gallery Section

Scenario: Photo gallery grid
Given the user views the gallery
Then a grid of hotel photos is displayed
And images are responsive with consistent spacing

### Footer

Scenario: Multi-column footer
Given the user reaches the page bottom
Then a dark footer is displayed with the brand name "Ease Hotel Booking"
And columns include: Services, Quick Links, and Have a Questions? (contact form)
And the footer links to https://www.componentdock.com/
