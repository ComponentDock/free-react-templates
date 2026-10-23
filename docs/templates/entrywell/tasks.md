# Entrywell — Implementation Notes

## Template overview

- **New name:** Entrywell
- **Source:** ColorLib "Modal 09" (`modal-09`)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-09/
- **Category:** Bootstrap Modal Templates
- **Layout:** Full-page centered launch button → wide split-layout modal (image left, form right)

## Section order (fidelity notes)

### 1. Page background (`.ftco-section`)

- White background (`#fff`)
- Centered heading "Modal 09" → will become "Entrywell"
- Launch button "Launch Modal 09" → will become "Launch Entrywell"
- Button: brand color `#e3b04b`, border-radius 4px, padding `py-3 px-4`
- On hover: transparent background, brand color text

### 2. Modal dialog

- `max-width: 900px`, vertically centered
- No border, no border-radius
- Box shadow: `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`
- Close button: absolute top-right, 40x40px, `rgba(0, 0, 0, 0.1)` background, white text

### 3. Left panel (background image)

- Full-height left half with background image
- Use `https://picsum.photos/seed/entrywell/600/800` as placeholder
- On mobile (< 768px): collapses to 300px height

### 4. Right panel (dark form)

- Background: `#2b2b28`
- Tab navigation: "Sign In" (active) / "Sign Up"
- Active tab: `#e3b04b` text, inactive: `rgba(255, 255, 255, 0.1)`
- Borderless tabs (`border-0`)

### 5. Sign In form

- Heading: "Sign In"
- Fields: Username (text), Password (password)
- Input styling: transparent background, bottom border only (`1px solid rgba(255, 255, 255, 0.1)`), white text 70% opacity, height 30px
- Labels: uppercase, 12px, letter-spacing 1px
- Submit button: "Sign In", `#e3b04b` background, height 52px, border-radius 4px
- "Remember Me" checkbox with custom fill (brand color `#e3b04b`)
- "Forgot Password" link
- "Not a member? Sign Up" link (switches to Sign Up tab)

### 6. Sign Up form

- Heading: "Sign Up"
- Fields: Full Name (text), Email Address (text), Password (password)
- Same input styling as Sign In
- "I agree all statements in terms of service" checkbox
- Submit button: "Sign Up"
- "I'm already a member! Sign In" link (switches to Sign In tab)

## Design tokens for Tailwind @theme

```
--color-brand: #e3b04b;
--color-panel-dark: #2b2b28;
--color-input-border: rgba(255, 255, 255, 0.1);
--color-input-text: rgba(255, 255, 255, 0.7);
--color-input-placeholder: rgba(255, 255, 255, 0.2);
--color-tab-inactive: rgba(255, 255, 255, 0.1);
--color-close-bg: rgba(0, 0, 0, 0.1);
--font-family-brand: "Roboto", Arial, sans-serif;
```

## Component structure

```
src/
  App.tsx              — Page layout with launch button + modal
  components/
    LaunchSection.tsx  — White centered section with heading + button
    EntryModal.tsx     — Modal dialog wrapper (open/close state)
    SplitLayout.tsx    — Two-column layout inside modal
    ImagePanel.tsx     — Left half with background image
    FormPanel.tsx      — Right half with dark background
    TabNavigation.tsx  — Sign In / Sign Up tabs
    SignInForm.tsx     — Sign In form with fields
    SignUpForm.tsx     — Sign Up form with fields
```

## Key implementation notes

1. **Modal state:** Use React `useState` for open/close toggling. No Bootstrap JS dependency.
2. **Tab state:** Use React `useState` for active tab (signin/signup). Tab switching via click handlers.
3. **Form handling:** Basic controlled inputs. No real form submission needed — just UI fidelity.
4. **Responsive:** Image panel height changes at 768px breakpoint. Use Tailwind responsive utilities.
5. **Font:** Load Roboto via Google Fonts `<link>` in `index.html`.
6. **No ColorLib references:** All provenance lives in spec only. App code uses "Entrywell" branding.
7. **Footer:** Must include link to https://www.componentdock.com/ branded as "Component Dock".
