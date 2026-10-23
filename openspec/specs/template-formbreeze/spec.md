# Template: FormBreeze (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V1** — a full-page blue gradient
background with a centered white card containing a "Get in touch" form on the
right and an illustration on the left. Features pill-shaped inputs with gray
backgrounds and a green submit button with arrow icon.

- **Source slug:** `contact-form-v1`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v1/
- **Preview URL:** https://colorlib.com/etc/cf/ContactFrom_v1/index.html
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (extracted from original CSS)

| Token                | Value                             |
| -------------------- | --------------------------------- |
| Font family          | Montserrat (Google Fonts)         |
| Background gradient  | #0072ff → #00c6ff (left to right) |
| Card background      | #ffffff                           |
| Card border-radius   | 10px                              |
| Card max-width       | 1163px                            |
| Title color          | #333333 (ExtraBold 24px)          |
| Input background     | #e6e6e6                           |
| Input border-radius  | 25px (pill)                       |
| Input height         | 50px                              |
| Button background    | #57b846 (green)                   |
| Button hover         | #333333 (dark)                    |
| Button border-radius | 25px (pill)                       |
| Placeholder color    | #999999                           |
| Text muted           | #666666                           |

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (measured) | `#0072ff` | live sheet paints it ×4 — `background` on `.contact1`; style.css?v=0ffd760c (10,112 B, sha256 3d85b9c5c5ae) · <https://colorlib.com/etc/cf/ContactFrom_v1/index.html> |

Measured from the live theme stylesheet: the most-painted colour that paints a surface (background declarations first, then a button/nav/hero selector), never sampled from a screenshot. Alternates in the same sheet: #00c6ff x4, #57b846 x1, #009bff x1.

## Requirements

### Requirement: Full-page gradient background

The page SHALL display a full-screen blue gradient background (#0072ff → #00c6ff).

#### Scenario: Gradient renders

- **WHEN** I visit the FormBreeze page
- **THEN** the page has a blue gradient background from #0072ff to #00c6ff
- **AND** the gradient is displayed full-screen

### Requirement: White card with two-column layout

The page SHALL display a centered white card with rounded corners containing an
illustration on the left and the form on the right.

#### Scenario: Card renders centered

- **WHEN** I visit the FormBreeze page
- **THEN** I see a white card centered on the gradient background
- **AND** the card has rounded corners (border-radius 10px)

#### Scenario: Two columns layout

- **WHEN** I visit the FormBreeze page
- **THEN** the card has an illustration on the left side
- **AND** the card has a form on the right side

### Requirement: Contact form

The form SHALL contain Name, Email, Subject, and Message fields with a "Get in
touch" title and a "Send Email" submit button.

#### Scenario: Form displays title

- **WHEN** I visit the FormBreeze page
- **THEN** I see a heading "Get in touch" above the form

#### Scenario: Form displays all fields

- **WHEN** I visit the FormBreeze page
- **THEN** I see a Name input field
- **AND** I see an Email input field
- **AND** I see a Subject input field
- **AND** I see a Message textarea field

#### Scenario: Pill-shaped inputs

- **WHEN** I look at the form inputs
- **THEN** each input has a gray (#e6e6e6) background
- **AND** each input has fully rounded corners (border-radius 25px)

#### Scenario: Submit button

- **WHEN** I look at the form
- **THEN** I see a "Send Email" button with a send icon
- **AND** the button is green (#57b846)
- **AND** the button has pill-shaped corners (border-radius 25px)

#### Scenario: Form submission prevents default

- **WHEN** I fill in the form fields and click "Send Email"
- **THEN** the form submission is prevented (no page reload)

### Requirement: Illustration section

The left column SHALL display a decorative illustration with a chat bubble icon
and descriptive text.

#### Scenario: Illustration renders

- **WHEN** I visit the FormBreeze page
- **THEN** I see a decorative illustration with icons
- **AND** I see the text "We'd love to hear from you"

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer with Component Dock link

- **WHEN** I visit the FormBreeze page
- **THEN** I see a footer with "More templates at Component Dock"
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Responsive design

The layout SHALL adapt to different screen sizes.

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile device (width < 768px)
- **THEN** the illustration is hidden
- **AND** the form takes full width

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formbreeze/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formbreeze/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Full-page gradient background — the page has a blue gradient background from #0072ff to #00c6ff
- [ ] White card with two-column layout — I see a white card centered on the gradient background
- [x] Contact form — I see a heading "Get in touch" above the form
- [ ] Illustration section — I see a decorative illustration with icons
- [ ] Responsive design — the illustration is hidden
