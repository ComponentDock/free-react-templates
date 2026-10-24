# Template: Boxpilot (Creative Digital Agency)
<!-- prep-status: shipped-as=boxpulse -->
> **SHIPPED-UNDER** — the ColorLib `boxus` design this prep describes already
> ships as `apps/boxpulse` (<https://boxpulse.free.componentdock.com>).
> Do not scaffold `apps/boxpilot`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-boxpulse/spec.md`.

## Purpose

Recreation of ColorLib "Boxus" — a one-page creative digital agency template.

- **Source slug:** `boxus`
- **Preview URL:** https://preview.colorlib.com/theme/boxus/
- **Original:** https://colorlib.com/wp/template/boxus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token             | Value                         | Notes                                         |
| ----------------- | ----------------------------- | --------------------------------------------- |
| Font family       | `'Roboto', sans-serif`        | Google Font, body + headings                  |
| Primary accent    | `#E74C78` (pink-rose)        | CTAs, hover states, active nav                |
| Secondary green   | `#32DB8A`                    | Skill bars, accent highlights                 |
| Secondary blue    | `#4C9EE7`                    | Alternate accent, section backgrounds         |
| Secondary yellow  | `#FFBB42`                    | Tags, badge highlights                        |
| Body text         | `#727190` (muted purple-gray)| Paragraph copy, secondary text                |
| Heading text      | Dark gray/black              | Section headings                              |
| Section BG alt    | Light gray `#f9f9f9`         | Alternating section backgrounds               |
| Button radius     | Rounded (border-radius ~4px) | Small rounded corners on buttons              |
| Button padding    | ~12px 30px                   | Comfortable padding, medium size              |
| Surface (measured) | `#221c5a` | paints it ×8 — `background-color` on `#news`; style.css (28,656 B, sha256 d0b9424c848c) · <https://preview.colorlib.com/theme/boxus/> |

### Color palette (inline style accents from preview)
- Service card dots: `#32DB8A` (green), `#FFBB42` (yellow), `#E74C78` (pink), `#4C9EE7` (blue)

## Section Order (from preview DOM)

1. **Navbar** — Fixed top, logo "BOXUS", links: Home, Services, Portfolio, About, News, Video, Skills, Contact. Mobile hamburger menu.
2. **Hero** — Full-width intro area. Heading: "We Craft Awesome Web And Graphic Design Solutions". Subtext about supporting students. CTA button. Clean white background.
3. **Services** — Alternating left/right layout with numbered sections (01–04): Branding, Mobile Apps, Graphic Design, and fourth service. Each has a colored dot indicator, title, and description. Image slider area on opposite side.
4. **Portfolio** — Grid layout with filter tabs (All, HTML, PSD Mockup). Card items with hover overlay. "Load More" button at bottom. 2-column grid.
5. **Crafters (Team)** — Timeline section with team member profiles. Bio timeline (2001–2016 career path), member photos, role titles (Lead Designer, SEO Master, PSD Guru). Cards in a row.
6. **Stories (Blog)** — 3-column blog card grid. Each card has image, title excerpt, author name, and category tag. "GO TO BLOG" link at bottom.
7. **Quotes/Testimonials** — Rotating quote cards with author attribution and name (Scott Hanselman, Tom Bissel, Steven Heller). Clean layout with quotation marks.
8. **Offer** — 2×4 icon grid showcasing capabilities: Video Editing, Premium Clear, For All Displays, Right On Time, Innovative Ideas, Perfect Sound, 3D Solution, plus one more. Each with icon, title, and short description.
9. **Expertise (Skills)** — Horizontal skill/progress bars with labels and percentage values. Design-related skills.
10. **Contact** — Contact form section with input fields and submit button.
11. **Footer** — Copyright notice, "© 2018 All rights reserved. | Boxus Template by Colorlib" replaced with Component Dock attribution.

## Requirements

### Navbar

Feature: Navigation Bar

#### Scenario: Desktop navbar displays all section links

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar shows the logo and links for Home, Services, Portfolio, About, News, Video, Skills, Contact

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** the user scrolls past the hero section
- **WHEN** the scroll position exceeds the navbar height
- **THEN** the navbar should be fixed at the top of the viewport

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** the user is on a mobile viewport
- **WHEN** they click the hamburger menu icon
- **THEN** the navigation links should slide in or appear
- **AND** clicking a link should close the menu and scroll to the section

### Hero Section

Feature: Hero / Intro Section

#### Scenario: Hero displays headline and CTA

- **GIVEN** the user views the page
- **WHEN** the hero section is visible
- **THEN** it shows the heading "We Craft Awesome Web And Graphic Design Solutions"
- **AND** a subtext description below the heading
- **AND** a call-to-action button

#### Scenario: Hero has clean white background

- **GIVEN** the user views the hero section
- **THEN** the background is white
- **AND** the heading text is dark

### Services Section

Feature: Services Section

#### Scenario: Four services are displayed with numbered markers

- **GIVEN** the user scrolls to the services section
- **WHEN** the section renders
- **THEN** four service items appear in alternating left-right layout
- **AND** each service has a number (01, 02, 03, 04), title, and description
- **AND** each has a colored dot indicator matching the palette

#### Scenario: Services alternate layout direction

- **GIVEN** the services section renders
- **THEN** odd-numbered services show text on the left and image on the right
- **AND** even-numbered services show image on the left and text on the right

### Portfolio Section

Feature: Portfolio Section

#### Scenario: Portfolio grid with filter tabs

- **GIVEN** the user scrolls to the portfolio section
- **WHEN** the section renders
- **THEN** filter tabs for "All", "HTML", and "PSD Mockup" are visible
- **AND** portfolio items display in a grid

#### Scenario: Clicking a filter tab filters items

- **GIVEN** the portfolio section is visible
- **WHEN** the user clicks a filter tab
- **THEN** only items matching that category should be visible

#### Scenario: Load More button at bottom

- **GIVEN** the portfolio section renders
- **THEN** a "LOAD MORE" button is visible below the grid

### Crafters (Team) Section

Feature: Team / Crafters Section

#### Scenario: Team members displayed with timeline

- **GIVEN** the user scrolls to the crafters section
- **WHEN** the section renders
- **THEN** team member cards appear with photos and role titles
- **AND** a career timeline is visible (2001-2016 range)
- **AND** members include Lead Designer, SEO Master, PSD Guru roles

### Stories (Blog) Section

Feature: Blog / Stories Section

#### Scenario: Three blog cards in a row

- **GIVEN** the user scrolls to the stories section
- **WHEN** the section renders
- **THEN** three blog post cards appear in a 3-column grid
- **AND** each card has an image, title, excerpt, author name, and category
- **AND** a "GO TO BLOG" link appears below the cards

### Quotes Section

Feature: Testimonials / Quotes Section

#### Scenario: Quote cards with author attribution

- **GIVEN** the user scrolls to the quotes section
- **WHEN** the section renders
- **THEN** quote cards appear with quotation text and author name
- **AND** quotes are from attributed sources

### Offer Section

Feature: Offer / Capabilities Section

#### Scenario: 8-item icon grid

- **GIVEN** the user scrolls to the offer section
- **WHEN** the section renders
- **THEN** a 2×4 grid of capability items appears
- **AND** each item has an icon, title, and short description
- **AND** items include: Video Editing, Premium Clear, For All Displays, Right On Time, Innovative Ideas, Perfect Sound, 3D Solution

### Expertise (Skills) Section

Feature: Skills / Expertise Section

#### Scenario: Skill bars with progress indicators

- **GIVEN** the user scrolls to the expertise section
- **WHEN** the section renders
- **THEN** skill bars display with labels and percentage values
- **AND** bars are filled to their respective percentages
- **AND** the section has a light background

### Contact Section

Feature: Contact Section

#### Scenario: Contact form with input fields

- **GIVEN** the user scrolls to the contact section
- **WHEN** the section renders
- **THEN** a form with input fields (name, email, subject, message) is visible
- **AND** a submit button is present

#### Scenario: Form validation on empty submit

- **GIVEN** the contact form is visible
- **WHEN** the user clicks submit without filling fields
- **THEN** validation errors should appear

### Footer

Feature: Footer

#### Scenario: Footer shows Component Dock attribution

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer renders
- **THEN** it displays copyright text
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification checklist

- [ ] All 11 sections render in correct order
- [ ] Navbar is sticky and responsive (mobile hamburger)
- [ ] Hero section has correct headline text and CTA button
- [ ] Services section has 4 items in alternating layout with numbered markers
- [ ] Portfolio section has filter tabs and grid
- [ ] Team/Crafters section shows member cards with timeline
- [ ] Blog/Stories section shows 3 cards in a row with "GO TO BLOG" link
- [ ] Quotes section shows testimonial cards
- [ ] Offer section shows 8-item icon grid in 2×4 layout
- [ ] Expertise section shows skill bars with percentages
- [ ] Contact section has a working form with validation
- [ ] Footer links to Component Dock
- [ ] Roboto font loaded from Google Fonts
- [ ] Brand colors match token values (#E74C78, #32DB8A, #4C9EE7, #FFBB42)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Responsive layout works on mobile/tablet/desktop
