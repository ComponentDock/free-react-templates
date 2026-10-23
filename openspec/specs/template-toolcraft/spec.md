# Template: Toolcraft (Construction / Handyman)
<!-- prep-status: shipped-as=fixero -->
> **SHIPPED-UNDER** — the ColorLib `handyman` design this prep describes already
> ships as `apps/fixero` (<https://fixero.free.componentdock.com>).
> Do not scaffold `apps/toolcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-fixero/spec.md`.

## Purpose

Recreation of the ColorLib **Handyman** template.
- Source: https://colorlib.com/wp/template/handyman/
- Preview: https://preview.colorlib.com/theme/handyman/
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
- Category: Construction / Handyman / Contractor

## Design Tokens (extracted from preview)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#fb7400` | Buttons, links, accents, active states |
| brand-secondary | `#2e3192` | Dark accent, secondary highlights |
| text-dark | `#212529` | Primary body text |
| text-muted | `#364d59` | Secondary body text |
| text-light | `#999` | Tertiary text, captions |
| bg-light | `#f6f5f5` | Section alternate background |
| bg-lighter | `#f7f7f7` | Subtle background |
| bg-lightest | `#f8f9fa` | Lightest background |
| bg-gray | `#efefef` | Section backgrounds |
| border-light | `#e3e3e3` | Light borders |
| border-mid | `#dee2e6` | Medium borders |
| white | `#fff` | Card backgrounds, text on dark |

### Typography
- Font family: `'Work Sans', sans-serif`
- Weights: 400 (body), 500 (medium emphasis), 700 (headings)
- Loaded via Google Fonts (preconnect + stylesheet)

### Shape / Radii
- Buttons: `border-radius: 4px` (rounded-sm equivalent)
- Images/cards: `border-radius: 7px` (rounded-lg)
- Avatars/avatars: `border-radius: 50%`

### Button Style
- `.btn-primary`: `background-color: #fb7400`, white text, `padding: 12px 40px`, `border-radius: 4px`, uppercase, letter-spacing 2px, font-weight 700
- Hover: slightly darker shade

## Section Structure (from preview DOM)

1. **Navbar** — Fixed top; logo text "Toolcraft"; nav links: Home, About, Services, Projects, Blog, Contact. Mobile hamburger menu.
2. **Hero** — Full-width slider (3 slides) with dark overlay (`before` pseudo-element at ~40% opacity). Heading: "Perfection is always in our mind." White text. Background images via slider.
3. **Quick Contact** — Two-column: left = "If You Have Project In Mind. Get A Quotation" with descriptive text and "Get Quotation" button (`.btn-primary`); right = contact form (Name, Email, Subject, Message, Submit button) on white background.
4. **Services** — 3-column grid (6 items): icon + title + short description. Service cards: Renovation, Finishing, Building Construction, House Build, Fence Construction, Bridge Construct. Light background (`#efefef`).
5. **Stats/Counter** — Full-width section with tab navigation (Technology, Quality, Staff). Each tab shows a counter with icon and description text. Dark background section.
6. **Testimonials** — Single testimonial with quote text, client name "John Smith", subtitle "Client From Facebook". Light background.
7. **Projects** — Gallery grid of project images with hover overlay (heart icon). 3 project cards: "Renovate", "Renovate the house", "Renovate the house 2".
8. **Blog** — Recent posts section: 3 blog cards with date, author, title, excerpt. Light background.
9. **Footer** — Dark background. 5-column layout: About Us (logo + description), then 4 Quick Links columns. Copyright bar at bottom.

## Requirements

### Feature: Toolcraft template behaviour

Feature: Toolcraft — Construction/Handyman Landing Page

#### Scenario: Navbar displays correctly

- **GIVEN** the page loads
- **THEN** the navbar shows the "Toolcraft" logo
- **AND** the navbar has links: Home, About, Services, Projects, Blog, Contact
- **AND** the navbar is sticky on scroll
- **AND** a mobile hamburger menu appears on small screens

#### Scenario: Hero section renders with slider

- **GIVEN** the page loads
- **THEN** the hero section has a dark overlay on the background
- **AND** the heading reads "Perfection is always in our mind."
- **AND** the hero background cycles through 3 slides

#### Scenario: Quick Contact form is functional

- **GIVEN** the page loads
- **THEN** a "Get Quotation" section is visible
- **AND** the contact form has fields: Name, Email, Subject, Message
- **AND** a Submit button is present
- **AND** form fields have placeholder text

#### Scenario: Services section shows 6 service cards

- **GIVEN** the page loads
- **THEN** the services section displays 6 cards in a 3-column grid
- **AND** each card has an icon, title, and description
- **AND** the service names are: Renovation, Finishing, Building Construction, House Build, Fence Construction, Bridge Construct

#### Scenario: Stats/Counter section displays metrics

- **GIVEN** the page loads
- **THEN** the stats section shows 3 tabbed items: Technology, Quality, Staff
- **AND** each tab reveals a counter with icon and description

#### Scenario: Testimonials section shows client quote

- **GIVEN** the page loads
- **THEN** a testimonial quote is displayed
- **AND** the client name and source are shown below the quote

#### Scenario: Projects gallery shows project cards

- **GIVEN** the page loads
- **THEN** the projects section displays project images in a grid
- **AND** each project has a hover overlay with a heart icon

#### Scenario: Blog section shows recent posts

- **GIVEN** the page loads
- **THEN** the blog section displays 3 post cards
- **AND** each card shows date, author, title, and excerpt

#### Scenario: Footer displays correctly

- **GIVEN** the page loads
- **THEN** the footer has an About Us section with description
- **AND** the footer has Quick Links columns
- **AND** the footer contains a copyright notice
- **AND** the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar: sticky, logo, 6 nav links, mobile hamburger
- [ ] Hero: slider with 3 slides, dark overlay, heading text
- [ ] Quick Contact: 2-column layout, form fields, button
- [ ] Services: 6 cards, 3-col grid, icons, titles, descriptions
- [ ] Stats: 3 tabbed items, counters, icons
- [ ] Testimonials: quote, client info
- [ ] Projects: image grid, hover overlay
- [ ] Blog: 3 post cards, date/author/title/excerpt
- [ ] Footer: About Us, Quick Links, copyright, ComponentDock link
- [ ] Responsive: mobile-first, hamburger menu, stacked columns
- [ ] Fonts: Work Sans loaded from Google Fonts
- [ ] Colors: brand-primary #fb7400, brand-secondary #2e3192
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to componentdock.com
