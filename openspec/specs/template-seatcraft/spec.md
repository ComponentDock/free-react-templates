# Template: Seatcraft (Table Booking Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 7" — a multi-step restaurant table booking form (3-step wizard) for food and restaurant businesses. Features a dark charcoal form panel overlapping a high-end food photograph, with guest count, date, and time selectors. Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-7/ (returns 404 at prep time; design based on screenshot reference and ColorLib listing page). Source slug: `colorlib-wizard-7`.

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

## Gherkin Requirements

### Feature: Restaurant Table Booking Wizard

#### Scenario: Page Load and Layout
  Given the user loads the booking page
  When the page renders
  Then a centered booking widget is displayed on a white background
  And a high-end food photograph occupies the left/center area
  And a dark charcoal form panel overlaps the image on the right
  And the overall aesthetic is luxury minimalist fine-dining

#### Scenario: Step 1 — Guest & Time Details
  Given the user is on step 1 of the wizard
  When step 1 is displayed
  Then the title "BOOK A TABLE" is shown at the top of the form panel in white bold uppercase
  And a decorative subtitle "~ Check out our place ~" is shown in warm gold script font
  And the "People" selector is displayed (dropdown, default value "1")
  And the "Date" field is displayed (showing current/selected date in format "14 MAR 2021")
  And the "Time" field shows dual dropdowns for start/end time (e.g. "9 AM" — "7 PM")
  And a "NEXT" ghost button is shown at the bottom (white border, white text, transparent fill)
  And a step indicator "1/3" is displayed at the bottom right

#### Scenario: Guest Count Selection
  Given the user is on step 1
  When the user clicks the "People" dropdown
  Then a list of guest count options is presented
  And the user can select a number of guests (1–10+)
  And the selected value updates in the People field

#### Scenario: Date Selection
  Given the user is on step 1
  When the user interacts with the Date field
  Then a date picker or dropdown allows selecting a reservation date
  And the selected date is displayed in the field (e.g. "14 MAR 2021")

#### Scenario: Time Range Selection
  Given the user is on step 1
  When the user interacts with the Time field
  Then dual time dropdowns allow selecting a start and end time
  And the selected time range is displayed (e.g. "9 AM" — "7 PM")

#### Scenario: Step 1 to Step 2 Navigation
  Given the user has filled the guest, date, and time fields on step 1
  When the user clicks "NEXT"
  Then step 2 content is displayed
  And the step indicator updates to "2/3"
  And the form panel transitions smoothly to show step 2 fields

#### Scenario: Step 2 Content
  Given step 2 is displayed
  When the wizard shows step 2
  Then a contact information section is shown (name, email, phone)
  And a back/previous action is available to return to step 1
  And the "NEXT" button advances to step 3

#### Scenario: Step 3 Confirmation
  Given step 3 is displayed
  When the wizard shows step 3
  Then a booking summary/review is displayed (guest count, date, time, contact info)
  And a "CONFIRM" or "BOOK NOW" button is shown
  And clicking it shows a success confirmation

#### Scenario: Step Indicator Updates
  Given the wizard has multiple steps
  When the user navigates between steps
  Then the step indicator text updates (1/3, 2/3, 3/3)
  And the current step content is visible while other steps are hidden

#### Scenario: Step Navigation Back
  Given the user is on step 2 or 3
  When the user clicks a back action
  Then the wizard returns to the previous step
  And previously entered data is preserved
  And the step indicator updates accordingly

#### Scenario: Responsive Layout
  Given the user views the wizard on a mobile device
  When the viewport is narrow
  Then the form panel stacks vertically above or below the food image
  And the overlap effect is simplified or removed
  And form elements remain tappable (minimum 44px touch targets)
  And the "NEXT" button spans full width

#### Scenario: Keyboard Accessibility
  Given the wizard is displayed
  When the user navigates with keyboard
  Then all form fields are focusable with visible focus rings
  And the tab order follows logical field sequence
  And dropdowns and buttons are operable via Enter/Space
  And the step indicator is announced for screen readers

## Verification Checklist

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
