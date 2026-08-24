# Template: Replay (Services & Agency Landing)

## Purpose

Replay is a single-page services/agency landing template — an original React
recreation of the ColorLib free "Repeat" template
(preview: https://preview.colorlib.com/theme/repeat/ — services/agency landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand accent `#ff8e71` (salmon/coral) — buttons, subheading text, vertical accent lines, stat icons
- Heading color `#003a70` (deep navy blue) — all headings, stat counter numbers
- Overlay `rgba(0, 58, 112, 0.9)` (navy at 90% opacity) on background-image sections (about, services slider)
- Typeface: Comfortaa (Google Fonts, display/numbers) + Roboto (Google Fonts, body text)
- Buttons: salmon/coral `#ff8e71` background, black `#000` text, `border-radius: 0.25rem`
- Footer: light grey `#efefef` background, `#888` text, `#777` links
- Stat counter cards: `#fafafa` background, `7px` border-radius, `50px` Comfortaa numbers in `#003a70`
- Sections: `7rem` vertical padding
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Replay lives in `apps/replay` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navbar with the site name "Replay", section
links (Home, Services, Stats, Media, Contact), and a hamburger toggle that
opens a mobile menu on small screens. The navbar SHALL have a dropdown under
"Services" with sub-items (Menu One, Menu Two, Dropdown with sub-sub-items).

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Replay" linking to `#home`
- **AND** it SHALL show links to Home, Services, Pricing, About, and Contact Us
- **AND** the Services item SHALL have a dropdown with Menu One, Menu Two, and a nested Dropdown

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, a dark navy
overlay, a centered headline "We are pretty Awesome" (with "Awesome" as a
typed-word animation or static emphasis), a supporting paragraph, and a salmon
"Our services" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline "We are pretty Awesome"
- **AND** it SHALL contain a supporting paragraph
- **AND** it SHALL contain an "Our services" button with salmon/coral styling
- **AND** the background SHALL have a dark navy overlay

### Requirement: About section (overlay)

The system SHALL render an "About us" section with a background image, a dark
navy overlay (`rgba(0, 58, 112, 0.9)`), a left column with "About us"
subheading, a heading "We are here to help grow your business", and an image
with a negative bottom margin overlay. The right column SHALL have a vertical
accent line and introductory paragraphs.

#### Scenario: About section layout

- **GIVEN** the page is rendered
- **WHEN** the About section is displayed
- **THEN** it SHALL show "About us" in salmon/coral accent color
- **AND** it SHALL show the heading "We are here to help grow your business" in white
- **AND** it SHALL have an image with negative bottom margin
- **AND** the right column SHALL show a vertical salmon accent line and intro paragraphs

### Requirement: Services section

The system SHALL render a "What We Offer" section with an intro block
(vertical accent line + text), a heading, a supporting paragraph, and a
split layout: left side with an image, right side with a service slider
(dark navy background `rgba(0, 58, 112, 0.9)`) containing service cards
(Web Design, Graphic Design, Web/Mobile Application, Brand Identity).

#### Scenario: Services section content

- **GIVEN** the page is rendered
- **WHEN** the Services section is displayed
- **THEN** it SHALL show "What We Offer" heading with a supporting paragraph
- **AND** it SHALL show a vertical salmon accent line in the intro block
- **AND** it SHALL display a split layout with image on left and service slider on right
- **AND** the service slider SHALL have a dark navy background with white headings

#### Scenario: Service cards

- **GIVEN** the Services section is displayed
- **WHEN** the service slider is visible
- **THEN** it SHALL contain cards for Web Design, Graphic Design,
  Web/Mobile Application, and Brand Identity
- **AND** each card SHALL have a heading and description text

### Requirement: Stats counter section

The system SHALL render a "Stats" section with a heading and a 4-column grid
of stat counters: Projects (230), Happy Clients (229), Leadership (8),
Years Experience (15). Each counter SHALL have an icon, a large number, and
a caption, styled in `#fafafa` cards with `7px` border-radius.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the Stats section is displayed
- **THEN** it SHALL show "Stats" heading
- **AND** it SHALL display 4 stat counters in a responsive grid
- **AND** the counters SHALL show Projects (230), Happy Clients (229),
  Leadership (8), Years Experience (15)
- **AND** each counter card SHALL have `#fafafa` background and `7px` border-radius

### Requirement: Media section

The system SHALL render a "Get anything done in one place" section with a
two-column layout: left side with heading, paragraph, and "Our services"
button; right side with two overlapping images (one offset with a white border).

#### Scenario: Media section layout

- **GIVEN** the page is rendered
- **WHEN** the Media section is displayed
- **THEN** it SHALL show the heading "Get anything done in one place"
- **AND** it SHALL have a supporting paragraph and "Our services" button
- **AND** it SHALL display two overlapping images on the right

### Requirement: Footer

The system SHALL render a footer with a light grey `#efefef` background
containing contact information, a Component Dock credit linking to
https://www.componentdock.com/, and appropriate section widgets.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a `#efefef` background
- **AND** it SHALL contain a link to https://www.componentdock.com/
- **AND** it SHALL show contact information

## Verification checklist

- [ ] Navbar with dropdowns renders correctly on desktop and mobile
- [ ] Hero section shows background image with navy overlay
- [ ] About section shows overlay layout with accent lines
- [ ] Services section shows split layout with service slider
- [ ] Stats section shows 4 counter cards in responsive grid
- [ ] Media section shows overlapping images layout
- [ ] Footer has Component Dock link and grey background
- [ ] All design tokens match: #ff8e71 accent, #003a70 headings,
      Comfortaa + Roboto fonts, 0.25rem button radius
- [ ] Responsive layout works on mobile
- [ ] 100% test coverage maintained
