# Spec: GymBox

## Purpose

GymBox is a free React fitness and gym landing page template. It recreates the ColorLib "Gym2" design with a sticky header, hero banner, category cards, feature highlights, a promotional offer section, pricing plans, a photo gallery, team/trainer profiles, a call-to-action section, and a footer with newsletter signup. Built with React 19, Tailwind CSS 4, and TypeScript.

## Origin

- **Source:** ColorLib Gym2 — https://colorlib.com/wp/template/gym2/
- **Recreation name:** GymBox (different from the source name per project rules)

## Design Tokens

### Fonts

| Token            | Family          | Usage                                   |
| ---------------- | --------------- | --------------------------------------- |
| `--font-heading` | **Paytone One** | Headlines, hero text, section titles    |
| `--font-body`    | **Montserrat**  | Body copy, navigation, buttons, UI text |
| `--font-display` | **Teko**        | Secondary display text, labels, stats   |

### Colors

| Token                | Value     | Usage                                   |
| -------------------- | --------- | --------------------------------------- |
| `--color-primary`    | `#FF1414` | Primary red — CTAs, accents, highlights |
| `--color-navy`       | `#001D38` | Dark navy — backgrounds, footer, header |
| `--color-white`      | `#FFFFFF` | Light backgrounds, card surfaces        |
| `--color-text`       | `#333333` | Default body text                       |
| `--color-text-light` | `#666666` | Secondary/muted text                    |

### Buttons

The template uses a **boxed-btn3** button style: rectangular with no border-radius, solid background fill, uppercase text, and a hover color shift. Primary variant uses `#FF1414` background with white text; secondary variant uses outlined/transparent styling.

## Requirements

### Requirement: Page renders all sections in order

The template SHALL display all sections in the following order: Header, Hero, Categories, Features, Offer, Pricing, Gallery, Team, Cta, Footer.

#### Scenario: All sections visible on load

- **WHEN** the user visits the GymBox template
- **THEN** all 10 sections are rendered in the page
- **AND** the page title is "GymBox — Fitness & Gym Landing Template"

#### Scenario: Section order is correct

- **WHEN** the user views the rendered page
- **THEN** Header appears first (top of page)
- **AND** Hero appears after Header
- **AND** Categories appears after Hero
- **AND** Features appears after Categories
- **AND** Offer appears after Features
- **AND** Pricing appears after Offer
- **AND** Gallery appears after Pricing
- **AND** Team appears after Gallery
- **AND** Cta appears after Team
- **AND** Footer appears last (bottom of page)

### Requirement: Header navigation

The header SHALL be sticky with a logo, horizontal navigation links, and a "Join Us" call-to-action button.

#### Scenario: Desktop navigation links

- **WHEN** the user views the page on desktop
- **THEN** the nav contains links for Home, Categories, Features, Offer, Pricing, Gallery, Team, and Contact
- **AND** a "Join Us" button is visible in the header

#### Scenario: Mobile hamburger toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation becomes visible
- **AND** the button `aria-expanded` attribute toggles to true

### Requirement: Hero section

The hero section SHALL display a headline, subtitle, and primary call-to-action button.

#### Scenario: Hero content renders

- **WHEN** the user views the hero section
- **THEN** a headline is visible (e.g., "Get In Shape With GymBox")
- **AND** a subtitle/description is visible below the headline
- **AND** a CTA button is visible

#### Scenario: Hero CTA button link

- **WHEN** the user clicks the hero CTA button
- **THEN** the page scrolls to the pricing or relevant section

### Requirement: Categories section

The categories section SHALL display two category cards: "For Girls" and "For Boys".

#### Scenario: Two category cards render

- **WHEN** the user views the categories section
- **THEN** exactly 2 category cards are displayed
- **AND** one card is labeled "For Girls"
- **AND** one card is labeled "For Boys"

#### Scenario: Each category card has an image and link

- **WHEN** the user views the categories section
- **THEN** each card displays a background image
- **AND** each card has a heading and a link/button

### Requirement: Features section

The features section SHALL display exactly 4 feature cards.

#### Scenario: Four feature cards render

- **WHEN** the user views the features section
- **THEN** exactly 4 feature cards are displayed
- **AND** each card has an icon or image, a title, and a description

### Requirement: Offer section with 50% off promotion

The offer section SHALL display a promotional banner advertising a 50% discount.

#### Scenario: Offer promotion content

- **WHEN** the user views the offer section
- **THEN** the text "50%" is prominently displayed
- **AND** the offer description references a discount or special promotion
- **AND** a CTA button is visible (e.g., "Join Now" or "Claim Offer")

### Requirement: Pricing section

The pricing section SHALL display exactly 3 pricing plan cards.

#### Scenario: Three pricing plans render

- **WHEN** the user views the pricing section
- **THEN** exactly 3 pricing plan cards are displayed
- **AND** each card shows a plan name, price, feature list, and a CTA button

#### Scenario: Pricing plan details

- **WHEN** the user views a pricing plan card
- **THEN** the card includes a heading (plan name)
- **AND** a price amount
- **AND** a list of included features
- **AND** a call-to-action button (e.g., "Join Now")

### Requirement: Gallery section

The gallery section SHALL display exactly 6 images in a grid layout.

#### Scenario: Six gallery images render

- **WHEN** the user views the gallery section
- **THEN** exactly 6 images are displayed
- **AND** each image has an alt attribute for accessibility

### Requirement: Team section

The team section SHALL display exactly 3 trainer profile cards.

#### Scenario: Three trainer cards render

- **WHEN** the user views the team section
- **THEN** exactly 3 trainer cards are displayed
- **AND** each card shows a trainer photo, name, and specialty/role
- **AND** each card has social media icon links

### Requirement: CTA section

The call-to-action section SHALL display a prominent CTA block to encourage sign-up.

#### Scenario: CTA content

- **WHEN** the user views the CTA section
- **THEN** a headline and/or message is visible
- **AND** a CTA button is displayed

### Requirement: Footer

The footer SHALL contain a Component Dock link, a newsletter subscription form, and social media links.

#### Scenario: Footer links to Component Dock

- **WHEN** the user scrolls to the footer
- **THEN** a link to https://www.componentdock.com/ exists
- **AND** the link text is "Component Dock"
- **AND** the link opens in a new tab

#### Scenario: Newsletter form

- **WHEN** the user views the footer
- **THEN** a newsletter form with an email input and a submit button is visible
- **AND** submitting the form clears the email input field

#### Scenario: Social media links

- **WHEN** the user views the footer
- **THEN** social media icon links are present (e.g., Facebook, Twitter, Instagram, LinkedIn)

### Requirement: Accessibility

The template SHALL use semantic HTML and include appropriate ARIA attributes for interactive elements.

#### Scenario: Semantic HTML structure

- **WHEN** the page is rendered
- **THEN** the page uses `<header>`, `<main>`, `<section>`, `<nav>`, and `<footer>` landmark elements
- **AND** headings follow a logical hierarchy (h1 → h2 → h3)

#### Scenario: ARIA labels on interactive elements

- **WHEN** the page is rendered
- **THEN** the mobile menu toggle has an `aria-label` attribute
- **AND** the newsletter form has an accessible label for the email input
- **AND** social media links have `aria-label` attributes describing their destination
- **AND** all images have `alt` attributes

#### Scenario: Keyboard navigation

- **WHEN** the user navigates the page using only the keyboard
- **THEN** all interactive elements (links, buttons, form inputs) are focusable
- **AND** focus styles are visible
