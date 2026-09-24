# Loginmantle — Design & Implementation Notes

## Source

- **ColorLib template:** Login Form V15
- **Slug:** `login-form-v15`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v15/index.html (demo HTML/CSS fetched directly; preview.colorlib.com/theme/ returns 404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v15.jpg

## Section order (top → bottom)

1. **Banner** — full-width background image with dark teal overlay (rgba(54,84,99,0.7)), centered "Sign In" text (white, bold, uppercase, 30px)
2. **Form fields** — Username input with left label (desktop), Password input with left label (desktop)
3. **Checkbox row** — "Remember me" checkbox (left) + "Forgot Password?" link (right), space-between
4. **Login button** — full-width pill button, green (#57b846), white text

## Key fidelity decisions

### Banner overlay
- Original uses a CSS pseudo-element `::before` with `background-color: rgba(54,84,99,0.7)` covering the full banner area
- React implementation: use an absolute-positioned overlay div with the same RGBA color and z-index management
- Background image: use `https://picsum.photos/seed/loginmantle/670/200` for deterministic placeholder

### Label positioning
- Desktop (≥480px): labels are positioned absolutely to the LEFT of the input (`left: -105px`, `width: 80px`, `text-align: right`)
- Mobile (≤480px): labels move ABOVE the input with static positioning and left-align
- This requires conditional CSS (Tailwind responsive utilities or a media query approach)

### Input styling
- No visible border on input — only a bottom border (`1px solid #b2b2b2`)
- Height: 45px, transparent background
- Focus effect: a green line (`#57b846`) animates from 0 to 100% width using a pseudo-element transition (0.6s)
- React: can implement with a wrapper div containing a focus-state line element

### Checkbox
- Native checkbox is hidden (display: none)
- Custom checkbox: 18×18px box with 1px `#e6e6e6` border, border-radius 2px
- Checked state shows a green checkmark (FontAwesome icon in original; use lucide-react Check icon)

### Button
- Pill shape: `border-radius: 25px` (half of 50px height)
- Full width, centered text
- Background: `#57b846`, hover transitions to `#333333` (0.4s)
- Text: white, 16px, Poppins Regular

### Responsive breakpoints
- 576px: form padding reduces (left padding from 190px to 117px)
- 480px: labels move above inputs, left padding resets to 15px

## Component breakdown

| Component       | File                    | Notes                                              |
| --------------- | ----------------------- | -------------------------------------------------- |
| App             | `App.tsx`               | Composes Banner + LoginForm + Footer                |
| Banner          | `components/Banner.tsx` | Background image + overlay + heading               |
| LoginForm       | `components/LoginForm.tsx` | Form with username, password, checkbox, button   |
| InputField      | `components/InputField.tsx` | Reusable: label + input + focus underline        |
| Footer          | `components/Footer.tsx` | Component Dock link                                |

## Tailwind theme tokens (for index.css @theme)

```css
@theme {
  --color-mantle-page: #ebeeef;
  --color-mantle-card: #ffffff;
  --color-mantle-overlay: rgba(54, 84, 99, 0.7);
  --color-mantle-primary: #57b846;
  --color-mantle-primary-hover: #333333;
  --color-mantle-text: #555555;
  --color-mantle-label: #808080;
  --color-mantle-muted: #999999;
  --color-mantle-border: #b2b2b2;
  --color-mantle-border-light: #e6e6e6;
  --color-mantle-error: #c80000;
  --color-mantle-link: #666666;
}
```

## Task outline

- [ ] Scaffold app from simplest existing login template (e.g. loginpad)
- [ ] Rename package to @free-react-templates/loginmantle
- [ ] Set up Tailwind theme tokens in index.css
- [ ] Implement Banner component (image + overlay + heading)
- [ ] Implement InputField component (label + input + focus animation)
- [ ] Implement LoginForm component (username, password, checkbox, button)
- [ ] Implement Footer with Component Dock link
- [ ] Wire up App.tsx to compose all sections
- [ ] Write tests for each component (100% coverage)
- [ ] Verify responsive behavior (labels stacking at ≤480px)
- [ ] Run verify-app.sh loginmantle
