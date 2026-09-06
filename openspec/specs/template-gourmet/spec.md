# Template: Gourmet (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 15** — a comprehensive dark footer with restaurant/food theme: logo with subtitle, social icons in header, contact info + subscribe form, latest news blog cards, best sellers product card with star rating, Instagram image grid, and copyright bar.

- **Source:** Bootstrap Footer 15 — https://colorlib.com/wp/template/bootstrap-footer-15/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-15/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer
- **Note:** Preview titled "Footer 05"; features blog posts, product cards, and Instagram grid.

## Design Tokens

| Token                 | Value                             | Source                                                                     |
| --------------------- | --------------------------------- | -------------------------------------------------------------------------- |
| Font family           | `"Poppins", sans-serif`           | `@font-face` declarations in preview `<style>`                             |
| Font weights used     | 300, 400, 500, 600, 700, 800, 900 | `@font-face` declarations                                                  |
| Footer background     | `#272727` (dark charcoal)         | `.footer-05 { background: #272727 }`                                       |
| Logo color            | `#ffffff`                         | `.logo { color: #fff }`                                                    |
| Logo subtitle color   | `#f7b633` (golden amber)          | `.logo span { color: #f7b633 }`                                            |
| Footer heading color  | `#ffffff`                         | `.footer-05 .footer-heading { color: #fff }`                               |
| Footer heading size   | `16px`                            | `.footer-05 .footer-heading { font-size: 16px }`                           |
| Footer heading weight | `700`                             | `.footer-05 .footer-heading { font-weight: 700 }`                          |
| Link color (accent)   | `#f7b633` (golden amber)          | `.footer-05 a { color: #f7b633 }`                                          |
| Text color            | `rgba(255, 255, 255, 0.5)`        | `.footer-05 p { color: rgba(255,255,255,0.5) }`                            |
| Contact icon color    | `#f7b633`                         | `.block-23 .icon { color: #f7b633 }`                                       |
| Subscribe input bg    | `rgba(255, 255, 255, 0.05)`       | `.subscribe-form .form-group input { background: rgba(255,255,255,0.05) }` |
| Submit button bg      | `#f7b633` (golden amber)          | `.subscribe-form .submit { background: #f7b633 }`                          |
| Social icon color     | `#ffffff`                         | `.ftco-footer-social li a { color: #fff }`                                 |
| Social icon bg        | `rgba(255, 255, 255, 0.1)`        | `.ftco-footer-social li a { background: rgba(255,255,255,0.1) }`           |
| Social icon radius    | `50%` (circle)                    | `.ftco-footer-social li a { border-radius: 50% }`                          |
| Copyright color       | `rgba(255, 255, 255, 0.5)`        | `.copyright { color: rgba(255,255,255,0.5) }`                              |
| Border color          | `rgba(255, 255, 255, 0.1)`        | `.border-bottom { border-color: rgba(255,255,255,0.1) }`                   |
| Star rating color     | `#f7b633`                         | `.rate .ion-ios-star { color: #f7b633 }`                                   |
| Blog meta color       | `rgba(255, 255, 255, 0.5)`        | `.meta { color: rgba(255,255,255,0.5) }`                                   |

## Requirements

### Requirement: Footer header with logo and social icons

The footer SHALL display a logo with subtitle and social icons in a header row separated by a bottom border.

#### Scenario: Logo renders with subtitle

- **WHEN** the footer renders
- **THEN** a logo link "Gourmet" is displayed in white
- **AND** a subtitle "Free Templates" in golden amber (#f7b633) appears next to it
- **AND** the header row has a bottom border

#### Scenario: Social icons in header

- **WHEN** the footer renders
- **THEN** 3 social icons (Twitter, Facebook, Instagram) are displayed on the right
- **AND** each icon is a white circle with semi-transparent background

### Requirement: Contact info column

The footer SHALL display contact information with icons.

#### Scenario: Contact details render

- **WHEN** the footer renders
- **THEN** a "Gourmet" heading is displayed
- **AND** an address line with pin icon is shown
- **AND** a phone number with call icon is shown
- **AND** an email with send icon is shown

#### Scenario: Subscribe form in contact column

- **WHEN** the footer renders
- **THEN** an email input with placeholder "Enter email address" is shown
- **AND** a golden amber submit button with send icon is adjacent

### Requirement: Latest News column

The footer SHALL display two blog post cards with images, titles, and metadata.

#### Scenario: Blog posts render

- **WHEN** the footer renders
- **THEN** a "Latest News" heading is displayed
- **AND** 2 blog post cards are shown
- **AND** each card has a placeholder image, title, date, author, and comment count

### Requirement: Best Sellers column

The footer SHALL display a product card with image, title, and star rating.

#### Scenario: Product card renders

- **WHEN** the footer renders
- **THEN** a "Best Sellers" heading is displayed
- **AND** a product card with placeholder image is shown
- **AND** the product has a title and 5-star rating in golden amber

### Requirement: Instagram grid column

The footer SHALL display a 3x2 grid of Instagram placeholder images.

#### Scenario: Instagram grid renders

- **WHEN** the footer renders
- **THEN** an "Instagram" heading is displayed
- **AND** 6 placeholder images are shown in a 3x2 grid

### Requirement: Copyright bar

A full-width copyright bar with top border SHALL be present.

#### Scenario: Copyright bar renders

- **WHEN** the footer renders
- **THEN** copyright text with dynamic year is shown on the left
- **AND** "Made with Component Dock" attribution on the right

### Requirement: Component Dock attribution

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **AND** the link text reads "Component Dock"

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/gourmet/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification Checklist

- [ ] Footer background is #272727
- [ ] Font family is Poppins (loaded via Google Fonts)
- [ ] Accent color #f7b633 used for links, submit button, stars
- [ ] 4-column layout on desktop, stacked on mobile
- [ ] Blog post cards with placeholder images
- [ ] Product card with star rating
- [ ] Instagram 3x2 image grid
- [ ] Social icons as circles in header
- [ ] Copyright bar with Component Dock link
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
