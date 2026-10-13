# Template: Pendulum (Ecommerce)

## Purpose

Pendulum is an ecommerce smartwatch product landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Watch" website template design
(source: https://colorlib.com/wp/template/watch/), built under a DIFFERENT
name (Pendulum — evokes timekeeping mechanics) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

New name **pendulum** is a single lowercase word, kebab-case, differs from
the ColorLib source slug (`watch`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/`.

## Design reference (replication findings)

- **Original:** ColorLib "Watch" — an ecommerce smartwatch product landing
  page with navbar, hero banner, video/about split, feature cards with
  central image, about section, services grid, product showcase on dark bg,
  reviews, FAQ accordion, and footer with newsletter + social links.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/watch/`
  (reachable; DOM fetched — navbar, 9 content sections, footer).
- **Source slug:** `watch`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/watch-free-template.jpg`
  (dark hero with product image, blue accent tones, clean modern layout)
- **Stack of the source:** Bootstrap 4 + jQuery + Font Awesome + Linearicons
  + custom CSS. Recreation uses the monorepo stack + lucide-react icons +
  picsum.photos placeholders + Google Fonts Poppins.

### Section order (1:1, confirmed from preview DOM)

1. **Navbar** — logo + nav links: Home, About, Service, Unique Feature, Review, FAQ (sticky, transparent overlay on hero)
2. **Hero/Banner** — dark background image, headline "Smart New Future", subtitle "Now you can feel the Heat", "Buy Now" CTA button (gradient blue→cyan, pill shape)
3. **Video/About split** — left: text with "Brand new app to blow your mind", description, "Get Started now" CTA; right: video embed with play button overlay
4. **Top Courses/Features** — title "Top Courses That are open for Students", 4 feature cards (2 left, 2 right) with Linearicons icons + title + description, central product image
5. **Home About** — split layout: product image left, text right ("We've made a life that will change you"), description, "Get Started now" CTA
6. **Services** — title "Some Features that Made us Unique", 6 service cards in 3×2 grid with Linearicons: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews
7. **Unique Features/Products** — dark navy bg, 4 product cards with image + "Apple Watch" name + price £399 + "Pre Order" gradient button
8. **Reviews** — title "Some Features that Made us Unique", 3 reviewer cards with name, text, star ratings (3-star pattern)
9. **FAQ** — title "Frequently Asked Questions", accordion with 4 items (expand/collapse)
10. **Footer** — dark navy bg, 3 columns: About Us text, Newsletter email form, Social links (Facebook, Twitter, Dribbble, Behance); Component Dock attribution

## Design tokens (from preview stylesheet `css/main.css`)

- **Brand color:** `#235ee7` (blue) — primary CTAs, links, icon accents
- **Accent gradient:** `linear-gradient(0deg, #235ee7, #4ae7fa)` — buttons, social hover, card header
- **Dark background:** `#04091e` — unique-feature-area, footer
- **Section alt background:** `#f9f9ff` (light lavender) — top-course-area, single-service cards
- **Body text:** `#777777`; headings: `#222222`
- **Font:** Poppins (weights 300, 400, 500, 600, 700) via Google Fonts
- **Button (primary-btn):** pill shape (border-radius 25px), gradient bg, white text, padding 0 30px left / 60px right, height 36px line
- **Service cards:** background #f9f9ff, padding 30px, border-radius 10px, hover shadow `rgba(35,94,231,0.2)`
- **Product cards:** white bg, image + title + price + CTA button
- **Section spacing:** 120px vertical padding (`.section-gap`)
- **FAQ header:** gradient bg (same blue→cyan), white text
- **Selection color:** `#235ee7` bg, white text
- **Video overlay:** dark semi-transparent overlay

## Requirements

### Feature: Page composition

#### Scenario: Full page renders all sections

- **GIVEN** the user visits the Pendulum page
- **THEN** the page shall display sections in order: Navbar, Hero, Video/About, Features, Home About, Services, Products, Reviews, FAQ, Footer
- **AND** the font family shall be Poppins
- **AND** all section headings shall be dark (#222222) on light backgrounds

### Feature: Navbar

#### Scenario: Navbar displays logo and navigation

- **GIVEN** the page loads
- **THEN** a sticky navbar shall be visible at the top
- **AND** the navbar shall show "Pendulum" as the logo text
- **AND** navigation links shall include: Home, About, Features, Products, Reviews, FAQ
- **AND** clicking a nav link shall scroll to the corresponding section

#### Scenario: Navbar is responsive

- **GIVEN** the viewport is mobile width (< 768px)
- **THEN** the nav links shall collapse into a hamburger menu
- **AND** tapping the hamburger shall reveal the navigation links

### Feature: Hero/Banner

#### Scenario: Hero displays headline and CTA

- **GIVEN** the user views the hero section
- **THEN** a background image shall be displayed (dark, watch-themed)
- **AND** the headline "Smart New Future" shall appear
- **AND** a subtitle "Now you can feel the Heat" shall appear above the headline
- **AND** a "Buy Now" CTA button shall be visible with gradient blue-to-cyan bg and pill shape (border-radius 25px)

#### Scenario: Hero is full-height

- **GIVEN** the user views on desktop
- **THEN** the hero section shall fill the viewport height

### Feature: Video/About split

#### Scenario: About section shows video and text

- **GIVEN** the user scrolls to the About section
- **THEN** a split layout shall appear (text left, video right on desktop)
- **AND** the left side shall have heading "Brand new app to blow your mind"
- **AND** a description paragraph shall be present
- **AND** a "Get Started now" CTA button shall be visible
- **AND** the right side shall show a video play button overlay

### Feature: Features grid

#### Scenario: Features section displays cards around product image

- **GIVEN** the user scrolls to the Features section
- **THEN** the section background shall be light lavender (#f9f9ff)
- **AND** a heading "Top Courses That are open for Students" shall appear
- **AND** 4 feature cards shall be displayed (2 left, 2 right of a central image)
- **AND** each card shall have an icon, title, and description
- **AND** a central product image shall be displayed between the card columns

### Feature: Home About section

#### Scenario: Home About shows split layout

- **GIVEN** the user scrolls to the Home About section
- **THEN** a split layout shall appear (image left, text right)
- **AND** the text side shall have heading "We've made a life that will change you"
- **AND** a description paragraph shall be present
- **AND** a "Get Started now" CTA button shall be visible

### Feature: Services

#### Scenario: Services displays 6 service cards

- **GIVEN** the user scrolls to the Services section
- **THEN** a heading "Some Features that Made us Unique" shall appear
- **AND** 6 service cards shall be displayed in a 3×2 grid
- **AND** each card shall have a lavender background (#f9f9ff), rounded corners (10px), icon, title, and description
- **AND** the 6 services shall be: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews
- **AND** hovering a card shall show a blue shadow (`rgba(35,94,231,0.2)`)

### Feature: Products/Unique Features

#### Scenario: Products section displays on dark background

- **GIVEN** the user scrolls to the Products section
- **THEN** the section background shall be dark navy (#04091e)
- **AND** a heading "Some Features that Made us Unique" shall appear in white
- **AND** 4 product cards shall be displayed in a row
- **AND** each card shall have an image, product name, price (£399), and "Pre Order" button
- **AND** the "Pre Order" button shall have gradient blue-to-cyan background and white text

### Feature: Reviews

#### Scenario: Reviews displays reviewer cards

- **GIVEN** the user scrolls to the Reviews section
- **THEN** 3 reviewer cards shall be displayed
- **AND** each card shall have a name, review text, and star rating
- **AND** star ratings shall use filled/unfilled star icons

### Feature: FAQ accordion

#### Scenario: FAQ displays expandable items

- **GIVEN** the user scrolls to the FAQ section
- **THEN** 4 FAQ items shall be displayed in an accordion
- **AND** each item shall have a question header and collapsible answer body
- **AND** clicking a question shall toggle the answer visibility
- **AND** only one answer shall be expanded at a time
- **AND** the accordion headers shall have gradient blue-to-cyan background

### Feature: Footer

#### Scenario: Footer displays with newsletter and social

- **GIVEN** the user views the footer
- **THEN** the footer background shall be dark navy (#04091e)
- **AND** an "About Us" column with description text shall be present
- **AND** a "Newsletter" column with email input and submit button shall be present
- **AND** a "Follow Us" column with social icons (Facebook, Twitter, Dribbble, Behance) shall be present
- **AND** the footer shall include a "Component Dock" link pointing to https://www.componentdock.com/

### Feature: Responsive design

#### Scenario: Layout adapts to mobile

- **GIVEN** the viewport is mobile width (< 768px)
- **THEN** all multi-column layouts shall stack to single column
- **AND** the navbar shall collapse to a hamburger menu
- **AND** product cards shall display in a single column
- **AND** service cards shall display in a single column
- **AND** the hero shall remain full-width with readable text

## Verification checklist

- [ ] `apps/pendulum` exists; package `@free-react-templates/pendulum`
- [ ] `public/CNAME` = `pendulum.free.componentdock.com`
- [ ] `homepage` = `https://pendulum.free.componentdock.com`
- [ ] No `colorlib.com` strings in `apps/pendulum` (comments included)
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] All 10 sections present in correct order
- [ ] Brand color #235ee7 used for CTAs and accents
- [ ] Gradient buttons with pill shape (border-radius 25px)
- [ ] Poppins font loaded via Google Fonts
- [ ] Dark navy (#04091e) for Products and Footer sections
- [ ] Light lavender (#f9f9ff) for Features and Services backgrounds
- [ ] 100% coverage via Vitest + Testing Library
- [ ] `scripts/verify-app.sh pendulum` passes
