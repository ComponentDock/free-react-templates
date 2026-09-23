# Keygate — Implementation Notes

## Source

- ColorLib: Login Form V13
- Slug: `login-form-13`
- Preview: https://preview.colorlib.com/theme/bootstrap/login-form-13/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-13.jpg

## Section Structure (in render order)

1. Full-page white background
2. Centered page heading "Login #03" (black, 28px)
3. White card with shadow, centered:
   - Header: "Sign In" (left) + social icons (right)
   - Username input with user icon overlay
   - Password input with lock icon overlay
   - "Save Password" checkbox (left) + Login button (right)
   - "Don't have an account? Sign Up" + "Forgot Password" links

## Fidelity Notes

### Background

- Full-page solid white (#ffffff). No gradient. No image.
- Use `min-h-screen bg-white` on the outermost wrapper.

### Typography

- Google Fonts: Lato (weights 300, 400, 700)
- Heading "Login #03": black, centered, 28px
- "Sign In" subheading: Lato 300 (light), black

### Card

- White background, border-radius 5px
- Shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
- Padding: ~20px (p-4 p-md-5)

### Form Inputs

- White background, 48px height
- Icon overlay (user/lock) positioned absolute left
- No visible border (Bootstrap form-control default)

### Login Button

- Green (#a0c334) background, white text
- Right-aligned in the checkbox+button row
- Hover: transparent background, green border+text (inverted)

### Social Icons

- Top-right of card header, flex row
- 40x40px, transparent bg, subtle border
- Gray (#999) icon color, green (#a0c334) on hover

### Checkbox

- Custom styled (not native)
- "Save Password" label, green (#a0c334) text
- Checked: green (#a0c334) checkmark

### Links

- "Sign Up" and "Forgot Password" — green (#a0c334)
- Centered in card footer

## Implementation Tasks

1. Create apps/keygate/ by copying simplest existing app
2. Rename package to @free-react-templates/keygate
3. Add Google Fonts (Lato 300/400/700) link in index.html
4. Set @theme tokens: brand-green #a0c334
5. Create src/components/LoginCard.tsx — the main form card with icon inputs
6. Create src/components/SocialIcons.tsx — Facebook + Twitter icon buttons
7. Compose in src/App.tsx: full-page white bg, centered card
8. Write tests (Vitest + RTL) for all components
9. Ensure 100% coverage
10. Run npm run verify:app keygate
11. Update public/CNAME and package.json homepage
12. Add footer with Component Dock link
13. Commit, push, deploy
