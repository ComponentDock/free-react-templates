# Template: Topaz (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 14** — a dark-themed footer with a charcoal background, golden amber accent color, four-column layout (brand description, categories list, tag cloud, subscribe form + social icons), and a bottom copyright bar on a darker strip.

- **Source:** Bootstrap Footer 14 — https://colorlib.com/wp/template/bootstrap-footer-14/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-14/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                    | Value                                          | Source                                                        |
| ------------------------ | ---------------------------------------------- | ------------------------------------------------------------- |
| Font family              | `"Nunito Sans", sans-serif`                    | `@font-face` declarations in preview `<style>`                |
| Font weights used        | 300, 400, 600, 700                             | `@font-face` declarations                                     |
| Footer background        | `#272727` (dark charcoal)                      | `.footer-04 { background: #272727 }`                         |
| Bottom bar background    | `#1a1a1a` (very dark)                          | `.footer-04 .border-top { background: #1a1a1a }`             |
| Bottom bar border color  | `#1a1a1a`                                      | `.footer-04 .border-top { border-color: #1a1a1a }`           |
| Footer heading color     | `#ffffff`                                      | `.footer-04 .footer-heading { color: #fff }`                 |
| Footer heading size      | `13px`                                         | `.footer-04 .footer-heading { font-size: 13px }`             |
| Footer heading transform | `uppercase`                                    | `.footer-04 .footer-heading { text-transform: uppercase }`   |
| Footer heading weight    | `600`                                          | `.footer-04 .footer-heading { font-weight: 600 }`            |
| Logo color               | `#ffffff`                                      | `.footer-04 .footer-heading .logo { color: #fff }`           |
| Logo size                | `16px`                                         | `.footer-04 .footer-heading .logo { font-size: 16px }`       |
| Logo transform           | `capitalize`                                   | `.footer-04 .footer-heading .logo { text-transform: capitalize }` |
| Paragraph text color     | `rgba(255, 255, 255, 0.3)`                    | `.footer-04 p { color: rgba(255,255,255,0.3) }`             |
| Link color (accent)      | `#f7b633` (golden amber)                       | `.footer-04 a { color: #f7b633 }`                           |
| List link color          | `rgba(255, 255, 255, 0.7)`                    | `.footer-04 .list-unstyled li a { color: rgba(255,255,255,0.7) }` |
| Tag cloud border         | `1px solid rgba(255, 255, 255, 0.1)`          | `.footer-04 .tagcloud a { border: 1px solid rgba(255,255,255,0.1) }` |
| Tag cloud text color     | `#ffffff`                                      | `.footer-04 .tagcloud a { color: #fff }`                    |
| Social icon color        | `#ffffff`                                      | `.footer-04 .ftco-footer-social li a { color: #fff }`       |
| Social icon border       | `1px solid rgba(255, 255, 255, 0.1)`          | `.footer-04 .ftco-footer-social li a { border: 1px solid rgba(255,255,255,0.1) }` |
| Social icon radius       | `4px`                                          | `.footer-04 .ftco-footer-social li a { border-radius: 4px }` |
| Subscribe input bg       | `rgba(255, 255, 255, 0.05)`                   | `.footer-04 .subscribe-form .form-group input { background: rgba(255,255,255,0.05) }` |
| Subscribe input color    | `rgba(255, 255, 255, 0.3)`                    | `.footer-04 .subscribe-form .form-group input { color: rgba(255,255,255,0.3) }` |
| Submit button bg         | `#f7b633` (golden amber)                       | `.footer-04 .subscribe-form .form-group .submit { background: #f7b633 }` |
| Submit button color      | `#ffffff`                                      | `.footer-04 .subscribe-form .form-group .submit { color: #fff }` |
| Submit button size       | `52px × 52px`                                  | `.footer-04 .subscribe-form .form-group .submit { width: 52px; height: 52px }` |
| Submit button radius     | `0` (square)                                   | `.footer-04 .subscribe-form .form-group .submit { border-radius: 0 }` |
| Copyright link color     | `rgba(255, 255, 255, 0.5)`                    | `.footer-04 .copyright a { color: rgba(255,255,255,0.5) }`  |
| Section padding          | `12em 0`                                       | `.ftco-section { padding: 12em 0 }`                          |
| Footer padding           | `7em 0`                                        | `footer { padding: 7em 0 }`                                  |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #14" on a light background, with section padding matching the original (12em).

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #14" is visible
- **AND** the content area uses a light background
- **AND** the section has generous vertical padding (~12em)

### Requirement: Footer main content section

The footer SHALL have a dark charcoal (#272727) background with four columns: brand description, categories list, tag cloud, and subscribe form + social icons.

#### Scenario: Footer displays dark background

- **WHEN** the footer renders
- **THEN** the footer background is dark charcoal (#272727)
- **AND** the footer has approximately 7em vertical padding

#### Scenario: Brand column shows logo and description

- **WHEN** the footer renders
- **THEN** a brand logo text "Topaz" is displayed in white, 16px, capitalized
- **AND** a description paragraph in rgba(255,255,255,0.3) text appears below
- **AND** a "read more" link is displayed in golden amber (#f7b633)

#### Scenario: Categories column

- **WHEN** the footer renders
- **THEN** a "Categories" heading is displayed in white, uppercase, 13px, weight 600
- **AND** 4 category links are listed vertically: Buy & Sell, Merchant, Giving back, Help & Support
- **AND** each link is rgba(255,255,255,0.7) with vertical padding

#### Scenario: Tag cloud column

- **WHEN** the footer renders
- **THEN** a "Tag cloud" heading is displayed with the same heading style
- **AND** 8 tag links are displayed: dish, menu, food, sweet, tasty, delicious, desserts, drinks
- **AND** each tag has a 1px solid border rgba(255,255,255,0.1) and white text

#### Scenario: Subscribe form column

- **WHEN** the footer renders
- **THEN** a "Subscribe" heading is displayed with the same heading style
- **AND** an email input with placeholder "Enter email address" is shown
- **AND** the input has a semi-transparent background rgba(255,255,255,0.05)
- **AND** a golden amber (#f7b633) submit button with a send icon is adjacent to the input
- **AND** the submit button is 52×52px with no border-radius (square)

#### Scenario: Social icons

- **WHEN** the footer renders
- **THEN** a "Follow us" heading is displayed below the subscribe form
- **AND** 3 social icons are displayed horizontally: Twitter, Facebook, Instagram
- **AND** each icon is white with a 1px solid rgba(255,255,255,0.1) border and 4px border-radius

### Requirement: Copyright bar

A full-width copyright bar on a darker strip (#1a1a1a) with a top border SHALL be present at the bottom of the footer.

#### Scenario: Copyright bar renders

- **WHEN** the footer renders
- **THEN** a copyright row appears at the bottom on a #1a1a1a background
- **AND** the left side shows copyright text with a heart icon
- **AND** the right side shows policy links: Terms, Privacy, Compliances
- **AND** policy links are rgba(255,255,255,0.5)

### Requirement: Accessibility

All interactive elements SHALL have accessible names and appropriate ARIA attributes.

#### Scenario: Social link accessibility

- **WHEN** the footer renders
- **THEN** each social icon link has a descriptive aria-label (e.g. "Twitter", "Facebook", "Instagram")

#### Scenario: Subscribe form accessibility

- **WHEN** the footer renders
- **THEN** the email input has an associated label or aria-label
- **AND** the submit button has an accessible name

### Requirement: Responsive behavior

The footer layout SHALL adapt responsively: single-column on mobile, four-column grid on desktop.

#### Scenario: Mobile layout stacks vertically

- **WHEN** the viewport width is below 768px
- **THEN** all footer columns stack vertically
- **AND** social icons center-align

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

- **WHEN** any source file in apps/topaz/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification Checklist

- [ ] Footer background is #272727
- [ ] Bottom bar background is #1a1a1a
- [ ] Font family is Nunito Sans (loaded via Google Fonts)
- [ ] Accent color #f7b633 used for links and submit button
- [ ] 4-column layout on desktop, stacked on mobile
- [ ] Tag cloud with bordered tags
- [ ] Subscribe form with square golden submit button
- [ ] Social icons with border and 4px radius
- [ ] Copyright bar with Terms, Privacy, Compliances links
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
