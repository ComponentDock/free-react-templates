# Template: Subdivide (Footer Component)

## Purpose

Recreation of ColorLib's "Bootstrap Footer 06" — a centered, multi-column
footer with five link columns, a bottom bar containing social icons, copyright,
and app store links. This is a focused footer component template, not a full-page
website template.

- **Source:** ColorLib Bootstrap Footer 06 (https://colorlib.com/wp/template/bootstrap-footer-06/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-06/
- **New name:** `subdivide` (structured subdivisions of content — a multi-column footer)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Source slug:** `bootstrap-footer-06`

## Design Tokens

Extracted from the live preview CSS (css/style.css — `.footer-95942`):

| Token                     | Value                                       | Notes                           |
| ------------------------- | ------------------------------------------- | ------------------------------- |
| **Font family**           | "Poppins", sans-serif                       | Loaded via Google Fonts          |
| **Footer background**     | #fff (default, no override)                 | White / light theme              |
| **Footer padding**        | 7rem 0                                      | Generous vertical spacing        |
| **Column layout**         | 5 columns, centered (col-md-8, justify-center) | Centered content block      |
| **Heading (h3) size**     | 16px                                        | Small section headings           |
| **Heading weight**        | bold (700)                                  | Emphasized section titles        |
| **Heading margin-bottom** | 20px                                        | Space below headings             |
| **Nav link display**      | block (stacked)                             | Vertical link lists              |
| **Nav link font-size**    | 14px                                        | Smaller body text                |
| **Nav link color**        | #777                                        | Medium gray                      |
| **Nav link hover**        | #4200ff                                     | Deep purple accent               |
| **Nav link margin-bottom**| 10px                                        | Vertical spacing between links   |
| **Social icon color**     | #ccc                                        | Light gray (subtle)              |
| **Social icon hover**     | #4200ff                                     | Deep purple accent               |
| **Social icon padding**   | 10px                                        | Clickable area                   |
| **App store links color** | #ccc                                        | Same as social                   |
| **App store font-size**   | 13px                                        | Smaller text                     |
| **App store hover**       | #4200ff                                     | Deep purple accent               |
| **Copyright**             | small element, centered                     | Muted attribution                |
| **Divider**               | border-top on col-md-12                     | Full-width separator             |
| **Link transition**       | .3s all ease                                | Smooth hover transitions         |
| **Content area height**   | 70vh                                        | Demo hero area above footer      |

## Requirements

### Requirement: Footer renders with white background

The footer component SHALL render with a white background and generous vertical
padding (7rem top and bottom).

#### Scenario: Footer background styling

- **WHEN** the Subdivide component is rendered
- **THEN** the footer element has a white background
- **AND** the footer has 7rem vertical padding

### Requirement: Five link columns are centered

The footer SHALL display five link columns (Discover, About, Services, Buy, Help)
centered within a max-width container (col-md-8). Links within each column are
stacked vertically.

#### Scenario: Discover column

- **WHEN** the Subdivide component is rendered
- **THEN** the "Discover" column contains links: "Website editors", "Online retail", "Get started", "Services"

#### Scenario: About column

- **WHEN** the Subdivide component is rendered
- **THEN** the "About" column contains links: "Contact", "Services", "Team"

#### Scenario: Services column

- **WHEN** the Subdivide component is rendered
- **THEN** the "Services" column contains links: "Events", "News", "Awards"

#### Scenario: Buy column

- **WHEN** the Subdivide component is rendered
- **THEN** the "Buy" column contains links: "Where to Buy", "Shop Online"

#### Scenario: Help column

- **WHEN** the Subdivide component is rendered
- **THEN** the "Help" column contains links: "FAQ", "Support", "Knowledge Base"

#### Scenario: Columns are centered

- **WHEN** the Subdivide component is rendered
- **THEN** the five columns are centered within a narrower container
- **AND** the column headings are 16px bold with 20px margin-bottom

### Requirement: Divider separates columns from bottom bar

A full-width top border divider SHALL separate the link columns from the
bottom bar section.

#### Scenario: Divider visibility

- **WHEN** the Subdivide component is rendered
- **THEN** a border-top divider is visible between the link columns and the bottom bar

### Requirement: Bottom bar with social icons, copyright, and app links

The footer SHALL display a bottom bar with three sections: social media icons
on the left, copyright in the center, and app store links on the right.

#### Scenario: Social icons

- **WHEN** the Subdivide component is rendered
- **THEN** the left section shows social media icons for Twitter and Facebook
- **AND** the icons are displayed horizontally (inline)
- **AND** the icon color is light gray (#ccc)
- **AND** hover color is deep purple (#4200ff)

#### Scenario: Copyright notice

- **WHEN** the Subdivide component is rendered
- **THEN** the center section shows copyright text
- **AND** the copyright text uses a `<span class="small">` element
- **AND** the text reads "Subdivide © All Rights Reserved."

#### Scenario: App store links

- **WHEN** the Subdivide component is rendered
- **THEN** the right section shows app store links
- **AND** the links are "App Store" (Apple icon) and "Google Store" (Play icon)
- **AND** the link color is #ccc with 13px font size
- **AND** hover color is deep purple (#4200ff)

### Requirement: Link hover behavior

Footer links SHALL transition color from gray (#777) to deep purple (#4200ff)
on hover with a smooth 0.3s transition.

#### Scenario: Nav link hover styling

- **WHEN** a user hovers over a footer navigation link
- **THEN** the link color transitions smoothly from #777 to #4200ff

#### Scenario: Social icon hover styling

- **WHEN** a user hovers over a social media icon
- **THEN** the icon color transitions from #ccc to #4200ff

### Requirement: Responsive layout

The footer SHALL be responsive, with columns stacking on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the Subdivide component is rendered on a mobile viewport
- **THEN** the five link columns stack vertically
- **AND** the bottom bar sections stack vertically
- **AND** all text remains readable

### Requirement: Accessibility

The footer SHALL use semantic HTML elements and all interactive elements
SHALL be focusable with accessible labels.

#### Scenario: Semantic HTML

- **WHEN** the Subdivide component is rendered
- **THEN** the footer uses a semantic `<footer>` element
- **AND** all links are focusable
- **AND** social links have accessible aria-labels
- **AND** app store links have accessible labels

### Requirement: Component Dock attribution

The footer SHALL include a "More templates at Component Dock" link pointing
to https://www.componentdock.com/.

#### Scenario: Attribution link

- **WHEN** the Subdivide component is rendered
- **THEN** a "Component Dock" link is present in the footer
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab
