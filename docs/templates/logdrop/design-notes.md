# LogDrop — Design Notes

Source: ColorLib "Login Form 11" (login-form-11)
Preview: https://preview.colorlib.com/theme/login-form-11/ (404 as of 2026-09-23)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-11-2.jpg

## Section Order

1. Page wrapper (light gray background, full viewport height, flex center)
2. Page title ("LogDrop" — replaces ColorLib "Login #01")
3. Login card (white, centered, subtle shadow)
   - Blue circle user icon (top, centered)
   - "Sign In" heading (centered)
   - Username input (full-border, rounded)
   - Password input (full-border, rounded, type=password)
   - Row: Remember Me checkbox (blue accent) + Forgot Password link (blue, right-aligned)
   - Login button (full-width, blue #4a90d9, slightly rounded)
4. Footer (Component Dock link)

## Fidelity Notes

- **Background:** Very light gray-blue (#f0f2f5), NOT pure white
- **Card:** White with subtle shadow, centered on page
- **User icon:** Blue circle (#4a90d9) with white user silhouette — distinctive visual element
- **Inputs:** Full-border rounded style (NOT bottom-border only), placeholder text light gray
- **Login button:** Blue (#4a90d9), slightly rounded (~4px), full-width within card, white text
- **Checkbox:** Blue accent, checked by default
- **"Forgot Password" link:** Blue text (#4a90d9), right-aligned
- **Layout:** Single centered card (no columns, no split, no illustration)
- **Typography:** Clean sans-serif (Roboto inferred), simple and minimal
- **No social login:** Unlike login-form-10, this template has NO social buttons
- **No illustration:** Just a user icon circle — very minimal design
- **Page title:** Original shows "Login #01" — will be replaced with "LogDrop"

## Component Structure

```
LogDrop (App.tsx)
├── LoginPage (main container, full viewport, flex center, light gray bg)
│   ├── PageTitle ("LogDrop")
│   └── LoginCard (white card, centered, shadow)
│       ├── UserIcon (blue circle with user silhouette)
│       ├── Heading ("Sign In")
│       ├── Form
│       │   ├── Input (Username, full-border rounded)
│       │   ├── Input (Password, full-border rounded, type=password)
│       │   ├── RememberRow (checkbox + forgot link)
│       │   └── SubmitButton ("Login", blue, full-width)
│   └── Footer (Component Dock link)
```

## Implementation Tasks

- [ ] Create `apps/logdrop/` from simplest existing login app
- [ ] Rename package to `@free-react-templates/logdrop`
- [ ] Build `LoginPage.tsx` as main layout component
- [ ] Build `LoginCard.tsx` with user icon, heading, form fields
- [ ] Build `UserIcon.tsx` (blue circle with user silhouette)
- [ ] Style with Tailwind: light gray bg, white card, blue accent
- [ ] Add responsive card sizing for mobile (< 480px)
- [ ] Add footer with Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Set up `public/CNAME` with `logdrop.free.componentdock.com`
- [ ] Set `homepage` in package.json
