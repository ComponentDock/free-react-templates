# LoginCore — Implementation Notes

**Source:** ColorLib Login Form V2 (slug: `login-form-v2`)
**Preview:** https://colorlib.com/etc/lf/Login_v2/index.html (live demo reachable)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v2.jpg
**New name:** `logincore`

## Structure (component order)

1. `App.tsx` — root layout, full-viewport gray background, flex center
2. `LoginCard.tsx` — white card container (390px, 10px radius, shadow)
3. `Header.tsx` — "Welcome" heading + avatar icon
4. `EmailInput.tsx` — floating-label input with gradient focus underline
5. `PasswordInput.tsx` — floating-label input + eye toggle
6. `LoginButton.tsx` — pill button with sliding gradient hover
7. `SignUpFooter.tsx` — "Don't have an account? Sign Up" link

## Design fidelity notes

### Background & card
- Full viewport: `min-h-screen bg-[#f2f2f2] flex items-center justify-center`
- Card: `bg-white rounded-[10px] shadow-[0_5px_10px_0_rgba(0,0,0,0.1)] w-[390px] px-[55px] pt-[77px] pb-[33px]`
- Mobile (<576px): `px-[15px]` reduced horizontal padding

### Heading
- "Welcome": `text-[#333333] font-bold text-[30px] text-center font-poppins`
- Avatar icon: Use a styled `<div>` with initial letter (dark bg, rounded) instead of Material Design Iconic font

### Input fields
- Bottom-border-only pattern: `border-b-2 border-[#adadad]`
- Input: `h-[45px] w-full bg-transparent text-[15px] text-[#555555] font-poppins`
- Floating label: absolute positioned, transitions `top` on focus (0.4s)
- Focus underline: gradient `bg-gradient-to-r from-[#21d4fd] to-[#b721ff]` animating width from 0 to 100%
- Placeholder color: `#999999`
- Password eye toggle: positioned absolute right, `#999999` default, gradient on hover

### Button
- Full width: `w-full h-[50px] rounded-[25px]`
- Gradient background: `bg-gradient-to-r from-[#21d4fd] to-[#b721ff]`
- Hover: sliding gradient animation using CSS transform/translate
- Text: `text-white font-poppins-medium text-[15px] uppercase`
- Transition: 0.4s for all animations

### Footer
- "Don't have an account?" in `#666666`, "Sign Up" in `#333333`
- Font: Poppins Regular 13px
- Link hover: gradient text color
- Padding-top: 115px from the button

### Font
- Google Fonts: Poppins (Regular 400, Medium 500, Bold 700, SemiBold 600)
- Link in index.html: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`

## Key implementation notes

1. **Floating label pattern**: Use CSS transitions on `top` position, not placeholder text. On focus or has-value, label slides up.
2. **Gradient underline**: Use `::before` pseudo-element (or Tailwind equivalent) with width transition from 0 to 100%.
3. **Button gradient hover**: The original uses a wider gradient that slides in from left on hover. Implement with CSS transform or a clip-path animation.
4. **No icon font needed**: Replace Material Design Iconic "A" icon with a styled div containing the initial letter.
5. **Eye toggle**: Use lucide-react Eye/EyeOff icons instead of Material Design Iconic Font.
6. **Form validation**: Implement with zod + react-hook-form for email format and password presence validation.
7. **No ColorLib references**: All provenance lives only in spec/docs. App code uses only design tokens.
