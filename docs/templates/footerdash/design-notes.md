# FooterDash — Implementation Notes

Source: ColorLib Bootstrap Footer 18
Preview: https://preview.colorlib.com/theme/bootstrap-footer-18/

## Structure order (top to bottom)

1. **Preview section** — light background, centered "Footer #18" heading, ~12em vertical padding
2. **Footer** — dark `#121212` background, 80px vertical padding:
   - Brand heading (h2, white, 30px, bold) — replace "Colorlib.com" with project name
   - Subscription form — centered, white input field + blue submit button
   - Navigation menu — horizontal row of uppercase links with letter-spacing
   - Social icons — circular buttons with dark background (Twitter, Facebook, Instagram, LinkedIn, YouTube → use lucide-react equivalents)
   - Copyright line — semi-transparent white text, heart icon, Component Dock link

## Section-by-section fidelity notes

### Preview section
- `ftco-section` class: padding `12em 0`, light background (inherited from body `#fff`)
- Centered h2 "Footer #18" — in our implementation this can be a demo heading or omitted if the template is just the footer component
- Use generous vertical padding to match the spacious feel

### Footer
- **Background:** `#121212` (very dark, near-black) — NOT pure black
- **Typography:** Poppins font family, weights 300-900 loaded via Google Fonts
- **Brand heading:** h2, `color: #fff`, `font-size: 30px`, `font-weight: 700`, `margin-bottom: 30px`
- **Subscription form:** Centered, max-width ~400px
  - Input: `height: 50px`, `padding: 0 20px`, `border: none`, `border-radius: 4px`, `font-size: 16px`, `color: rgba(0,0,0,0.5)`, `width: 70%`
  - Button: `height: 50px`, `padding: 0 30px`, `background: #007bff`, `color: #fff`, `border: none`, `border-radius: 4px`, `font-size: 14px`, `text-transform: uppercase`, `letter-spacing: 1px`, `cursor: pointer`, `margin-left: 5px`
  - Button hover: `background: #0069d9` (darker blue)
  - Form layout: flexbox row with input and button side by side
- **Navigation:** `.menu` class, links with `color: rgba(255,255,255,0.5)`, `text-transform: uppercase`, `letter-spacing: 1px`, `margin: 0 10px`. Menu has `margin-bottom: 30px`
- **Social icons:** `40px × 40px` circles (`border-radius: 50%`), `border: 1px solid rgba(255,255,255,0.1)`, dark background `#1a1a1a`. Icons inside are `20px` font-size, centered. Hover: `color: #fff` with `0.3s` transition
- **Copyright:** `color: rgba(255,255,255,0.3)`, `border-top: 1px solid rgba(255,255,255,0.1)`, `padding-top: 20px`. Includes heart icon (ion-ios-heart → use lucide-react Heart). Replace Colorlib attribution with Component Dock link

## Key implementation decisions

- The subscription form is the primary differentiator from other Bootstrap Footer templates — make it visually prominent
- Use flexbox for the form layout (input + button side by side) for responsiveness
- On mobile, stack the form input and button vertically
- The social icons should use lucide-react icons (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- The nav links should be in a horizontal row on desktop, stack vertically on mobile
