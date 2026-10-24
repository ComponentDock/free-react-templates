# Template: FormCraft (Contact Form)
<!-- prep-status: shipped-as=talkwell -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-20` design this prep describes already
> ships as `apps/talkwell` (<https://talkwell.free.componentdock.com>).
> Do not scaffold `apps/formcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-talkwell/spec.md`.

## Purpose

Recreation of ColorLib **Contact Form 20** — a minimal single-page contact form
centered in a white card on a light gray background. Clean underline-style
inputs, a "Let's Talk" heading, and a blue pill-shaped submit button.

- **Source slug:** `contact-form-20`
- **Source URL:** https://colorlib.com/wp/template/contact-form-20/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-20/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-20/` | HTTP 200 · 2,907 B · title `Contact Form #10` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-20/css/style.css?v=9e8a49e7` | HTTP 200 · 14,263 B · sha256 `d20609c51c13` |

**Live palette** (hex × occurrences across the sheets): `#ccda46`×4,
`#b7c628`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#5b6abf`.

## Requirements

### Requirement: Page layout

The page renders a centered form card on a light gray background.

#### Scenario: Light gray background

- **WHEN** I visit the FormCraft page
- **THEN** the page background is light gray (#f5f5f5)

#### Scenario: Centered white card

- **WHEN** I visit the FormCraft page
- **THEN** I see a white card centered on the page
- **AND** the card has a subtle shadow

### Requirement: Form heading

The card displays a "Let's Talk" heading above the form fields.

#### Scenario: Heading displayed

- **WHEN** I visit the FormCraft page
- **THEN** a "Let's Talk" heading is visible centered at the top of the card

### Requirement: Name and Email fields (side by side)

The form displays Name and Email input fields in a two-column row.

#### Scenario: Two-column field layout

- **WHEN** I visit the FormCraft page
- **THEN** the Name and Email inputs are displayed side by side

#### Scenario: Name field labeled

- **WHEN** I visit the FormCraft page
- **THEN** the Name field has a label "Name *"

#### Scenario: Email field labeled

- **WHEN** I visit the FormCraft page
- **THEN** the Email field has a label "Email *"

#### Scenario: Name field accepts input

- **WHEN** I type "Alice" into the Name field
- **THEN** the Name field contains "Alice"

#### Scenario: Email field accepts input

- **WHEN** I type "alice@example.com" into the Email field
- **THEN** the Email field contains "alice@example.com"

### Requirement: Subject field

The form displays a full-width Subject input field below the Name/Email row.

#### Scenario: Subject field visible

- **WHEN** I visit the FormCraft page
- **THEN** a Subject input field is visible below the Name and Email fields

#### Scenario: Subject accepts input

- **WHEN** I type "Inquiry" into the Subject field
- **THEN** the Subject field contains "Inquiry"

### Requirement: Message textarea

The form displays a full-width Message textarea below the Subject field.

#### Scenario: Message textarea visible

- **WHEN** I visit the FormCraft page
- **THEN** a Message textarea is visible below the Subject field

#### Scenario: Message textarea accepts input

- **WHEN** I type "Hello there" into the Message textarea
- **THEN** the Message textarea contains "Hello there"

### Requirement: Submit button

The form displays a "SEND MESSAGE" button.

#### Scenario: Button visible

- **WHEN** I visit the FormCraft page
- **THEN** a "SEND MESSAGE" button is visible below the Message textarea

#### Scenario: Button styling

- **WHEN** I visit the FormCraft page
- **THEN** the SEND MESSAGE button has a blue/periwellow background
- **AND** the button text is white uppercase
- **AND** the button has a pill shape (fully rounded corners)

#### Scenario: Button prevents default submission

- **WHEN** I click the SEND MESSAGE button
- **THEN** the form does not navigate away from the page

### Requirement: Underline-style inputs

All text inputs and the textarea use bottom-border underline styling only.

#### Scenario: Input border style

- **WHEN** I visit the FormCraft page
- **THEN** all text inputs have a bottom border only (no full border/box)

### Requirement: Label styling

Form field labels are displayed in gray uppercase text above their inputs.

#### Scenario: Labels displayed

- **WHEN** I visit the FormCraft page
- **THEN** all form labels are in gray color and uppercase text

### Requirement: Footer links to Component Dock

The page footer contains a link to Component Dock.

#### Scenario: Footer link

- **WHEN** I visit the FormCraft page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] `npm run verify:app -- formcraft` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 18 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Page layout
      - Form heading
      - Name and Email fields (side by side)
      - Subject field
      - Message textarea
      - Submit button
      - Underline-style inputs
      - Label styling
      - Footer links to Component Dock
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").

## Design tokens

| Token            | Value                   | Notes                                              |
| ---------------- | ----------------------- | -------------------------------------------------- |
| Background       | `#f5f5f5` (light gray)  | Full-viewport page background                      |
| Card surface     | `#ffffff` (white)        | Form card background                               |
| Card shadow      | Subtle box-shadow       | Slight elevation on card                           |
| Brand blue       | `#5B6ABF` (periwinkle)  | Button background                                  |
| Heading color    | `#333333` (dark gray)    | "Let's Talk" heading                               |
| Label color      | `#999999` (gray)         | Uppercase field labels                             |
| Input text       | `#333333` (dark gray)    | Typed text in fields                               |
| Input border     | `#dddddd` (light gray)   | Bottom-border only (underline style)               |
| Button text      | `#ffffff` (white)        | "SEND MESSAGE" text                                |
| Button radius    | ~50px (pill)            | Fully rounded corners                              |
| Font             | Poppins (sans-serif)    | Clean sans-serif via Google Fonts                  |
| Input style      | Underline (no border)   | Bottom border only, no full border/box             |
| Card padding     | ~40px                   | Internal card spacing                              |

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/contact-form-20/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#5b6abf` — nearest `#4d80e4` (d=45)
<!-- live-palette-unverified:end -->
