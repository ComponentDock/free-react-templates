# RegNova — Prep Notes

Source: ColorLib Regform 32
Preview: https://preview.colorlib.com/theme/colorlib-regform-32/ (404 — unavailable)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-32.jpg

## Structure (top to bottom)

1. Full-viewport gradient background (teal → navy, diagonal)
2. Centered white card (shadow, ~800×500px)
   - Left half: portrait image (full height)
   - Right half: form panel
     - "Register Form" heading
     - 4 underline-bordered inputs: Your Name, Email Address, Password, Confirm Password
     - Orange "Register" button (centered)
3. Light gray footer section with Component Dock link

## Section-by-section fidelity notes

### Gradient background
- Diagonal linear gradient: `linear-gradient(135deg, #5bc0de 0%, #1a3a5c 100%)`
- Full viewport height (100vh)

### Card
- White background, box-shadow `0 10px 40px rgba(0,0,0,0.2)`
- Flexbox row: image left, form right
- Responsive: stacks vertically on screens <768px

### Portrait image
- Left half of card, object-fit: cover
- Use placeholder: `https://picsum.photos/seed/regnova/400/500`

### Form heading
- Text: "Register Form"
- Font: Poppins, 700 weight, ~28px, color #333333
- Centered horizontally in the right panel

### Form fields
- 4 fields, each with only a bottom border (1px solid #e0e6e6)
- Placeholder text color: #999999
- Focus border: teal (#5bc0de)
- Font: Poppins, 14px

### Register button
- Background: #f5a623 (orange)
- Text: white, Poppins 600 weight
- Padding: 10px 30px, border-radius 4px
- Centered below the fields
- Hover: darken slightly (e.g., filter: brightness(0.95))

### Footer
- Background: #f8f9fa
- Text: "Made with Component Dock" linking to https://www.componentdock.com/
- Small font, centered

## Implementation approach

1. Create `apps/regnova/` from simplest existing regform app (e.g., regbox or regcard)
2. Rename package to `@free-react-templates/regnova`
3. Single-page app: `App.tsx` composes gradient background + card
4. Components: `GradientBackground.tsx`, `RegistrationCard.tsx`, `FormPanel.tsx`, `Footer.tsx`
5. `src/index.css`: Tailwind v4 setup with custom gradient theme token
6. Tests: Vitest + RTL, 100% coverage
