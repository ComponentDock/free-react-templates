# Template: FooterDeck (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 13** — a light pinkish-beige footer with a feminine aesthetic, three-column product category links (Men, Women, Kids), social icons, a newsletter subscribe form, and a copyright bar with terms links.

- **Source:** Bootstrap Footer 13 — https://colorlib.com/wp/template/bootstrap-footer-13/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-13/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer
- **Note:** Preview titled "Footer 03"; described as "Free Feminine Footer Template" by ColorLib.

## Design Tokens

| Token                    | Value                        | Source                                                      |
| ------------------------ | ---------------------------- | ----------------------------------------------------------- |
| Font family              | `"Poppins", sans-serif`      | `@font-face` declarations in preview inline styles          |
| Footer background        | `#f8f1f1` (light pink-beige) | `.footer-03 { background: #f8f1f1 }`                        |
| Footer font size         | `14px`                       | `.footer-03 { font-size: 14px }`                            |
| Footer link color        | `#f17e7e` (salmon pink)      | `.footer-03 a { color: #f17e7e }`                           |
| Footer heading color     | `#f17e7e` (inherits link)    | `.footer-03 .footer-heading` inherits `a` color             |
| Footer heading style     | 14px, uppercase, 2px spacing | `.footer-heading { font-size: 14px; text-transform: uppercase; letter-spacing: 2px; font-weight: 500 }` |
| Nav link color           | `rgba(0,0,0,0.3)`            | `.list-unstyled li a { color: rgba(0,0,0,0.3) }`            |
| Copyright text color     | `rgba(0,0,0,0.4)`            | `.copyright { color: rgba(0,0,0,0.4) }`                     |
| Social icon bg           | `rgba(0,0,0,0.05)`           | `.ftco-footer-social li a { background: rgba(0,0,0,0.05) }` |
| Social icon shape        | 40px circle, border-radius 50% | `.ftco-footer-social li a { height: 40px; width: 40px; border-radius: 50% }` |
| Social icon hover        | `color: #fff`                | `.ftco-footer-social li a:hover { color: #fff }`            |
| Subscribe input bg       | `rgba(0,0,0,0.05)`           | `.subscribe-form .form-group input { background: rgba(0,0,0,0.05) }` |
| Subscribe input height   | `52px`                       | `.form-control { height: 52px }`                            |
| Subscribe button bg      | `#f17e7e` (salmon pink)      | `.subscribe-form .submit { background: #f17e7e }`           |
| Subscribe button color   | `#ffffff`                    | `.subscribe-form .submit { color: #fff }`                   |
| Subscribe button size    | 130px × 52px, border-radius 0 | `.submit { width: 130px; height: 52px; border-radius: 0 }` |
| Footer padding           | `7em 0`                      | `footer { padding: 7em 0 }`                                 |
| Section padding          | `12em 0`                     | `.ftco-section { padding: 12em 0 }`                         |
| Border-top (copyright)   | `1px solid rgba(0,0,0,0.1)`  | Inferred from `.border-top` Bootstrap utility                |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #03" on a white background, filling approximately 70vh.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #03" is visible
- **AND** the content area uses a white background
- **AND** the content area fills approximately 70vh

### Requirement: Footer main content — left side (product categories)

The footer SHALL display a three-column layout on the left half with product category links under headings "Men", "Women", and "Kids".

#### Scenario: Footer displays three category columns

- **WHEN** the footer renders
- **THEN** the left half contains three equal-width columns
- **AND** each column has a heading: "Men", "Women", "Kids"

#### Scenario: Men category links

- **WHEN** the footer renders
- **THEN** the "Men" column shows 6 links: Jeans, Jumpers, Leather, Shorts, Boots, Watches
- **AND** each link is styled with `rgba(0,0,0,0.3)` color
- **AND** each link has vertical padding

#### Scenario: Women category links

- **WHEN** the footer renders
- **THEN** the "Women" column shows 7 links: Dresses, Jumpsuits, Shirts, T-shirts, Sweaters, Jackets, Coats
- **AND** each link follows the same styling as Men links

#### Scenario: Kids category links

- **WHEN** the footer renders
- **THEN** the "Kids" column shows 7 links: Shirts, T-shirts, Polos, Sweaters, Sweatshirts, Jackets, Watches
- **AND** each link follows the same styling as Men links

### Requirement: Footer main content — right side (social + subscribe)

The footer SHALL display social media icons and a newsletter subscribe form on the right half.

#### Scenario: Social media icons

- **WHEN** the footer renders
- **THEN** a "Follow Us" heading is displayed
- **AND** 4 circular social icons are shown: Twitter, Facebook, Instagram, LinkedIn
- **AND** each icon has a `rgba(0,0,0,0.05)` background, 40px diameter, border-radius 50%
- **AND** hovering an icon changes its color to white

#### Scenario: Newsletter subscribe form

- **WHEN** the footer renders
- **THEN** a "Subscribe Us" heading is displayed below the social icons
- **AND** an email input field is shown with `rgba(0,0,0,0.05)` background, no border, 52px height
- **AND** a "Subscribe" button is shown with `#f17e7e` background, white text, 130px × 52px, sharp corners (border-radius 0)

### Requirement: Footer styling

The footer SHALL use the salmon-pink brand color for links and interactive elements, with a light pink-beige background.

#### Scenario: Footer background and typography

- **WHEN** the footer renders
- **THEN** the background is `#f8f1f1`
- **AND** the font family is Poppins, sans-serif
- **AND** the base font size is 14px
- **AND** the footer has `7em` vertical padding

#### Scenario: Footer headings

- **WHEN** a footer heading renders
- **THEN** it uses 14px font size, uppercase, 2px letter-spacing, font-weight 500
- **AND** it uses the brand color `#f17e7e`

### Requirement: Copyright bar

The footer SHALL display a copyright bar with a top border, copyright text, and terms/privacy links.

#### Scenario: Copyright bar renders

- **WHEN** the footer renders
- **THEN** a copyright bar appears at the bottom with a top border
- **AND** the copyright text reads "Copyright © [current year] All rights reserved | This template is made with ♥ by Colorlib.com" (paraphrased with Component Dock link)
- **AND** the copyright text color is `rgba(0,0,0,0.4)`
- **AND** two links appear on the right: "Terms & Conditions" and "Privacy"
- **AND** the footer includes a link to `https://www.componentdock.com/`

### Requirement: Responsive layout

The footer SHALL be responsive — single column on mobile, two-column split on desktop.

#### Scenario: Mobile layout

- **WHEN** the viewport is below 768px
- **THEN** all footer columns stack vertically
- **AND** category columns display in a single column

#### Scenario: Desktop layout

- **WHEN** the viewport is 768px or wider
- **THEN** the left half shows three category columns
- **AND** the right half shows social icons and subscribe form

## Verification Checklist

- [ ] Font: Poppins loaded from Google Fonts via `<link>` in `index.html`
- [ ] Footer background: `#f8f1f1`
- [ ] Link/heading color: `#f17e7e`
- [ ] Nav link color: `rgba(0,0,0,0.3)`
- [ ] Social icons: circular, 40px, `rgba(0,0,0,0.05)` bg
- [ ] Subscribe input: `rgba(0,0,0,0.05)` bg, 52px height, no border
- [ ] Subscribe button: `#f17e7e` bg, white text, 130×52px, no radius
- [ ] Copyright text: `rgba(0,0,0,0.4)` with top border
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] Tests: 100% coverage
- [ ] Build passes: `npm run verify:app footer-deck`
