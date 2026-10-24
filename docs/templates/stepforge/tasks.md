# StepForge — Implementation Tasks

Source design: **Colorlib Wizard 26**
(`https://colorlib.com/wp/template/colorlib-wizard-26/`, demo bundle
`downloads/free/colorlib-wizard-26.zip`) → recreation name **stepforge**.
Shipped at https://stepforge.free.componentdock.com.

Scope: a three-step booking wizard on a flat navy page — step bar
(Personal Info → Booking → Confirm), one form panel per step, back/next/confirm
actions, no navbar, no hero, no content bands.

## Component breakdown

Render order as composed in `apps/stepforge/src/App.tsx`:

### 1. StepIndicator
- Three tiles: number block + label (`Personal Info`, `Booking`, `Confirm`);
  the active tile's block is teal `#55e8d5`.
- Scenario — initial state: **WHEN** the page loads; **THEN** step 1 is active
  and its number block is teal.
- Scenario — progress: **WHEN** the user advances to step 2; **THEN** step 2 is
  active and step 1's block is no longer teal.

### 2. PersonalInfoStep
- First Name, Last Name, Phone Number, E-Mail, Date of Birth (day/month/year
  selects), Address Location; `1/3` counter.
- Scenario — fields present: **WHEN** step 1 renders; **THEN** all six field
  groups are visible.
- Scenario — typing: **WHEN** the user types "Ada" in First Name; **THEN** the
  input holds "Ada".
- Scenario — required gate: **WHEN** a required field is empty; **THEN** `Next`
  is disabled.

### 3. BookingStep
- Booking selects (service, branch, date, time) with the same white pill selects.
- Scenario — advancing: **WHEN** the user fills the step and activates `Next`;
  **THEN** step 3 becomes active.

### 4. ConfirmStep
- Read-only summary rows of everything entered; no new inputs.
- Scenario — summary: **WHEN** step 3 renders; **THEN** the values entered in
  steps 1–2 are shown as read-only text.

### 5. FormActions
- `Back`, `Next`, `Confirm`; teal fill for forward actions (`#43ccba`, hover
  `#32998b`), muted navy for back.
- Scenario — back: **WHEN** the user activates `Back`; **THEN** the previous step
  is shown with its values intact.
- Scenario — confirm: **WHEN** the user activates `Confirm`; **THEN** the page
  does not reload and a confirmation state is shown.

### 6. Footer
- Component Dock credit + copyright.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "StepForge — Booking Wizard".
- **Design tokens** — page `#383a4f`, panel `#525575`, accent `#55e8d5`, buttons
  `#43ccba` / hover `#32998b`, inactive `#ccc`; `Open Sans` 400/600/700; 5px
  input/button radius, 10px step-tile radius.
- **No photography** — the design is colour and type only.
- **Provenance** — no file under `apps/stepforge/` may contain "ColorLib", a
  colorlib.com URL, or the source template's name; the footer credits Component
  Dock instead.

## Verification

- [x] `apps/stepforge` ships on https://stepforge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Three steps in order with the teal active step and `1/3`-style counter
- [x] Navy `#383a4f` / panel `#525575` / teal `#55e8d5` / button `#43ccba`
- [x] No source-designer name, source URL or source template name under
      `apps/stepforge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/stepforge/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `stepforge.free.componentdock.com`,
  package `homepage` = `https://stepforge.free.componentdock.com`.
