# Template: Daintyvue (SaaS / Landing Page)
<!-- prep-status: shipped-as=filament -->
> **SHIPPED-UNDER** — the ColorLib `simples` design this prep describes already
> ships as `apps/filament` (<https://filament.free.componentdock.com>).
> Do not scaffold `apps/daintyvue`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-filament/spec.md`.

## Purpose

Recreation of ColorLib "Simples" — a feminine, gradient-accented SaaS/landing page template.

- **Source:** https://colorlib.com/wp/template/simples/
- **Preview:** https://preview.colorlib.com/theme/simples/
- **Source slug:** `simples`
- **New name:** `daintyvue`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`main.css`) and DOM:

| Token              | Value                              | Notes                                     |
| ------------------ | ---------------------------------- | ----------------------------------------- |
| Brand pink         | `#fcd2ff`                          | Primary accent, icons, links, buttons     |
| Gradient start     | `#f6d0c5`                          | Salmon/peach — banner, process area       |
| Gradient end       | `#fbd2f6`                          | Light pink — banner, process area         |
| Body text          | `#777`                             | Paragraphs, secondary text                |
| Heading text       | `#222`                             | All h1–h6                                 |
| Light bg           | `#f9f9ff`                          | Core feature, subscription sections       |
| Footer bg          | `#000`                             | Black footer                              |
| Dark overlay       | `rgba(0,0,0,0.8)`                  | Service area overlay                      |
| Font — all         | `Poppins`, sans-serif              | Headings and body (weight 300–600)        |
| Button radius      | `20px`                             | Primary CTA buttons (rounded)             |
| Button default bg  | `#fcd2ff`                          | Pink fill                                 |
| Button hover       | Transparent + border `#fcd2ff`     | Invert on hover                           |
| Text shadow        | `13px 15px 8px #f2c4d0`           | Banner h1 pink shadow                     |
| Section padding    | `120px` top/bottom                 | `.section-gap`                            |

## Section Structure

1. **Navbar** — Transparent absolute header, logo left, nav links right (hidden on mobile via `.hide`)
2. **Hero (banner-area)** — Full-screen gradient background (#f6d0c5 → #fbd2f6), large heading "Brand new Simples" with pink text shadow, CTA button
3. **Features (feature-area)** — 4-column grid: Easy Installation, Multiple Layouts, Free Updates, Fully Responsive — each with a pink icon
4. **Core Feature 1 (core-feature-area)** — Light bg (#f9f9ff), split layout: image left + text right with heading "Core Feature", description, carousel navigation
5. **Core Feature 2 (core-feature-bottom-area)** — Reversed split layout: text left + image right, similar heading/description
6. **Process (process-area)** — Gradient background, 6 process steps in a row: Brainstorm, Discuss Ideas, Projections, Strategies, SEO Target, Awards — each with a pink icon and white border-top
7. **Service/Article (service-area)** — Dark overlay on background image, carousel of article cards with titles and excerpts
8. **Subscription (subscription-area)** — Light bg (#f9f9ff), "Subscribe" heading, email input with rounded pill shape, CTA button
9. **Contact (contact-area)** — White bg, contact form with name/email/message fields
10. **Footer** — Black bg (#000), 5 columns: Top Products, Company, Support, Projects, Quick Contact — social icons row

## Requirements

### Navbar

#### Scenario: Navbar

- **GIVEN** the user is on any page
- **WHEN** the page loads
- **THEN** a transparent header navbar appears at the top
- **AND** the navbar contains the logo and navigation links

### Hero Section

#### Scenario: Hero Section

- **GIVEN** the user is on the homepage
- **WHEN** the hero renders
- **THEN** a full-screen gradient background (salmon-to-pink) displays
- **AND** the heading "Brand new Simples" is shown with white text and pink shadow
- **AND** a CTA button is visible

### Features Section

#### Scenario: Features Section

- **GIVEN** the user scrolls to the Features section
- **WHEN** the section renders
- **THEN** 4 feature items are displayed in a grid
- **AND** each item has a pink icon and uppercase title
- **AND** the items are: Easy Installation, Multiple Layouts, Free Updates, Fully Responsive

### Core Feature Sections

#### Scenario: Core Feature Sections

- **GIVEN** the user scrolls to the Core Feature area
- **WHEN** the section renders
- **THEN** a light background (#f9f9ff) section displays
- **AND** a split layout shows an image alongside text content
- **AND** the heading "Core Feature" with a description is visible
- **AND** carousel navigation arrows are present

### Process Section

#### Scenario: Process Section

- **GIVEN** the user scrolls to the Process section
- **WHEN** the section renders
- **THEN** a gradient background section displays
- **AND** 6 process steps are shown in a row
- **AND** each step has a white border-top, pink icon, and uppercase label
- **AND** the steps are: Brainstorm, Discuss Ideas, Projections, Strategies, SEO Target, Awards

### Service/Article Section

#### Scenario: Service/Article Section

- **GIVEN** the user scrolls to the Service section
- **WHEN** the section renders
- **THEN** a dark overlay background displays
- **AND** article cards are shown in a carousel
- **AND** each card has a title and excerpt text

### Subscription Section

#### Scenario: Subscription Section

- **GIVEN** the user scrolls to the Subscription section
- **WHEN** the section renders
- **THEN** a light background (#f9f9ff) section appears
- **AND** the heading "Subscribe" is displayed
- **AND** a rounded email input field is present
- **AND** a CTA button is positioned next to the input

### Contact Section

#### Scenario: Contact Section

- **GIVEN** the user scrolls to the Contact section
- **WHEN** the section renders
- **THEN** a white background section displays
- **AND** a contact form with name, email, and message fields is shown
- **AND** a submit button is present

### Footer

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** a black background (#000) footer is visible
- **AND** five columns display: Top Products, Company, Support, Projects, Quick Contact
- **AND** a social icons row is shown
- **AND** the footer links to Component Dock

## Verification Checklist

- [ ] All 10 sections match the original section order 1:1
- [ ] Brand pink #fcd2ff used for accents, icons, and links
- [ ] Gradient (#f6d0c5 → #fbd2f6) applied to hero and process sections
- [ ] Poppins font used throughout (headings + body)
- [ ] Rounded buttons (border-radius: 20px)
- [ ] Light sections use #f9f9ff background
- [ ] Dark overlay on service section
- [ ] Black (#000) footer with 5 columns
- [ ] Newsletter/subscription input with pill shape
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run verify:app daintyvue` passes
