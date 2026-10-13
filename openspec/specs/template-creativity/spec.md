# Template: Creativity (Design)

## Purpose

Recreation of ColorLib "Design" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **ColorLib source:** https://colorlib.com/wp/template/design/
- **Preview URL:** https://preview.colorlib.com/theme/design/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/design-free-template.jpg
- **New name:** `creativity` (app: `apps/creativity`, package: `@free-react-templates/creativity`)
- **Surge target:** `creativity.free.componentdock.com`
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Brand blue | `#1264fa` | Primary buttons, links, accents |
| Brand blue hover | `#2671fa` | Button hover state |
| Dark navy text | `#000839` | Headings, body text |
| Secondary text | `rgba(0, 8, 57, 0.5)` | Muted/description text |
| Light background | `#f8f9fa` | Services section bg, social icon bg |
| Hero decoration | `#dae1e7` | Hero background shape pseudo-element |
| White | `#ffffff` | Main background, card bg |
| Black | `#000000` | Footer text, dark accents |
| Font family | `"Montserrat", sans-serif` | All text (weights: 300, 400, 700) |
| Button radius | `30px` (pill shape) | Primary CTA buttons |
| Social icon radius | `10px` | Social media icon tiles |
| Blog card radius | `20px` | Blog entry cards |

## Section Structure (top-to-bottom order)

1. **Navbar** — Logo text "Design" (replaced with "Creativity"), centered navigation links (Home, Dropdown with nested menus, Inner Page, Contact), right-side CTA button ("Free Templates" → "Explore"). Mobile burger menu.
2. **Hero** — Two-column layout: left side has headline "Create, Code, and Published.", descriptive paragraph, "Get Started" CTA button, and two feature cards (High Quality × 2 with icons). Right side has hero image with decorative background shape (`#dae1e7`) and a dark navy quote overlay card with testimonial text and author.
3. **Achievements** — Four stat cards in a row: "99.55% Ratings", "98,000+ Happy Customers", "99.99% Server Uptime", "1M+ Loved by customers". Each has a large number, heading, and description.
4. **How It Works** — Section title "How it works" with description. Three step cards connected by SVG dashed curved arrows: (1) Create an account, (2) Create new orders, (3) Ship and track. Each has an icon, heading, description.
5. **Services** — Two-column: left has "Services" subtitle, heading, description, checklist (3 items with check icons), "Get Started" CTA. Right side has an image with dotted background decoration.
6. **Testimonials** — Carousel of testimonial cards, each with a circular person image, blockquote, author name, and role/title. Light background section.
7. **Blog Entries** — Section title "Blog" / "Latest Blog Posts". Five blog post cards in a row, each with a date, heading link, and description text. Cards have rounded corners.
8. **Footer** — Two-column: left has About text + social media icons (Facebook, Twitter, Instagram, Dribbble, LinkedIn in rounded tiles). Right has three columns of navigation links (Home, Services, Work, Process, About Us / Press, Blog, Contact, Support, Privacy / Privacy, FAQ, Careers, Process, About Us). Bottom copyright line with Component Dock attribution.

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Logo displays template name

- **GIVEN** the page loads
- **THEN** the navbar shows "Creativity" as the logo text

#### Scenario: Navigation links present

- **GIVEN** the page loads
- **THEN** the navbar contains "Home", "Dropdown", "Inner Page", and "Contact" links

#### Scenario: CTA button in navbar

- **GIVEN** the page loads
- **THEN** the navbar right side shows an "Explore" button

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is mobile width
- **THEN** a burger menu icon is visible
- **WHEN** the burger menu is clicked
- **THEN** the mobile navigation menu expands

### Hero

Feature: Hero Section

#### Scenario: Hero headline visible

- **GIVEN** the page loads
- **THEN** the hero displays a headline about creating and coding

#### Scenario: Hero description visible

- **GIVEN** the page loads
- **THEN** the hero displays a descriptive paragraph

#### Scenario: Hero CTA button

- **GIVEN** the page loads
- **THEN** the hero displays a "Get Started" button

#### Scenario: Hero feature cards

- **GIVEN** the page loads
- **THEN** the hero shows two feature cards below the CTA
- **AND** each feature card has an icon, title, and description

#### Scenario: Hero image with quote

- **GIVEN** the page loads
- **THEN** the hero right side shows an image
- **AND** a quote overlay card is visible on the image
- **AND** the quote card shows an author name and role

### Achievements

Feature: Achievements Section

#### Scenario: Four stat cards displayed

- **GIVEN** the achievements section is visible
- **THEN** 4 stat cards are shown in a row
- **AND** each card has a number, heading, and description

#### Scenario: Stat values are prominent

- **GIVEN** the achievements section is visible
- **THEN** each stat card number is displayed in large bold text

### How It Works

Feature: How It Works Section

#### Scenario: Section title

- **GIVEN** the how-it-works section is visible
- **THEN** the section displays "How it works" as the subtitle
- **AND** a description paragraph is shown

#### Scenario: Three step cards

- **GIVEN** the how-it-works section is visible
- **THEN** 3 step cards are shown in a row
- **AND** each step has an icon, numbered heading, and description

#### Scenario: Steps connected by arrows

- **GIVEN** the how-it-works section is visible
- **THEN** dashed curved arrows connect steps 1→2 and 2→3

### Services

Feature: Services Section

#### Scenario: Services content

- **GIVEN** the services section is visible
- **THEN** the left side shows a "Services" subtitle and heading
- **AND** a description paragraph is displayed
- **AND** a checklist of 3 items is shown with check icons

#### Scenario: Services CTA

- **GIVEN** the services section is visible
- **THEN** a "Get Started" button is displayed

#### Scenario: Services image

- **GIVEN** the services section is visible
- **THEN** the right side shows an image with a dotted decoration

### Testimonials

Feature: Testimonials Section

#### Scenario: Testimonial carousel

- **GIVEN** the testimonials section is visible
- **THEN** a carousel of testimonial cards is displayed

#### Scenario: Testimonial card content

- **GIVEN** a testimonial card is in view
- **THEN** it shows a circular person image
- **AND** a blockquote with testimonial text
- **AND** the author name and role

### Blog Entries

Feature: Blog Entries Section

#### Scenario: Blog section title

- **GIVEN** the blog section is visible
- **THEN** "Blog" subtitle and "Latest Blog Posts" heading are displayed

#### Scenario: Blog post cards

- **GIVEN** the blog section is visible
- **THEN** 5 blog post cards are shown in a row
- **AND** each card has a date, heading link, and description

### Footer

Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the footer is visible
- **THEN** it has an About section with description text
- **AND** social media icons are shown (Facebook, Twitter, Instagram, Dribbble, LinkedIn)

#### Scenario: Navigation links

- **GIVEN** the footer is visible
- **THEN** three columns of navigation links are displayed

#### Scenario: Copyright attribution

- **GIVEN** the footer is visible
- **THEN** a copyright line is shown
- **AND** it includes a link to Component Dock

#### Scenario: Footer social icon styling

- **GIVEN** the footer is visible
- **THEN** social icons have rounded square tiles with light background

## Verification Checklist

- [ ] All 8 sections present in correct order
- [ ] Navbar: logo, nav links, CTA, mobile menu
- [ ] Hero: headline, description, CTA, feature cards, image with quote overlay
- [ ] Achievements: 4 stat cards with prominent numbers
- [ ] How It Works: 3 steps with icons, headings, descriptions, connecting arrows
- [ ] Services: left text/checklist/CTA, right image with decoration
- [ ] Testimonials: carousel with circular images, quotes, authors
- [ ] Blog Entries: 5 cards with dates, headings, descriptions
- [ ] Footer: About, social icons, nav links, copyright with Component Dock link
- [ ] Design tokens: Montserrat font, #1264fa blue, #000839 navy, pill buttons, #f8f9fa sections
- [ ] Responsive layout at mobile/tablet/desktop breakpoints
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Tests at 100% coverage
