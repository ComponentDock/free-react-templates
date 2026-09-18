# Template: EstateHaven (Real Estate Agency)

## Purpose

Recreation of ColorLib's **Hamlet** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/hamlet/
- **Preview:** https://preview.colorlib.com/theme/hamlet/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hamlet-free-template-1.jpg
- **New name:** `estate-haven` (package: `@free-react-templates/estate-haven`)
- **Category:** Real Estate Agency

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| **Primary / Accent** | `#ffdfdf` (light pink/rose) | Details card background, btn-custom underline highlight, overlay accents |
| **Dark** | `#000000` | Navbar, text, btn-black fill, outlines |
| **Dark surface** | `#2f3035` | Search bar background, btn-black hover |
| **Body text** | `#000000` | Body copy, headings |
| **Muted text** | `#6c757d` | Secondary text |
| **Font family** | `Rubik` (Google Fonts, weights 300–700) | Primary typeface |
| **Heading font** | `Playfair Display` (Google Fonts, loaded in head) | Decorative headings (optional, used in some headings) |
| **Border-radius** | `0` (mobile) / `5px` (desktop, details card) | Sharp edges, subtle rounding on large screens |
| **Buttons** | Solid black (`#000000`), outlined black, Bootstrap primary blue (`#007bff`), custom text link with pink underline (`btn-custom`) |
| **Box shadows** | Heavy layered: `73px 73px 78px -70px rgba(0,0,0,0.24)` on cards |
| **Counter overlay** | Background image with dark overlay |
| **Testimony section** | Dark overlay background, white text |
| **Footer** | Dark background (`#2f3035`), white text, white social icons |

## Visual Design Notes (from screenshot + preview DOM)

- **Aesthetic:** Clean, modern real estate agency. Black + white + pink accent palette. Sharp geometric shapes on mobile, subtle rounding on desktop.
- **Hero:** Full-width image carousel with property detail cards overlapping from bottom-right (pink background). Each card shows category tag, property name, location, specs (area, bedrooms, bathrooms, garage), and "View Properties" button.
- **Search bar:** Dark charcoal bar overlapping the hero bottom, with 4-column form (Location, Property Type, Property Status, Price Limit) + Search button.
- **Property cards:** Image with dark overlay on hover, sale badge, property name, price, location, beds/baths info.
- **About section:** Two-column: left image with text overlay, right text + 2x2 service grid with icons.
- **Buy vs Rent:** Two side-by-side full-bleed image cards with text overlays and CTA buttons.
- **Testimonials:** Dark overlay section, horizontal carousel of testimonial cards with circular avatar, quote icon, quote text, name, and role.
- **Blog:** 3-column grid with image thumbnails, date/author/comment meta, and post titles.
- **Counter stats:** Background image with stat blocks (1000 Properties, 351 Happy Clients, 564 Finished Projects, 300 Working Days).
- **Footer:** 5-column layout: brand + social icons, Company links, Explore links, Get Started links, Newsletter signup form. Bottom: copyright + "Made with Component Dock".

## Section Structure (in order)

1. **Navbar** — Dark bg, brand "EstateHaven", nav links (Home, Properties, Agents, Blog, About, Contact), Sign Up CTA button
2. **Hero Slider** — Full-width image carousel, each slide has: background image, overlay, text headline + description, property details card (pink bg) with category, name, location, specs list, "View Properties" button
3. **Property Search** — Dark search bar overlapping hero, form with Location input, Property Type select, Property Status select, Price Limit select, Search button
4. **Recently Added Properties** — Heading + subtitle, horizontal carousel of property cards (image with overlay, sale badge, name, price, location, specs)
5. **About / Services** — Two-column: left background image with text overlay ("We can help you..."), right: heading, paragraph, 2×2 service grid (Find Places, Agents Experience, Buy & Rent, Making Money) with icons, "Learn More" link
6. **Buy vs Rent** — Two side-by-side full-bleed image cards with text overlays: "Buying A Properties" + "Renting A Properties", each with "Read more" CTA
7. **Testimonials** — Dark overlay section, centered heading, horizontal carousel of testimonial cards (avatar, quote icon, quote text, name, role)
8. **Press Releases / Blog** — Heading + subtitle + "Read our blog" link, 3-column blog card grid (image, meta, title)
9. **Counter Stats** — Background image with overlay, 4-column stat blocks (Properties, Happy Clients, Finished Projects, Working Days)
10. **Footer** — 5-column: brand + social icons, Company links, Explore links, Get Started links, Newsletter form, copyright bar

## Gherkin Requirements

### Scenario: Navbar renders with all navigation links
```
Given the user loads the page
Then the navbar displays brand "EstateHaven"
And the navbar contains links: Home, Properties, Agents, Blog, About, Contact
And a "Sign Up" CTA button is visible
```

### Scenario: Hero slider displays property details
```
Given the user views the hero section
Then a property image carousel is displayed
And each slide shows a property name, category, location
And each slide shows specs: Area, Bedrooms, Bathrooms, Garage
And each slide has a "View Properties" button
```

### Scenario: Property search form is functional
```
Given the user views the search bar
Then a Location text input is visible
And a Property Type dropdown shows: Commercial, Office, Residential, Villa, Condominium, Apartment
And a Property Status dropdown shows: Rent, Sale
And a Price Limit dropdown shows price ranges
And a "Search" button is visible
```

### Scenario: Recently Added properties carousel
```
Given the user views the properties section
Then the heading "Recently Added" is displayed
And property cards show image, sale badge, name, price, location, beds/baths
And cards are in a horizontal scrollable carousel
```

### Scenario: About section with services grid
```
Given the user views the about section
Then a heading about finding properties is displayed
And 4 service items are shown in a 2x2 grid: Find Places, Agents Experience, Buy & Rent, Making Money
And each service has an icon and heading
And a "Learn More" link is present
```

### Scenario: Buy vs Rent section
```
Given the user views the buy/rent section
Then two side-by-side image cards are displayed
And the left card shows "Buying A Properties" with "Read more" CTA
And the right card shows "Renting A Properties" with "Read more" CTA
```

### Scenario: Testimonials carousel
```
Given the user views the testimonials section
Then the heading "Our satisfied customer says" is displayed
And testimonial cards show a circular avatar, quote text, name, and role
And cards are in a horizontal carousel
```

### Scenario: Blog / Press Releases section
```
Given the user views the blog section
Then the heading "Press Releases" is displayed
And 3 blog cards show image, date, author, comment count, and post title
And a "Read our blog" link is present
```

### Scenario: Counter stats section
```
Given the user views the counter section
Then 4 stat blocks are displayed
And they show: 1000 Properties, 351 Happy Clients, 564 Finished Projects, 300 Working Days
And numbers animate on scroll
```

### Scenario: Footer with all columns
```
Given the user views the footer
Then the brand name and social icons (Twitter, Facebook, Instagram) are displayed
And Company links are shown: Home, About, Services, FAQ, Reviews, Stories
And Explore links are shown: Privacy, Policy, Terms, Review, Features
And Get Started links are shown: Buy, Rent, Payment, Mortgage, Loan
And a Newsletter signup form with email input and Subscribe button is present
And a copyright bar links to Component Dock
```

## Verification Checklist

- [ ] Navbar: brand, all nav links, Sign Up CTA
- [ ] Hero slider: carousel with property details cards (pink bg, specs)
- [ ] Property search: form with 4 fields + Search button, dark bg
- [ ] Recently Added: heading + property card carousel
- [ ] About: two-column layout, 4 services grid, Learn More link
- [ ] Buy vs Rent: two side-by-side image cards with CTAs
- [ ] Testimonials: dark overlay, carousel with avatar/quote/name/role
- [ ] Blog: heading + 3-column blog cards, Read our blog link
- [ ] Counter: 4 stat blocks with animated numbers
- [ ] Footer: 5-column layout, social icons, newsletter form, copyright
- [ ] Design tokens: Rubik font, #ffdfdf accent, #000000 dark, #2f3035 surface
- [ ] Responsive: mobile-first layout, stacked columns on small screens
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
