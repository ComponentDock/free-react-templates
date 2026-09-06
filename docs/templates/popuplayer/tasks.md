# PopupLayer — Task Outline & Design Notes

## Source
- **ColorLib:** Modal 10
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-10/
- **Category:** Bootstrap Modal Templates (Newsletter Subscription)

## Structure Order
1. **Navbar** — (optional, may not be in original — check screenshot)
2. **Section** — White background, centered content with heading and launch button
3. **Modal Dialog** — Centered, max-width 500px
   - Header: Background image, 230px height, close button (X) top-right
   - Body: Overlaps header by -180px, white background, shadow
     - "Newsletter" heading (h2, bold, white)
     - Icon circle (200px, semi-transparent white bg)
     - "Subscribe to our newsletter" subheading (h4)
     - Email input + Subscribe button (inline, rounded-left/right)
4. **Footer** — Component Dock link

## Design Notes

### Modal Layout
- The modal uses `modal-dialog-centered` for vertical centering
- Header has a background image with absolute-positioned close button
- Body overlaps header by `-180px` margin-top, creating a floating effect
- Icon is a 200px circle with `rgba(255,255,255,0.2)` background

### Color Palette
- Primary: `#007bff` (Bootstrap blue)
- Background: `#ffffff` (white)
- Text: `#212529` (near-black)
- Placeholder: `rgba(0,0,0,0.3)` (muted)
- Input bg: `rgba(0,0,0,0.05)` (light gray)

### Typography
- Font: Poppins (Google Fonts)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold), 900 (black)
- h2: bold, white in modal body
- h4: regular weight, dark text

### Form Elements
- Input: Square corners (border-radius: 0), light gray background
- Submit button: Same styling as input, right-aligned
- Both inputs wrapped in a flex container with `d-flex`

### Responsive Behavior
- Modal max-width: 500px on desktop
- Full width on mobile (<576px)
- Form inputs may stack on very small screens

## Implementation Steps

1. Create `apps/popuplayer/` from template (copy simplest app)
2. Rename package to `@free-react-templates/popuplayer`
3. Create components:
   - `Modal.tsx` — Main modal component with open/close state
   - `ModalHeader.tsx` — Background image header with close button
   - `ModalBody.tsx` — Newsletter form content
   - `NewsletterForm.tsx` — Email input + submit button
4. Style with Tailwind + custom CSS for modal-specific overrides
5. Use placeholder images from picsum.photos for background
6. Add Poppins font via Google Fonts link in index.html
7. Write tests (100% coverage)
8. Verify: typecheck, lint, tests, build
