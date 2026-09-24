# LoginCrux — Implementation Notes

## Template Info
- **ColorLib source:** Login Form V17
- **Slug:** `login-form-v17`
- **Preview URL:** `https://preview.colorlib.com/theme/login-form-v17/` (404 at prep time)
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v17.jpg`
- **New name:** `logincrux`

## Structure Order (components to build)

1. `Navbar.tsx` — minimal top bar with brand name
2. `Hero.tsx` — split-screen container (left image + right form card)
3. `LoginForm.tsx` — email input, password input, remember me, forgot password, submit button, signup link
4. `Footer.tsx` — Component Dock attribution

## Design Fidelity Notes

### Split-Screen Layout
- Two-column flexbox or CSS Grid: `grid-template-columns: 1fr 1fr` on desktop
- Left column: full-height background image (`https://picsum.photos/seed/logincrux-1/1280/939`) with a dark overlay using `bg-black/50` or similar
- Right column: white background (`bg-white`), content vertically centered
- Mobile (<768px): left column `hidden`, right column `col-span-full`

### Color Tokens (use in Tailwind `@theme`)
```
--color-primary: #00ad5e;
--color-primary-hover: #02ab60;
--color-primary-light: #85e3bf;
--color-primary-tint: #d5f4e4;
--color-bg: #f2f2f2;
--color-card: #ffffff;
--color-text: #1a1a1a;
--color-text-secondary: #64748b;
--color-border: #ddd;
```

### Form Styling
- Inputs: `border border-gray-300 rounded-md px-4 py-3 w-full`
- Submit button: `bg-[#00ad5e] hover:bg-[#02ab60] text-white font-semibold rounded-md py-3 w-full`
- Placeholder text color: `text-gray-400`
- Input icons: `lucide-react` (Mail, Lock, Eye, EyeOff)

### Typography
- Font: Import Poppins via `<link>` in `index.html`
- Heading: `font-semibold text-2xl` or `text-3xl`
- Body: `text-sm` or `text-base`

### Background Image
- Use `https://picsum.photos/seed/logincrux-1/1280/939` (deterministic)
- Apply dark overlay: `bg-black/50` absolutely positioned over the image

### Accessibility
- All inputs must have `<label>` elements (linked via `htmlFor`)
- Password toggle: `aria-label` + `aria-expanded` on eye button
- Submit button: `<button type="submit">`
- Skip link (optional): "Skip to main content"

## TODO for Implementer

- [ ] Copy simplest existing app as scaffold
- [ ] Create `Navbar.tsx` with brand name
- [ ] Create `Hero.tsx` with split-screen layout
- [ ] Create `LoginForm.tsx` with all form fields
- [ ] Create `Footer.tsx` with Component Dock link
- [ ] Compose in `App.tsx`
- [ ] Add design tokens to `index.css`
- [ ] Import Poppins font in `index.html`
- [ ] Write tests (Vitest + Testing Library) — 100% coverage
- [ ] Verify: typecheck, lint, test:coverage, build
- [ ] Update `public/CNAME` and `package.json` homepage
- [ ] Run `npm install` at root for lockfile
