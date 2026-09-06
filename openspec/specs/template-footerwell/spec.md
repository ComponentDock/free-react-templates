# Template: FooterWell (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 12** (titled "Footer 02" in the preview) — a dark charcoal footer with a floating email subscribe form (pill-shaped, white), a brand description column with a "read more" link, four bordered nav columns (Discover, About, Resources, Social), a partner strip with company links, and a copyright bar with legal links. The accent color is a warm gold/tan (#bba387 / #bfa88e).

- **Source:** Bootstrap Footer 12 — https://colorlib.com/wp/template/bootstrap-footer-12/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-12/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                      | Value                                  | Source                                                          |
| -------------------------- | -------------------------------------- | --------------------------------------------------------------- |
| Font family                | `"Poppins", sans-serif`                | @font-face in preview HTML head (Poppins 300–900)               |
| Section background         | `#f8f8f8` (light gray)                | `.ftco-section { background: #f8f8f8 }`                         |
| Section padding            | `12em 0`                               | `.ftco-section { padding: 12em 0 }`                             |
| Footer background          | `#131719` (dark charcoal)              | `.footer-02 { background: #131719 }`                            |
| Footer padding             | `5em 0`                                | `footer { padding: 5em 0 }`                                     |
| Footer heading color       | `rgba(255,255,255,0.9)`                | `.footer-02 .footer-heading { color: rgba(255,255,255,0.9) }`   |
| Footer heading size        | `19px`                                 | `.footer-02 .footer-heading { font-size: 19px }`                |
| Logo color                 | `#ffffff`                              | `.footer-02 .footer-heading .logo { color: #fff }`              |
| Logo text-transform        | `uppercase`                            | `.footer-02 .footer-heading .logo { text-transform: uppercase }`|
| Accent/link color          | `#bba387` (warm gold)                  | `.footer-02 a { color: #bba387 }`                               |
| Body text color            | `rgba(255,255,255,0.3)`                | `.footer-02 p { color: rgba(255,255,255,0.3) }`                 |
| Copyright color            | `rgba(255,255,255,0.4)`                | `.footer-02 .copyright { color: rgba(255,255,255,0.4) }`        |
| Copyright size             | `14px`                                 | `.footer-02 .copyright { font-size: 14px }`                     |
| Nav link color             | `rgba(255,255,255,0.4)`                | `.footer-02 .list-unstyled li a { color: rgba(255,255,255,0.4) }`|
| Nav link hover             | `#ffffff`                              | `.footer-02 .list-unstyled li a:hover { color: #fff }`          |
| Column divider             | `1px solid rgba(255,255,255,0.05)`     | `.footer-02 .border-left { border-color: rgba(255,255,255,0.05) }`|
| Subscribe form bg          | `#ffffff`                              | `.footer-02 .subscribe-form { background: #fff }`               |
| Subscribe form radius      | `40px` (pill)                          | `.footer-02 .subscribe-form { border-radius: 40px }`            |
| Subscribe form padding     | `3px`                                  | `.footer-02 .subscribe-form { padding: 3px }`                   |
| Subscribe form shadow      | `0px -12px 21px -15px rgba(0,0,0,0.1)`| `.footer-02 .subscribe-form { box-shadow: ... }`                |
| Subscribe form margin-top  | `-105px` (floats above footer)         | `.footer-02 .subscribe { margin-top: -105px }`                  |
| Subscribe input height     | `56px`                                 | `.footer-02 .subscribe-form .form-group input { height: 56px }` |
| Subscribe input font       | `16px`                                 | `.footer-02 .subscribe-form .form-group input { font-size: 16px }`|
| Subscribe input color      | `rgba(0,0,0,0.3)`                      | `.footer-02 .subscribe-form .form-group input { color: rgba(0,0,0,0.3) }` |
| Subscribe button bg        | `#bfa88e` (golden tan)                 | `.footer-02 .subscribe-form .form-group .submit { background: #bfa88e }` |
| Subscribe button color     | `#ffffff`                              | `.footer-02 .subscribe-form .form-group .submit { color: #fff }` |
| Subscribe button width     | `150px`                                | `.footer-02 .subscribe-form .form-group .submit { width: 150px }`|
| Subscribe button height    | `56px`                                 | `.footer-02 .subscribe-form .form-group .submit { height: 56px }`|
| Subscribe button font      | `14px`                                 | `.footer-02 .subscribe-form .form-group .submit { font-size: 14px }`|
| Subscribe button transform | `uppercase`, `letter-spacing: 1px`     | `.footer-02 .subscribe-form .form-group .submit { text-transform: uppercase; letter-spacing: 1px }` |
| Subscribe button radius    | `40px` (pill)                          | `.footer-02 .subscribe-form .form-group .submit { border-radius: 40px }` |
| Partner border             | `1px solid rgba(255,255,255,0.05)`     | `.footer-02 .partner-wrap { border-top/bottom: 1px solid rgba(255,255,255,0.05) }` |
| Partner padding            | `1em 0`                                | `.footer-02 .partner-wrap { padding: 1em 0 }`                   |
| Partner heading size       | `14px`                                 | `.footer-02 .partner-wrap h3 { font-size: 14px }`               |
| Partner heading color      | `rgba(255,255,255,0.4)`                | `.footer-02 .partner-wrap h3 { color: rgba(255,255,255,0.4) }`  |
| Partner name size          | `13px`, `uppercase`                    | `.footer-02 .partner-wrap .partner-name a { font-size: 13px; text-transform: uppercase }` |
| Partner name color         | `rgba(255,255,255,0.4)`                | `.footer-02 .partner-wrap .partner-name a { color: rgba(255,255,255,0.4) }` |
| Partner icon color         | `#ffffff`                              | `.footer-02 .partner-wrap .partner-name a span { color: white }` |
| "See All" button size      | `14px`                                 | `.footer-02 .partner-wrap .btn-custom { font-size: 14px }`      |

## Requirements

### Requirement: Section heading area

The application SHALL display a light gray section (#f8f8f8) with a centered heading "Footer #02" at the top of the page, using 12em vertical padding.

#### Scenario: Section heading renders

- **WHEN** the page loads
- **THEN** a section with background #f8f8f8 is visible
- **AND** a centered heading "Footer #02" is displayed
- **AND** the section has generous vertical padding (12em)

### Requirement: Floating subscribe form

The footer SHALL include a floating email subscribe form that sits above the footer content (negative margin), with a pill-shaped white container, email input, and a golden-tan "Subscribe" button.

#### Scenario: Subscribe form renders above footer

- **WHEN** the footer renders
- **THEN** a subscribe form appears overlapping the top of the footer area
- **AND** the form container has a white background with 40px border-radius (pill shape)
- **AND** the form has a subtle box shadow

#### Scenario: Subscribe form contains email input and submit button

- **WHEN** the subscribe form renders
- **THEN** an email text input with placeholder "Enter email address" is visible
- **AND** a "Subscribe" button appears to the right of the input
- **AND** the button has a golden-tan (#bfa88e) background, white text, 150px wide, 56px tall
- **AND** the button text is uppercase with 1px letter-spacing

### Requirement: Footer main content — brand + nav columns

The footer SHALL render with a #131719 (dark charcoal) background, 5em vertical padding, and two main columns: (1) brand description with logo and "read more" link, (2) four bordered nav columns (Discover, About, Resources, Social).

#### Scenario: Footer displays dark background

- **WHEN** the footer renders
- **THEN** the footer background is #131719
- **AND** the footer has 5em vertical padding

#### Scenario: Brand column shows logo and description

- **WHEN** the footer renders
- **THEN** the left column shows a "Colorlib.com" logo heading in white, uppercase
- **AND** a description paragraph in rgba(255,255,255,0.3) appears below
- **AND** a "read more" link with a forward arrow icon appears in the accent color (#bba387)

#### Scenario: Nav columns display with border dividers

- **WHEN** the footer renders
- **THEN** four nav columns appear: Discover, About, Resources, Social
- **AND** each column is separated by a left border (1px solid rgba(255,255,255,0.05))
- **AND** each column has a heading in rgba(255,255,255,0.9), 19px
- **AND** each column has 4 navigation links in rgba(255,255,255,0.4) that turn white on hover

#### Scenario: Column dividers hide on mobile

- **WHEN** the viewport is below 1200px
- **THEN** the column border-left dividers are removed

### Requirement: Partner strip

The footer SHALL display a partner section with horizontal borders, a heading "Our Partner:", six company links with icons, and a "See All" link.

#### Scenario: Partner section renders

- **WHEN** the footer renders
- **THEN** a horizontal strip appears with top and bottom borders (1px solid rgba(255,255,255,0.05))
- **AND** the heading "Our Partner:" appears in 14px, rgba(255,255,255,0.4)
- **AND** six company name links appear in 13px uppercase, rgba(255,255,255,0.4)
- **AND** a "See All" link with forward arrow appears on the right

### Requirement: Copyright bar with legal links

The footer SHALL display a copyright line on the left and legal links (Terms, Privacy, Compliances) on the right.

#### Scenario: Copyright and legal links render

- **WHEN** the footer renders
- **THEN** a copyright line appears on the left in rgba(255,255,255,0.4), 14px
- **AND** the copyright contains a dynamic year
- **AND** three legal links (Terms, Privacy, Compliances) appear on the right
- **AND** legal links use the accent color (#bba387)

### Requirement: Footer links use Component Dock attribution

The footer copyright line SHALL link to Component Dock instead of Colorlib.

#### Scenario: Copyright links to Component Dock

- **WHEN** the footer renders
- **THEN** the copyright attribution link points to https://www.componentdock.com/
- **AND** the link text reads "Component Dock"

## Verification Checklist

- [ ] Footer background is #131719 (dark charcoal)
- [ ] Font family is Poppins
- [ ] Floating subscribe form with pill shape (40px radius, white bg)
- [ ] Subscribe button: #bfa88e bg, white text, uppercase, 150×56px
- [ ] Brand column: logo (white, uppercase), description, "read more" link
- [ ] Four nav columns: Discover, About, Resources, Social
- [ ] Column dividers: 1px rgba(255,255,255,0.05), hidden on mobile
- [ ] Nav links: rgba(255,255,255,0.4), white on hover
- [ ] Partner strip with borders, 6 company links, "See All"
- [ ] Copyright bar: left-aligned, rgba(255,255,255,0.4), 14px
- [ ] Legal links: Terms, Privacy, Compliances (right-aligned)
- [ ] Links use accent color #bba387
- [ ] Responsive: columns stack, dividers hide on mobile
- [ ] No ColorLib references in app code (provenance in spec only)
