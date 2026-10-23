# Template: Orchid (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V14** — a single-page contact form with
a vivid pink-to-purple gradient background and a centered white card containing
a multi-field form with underline-style inputs, inline validation, and a dark
pill-shaped submit button.

- **Source slug:** `contact-form-v14`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v14/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v14/ (404 at
  time of prep — design captured from screenshot only) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v14.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cf/ContactFrom_v14/index.html` — HTTP 200, 2,410 B, title `Contact V14`.
>
> Sheet: `https://colorlib.com/etc/cf/ContactFrom_v14/css/style.css?v=31b7f802` (11,265 B).
> Colours that sheet actually paints: `#c77ff2` ×12, `#e8519e` ×12.
> Faces it actually declares: `Raleway-Bold`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
> The prescribed face `poppins` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens (from screenshot reference)

| Token | Value | Notes |
| --- | --- | --- |
| `--brand-gradient-start` | `#E91E8C` | Hot pink / magenta (left side) |
| `--brand-gradient-end` | `#8B5CF6` | Violet / purple (right side) |
| `--card-bg` | `#FFFFFF` | White card |
| `--text-primary` | `#1A1A2E` | Near-black for headings |
| `--text-label` | `#6B7280` | Gray uppercase labels |
| `--input-border` | `#D1D5DB` | Light gray underline |
| `--input-border-focus` | `#1A1A2E` | Dark underline on focus |
| `--valid-color` | `#10B981` | Green checkmark |
| `--error-color` | `#EF4444` | Red X mark |
| `--button-bg` | `#1A1A2E` | Dark charcoal button |
| `--button-text` | `#FFFFFF` | White button label |
| Font family | `"Poppins", sans-serif` | Assumed from screenshot (sans-serif, geometric) |
| Button shape | Pill / rounded-full | Fully rounded submit button |
| Card shape | Rounded corners | ~12px border-radius, subtle shadow |
| Input style | Underline only | No box border; bottom-border line |

## Visual design notes (screenshot analysis)

- **Background:** Full-viewport linear gradient from hot pink/magenta (left) to
  purple/violet (right). No texture, no pattern — clean smooth gradient.
- **Card:** Centered white rectangle with generous padding, subtle drop shadow,
  rounded corners. Occupies roughly 40–45% of viewport width on desktop.
- **Title:** "Contact Us" in bold, large, dark sans-serif, centered at top of
  card.
- **Form fields:** Labels in small uppercase gray text above each field. Inputs
  have underline-style bottom borders (no box). Fields:
  1. YOUR NAME — split into two columns: first name | last name
  2. EMAIL ADDRESS — single full-width field
  3. PHONE NUMBER — single full-width field
  4. MESSAGE — textarea, taller, placeholder text "Please enter your comments..."
- **Validation:** Inline indicators — green ✓ next to valid fields, red ✗ next
  to invalid fields. These appear to the right of the input.
- **Submit button:** Dark charcoal/black pill-shaped button with white text
  "Submit →" (arrow icon), centered below the form.
- **No navbar, no footer** in the visible design — single-page form only.
- **Typography:** Clean sans-serif, moderate weight, good spacing between fields.

## Requirements

### Feature: Orchid template behaviour

**Background**
- **GIVEN** the user navigates to the Orchid template
- **THEN** the page displays a contact form on a gradient background

#### Scenario: Page layout

- **GIVEN** the page loads
- **THEN** a full-viewport gradient background is visible (pink-to-purple)
- **AND** a centered white card is displayed
- **AND** the card contains the heading "Contact Us"

#### Scenario: Name fields

- **GIVEN** the page loads
- **THEN** a "YOUR NAME" label is visible
- **AND** two side-by-side input fields are shown (first name and last name)
- **AND** both fields have underline-style borders

#### Scenario: Email field

- **GIVEN** the page loads
- **THEN** an "EMAIL ADDRESS" label is visible
- **AND** a single full-width input field is shown with underline border

#### Scenario: Phone field

- **GIVEN** the page loads
- **THEN** a "PHONE NUMBER" label is visible
- **AND** a single full-width input field is shown with underline border

#### Scenario: Message field

- **GIVEN** the page loads
- **THEN** a "MESSAGE" label is visible
- **AND** a textarea is shown with placeholder "Please enter your comments..."
- **AND** the textarea has underline-style border

#### Scenario: Submit button

- **GIVEN** the page loads
- **THEN** a "Submit" button is visible at the bottom of the form
- **AND** the button is dark/charcoal with white text
- **AND** the button has a pill/rounded shape
- **AND** the button displays a right-arrow icon after the text

#### Scenario: Valid field indicator

- **GIVEN** the user enters a valid email address
- **THEN** a green checkmark appears next to the email field

#### Scenario: Invalid field indicator

- **GIVEN** the user enters an invalid phone number
- **THEN** a red X mark appears next to the phone field

#### Scenario: Form submission with empty fields

- **GIVEN** the user clicks Submit without filling any fields
- **THEN** validation error indicators appear on required fields
- **AND** the form is not submitted

#### Scenario: Responsive layout

- **GIVEN** the user views on a mobile device (width < 768px)
- **THEN** the card takes near-full width with horizontal padding
- **AND** the name fields stack vertically instead of side-by-side

## Verification checklist

- [ ] Gradient background renders correctly (pink-to-purple, full viewport)
- [ ] White card is centered with correct padding and shadow
- [ ] "Contact Us" heading is bold and centered
- [ ] All five form fields present with correct labels (uppercase, gray)
- [ ] Name fields are side-by-side on desktop, stacked on mobile
- [ ] All inputs have underline-style borders (no box borders)
- [ ] Textarea has placeholder text
- [ ] Submit button is dark, pill-shaped, with arrow icon
- [ ] Inline validation: green ✓ for valid, red ✗ for invalid
- [ ] Form does not submit when required fields are empty
- [ ] Responsive: card scales properly on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/cf/ContactFrom_v14/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#e91e8c` — nearest `#e8519e` (d=54)
- `#8b5cf6` — nearest `#c77ff2` (d=70)
- `#10b981` — nearest `#00ad5f` (d=39)
- `#ef4444` — nearest `#fa4251` (d=17)
<!-- live-palette-unverified:end -->
