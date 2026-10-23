# Gatekeeper — Design Notes & Implementation Tasks

**Source**: ColorLib Login Form V18 (`login-form-18`)
**Preview**: https://preview.colorlib.com/theme/bootstrap/login-form-18/
**New name**: gatekeeper
**Category**: Login Form (single-card centered layout)

## Section Order (top to bottom)

1. **Page background**: Full-viewport soft blue-gray (#f8f9fd)
2. **Heading**: Centered "Login #08" (or "Sign In") — black text, 28px
3. **Login card**: White rounded card (10px radius, box-shadow)
   a. **Icon circle**: 80px purple (#8d448b) circle with white user icon
   b. **Subheading**: "Have an account?" — purple, centered, bold
   c. **Username field**: Light gray bg, 48px height, "Username" placeholder
   d. **Password field**: Same styling, password-masked, "Password" placeholder
   e. **Remember Me row**: Checkbox (left) + "Forgot Password" link (right)
   f. **Submit button**: "Get Started" — full-width, purple pill (40px radius)
4. **Footer attribution**: "Made with Component Dock" link

## Fidelity Notes

- **Layout**: Bootstrap grid `col-md-6 col-lg-5` centered with `justify-content-center`. Single section, no navbar. Use Tailwind flex + max-width for centering.
- **Card**: White bg, 10px radius, subtle box-shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`. Internal padding `p-4 p-md-5`.
- **Icon**: Purple circle `80x80px`, `border-radius: 50%`, flexbox centered. Use lucide-react `User` icon.
- **Form inputs**: bg `rgba(0,0,0,0.05)`, 48px height, transparent border, focus bg `rgba(0,0,0,0.07)`, no visible focus ring.
- **Checkbox**: Custom styled (not native). Purple accent (#8d448b) when checked. Use a label-wrapped hidden input + custom checkmark via Tailwind.
- **Button**: bg `#8d448b`, text white, `border-radius: 40px` (pill). Hover: transparent bg, purple border + text. Font-size 15px.
- **Font**: Load Google Fonts Lato (weight 400, 500, 700) via `<link>` in index.html.
- **Brand color**: Define `--brand: #8d448b` in `index.css` `@theme` block.
- **No navbar**: The original has no navigation. Keep it simple — just the centered card section.
- **Footer**: Minimal — just "Made with Component Dock" centered at the bottom.

## Implementation Tasks

- [ ] Scaffold app from simplest existing template (`apps/gatekeeper/`)
- [ ] Set up `index.html` with Google Fonts Lato link
- [ ] Create `src/index.css` with Tailwind entry + `@theme` brand token
- [ ] Build `App.tsx` composing LoginCard section
- [ ] Build `LoginCard.tsx` — card wrapper with icon, heading, form
- [ ] Build `UserIcon.tsx` — purple circle with lucide-react User icon
- [ ] Build form inputs (username, password) with proper styling
- [ ] Build custom checkbox component (Remember Me)
- [ ] Build submit button with pill shape + hover effect
- [ ] Build footer with Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Run `scripts/verify-app.sh gatekeeper`
