# Loginveil — Design Notes

## Source

- ColorLib: Login Form 16 (`login-form-16`)
- Preview: `https://preview.colorlib.com/theme/bootstrap/login-form-16/`

## Structure order

1. Centered heading ("Sign In" or template title)
2. Login card (split-screen):
   - Left half: sign-in form (username + password + eye toggle)
   - Right half (purple-mauve bg): submit button + remember me + forgot password + social icons

## Section-by-section fidelity notes

### Heading
- Centered, 28px, font-weight 400, color black
- On original: "Login #06"; we use "Sign In" or keep generic

### Login card
- White background, 5px border-radius, box-shadow 0px 10px 34px -15px rgba(0,0,0,0.24)
- Max-width: col-lg-7 (about 540px at lg breakpoint)
- On desktop (>=992px): two equal halves side by side
- On mobile: full-width stacked

### Left half (form area)
- White background, padding p-4 py-md-5
- "Sign In" heading: h3, font-weight 300, mb-4
- Username input: bottom-border only (no side borders), 48px height, 16px font, placeholder "Username"
- Password input: same style, placeholder "Password", eye toggle icon (font-awesome fa-eye) positioned absolute right, vertically centered
- Toggle functionality: click toggles between type="password" and type="text"

### Right half (actions area)
- Background: #b96b9f (brand purple-mauve) via .bg-primary
- Submit button: "Sign me in now", full-width, background #17223b (dark navy), rounded
  - Hover: transparent bg, navy border, navy text (inverse effect)
- Remember Me checkbox: white text on purple bg, white checkmark, checked by default
- Forgot Password link: right-aligned, white text
- Divider: "— Or Sign In With —", white text, centered
- Social icons: Facebook + Twitter, 40x40 circles, white background, brand color icon

### Responsive behavior
- At <992px: halves stack vertically (left first, then right)
- Right half maintains full purple background even when stacked

## Key implementation notes

- Use Tailwind classes, NOT Bootstrap classes
- Translate .bg-primary to a custom Tailwind color (#b96b9f)
- Translate .btn-secondary to custom button styles
- Password toggle: useState for password field type
- Checkbox: standard HTML checkbox with custom styling
- Social icons: use lucide-react or similar (not font-awesome)
- Images: use picsum.photos for any placeholder images
- No colorlib.com references in any app file
