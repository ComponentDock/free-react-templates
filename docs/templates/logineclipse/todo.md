# LoginEclipse — Implementation Todo

Source: ColorLib Login Form V9 (https://colorlib.com/wp/template/login-form-v9/)
Preview: https://colorlib.com/etc/lf/Login_v9/index.html
Spec: openspec/specs/template-logineclipse/spec.md

## Structure (section order)

1. **Background container** — full-viewport div with background image (use
   picsum.photos placeholder) + blue-to-purple gradient overlay via CSS
   pseudo-element
2. **Login card** — centered white card, 390px wide, border-radius 10px,
   shadow
3. **Title** — "Sign In" in Source Sans 3 Bold, 30px, deep purple (#4b2354)
4. **Username/email input** — transparent bg, no border, 62px tall, with
   focus pseudo-element shadow effect
5. **Password input** — same styling as username
6. **Sign In button** — pill-shaped, purple (#bd59d4), 50px tall
7. **"Or login with" text** — gray divider
8. **Social buttons** — Facebook + Google circular buttons with shadows
9. **"Sign Up" link** — deep purple (#4b2354), underlined on hover

## Design notes

### Background treatment
- Original uses `images/bg-01.jpg` — replace with
  `https://picsum.photos/seed/logineclipse/1920/1080`
- Gradient overlay: `linear-gradient(to right, rgba(0,168,255,0.5),
  rgba(185,0,255,0.5))` applied via `::before` pseudo-element covering
  full viewport

### Card
- Fixed width 390px (not max-width), centered with flexbox
- Padding: 80px top, 55px left/right, 30px bottom
- White background, border-radius 10px, shadow: 0 3px 20px rgba(0,0,0,0.1)

### Input focus effect
- Each input wrapper has a `.focus-input100` pseudo-element that sits on top
  of the input with `border-radius: 20px` and `box-shadow: 0 5px 30px rgba(0,0,0,0.1)`
- On focus, the shadow intensifies to `0.2` opacity with 0.4s transition
- No visible border on inputs — clean transparent look

### Button
- Pill shape: `border-radius: 25px`, `height: 50px`, `min-width: 160px`
- Background: `#bd59d4` (medium purple)
- Hover: `#9b24bd` (darker purple), 0.4s transition
- Text: Source Sans 3 SemiBold, 14px, white, centered

### Social buttons
- 50px × 50px circles, white background, box-shadow
- Facebook: use lucide-react or font-awesome icon, color `#3b5998`
- Google: use a simple SVG or icon, 26px
- Hover: shadow intensifies from 0.1 to 0.2 opacity

### Typography
- Source Sans 3 from Google Fonts (replaces SourceSansPro in original)
- Weights: 400 (regular), 700 (bold), 600 (semibold)
- All text colors use deep purple (#4b2354) or gray (#999999, #666666)

### Validation (optional enhancement)
- Error: red (#fa4251) tooltip at right of input
- Success: green (#57b846) checkmark icon
- Not required for MVP but spec includes for fidelity

### Responsive
- At 480px breakpoint, card padding reduces to 15px left/right
- Card stays centered, inputs and button fill card width

### Component structure
```
App.tsx
  └── LoginEclipse.tsx (or split into:)
       ├── BackgroundContainer.tsx
       ├── LoginCard.tsx
       │   ├── Title.tsx
       │   ├── InputField.tsx (reusable for username + password)
       │   ├── SignInButton.tsx
       │   ├── SocialDivider.tsx ("Or login with")
       │   ├── SocialButtons.tsx (Facebook + Google)
       │   └── SignUpLink.tsx
       └── Footer.tsx (Component Dock link)
```

### Testing notes
- Test each input renders with correct placeholder
- Test button hover state
- Test focus shadow effect (check for box-shadow style change)
- Test form submission (prevent default)
- Test social buttons render with correct icons
- Test responsive behavior at 375px viewport
- Test footer contains Component Dock link
