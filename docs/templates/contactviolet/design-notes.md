# ContactViolet — Implementation Notes

## Source
- ColorLib: Contact Form V9
- Slug: `contact-form-v9`
- Preview: https://preview.colorlib.com/theme/contact-form-v9/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v9.jpg
- Description: "A modern and simplistic free contact form template with validation and autocomplete. Plus, Google Maps background."

## Section order (top to bottom)

1. **Full-page background** — Google Maps with purple/magenta gradient overlay (transparent on left → purple on right)
2. **Contact form card** (centered modal floating over background):
   - "Contact Us" heading (bold, dark, left-aligned)
   - Name input with inline validation (red error / green checkmark)
   - Email input with inline validation (green checkmark when valid)
   - Message textarea (visible border, not underline-only)
   - "SEND EMAIL" pill button (purple gradient)
   - Phone contact line: "Contact our 24/7 call center: +001 345 6889"
3. **Footer** — "Made with Component Dock" link to componentdock.com

## Design tokens (from screenshot)

- Brand purple: `#ab47bc`
- Gradient button: `#ab47bc` → `#ce93d8` (purple to light purple)
- Background: Google Maps + purple gradient overlay
- Card: white, rounded (`12px`), shadow
- Button: pill-shaped (`border-radius: 24px`), purple gradient, white text
- Inputs: box-style borders (not underline-only), validation colors
- Validation error: red `#f44336` border + red X icon + red error text
- Validation success: green `#4caf50` checkmark icon
- Textarea: visible border (gray-300)
- Phone number: purple colored text
- Font: Poppins (inferred from visual weight)

## Fidelity notes

- The original has a Google Maps background with a purple gradient overlay — use `@react-google-maps/api` or iframe with a CSS gradient overlay
- The purple gradient goes from transparent (left) to solid purple (right), partially covering the map
- Form has real-time inline validation: empty required field shows red error text + X icon; valid field shows green checkmark
- The textarea has a full visible border (unlike V8's underline-only inputs)
- The submit button is a purple GRADIENT (left-to-right), not a solid color
- Phone number line is a small text element below the button, not a separate section
- Validation should use React state to track field touched/dirty status
- Icons: use `lucide-react` (CheckCircle2, XCircle for validation; no field icons like V8)
- Footer: standard Component Dock attribution link

## Implementation tasks

- [ ] Scaffold `apps/contactviolet/` from simplest existing contact app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Poppins font link in `index.html`
- [ ] Install `@react-google-maps/api` (or use iframe for map background)
- [ ] Create `MapBackground.tsx` (full-viewport map with purple gradient overlay)
- [ ] Create `ContactCard.tsx` (heading, form fields with validation, submit button, phone line)
- [ ] Create `App.tsx` composing MapBackground + ContactCard
- [ ] Create `Footer.tsx` with Component Dock link
- [ ] Implement inline field validation (touched + invalid = red error; valid = green check)
- [ ] Style submit button with purple gradient
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh contactviolet`
- [ ] Commit, push, deploy
