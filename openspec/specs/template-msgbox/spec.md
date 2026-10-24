# Template: MsgBox (Contact Form)
<!-- prep-status: shipped-as=touchback -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-12` design this prep describes already
> ships as `apps/touchback` (<https://touchback.free.componentdock.com>).
> Do not scaffold `apps/msgbox`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-touchback/spec.md`.

## Purpose

Recreation of ColorLib "Contact Form 12" — a clean, minimal two-column contact
page with a heading + description + contact info on the left and a simple
general-inquiry form on the right. Bootstrap-inspired flat design on a white
background.

- **Source slug:** `contact-form-12`
- **Source URL:** https://colorlib.com/wp/template/contact-form-12/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-12/ (404 at
  time of prep — design tokens and layout extracted from the ColorLib screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bootstrap/contact-form-12/` — HTTP 200, 8,275 B, title `Contact Form #2`.
>
> Sheet: `https://preview.colorlib.com/theme/bootstrap/contact-form-12/css/style.css?v=42465dea` (13,851 B).
> Faces it actually declares: `Poppins`, `Roboto`, `Segoe UI`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design Tokens

| Token            | Value                    | Usage                                |
| ---------------- | ------------------------ | ------------------------------------ |
| Page background  | `#ffffff` / `#f8f9fa`    | Full-page white or very light gray   |
| Heading color    | `#1a1a2e` / dark         | "Contact Us" heading                 |
| Body text        | `#666666` / gray-500     | Paragraph and description text       |
| Form labels      | `#333333` / gray-700     | Bold small labels above inputs       |
| Input border     | `#dee2e6` / gray-300     | Light gray borders on text fields    |
| Button background| `#2196F3` / `#1a73e8`    | Bright blue "Send Message" button    |
| Button text      | `#ffffff`                | White text on button                 |
| Button radius    | `4px`                    | Slightly rounded rectangle           |
| Icon color       | `#333333` / gray-700     | Contact info icons (pin, phone, mail)|
| Font family      | System sans-serif stack  | -apple-system, BlinkMacSystemFont,   |
|                  |                          | 'Segoe UI', Roboto, sans-serif       |

## Requirements

### Requirement: Page layout

The page renders a centered two-column layout on a white/light background.

#### Scenario: Page rendered

- **WHEN** I visit the MsgBox page
- **THEN** I see a centered container with a "Contact Us" heading

#### Scenario: Two-column layout

- **WHEN** I visit the MsgBox page
- **THEN** the content is split into two columns (left ~40%, right ~60%)

### Requirement: Left column — heading and contact info

The left column contains the page heading, a descriptive paragraph, and
contact information items with icons.

#### Scenario: Heading displayed

- **WHEN** I visit the MsgBox page
- **THEN** I see a large bold "Contact Us" heading in the left column

#### Scenario: Description paragraph

- **WHEN** I visit the MsgBox page
- **THEN** I see a short descriptive paragraph below the heading

#### Scenario: Address info

- **WHEN** I visit the MsgBox page
- **THEN** I see a map-pin icon with "34 Street Name, City Name Here, United States"

#### Scenario: Phone info

- **WHEN** I visit the MsgBox page
- **THEN** I see a phone icon with "+1 (222) 345 6789"

#### Scenario: Email info

- **WHEN** I visit the MsgBox page
- **THEN** I see an envelope icon with "info@mywebsite.com"

### Requirement: Contact form

The right column contains a simple three-field contact form.

#### Scenario: Name field

- **WHEN** I visit the MsgBox page
- **THEN** I see a "Name" label and a text input field

#### Scenario: Email field

- **WHEN** I visit the MsgBox page
- **THEN** I see an "Email" label and a text input field

#### Scenario: Message field

- **WHEN** I visit the MsgBox page
- **THEN** I see a "Message" label and a textarea field (taller than the
  single-line inputs)

#### Scenario: Send button

- **WHEN** I visit the MsgBox page
- **THEN** I see a blue "Send Message" button below the form fields

### Requirement: Footer

The page includes a footer with a Component Dock link.

#### Scenario: Footer rendered

- **WHEN** I visit the MsgBox page
- **THEN** I see a footer containing a link to "Component Dock"

## Verification checklist

- [ ] Two-column layout matches screenshot (left ~40% info, right ~60% form)
- [ ] "Contact Us" heading is large, bold, sans-serif
- [ ] Description paragraph present below heading
- [ ] Address, phone, email info items with icons
- [ ] Name, Email text inputs and Message textarea
- [ ] Blue "Send Message" button with white text
- [ ] White/light background, flat Bootstrap-like aesthetic
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/contact-form-12/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#2196f3` — nearest `#007bff` (d=44)
- `#1a73e8` — nearest `#0069d9` (d=32)
<!-- live-palette-unverified:end -->
