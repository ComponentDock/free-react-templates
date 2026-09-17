# FormLift — Design Notes

Source: ColorLib Contact Form V5
Preview: https://preview.colorlib.com/theme/contact-form-v5/ (404 at prep time)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v5.jpeg

## Section order (top to bottom)

1. Page background (light gray `#f5f5f5`)
2. Centered white card with shadow
3. "Contact Us" heading (bold, centered, dark)
4. Full Name field (text input, uppercase label, placeholder, error state)
5. Email + Phone row (two-column, side by side)
   - Email: checkmark on valid entry
   - Phone: simple text input
6. Needed Services dropdown (select with chevron, "eCommerce Business" default)
7. Product Type radio group (3 options, teal accent, "Physical Products" selected)
8. Budget range slider (teal track, $1,500 - $3,900 range display)
9. Message textarea (taller than inputs, "Your message here..." placeholder)
10. Submit button (full-width, dark pill, "Submit →" label)
11. Footer (Component Dock attribution)

## Structural notes

- Single-page form, no nav bar or header in the original
- Card is vertically centered in viewport
- Form fields use uppercase small labels above each field
- Two-column layout only for Email + Phone row
- All other fields are full-width within the card
- Validation states: error (red text + X icon), success (green checkmark)
- Budget slider is a dual-thumb range slider
- Radio buttons use filled teal circles for selected state
- Submit button is full-width, pill-shaped, dark with white text + arrow

## Fidelity notes

- Match the exact label casing: "FULL NAME", "EMAIL", "PHONE", "NEEDED SERVICES",
  "WHAT TYPE OF PRODUCTS DO YOU SELL?", "BUDGET", "MESSAGE"
- Match the exact placeholder text values
- Match the two-column Email + Phone layout
- Match the teal accent color (#1abc9c) for radio buttons and slider
- Match the dark charcoal (#333333) submit button with pill shape
- Match the uppercase, small, letter-spaced label style
- Use Poppins font family
- Include validation states (error on empty name, success check on valid email)
- The budget slider should show formatted range text above the slider
