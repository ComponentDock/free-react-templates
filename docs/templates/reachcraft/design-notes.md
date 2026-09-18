# Reachcraft — Design Notes & Task Outline

Source: ColorLib Contact Form V15
Preview: https://preview.colorlib.com/theme/contact-form-v15/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Full-page map background** — dark grayscale map covering entire viewport
2. **Centered form card** — floating white card with subtle shadow
   - Banner header (green overlay on photo)
   - Form fields (underline style, stacked)
   - Submit button (green pill)
3. **Footer** — Component Dock link

## Structure details

### Map background
- Full-viewport background: dark grayscale map image
- Use a static map tile or placeholder image with dark overlay
- CSS: `bg-cover bg-center` with a semi-transparent dark layer

### Card header banner (~120px tall)
- Photo of a workspace/desk scene with green-tinted overlay
- "Contact Us" — large white bold text, centered, ~28px
- "Feel free to drop us a line below!" — smaller white text, centered, ~14px
- Green overlay: `#4CAF50` with ~60% opacity
- Use `picsum.photos/seed/reachcraft-banner/800/200` for placeholder

### Form section (white background, ~350px)
- Four fields stacked vertically:
  1. Full Name — label "Full Name:", underline input, placeholder "Join Doe"
  2. Email — label "Email:", underline input, placeholder "Enter email address"
  3. Phone — label "Phone:", underline input, placeholder "Enter phone number"
  4. Message — label "Message:", textarea, placeholder "Your Comments..."
- Labels: small, dark gray (#333), left-aligned, with colon
- Inputs: underline style (bottom border only), no background
- Placeholder text: light gray (#999)

### Submit button
- Green background (#4CAF50), white text
- Pill shape (fully rounded corners, ~25px radius)
- "Submit" text with right-arrow icon (→)
- Centered below the form fields

### Footer
- Simple link to Component Dock (https://www.componentdock.com/)
- "Made with Component Dock" or similar

## Fidelity notes

- Match the centered card floating over map layout
- Match the green (#4CAF50) accent color for button and banner overlay
- Match the underline input style (no box borders)
- Match the pill-shaped submit button
- Match the banner with photo + green tint + centered white text
- Match the stacked single-column form layout
- Match the grayscale map background (dark, muted)

## Component plan

- `src/App.tsx` — compose page
- `src/components/MapBackground.tsx` — full-viewport map background
- `src/components/FormCard.tsx` — centered floating card wrapper
- `src/components/BannerHeader.tsx` — green overlay banner with heading + subtitle
- `src/components/ContactForm.tsx` — form with underline inputs
- `src/components/FormField.tsx` — single label + underline input row
- `src/components/SubmitButton.tsx` — green pill button

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Poppins) in index.html
- [ ] Create MapBackground component (full-viewport dark map)
- [ ] Create FormCard layout (centered, floating, shadow)
- [ ] Create BannerHeader (green overlay, heading, subtitle)
- [ ] Create ContactForm (4 underline fields + submit button)
- [ ] Create FormField (label + underline input)
- [ ] Create SubmitButton (green pill with arrow icon)
- [ ] Style with Tailwind: colors, fonts, responsive
- [ ] Add responsive scaling for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
