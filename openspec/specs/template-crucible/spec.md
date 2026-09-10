# Template: Crucible (Multi-Step Checkout Wizard)

## Purpose

Recreation of ColorLib **Wizard 5** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page 4-step eCommerce checkout wizard.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-wizard-5/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-5/ (UNREACHABLE — 404; design captured from screenshot only)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui shared components
- **Deploy target:** crucible.free.componentdock.com

## Design Tokens

Extracted from screenshot analysis (live preview unreachable):

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

## Gherkin Requirements

### Feature: Crucible — 4-Step Checkout Wizard Template

#### Scenario: Page layout and decorative panel render
- **Given** the user loads the page
- **Then** a centered container with warm beige background is displayed
- **And** a two-column layout is shown: illustration panel (left) and form card (right)
- **And** a decorative placeholder illustration appears in the left panel

#### Scenario: Progress bar displays correctly
- **Given** the user loads the page
- **Then** a 4-segment progress bar is shown at the top of the form card
- **And** the segments are labeled "Billing", "Shipping", "Order Review", "Payment"
- **And** the first segment ("Billing") is highlighted in orange (#F2994A)
- **And** the remaining segments are light gray (#E0E0E0)
- **And** each segment has rounded corners

#### Scenario: Step 1 — Billing Details form
- **Given** the user is on step 1 (Billing Details)
- **Then** the heading "Billing Details" is displayed
- **And** form fields are shown: First Name*, Last Name*, Company Name, Country*, Street Address*, Apartment/suite/unit, Town/City*
- **And** required fields are marked with an asterisk
- **And** a "Next →" button is displayed at the bottom
- **And** clicking "Next" validates required fields before advancing

#### Scenario: Step 2 — Shipping Details form
- **Given** the user completes step 1 and clicks "Next"
- **Then** the progress bar updates: Billing is complete, Shipping is active (orange)
- **And** the heading "Shipping Details" is displayed
- **And** shipping address fields are shown (similar to billing)
- **And** a "← Back" button is displayed
- **And** a "Next →" button is displayed
- **And** clicking "← Back" returns to step 1

#### Scenario: Step 3 — Order Review
- **Given** the user completes step 2 and clicks "Next"
- **Then** the progress bar updates: Shipping is complete, Order Review is active
- **And** the heading "Order Review" is displayed
- **And** a summary of products (name, quantity, price) is shown
- **And** subtotal, shipping, and total amounts are displayed
- **And** "← Back" and "Next →" buttons are present

#### Scenario: Step 4 — Payment Details
- **Given** the user completes step 3 and clicks "Next"
- **Then** the progress bar updates: Order Review is complete, Payment is active
- **And** the heading "Payment Details" is displayed
- **And** form fields are shown: Cardholder Name*, Card Number*, Expiry Date*, CVV*
- **And** "← Back" and "Complete" / "Place Order" buttons are present
- **And** clicking "Complete" validates payment fields

#### Scenario: Progress bar navigation
- **Given** the user is on step 3
- **When** the user clicks the "Billing" segment in the progress bar
- **Then** the wizard navigates back to step 1
- **And** the progress bar updates to show step 1 as active

#### Scenario: Form validation on step advancement
- **Given** the user is on step 1
- **When** the user clicks "Next" without filling required fields
- **Then** validation errors are displayed on the required fields
- **And** the wizard does not advance to the next step

#### Scenario: Responsive layout on mobile
- **Given** the user views the page on a mobile device (< 576px)
- **Then** the two-column layout stacks vertically (illustration above form)
- **And** the form card fills the full width
- **And** the progress bar remains visible and functional
- **And** all form fields are accessible and usable

#### Scenario: Form card styling
- **Given** the user loads the page
- **Then** the form card has a white background with rounded corners (8–10px)
- **And** the card has a subtle drop shadow
- **And** form inputs have light gray borders with rounded corners
- **And** the "Next" button matches the page background color with dark text

## Verification Checklist

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
