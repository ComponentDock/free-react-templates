# Template: Regpoint (Education Appointment Form)

## Purpose

Regpoint is a single-page education appointment form in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Regform 12" free template (source:
https://colorlib.com/wp/template/colorlib-regform-12/), built under a
DIFFERENT name (**Regpoint**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a standalone registration/appointment form page: a
full-viewport background image of students studying (dark overlay) with a
centered white card containing the form. The form collects title, name,
email, phone, course type, contact preference, and hours, with a terms
checkbox and a "Request an appointment" submit button. There is no navbar,
no multi-step wizard — it is a single static form page with a light gray
section below the card.

**WHAT MAKES REGPOINT DISTINCT (signature behaviors):**

1. **Full-viewport background image with dark overlay + centered white card.**
   The page background is a photographic image of students/people studying
   (dark overlay, ~opacity 0.5–0.7). A white card (~600px wide, rounded
   corners ~10px, subtle shadow) floats centered on the page. This is a
   SINGLE-FORM layout (not a wizard, not multi-step).

2. **Education appointment form — 7 fields + checkbox + submit.**
   The form title is "EDUCATION APPOINTMENT FORM" (uppercase, bold, dark).
   Fields in order: Title (text input), Your Name (text input), Email
   (text input), Phone number (text input), Course Type (select dropdown),
   "How would you like to be located?" (bold subheading, not a field),
   By phone (select dropdown), Hours: 8am 10pm (select dropdown). Below:
   checkbox "I agree to the Terms and Conditions" (with link), submit
   button "Request an appointment" (blue/indigo, rounded, full-width of
   card).

3. **Minimal aesthetic — no navbar, no footer content in the form area.**
   The original has NO navigation bar and NO footer content visible in the
   form section. The page is purely the background + card. Below the
   background image area, there is a light gray section (appears empty or
   minimal). The recreation adds a Component Dock footer per convention.

4. **Blue/indigo submit button.**
   The submit button is a medium blue/indigo (~#5B6ABF or similar from
   the screenshot) with white text, rounded corners (~8–10px), generous
   padding, centered or left-aligned within the card. Not a pill shape,
   not a circle — a standard rounded rectangle button.

5. **Select dropdowns with chevron indicators.**
   Course Type, By phone, and Hours fields are `<select>` elements with
   native or styled dropdown chevrons. The recreation should style these
   consistently with the text inputs (bottom-border-only or light border
   treatment).

## Naming

The ColorLib source name "Colorlib Regform 12" is FORBIDDEN as the app
name. **Regpoint** is the new, original name — single lowercase word,
kebab-case, no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified: zero hits for
`regpoint` in TEMPLATES.md, `ls apps/`, `openspec/specs/`,
`docs/templates/`). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Regform 12" (page title: "Education
  Appointment Form"). Listed in TEMPLATES.md under the registration
  forms section (line 2628). Single template — no sibling regform-12
  variants to distinguish from.
- **Live preview — UNREACHABLE:** The naive
  `https://preview.colorlib.com/theme/colorlib-regform-12/` returns
  HTTP 404 (verified 2026-09-27). Fallback: the ColorLib listing page
  at `https://colorlib.com/wp/template/colorlib-regform-12/` was fetched
  successfully (109,677 bytes) and the screenshot image
  (`colorlib-reg-form-12.jpg`) was analyzed visually.
- **Screenshot (`colorlib-reg-form-12.jpg`, viewed 2026-09-27):**
  Full-viewport browser frame showing:
  - **Background:** Photographic image of students/people studying at a
    table (headphones, notebooks visible), with a dark semi-transparent
    overlay (~50–70% opacity). The image fills the entire viewport.
  - **Card:** White background, centered horizontally and vertically (or
    near top-third), ~600px wide, rounded corners (~10px), subtle drop
    shadow. Contains the entire form.
  - **Title:** "EDUCATION APPOINTMENT FORM" — uppercase, bold, dark text
    (~18–20px), left-aligned at the top of the card.
  - **Form fields (top to bottom):**
    1. "Title" — text input, light gray placeholder text, thin bottom
       border (or light border all around).
    2. "Your Name" — text input, same style.
    3. "Email" — text input, same style.
    4. "Phone number" — text input, same style.
    5. "Course Type" — select dropdown with a chevron-down indicator,
       light border treatment.
    6. **"How would you like to be located?"** — bold subheading text
       (not a field label), ~14px, dark.
    7. "By phone" — select dropdown with chevron.
    8. "Hours : 8am 10pm" — select dropdown with chevron.
  - **Checkbox:** "I agree to the Terms and Conditions" — small
    checkbox input, "Terms and Conditions" is a blue link.
  - **Submit button:** "Request an appointment" — blue/indigo background
    (~#5B6ABF or similar), white text, rounded corners (~8–10px),
    padding ~12px 24px, left-aligned or slightly indented within the
    card. NOT full-width of the card.
  - **Below the card/background:** A light gray section (#f5f5f5 or
    similar) appears at the bottom of the viewport — appears empty or
    minimal in the screenshot.
  - **Aesthetic:** Clean, modern, minimal. No navbar, no sidebar, no
    imagery within the card. The background image provides all the visual
    interest. Font appears to be a clean sans-serif (likely Poppins or
    similar from the ColorLib family).

## Design tokens

| Token                | Value                                  | Notes                                                                     |
| -------------------- | -------------------------------------- | ------------------------------------------------------------------------- |
| `--color-page`       | Photographic bg + dark overlay         | Full-viewport background image of students studying; dark overlay ~50–70% |
| `--color-card`       | `#ffffff`                              | White card, centered, ~600px wide, radius ~10px, subtle shadow           |
| `--color-brand`      | `#5B6ABF` (approx, from screenshot)   | Submit button background (blue/indigo); "Terms and Conditions" link color |
| `--color-ink`        | `#333333` (approx)                    | Body text, form labels, heading                                          |
| `--color-placeholder`| `#999999` (approx)                    | Input placeholder text                                                   |
| `--color-border`     | `#e0e0e0` (approx)                    | Input borders / bottom rules, select borders                             |
| `--color-bg-light`   | `#f5f5f5` (approx)                    | Section below the form card (light gray)                                 |
| `--font-body`        | 'Poppins', sans-serif (approx)        | Clean sans-serif; heading bold, body regular                             |
| `--card-w`           | ~600px                                 | Card max-width; `margin: 0 auto`; responsive: `calc(100% - 40px)`        |
| `--card-radius`      | ~10px                                  | Rounded corners on the card                                              |
| `--btn-radius`       | ~8–10px                                | Submit button rounded corners (NOT pill, NOT circle)                     |
| `--input-style`      | Bottom border or light full border     | Text inputs: light gray border, no heavy box shadow                      |
| `--select-chevron`   | Native or styled chevron-down          | Course Type, By phone, Hours dropdowns                                   |

**Note:** Colors marked "(approx)" are estimated from the screenshot since
the live preview was unreachable. The implementer should verify against
the actual ColorLib source CSS if obtainable, or use the screenshot as
the canonical reference.

## Requirements

### Requirement: Page shell

The system SHALL render a full-viewport page with a photographic background
image (dark overlay) and a centered white card containing the form.

#### Scenario: Background and card layout

- **GIVEN** the Regpoint app is rendered on a desktop viewport
- **THEN** the page SHALL display a full-viewport background image
  (students studying, dark overlay ~50–70% opacity) using a picsum
  placeholder seeded for this template
- **AND** a white card (~600px wide, ~10px radius, subtle shadow) SHALL
  render centered horizontally on the page
- **AND** the card SHALL contain the form title and all form fields

#### Scenario: Responsive card

- **GIVEN** a viewport at or below 768px
- **THEN** the card SHALL widen to `calc(100% - 40px)` with
  `max-width: 100%` and no horizontal overflow

### Requirement: Form title

The form SHALL display the title "EDUCATION APPOINTMENT FORM" at the top
of the card.

#### Scenario: Title rendering

- **GIVEN** the Regpoint app is rendered
- **THEN** the card SHALL show "EDUCATION APPOINTMENT FORM" as an
  uppercase, bold, dark heading at the top of the form area
- **AND** the heading SHALL be left-aligned within the card

### Requirement: Text input fields

The form SHALL render four text input fields in source order: Title,
Your Name, Email, and Phone number.

#### Scenario: Input rendering

- **GIVEN** the Regpoint app is rendered
- **THEN** four text inputs SHALL render in order:
  1. "Title" (text, placeholder or label)
  2. "Your Name" (text, placeholder or label)
  3. "Email" (type=email)
  4. "Phone number" (text or tel)
- **AND** each input SHALL have a light gray border or bottom-border
  treatment with placeholder text in gray
- **AND** inputs SHALL be full-width within the card

#### Scenario: Email validation

- **GIVEN** the user enters an invalid email in the Email field
- **WHEN** the form is submitted
- **THEN** the browser's native email validation SHALL prevent submission
  (or custom validation shows an error)

### Requirement: Select dropdowns

The form SHALL render three select dropdowns: Course Type, By phone, and
Hours.

#### Scenario: Select rendering

- **GIVEN** the Regpoint app is rendered
- **THEN** three select elements SHALL render:
  1. "Course Type" — with course options (e.g. "Web Development",
     "Data Science", "UX Design", etc.)
  2. "By phone" — with contact method options
  3. "Hours : 8am 10pm" — with available time slot options
- **AND** each select SHALL show a chevron-down indicator
- **AND** selects SHALL have consistent styling with the text inputs
  (light border treatment)

### Requirement: Contact preference subheading

The form SHALL display a bold subheading between the Course Type select
and the By phone select.

#### Scenario: Subheading rendering

- **GIVEN** the Regpoint app is rendered
- **THEN** between the Course Type and By phone fields, a bold text
  element SHALL render reading "How would you like to be located ?"
  (verbatim from the source, including the space before the question mark)
- **AND** this SHALL NOT be an input field — it is a static text heading

### Requirement: Terms checkbox

The form SHALL include a terms agreement checkbox with a linked text.

#### Scenario: Checkbox rendering

- **GIVEN** the Regpoint app is rendered
- **THEN** a checkbox input SHALL render with the label "I agree to
  the Terms and Conditions"
- **AND** "Terms and Conditions" SHALL be rendered as a blue link
  (the link may point to "#" or a placeholder URL)
- **AND** the checkbox SHALL be unchecked by default

### Requirement: Submit button

The form SHALL include a styled submit button.

#### Scenario: Button rendering

- **GIVEN** the Regpoint app is rendered
- **THEN** a button SHALL render with the text "Request an appointment"
- **AND** the button SHALL have a blue/indigo background (~#5B6ABF),
  white text, rounded corners (~8–10px), and generous padding
- **AND** the button SHALL be positioned within the card (left-aligned
  or slightly indented, NOT full-width of the card)

#### Scenario: Form submission

- **GIVEN** the user fills all required fields and checks the terms
  checkbox
- **WHEN** the user clicks "Request an appointment"
- **THEN** the form SHALL submit (or show a success message if
  client-side only — no real backend needed)

### Requirement: Section below card

Below the background image + card area, a light gray section SHALL render.

#### Scenario: Gray section

- **GIVEN** the Regpoint app is rendered
- **THEN** below the background image area, a light gray (#f5f5f5
  approx) section SHALL render
- **AND** this section may be empty or contain minimal content (the
  source appears empty in the screenshot)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for all form elements.

#### Scenario: Semantics

- **GIVEN** the Regpoint app is rendered
- **THEN** all form fields SHALL have programmatic labels
  (`<label htmlFor>`)
- **AND** required fields SHALL expose `aria-required`
- **AND** the form SHALL use semantic `<form>`, `<fieldset>`, `<label>`
  elements where appropriate
- **AND** interactive elements SHALL have visible focus-visible rings

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Regpoint app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- regpoint` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the screenshot at
      https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-12.jpg:
      full-viewport background image with dark overlay, centered white
      card (~600px), "EDUCATION APPOINTMENT FORM" title, 4 text inputs,
      3 select dropdowns, bold subheading, terms checkbox, blue submit
      button, light gray section below.
- [ ] Behavior check: form fields accept input, selects show options,
      checkbox toggles, submit button triggers form submission or
      success message, email validation works.
- [ ] Responsive check at 768px (card `calc(100% - 40px)`, no
      horizontal overflow).
