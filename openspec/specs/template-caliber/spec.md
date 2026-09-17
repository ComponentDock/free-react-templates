# Template: Caliber (App Landing / SaaS)

## Purpose

Caliber is a single-page APP LANDING / SAAS template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "CA App Landing"
free template (source: https://colorlib.com/wp/template/ca-app/), built under a
DIFFERENT name (**Caliber**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source slug:** `ca-app`
- **Source URL:** https://colorlib.com/wp/template/ca-app/
- **Preview URL:** https://preview.colorlib.com/#ca-app (UNREACHABLE at prep time;
  falls back to screenshot analysis)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ca-app-showcase-website-template.jpg
- **New name:** `caliber` (apps/caliber, @free-react-templates/caliber)
- **Deploy target:** https://caliber.free.componentdock.com
- **Category:** App Landing / SaaS / One Page
- **Description (from ColorLib):** "CA is a minimal and modern looking website
  template for Android and iOS mobile app showcase. It might work well for SaaS
  and other technology related landing and sales page websites."

## Design Tokens

Extracted from the screenshot (preview unreachable). Color values are approximated
from visual analysis of the screenshot at 1200×982px.

### Colors

| Token                   | Value              | Usage                                      |
| ----------------------- | ------------------ | ------------------------------------------ |
| `--color-hero-start`    | `#7C3AED`          | Hero gradient start (purple)               |
| `--color-hero-end`      | `#6366F1`          | Hero gradient end (indigo-blue)            |
| `--color-accent`        | `#E91E63`          | CTA button pink/coral                      |
| `--color-accent-hover`  | `#C2185B`          | CTA button hover (darker pink)             |
| `--color-text`          | `#333333`          | Body text                                  |
| `--color-text-muted`    | `#777777`          | Secondary text, descriptions               |
| `--color-bg`            | `#FFFFFF`          | Section backgrounds (white)                |
| `--color-bg-alt`        | `#F8F9FA`          | Alternate section background               |
| `--color-border`        | `#E0E0E0`          | Card borders, dividers                     |
| `--color-nav-text`      | `#FFFFFF`          | Navbar link text (on gradient)             |

**Hero gradient:** `linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #818CF8 100%)`
(The hero has a diagonal purple-to-blue-to-lighter-blue gradient visible in the
screenshot; exact angle and stops are approximate.)

**Wave divider:** The hero's bottom edge is a white SVG wave/curve that
transitions from the gradient to the white features section below.

### Fonts

| Font     | Family                          | Usage                           |
| -------- | ------------------------------- | ------------------------------- |
| Headings | `'Poppins', sans-serif`         | Hero heading, section titles    |
| Body     | `'Poppins', sans-serif`         | Body text (single font family)  |

(From the screenshot the typography appears to be Poppins — a geometric sans-serif
with round counters, consistent with ColorLib's common font choice for app
landing pages. If the actual template uses a different font, the implementer
should adjust.)

### Button Shape

- **CTA "Get Started" button:** rounded-rectangle, `border-radius: 25px` (pill-ish),
  bg `#E91E63` (pink/coral), white text, no border. Hover: darker pink.
- **Nav "Sign Up Free" button:** ghost/outline style, white border on transparent bg,
  white text, `border-radius: 25px`. Hover: white bg, purple text.
- **Email input:** rounded-rectangle, `border-radius: 25px`, white bg, placeholder
  "name@company.com", sits left of the CTA button in a horizontal form group.

## Section Structure (DOM order, from screenshot + nav items)

1. **Navbar** — Transparent/sticky top navbar with "Ca." logo (text), nav links
   (Home, About, Features, Screenshot, Pricing, Testimonials, Team, Contact),
   "Sign Up Free" ghost CTA button.
2. **Hero** — Full-width purple-to-blue gradient background with SVG wave bottom
   edge. Left: headline "Colorlib app" (large white text), subtitle "Everything
   You Need. To Start Selling Online Beautifully" (smaller white/light text),
   email input + "Get Started" pink CTA button. Right: phone mockup image
   showing a dark dashboard with colorful donut/pie chart.
3. **Features** ("Why Is It Special") — White section. Centered heading
   "Why Is It Special" with purple underline accent. 3-column grid of feature
   cards: each has a purple icon, title ("Easy to use", "Powerful Design",
   "Customizability"), and description text. Cards have light border/shadow.
4. **About** — (inferred from nav) Section describing the app/product.
5. **Screenshots** — (inferred from nav) App screenshot showcase, possibly
   carousel or grid of phone/device mockups.
6. **Pricing** — (inferred from nav) Pricing tiers/cards.
7. **Testimonials** — (inferred from nav) Customer testimonials/reviews.
8. **Team** — (inferred from nav) Team member cards with photos and roles.
9. **Contact** — (inferred from nav) Contact form and/or contact info.
10. **Footer** — Dark background, site links, Component Dock credit.

**Note:** Sections 4–9 are inferred from the navigation menu items visible in the
screenshot. The exact content and layout of these sections could not be verified
because the live preview was unreachable. The implementer should prioritize the
visible sections (1–3) for pixel-accurate fidelity, and create reasonable
implementations for sections 4–10 based on common app landing page patterns.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the brand name "Caliber",
navigation links (Home, About, Features, Screenshot, Pricing, Testimonials, Team,
Contact), and a "Sign Up Free" ghost/outline CTA button.

#### Scenario: Navbar content

- **GIVEN** the page is loaded
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL show the brand text "Caliber" on the left
- **AND** it SHALL show navigation links for each section
- **AND** it SHALL show a "Sign Up Free" outline button on the right
- **AND** the navbar SHALL become sticky on scroll with a solid background

#### Scenario: Navbar mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL collapse nav links into a hamburger menu
- **AND** tapping the hamburger SHALL toggle the mobile menu

### Requirement: Hero section

The system SHALL render a full-width hero section with a purple-to-blue gradient
background, an SVG wave bottom divider, a headline, subtitle, email input + CTA
button form, and a phone mockup image.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "App Showcase" (or equivalent app name)
- **AND** it SHALL show a subtitle about the app's value proposition
- **AND** it SHALL show an email input with placeholder "name@company.com"
- **AND** it SHALL show a "Get Started" pink CTA button
- **AND** the hero background SHALL be a purple-to-blue gradient
- **AND** the hero bottom SHALL have an SVG wave divider transitioning to white

#### Scenario: Hero phone mockup

- **GIVEN** the hero section is displayed
- **WHEN** the phone mockup area is rendered
- **THEN** it SHALL show a phone/device mockup image on the right side
- **AND** the mockup SHALL display a dashboard-style interface or placeholder

### Requirement: Features section

The system SHALL render a features section titled "Why Is It Special" with 3
feature cards in a horizontal grid layout.

#### Scenario: Feature cards

- **GIVEN** the page is loaded
- **WHEN** the features section is displayed
- **THEN** it SHALL show a heading "Why Is It Special" with a purple underline
- **AND** it SHALL show 3 feature cards side by side
- **AND** each card SHALL have a purple icon, a title, and a description
- **AND** the cards SHALL have light borders or subtle shadows

#### Scenario: Feature card content

- **GIVEN** a feature card is displayed
- **WHEN** the user views the card
- **THEN** it SHALL show an icon (from lucide-react) in purple
- **AND** it SHALL show a title (e.g., "Easy to use", "Powerful Design",
  "Customizability")
- **AND** it SHALL show a short description paragraph

### Requirement: About section

The system SHALL render an about section describing the app's purpose and
key benefits.

#### Scenario: About content

- **GIVEN** the page is loaded
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading and descriptive text about the app
- **AND** it SHALL include relevant imagery or illustrations

### Requirement: Screenshots section

The system SHALL render a screenshots section showcasing the app interface
through device mockups or image carousel.

#### Scenario: Screenshot display

- **GIVEN** the page is loaded
- **WHEN** the screenshots section is displayed
- **THEN** it SHALL show at least one app screenshot or device mockup
- **AND** the screenshots SHALL be presented in an organized layout

### Requirement: Pricing section

The system SHALL render a pricing section with tier cards showing different
pricing plans.

#### Scenario: Pricing tiers

- **GIVEN** the page is loaded
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show at least 2 pricing tier cards
- **AND** each card SHALL show a plan name, price, feature list, and CTA button

### Requirement: Testimonials section

The system SHALL render a testimonials section with customer review cards.

#### Scenario: Testimonial content

- **GIVEN** the page is loaded
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least 2 testimonial cards
- **AND** each card SHALL have a quote, author name, and optional avatar

### Requirement: Team section

The system SHALL render a team section with team member profile cards.

#### Scenario: Team cards

- **GIVEN** the page is loaded
- **WHEN** the team section is displayed
- **THEN** it SHALL show team member cards with photos, names, and roles
- **AND** each card SHALL include social media links

### Requirement: Contact section

The system SHALL render a contact section with a form and contact information.

#### Scenario: Contact form

- **GIVEN** the page is loaded
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a form with name, email, subject, and message fields
- **AND** it SHALL show a submit button
- **AND** it SHALL show contact information (address, phone, email)

### Requirement: Footer

The system SHALL render a footer with site navigation, social links, and
Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the page is loaded
- **WHEN** the footer is displayed
- **THEN** it SHALL show site links organized in columns
- **AND** it SHALL include a "Made with Component Dock" or equivalent credit
  linking to https://www.componentdock.com/
- **AND** it SHALL NOT reference ColorLib or the original template source

### Requirement: Design token fidelity

The system SHALL use the design tokens extracted from the reference to style
all sections consistently.

#### Scenario: Color consistency

- **GIVEN** any section is rendered
- **WHEN** the user views the page
- **THEN** the primary gradient SHALL use purple-to-blue tones (#7C3AED → #6366F1)
- **AND** CTA buttons SHALL use the pink accent (#E91E63)
- **AND** text SHALL use dark gray (#333333) for body and white for on-gradient

#### Scenario: Typography

- **GIVEN** any text is rendered
- **WHEN** the user views the page
- **THEN** headings SHALL use the Poppins font family
- **AND** body text SHALL use the Poppins font family

## Verification Checklist

- [ ] Navbar renders with brand name, all nav links, and "Sign Up Free" ghost button
- [ ] Navbar becomes sticky on scroll with solid background
- [ ] Mobile hamburger menu works correctly
- [ ] Hero has purple-to-blue gradient background
- [ ] Hero has SVG wave bottom divider
- [ ] Hero shows headline, subtitle, email input, and "Get Started" CTA
- [ ] Hero shows phone mockup image on the right
- [ ] Features section shows "Why Is It Special" heading with 3 cards
- [ ] Feature cards have purple icons, titles, and descriptions
- [ ] About section is present with relevant content
- [ ] Screenshots section shows device mockups
- [ ] Pricing section shows tier cards
- [ ] Testimonials section shows review cards
- [ ] Team section shows member profiles
- [ ] Contact section has a working form layout
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] All design tokens match the reference (colors, fonts, button shapes)
- [ ] Responsive layout works on mobile and desktop
- [ ] Placeholder images use picsum.photos/seed/caliber-*/w/h pattern
