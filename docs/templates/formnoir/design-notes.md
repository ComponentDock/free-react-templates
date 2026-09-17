# FormNoir — Design Notes & Task Outline

Source: ColorLib Contact Form V14
Preview: https://preview.colorlib.com/theme/contact-form-v14/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Full-page gradient background** — pink (#e84393) to purple (#a855f7), 135° diagonal
2. **Centered white card** — rounded corners, subtle shadow, max-width ~600px
   - Title: "Contact Us" — bold, centered, dark text
   - Form fields:
     - YOUR NAME * — two inputs side by side (first name, last name)
     - EMAIL ADDRESS * — single full-width input
     - PHONE NUMBER * — single full-width input
     - MESSAGE * — tall textarea
   - Submit button: dark pill shape, "Submit →" with arrow icon
   - Validation indicators: green checkmark (✓) for valid, red X (✗) + red border for invalid
3. **Footer** — Component Dock link

## Structure details

### Gradient background
- Full viewport gradient from warm pink (#e84393) at bottom-left to purple (#a855f7) at top-right
- 135° angle (CSS: `linear-gradient(135deg, #e84393, #a855f7)`)
- Covers full page; card sits on top

### White card
- White background (#FFFFFF)
- Border-radius: ~8–12px (rounded corners)
- Box-shadow: subtle, spread outward (`0 10px 40px rgba(0,0,0,0.1)`)
- Max-width: ~600px, centered horizontally and vertically
- Padding: ~40px internal

### Form heading
- "Contact Us" — bold, dark (#2d3436), Poppins sans-serif
- Centered at top of card
- Font-size: ~24–28px

### Form fields
- All labels: uppercase, small (11–12px), gray (#636e72), positioned above inputs
- Required asterisk (*) after label text
- Input style: full border (not underline), light gray border (#dfe6e9)
- Input background: white
- Padding inside inputs: ~12px horizontal, ~10px vertical
- Focus state: blue border (#0984e3)
- Error state: red border (#d63031) + red X indicator

### Name fields row
- Two inputs in a flex row (50/50 split)
- First name and last name side by side
- Each with its own label ("YOUR NAME *")

### Validation indicators
- Positioned to the right of each input field
- Green checkmark (✓) in #00b894 when field is valid
- Red X (✗) in #d63031 when field is invalid
- Displayed only after user interaction (blur/submit)

### Submit button
- Dark background (#2d3436, nearly black)
- White text, Poppins sans-serif, 15px
- Fully rounded pill shape (border-radius: 9999px)
- Padding: ~12px 32px
- Right-arrow icon (→ or lucide-react ArrowRight) after "Submit" text
- Centered below the form fields
- Hover: slightly lighter dark (#3d4449)

## Fidelity notes

- Match the gradient: 135° pink-to-purple, not horizontal or vertical
- Match the card: white, centered, rounded, shadowed — the focal point
- Match the "Contact Us" heading: bold, dark, centered
- Match the field layout: name fields side by side, others full width
- Match the uppercase labels with asterisk for required
- Match the dark pill submit button with arrow icon
- Match the validation indicators (checkmark/X) to the right of inputs
- Match the error state: red border + red X
- Use Poppins for all typography (Google Fonts)
- Use placeholder images from picsum.photos if needed (not expected for this template)
- Footer MUST link to https://www.componentdock.com/

## Component plan

- `src/App.tsx` — compose page with gradient background + card
- `src/components/GradientBackground.tsx` — full-page gradient wrapper
- `src/components/ContactCard.tsx` — centered white card
- `src/components/ContactForm.tsx` — form with all fields + submit
- `src/components/NameRow.tsx` — side-by-side first/last name inputs
- `src/components/FormInput.tsx` — reusable input with label, validation indicator
- `src/components/FormTextarea.tsx` — message textarea with label
- `src/components/SubmitButton.tsx` — dark pill button with arrow icon
- `src/components/ValidationIndicator.tsx` — checkmark or X icon
- `src/components/Footer.tsx` — Component Dock link

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Font (Poppins) in index.html
- [ ] Create GradientBackground component (full-page 135° pink-to-purple)
- [ ] Create ContactCard component (white, centered, rounded, shadowed)
- [ ] Create ContactForm component (heading + all fields + submit)
- [ ] Create FormInput component (label, input, validation indicator)
- [ ] Create FormTextarea component (label, textarea, validation indicator)
- [ ] Create NameRow component (two side-by-side inputs)
- [ ] Create SubmitButton component (dark pill with arrow)
- [ ] Create ValidationIndicator component (checkmark / X)
- [ ] Create Footer component (Component Dock link)
- [ ] Wire up form validation (required fields, email format, blur validation)
- [ ] Style with Tailwind: gradient, card, inputs, button, responsive
- [ ] Add responsive layout (mobile full-width card, desktop centered)
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
