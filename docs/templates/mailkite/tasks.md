# MailKite — Prep Notes & Task Outline

## Source
- **ColorLib:** Contact Form V2
- **Slug:** contact-form-v2
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v2/ (404 at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v2.jpg

## Structure Order (section-by-section)

The template is a **single-section, full-screen page**:

1. **Full-screen Background** — Mountain photograph with pink-to-coral gradient overlay
2. **Centered Form Card** — White card with rounded corners + drop shadow
   - Heading: "Contact Us"
   - NAME input (underlined, with placeholder)
   - EMAIL input (underlined)
   - MESSAGE textarea (underlined)
   - "Send Your Message" submit button (gradient)
3. **Footer** — Component Dock attribution (required per conventions)

## Fidelity Notes

### Background Treatment
- Use `picsum.photos/seed/mailkite-bg/1920/1080` for a deterministic mountain/landscape photo
- Overlay: `linear-gradient(135deg, rgba(233,30,140,0.65), rgba(244,96,54,0.65))`
- Background image set via CSS `background-image` with `background-size: cover` and `background-position: center`
- Image covers the full viewport (`min-h-screen`)

### Form Card
- Max width ~400px, centered horizontally and vertically
- White background, `border-radius: 16px`
- Drop shadow: `box-shadow: 0 8px 32px rgba(0,0,0,0.18)`
- Padding: ~40px horizontal, ~48px vertical
- Content is left-aligned within the card

### Form Fields
- Underline-only border style: bottom border on input, no other borders
- Default border color: light gray (#E0E0E0)
- Focus border: brand pink (#E91E8C)
- Labels: uppercase, small text (~11px), light gray (#AAAAAA), above the input
- Placeholder text: regular weight, slightly lighter than body text
- Message field is a `<textarea>` (3-4 rows)

### Submit Button
- Full width of the card (or close to it)
- Background: `linear-gradient(135deg, #E91E8C, #F46036)`
- Text: white, medium weight
- Border-radius: 4px (slightly rounded)
- Padding: ~12px vertical, ~32px horizontal
- Centered text

### Typography
- Font: Poppins (Google Fonts)
- Heading "Contact Us": bold, ~28-32px, dark (#1A1A1A)
- Labels: uppercase, ~11px, letter-spacing ~0.5px, gray (#AAAAAA)
- Body text: ~14-16px, regular weight, #333333

### Responsive Behavior
- Card max-width stays ~400px on desktop
- On mobile (<480px): card width = ~90% viewport with padding
- Background image + gradient overlay remain full viewport

## Implementation Tasks

1. [ ] Create `apps/mailkite/` — copy minimal app scaffold
2. [ ] Set up `index.html` with Poppins Google Font link
3. [ ] Create `src/App.tsx` — compose Background + FormCard
4. [ ] Create `src/components/Background.tsx` — full-screen bg + gradient overlay
5. [ ] Create `src/components/FormCard.tsx` — white card container
6. [ ] Create `src/components/ContactForm.tsx` — form with NAME, EMAIL, MESSAGE fields
7. [ ] Create `src/components/SubmitButton.tsx` — gradient button
8. [ ] Add form validation (zod + react-hook-form pattern)
9. [ ] Add success state display after submission
10. [ ] Add responsive styles
11. [ ] Write tests (TDD — write tests first, targeting 100% coverage)
12. [ ] Configure `vite.config.ts` with `injectUiSource()`
13. [ ] Set up `public/CNAME` with `mailkite.free.componentdock.com`
14. [ ] Set `homepage` in `package.json`
15. [ ] Add Component Dock footer link
16. [ ] Run `npm install` at root for lockfile registration
17. [ ] Verify: `scripts/verify-app.sh mailkite` passes
