# Logingrove — Design Notes & Task Outline

Source: ColorLib Login Form V16
Preview: https://colorlib.com/etc/lf/Login_v16/index.html
New name: logingrove

## Structure (section order)

Single-page login form:

1. **Full-screen background** — viewport-height container with background image and dark (65%) overlay
2. **Login card** — centered white card (390px, 10px radius)
   - Title: "Account Login" (white, uppercase, Ubuntu Bold 28px)
   - Username input with Linearicons user icon (left-padded for icon, focus underline animation)
   - Password input with Linearicons lock icon (same pattern)
   - Login button (pill-shaped, purple→pink gradient, hover transition)
3. **Footer** — minimal, includes Component Dock link

## Section-by-section fidelity notes

### Background
- Original uses a JPG background image with rgba(0,0,0,0.65) overlay
- Use a placeholder image from picsum.photos (e.g. `https://picsum.photos/seed/logingrove-bg/1920/1080`)
- CSS: `background-size: cover; background-position: center; background-repeat: no-repeat`
- Overlay: pseudo-element or Tailwind `bg-black/65`

### Login card
- White background, 390px width, 10px border-radius
- Centered using flexbox (justify-content: center, align-items: center)
- Contains form with title + 2 inputs + button

### Input fields
- Both inputs are 50px tall, full-width, no border except bottom (1px solid #e6e6e6)
- Left padding 80px (for icon), shrinks to 60px on focus
- Focus underline: 1px gradient bar animated from width 0 → 100%
- Gradient colors: #a445b2 → #d41872 → #fa4299
- Placeholder color: #555555
- Input text: Ubuntu-Regular 20px, #555555
- Use Linearicons or lucide-react equivalents for user/lock icons

### Login button
- Pill shape: border-radius 21px, min-width 160px, height 42px
- Background gradient: #a445b2 → #d41872 → #fa4299
- Text: Ubuntu-Bold 18px, white, uppercase
- Hover: background becomes transparent, dark gray (#555555) pseudo-element fades in
- Transition: 0.4s ease

### Typography
- Primary font: Ubuntu (Google Fonts)
- Load via Google Fonts `<link>` in index.html
- Weights: 300, 400, 500, 700

## Tailwind @theme tokens

```
--color-brand-start: #a445b2;
--color-brand: #d41872;
--color-brand-end: #fa4299;
--color-brand-hover: #555555;
--color-card: #ffffff;
--color-overlay: rgba(0, 0, 0, 0.65);
--color-input-text: #555555;
--color-input-border: #e6e6e6;
--color-link: #666666;
--color-error: #c80000;
--font-ubuntu: "Ubuntu", sans-serif;
--radius-card: 10px;
--radius-button: 21px;
```

## Task checklist

1. [ ] Create app scaffold: `apps/logingrove/` from simplest existing login app
2. [ ] Rename package to `@free-react-templates/logingrove`
3. [ ] Add Ubuntu font via Google Fonts link in index.html
4. [ ] Set up Tailwind @theme tokens in index.css
5. [ ] Implement background container with dark overlay
6. [ ] Implement login card (centered, white, 390px, 10px radius)
7. [ ] Implement title "Account Login"
8. [ ] Implement username input with icon and focus animation
9. [ ] Implement password input with icon and focus animation
10. [ ] Implement login button with gradient and hover transition
11. [ ] Add responsive behavior (card adapts on mobile)
12. [ ] Add footer with Component Dock link
13. [ ] Write tests (Vitest + RTL) — 100% coverage
14. [ ] Run verify-app.sh to confirm gate passes
15. [ ] Update public/CNAME and homepage
