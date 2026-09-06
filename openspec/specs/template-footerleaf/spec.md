# Template: Footerleaf (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 15** — a green-themed footer with a vibrant olive-green background, yellow accent links, four-column layout (brand contact info + subscribe, latest news blog cards, best sellers product card, Instagram photo grid), social icons in the header row, and a bottom copyright bar with a top border.

- **Source:** Bootstrap Footer 15 — https://colorlib.com/wp/template/bootstrap-footer-15/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-15/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                    | Value                                          | Source                                                        |
| ------------------------ | ---------------------------------------------- | ------------------------------------------------------------- |
| Font family              | `"Poppins", Arial, sans-serif`                 | `@font-face` declarations in preview `<style>`                |
| Font weights used        | 300, 400, 500, 600, 700, 800, 900             | `@font-face` declarations                                     |
| Footer background        | `#68983b` (olive green)                        | `.footer-05 { background: #68983b }`                         |
| Border color             | `#75aa42` (lighter green)                      | `.footer-05 .border-bottom, .footer-05 .border-top { border-color: #75aa42 }` |
| Link color (accent)      | `#fff8a1` (pale yellow)                        | `.footer-05 a { color: #fff8a1 }`                            |
| Paragraph text color     | `rgba(255, 255, 255, 0.5)`                    | `.footer-05 p { color: rgba(255, 255, 255, 0.5) }`          |
| Logo text color          | `#ffffff`                                      | `.footer-05 .logo a { color: #fff }`                         |
| Logo text size           | `28px`                                         | `.footer-05 .logo a { font-size: 28px }`                     |
| Logo subtitle color      | `#fff8a1` (pale yellow)                        | `.footer-05 .logo a span { color: #fff8a1 }`                 |
| Logo subtitle size       | `14px`                                         | `.footer-05 .logo a span { font-size: 14px }`                |
| Footer heading color     | `#ffffff`                                      | `.footer-05 .footer-heading { color: #fff }`                 |
| Footer heading size      | `20px`                                         | `.footer-05 .footer-heading { font-size: 20px }`             |
| Social icon border       | `1px solid #81ba4c` (medium green)             | `.footer-05 .ftco-footer-social li a { border: 1px solid #81ba4c }` |
| Social icon hover border | `1px solid #fff8a1` (pale yellow)              | `.footer-05 .ftco-footer-social li a:hover { border: 1px solid #fff8a1 }` |
| Heading link color       | `#fff8a1` (pale yellow)                        | `.footer-05 .block-21 .heading a { color: #fff8a1 }`        |
| Meta link color          | `rgba(255, 255, 255, 0.5)`                    | `.footer-05 .block-21 .meta div a { color: rgba(255,255,255,0.5) }` |
| Contact info text color  | `rgba(255, 255, 255, 0.5)`                    | `.footer-05 .block-23 ul li { color: rgba(255,255,255,0.5) }` |
| Subscribe input bg       | `rgba(0, 0, 0, 0.05)`                         | `.footer-05 .subscribe-form .form-group input { background: rgba(0,0,0,0.05) }` |
| Subscribe input border   | `2px solid #81ba4c` (medium green)             | `.footer-05 .subscribe-form .form-group input { border: 2px solid #81ba4c }` |
| Submit button bg         | `#81ba4c` (medium green)                       | `.footer-05 .subscribe-form .form-group .submit { background: #81ba4c }` |
| Submit button color      | `#ffffff`                                      | `.footer-05 .subscribe-form .form-group .submit { color: #fff }` |
| Submit button width      | `52px`                                         | `.footer-05 .subscribe-form .form-group .submit { width: 52px }` |
| Submit button radius     | `0` (square)                                   | `.footer-05 .subscribe-form .form-group .submit { border-radius: 0 }` |
| Copyright text color     | inherited from `.footer-05 p` (`rgba(255,255,255,0.5)`) | `.footer-05 .copyright` inherits from `p` |
| Star rating color        | `#f7b633` (amber)                              | ionicons star color via inheritance                           |
| Featured image radius    | `4px` (rounded)                                | `.footer-05 .featured .img { border-radius: 4px }`           |
| Instagram image radius   | `0` (none)                                     | `.footer-05 .block-24 .img { border-radius: 0 }`            |
| Footer padding           | `4em 0`                                        | `.footer-05 { padding: 4em 0 }`                              |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #15" on a light background with generous vertical padding.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #15" is visible
- **AND** the content area uses a light background
- **AND** the section has generous vertical padding

### Requirement: Footer header row with logo and social icons

The footer SHALL display a header row with a top border, containing the brand logo on the left and social icons on the right.

#### Scenario: Footer header row renders

- **WHEN** the footer renders
- **THEN** the footer background is olive green (#68983b)
- **AND** a border-top separates the header from the content area

#### Scenario: Brand logo displays

- **WHEN** the footer header row renders
- **THEN** a logo text "Footerleaf" is displayed in white, 28px
- **AND** a subtitle "Free Templates" appears below in pale yellow (#fff8a1), 14px

#### Scenario: Social icons display

- **WHEN** the footer header row renders
- **THEN** three social icons (Twitter, Facebook, Instagram) are displayed on the right
- **AND** each icon has a 1px solid #81ba4c border
- **AND** each icon link color is pale yellow (#fff8a1)

### Requirement: Four-column footer content

The footer SHALL display four columns: brand contact info + subscribe form, latest news, best sellers, and Instagram grid.

#### Scenario: Contact info column

- **WHEN** the footer content renders
- **THEN** a "Contact" heading is displayed in white, 20px
- **AND** address, phone, and email info are listed with ionicons
- **AND** the info text is rgba(255,255,255,0.5)
- **AND** a subscribe form with an email input and green submit button appears below

#### Scenario: Subscribe form column

- **WHEN** the subscribe form renders
- **THEN** an email input with placeholder "Enter email address" is shown
- **AND** the input has a semi-transparent dark background rgba(0,0,0,0.05)
- **AND** the input has a 2px solid #81ba4c border
- **AND** a green (#81ba4c) submit button with a send icon is adjacent to the input
- **AND** the submit button is 52px wide with no border-radius (square)

#### Scenario: Latest news column

- **WHEN** the footer content renders
- **THEN** a "Latest News" heading is displayed in white, 20px
- **AND** two blog post cards are displayed with thumbnail images
- **AND** each card has a title link in pale yellow (#fff8a1)
- **AND** each card shows date, author, and comment count metadata in rgba(255,255,255,0.5)

#### Scenario: Best sellers column

- **WHEN** the footer content renders
- **THEN** a "Best Sellers" heading is displayed in white, 20px
- **AND** one product card is shown with a thumbnail image (rounded, 4px radius)
- **AND** the product title is displayed
- **AND** a 5-star rating is shown in amber (#f7b633)

#### Scenario: Instagram grid column

- **WHEN** the footer content renders
- **THEN** an "Instagram" heading is displayed in white, 20px
- **AND** a 3x2 grid of 6 Instagram photo thumbnails is displayed
- **AND** the images have no border-radius (square)

### Requirement: Copyright bar

The footer SHALL display a bottom copyright bar separated by a top border.

#### Scenario: Copyright bar renders

- **WHEN** the footer bottom renders
- **THEN** a top border in #75aa42 separates the copyright from content
- **AND** left-aligned copyright text shows "Copyright © [year] All rights reserved."
- **AND** right-aligned text shows "This template is made with ❤ by Component Dock"
- **AND** the "Component Dock" text links to https://www.componentdock.com/

### Requirement: Responsive layout

The footer SHALL be responsive across screen sizes.

#### Scenario: Mobile layout

- **WHEN** the viewport width is below 768px
- **THEN** all four columns stack vertically
- **AND** the logo and social icons stack vertically
- **AND** the copyright bar stacks vertically with left-aligned text

#### Scenario: Desktop layout

- **WHEN** the viewport width is 768px or above
- **THEN** the four columns display in a row
- **AND** the logo and social icons are in a horizontal row

## Verification checklist

- [ ] Footer background is #68983b (olive green)
- [ ] Font is Poppins
- [ ] Logo text "Footerleaf" is white, 28px, with pale yellow subtitle
- [ ] Social icons have #81ba4c border, pale yellow icon color
- [ ] Four columns: contact+subscribe, latest news, best sellers, instagram
- [ ] Subscribe form input has rgba(0,0,0,0.05) bg and 2px solid #81ba4c border
- [ ] Submit button is #81ba4c, 52px wide, square
- [ ] Blog post titles are pale yellow (#fff8a1)
- [ ] Star ratings are amber (#f7b633)
- [ ] Instagram grid is 3x2 square images
- [ ] Copyright bar links to https://www.componentdock.com/
- [ ] Responsive: columns stack on mobile
- [ ] No references to ColorLib in app code
