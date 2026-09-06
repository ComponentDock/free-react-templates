# Template: FooterDusk (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 12** — a dark charcoal footer with a floating pill-shaped subscribe form, a two-column layout (brand description + four link columns separated by subtle borders), a partner bar with company logos, and a split copyright/terms row. The warm tan accent (#bba387) contrasts against the near-black background.

- **Source:** Bootstrap Footer 12 — https://colorlib.com/wp/template/bootstrap-footer-12/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-12/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                  | Value                          | Source                                                                |
| ---------------------- | ------------------------------ | --------------------------------------------------------------------- |
| Font family            | `"Poppins", sans-serif`        | `@font-face` loaded from CDN (Cloudflare Fonts)                       |
| Footer background      | `#131719` (dark charcoal)      | `.footer-02 { background: #131719 }`                                  |
| Footer text color      | `rgba(255,255,255,0.3)`        | `.footer-02 p { color: rgba(255,255,255,0.3) }`                      |
| Accent color           | `#bba387` (warm tan)           | `.footer-02 a { color: #bba387 }`                                     |
| Footer heading color   | `rgba(255,255,255,0.9)`        | `.footer-02 .footer-heading { color: rgba(255,255,255,0.9) }`         |
| Logo color             | `#ffffff`                      | `.footer-02 .footer-heading .logo { color: #fff; text-transform: uppercase }` |
| Nav link color         | `rgba(255,255,255,0.4)`        | `.footer-02 .list-unstyled li a`                                      |
| Nav link hover color   | `#ffffff`                      | `.footer-02 .list-unstyled li a:hover { color: #fff }`               |
| Copyright text color   | `rgba(255,255,255,0.4)`        | `.footer-02 .copyright { color: rgba(255,255,255,0.4); font-size: 14px }` |
| Subscribe form bg      | `#ffffff` (white)              | `.footer-02 .subscribe-form { background: #fff }`                     |
| Subscribe form radius  | `40px` (pill)                  | `.footer-02 .subscribe-form { border-radius: 40px }`                  |
| Subscribe form shadow  | `0px -12px 21px -15px rgba(0,0,0,0.1)` | `.footer-02 .subscribe-form { box-shadow: ... }`                |
| Input placeholder color| `rgba(0,0,0,0.3)`              | `.footer-02 .subscribe-form .form-group input::-webkit-input-placeholder` |
| Submit button bg       | `#bfa88e` (warm tan, lighter)  | `.footer-02 .subscribe-form .form-group .submit { background: #bfa88e }` |
| Submit button text     | `#ffffff`                      | `.footer-02 .subscribe-form .form-group .submit { color: #fff }`     |
| Submit button size     | `150px × 56px`                 | `.footer-02 .subscribe-form .form-group .submit { width: 150px; height: 56px }` |
| Submit button font     | `14px`, uppercase              | `.footer-02 .subscribe-form .form-group .submit { font-size: 14px; text-transform: uppercase }` |
| Submit button radius   | `40px` (pill)                  | `.footer-02 .subscribe-form .form-group .submit { border-radius: 40px }` |
| Subscribe margin-top   | `-105px` (floats above footer) | `.footer-02 .subscribe { margin-top: -105px }`                        |
| Partner section border | `1px solid rgba(255,255,255,0.05)` | `.footer-02 .partner-wrap { border-top; border-bottom }`          |
| Partner heading color  | `rgba(255,255,255,0.4)`        | `.footer-02 .partner-wrap h3 { color: rgba(255,255,255,0.4); font-size: 14px }` |
| Partner name color     | `rgba(255,255,255,0.4)`        | `.footer-02 .partner-wrap .partner-name a { color: rgba(255,255,255,0.4); font-size: 13px; text-transform: uppercase }` |
| Partner icon color     | `#ffffff`                      | `.footer-02 .partner-wrap .partner-name a span { color: white }`     |
| Column border color    | `rgba(255,255,255,0.05)`       | `.footer-02 .border-left { border-color: rgba(255,255,255,0.05) }`   |
| Footer padding         | `5em 0`                        | `footer { padding: 5em 0 }`                                           |
| Content section bg     | `#f8f8f8` (light gray)         | `.ftco-section { background: #f8f8f8 }`                               |
| Content section pad    | `12em 0`                       | `.ftco-section { padding: 12em 0 }`                                   |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #12" on a light gray background, filling 12em vertical padding.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #12" is visible
- **AND** the content area uses a light gray (#f8f8f8) background
- **AND** the content area has approximately 12em vertical padding

### Requirement: Subscribe form (floating pill)

The footer SHALL include a white pill-shaped email subscribe form that floats above the footer content with a negative top margin.

#### Scenario: Subscribe form renders above footer

- **WHEN** the footer renders
- **THEN** a subscribe form with white (#fff) background is visible
- **AND** the form has a pill shape (border-radius: 40px)
- **AND** the form has a subtle upward shadow (box-shadow: 0px -12px 21px -15px rgba(0,0,0,0.1))
- **AND** the form floats above the footer via negative margin-top (~-105px)

#### Scenario: Subscribe form has email input and submit button

- **WHEN** the subscribe form renders
- **THEN** an email input field with placeholder "Enter email address" is visible
- **AND** a "Subscribe" submit button is visible
- **AND** the submit button has warm tan (#bfa88e) background and white text
- **AND** the submit button is 150px wide, 56px tall, pill-shaped (40px radius), uppercase 14px text
- **AND** the input and button sit side by side in a horizontal flex row

### Requirement: Footer main content section

The footer SHALL have a dark charcoal (#131719) background with 5em vertical padding and a two-column layout: brand info on the left, four link columns on the right.

#### Scenario: Footer displays dark charcoal background

- **WHEN** the footer renders
- **THEN** the footer background is dark charcoal (#131719)
- **AND** the footer has 5em vertical padding

#### Scenario: Brand column shows logo and description

- **WHEN** the footer renders
- **THEN** the left column (col-md-4 col-lg-5) contains:
  - A brand heading "FooterDusk" styled as a link, white (#fff), uppercase, 19px
  - A description paragraph in very transparent white (rgba(255,255,255,0.3))
  - A "read more" link in warm tan (#bba387) with a forward arrow icon

#### Scenario: Link columns are separated by subtle borders

- **WHEN** the footer renders
- **THEN** the right side contains 4 columns (Discover, About, Resources, Social) in a row
- **AND** each column is separated by a left border in rgba(255,255,255,0.05)
- **AND** each column has a heading in rgba(255,255,255,0.9) at 19px
- **AND** each column has 4 navigation links in rgba(255,255,255,0.4)
- **AND** hovering a link changes its color to white (#fff)

#### Scenario: Discover column links

- **WHEN** the footer renders
- **THEN** the Discover column shows: Buy & Sell, Merchant, Giving back, Help & Support

#### Scenario: About column links

- **WHEN** the footer renders
- **THEN** the About column shows: Staff, Team, Careers, Blog

#### Scenario: Resources column links

- **WHEN** the footer renders
- **THEN** the Resources column shows: Security, Global, Charts, Privacy

#### Scenario: Social column links

- **WHEN** the footer renders
- **THEN** the Social column shows: Facebook, Twitter, Instagram, Googleplus

### Requirement: Partner bar

The footer SHALL include a horizontal partner section with a heading, company names, and a "See All" link, separated by subtle top and bottom borders.

#### Scenario: Partner bar renders

- **WHEN** the footer renders
- **THEN** a "Our Partner:" heading is displayed in rgba(255,255,255,0.4) at 14px
- **AND** 6 company names are shown in a horizontal row, each prefixed with an icon
- **AND** partner names are uppercase, 13px, rgba(255,255,255,0.4)
- **AND** partner icons are white
- **AND** a "See All" link with forward arrow is right-aligned in warm tan (#bba387)
- **AND** the partner section is bordered top and bottom with rgba(255,255,255,0.05)
- **AND** the partner section has 1em vertical padding

### Requirement: Copyright and terms bar

The footer SHALL include a bottom row with copyright text on the left and Terms/Privacy/Compliances links on the right.

#### Scenario: Copyright bar renders

- **WHEN** the footer renders
- **THEN** a copyright row appears at the bottom
- **AND** the left side reads "© [current year] All rights reserved" in rgba(255,255,255,0.4) at 14px
- **AND** the right side shows "Terms", "Privacy", "Compliances" links in warm tan (#bba387)
- **AND** the right side is right-aligned on desktop

### Requirement: Accessibility

All interactive elements SHALL have accessible names and appropriate ARIA attributes.

#### Scenario: Subscribe form accessibility

- **WHEN** the subscribe form renders
- **THEN** the email input has a `label` or `aria-label` associating it with "Email address"
- **AND** the submit button has accessible text "Subscribe"

#### Scenario: Navigation link accessibility

- **WHEN** the footer renders
- **THEN** each navigation link is a proper `<a>` element with visible text
- **AND** each partner link has accessible text (e.g. "Company 01")

### Requirement: Responsive behavior

The footer layout SHALL adapt responsively: single-column on mobile, multi-column grid on desktop.

#### Scenario: Mobile layout stacks vertically

- **WHEN** the viewport width is below 768px
- **THEN** the brand and link columns stack vertically
- **AND** the link columns stack vertically
- **AND** the subscribe form remains centered

#### Scenario: Desktop layout uses multi-column grid

- **WHEN** the viewport width is 768px or above
- **THEN** the brand column is col-lg-5 and the link area is col-lg-7
- **AND** the 4 link columns display in a row
- **AND** the copyright row splits into left and right halves

### Requirement: Component Dock attribution

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the link text reads "Component Dock"

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/footerdusk/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)
