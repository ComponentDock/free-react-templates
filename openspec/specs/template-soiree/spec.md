# Template: Soiree (Business)

## Purpose

Recreation of ColorLib "Evento" (https://colorlib.com/wp/template/evento/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Soiree". An event/conference landing page with hero, countdown, speakers, pricing, calendar, and footer sections.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#f50136` | live sheet paints it ×43 — `border-top` on `.section_title .title:before`; main.css (37,385 B, sha256 76a91dd19c22) · <https://preview.colorlib.com/theme/evento/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Header with navigation

The template SHALL render a fixed-top navbar with logo, navigation links, and search icon.

#### Scenario: Renders logo and nav links

- **WHEN** the page loads
- **THEN** the header displays "Soiree" logo text
- **AND** navigation links: Home, Speakers, Events, News, Contact
- **AND** a search icon button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the navigation menu expands
- **AND** clicking again collapses it

### Requirement: Hero section

The template SHALL render a full-width hero with background image, heading, date, and CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero displays "Prepare yourself for the conference"
- **AND** the date "12-14 February 2025 — Los Angeles, CA"
- **AND** a "Buy Tickets Now" CTA button

### Requirement: Event info boxes

The template SHALL display 4 event information boxes in a grid.

#### Scenario: Event details

- **WHEN** the page loads
- **THEN** boxes show Date, Location, Speakers, and Tickets
- **AND** each box has an icon, label, and value

### Requirement: Countdown timer

The template SHALL display a live countdown to the event date.

#### Scenario: Countdown display

- **WHEN** the page loads
- **THEN** a countdown shows Days, Hours, Minutes, Seconds
- **AND** the timer updates every second

### Requirement: About section

The template SHALL display event description and feature cards.

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the section shows "About the event" heading
- **AND** two paragraphs describing the event
- **AND** 4 feature cards: 9 Speakers, 8 hrs Marathon, Live Broadcast, Early Bird

### Requirement: Speakers section

The template SHALL display speaker cards with photos and info.

#### Scenario: Speaker cards

- **WHEN** the page loads
- **THEN** 8 speaker cards are displayed in a grid
- **AND** each card shows the speaker name and role

### Requirement: Pricing section

The template SHALL display 3 pricing tiers with features and CTA.

#### Scenario: Pricing cards

- **WHEN** the page loads
- **THEN** 3 pricing cards are shown: Early Bird ($65), Start up ($85), Corporate ($95)
- **AND** each card has a "Purchase" button
- **AND** Early Bird is highlighted as recommended

### Requirement: Calendar section

The template SHALL display upcoming events in a table.

#### Scenario: Event calendar

- **WHEN** the page loads
- **THEN** a table shows 3 upcoming events with date, title, time, and speaker
- **AND** each row has "Read More" and "buy now" links

### Requirement: Partners section

The template SHALL display partner logos on a gray background.

#### Scenario: Partner logos

- **WHEN** the page loads
- **THEN** the section shows "Our Partners" heading
- **AND** 5 partner logo placeholders are displayed

### Requirement: Get tickets section

The template SHALL display a call-to-action section with background image.

#### Scenario: Ticket CTA

- **WHEN** the page loads
- **THEN** the section shows "Get your tickets" heading
- **AND** description text about the event
- **AND** a "Buy Now" button

### Requirement: Footer

The template SHALL render a footer with about info, social links, newsletter, and copyright.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows about text and social icons
- **AND** an Instagram photo grid
- **AND** a newsletter subscription form with email input and "SUBSCRIBE" button
- **AND** footer navigation links

#### Scenario: Component Dock branding

- **WHEN** the footer renders
- **THEN** it displays "Made with ♥ by Component Dock"
- **AND** the Component Dock link points to https://www.componentdock.com/

### Requirement: Accessibility

The template SHALL use semantic HTML and accessible patterns.

#### Scenario: Semantic structure

- **WHEN** the page loads
- **THEN** the page uses semantic elements: header, main, section, footer
- **AND** images have alt text
- **AND** interactive elements have aria-labels

### Requirement: Design tokens

The template SHALL use consistent design tokens matching the original.

#### Scenario: Visual design

- **WHEN** the page renders
- **THEN** the font is Montserrat (Google Fonts)
- **AND** the brand color is #f50136 (red)
- **AND** headings use #18181c
- **AND** body text uses #838383

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/soiree/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/soiree/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Header with navigation — the header displays "Soiree" logo text
- [x] Hero section — the hero displays "Prepare yourself for the conference"
- [ ] Event info boxes — boxes show Date, Location, Speakers, and Tickets
- [ ] Countdown timer — a countdown shows Days, Hours, Minutes, Seconds
- [x] About section — the section shows "About the event" heading
- [ ] Speakers section — 8 speaker cards are displayed in a grid
- [ ] Pricing section — 3 pricing cards are shown: Early Bird ($65), Start up ($85), Corporate ($95)
- [ ] Calendar section — a table shows 3 upcoming events with date, title, time, and speaker
- [x] Partners section — the section shows "Our Partners" heading
- [x] Get tickets section — the section shows "Get your tickets" heading
- [ ] Accessibility — the page uses semantic elements: header, main, section, footer
