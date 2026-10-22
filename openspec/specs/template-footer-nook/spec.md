# Template: FooterNook (Footer / Contact Form)
<!-- prep-status: shipped-as=footerdash -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-footer-18` design this prep describes already
> ships as `apps/footerdash` (<https://footerdash.free.componentdock.com>).
> Do not scaffold `apps/footer-nook`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-footerdash/spec.md`.

## Purpose

Recreation of ColorLib "Bootstrap Footer 18" (V18) — a footer section template
featuring a multi-column link layout with a contact form sidebar.

- **Source:** [colorlib.com/wp/template/bootstrap-footer-18/](https://colorlib.com/wp/template/bootstrap-footer-18/)
- **Preview:** [preview.colorlib.com/theme/bft/bootstrap-footer-18/](https://preview.colorlib.com/theme/bft/bootstrap-footer-18/)
- **Screenshot fallback:** `https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-18.jpg`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Best for:** Portfolio sites, multi-section footers with contact form

## Design Tokens

### Colors

| Token          | Hex/Value              | Usage                                      |
|----------------|------------------------|--------------------------------------------|
| Brand accent   | `#12cc94`              | Links, aside-stretch sidebar background    |
| Footer bg      | `#f1f6f5`              | Main footer section background (light mint)|
| Submit button  | `#2f89fc`              | Contact form submit button (blue)          |
| Text muted     | `rgba(0,0,0,0.3)`      | Paragraphs, link list items                |
| Text white     | `#fff`                 | Footer heading-white on sidebar            |
| Social bg      | `rgba(0,0,0,0.05)`     | Social icon circle background              |
| Form input bg  | `#fff`                 | Contact form input backgrounds             |
| Form input border | `none`               | No border on contact form inputs           |

### Typography

| Token          | Value                                  | Usage                      |
|----------------|----------------------------------------|----------------------------|
| Font family    | `"Poppins", sans-serif`               | Global (Google Fonts CDN)  |
| Heading weight | 400 (normal)                           | `.footer-heading`          |
| Body weight    | 400                                    | Paragraphs, links          |
| Heading size   | 18px                                   | `.footer-heading`          |
| Body size      | 14px                                   | Contact form inputs        |

### Spacing & Layout

| Token                | Value          | Usage                           |
|----------------------|----------------|---------------------------------|
| Footer padding       | `0` (on `.footer-08`) | Reset; children control padding |
| Section padding      | `12em 0`       | `.ftco-section` hero area       |
| Footer internal      | `7em 0`        | `<footer>` element padding      |
| Social icon size     | 40×40px        | Circular icon containers        |
| Social icon font     | 20px           | Ionicons font size              |
| Form input height    | 50px           | `.form-control` in contact form |
| Form input radius    | 5px            | `.form-control` border-radius   |
| Heading margin-bottom| 30px           | `.footer-heading`               |

### Button Shapes

- Submit button: no explicit border-radius (inherits Bootstrap default ~0.25rem)
- Background: `#2f89fc` (blue), text: `#fff` (white)
- Full-width within form (`form-control submit`)

## Section Structure (Order)

1. **Hero/Title section** — centered heading "Footer #08" in a padded section
2. **Footer (`footer.footer-08`)** — light mint background `#f1f6f5`, two-column layout:
   - **Left (col-md-9):**
     - Row 1: "About us" column (col-md-4) + three link columns (col-md-8 → Discover, About, Resources)
     - Row 2: Copyright line
   - **Right (col-md-3)** — `.aside-stretch-right` with green `#12cc94` background:
     - "Contact us" heading (white)
     - Contact form: Name, Email, Subject, Message textarea, Send button

## Requirements

### Feature: FooterNook template behaviour

#### Scenario: Hero section renders centered heading

- **GIVEN** the page loads
- **WHEN** I view the hero section
- **THEN** I see a centered heading "Footer #08"
- **AND** the section has padding of approximately 12em vertically

#### Scenario: Footer displays three-column link layout

- **GIVEN** the footer renders
- **WHEN** I look at the left column (col-md-9)
- **THEN** I see an "About us" column with description text and social icons
- **AND** I see a "Discover" column with links: Buy & Sell, Merchant, Giving back, Help & Support
- **AND** I see an "About" column with links: Staff, Team, Careers, Blog
- **AND** I see a "Resources" column with links: Security, Global, Charts, Privacy

#### Scenario: Social icons render with circular styling

- **GIVEN** the footer renders
- **WHEN** I look at the About us section
- **THEN** I see social icons for Twitter, Facebook, and Instagram
- **AND** each icon has a 40x40px circular background
- **AND** the background color is rgba(0,0,0,0.05)

#### Scenario: Contact form displays in green sidebar

- **GIVEN** the footer renders
- **WHEN** I look at the right sidebar (col-md-3)
- **THEN** the sidebar background is #12cc94 (green)
- **AND** I see a "Contact us" heading in white
- **AND** I see form fields: Name, Email, Subject, Message
- **AND** I see a "Send" button with blue (#2f89fc) background

#### Scenario: Contact form inputs have correct styling

- **GIVEN** the contact form renders
- **WHEN** I examine the form inputs
- **THEN** each input has height of 50px
- **AND** each input has border-radius of 5px
- **AND** each input has no visible border
- **AND** placeholder text color is rgba(0,0,0,0.3)

#### Scenario: Copyright line renders at footer bottom

- **GIVEN** the footer renders
- **WHEN** I look at the bottom of the left column
- **THEN** I see a copyright line with dynamic year
- **AND** the text color is rgba(0,0,0,0.3)

#### Scenario: Links use brand accent color

- **GIVEN** the footer renders
- **WHEN** I hover over any footer link
- **THEN** the link color is #12cc94 (brand green)

#### Scenario: Footer is responsive

- **GIVEN** the viewport width is less than 768px
- **WHEN** the footer renders
- **THEN** the sidebar background becomes transparent
- **AND** the sidebar stretch pseudo-element is hidden
- **AND** the layout stacks vertically

## Verification Checklist

- [ ] Hero section renders with centered heading and correct padding
- [ ] Footer background is #f1f6f5 (light mint)
- [ ] About us column has heading, description, and 3 social icons
- [ ] Social icons are 40x40px circles with rgba(0,0,0,0.05) background
- [ ] Discover/About/Resources link columns render with correct links
- [ ] Link list items have rgba(0,0,0,0.3) text color
- [ ] Link headings are 18px with 30px bottom margin
- [ ] Right sidebar has #12cc94 green background
- [ ] Contact form has Name, Email, Subject, Message fields
- [ ] Form inputs are 50px height, 5px border-radius, no border, white bg
- [ ] Submit button is #2f89fc blue with white text
- [ ] Copyright line shows current year with muted text color
- [ ] Footer uses Poppins font family
- [ ] Responsive: sidebar background transparent below 768px
- [ ] Footer links point to Component Dock (per conventions)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds
