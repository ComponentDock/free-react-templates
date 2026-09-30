# SignupMint — Implementation Notes

## Source
- ColorLib slug: `signup-form-08`
- Preview: https://preview.colorlib.com/theme/signup-form-08/
- New name: `signupmint`

## Structure order (top to bottom)

1. Full-page container with `bg-[#f8fafb]` background
2. Two-column flex layout:
   - Left column (50% on md+): form contents
   - Right column (50% on md+): illustration image
3. Form contents (centered in 8/12 inner column):
   - h3 "Sign Up"
   - Paragraph subtext (muted gray)
   - 4 input groups (bottom-border-only):
     - Name (text)
     - Email (email)
     - Password (password)
     - Re-type Password (password)
   - Terms checkbox (default checked)
   - Register button (full-width, teal #38d39f)
   - Divider text "or register using"
   - 3 social login circular buttons (Facebook, Twitter, Google)
4. Footer: "Made with Component Dock" link

## Fidelity notes

### Form field behavior
- Labels are absolutely positioned, centered vertically in the input
- When input is filled, label moves up (use `field--not-empty` class or controlled state)
- Inputs have transparent background, only a 1px #ccc bottom border
- First group: top border-radius 7px; last group: bottom border-radius 7px
- Font size for inputs: 20px

### Button
- Height: 54px
- Padding: 0 30px (horizontal)
- Width: 100% (block)
- Background: #38d39f, text: #212529
- Hover: bg #29bb8a, text white
- Border-radius: 0.25rem (4px)
- Focus ring: 0 0 0 0.2rem rgba(56,211,159,0.5)

### Social icons
- 50px × 50px circles
- Facebook: #3b5998, hover #344e86
- Twitter: #1da1f2, hover #0d95e8
- Google: #ea4335, hover #e82e1e
- Icons centered in circle with SVG (use lucide-react equivalents or inline SVG)

### Checkbox
- Custom styled (hide native, use div indicator)
- Unchecked: #e6e6e6 background, 20×20px, border-radius 4px
- Checked: #38d39f background
- Checkmark icon in white when checked

### Typography
- Font: Roboto (300, 400) via Google Fonts `<link>` in index.html
- h3: 1.75rem, weight 500, line-height 1.2
- Body text (paragraph): #b3b3b3, weight 300
- Labels: 12px, #b3b3b3

### Responsive
- Below 768px: columns stack (form on top, illustration below)
- Illustration: full-width image, max-height constrained
- Content padding: 7rem top and bottom (reduce on mobile)
