# Meetuply — Implementation Tasks

Source design: **Eventalk** (`https://colorlib.com/wp/template/eventalk/`) → recreation name **meetuply**. Shipped at https://meetuply.free.componentdock.com.

Scope: An event conference template with full-viewport hero, venue features, fun facts and a day schedule sections. Recreation of ColorLib's **Eventalk** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

## Component breakdown

Render order as composed in `apps/meetuply/src/App.tsx`:

### 1. Navbar
- The navbar SHALL be sticky with a dark charcoal background, contain 6 navigation links (Home, About, Speakers, Schedule, Blog, Contact), and a "Buy Ticket" CTA button with brand styling.
- Scenario — Navbar renders all elements:
  - **WHEN** the page loads
  - **THEN** the navbar is visible at the top with a dark background
  - **AND** it contains links: Home, About, Speakers, Schedule, Blog, Contact
  - **AND** there is a "Buy Ticket" CTA button with brand purple-blue border
- Scenario — Navbar mobile menu toggle:
  - **WHEN** the user clicks the mobile menu button
  - **THEN** the mobile menu opens with all navigation links
  - **AND** clicking a link closes the menu

### 2. Hero
- The hero section SHALL be full viewport height with a background image, purple-blue gradient overlay, countdown timer, heading, date/location subtext, and a "Buy Ticket" button.
- Scenario — Hero renders heading and countdown:
  - **WHEN** the user views the hero section
  - **THEN** a large heading "Developer Conference 2025" is displayed
  - **AND** a countdown timer shows days, hours, minutes, seconds
  - **AND** a "Buy Ticket" CTA button is visible

### 3. Venue
- The venue section SHALL display a "Venue" heading and 4 feature cards (Venue, Transport, Hotel, Restaurant) with icons and descriptions.
- Scenario — Venue renders all cards:
  - **WHEN** the user scrolls to the Venue section
  - **THEN** 4 feature cards are displayed in a grid
  - **AND** each card has an icon, title, and description

### 4. FunFacts
- The fun facts section SHALL display a "Fun Facts" heading and descriptive paragraph.
- Scenario — Fun facts renders content:
  - **WHEN** the user scrolls to the Fun Facts section
  - **THEN** the heading "Fun Facts" is visible
  - **AND** a descriptive paragraph is displayed

### 5. Counters
- The counters section SHALL display 4 statistics (Speakers, Sponsors, Total Seats, Topics) with animated count-up on scroll.
- Scenario — Counters animate on scroll:
  - **WHEN** the counters section scrolls into view
  - **THEN** each statistic animates from 0 to its target value
  - **AND** the final values are displayed with appropriate labels

### 6. Speakers
- The speakers section SHALL display speaker cards in a responsive grid with image, name, role, and social overlay.
- Scenario — Speakers renders all cards:
  - **WHEN** the user scrolls to the Speakers section
  - **THEN** 4 speaker cards are displayed in a responsive grid
  - **AND** each card has an image, name, and role

### 7. Schedule
- The schedule section SHALL display tabbed day navigation (Day 01-04) with event listings per day.
- Scenario — Schedule day switching:
  - **WHEN** the user clicks a day tab
  - **THEN** the corresponding day's events are displayed
  - **AND** each event shows time, title, description, and speaker

### 8. Testimony
- The testimony section SHALL have a dark brown background with parallax effect and a blockquote.
- Scenario — Testimony renders quote:
  - **WHEN** the user scrolls to the Testimony section
  - **THEN** a testimonial quote is displayed with author attribution

### 9. Pricing
- The pricing section SHALL display 3 pricing tiers (Small Team, Family Pack, Enterprise) with prices, feature lists, and "Buy Ticket" buttons.
- Scenario — Pricing renders all tiers:
  - **WHEN** the user scrolls to the Pricing section
  - **THEN** 3 pricing cards are displayed
  - **AND** each card shows price, features, and a "Buy Ticket" button
  - **AND** the "Family Pack" tier is highlighted as "Most Popular"

### 10. Blog
- The blog section SHALL display blog entry cards with date badges, titles, and excerpts.
- Scenario — Blog renders entries:
  - **WHEN** the user scrolls to the Blog section
  - **THEN** 3 blog entry cards are displayed in a grid
  - **AND** each card has a date badge, title, and excerpt

### 11. Newsletter
- The newsletter section SHALL have a dark brown parallax background, heading, email input, and subscribe button.
- Scenario — Newsletter form submission:
  - **WHEN** the user enters an email and clicks Subscribe
  - **THEN** the form is submitted and the email field is cleared

### 12. Footer
- The footer SHALL have a dark charcoal background, brand name, Useful Links column, contact info column, social icons, and a link to https://www.componentdock.com/.
- Scenario — Footer links to Component Dock:
  - **WHEN** the user scrolls to the footer
  - **THEN** a link to "Component Dock" is visible
  - **AND** it points to https://www.componentdock.com/

### Cross-cutting requirements

- **Mobile responsiveness** — The template SHALL be fully responsive across all screen sizes.
  - Scenario — Mobile layout: **WHEN** the viewport is narrow (mobile); **THEN** the navbar collapses to a hamburger menu; **AND** all sections stack vertically
- **Accessibility** — The template SHALL meet WCAG AA accessibility standards.
  - Scenario — Heading hierarchy and alt text: **WHEN** the page is rendered; **THEN** all images have alt text; **AND** the page has proper heading hierarchy (h1 > h2 > h3)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/meetuply/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/meetuply/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/meetuply` ships on https://meetuply.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/meetuply/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/meetuply/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/meetuply/public/CNAME` = `meetuply.free.componentdock.com`
  and the package `homepage` = `https://meetuply.free.componentdock.com`.
