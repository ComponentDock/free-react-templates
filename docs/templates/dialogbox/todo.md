# DialogBox — Implementation Notes

## Source

- **ColorLib:** Modal 05 — https://colorlib.com/wp/template/modal-05/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-05/
- **New name:** dialogbox
- **Package:** @free-react-templates/dialogbox
- **CNAME:** dialogbox.free.componentdock.com

## Structure (section order)

1. **FullPage** — White background, centered vertically and horizontally
   - Heading: "Create Your Account" (or similar)
   - Launch button: blue rounded pill
2. **Modal** — Centered overlay dialog
   - Close button (X) — top-right, absolute position
   - "Create Your Account" heading
   - Social login icons row (Twitter, Facebook, Instagram)
   - Registration form:
     - Full Name input
     - Email Address input
     - Password input
     - "Sign Up" submit button (blue pill)
   - "I'm already a member" link

## Design Fidelity Notes

### Colors
- Primary brand: #3e64ff (blue) — used for buttons, link hovers, social icon hovers
- Page/modal background: white
- Text: rgba(0,0,0,0.8) primary, rgba(0,0,0,0.3) secondary/labels
- Social icon border: rgba(0,0,0,0.05)

### Typography
- Font: Poppins (Google Fonts), weights 300–900
- Labels: uppercase, 12px, muted color
- Heading: bold, centered
- Body: 16px, normal weight

### Buttons
- Border-radius: 40px (pill shape)
- Primary: bg #3e64ff, border #3e64ff, text white
- Hover: transparent bg, #3e64ff text, #3e64ff border
- Padding: py-3 px-4 (12px 16px)

### Inputs
- Height: 52px
- Border-radius: 5px
- Background: white
- Text color: rgba(0,0,0,0.8)
- Border: 1px solid rgba(0,0,0,0.1) (inferred from Bootstrap)

### Social Icons
- Size: 50px × 50px circles
- Background: white with 1px border rgba(0,0,0,0.05)
- Hover: brand blue (#3e64ff)
- Icons: Twitter, Facebook, Instagram (use lucide-react equivalents)

### Modal
- Max-width: 450px
- Border: none
- Shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)
- Close button: absolute top-right, no padding/margin, z-index 1
- Header: no padding, no border
- Body: p-4 py-5 p-md-5

### Layout
- Full-page centered (flex align-items-center justify-content-center)
- Modal: Bootstrap modal-dialog-centered pattern
- Responsive: full-width on mobile

## Component Plan

```
src/
  main.tsx              — entry (excluded from coverage)
  App.tsx               — composes FullPage + Modal
  components/
    FullPage.tsx         — heading + launch button
    Modal.tsx            — dialog overlay with close
    RegistrationForm.tsx — form fields + submit
    SocialIcons.tsx      — twitter/facebook/instagram icons
  index.css             — Tailwind entry + @theme tokens
  test/
    setup.ts            — jest-dom import
```

## Implementation Tasks

1. Scaffold app from template (copy simplest existing app, rename package)
2. Set up Tailwind with Poppins font and brand color tokens
3. Build FullPage component (heading + launch button)
4. Build Modal component (overlay, centered, shadow, close button)
5. Build SocialIcons component (3 circular icons)
6. Build RegistrationForm component (3 inputs + submit + link)
7. Compose App.tsx with all components
8. Write tests for each component (TDD: red → green)
9. Verify 100% coverage
10. Add CNAME, homepage, footer link
11. Run verify-app.sh
12. Commit, push, open PR, merge
