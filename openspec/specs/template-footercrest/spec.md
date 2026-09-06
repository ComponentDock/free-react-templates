# Template: Footercrest (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 16** — a deep purple/charcoal footer with a prominent newsletter subscription section (pill-shaped input + button on a slightly lighter purple background), a three-column link grid (Information, Application, API) with checkmark-circle icons, and a brand/copyright block. The design is dark and sophisticated with Poppins typography throughout.

- **Source:** Bootstrap Footer 16 — https://colorlib.com/wp/template/bootstrap-footer-16/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-16/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                    | Value                                          | Source                                                        |
| ------------------------ | ---------------------------------------------- | ------------------------------------------------------------- |
| Font family              | `"Poppins", Arial, sans-serif`                 | `body { font-family: "Poppins", Arial, sans-serif }` in `css/style.css` |
| Font weights loaded      | 300, 400, 500, 600, 700, 800, 900             | `@font-face` declarations in preview `<style>`                |
| Footer background        | `#302939` (deep purple-charcoal)               | `.footer-06 { background: #302939 }`                          |
| Newsletter left bg       | `#322b3c` (slightly lighter purple)            | `.footer-06 .aside-stretch { background: #322b3c }`           |
| Newsletter right bg      | `#372f42` (medium purple)                      | `.footer-06 .aside-stretch-right { background: #372f42 }`     |
| Subheading text color    | `rgba(255, 255, 255, 0.3)`                    | `.footer-06 .subheading { color: rgba(255,255,255,0.3) }`    |
| Subheading style         | uppercase, letter-spacing: 2px                 | `.footer-06 .subheading { text-transform: uppercase; letter-spacing: 2px }` |
| Heading section color    | `#ffffff`                                      | `.footer-06 .heading-section { color: #fff }`                 |
| Heading section size     | `30px`                                         | `.footer-06 .heading-section { font-size: 30px }`            |
| Heading section style    | uppercase                                      | `.footer-06 .heading-section { text-transform: uppercase }`   |
| Footer heading color     | `#ffffff`                                      | `.footer-06 .footer-heading { color: #fff }`                 |
| Footer heading size      | `20px`                                         | `.footer-06 .footer-heading { font-size: 20px }`            |
| Footer link color        | `rgba(255, 255, 255, 0.5)`                    | `.footer-06 .list-unstyled li a { color: rgba(255,255,255,0.5) }` |
| Footer paragraph color   | `rgba(255, 255, 255, 0.3)`                    | `.footer-06 p { color: rgba(255,255,255,0.3) }`             |
| Footer heading link color| `#ffffff`                                      | `.footer-06 .footer-heading .logo { color: #fff }`           |
| Subscribe form bg        | `#ffffff`                                      | `.footer-06 .subscribe-form { background: #fff }`            |
| Subscribe form radius    | `40px` (pill)                                  | `.footer-06 .subscribe-form { border-radius: 40px }`         |
| Subscribe form padding   | `3px`                                          | `.footer-06 .subscribe-form { padding: 3px }`                |
| Input bg                 | `transparent`                                  | `.footer-06 .subscribe-form .form-group input { background: transparent }` |
| Input placeholder color  | `rgba(0, 0, 0, 0.3)`                          | `.footer-06 .subscribe-form .form-group input::-webkit-input-placeholder { color: rgba(0,0,0,0.3) }` |
| Submit button bg         | `#352d3f` (dark purple)                        | `.footer-06 .subscribe-form .form-group .submit { background: #352d3f }` |
| Submit button color      | `#ffffff`                                      | `.footer-06 .subscribe-form .form-group .submit { color: #fff }` |
| Submit button width      | `150px`                                        | `.footer-06 .subscribe-form .form-group .submit { width: 150px }` |
| Submit button height     | `56px`                                         | `.footer-06 .subscribe-form .form-group .submit { height: 56px }` |
| Submit button radius     | `40px` (pill)                                  | `.footer-06 .subscribe-form .form-group .submit { border-radius: 40px }` |
| Submit button style      | uppercase, letter-spacing: 1px, font-size: 14px | `.footer-06 .subscribe-form .form-group .submit { text-transform: uppercase; letter-spacing: 1px; font-size: 14px }` |
| Icon color (checkmarks)  | inherited from `a` → `rgba(255,255,255,0.5)`  | ionicons via parent `a` color                                 |
| Footer padding           | `7em 0`                                        | `footer { padding: 7em 0 }`                                   |
| Newsletter section height| stretched (align-items-stretch)                 | `.row.align-items-stretch` in HTML                            |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #06" on a light background with generous vertical padding.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #06" is visible
- **AND** the content area uses a light background
- **AND** the section has generous vertical padding (~12em)

### Requirement: Newsletter subscription section

The footer SHALL display a newsletter subscription section at the top with a two-column layout: a text block on the left ("Subscribe to our" subheading + "Newsletter" heading) and a pill-shaped email subscription form on the right.

#### Scenario: Newsletter section renders with correct structure

- **WHEN** the newsletter section is visible
- **THEN** the left column displays "Subscribe to our" in uppercase, letter-spaced, semi-transparent white text
- **AND** the left column displays "Newsletter" in white, 30px, uppercase
- **AND** the right column displays a pill-shaped subscription form with white background
- **AND** the form contains an email text input with transparent background and a "Submit" button

#### Scenario: Newsletter section background colors

- **WHEN** the newsletter section is rendered
- **THEN** the left column has background `#322b3c`
- **AND** the right column has background `#372f42`
- **AND** both columns stretch to equal height

#### Scenario: Submit button styling

- **WHEN** the submit button is visible
- **THEN** it has a dark purple background (`#352d3f`)
- **AND** white uppercase text with letter-spacing: 1px
- **AND** dimensions of 150px × 56px
- **AND** a pill shape (border-radius: 40px)

### Requirement: Footer content — three-column link grid

The footer SHALL display three columns of links below the newsletter section: "Information" (5 links), "Application" (3 links), and "API" (3 links), each preceded by a checkmark-circle icon.

#### Scenario: Link columns render correctly

- **WHEN** the footer link section is visible
- **THEN** three columns are displayed side by side
- **AND** each column has a heading ("Information", "Application", "API") in white, 20px
- **AND** each link item has a checkmark-circle-outline icon followed by text
- **AND** link text color is `rgba(255, 255, 255, 0.5)`

#### Scenario: Information column content

- **WHEN** the Information column is rendered
- **THEN** it contains links: "Our Company", "Data", "Pricing", "Contact Us", "Support"

#### Scenario: Application column content

- **WHEN** the Application column is rendered
- **THEN** it contains links: "Download", "Bike Provider", "How to Used"

#### Scenario: API column content

- **WHEN** the API column is rendered
- **THEN** it contains links: "Documentation", "Credential", "Developer info"

### Requirement: Brand and copyright block

The footer SHALL display a brand/copyright section on the right side of the link grid row, containing a logo link and copyright text.

#### Scenario: Brand block renders

- **WHEN** the brand block is visible
- **THEN** it displays a "Footercrest" logo link in white
- **AND** copyright text in `rgba(255, 255, 255, 0.3)` with current year
- **AND** a "Made with ♥ by Component Dock" attribution link

#### Scenario: Copyright text content

- **WHEN** the copyright text is rendered
- **THEN** it reads "Copyright © [current year] All rights reserved | This template is made with ♥ by Component Dock"

### Requirement: Responsive layout

The layout SHALL be responsive, collapsing to single-column on small screens.

#### Scenario: Mobile layout

- **WHEN** the viewport is below 768px
- **THEN** the newsletter section stacks vertically (text block above form)
- **AND** the three link columns stack vertically
- **AND** the brand/copyright block stacks below the link columns

### Requirement: Overall dark aesthetic

The footer SHALL maintain a consistent dark purple-charcoal aesthetic throughout, with no bright or light backgrounds in the footer area.

#### Scenario: Dark theme consistency

- **WHEN** the footer is rendered
- **THEN** the overall background is dark purple-charcoal (`#302939`)
- **AND** all text is white or semi-transparent white
- **AND** no section breaks the dark color scheme

## Verification Checklist

- [ ] Preview heading "Footer #06" renders centered on light background
- [ ] Newsletter section: left text block + right pill-shaped form
- [ ] Newsletter left bg: #322b3c, right bg: #372f42
- [ ] Subscribe form: white bg, 40px radius (pill)
- [ ] Submit button: #352d3f bg, white text, 150×56px, pill shape
- [ ] Three link columns: Information (5), Application (3), API (3)
- [ ] Checkmark-circle icons on each link item
- [ ] Link color: rgba(255,255,255,0.5)
- [ ] Brand/copyright block with Component Dock link
- [ ] Copyright includes current year
- [ ] Responsive: stacks on mobile (<768px)
- [ ] Font: Poppins throughout
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
