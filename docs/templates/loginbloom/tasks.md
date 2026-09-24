# Loginbloom — Design Notes & Task Outline

## Source

- **ColorLib template:** Login Form V15
- **Slug:** `login-form-v15`
- **Preview:** https://colorlib.com/etc/lf/Login_v15/index.html
- **Page:** https://colorlib.com/wp/template/login-form-v15/
- **Description:** Login template with a top banner section featuring a background image and "SIGN IN" heading, followed by a form card with username/password inputs, remember-me checkbox, forgot-password link, and pill-shaped login button.

## Structure (top to bottom)

1. **Banner Section** — Full-width hero area within the card
   - Background image (use picsum.photos/seed/loginbloom-banner/670/220)
   - Dark teal overlay: `rgba(54,84,99,0.7)` via `before:` pseudo-element
   - Centered "SIGN IN" heading: Poppins Bold, 30px, uppercase, white, padding ~70px vertical

2. **Form Card** — White card, max-width 670px, border-radius 10px, centered on gray-blue background
   - Background: `#ffffff`
   - Inner form padding: `43px 88px 93px 190px` (desktop), adjusted for mobile

3. **Username Field** — Underline-style input
   - Label: "Username", Poppins Regular 15px, #808080, positioned absolutely to the left of input (desktop) or above (mobile at 480px breakpoint)
   - Input: height 45px, transparent bg, bottom border 1px solid #b2b2b2
   - Focus animation: green (#57b846) underline expands left to right (0.6s transition)

4. **Password Field** — Same underline style as username
   - Label: "Password"
   - Input: type="password", same styling as username

5. **Remember Me + Forgot Password Row** — Space-between flex row
   - Left: Custom checkbox (18px, #e6e6e6 border, #57b846 checkmark when checked, hidden native checkbox)
   - Right: "Forgot Password?" link, Poppins Regular 13px, #999999, hover → #57b846

6. **Login Button** — Full-width pill button
   - Height 50px, border-radius 25px (pill)
   - Background: #57b846, text: white, Poppins Regular 16px
   - Hover: background → #333333 (0.4s transition)

## Fidelity Notes

### What to match exactly
- Banner dark overlay color: `rgba(54,84,99,0.7)` — not just any dark, it's a specific teal-dark
- Focus animation: green line expands from 0 width to 100% on input focus — this is the signature UX detail
- Label positioning: absolutely positioned to the LEFT of inputs on desktop (-105px left, 80px width), ABOVE on mobile (< 480px)
- Checkbox: custom-styled, native input hidden, FontAwesome checkmark icon
- Button: exactly 50px height, 25px border-radius (half of height = perfect pill)

### What to adapt
- Replace background image with picsum.photos placeholder
- Use Google Fonts Poppins (Regular, Medium, Bold, SemiBold) instead of local font files
- Use lucide-react for any icons instead of FontAwesome
- Footer: add "Made with Component Dock" / link to componentdock.com

## Tasks

- [ ] Set up apps/loginbloom workspace (copy from simplest existing app, rename package)
- [ ] Add Poppins font via Google Fonts in index.html
- [ ] Define Tailwind @theme tokens: brand-green (#57b846), page-bg (#ebeeef), card-bg, etc.
- [ ] Build Banner section component with background image + dark overlay + heading
- [ ] Build LoginForm component with underline-style inputs and label positioning
- [ ] Implement focus animation (green expanding underline) via CSS transitions
- [ ] Build custom checkbox component (hidden native + styled label)
- [ ] Build pill-shaped Login button with hover state
- [ ] Add form validation (required username, required password) with error messages
- [ ] Add responsive behavior (480px breakpoint for label repositioning)
- [ ] Add Footer with Component Dock link
- [ ] Write tests: banner renders, inputs work, checkbox toggles, button hover, validation
- [ ] Verify 100% coverage
- [ ] Commit and open PR
