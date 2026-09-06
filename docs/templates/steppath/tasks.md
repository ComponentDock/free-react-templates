# StepPath — Implementation Tasks & Design Notes

**Source:** ColorLib Wizard 5
**New name:** steppath
**Preview:** https://preview.colorlib.com/theme/colorlib-wizard-5/ (unreachable)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg

## Structure order (section-by-section)

1. **Page background** — warm beige (#e6d2b4) fills entire viewport
2. **Wizard card** — centered white/beige card with rounded corners and shadow
3. **Step indicator** — 4-step progress bar at top of card (dots or numbered circles with connecting lines)
4. **Illustration / hero area** — decorative image or illustration below progress (optional, based on screenshot)
5. **Form content area** — step-specific form fields
6. **Navigation buttons** — Back / Next / Submit at bottom of card

## Fidelity notes

### Page background

- Warm beige (#e6d2b4) fills the entire viewport
- No other content on the page — the wizard IS the page

### Wizard card

- Slightly lighter beige (#e8ceb3 → #ebd5bb) background
- Rounded corners (~8px)
- Subtle drop shadow
- Max-width ~600px on desktop, full-width with padding on mobile
- Centered horizontally and vertically

### Step indicator

- 4 steps displayed as numbered circles or dots
- Connected by horizontal lines
- Active step: highlighted in teal (#d2e6e6) or golden (#d2be64)
- Completed steps: filled/checkmarked
- Inactive steps: muted gray or beige

### Illustration area (if present)

- Decorative illustration between progress and form
- Contains green, teal, and brown tones
- Can use a placeholder image or simple SVG illustration

### Step 1: Personal Information

- Full Name (text input)
- Email (email input)
- Phone Number (tel input)
- "Next" button at bottom

### Step 2: Address Details

- Street Address (text input)
- City (text input)
- State (text input or select)
- Zip Code (text input)
- "Back" and "Next" buttons

### Step 3: Payment Information

- Card Number (text input with formatting)
- Expiry Date (text input, MM/YY)
- CVV (text input)
- "Back" and "Next" buttons

### Step 4: Confirmation

- Summary of all entered data in a read-only view
- Edit links for each section
- "Back" and "Submit" / "Place Order" button

### Navigation buttons

- Golden/amber (#d2be64) background, dark text (#3c320a)
- Rounded corners (~4px)
- Padding for comfortable click target
- Hover: slightly darker gold (#d2b45a)
- "Back" button: secondary style (outline or lighter)
- "Next" / "Submit": primary style (solid gold)

### Form validation

- Required field validation on "Next" click
- Error messages displayed below invalid fields
- Red/error border on invalid inputs
- Data preserved when navigating back

## Component outline

```
src/
  App.tsx                — renders StepPath wizard
  components/
    WizardCard.tsx       — centered card container with background
    StepIndicator.tsx    — 4-step progress bar with dots/lines
    StepOne.tsx          — personal information form
    StepTwo.tsx          — address details form
    StepThree.tsx        — payment information form
    StepFour.tsx         — confirmation/review summary
    NavigationButtons.tsx — Back/Next/Submit buttons
    useWizardState.ts    — hook managing current step + form data + validation
```

## Dependencies

- lucide-react (for checkmark, arrow, edit icons)
- packages/ui (cn utility)
- No new external dependencies needed
