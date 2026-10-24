# Template: Seatcraft (Table Booking Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 7" — a multi-step restaurant table booking form (3-step wizard) for food and restaurant businesses. Features a dark charcoal form panel overlapping a high-end food photograph, with guest count, date, and time selectors. Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-7/ (returns 404 at prep time; design based on screenshot reference and ColorLib listing page) — **re-probed 2026-10-23: the demo serves** (measured record below). Source slug: `colorlib-wizard-7`.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html` — HTTP 200, 10,359 B, title `FormWizard_v7`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-7/css/style.css?v=7973a996` (8,628 B).
> Faces it actually declares: `Raleway-Bold`, `Satisfy-Regular`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step reservation wizard with date/time pickers, guest count selector, step indicator, and dark elegant restaurant aesthetic.

## Design Tokens (from screenshot reference)

| Token | Value | Source |
|-------|-------|--------|
| Page background | `#FFFFFF` (white) | Screenshot analysis |
| Form panel background | `#333333` (dark charcoal) | Dark form overlay |
| Form panel border | `#666666` (medium gray, thin) | Panel edge |
| Title text ("BOOK A TABLE") | `#FFFFFF` (white, bold, uppercase) | Form header |
| Subtitle text ("~ Check out our place ~") | `#C2955B` (warm gold/ochre) | Accent script text |
| Subtitle font | Script/handwritten style (e.g. `'Dancing Script', cursive`) | Decorative heading |
| Body font | Sans-serif (e.g. `'Poppins', sans-serif`) | Clean form text |
| Form labels (People, Date, Time) | `#999999` (light gray, small) | Input labels |
| Form input values | `#FFFFFF` (white) | Selected values |
| Next button style | Ghost/outline — white border + white text, transparent fill | CTA |
| Step indicator text | `#FFFFFF` (white, small) | Progress marker |
| Food image backdrop | Dark/moody editorial photography | Hero imagery |

<!-- role-rule-tokens: colorlib-wizard-7/typeface -->
**Role rule (measured 2026-10-25):** 1 rule(s) own typeface; strongest `body{font-family:"Raleway-Regular"}` — the design declares `Raleway`; this prep states `Poppins`, which no rule that owns the body typeface declares. The sibling prep `tablenook` states the measured value.
<!-- /role-rule-tokens -->

## Requirements

### Feature: Restaurant Table Booking Wizard

#### Scenario: Page Load and Layout

- **GIVEN** the user loads the booking page
- **WHEN** the page renders
- **THEN** a centered booking widget is displayed on a white background
- **AND** a high-end food photograph occupies the left/center area
- **AND** a dark charcoal form panel overlaps the image on the right
- **AND** the overall aesthetic is luxury minimalist fine-dining

#### Scenario: Step 1 — Guest & Time Details

- **GIVEN** the user is on step 1 of the wizard
- **WHEN** step 1 is displayed
- **THEN** the title "BOOK A TABLE" is shown at the top of the form panel in white bold uppercase
- **AND** a decorative subtitle "~ Check out our place ~" is shown in warm gold script font
- **AND** the "People" selector is displayed (dropdown, default value "1")
- **AND** the "Date" field is displayed (showing current/selected date in format "14 MAR 2021")
- **AND** the "Time" field shows dual dropdowns for start/end time (e.g. "9 AM" — "7 PM")
- **AND** a "NEXT" ghost button is shown at the bottom (white border, white text, transparent fill)
- **AND** a step indicator "1/3" is displayed at the bottom right

#### Scenario: Guest Count Selection

- **GIVEN** the user is on step 1
- **WHEN** the user clicks the "People" dropdown
- **THEN** a list of guest count options is presented
- **AND** the user can select a number of guests (1–10+)
- **AND** the selected value updates in the People field

#### Scenario: Date Selection

- **GIVEN** the user is on step 1
- **WHEN** the user interacts with the Date field
- **THEN** a date picker or dropdown allows selecting a reservation date
- **AND** the selected date is displayed in the field (e.g. "14 MAR 2021")

#### Scenario: Time Range Selection

- **GIVEN** the user is on step 1
- **WHEN** the user interacts with the Time field
- **THEN** dual time dropdowns allow selecting a start and end time
- **AND** the selected time range is displayed (e.g. "9 AM" — "7 PM")

#### Scenario: Step 1 to Step 2 Navigation

- **GIVEN** the user has filled the guest, date, and time fields on step 1
- **WHEN** the user clicks "NEXT"
- **THEN** step 2 content is displayed
- **AND** the step indicator updates to "2/3"
- **AND** the form panel transitions smoothly to show step 2 fields

#### Scenario: Step 2 Content

- **GIVEN** step 2 is displayed
- **WHEN** the wizard shows step 2
- **THEN** a contact information section is shown (name, email, phone)
- **AND** a back/previous action is available to return to step 1
- **AND** the "NEXT" button advances to step 3

#### Scenario: Step 3 Confirmation

- **GIVEN** step 3 is displayed
- **WHEN** the wizard shows step 3
- **THEN** a booking summary/review is displayed (guest count, date, time, contact info)
- **AND** a "CONFIRM" or "BOOK NOW" button is shown
- **AND** clicking it shows a success confirmation

#### Scenario: Step Indicator Updates

- **GIVEN** the wizard has multiple steps
- **WHEN** the user navigates between steps
- **THEN** the step indicator text updates (1/3, 2/3, 3/3)
- **AND** the current step content is visible while other steps are hidden

#### Scenario: Step Navigation Back

- **GIVEN** the user is on step 2 or 3
- **WHEN** the user clicks a back action
- **THEN** the wizard returns to the previous step
- **AND** previously entered data is preserved
- **AND** the step indicator updates accordingly

#### Scenario: Responsive Layout

- **GIVEN** the user views the wizard on a mobile device
- **WHEN** the viewport is narrow
- **THEN** the form panel stacks vertically above or below the food image
- **AND** the overlap effect is simplified or removed
- **AND** form elements remain tappable (minimum 44px touch targets)
- **AND** the "NEXT" button spans full width

#### Scenario: Keyboard Accessibility

- **GIVEN** the wizard is displayed
- **WHEN** the user navigates with keyboard
- **THEN** all form fields are focusable with visible focus rings
- **AND** the tab order follows logical field sequence
- **AND** dropdowns and buttons are operable via Enter/Space
- **AND** the step indicator is announced for screen readers

## Verification checklist

- [ ] Centered booking widget renders on white background
- [ ] High-end food photograph is displayed as left/center background
- [ ] Dark charcoal form panel overlaps image on the right
- [ ] "BOOK A TABLE" title in white bold uppercase at top of panel
- [ ] Gold script subtitle "~ Check out our place ~" below title
- [ ] People dropdown with guest count selector (default "1")
- [ ] Date picker field showing formatted date
- [ ] Dual time range dropdowns (start/end)
- [ ] "NEXT" ghost button (white border + text, transparent)
- [ ] Step indicator "1/3" at bottom right
- [ ] Multi-step navigation (step 1 → 2 → 3) works
- [ ] Step 2 shows contact fields (name, email, phone)
- [ ] Step 3 shows booking summary + confirm button
- [ ] Back navigation preserves entered data
- [ ] Responsive layout on mobile (stacked vertical)
- [ ] Keyboard accessible (focus rings, tab order, Enter/Space)
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#c2955b` — nearest `#cdaa7c` (d=41)
<!-- live-palette-unverified:end -->
