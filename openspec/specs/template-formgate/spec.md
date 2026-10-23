# Template: FormGate (Contact Form Template Spec)

Recreation of ColorLib "Contact Form V19" (https://colorlib.com/wp/template/contact-form-19/).

## Purpose

Minimalist single-page contact form recreating ColorLib "Contact Form 19"
under the original name **FormGate**. A centered white card on a light gray
background containing a "Get Started" heading and a clean form with
underline-style inputs, a budget dropdown, message textarea, and a coral
"SEND MESSAGE" button.

## Design reference (replication findings)

- **Source:** ColorLib "Contact Form V19" — https://colorlib.com/wp/template/contact-form-19/
- **Source slug:** `contact-form-19`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/contact-form-19/ — **HTTP 200**, 3,091 B, fetched 2026-10-23 (page `<title>`: "Contact Form #9"). The slug-only path `https://preview.colorlib.com/theme/contact-form-19/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/contact-form-19/css/style.css?v=d060f86a` — HTTP 200, 15,654 B, sha256 `706f4fbf35e9…`; page 3,091 B, sha256 `8440ca0f977f…` stable over 3 fetches; fetched 2026-10-23): the framework base palette is lime `#ccda46` / `#e9efb0` / `#b7c628` / `#c0d02a`, but **the visible CTA is `#ef4339`** — a later `.cl-btn.cl-btn-primary` override repaints the lime base red (`border-radius: 30px`, `box-shadow: 0 15px 30px 0 rgba(239, 67, 57, 0.2)`, white 11px uppercase label with `letter-spacing: .2rem`). Read both: the base tokens alone describe a button the page never shows. Neutrals `#212529`, `#495057`, `#6c757d` (placeholder) + `#b3b3b3` (labels, 14px); card `.contact-wrap` is `#fff` with `1px solid #efefef`, `box-shadow: 0 0 20px rgba(0,0,0,.05)` and `.form { padding: 40px }`; inputs are underline-only (`border: none; border-bottom: 1px solid #ccc; border-radius: 0`, height 45px), heading `h3` 2rem/700 `#000`; type Roboto. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-19.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/formgate` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#ef4339` | live sheet paints it ×1 — `background` on `.cl-btn.cl-btn-primary`; style.css?v=d060f86a (15,654 B, sha256 706f4fbf35e9) · <https://preview.colorlib.com/theme/bootstrap/contact-form-19/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Renders all form fields

The form SHALL display Name, Email, Budget, and Message fields with a SEND MESSAGE submit button.

#### Scenario: All fields visible

- **GIVEN** the app has loaded
- **WHEN** the user views the form
- **THEN** the Name, Email, Budget, and Message fields are visible
- **AND** the SEND MESSAGE button is visible

### Requirement: Renders heading

The form SHALL display a "Get Started" heading above the form fields.

#### Scenario: Heading displayed

- **GIVEN** the app has loaded
- **WHEN** the user views the page
- **THEN** a "Get Started" heading is visible

### Requirement: Updates Name input

The Name field SHALL accept and display typed text.

#### Scenario: User types name

- **GIVEN** the form is displayed
- **WHEN** the user types "Alice" into the Name field
- **THEN** the Name field contains "Alice"

### Requirement: Updates Email input

The Email field SHALL accept and display typed email addresses.

#### Scenario: User types email

- **GIVEN** the form is displayed
- **WHEN** the user types "alice@example.com" into the Email field
- **THEN** the Email field contains "alice@example.com"

### Requirement: Updates Budget select

The Budget dropdown SHALL allow selecting from predefined budget ranges.

#### Scenario: User selects budget

- **GIVEN** the form is displayed
- **WHEN** the user selects "Low" from the Budget dropdown
- **THEN** the Budget dropdown shows "Low"

### Requirement: Updates Message textarea

The Message field SHALL accept and display typed text.

#### Scenario: User types message

- **GIVEN** the form is displayed
- **WHEN** the user types "Hello there" into the Message field
- **THEN** the Message field contains "Hello there"

### Requirement: Prevents default form submission

Clicking SEND MESSAGE SHALL prevent the browser's default form submission.

#### Scenario: Submit click

- **GIVEN** the form is displayed
- **WHEN** the user clicks the SEND MESSAGE button
- **THEN** the form does not navigate

### Requirement: Has underline-style inputs

All text inputs and the textarea SHALL use bottom-border underline styling.

#### Scenario: Input border style

- **GIVEN** the form is displayed
- **WHEN** the user inspects the Name input
- **THEN** it has a bottom border class

### Requirement: Has coral send button

The SEND MESSAGE button SHALL have a coral/salmon background color.

#### Scenario: Button color

- **GIVEN** the form is displayed
- **WHEN** the user inspects the SEND MESSAGE button
- **THEN** it has a coral background

### Requirement: Footer links to Component Dock

The footer SHALL display a "More templates at Component Dock" link pointing to componentdock.com.

#### Scenario: Footer link

- **GIVEN** the page is displayed
- **WHEN** the user scrolls to the footer
- **THEN** a "Component Dock" link is visible
- **AND** the link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formgate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formgate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Renders all form fields — the Name, Email, Budget, and Message fields are visible
- [x] Renders heading — a "Get Started" heading is visible
- [ ] Updates Name input — the Name field contains "Alice"
- [ ] Updates Email input — the Email field contains "alice@example.com"
- [x] Updates Budget select — the Budget dropdown shows "Low"
- [ ] Updates Message textarea — the Message field contains "Hello there"
- [ ] Prevents default form submission — the form does not navigate
- [ ] Has underline-style inputs — it has a bottom border class
- [ ] Has coral send button — it has a coral background
