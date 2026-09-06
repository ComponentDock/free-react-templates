# AuthGate — Implementation Tasks & Design Notes

**Source:** ColorLib Modal 05
**New name:** authgate
**Preview:** https://preview.colorlib.com/theme/modal-05/ (unreachable)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-05.jpg

## Structure order (section-by-section)

1. **Page background** — underlying page content (placeholder or demo page)
2. **Modal overlay** — full-viewport semi-transparent gray backdrop
3. **Modal card** — centered white card with rounded corners and drop shadow
4. **Close button** — X icon in top-right of modal card
5. **Form header** — "Sign In" title or welcome text
6. **Email input** — email field with label and placeholder
7. **Password input** — password field with label and placeholder
8. **Remember me + Forgot password** — checkbox row with link
9. **Submit button** — blue "Sign In" button
10. **Social login divider** — "Or Sign In With" text with lines
11. **Social login icons** — Facebook, Twitter, Google icons in circular containers
12. **Registration link** — "Not a Member Yet? Register" at bottom

## Fidelity notes

### Overlay

- Semi-transparent gray (#7f7f7f at ~60% opacity) covering entire viewport
- Clicking overlay outside modal card dismisses the modal
- Blurs/dims underlying page content

### Modal card

- White (#ffffff) background
- Rounded corners (~8px)
- Large drop shadow for floating effect
- Max-width ~400px on desktop, full-width with margins on mobile
- Centered horizontally and vertically in viewport

### Close button

- Top-right corner of modal card
- Simple X icon (lucide-react `X`)
- On click: dismiss modal + overlay
- On Escape key: same behavior

### Form fields

- Email input: full width, light gray border (#e0e0e0), focus ring in blue (#4664f0)
- Password input: same styling as email
- Both have labels above and placeholders inside
- Border-radius ~4px on inputs

### Remember me + Forgot password

- Row layout: checkbox on left, "Remember me" label, "Forgot Password?" link on right
- "Forgot Password?" in blue (#4664f0)

### Submit button

- Full width of form
- Blue (#4664f0) background, white text
- Hover: darkens to #3c64f0
- Border-radius ~4px
- Padding for comfortable click target

### Social login section

- "Or Sign In With" divider with horizontal lines on either side
- Three circular icon buttons: Facebook (blue), Twitter (light blue), Google (red/multicolor)
- Icons from lucide-react or simple SVG
- Equal spacing between icons

### Registration link

- "Not a Member Yet?" in regular text
- "Register" in blue (#4664f0), bold or underlined
- Centered below social login icons

## Component outline

```
src/
  App.tsx               — renders placeholder page + AuthGate modal
  components/
    ModalOverlay.tsx    — full-viewport overlay backdrop
    ModalCard.tsx       — the centered white card container
    CloseButton.tsx     — X button in top-right corner
    LoginForm.tsx       — email + password + remember me + forgot password
    SocialLogin.tsx     — divider + social media icon buttons
    RegisterLink.tsx    — "Not a Member Yet? Register" footer text
    useModalTrigger.ts  — hook for delay + exit intent + localStorage
```

## Dependencies

- lucide-react (for X, Mail, Lock, Facebook, Twitter, Google icons)
- packages/ui (cn utility)
- No new external dependencies needed
