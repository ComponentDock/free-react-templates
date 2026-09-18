# Template: Mendly (Repair Service Landing)

## Purpose

Mendly is a single-page repair/service landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Repair" free template (source:
https://colorlib.com/wp/template/repair/), built under a DIFFERENT name
(**Mendly**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Source mapping:**
- ColorLib item: "Repair" (TEMPLATES.md line 1152)
- ColorLib slug: `repair`
- Source URL: https://colorlib.com/wp/template/repair/
- Preview URL: https://preview.colorlib.com/theme/repair/
- Preview reached: YES (HTTP 200, verified 2026-09-14)

The original is a Bootstrap 4 + jQuery landing page for a computer/device
repair service. It features a hero banner, service cards, about section with
feature highlights, a discount/estimate form section with gradient overlay,
a 4-step work process, FAQ accordion with skill circles, testimonial
carousel, blog grid, brand logos, and a 4-column dark footer.

## Design tokens (extracted from preview CSS)

| Token            | Value / Note                                                           |
| ---------------- | ---------------------------------------------------------------------- |
| Font family      | `"Poppins", sans-serif` — Google Fonts, weights 300–700                |
| Brand primary    | `#988fff` (soft periwinkle purple) — buttons, links, accents           |
| Body text        | `#777`                                                                 |
| Headings         | `#222`                                                                 |
| Light background | `#f9f9ff` (very light lavender) — about area, forms, testimonials     |
| Dark footer bg   | `#04091e` (very dark navy)                                             |
| Header top bar   | `#222222` (dark)                                                       |
| Button primary   | `#988fff` bg, `#fff` text, `border-radius: 25px`, padding 0 30px      |
| Button header    | `#fff` bg, `#222` text, `border-radius: 0`, transparent→white hover   |
| Primary gradient | `linear-gradient(0deg, #888fff 0%, #ce90ff 100%)` (primary-btn)       |
| Discount gradient| `linear-gradient(0deg, #f43d6a 0%, #f574dd 100%)` (overlay-bg)       |
| Icon gradient    | `linear-gradient(0deg, #f43d6a 0%, #f574dd 100%)` (work-process)     |
| Selection color  | `#988fff`                                                              |
| Section spacing  | `section-gap` class (Bootstrap-style vertical padding)                 |
| Banner bg        | Background image with `center / cover`                                |
| Discount bg      | Background image with dark overlay (`opacity: 0.9`)                   |
| Testimonial area | Dark overlay background (gradient or image)                            |
| Form inputs      | `#f9f9ff` bg, no border radius, 12px font                              |

## Section order (from live preview DOM)

1. **Header** — fixed, dark top bar (social icons + phone/email), main nav
   (Home, About, Service, Feedback, Blog dropdown, Elements, Contact)
2. **Banner/Hero** — fullscreen, text left ("All things need to repair"),
   image right, CTA button "Get Started"
3. **Service area** — 4-column grid, each card: image + title + description
   (images scale on hover)
4. **Home about area** — split layout: text left with 2 feature cards
   (Expert Services, Great Support), image right via CSS pseudo-element
5. **Discount section** — dark overlay bg, 2-column: left (headline,
   description, CTA "Order Service Now"), right (estimate form: name, phone,
   email, message, "Get Estimate" button)
6. **Work process** — 4 horizontal steps with icon boxes + arrows between
   (Detect problem → Split solution → Analyzing method → Final result)
7. **FAQ area** — accordion (4 items: Success, Info, danger, Warning) +
   skill progress circles (4 skills with percentage)
8. **Testimonial area** — carousel of testimonials with avatars, names,
   titles (dark background)
9. **Blog area** — 4-column grid of blog posts (image, date, title,
   excerpt, "Details" button)
10. **Brands area** — logo carousel (grayscale → color on hover)
11. **Footer** — 4-column: About Agency, Navigation Links, Newsletter form,
    InstaFeed (8 thumbnail grid); dark `#04091e` background

## Gherkin requirements and scenarios

### Requirement: Page layout and header

The system SHALL render a fixed header with a dark top bar containing social
icons and contact info, and a main navigation bar with links.

#### Scenario: Header rendering

- **GIVEN** the Mendly app is rendered
- **THEN** a fixed header SHALL be visible at the top of the page
- **AND** the header top bar SHALL show social icon links (at minimum 4) and
  contact info (phone number, email)
- **AND** the main nav SHALL contain links: Home, About, Service, Feedback,
  Blog, Elements, Contact
- **AND** the header SHALL remain fixed while scrolling

### Requirement: Hero/banner section

The system SHALL render a full-height hero section with a background image,
headline text, description, and a primary CTA button.

#### Scenario: Hero content

- **GIVEN** the Mendly app is rendered
- **THEN** a hero/banner section SHALL be visible
- **AND** it SHALL display a headline (e.g. "All things need to repair")
- **AND** it SHALL display a descriptive paragraph below the headline
- **AND** it SHALL include a primary CTA button ("Get Started" or similar)
- **AND** the layout SHALL place text on the left and an image/illustration
  on the right

### Requirement: Services section

The system SHALL render a 4-column grid of service cards, each with an
image, title, and description.

#### Scenario: Service cards

- **GIVEN** the Mendly app is rendered
- **THEN** a services section SHALL be visible with 4 service cards
- **AND** each card SHALL contain an image placeholder, a title, and a
  short description
- **AND** the section SHALL have a centered heading and subtitle above the
  cards

### Requirement: About section

The system SHALL render a split about section with text and feature cards on
the left and a background image on the right.

#### Scenario: About content

- **GIVEN** the Mendly app is rendered
- **THEN** an about section SHALL be visible
- **AND** it SHALL display a heading about fixing computers/mobiles
- **AND** it SHALL include a paragraph of description text
- **AND** it SHALL show 2 feature cards (Expert Services, Great Support)
  with icons and short descriptions
- **AND** the right half SHALL show a background image (via CSS or
  placeholder)

### Requirement: Discount/estimate form section

The system SHALL render a dark-overlay section with a promotional headline
on the left and an estimate request form on the right.

#### Scenario: Estimate form

- **GIVEN** the Mendly app is rendered
- **THEN** a discount/estimate section SHALL be visible with a dark overlay
  background
- **AND** the left side SHALL show a headline (e.g. "Enjoy 25% Seasonal
  Discount!") and a CTA button ("Order Service Now")
- **AND** the right side SHALL show a form titled "Get a free Estimate"
- **AND** the form SHALL contain fields: name, phone, email, message
- **AND** the form SHALL have a submit button ("Get Estimate")

#### Scenario: Form validation

- **GIVEN** the estimate form is displayed
- **WHEN** the user submits with empty required fields
- **THEN** the form SHALL prevent submission (HTML5 required or custom
  validation)

### Requirement: Work process section

The system SHALL render a 4-step work process with icons, labels, and
arrow connectors between steps.

#### Scenario: Work process steps

- **GIVEN** the Mendly app is rendered
- **THEN** a work process section SHALL be visible
- **AND** it SHALL display 4 steps in a horizontal layout:
  Detect problem → Split solution into parts → Analyzing method → Final
  result comes out
- **AND** each step SHALL have an icon box and a label
- **AND** arrow indicators SHALL appear between steps (hidden on mobile)

### Requirement: FAQ accordion section

The system SHALL render an FAQ section with an accordion of expandable
items and skill progress indicators.

#### Scenario: FAQ accordion

- **GIVEN** the Mendly app is rendered
- **THEN** an FAQ section SHALL be visible with 4 accordion items
- **AND** each item SHALL have a heading and expandable content
- **AND** clicking a heading SHALL toggle its content open/closed

#### Scenario: Skill indicators

- **GIVEN** the FAQ section is rendered
- **THEN** 4 skill indicators SHALL be visible below the accordion
- **AND** each skill SHALL show a percentage (e.g. Web Design 80%,
  UI/UX Design 75%, Mobile App 60%, Web Development 90%)
- **AND** each skill SHALL display a circular progress indicator

### Requirement: Testimonial section

The system SHALL render a testimonial carousel on a dark background with
avatar images, quotes, names, and titles.

#### Scenario: Testimonials

- **GIVEN** the Mendly app is rendered
- **THEN** a testimonial section SHALL be visible on a dark background
- **AND** it SHALL contain at least 3 testimonial cards
- **AND** each card SHALL have an avatar image, a quote paragraph, a name,
  and a title/role
- **AND** the testimonials SHALL cycle via carousel navigation

### Requirement: Blog section

The system SHALL render a 4-column grid of blog post cards.

#### Scenario: Blog cards

- **GIVEN** the Mendly app is rendered
- **THEN** a blog section SHALL be visible with 4 blog post cards
- **AND** each card SHALL contain an image, a date/author line, a title,
  and an excerpt
- **AND** each card SHALL have a "Details" link/button

### Requirement: Brands section

The system SHALL render a horizontal row of partner/client logos.

#### Scenario: Brand logos

- **GIVEN** the Mendly app is rendered
- **THEN** a brands/logos section SHALL be visible
- **AND** it SHALL display at least 5 grayscale logos
- **AND** logos SHALL become colorized on hover

### Requirement: Footer

The system SHALL render a 4-column dark footer with about text, navigation
links, a newsletter form, and an Instagram feed grid.

#### Scenario: Footer content

- **GIVEN** the Mendly app is rendered
- **THEN** a dark footer (background `#04091e`) SHALL be visible
- **AND** column 1 SHALL show "About Agency" with a short paragraph
- **AND** column 2 SHALL show navigation links in two sub-columns
- **AND** column 3 SHALL show a newsletter signup form
- **AND** column 4 SHALL show an InstaFeed grid (8 thumbnails)
- **AND** a bottom bar SHALL show copyright text and social icon links
- **AND** the footer SHALL link to https://www.componentdock.com/ branded
  as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Mendly app is rendered
- **THEN** all sections SHALL use semantic HTML elements
- **AND** navigation SHALL use `<nav>` with proper list structure
- **AND** forms SHALL have associated labels
- **AND** interactive elements SHALL have visible focus-visible rings
- **AND** images SHALL have alt text
- **AND** the page SHALL be responsive (no horizontal overflow at 768px)

### Requirement: ColorLib non-reference

The system SHALL NOT reference ColorLib in any app file.

#### Scenario: Provenance

- **GIVEN** the Mendly app source code is inspected
- **THEN** no file in `apps/mendly/` SHALL contain the strings
  "colorlib" or "preview.colorlib.com"
- **AND** the footer SHALL link to Component Dock, not ColorLib

## Verification checklist

- [ ] `npm run verify:app -- mendly` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/repair/:
      fixed header with dark top bar, fullscreen hero with image right,
      4 service cards, split about section, dark discount/estimate form
      section, 4-step work process, FAQ accordion + skill circles,
      testimonial carousel, 4 blog cards, brand logos, dark 4-column footer.
- [ ] Behavior check: accordion toggles open/close, testimonial carousel
      advances, form fields validate, nav scrolls to sections.
- [ ] Responsive check at 768px (no horizontal overflow, stacked layout).
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
