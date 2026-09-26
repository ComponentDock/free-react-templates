# Spec: Stylux

> Recreation of ColorLib "Melan" (https://colorlib.com/wp/template/melan/)
> Preview: https://preview.colorlib.com/theme/melan/
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/melan-free-template.jpg

## Purpose

Stylux is a personal portfolio/creative designer template with a bold, modern aesthetic. It features a sticky header with nav and CTA, a full-width hero with background image and headline, a 3-column services section, a portfolio section with dark banner + image grid with hover overlays, an about-me section with large decorative background text and portrait, a statistics counter row, a testimonial carousel over a dark image with gradient overlay, a project CTA section, and a dark navy footer with nav links, social icons, and Component Dock copyright.

## Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| Font family | Muli (Google Fonts) | `font-family: "Muli", sans-serif` |
| Brand / primary | #615CFD (purple/violet) | Buttons, links, accents, hover states, counter numbers |
| Accent gradient | #615CFD → #d465ef | Social link hover, decorative elements |
| Dark background | #001D38 (navy) | Footer, portfolio banner, discuss section, testimonial overlay |
| Heading color | #001D38 | h1–h5 |
| Body text | #4D4D4D | Paragraphs |
| Body text (alt) | #727272 | About section paragraph |
| Light bg (decorative) | #F5F6F7 | Large "About" decorative text |
| Border color | #E8E8E8 | Counter cards |
| Footer border | #334A60 | Footer top/bottom separator |
| Button radius | 0px (square) | `.boxed-btn3` border-radius: 0 |
| Social icon radius | 50% (circle) | 40×40px circular social buttons |
| Section padding | 120px top/bottom (desktop) | Standard section spacing |
| Hero height | 900px | `.single_slider` height |

## Requirements

### Requirement: Header

The template SHALL render a sticky header with the "Stylux" brand, 5 navigation links (Home, About, Services, Portfolio, Contact), and a "Contact Me" button.

#### Scenario: Brand and navigation visible
- **WHEN** the page loads
- **THEN** the brand "Stylux" is displayed
- **THEN** all 5 navigation links are visible
- **THEN** a "Contact Me" button is visible in the header

#### Scenario: Sticky header on scroll
- **WHEN** the user scrolls down the page
- **THEN** the header becomes sticky with a dark background (#000) and shadow

#### Scenario: Mobile menu toggle
- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the navigation links become visible in a dropdown
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL render a full-width hero section with a background image, centered headline "Hello This is Stylux" and subtitle "Creative Designer", and social links on the right side.

#### Scenario: Hero content
- **WHEN** the page loads
- **THEN** the headline "Hello This is Stylux" is displayed
- **THEN** the subtitle "Creative Designer" is displayed below the headline
- **THEN** social links (Facebook, Twitter, Instagram) are displayed vertically on the right side

#### Scenario: Hero decorative elements
- **WHEN** the hero section renders
- **THEN** a decorative grid pattern is visible on desktop (hidden on mobile)

### Requirement: Services Section

The template SHALL render a services section titled "Service Provided" with subtitle "Build brands campaigns & digital projects" and 3 service cards in a row: Graphic Design, Web Design, Mobile App.

#### Scenario: Services grid
- **WHEN** the user scrolls to the Services section
- **THEN** the section title "Service Provided" is displayed
- **THEN** the subtitle "Build brands campaigns & digital projects" is displayed
- **THEN** 3 service cards are displayed in a 3-column row
- **THEN** each card has an SVG icon, title (Graphic Design / Web Design / Mobile App), and description text

### Requirement: Portfolio Banner

The template SHALL render a dark navy portfolio banner section with white text "Portfolios" and subtitle "Some of my awesome stuffs here", overlaid on a background image with a #001D38 semi-transparent overlay.

#### Scenario: Portfolio banner content
- **WHEN** the user scrolls to the Portfolio section
- **THEN** the subtitle "Portfolios" is displayed
- **THEN** the heading "Some of my awesome stuffs here" is displayed in white

### Requirement: Portfolio Gallery

The template SHALL render a portfolio image grid with 5 portfolio items across 2 rows (row 1: 5-col + 7-col; row 2: 4-col + 4-col + 4-col), each with a hover overlay showing "Product Design", and a "More Folio" line button below.

#### Scenario: Portfolio grid layout
- **WHEN** the user scrolls to the portfolio gallery
- **THEN** 5 portfolio items are displayed in a 2-row grid
- **THEN** each item has a hover overlay with "Product Design" title
- **THEN** a "More Folio" border button is displayed below the grid

#### Scenario: Portfolio hover effect
- **WHEN** the user hovers over a portfolio item
- **THEN** a purple overlay appears with the project title

### Requirement: About Me Section

The template SHALL render a two-column About Me section with a large decorative "About" text in the background, descriptive text and "Download CV" button on the left, and a portrait image with a color grid decoration on the right.

#### Scenario: About Me content
- **WHEN** the user scrolls to the About Me section
- **THEN** a large decorative "About" text (#F5F6F7, 235px) is visible in the background
- **THEN** the heading "About me" is displayed on the left
- **THEN** descriptive text is shown below the heading
- **THEN** a "Download CV" button (purple, square corners) is displayed
- **THEN** a portrait image is displayed on the right

### Requirement: Counter Section

The template SHALL render a statistics counter section with 3 bordered counter cards showing: "520+" Total Projects, "244" On Going Projects, "95%" Job Success.

#### Scenario: Counter display
- **WHEN** the user scrolls to the counter section
- **THEN** 3 counter cards are displayed in a row
- **THEN** the first card shows "520+" with label "Total Projects"
- **THEN** the second card shows "244" with label "On Going Projects"
- **THEN** the third card shows "95%" with label "Job Success"
- **THEN** counter numbers are styled in brand purple (#615CFD), 50px, bold

#### Scenario: Counter hover
- **WHEN** the user hovers over a counter card
- **THEN** the border changes to brand purple (#615CFD)

### Requirement: Testimonials Section

The template SHALL render a testimonial carousel section with a dark background image and gradient overlay (#001D38), featuring testimonial cards with quote icon, text, author avatar, name, and role.

#### Scenario: Testimonial carousel
- **WHEN** the user scrolls to the Testimonials section
- **THEN** a carousel with testimonial cards is displayed
- **THEN** each card shows a quote icon, testimonial text, author thumbnail, name, and role
- **THEN** carousel navigation arrows are present

#### Scenario: Testimonial styling
- **WHEN** the testimonials section renders
- **THEN** the background uses a dark image with a right-to-left gradient overlay fading to #001D38
- **THEN** all text is white on the dark background

### Requirement: Discuss Projects CTA

The template SHALL render a dark navy call-to-action section with "Let's discuss for a project" heading, description text, and a "Start Talking" button.

#### Scenario: CTA content
- **WHEN** the user scrolls to the Discuss section
- **THEN** the heading "Let's discuss for a project" is displayed in white
- **THEN** description text is displayed below
- **THEN** a "Start Talking" button (purple, square corners) is displayed

### Requirement: Footer

The template SHALL render a two-part dark navy footer: top section with nav links and social icons, and a bottom copyright section linking to Component Dock.

#### Scenario: Footer navigation and social
- **WHEN** the user scrolls to the footer
- **THEN** the top section has a dark navy (#001D38) background
- **THEN** navigation links (About, Services, Portfolio) are displayed on the left
- **THEN** social icons (Facebook, Twitter, Instagram, Google Plus) are displayed on the right
- **THEN** a border separator (#334A60) divides top from bottom

#### Scenario: Footer copyright
- **WHEN** the user scrolls to the copyright section
- **THEN** a copyright line is displayed centered
- **THEN** the copyright links to https://www.componentdock.com/

### Requirement: Mobile Responsiveness

The template SHALL be responsive on mobile devices with stacked layouts.

#### Scenario: Mobile layout
- **WHEN** the user views the page on a mobile device
- **THEN** the header shows a hamburger menu
- **THEN** the hero section stacks vertically
- **THEN** service cards stack in a single column
- **THEN** portfolio items stack in a single column
- **THEN** the counter cards stack in a single column
- **THEN** the about section stacks vertically
- **THEN** the footer stacks vertically

### Requirement: Design Tokens Application

The template SHALL use the correct design tokens: brand purple #615CFD, Muli font, and correct border radii.

#### Scenario: Token application
- **WHEN** the page renders
- **THEN** the brand purple #615CFD is used for buttons, links, accents, and counter numbers
- **THEN** Muli (Google Font) is used for all text
- **THEN** buttons have square corners (border-radius: 0)
- **THEN** social icons are circular (border-radius: 50%)

### Requirement: No ColorLib References

The template SHALL NOT contain any references to "ColorLib" in source code, comments, or filenames.

#### Scenario: Clean provenance
- **WHEN** the source code is inspected
- **THEN** no file in apps/stylux/ contains the string "colorlib" (case-insensitive)
