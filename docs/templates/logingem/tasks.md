# LoginGem — Implementation Tasks & Design Notes

## Source

- **ColorLib template:** Login Form V11
- **Source URL:** https://colorlib.com/wp/template/login-form-v11/
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v11/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v11.jpg

## Structure (section order)

1. Full-viewport gradient background (pink → blue diagonal)
2. Centered white card
   - "LOGIN" heading (bold, uppercase, centered)
   - Email input (mail icon left, light gray bg)
   - Password input (lock icon left, light gray bg, masked)
   - "Remember me" checkbox (checked by default, pink accent)
   - "LOGIN" button (full-width, pink/magenta bg, white text)
   - "Or login with" divider text
   - Facebook + Google social buttons (side by side, white bg, border)
   - "Not a member? Sign up now" link at bottom

## Fidelity notes

### Background
- Diagonal gradient: pink `#d63384` (top-left) to blue `#0d6efd` (bottom-right)
- CSS: `linear-gradient(135deg, #d63384, #0d6efd)` or similar angle
- Full viewport (100vw × 100vh), flexbox center

### Card
- White `#ffffff`, max-width ~400-450px
- Rounded corners ~10px, subtle shadow `0 0.5rem 1rem rgba(0,0,0,0.15)`
- Padding ~30-40px
- Centered via flex (justify-center, items-center)

### Form inputs
- Full-width, height ~45-50px
- Background `#e9ecef` (gray-200)
- No visible border (or matching gray border)
- Rounded corners ~5px
- Left padding for icon (~40-45px), icon in absolute position
- Icon color: `#adb5bd` (gray-400)
- Placeholder text: `#6c757d` or `#495057`

### Login button
- Full-width, height ~50px
- Background `#e83e8c` (pink accent)
- White text, uppercase, bold, letter-spacing ~1px
- Rounded ~5px
- Hover: darken slightly

### Social buttons
- Two buttons side by side (flex, gap ~10px)
- Each: white bg, light gray border (`#dee2e6`), ~5px radius
- Brand icon + text, centered
- Facebook icon: blue, Google icon: multicolor
- Hover: border darkens

### Typography
- "LOGIN" heading: bold 700, uppercase, ~24-28px, letter-spacing ~2px
- Body/labels: regular 400, ~14-16px
- System sans-serif stack (Bootstrap default)

### Footer
- "Not a member? Sign up now" centered at card bottom
- "Sign up now" is underlined, clickable link
- Link to Component Dock in the app footer (required)

## Implementation tasks

- [ ] Create app scaffold: `apps/logingem/` from simplest existing app
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `logingem.free.componentdock.com`
- [ ] Create `src/index.css` with Tailwind v4 entry + gradient theme tokens
- [ ] Create `src/components/LoginCard.tsx` (main card component)
- [ ] Create `src/components/FormField.tsx` (reusable input with icon)
- [ ] Create `src/components/SocialButtons.tsx` (Facebook + Google)
- [ ] Create `src/App.tsx` (composes background + card)
- [ ] Create `src/main.tsx` entry
- [ ] Add gradient background class or inline style
- [ ] Style input fields with gray bg, icons, placeholder
- [ ] Style login button (pink, full-width, uppercase)
- [ ] Style social buttons (side by side, bordered)
- [ ] Style "Remember me" checkbox with pink accent
- [ ] Add "Sign up now" link at bottom
- [ ] Add hover effects (button darken, social border darken)
- [ ] Ensure responsive layout (card stays centered)
- [ ] Add footer with Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Run `npm run spec:validate` to verify spec
- [ ] Run `npm run verify:app logingem` for per-app gate
