# Template: Casette (App Landing Page)
<!-- prep-status: shipped-as=appnova -->
> **SHIPPED-UNDER** — the ColorLib `ca-app` design this prep describes already
> ships as `apps/appnova` (<https://appnova.free.componentdock.com>).
> Do not scaffold `apps/casette`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-appnova/spec.md`.

## Purpose

Recreation of ColorLib **CA App Landing** template.

- **Source**: https://colorlib.com/wp/template/ca-app/
- **Preview URL**: https://preview.colorlib.com/theme/ca-app/ (404 — not in preview system; analysis based on screenshot)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/ca-app-showcase-website-template.jpg
- **Category**: App Landing / SaaS / Creative
- **Description**: Minimal and modern mobile app landing page for Android/iOS app showcase, suitable for SaaS and technology landing/sales pages. One-page scroll layout.
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Source design:** ColorLib "Ca App" — https://colorlib.com/wp/template/ca-app/

## Design tokens (extracted from screenshot)

### Colors

| Token              | Value      | Usage                                    |
| ------------------ | ---------- | ---------------------------------------- |
| hero-gradient-start| `#7c3aed`  | Hero gradient left (vivid purple)        |
| hero-gradient-end  | `#3730a3`  | Hero gradient right (deep indigo)        |
| cta-pink           | `#e91e8c`  | "Get Started" CTA button (hot pink/coral)|
| cta-pink-hover     | `#d81880`  | CTA hover state                          |
| accent-mauve       | `#B97EBB`  | Preview button color (mauve purple)      |
| accent-mauve-hover | `#ae6ab0`  | Preview button hover                     |
| heading-dark       | `#1a1a2e`  | Section headings (near-black)            |
| body-text          | `#555555`  | Body paragraph text (medium gray)        |
| card-bg            | `#f8f9fa`  | Feature card background (near-white)     |
| section-bg         | `#ffffff`  | Features section background              |
| accent-underline   | `#7c3aed`  | Heading underline accent (purple)        |
| navbar-text        | `#ffffff`  | Navbar links and logo                    |
| icon-color         | `#7c3aed`  | Feature section icons (purple)           |

### Typography

| Token        | Value                                        | Usage                     |
| ------------ | -------------------------------------------- | ------------------------- |
| font-display | `"Poppins", sans-serif` (Google Fonts)       | Hero heading              |
| font-body    | `"Poppins", sans-serif` (Google Fonts)       | Body text, nav, buttons   |
| hero-size    | `3.5rem` / `56px` approximate                | Hero headline             |
| section-size | `2.5rem` / `40px`                            | "Why Is It Special" etc.  |
| nav-size     | `0.875rem` / `14px`                          | Navbar links              |

### Button shapes

- CTA ("Get Started"): rounded-full / pill shape, horizontal padding ~2rem, vertical ~0.75rem, white text on pink bg
- "Sign Up Free" navbar: outlined (1px white border), rounded-full, white text, transparent bg
- "Preview" button: rounded, mauve bg, white text

### Section backgrounds

1. Hero: purple-to-indigo gradient (linear-gradient, ~135deg or slightly rotated)
2. Features: solid white (#ffffff)
3. Bottom of hero: wavy SVG separator (white wave curving into white section)

### Other

- Phone mockup in hero: tilted/rotated ~-5deg, dark frame, shows dashboard with donut chart
- Feature cards: subtle border or shadow, rounded corners (~8px), icon centered at top
- Single-page scroll layout with anchor navigation
- Footer: standard dark footer with Component Dock link

## Requirements

### Hero Section

Feature: Hero Section
As a visitor, I see the app landing hero so I understand the product value.

#### Scenario: Hero displays gradient background

- **GIVEN** I am on the page
- **THEN** the hero section has a purple-to-indigo gradient background

#### Scenario: Hero displays headline and subtext

- **GIVEN** I am on the page
- **THEN** the hero shows a large heading "<app name>"
- **AND** the hero shows a subtitle describing the app value proposition

#### Scenario: Hero has email input and CTA button

- **GIVEN** I am on the page
- **THEN** the hero has an email input field with placeholder text
- **AND** the hero has a "Get Started" CTA button in pink/coral color

#### Scenario: Hero shows phone mockup

- **GIVEN** I am on the page
- **THEN** the hero displays a phone mockup image on the right side

#### Scenario: Hero has wavy bottom separator

- **GIVEN** I am on the page
- **THEN** the hero bottom edge has a wavy SVG separator transitioning to white

### Navbar

Feature: Navigation Bar
As a visitor, I see a navigation bar to move between sections.

#### Scenario: Navbar displays logo

- **GIVEN** I am on the page
- **THEN** the navbar shows a logo text on the left

#### Scenario: Navbar displays navigation links

- **GIVEN** I am on the page
- **THEN** the navbar shows links for Home, About, Features, Screenshot, Pricing, Testimonials, Team, Contact

#### Scenario: Navbar has CTA button

- **GIVEN** I am on the page
- **THEN** the navbar shows a "Sign Up Free" outlined button on the right

#### Scenario: Navbar is transparent over hero

- **GIVEN** I am on the page
- **THEN** the navbar background is transparent and overlays the hero gradient

### Features Section

Feature: Features Section
As a visitor, I see the features section to understand why the app is special.

#### Scenario: Features section heading

- **GIVEN** I scroll to the features section
- **THEN** I see a heading "Why Is It Special"
- **AND** the heading has a purple underline accent

#### Scenario: Features display three cards

- **GIVEN** I scroll to the features section
- **THEN** there are 3 feature cards displayed in a row
- **AND** each card has an icon, a title, and a description

#### Scenario: Feature card structure

- **GIVEN** I look at a feature card
- **THEN** the card has a purple icon at the top
- **AND** the card has a bold title below the icon
- **AND** the card has descriptive body text below the title
- **AND** the card has rounded corners and light background

### About Section

Feature: About Section
As a visitor, I see an about section with app details.

#### Scenario: About section displays content

- **GIVEN** I scroll to the about section
- **THEN** I see a heading describing the app
- **AND** I see descriptive text about the app capabilities
- **AND** I see supporting imagery or mockup

### Screenshot Section

Feature: Screenshot Section
As a visitor, I see app screenshots to preview the interface.

#### Scenario: Screenshot section displays

- **GIVEN** I scroll to the screenshot section
- **THEN** I see app screenshot images
- **AND** the section has a heading label

### Pricing Section

Feature: Pricing Section
As a visitor, I see pricing options.

#### Scenario: Pricing section displays plans

- **GIVEN** I scroll to the pricing section
- **THEN** I see pricing plan cards with prices and features
- **AND** each plan has a call-to-action button

### Testimonials Section

Feature: Testimonials Section
As a visitor, I see user testimonials.

#### Scenario: Testimonials display

- **GIVEN** I scroll to the testimonials section
- **THEN** I see testimonial cards with user quotes
- **AND** each card shows the user name and role

### Team Section

Feature: Team Section
As a visitor, I see the team behind the app.

#### Scenario: Team section displays team members

- **GIVEN** I scroll to the team section
- **THEN** I see team member cards with photos, names, and roles
- **AND** each card has social media links

### Contact Section

Feature: Contact Section
As a visitor, I see a contact form.

#### Scenario: Contact form displays

- **GIVEN** I scroll to the contact section
- **THEN** I see a contact form with name, email, subject, and message fields
- **AND** the form has a submit button

### Footer

Feature: Footer
As a visitor, I see a footer with links and attribution.

#### Scenario: Footer displays Component Dock link

- **GIVEN** I scroll to the footer
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the footer is branded "Component Dock"

#### Scenario: Footer layout

- **GIVEN** I scroll to the footer
- **THEN** the footer has a dark background
- **AND** the footer contains copyright text and navigation links

### Responsive Design

Feature: Responsive Design
As a mobile visitor, the template adapts to my screen.

#### Scenario: Navbar collapses on mobile

- **GIVEN** I view the page on a mobile viewport
- **THEN** the navbar shows a hamburger menu icon
- **AND** the navigation links are hidden

#### Scenario: Hero stacks on mobile

- **GIVEN** I view the page on a mobile viewport
- **THEN** the hero content stacks vertically
- **AND** the phone mockup is hidden or repositioned

#### Scenario: Feature cards stack on mobile

- **GIVEN** I view the page on a mobile viewport
- **THEN** the feature cards stack in a single column

## Verification checklist

- [ ] Hero gradient matches purple-to-indigo from screenshot
- [ ] "Get Started" CTA button is hot pink/coral with pill shape
- [ ] Phone mockup image displayed in hero (use placeholder via picsum.photos)
- [ ] Wavy SVG separator at hero bottom
- [ ] Navbar is transparent over hero with white links
- [ ] "Sign Up Free" outlined button in navbar
- [ ] "Why Is It Special" heading with purple underline
- [ ] 3 feature cards with icons (use lucide-react icons)
- [ ] Cards have rounded corners, light background, centered layout
- [ ] About section with app description
- [ ] Screenshot section with app images
- [ ] Pricing section with plan cards
- [ ] Testimonials section with user quotes
- [ ] Team section with member cards
- [ ] Contact section with form
- [ ] Footer links to componentdock.com
- [ ] Responsive: navbar collapses, cards stack, hero stacks
- [ ] No ColorLib references in app code
- [ ] Footer branded "Component Dock"
- [x] `apps/casette` folder, `@free-react-templates/casette` package — superseded: shipped as `apps/appnova`
