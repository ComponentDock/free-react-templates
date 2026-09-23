# Gradlogin — Implementation Tasks & Design Notes

## Source

- ColorLib: Login Form V17
- URL: https://colorlib.com/wp/template/login-form-17/
- Preview: https://preview.colorlib.com/theme/bootstrap/login-form-17/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-17-2.jpg

## Design Notes

### Layout Structure (section order)

1. **Full-page centered card** — outer wrapper with white background, centered vertically and horizontally
2. **Split-screen container** — two halves:
   - **Left: Gradient decorative panel** (50% width, hidden on mobile)
     - Linear gradient background: #f75959 → #f35587 at 135deg
     - Centered content: "Welcome to login" heading (font-weight 900), "Don't have an account?" subtext, "Sign Up" white outline pill button
   - **Right: Login form panel** (50% width)
     - White background
     - "Sign In" heading (font-weight 300)
     - Facebook and Twitter circular social icons (top-right, aligned with heading)
     - Username input with label
     - Password input with label
     - "Sign In" full-width pill button with gradient background
     - "Remember Me" checkbox (checked default) + "Forgot Password" link row
3. **Footer** — Component Dock link

### Color System

- Gradient: linear-gradient(135deg, #f75959, #f35587) — used on decorative panel AND sign-in button
- Primary accent: #f35588 (social icon hover, checkbox checked)
- Text: #212529 (headings, labels, body)
- Social icons default: #999999
- Links: #007bff / hover #0056b3
- Card shadow: 0 10px 34px -15px rgba(0,0,0,0.24)

### Typography

- Font: Lato (Google Fonts) — weights 300, 400, 700, 900
- Sign In heading: weight 300, light
- Welcome to login heading: weight 900, bold
- Body/labels: weight 400

### Component Details

- **Card**: border-radius 5px, white background, box-shadow
- **Buttons**: border-radius 50px (pill), gradient background on primary
- **Social icons**: 40px circle, border-radius 50%, Font Awesome icons
- **Checkbox**: custom checkmark using Font Awesome square/check icons, accent color #f35588
- **Inputs**: standard Bootstrap form-control styling with labels above

### Responsive Behavior

- Desktop (>=992px): side-by-side split layout
- Mobile (<992px): single column, gradient panel stacks above form, both 100% width

## Task Outline

- [ ] Create `apps/gradlogin/` from simplest existing login template
- [ ] Rename package to `@free-react-templates/gradlogin`
- [ ] Add Lato font via Google Fonts link in index.html
- [ ] Build split-screen layout component
- [ ] Build gradient decorative panel with text + Sign Up button
- [ ] Build login form panel with Sign In heading
- [ ] Add social icon circles (Facebook, Twitter)
- [ ] Add username and password inputs with labels
- [ ] Add Sign In pill button with gradient
- [ ] Add Remember Me checkbox + Forgot Password row
- [ ] Add responsive breakpoint (stack on < 992px)
- [ ] Add footer with Component Dock link
- [ ] Add public/CNAME with gradlogin.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh gradlogin
- [ ] Update TEMPLATES.md with new name link
