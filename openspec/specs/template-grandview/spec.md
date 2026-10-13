# Template: Grandview (Hotel Landing)

## Purpose

Recreation of ColorLib "Sogo Hotel" template.
- **Source slug:** `sogo`
- **Source URL:** https://colorlib.com/wp/template/sogo/
- **Preview URL:** https://preview.colorlib.com/theme/sogo/
- **New name:** `grandview` (apps/grandview, @free-react-templates/grandview)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Category:** Hotel landing page

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand / primary color | `#ffba5a` | Warm gold/amber — used on buttons, stars, accents |
| Body font | `Roboto` | sans-serif, general text |
| Heading font | `Playfair Display` | serif, section headings |
| Button radius | `50px` | Pill-shaped buttons |
| Light section bg | `#f2f4fb` | Very light blue-gray, used on alternating sections |
| Body bg | `#fff` | White |
| Dark text | `#000` | Headings on light backgrounds |
| Body text color | `#6c757d` | Muted gray for paragraphs |
| Dark overlay sections | `rgba(0,0,0,0.45)` | Overlay on hero, restaurant menu, CTA |
| Dark bg (restaurant/footer) | `#1a1a1a` / `#000` | Near-black for restaurant menu, footer |
| Star / accent | `#ffba5a` | Same as primary — 5-star rating icons |

## Section Order (from preview DOM)

1. **Navbar** — Logo "Grandview Hotel" left, nav links right (Home, Rooms, About, Events, Contact, Reservation), hamburger menu on mobile
2. **Hero** — Full-viewport background image with dark overlay, centered text: "Welcome To 5 ★ Hotel", "A Best Place To Stay", scroll-down mouse indicator
3. **Check Availability** — Light bg (#f2f4fb), 4-column form: Check In date, Check Out date, Adults select, Children select, "Check Availability" button
4. **Welcome Section** — Two-column: text left ("Welcome!" heading, paragraph, Learn More button + "See video" link), images right (main image + small overlay food image)
5. **Rooms & Suites** — Section heading + 3-column card grid: Single Room, Family Room, Presidential Room (image + room name + price)
6. **Photo Gallery** — "Photos" heading + image slider/carousel
7. **Restaurant Menu** — Dark overlay section (#1a1a1a), "Our Restaurant Menu" heading, menu items in 3 columns with dish names + prices
8. **Testimonials** — "People Says" heading, testimonial cards (avatar + quote + name)
9. **Events/Blog** — Light bg, "Events" heading, 3-column blog cards (image + title + excerpt)
10. **CTA Reserve** — Dark overlay section, "A Best Place To Stay. Reserve Now!" + "Reserve Now" button
11. **Footer** — Dark bg (#1a1a1a), 4-column: About + Quick Links + Customer Service + Contact Info + Social icons + newsletter form

## Requirements

### Feature: Grandview Hotel Landing Template

#### Scenario: Navbar renders correctly

- **GIVEN** the user visits the Grandview page
- **THEN** the navbar displays the logo "Grandview Hotel"
- **AND** the navbar shows navigation links: Home, Rooms, About, Events, Contact, Reservation
- **AND** the navbar becomes sticky on scroll
- **AND** a hamburger menu toggle appears on mobile viewports

#### Scenario: Hero section displays

- **GIVEN** the hero section is visible
- **THEN** a full-viewport background image is displayed with a dark overlay
- **AND** the text "Welcome To 5" followed by a star icon and "Hotel" is shown
- **AND** the heading "A Best Place To Stay" is centered
- **AND** a scroll-down mouse indicator is present

#### Scenario: Check Availability form

- **GIVEN** the check availability section is visible
- **THEN** a Check In date picker input is displayed
- **AND** a Check Out date picker input is displayed
- **AND** an Adults dropdown (select) is displayed
- **AND** a Children dropdown (select) is displayed
- **AND** a "Check Availability" button is displayed in gold (#ffba5a)
- **WHEN** the user clicks "Check Availability" with empty fields
- **THEN** the form does not submit (client-side validation)

#### Scenario: Welcome section renders

- **GIVEN** the welcome section is visible
- **THEN** the heading "Welcome!" is displayed
- **AND** a descriptive paragraph is shown
- **AND** a "Learn More" button in gold is shown
- **AND** a "See video" link is shown
- **AND** two images are displayed (main image + small overlay image)

#### Scenario: Rooms & Suites section

- **GIVEN** the rooms section is visible
- **THEN** the heading "Rooms & Suites" is displayed centered
- **AND** 3 room cards are shown in a responsive grid
- **AND** each card has an image, room name, and price
- **AND** the room names are: Single Room, Family Room, Presidential Room

#### Scenario: Photo gallery section

- **GIVEN** the photo gallery section is visible
- **THEN** the heading "Photos" is displayed
- **AND** an image carousel/slider is present
- **AND** users can navigate between photos

#### Scenario: Restaurant menu section

- **GIVEN** the restaurant menu section is visible
- **THEN** the heading "Our Restaurant Menu" is displayed in white
- **AND** menu items are organized in columns with dish names
- **AND** the section has a dark overlay background
- **AND** dish items include: Murgh Tikka Masala, Fish Moilee, Safed Gosht, etc

#### Scenario: Testimonials section

- **GIVEN** the testimonials section is visible
- **THEN** the heading "People Says" is displayed
- **AND** testimonial cards show avatar, quote, and reviewer name
- **AND** testimonials cycle or display in a grid

#### Scenario: Events section

- **GIVEN** the events section is visible
- **THEN** the heading "Events" is displayed
- **AND** 3 blog/event cards are shown in a responsive grid
- **AND** each card has an image, title, and excerpt text

#### Scenario: CTA Reserve section

- **GIVEN** the CTA section is visible
- **THEN** a dark overlay background is displayed
- **AND** the text "A Best Place To Stay. Reserve Now!" is shown in white
- **AND** a "Reserve Now" button is displayed

#### Scenario: Footer renders

- **GIVEN** the footer is visible
- **THEN** contact information is displayed
- **AND** social media links are present
- **AND** quick links navigation is shown
- **AND** a newsletter signup form is present
- **AND** a "Made with Component Dock" link to https://www.componentdock.com/ is present

#### Scenario: Responsive design

- **GIVEN** the user views the page on mobile (viewport < 768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** room cards stack vertically
- **AND** the welcome section stacks vertically
- **AND** blog cards stack vertically
- **AND** the check availability form fields stack

#### Scenario: Design tokens applied

- **GIVEN** the page loads
- **THEN** the primary color #ffba5a is used for buttons and accents
- **AND** headings use Playfair Display font
- **AND** body text uses Roboto font
- **AND** buttons have pill shape (border-radius: 50px)
- **AND** alternating sections use #f2f4fb light blue-gray background

## Verification Checklist

- [ ] Navbar: sticky, logo, links, hamburger on mobile
- [ ] Hero: full-screen bg, dark overlay, centered text, star icon, mouse scroll indicator
- [ ] Check Availability: 4 fields, gold button, form layout
- [ ] Welcome: 2-column, heading, text, Learn More button, images
- [ ] Rooms: 3-column grid, image + name + price per card
- [ ] Photo gallery: carousel/slider with navigation
- [ ] Restaurant: dark overlay, menu items in columns
- [ ] Testimonials: avatar + quote + name cards
- [ ] Events: 3-column blog cards with image + title + excerpt
- [ ] CTA: dark overlay, heading, Reserve Now button
- [ ] Footer: 4-column, contact, social, newsletter, Component Dock link
- [ ] Design tokens: #ffba5a primary, Playfair Display headings, Roboto body, pill buttons
- [ ] Responsive: all sections adapt to mobile
- [ ] Accessibility: semantic HTML, aria labels, focus rings
