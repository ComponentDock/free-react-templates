# ContactGlen — Implementation Notes

## Source
- ColorLib: Contact Form V9
- Slug: `contact-form-v9`
- Preview: https://preview.colorlib.com/theme/contact-form-v9/ (404 at prep time)
- Live CSS: https://colorlib.com/etc/cf/ContactFrom_v9/css/main.css (extracted tokens)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v9.jpg

## Section order (top to bottom)

1. **Full-viewport background** — map (or map-like visual) with semi-transparent cyan-to-magenta gradient overlay
2. **Centered form card** (white, 800px, rounded, shadow):
   - "Contact Us" heading (left-aligned, bold, 30px)
   - Name input ("Full Name" placeholder) with validation states
   - Email input ("Email" placeholder) with validation states
   - Message textarea ("Your Message" placeholder) with validation state
   - "Send Email" button (purple pill, centered)
   - Footer phone line: "Contact our 24/7 call center: +001 345 6889"
3. **Component Dock footer** — link to componentdock.com

## Design tokens (from original CSS)

- Font: Source Sans 3 (body/headings), Josefin Sans Bold (button)
- Brand color: `#bd59d4` (purple/magenta) — button, highlights
- Button hover: `#4b2354` (dark purple)
- Validation error: `#fa4251` (red)
- Heading text: `#333333`, 30px, bold
- Body text: `#666666`
- Secondary text: `#999999`
- Input text: `#4b2354` (dark purple)
- Card: white, `border-radius: 10px`, `box-shadow: 0 3px 20px rgba(0,0,0,0.1)`
- Card padding: `72px 150px 25px 150px` (desktop)
- Card width: 800px
- Input wrapper: `border-radius: 20px`, shadow `0 5px 20px rgba(0,0,0,0.05)`
- Input focus shadow: `0 5px 20px rgba(0,0,0,0.15)`
- Input height: 62px; textarea min-height: 199px
- Button: `#bd59d4`, `border-radius: 21px`, height 42px, min-width 160px
- Button hover shadow: `0 10px 30px rgba(189, 89, 212, 0.8)`
- Background overlay: `linear-gradient(to right, rgba(0,168,255,0.5), rgba(185,0,255,0.5))`
- Map center: 40.722047, -73.986422

## Fidelity notes

- The original uses a real Google Maps embed as the full-page background
- A semi-transparent cyan-to-magenta gradient overlay sits on top of the map
- The white card is centered both horizontally and vertically in the viewport
- Title "Contact Us" is LEFT-aligned (not centered) — this is intentional in the original
- Input fields use rounded containers (20px radius) with subtle shadows, NOT underline style
- Validation errors appear as white overlay banners with red text and red X icon
- Validation success shows a green checkmark icon on the right side
- The "Send Email" button text is UPPERCASED via CSS (text-transform)
- Button uses Josefin Sans Bold (different from body font)
- The footer phone number has the number portion highlighted in brand purple
- The original has NO navigation bar — the card fills the viewport
- For the map background: use a static map image or a subtle map-like pattern (Google Maps API requires key)
- Responsive breakpoints: 992px (tablet), 576px (mobile)

## Implementation tasks

- [ ] Scaffold `apps/contactglen/` from simplest existing contact app (e.g. `contactbreeze`)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Source Sans 3 + Josefin Sans font links in `index.html`
- [ ] Create `ContactForm.tsx` (centered card with heading, inputs, button, footer)
- [ ] Create `MapBackground.tsx` (full-viewport map with gradient overlay)
- [ ] Create `App.tsx` composing MapBackground + ContactForm
- [ ] Create `Footer.tsx` with Component Dock link
- [ ] Implement validation logic (name, email, message required)
- [ ] Implement validation error banners (red overlay with error text + X icon)
- [ ] Implement validation success checkmarks (green check)
- [ ] Implement purple pill submit button with hover effects
- [ ] Implement responsive card padding
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh contactglen`
- [ ] Commit, push, deploy
