# Template: DropForm (Contact Form V8)

## Purpose

A clean contact form with a map background, white card layout, and green accent button. DropForm is a React recreation of the ColorLib free "Contact Form V8" template.

- **Source**: ColorLib Contact Form V8 (`https://colorlib.com/wp/template/contact-form-v8/`)
- **Preview URL**: `https://preview.colorlib.com/theme/contact-form-v8/`
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo standard)

Design tokens captured from the original (see docs/replication.md):

- **Brand/Primary color (button)**: `#4caf50` (green submit button, checkbox accent)
- **Button hover**: `#43a047`
- **Page background**: map image overlay (light gray `#e8e8e8`)
- **Card background**: `#ffffff` with shadow
- **Heading text color**: `#333333`
- **Body text / labels**: `#666666`
- **Input border**: `#cccccc`
- **Placeholder text**: `#999999`
- **Font family**: Poppins (Google Fonts, weights 300–600)
- **Input height**: 48px, `border-radius: 4px`, `border: 1px solid #ccc`
- **Button**: green `#4caf50`, uppercase, rounded, `padding: 10px 24px`

Assets are NOT copied — placeholder images via `picsum.photos`, icons from
`lucide-react`, fonts via Google Fonts `<link>`.

DropForm lives in `apps/dropform` and uses shared components from `packages/ui`.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Contact Form V8** — https://colorlib.com/wp/template/contact-form-v8/
- **Preview**: **no live demo** — `/theme/contact-form-v8/`, `/theme/bootstrap/`, `/theme/bft/`, `/theme/bb/`, `/theme/bac/`, `/theme/sidebar/` and `/etc/{regform,bforms}/` all answered **404** on 2026-10-23. The reference is the official source archive `https://preview.colorlib.com/downloads/free/contact-form-v8.zip` (HTTP 200, 81,489 B): `contact-form-v8/index.html` 1,988 B, title `Contact V8`.
- **Stylesheet measured**: `css/style.css` inside the archive — 11,120 bytes, sha256 `5ed785486f99…`. Archive-only evidence; there is no live twin to hash against.
- **Measured how**: hex-literal census of the sheet + winning rule per selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand green | `#57b846` | 4 | `.contact100-form-btn` background · the two `focus-input100-*::before/::after` focus strokes · `.input-checkbox100:checked + .label-checkbox100::before` (check glyph) |
| Ink green-black | `#1b3815` | 3 | `.input100` text · `.label-checkbox100` text · `.contact100-form-btn:hover` background |
| Placeholder | `#999999` | 8 | `input`/`textarea` `::placeholder` (all vendor prefixes) |
| Error | `#c80000` | 2 | `.alert-validate::before/::after` validation bubble |
| Field border | `#e6e6e6` | 2 | `.wrap-input100` 1px box · `.label-checkbox100::before` (unchecked box) |
| Card title | `#333333` | 1 | `.contact100-form-title` |
| White | `#fff` | 6 | `.wrap-contact100` background · `.wrap-input100` background · button label |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Card title | `JosefinSans-Bold` (self-hosted woff2 in `fonts/`) · 30px · `#333333` · left-aligned | `.contact100-form-title` |
| Inputs | `JosefinSans-Bold` · 15px · `#1b3815` | `.input100` |
| Checkbox label | `Oswald-Medium` · 15px · `#1b3815` | `.label-checkbox100` |
| Button | `JosefinSans-Bold` · 14px | `.contact100-form-btn` |

Both faces ship as local woff2 files. Substitutes on Google Fonts: **Josefin Sans** (the app ships Poppins — a delta) and **Oswald** for the checkbox label.

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Page | `min-height: 100vh`, centered flex, `padding: 15px`; full-bleed Google-map iframe (`#google_map`, `z-index: -1`) behind the card |
| Card | `.wrap-contact100` **500px**, `background: #fff`, `border-radius: 10px`, `padding: 62px 55px 65px 55px`, `box-shadow: 0 3px 20px 0 rgba(0,0,0,0.1)` (`padding: 62px 15px 65px` under 576px) |
| Fields | `.wrap-input100` `background: #fff`, `1px solid #e6e6e6`, `margin-bottom: 17px`, no radius; input `height: 62px` `padding: 0 20px 0 23px`; textarea `min-height: 199px` |
| Focus | animated 1px `#57b846` stroke that draws around the field (two spans, `full-w`/`full-h` keyframes, 0.1–0.2 s) |
| Checkbox | native input hidden; 20px square `#e6e6e6` box with a FontAwesome check that turns `#57b846` when checked; label `padding-left: 32px` |
| Button | `height: 42px`, `min-width: 160px`, `padding: 0 20px`, green fill, hover `#1b3815` |

Section order measured in the archive DOM: map iframe → centered card [`contact100-form-title "Contact Us"` → Name / Email / Message (each a bordered `.wrap-input100`) → checkbox "Send copy to my-email" → submit `Send Email`] → end. No footer in the reference; the app appends the Component Dock footer.

## Requirements

### Requirement: Page layout and heading

The system SHALL render a centered page with a map-like background and a white
card panel containing the contact form. The heading "Contact Us" SHALL be
displayed at the top of the card.

#### Scenario: Heading content

- **GIVEN** the page is rendered
- **WHEN** the heading is displayed
- **THEN** it SHALL show the text "Contact Us"
- **AND** it SHALL be left-aligned within the card
- **AND** it SHALL have dark text color

### Requirement: Contact form fields

The system SHALL render a contact form with Full Name, Email, and Message fields.

#### Scenario: Full Name field

- **GIVEN** the page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL contain a text input with placeholder "Full Name"

#### Scenario: Email field

- **GIVEN** the page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL contain an email input with placeholder "Email address"

#### Scenario: Message textarea

- **GIVEN** the page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL contain a textarea with placeholder "Your Message"

### Requirement: Send copy checkbox

The system SHALL render a checkbox labeled "Send copy to my-email" that is
unchecked by default.

#### Scenario: Checkbox default state

- **GIVEN** the page is rendered
- **WHEN** the checkbox is displayed
- **THEN** it SHALL be unchecked by default

#### Scenario: Checkbox toggle

- **GIVEN** the page is rendered
- **WHEN** the user clicks the checkbox
- **THEN** it SHALL toggle between checked and unchecked states

### Requirement: Submit button

The system SHALL render a green "SEND EMAIL" submit button.

#### Scenario: Button visibility

- **GIVEN** the page is rendered
- **WHEN** the button is displayed
- **THEN** it SHALL show the text "SEND EMAIL"
- **AND** it SHALL have a green background (`#4caf50`)
- **AND** it SHALL have white text

### Requirement: Form layout

The checkbox and submit button SHALL be on the same row at the bottom of the
form.

#### Scenario: Bottom row layout

- **GIVEN** the page is rendered
- **WHEN** the form bottom is displayed
- **THEN** the checkbox SHALL be on the left
- **AND** the submit button SHALL be on the right

### Requirement: Footer with Component Dock link

The system SHALL render a footer section containing a link to
`https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to `https://www.componentdock.com/`
- **AND** the link text SHALL mention "Component Dock"

## Verification checklist

- [x] Heading renders "Contact Us" left-aligned in card
- [ ] Full Name, Email, and Message fields render with correct placeholders
- [x] "Send copy to my-email" checkbox unchecked by default
- [ ] Checkbox toggles on click
- [x] "SEND EMAIL" button renders with green background
- [ ] Checkbox and button aligned on same row
- [ ] Footer links to Component Dock
- [x] No reference to ColorLib in any app source file
- [x] `public/CNAME` contains `dropform.free.componentdock.com`
- [x] `package.json` has `homepage` set to `https://dropform.free.componentdock.com`
- [ ] Tests achieve 100% coverage (lines, functions, branches, statements)
