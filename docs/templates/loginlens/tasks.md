# LoginLens — Design Notes & Implementation Outline

## Source
- **ColorLib template**: Login Form V7
- **Preview URL**: https://preview.colorlib.com/theme/login-form-v7/ (404 — design derived from live preview + CSS + screenshot)
- **Live preview**: https://colorlib.com/etc/lf/Login_v7/index.html
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v7.jpg

## Section order (top-down)
1. Full-viewport gray background (#e6e6e6)
2. Centered 320px card (transparent)
3. Inside card: heading → social buttons → separator → inputs → submit button → sign-up link

## Component structure
```
App.tsx
  └── LoginLens (single-page login)
       ├── Background (full-viewport gray layer)
       ├── Card (centered 320px transparent container)
       │    ├── Heading ("Login")
       │    ├── SocialLoginGroup
       │    │    ├── SocialButton (Facebook — #3b5998)
       │    │    └── SocialButton (Twitter — #1da1f2)
       │    ├── Separator ("Login with email")
       │    ├── LoginForm
       │    │    ├── Input (email, pill-shaped)
       │    │    ├── PasswordInput (with show/hide toggle)
       │    │    └── SubmitButton ("Login", pill-shaped)
       │    └── SignUpLink ("Don't have an account? / SIGN UP NOW")
       └── Footer (Component Dock link)
```

## Fidelity notes
- **Pill shapes everywhere**: Social buttons use `border-radius: 25px` (50px height = pill). Inputs and submit button use `border-radius: 31px` (62px height = pill). This is the signature look.
- **Oversized inputs**: 62px tall with 35px horizontal padding. Much larger than typical form fields — this is intentional in the design.
- **Social buttons**: Full-width, stacked vertically. Facebook first (#3b5998), Twitter second (#1da1f2). Font Awesome icons (fa-facebook-official, fa-twitter). Both hover to #333333.
- **Submit button**: Uses a `::before` pseudo-element for background (#333333) behind a transparent button. On hover, the pseudo-element expands width. Use Tailwind's `before:` or custom CSS for this effect.
- **Show/hide toggle**: Eye icon positioned absolutely inside the password input. Toggles between `fa-eye` and `fa-eye-slash`. Color #aaaaaa, hover #111111.
- **Typography**: Google Fonts Oswald (weights 400, 500, 700). Load via `<link>` in index.html. All text in dark colors (#333333, #43383e, #666666, #999999).
- **No background image**: Unlike other login templates, this one uses a flat gray background. No image, no glassmorphism.
- **Validation errors**: Tooltip-style with red border (#c80000), positioned relative to input, border-radius 14px.
- **Footer**: Must link `https://www.componentdock.com/` branded as "Component Dock".
- **Placeholder images**: Use `https://picsum.photos/seed/loginlens/...` if any decorative imagery is needed (unlikely for this minimal design).

## Design token extraction (from reference CSS)

| Token | Value |
|-------|-------|
| Body font | `'Oswald', sans-serif` (Google Fonts, 400/500/700) |
| Page background | `#e6e6e6` |
| Card width | `320px` |
| Card background | `transparent` |
| Card radius | `0` |
| Title font | Oswald-Medium, 30px |
| Title color | `#43383e` |
| Social btn height | `50px` |
| Social btn radius | `25px` |
| Facebook bg | `#3b5998` |
| Twitter bg | `#1da1f2` |
| Social btn hover | `#333333` |
| Social btn font | Oswald-Medium, 16px, `#fff` |
| Separator font | Oswald-Bold, 20px, `#333333` |
| Input height | `62px` |
| Input radius | `31px` |
| Input padding | `0 35px` |
| Input bg | `#fff` |
| Input font | Oswald-Medium, 16px, `#43383e` |
| Input placeholder | `#43383e` |
| Password toggle color | `#aaaaaa` (hover `#111111`) |
| Submit btn height | `62px` |
| Submit btn radius | `31px` |
| Submit btn bg | `#333333` (via pseudo) |
| Submit btn font | Oswald-Regular, 16px, uppercase, `#fff` |
| Submit btn hover | `#222222` |
| Sign-up text color | `#999999` |
| Sign-up link color | `#333333` |
| Sign-up link border | `1px solid #929292` (bottom) |
| Error color | `#c80000` |

## Implementation TODO
- [ ] Copy simplest existing app (e.g. `apps/aurora` or similar minimal app), rename to `loginlens`
- [ ] Update `package.json` name to `@free-react-templates/loginlens`
- [ ] Add Google Fonts `<link>` for Oswald (weights 400, 500, 700) in `index.html`
- [ ] Create `src/App.tsx` composing the single-page login
- [ ] Create `src/components/LoginLens.tsx` (card + form)
- [ ] Create `src/components/SocialButton.tsx` (reusable social login button)
- [ ] Create `src/components/PasswordInput.tsx` (input with show/hide toggle)
- [ ] Create `src/components/SignUpLink.tsx` (sign-up CTA)
- [ ] Create `src/index.css` with Tailwind entry + `@theme` tokens
- [ ] Write tests (Vitest + RTL) for all scenarios in spec
- [ ] Run `npm run test:coverage` — must hit 100%
- [ ] Run `scripts/verify-app.sh loginlens` — must pass
- [ ] Update `public/CNAME` to `loginlens.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://loginlens.free.componentdock.com`
- [ ] Commit as `feat: implement LoginLens (ColorLib login-form-v7)`
