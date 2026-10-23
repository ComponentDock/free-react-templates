# Template: Concertina (Accordion & FAQ Showcase)

## Purpose

An Accordion & FAQ Showcase template with sticky navigation header, hero banner, interactive accordion & faq and feature highlights grid sections. Recreation of ColorLib `accordion-05` (`https://colorlib.com/wp/template/accordion-05/`).

- **New Name**: Concertina (`apps/concertina`)
- **Category**: Accordion / FAQ / Interactive Display
- **Preview URL**: `https://colorlib.com/wp/template/accordion-05/` (Live preview unreachable; design derived from official ColorLib screenshot analysis).

## Design Tokens

- **Brand Colors**:
  - Primary / Accent: Emerald Teal (`#0d9488`, `teal-600`)
  - Background: Neutral Light (`#f8fafc`, `slate-50`) & Pure White (`#ffffff`)
  - Text Primary: Dark Slate (`#0f172a`, `slate-900`)
  - Text Muted: Slate Gray (`#64748b`, `slate-500`)
- **Typography**: Inter / system sans-serif (`font-sans`).
- **Radii & Shadows**: `rounded-lg` (0.5rem), subtle shadow elevation (`shadow-sm`, `shadow-md`).
- **Layout Structure**: Single-page layout with sticky navbar, hero banner, interactive accordion/FAQ sections, feature highlights, testimonials, newsletter form, and footer linking `https://www.componentdock.com/`.

## Requirements

### Requirement 1: Sticky Navigation Header

- The header must remain fixed at the top with brand logo, navigation links, and a CTA button.

#### Scenario: User views navigation

- **GIVEN** the page is loaded
- **WHEN** the user scrolls down
- **THEN** the header stays fixed at the top with clear navigation links

### Requirement 2: Hero Banner

- Display a prominent hero section with headline, descriptive subtext, and primary call-to-action button.

#### Scenario: User views hero banner

- **GIVEN** the user arrives at the site
- **WHEN** they view the hero section
- **THEN** they see a clear value proposition and primary action button

### Requirement 3: Interactive Accordion & FAQ Section

- Interactive accordion items that expand and collapse smoothly to reveal detailed content.

#### Scenario: User toggles accordion items

- **GIVEN** the accordion list is displayed with collapsed items
- **WHEN** the user clicks an accordion header
- **THEN** the corresponding content expands while other items remain collapsed

### Requirement 4: Feature Highlights Grid

- Grid of key features highlighting benefits with icons and descriptions.

#### Scenario: User browses feature cards

- **GIVEN** the user scrolls to the features section
- **WHEN** they view the feature cards
- **THEN** they see clean cards with icons, titles, and descriptions

### Requirement 5: Testimonials Section

- Social proof section featuring client quotes and avatars.

#### Scenario: User reads testimonials

- **GIVEN** the user reaches the testimonial section
- **WHEN** they view client feedback
- **THEN** they see professional quotes and user attribution

### Requirement 6: Newsletter Signup Form

- Email subscription form with validation.

#### Scenario: User subscribes to newsletter

- **GIVEN** the user enters a valid email in the newsletter input
- **WHEN** they click subscribe
- **THEN** a success confirmation message is displayed

### Requirement 7: Footer with Component Dock Attribution

- Footer containing site links, copyright, and required attribution link to `https://www.componentdock.com/`.

#### Scenario: User checks footer attribution

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** they view the footer
- **THEN** they find the copyright and a link to Component Dock (`https://www.componentdock.com/`)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/concertina/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/concertina/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [x] Footer links `https://www.componentdock.com/`
- [x] No `colorlib` references in app code
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Sticky Navigation Header — the header stays fixed at the top with clear navigation links
- [ ] Hero Banner — they see a clear value proposition and primary action button
- [ ] Interactive Accordion & FAQ Section — the corresponding content expands while other items remain collapsed
- [ ] Feature Highlights Grid — they see clean cards with icons, titles, and descriptions
- [ ] Testimonials Section — they see professional quotes and user attribution
- [ ] Newsletter Signup Form — a success confirmation message is displayed
