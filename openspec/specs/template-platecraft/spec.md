# Template: Platecraft (Restaurant / Dining)

> Recreation of ColorLib "Meal" — https://colorlib.com/wp/template/meal/
> Preview: https://preview.colorlib.com/theme/meal/

## Purpose

A single-page restaurant template with a full-screen hero, food showcase grid,
about section, chef profiles, tabbed menu, services, reservation form, customer
reviews carousel, contact form, and embedded map. Elegant serif + sans-serif
typography with a coral accent on a clean white/light-gray palette.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict).
Tests: Vitest + Testing Library, 100% line/function/branch/statement coverage.

## Design Tokens (extracted from preview CSS)

| Token            | Value                          | Notes                                 |
| ---------------- | ------------------------------ | ------------------------------------- |
| Brand accent     | `#ff7a5c` (coral)              | CTA buttons, loader, subheadings       |
| Primary text     | `#000` (black)                 | Headings, body                         |
| Secondary text   | `#999999`                      | Muted / sub-headings                   |
| Light bg         | `#f8f9fa` (bg-light)           | Reservation section, menu tab bg       |
| White bg         | `#fff`                         | About, chefs, customer reviews         |
| Dark bg          | `#121212`                      | Footer background                      |
| Font — headings  | `"Playfair Display", serif`    | All h2/h3 headings                     |
| Font — body      | `"Open Sans", sans-serif`      | Body text, nav, buttons                |
| Button outline   | 2px solid border, no radius    | `btn-outline-white` on hero, rounded=0 |
| Button primary   | `#ff7a5c` bg, white text, 2px  | `btn-outline-primary`, no radius       |
| Link / Learn More| `btn-link` style — text only   | Coral text + arrow icon                |
| Section heading  | `font-size: 50px` (desktop)    | `section-heading h2`                   |
| Sub-heading      | `font-size: 20px`, `#999`      | Descriptive paragraph under headings   |

## Section Structure (in page order)

| #  | Section                  | ID / class               | Background      | Description                                             |
|----|--------------------------|--------------------------|-----------------|---------------------------------------------------------|
| 1  | Side Navigation          | `#ftco-navbar-spy`       | Fixed, white    | Vertical side nav: Home, About, Menu, Reservation, Contact. Sticky on scroll, collapses to hamburger on mobile. |
| 2  | Header / Logo            | `.site-header`           | Transparent     | Centered logo "P" (bordered square), burger menu on right. Fixed on scroll. |
| 3  | Hero                     | `#section-home`          | Full-width bg   | Full-viewport parallax background image. Centered "Welcome to Platecraft" heading (Playfair, white). "Reserve A Table" white-outline CTA button. |
| 4  | Food Showcase Grid       | unnamed `.section`       | White           | Heading: "Find your best food" + sub-heading. 2-row staggered grid (ftco-46 layout): image-text-image on row 1, text-image-text on row 2. Each text card: coral sub-heading, uppercase title, description, "Learn More →" link. 3 food items total. |
| 5  | About / The Restaurant   | `#section-about`         | White           | Centered heading "The Restaurant" + two paragraphs of descriptive copy. Max-width 8-col. |
| 6  | Full-width Image         | `.section.bg-white`      | White           | Decorative full-width food photography image (parallax/stellar). |
| 7  | Meet The Chefs           | unnamed `.section`       | White           | Heading "Meet The Chefs". 2 chef cards (6-col each): circular portrait photo, name, title, bio text, social icons (Facebook, Twitter, Instagram). |
| 8  | Menu (Tabbed)            | `#section-menu`          | Light gray      | Heading "Menu" + sub-heading. 3 tabs: Breakfast, Brunch, Dinner. Each tab: 4 menu items. Each item: food image, dish name, description, price (bold right-aligned). |
| 9  | Other Services           | unnamed `.section`       | White           | Heading "Other Services" + sub-heading. 6 service cards in 3×2 grid. Each: circular icon (flaticon), title, description. Services: Quality Cuisine, Fresh Food, Bread & Pancake, Reserve Now, Fresh Vegies Salad, (6th not fully visible). |
| 10 | Reservation              | `#section-reservation`   | Light gray      | Heading "Reservation" + sub-heading. Form in 10-col card: Name, Email, Phone (3-col row 1), Number of Persons (dropdown), Date, Time (3-col row 2). "Reserve Now" coral button. |
| 11 | Customer Reviews         | unnamed `.section`       | White           | Heading "Customer Reviews". Owl Carousel with 4 testimonial slides: quote text, circular author photo, name, title. |
| 12 | Contact                  | `#section-contact`       | White           | Heading "Get In Touch". Form in 10-col card: Name, Email, Phone (3-col row 1), Message textarea (12-col row 2). "Send Message" coral button. |
| 13 | Map                      | `.map-wrap`              | N/A             | Embedded Google Map. |
| 14 | Footer                   | `.ftco-footer`           | Dark (#121212)  | 3-column: (1) About text + Read More button, (2) Lunch & Dinner service hours, (3) Social icons + Newsletter email form. Bottom: copyright line. |

## Gherkin Requirements

### Scenario: Hero section renders correctly
- **Given** the user loads the page
- **When** the hero section is visible
- **Then** a full-viewport background image is displayed
- **And** a centered heading "Welcome to Platecraft" in Playfair Display serif font is shown
- **And** a "Reserve A Table" button with white outline border is displayed
- **And** clicking the button scrolls to the reservation section

### Scenario: Side navigation scrolls to sections
- **Given** the page is loaded
- **When** the user clicks a nav link (Home, About, Menu, Reservation, Contact)
- **Then** the page smooth-scrolls to the corresponding section

### Scenario: Side navigation becomes fixed on scroll
- **Given** the user scrolls past the hero
- **When** the page is scrolled down
- **Then** the header/logo bar becomes sticky with a white background
- **And** the logo remains visible and clickable

### Scenario: Food showcase grid displays items
- **Given** the user views the "Find your best food" section
- **When** the section is visible
- **Then** 3 food items are displayed in a staggered image-text layout
- **And** each item shows a category label in coral uppercase text
- **And** each item shows a dish name, description, and "Learn More" link

### Scenario: About section displays restaurant description
- **Given** the user scrolls to the "The Restaurant" section
- **When** the section is visible
- **Then** a heading "The Restaurant" and descriptive paragraphs are displayed
- **And** the text is centered in a max-width container

### Scenario: Chef profiles are displayed
- **Given** the user scrolls to "Meet The Chefs"
- **When** the section is visible
- **Then** 2 chef cards are shown side by side (6-col each)
- **And** each card shows a portrait photo, name, title, bio, and social icons

### Scenario: Menu tabs switch content
- **Given** the user is on the Menu section
- **When** the "Breakfast" tab is active
- **Then** 4 breakfast menu items are displayed (image, name, description, price)
- **When** the user clicks "Brunch" tab
- **Then** 4 brunch menu items replace the breakfast items
- **When** the user clicks "Dinner" tab
- **Then** 4 dinner menu items replace the brunch items

### Scenario: Services section shows feature cards
- **Given** the user scrolls to "Other Services"
- **When** the section is visible
- **Then** 6 service cards are displayed in a 3×2 grid
- **And** each card has a circular icon, title, and description

### Scenario: Reservation form accepts input
- **Given** the user scrolls to the Reservation section
- **When** the user fills in Name, Email, Phone, selects Persons, Date, and Time
- **And** clicks "Reserve Now"
- **Then** the form validates required fields before submission

### Scenario: Customer reviews carousel cycles
- **Given** the user scrolls to "Customer Reviews"
- **When** the carousel is visible
- **Then** a testimonial quote with author photo, name, and title is displayed
- **And** the user can navigate between 4 testimonial slides

### Scenario: Contact form accepts input
- **Given** the user scrolls to "Get In Touch"
- **When** the user fills in Name, Email, Phone, and Message
- **And** clicks "Send Message"
- **Then** the form validates required fields before submission

### Scenario: Footer displays restaurant info
- **Given** the user scrolls to the footer
- **When** the footer is visible
- **Then** it shows 3 columns: About text with Read More button, service hours, social links + newsletter form
- **And** a copyright line with Component Dock attribution is displayed

### Scenario: Map embed loads
- **Given** the user scrolls to the map section
- **When** the section is visible
- **Then** a Google Maps embed is displayed

## Verification Checklist

- [ ] Hero: full-viewport bg image, "Welcome to Platecraft" heading (Playfair Display), "Reserve A Table" outline button
- [ ] Side nav: 5 links scroll to correct sections, sticky on scroll, hamburger on mobile
- [ ] Header logo: bordered square, centered, sticky on scroll
- [ ] Food showcase: staggered grid, 3 items, coral category labels, "Learn More" links
- [ ] About: centered text, max-width container
- [ ] Full-width image: decorative parallax photo
- [ ] Chefs: 2 cards, circular photos, names, titles, bios, social icons
- [ ] Menu: 3 tabs (Breakfast/Brunch/Dinner), 4 items each with image/name/description/price
- [ ] Services: 6 cards in 3×2 grid, icons, titles, descriptions
- [ ] Reservation form: 6 fields (Name, Email, Phone, Persons dropdown, Date, Time), "Reserve Now" button
- [ ] Customer reviews: carousel with 4 testimonials, author photos
- [ ] Contact form: 4 fields (Name, Email, Phone, Message), "Send Message" button
- [ ] Map: Google Maps embed
- [ ] Footer: 3 columns, dark background, Component Dock link
- [ ] Typography: Playfair Display for headings, Open Sans for body
- [ ] Colors: coral accent (#ff7a5c), white/light-gray backgrounds, dark footer
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines, functions, branches, statements)
