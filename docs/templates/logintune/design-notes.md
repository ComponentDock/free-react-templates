# LoginTune — Design Notes

## Source
- **ColorLib template**: WordPress Login Customizer
- **Source URL**: https://colorlib.com/wp/template/wordpress-login-customizer/
- **Live preview**: https://preview.colorlib.com/theme/wordpress-login-customizer/ (404 — unreachable)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/creative-colorlib-login-form.jpg
- **Fallback**: Design captured from screenshot only (preview unavailable)

## Section order (top to bottom)

1. **Full-viewport container** — solid green (#6ab04c) background, flex center,
   min-height 100vh
2. **Card wrapper** — ~380px max-width, white bg, border-radius 4px,
   box-shadow 0 2px 10px rgba(0,0,0,0.1), padding 30px
3. **Username input** — light gray (#f0f0f0) bg, border-radius 4px, full-width,
   placeholder "username", dark gray text
4. **Password input** — same styling, placeholder "password", type=password
5. **Login button** — full-width, green (#6ab04c) bg, border-radius 4px,
   "LOGIN" uppercase white text, hover darkens to ~#5a9e40
6. **Registration text** — centered, "Not registered?" in #999999 +
   "Create an account" in #6ab04c as a link
7. **Footer** — minimal, links to Component Dock (mandatory per conventions)

## Component breakdown for React implementation

### App.tsx
- Single `LoginTune` component (no routing needed)
- No custom Google Fonts needed (system Arial/sans-serif stack)

### Components
- `LoginCard.tsx` — the centered card container with shadow + rounded corners
- `FormField.tsx` — reusable input wrapper with light gray bg + placeholder styling
- `SubmitButton.tsx` — the green button with hover transition
- `RegistrationLink.tsx` — the "Not registered? Create an account" section
- `Footer.tsx` — minimal footer with Component Dock link

### index.css (@theme tokens)
```
--color-brand: #6ab04c;
--color-brand-dark: #5a9e40;
--color-bg-page: #6ab04c;
--color-bg-card: #ffffff;
--color-bg-input: #f0f0f0;
--color-text: #333333;
--color-text-muted: #999999;
--color-text-link: #6ab04c;
--color-text-button: #ffffff;
```

## Fidelity notes

- The original is a WordPress login customizer plugin preview — the screenshot
  shows a CodePen-style presentation of the customized login form.
- The design is extremely minimal: solid green background, white card, two inputs,
  one button, one registration link. No icons, no animations, no social logins.
- No custom fonts visible — appears to use system Arial/sans-serif stack.
- The green brand color (#6ab04c) is used for both the page background and the
  login button, creating a monochromatic effect.
- Input fields have a very light gray background (#f0f0f0) with subtle rounding.
- The card has a very subtle shadow — almost flat but with slight depth.
- Responsive: at narrow viewports, the card should shrink with horizontal padding.
- The original preview URL is 404, so all design data comes from the screenshot.
  If the preview becomes available later, tokens should be re-verified.
- Per conventions, the app must NOT reference ColorLib in any source files.
  Provenance lives only in this spec and TEMPLATES.md.
