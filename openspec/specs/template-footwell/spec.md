# Template: Footwell (Footer Component)

## Purpose

Recreation of ColorLib's "Bootstrap Footer 01" — a dark-themed website footer
with a CTA banner, multi-column link sections, and social media icons. This is
a focused footer component template, not a full-page website template.

- **Source:** ColorLib Bootstrap Footer 01 (https://colorlib.com/wp/template/bootstrap-footer-01/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-01/
- **New name:** `footwell` (footer + well, a deep section)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview CSS (css/style.css):

| Token                     | Value                                       | Notes                       |
| ------------------------- | ------------------------------------------- | --------------------------- |
| **Font family**           | "Roboto", sans-serif                        | System font stack           |
| **Footer background**     | #141d2a                                     | Dark navy                   |
| **Footer text color**     | #fff                                        | White                       |
| **Footer padding**        | 7rem 0                                      | Generous vertical spacing   |
| **Heading (h3) size**     | 16px                                        | Small section headings      |
| **Heading margin-bottom** | 10px                                        | Tight under headings        |
| **Link color**            | #666873                                     | Muted gray-purple           |
| **Link hover color**      | #fff                                        | White on hover              |
| **CTA background**        | #8186d5                                     | Purple/indigo accent        |
| **CTA shadow**            | -20px -20px 0 0 rgba(52,58,64,0.2)          | Offset box shadow           |
| **CTA button**            | dark, rounded-0, py-3 px-5                  | Dark, square, padded        |
| **CTA position**          | relative, top: -150px                       | Overlaps above footer       |
| **Social icon bg**        | #8186d5                                     | Same purple as CTA          |
| **Social icon shape**     | border-radius: 50%                          | Circular, 40x40px           |
| **Social icon color**     | #fff                                        | White                       |
| **Footer logo**           | #fff, 20px, uppercase, letter-spacing .1rem | Branded logo text           |
| **Copyright**             | color: #666873                              | Muted gray                  |
| **Link transition**       | .3s all ease                                | Smooth hover transitions    |
| **Content area height**   | 70vh                                        | Demo hero area above footer |

## Requirements

### Requirement: Footer renders with dark navy background

The footer component SHALL render with a dark navy (#141d2a) background and white text color.

#### Scenario: Footer background styling

- **WHEN** the Footwell component is rendered
- **THEN** the footer element has a dark navy background (#141d2a)
- **AND** the footer text color is white

### Requirement: CTA banner is displayed above the footer

The component SHALL render a CTA banner section with purple (#8186d5) background, containing a heading, subheading, and a dark contact button. The CTA SHALL have an offset box-shadow effect and overlap the footer.

#### Scenario: CTA banner content

- **WHEN** the Footwell component is rendered
- **THEN** the CTA section shows "Ready for a next project?"
- **AND** the CTA section shows "Let's get started!"
- **AND** the CTA section has a "Contact us" button

#### Scenario: CTA banner styling

- **WHEN** the CTA banner is visible
- **THEN** the CTA has a purple (#8186d5) background
- **AND** the CTA has an offset box-shadow effect
- **AND** the "Contact us" button has a dark background with square corners

### Requirement: Footer logo column displays brand name

The footer SHALL display the brand name "Footwell" in uppercase white text with letter-spacing, and a copyright notice below it.

#### Scenario: Logo column content

- **WHEN** the Footwell component is rendered
- **THEN** the first column shows "Footwell" as a link
- **AND** the brand name is uppercase with letter-spacing
- **AND** a copyright notice with the current year is present

### Requirement: Footer link columns are present

The footer SHALL display three link columns: Customers (Buyer, Supplier), Company (About us, Careers, Contact us), and Further Information (Terms & Conditions, Privacy Policy).

#### Scenario: Customers column

- **WHEN** the Footwell component is rendered
- **THEN** the "Customers" column contains links "Buyer" and "Supplier"

#### Scenario: Company column

- **WHEN** the Footwell component is rendered
- **THEN** the "Company" column contains links "About us", "Careers", and "Contact us"

#### Scenario: Further Information column

- **WHEN** the Footwell component is rendered
- **THEN** the "Further Information" column contains links "Terms & Conditions" and "Privacy Policy"

### Requirement: Social media icons are displayed

The footer SHALL display social media icons (Facebook, Twitter, LinkedIn, Send) as circular purple (#8186d5) buttons with accessible labels, linking to external targets.

#### Scenario: Social icons rendering

- **WHEN** the Footwell component is rendered
- **THEN** the "Follow us" section shows social media icon links
- **AND** each icon is a circular purple button
- **AND** each icon has an accessible label (Facebook, Twitter, LinkedIn, Send)
- **AND** social links open in a new tab

### Requirement: Link hover behavior

Footer links SHALL transition color from muted gray (#666873) to white on hover with a smooth 0.3s transition.

#### Scenario: Link hover styling

- **WHEN** a user hovers over a footer link
- **THEN** the link color transitions smoothly

### Requirement: Responsive layout

The footer SHALL be responsive, with columns stacking appropriately on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the Footwell component is rendered on a mobile viewport
- **THEN** the footer columns stack vertically
- **AND** all text remains readable

### Requirement: Accessibility

The footer SHALL use semantic HTML elements (footer, nav, ul, li) and all interactive elements SHALL be focusable with accessible labels.

#### Scenario: Semantic HTML

- **WHEN** the Footwell component is rendered
- **THEN** the footer uses a semantic `<footer>` element
- **AND** all links are focusable
- **AND** social links have accessible aria-labels

### Requirement: Component Dock attribution

The footer SHALL include a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Attribution link

- **WHEN** the Footwell component is rendered
- **THEN** a "Component Dock" link is present
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab
