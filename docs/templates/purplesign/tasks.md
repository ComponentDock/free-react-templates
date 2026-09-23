# PurpleSign — Implementation Notes

## Source
- ColorLib: Login Form V12
- Slug: `login-form-12`
- Preview: https://preview.colorlib.com/theme/bootstrap/login-form-12/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-12-2.jpg

## Section Structure (in render order)

1. **Full-page background** — solid purple `#c859ff`, no gradient
2. **Page heading** — centered `<h2>` "Login #02", white, ~28px
3. **Login form card** — centered column (max ~33% width on lg), contains:
   - "Sign In" subheading (Lato 300, white)
   - Username input (transparent bg, white bottom border)
   - Password input (same style)
   - Submit button "Sign In" (yellow pill, full width)
   - Remember Me + Forgot Password row
   - "Or Sign In With" divider
   - Social buttons row (Facebook + Twitter)

## Fidelity Notes

### Background
- Full-page solid `#c859ff` — NOT a gradient. No background image.
- Use `min-h-screen bg-[#c859ff]` on the outermost wrapper.

### Typography
- Google Fonts: Lato (weights 300, 400, 700)
- Base: 16px, line-height 1.8
- Heading "Login #02": white, centered, ~28px
- "Sign In" subheading: Lato 300 (light), white, centered

### Form Inputs
- **No border box** — only a bottom border line
- Bottom border: `1px solid rgba(255,255,255,0.2)`
- Focus border: `1px solid rgba(255,255,255,0.4)` (slightly brighter)
- Background: fully transparent
- Text color: white
- Placeholder: `rgba(255,255,255,0.8)` (semi-transparent white)
- Height: ~40px

### Submit Button
- Full width of form
- Background: `#f6f078` (yellow-green brand)
- Text: `#000` (black)
- Border-radius: `40px` (fully rounded pill)
- No box-shadow
- Hover: transparent background, yellow border + text (inverted)
- Transition: `0.3s all ease`

### Checkbox (Remember Me)
- Custom styled (not native checkbox)
- Unchecked: FontAwesome `\f0c8` in `rgba(255,255,255,0.1)`
- Checked: FontAwesome `\f14a` in `#f6f078`
- Label text: white

### Social Buttons
- Container: full width, flex row
- Each button: white bg, black text, rounded (border-radius inherited from `.btn`)
- Width: ~50% each (with margin gap)
- Hover: black bg, white text, black border
- Border: `1px solid rgba(255,255,255,0.4)`
- Use lucide-react icons (Facebook, Twitter/X) instead of FontAwesome/ionicons

### Divider
- Text: "— Or Sign In With —" in white
- Full width, centered

## Implementation Tasks

1. [ ] Create `apps/purplesign/` by copying simplest existing app
2. [ ] Rename package to `@free-react-templates/purplesign`
3. [ ] Add Google Fonts (Lato 300/400/700) link in `index.html`
4. [ ] Set `@theme` tokens: brand-yellow `#f6f078`, brand-purple `#c859ff`
5. [ ] Create `src/components/LoginCard.tsx` — the main form card
6. [ ] Create `src/components/Checkbox.tsx` — custom "Remember Me" checkbox
7. [ ] Create `src/components/SocialButtons.tsx` — Facebook + Twitter buttons
8. [ ] Compose in `src/App.tsx`: full-page purple bg, centered card
9. [ ] Write tests (Vitest + RTL) for all components
10. [ ] Ensure 100% coverage
11. [ ] Run `npm run verify:app purplesign`
12. [ ] Update `public/CNAME` and `package.json` homepage
13. [ ] Add footer with Component Dock link
14. [ ] Commit, push, deploy
