# LoginGem — Implementation Tasks & Design Notes

## Source

- **ColorLib template:** Login Form V4
- **Source URL:** https://colorlib.com/wp/template/login-form-v4/
- **Preview URL:** https://colorlib.com/etc/lf/Login_v4/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v4.jpg

## Structure (section order)

1. Full-viewport background (gradient placeholder for bg-01.jpg image)
2. Centered white card
   - "Login" heading (bold, centered, Poppins 39px)
   - Username input with label, icon, bottom border
   - Password input with label, icon, bottom border
   - "Forgot password?" link (right-aligned)
   - "Login" button (full-width, pill, teal→purple gradient)
   - "Or Sign Up Using" divider text
   - Facebook + Twitter + Google social buttons (colored circles)
   - "Or Sign Up Using" + "Sign Up" link at bottom
3. Footer with Component Dock link

## Fidelity notes

### Background

- Original uses a background image (bg-01.jpg)
- Recreate with a gradient: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)
- Full viewport (100vw × 100vh), flexbox center

### Card

- White `#ffffff`, width 500px, max-width 90vw
- Rounded corners 10px
- Padding: 55px left/right, 65px top, 54px bottom
- Centered via flex

### Form inputs

- Full width, height 55px
- Transparent background, 2px bottom border `#d9d9d9`
- Left icon (Mail for username, Lock for password) - use lucide-react
- Label above input: 14px, #333333
- Placeholder: #adadad
- Focus: border animates to full width, icon turns purple `#a64bf4`

### Login button

- Full width, height 50px, border-radius 25px (pill)
- Gradient: linear-gradient(to right, #00dbde, #fc00ff)
- White text, uppercase, 16px, medium weight
- Hover: gradient background sweeps from left (animation)
- Box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2)

### Social buttons

- Three circles side by side (flex, gap 10px)
- Each: 50px × 50px, border-radius 50%
- Facebook: #3b5998, Twitter: #1da1f2, Google: #ea4335
- White icon inside, centered
- Hover: all turn #333333

### Typography

- "Login" heading: Poppins Bold, 39px, centered
- Labels: Poppins Regular, 14px, #333333
- Input text: Poppins Medium, 16px, #333333
- Button: Poppins Medium, 16px, white, uppercase, letter-spacing ~1px
- Body/links: Poppins Regular, 14px, #666666
- "Sign Up" link: uppercase, #333333

## Implementation tasks

- [ ] Create app scaffold from existing simple login app
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Create public/CNAME with logingem.free.componentdock.com
- [ ] Create src/index.css with Tailwind v4 entry + gradient theme
- [ ] Create src/components/LoginForm.tsx (main form card)
- [ ] Create src/components/FormField.tsx (reusable input with icon + label)
- [ ] Create src/components/SocialButtons.tsx (3 social login buttons)
- [ ] Create src/components/Footer.tsx (Component Dock link)
- [ ] Create src/App.tsx (composes background + card + footer)
- [ ] Create src/main.tsx entry
- [ ] Add Google Fonts (Poppins) link in index.html
- [ ] Write tests for all components (100% coverage)
- [ ] Run npm run spec:validate
- [ ] Run scripts/verify-app.sh logingem
