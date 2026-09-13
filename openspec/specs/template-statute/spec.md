# Template: Statute (Law Firm Landing Page)

## Purpose

Statute is a law-firm landing-page template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Lawful" free template
(source: https://colorlib.com/wp/template/lawful/,
preview: https://preview.colorlib.com/theme/lawful/),
built under a DIFFERENT name (**Statute**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 multi-section law-firm landing page with
a full-width hero banner (background image + dark overlay), animated
counter stats, a video-embed about section, services grid, team cards,
blog cards, and a dark footer with newsletter signup. The design uses a
**pink-to-coral gradient** brand palette (`#f13d80` → `#f48464`),
Playfair Display serif headings, Raleway sans-serif body, white
`.primary-btn` with 5px radius, and a dark `#222` footer with copyright bar.

## Design tokens

| Token                | Value                                              | Notes                                        |
| -------------------- | -------------------------------------------------- | -------------------------------------------- |
| Brand gradient       | `linear-gradient(90deg, #f13d80 0%, #f48464 100%)` | Pink → coral; primary button, links, accents |
| Secondary gradient   | `linear-gradient(90deg, #e93d88 0%, #e5935a 100%)` | Slightly different pink-orange               |
| Primary accent       | `#ea1162`                                          | Hot pink (alternate accent)                  |
| Text primary         | `#222222`                                          | Headings, body text                          |
| Text secondary       | `#777777`                                          | Paragraphs                                   |
| Text muted           | `#999999`                                          | Footer links, copyright                      |
| White                | `#ffffff`                                          | Card backgrounds, button text                |
| Light section bg     | `#f4f8ff`                                          | Video/CTA section backgrounds                |
| Dark bg              | `#222222`                                          | Footer background                            |
| Footer border        | `#333333`                                          | Copyright bar top border                     |
| Font — headings      | `"Playfair Display", serif`                        | h1, h2 in hero/sections                      |
| Font — body          | `"Raleway", sans-serif`                            | Paragraphs, buttons, nav                     |
| Button radius        | `5px`                                              | `.primary-btn`                               |
| Button padding       | `0px 38px`                                         | Horizontal; 50px line-height                 |
| Button font          | 13px, weight 600, `#222` on white                  | CTA buttons                                  |
| Banner overlay       | `rgba(0,0,0,0.2)` over background image            | `.home_banner_area.overlay`                  |
| Border radius (misc) | `3px`, `10px`, `45px`, `50px`                      | Various cards and decorative elements        |

## Requirements

### Requirement: Navbar

The system SHALL render a responsive navbar with logo, navigation links,
and a search icon.

#### Scenario: Desktop navbar

- **GIVEN** the Statute app is rendered on a desktop viewport (≥992px)
- **THEN** a `<nav>` SHALL render with the logo text "Statute" on the left
- **AND** navigation links (Home, About, Services, Pages, Blog, Contact)
  SHALL appear in a horizontal row
- **AND** a search icon button SHALL be on the right

#### Scenario: Mobile navbar

- **GIVEN** the viewport is ≤991px
- **THEN** the navbar SHALL collapse to a hamburger toggle button
- **AND** clicking the toggle SHALL expand/collapse the navigation links
  vertically

### Requirement: Hero banner

The system SHALL render a full-width hero banner with a background image,
dark overlay, centered headline, subtext, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the hero banner is rendered
- **THEN** the background SHALL be a full-cover background image
  (use `picsum.photos/seed/statute-hero/1920/1080`)
- **AND** a dark overlay SHALL sit at 0.2 opacity
- **AND** a centered headline "We Combine Business with Finance" SHALL
  render in Playfair Display white text
- **AND** a subtext paragraph SHALL render below the headline
- **AND** a "Get Free Quote" CTA button SHALL render using the
  `.primary-btn` style (white bg, 5px radius, gradient on hover)

#### Scenario: Hero vertical centering

- **GIVEN** the hero banner is rendered
- **THEN** the content SHALL be vertically and horizontally centered
  within the banner area

### Requirement: Feature counters

The system SHALL render a 4-column stats row with icons and animated
counters (Qualified Lawyer, Solved Cases, etc.).

#### Scenario: Counter display

- **GIVEN** the feature counter section is rendered
- **THEN** four stat items SHALL render in a responsive 4-column grid
  (col-lg-3)
- **AND** each item SHALL have an icon image, a counter number, and a label
- **AND** the counter numbers SHALL be: 596+ (Qualified Lawyer),
  20650+ (Solved Cases), plus two more items

#### Scenario: Counter hover

- **GIVEN** a counter item is hovered
- **THEN** the item SHALL receive a pink-to-coral gradient background
  (`#f13d80` → `#f48464`)

### Requirement: Video/about section

The system SHALL render a 2-column section with a video embed on the left
and text content with author info on the right.

#### Scenario: Video section layout

- **GIVEN** the video/about section is rendered
- **THEN** the left column SHALL show a video background image
  (`picsum.photos/seed/statute-video/800/500`) with a centered play button
- **AND** the right column SHALL have a "Get to Know Project Estimate?"
  heading, descriptive paragraph, and a "Learn More" CTA button
- **AND** below the CTA, an author info block with avatar and
  description SHALL render

#### Scenario: Video section background

- **GIVEN** the video section is rendered on a light background
- **THEN** the section background SHALL be `#f4f8ff`

### Requirement: About grid

The system SHALL render a 2×2 grid of "Road to Success" summary cards.

#### Scenario: About grid items

- **GIVEN** the about grid section is rendered
- **THEN** four cards SHALL render in a 2×2 responsive grid
- **AND** each card SHALL have a title "Road to Success" and a
  descriptive paragraph

#### Scenario: About grid hover

- **GIVEN** an about card is hovered
- **THEN** the card SHALL receive a pink-to-coral gradient background

### Requirement: Services section

The system SHALL render a centered title block with "Services Offered By Us"
followed by a 3-column grid of service image cards.

#### Scenario: Services layout

- **GIVEN** the services section is rendered
- **THEN** a centered heading "Services Offered By Us" SHALL render
- **AND** below it, three service cards SHALL render in a responsive grid
- **AND** each card SHALL have an image, a linked title, and a
  descriptive paragraph

### Requirement: CTA / services-2 section

The system SHALL render a 2-column call-to-action with text on the left
and a decorative image on the right, on a light blue background.

#### Scenario: CTA section layout

- **GIVEN** the CTA/services-2 section is rendered
- **THEN** the background SHALL be `#f4f8ff`
- **AND** the left side SHALL have a subtitle, heading "Get to Know
  Project Estimate?", description paragraph, and author info block
- **AND** the right side SHALL show a large image
  (`picsum.photos/seed/statute-cta/600/600`)

### Requirement: Team section

The system SHALL render a centered title "Meet Our Experienced Team"
with 3 team member cards.

#### Scenario: Team cards

- **GIVEN** the team section is rendered
- **THEN** three team member cards SHALL render in a responsive grid
- **AND** each card SHALL have a portrait image
  (`picsum.photos/seed/statute-team-N/400/400`), a name, and a
  profession subtitle

### Requirement: Blog section

The system SHALL render a centered title "Latest From Our Blog Posts"
with 3 blog post cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **THEN** three blog cards SHALL render in a responsive grid
- **AND** each card SHALL have a thumbnail image, a date/author meta
  line, a linked title, and a short excerpt

### Requirement: Footer

The system SHALL render a dark footer with 4 columns: About, Navigation
links, Newsletter signup, and Contact info, followed by a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** the background SHALL be `#222222` with white text
- **AND** four columns SHALL render: About (text), Navigation Links
  (Home, Features, Services, Portfolio, Team, Pricing, Blog, Contact),
  Newsletter (email input + subscribe button), and Contact (address,
  phone, email, website)

#### Scenario: Newsletter form

- **GIVEN** the newsletter form is rendered in the footer
- **THEN** an email input SHALL render with a gradient subscribe button
  (pink-to-coral gradient, 50px border-radius)

#### Scenario: Copyright bar

- **GIVEN** the copyright bar is rendered
- **THEN** it SHALL have a dark `#222` background with `#333` top border
- **AND** the copyright text SHALL contain a link to Component Dock
  (`https://www.componentdock.com/`)

### Requirement: Component Dock branding

The system SHALL NOT reference ColorLib in any user-facing content. The
footer SHALL link to `https://www.componentdock.com/` branded as
"Component Dock".

#### Scenario: No ColorLib references

- **GIVEN** the Statute app is rendered
- **THEN** no element SHALL contain the text "ColorLib" or
  "colorlib.com"

#### Scenario: Component Dock footer link

- **GIVEN** the copyright bar is rendered
- **THEN** a link to `https://www.componentdock.com/` SHALL be visible
  with text mentioning "Component Dock"

### Requirement: Responsive design

The system SHALL be fully responsive across desktop, tablet, and mobile
viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport is ≤575px
- **THEN** all multi-column grids SHALL stack to single column
- **AND** the navbar SHALL collapse to a hamburger menu
- **AND** no horizontal overflow SHALL occur

#### Scenario: Tablet layout

- **GIVEN** the viewport is between 576px and 991px
- **THEN** multi-column grids SHALL use 2-column layout where applicable
- **AND** the navbar SHALL show the hamburger toggle

## Verification checklist

- [ ] Navbar renders with logo, links, search icon on desktop
- [ ] Navbar collapses to hamburger on mobile
- [ ] Hero banner: full-width, background image, overlay, centered content
- [ ] Hero CTA button uses gradient on hover
- [ ] Counter section: 4 items with icons and numbers
- [ ] Counter items highlight on hover with gradient
- [ ] Video/about: 2-column layout, video left, text right
- [ ] About grid: 2×2 cards with hover gradient
- [ ] Services: centered title + 3-column card grid
- [ ] CTA section: light bg, 2-column, text + image
- [ ] Team: 3 member cards with photos
- [ ] Blog: 3 post cards with thumbnails
- [ ] Footer: dark bg, 4 columns, newsletter form
- [ ] Copyright bar with Component Dock link
- [ ] No ColorLib references in any app file
- [ ] Fully responsive (mobile/tablet/desktop)
- [ ] All placeholder images use picsum.photos
- [ ] Fonts loaded via Google Fonts (Playfair Display + Raleway)
- [ ] All interactive elements have proper a11y attributes
