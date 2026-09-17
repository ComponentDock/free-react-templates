# FormWit — Implementation Notes

## Source
- ColorLib: Contact Form V17
- Slug: `contact-form-v17`
- Preview: https://preview.colorlib.com/theme/contact-form-v17/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v17.jpg

## Section order (top to bottom)

1. **Split-screen card** (centered on light gray page):
   - LEFT PANEL: dark photographic background with contact details
     - Address block (pin icon + "Address" label + address text)
     - Phone block (phone icon + "Lets Talk" label + green phone number)
     - Email block (envelope icon + "General Support" label + green email)
   - RIGHT PANEL: white background with form
     - "Send Us A Message" heading
     - Name inputs: "TELL US YOUR NAME *" with side-by-side First name / Last name
     - Email input: "ENTER YOUR EMAIL *"
     - Phone input: "ENTER PHONE NUMBER"
     - Message textarea: "MESSAGE *"
     - "SEND MESSAGE" green button
2. **Footer** — "Made with Component Dock" link to componentdock.com

## Design tokens (from screenshot)

- Brand green: `#28a745`
- Page background: `#f5f5f5` (light gray)
- Left panel: dark photo bg (`#1a1a1a`), white text, green links
- Right panel: white bg
- Heading: `#212121` (near-black)
- Labels: `#666666` (gray-600), uppercase
- Placeholders: `#aaaaaa` (gray-400)
- Input borders: `#e0e0e0` (gray-300)
- Button: green bg `#28a745`, white text, `border-radius: 4px`
- Font: Jost (inferred from visual weight)
- Card: `border-radius: 4px`, centered

## Fidelity notes

- The original uses a full-width split card — not a modal, but a page-level layout
- Left panel: use a dark architectural photo via `picsum.photos/seed/formwit-1/800/600` with a dark overlay
- Name fields: two side-by-side inputs in a flex row, each 50% width
- Labels are uppercase with asterisks for required fields
- Icons: use `lucide-react` (MapPin, Phone, Mail for left panel)
- Form fields: standard inputs with light gray borders, no icons inside fields
- Button: `rounded` (not pill), green background, uppercase white text
- Responsive: stack columns vertically on mobile (`flex-col` below `md:`)
- Footer: simple text link to componentdock.com

## Implementation tasks

- [ ] Scaffold `apps/formwit/` from simplest existing contact form app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Jost font link in `index.html`
- [ ] Create `ContactPanel.tsx` (left dark panel with address/phone/email)
- [ ] Create `ContactForm.tsx` (right panel with form fields and submit)
- [ ] Create `App.tsx` composing ContactPanel + ContactForm in a split layout
- [ ] Create `Footer.tsx` with Component Dock link
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh formwit`
- [ ] Commit, push, deploy
