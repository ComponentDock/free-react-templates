# Template: Substructure (Footer Component)

## Purpose

Recreation of ColorLib's "Bootstrap Footer 05" — a clean, light-themed website
footer with an email subscribe form, horizontal navigation, social media icons,
and a simple bottom bar with logo, secondary links, and copyright. This is a
focused footer component template, not a full-page website template.

- **Source:** ColorLib Bootstrap Footer 05 (https://colorlib.com/wp/template/bootstrap-footer-05/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-05/
- **New name:** `substructure` (the hidden foundation beneath — a footer theme)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Source slug:** `bootstrap-footer-05`

## Design Tokens

Extracted from the live preview CSS (css/style.css — `.footer-59391`):

| Token                     | Value                                       | Notes                           |
| ------------------------- | ------------------------------------------- | ------------------------------- |
| **Font family**           | "Poppins", sans-serif                       | Loaded via Google Fonts          |
| **Footer background**     | #fff                                        | White / light theme              |
| **Footer border-top**     | 1px solid #efefef                           | Light gray divider               |
| **Footer padding**        | 4rem 0                                      | Moderate vertical spacing        |
| **Site logo color**       | #3e64ff                                     | Blue accent                      |
| **Site logo size**        | 30px                                        | Prominent brand mark             |
| **Site logo weight**      | 900 (black)                                 | Heavy, bold brand                |
| **Nav link color**        | #777                                        | Medium gray                      |
| **Nav link hover**        | #3e64ff                                     | Blue accent on hover             |
| **Nav link padding**      | 10px                                        | Even spacing                     |
| **Social icon bg**        | #e6e6e6                                     | Light gray circle                |
| **Social icon color**     | #333333                                     | Dark gray                        |
| **Social icon hover**     | #3e64ff                                     | Blue accent                      |
| **Social icon shape**     | border-radius: 50%                          | Circular, 40x40px               |
| **Subscribe input bg**    | #e6e6e6                                     | Light gray                       |
| **Subscribe input height**| 45px                                        | Standard form height             |
| **Subscribe input border**| none                                        | Clean, borderless                |
| **Subscribe placeholder** | #b3b3b3, 14px                               | Muted, smaller text              |
| **Copyright color**       | #777                                        | Same as nav links                |
| **Copyright size**        | small                                       | Small tag element                |
| **Link transition**       | .3s all ease                                | Smooth hover transitions         |
| **Content area height**   | 70vh                                        | Demo hero area above footer      |

## Requirements

### Requirement: Footer renders with white background and top border

The footer component SHALL render with a white (#fff) background and a light
gray (#efefef) top border, matching the light theme of the original.

#### Scenario: Footer background styling

- **WHEN** the Substructure component is rendered
- **THEN** the footer element has a white (#fff) background
- **AND** the footer has a 1px solid top border in light gray (#efefef)

### Requirement: Top section with email subscribe, nav links, and social icons

The footer SHALL render a top section (bordered bottom) containing three
columns: an email subscribe form on the left, horizontal navigation links
in the center, and social media icon buttons on the right.

#### Scenario: Subscribe form column

- **WHEN** the Substructure component is rendered
- **THEN** a left column contains an email input field
- **AND** the input has placeholder text "Enter your email"
- **AND** the input has a light gray (#e6e6e6) background with no border
- **AND** the input is 45px tall
- **AND** a submit button with an arrow icon is positioned inside the input

#### Scenario: Navigation links column

- **WHEN** the Substructure component is rendered
- **THEN** a center column contains navigation links
- **AND** the links are "Features", "Blog", "Pricing", "Services"
- **AND** the links are displayed horizontally (inline)

#### Scenario: Social icons column

- **WHEN** the Substructure component is rendered
- **THEN** a right column contains social media icon links
- **AND** the icons are Twitter, Instagram, Facebook, Pinterest
- **AND** each icon is a circular (border-radius: 50%) 40x40px button
- **AND** the icon buttons have a light gray (#e6e6e6) background
- **AND** the icon color is dark gray (#333)
- **AND** hover color is blue (#3e64ff)

### Requirement: Bottom section with logo, secondary links, and copyright

The footer SHALL render a bottom section with three columns: the site logo
(centered on desktop) on the left, secondary navigation links (Terms, About,
Privacy, Contact) in the center, and a copyright notice on the right.

#### Scenario: Logo column

- **WHEN** the Substructure component is rendered
- **THEN** the logo column shows "Substructure" as a link
- **AND** the logo is 30px, blue (#3e64ff), font-weight 900
- **AND** the logo is centered on desktop (text-lg-center)

#### Scenario: Secondary navigation links

- **WHEN** the Substructure component is rendered
- **THEN** the secondary links column contains "Terms", "About", "Privacy", "Contact"
- **AND** the links are displayed horizontally (inline)
- **AND** the links use the same #777 color and hover behavior

#### Scenario: Copyright notice

- **WHEN** the Substructure component is rendered
- **THEN** the right column shows a copyright notice
- **AND** the copyright text uses a `<small>` element
- **AND** the copyright color is #777

### Requirement: Link hover behavior

Footer links SHALL transition color from gray (#777) to blue (#3e64ff) on
hover with a smooth 0.3s transition.

#### Scenario: Link hover styling

- **WHEN** a user hovers over a footer navigation link
- **THEN** the link color transitions smoothly from #777 to #3e64ff

#### Scenario: Social icon hover styling

- **WHEN** a user hovers over a social media icon
- **THEN** the icon color transitions from #333 to #3e64ff

### Requirement: Subscribe form interaction

The subscribe form SHALL accept an email address and provide visual feedback
on interaction.

#### Scenario: Subscribe input placeholder

- **WHEN** the subscribe form is rendered
- **THEN** the email input shows "Enter your email" placeholder
- **AND** the placeholder text is #b3b3b3, 14px

#### Scenario: Subscribe button icon

- **WHEN** the subscribe form is rendered
- **THEN** a button with a right-pointing arrow icon is visible inside the input
- **AND** the arrow is rotated 180 degrees (pointing right, submitting direction)

### Requirement: Responsive layout

The footer SHALL be responsive, with columns stacking on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the Substructure component is rendered on a mobile viewport
- **THEN** the top section columns stack vertically
- **AND** the bottom section columns stack vertically
- **AND** all text remains readable

### Requirement: Accessibility

The footer SHALL use semantic HTML elements and all interactive elements
SHALL be focusable with accessible labels.

#### Scenario: Semantic HTML

- **WHEN** the Substructure component is rendered
- **THEN** the footer uses a semantic `<footer>` element
- **AND** all links are focusable
- **AND** social links have accessible aria-labels
- **AND** the subscribe form has a label or aria-label for the email input

### Requirement: Component Dock attribution

The footer SHALL include a "More templates at Component Dock" link pointing
to https://www.componentdock.com/.

#### Scenario: Attribution link

- **WHEN** the Substructure component is rendered
- **THEN** a "Component Dock" link is present in the footer
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab
