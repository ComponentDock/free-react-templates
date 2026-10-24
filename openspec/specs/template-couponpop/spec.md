# Template: CouponPop (Bootstrap Modal)
<!-- prep-status: shipped-as=couponmodal -->
> **SHIPPED-UNDER** — the ColorLib `modal-04` design this prep describes already
> ships as `apps/couponmodal` (<https://couponmodal.free.componentdock.com>).
> Do not scaffold `apps/couponpop`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-couponmodal/spec.md`.

## Purpose

CouponPop is a coupon modal popup template recreating ColorLib Modal 04.
Source: https://colorlib.com/wp/template/modal-04/
Preview: https://preview.colorlib.com/theme/modal-04/
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

The template displays a centered landing page with a "Launch" button that opens
a modal dialog: a coupon/discount popup with a coupon code, percentage discount,
expiration info, and a "Shop Now" CTA.
- **Source design:** ColorLib "Modal 04" — https://colorlib.com/wp/template/modal-04/

## Design Tokens

Extracted from the ColorLib preview page metadata and screenshot:

| Token              | Value                                  | Source                           |
| ------------------ | -------------------------------------- | -------------------------------- |
| Brand primary      | `#e74c3c` (red)                        | CTA button, discount badge       |
| Body font          | Poppins (300/400/500/600/700)          | Google Fonts link                |
| Accent font        | none (bold weights only)               |                                  |
| Button radius      | rounded (4-8px)                        | Bootstrap `.btn` defaults        |
| Modal radius       | rounded (8-12px)                       | `.modal-content`                 |
| Modal shadow       | `0px 10px 34px -15px rgba(0,0,0,0.24)` | `.modal-content`                 |
| Modal max-width    | ~500px                                 | `.modal-dialog`                  |
| Close button color | `#000`                                 | `.close`                         |
| Background color   | `#fff` (white)                         | `.modal-body`                    |
| Coupon code bg     | `#f8f9fa` (light gray)                 | Coupon code display area         |
| Coupon code border | dashed gray                            | Dashed border around coupon code |

### Visual Design Notes (from TEMPLATES.md screenshot)

The screenshot shows a centered modal with:

- A coupon/discount popup with a bold heading (e.g. "Get 50% OFF")
- A dashed-border coupon code display area with a copy button
- Expiration date text below the coupon
- A "Shop Now" CTA button in red/brand color
- Close button (X) in the top-right corner
- Clean white background with rounded corners and drop shadow

<!-- slug-token-agreement: modal-04/brand -->
> **Cross-prep token conflict, re-measured 2026-10-25.** This prep states the design's brand as `#e74c3c`. The ColorLib `modal-04` design's live assets
> (`https://preview.colorlib.com/theme/bootstrap/modal-04/`, 1 stylesheet fetched — every linked sheet, the inline `<style>` blocks and the `style="…"` attributes) paint that colour **0 times**, in hex notation and in `rgb()`/`rgba()` notation, so it is not on the design.
> The sibling prep `couponmodal` (`openspec/specs/template-couponmodal/spec.md`) states `#12d3cf`, which those assets paint 7 times.
> The `brand` row above is prep history for this role; re-read the declaration that owns the role before painting it, and see `docs/slug-token-agreement.md`.
<!-- /slug-token-agreement -->

## Requirements

### Requirement: Landing page with modal trigger

The template SHALL display a centered landing section with the heading
"CouponPop" and a "Launch Coupon" button that opens the modal dialog.

#### Scenario: Landing renders correctly

- **WHEN** the app loads
- **THEN** the landing section shows the "CouponPop" heading and a "Launch Coupon" button

#### Scenario: Clicking Launch Coupon opens the modal

- **WHEN** the user clicks the "Launch Coupon" button
- **THEN** a modal dialog appears with `aria-modal="true"` and focus is trapped inside

### Requirement: Coupon modal content

The modal SHALL display a coupon popup with a discount heading, a coupon code
in a dashed border box, expiration info, and a "Shop Now" CTA button.

#### Scenario: Modal shows discount heading

- **WHEN** the modal is open
- **THEN** a heading like "Get 50% OFF" is displayed prominently

#### Scenario: Modal shows coupon code

- **WHEN** the modal is open
- **THEN** a coupon code (e.g. "SAVE50") is displayed in a dashed-border box
- **AND** there is a "Copy" button next to the code

#### Scenario: Modal shows expiration info

- **WHEN** the modal is open
- **THEN** an expiration date text is displayed below the coupon code

#### Scenario: Modal shows Shop Now CTA

- **WHEN** the modal is open
- **THEN** a "Shop Now" button is visible using the brand red color

#### Scenario: Modal has rounded corners and drop shadow

- **WHEN** the modal is open
- **THEN** the modal content has border-radius (rounded corners)
- **AND** the modal has a drop shadow

### Requirement: Coupon code copy

The modal SHALL allow the user to copy the coupon code to the clipboard.

#### Scenario: Clicking Copy copies the code

- **WHEN** the user clicks the "Copy" button
- **THEN** the coupon code is copied to the clipboard
- **AND** the button text briefly changes to "Copied!"

### Requirement: Modal dismissal

The modal SHALL be closable via the close button (X icon), pressing Escape, or
clicking the backdrop overlay outside the modal content.

#### Scenario: Close button dismisses modal

- **WHEN** the user clicks the X close button
- **THEN** the modal closes

#### Scenario: Escape key dismisses modal

- **WHEN** the user presses Escape
- **THEN** the modal closes

#### Scenario: Backdrop click dismisses modal

- **WHEN** the user clicks the dark backdrop outside the modal card
- **THEN** the modal closes

#### Scenario: Clicking inside modal does not close it

- **WHEN** the user clicks inside the modal content
- **THEN** the modal remains open

### Requirement: Typography and design fidelity

The template SHALL use Poppins as the body font, matching the original ColorLib design.

#### Scenario: Fonts are loaded correctly

- **WHEN** the app renders
- **THEN** the body text uses Poppins
- **AND** Google Fonts are loaded via `<link>` in `index.html`

### Requirement: Footer with Component Dock link

The template footer SHALL display the site name, a tagline, and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer shows Component Dock link

- **WHEN** the footer renders
- **THEN** a link labeled "More templates at Component Dock" points to
  https://www.componentdock.com/

### Requirement: Responsive layout

The modal SHALL be responsive: on mobile the coupon content stacks vertically.

#### Scenario: Mobile layout stacks content

- **WHEN** the viewport is below 500px
- **THEN** the modal width fits the screen and content stacks vertically

## Verification checklist

- [ ] `npm run verify:app -- couponpop` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 15 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Landing page with modal trigger
      - Coupon modal content
      - Coupon code copy
      - Modal dismissal
      - Typography and design fidelity
      - Footer with Component Dock link
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
