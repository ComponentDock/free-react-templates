# Formlane — Design Notes & Implementation Outline

**Source:** ColorLib Reg Form V34 (`colorlib-regform-34`)
**Preview:** https://colorlib.com/etc/regform/colorlib-regform-34/
**New name:** formlane
**App folder:** `apps/formlane`
**Package:** `@free-react-templates/formlane`

## Section order (top to bottom)

1. **Page wrapper** — full viewport gradient background, flex center
2. **Card** — split horizontal layout (image left, form right), white bg, shadow, rounded
3. **Left panel** — hero image (placeholder)
4. **Right panel** — tab bar + form (dark blue-gray bg)
5. **Footer** — Component Dock link

## Component breakdown

| Component | File | Notes |
|---|---|---|
| PageWrapper | `src/components/PageWrapper.tsx` | Gradient bg, flex center, min-h-screen |
| FormCard | `src/components/FormCard.tsx` | White card container, responsive flex |
| HeroImage | `src/components/HeroImage.tsx` | Left panel, placeholder image |
| TabBar | `src/components/TabBar.tsx` | Two tabs, active state management |
| SignUpForm | `src/components/SignUpForm.tsx` | Username, Email, Password, Confirm Password |
| SignInForm | `src/components/SignInForm.tsx` | Same fields as SignUp, different submit label |
| FormField | `src/components/FormField.tsx` | Floating label input with animated underline |
| SubmitButton | `src/components/SubmitButton.tsx` | White rounded button, hover state |
| Footer | `src/components/Footer.tsx` | Component Dock link |

## Fidelity notes

- **Gradient:** `linear-gradient(136deg, #009EFD 0%, #2AF598 100%)` — exact match via Tailwind `bg-gradient-to-br` with custom colors
- **Card:** 937px max-width, `border-radius: 8px`, `box-shadow: 0 8px 20px rgba(0,0,0,0.15)`
- **Form panel bg:** `#3D5983` (dark blue-gray) — use in `@theme`
- **Active tab:** teal `#30E1DF` bottom border, bold white text
- **Floating labels:** CSS transition `transform: translateY(-26px) scale(1)` on `:focus` and `:valid`
- **Focus underline:** `scaleX(0)` → `scaleX(1)` animation on `.cl-border`, color `#53C83C`
- **Button:** `#fff` bg, `#333` text, `border-radius: 5px`, `width: 160px`, hover → `#ccc`
- **Responsive:** At ≤991px, card stacks vertically (flex-direction: column)
- **Font:** Source Sans Pro via Google Fonts link in `index.html`
- **Tab switching:** React state manages active tab, not vanilla JS `openCity` function
- **Input type for password fields:** Use `type="password"` (original has typo "comfirm" → fix to "Confirm Password")
- **No assets to copy:** Use placeholder image, Google Fonts, lucide-react icons

## Tasks

- [ ] Set up app scaffold (copy simplest existing app, rename package)
- [ ] Install Google Fonts (Source Sans Pro) in index.html
- [ ] Implement PageWrapper with gradient
- [ ] Implement FormCard with responsive layout
- [ ] Implement HeroImage with placeholder
- [ ] Implement TabBar with state management
- [ ] Implement FormField with floating label + animated underline
- [ ] Implement SignUpForm (4 fields + submit)
- [ ] Implement SignInForm (4 fields + submit)
- [ ] Implement SubmitButton with hover state
- [ ] Implement Footer with Component Dock link
- [ ] Write tests (100% coverage)
- [ ] Verify build + typecheck + lint pass
