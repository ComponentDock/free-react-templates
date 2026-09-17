# FormVolt — Prep Notes

## Source
- ColorLib slug: `contact-form-v3`
- Preview: https://preview.colorlib.com/theme/contact-form-v3/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v3.jpg

## Structure order
1. Full-viewport background image (mountain landscape, cover, centered)
2. Centered card container (flex center, min-h-screen)
3. Card header: "CONTACT US" heading
4. Radio button group: "Say Hi" | "Get a Quote"
5. Form fields (conditional based on mode):
   - Say Hi: Name, Email, Message
   - Get a Quote: Name, Email, Needed Services, Budget, Message
6. SUBMIT button
7. Footer (Component Dock link)

## Design tokens from screenshot

### Colors
- Card background: green gradient `#5cb85c` → `#3d8b3d` (135deg, top-left to bottom-right)
- Text: `#ffffff`
- Submit button: `#ffffff` bg, `#3d8b3d` green text
- Input underline: `#ffffff` ~1px
- Radio selected dot: `#ffffff` on green

### Typography
- Heading "CONTACT US": bold, uppercase, ~24px
- Input placeholders: white, ~14px, normal weight
- Font: sans-serif (implementer to verify exact font, likely Poppins)

### Spacing & shape
- Card: max-width ~400px, padding ~40px, border-radius ~12px
- Input fields: bottom margin ~20px, no visible border except bottom line
- Submit button: rectangular, padding ~10px 30px, border-radius ~4px, margin-top ~10px

### Background
- Full-viewport landscape photo (forest + snow-capped mountain)
- Use `https://picsum.photos/seed/formvolt-bg/1920/1080` for placeholder
- Or a nature image via picsum with seed

## Implementation notes

### Components to build
- `src/components/FormCard.tsx` — the green gradient card
- `src/components/ContactForm.tsx` — the form with mode switching
- `src/components/RadioGroup.tsx` — the Say Hi / Get a Quote toggle
- `src/components/FormField.tsx` — underline-styled input component
- `src/components/SelectField.tsx` — dropdown for Services/Budget

### Key behaviors
- Radio group controls which fields render (conditional rendering)
- No external state library needed — local useState is sufficient
- Form validation: required fields for Name, Email, Message
- On submit: show success message (no actual API)

### Shared UI components to reuse
- `Button` from packages/ui for the SUBMIT button
- `cn()` for class composition

### Tailwind custom theme tokens
```css
@theme {
  --color-formvolt-card-start: #5cb85c;
  --color-formvolt-card-end: #3d8b3d;
  --color-formvolt-text: #ffffff;
  --color-formvolt-btn-text: #3d8b3d;
}
```

## Tasks
1. Create app scaffold from template
2. Build background section with cover image
3. Build FormCard component (gradient, rounded)
4. Build RadioGroup (Say Hi / Get a Quote)
5. Build FormField (underline styling)
6. Build ContactForm with conditional field rendering
7. Add form validation
8. Write tests for all components
9. Add footer with Component Dock link
10. Verify 100% coverage
