# ContactMap — Implementation Notes

## Source
- ColorLib: Contact Form V8
- Slug: `contact-form-v8`
- Preview: https://preview.colorlib.com/theme/contact-form-v8/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v8.jpg
- Description: "Combine functional contact form with a Google Maps background integration"

## Section order (top to bottom)

1. **Full-page Google Maps background** — interactive map filling the viewport, rendered in grayscale via CSS `filter: grayscale(1)`
2. **Contact form card** (centered modal floating over map):
   - "Contact Us" heading (bold, dark, left-aligned)
   - Full Name input (underline-style border)
   - Email input (underline-style border)
   - Message textarea (underline-style border)
   - "Send copy to my email" checkbox (teal checkmark)
   - "SEND EMAIL" button (teal-green, rectangular)
3. **Footer** — "Made with Component Dock" link to componentdock.com

## Design tokens (from screenshot)

- Brand teal-green: `#44b89d`
- Background: Google Maps (grayscale filter)
- Card: white, subtle shadow, slight rounding
- Button: rectangular (`border-radius: 4px`), teal bg, white text
- Inputs: underline-only borders (gray idle, teal active/focus)
- Checkbox: teal fill when checked
- Font: Poppins (inferred from visual weight)
- Map: interactive Google Maps embed, desaturated

## Fidelity notes

- The original uses a live Google Maps embed as the full-page background — use `@react-google-maps/api` or an iframe embed with grayscale CSS filter
- Card is a modal-style overlay, positioned `absolute` or `fixed` center over the map
- Inputs use underline-only styling (no box borders) — Tailwind `border-b` with focus ring
- The "send copy" checkbox uses a custom teal checkmark — style with `accent-color` or custom SVG
- Button is rectangular (not pill) with slight rounding
- Map placeholder: use an iframe to Google Maps centered on a generic location (e.g. New York area as shown in screenshot)
- Icons: none in the original (clean underline inputs only)
- Footer: standard Component Dock attribution link

## Implementation tasks

- [ ] Scaffold `apps/contactmap/` from simplest existing contact app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Poppins font link in `index.html`
- [ ] Install `@react-google-maps/api` (or use iframe for map background)
- [ ] Create `MapBackground.tsx` (full-viewport grayscale Google Maps)
- [ ] Create `ContactCard.tsx` (heading, form fields, checkbox, submit button)
- [ ] Create `App.tsx` composing MapBackground + ContactCard
- [ ] Create `Footer.tsx` with Component Dock link
- [ ] Style inputs with underline-only borders and teal focus state
- [ ] Style checkbox with teal accent
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh contactmap`
- [ ] Commit, push, deploy
