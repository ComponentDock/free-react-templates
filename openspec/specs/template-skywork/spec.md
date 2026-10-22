# Template: Skywork (Business Landing)
<!-- prep-status: shipped-as=azureline -->
> **SHIPPED-UNDER** — the ColorLib `blueline` design this prep describes already
> ships as `apps/azureline` (<https://azureline.free.componentdock.com>).
> Do not scaffold `apps/skywork`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-azureline/spec.md`.

## Purpose

Skywork is a single-page business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Blueline" free template (source:
https://colorlib.com/wp/template/blueline/), built under a DIFFERENT name
(**Skywork**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 fullscreen landing page with Poppins font,
a blue gradient hero banner, numbered feature cards, a video showcase with
dark overlay, a split service section (black left / white right), an image
carousel for portfolio works, a newsletter email subscription form, a
split contact form (image + form), and a dark footer with social icons.

**Source mapping:**
- **ColorLib item:** "Blueline" (TEMPLATES.md line 913)
- **Source URL:** https://colorlib.com/wp/template/blueline/
- **Preview URL:** https://preview.colorlib.com/theme/blueline/
- **Preview CSS:** `css/main.css` (full styles, Bootstrap 4 grid, Poppins
  web font)
- **Recreation name:** **Skywork** (NEW — never reuse source name "Blueline")
- **App folder:** `apps/skywork`
- **Package:** `@free-react-templates/skywork`

## Design tokens (extracted from preview CSS + DOM)

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| brand-blue | `#3c50ca` | Gradient start (hero, buttons, primary actions) |
| brand-cyan | `#77d5f7` | Gradient end (hero, buttons, text highlights) |
| primary | `#2954c9` | Solid primary color (buttons, links, list bullets) |
| body-text | `#777777` | Body paragraph text |
| heading-text | `#222222` | Heading color (h1–h6) |
| surface | `#f9f9ff` | Light background (body, inputs, section-bg) |
| dark-surface | `#000000` | Service left bg, footer bg, video overlay |
| white | `#ffffff` | Feature area bg, service right bg, newsletter bg |
| success | `#4cd3e3` | Accent/confirm |
| info | `#38a4ff` | Info accent |
| danger | `#f44a40` | Error/danger |
| border-light | `#eeeeee` | Card/service borders |
| service-border | `rgba(111,117,152,0.3)` | Contact form input borders |

### Gradient

- **p1-gradient-bg** (primary button, slider arrows, footer social hover):
  linear-gradient(0deg, `#3c50ca` 0%, `#77d5f7` 100%)
- **p2-gradient-bg** (horizontal variant): linear-gradient(90deg, `#3c50ca` 0%, `#77d5f7` 50%)
- **p1-gradient-color** (feature numbers, service icons):
  linear-gradient(0deg, `#3c50ca`, `#77d5f7`) with `background-clip: text`

### Typography

- **Font family:** `"Poppins", sans-serif` (Google Fonts, weights 100–700)
- **Body:** 14px, weight 300, line-height 1.5em
- **h1:** 36px / 124px (banner), weight 300 (banner) / 600 (feature)
- **h2:** 30px, weight 600
- **h3:** 24px, weight 600
- **Feature number (h1):** 48px, weight 600, gradient clip text, letter-spacing 3px, uppercase
- **Banner h1:** 124px (desktop) / 34px (tablet) / 20px (mobile), weight 300, letter-spacing 25px, text-shadow

### Buttons

- **primary-btn:** gradient bg (`#3c50ca` → `#77d5f7`), border-radius 20px, 40px line-height, padding 0 30px, uppercase, inline-flex, text color white, hover: white bg + cyan text
- **Contact "Send Message":** `.primary-btn.primary.circle` — same gradient, circle (20px radius), float-left

### Section backgrounds

1. **Header:** transparent overlay (absolute positioned over banner)
2. **Banner/Hero:** full-viewport height (735px), background image (`header-bg.jpg`) with geometric blue overlay, centered text
3. **Feature area:** white (`#fff`), padding-bottom 200px
4. **Video area:** video thumbnail with dark overlay (50% black), play button centered, text content below
5. **Service area:** split — left `#000`, right `#fff`, 2x2 grid of service cards
6. **Latest works:** white, centered text, image carousel (owl carousel)
7. **Newsletter:** white, centered, rounded email input (25px radius)
8. **Contact:** split — left image, right white form card
9. **Footer:** black (`#000`), social icons in dark circles (`#1e1e1e`)

### Layout

- Bootstrap 4 grid (container with max-width, row/col-lg system)
- Full-screen hero banner
- 3-column feature cards (col-lg-4)
- 2-column split (col-lg-6/col-lg-6) for services and contact
- 2x2 grid within service-right (col-lg-6 col-md-6 col-sm-6)
- Max-width container for content sections

## Requirements

### Feature: Skywork template behaviour

**Background**

- **GIVEN** the Skywork app is deployed at its preview URL
- **AND** the template uses Vite + React 19 + Tailwind CSS 4 + TypeScript

#### Scenario: Header displays logo and navigation

- **GIVEN** a user loads the page
- **THEN** a transparent header should overlay the hero banner
- **AND** the header should contain a logo on the left
- **AND** the header should contain a hamburger menu icon on the right
- **AND** the navigation should include Home, Generic, and Elements links

#### Scenario: Hero banner displays fullscreen with branding

- **GIVEN** a user loads the page
- **THEN** a full-screen banner section should be visible
- **AND** the banner should have a blue-toned gradient background
- **AND** the text "INTRODUCING" should appear in uppercase white
- **AND** the brand name "Skywork" should appear as large bold white text centered below
- **AND** the text should have a subtle text shadow

#### Scenario: Feature section shows three numbered items

- **GIVEN** a user scrolls past the banner
- **THEN** a white feature section should display
- **AND** three feature cards should be visible in a row
- **AND** each card should show a large gradient-colored number (01, 02, 03)
- **AND** each card should have an uppercase title
- **AND** each card should have descriptive paragraph text

#### Scenario: Video section displays video thumbnail with text

- **GIVEN** a user scrolls to the video section
- **THEN** a video thumbnail area should be visible with a dark overlay
- **AND** a centered play button should overlay the video thumbnail
- **AND** below the video, a heading "Great Modern Design / Build with usability in mind" should appear
- **AND** a descriptive paragraph should follow the heading
- **AND** the words "Modern Design" and "usability" should be visually highlighted (bold)

#### Scenario: Service section shows split layout with four services

- **GIVEN** a user scrolls to the services section
- **THEN** the left half should have a black background
- **AND** the left half should show "Services We Offered" heading in white
- **AND** the left half should have a descriptive paragraph
- **AND** the right half should have a white background
- **AND** the right half should display four service cards in a 2x2 grid
- **AND** each service card should have an icon, title, and description
- **AND** each service card should have a light border

#### Scenario: Latest works section shows image carousel

- **GIVEN** a user scrolls to the latest works section
- **THEN** a heading "Some Of our Latest Works" should be visible
- **AND** an image carousel should display portfolio images
- **AND** the active image should be fully opaque
- **AND** inactive images should be semi-transparent
- **AND** carousel navigation arrows should be visible on hover

#### Scenario: Newsletter section accepts email subscription

- **GIVEN** a user scrolls to the newsletter section
- **THEN** a heading "Subscribe for our Newsletter" should be visible
- **AND** a subtext "We won't send any kind of spam" should appear below
- **AND** an email input field should be visible with rounded styling
- **AND** a "Get Started" button should be visible
- **AND** the button should use the gradient primary style

#### Scenario: Contact section displays split layout

- **GIVEN** a user scrolls to the contact section
- **THEN** the left side should display a contact image
- **AND** the right side should display a form card
- **AND** the form should have Name, Email, and Message fields
- **AND** a "Send Message" button should be visible
- **AND** the form card should have a white background with padding

#### Scenario: Footer shows copyright and social links

- **GIVEN** a user scrolls to the bottom
- **THEN** a black footer should be visible
- **AND** it should show a copyright notice
- **AND** social media icons (Facebook, Twitter, Dribbble, Behance) should be visible
- **AND** social icon buttons should have dark circle backgrounds
- **AND** hovering a social icon should show a gradient effect
- **AND** the footer should link to https://www.componentdock.com/

#### Scenario: Responsive behavior

- **GIVEN** a user views the page on a mobile device
- **THEN** the banner text should scale down appropriately
- **AND** the hamburger menu should be visible
- **AND** the navigation should collapse
- **AND** feature cards should stack vertically
- **AND** service cards should stack vertically
- **AND** the contact form should stack below the image
- **AND** the newsletter input and button should stack vertically

## Verification checklist

- [ ] Header: transparent overlay, logo left, hamburger right
- [ ] Hero: full-screen, blue gradient bg, centered "INTRODUCING" + brand name
- [ ] Features: 3-column cards with gradient numbers, titles, descriptions
- [ ] Video: thumbnail with dark overlay + play button + text content below
- [ ] Services: split layout, black left (heading + text), white right (2x2 cards)
- [ ] Latest works: heading + image carousel with opacity effect
- [ ] Newsletter: heading + email input (rounded) + gradient "Get Started" button
- [ ] Contact: split (image left, form right), name/email/message fields
- [ ] Footer: black bg, copyright, social icons with hover gradient
- [ ] Footer links to https://www.componentdock.com/
- [ ] Font: Poppins loaded from Google Fonts
- [ ] All design tokens applied: #3c50ca/#77d5f7 gradient, #000 dark, #f9f9ff surface
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run verify:app skywork` passes
