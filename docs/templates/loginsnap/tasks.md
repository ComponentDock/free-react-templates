# LoginSnap — Implementation Tasks & Design Notes

## Source

- ColorLib: Login Form V14 (`login-form-v14`)
- Preview: `https://colorlib.com/etc/lf/Login_v14/index.html`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v14.jpg`

## Design Notes

### Overall layout
- Single centered card on a light gray (`#ebebeb`) full-viewport background
- Card: white, 560px wide, 10px border-radius, vertically + horizontally centered
- Very minimal design — a single form card, no split panels, no images

### Section order
1. Full-page container (gray background, flexbox centering)
2. Login card
   - "Account Login" heading (uppercase, left-aligned, 30px)
   - Username field (label + input)
   - Password field (label + input + show/hide toggle)
   - Remember me checkbox + Forgot Password link (row)
   - Login button (pill-shaped)

### Typography
- Primary font: Raleway (Google Fonts)
  - Regular: body text, links, checkbox label
  - Medium: heading, input text
  - SemiBold: field labels
  - Bold: button text
- All labels are uppercase, 13px

### Colors
- Page background: `#ebebeb`
- Card background: `#ffffff`
- Text: `#555555` (headings, labels, input text)
- Secondary text: `#999999` (placeholder, checkbox label, password toggle)
- Links: `#666666` default, `#57b846` hover
- Brand/accent: `#57b846` (green) — focus borders, hover states, checkbox check
- Button default: `#333333` → hover `#57b846`
- Validation error: `#c80000`
- Input border: `#e6e6e6`

### Key interactions
- Input focus: green border with scale animation (scaleX 1.1/ scaleY 1.3 → 1.0, 0.4s)
- Password toggle: eye icon toggles type, changes color on hover
- Button: background transition 0.4s on hover (black → green)
- Validation: tooltip appears on right side of input with error text

### Component breakdown
- `LoginPage` — full-page container
- `LoginCard` — the white card wrapper
- `FormField` — reusable label + input + focus animation
- `PasswordToggle` — eye icon show/hide
- `RememberMe` — checkbox + label
- `LoginButton` — full-width pill button

## Implementation order

1. Set up workspace (`apps/loginsnap/`)
2. Install Raleway via Google Fonts in `index.html`
3. Create `LoginPage` component (full-viewport gray background, flexbox center)
4. Create `LoginCard` component (white card, 560px, 10px radius, padding)
5. Add "Account Login" heading (Raleway-Medium, 30px, uppercase, `#555555`)
6. Create `FormField` component with focus animation
7. Add Username field (label + input)
8. Add Password field (label + input + toggle)
9. Add `PasswordToggle` (eye icon, toggle type, hover color)
10. Add Remember me checkbox + Forgot Password link row
11. Add Login button (full-width, pill, hover transition)
12. Add form validation (required fields, error tooltips)
13. Responsive adjustments (mobile padding)
14. Add footer with Component Dock link
15. Write tests (TDD: test each component, 100% coverage)
