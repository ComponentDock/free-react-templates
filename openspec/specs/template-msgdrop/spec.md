# Template: MsgDrop (Contact Form)

## Purpose

A Contact Form template with split-screen contact form, contact form fields, send button and footer attribution sections. Recreation of ColorLib **Contact Form V13** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source**: https://colorlib.com/wp/template/contact-form-v13/
- **Preview URL**: https://preview.colorlib.com/theme/contact-form-v13/ (returned 404 at time of research — screenshot used as sole reference) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v13.jpg
- **Description**: A split-screen contact form with a dark map background on the left and a clean white form panel on the right. Features a green phone number badge overlay on the map, validated form fields with colored underlines, and a gradient coral-to-pink Send button.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v13/index.html` — HTTP 200, 2,971 B, title `Contact V13`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v13/css/style.css?v=2196fd26` (13,319 B).
> Colours that sheet actually paints: `#d5007d` ×12, `#e53935` ×12.
> Faces it actually declares: `Poppins-Bold`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/contact-form-v13.zip (HTTP 200, 206,751 B, sha256 `f27979196f15…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#d5007d` | 12 declarations — `.contact100-form-bgbtn`, `.focus-input100::before` |
| Other chromatic values | `#e53935` (12), `#c80000` (2), `#39b54a` (2) | secondary hues in the same sheet |
| Surface | `#ffffff` | 5 declarations — `.contact100-form-btn`, `.wrap-contact100` |
| Ink / dark surface | `#212529` | 1 declarations — `body` |
| Typeface | **Poppins** — request the Google family `Poppins` (400/500); the sheet declares the file stems `Poppins-Regular` (3 rules — `.input100`), `Poppins-Medium` (3 rules — `.alert-validate::before`), and a font-file stem is never a family: `css?family=Poppins-Regular` answers HTTP 400, so an app that follows the stem falls back to the UA default | `font-family` declarations in the design sheet |
| Radii | `2px`, `25px` | `2px` (`.alert-validate::before`); `25px` (`.contact100-more`) |

**Shipped app (recorded delta, 2026-10-23o):** the shipped app declares no `--font-*` token at all, so it renders in the Tailwind default face. The prep records the reference face; correcting the app is an implementer task, not a prep edit.

| Gradients | 8 declarations | `.contact100-form-bgbtn`, `.focus-input100::before` |

Palette in order of use: `#d5007d` ×12, `#e53935` ×12, `#cccccc` ×8, `#ffffff` ×5, `#c80000` ×2, `#39b54a` ×2, `#212529` ×1, `#007bff` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Split-screen contact form layout

The page SHALL display a split-screen layout with a map panel on the left and a contact form on the right.

#### Scenario: Full-page split layout

- **WHEN** the user loads the MsgDrop page
- **THEN** the viewport is split into two equal columns
- **AND** the left column displays a dark map background image
- **AND** the right column displays a white form panel

#### Scenario: Responsive layout on mobile

- **WHEN** the user views on a viewport width less than 768px
- **THEN** the two columns stack vertically
- **AND** the map section appears above the form

### Requirement: Map panel with phone badge

The left panel SHALL display a dark map background with a green phone badge overlay.

#### Scenario: Phone badge display

- **WHEN** the user views the map panel
- **THEN** a green pill-shaped badge is visible on the map
- **AND** the badge displays a phone number "(+00) 345 6389"
- **AND** the badge includes a phone icon to the left of the number

#### Scenario: Phone badge hover

- **WHEN** the user hovers over the phone badge
- **THEN** the badge shows a subtle hover effect (opacity or scale change)

### Requirement: Contact form fields

The right panel SHALL display a form with Name, Email, Phone, and Message fields.

#### Scenario: Form heading

- **WHEN** the user views the form panel
- **THEN** a heading "Contact Us" is displayed at the top
- **AND** the heading is large, bold, and dark colored

#### Scenario: Name field

- **WHEN** the user views the Name field
- **THEN** a "Name" label is displayed above the input
- **AND** the input has a bottom border line

#### Scenario: Email field

- **WHEN** the user views the Email field
- **THEN** an "Email" label is displayed above the input
- **AND** the input has a bottom border line

#### Scenario: Phone field

- **WHEN** the user views the Phone field
- **THEN** a "Phone" label is displayed above the input
- **AND** the input shows placeholder "Phone Number..."
- **AND** the input has a bottom border line

#### Scenario: Message field

- **WHEN** the user views the Message field
- **THEN** a "Message" label is displayed above the textarea
- **AND** the textarea shows placeholder "Questions/Comments..."
- **AND** the textarea has a bottom border line

#### Scenario: Field focus underline

- **WHEN** the user clicks into any form field
- **THEN** the bottom border turns coral/red (#FF6B6B)
- **AND** the border remains coral/red while the field is focused

#### Scenario: Field validation checkmark

- **WHEN** the user fills in a valid Name or Email value
- **THEN** a green checkmark icon appears to the right of the field

### Requirement: Send button

The form SHALL include a Send button with gradient styling.

#### Scenario: Button display

- **WHEN** the user views the form
- **THEN** a "Send" button is displayed at the bottom of the form
- **AND** the button has a coral-to-pink gradient background
- **AND** the button text is white
- **AND** the button is fully rounded (pill shape)

#### Scenario: Button hover

- **WHEN** the user hovers over the Send button
- **THEN** the button shows a hover effect (brightness change or scale)

#### Scenario: Button click

- **WHEN** the user fills all required fields
- **AND** the user clicks the Send button
- **THEN** the form submission is handled (prevent default, show confirmation)

### Requirement: Footer attribution

The page SHALL include a footer with a Component Dock link.

#### Scenario: Component Dock link

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer or attribution line is visible
- **AND** it links to https://www.componentdock.com/
- **AND** the link text reads "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/msgdrop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/msgdrop/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Split-screen layout renders correctly (50/50 columns)
- [ ] Left panel shows dark map background image
- [ ] Green phone badge renders on the map with phone icon and number
- [x] Right panel shows white form with "Contact Us" heading
- [ ] All four fields render: Name, Email, Phone, Message
- [x] Field labels match the original ("Name", "Email", "Phone", "Message")
- [x] Placeholder text matches ("Phone Number...", "Questions/Comments...")
- [ ] Focus state shows coral/red underline
- [ ] Validation shows green checkmark on valid fields
- [ ] Send button has coral-to-pink gradient
- [ ] Send button is pill-shaped (fully rounded)
- [ ] Responsive: stacks vertically on mobile (<768px)
- [ ] Footer links to Component Dock
- [x] No ColorLib references in app code
- [x] `public/CNAME` contains `msgdrop.free.componentdock.com`
- [x] `homepage` in package.json is `https://msgdrop.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`
- [x] Footer credits Component Dock (not ColorLib)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
