# Template: Carvery (Restaurant / Steakhouse)

## Purpose

Recreation of ColorLib **Steak** template.
Preview: https://preview.colorlib.com/theme/steak/
Source: https://colorlib.com/wp/template/steak/
Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

Single-page restaurant website with parallax hero, tabbed menu, reservation
form, and testimonials. Dark overlay aesthetic with amber accent.

## Design Tokens

| Token          | Value                    | Notes                                    |
| -------------- | ------------------------ | ---------------------------------------- |
| Font family    | Playfair Display, serif  | Google Fonts; fallback: arial, sans-serif |
| Brand color    | #fba83b (amber)          | Primary, links, prices, active tabs      |
| Brand hover    | #e58405 / #fa9716       | Darker amber on hover                    |
| Body text      | #999999                  | Paragraphs, lead text                    |
| Headings       | #000000                  | All headings, display text               |
| Background     | #ffffff                  | Body and most sections                   |
| Light bg       | #f8f9fa (bg-light)       | Services section, counters, testimonials |
| Button radius  | 0px (sharp/square)       | All buttons, no border-radius            |
| Button style   | uppercase, letter-spacing 0.1em | Text-transform on all buttons    |
| Button black   | bg #000, text #fff, border 2px solid #000 | Primary CTA style         |
| Button white   | bg #fff, text #000, border 2px solid #fff | Hero outline style         |
| Button outline | transparent bg, colored border, fill on hover | All outline variants |
| Form input     | border-radius 0, height 50px, border-bottom style | Reservation form inputs |
| Service icon   | #d6dadd (light gray)     | Icon color in services grid              |
| Service title  | #fba83b (amber)          | H3 in service cards                      |
| Menu price     | #fba83b (text-primary)   | Price display in menu items              |
| Tab nav        | border 2px solid #ccc, active = border 2px solid #000, no fill | Menu category tabs |
| Section padding| 7em 0                    | Consistent vertical rhythm               |
| Dark overlay   | #313137 at opacity 0.4   | Hero parallax overlay                    |
| Footer heading | uppercase, #cccccc       | Widget headings in footer                |
| Footer bg      | #ffffff                  | White footer with light text             |

## Section Structure (order from live preview)

1. **Header** — Transparent navbar, logo "Carvery" left, hamburger toggle right.
   On scroll: fixed white bg with shadow, black logo text.
2. **Hero (Parallax)** — Full-viewport parallax background image with dark
   overlay (#313137 @ 0.4). Centered heading "Welcome To Carvery — Food &
   Restaurant" in white. White outline "Play Video" button. Mouse scroll
   indicator at bottom.
3. **About** — Full-width section. Left side: parallax food image (offset
   vertically). Right side: overlay text block with heading "Welcome To
   Carvery Food & Restaurant", two paragraphs, black outline "Read More" button.
4. **Services (bg-light)** — Heading "Restaurant Services" + lead text.
   3×2 grid of service cards, each with large icon (flaticon-style), amber
   title, gray description. Items: Noodles & Spaghetti, Big Hamburger,
   Chicken Leg, Vegetarian Food, Fried Chicken, Beef Steak & Rib.
5. **Menu** — Heading "Our Menu" + lead text. Three pill-style tabs
   (Breakfast / Lunch / Dinner) with border styling. Two-column layout of
   menu items, each with circular thumbnail, dish name, description, and
   amber price. Six items per tab (3 per column × 2 columns).
6. **Fun Facts (bg-light)** — Heading "Today's Fun Facts". Counter/statistics
   section with large numbers and labels (e.g. number of dishes, clients,
   staff, years).
7. **News & Events** — Heading "News & Events". Blog/event card grid with
   thumbnail images, hover overlay effects, titles, and post metadata.
8. **Testimonials (bg-light)** — Blockquote-style testimonials with large
   quotation marks, review text, circular author photo, author name, and
   position/title. Rotating/carousel display.
9. **Reservation** — Heading "Reserve A Table" + lead text. Two-part layout:
   - Left: dark (#000) opening hours panel with white text, phone number.
   - Right: Reservation form with 3-column row (Party Size select, Date,
     Time) + 3-column row (Name, Phone, Email) + full-width black
     "Reserve Now" submit button. All inputs use bottom-border style.
10. **Map** — Full-width Google Maps embed (placeholder in React).
11. **Footer** — 4-column layout:
    - Col 1: "About Carvery Restaurant" widget with description + "About Us" button
    - Col 2: Quick Links (Home, Menu, Gallery, Reservation)
    - Col 3: Support (FAQ, Contact Us, Call Us)
    - Col 4: About Us (About Us, Careers, Terms of Service, Privacy Policy)
    - Col 5 (within col 4 row): Connect With Us — social icons (Facebook, Twitter, Instagram, YouTube)
    - Bottom: Copyright line with Component Dock link

## Requirements

### Feature: Carvery Restaurant Template

#### Scenario: Header displays logo and navigation

- **GIVEN** the user loads the page
- **THEN** the header shows the "Carvery" logo on the left
- **AND** a hamburger menu toggle is visible on the right
- **AND** the navbar is transparent over the hero

#### Scenario: Header becomes fixed on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the header becomes fixed at the top
- **AND** the background changes to white with a subtle shadow
- **AND** the logo text changes to black

#### Scenario: Hero section renders parallax background

- **GIVEN** the user views the hero section
- **THEN** a full-viewport parallax background image is displayed
- **AND** a dark overlay covers the image
- **AND** the heading "Welcome To Carvery — Food & Restaurant" is centered in white
- **AND** a white outline "Play Video" button is visible
- **AND** a mouse scroll indicator appears at the bottom

#### Scenario: About section shows image and text

- **GIVEN** the user scrolls to the about section
- **THEN** a food image is displayed on the left with parallax offset
- **AND** a text block overlays the right side
- **AND** the heading reads "Welcome To Carvery Food & Restaurant"
- **AND** two descriptive paragraphs are shown
- **AND** a black outline "Read More" button is present

#### Scenario: Services section displays 6 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** the section has a light gray background
- **AND** the heading reads "Restaurant Services"
- **AND** 6 service cards are displayed in a 3-column grid
- **AND** each card has an icon, amber title, and gray description

#### Scenario: Menu section shows tabbed navigation

- **GIVEN** the user scrolls to the menu section
- **THEN** the heading reads "Our Menu"
- **AND** three tabs are visible: Breakfast, Lunch, Dinner
- **AND** the Breakfast tab is active by default
- **AND** each tab shows 6 menu items in a 2-column layout
- **AND** each menu item has a circular thumbnail, name, description, and amber price

#### Scenario: Menu tab switching works correctly

- **GIVEN** the Breakfast tab is active
- **WHEN** the user clicks the "Lunch" tab
- **THEN** the Lunch tab becomes active with black border
- **AND** the Breakfast tab reverts to gray border
- **AND** the lunch menu items are displayed

#### Scenario: Fun Facts section shows statistics

- **GIVEN** the user scrolls to the fun facts section
- **THEN** the section has a light gray background
- **AND** the heading reads "Today's Fun Facts"
- **AND** counter statistics are displayed with large numbers

#### Scenario: News & Events section shows blog cards

- **GIVEN** the user scrolls to the news section
- **THEN** the heading reads "News & Events"
- **AND** event/blog cards are displayed with thumbnail images
- **AND** cards have hover overlay effects

#### Scenario: Testimonials section shows reviews

- **GIVEN** the user scrolls to the testimonials section
- **THEN** the section has a light gray background
- **AND** blockquote-style testimonials are displayed
- **AND** each testimonial has a large quotation mark, review text, author photo, name, and position

#### Scenario: Reservation form is functional

- **GIVEN** the user scrolls to the reservation section
- **THEN** the heading reads "Reserve A Table"
- **AND** an opening hours panel is displayed on the left with dark background
- **AND** the reservation form is on the right
- **AND** the form has fields for Party Size, Date, Time, Name, Phone, Email
- **AND** a full-width black "Reserve Now" button is present

#### Scenario: Footer displays all widgets

- **GIVEN** the user scrolls to the footer
- **THEN** 4 widget columns are displayed
- **AND** the first column has "About Carvery Restaurant" with description and button
- **AND** Quick Links, Support, About Us, and Connect With Us columns are present
- **AND** social media icons are shown (Facebook, Twitter, Instagram, YouTube)
- **AND** the copyright line links to Component Dock

#### Scenario: All buttons use sharp square style

- **GIVEN** any button is rendered on the page
- **THEN** the button has no border-radius (sharp corners)
- **AND** the text is uppercase with letter-spacing
- **AND** hover transitions are smooth (0.3s ease)

#### Scenario: Responsive layout adapts to mobile

- **GIVEN** the user views on a mobile viewport
- **THEN** the hamburger menu is visible
- **AND** service cards stack vertically
- **AND** menu items display in a single column
- **AND** the reservation form fields stack vertically
- **AND** the footer columns stack vertically

## Verification Checklist

- [ ] Playfair Display font loaded via Google Fonts
- [ ] Brand color #fba83b used for links, prices, active tabs, service titles
- [ ] All buttons have border-radius: 0, uppercase text, letter-spacing
- [ ] Hero parallax with dark overlay (#313137 @ 0.4)
- [ ] Header transitions from transparent to white fixed on scroll
- [ ] About section with parallax image and text overlay
- [ ] Services: 3×2 grid with icons on light background
- [ ] Menu: 3 tab categories, 2-column items, circular thumbnails, amber prices
- [ ] Tab switching works for Breakfast / Lunch / Dinner
- [ ] Fun Facts counter section on light background
- [ ] News & Events with hover overlay cards
- [ ] Testimonials with blockquote style and author info
- [ ] Reservation: dark hours panel + form with bottom-border inputs
- [ ] Footer: 4-column layout with social icons and Component Dock link
- [ ] Placeholder images via picsum.photos/seed/carvery-*
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
