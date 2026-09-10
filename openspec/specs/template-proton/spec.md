# Template: Proton (Business / Agency)

## Purpose

Recreation of ColorLib "Atomic" — a clean, professional business/agency website
template with hero video CTA, overlapping features, service grid, portfolio
masonry, stats counter, testimonials, and multi-column footer.

- **Source:** ColorLib Atomic — https://colorlib.com/wp/template/atomic/
- **Preview:** https://preview.colorlib.com/theme/atomic/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `proton` (apps/proton)

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/atomic/css/style.css`:

| Token           | Value                                 | Notes                                      |
| --------------- | ------------------------------------- | ------------------------------------------ |
| Font family     | `Work Sans` (Google Fonts)            | 300, 400, 700 weights                      |
| Primary color   | `#0389FF`                             | Bright blue — buttons, navbar, counter bg  |
| Body text       | `#999999`                             | Muted gray                                 |
| Headings        | `#000`                                | Solid black                                |
| Background      | `#fff`                                | White page background                      |
| Light bg        | `#f8f9fa`                             | Services section, footer                   |
| Button radius   | `0` (square)                          | No border-radius on buttons                |
| Button style    | uppercase, 14px, letter-spacing 0.1em | No box-shadow                              |
| Black button    | `#000` bg, `#fff` text                | Secondary CTA style                        |
| Counter section | `#0389FF` background                  | White text, numbers 50px, labels uppercase |
| Footer          | Light bg, uppercase h3 (15px, #ccc)   | Multi-column link list + social icons      |

## Section Order

1. **Navbar** — transparent over hero, solid blue on scroll, mobile hamburger.
2. **Hero** — full-viewport background, headline, subtext, CTA, play button.
3. **Features Overlap** — 3-column icon cards overlapping hero.
4. **About** — centered heading, two-column text.
5. **Image Carousel** — full-width 3-image strip.
6. **Services Grid** — 6 cards (3x2), light bg, "More Features" CTA.
7. **Portfolio** — 4 asymmetric image cards with hover overlay.
8. **Stats Counter** — blue bg, 3 animated metrics.
9. **Testimonials** — quote with large quotation mark.
10. **Footer** — 4 columns, download CTA, social icons, Component Dock link.

## Requirements

### Requirement: Navbar renders with correct navigation links

The navbar SHALL display the logo "Proton" and navigation links (Home, About,
Services, Gallery, Blog, Contact). On mobile, a hamburger menu toggle SHALL
be visible that opens/closes the mobile navigation.

#### Scenario: Navbar renders logo and desktop links

- **WHEN** the page loads
- **THEN** the navbar displays the logo "Proton"
- **AND** navigation links "Home", "About", "Services", "Gallery", "Blog", "Contact" are visible

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the user clicks the Open menu button on mobile
- **THEN** the mobile menu becomes visible
- **AND** the button label changes to "Close menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the user opens the mobile menu and clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section displays headline and CTA

The hero section SHALL display a full-viewport background image with a headline,
subtext, a "Free Download" CTA button, and a play button on the right side.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the hero section shows a background image
- **AND** a headline "Design a better website" is displayed
- **AND** a lead paragraph is visible below the headline
- **AND** a "Free Download" primary button is displayed
- **AND** a play button is visible on the right side

### Requirement: Features overlap card renders three feature items

The features overlap section SHALL display a white card overlapping the hero
with three feature cards in a row, each containing an icon, title, and
description.

#### Scenario: Three feature cards are displayed

- **WHEN** the page loads
- **THEN** three feature cards are displayed: "Intuitive Thinking", "Orange for Carrots", "Infinite Possibilities"
- **AND** each card shows an icon, a title, and a description

### Requirement: About section displays heading and two-column text

The about section SHALL display a centered heading "Good Design is a Good Start"
followed by a two-column text layout.

#### Scenario: About section renders heading and text

- **WHEN** the user scrolls to the about section
- **THEN** a centered heading "Good Design is a Good Start" is shown
- **AND** a two-column text layout is displayed below the heading

### Requirement: Image carousel renders three images

The image carousel SHALL render three full-width images in a horizontal strip.

#### Scenario: Carousel displays three images

- **WHEN** the user scrolls to the carousel section
- **THEN** three images are displayed

### Requirement: Services grid shows six service cards

The services section SHALL display six service cards in a 3x2 grid on a light
background with a "More Features" CTA button.

#### Scenario: Six service cards are rendered

- **WHEN** the user scrolls to the services section
- **THEN** six service cards are displayed: "Regular Update", "Infinite Possibilities", "Good Security", "Orange for Carrots", "Intuitive Thinking", "Play Video"
- **AND** a "More Features" button is centered below the grid

### Requirement: Portfolio thumbnails render in asymmetric grid

The portfolio section SHALL render four image cards in two asymmetric rows
with hover overlay effects.

#### Scenario: Four portfolio images displayed

- **WHEN** the user scrolls to the portfolio section
- **THEN** four image cards are displayed in two rows
- **AND** row 1 shows a 1/3 and a 2/3 width card
- **AND** row 2 shows a 2/3 and a 1/3 width card

### Requirement: Stats counter displays three metrics on blue background

The counter section SHALL display three animated statistics on a blue background
with white text: Lines of Code, Number of Projects, and Number of Clients.

#### Scenario: Counter displays three metrics

- **WHEN** the user scrolls to the counter section
- **THEN** three stats are displayed: "Lines of Code", "Number of Projects", "Number of Clients"
- **AND** the section has a blue background
- **AND** numbers animate counting up from zero

### Requirement: Testimonials section renders a quote

The testimonials section SHALL display a large decorative quotation mark and a
testimonial blockquote with author name and role.

#### Scenario: Testimonial quote is displayed

- **WHEN** the user scrolls to the testimonials section
- **THEN** a large quotation mark is displayed
- **AND** a testimonial quote is visible with author name and role

### Requirement: Footer displays multi-column layout with links

The footer SHALL display four columns of navigation links, a download CTA
button, social media icon links, and a copyright line with a Component Dock
link.

#### Scenario: Footer renders four columns

- **WHEN** the user scrolls to the footer
- **THEN** four columns are displayed: "About", "Learn More", "Support", "About Us"
- **AND** a download CTA button is present
- **AND** social media icon links are shown
- **AND** a copyright line with "Component Dock" link is at the bottom

### Requirement: No ColorLib references in app code

The app source code SHALL NOT contain any references to ColorLib, colorlib.com,
or preview.colorlib.com in any file including comments.

#### Scenario: No ColorLib strings in app

- **WHEN** searching for "colorlib" (case-insensitive) in apps/proton/
- **THEN** zero matches are found

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer Component Dock link

- **WHEN** the footer is rendered
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

### Requirement: Tests pass with 100% coverage

All tests in the proton workspace SHALL pass with 100% line, function, branch,
and statement coverage.

#### Scenario: All tests pass

- **WHEN** running `npm run test:coverage` in the proton workspace
- **THEN** all tests pass
- **AND** coverage is 100% across all metrics

### Requirement: Build succeeds

The proton workspace SHALL produce a successful production build.

#### Scenario: Production build

- **WHEN** running `npm run build` in the proton workspace
- **THEN** the build completes successfully
