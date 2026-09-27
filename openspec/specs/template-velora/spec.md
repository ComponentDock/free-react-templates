# Template: Velora (Personal Portfolio)

## Purpose

Velora is a single-page personal portfolio/freelancer template in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Satner" free template (source:
https://colorlib.com/wp/template/satner/ — preview:
https://preview.colorlib.com/theme/satner/), built under a
DIFFERENT name (**Velora**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 personal portfolio for a freelance WordPress
developer ("Rahi Satner") with: transparent navbar, full-width hero with
portrait image and gradient buttons, about section with image + bio,
brand/logo strip with "10 Years Experience" call-to-action card, 4-column
services grid, filterable portfolio grid with hover overlays, testimonial
carousel, newsletter subscription with gradient background, and a simple
footer with social links.

**WHAT MAKES VELORA DISTINCT (signature traits):**

1. **Blue-to-purple gradient brand identity.** The primary gradient
   `linear-gradient(90deg, #4458dc 0%, #854fee 100%)` appears on all CTA
   buttons, text accents, and hover states. This blue→purple pair is the
   template's visual fingerprint.
2. **Two CTA button styles.** Solid gradient button (`primary_btn`) with
   5px radius and gradient fill, and a transparent/outline variant
   (`primary_btn tr-bg`) with white background + gradient border that
   inverts to gradient fill on hover.
3. **"10 Years Experience" client info card.** A prominent card with large
   "10" number + "Years Experience Working" text + phone number, positioned
   to the right of the brand logos strip.
4. **Filterable portfolio grid.** 4-column portfolio with category filters
   (all / popular / latest / following / upcoming), overlay hover with
   cross icon, and image-to-title captions.
5. **Purple-tinted footer.** Light purple `#fcf8ff` background with
   centered logo, "Follow Me" heading, and social icons (Facebook, Twitter,
   Dribbble, Behance) that turn purple on hover.

## Design Tokens

Captured from the original CSS (`css/style.css`):

- **Brand gradient:** `linear-gradient(90deg, #4458dc 0%, #854fee 100%)`
- **Primary blue:** `#4458dc` (links, hover states, active filters)
- **Primary purple:** `#854fee` (gradient end, footer social hover, accent)
- **Body font:** `"Roboto", sans-serif` — body text, paragraphs
- **Heading font:** `"Rubik", sans-serif` — headings, buttons
- **Body text color:** `#777777`
- **Heading color:** `#000000` (black)
- **Button border-radius:** `5px`
- **Button gradient:** `linear-gradient(to right, #4458dc 0%, #854fee 100%)`
- **Transparent button:** white bg + gradient border, text `#222222`
- **Footer background:** `#fcf8ff` (very light purple tint)
- **Newsletter background:** gradient/image overlay (subscribe-bg.png)
- **Yellow accent:** `#f1cd09` (used sparingly in testimonials area)
- **Body background:** `url(body-bg.png)` — light textured background
- **Section spacing:** `section_gap` class (generous vertical padding)

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent sticky navbar with a logo image
left-aligned and navigation links right-aligned (Home, About, Services,
Portfolio, Contact). The navbar SHALL have a mobile hamburger toggle that
expands to a vertical menu on small screens. The active link SHALL be
highlighted.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the logo linking to #home
- **AND** it SHALL show links to Home, About, Services, Portfolio, Contact
- **AND** the Home link SHALL be active/highlighted

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small viewport
- **WHEN** the hamburger toggle is pressed
- **THEN** the mobile menu SHALL become visible
- **AND** the toggle SHALL report `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu

### Requirement: Hero banner

The system SHALL render a full-width hero section with a split layout:
left side contains greeting text ("Hello"), large name heading, subtitle
("Senior WordPress Developer"), and two CTA buttons ("Hire Me" solid +
"Get CV" transparent); right side contains a portrait/illustration image.
The hero SHALL use the brand gradient on buttons.

#### Scenario: Hero content rendering

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** it SHALL show a greeting "Hello" heading
- **AND** it SHALL show a name heading (e.g. "I am [Name]")
- **AND** it SHALL show a subtitle/tagline
- **AND** it SHALL render a "Hire Me" primary gradient button
- **AND** it SHALL render a "Get CV" transparent/outline button
- **AND** it SHALL display a portrait image on the right side

#### Scenario: Hero button gradient

- **GIVEN** the hero is rendered
- **WHEN** the "Hire Me" button is viewed
- **THEN** it SHALL have a blue-to-purple gradient background
- **AND** it SHALL have white text
- **AND** it SHALL have 5px border-radius

### Requirement: About section

The system SHALL render an about section with a left-aligned image and
right-aligned content including a heading ("let's Introduce about myself"),
two paragraphs of bio text, and a "Download CV" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show an image on the left side
- **AND** it SHALL show a heading "let's Introduce about myself"
- **AND** it SHALL show two bio paragraphs
- **AND** it SHALL render a "Download CV" button

### Requirement: Brand logos strip

The system SHALL render a brand logos section with a 3×3 grid of client
brand logos (placeholder images) and a "10 Years Experience" client info
card to the right showing the number "10", "Years Experience Working"
text, and a phone number with icon.

#### Scenario: Brand logos display

- **GIVEN** the page is rendered
- **WHEN** the brand logos section is displayed
- **THEN** it SHALL show 9 placeholder brand logos in a grid
- **AND** it SHALL show a "10 Years Experience Working" card

#### Scenario: Client info card

- **GIVEN** the brand section is rendered
- **WHEN** the client info card is viewed
- **THEN** it SHALL display a large number "10"
- **AND** it SHALL display "Years Experience Working" text
- **AND** it SHALL display a phone number with phone icon

### Requirement: Services/features section

The system SHALL render a services section with a centered heading
("service offers"), subtitle paragraph, and a 4-column grid of feature
cards. Each card SHALL have a service icon (placeholder image), a title,
and a description paragraph.

#### Scenario: Services grid

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show a centered heading "service offers"
- **AND** it SHALL show a subtitle paragraph
- **AND** it SHALL render 4 service cards in a row
- **AND** each card SHALL have an icon, title, and description

### Requirement: Portfolio section

The system SHALL render a filterable portfolio section with category
filter buttons (All, Popular, Latest, Following, Upcoming) and a grid
of portfolio items. Each item SHALL have an image, overlay on hover with
a cross icon, a title, and category tags. The active filter SHALL
visually indicate which filter is selected (blue text for active).

#### Scenario: Portfolio filters

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show filter buttons: All, Popular, Latest, Following, Upcoming
- **AND** "All" SHALL be the default active filter
- **AND** clicking a filter SHALL update the active state

#### Scenario: Portfolio items

- **GIVEN** the portfolio section is rendered
- **WHEN** portfolio items are displayed
- **THEN** each item SHALL have an image with overlay
- **AND** each item SHALL have a title and category tags
- **AND** hovering SHALL reveal a cross/expand icon

### Requirement: Testimonials section

The system SHALL render a testimonials section with a centered heading
("client say about me"), subtitle paragraph, and a carousel/slider of
testimonial items. Each testimonial SHALL show an avatar image on the
left and a name + quote text on the right.

#### Scenario: Testimonial display

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a centered heading "client say about me"
- **AND** it SHALL show a subtitle paragraph
- **AND** it SHALL render testimonial items with avatar, name, and quote
- **AND** testimonials SHALL be displayed as a carousel/slider

### Requirement: Newsletter section

The system SHALL render a newsletter/subscription section with a gradient
background, centered white heading ("get update from anywhere"), subtitle,
and an email input field with "Get Started" submit button.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show a heading "get update from anywhere"
- **AND** it SHALL show a subtitle paragraph
- **AND** it SHALL render an email input field
- **AND** it SHALL render a "Get Started" submit button

### Requirement: Footer

The system SHALL render a footer with a light purple (`#fcf8ff`)
background, centered logo, "Follow Me" heading, and social media icon
links (Facebook, Twitter, Dribbble, Behance). The footer SHALL include
a copyright notice and a link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a logo image
- **AND** it SHALL show "Follow Me" heading
- **AND** it SHALL show social media icon links
- **AND** it SHALL show a copyright notice
- **AND** it SHALL link to https://www.componentdock.com/

#### Scenario: Footer social hover

- **GIVEN** the footer is rendered
- **WHEN** a social icon is hovered
- **THEN** the icon background SHALL change to purple (#854fee)
- **AND** the icon SHALL turn white

## Verification Checklist

- [ ] Transparent sticky navbar with logo + links + mobile toggle
- [ ] Hero banner: split layout, gradient buttons, portrait image
- [ ] About section: image + heading + bio + Download CV button
- [ ] Brand logos: 3×3 grid + "10 Years Experience" card
- [ ] Services: 4-column grid with icon + title + description cards
- [ ] Portfolio: filterable grid with hover overlays
- [ ] Testimonials: carousel with avatar + name + quote
- [ ] Newsletter: gradient background + email form + CTA button
- [ ] Footer: light purple bg, logo, social icons, copyright, Component Dock link
- [ ] All buttons use blue-to-purple gradient (#4458dc → #854fee)
- [ ] Responsive layout (mobile-friendly at all breakpoints)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
