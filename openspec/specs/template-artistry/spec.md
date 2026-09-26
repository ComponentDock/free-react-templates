# Spec: Artistry

> Recreation of ColorLib "Jony" (https://colorlib.com/wp/template/jony/)
> Preview: https://preview.colorlib.com/theme/jony/

## Purpose

Artistry is a personal portfolio template for creative directors and designers. It features a dark, moody aesthetic with deep brown/burgundy tones and a golden amber accent. The layout includes a sticky header, a full-width hero with portrait and headline, an about section with skill progress bars, services cards, a portfolio gallery grid, a client testimonial carousel, and a dark footer with social links and a call-to-action. The template is designed to showcase creative work with a bold, professional personality.

## Design Tokens

Extracted from the ColorLib Jony preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent | `#DB9A64` | Golden amber — buttons, links, progress bars, section highlights |
| Secondary accent | `#FD8E5E` | Orange — secondary button fill |
| Dark background | `#001D38` | Deep navy — header/nav background |
| Dark section bg | `#311E25` | Dark brown/burgundy — hero, footer, services bg |
| Dark alt bg | `#3B2930` | Slightly lighter brown — testimonials section |
| Text primary | `#1F1F1F` | Dark headings on light bg |
| Text secondary | `#4D4D4D` / `#7e7e7e` | Body text |
| White | `#FFFFFF` | Text on dark backgrounds |
| Error/link | `#F91842` | Red accent (sparingly) |
| Font family | `"Roboto", sans-serif` | All text — body and headings |
| Button radius | `0px` | Sharp-edged outlined buttons |
| Avatar radius | `50%` | Circular testimonial avatars |

### Buttons

- `.boxed-btn3-line`: transparent background, 1px solid `#DB9A64` border, `border-radius: 0`, uppercase text, `#DB9A64` text color
- Hover: background `#DB9A64`, text `#FFFFFF`, border transparent

### Section Backgrounds

- Hero: dark background image (banner.png) with person portrait overlay
- Services: dark background `#311E25`
- Gallery: white background
- Testimonials: `#3B2930` dark brown
- Footer top: `#311E25` with background image (footer_bg.png)
- Footer bottom: `#311E25`

## Requirements

### Requirement: Header

The template SHALL render a sticky header with the "Artistry" brand, 5 navigation links (Home, Works, Services, About, Blog), and a "Let's Talk" border button.

#### Scenario: Brand and navigation visible

- **WHEN** the page loads
- **THEN** the brand "Artistry." is displayed in the header
- **THEN** all 5 navigation links are visible
- **THEN** a "Let's Talk" button is visible in the header

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the navigation links become visible in a dropdown
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL render a full-width hero section with a dark background, a headline greeting, a role subtitle in golden amber, a portrait image on the right, and a "View Works" outlined button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the headline "Hi there, I am Artistry" is displayed
- **THEN** the subtitle "Creative Director" is displayed in golden amber
- **THEN** a portrait image is displayed on the right
- **THEN** a "View Works" outlined button is visible

#### Scenario: Hero layout

- **WHEN** the hero renders on desktop
- **THEN** the headline and button are on the left (approximately 75% width)
- **THEN** the portrait image is on the right

### Requirement: About / Skills Section

The template SHALL render a two-column section with a bold headline, descriptive text and a "Download CV" button on the left, and 3 skill progress bars on the right.

#### Scenario: About content

- **WHEN** the user scrolls to the About section
- **THEN** a bold headline describing the creative director is displayed
- **THEN** descriptive paragraphs are shown on the left
- **THEN** a "Download CV" outlined button is visible

#### Scenario: Skill progress bars

- **WHEN** the About section is visible
- **THEN** 3 progress bars are displayed: Wireframing (90%), UI/UX (70%), Interaction design (45%)
- **THEN** each bar has a label, percentage, and golden amber fill on a gray track

### Requirement: Services Section

The template SHALL render a services section titled "My Services" with 3 service cards displayed in a row, each with an icon, title, and description.

#### Scenario: Services grid

- **WHEN** the user scrolls to the Services section
- **THEN** the section title "My Services" is displayed
- **THEN** 3 service cards are displayed in a row
- **THEN** each card has an icon, a title (Web & Mobile Design, Web Development, E-commerce), and a short description

### Requirement: Gallery Section

The template SHALL render a gallery section titled "My Works" with a 2×2 grid of portfolio items, each with a category tag and project title, and a "More Works" button.

#### Scenario: Gallery grid

- **WHEN** the user scrolls to the Gallery section
- **THEN** the section title "My Works" is displayed
- **THEN** 4 portfolio items are displayed in a 2×2 grid
- **THEN** each item has a category tag (e.g. "Mobile App") and a title
- **THEN** a "More Works" outlined button is centered below the grid

### Requirement: Testimonials Section

The template SHALL render a testimonials section titled "What Clients say" with a carousel of testimonial cards, each showing a quote, author avatar, name, and role.

#### Scenario: Testimonial cards

- **WHEN** the user scrolls to the Testimonials section
- **THEN** the section title "What Clients say" is displayed
- **THEN** testimonial cards are displayed in a carousel
- **THEN** each card shows a quote, a circular avatar image, author name, and role

### Requirement: Footer

The template SHALL render a two-part footer: a dark CTA section with "Do you have any Project? Let's Talk" headline and description text, social links row, and a copyright bar linking to Component Dock.

#### Scenario: Footer CTA and copyright

- **WHEN** the user scrolls to the footer
- **THEN** a dark background CTA section is visible with the headline "Do you have any Project? Let's Talk"
- **THEN** a description paragraph is shown
- **THEN** social links for Behance, Dribbble, Medium, and LinkedIn are displayed
- **THEN** a copyright line links to https://www.componentdock.com/

### Requirement: Mobile Responsiveness

The template SHALL be responsive on mobile devices with stacked layouts.

#### Scenario: Mobile layout

- **WHEN** the user views the page on a mobile device
- **THEN** the header shows a hamburger menu
- **THEN** the hero section stacks vertically
- **THEN** service cards stack in a single column
- **THEN** gallery items stack in a single column
- **THEN** the footer stacks vertically

### Requirement: Design Tokens

The template SHALL use the correct design tokens: brand golden amber #DB9A64, Roboto font, and sharp-edged buttons.

#### Scenario: Token application

- **WHEN** the page renders
- **THEN** the brand golden amber #DB9A64 is used for buttons, links, progress bars, and accents
- **THEN** Roboto is used for all text (body and headings)
- **THEN** buttons have sharp edges (border-radius: 0)

### Requirement: No ColorLib References

The template SHALL NOT contain any references to "ColorLib" in source code, comments, or filenames.

#### Scenario: Clean provenance

- **WHEN** the source code is inspected
- **THEN** no file in apps/artistry/ contains the string "colorlib" (case-insensitive)
