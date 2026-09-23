# Logincraft (ColorLib Login Form V1) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-logincraft`.

## Design notes (replication findings)

- **Original:** ColorLib "Login Form V1" — split-screen login form template
  (source: https://colorlib.com/wp/template/login-form-v1/).
- **Demo URL:** `https://colorlib.com/etc/lf/Login_v1/index.html` (HTTP 200,
  4,540 bytes, verified 2026-09-24). Live template HTML with linked CSS.
- **Preview URL:** `https://preview.colorlib.com/theme/login-form-v1/` (HTTP
  404 at prep time — preview server may have removed this slug). Fallback to
  demo URL + ColorLib screenshot.
- **Screenshot cross-check:** `Login_v1.jpg` (1280×939, referenced from the
  ColorLib template page). The original template is a well-known Colorlib login
  form with a purple-to-blue gradient background and a white split card.
- **CSS source:** `css/main.css` (9,067 bytes, fully extracted from the demo).
  Also references `css/util.css` (utility spacing/typography classes) and
  Bootstrap 4 CSS. Libraries: jQuery 3.2.1, Bootstrap 4, select2, tilt.js.
  **Fonts: Poppins (Regular/Medium/Bold) + Montserrat Bold** (loaded as
  local `@font-face` files from `fonts/` directory).

- **Visual design:** Vibrant purple-to-blue diagonal gradient fills the entire
  viewport. A white rounded card sits centered, split into a decorative
  illustration (left, with tilt hover effect) and a login form (right). The
  form has a bold "Member Login" title, two pill-shaped gray inputs with
  left-aligned icons (envelope + lock), a green pill-shaped "Login" button,
  and two text links below. The green accent (#57b846) is used for the button,
  input focus glow, link hover states, and icon focus color.

- **Structure (1:1, section order — single-page template):**

  1. `div.limiter` → `div.container-login100` — full-page gradient background
     (linear-gradient -135deg, #c850c0 → #4158d0), flex centered, min-height
     100vh, 15px padding
  2. `div.wrap-login100` — white card, 960px max-width, 10px border-radius,
     flex row, space-between, padding 177px/130px/33px/95px
  3. `div.login100-pic.js-tilt` — decorative illustration image, 316px wide,
     tilt.js scale 1.1 on hover; hidden on mobile <=768px
  4. `form.login100-form.validate-form` — 290px wide:
     a. `span.login100-form-title` — "Member Login" (Poppins Bold, 24px, #333)
     b. `div.wrap-input100` (email) — input100 pill (50px, #e6e6e6 bg,
        25px radius), envelope icon (fa-envelope), focus-input100 green glow
     c. `div.wrap-input100` (password) — input100 pill, lock icon (fa-lock),
        same focus animation
     d. `div.container-login100-form-btn` — full-width "Login" button
        (Montserrat Bold, 15px, uppercase, #57b846 bg, 25px radius, white)
     e. `div.text-center.p-t-12` — "Forgot" + "Username / Password?" link
     f. `div.text-center.p-t-136` — "Create your Account →" link

- **Responsive breakpoints (from CSS):**
  - >992px: full split (316px pic + 290px form)
  - 768–992px: pic 35%, form 50%, reduced padding
  - <=768px: pic hidden, form 100% width
  - <=576px: minimal padding (15px horizontal)

- **Design tokens (from `css/main.css`):**
  - Gradient: `linear-gradient(-135deg, #c850c0, #4158d0)`
  - Card: `#fff`, `border-radius: 10px`, `960px` max
  - Input: `#e6e6e6` bg, `border-radius: 25px`, `height: 50px`
  - Button: `#57b846` bg → `#333333` hover, `border-radius: 25px`, `height: 50px`
  - Focus glow: `rgba(87,184,70, 0.8)` (green)
  - Body text: `#666666`, placeholder: `#999999`, heading: `#333333`
  - Fonts: Poppins Regular/Medium/Bold + Montserrat Bold
  - Validation: `#c80000` border + text, `border-radius: 13px`

- **Recreation decisions (for implementer):**
  - Use Google Fonts `<link>` for Poppins (400/500/700) + Montserrat (700)
    instead of local @font-face files
  - Use lucide-react icons (Mail, Lock, ArrowRight) instead of Font Awesome
  - Placeholder illustration: `https://picsum.photos/seed/logincraft/316/400`
  - No tilt.js — use CSS transform + transition on hover for the tilt effect
  - Keep the green focus glow animation via Tailwind `@keyframes` in index.css
  - Validation: controlled form with state, show/hide error tooltips
  - Footer must link to https://www.componentdock.com/ ("Component Dock")
  - No ColorLib references anywhere in app code

## Tasks (implementation checklist — do in order)

1. [ ] `apps/logincraft` scaffold: copy the simplest existing app, rename
       package to `@free-react-templates/logincraft`, update `public/CNAME` →
       `logincraft.free.componentdock.com`, `homepage` →
       `https://logincraft.free.componentdock.com`; `npm install` at root so
       the lockfile registers the workspace (grep the lockfile to verify).
2. [ ] Spec-driven tests FIRST (TDD, 100% coverage): gradient background,
       white card, decorative illustration with tilt, "Member Login" title,
       email input with envelope icon, password input with lock icon, Login
       button (green pill), button hover dark, "Forgot Username / Password?"
       link, "Create your Account →" link, form validation (email required,
       password required, valid submit), responsive breakpoints (illustration
       hide <=768px, padding adjustments), document title.
3. [ ] `src/index.css`: `@theme` tokens — gradient start #c850c0, gradient
       end #4158d0, primary green #57b846, primary hover #333, ink #333,
       body #666, muted #999, input bg #e6e6e6, validation #c80000, card
       radius 10px, input/button radius 25px. Google Fonts `<link>` (Poppins
       400/500/700, Montserrat 700) in `index.html`.
4. [ ] Components: `GradientBackground` (full-page gradient wrapper),
       `LoginCard` (white card, split layout), `Illustration` (decorative
       image with CSS tilt hover), `LoginForm` (title + email input + password
       input + login button + forgot link + create account link),
       `FormInput` (pill input with left icon + focus animation + validation
       tooltip), `LoginButton` (green pill button with hover transition),
       `Footer` (Component Dock link).
5. [ ] `App.tsx`: compose sections — GradientBackground > LoginCard >
       Illustration + LoginForm; Footer below card. Title
       "Logincraft — Member Login".
6. [ ] `scripts/verify-app.sh logincraft` (typecheck + lint + 100% coverage +
       build); PR `feat/template-logincraft` → merge immediately
       (`gh pr merge --squash --delete-branch`).
7. [ ] Bookkeeping: TEMPLATES.md login-form-v1 row `[~]`→`[x]` + surge URL
       `https://logincraft.free.componentdock.com`, `npm run readme:status`,
       push. (Implementer's job — NOT the prep stream.)
