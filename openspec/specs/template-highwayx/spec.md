# Template: Highwayx (Car Rental)

## Purpose

Recreation of ColorLib "Autoroad" — a car rental and vehicle booking website.
- **Source:** https://colorlib.com/wp/template/autoroad/
- **Preview:** https://preview.colorlib.com/theme/autoroad/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| Font family | "Poppins", Arial, sans-serif | Google Fonts, geometric sans-serif |
| Brand accent | #fd7e14 | Orange — CTAs, active nav, section headings, brand name highlight |
| Bootstrap primary | #007bff | Blue — base Bootstrap primary (overridden by orange for brand) |
| Dark bg navbar | #1a1a1a | Navigation bar |
| Dark bg footer | #16181b / #1d2124 | Footer background |
| Body text | #212529 / #333 | Headings / body |
| Muted text | #6c757d / #666666 | Descriptions |
| Light bg | #f8f9fa | Alternating sections |
| White bg | #ffffff | Default, booking form card |
| Button radius | 0.25rem | Bootstrap default (4px); hero CTA uses rounded style |
| Section spacing | ~80px vertical | ftco-section padding |

## Section Structure (order from live preview)

1. **Navbar** (white bg or transparent over hero): brand "AUTO" dark + "ROAD" orange, nav links (Home active in orange, About, Pricing, Our Car, Blog, Contact)
2. **Hero** (full-width bg image — desert/off-road truck, golden hour): left side — "Now It's easy for you rent a car" heading (white), description text, play button with "Easy steps for renting a car"; right side — white booking form card with shadow (pick-up/drop-off location, dates, time, "Search Vehicle" orange CTA)
3. **Secondary Search/Filter** (white bg): 4 dropdowns (Select Model, Select Brand, Year Model, Price Limit) + orange Search button
4. **Services** ("Our Services" orange heading): 4 service cards — 24/7 Car Support, Lots of Location, Reservation, Rental Cars — with icons
5. **Choose Your Car** ("Choose Your Car" heading): car card grid with images, names, prices
6. **How It Works** ("How it works" heading): 4 step cards — Pick Destination, Select Term, Choose A Car, Enjoy The Ride
7. **Testimonials** ("Happy Clients" heading): owl-carousel with client quotes, names, avatars
8. **Car Selection** ("Choose A Perfect Car" heading): additional car showcase section with bg image
9. **Blog** ("Recent Blog" heading): blog cards with images, dates, titles
10. **Footer** (dark #16181b bg): 4 widgets — About Autoroad, Information, Customer Support, Have a Questions?; social icons, copyright with "Component Dock" link

## Gherkin Requirements

### Scenario: Navbar renders with brand and navigation
- GIVEN the user visits the page
- WHEN the navbar loads
- THEN the brand name shows "AUTO" in dark and "ROAD" in orange
- AND nav links include Home (active, orange), About, Pricing, Our Car, Blog, Contact

### Scenario: Hero displays booking form
- GIVEN the user views the hero section
- WHEN the page loads
- THEN a full-width background image shows an off-road vehicle in desert landscape
- AND a white booking form card overlays the right side with shadow
- AND the form has pick-up/drop-off location inputs, date pickers, time picker
- AND a "Search Vehicle" orange CTA button is displayed

### Scenario: Secondary search filter provides advanced filtering
- GIVEN the user scrolls past the hero
- WHEN the filter section is visible
- THEN 4 dropdown fields appear (Model, Brand, Year, Price)
- AND an orange Search button triggers the filtered search

### Scenario: Services section shows service items
- GIVEN the user scrolls to the services section
- WHEN the section is visible
- THEN "Our Services" orange heading appears
- AND 4 service cards display (24/7 Car Support, Lots of Location, Reservation, Rental Cars)
- AND each card has an icon, title, and description

### Scenario: Choose Your Car section displays vehicles
- GIVEN the user scrolls to the car selection section
- WHEN the section is visible
- THEN "Choose Your Car" heading appears
- AND a grid of car cards shows vehicle images, names, and prices

### Scenario: How It Works explains the rental process
- GIVEN the user scrolls to the how-it-works section
- WHEN the section is visible
- THEN "How it works" heading appears
- AND 4 step cards are shown: Pick Destination, Select Term, Choose A Car, Enjoy The Ride

### Scenario: Testimonials carousel shows client feedback
- GIVEN the user scrolls to the testimonials section
- WHEN the section is visible
- THEN "Happy Clients" heading appears
- AND a carousel displays client quotes with names and avatars

### Scenario: Blog section shows recent posts
- GIVEN the user scrolls to the blog section
- WHEN the section is visible
- THEN "Recent Blog" heading appears
- AND blog cards show images, dates, titles, and excerpts

### Scenario: Footer renders with widgets
- GIVEN the user scrolls to the footer
- WHEN the footer loads
- THEN a dark background section shows About, Information, Customer Support, and Questions widgets
- AND social icons appear in the copyright bar
- AND a "Component Dock" link is present

### Scenario: Responsive layout adapts on mobile
- GIVEN the user views on mobile (width < 768px)
- WHEN the page renders
- THEN the navbar collapses to a hamburger menu
- AND the booking form stacks below the hero text
- AND car grids stack to single-column

## Verification Checklist

- [ ] Spec matches preview DOM section order (1:1)
- [ ] Orange accent #fd7e14 used for CTAs, active nav, section headings
- [ ] Font "Poppins" loaded via Google Fonts
- [ ] Brand shows "AUTO" dark + "ROAD" orange split
- [ ] Hero with bg image, white booking form card, shadow
- [ ] Booking form has location, date, time fields + orange CTA
- [ ] Secondary filter section with 4 dropdowns
- [ ] Services section with 4 service cards and icons
- [ ] Choose Your Car car card grid
- [ ] How It Works 4-step section
- [ ] Testimonials carousel
- [ ] Blog cards section
- [ ] Dark footer with 4 widgets and copyright
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
