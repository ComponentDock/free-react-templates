# Template: GoQuest (Travel & Tour Booking)

## Purpose

Recreation of ColorLib "Gotrip" travel/tour booking template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

- **Source:** [colorlib.com/wp/template/gotrip/](https://colorlib.com/wp/template/gotrip/)
- **Preview:** [preview.colorlib.com/theme/gotrip/](https://preview.colorlib.com/theme/gotrip/)
- **Screenshot:** `![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/gotrip-free-template.jpg)`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `goquest` (apps/goquest, @free-react-templates/goquest)

## Design Tokens (extracted from preview CSS)

| Token         | Value                 | Notes                                 |
| ------------- | --------------------- | ------------------------------------- |
| Brand primary | `#014b85`             | Buttons, nav hover, section accent    |
| Accent yellow | `#fde02f`             | Hero headline fill, CTA search button |
| Accent warm   | `#ffb400` / `#ffa801` | Section labels, stars, footer links   |
| Accent red    | `#e6373d`             | Button hover fill                     |
| Dark navy     | `#0e1c35`             | Header top bar background             |
| Heading text  | `#0b1c39`             | Headings                              |
| Body text     | `#506172`             | Paragraphs                            |
| Nav link      | `#264247`             | Desktop nav links                     |
| Card border   | `#f0f1f2`             | Tour cards, dividers                  |
| Price color   | `#4cafa4`             | Tour price text                       |
| Star color    | `#ffa800`             | Star icons in place cards             |
| Font heading  | `"Barlow Condensed"`  | Headings, nav, buttons                |
| Font body     | `"Roboto"`            | Paragraphs, body copy                 |
| Font display  | `"Satisfy"`           | Hero headline script style            |
| Button radius | `5px`                 | Primary and outline buttons           |

## Requirements

### Requirement: Header with info bar and sticky navigation

The header shall display a dark navy top info bar with email, phone, and address plus social icons. Below that, a sticky white navigation bar with the GoQuest logo on the left and 6 menu links (Home, About, Package, Blog, Pages, Contact) with dropdown submenus for Blog and Pages.

#### Scenario: Top info bar displays contact details

- **WHEN** the user visits GoQuest
- **THEN** the top bar shows email, phone, and address
- **AND** social media icons (Facebook, Twitter, Instagram, YouTube) are visible
- **AND** the top bar has a dark navy background

#### Scenario: Sticky navigation with logo and menu

- **WHEN** the user scrolls the page
- **THEN** the nav bar sticks to the top
- **AND** the logo "GoQuest" is visible on the left
- **AND** 6 menu links are displayed

#### Scenario: Dropdown submenus appear on hover

- **WHEN** the user hovers over Blog or Pages menu items
- **THEN** a dropdown submenu appears with child links

### Requirement: Hero section with search form

The hero section shall display a full-width background image with dark overlay, a yellow script headline "Find your Next tour!", subtitle "Where would you like to go?", and a search form with destination input, date dropdown, and yellow search button.

#### Scenario: Hero shows headline and search form

- **WHEN** the user loads the page
- **THEN** a yellow script headline "Find your Next tour!" is displayed
- **AND** the subtitle "Where would you like to go?" appears in white
- **AND** a search form with input, select, and button is present

### Requirement: Services section with 4 icon cards

The services section shall display 4 service cards in a horizontal grid with icons and headings: "8000+ Our Local Guides", "100% Trusted Tour Agency", "28+ Years of Travel Experience", "98% Our Travelers are Happy".

#### Scenario: Four service cards displayed

- **WHEN** the user scrolls to services
- **THEN** 4 service cards are shown in a row
- **AND** each card has an icon and heading text

### Requirement: Favourite Places with 6 tour cards

The section shall display "FEATURED TOURS Packages" / "Favourite Places" title and 6 tour package cards in a 3-column grid, each with image, star rating, name, price (teal), duration, and location.

#### Scenario: Tour cards show details

- **WHEN** the user scrolls to Favourite Places
- **THEN** 6 tour cards are displayed in a 3-column grid
- **AND** each card shows image, rating, name, price, duration, location

### Requirement: Video area with parallax background

The video section shall display a full-width parallax background with a yellow play button and text overlay "Love where you're going in the perfect time" and "GoQuest is a World Leading Online Tour Booking Platform".

#### Scenario: Video section renders

- **WHEN** the user scrolls to the video section
- **THEN** a yellow play button is centered
- **AND** white text overlay is visible

### Requirement: About company section with image and checklist

The about section shall display a 2-column layout: left side has an image with rotated "Since 1992" badge, right side has heading "About Our Company", paragraph, 4 checked items, and "About us" outline button.

#### Scenario: About section shows image and checklist

- **WHEN** the user scrolls to the about section
- **THEN** a 2-column layout is shown
- **AND** the image has a "Since 1992" badge
- **AND** 4 checked items are displayed

### Requirement: Testimonial section

The testimonial section shall display a background image with a centered carousel containing a quote icon, testimonial text, founder avatar, name, and title.

#### Scenario: Testimonial shows quote and founder

- **WHEN** the user scrolls to testimonials
- **THEN** a quote icon and testimonial text are shown
- **AND** a founder avatar, name, and title are displayed

### Requirement: Blog section with 2 cards

The blog section shall display "Our Recent news" / "Tourist Blog" title and 2 blog cards with image, category tag "Traveling", title, "Read more" link, and floating date badge.

#### Scenario: Blog cards with date badge

- **WHEN** the user scrolls to the blog section
- **THEN** 2 blog cards are displayed
- **AND** each card has image, category, title, and date badge

### Requirement: Footer with Component Dock link

The footer shall display a dark background with 4 columns (logo+about, Quick Links, New Products, Support), bottom bar with copyright and social icons, and links in yellow. Footer MUST link to https://www.componentdock.com/.

#### Scenario: Footer shows links and Component Dock

- **WHEN** the user scrolls to the footer
- **THEN** 4 columns are displayed
- **AND** a link to Component Dock is present
- **AND** social icons are visible in the bottom bar
