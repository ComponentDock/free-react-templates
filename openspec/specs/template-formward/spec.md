# Template: Formward (Contact Form)

## Purpose

Formward is a single-page contact form template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Contact Form 15"
free template (source: https://colorlib.com/wp/template/contact-form-15/),
built under a DIFFERENT name (**Formward**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, trendy contact form described by Colorlib as "the
best free trendy contact form template that acclimatizes to any website theme
easily due to its simplicity." It is a single-page design with a two-column
info header, a message form, and a black send button — no navigation, no hero,
no images, no parallax. The design is monochromatic (black + white + light
grey) with underline-only input borders.

**WHAT MAKES FORMWARD DISTINCT (signature behaviors):**

1. **Minimalist monochromatic layout.** Pure white/off-white page background,
   NO hero image, NO parallax, NO color accents — just black text on white
   with thin grey underline borders on form fields. The aesthetic is clean and
   modern, relying on whitespace and typography for hierarchy.
2. **Two-column info header.** The top of the page is split into two columns:
   left shows a city/address heading ("NEW YORK" + street address), right shows
   contact info heading with phone and email. Both use bold, uppercase
   sans-serif headings (Poppins or similar) with lighter-weight body text
   below.
3. **"MESSAGE US" form section.** A large bold heading introduces the form
   below the info header. The form has two side-by-side text inputs (name +
   email), a full-width textarea for the message, and a solid black "Send
   Message" button with white text. All inputs use underline-only borders (no
   background, no box-shadow, no full border) — a distinctive design choice.
4. **No JavaScript interactions beyond form submission.** No animations, no
   parallax, no sliding panels — the template is purely static HTML/CSS with
   form fields. The recreation implements client-side validation as a bonus
   (the source has no visible validation).
5. **Black rectangular submit button.** The "Send Message" button is solid
   black (#000000) with white text, rectangular with minimal border-radius,
   positioned below the textarea — not floating, not absolute, just in the
   normal document flow.

## Naming

The ColorLib source name "Contact Form 15" (or "Contact Form V15") is
FORBIDDEN as the app name. **Formward** is the new, original name — single
lowercase word, kebab-case, no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified 2026-09-17: zero hits
for `formward` in TEMPLATES.md, `ls apps/`, `openspec/specs/`, `docs/templates/`).
Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Contact Form 15" (page title: "Contact Form V15
  - Free Trendy Contact Form Template 2026"). Listed in TEMPLATES.md under
  the Contact Form section (line 1418, `- [ ] **Contact Form 15**`).
  Source URL: https://colorlib.com/wp/template/contact-form-15/
- **Live preview — UNREACHABLE (verified 2026-09-17):**
  `https://preview.colorlib.com/theme/contact-form-15/` returns HTTP 404.
  `https://colorlib.com/etc/contact-form-15/index.html` also returns 404.
  **Fallback to TEMPLATES.md screenshot** as the sole visual reference.
- **Screenshot analysis (`contact-form-15.jpg`, 1200×972 AVIF, viewed
  2026-09-17):** A clean, minimal page with white/off-white background.
  Top section split into two columns: left column has "NEW YORK" heading
  (bold, uppercase, sans-serif ~24px) with address "9757 Aspen Lane South,
  Richmond Hill, NY 11419" below in lighter weight; right column has
  "CONTACT INFO" heading (same style) with "T: +1 (291) 939 9321" and
  "E: info@mywebsite.com" below. Below the info header, "MESSAGE US"
  heading (bold, uppercase, sans-serif ~28px) introduces the form. Form
  has two side-by-side inputs ("Your name" and "Email") with thin grey
  underline borders only (no background fill, no box), a full-width
  textarea ("Write your message") with the same underline treatment, and
  a solid black "Send Message" button (white text, rectangular, minimal
  radius). The overall aesthetic is stark, clean, monochromatic — black
  text, white background, grey underlines. The font appears to be Poppins
  (bold headings, regular body). Aesthetic: modern minimalism, no imagery
  whatsoever — **NO picsum placeholders needed**.
- **Font identification from screenshot:** Headings ("NEW YORK", "CONTACT
  INFO", "MESSAGE US") use a bold geometric sans-serif consistent with
  Poppins (700 weight, uppercase). Body text and form labels use a
  regular-weight variant (Poppins 400). The font is loaded via Google Fonts
  in the original.
- **Description from ColorLib listing:** "If you'd like to mix a minimalist
  look with a touch of creativity, then this free trendy contact form
  template is ideal for you. Contact Form 15 uses the latest HTML and CSS
  framework, so you get all the modern web elements and effects."

## Design tokens

| Token                | Value                          | Notes                                                                       |
| -------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| `--color-page`       | `#ffffff` or `#f9f9f9`         | White/near-white page background (no photo/gradient)                        |
| `--color-ink`        | `#333333` or `#222222`         | Body text, input text, paragraph copy                                       |
| `--color-heading`    | `#111111` or `#000000`         | Bold headings (NEW YORK, CONTACT INFO, MESSAGE US) — near-black             |
| `--color-line`       | `#cccccc` or `#dddddd`         | Thin underline on inputs/textarea (bottom-border only, ~1px solid)           |
| `--color-btn-bg`     | `#000000`                      | Send Message button background (solid black)                                |
| `--color-btn-text`   | `#ffffff`                      | Send Message button text (white)                                            |
| `--color-label`      | `#999999` or `#aaaaaa`         | Placeholder/label text color (lighter grey)                                 |
| `--font-heading`     | 'Poppins', sans-serif           | Google Fonts, 600/700 weight for headings                                   |
| `--font-body`        | 'Poppins', sans-serif           | Google Fonts, 400 weight for body text and input text                       |
| `--input-border`     | 1px solid `#cccccc` bottom only | No top/side borders — underline-only style; no background fill              |
| `--btn-radius`       | 2px–4px (near-rectangular)     | Minimal border-radius on the Send Message button                            |
| `--btn-padding`      | 12px 24px                      | Comfortable click target, rectangular shape                                 |
| `--section-gap`      | 40–60px                        | Vertical spacing between info header, form heading, and form                |
| `--form-max-width`   | ~800px                         | Centered container width for the form and info columns                      |
| `--col-gap`          | 40–60px                        | Horizontal gap between the two info columns                                 |

## Requirements

### Requirement: Page shell

The system SHALL render a clean white/near-white full-viewport page with
the contact info header and message form centered horizontally.

#### Scenario: White page with centered content

- **GIVEN** the Formward app is rendered on a desktop viewport
- **THEN** the page background SHALL be solid white or near-white (`#ffffff`
  or `#f9f9f9`) with no photo, gradient, or pattern
- **AND** the content SHALL be centered horizontally in a max-width container
  (~800px)
- **AND** the page font SHALL be Poppins (400/600/700 from Google Fonts)

#### Scenario: Responsive layout

- **GIVEN** a viewport at or below 768px
- **THEN** the two-column info section SHALL stack vertically
- **AND** the form inputs (name + email) SHALL stack vertically
- **AND** no horizontal overflow SHALL occur

### Requirement: Two-column info header

The system SHALL display a two-column info header with address on the left
and contact details on the right.

#### Scenario: Info header rendering

- **GIVEN** the Formward app is rendered
- **THEN** the left column SHALL show a bold uppercase heading "NEW YORK"
  followed by address lines ("9757 Aspen Lane South" / "Richmond Hill,
  NY 11419") in regular-weight body text
- **AND** the right column SHALL show a bold uppercase heading "CONTACT INFO"
  followed by phone line ("T: +1 (291) 939 9321") and email line
  ("E: info@mywebsite.com") in regular-weight body text
- **AND** both columns SHALL use the same heading style (Poppins 600/700,
  uppercase, ~24px) and body text style (Poppins 400, ~14px, `#333`)

#### Scenario: Info header responsive

- **GIVEN** the viewport is at or below 768px
- **THEN** the two columns SHALL stack vertically (address above contact info)
- **AND** adequate spacing SHALL separate the two sections (~24–40px)

### Requirement: Message form heading

The system SHALL display a "MESSAGE US" heading above the form.

#### Scenario: Form heading rendering

- **GIVEN** the info header is rendered
- **THEN** a "MESSAGE US" heading SHALL render below the info header
- **AND** it SHALL use bold uppercase Poppins (~28px, near-black)
- **AND** adequate vertical spacing SHALL separate it from the info header
  above and the form fields below (~40–60px)

### Requirement: Contact form fields

The system SHALL render a contact form with name, email, and message fields
using underline-only border styling.

#### Scenario: Form field layout

- **GIVEN** the "MESSAGE US" heading is rendered
- **THEN** two text inputs SHALL render side by side: "Your name" (left)
  and "Email" (right), each ~50% width
- **AND** a textarea for "Write your message" SHALL render full-width below
  the two inputs
- **AND** all three fields SHALL have thin grey underline-only borders
  (bottom border only, ~1px solid `#cccccc`) with no background fill,
  no side/top borders, no box shadow

#### Scenario: Input styling

- **GIVEN** any form field is rendered
- **THEN** the field SHALL have no visible background (transparent)
- **AND** the field SHALL have a single bottom border of ~1px solid `#cccccc`
- **AND** placeholder text SHALL be light grey (`#999999` or `#aaaaaa`)
- **AND** the input text SHALL be dark (`#333333`) in Poppins 400

#### Scenario: Textarea styling

- **GIVEN** the textarea is rendered
- **THEN** it SHALL have the same underline-only border treatment as the
  text inputs
- **AND** it SHALL have a reasonable minimum height (~120–150px) for multi-line
  message entry
- **AND** it SHALL be resizable vertically (or not resizable, matching the
  source)

### Requirement: Send Message button

The system SHALL render a solid black submit button with white text.

#### Scenario: Button rendering

- **GIVEN** the form fields are rendered
- **THEN** a "Send Message" button SHALL render below the textarea
- **AND** the button SHALL have a solid black (`#000000`) background
- **AND** the button SHALL have white (`#ffffff`) text
- **AND** the button SHALL be rectangular with minimal border-radius (~2–4px)
- **AND** the button SHALL have comfortable padding (~12px 24px)
- **AND** the button SHALL be positioned in normal document flow (not
  floating, not absolute)

#### Scenario: Button hover state

- **GIVEN** the Send Message button is rendered
- **WHEN** the user hovers over the button
- **THEN** a subtle hover effect SHALL occur (e.g. background changes to
  dark grey `#333333` or a slight opacity change)

### Requirement: Form submission (mock)

The system SHALL handle form submission with client-side validation and
a success feedback mechanism.

#### Scenario: Empty field validation

- **GIVEN** the form is rendered with all fields empty
- **WHEN** the user clicks "Send Message"
- **THEN** the form SHALL NOT submit
- **AND** empty required fields SHALL show a visual error indication
  (e.g. red border or error message below the field)

#### Scenario: Successful submission

- **GIVEN** the name, email, and message fields are all filled
- **WHEN** the user clicks "Send Message"
- **THEN** a success message SHALL appear (e.g. "Message sent!" or similar)
- **AND** the form fields SHALL be cleared
- **AND** no real network request SHALL be made (mock only)

### Requirement: Accessibility and semantics

The system SHALL expose accessible form semantics.

#### Scenario: Form semantics

- **GIVEN** the Formward app is rendered
- **THEN** all form fields SHALL have associated `<label>` elements
  (via `htmlFor`)
- **AND** the email field SHALL use `type="email"` for native validation
- **AND** the form SHALL use semantic `<form>`, `<input>`, `<textarea>`,
  and `<button>` elements
- **AND** interactive elements SHALL have visible focus-visible rings
- **AND** the page SHALL have a descriptive `<title>` (e.g. "Formward —
  Contact Form")

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Formward app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- formward` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the screenshot: white page, two-column info header
      (address left, contact info right), "MESSAGE US" heading, form with
      name+email side-by-side + textarea + black "Send Message" button,
      underline-only input borders.
- [ ] Behavior check: form validation on submit (empty fields flagged),
      successful submission shows success message and clears fields,
      no real network request.
- [ ] Responsive check at 768px (info columns stack, form fields stack,
      no horizontal overflow).
- [ ] Accessibility: labels on all fields, email type, semantic HTML,
      focus-visible rings, Component Dock footer.
