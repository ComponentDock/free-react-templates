# Template: FormVolt (Contact Form)

## Purpose

Recreate the ColorLib "Contact Form V3" template as a React + Tailwind CSS component. The original features two side-by-side green gradient contact cards on a nature background — one for "Say Hi" (simple contact) and one for "Get a Quote" (extended with service/budget dropdowns), toggled by radio buttons.

Source: https://colorlib.com/wp/template/contact-form-v3/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/cf/ContactFrom_v3/index.html (HTTP 200, 3,505 B, fetched 2026-10-23) and its theme stylesheet `etc/cf/ContactFrom_v3/css/style.css` (15,136 B, sha256 `8e868ab3f7c3…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#56ab2f` | 8 declarations — `.contact3-form-btn`, `.wrap-contact3` |
| Other chromatic values | `#a8e063`, `#c80000`, `#80c64a` | `#a8e063` × 8 (.wrap-contact3); `#c80000` × 3 (.alert-validate::before); `#80c64a` × 2 (.wrap-contact3) |
| Surface | `#ffffff` | 9 declarations — `.contact3-form-title`, `body` |
| Ink / dark surface | `#212529` | 1 declarations — `body` |
| Typeface | `Poppins-Regular` (5 rules — a)<br>`Poppins-Medium` (2 rules — .contact3-form-btn) | `font-family` declarations in the theme sheet |
| Radii | `2px`, `50%`, `10px` | `2px` (.contact3-form-btn); `50%` (.label-radio3::before); `10px` (.wrap-contact3) |

Palette in order of use: `#ffffff` ×9, `#56ab2f` ×8, `#a8e063` ×8, `#c80000` ×3, `#80c64a` ×2, `#0056b3` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Two contact cards rendered side by side

The template SHALL render two green gradient contact cards centered on the page, stacked vertically on mobile and side by side on desktop.

#### Scenario: Cards render on page load

- **WHEN** the page loads
- **THEN** two contact cards are visible
- **AND** each card has a "CONTACT US" heading

#### Scenario: Cards are responsive

- **WHEN** the viewport is narrow (mobile)
- **THEN** the cards stack vertically
- **AND** when the viewport is wide (desktop), the cards display side by side

### Requirement: Left card defaults to "Say Hi" mode

The left card SHALL default to the "Say Hi" form with Name, Email, and Message fields.

#### Scenario: Left card shows Say Hi form by default

- **WHEN** the page loads
- **THEN** the left card's "Say Hi" radio is selected
- **AND** the left card shows Name, Email, and Message fields
- **AND** the left card does NOT show Needed Services or Budget fields

#### Scenario: Switching left card to Get a Quote shows extended fields

- **WHEN** the user clicks "Get a Quote" radio on the left card
- **THEN** the left card shows Name, Email, Needed Services, Budget, and Message fields

#### Scenario: Switching left card back to Say Hi hides extended fields

- **WHEN** the user clicks "Say Hi" radio on the left card
- **THEN** the left card shows only Name, Email, and Message fields

### Requirement: Right card defaults to "Get a Quote" mode

The right card SHALL default to the "Get a Quote" form with Name, Email, Needed Services, Budget, and Message fields.

#### Scenario: Right card shows Get a Quote form by default

- **WHEN** the page loads
- **THEN** the right card's "Get a Quote" radio is selected
- **AND** the right card shows Name, Email, Needed Services, Budget, and Message fields

#### Scenario: Switching right card to Say Hi shows simple fields

- **WHEN** the user clicks "Say Hi" radio on the right card
- **THEN** the right card shows only Name, Email, and Message fields

### Requirement: Form fields are functional

All form fields SHALL accept user input and the submit button SHALL trigger form submission.

#### Scenario: User can fill and submit the Say Hi form

- **WHEN** the user fills Name, Email, and Message fields
- **AND** clicks the Submit button
- **THEN** the form submits with the entered data

#### Scenario: User can fill and submit the Get a Quote form

- **WHEN** the user fills Name, Email, selects a service and budget, and fills Message
- **AND** clicks the Submit button
- **THEN** the form submits with the entered data including service and budget

#### Scenario: Form shows success state after submission

- **WHEN** the form is submitted
- **THEN** a "Thank You!" message is displayed
- **AND** a "Send Another Message" button appears

#### Scenario: User can reset form after submission

- **WHEN** the user clicks "Send Another Message" after submission
- **THEN** the form resets to empty fields

### Requirement: Footer links to Component Dock

The footer SHALL display a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link opens in a new tab
- **AND** the link text includes "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formvolt/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formvolt/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Two contact cards rendered side by side — two contact cards are visible
- [x] Left card defaults to "Say Hi" mode — the left card's "Say Hi" radio is selected
- [x] Right card defaults to "Get a Quote" mode — the right card's "Get a Quote" radio is selected
- [ ] Form fields are functional — the form submits with the entered data
