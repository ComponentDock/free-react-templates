# ContactBreeze — Implementation Notes

## Source
- ColorLib: Contact Form V4
- Slug: `contact-form-v4`
- Preview: https://preview.colorlib.com/theme/contact-form-v4/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v4.jpg

## Section order (top to bottom)

1. **Full-page gradient background** — cyan-to-magenta sweep (fills viewport)
2. **Centered form card** (white, rounded, shadow):
   - "Say Hello!" heading (bold, centered)
   - Name input (underline style, label above)
   - Email input (underline style, label above)
   - "Needed Services" select dropdown (underline style, chevron icon)
   - "Budget" select dropdown (underline style, chevron icon)
   - Message textarea (underline style, label above)
   - "Submit →" gradient button (full-width, rounded)
3. **Footer** — "Made with Component Dock" link to componentdock.com

## Design tokens (from screenshot)

- Background gradient: `#00d2ff` (cyan) → `#ff00ff` (magenta)
- Card: white (`#ffffff`), rounded (`16px`), shadow
- Heading: dark (`#222222`), bold, Poppins
- Labels: small, dark gray (`#555555`)
- Placeholders: light gray (`#999999`)
- Input underlines: thin gray line (`#e0e0e0`)
- Button gradient: cyan-to-magenta (same as page), white text, `24px` radius
- Dropdown chevrons: gray (`#999999`)
- Font: Poppins (inferred)

## Fidelity notes

- The original has NO navigation bar — the card takes the full viewport
- The gradient is a horizontal sweep (left cyan, right magenta)
- Inputs use underline-only styling (no box borders) — use `border-b` only
- Labels are above inputs, small and dark gray
- Two select dropdowns need chevron icons on the right side
- Button gradient matches the page gradient (cyan→magenta)
- Header image: not present in this template (it's a clean minimal card)
- Icons: use `lucide-react` for the chevron on dropdowns
- Form has 5 fields total: name, email, services (select), budget (select), message

## Implementation tasks

- [ ] Scaffold `apps/contactbreeze/` from simplest existing contact app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Poppins font link in `index.html`
- [ ] Create `ContactForm.tsx` (centered card with all form fields)
- [ ] Create `App.tsx` composing ContactForm on gradient background
- [ ] Create `Footer.tsx` with Component Dock link
- [ ] Implement underline-style inputs with labels
- [ ] Implement select dropdowns with chevron icons
- [ ] Implement gradient submit button
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh contactbreeze`
- [ ] Commit, push, deploy
