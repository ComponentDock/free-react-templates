# Regpoint — Implementation Tasks & Design Notes

Source: ColorLib "Colorlib Regform 8"
Preview: https://colorlib.com/etc/regform/colorlib-regform-8/

## Task Outline

1. Scaffold app from simplest existing form template (e.g. formwell or formlink)
   - Copy folder, rename package to `@free-react-templates/regpoint`
   - Update `package.json`, `vite.config.ts`, `public/CNAME`
   - Run `npm install` at repo root to register workspace

2. Create `src/index.css` with Tailwind entry + theme tokens
   - Import Montserrat via Google Fonts in `index.html`
   - Set `--color-brand-teal: #74ebd5` and `--color-brand-purple: #9face6`

3. Create `src/App.tsx` — main layout
   - Full-viewport background image (picsum.photos placeholder)
   - Centered card container (max-w-660px, rounded-2xl)

4. Create `src/components/SignUpForm.tsx` — the form
   - "Create account" heading (uppercase, Montserrat 900, centered)
   - Name input (placeholder: "Your Name")
   - Email input (placeholder: "Your Email", type="email")
   - Password input with eye-toggle (placeholder: "Password")
   - Repeat Password input (placeholder: "Repeat your password", type="password")
   - Terms checkbox with "I agree all statements in Terms of service"
   - Submit button (gradient bg, white bold uppercase text)
   - "Have already an account? Login here" link below

5. Create `src/components/PasswordToggle.tsx` — password eye toggle
   - State toggle for show/hide
   - Eye SVG icons (zmdi-eye / zmdi-eye-off)

6. Write tests (Vitest + RTL)
   - All 11 Gherkin scenarios from spec
   - 100% coverage

7. Verify: `scripts/verify-app.sh regpoint`

## Design Notes — Section-by-Section Fidelity

### Full-page background
- Original uses `background-image: url('../images/signup-bg.jpg')` on `body`
- Dark-toned photo, `background-size: cover`, `background-position: center`
- Recreation: use `https://picsum.photos/seed/regpoint-bg/1920/1080` as placeholder
- Apply via Tailwind `bg-cover bg-center` on a wrapper div or `body` class

### Card container
- Fixed width `660px`, `margin: 0 auto`, positioned mid-page
- White background, `border-radius: 10px`
- Padding: `50px 85px` (responsive: `50px 25px` at 480px)
- Tailwind: `bg-white rounded-[10px] max-w-[660px] mx-auto px-[85px] py-[50px]` + responsive variant

### Form heading
- "Create account" — `font-family: Montserrat`, weight 900, 24px
- `text-transform: uppercase`, centered, `margin-bottom: 40px`, color `#222`
- Tailwind: `text-center text-[24px] font-black uppercase text-gray-800 mb-10`

### Input fields
- 4 fields: Name, Email, Password (with eye toggle), Repeat Password
- All: `width: 100%`, `border: 1px solid #ebebeb`, `border-radius: 5px`
- Padding: `17px 20px`, font 14px/weight 500, color `#222`
- Placeholder: `#999`, weight 500
- Focus: gradient border (`linear-gradient(to right, #9face6, #74ebd5)`) via `border-image`
  - Note: Tailwind doesn't support `border-image` natively; use inline style or custom class
- Tailwind base: `w-full border border-[#ebebeb] rounded-[5px] py-[17px] px-5 text-sm font-medium text-gray-800`

### Password eye toggle
- Positioned: `float: right`, `margin-right: 17px`, `margin-top: -32px`
- Color: `#555`
- Two SVG icons: eye (visible) and eye-off (hidden)
- Toggle on click via React state
- Tailwind: `absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer`

### Submit button
- Full width, `border-radius: 5px`, padding `17px 20px`
- Gradient background: `linear-gradient(to left, #74ebd5, #9face6)` (teal → purple, LTR)
- White text, weight 700, uppercase, font 14px
- Tailwind: use inline `style={{ background: 'linear-gradient(to left, #74ebd5, #9face6)' }}`

### Terms checkbox
- Custom checkbox with label: "I agree all statements in Terms of service"
- Label color `#555`, font 12px, weight 600
- "Terms of service" link color `#555`
- Checkbox: 13x13px, `border: 1px solid #ebebeb`, `border-radius: 2px`
- Tailwind: `text-xs font-semibold text-gray-500` on label

### Login link section
- Text: "Have already an account ? Login here"
- Margin-top: `91px`, centered, color `#555`, weight 500
- "Login here" link: color `#222`, weight 700
- Tailwind: `mt-[91px] text-center text-gray-500 font-medium text-sm`

### Responsive behavior
- 768px: card width → `calc(100% - 40px)`, max-width 100%
- 480px: card padding → `50px 25px`
- Tailwind: `md:w-[calc(100%-40px)] md:max-w-full` + `max-sm:px-6`
