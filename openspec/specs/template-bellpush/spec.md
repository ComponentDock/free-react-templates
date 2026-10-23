# Template: Bellpush (Newsletter Subscription Modal)

> Recreation of ColorLib Modal 10
> (https://colorlib.com/wp/template/modal-10/)

## Purpose

A single-page React template featuring a centered launch button that opens a
newsletter subscription modal dialog. The modal displays a gradient header with
a magenta-to-blue overlay at 30% opacity, a large circular icon container with
semi-transparent white background, a "Newsletter" heading in bold white text,
a "Subscribe to our newsletter" subtext, and an inline email subscription form
with an email input and "Subscribe" button side by side. The modal body overlaps
the header by 180px, creating a layered card effect.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Modal 10** — https://colorlib.com/wp/template/modal-10/
- **Preview**: slug-only `https://preview.colorlib.com/theme/modal-10/` returns **HTTP 404**; the live demo is https://preview.colorlib.com/theme/bootstrap/modal-10/ — **HTTP 200** on 2026-10-23, title "Modal 10". Its `css/style.css` is byte-identical (sha256 `7fea63534e8a8c9f...`, 22,678 bytes) to `modal-10/css/style.css` in `https://preview.colorlib.com/downloads/free/modal-10.zip`.
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-10.jpg
- **Measured how**: hex-literal census of the live `css/style.css?v=a5859e5d` (22,678 bytes, archive-identical).

### Colors

| Token                    | Value     | Occurrences | Role                              |
| ------------------------ | --------- | ----------- | --------------------------------- |
| Gradient start (magenta) | `#dd00ff` | 8           | Photo overlay gradient, one end   |
| Brand blue               | `#3e64ff` | 7           | Subscribe button fill             |
| Gradient end (blue)      | `#3e65ff` | 7           | Photo overlay gradient, other end |
| Muted copy               | `#6c757d` | 4           | Helper text                       |
| Ink                      | `#212529` | 3           | Body copy                         |

### Typography

| Element | Family                    | Evidence                                         |
| ------- | ------------------------- | ------------------------------------------------ |
| All UI  | `Poppins`                 | 6 `font-family` rules; app loads Poppins 300-700 |
| Heading | Poppins semibold, centred | modal title over the gradient header             |

### Shapes & rhythm

| Property | Reference value                                                        |
| -------- | ---------------------------------------------------------------------- |
| Radii    | `0` (4), `0.25rem` (2), `0.3rem` (1), `5px` (1), `40px` (1)            |
| Header   | gradient overlay at 30% over a photograph, circular icon badge         |
| Layout   | centred launch page -> newsletter modal with header image + grey input |

### Section order (shipped app, 1:1 with the reference)

`LaunchSection -> NewsletterModal -> Footer`

### Delta vs shipped app

- None material: the shipped `@theme` palette matches the measured reference values.

## Requirements

### Requirement: Page layout and launch button

The template SHALL render a centered hero section with the template name
"Bellpush", a description, and a "Launch Modal" button.

#### Scenario: Page loads with launch button

- **GIVEN** the page is loaded
- **THEN** I see a heading "Bellpush"
- **AND** I see a button "Launch Modal"

#### Scenario: Document title is set

- **GIVEN** the page is loaded
- **THEN** the document title is "Bellpush — Newsletter Modal Template"

### Requirement: Modal opens on button click

Clicking the "Launch Modal" button SHALL open a centered newsletter modal dialog.

#### Scenario: Modal opens on button click

- **GIVEN** the page is loaded
- **WHEN** I click the "Launch Modal" button
- **THEN** I see a dialog with the heading "Newsletter"
- **AND** I see the text "Subscribe to our newsletter"
- **AND** I see an email input with placeholder "Enter email address"
- **AND** I see a "Subscribe" button

### Requirement: Modal header design

The modal header SHALL display a gradient overlay (magenta-to-blue, 30% opacity)
over a 230px tall area with a close button in the top-right corner.

#### Scenario: Modal header has gradient overlay

- **GIVEN** the modal is open
- **THEN** the modal header area is 230px tall
- **AND** the header has a gradient from magenta to blue at 30% opacity

#### Scenario: Close button is visible in header

- **GIVEN** the modal is open
- **THEN** I see a close button in the top-right corner of the modal

### Requirement: Modal body overlaps header

The modal body SHALL overlap the header by 180px using negative margin,
creating a layered card effect with z-index 2.

#### Scenario: Modal body overlaps header

- **GIVEN** the modal is open
- **THEN** the modal body visually overlaps the header area

### Requirement: Circular icon container

A 200x200px circular icon container with semi-transparent white background
(rgba(255,255,255,0.2)) SHALL display an envelope icon centered horizontally.

#### Scenario: Circular icon is displayed

- **GIVEN** the modal is open
- **THEN** I see a 200x200px circular container with semi-transparent background
- **AND** the container holds an envelope icon

### Requirement: Subscribe form

The subscribe form SHALL display an email input (light gray background,
52px tall) and a "Subscribe" button (brand blue #3e64ff, 130px wide, 52px tall)
side by side.

#### Scenario: Email input has correct styling

- **GIVEN** the modal is open
- **THEN** the email input has placeholder "Enter email address"
- **AND** the email input has a light gray background

#### Scenario: Subscribe button has correct styling

- **GIVEN** the modal is open
- **THEN** the "Subscribe" button has a blue background with white text
- **AND** the button is 130px wide and 52px tall

#### Scenario: User can enter email and submit

- **GIVEN** the modal is open
- **WHEN** I type "test@example.com" into the email input
- **AND** I click the "Subscribe" button
- **THEN** the form submits without page navigation

### Requirement: Modal closes on user action

The modal SHALL close when the user clicks the close button, the backdrop,
or presses Escape.

#### Scenario: Modal closes on close button click

- **GIVEN** the modal is open
- **WHEN** I click the close button
- **THEN** the modal is not visible

#### Scenario: Modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** I click the backdrop overlay
- **THEN** the modal is not visible

#### Scenario: Modal closes on Escape key

- **GIVEN** the modal is open
- **WHEN** I press Escape
- **THEN** the modal is not visible

#### Scenario: Non-Escape key does not close modal

- **GIVEN** the modal is open
- **WHEN** I press Enter
- **THEN** the modal is still visible

### Requirement: Keyboard accessibility

The modal SHALL support keyboard navigation: Tab cycles through focusable
elements, Escape closes the modal, and focus is restored to the trigger
element when the modal closes.

#### Scenario: Focus restores to trigger element

- **GIVEN** I opened the modal from a button
- **WHEN** I close the modal
- **THEN** focus returns to the button that opened it

#### Scenario: Modal has correct ARIA attributes

- **GIVEN** the modal is open
- **THEN** the dialog has aria-modal="true"

### Requirement: Footer

The template SHALL render a footer with the template name, a description,
and a link to https://www.componentdock.com/ branded "Component Dock".

#### Scenario: Footer renders Component Dock link

- **GIVEN** the page is loaded
- **THEN** I see a link "More templates at Component Dock"
- **AND** the link points to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

### Requirement: Responsive layout

The template SHALL adapt to mobile viewports (width < 768px).

#### Scenario: Mobile layout adapts

- **GIVEN** the viewport is less than 768px wide
- **THEN** the launch button is still centered and visible
- **AND** the modal displays centered on screen
- **AND** the email input and subscribe button stack vertically

### Requirement: No ColorLib references

The app source code SHALL NOT contain any references to "colorlib" or
"ColorLib" in any file, including comments.

#### Scenario: No ColorLib strings in source

- **GIVEN** I search all files in apps/bellpush/
- **THEN** there are no occurrences of "colorlib" (case-insensitive)

## Verification checklist

- [ ] `npm run verify:app -- bellpush` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 19 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names): - Page layout and launch button - Modal opens on button click - Modal header design - Modal body overlaps header - Circular icon container - Subscribe form - Modal closes on user action - Keyboard accessibility - Footer
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
