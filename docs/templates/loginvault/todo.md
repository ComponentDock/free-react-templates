# LoginVault — Implementation Notes

**Source:** ColorLib Login Form V5  
**Preview:** https://preview.colorlib.com/theme/login-form-v5/ (404 at prep time)  
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v5.jpg  
**Spec:** `openspec/specs/template-loginvault/spec.md`

## Structure Order

1. Full-viewport container (gradient background + decorative overlay, flex center)
2. White card (centered, ~400px wide, rounded, shadowed)
   - Title: "Sign In With"
   - Social login buttons row (Facebook + Google)
   - Username input (label + input field)
   - Password input (label + "Forgot?" link + input field)
   - Sign In button (full width, dark)
   - "Not a member? Sign up now" link
3. Footer: "Made with Component Dock"

## Section-by-Section Fidelity Notes

### Page Background
- Full viewport gradient: 135deg from #00d2ff (bottom-left) → #3a7bd5 (center) → #e040fb (top-right)
- Decorative network/constellation overlay: thin white lines connecting geometric nodes at ~15% opacity
- Use CSS `background: linear-gradient(135deg, #00d2ff, #3a7bd5, #e040fb)` on a full-viewport container
- Overlay can be an SVG or canvas element with animated/static network lines, or a CSS pseudo-element with a repeating pattern
- Tailwind: `min-h-screen bg-gradient-to-br from-[#00d2ff] via-[#3a7bd5] to-[#e040fb] flex items-center justify-center p-4 relative overflow-hidden`

### Decorative Network Overlay
- Thin white/transparent lines connecting dots/nodes in a geometric pattern
- Nodes appear at random positions, lines connect nearby nodes
- Very low opacity so gradient remains dominant
- Implementation: SVG with `<line>` elements connecting node positions, or a lightweight canvas animation
- Alternatively: use a CSS background pattern or an `<img>` with a transparent network illustration
- Keep it simple — static lines at ~15% opacity are sufficient for fidelity

### Card Container
- White background, ~400px wide, generous internal padding (~40px)
- Rounded corners (~12px), subtle drop shadow
- Centered both vertically and horizontally
- Tailwind: `bg-white rounded-xl shadow-lg w-full max-w-[400px] p-10`

### Title
- "Sign In With" — Poppins Regular, ~28px, #333333, centered
- Tailwind: `text-center text-[28px] font-normal text-[#333333] mb-6`
- Add Google Font `<link>` for Poppins in `index.html`

### Social Login Buttons
- Two buttons side by side in a flex row with gap
- Each button: ~44px height, flex-1, flex center, rounded (~4px), font Poppins Medium ~16px
- Facebook button: bg #3b5998, white text, Facebook icon (lucide-react or SVG)
- Google button: bg white, border #e0e0e0, dark text, Google icon (lucide-react or SVG)
- Tailwind container: `flex gap-3 mb-6`
- Facebook: `flex-1 h-11 rounded bg-[#3b5998] text-white flex items-center justify-center gap-2 font-medium`
- Google: `flex-1 h-11 rounded border border-[#e0e0e0] bg-white text-[#333] flex items-center justify-center gap-2 font-medium`
- Icons: use inline SVGs for Facebook (f) and Google (G) logos — do NOT use lucide for brand logos
- Hover: slight opacity change (`hover:opacity-90`)

### Input Fields
- Labels above each input: "Username", "Password" — Poppins Regular, ~14px, #333333
- Inputs: light gray background (#f0f0f0), no visible border, rounded (~4px), ~48px height, full width
- Placeholder text: light gray (#999999)
- Tailwind: `w-full h-12 bg-[#f0f0f0] rounded px-4 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#3a7bd5]`
- Focus ring: use Tailwind `focus:ring-2 focus:ring-[#3a7bd5]` for a subtle blue focus indicator

### "Forgot?" Link
- Positioned next to the "Password" label on the same line
- Text: "Forgot?" — gray (#999999), underlined, ~12px
- Tailwind: `ml-auto text-xs text-[#999999] underline hover:text-[#333333]`
- Container: `flex items-center mb-1`

### Sign In Button
- Full width, ~48px height, rounded (~4px)
- Background: #333333, white text, Poppins SemiBold, ~16px
- Tailwind: `w-full h-12 bg-[#333333] hover:bg-[#444444] text-white font-semibold rounded text-base transition-colors`
- On click: validates inputs, shows error if empty

### Sign Up Link
- Centered below the button
- "Not a member?" in gray (#999999), "Sign up now" underlined and slightly darker
- Tailwind: `text-center text-sm text-[#999999] mt-4`
- "Sign up now" wrapped in `<a>` with `underline text-[#333333] hover:text-[#000000]`

### Validation
- On submit with empty fields: show error message below the respective input
- Error text: red (#c80000), 13px, positioned below the input
- Use zod + react-hook-form for validation
- Error message: "This field is required"

### Footer
- Minimal: "Made with Component Dock" linking to https://www.componentdock.com/
- Tailwind: `text-center text-xs text-white/60 py-4`

## Implementation Tasks

1. [ ] Scaffold `apps/loginvault/` from simplest existing login app
2. [ ] Rename package to `@free-react-templates/loginvault`
3. [ ] Set up `public/CNAME` and `package.json` homepage
4. [ ] Create `src/App.tsx` with full-viewport gradient layout
5. [ ] Build `NetworkOverlay.tsx` decorative SVG/canvas component
6. [ ] Build `LoginCard.tsx` container component (white card)
7. [ ] Build `SocialButtons.tsx` (Facebook + Google buttons with icons)
8. [ ] Build `LoginForm.tsx` (inputs, button, validation)
9. [ ] Build `SignUpLink.tsx` (footer link within card)
10. [ ] Add validation with zod + react-hook-form
11. [ ] Add Poppins font via Google Fonts `<link>` in `index.html`
12. [ ] Add inline SVGs for Facebook and Google brand icons
13. [ ] Write tests (100% coverage)
14. [ ] Verify: `npm run typecheck && npm run lint && npm run test:coverage && npm run build`
