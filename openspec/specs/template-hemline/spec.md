# Template: Hemline (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 11** — a dark navy footer with a four-column layout (brand description + social icons, recent posts with thumbnails, quick links, and contact info), an accented purple underline on headings, and a centered copyright bar. A decorative blob SVG shape sits behind the footer at low opacity.

- **Source:** Bootstrap Footer 11 — https://colorlib.com/wp/template/bootstrap-footer-11/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-11/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                | Value                      | Source                                                       |
| -------------------- | -------------------------- | ------------------------------------------------------------ |
| Font family          | `"Poppins", sans-serif`    | `@font-face` loaded from CDN, `.h1–h5` rule                 |
| Footer background    | `#0d1824` (dark navy)      | `.footer-01 { background: #0d1824 }`                        |
| Footer text color    | `rgba(255,255,255,0.6)`    | `.footer-01 p { color: rgba(255,255,255,0.6) }`            |
| Accent color         | `#7f72e4` (purple)         | `.footer-01 a { color: #7f72e4 }`, heading underline, social bg |
| Footer heading color | `#ffffff`                  | `.footer-01 .footer-heading { color: #fff }`                |
| Heading underline    | `#7f72e4`, 2px height, 40px width | `.footer-heading:after { background: #7f72e4; width: 40px; height: 2px }` |
| Nav link color       | `rgba(255,255,255,0.7)`    | `.footer-01 ul.list-unstyled li a`                           |
| Blog heading color   | `rgba(255,255,255,0.7)`    | `.footer-01 .block-21 .text .heading a`                     |
| Blog meta link color | `#7f72e4` (accent)         | `.footer-01 .block-21 .meta > div a`                        |
| Contact text color   | `rgba(255,255,255,0.6)`    | `.footer-01 .block-23 ul li`                                |
| Contact icon color   | `rgba(255,255,255,0.4)`    | `.footer-01 .block-23 ul li .icon`                          |
| Social icon bg       | `#7f72e4` (accent)         | `.footer-01 .ftco-footer-social li a { background: #7f72e4 }` |
| Social icon color    | `#ffffff`                  | `.footer-01 .ftco-footer-social li a { color: #fff }`       |
| Social icon size     | `40px × 40px`              | `.ftco-footer-social li a { height: 40px; width: 40px }`    |
| Social icon radius   | `50%` (circle)             | `.ftco-footer-social li a { border-radius: 50% }`           |
| Social icon font     | `20px`                     | `.ftco-footer-social li a span { font-size: 20px }`         |
| Copyright text color | `#999999`                  | `.footer-01 .copyright { color: #999999 }`                  |
| Footer padding       | `7em 0`                    | `footer { padding: 7em 0 }`                                 |
| Content section bg   | `#f8f8f8` (light gray)     | `.ftco-section { background: #f8f8f8 }`                     |
| Content section pad  | `12em 0`                   | `.ftco-section { padding: 12em 0 }`                         |
| Blob decoration      | SVG `blob-shape.svg`, 5% opacity, positioned top-left | `.footer-01:after { opacity: .05; background: url(../images/blob-shape.svg) }` |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #11" on a light gray background, filling 12em vertical padding.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #11" is visible
- **AND** the content area uses a light gray (#f8f8f8) background
- **AND** the content area has approximately 12em vertical padding

### Requirement: Footer main content section

The footer SHALL have a dark navy (#0d1824) background with 7em vertical padding and four columns: brand description + social, recent posts, quick links, and contact info.

#### Scenario: Footer displays dark navy background

- **WHEN** the footer renders
- **THEN** the footer background is dark navy (#0d1824)
- **AND** the footer has 7em vertical padding

#### Scenario: Brand column shows logo and description with social icons

- **WHEN** the footer renders
- **THEN** a brand heading "Hemline" is displayed in white, 18px, with a purple (#7f72e4) underline
- **AND** a description paragraph in semi-transparent white appears below
- **AND** 3 social icons (Twitter, Facebook, Instagram) are displayed horizontally
- **AND** each social icon has a purple (#7f72e4) circular background (40x40px, 50% border-radius)
- **AND** each social icon is white text

#### Scenario: Recent posts column

- **WHEN** the footer renders
- **THEN** a "Recent Posts" heading is displayed with purple underline
- **AND** 2 blog post cards are shown, each with:
  - An 80×80 thumbnail image placeholder
  - A heading link in semi-transparent white
  - Meta info (date, author, comment count) in accent purple text
- **AND** blog post headings are 16px, font-weight 400, line-height 1.4

#### Scenario: Quick links column

- **WHEN** the footer renders
- **THEN** a "Quick Links" heading is displayed with purple underline
- **AND** 6 navigation links are displayed vertically: Home, About, Services, Works, Blog, Contact
- **AND** each link is semi-transparent white (`rgba(255,255,255,0.7)`) with `py-2 d-block` spacing
- **AND** hovering a link changes its color to accent purple

#### Scenario: Contact info column

- **WHEN** the footer renders
- **THEN** a "Have a Questions?" heading is displayed with purple underline
- **AND** 3 contact items are shown: address, phone, email
- **AND** each item has an icon (pin, call, send) on the left and text on the right
- **AND** icons are 18px, muted white (`rgba(255,255,255,0.4)`)
- **AND** text is semi-transparent white (`rgba(255,255,255,0.6)`)

### Requirement: Copyright bar

A full-width centered copyright row SHALL be present at the bottom of the footer with muted gray text.

#### Scenario: Copyright bar renders

- **WHEN** the footer renders
- **THEN** a copyright row is centered at the bottom
- **AND** the text reads "© [current year] All rights reserved"
- **AND** the copyright text color is #999999

### Requirement: Blob decoration

The footer SHALL have a decorative semi-transparent blob SVG shape positioned behind the content.

#### Scenario: Blob decoration renders

- **WHEN** the footer renders
- **THEN** a decorative shape is visible at approximately 5% opacity
- **AND** the shape is positioned in the upper-left area behind the footer content

### Requirement: Accessibility

All interactive elements SHALL have accessible names and appropriate ARIA attributes.

#### Scenario: Social link accessibility

- **WHEN** the footer renders
- **THEN** each social icon link has a descriptive aria-label (e.g. "Twitter", "Facebook")

#### Scenario: Navigation link accessibility

- **WHEN** the footer renders
- **THEN** each navigation link is a proper `<a>` element with visible text

### Requirement: Responsive behavior

The footer layout SHALL adapt responsively: single-column on mobile, four-column grid on desktop.

#### Scenario: Mobile layout stacks vertically

- **WHEN** the viewport width is below 768px
- **THEN** all footer columns stack vertically
- **AND** social icons center-align

#### Scenario: Desktop layout uses four columns

- **WHEN** the viewport width is 768px or above
- **THEN** the footer displays in a four-column grid
- **AND** the social icons align to the left in the first column

### Requirement: Component Dock attribution

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the link text reads "Component Dock"

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/hemline/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)
