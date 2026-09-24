# Logindash — Implementation Notes

## Source
- ColorLib: Login Form V11 (login-form-v11)
- Preview: https://colorlib.com/etc/lf/Login_v11/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v11.jpg
- Preview was 404 at preview.colorlib.com/theme/login-form-v11/; used direct HTML file

## Section order (top to bottom)

1. Background layer — full-viewport gradient + decorative image overlay
2. Centered form card (white, 450px, border-radius 3px)
3. Title "LOGIN" — uppercase, Raleway Black, 30px
4. Email input — envelope icon (left), placeholder "Email", #e6e6e6 bg
5. Password input — lock icon (left), placeholder "Password", #e6e6e6 bg
6. "Remember me" custom checkbox — pink (#d33f8d) border
7. "LOGIN" button — full width, #d33f8d bg, white text, hover → #333333
8. "Or login with" divider
9. Facebook social button (left half) — #3b5998 text, envelope icon
10. Google social button (right half) — #555555 text, Google icon
11. "Not a member? Sign up now" footer link — hover underline → #d33f8d
12. Component Dock footer link (per project rules)

## Design token notes

### Colors to put in @theme (Tailwind v4)
- `--color-brand`: #d33f8d (primary pink — buttons, focus, hover)
- `--color-brand-dark`: #d43f8d (gradient end)
- `--color-brand-start`: #0250c5 (gradient start)
- `--color-surface`: #ffffff (card background)
- `--color-input-bg`: #e6e6e6 (input fields)
- `--color-text-dark`: #333333
- `--color-text-body`: #666666
- `--color-text-muted`: #999999
- `--color-text-input`: #686868
- `--color-placeholder`: #acacac
- `--color-fb`: #3b5998
- `--color-google`: #555555
- `--color-error`: #c80000

### Fonts (Google Fonts via <link>)
- Poppins (Regular 400) — body text
- Raleway (Black 900, SemiBold 600, Bold 700, Regular 400) — title, inputs, buttons, utility

### Key measurements
- Card width: 450px (responsive: max 100% with 15px padding)
- Input height: 62px
- Button height: 62px
- Social button height: 40px
- All border-radius: 3px
- Input left padding: 65px (for icon)

## Fidelity notes

- Original uses Linearicons for envelope/lock icons → use lucide-react equivalents
- Original uses Font Awesome for Facebook icon → use lucide-react Facebook icon or SVG
- Original Google button uses an image → use lucide-react icon or SVG
- Decorative background image (img-01.png) → use picsum.photos placeholder
- Checkbox uses FontAwesome checkmark → custom CSS or lucide-react check
- Focus animation uses CSS keyframes expanding box-shadow → implement with Tailwind animate or custom CSS
- "Remember me" checkbox requires custom styling (hidden native checkbox, styled label)
- Validation tooltips use data-validate attribute and JS → implement with form state + conditional rendering
