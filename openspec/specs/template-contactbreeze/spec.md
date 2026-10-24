# Template: ContactBreeze (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V4" — a minimalist single-column contact
form on a full-page cyan-to-magenta gradient background, with labeled underline
input fields, two dropdown selects (services + budget), a message textarea, and
a gradient submit button. No nav bar or footer in the original viewport; the
card fills the viewport vertically.

- **Source slug:** `contact-form-v4`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v4/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v4/ (404 at
  time of prep — design tokens extracted from screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v4/index.html` — HTTP 200, 3,807 B, title `Contact V4`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v4/css/style.css?v=6abd1ef4` (14,498 B).
> Colours that sheet actually paints: `#00dbde` ×12, `#fc00ff` ×12.
> Faces it actually declares: `Poppins-Bold`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

Extracted from the ColorLib screenshot (preview unavailable):

| Token | Value | Notes |
|-------|-------|-------|
| Background gradient start | `#00d2ff` (cyan) | Left side of full-page gradient |
| Background gradient end | `#ff00ff` (magenta) | Right side of full-page gradient |
| Gradient direction | left-to-right (or slight diagonal) | Horizontal sweep |
| Card background | `#ffffff` (white) | Centered form card |
| Card border-radius | `16px` | Rounded card corners |
| Card shadow | `0 8px 32px rgba(0,0,0,0.12)` | Subtle drop shadow |
| Heading text | `#222222` (near-black) | "Say Hello!" bold heading |
| Label text | `#555555` (dark gray) | Small labels above inputs |
| Placeholder text | `#999999` (gray-400) | Input placeholder text |
| Input underline | `#e0e0e0` (gray-300) | Thin line below each field |
| Button gradient start | `#00d2ff` (cyan) | Left side of submit button |
| Button gradient end | `#ff00ff` (magenta) | Right side of submit button |
| Button text | `#ffffff` (white) | "Submit →" label |
| Button border-radius | `24px` | Rounded (pill-like) button |
| Dropdown chevron | `#999999` (gray-400) | Small chevron icon on right |
| Font family | `"Poppins", sans-serif` | Inferred from visual weight/spacing |
| Font weight (heading) | `700` (bold) | "Say Hello!" |
| Font weight (labels) | `400` (normal) | Field labels |
| Font weight (inputs) | `400` (normal) | Input values |
| Brand (measured) | `#00dbde` | live sheet paints it ×12 — `background` on `.container-contact100`; style.css?v=6abd1ef4 (14,498 B, sha256 2ec979f663e4) · <https://colorlib.com/etc/cf/ContactFrom_v4/index.html> |

## Requirements

### Requirement: Page layout

The page SHALL render a full-page gradient background with a centered white
contact form card.

#### Scenario: Gradient background

- **WHEN** I visit the ContactBreeze page
- **THEN** the page background SHALL be a full-page gradient transitioning
  from cyan (`#00d2ff`) on the left to magenta (`#ff00ff`) on the right

#### Scenario: Centered form card

- **WHEN** I visit the ContactBreeze page
- **THEN** a white card SHALL be centered on the page with rounded corners
  and a drop shadow, vertically centered in the viewport

### Requirement: Form heading

The form card SHALL display a heading at the top.

#### Scenario: Heading text

- **WHEN** I view the form card
- **THEN** a "Say Hello!" heading SHALL be displayed at the top of the card
  in dark bold text, centered horizontally

### Requirement: Form fields

The form SHALL contain four input areas: name, email, services dropdown, and
budget dropdown, plus a message textarea.

#### Scenario: Name field

- **WHEN** I view the form
- **THEN** a text input SHALL be displayed with label "Your Name" above it
  and placeholder "Your name" (or pre-filled example), with an underline
  separator below

#### Scenario: Email field

- **WHEN** I view the form
- **THEN** an email input SHALL be displayed with label "Email" above it
  and placeholder "Enter your email address", with an underline separator below

#### Scenario: Needed Services dropdown

- **WHEN** I view the form
- **THEN** a select dropdown SHALL be displayed with label "Needed Services"
  above it, showing "Online Store" as a default/example option, with a
  chevron icon on the right and an underline separator below

#### Scenario: Budget dropdown

- **WHEN** I view the form
- **THEN** a select dropdown SHALL be displayed with label "Budget" above
  it, showing "Select budget" as placeholder text, with a chevron icon on
  the right and an underline separator below

#### Scenario: Message textarea

- **WHEN** I view the form
- **THEN** a textarea SHALL be displayed with label "Message" above it and
  placeholder "Your message here...", with an underline separator below

#### Scenario: Input styling

- **WHEN** I view any form field
- **THEN** the field SHALL have a thin gray underline below it (no visible
  border on other sides), the label SHALL be small dark gray text above the
  input, and placeholder text SHALL be light gray

### Requirement: Submit button

The form SHALL have a gradient submit button at the bottom.

#### Scenario: Submit button displayed

- **WHEN** I view the form
- **THEN** a "Submit →" button SHALL be displayed at the bottom of the form
  with a cyan-to-magenta gradient background, white text, and rounded
  corners (pill-like shape)

#### Scenario: Submit button full width

- **WHEN** I view the submit button
- **THEN** the button SHALL span the full width of the card content area

#### Scenario: Submit button hover

- **WHEN** I hover over the submit button
- **THEN** the button SHALL show a hover state (darkened gradient or shadow)

#### Scenario: Form submission

- **WHEN** I fill all required fields with valid data and click "Submit →"
- **THEN** the form SHALL submit (or show a success state)

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"
  branded as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/contactbreeze/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/contactbreeze/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Full-page cyan-to-magenta gradient background renders correctly
- [ ] White centered card with rounded corners and shadow
- [x] "Say Hello!" bold heading at top of card
- [ ] Name input with label, placeholder, underline
- [ ] Email input with label, placeholder, underline
- [x] "Needed Services" select dropdown with chevron
- [x] "Budget" select dropdown with chevron
- [ ] Message textarea with label, placeholder, underline
- [x] "Submit →" gradient button (cyan→magenta), full-width, rounded
- [x] Footer links to componentdock.com
- [ ] Responsive layout (mobile-friendly)
- [x] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
