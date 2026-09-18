# Template: GivingHeart (Charity / Nonprofit Template)

## Purpose

GivingHeart is a single-page charity landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Charity 2"
website template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Charity 2" — charity/nonprofit template
  (source: https://colorlib.com/wp/template/charity-2/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/charity-2/
  (HTTP 200, full rendered DOM + `css/main.css` (10KB) extracted).
  The TEMPLATES.md screenshot (`charity2-free-template.jpg`) is also available
  as a visual reference.
- **Section order (1:1):** Navbar (Home, Projects, About, Donate) → Hero/Banner
  (full-screen dark overlay, headline "Waiting for Help", CTA button "Donate Now")
  → Call-to-Action strip (pink gradient background, "Please Help them and Donate
  now" + button) → Projects (3 project cards with image overlays, each with
  headline + "Donate Now" + "read more") → About (split: left image, right text
  "A very Lovely Welcome to our Company" + paragraph + "learn more" button) →
  Volunteers (4 volunteer cards with image overlays + names) → Donate/Contact
  (dark parallax background with overlay, heading "Donate Now", left info column
  with 3 trust items, right form: project select, name, email, amount, message,
  donate button, payment icons) → Footer (nav links, social icons, copyright).
- **Design tokens extracted from `css/main.css`:**
  - Primary brand **hot pink `#f41665`** (accents, hover states).
  - **Gradient accent:** `linear-gradient(0deg, #f40f68 0%, #f86e3d 55%, #fbcd11 100%)`
    (pink → orange → yellow; used on primary buttons, card overlays, call-to-action
    strip).
  - Light backgrounds `#f9f9ff` (projects area, volunteers area).
  - Dark backgrounds `#222` (about area, donate area overlay `#000` at 0.9 opacity),
    `#fff` (footer).
  - Text colors: `#222` (body), `#777` (muted), `#fff` (on dark backgrounds).
  - Fonts: **"Poppins"** (body, Google Fonts).
  - Button shapes: `border-radius: 20px` (head-btn outline), `border-radius: 25px`
    (primary-btn solid).
  - Hero: background image with `overlay-bg` at `opacity: 0.5` black.
  - Donate area: parallax background with `overlay-bg` at `opacity: 0.9` black.
  - Card hover overlays: gradient background (pink → orange → yellow) fading in.
  - Form inputs: `border-radius: 0`, transparent background, `border: 1px solid #656463`,
    white text on dark background.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/givingheart-<n>/<w>/<h>`); icons → lucide-react;
  Poppins via Google Fonts `<link>`; forms prevent default (no backend);
  gradient primary in `@theme`; repo-standard Navbar + Footer chrome.

GivingHeart lives in `apps/givingheart` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"GivingHeart", anchor links to page sections, and a "Donate Now" CTA button.

#### Scenario: Navbar content

- **GIVEN** the GivingHeart page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "GivingHeart" and links to Home,
  Projects, About, and Donate
- **AND** the navbar SHALL show a "Donate Now" CTA button

#### Scenario: Sticky navbar

- **GIVEN** the page is rendered
- **WHEN** the user scrolls past the hero section
- **THEN** the navbar SHALL remain fixed at the top of the viewport

### Requirement: Hero / Banner section

The system SHALL render a full-width hero with a dark overlay background image,
a level-1 heading, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading "Waiting for Help"
- **AND** it SHALL show a "Donate Now" CTA button with gradient accent
- **AND** the hero SHALL display a dark overlay (`opacity: 0.5`) over a background image

#### Scenario: Hero height

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL fill most of the viewport height (full-screen-like)

### Requirement: Call-to-Action strip

The system SHALL render a horizontal call-to-action strip between the hero and
projects sections with a gradient background.

#### Scenario: CTA strip content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action strip is displayed
- **THEN** it SHALL contain the text "Please Help them and Donate now"
- **AND** it SHALL show a "Donate Now" CTA button
- **AND** the strip SHALL have a gradient background (pink → orange → yellow)

### Requirement: Projects section

The system SHALL render a projects section with a heading and 3 project cards
in a 3-column grid, each with an image overlay and hover effect.

#### Scenario: Projects heading

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show a section heading

#### Scenario: Project cards

- **GIVEN** the projects section is displayed
- **WHEN** the cards are rendered
- **THEN** there SHALL be exactly 3 project cards in a row
- **AND** each card SHALL show a project image
- **AND** each card SHALL have a "Donate Now" button and a "read more" link
- **AND** hovering over a card SHALL reveal a gradient overlay

#### Scenario: Project card layout

- **GIVEN** a project card is rendered
- **WHEN** the card is displayed
- **THEN** the image SHALL fill the card area
- **AND** the card details SHALL fade in from the bottom on hover

### Requirement: About section

The system SHALL render a split about section with a full-width image on the
left and text content on the right, on a dark background.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a level-1 heading "A very Lovely Welcome to our Company"
- **AND** it SHALL display a paragraph of descriptive text
- **AND** it SHALL show a "learn more" button with gradient accent

#### Scenario: About layout

- **GIVEN** the about section is displayed
- **WHEN** the layout is rendered
- **THEN** it SHALL be a 50/50 split with an image on the left and text on the right
- **AND** the section SHALL have a dark (`#222`) background

### Requirement: Volunteers section

The system SHALL render a volunteers section with a heading and 4 volunteer
cards in a 4-column grid, each with an image overlay and hover effect.

#### Scenario: Volunteers heading

- **GIVEN** the page is rendered
- **WHEN** the volunteers section is displayed
- **THEN** it SHALL show a level-1 heading "Our Volunteers"
- **AND** it SHALL show a subtitle paragraph

#### Scenario: Volunteer cards

- **GIVEN** the volunteers section is displayed
- **WHEN** the cards are rendered
- **THEN** there SHALL be exactly 4 volunteer cards in a row
- **AND** each card SHALL show a volunteer image
- **AND** each card SHALL show a volunteer name on hover
- **AND** hovering over a card SHALL reveal a gradient overlay

### Requirement: Donate / Contact section

The system SHALL render a donate section with a dark parallax background,
a heading, a trust information column on the left, and a donation form on
the right.

#### Scenario: Donate section heading

- **GIVEN** the page is rendered
- **WHEN** the donate section is displayed
- **THEN** it SHALL show a level-1 heading "Donate Now"
- **AND** it SHALL show a subtitle paragraph

#### Scenario: Trust information

- **GIVEN** the donate section is displayed
- **WHEN** the left column is rendered
- **THEN** it SHALL show 3 trust items: "Divided Evenly", "Transparency All the
  Way", and "Trustworthy"
- **AND** each trust item SHALL have a heading and a description paragraph

#### Scenario: Donation form

- **GIVEN** the donate section is displayed
- **WHEN** the form is rendered
- **THEN** it SHALL contain a project select dropdown ("Project you want to donate")
- **AND** it SHALL contain a name input ("Enter your name")
- **AND** it SHALL contain an email input ("Enter email address")
- **AND** it SHALL contain a donation amount input ("Donation amount (USD)")
- **AND** it SHALL contain a message textarea
- **AND** it SHALL contain a "donate" submit button with gradient accent
- **AND** it SHALL show a "We Accept" payment methods indicator below the form

#### Scenario: Form validation

- **GIVEN** the donation form is displayed
- **WHEN** the user submits without filling required fields
- **THEN** the browser SHALL enforce required-field validation on name, email,
  and project select

### Requirement: Footer

The system SHALL render a footer with navigation links, social media icons,
and a copyright notice linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show navigation links (Home, Projects, About, Donate)
- **AND** it SHALL show social media icons (Facebook, Twitter, Dribbble, Behance)
- **AND** it SHALL show a copyright line with "Made with" and a heart icon
- **AND** the copyright SHALL link to https://www.componentdock.com/

### Requirement: Dark mode

The system SHALL support dark mode via a class-based toggle on the document root.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user activates dark mode
- **THEN** the `.dark` class SHALL be toggled on `document.documentElement`
- **AND** component styles SHALL respond to the dark mode state

## Verification checklist

- [ ] All 7 sections rendered in correct order matching the ColorLib preview
- [ ] Hero fills viewport height with dark overlay
- [ ] CTA strip has gradient background (pink → orange → yellow)
- [ ] Projects: 3 cards, hover overlay with gradient
- [ ] About: 50/50 split, dark background, image + text
- [ ] Volunteers: 4 cards, hover overlay with gradient
- [ ] Donate: dark parallax background, form with all fields, trust items
- [ ] Footer: links, social icons, Component Dock link
- [ ] Sticky navbar with "Donate Now" CTA
- [ ] All interactive elements accessible (keyboard, screen reader)
- [ ] Responsive layout (mobile-first)
- [ ] Dark mode toggle functional
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage on all section components
- [ ] Placeholder images use seeded picsum (`picsum.photos/seed/givingheart-<n>/`)
