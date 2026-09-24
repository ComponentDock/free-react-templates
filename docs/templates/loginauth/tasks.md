# Loginauth — Implementation Notes

## Source
- ColorLib: Login Form V15 (login-form-v15)
- Preview: https://colorlib.com/etc/lf/Login_v15/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v15.jpg
- Preview.colorlib.com/theme/ returned 404; used direct HTML file from colorlib.com/etc/

## Section order (top to bottom)

1. Background layer — full-viewport light grey (#ebeeef), flex centered
2. Centered login card (white, 670px wide, border-radius 10px, overflow hidden)
3. Title banner — full-width background image with dark teal overlay (rgba(54,84,99,0.7))
4. "Sign In" heading — Poppins Bold, 30px, white, centered in banner
5. Username input — label "Username", placeholder "Enter username", bottom-border focus animation
6. Password input — label "Password", placeholder "Enter password", bottom-border focus animation
7. "Remember me" checkbox — custom styled, green (#57b846) when checked
8. "Forgot Password?" link — grey (#999999), hover green (#57b846)
9. Login button — full width, green (#57b846), pill shape (border-radius 25px), 50px height
10. Component Dock footer link (per project rules)

## Design token notes

### Colors to put in @theme (Tailwind v4)
- `--color-brand`: #57b846 (primary green — buttons, focus, hover, checkbox)
- `--color-bg-page`: #ebeeef (page background)
- `--color-surface`: #ffffff (card background)
- `--color-overlay`: rgba(54,84,99,0.7) (title banner overlay)
- `--color-text-label`: #808080 (input labels)
- `--color-text-input`: #555555 (input text)
- `--color-text-body`: #666666 (body text, links)
- `--color-text-muted`: #999999 (helper text, placeholders)
- `--color-text-heading`: #ffffff (title text)
- `--color-button-hover`: #333333 (button hover background)
- `--color-focus-underline`: #57b846 (focus animation)

### Font tokens
- `--font-body`: Poppins (Regular, Medium, SemiBold, Bold via Google Fonts)
- Body text: Poppins Regular 14px
- Labels: Poppins Regular 15px
- Title: Poppins Bold 30px
- Button: Poppins Regular 16px

### Component notes
- Input focus animation: a 1px green line that expands from width 0 to 100% on :focus
- Checkbox: custom styled, uses ::before pseudo-element with font-awesome checkmark
- Button: pill shape (border-radius 25px), full width, 50px height
- Card: 670px wide, border-radius 10px, centered with flex

## Implementation approach
1. Create `apps/loginauth` — copy simplest existing login app
2. Rename package to `@free-react-templates/loginauth`
3. Set up Poppins via Google Fonts in index.html
4. Create `src/components/` — LoginCard.tsx (single component for the form)
5. Build sections: Banner → Form (Username, Password, Checkbox, Link, Button)
6. Implement focus animation with CSS transition on a pseudo-element
7. Custom checkbox with Tailwind + peer classes
8. Component Dock footer link
9. Validate with spec: all scenarios pass
