# Template: Nave (Church Ministry)

## Purpose

A church ministry template with hero slider, upcoming events, worship times, sermons and ministries sections. Recreation of ColorLib's **Advent** template (church/religious ministry site).

- **ColorLib source:** https://colorlib.com/wp/template/advent/
- **Preview URL:** https://preview.colorlib.com/theme/advent/
- **New name:** `nave` (the central part of a church building)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg

## Requirements

### Requirement: Navbar renders navigation links and brand

The navbar SHALL display the brand name "NAVE" and navigation links for Home, Who We Are, Ministries (with dropdown), Events, and Contact.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on desktop viewport
- **THEN** the brand name "NAVE" is visible
- **AND** navigation links: Home, Who We Are, Ministries, Events, Contact are rendered

#### Scenario: Ministries dropdown on hover

- **WHEN** the user hovers over "Ministries"
- **THEN** a dropdown menu appears with Children, Students, Care Ministry, Missions, Request Prayer

#### Scenario: Mobile hamburger toggle

- **WHEN** the viewport is mobile-width
- **THEN** a hamburger button is visible
- **AND** clicking the toggle opens the mobile menu

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a link is clicked
- **THEN** the mobile menu closes

### Requirement: HeroSlider renders hero section with carousel

The hero slider SHALL display full-width background images with centered heading, subtitle, and a CTA button with carousel dot navigation.

#### Scenario: First slide renders by default

- **WHEN** the page loads
- **THEN** the first slide heading "Arise, Shine" is visible
- **AND** a "Watch Now" CTA button is shown

#### Scenario: Carousel navigation via dots

- **WHEN** the user clicks the second carousel dot
- **THEN** the second slide with heading "Explore Our Weekend Services" is displayed

### Requirement: UpcomingEvents shows event info and countdown

The upcoming events section SHALL display event metadata (date, location, pastor) and a countdown timer with weeks, days, hours, minutes, seconds in gold boxes.

#### Scenario: Event metadata is displayed

- **WHEN** the page loads
- **THEN** the "Upcoming Events" badge is visible
- **AND** event date, location, and pastor are shown

#### Scenario: Countdown timer renders and updates

- **WHEN** the page loads
- **THEN** countdown units Weeks, Days, Hours, Min, Sec are displayed
- **AND** the countdown values update every second

### Requirement: WorshipTime shows schedule in split layout

The worship time section SHALL display a split layout with service schedule on the left and a background image on the right.

#### Scenario: Schedule items are listed

- **WHEN** the page loads
- **THEN** "Worship Time" heading is visible
- **AND** Morning Worship, Afternoon Worship, Evening Worship with times are shown

### Requirement: Sermons section displays sermon cards

The sermons section SHALL display 3 sermon cards each with a circular avatar, title, pastor name, date, and a play button.

#### Scenario: Three sermon cards render

- **WHEN** the page loads
- **THEN** "Listen Our Sermons" heading is visible
- **AND** 3 sermon cards with titles, pastor names, and dates are shown
- **AND** 3 play buttons are rendered

### Requirement: EventsMinistries shows ministry event cards

The events and ministries section SHALL display 3 cards in a grid with images, titles, categories, and descriptions.

#### Scenario: Three ministry cards render

- **WHEN** the page loads
- **THEN** "Events & Ministries" heading is visible
- **AND** 3 event cards with titles, categories, and descriptions are shown

### Requirement: Footer links to Component Dock

The footer SHALL display About, Quick Links, Contact Info columns, social media links, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer columns render

- **WHEN** the page loads
- **THEN** About The Nave, Quick Links, Contact Info sections are visible
- **AND** social media icon links are shown

#### Scenario: Component Dock attribution link

- **WHEN** the footer renders
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/nave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/nave/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Design tokens (from reference CSS + preview)

| Token                 | Value                              |
| --------------------- | ---------------------------------- |
| Brand color (primary) | `#ffc107` (gold/amber)             |
| Button accent         | `#ffce3a` (lighter gold)           |
| Dark background       | `#262626`                          |
| Body font             | `"Open Sans", Arial, sans-serif`   |
| Heading font          | `"Playfair Display", Times, serif` |
| Button border-radius  | `0` (sharp/square)                 |
| Body text on dark     | `#b3b3b3`                          |
| Section heading badge | `#ffc107` bg, white text           |
| Countdown box bg      | `#ffc107`                          |

## Verification checklist

- [ ] Navbar: transparent over hero, collapses on mobile, dropdown for Ministries
- [ ] Hero: parallax background, centered text, white outlined square button, carousel dots
- [ ] Upcoming Events: dark bg, yellow badge, event meta, countdown timer with gold boxes
- [ ] Worship Time: split layout (text/image), responsive stacking
- [ ] Sermons: 3 cards with circular avatars, play buttons
- [ ] Events & Ministries: 3-column grid cards with images and descriptions
- [ ] Footer: 3-column dark bg, About/Quick Links/Contact, social icons, Component Dock link
- [ ] Brand color #ffc107 used consistently (gold accent throughout)
- [ ] Heading font: Playfair Display (serif); body: Open Sans (sans-serif)
- [ ] Square button corners (border-radius: 0) on primary CTA buttons
- [ ] Placeholder images via picsum.photos/seed/nave-<n>
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Public/CNAME: nave.free.componentdock.com
- [ ] Package name: @free-react-templates/nave
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
