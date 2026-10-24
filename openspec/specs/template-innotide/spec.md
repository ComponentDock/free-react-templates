# Template: InnoTide (Creative Agency / Design Portfolio)

## Purpose

Recreation of the ColorLib "Innova" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `innova`
- **ColorLib page:** https://colorlib.com/wp/template/innova/
- **Live preview:** https://preview.colorlib.com/theme/innova/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/innova-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#6f42c1` (purple) | Buttons, links, accents, hero text highlight |
| Primary hover | `#59339d` / `#4e2d89` (darker purple) | Link hover, focus states |
| Text primary | `#000000` (black) | Headings |
| Text secondary | `#6c757d` (Bootstrap gray) | Body text, captions |
| Background white | `#ffffff` | Main content background |
| Background light | `#f8f9fa` (Bootstrap light) | Testimonials section (`bg-light`) |
| Background dark | `#343a40` (Bootstrap dark) | Navbar on mobile |
| Font family (body) | `"Roboto Mono", monospace` | Monospace feel for body, loaded via Google Fonts |
| Font family (headings) | `"Abril Fatface", serif` | Decorative serif headings (h1, h2, h3) |
| Button style | `.btn-outline-black` | 2px solid black, uppercase, bold, square corners (radius 0) |
| Button style (CTA) | `.btn-outline-white` | 2px solid white on purple bg, square corners |
| Border radius | `0` (square/sharp) | All buttons, form controls |
| Hero | Full-width background image, dark overlay (opacity 0.3), centered white text, 7rem heading |
| Section spacing | `7em 0` vertical padding | `.section` class |
| Navbar | Transparent absolute overlay on hero, white text, uppercase links |

## Section structure (from live preview DOM)

1. **Navbar** — transparent, absolute position over hero, white text/links, hamburger menu on mobile (bg-dark on mobile breakpoint)
2. **Hero** — full-viewport slider with background image, dark overlay, large heading ("We are innova we create great stuff."), dot indicators
3. **Services** — 4-column grid: Email Design, Web Design, Mobile Design, Research; each with simple-line-icons icon, title, short blurb; white background
4. **Portfolio ("Selected Work")** — 2×2 grid of work items with image + hover overlay (project name + category); white background
5. **Testimonials ("Happy Client")** — light gray bg, carousel of testimonial cards with avatar, name, company, and blockquote
6. **About ("Creative We Grow")** — split layout: left = dotted-bg image, right = image + "About US" label + heading + paragraphs + "Learn More" button (btn-outline-black)
7. **CTA Banner ("Get Started")** — purple bg-primary, white text heading + description + "Get In Touch!" button (btn-outline-white)
8. **Footer** — white bg, 3 columns: About Us text, Navigation links, Social icons (Twitter, Facebook, LinkedIn, Instagram)

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Transparent sticky navbar

- **GIVEN** the user is on the page
- **THEN** a transparent navbar is visible over the hero
- **AND** the brand name "InnoTide" is displayed in Abril Fatface font
- **AND** the nav links are visible on the right side

#### Scenario: Navbar becomes opaque on mobile

- **GIVEN** the viewport is narrow (< 992px)
- **THEN** the navbar background changes to dark (#343a40)
- **AND** a hamburger toggle icon is visible

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrow (< 992px)
- **WHEN** the user taps the hamburger icon
- **THEN** the mobile navigation menu slides open

### Hero

Feature: Hero Section

#### Scenario: Hero displays on load

- **GIVEN** the user is on the page
- **THEN** a full-viewport hero section with a background image is visible
- **AND** the heading reads "We Are InnoTide We Create Great Stuff."
- **AND** a dark overlay covers the hero image
- **AND** dot indicators are visible at the bottom center

#### Scenario: Heading text has purple highlight

- **GIVEN** the hero section is visible
- **THEN** the heading words have a purple (#6f42c1) highlight/background behind them

### Services

Feature: Services Section

#### Scenario: Four service cards displayed

- **GIVEN** the user scrolls to the services section
- **THEN** four service cards are displayed in a row
- **AND** each card has an icon, title, and short description
- **AND** the icons are displayed in the primary purple color (#6f42c1)

#### Scenario: Service card content

- **GIVEN** the services section is visible
- **THEN** the cards show: Email Design, Web Design, Mobile Design, Research
- **AND** each card description contains placeholder text

### Portfolio

Feature: Portfolio Section

#### Scenario: Portfolio grid displayed

- **GIVEN** the user scrolls to the portfolio section
- **THEN** a "Selected Work" heading is visible
- **AND** four portfolio items are displayed in a 2×2 grid
- **AND** each item shows an image with a category label

#### Scenario: Portfolio hover effect

- **GIVEN** the portfolio items are visible
- **WHEN** the user hovers over a portfolio item
- **THEN** the project name and category are revealed over a dark overlay

### Testimonials

Feature: Testimonials Section

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a "Happy Client" heading is visible
- **AND** a carousel of testimonial cards is displayed
- **AND** each card shows an avatar, person name, company, and a quote

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is visible
- **WHEN** the user navigates to the next slide
- **THEN** a different testimonial card is displayed

### About

Feature: About Section

#### Scenario: About section layout

- **GIVEN** the user scrolls to the about section
- **THEN** a split layout is displayed
- **AND** the left side shows a large image with a dotted background decoration
- **AND** the right side shows an "About US" label, "Creative We Grow" heading, and descriptive text
- **AND** a "Learn More" button (btn-outline-black) is displayed

#### Scenario: About section button

- **GIVEN** the about section is visible
- **WHEN** the user clicks the "Learn More" button
- **THEN** the button responds with a hover state (black fill, white text)

### CTA Banner

Feature: CTA Banner

#### Scenario: Purple CTA banner

- **GIVEN** the user scrolls to the CTA section
- **THEN** a purple (#6f42c1) background banner is visible
- **AND** a "Get Started" heading in white is displayed
- **AND** a "Get In Touch!" button (btn-outline-white) is centered below

### Footer

Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a white background
- **AND** an "About Us" column with descriptive text is on the left
- **AND** a "Navigation" column with links (About, Services, Portfolio, Contact) is in the middle
- **AND** social media icons (Twitter, Facebook, LinkedIn, Instagram) are on the right
- **AND** a "Made with Component Dock" attribution link is present

#### Scenario: Footer links

- **GIVEN** the footer is visible
- **WHEN** the user hovers over a navigation link
- **THEN** the link is underlined

## Verification checklist

- [ ] Navbar is transparent over hero, opaque on mobile
- [ ] Hero has full-viewport background image with dark overlay
- [ ] Hero heading uses Abril Fatface font, purple highlight on keywords
- [ ] Services section shows 4 cards in a grid with purple icons
- [ ] Portfolio section shows 2×2 grid with hover overlay effect
- [ ] Testimonials carousel slides through cards
- [ ] About section has split layout with dotted background decoration
- [ ] CTA banner uses purple background with white text and outline button
- [ ] Footer has 3 columns + Component Dock attribution
- [ ] All buttons are square-cornered (radius 0), uppercase, bold
- [ ] Body font is Roboto Mono; headings are Abril Fatface
- [ ] Brand color #6f42c1 used consistently across accents
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Public/CNAME set to innotide.free.componentdock.com
