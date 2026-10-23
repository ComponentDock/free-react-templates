# FormDesk — Implementation Notes

## Source
- ColorLib: Contact Form V18
- Slug: `contact-form-v18`
- Preview: https://preview.colorlib.com/theme/contact-form-v18/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v18.jpg

## Section order (top to bottom)

1. **Split-screen layout** (full viewport height):
   - LEFT COLUMN: full-bleed lifestyle desk photo (laptop, coffee cup, spiral notebook, smartphone on dark desk surface) — no text overlay, pure photo
   - RIGHT COLUMN: white background with contact form
     - "Send Us A Message" heading (dark text, sans-serif)
     - Full Name input (placeholder "Enter your name...")
     - Email Address input (placeholder "Enter your email...")
     - "What Do You Need?" dropdown (options: UI/UX Design, eCommerce Bussiness, Online Services)
     - "SEND" button (indigo-blue, rounded)
     - Social media icons row (Facebook, Twitter, Instagram)
2. **Footer** — "Made with Component Dock" link to componentdock.com

## Design tokens (from screenshot)

- Brand indigo-blue: `#5b6abf`
- Page/right panel: white `#ffffff`
- Left panel: full-bleed photo (no overlay, no text)
- Heading: `#212121`
- Labels: `#333333`, uppercase
- Placeholders: `#aaaaaa`
- Input borders: `#e0e0e0`
- Button: `#5b6abf` bg, white text, `border-radius: 4px`
- Dropdown highlight: `#5b6abf`
- Social icons: FB `#3b5998`, Twitter `#1da1f2`, Instagram `#e1306c`
- Font: Jost (inferred)

## Fidelity notes

- Left column is a pure lifestyle photo with no text or overlay — use `picsum.photos/seed/formdesk-1/900/1080` or similar desk flatlay
- No phone or address fields — just name, email, dropdown, message is absent (the screenshot doesn't show a message textarea)
- The dropdown is a native `<select>` styled to match, not a custom component
- Dropdown options include intentional typos ("Please chooses", "eCommerce Bussiness") — preserve as-is for fidelity
- Social icons: use `lucide-react` circles or simple SVG icons
- Button text is just "SEND" (not "SEND MESSAGE")
- Responsive: flex-col on mobile, photo stacks above form
- Footer: simple text link to componentdock.com

## Implementation tasks

- [ ] Scaffold `apps/formdesk/` from simplest existing contact form app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Jost font link in `index.html`
- [ ] Create `PhotoPanel.tsx` (left column with desk photo)
- [ ] Create `ContactForm.tsx` (right column with name, email, dropdown, submit, social icons)
- [ ] Create `App.tsx` composing PhotoPanel + ContactForm in split layout
- [ ] Create `Footer.tsx` with Component Dock link
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh formdesk`
- [ ] Commit, push, deploy
