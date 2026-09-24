# LoginVibe — Implementation Notes

## Source Mapping

| Field | Value |
|-------|-------|
| New name | `loginvibe` |
| ColorLib slug | `login-form-v4` |
| Source URL | https://colorlib.com/wp/template/login-form-v4/ |
| Preview URL | https://preview.colorlib.com/theme/login-form-v4/ (unreachable) |
| Fallback | Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v4.jpg` |

## Section Structure (top → bottom)

1. **Full-page gradient background** — diagonal purple-to-cyan gradient with geometric angular overlays
2. **Login card** (centered, white, rounded corners, shadow)
   - **Heading** — "Login" (bold)
   - **Username field** — label + underline input with user icon + placeholder
   - **Password field** — label + underline input with lock icon + placeholder
   - **Forgot password link** — right-aligned, gray text
   - **Login button** — full-width pill, cyan-to-purple gradient, white uppercase text
   - **Social divider** — "Or Sign Up Using" centered text
   - **Social buttons** — 3 circular icons (Facebook, Twitter, Google) centered
   - **Sign up prompt** — "Have not account yet?" text + "SIGN UP" link
3. **Footer** — Component Dock link

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| App | `src/App.tsx` | Composes Background + LoginCard |
| Background | `src/components/Background.tsx` | Full-viewport gradient + geometric overlays |
| LoginCard | `src/components/LoginCard.tsx` | White card container |
| Heading | (inline in LoginCard) | "Login" h1 |
| UsernameField | `src/components/UsernameField.tsx` | Label + icon input (underline style) |
| PasswordField | `src/components/PasswordField.tsx` | Label + icon password input (underline style) |
| ForgotPassword | (inline in LoginCard) | "Forgot password?" link |
| LoginButton | `src/components/LoginButton.tsx` | Gradient pill button |
| SocialLogin | `src/components/SocialLogin.tsx` | "Or Sign Up Using" + 3 circular social buttons |
| SignUpLink | (inline in LoginCard) | "Have not account yet?" + SIGN UP |
| Footer | `src/components/Footer.tsx` | Component Dock attribution |

## Design Fidelity Notes

- **Background gradient:** Use CSS `linear-gradient(135deg, #00d2ff, #c471ed)` on the body/full-viewport wrapper. The geometric overlays are semi-transparent polygonal shapes — approximate with absolutely-positioned `clip-path` divs or SVG overlays with low opacity.
- **Input underline style:** No visible border on input; only a `border-bottom: 1px solid #e0e0e0`. On focus, change border color to brand cyan.
- **Social buttons:** Circular, ~44px diameter. Use Lucide icons (Facebook, Twitter/X, Chrome) inside circular buttons with brand colors.
- **Login button gradient:** `linear-gradient(to right, #00d2ff, #c471ed)` — matches background direction reversed.
- **Card shadow:** `box-shadow: 0 8px 32px rgba(0,0,0,0.10)` for subtle depth.
- **Card positioning:** `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)` or flexbox centering with generous top margin (~100px offset from visual center).

## Implementation Tasks

1. [ ] Create `apps/loginvibe` scaffold (copy simplest existing login app)
2. [ ] Set up `Background.tsx` with gradient + geometric overlays
3. [ ] Build `LoginCard.tsx` with heading, fields, button, social, signup
4. [ ] Implement `UsernameField` and `PasswordField` with underline inputs + icons
5. [ ] Implement `LoginButton` with gradient + pill shape
6. [ ] Implement `SocialLogin` with circular brand-colored buttons
7. [ ] Add footer with Component Dock link
8. [ ] Write tests for all components (100% coverage)
9. [ ] Verify with `scripts/verify-app.sh loginvibe`
10. [ ] Commit, push, open PR, merge

## Test Plan

- UsernameField: renders label, icon, placeholder; accepts text input
- PasswordField: renders label, icon, placeholder; masks input
- ForgotPassword: renders right-aligned link
- LoginButton: renders with gradient; triggers form submit
- SocialLogin: renders 3 circular buttons with correct colors; click handlers
- SignUpLink: renders text + link
- Background: renders gradient background
- LoginCard: composes all sub-components
- Footer: renders Component Dock link
