# LoginPulse — Implementation Notes

## Source Mapping

| Field | Value |
|-------|-------|
| New name | `loginpulse` |
| ColorLib slug | `login-form-v5` |
| Source URL | https://colorlib.com/wp/template/login-form-v5/ |
| Live HTML | https://colorlib.com/etc/lf/Login_v5/index.html |
| Preview URL | https://preview.colorlib.com/theme/login-form-v5/ (404) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v5.jpg |

## Section Structure (top → bottom)

1. **Full-page gradient background** — 45deg gradient from cyan (#00dbde) to magenta (#fc00ff) with decorative geometric wireframe pattern on the left side
2. **Login card** (centered, white, 680px wide, 10px radius)
   - **Heading** — "Sign In With" (Montserrat Medium 39px, centered)
   - **Social buttons row** — Facebook (#3b5998) + Google (white) side by side, 10px radius, box-shadow, 70px height
   - **Username field** — Montserrat SemiBold label + input (#f7f7f7 bg, #e6e6e6 border, 10px radius, 60px height)
   - **Password field** — Same styling + "Forgot?" link (bottom border, #999999)
   - **Sign In button** — Full-width, #333333 bg, 10px radius, 60px height, white text
   - **Sign up prompt** — "Not a member? Sign up now" (bottom-bordered link)
3. **Footer** — Component Dock link

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| App | `src/App.tsx` | Composes Background + LoginCard |
| Background | `src/components/Background.tsx` | Full-viewport gradient + wireframe decoration |
| LoginCard | `src/components/LoginCard.tsx` | White card container with all form elements |
| SocialButtons | `src/components/SocialButtons.tsx` | Facebook + Google side-by-side buttons with gradient hover |
| UsernameField | `src/components/UsernameField.tsx` | Montserrat label + styled input with focus animation |
| PasswordField | `src/components/PasswordField.tsx` | Montserrat label + "Forgot?" link + password input |
| SignInButton | `src/components/SignInButton.tsx` | Full-width dark button with gradient hover |
| Footer | `src/components/Footer.tsx` | Component Dock attribution |

## Design Fidelity Notes

- **Background gradient:** `linear-gradient(45deg, #00dbde, #fc00ff)` on a full-viewport container. The wireframe decoration is semi-transparent white polygonal line art — approximate with an SVG overlay or absolutely-positioned clip-path elements.
- **Input focus animation:** The original uses a pseudo-element `focus-input100` that scales from `scaleX(1.1) scaleY(1.3)` to `scale(1)` with opacity transition on focus. Implement with a Tailwind group-focus or a dedicated component with state-driven CSS transition.
- **Social buttons:** Side-by-side using flexbox with `calc((100% - 20px) / 2)` width. Each has `box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2)`. On hover, a gradient pseudo-element fades in (opacity 0→1, 0.4s).
- **Sign In button:** Same gradient hover effect as social buttons. Default state is solid #333333.
- **"Forgot?" link:** Positioned inline next to "Password" label, with `border-bottom: 1px solid #999999`. Use Montserrat SemiBold for labels per CSS.
- **Fonts:** Load Poppins (Regular, Medium) and Montserrat (Medium, SemiBold) via Google Fonts `<link>` in `index.html`.
- **Card sizing:** Fixed 680px width, centered with flexbox `justify-content: center; align-items: center` on the viewport container. Padding: 62px top, 110px sides.
- **Responsive:** At 768px, reduce card side padding to 60px. At 576px, reduce to 15px and make social buttons full-width (stack vertically).

## Implementation Tasks

1. [ ] Create `apps/loginpulse` scaffold (copy simplest existing login app)
2. [ ] Set up `Background.tsx` with gradient + wireframe decoration
3. [ ] Build `LoginCard.tsx` with heading, social buttons, fields, button, signup
4. [ ] Implement `SocialButtons.tsx` with Facebook + Google side-by-side buttons + gradient hover
5. [ ] Implement `UsernameField` and `PasswordField` with Montserrat labels, styled inputs, focus animation
6. [ ] Implement `SignInButton` with dark bg + gradient hover
7. [ ] Add footer with Component Dock link
8. [ ] Write tests for all components (100% coverage)
9. [ ] Verify with `scripts/verify-app.sh loginpulse`
10. [ ] Commit, push, open PR, merge

## Test Plan

- Background: renders gradient background and wireframe decoration
- SocialButtons: renders 2 buttons side by side (Facebook, Google) with correct colors; hover shows gradient
- UsernameField: renders Montserrat label, styled input, accepts text, focus animation
- PasswordField: renders label + "Forgot?" link, password input masks text, focus animation
- SignInButton: renders with #333333 bg, gradient on hover, triggers form submit
- LoginCard: composes all sub-components in correct order
- Footer: renders Component Dock link
- Responsive: social buttons stack on narrow viewports
