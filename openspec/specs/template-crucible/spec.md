# Template: Crucible (Multi-Step Checkout Wizard)
<!-- prep-status: shipped-as=divine -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-5` design this prep describes already
> ships as `apps/divine` (<https://divine.free.componentdock.com>).
> Do not scaffold `apps/crucible`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-divine/spec.md`.

## Purpose

Recreation of ColorLib **Wizard 5** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page 4-step eCommerce checkout wizard.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-wizard-5/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-5/ (UNREACHABLE — 404; design captured from screenshot only) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui shared components
- **Deploy target:** crucible.free.componentdock.com

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html` — HTTP 200, 9,892 B, title `FormWizard_v5`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-5/css/style.css?v=4559639a` (12,177 B).
> Faces it actually declares: `Poppins-Medium`, `Muli-Bold`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
- **Source design:** ColorLib "Colorlib Wizard 5" — https://colorlib.com/wp/template/colorlib-wizard-5/

## Design Tokens

Extracted from screenshot analysis (live preview unreachable) — **re-probed 2026-10-23: the demo serves** (measured record below): — **re-probed 2026-10-23: the demo serves** (measured record below)

| Token              | Value                  | Usage                                         |
| ------------------ | ---------------------- | --------------------------------------------- |
| Brand primary      | `#F2994A` (orange)     | Progress bar active step, accents             |
| Background page    | `#F2E0D3` (warm beige) | Page background, button fills                 |
| Background bar     | `#E8D4C4` (darker beige)| Bottom decorative bar                        |
| Card background    | `#FFFFFF` (white)      | Form card, input fields                       |
| Text dark          | `#212121` (charcoal)   | Headings, form field values                   |
| Text medium        | `#616161` (gray)       | Form labels, placeholders                     |
| Input border       | `#D9D9D9` (light gray) | Text field borders, select dropdowns          |
| Progress inactive  | `#E0E0E0` (gray)       | Inactive step segments in progress bar        |
| Progress active    | `#F2994A` (orange)     | Active step segment in progress bar           |
| Font primary       | System sans-serif      | All text (clean modern geometric sans)        |
| Button radius      | `8–10px` (rounded)     | Form card corners, input fields               |
| Card shadow        | Subtle drop shadow     | White form card elevation over beige bg       |

## Visual Design (from screenshot)

Warm, minimalist checkout wizard with an earthy palette. Two-column layout inside a centered container: the left side shows a decorative 3D illustration (plant/lamp scene) against the warm beige background, while the right side holds a white elevated form card. A 4-segment progress bar sits at the top of the card — the active step is orange, inactive steps are light gray with rounded corners. The form contains labeled text inputs and a country dropdown. A "Next →" button in the page's beige color advances to the next step. The overall aesthetic is inviting, clean, and modern — designed to feel approachable rather than sterile for eCommerce checkout.

## Section Structure (in order)

1. **Page Layout** — centered container with warm beige (#F2E0D3) background, two-column split layout.
2. **Decorative Illustration Panel** — left column: a 3D illustration (plant, lamp, book, watering can scene) as a placeholder image. Provides visual warmth and personality.
3. **Progress Bar** — 4-segment horizontal bar at the top of the form card. Segments labeled "Billing", "Shipping", "Order Review", "Payment". Active segment is orange (#F2994A), inactive are light gray (#E0E0E0). Segments have rounded corners. Clicking a completed segment jumps back to that step.
4. **Form Card** — white (#FFFFFF) elevated card with rounded corners and subtle shadow. Contains the step-specific form fields. Only the current step's fields are visible.
5. **Step 1: Billing Details** — heading "Billing Details", form fields:
   - First Name * (required text input)
   - Last Name * (required text input)
   - Company Name (optional text input)
   - Country * (required dropdown/select)
   - Street Address * (required text input)
   - Apartment/suite/unit (optional text input)
   - Town/City * (required text input)
   - "Next →" button (beige fill, dark text, right arrow)
6. **Step 2: Shipping Details** — heading "Shipping Details", similar address fields for shipping:
   - First Name * (pre-filled from billing)
   - Last Name * (pre-filled from billing)
   - Company Name
   - Country *
   - Street Address *
   - Apartment/suite/unit
   - Town/City *
   - "Next →" button
7. **Step 3: Order Review** — heading "Order Review", summary of:
   - Product items (name, quantity, price) in a table or list
   - Subtotal, shipping cost, total
   - "Next →" button
8. **Step 4: Payment Details** — heading "Payment Details", form fields:
   - Cardholder Name *
   - Card Number *
   - Expiry Date *
   - CVV *
   - "Place Order" / "Complete" button
9. **Navigation Buttons** — each step has "← Back" (on steps 2–4) and "Next →" / "Complete" buttons at the bottom of the form card.

## Requirements

### Feature: Crucible — 4-Step Checkout Wizard Template

#### Scenario: Page layout and decorative panel render

- **GIVEN** the user loads the page
- **THEN** a centered container with warm beige background is displayed
- **AND** a two-column layout is shown: illustration panel (left) and form card (right)
- **AND** a decorative placeholder illustration appears in the left panel

#### Scenario: Progress bar displays correctly

- **GIVEN** the user loads the page
- **THEN** a 4-segment progress bar is shown at the top of the form card
- **AND** the segments are labeled "Billing", "Shipping", "Order Review", "Payment"
- **AND** the first segment ("Billing") is highlighted in orange (#F2994A)
- **AND** the remaining segments are light gray (#E0E0E0)
- **AND** each segment has rounded corners

#### Scenario: Step 1 — Billing Details form

- **GIVEN** the user is on step 1 (Billing Details)
- **THEN** the heading "Billing Details" is displayed
- **AND** form fields are shown: First Name*, Last Name*, Company Name, Country*, Street Address*, Apartment/suite/unit, Town/City*
- **AND** required fields are marked with an asterisk
- **AND** a "Next →" button is displayed at the bottom
- **AND** clicking "Next" validates required fields before advancing

#### Scenario: Step 2 — Shipping Details form

- **GIVEN** the user completes step 1 and clicks "Next"
- **THEN** the progress bar updates: Billing is complete, Shipping is active (orange)
- **AND** the heading "Shipping Details" is displayed
- **AND** shipping address fields are shown (similar to billing)
- **AND** a "← Back" button is displayed
- **AND** a "Next →" button is displayed
- **AND** clicking "← Back" returns to step 1

#### Scenario: Step 3 — Order Review

- **GIVEN** the user completes step 2 and clicks "Next"
- **THEN** the progress bar updates: Shipping is complete, Order Review is active
- **AND** the heading "Order Review" is displayed
- **AND** a summary of products (name, quantity, price) is shown
- **AND** subtotal, shipping, and total amounts are displayed
- **AND** "← Back" and "Next →" buttons are present

#### Scenario: Step 4 — Payment Details

- **GIVEN** the user completes step 3 and clicks "Next"
- **THEN** the progress bar updates: Order Review is complete, Payment is active
- **AND** the heading "Payment Details" is displayed
- **AND** form fields are shown: Cardholder Name*, Card Number*, Expiry Date*, CVV*
- **AND** "← Back" and "Complete" / "Place Order" buttons are present
- **AND** clicking "Complete" validates payment fields

#### Scenario: Progress bar navigation

- **GIVEN** the user is on step 3
- **WHEN** the user clicks the "Billing" segment in the progress bar
- **THEN** the wizard navigates back to step 1
- **AND** the progress bar updates to show step 1 as active

#### Scenario: Form validation on step advancement

- **GIVEN** the user is on step 1
- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors are displayed on the required fields
- **AND** the wizard does not advance to the next step

#### Scenario: Responsive layout on mobile

- **GIVEN** the user views the page on a mobile device (< 576px)
- **THEN** the two-column layout stacks vertically (illustration above form)
- **AND** the form card fills the full width
- **AND** the progress bar remains visible and functional
- **AND** all form fields are accessible and usable

#### Scenario: Form card styling

- **GIVEN** the user loads the page
- **THEN** the form card has a white background with rounded corners (8–10px)
- **AND** the card has a subtle drop shadow
- **AND** form inputs have light gray borders with rounded corners
- **AND** the "Next" button matches the page background color with dark text

## Verification checklist

- [ ] Two-column layout with illustration panel (left) and form card (right)
- [ ] Progress bar with 4 labeled segments, active = orange, inactive = gray
- [ ] Step 1 Billing Details: 7 form fields (3 required), Next button
- [ ] Step 2 Shipping Details: similar fields, Back + Next buttons
- [ ] Step 3 Order Review: product table, totals, Back + Next buttons
- [ ] Step 4 Payment Details: 4 card fields (all required), Back + Complete buttons
- [ ] Progress bar segments are clickable for backward navigation
- [ ] Form validation prevents advancing without required fields
- [ ] Design tokens applied: #F2994A orange, #F2E0D3 beige bg, white card, system sans-serif font
- [ ] Responsive at 576px (stacked layout), 768px, 992px breakpoints
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos with deterministic seeds

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#f2994a` — nearest `#d9bda3` (d=99)
- `#f2e0d3` — nearest `#f3d4b7` (d=30)
- `#e8d4c4` — nearest `#f3d4b7` (d=17)
<!-- live-palette-unverified:end -->
