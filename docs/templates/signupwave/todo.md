# SignupWave — Implementation Todo

Source: ColorLib Signup Form 06 (`signup-form-06`)
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-06/`

## Tasks

### 1. Scaffold app
- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/signupwave`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `signupwave.free.componentdock.com`
- [ ] Update `package.json` homepage

### 2. Layout (Split Screen)
- [ ] Create `SplitLayout.tsx` — flexbox row, 100vh, two equal halves
- [ ] Right panel: background image with cover/center
- [ ] Left panel: centered container with form content
- [ ] Responsive: stack on mobile (<992px), image on top

### 3. Form Section
- [ ] Create `RegisterForm.tsx` — heading, subtext, form fields
- [ ] Floating label inputs: Email, Password, Re-type Password
- [ ] Label animation: translateY on focus/filled state
- [ ] Terms checkbox with custom indicator (blue when checked)
- [ ] Register button: full-width, blue, 54px height

### 4. Social Login
- [ ] Create `SocialLogin.tsx` — Facebook, Twitter, Google buttons
- [ ] Full-width buttons with brand colors
- [ ] SVG icons for each social platform
- [ ] Divider text "— or —" between form and social buttons

### 5. App Composition
- [ ] Create `App.tsx` composing SplitLayout > RegisterForm + SocialLogin
- [ ] Add Google Fonts link for Roboto in `index.html`
- [ ] Set up `index.css` with Tailwind + theme tokens

### 6. Tests
- [ ] SplitLayout renders two panels
- [ ] RegisterForm displays heading, inputs, checkbox, button
- [ ] Floating labels animate on focus
- [ ] SocialLogin shows three buttons with correct colors
- [ ] Checkbox toggles checked state
- [ ] Responsive: layout stacks on small viewports
- [ ] Footer contains Component Dock link
- [ ] 100% coverage

### 7. Deploy
- [ ] Run `npm install` at repo root
- [ ] Verify with `scripts/verify-app.sh signupwave`
- [ ] Commit, push, open PR, merge
