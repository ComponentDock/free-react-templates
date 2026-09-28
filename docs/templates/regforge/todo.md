# Regforge — Implementation Todo

**Source:** ColorLib Regform 8
**Preview:** https://colorlib.com/etc/regform/colorlib-regform-8/
**New name:** regforge

## Structure order

1. Full-viewport background image section
2. Centered white card (660px max-width)
   - h2 "Create account" (uppercase, centered)
   - Text input: "Your Name"
   - Email input: "Your Email"
   - Text input: "Password" + eye toggle icon
   - Password input: "Repeat your password"
   - Custom checkbox: "I agree all statements in Terms of service"
   - Gradient "Sign up" button (full-width)
   - Login link paragraph

## Component breakdown

- `App.tsx` — single section wrapper with background image
- `components/SignupCard.tsx` — white card container
- `components/SignupForm.tsx` — form with inputs, checkbox, submit
- `components/EyeToggle.tsx` — password visibility toggle (eye/eye-off icons via lucide-react)
- `components/CheckboxField.tsx` — custom styled checkbox with label
- `components/Footer.tsx` — Component Dock attribution

## Design notes

- **Gradient theme:** `#9face6` (soft blue/periwinkle) ↔ `#74ebd5` (mint/teal)
  - Input focus border: blue-to-teal (left-to-right)
  - Submit button: teal-to-blue (left-to-right, reversed)
- **Font:** Montserrat (Google Fonts) — weights 400, 500, 600, 700
- **Card:** white, 10px radius, 50px 85px padding → 50px 25px on mobile
- **Inputs:** 1px solid #ebebeb border, 5px radius, 17px 20px padding, #999 placeholders
- **Background:** full-viewport image (center, cover) — use picsum.photos placeholder
- **Responsive:** container → calc(100% - 40px) at ≤768px; card padding → 50px 25px at ≤480px
- **No external images** — use placeholder URLs; no ColorLib references in code

## Fidelity checklist

- [ ] Match exact gradient colors (#9face6, #74ebd5)
- [ ] Match Montserrat font weights (400, 500, 600, 700)
- [ ] Match card dimensions (660px, 10px radius, 50px 85px padding)
- [ ] Match input styling (border, radius, padding, placeholder color)
- [ ] Implement eye toggle for password field (lucide-react Eye/EyeOff)
- [ ] Match submit button gradient and typography
- [ ] Match terms checkbox styling (13px box, 2px radius)
- [ ] Match login link spacing (margin-top: 91px)
- [ ] Responsive breakpoints at 768px and 480px
- [ ] Footer with Component Dock link (no ColorLib branding)
