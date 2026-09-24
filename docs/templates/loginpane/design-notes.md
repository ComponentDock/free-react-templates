# Loginpane — Design & Implementation Notes

## Source

- **ColorLib template:** Login Form V17
- **Slug:** `login-form-v17`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v17/index.html (demo HTML/CSS fetched directly; preview.colorlib.com/theme/ returns 404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v17.jpg

## Section order (top → bottom, left → right)

1. **Image panel** (right 50%) — background image with dark overlay (rgba(0,0,0,0.3)), no text
2. **Form section** (left 50%):
   - "Account Login" heading (uppercase, letter-spaced, centered)
   - Username input (placeholder: "User name")
   - Password input (placeholder: "Password")
   - These two inputs are SIDE-BY-SIDE on desktop (each 50% width, password border-left removed)
   - "Sign in" button (full-width, green, uppercase)
   - "Forgot User name / password?" link
   - "Sign Up" link

## Key fidelity decisions

### Split layout
- Uses `flex-direction: row-reverse` on the card container — form renders first in DOM but appears on the LEFT visually
- Image panel (`.login100-more`) is the last child but appears on RIGHT due to row-reverse
- React implementation: use flexbox with `flex-row-reverse` or simply reorder with CSS order property
- Card width: 1170px, full viewport height, centered

### Image panel
- Full-height background image panel with `background-size: cover`
- Dark overlay via `::before` pseudo-element with `rgba(0,0,0,0.3)`
- Use `https://picsum.photos/seed/loginpane/585/800` for deterministic placeholder

### Input fields
- Side-by-side layout on desktop: username and password each 50% width
- Password input has `border-left: none` to avoid double border between them
- On mobile (≤576px): both stack to full-width, password gets `border-left: 1px solid #e6e6e6` back
- 55px height, 1px solid #e6e6e6 border, no border-radius
- Input text: Poppins Regular, 18px, #666666

### Focus animation
- Focus border: a `.focus-input100` element positioned behind the input with `border: 1px solid #00ad5f`
- Default state: `visibility: hidden; opacity: 0; transform: scaleX(1.1) scaleY(1.3)`
- On focus: `visibility: visible; opacity: 1; transform: scale(1)` (0.4s transition)
- Creates a "zoom-in" border effect on focus

### Button
- Full-width, 50px height, border-radius 3px
- Green (#00ad5f) background, white text
- Montserrat Bold, 12px, uppercase, letter-spacing 1px
- Hover: background transitions to #333333 (0.4s)

### Responsive breakpoints
- ≤992px: form width 60%, image 40%
- ≤768px: both full-width (image panel stacks below form)
- ≤576px: inputs stack vertically, form top padding reduces

## Component breakdown

| Component       | File                    | Notes                                               |
| --------------- | ----------------------- | --------------------------------------------------- |
| App             | `App.tsx`               | Composes ImagePanel + LoginForm + Footer             |
| ImagePanel      | `components/ImagePanel.tsx` | Background image with dark overlay                |
| LoginForm       | `components/LoginForm.tsx` | Title, inputs, button, links                     |
| InputField      | `components/InputField.tsx` | Reusable: input + focus border animation          |
| Footer          | `components/Footer.tsx` | Component Dock link                                |

## Tailwind theme tokens (for index.css @theme)

```css
@theme {
  --color-pane-page: #f2f2f2;
  --color-pane-card: #ffffff;
  --color-pane-overlay: rgba(0, 0, 0, 0.3);
  --color-pane-primary: #00ad5f;
  --color-pane-primary-hover: #333333;
  --color-pane-text-title: #555555;
  --color-pane-text: #666666;
  --color-pane-muted: #999999;
  --color-pane-border: #e6e6e6;
  --color-pane-error: #c80000;
}
```

## Task outline

- [ ] Scaffold app from simplest existing login template
- [ ] Rename package to @free-react-templates/loginpane
- [ ] Set up Tailwind theme tokens in index.css
- [ ] Implement ImagePanel component (background image + overlay)
- [ ] Implement InputField component (input + focus border animation)
- [ ] Implement LoginForm component (title, side-by-side inputs, button, links)
- [ ] Implement Footer with Component Dock link
- [ ] Wire up App.tsx with flex-direction: row-reverse split layout
- [ ] Write tests for each component (100% coverage)
- [ ] Verify responsive behavior (stacking at ≤768px, input stacking at ≤576px)
- [ ] Run verify-app.sh loginpane
