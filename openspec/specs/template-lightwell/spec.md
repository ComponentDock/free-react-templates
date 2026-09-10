# Template: Lightwell (Consulting / Business)

## Purpose

Recreation of ColorLib **Cellon** — a light consulting company template.

- **Source slug:** `cellon`
- **Source URL:** https://colorlib.com/wp/template/cellon/
- **Preview URL:** https://preview.colorlib.com/theme/cellon/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview CSS (`main.css`) on 2026-09-11.

| Token               | Value                      | Notes                                        |
| ------------------- | -------------------------- | -------------------------------------------- |
| Brand color         | `#6cbb23`                  | Green — buttons, accents, overlays, counters |
| Brand light         | `#f0f8e9`                  | Feature icon background                      |
| Brand medium        | `#a6d477`                  | Contact form input borders                   |
| Body background     | `#f6f6fc`                  | Light lavender-gray page background          |
| Card background     | `#ffffff`                  | Feature cards, banner, about, FAQ, footer    |
| Body text           | `#777777`                  | Paragraph text                               |
| Heading text        | `#222222`                  | All headings                                 |
| Overlay (green)     | `rgba(108,187,35,0.85)`    | Video, feature, and contact section overlays |
| Selection color     | `#6cbb23` on `#ffffff`     | ::selection                                  |
| Font family         | `Poppins, sans-serif`      | Weights 100, 300, 500, 600                   |
| Button radius       | `20px` (circle)            | `.genric-btn.circle`                         |
| Input radius        | `0` (square)               | `.common-input` no border-radius             |
| Card shadow         | none                       | Cards are flat on white bg                   |
| Body wrapper shadow | `0 0 50px rgba(0,0,0,0.2)` | `.oz-body-wrap` — the entire page card       |

## Section Order (from live DOM)

1. **Navbar** — Logo + nav links (Home, Generic, Elements) + hamburger menu
2. **Banner (Hero)** — Split: illustration left, headline right, subtitle, CTA button
3. **Video CTA** — Full-width with green overlay, play button, heading
4. **About** — Split: text left, image right
5. **Features** — 3-column grid, 7 feature cards on green overlay background
6. **FAQ + Stats** — Left column: 4 counter stats; Right column: 3 FAQ items
7. **Contact** — Green overlay background, heading, form
8. **Footer** — 4-column layout + copyright bar

## Requirements

### Requirement: Navbar

The system SHALL render a fixed-position navigation bar with the Lightwell
logo, desktop nav links, and a hamburger menu for mobile viewports.

#### Scenario: Renders logo and navigation links

- **GIVEN** the page loads on a desktop viewport
- **THEN** a link with text "Lightwell" SHALL be visible in the header
- **AND** links "Home", "Generic", "Elements" SHALL be displayed

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is below 768px
- **WHEN** the page loads
- **THEN** the nav links SHALL be hidden
- **AND** a hamburger menu icon (Menu from lucide-react) SHALL be visible

#### Scenario: Hamburger toggle opens mobile nav

- **GIVEN** the viewport is below 768px and the mobile nav is closed
- **WHEN** the user clicks the hamburger menu button
- **THEN** the nav links SHALL become visible

### Requirement: Hero Banner

The system SHALL render a full-height split hero section with an illustration
on the left and a headline, subtitle, and green pill CTA button on the right.

#### Scenario: Displays hero headline and CTA

- **GIVEN** the page loads
- **THEN** a hero illustration image SHALL be visible
- **AND** a heading containing "Behind Every" and "Success" and "Cactus" SHALL be displayed
- **AND** a "Get Started" button with an arrow icon SHALL be visible

#### Scenario: CTA button style

- **GIVEN** the page loads
- **THEN** the "Get Started" button SHALL have a green background and white text
- **AND** the button SHALL have fully rounded (pill) corners

### Requirement: Video CTA

The system SHALL render a full-width section with a green semi-transparent
overlay, a play button, and a heading.

#### Scenario: Displays video section with play button

- **GIVEN** the page loads
- **THEN** a play button icon SHALL be visible
- **AND** a heading "Being unique is the preference" SHALL be displayed
- **AND** a subtitle "Youtube video will appear in popover" SHALL be shown
- **AND** the section SHALL have a green semi-transparent overlay

### Requirement: About

The system SHALL render a split about section with text content on the left
and an illustration image on the right.

#### Scenario: Displays about content

- **GIVEN** the page loads
- **THEN** a heading "Brief Information About" SHALL be visible
- **AND** a paragraph describing the company SHALL be displayed
- **AND** a "View More" button with green border SHALL be visible
- **AND** an about illustration image SHALL be shown

#### Scenario: About layout

- **GIVEN** the page loads
- **THEN** the text content SHALL be on the left
- **AND** the image SHALL be on the right

### Requirement: Features

The system SHALL render 7 feature cards in a 3-column responsive grid with
a green overlay background.

#### Scenario: Displays feature cards

- **GIVEN** the page loads
- **THEN** 7 feature cards SHALL be displayed
- **AND** each card SHALL have an icon, heading, and paragraph text
- **AND** the section SHALL have a green semi-transparent overlay background

### Requirement: FAQ and Stats

The system SHALL render a section with 4 counter statistics on the left and
3 accordion FAQ items on the right.

#### Scenario: Displays counter stats

- **GIVEN** the page loads
- **THEN** 4 statistics SHALL be shown with large green numbers
- **AND** labels SHALL include "Projects Completed", "New Projects", "Tickets Submitted", "Cup of Coffee"

#### Scenario: Displays FAQ items

- **GIVEN** the page loads
- **THEN** 3 FAQ questions SHALL be displayed
- **AND** each FAQ SHALL have a question heading and answer paragraph

#### Scenario: FAQ accordion toggle

- **GIVEN** the page loads
- **WHEN** the user clicks a FAQ question heading
- **THEN** the answer paragraph SHALL toggle visibility

### Requirement: Contact

The system SHALL render a contact form section with a green overlay background,
name and email inputs, a message textarea, and a submit button.

#### Scenario: Displays contact form

- **GIVEN** the page loads
- **THEN** a heading "Send Us Message" SHALL be visible
- **AND** the section SHALL have a green semi-transparent overlay background
- **AND** a name input field SHALL be present
- **AND** an email input field SHALL be present
- **AND** a message textarea SHALL be present
- **AND** a "Send Message" submit button SHALL be visible

#### Scenario: Form submission

- **GIVEN** the user fills in name, email, and message
- **WHEN** the user clicks "Send Message"
- **THEN** the form fields SHALL be cleared

### Requirement: Footer

The system SHALL render a footer with 4 content columns, social icons,
a copyright notice, and a link to componentdock.com.

#### Scenario: Displays footer columns

- **GIVEN** the page loads
- **THEN** 4 footer columns SHALL be displayed
- **AND** column headings SHALL be "Top Product", "Navigation", "Compare", "Quick About"
- **AND** each column SHALL contain navigation links

#### Scenario: Footer social and copyright

- **GIVEN** the page loads
- **THEN** social icons for Facebook, Twitter, Dribbble, Behance SHALL be visible
- **AND** a copyright notice SHALL be displayed at the bottom

#### Scenario: Footer Component Dock link

- **GIVEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" SHALL be present in the footer
- **AND** the link text SHALL mention "Component Dock"
