# AuthDrop — Design Notes

Source: ColorLib "Login Form 10" (login-form-10)
Preview: https://preview.colorlib.com/theme/login-form-10/ (404 as of 2026-09-23)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-10-2.jpg

## Section Order

1. Page wrapper (light gray background, full viewport height, flex center)
2. Two-column container (flex row, centered, gap)
3. Left column — Social login section
   - "or sign in with" label
   - Facebook button (full-width, #3b5998, white "f" icon)
   - Twitter button (full-width, #1da1f2, white bird icon)
   - Google button (full-width, #dd4b39, white "G" icon)
4. Divider — "— or —" text, vertically centered between columns
5. Right column — Login form card
   - White card with shadow
   - Heading: "Sign In to AuthDrop"
   - Subtext paragraph (lorem ipsum placeholder)
   - Username input (bottom-border only)
   - Password input (bottom-border only, type=password)
   - Row: Remember me checkbox (mint accent) + Forgot Password link (right-aligned)
   - Log In button (full-width, #4ecdc4 mint, pill-shaped, white text)
6. Footer — "More templates at Component Dock" link

## Fidelity Notes

- **Background:** Light gray (#f5f5f5), NOT white —区别 from other login forms
- **Card:** White with subtle shadow, centered in right column
- **Inputs:** Bottom-border-only style (no full box border), placeholder text in light gray
- **Log In button:** Pill-shaped (rounded-full), mint/teal (#4ecdc4), full-width within card
- **Social buttons:** Full-width bars stacked vertically (NOT circular), each with brand color + white icon
- **Divider:** Simple "— or —" text, vertically centered between the two columns
- **Layout:** Two columns on desktop, stacked on mobile (< 768px)
- **Typography:** Clean sans-serif (Roboto inferred), bold heading, light gray subtitle
- **No illustration:** Unlike LoginLeaf (login-form-08), this template has NO decorative illustration — the left column is social buttons only

## Component Structure

```
AuthDrop (App.tsx)
├── LoginPage (main container, full viewport, flex center)
│   ├── TwoColumnLayout (flex row, responsive)
│   │   ├── SocialLoginSection (left column)
│   │   │   ├── "or sign in with" label
│   │   │   ├── SocialButton (Facebook)
│   │   │   ├── SocialButton (Twitter)
│   │   │   └── SocialButton (Google)
│   │   ├── Divider ("— or —")
│   │   └── LoginFormCard (right column, white card)
│   │       ├── Heading ("Sign In to AuthDrop")
│   │       ├── Subtext
│   │       ├── Form
│   │       │   ├── Input (Username)
│   │       │   ├── Input (Password)
│   │       │   ├── RememberRow (checkbox + forgot link)
│   │       │   └── SubmitButton ("Log In")
│   └── Footer (Component Dock link)
```

## Implementation Tasks

- [ ] Create `apps/authdrop/` from simplest existing login app (e.g. loginleaf)
- [ ] Rename package to `@free-react-templates/authdrop`
- [ ] Build `LoginPage.tsx` as main layout component
- [ ] Build `SocialLoginSection.tsx` with three SocialButton sub-components
- [ ] Build `LoginFormCard.tsx` with form fields
- [ ] Style with Tailwind: light gray bg, white card, mint accent, pill button
- [ ] Add responsive stacking for mobile (< 768px)
- [ ] Add footer with Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Set up `public/CNAME` with `authdrop.free.componentdock.com`
- [ ] Set `homepage` in package.json
