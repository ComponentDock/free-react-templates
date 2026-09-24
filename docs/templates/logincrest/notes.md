# LoginCrest — Design Notes

Source: ColorLib Login Form V19 (slug: `login-form-v19`)
Preview: https://preview.colorlib.com/theme/login-form-v19/ (404)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v19.jpg

## Structure order (top to bottom)

1. Full-page ice-blue background (#e8f6fa)
2. Centered white card (max-width ~400px, rounded, shadowed)
3. "Account Login" heading (centered, regular weight, gray #555)
4. Email input (full border, placeholder "Email")
5. Password input (flush below email, same border style, placeholder "Password")
6. SIGN IN button (full-width, blue #5468d4, uppercase white text)
7. "Forgot Username / Password?" text (gray + blue link)
8. "Create an account? Sign up" text (gray + blue link)

## Section-by-section fidelity notes

### Background
- Solid ice-blue (#e8f6fa) — no gradient, no pattern, no image.
- Covers entire viewport height.

### Card
- White background, border-radius ~8px, subtle box-shadow.
- Horizontally and vertically centered using flexbox (min-h-screen + items-center + justify-center).
- Max-width ~400px, padding ~40px 50px.
- On mobile (<480px): width expands, padding reduces slightly.

### Heading
- "Account Login" — not bold, ~28px, color #555555.
- Centered text, margin-bottom ~30px.

### Inputs
- Full-width inside card, stacked vertically with no gap (borders touch).
- Full box borders (not bottom-only), 1px solid #dddddd, border-radius 4px.
- Height ~48px, padding 12px 16px.
- Placeholder color #999999.
- Focus state: border-color changes to brand blue (#5468d4).

### Button
- Full-width, background #5468d4, white text, uppercase, letter-spacing 1px.
- Border-radius 4px, font-weight 500, padding ~14px 0.
- Hover: darken to ~#4759c5.
- margin-top ~20px (space below inputs).

### Links section
- Centered text, font-size ~14px.
- "Forgot" + "Create an account?" in gray #888888.
- "Username / Password?" and "Sign up" in blue #5468d4.
- Margin-top ~20px below button.

### Responsive
- Desktop: card centered with max-width.
- Mobile (<480px): card width ~90vw, padding reduces to ~30px.

## Component breakdown

- `App.tsx` — full-page wrapper with ice-blue background + centered card
- `components/LoginCard.tsx` — the white card with heading, form, button, links
- `components/LoginForm.tsx` — email + password inputs + sign-in button
- `components/LoginFooter.tsx` — forgot password + sign up links

## Implementation notes

- Use Tailwind's `min-h-screen flex items-center justify-center` for centering.
- Inputs are stacked with no gap — use `space-y-0` or manual negative margin, or just no gap between them with matching border-radius only on first/last.
- Blue accent color in `@theme` block: `--color-brand: #5468d4`.
- Use `lucide-react` for any icons if added (none in original screenshot).
- Placeholder images: none needed (no images in this template).
