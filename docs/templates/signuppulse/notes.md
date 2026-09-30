# SignupPulse — Implementation Notes

## Source
- ColorLib slug: `signup-form-09`
- Preview: https://preview.colorlib.com/theme/signup-form-09/
- New name: `signuppulse`

## Structure order (top to bottom)

1. Full-page container with light gray background
2. Centered row (justify-content-center)
3. White card (`.form-block`):
   - Box shadow: 0 2px 3px 0 rgba(0,0,0,0.1)
   - Padding: 60px (30px on mobile)
   - Border-radius: use default 0.25rem or keep subtle
4. Card contents:
   - h3 "Sign Up"
   - Paragraph subtext (muted gray)
   - 4 standard bordered input groups:
     - Name (text, `.first` for top-radius)
     - Email (text, `.first` for top-radius)
     - Password (password)
     - Re-type Password (password, `.last` for bottom-radius)
   - Checkbox row:
     - Left: checkbox + "Agree our Terms and Conditions" caption
     - Right: "Sign In" link (ml-auto)
   - Register button (full-width, pill-shaped, teal)
   - Divider "or register with"
   - 3 social login circular buttons (Facebook, Twitter, Google)
5. Footer: "Made with Component Dock" link

## Fidelity notes

### Form field style
- Standard full-border inputs (NOT bottom-border-only like Form 08)
- border: 1px solid #ced4da
- border-radius: 0.25rem (4px)
- Input padding: 0.375rem 0.75rem
- Font size: 1rem
- Label: standard block label above input (NOT floating/absolute)
- Focus: border-color #a0ead1, box-shadow glow

### Button
- Height: 54px
- Padding: 0 30px (horizontal)
- Width: 100% (block)
- Background: #38d39f, text: #212529
- Hover: bg #29bb8a, text white
- **Pill shape**: border-radius: 30px (key differentiator from Form 08)
- Focus ring: 0 0 0 0.2rem rgba(56,211,159,0.5)

### Social icons
- 50px × 50px circles
- Facebook: #3b5998
- Twitter: #1da1f2
- Google: #ea4335
- Icons centered in circle
- Row centered (text-center on container)

### Checkbox
- Custom styled (hide native, use div indicator)
- Unchecked: #e6e6e6 background, 20×20px, border-radius 4px
- Checked: #38d39f background
- Caption text: "Agree our Terms and Conditions" with link on "Terms and Conditions"

### Sign In link
- Positioned to the right of checkbox (ml-auto in flex row)
- Font-size: 14px
- Color: #888
- Underline on hover

### Card
- Background: white (#fff)
- Box shadow: 0 2px 3px 0 rgba(0,0,0,0.1)
- Padding: 60px desktop, 30px mobile
- Centered in container

### Typography
- Font: Roboto (300, 400) via Google Fonts
- h3: 1.75rem, weight 500, line-height 1.2
- Body text: color #b3b3b3, weight 300

### Responsive
- Below 768px: card padding reduces to 30px
- No two-column layout (single column always)
