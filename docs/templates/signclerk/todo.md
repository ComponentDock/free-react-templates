# SignClerk — Implementation Notes

## Source Template
- **ColorLib Name**: Colorlib Reg Form V9
- **ColorLib Slug**: colorlib-regform-9
- **ColorLib URL**: https://colorlib.com/wp/template/colorlib-regform-9/
- **Preview URL**: https://preview.colorlib.com/theme/colorlib-regform-9/ (404 as of 2026-09-28; design from downloaded source ZIP)

## Section Order (top to bottom)

1. **Full-viewport background** — dark cinematic image covering the entire body
2. **Container wrapper** — centered 1123px container with its own background image overlay, top margin 120px
3. **Signup form panel** — floated right, 562px wide, semi-transparent gold/tan (rgba(177,135,77,0.75))
4. **Form content**:
   - Heading: "Sign up" (h2, 36px, bold, white)
   - Subtitle: promotional text with bold product name
   - Name input (underline style)
   - Email input (underline style)
   - Password input (underline style) with eye toggle icon
   - Terms checkbox with linked "Terms of service"
   - SIGN UP button (solid white pill, gold text)
   - SIGN IN button/link (white-bordered pill, transparent)
5. **Footer** — Component Dock link (required by conventions)

## Design Notes

### Color Palette
- **Primary brand**: `#b18757` (gold/tan) — used for button text, panel overlay
- **Panel background**: `rgba(177, 135, 77, 0.75)` — semi-transparent gold
- **Text**: `#ffffff` (white) — all text, placeholders, icons
- **Input border**: `#ebebeb` — bottom-only underline border
- **Submit button fill**: `#ffffff` (white)
- **Button shadow**: `rgba(0,0,0,0.15)` at 15px offset

### Typography
- **Font**: Poppins (Google Fonts) — weights 400, 600, 700
- **Heading**: 36px, bold
- **Body/inputs**: 14px, weight 600 (inputs), weight 400 (placeholder)
- **Buttons**: 13px, uppercase, weight 600

### Layout
- Full viewport background image (cover, center)
- Container: max-width 1123px, centered, padding top 135px / bottom 115px
- Form panel: floated right, 562px wide, semi-transparent overlay
- Responsive: full-width panel at ≤992px; stacked buttons at ≤480px

### Form Inputs
- Underline-only style: bottom border 1px solid #ebebeb, no other borders
- Transparent background, white bold text
- Password field has eye icon toggle (SVG-based)
- Custom checkbox: 13×13px, white border, 2px radius

### Buttons
- **SIGN UP**: solid white fill, gold text (#b18757), pill shape (border-radius 25px), height 50px, box-shadow, inline-block
- **SIGN IN**: white 2px border, transparent fill, white text, pill shape (border-radius 25px), uppercase
- Both buttons: 130px wide, uppercase, 13px font
- Hover: SIGN UP → light gray; SIGN IN → white fill, gold text

## Implementation Tasks

- [ ] Create `apps/signclerk/` from simplest existing form app template
- [ ] Set up `package.json` with `@free-react-templates/signclerk`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `signclerk.free.componentdock.com`
- [ ] Create `src/index.css` with Poppins font import + Tailwind theme tokens
- [ ] Create `src/components/SignupForm.tsx` — form panel with all fields
- [ ] Create `src/components/PasswordField.tsx` — password input with eye toggle
- [ ] Create `src/components/TermsCheckbox.tsx` — custom checkbox with terms link
- [ ] Create `src/components/ActionButton.tsx` — pill button (solid + outlined variants)
- [ ] Create `src/App.tsx` — compose full page layout
- [ ] Create `src/main.tsx` — entry point
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Verify 100% coverage with `npm run test:coverage`
- [ ] Run `npm run verify:app signclerk`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Commit and push

## Fidelity Checklist

- [ ] Background image covers full viewport
- [ ] Semi-transparent gold panel floated right on desktop
- [ ] "Sign up" heading with promotional subtitle
- [ ] Underline-only input borders (bottom only)
- [ ] Password visibility toggle with eye icon
- [ ] Custom white-bordered checkbox
- [ ] "SIGN UP" solid white pill button
- [ ] "SIGN IN" white-bordered pill button
- [ ] Pill shape (border-radius 25px) on both buttons
- [ ] Poppins font throughout
- [ ] Responsive: full-width panel on tablet, stacked buttons on mobile
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
