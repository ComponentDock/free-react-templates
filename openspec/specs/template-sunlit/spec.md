# Template: Sunlit (Music Festival Landing)

## Purpose

Sunlit is a single-page music festival landing template — a React recreation of
the ColorLib free "Sunfest" template, built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand teal `#0de7e4` (accent borders, CTA button background, decorative
  elements)
- Dark near-black `#03070c` / `#050505` (hero background, body background)
- White `#fff` (primary button background, body text on dark)
- Light grey `#f3f8f9` / `#f4f6f7` (content section backgrounds)
- Typeface: Poppins (Google Fonts via `<link>`)
- Display font: "Mountains of Christmas" / decorative script for hero headline
- Buttons: square corners (`border-radius: 0`), white with dark text or teal
  background with white text; `padding: 16px 40px`, `font-weight: 600`
- Footer: dark background with cover image, centered large title + email + social

Sunlit lives in `apps/sunlit` and uses shared components from `packages/ui`
(Button, cn).

Source: https://colorlib.com/wp/template/sunfest/
Preview: https://preview.colorlib.com/theme/sunfest/

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent/fixed navbar over the hero with the site
name "Sunlit", navigation links (Home, Festival 2018, Artists, Blog, Contact),
and a hamburger toggle for mobile screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Sunlit" linking to `#home`
- **AND** it SHALL show links to Home, Festival 2018, Artists, Blog and Contact
- **AND** the navbar SHALL be positioned over the hero background

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width dark hero with a background image (festival
scene), a script/display headline "Hello World!", a date label, a countdown
timer (Days, Hours, Minutes, Seconds), and two CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline "Hello World!" in a decorative script
  font
- **AND** it SHALL display the date "06.28.018" above the countdown
- **AND** it SHALL show a countdown timer with Days, Hours, Minutes, Seconds
  labels
- **AND** it SHALL render two buttons: "Buy Tickets" (white, square) and
  "See Lineup" (teal `#0de7e4`, square)

#### Scenario: Countdown timer

- **GIVEN** the page is rendered
- **WHEN** the countdown timer is displayed
- **THEN** it SHALL show four numeric values with labels (Days, Hours, Minutes,
  Seconds)
- **AND** the numbers SHALL be displayed in large bold white text

### Requirement: Lineup headliners section

The system SHALL render a content section titled "The Lineup
Artists-Headliners" with a "JUST THE BEST" subtitle, featuring three artist
cards in a row — each with a name, description text, and a teal link.

#### Scenario: Headliner cards

- **GIVEN** the page is rendered
- **WHEN** the lineup headliners section is displayed
- **THEN** it SHALL show the section heading "The Lineup Artists-Headliners"
- **AND** it SHALL display three artist cards with names (Jamila Williams,
  Sandra Superstar, DJ Crazyhead)
- **AND** each card SHALL have a description paragraph and a teal link

### Requirement: Complete lineup gallery

The system SHALL render a grid of artist thumbnail cards (4 columns on desktop)
under the heading "The Complete Lineup", each showing an artist photo and name.

#### Scenario: Artist grid

- **GIVEN** the page is rendered
- **WHEN** the complete lineup section is displayed
- **THEN** it SHALL show the heading "The Complete Lineup" with "JUST THE BEST"
  subtitle
- **AND** it SHALL display artist cards in a 4-column grid
- **AND** each card SHALL show an artist photo and name (Miska Smith, Hayley
  Down, The Band Song, Pink Machine, Brasil Band, Mickey, DJ Girl, Stan Smith)
- **AND** it SHALL include a "See all lineup" button

### Requirement: Next events slider

The system SHALL render a horizontal slider/carousel of upcoming events under
the heading "Our Next Events", each showing an event name, location, and
date.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the next events section is displayed
- **THEN** it SHALL show the heading "Our Next Events" with "JUST THE BEST"
  subtitle
- **AND** it SHALL display event cards with event name and location
- **AND** it SHALL include forward/back navigation controls

### Requirement: Latest news section

The system SHALL render a two-column news/blog section titled "Our Last News"
with article cards showing date, title, author, comment count, and excerpt.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the latest news section is displayed
- **THEN** it SHALL show the heading "Our Last News" with "JUST THE BEST"
  subtitle
- **AND** it SHALL display two blog article cards side by side
- **AND** each card SHALL show a date badge, article title, author name,
  comment count, and description text

### Requirement: Footer

The system SHALL render a dark footer with a background image, the site name
"SUNFEST" (displayed large), an email contact, social media links, and a
copyright notice.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name prominently
- **AND** it SHALL display the email "SAYHELLO@SUNLIT.COM"
- **AND** it SHALL include social media icon links
- **AND** it SHALL show a copyright notice with "Made with Component Dock"

## Verification checklist

- [ ] Navbar renders with correct links and mobile hamburger toggle
- [ ] Hero displays headline, date, countdown timer, and two CTA buttons
- [ ] Countdown timer shows Days/Hours/Minutes/Seconds in large bold text
- [ ] Lineup headliners shows 3 artist cards with names and descriptions
- [ ] Complete lineup grid shows 8 artist cards in 4-column layout
- [ ] Next events slider renders event cards with navigation
- [ ] Latest news section shows 2 blog cards in two-column layout
- [ ] Footer shows site name, email, social links, copyright
- [ ] All sections use correct brand teal `#0de7e4` for accents
- [ ] All sections use correct dark background `#03070c` / `#050505`
- [ ] Poppins font loaded via Google Fonts
- [ ] Square buttons (no border-radius) with correct padding
- [ ] Responsive: mobile hamburger, stacked columns, scaled typography
- [ ] 100% test coverage (lines, functions, branches, statements)
