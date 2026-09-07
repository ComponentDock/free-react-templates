# BookCraft — Implementation Tasks & Design Notes

## Source Mapping

- **ColorLib source:** Colorlib Wizard 26
- **Source slug:** `colorlib-wizard-26`
- **Preview URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-26/index.html
- **New name:** `bookcraft`
- **Category:** Bootstrap Wizard Templates / Form Booking Wizard

## Structure Order (top to bottom)

1. Page wrapper — full viewport, `#383a4f` background, flexbox centered column
2. Page heading — "Form Booking Wizard", white, bold, 30px, padding-top 85px
3. Wizard card — 910px width, `#525575` background, 10px radius, shadow
4. Step indicator row — 3 white cards in flex row, each with icon + label
5. Form content area — padding 0 50px
6. Step 1: Personal Info
   - Section heading "Personal Info" + "1/3" counter
   - Row: First Name + Last Name (floating labels)
   - Row: Phone Number + E-Mail (floating labels)
   - Row: Date of Birth (3 small selects: day, month, year)
   - Row: Address Location (full width, floating label)
7. Step 2: Booking Information
   - Section heading "Booking Information" + "2/3" counter
   - Booking image (placeholder via picsum)
   - Row: Choose a Room (full width select, teal label)
   - Row: Organization Day + Time Open (side by side, teal labels)
8. Step 3: Confirm Details
   - Section heading "Confirm Details" + "3/3" counter
   - Summary table (block layout): Full Name, Room, Day, Time, Price
9. Navigation bar — centered, Previous/Next buttons

## Section-by-Section Fidelity Notes

### Step Indicator

- Original uses white card-like step indicators (not circles like Wizard 25)
- Each step card has a colored icon square (left side, no border-radius on left) + text label
- Active/done: `#55e8d5` background on icon
- Inactive: `#ccc` background on icon
- Step text: `#333`, 16px
- Cards have 5px border-radius, shadow on icon

### Form Fields

- Floating label pattern: label sits inside input, floats up on focus/valid
- Labels animate with CSS transition (scale 0.9, translateY -34px)
- Label color transitions to `#55e8d5` on focus
- Input: transparent background, bottom border only (`rgba(255,255,255,0.3)`)
- Input text: white, 16px
- Placeholder: white (slightly transparent feel)

### Step 2 Specifics

- Labels for booking fields use a different style: `#55e8d5`, 14px, weight 600
- Select dropdowns have custom chevron icon overlay
- Date input uses text field with placeholder format "15 / 08 / 2018"
- Booking image shown above fields (hide on mobile)

### Confirmation Table

- Not a traditional table — rows are blocks
- Header text: `rgba(255,255,255,0.5)`, 16px, weight 400
- Value text: `#55e8d5`, 18px, weight 700
- Each row has bottom padding 25px

### Navigation

- Previous button hidden on step 1
- Buttons are 150px × 45px, centered, 5px radius
- Background: `#43ccba` (slightly different teal than step icon `#55e8d5`)
- Hover: `#32998b`
- Text: white, 16px, weight 600

### Responsive Breakpoints

- ≤991px: card width 90%, step labels stack vertically
- ≤576px: fields stack full width, date selects full width, image hidden, counter hidden

## Implementation Notes

- Use `packages/ui` components where possible (Button, cn utility)
- Floating labels can be implemented with CSS peer utilities or a small wrapper component
- Step state management: React state for current step + form data
- Confirmation table values derived from form state
- No ColorLib references in any app code
- Footer must link to https://www.componentdock.com/
- Use `https://picsum.photos/seed/bookcraft-<n>/<w>/<h>` for placeholder images
- Font: Google Fonts Open Sans via `<link>` in index.html
