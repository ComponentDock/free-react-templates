# LoginBolt — Implementation Notes

**Source:** ColorLib Login Form V17  
**Preview:** https://preview.colorlib.com/theme/login-form-v17/ (404 at prep time)  
**Spec:** `openspec/specs/template-loginbolt/spec.md`

## Structure Order

1. Full-viewport container (gray background, flex center)
2. White card (max-width 1170px, flex row-reverse)
   - Left: Form panel (50%)
     - Title "Account Login"
     - Username input (half width)
     - Password input (half width)
     - Sign In button (full width)
     - Forgot password row
     - Sign Up link
   - Right: Image panel (50%)
     - Background image with dark overlay

## Section-by-Section Fidelity Notes

### Page Background
- `#f2f2f2` full viewport, flexbox centered
- Use `min-h-screen bg-[#f2f2f2] flex items-center justify-center p-4`

### Card Container
- White background, max-width 1170px, flex row-reverse
- Use `bg-white max-w-[1170px] w-full flex flex-row-reverse overflow-hidden`
- On mobile (≤768px): stack vertically

### Image Panel (Right)
- Background image covering full panel, `background-size: cover`, `background-position: center`
- Dark overlay via `::before` pseudo: `rgba(0,0,0,0.3)`
- Use an `<img>` with `object-cover` and a sibling div with `bg-black/30` absolute overlay
- Placeholder: `https://picsum.photos/seed/loginbolt/800/900`

### Form Panel (Left)
- 50% width, padding `303px 65px 40px 65px` (top heavy to push content down/center)
- Use `w-1/2 p-[303px_65px_40px_65px] max-lg:p-[100px_30px_40px_30px] max-md:w-full max-md:p-[150px_15px_40px_15px]`

### Title
- "Account Login", Poppins Regular, 20px, #555555, uppercase, letter-spacing 2px, centered, full width
- Tailwind: `text-center uppercase tracking-[2px] text-[#555555] text-xl w-full font-poppins`

### Input Fields
- Side by side on desktop (each 50%), stacked on mobile
- Border: 1px solid #e6e6e6, no outline
- Height: 55px, padding: 0 25px
- Font: Poppins Regular, 18px, #666666
- Placeholder: #999999
- Focus effect: green (#00ad5f) border that scales in from 1.1x/1.3x to 1x over 0.4s
- Use a wrapper div with `border border-[#e6e6e6]` and an inner `input` with no border
- Focus ring: absolute overlay div with `border-2 border-[#00ad5f]` animated with `scale` transition, hidden by default, visible on `:focus-within`

### Sign In Button
- Full width, height 50px, border-radius 3px
- Background: #00ad5f, hover: #333333
- Text: white, uppercase, Montserrat Bold, 12px, letter-spacing 1px
- Use `w-full h-[50px] rounded-[3px] bg-[#00ad5f] hover:bg-[#333] text-white uppercase font-bold text-xs tracking-wider font-montserrat`

### Forgot Password Row
- Centered text
- "Forgot" in #999999 (13px), followed by "User name / password?" link in #00ad5f
- Use flex with gap, `text-center`

### Sign Up Link
- Centered, #00ad5f, uppercase, 15px
- `text-center text-[#00ad5f] uppercase text-[15px]`

### Validation
- On submit with empty fields: show validation tooltip
- Position: absolute, right side of input
- White background, 1px solid #c80000, 2px radius
- Text: #c80000, 13px
- Tooltip arrow via FontAwesome icon (use lucide AlertCircle icon instead)
- Show on hover or always on mobile

### Footer
- Minimal: "Made with Component Dock" linking to https://www.componentdock.com/

## Implementation Tasks

1. [ ] Scaffold `apps/loginbolt/` from simplest existing login app
2. [ ] Rename package to `@free-react-templates/loginbolt`
3. [ ] Set up `public/CNAME` and `package.json` homepage
4. [ ] Create `src/App.tsx` with split-screen layout
5. [ ] Build `LoginPanel.tsx` component (form side)
6. [ ] Build `ImagePanel.tsx` component (image side with overlay)
7. [ ] Implement input focus animation (scale-in green border)
8. [ ] Implement validation logic (zod + react-hook-form)
9. [ ] Add responsive breakpoints (stack on mobile)
10. [ ] Footer with Component Dock link
11. [ ] Add Poppins + Montserrat fonts via Google Fonts `<link>` in `index.html`
12. [ ] Write tests (100% coverage)
13. [ ] Verify: `npm run typecheck && npm run lint && npm run test:coverage && npm run build`
