# Template: Dinespot (Restaurant Booking Form)

## Purpose

Dinespot is a single-page restaurant booking form in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Regform 13" free template (source:
https://colorlib.com/wp/template/colorlib-regform-13/), built under a
DIFFERENT name (**Dinespot**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a split-layout dinner reservation form: a two-panel card
(left = restaurant photo, right = dark form panel) centered on a warm
peach/sand background. The form collects name, phone, time, food
preference, and party size (2/4/6/8/10 via circular selectors), with a
"Book now" submit button and a phone verification note.

**WHAT MAKES DINESPOT DISTINCT (signature behaviors):**

1. **Split-layout card: photo left, dark form right.** The card is a
   horizontal two-column layout. The left column is a full-height
   restaurant/dining photo (people toasting at a dinner table, warm
   ambient lighting). The right column is a very dark (#1a1a1a or #222)
   form panel with white text. The card has rounded corners (~10–15px)
   and sits centered on a warm peach background.

2. **Warm peach/sand page background.** The page background is a solid
   warm peach/sand color (~#F5D5B5 or #F0C9A0) — not white, not dark.
   This warm tone is the template's signature color and extends to the
   entire viewport behind the card.

3. **Person count circular selector.** Below the dropdown fields, a bold
   white subheading "Select Your Dining Space" introduces a row of
   circular buttons: 2, 4, 6, 8, 10. The selected value (e.g. "4") is
   highlighted with a tan/gold border or fill and shows "Person" text
   next to the number. Unselected circles are dark with light borders.
   This is a custom radio-button-like control, not a native `<select>`.

4. **Tan/gold accent color.** The submit button ("Book now") and the
   selected person-count circle use a tan/gold/beige accent
   (~#D4A76A or similar). This warm accent complements the peach
   background and dark form panel.

5. **Phone verification note.** Below the submit button, small text
   reads "Verify your booking info from your phone" — a static
   informational note, not a functional verification step.

## Naming

The ColorLib source name "Colorlib Regform 13" is FORBIDDEN as the app
name. **Dinespot** is the new, original name — single lowercase word,
kebab-case, no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified: zero hits for
`dinespot` in TEMPLATES.md, `ls apps/`, `openspec/specs/`,
`docs/templates/`). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Regform 13" (page title: "Booking
  place for your dinner!"). Listed in TEMPLATES.md at line 2629.
  Single template — no sibling regform-13 variants.
- **Live preview — UNREACHABLE:** The naive
  `https://preview.colorlib.com/theme/colorlib-regform-13/` returns
  HTTP 404 (verified 2026-09-27). Fallback: the screenshot image
  (`colorlib-reg-form-13.jpg`) was analyzed visually.
- **Screenshot (`colorlib-reg-form-13.jpg`, viewed 2026-09-27):**
  Full-viewport browser frame showing:
  - **Page background:** Solid warm peach/sand color (~#F5D5B5 or
    #F0C9A0) — extends across the entire viewport.
  - **Card:** Two-panel horizontal layout, centered on the page:
    - **Left panel (~50%):** Full-height photograph of people dining
      at a restaurant table (toasting with champagne, plates of food,
      warm ambient lighting, bokeh lights in background). The image
      has rounded corners on the left side of the card.
    - **Right panel (~50%):** Very dark (#1a1a1a or #222) background
      with white text. Contains all form elements.
  - **Form title:** "Booking place for your dinner!" — white, bold,
    possibly italic or regular weight, ~18–20px, left-aligned at top
    of the dark panel.
  - **Form fields (on dark background, white text):**
    1. "Your name" — text input, white text, bottom border (light
       gray or white), no box border.
    2. "Your phone number" — text input, same style.
    3. "Time" — select dropdown with chevron-down, bottom border.
    4. "Food" — select dropdown with chevron-down, bottom border.
    5. **"Select Your Dining Space"** — bold white subheading text.
    6. **Person count circles:** Row of 5 circular buttons labeled
       2, 4, 6, 8, 10. The "4" circle is selected — it has a
       tan/gold border or fill, and the text "4 Person" appears
       (number + "Person" label). Unselected circles: dark
       background with thin light border, white number text.
  - **Submit button:** "Book now" — tan/gold/beige background
    (~#D4A76A), dark text, rounded corners (~8–10px), centered
    within the dark panel, generous padding.
  - **Below button:** "Verify your booking info from your phone" —
    small white/light text, centered.
  - **Card corners:** Rounded (~10–15px), visible on the photo side.
  - **Aesthetic:** Warm, elegant, restaurant/dining theme. Dark form
    panel contrasts with warm peach background. The photo provides
    atmosphere. Font for the title appears slightly decorative
    (possibly a serif or stylized sans-serif); form fields use a
    clean sans-serif.

## Design tokens

| Token                | Value                                  | Notes                                                                     |
| -------------------- | -------------------------------------- | ------------------------------------------------------------------------- |
| `--color-page`       | `#F5D5B5` (approx, warm peach/sand)   | Solid warm background across entire viewport                              |
| `--color-card-left`  | Photo (restaurant dining scene)        | Full-height image, rounded left corners                                   |
| `--color-card-right` | `#1a1a1a` or `#222` (very dark)       | Form panel background, white text                                         |
| `--color-brand`      | `#D4A76A` (approx, tan/gold)           | Submit button bg, selected person circle accent                           |
| `--color-ink`        | `#ffffff`                              | Form text on dark panel (white)                                           |
| `--color-ink-dark`   | `#1a1a1a` or `#333`                   | Submit button text (dark on tan/gold bg)                                  |
| `--color-border`     | `rgba(255,255,255,0.3)` (approx)      | Input bottom borders on dark panel (subtle white)                         |
| `--color-circle-bg`  | `#1a1a1a` or `#333`                   | Unselected person circle background                                       |
| `--color-circle-border`| `rgba(255,255,255,0.4)` (approx)     | Unselected circle border (subtle white)                                   |
| `--font-title`       | Decorative serif or stylized sans      | "Booking place for your dinner!" — may need a Google Font match          |
| `--font-body`        | Clean sans-serif                       | Form fields, labels, buttons                                              |
| `--card-w`           | ~900–1000px (two-panel)               | Split layout; responsive: stack vertically on mobile                      |
| `--card-radius`      | ~10–15px                               | Rounded corners on the card (visible on photo side)                      |
| `--btn-radius`       | ~8–10px                                | Submit button rounded corners                                             |
| `--circle-size`      | ~50–60px                               | Person count circular buttons                                             |

**Note:** Colors marked "(approx)" are estimated from the screenshot
since the live preview was unreachable. The implementer should verify
against the actual ColorLib source CSS if obtainable.

## Requirements

### Requirement: Page shell

The system SHALL render a full-viewport page with a warm peach/sand
background and a centered two-panel card (photo left, form right).

#### Scenario: Background and card layout

- **GIVEN** the Dinespot app is rendered on a desktop viewport
- **THEN** the page background SHALL be a solid warm peach/sand color
  (~#F5D5B5)
- **AND** a two-panel card SHALL render centered horizontally:
  - Left panel: a restaurant/dining photo (picsum placeholder seeded
    for this template) filling the full height
  - Right panel: a very dark (#1a1a1a) background with the form
- **AND** the card SHALL have rounded corners (~10–15px)

#### Scenario: Responsive stacking

- **GIVEN** a viewport at or below 768px
- **THEN** the card SHALL stack vertically (photo on top, form below)
  with the photo maintaining its aspect ratio
- **AND** the card SHALL NOT overflow horizontally

### Requirement: Form title

The form SHALL display the title "Booking place for your dinner!" at the
top of the dark form panel.

#### Scenario: Title rendering

- **GIVEN** the Dinespot app is rendered
- **THEN** the dark panel SHALL show "Booking place for your dinner!"
  as white, bold text (~18–20px) at the top of the form area
- **AND** the text SHALL be left-aligned within the dark panel

### Requirement: Text input fields

The form SHALL render two text input fields: Your name and Your phone
number.

#### Scenario: Input rendering

- **GIVEN** the Dinespot app is rendered
- **THEN** two text inputs SHALL render in order:
  1. "Your name" (text)
  2. "Your phone number" (text or tel)
- **AND** each input SHALL have white text on the dark background
- **AND** each input SHALL have a subtle bottom border (light
  semi-transparent white) — no full box border
- **AND** inputs SHALL be full-width within the dark panel

### Requirement: Select dropdowns

The form SHALL render two select dropdowns: Time and Food.

#### Scenario: Select rendering

- **GIVEN** the Dinespot app is rendered
- **THEN** two select elements SHALL render:
  1. "Time" — with time slot options (e.g. "7:00 PM", "7:30 PM",
     "8:00 PM", etc.)
  2. "Food" — with food/cuisine options (e.g. "Italian", "Japanese",
     "Mexican", etc.)
- **AND** each select SHALL show a chevron-down indicator
- **AND** selects SHALL have white text and subtle bottom borders
  consistent with the text inputs

### Requirement: Person count circular selector

Below the dropdown fields, the form SHALL display a "Select Your Dining
Space" subheading and a row of circular person-count buttons.

#### Scenario: Subheading rendering

- **GIVEN** the Dinespot app is rendered
- **THEN** below the Food select, a bold white text element SHALL render
  reading "Select Your Dining Space"

#### Scenario: Person count circles

- **GIVEN** the Dinespot app is rendered
- **THEN** a horizontal row of 5 circular buttons SHALL render labeled
  2, 4, 6, 8, 10
- **AND** one circle SHALL be selected by default (e.g. "4")
- **AND** the selected circle SHALL display with a tan/gold accent
  (border or fill, ~#D4A76A) and show "Person" text next to the number
  (e.g. "4 Person")
- **AND** unselected circles SHALL have a dark background with a subtle
  light border and white number text
- **WHEN** the user clicks an unselected circle
- **THEN** it SHALL become selected (tan/gold accent, "Person" label)
  and the previously selected circle SHALL deselect

### Requirement: Submit button

The form SHALL include a styled submit button.

#### Scenario: Button rendering

- **GIVEN** the Dinespot app is rendered
- **THEN** a button SHALL render with the text "Book now"
- **AND** the button SHALL have a tan/gold background (~#D4A76A), dark
  text, rounded corners (~8–10px), and generous padding
- **AND** the button SHALL be centered within the dark panel

#### Scenario: Form submission

- **GIVEN** the user fills all required fields and selects a party size
- **WHEN** the user clicks "Book now"
- **THEN** the form SHALL submit (or show a success message if
  client-side only — no real backend needed)

### Requirement: Phone verification note

Below the submit button, a static informational note SHALL render.

#### Scenario: Note rendering

- **GIVEN** the Dinespot app is rendered
- **THEN** below the "Book now" button, small white/light text SHALL
  render reading "Verify your booking info from your phone"
- **AND** this SHALL be static text (not a link, not interactive)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for all form elements.

#### Scenario: Semantics

- **GIVEN** the Dinespot app is rendered
- **THEN** all form fields SHALL have programmatic labels
  (`<label htmlFor>`)
- **AND** the person-count selector SHALL use radio button semantics
  (`role="radiogroup"` with `role="radio"` items, or actual hidden
  radio inputs)
- **AND** the selected person count SHALL be announced via
  `aria-checked` or `aria-selected`
- **AND** interactive elements SHALL have visible focus-visible rings

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Dinespot app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- dinespot` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the screenshot at
      https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-13.jpg:
      warm peach background, two-panel card (photo left, dark form
      right), "Booking place for your dinner!" title, 2 text inputs,
      2 selects, person-count circles, tan "Book now" button, phone
      verification note.
- [ ] Behavior check: form fields accept input, selects show options,
      person-count circles toggle selection, submit button triggers
      form submission or success message.
- [ ] Responsive check at 768px (card stacks vertically, no
      horizontal overflow).
