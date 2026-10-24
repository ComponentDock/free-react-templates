# Template: StepPath (Ecommerce Order Wizard)
<!-- prep-status: shipped-as=divine -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-5` design this prep describes already
> ships as `apps/divine` (<https://divine.free.componentdock.com>).
> Do not scaffold `apps/steppath`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-divine/spec.md`.

## Purpose

Recreation of **ColorLib "Wizard 5"** — a 4-step order template designed for
ecommerce websites with a convenient multi-step wizard flow.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-5/
- **Preview (original):** https://preview.colorlib.com/theme/colorlib-wizard-5/ (unreachable at prep time) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `steppath` (app folder: `apps/steppath`, package: `@free-react-templates/steppath`)
- **Deploy target:** https://steppath.free.componentdock.com

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html` — HTTP 200, 9,892 B, title `FormWizard_v5`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-5/css/style.css?v=4559639a` (12,177 B).
> Faces it actually declares: `Poppins-Medium`, `Muli-Bold`.
> The recorded brand `#46c24a` occurs nowhere in it: the values below are screenshot samples, not measurements — `docs/replication.md` makes the sheet canonical.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

Extracted from screenshot pixel analysis (preview was unreachable — 404) — **re-probed 2026-10-23: the demo serves** (measured record below):

| Token            | Value                                      | Notes                                   |
| ---------------- | ------------------------------------------ | --------------------------------------- |
| Background       | `#e6d2b4` (warm beige)                     | Page/card background                    |
| Card background  | `#e8ceb3` → `#f3d4b7` (beige)              | Wizard card surface                     |
| Accent / teal    | `#d2e6e6` (light teal/mint)                | Progress indicator, step highlights     |
| Accent secondary | `#c8dcdc` (lighter teal)                   | Secondary highlights                    |
| Brand green      | `#46c24a` (approximate, from illustration) | Active step / CTA elements              |
| Heading text     | `#3c320a` (dark brown)                     | Step titles, headings                   |
| Body text        | `#64501e` (dark olive-brown)               | Descriptions, labels                    |
| Button primary   | `#d2be64` (golden/amber)                   | Primary CTA / "Next" button             |
| Button hover     | `#d2b45a` (darker gold)                    | Hover state                             |
| Input border     | `#b4aaa0` (warm gray)                      | Form field borders                      |
| Input background | `#faf0e6` (warm white)                     | Form field backgrounds                  |
| Font family      | System sans-serif stack                    | -apple-system, BlinkMacSystemFont, sans |
| Card radius      | ~8px (rounded card)                        | Wizard card corners                     |
| Button radius    | ~4px (slightly rounded)                    | CTA button corners                      |

**Color note:** The preview was unreachable. Tokens derived from screenshot — **re-probed 2026-10-23: the demo serves** (measured record below)
pixel sampling. The palette is warm and earthy: beige/tan backgrounds with
teal accents and golden/amber CTAs. This differs from typical modern
flat UI — the warm tones give it an organic, approachable feel.

## Requirements

### Wizard container

Feature: Wizard container

#### Scenario: Wizard card centered on page

- **GIVEN** the page has loaded
- **THEN** the wizard card is centered horizontally and vertically on the page

#### Scenario: Wizard has warm beige background

- **GIVEN** the page has loaded
- **THEN** the page background is warm beige (#e6d2b4)

#### Scenario: Wizard card has rounded corners and shadow

- **GIVEN** the page has loaded
- **THEN** the wizard card has rounded corners (~8px) and a subtle drop shadow

### Step indicator / progress

Feature: Step progress indicator

#### Scenario: Four-step progress bar displayed

- **GIVEN** the wizard is loaded
- **THEN** a progress indicator with 4 steps is displayed at the top of the wizard

#### Scenario: Step 1 is active on load

- **GIVEN** the wizard is loaded
- **THEN** Step 1 is visually highlighted as the active step
- **AND** Steps 2, 3, and 4 appear as inactive/pending

#### Scenario: Completed steps marked

- **GIVEN** the user has completed Step 1 and moved to Step 2
- **THEN** Step 1 is marked as completed (checkmark or filled)
- **AND** Step 2 is highlighted as the active step

#### Scenario: Progress bar updates on navigation

- **GIVEN** the user navigates forward
- **THEN** the progress bar fills proportionally (25%, 50%, 75%, 100%)

### Step 1: Personal information

Feature: Step 1 — Personal information

#### Scenario: Step 1 form fields

- **GIVEN** the wizard is on Step 1
- **THEN** fields for Full Name, Email, and Phone Number are displayed

#### Scenario: Step 1 validation

- **GIVEN** the wizard is on Step 1
- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors are displayed for empty required fields

#### Scenario: Step 1 valid submission

- **GIVEN** the wizard is on Step 1
- **WHEN** the user fills in valid personal information and clicks "Next"
- **THEN** the wizard transitions to Step 2

### Step 2: Address details

Feature: Step 2 — Address details

#### Scenario: Step 2 form fields

- **GIVEN** the wizard is on Step 2
- **THEN** fields for Street Address, City, State, and Zip Code are displayed

#### Scenario: Step 2 validation

- **GIVEN** the wizard is on Step 2
- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors are displayed

#### Scenario: Step 2 navigation

- **GIVEN** the wizard is on Step 2
- **WHEN** the user clicks "Back"
- **THEN** the wizard returns to Step 1 with previous data preserved

#### Scenario: Step 2 valid submission

- **GIVEN** the wizard is on Step 2
- **WHEN** the user fills in valid address and clicks "Next"
- **THEN** the wizard transitions to Step 3

### Step 3: Payment information

Feature: Step 3 — Payment information

#### Scenario: Step 3 form fields

- **GIVEN** the wizard is on Step 3
- **THEN** fields for Card Number, Expiry Date, and CVV are displayed

#### Scenario: Step 3 validation

- **GIVEN** the wizard is on Step 3
- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors are displayed

#### Scenario: Step 3 valid submission

- **GIVEN** the wizard is on Step 3
- **WHEN** the user fills in valid payment info and clicks "Next"
- **THEN** the wizard transitions to Step 4

### Step 4: Confirmation / Review

Feature: Step 4 — Order confirmation

#### Scenario: Step 4 review

- **GIVEN** the wizard is on Step 4
- **THEN** a summary of all entered information is displayed (personal, address, payment)

#### Scenario: Step 4 submit

- **GIVEN** the wizard is on Step 4
- **WHEN** the user clicks "Submit" or "Place Order"
- **THEN** a success confirmation message is displayed

#### Scenario: Step 4 edit

- **GIVEN** the wizard is on Step 4
- **WHEN** the user clicks "Edit" next to a section
- **THEN** the wizard navigates back to the corresponding step

### Navigation buttons

Feature: Navigation buttons

#### Scenario: Back button on steps 2-4

- **GIVEN** the wizard is on Step 2, 3, or 4
- **THEN** a "Back" button is displayed to navigate to the previous step

#### Scenario: Back button hidden on Step 1

- **GIVEN** the wizard is on Step 1
- **THEN** the "Back" button is not displayed

#### Scenario: Next button on steps 1-3

- **GIVEN** the wizard is on Step 1, 2, or 3
- **THEN** a "Next" button is displayed to proceed to the next step

#### Scenario: Submit button on Step 4

- **GIVEN** the wizard is on Step 4
- **THEN** a "Submit" or "Place Order" button is displayed instead of "Next"

#### Scenario: Button styling

- **GIVEN** any navigation button is displayed
- **THEN** the button has a golden/amber (#d2be64) background with dark text
- **AND** the button has slightly rounded corners (~4px)

### Responsive behavior

Feature: Responsive wizard

#### Scenario: Mobile layout

- **GIVEN** the viewport width is less than 640px
- **THEN** the wizard card fills the full viewport width with padding
- **AND** form fields stack vertically
- **AND** the step indicator adapts to smaller width

#### Scenario: Desktop layout

- **GIVEN** the viewport width is 640px or greater
- **THEN** the wizard card has a fixed max-width (~600px) and is centered

## Verification checklist

- [ ] Warm beige page background (#e6d2b4)
- [ ] Centered wizard card with rounded corners and shadow
- [ ] Four-step progress indicator at top
- [ ] Step 1 active on initial load
- [ ] Completed steps marked as done
- [ ] Step 1: Personal info fields (name, email, phone)
- [ ] Step 2: Address fields (street, city, state, zip)
- [ ] Step 3: Payment fields (card, expiry, CVV)
- [ ] Step 4: Review summary + submit
- [ ] Back button on steps 2-4
- [ ] Next button on steps 1-3
- [ ] Submit button on Step 4
- [ ] Golden/amber (#d2be64) button styling
- [ ] Form validation with error messages
- [ ] Data preserved when navigating back
- [ ] Responsive: full-width on mobile, fixed-width on desktop
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)

<!-- live-palette-revalue:start -->
**Live palette re-value (2026-10-23)** — the demo `https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html` answers **HTTP 200** (9,892 B); the declarations below are quoted from its own stylesheets.

| claimed | painted | d | sheet (bytes, sha256) | declaration |
| --- | --- | --- | --- | --- |
| `#ebd5bb` | `#f3d4b7` ×3 | 9 | `style.css?v=4559639a` (12,177 B, `e0764ba9b5be…`) | `background: #f3d4b7;` |

The claimed hex was a screenshot sample of the same hue; the sheet value is canonical (`docs/replication.md`).
<!-- live-palette-revalue:end -->

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#e6d2b4` — nearest `#f3d4b7` (d=13)
- `#e8ceb3` — nearest `#f3d4b7` (d=13)
- `#46c24a` — nearest `#d9bda3` (d=172)
- `#3c320a` — nearest `#d9bda3` (d=260)
- `#64501e` — nearest `#d9bda3` (d=208)
- `#d2be64` — nearest `#d9bda3` (d=63)
- `#d2b45a` — nearest `#d9bda3` (d=74)
<!-- live-palette-unverified:end -->
