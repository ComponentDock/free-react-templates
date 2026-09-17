# Formify — Tasks & Design Notes

## Source
- ColorLib slug: `contact-form-v3`
- URL: https://colorlib.com/wp/template/contact-form-v3/
- Preview: https://preview.colorlib.com/theme/contact-form-v3/ (404 — screenshot only)
- Screenshot: `ContactFrom_v3.jpg` (1920×939)

## Structure order (section-by-section)

1. **Background** — Full-viewport scenic mountain/forest image (faded, green-tinted). Use picsum seed or gradient fallback.
2. **Form cards container** — Flex row (side-by-side on desktop, stacked on mobile). Two cards centered in viewport.
3. **Card 1: "Say Hi" form**
   - Green gradient background (`#3d8b37` → `#b8d930`)
   - "CONTACT US" heading (white, uppercase, bold, centered)
   - Radio toggle: "Say Hi" (selected) / "Get a Quote"
   - Fields (underline-only): Your Name, Your Email, Your Message
   - White "SUBMIT" button (uppercase, slight border-radius)
4. **Card 2: "Get a Quote" form**
   - Same green gradient card
   - "CONTACT US" heading
   - Radio toggle: "Say Hi" / "Get a Quote" (selected)
   - Fields (underline-only): Your Name, Your Email, Needed Services (dropdown), Budget (dropdown), Your Message
   - White "SUBMIT" button
5. **Footer** — Component Dock link (`https://www.componentdock.com/`)

## Fidelity notes

### Card gradient
- The original uses a vertical gradient from dark forest green at top to lighter lime green at bottom.
- Approximate: `linear-gradient(180deg, #3d8b37 0%, #b8d930 100%)` — needs visual tuning.
- Cards have rounded corners ~8-12px radius.

### Input fields
- Underline-only styling: no box border, just a bottom border line.
- Bottom border color: semi-transparent white (`rgba(255,255,255,0.4)`).
- Placeholder text: white, slightly transparent.
- On focus: bottom border could become solid white for feedback.

### Radio toggle
- Custom-styled radio buttons at the top of each card.
- White text labels: "Say Hi" and "Get a Quote".
- Selected state: filled circle indicator.

### Submit button
- White background (or semi-transparent white).
- Text: "SUBMIT" in uppercase, dark green or white.
- Slight border-radius (~4px).
- Full-width or centered within the card.

### Background
- The original uses a scenic mountain/forest photograph with trees in foreground.
- Green-tinted overlay effect.
- For recreation: use a nature-themed picsum seed or a solid/gradient fallback
  that evokes the same green nature aesthetic.

### Mobile behavior
- On viewports < 768px: cards stack vertically instead of side-by side.
- Each card takes full width with appropriate padding.

### Differences from original
- No ColorLib branding or attribution.
- Component Dock footer link replaces any original footer content.
- Placeholder images via picsum instead of original assets.
- Fonts may differ slightly (system sans-serif or Poppins).

## Component breakdown

| Component       | Purpose                                    |
| --------------- | ------------------------------------------ |
| `Formify.tsx`   | Root page: background + card container     |
| `FormCard.tsx`   | Reusable card: gradient bg, heading, toggle, fields, submit |
| `FormFields.tsx` | Say Hi vs Get a Quote field sets          |
| `FormToggle.tsx` | Radio toggle for form type                 |
| `Footer.tsx`     | Component Dock link footer                 |

## Tasks

- [ ] Set up `apps/formify` workspace (copy simplest app, rename package)
- [ ] Create `src/App.tsx` composing Formify page
- [ ] Implement `FormCard.tsx` with gradient background + heading
- [ ] Implement `FormToggle.tsx` radio toggle
- [ ] Implement `FormFields.tsx` with Say Hi / Get a Quote variants
- [ ] Implement underline-only input styling
- [ ] Implement Submit button
- [ ] Implement background (picsum or gradient)
- [ ] Implement responsive layout (flex row → stacked)
- [ ] Add dark mode support
- [ ] Add Footer with Component Dock link
- [ ] Write tests (Vitest + RTL) to 100% coverage
- [ ] Register workspace: `npm install` at repo root
- [ ] Validate spec: `npm run spec:validate`
