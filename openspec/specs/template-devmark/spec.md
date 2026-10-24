# Template: DevMark (Developer Portfolio)
<!-- prep-status: shipped-as=pivot -->
> **SHIPPED-UNDER** — the ColorLib `martin` design this prep describes already
> ships as `apps/pivot` (<https://pivot.free.componentdock.com>).
> Do not scaffold `apps/devmark`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-pivot/spec.md`.

## Purpose

Recreation of ColorLib "Martin" template — a personal developer portfolio
with split hero carousel, services grid, case studies, newsletter, and
blue footer.

- **Source:** https://colorlib.com/wp/template/martin/
- **Preview:** https://preview.colorlib.com/theme/martin/
- **New name:** `devmark` (apps/devmark, @free-react-templates/devmark)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from https://preview.colorlib.com/theme/martin/css/style.css:

| Token               | Value                    | Usage                                      |
| ------------------- | ------------------------ | ------------------------------------------ |
| Font family         | Poppins (300–800)        | Body + headings (Google Fonts)             |
| Brand yellow        | `#ffdd00`                | Primary buttons, links, accents, social icons |
| Accent blue         | `#002bdc`                | Footer bg, form focus ring, contact links  |
| Body background     | `#f7f7f7`                | Page background                            |
| Text primary        | `#1a1a1a`                | Headings, body text                        |
| Text secondary      | `rgba(114,114,114,0.8)`  | Sub-labels, spans                          |
| White               | `#fff`                   | Services/work section backgrounds          |
| Button radius       | 2px                      | CTA buttons (yellow bg, black text)        |
| Input radius        | 4px                      | Form controls                              |
| Icon font           | icomoon                  | Hero/services/footer icons                 |

### Color palette (from CSS)

- `#ffdd00` — brand yellow (primary)
- `#002bdc` — accent blue (footer, focus)
- `#f7f7f7` — body background
- `#1a1a1a` — primary text
- `#fff` — section backgrounds (services, work)
- `#ffe01a` — button hover state
- `#e0e0e0` — borders, dividers
- `rgba(0,0,0,0.4)` — hero image overlay

## Visual reference

From TEMPLATES.md screenshot: The Martin template shows a clean, modern
developer portfolio. The hero features a full-height split layout with a
large photo on the left (~75%) and a narrow text panel on the right (~25%)
with a bold headline and CTA. The color scheme is predominantly light gray
body with yellow (#ffdd00) accents on buttons and links, and a deep blue
(#002bdc) footer. Typography is Poppins with generous weight variation.
The overall aesthetic is minimal with strong contrast between the light
content area and dark footer.

## Requirements

### Feature: DevMark — Personal Developer Portfolio

#### Scenario: Page loads with correct structure

- **GIVEN** the user visits the DevMark homepage
- **THEN** a sticky top navigation bar is visible with logo "D."
- **AND** a hamburger menu toggle is present on mobile
- **AND** the page contains the following sections in order:
  1. Hero (carousel)
  2. Services ("What I Do")
  3. Work/Case Studies
  4. Newsletter/Subscribe
  5. Footer

#### Scenario: Navigation

- **GIVEN** the navigation bar is visible
- **WHEN** the user clicks the hamburger icon (mobile)
- **THEN** a full-screen overlay menu appears with links:
  Home, About, Services, Work, Blog, Contact
- **AND** clicking a link closes the menu

#### Scenario: Hero carousel

- **GIVEN** the hero section is visible
- **THEN** a carousel displays slides with:
  - A full-height background image (3/4 width)
  - A narrow right panel (1/4 width) with:
    - Headline text (e.g. "I'm a developer from Berlin.")
    - CTA button "Hire me now →" in uppercase with letter-spacing
- **AND** social media links (Twitter, Facebook, Instagram, Dribbble)
  appear vertically on the left edge
- **AND** carousel auto-advances or supports dot navigation

#### Scenario: Services section

- **GIVEN** the services section is visible
- **THEN** a centered heading reads "What I Do" with subheading
  "Strategy, design and a bit of magic"
- **AND** three service cards display in a row:
  - Explore (magnifying glass icon): Design Sprints, Product Strategy, UX Strategy
  - Create (layers icon): Information, UX/UI Design, Branding
  - Learn (lightbulb icon): Prototyping, User Testing, UI Testing
- **AND** each card has a circle icon, title, and list of sub-services

#### Scenario: Work/Case studies section

- **GIVEN** the work section is visible (white background)
- **THEN** a centered heading reads "Work" with subheading
  "Happy spending my time to this projects"
- **AND** a carousel displays case study cards:
  - Each card has a large image (50% width)
  - A text panel (50% width) with:
    - Tag pills (e.g. "UI/UX, Art Direction")
    - Project title as link
    - Description paragraph
    - "See details" button (yellow bg)
- **AND** at least 3 case studies are shown

#### Scenario: Newsletter/Subscribe section

- **GIVEN** the subscribe section is visible
- **THEN** an overlay background is present
- **AND** a paragraph of introductory text appears
- **AND** a "Read my resume here" link with document icon
- **AND** a heading "Subscribe Newsletter"
- **AND** subheading "Subscribe our newsletter and get latest update"
- **AND** an email input field with placeholder "Enter your email"
- **AND** a "Subscribe Now" button (yellow bg, black text)

#### Scenario: Footer

- **GIVEN** the footer is visible
- **THEN** it has a blue (#002bdc) background
- **AND** a left column shows "Lets Talk" heading with description
- **AND** a yellow "Tell us about your project" button
- **AND** a right column shows contact info:
  Email, Phone, Address
- **AND** social icons (Facebook, Twitter, Dribbble) with yellow icon color
- **AND** a copyright line with "Component Dock" link
  (replacing original Colorlib attribution)

#### Scenario: Responsive behavior

- **GIVEN** the user is on a mobile device (< 768px)
- **THEN** the hero carousel stacks vertically
- **AND** the services grid becomes single-column
- **AND** the work carousel shows one card at a time
- **AND** the footer columns stack vertically
- **AND** section padding reduces from 8em to 5em

#### Scenario: Accessibility

- **GIVEN** any user visits the page
- **THEN** navigation uses semantic `<nav>` element
- **AND** the hamburger button has an accessible label
- **AND** all images have descriptive alt text
- **AND** interactive elements have visible focus states
- **AND** the newsletter form has a proper `<label>` or `aria-label`

## Verification checklist

- [ ] Hero carousel renders with split layout (image + text panel)
- [ ] Carousel auto-plays or has navigation controls
- [ ] Social media links display vertically on hero left edge
- [ ] Services section shows 3 cards with icons and sub-items
- [ ] Work section displays case studies in carousel format
- [ ] Subscribe section has email form with yellow button
- [ ] Footer has blue background with contact info and social links
- [ ] Footer links to ComponentDock.com
- [ ] Navigation hamburger menu works on mobile
- [ ] All sections match original section order and layout
- [ ] Design tokens match: Poppins font, #ffdd00 yellow, #002bdc blue
- [ ] Responsive breakpoints work (768px)
- [ ] Accessibility: semantic HTML, focus states, aria labels
- [ ] No ColorLib references in app code
