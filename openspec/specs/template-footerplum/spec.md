# Template: FooterPlum (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 19** — a purple gradient footer with four columns (About with newsletter form, Latest News with blog cards, Information nav links, Instagram image grid), plus a copyright bar.

- **Source:** Bootstrap Footer 19 — https://colorlib.com/wp/template/bootstrap-footer-19/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-19/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer
- **Note:** Primary preview URL `preview.colorlib.com/theme/bootstrap-footer-19/` returns 404; used alternate path `bft/bootstrap-footer-19/` for DOM and CSS extraction.

## Design Tokens

| Token                | Value                                              | Source                                                    |
| -------------------- | -------------------------------------------------- | --------------------------------------------------------- |
| Font family          | `"Poppins", sans-serif`                            | `@font-face` declarations in preview HTML                 |
| Footer background    | `#2a1a5e` → `#5126a7` (45deg gradient)            | `.footer-09 { background: linear-gradient(45deg, ...) }`  |
| Footer padding       | `7em 0`                                            | `footer { padding: 7em 0 }`                               |
| Content section padding | `12em 0`                                        | `.ftco-section { padding: 12em 0 }`                       |
| Heading color        | `#ffffff`                                          | `.footer-09 .footer-heading { color: #fff }`              |
| Heading font size    | `22px`                                             | `.footer-09 .footer-heading { font-size: 22px }`          |
| Heading margin-bottom| `30px`                                             | `.footer-09 .footer-heading { margin-bottom: 30px }`      |
| Heading icon border  | `1px solid #fe59d7`                                | `.footer-heading .icon { border: 1px solid #fe59d7 }`     |
| Heading icon color   | `#fe59d7` (hot pink)                               | `.footer-heading .icon { color: #fe59d7 }`                |
| Heading icon size    | `40px × 40px, border-radius: 50%`                  | `.footer-heading .icon { width: 40px; height: 40px; ... }`|
| Text color           | `rgba(255, 255, 255, 0.3)`                         | `.footer-09 p { color: rgba(255, 255, 255, 0.3) }`       |
| Link color           | `#fe59d7` (hot pink)                               | `.footer-09 a { color: #fe59d7 }`                         |
| Link hover           | `rgba(255, 255, 255, 0.9)`                         | `.footer-09 a:hover { color: rgba(255, 255, 255, 0.9) }` |
| Nav link color       | `rgba(255, 255, 255, 0.5)`                         | `.footer-09 ul.list-unstyled li a { color: ... 0.5 }`     |
| News heading color   | `rgba(255, 255, 255, 0.5)`                         | `.footer-09 .block-21 .heading a { color: ... 0.5 }`      |
| News meta color      | `rgba(255, 255, 255, 0.3)`                         | `.footer-09 .block-21 .meta div a { color: ... 0.3 }`     |
| Contact list color   | `rgba(255, 255, 255, 0.5)`                         | `.footer-09 .block-23 ul li { color: ... 0.5 }`           |
| Subscribe input bg   | `rgba(0, 0, 0, 0.05)`                              | `.subscribe-form input { background: rgba(0,0,0,0.05) }`  |
| Subscribe input border| `2px solid #fe8ce3`                                | `.subscribe-form input { border: 2px solid #fe8ce3 }`     |
| Submit button bg     | `#fe8ce3` (light pink)                             | `.subscribe-form .submit { background: #fe8ce3 }`         |
| Submit button color  | `#ffffff`                                          | `.subscribe-form .submit { color: #fff }`                 |
| Submit button size   | `52px × 52px, border-radius: 0`                    | `.subscribe-form .submit { width: 52px; height: 52px }`   |
| Border top color     | `rgba(255, 255, 255, 0.1)`                         | `.footer-09 .border-top { border-color: rgba(255,...,0.1) }`|
| Copyright text color | `rgba(255, 255, 255, 0.3)`                         | Inherited from `.footer-09 p`                              |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #19" on a light background, filling approximately 70vh.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #19" is visible
- **AND** the content area uses a light background

### Requirement: Footer main content section

The footer SHALL have a purple gradient background (`#2a1a5e` → `#5126a7` at 45deg) with 7em vertical padding and four columns: About (with contact info + newsletter form), Latest News (with blog post cards), Information (nav links), and Instagram (image grid).

#### Scenario: Footer displays purple gradient background

- **WHEN** the footer renders
- **THEN** the footer background is a purple gradient from `#2a1a5e` to `#5126a7`
- **AND** the footer has 7em vertical padding

#### Scenario: About column with heading, contact info, and newsletter

- **WHEN** the footer renders
- **THEN** the first column displays a heading "About" with a circular icon (40px, border 1px solid `#fe59d7`, color `#fe59d7`)
- **AND** a contact list shows: address, phone number, and email (in `rgba(255, 255, 255, 0.5)` color)
- **AND** each contact item has an inline icon (pin, phone, send)
- **AND** a newsletter subscription form appears below with an email input (dark semi-transparent bg, `2px solid #fe8ce3` border) and a pink submit button (`#fe8ce3`, 52×52px, white send icon)

#### Scenario: Latest News column with blog cards

- **WHEN** the footer renders
- **THEN** the second column displays a heading "Latest News" with a circular icon
- **AND** two blog post cards are shown, each with a thumbnail image (via placeholder), title, and meta info (date, author, comment count)
- **AND** card titles use `rgba(255, 255, 255, 0.5)` color
- **AND** meta info uses `rgba(255, 255, 255, 0.3)` color

#### Scenario: Information column with navigation links

- **WHEN** the footer renders
- **THEN** the third column displays a heading "Information" with a circular icon
- **AND** 5 navigation links are listed vertically: About, Products, Blog, Contact, Help & Support
- **AND** each link uses `rgba(255, 255, 255, 0.5)` color with `py-1 d-block` spacing

#### Scenario: Instagram column with image grid

- **WHEN** the footer renders
- **THEN** the fourth column displays a heading "Instagram" with an Instagram icon
- **AND** a 3×2 grid of 6 square thumbnail images is displayed
- **AND** each thumbnail uses a placeholder image with rounded corners and padding

### Requirement: Copyright bar

A full-width row with a top border (`rgba(255, 255, 255, 0.1)`) and copyright text SHALL be present at the bottom of the footer.

#### Scenario: Copyright bar renders

- **WHEN** the footer renders
- **THEN** a copyright row is displayed with a top border
- **AND** the left side shows "© [current year] All rights reserved."
- **AND** the right side shows "This template is made with ♥ by Component Dock"
- **AND** the text uses `rgba(255, 255, 255, 0.3)` color

### Requirement: Accessibility

All interactive elements SHALL have accessible names and appropriate ARIA attributes.

#### Scenario: Newsletter form accessibility

- **WHEN** the newsletter form renders
- **THEN** the email input has an accessible label or aria-label
- **AND** the submit button has an accessible name

#### Scenario: Navigation link accessibility

- **WHEN** the footer renders
- **THEN** all navigation links are focusable and have visible focus indicators

### Requirement: Responsive behavior

The footer layout SHALL adapt responsively: single-column on mobile, four-column grid on desktop.

#### Scenario: Mobile layout stacks vertically

- **WHEN** the viewport width is below 768px
- **THEN** all footer columns stack vertically
- **AND** the Instagram grid adjusts to 3 columns on small screens

#### Scenario: Desktop layout uses four columns

- **WHEN** the viewport width is 768px or above
- **THEN** the footer displays in a four-column grid

### Requirement: Component Dock attribution

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the link text reads "Component Dock"

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/footerplum/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)
