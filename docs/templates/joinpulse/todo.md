# JoinPulse — Prep Notes

## Source

- **ColorLib slug:** signup-form-10
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/signup-form-10/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-10.jpg
- **Category:** Registration Forms

## Structure Order

1. Page wrapper (white bg, vertical padding)
2. Container row (3 columns on desktop: social | divider | form)
3. Left col: "Or register with" + social buttons (Facebook, Twitter, Google)
4. Center col: "— or —" divider
5. Right col: form block (white card, shadow)
   - Heading "Register"
   - Paragraph subtext
   - Name input (floating label)
   - Email input (floating label)
   - Password input (floating label)
   - Re-type Password input (floating label)
   - Terms checkbox + "Sign In" link row
   - Pill-shaped Register button (full-width, teal)

## Section-by-Section Fidelity Notes

### Social Login
- Three full-width stacked buttons with brand colors
- Facebook: #3b5998, Twitter: #1da1f2, Google: #ea4335
- White SVG icons centered in each button
- Use lucide-react icons or inline SVGs for social icons

### Divider
- Simple "— or —" text, centered, muted color
- Vertical centering on desktop via flexbox align-items-center

### Form Block
- White card with `box-shadow: 0 2px 3px 0 rgba(0,0,0,0.1)`
- 30px padding
- Floating label pattern: label positioned absolutely at 50% Y, transitions up on focus/filled

### Form Inputs
- Bottom-border-only style (`border: none; border-bottom: 1px solid #ccc`)
- Transparent background, 20px font size
- First group: `border-top-left-radius: 7px; border-top-right-radius: 7px`
- Last group: `border-bottom-left-radius: 7px; border-bottom-right-radius: 7px`

### Register Button
- Pill-shaped (`border-radius: 30px`)
- Teal background (#38d39f), white text
- Full-width (`cl-btn-block`)
- Hover: darker teal (#29bb8a)

### Checkbox + Sign In
- Custom checkbox with teal accent when checked
- "Terms and Conditions" text links to `#`
- "Sign In" link aligned right in same row, gray (#888)

## Key Differences from SignupWave (Signup Form 06)

- This template uses a LEFT-aligned layout (form on right, social on left)
- No background image panel (pure white layout)
- Uses bottom-border-only inputs (not standard bordered inputs)
- Uses #38d39f teal as brand primary (not #007bff blue)
- Pill-shaped Register button (border-radius: 30px)
- Different floating label animation pattern

## Implementation Notes

- Create `apps/joinpulse/` from a simple existing app copy
- Floating labels need controlled inputs + state tracking for empty/filled
- Social buttons are full-width stacked, not horizontal
- Form column on right side of the row (col-lg-5)
- Social column on left side (col-lg-5)
- Divider in center (col-lg-2)
- Responsive: all columns full-width and stacked on mobile
