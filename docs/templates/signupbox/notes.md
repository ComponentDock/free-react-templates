# SignupBox — Design Notes

Source: ColorLib Modal 05
Preview: https://preview.colorlib.com/theme/bootstrap/modal-05/
New name: signupbox (apps/signupbox)

## Structure Order

1. Page section (white bg, centered)
   - h2 title
   - "Launch" button (triggers modal)

2. Modal (centered overlay)
   - Close button (top-right)
   - Body:
     a. "Create Your Account" heading (centered)
     b. Social icons row (Twitter, Facebook, Instagram)
     c. Signup form:
     - Full Name input
     - Email Address input
     - Password input
     - "Sign Up" submit button (pill-shaped)
     - "I'm already a member" link

## Fidelity Notes

### Colors

- Brand primary: #3e64ff (blue/indigo) — used for btn-primary, focus borders, social icon hover
- Checkbox accent: #fb8691 (pink) — for checkbox fill
- Text: rgba(0,0,0,0.8) for body text/placeholders
- Labels/links: rgba(0,0,0,0.3) muted
- All backgrounds: white (#fff)

### Typography

- Font: Poppins (Google Fonts, weights 300-900)
- Fallback: Arial, sans-serif
- Labels: uppercase, 12px, muted color
- Heading: font-weight 400 (regular)

### Buttons & Inputs

- All buttons: border-radius 40px (pill shape)
- btn-primary: bg #3e64ff, border #3e64ff, color #fff
- btn-primary hover: transparent bg, color #3e64ff
- Form controls: height 52px, border-radius 5px
- Form focus: border 1px solid #3e64ff (no shadow)

### Modal

- Max-width: 450px
- No border, box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)
- Close button: 40x40px, no background color (just the icon)
- Modal background: white

### Social Icons

- Size: 50x50px circles
- Background: white with 1px solid rgba(0,0,0,0.05) border
- Icon color: rgba(0,0,0,0.8)
- Hover: #3e64ff

### Layout

- Single-column form layout inside modal
- Social icons centered horizontally
- Form inputs stacked vertically with mb-2 spacing
- "Sign Up" button spans full width

## Implementation Notes

- Use React state to control modal open/close (avoid Bootstrap JS dependency)
- Form inputs should use controlled components
- Social icons: use lucide-react or similar icon library
- Placeholder images: https://picsum.photos/seed/signupbox-<n>/<w>/<h>
- No ColorLib references in app code — provenance only in spec and TEMPLATES.md
- Footer must link to https://www.componentdock.com/
