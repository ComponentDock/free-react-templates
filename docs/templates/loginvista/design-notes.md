# LoginVista — Design Notes

## Source

- ColorLib Login Form V12: https://colorlib.com/wp/template/login-form-v12/
- Preview URL: 404 at time of prep; screenshot used as primary reference
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v12.jpg

## Structure (top to bottom, single-page centered layout)

1. **Full-screen background** — city skyline image with blue-to-teal gradient overlay (CSS gradient on `::after` or overlay div)
2. **Avatar section** — circular image with white border ring, centered
3. **User name** — white bold text centered below avatar
4. **Username input** — pill-shaped, white bg, person icon left, placeholder "Username"
5. **Password input** — pill-shaped, white bg, lock icon left, placeholder "Password", type=password
6. **Login button** — full-width, dark charcoal, white text, pill corners
7. **Forgot link** — "Forgot Username / Password?" in teal/blue, centered
8. **Create account link** — "Create new account →" in teal/blue, centered, at bottom of viewport

## Section-by-section fidelity notes

### Background
- City skyline image fills entire viewport (cover)
- Gradient overlay: linear-gradient from ~#1a8ccc (top) to ~#00d4aa (bottom), opacity ~0.85
- Use a placeholder skyline from picsum.photos with overlay div

### Avatar
- Circular with white 3px border ring
- ~120px diameter, centered with margin-top ~80px from top
- Use picsum.photos/seed/loginvista-avatar/120/120

### User name
- Text "John Doe" — white, bold, font-size ~24px, centered
- Font: Poppins (Google Fonts)
- Margin-bottom ~30px

### Input fields
- White background, border-radius ~25px (pill shape)
- Border: 1px solid #e0e0e0 (very subtle)
- Padding: 12px 20px, height ~50px
- Icon on left side (lucide-react User and Lock icons), gray color
- Placeholder text in #999
- Width: 100% within the ~400px form container

### Login button
- Full-width within the form container
- Background: #3c3c3c (dark charcoal)
- Text: white, font-weight 600, font-size ~16px
- Border-radius: ~25px (matching inputs)
- Height: ~50px
- Hover: slightly lighter (#4a4a4a) or opacity 0.9
- Cursor pointer

### Links
- "Forgot Username / Password?" — font-size ~14px, color #0097e6 (teal), no underline, centered
- "Create new account →" — font-size ~14px, color #0097e6, with ArrowRight icon from lucide-react
- Position: near bottom of viewport (absolute or flex-grow spacer)

### Overall layout
- Single centered column, max-width ~400px
- No card/panel wrapper — fields float directly on the gradient background
- Vertical centering via flexbox (min-h-screen, items-center, justify-center)
- No navbar, no sidebar, no additional sections

## Implementation notes

- Create `src/components/Avatar.tsx` for the circular avatar
- Create `src/components/LoginForm.tsx` for the username + password + button + links
- Create `src/components/BackgroundOverlay.tsx` for the gradient + image background
- All in `src/App.tsx` composing these sections
- Use lucide-react for User, Lock, ArrowRight icons
- Google Font: Poppins via `<link>` in index.html
- Tailwind theme tokens: `--color-brand-blue`, `--color-brand-teal`, `--color-button-dark`
