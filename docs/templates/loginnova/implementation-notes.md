# LoginNova — Implementation Notes

**Source:** ColorLib Login Form V20 (slug: `login-form-v20`)
**Preview:** https://colorlib.com/etc/lf/Login_v20/index.html (live demo reachable)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v20.jpg
**New name:** `loginnova`

## Structure (component order)

1. `App.tsx` — root layout, full-viewport gradient background, flex center
2. `LoginForm.tsx` — form container (560px, flex wrap)
3. `Heading.tsx` — "ACCOUNT LOGIN" white uppercase heading
4. `InputRow.tsx` — side-by-side username + password inputs container
5. `FloatingInput.tsx` — reusable floating-label input with animation
6. `SignInButton.tsx` — dark button with gradient hover reveal
7. `ForgotPassword.tsx` — centered link below button

## Design fidelity notes

### Background
- Full viewport: `min-h-screen bg-gradient-to-r from-[#6a11cb] to-[#2575fc] flex items-center justify-center`
- No card — inputs float directly on gradient

### Heading
- "ACCOUNT LOGIN": `text-[#fefefe] font-opensans text-[30px] uppercase text-center w-full mb-[43px]`

### Input fields
- Side-by-side container: `flex w-[560px]`
- Each input wrapper: `w-1/2 h-[75px] relative bg-white border border-[#e0e0e0] border-b-0`
  - Username (left): `rounded-tl-[12px] border-r-0`
  - Password (right): `rounded-tr-[12px]`
- On focus/has-value: height collapses to 55px via CSS transition
- Label: absolute, top 28px → 10px on focus, font-size 15px → 13px, color #555555 → #111111
- Input: `font-opensans-bold text-[15px] text-[#555555] px-[30px] bg-transparent h-full`
- Placeholder: `#999999`

### Button
- Full width: `w-full h-[70px] rounded-b-[12px] bg-[#111111]`
- Hover: `bg-transparent` + gradient ::before with opacity transition
- Gradient: `bg-gradient-to-r from-[#6a11cb] to-[#2575fc]`
- Text: `text-white font-opensans-bold text-[15px] uppercase`
- Transition: 0.4s for all animations

### Footer link
- "Forgot password?" centered: `text-center w-full mt-[23px]`
- Color: `#cccccc`, hover: `#ffffff`
- Font: OpenSans Regular 13px

### Font
- Google Fonts: Open Sans (Regular 400, Bold 700)
- Link in index.html: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap`

## Key implementation notes

1. **Side-by-side inputs**: Use `flex` with `w-1/2` on each. The username input loses its right border, password loses its left border (or use border-l-0 on password).
2. **Height collapse on focus**: Use CSS transition on `height` from 75px to 55px. Alternatively, use a simpler approach with padding change.
3. **Floating label**: Absolute positioned label at top:28px, transitions to top:10px + smaller font on focus/has-value.
4. **Button gradient reveal**: Use `::before` pseudo-element with opacity transition. On hover, button bg becomes transparent and ::before opacity goes 0→1.
5. **No icon font needed**: This template has no avatar/icon — just text inputs and a button.
6. **Form validation**: Use zod + react-hook-form for username presence and password presence validation.
7. **Responsive**: At < 576px, inputs stack to 100% width. Left input gets top-right-radius too.
8. **No ColorLib references**: All provenance lives only in spec/docs. App code uses only design tokens.
