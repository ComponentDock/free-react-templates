# Template: Touchpoint (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form 01" — a clean, minimal two-column
contact page with a form on the left and a blue contact-info card on the
right. Uses Bootstrap Framework.

- **Source**: [ColorLib Contact Form 01](https://colorlib.com/wp/template/contact-form-01/)
- **Preview**: https://preview.colorlib.com/theme/contact-form-01/ (unreachable — 404)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-01.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `touchpoint` (apps/touchpoint, `@free-react-templates/touchpoint`)

## Replication reference

The live preview at `https://preview.colorlib.com/theme/contact-form-01/`
returned 404. The design is reconstructed from the ColorLib screenshot
(1200×972) which is the primary fidelity reference.

### Screenshot analysis (1200×972)

The screenshot shows a centered two-column card layout on a light gray
background:

1. **Page title**: "Contact Form #01" — centered at top, dark text, regular
   weight, large font.
2. **Left column — Form card**: White background card containing:
   - Heading: "Get in touch" — dark text, bold, ~24px
   - Two-column field row: Name (text input) and Email (email input) side
     by side, each with light gray border and white background
   - Subject field: full-width text input, same border style
   - Message field: full-width textarea, taller, same border style
   - "Send Message" button: blue filled (#1089ff), white text, rounded
     corners (~4px), left-aligned below the message field
3. **Right column — Contact info card**: Solid blue background (#1089ff)
   containing:
   - Heading: "Contact us" — white, bold, ~24px
   - Four info items, each with a circular icon (white icon on lighter
     blue circle) and text:
     - Location pin icon — Address: "198 West 21th Street, Suite 721
       New York NY 10016"
     - Phone icon — Phone: "+ 1235 2355 98"
     - Paper plane icon — Email: "info@yoursite.com"
     - Globe/link icon — Website: "yoursite.com"
   - Labels are bold white, values are regular white

## Design tokens (extracted from screenshot)

| Token            | Value                              | Source                        |
| ---------------- | ---------------------------------- | ----------------------------- |
| Background       | `#f5f5f5` (light gray)             | page background               |
| Card white       | `#ffffff`                          | form card background          |
| Brand blue       | `#1089ff` (blue-500)              | info card bg, button bg       |
| Info card icon bg| `#60a5fa` (blue-400)              | circular icon backgrounds     |
| Text heading     | `#1f2937` (gray-800)              | headings on white             |
| Text body        | `#374151` (gray-700)              | body text on white            |
| Text placeholder | `#9ca3af` (gray-400)              | input placeholder text        |
| Text white       | `#ffffff`                          | text on blue backgrounds      |
| Input border     | `#e5e7eb` (gray-200)              | form field borders            |
| Button text      | `#ffffff`                          | send message button           |
| Font primary     | `'Poppins', sans-serif`           | headings (inferred)           |
| Font body        | `'Poppins', sans-serif`           | body, inputs (inferred)       |
| Button radius    | `4px`                              | send message button           |
| Card radius      | `0` (no rounding)                  | form card                     |
| Input radius     | `0` (no rounding)                  | form fields                   |
| Icon circle size | `~44px` diameter                   | contact info icons            |

## Sections (in order, from screenshot)

1. **Page header** — Centered page title "Contact Form #01" at the top of
   the page, dark text on light gray background. (In our implementation this
   may become a template-specific heading or be omitted in favor of the card
   headings.)

2. **Two-column card layout** — A flex/grid container holding two cards
   side by side (or stacked on mobile):

   a. **Form card (left)** — White background, padding, containing:
      - "Get in touch" heading
      - Name input (text, placeholder "Name")
      - Email input (email, placeholder "Email") — same row as Name
      - Subject input (text, placeholder "Subject") — full width
      - Message textarea (placeholder "Message") — full width, taller
      - "Send Message" button — blue filled, white text, left-aligned

   b. **Contact info card (right)** — Blue background (#1089ff), padding,
      containing:
      - "Contact us" heading — white
      - Address item: location pin icon + "Address: 198 West 21th Street,
        Suite 721 New York NY 10016"
      - Phone item: phone icon + "Phone: + 1235 2355 98"
      - Email item: paper plane icon + "Email: info@yoursite.com"
      - Website item: globe icon + "Website: yoursite.com"

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-01/` | HTTP 200 · 13,910 B · title `Contact Form 01` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-01/css/style.css?v=585157d9` | HTTP 200 · 17,110 B · sha256 `212e437397b3` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×15,
`#007bff`×6, `#6c757d`×4, `#1089ff`×4, `#212529`×3, `#495057`×3,
`#0062cc`×3, `#000000`×3, `#006fdc`×2, `#0056b3`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#3b82f6` → **`#1089ff`** — the sheet paints `a{color}` with it

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#60a5fa`.

**App delta (2026-10-23)** — `apps/touchpoint/src/index.css` still carries the
screenshot-era palette: `--color-brand-blue: #3b82f6`, `--color-brand-blue-light:
#60a5fa`, `--color-page-bg: #f5f5f5`. The live sheet paints the effective CTA is `#1089ff`
(`.cl-btn.cl-btn-primary` and `.cl-bg-primary`, both `!important`), hover `#006fdc`, focus
border `#80bdff`, page `#fafafa`. The app predates the 2026-10-22 re-read, so this is
implementer debt (**APP-DELTA**), not a spec defect; the rows above are the reference's
values.

## Requirements

### Feature: Page Layout

#### Scenario: Page displays centered two-column card

- **GIVEN** the user loads the page
- **THEN** a light gray background fills the page
- **AND** a two-column card layout is centered on the page
- **AND** the left card has a white background
- **AND** the right card has a blue background

#### Scenario: Responsive layout on mobile

- **GIVEN** the viewport is narrow (≤768px)
- **THEN** the two cards stack vertically (form on top, contact info below)
- **AND** both cards span the full width with horizontal margins

### Feature: Contact Form

#### Scenario: Form heading displays "Get in touch"

- **GIVEN** the user loads the page
- **THEN** the left card heading reads "Get in touch"
- **AND** the heading is dark text, bold, and large

#### Scenario: Form has four fields

- **GIVEN** the user loads the page
- **THEN** the Name and Email fields are displayed side by side in a row
- **AND** the Subject field is displayed full width below them
- **AND** the Message textarea is displayed full width below Subject
- **AND** all fields have light gray borders and placeholder text

#### Scenario: Name field accepts text

- **GIVEN** the user focuses the Name field
- **WHEN** the user types a name
- **THEN** the text appears in the field

#### Scenario: Email field validates format

- **GIVEN** the user enters an invalid email in the Email field
- **WHEN** the user clicks Send Message
- **THEN** a validation error is shown for the email field

#### Scenario: Message field is a textarea

- **GIVEN** the user focuses the Message field
- **WHEN** the user types a multi-line message
- **THEN** the textarea shows the entered text

#### Scenario: Send Message button submits form

- **GIVEN** the user fills all required fields with valid data
- **WHEN** the user clicks "Send Message"
- **THEN** the form attempts submission (prevent default in React)
- **AND** no page navigation occurs (SPA behavior)

### Feature: Contact Info Card

#### Scenario: Contact info card displays heading and items

- **GIVEN** the user loads the page
- **THEN** the right card heading reads "Contact us" in white
- **AND** four contact info items are visible

#### Scenario: Address item shows location details

- **GIVEN** the user loads the page
- **THEN** the address item shows a location pin icon
- **AND** the text reads "Address: 198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Phone item shows phone number

- **GIVEN** the user loads the page
- **THEN** the phone item shows a phone icon
- **AND** the text reads "Phone: + 1235 2355 98"

#### Scenario: Email item shows email address

- **GIVEN** the user loads the page
- **THEN** the email item shows a paper plane icon
- **AND** the text reads "Email: info@yoursite.com"

#### Scenario: Website item shows URL

- **GIVEN** the user loads the page
- **THEN** the website item shows a globe icon
- **AND** the text reads "Website: yoursite.com"

#### Scenario: Contact info icons have circular backgrounds

- **GIVEN** the user loads the page
- **THEN** each contact info icon is displayed inside a lighter blue circle

### Feature: Button Styling

#### Scenario: Send Message button is blue with white text

- **GIVEN** the user loads the page
- **THEN** the "Send Message" button has a blue background
- **AND** the button text is white
- **AND** the button has slightly rounded corners

#### Scenario: Button hover effect

- **GIVEN** the user hovers over the Send Message button
- **THEN** the button darkens slightly or shows a hover state

## Verification checklist

- [ ] Light gray page background (#f5f5f5)
- [ ] Two-column card layout centered on page
- [x] Left card: white background, "Get in touch" heading
- [ ] Name and Email fields side by side
- [ ] Subject field full width
- [ ] Message textarea full width, taller
- [x] "Send Message" blue button, white text, rounded
- [x] Right card: blue background, "Contact us" heading in white
- [ ] Four contact items with circular icons (pin, phone, plane, globe)
- [ ] Contact info text in white (bold labels, regular values)
- [ ] Responsive: cards stack on mobile
- [x] No reference to ColorLib in app code
- [x] Footer links to componentdock.com
- [x] `public/CNAME` contains `touchpoint.free.componentdock.com`
- [x] `homepage` in package.json is `https://touchpoint.free.componentdock.com`
