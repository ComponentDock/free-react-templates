# Template: ContactViolet (Contact Form)

## Purpose

A centered single-column contact form floating over a Google Maps background with a purple/magenta gradient overlay. It also includes featuring inline field validation (error + success states), a gradient submit button, and a phone contact line below the form. Recreation of ColorLib "Contact Form V9".

- **Source slug:** `contact-form-v9`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v9/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v9/ (404 at
  time of prep — design tokens extracted from screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v9.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v9/index.html` — HTTP 200, 1,883 B, title `Contact V9`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v9/css/style.css?v=99ea44cf` (11,677 B).
> Faces it actually declares: `SourceSansPro-Bold`, `JosefinSans-Bold`, `Segoe UI`, `Roboto`.
> The prescribed face `poppins` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

Extracted from the ColorLib screenshot (preview unavailable):

| Token | Value | Notes |
|-------|-------|-------|
| Primary / brand color | `#ab47bc` (medium purple) | Gradient button, form accent |
| Background map | Google Maps (partially visible) | Left side shows map; right side covered by gradient |
| Background gradient | `rgba(0,0,0,0) → #9c27b0` (purple) | Purple overlay from center/right over the map |
| Card background | `#ffffff` | White centered form card |
| Card border-radius | `12px` | Rounded card corners |
| Card shadow | `0 4px 24px rgba(0,0,0,0.15)` | Moderate drop shadow |
| Heading text | `#212121` (near-black) | "Contact Us" bold heading |
| Input text | `#333333` (dark gray) | Typed value color |
| Placeholder text | `#999999` (gray-400) | Input placeholder text |
| Input border (idle) | `#e0e0e0` (gray-300) | Light gray border |
| Input border (error) | `#f44336` (red-500) | Validation error border |
| Input border (valid) | `#4caf50` (green-500) | Valid field indicator |
| Error text | `#f44336` (red-500) | "Please enter your name" |
| Error icon | `#f44336` (red-500) | Red X circle icon |
| Valid icon | `#4caf50` (green-500) | Green checkmark circle icon |
| Button gradient start | `#ab47bc` (purple) | Left side of submit button |
| Button gradient end | `#ce93d8` (light purple) | Right side of submit button |
| Button text | `#ffffff` (white) | "SEND EMAIL" label |
| Button border-radius | `24px` (pill) | Fully rounded submit button |
| Phone text | `#666666` (gray-600) | "Contact our 24/7 call center" |
| Phone number | `#ab47bc` (primary purple) | "+001 345 6889" colored link |
| Font family | `"Poppins", sans-serif` | Inferred from visual weight/spacing |
| Font weight (heading) | `700` (bold) | "Contact Us" |
| Font weight (inputs) | `400` (normal) | Input values |
| Textarea border | `#e0e0e0` (gray-300) | Visible border around textarea |

## Requirements

### Requirement: Page layout

The page SHALL render a full-viewport background combining Google Maps with a
purple gradient overlay, with a centered contact form card.

#### Scenario: Map and gradient background

- **WHEN** I visit the ContactViolet page
- **THEN** the page background SHALL show a Google Maps view partially covered
  by a purple/magenta gradient overlay transitioning from transparent on the
  left to purple on the right

#### Scenario: Centered form card

- **WHEN** I visit the ContactViolet page
- **THEN** a white card SHALL be centered on the page with rounded corners
  and a drop shadow, floating over the map/gradient background

### Requirement: Form heading

The form card SHALL display a heading at the top.

#### Scenario: Heading text

- **WHEN** I view the form card
- **THEN** a "Contact Us" heading SHALL be displayed at the top of the card
  in dark bold text, left-aligned

### Requirement: Form fields with validation

The form SHALL contain name, email, and message fields with inline validation
indicators.

#### Scenario: Name field (empty/error state)

- **WHEN** I view the form with the name field empty
- **THEN** the name input SHALL display red text "Please enter your name"
  below the field and a red X circle icon on the right

#### Scenario: Name field (valid state)

- **WHEN** I type a name into the name field
- **THEN** the error message SHALL disappear and a green checkmark icon SHALL
  appear on the right side of the field

#### Scenario: Email field (valid state)

- **WHEN** I view the form with a valid email entered
- **THEN** the email input SHALL display the email value with a green
  checkmark icon on the right side

#### Scenario: Email field (invalid state)

- **WHEN** I enter an invalid email format
- **THEN** the email field SHALL show a red error indicator

#### Scenario: Message textarea

- **WHEN** I view the form
- **THEN** a textarea SHALL be displayed with placeholder text "Your Message"
  and a visible border around it (not underline-only)

### Requirement: Submit button

The form SHALL have a purple gradient pill-shaped submit button.

#### Scenario: Submit button displayed

- **WHEN** I view the form
- **THEN** a "SEND EMAIL" button SHALL be displayed at the bottom of the form
  with a purple gradient background, white text, and fully rounded (pill)
  shape

#### Scenario: Submit button hover

- **WHEN** I hover over the submit button
- **THEN** the button SHALL show a hover state (darkened gradient or shadow)

#### Scenario: Form submission

- **WHEN** I fill all required fields with valid data and click "SEND EMAIL"
- **THEN** the form SHALL submit (or show a success state)

### Requirement: Phone contact line

The form card SHALL display a phone number below the submit button.

#### Scenario: Phone text displayed

- **WHEN** I view the form card
- **THEN** a line of text SHALL appear below the submit button reading
  "Contact our 24/7 call center:" followed by a phone number in purple

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** I scroll to the bottom of the page
- **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"
  branded as "Component Dock"

### Requirement: Responsive layout

The form and background SHALL be responsive across screen sizes.

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile device (width < 640px)
- **THEN** the form card SHALL fill most of the viewport width with appropriate
  padding, and the map/gradient SHALL remain visible behind/around it

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/contactviolet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/contactviolet/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Google Maps background with purple gradient overlay renders correctly
- [ ] Centered white card with rounded corners and shadow
- [x] "Contact Us" heading in bold dark text, left-aligned
- [ ] Name field with validation: red error state when empty, green check when valid
- [ ] Email field with validation: green check when valid, red when invalid
- [ ] Message textarea with visible border
- [x] "SEND EMAIL" purple gradient pill button
- [ ] Phone contact line below the button
- [x] Footer links to componentdock.com
- [ ] Responsive layout on mobile viewports
- [x] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
