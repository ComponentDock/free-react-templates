# ContactDrop — Implementation Notes

## Source
- ColorLib: Contact Form V16
- Slug: `contact-form-v16`
- Preview: https://preview.colorlib.com/theme/contact-form-v16/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v16.jpg

## Section order (top to bottom)

1. **Navigation bar** — "Co." text logo (left), "CONTACT US" outlined button (right)
2. **Full-page purple gradient background** — fills viewport
3. **Contact form card** (centered modal):
   - Header image banner with dark overlay + "CONTACT US" heading
   - Close (X) button (top-right corner)
   - Name input (person icon left)
   - Email input (mail icon left)
   - Phone input (phone icon left) — with validation error state (red border + X)
   - Message textarea (comment icon left)
   - "SEND NOW" pill button (purple, centered)
4. **Footer** — "Made with Component Dock" link to componentdock.com

## Design tokens (from screenshot)

- Brand purple: `#7c4dff`
- Gradient: deep purple → lavender (full-page)
- Card: white, rounded (`8px`), shadow
- Button: pill-shaped (`border-radius: 24px`), purple bg, white text
- Inputs: light gray border, icons left-aligned (gray `#9e9e9e`)
- Validation: red border `#f44336` + red X icon
- Font: Poppins (inferred from visual weight)
- Header image: urban/architectural photo with dark overlay

## Fidelity notes

- The original uses a full-viewport purple gradient — use Tailwind `bg-gradient-to-br`
- Card is a modal-style overlay, not a traditional page section
- Close button should toggle visibility (React state)
- Header image: use `picsum.photos/seed/contactdrop-1/600/200`
- Icons: use `lucide-react` (User, Mail, Phone, MessageSquare, X)
- Form validation: show red border + X only when field is touched + invalid
- Pill button: `rounded-full` with `px-8 py-3`

## Implementation tasks

- [ ] Scaffold `apps/contactdrop/` from simplest existing contact app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Poppins font link in `index.html`
- [ ] Create `Navbar.tsx` (brand text + contact button)
- [ ] Create `ContactCard.tsx` (header banner, form fields, submit button, close)
- [ ] Create `App.tsx` composing Navbar + ContactCard on gradient background
- [ ] Create `Footer.tsx` with Component Dock link
- [ ] Add form validation with visual indicators
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh contactdrop`
- [ ] Commit, push, deploy
