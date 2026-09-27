# Signpilot — Implementation Notes

## Source

- **ColorLib:** Reg Form V22 (colorlib-regform-22)
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-22/ (404 at time of prep)
- **Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-22.jpg
- **Category:** Registration Form / Yoga Class Booking

## Design Notes

### Layout structure (section order)

1. **Background layer** — Full-viewport diagonal split (light blue left, light peach right) with semi-transparent yoga/fitness background image overlay
2. **Centered card** — White card with rounded corners (~12px) and subtle shadow, two-column layout
3. **Left column** — Fitness/yoga photo with rounded corners
4. **Right column** — Form with heading + fields + button

### Design tokens (from screenshot)

- **Brand blue:** #87CEEB (left diagonal)
- **Brand peach:** #F5D0C4 (right diagonal)
- **Card bg:** #FFFFFF
- **Card radius:** ~12px
- **Button bg:** #87CEEB (matches brand blue)
- **Button text:** #FFFFFF
- **Button radius:** ~4px
- **Heading color:** #333333 (dark gray)
- **Heading font:** Uppercase bold sans-serif
- **Input border:** #E0E0E0
- **Input radius:** ~4px
- **Placeholder:** #999999

### Key implementation details

- Background diagonal split: use CSS `clip-path` or a rotated pseudo-element to create the diagonal effect
- Semi-transparent overlay: background image with opacity ~0.3 on top of the diagonal
- Card: flexbox two-column, left side photo, right side form
- Photo: use `picsum.photos/seed/signpilot-1/400/500` for placeholder
- Form fields: standard inputs with light gray borders and rounded corners
- Button: full-width or centered, light blue bg, white text, "BOOK NOW →"
- Select dropdown: "Choose Your Class" with options like Yoga, Pilates, Meditation, HIIT
- Form state: controlled inputs, submit handler shows success message

### Fidelity notes

- Preview was 404; all design data derived from screenshot analysis
- Diagonal split is the distinctive feature — must match closely
- Card extends slightly beyond the diagonal boundary (overlapping both halves)
- Photo bleeds to the left edge of the card
- Minimal page: no navbar visible in screenshot; navbar is added per conventions
- No footer visible in screenshot; footer added per conventions (Component Dock link)
