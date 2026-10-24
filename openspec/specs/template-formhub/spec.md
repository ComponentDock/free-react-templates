# Template: Formhub (Contact Form)
<!-- prep-status: shipped-as=formnest -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-14` design this prep describes already
> ships as `apps/formnest` (<https://formnest.free.componentdock.com>).
> Do not scaffold `apps/formhub`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-formnest/spec.md`.

## Purpose

Recreation of ColorLib "Contact Form 14" — a full-page olive green background
with a "Let's work together" text section on the left and a white form card on
the right. Features a complex form with Name/Organization side by side, Budget
dropdown, Target Lunch field, and an olive/yellow-green button.

- **Source slug:** `contact-form-14`
- **Source URL:** https://colorlib.com/wp/template/contact-form-14/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-14/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Tokens extracted from the screenshot (preview unreachable). Approximate hex
> values; adjust to match closest Tailwind defaults.

| Token             | Value                   | Notes                                      |
| ----------------- | ----------------------- | ------------------------------------------ |
| Background        | `#7A8B5C`              | Olive green page background                |
| Button olive      | `#C5CC5A`              | Send Message button background             |
| Card surface      | `#FFFFFF`              | White form card                            |
| Text on green     | `#FFFFFF`              | Headings, paragraphs on green              |
| Text on white     | `#333333`              | Form labels, input text                    |
| Text secondary    | `#999999`              | Form heading (uppercase)                   |
| Label color       | `#333333`              | Form field labels (dark)                   |
| Required color    | `#E53E3E`              | Asterisk for required fields               |
| Input border      | `#E0E0E0`              | Bordered input boxes                       |
| Font — headings   | Poppins (sans-serif, bold)| "Let's work together"                    |
| Font — form label | Poppins (sans-serif)   | "HOW CAN WE HELP?", field labels          |
| Font — body       | Poppins (sans-serif)   | Paragraphs, contact info, button           |
| Button radius     | 4px                     | Slight rounding                            |
| Button text       | White                   | —                                          |
| Card radius       | 5px                     | Rounded corners on white card              |
| Card shadow       | Light box-shadow        | Subtle shadow on white card                |
| Form heading style| Uppercase, letter-spaced| "HOW CAN WE HELP?"                        |

## Visual design (from screenshot)

The entire page has an olive green background. Content is overlaid.

Left column (~45%, on green bg):
- "Let's work together" heading: white, bold, sans-serif, ~32px
- Multiple paragraphs of lorem ipsum text (white, ~14px)
- "info@mywebsite.com" email link (white, underlined) at the bottom

Right column (~55%):
- White card with shadow and rounded corners
- "HOW CAN WE HELP?" heading: uppercase, letter-spaced, gray
- Form with labeled bordered inputs:
  - Row 1: Name * + Organization (side by side, placeholders: "Your name", "Your organization")
  - Email * (full width, placeholder: "Your email address")
  - Project Description * (full width textarea, tall)
  - Row 2: Budget (dropdown "Choose...") + Target Lunch (text input "Example: January 15th")
- "Send Message" button: full width, olive bg, white text

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-14/` | HTTP 200 · 4,726 B · title `Contact Form #4` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-14/css/style.css?v=b9a397e5` | HTTP 200 · 16,915 B · sha256 `3478dc962c13` |

> ⚠️ the demo's own `<title>` reads `Contact Form #4` though the path is
> `contact-form-14` — the host's titles are not reliable labels; the
> readings above are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×10,
`#212529`×7, `#ccda46`×5, `#495057`×5, `#6c757d`×5, `#000000`×5,
`#ced4da`×2, `#e9efb0`×2, `#e9ecef`×2, `#b7c628`×2.

**Low-chroma values the sheet actually uses** — `#212529`, `#495057`,
`#6c757d`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#7a8b5c`, `#c5cc5a`, `#e53e3e`.

## Requirements

### Page layout

#### Scenario: Page renders with olive green background

- **GIVEN** I visit the Formhub page
- **THEN** the entire page has an olive green background

#### Scenario: Content is overlaid on green background

- **GIVEN** I visit the Formhub page
- **THEN** I see text content on the left and a white form card on the right

### Text content

#### Scenario: Left column displays heading

- **GIVEN** I visit the Formhub page
- **THEN** I see "Let's work together" heading in white

#### Scenario: Left column displays paragraphs

- **GIVEN** I visit the Formhub page
- **THEN** I see paragraphs of text below the heading

#### Scenario: Left column displays email link

- **GIVEN** I visit the Formhub page
- **THEN** I see an "info@mywebsite.com" email link

### Contact form

#### Scenario: Form displays all fields in white card

- **GIVEN** I visit the Formhub page
- **THEN** I see a white card with rounded corners and shadow
- **AND** the card contains a "HOW CAN WE HELP?" heading
- **AND** I see a Name input field marked as required
- **AND** I see an Organization input field
- **AND** I see an Email input field marked as required
- **AND** I see a Project Description textarea marked as required
- **AND** I see a Budget dropdown
- **AND** I see a Target Lunch input field
- **AND** I see a Send Message button

#### Scenario: Name and Organization are side by side

- **GIVEN** I visit the Formhub page
- **THEN** the Name and Organization inputs are in the same row

#### Scenario: Budget and Target Lunch are side by side

- **GIVEN** I visit the Formhub page
- **THEN** the Budget dropdown and Target Lunch input are in the same row

#### Scenario: Required fields have asterisks

- **GIVEN** I visit the Formhub page
- **THEN** Name, Email, and Project Description have red asterisks

#### Scenario: Budget is a dropdown

- **GIVEN** I visit the Formhub page
- **THEN** the Budget field is a dropdown with "Choose..." as default

#### Scenario: Send Message button spans full width

- **GIVEN** I visit the Formhub page
- **THEN** the Send Message button spans the full width of the card
- **AND** the button has an olive/yellow-green background and white text

### Responsive behavior

#### Scenario: Columns stack on mobile

- **GIVEN** I visit the Formhub page on a mobile viewport
- **THEN** the text content and form card stack vertically

#### Scenario: Side-by-side fields stack on mobile

- **GIVEN** I visit the Formhub page on a mobile viewport
- **THEN** Name and Organization stack vertically
- **AND** Budget and Target Lunch stack vertically

### Footer

#### Scenario: Footer links to Component Dock

- **GIVEN** I visit the Formhub page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] Full-page olive green background
- [ ] Left: "Let's work together" white heading
- [ ] Left: paragraphs of text + email link
- [ ] Right: white card with shadow
- [ ] Card: "HOW CAN WE HELP?" uppercase heading
- [ ] Card: Name + Organization side by side
- [ ] Card: Email full width (required)
- [ ] Card: Project Description textarea (required)
- [ ] Card: Budget dropdown + Target Lunch side by side
- [ ] Card: full-width olive Send Message button
- [ ] Required fields have red asterisks
- [ ] Fonts: Poppins throughout
- [ ] Responsive: columns stack, side-by-side fields stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck + lint + build pass
