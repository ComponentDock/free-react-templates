# Loginnest — Implementation Notes

## Source

- ColorLib template: "Login Form V12"
- Source slug: `login-form-v12`
- Source URL: https://colorlib.com/wp/template/login-form-v12/
- Preview URL: https://preview.colorlib.com/theme/login-form-v12/ (404 at prep time)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v12.jpg
- Description: "highest-rated free login form template that unlocks a more personalized sign-in experience with avatar and name"
- Stack: React 19 + Vite + Tailwind 4 + TypeScript

## Section Order

1. **Background** — full-viewport blue gradient overlay on cityscape photo
2. **Avatar** — circular image with white border, centered
3. **User name** — "John Doe" in bold white text, centered
4. **Form** — username input (user icon), password input (lock icon), dark pill-shaped login button
5. **Forgot link** — "Forgot Username / Password?" in white
6. **Create account** — "Create new account →" in white, bottom of page
7. **Footer** — Component Dock attribution

## Fidelity Notes

### Background
- Cityscape photo (use picsum.photos with blue tint overlay)
- Overlay: linear-gradient(135deg, rgba(33,150,243,0.85), rgba(13,71,161,0.9))
- Full viewport height, background-size cover

### Avatar
- Circular: border-radius 50%, width/height ~120px
- White border: 4px solid white
- Use placeholder image: https://picsum.photos/seed/loginnest-avatar/200/200

### User Name
- "John Doe" centered below avatar
- Poppins Bold 24px, white, text-shadow for readability

### Form Inputs
- Pill-shaped: border-radius 50px
- White background, height 50px, padding 0 20px
- Left icon: user (username), lock (password) — #AAAAAA color
- Placeholder: #AAAAAA, Poppins Regular 14px
- Box-shadow: 0 2px 10px rgba(0,0,0,0.1)
- No visible border

### Login Button
- Full-width, background #333333 (dark gray)
- Pill-shaped: border-radius 50px, height 50px
- White text, uppercase, Poppins Bold 16px
- Hover: background #222222

### Links
- "Forgot Username / Password?" — centered, white, Poppins 14px
- "Create new account →" — centered, white, Poppins 14px, bottom of viewport
- Both have hover underline

## Implementation Tasks

- [ ] Create `apps/loginnest/` from simplest existing login app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `src/index.css` with Tailwind + blue gradient theme tokens
- [ ] Build `Background.tsx` — blue overlay on cityscape
- [ ] Build `Avatar.tsx` — circular image with white border
- [ ] Build `LoginForm.tsx` — username, password, pill-shaped inputs, dark button
- [ ] Build `Links.tsx` — forgot password + create account links
- [ ] Compose in `App.tsx`
- [ ] Write tests with 100% coverage
- [ ] Run `npm run verify:app loginnest`
