# Template: ModalOffer (Modal)

## Purpose

Recreation of the ColorLib "Modal V18" template — a free offer with CTA modal for promoting exclusive offers, deals, and projects.

- **Source:** [ColorLib Modal 18](https://colorlib.com/wp/template/modal-18/)
- **Preview:** https://preview.colorlib.com/theme/modal-18/ (404 at time of prep — using page analysis)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-18.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the template page analysis and screenshot:

| Token            | Value                             | Notes                     |
| ---------------- | --------------------------------- | ------------------------- |
| Layout           | Centered modal with promo content | Single-column, focused    |
| Modal background | White (#ffffff)                   | Clean, minimal            |
| Accent color     | Orange/amber (#ff6b35)            | CTA button, highlights    |
| Headline font    | Bold, dark                        | Strong visual hierarchy   |
| Body text        | Gray (#666666)                    | Readable, subdued         |
| CTA button       | Orange (#ff6b35)                  | Rounded, prominent        |
| Button text      | White (#ffffff)                   | Bold                      |
| Close button     | Top-right corner                  | X icon                    |
| Modal shadow     | Deep shadow                       | Elevated appearance       |
| Modal corners    | Rounded                           | ~12px radius              |
| Image            | Promo/offer image                 | Top section or background |

## Visual Design

From the screenshot: A centered modal with a promotional offer layout. The modal features a headline like "Special Offer" or "Limited Time Deal", a promotional image or graphic, descriptive text about the offer, and a prominent orange CTA button. The design is clean and focused on conversion, with visual hierarchy guiding the eye from headline to image to CTA. The overall aesthetic is modern, urgent, and conversion-oriented.

## Requirements

### Feature: ModalOffer template behaviour

**Background**

- **GIVEN** the page loads with a modal overlay
- **WHEN** the viewport is displayed
- **THEN** the modal is centered in the viewport
- **AND** the modal has a promotional offer layout

#### Scenario: Modal displays offer content

- **GIVEN** the modal is open
- **WHEN** the user views the modal
- **THEN** a headline (e.g., "Special Offer") is visible
- **AND** a promotional image or graphic is displayed
- **AND** descriptive text about the offer is shown
- **AND** a CTA button is prominently displayed

#### Scenario: CTA button interaction

- **GIVEN** the modal is open
- **WHEN** the user clicks the CTA button
- **THEN** the button shows a hover state (darker orange)
- **AND** the click triggers the intended action (e.g., navigation, form)

#### Scenario: Modal closes on close button click

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal closes with a fade-out animation
- **AND** the page content is visible again

#### Scenario: Modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** the user clicks the dark backdrop area outside the modal
- **THEN** the modal closes
- **AND** the page content is visible again

#### Scenario: Modal closes on Escape key

- **GIVEN** the modal is open
- **WHEN** the user presses the Escape key
- **THEN** the modal closes
- **AND** the page content is visible again

#### Scenario: Accessibility - modal focus trap

- **GIVEN** the modal is open
- **WHEN** the user presses Tab repeatedly
- **THEN** focus stays trapped within the modal
- **AND** focus cycles through CTA button and close button

#### Scenario: Accessibility - aria attributes

- **GIVEN** the modal is rendered
- **THEN** the modal container has `role="dialog"`
- **AND** the modal has `aria-labelledby` pointing to the headline
- **AND** the modal has `aria-hidden="true"` when closed
- **AND** the close button has `aria-label="Close"`

#### Scenario: Responsive layout

- **GIVEN** the page is viewed on a mobile viewport (375px width)
- **THEN** the modal scales appropriately
- **AND** the CTA button remains prominent
- **AND** the close button remains accessible

#### Scenario: Design token verification

- **GIVEN** the page is rendered
- **THEN** the modal background is white
- **AND** the CTA button color is orange (#ff6b35)
- **AND** the button text is white
- **AND** the modal has rounded corners

## Verification checklist

- [ ] `npm run verify:app -- modaloffer` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 9 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - ModalOffer template behaviour
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
