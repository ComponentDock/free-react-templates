# AuthWell — Implementation Tasks & Design Notes

Source: ColorLib Login Form V07 (`login-form-07`)
Preview: `https://preview.colorlib.com/theme/bootstrap/login-form-07/`
New name: `authwell` (app folder: `apps/authwell`, package: `@free-react-templates/authwell`)

## Structure Order

1. **App.tsx** — Compose the single-page layout (two-column split)
2. **LoginCard.tsx** — Right column: heading, subtitle, form, social buttons
3. **SocialButtons.tsx** — Facebook/Twitter/Google circular icon buttons
4. **Footer.tsx** — Component Dock attribution link

## Section-by-Section Fidelity Notes

### Layout (App.tsx)
- Full-viewport-height flex container or centered card
- Two equal columns on desktop (50/50 split)
- Stack vertically on mobile (illustration on top)
- Body background: `bg-[#f8fafb]`
- Font: Google Fonts "Roboto" (weights 300, 400) — load via `<link>` in index.html

### Left Column — Illustration
- Use `https://picsum.photos/seed/authwell-login/600/700` as placeholder
- Object-fit: cover, full height of the container
- On mobile: display above the form at reduced height

### Right Column — Login Form (LoginCard.tsx)
- **Heading:** `<h3>` "Sign In" — dark color, Roboto
- **Subtitle:** `<p>` in `#b3b3b3`, weight 300
- **Form fields:**
  - Background: `#edf2f5`
  - Border: `1px solid #e6edf1` (between stacked fields)
  - Border-radius: `7px` on outer corners (first field top, last field bottom)
  - Labels: `#b3b3b3`, 12px, positioned absolutely (floating label pattern)
  - Inputs: transparent background, 20px font, no border, no outline
  - On focus: field background changes to `#fff`
- **Checkbox row:** flex row
  - Left: custom "Remember me" checkbox (`#6c63ff` when checked, `#e6e6e6` unchecked, 4px radius)
  - Right: "Forgot Password" link (`#888`, 14px, underlined)
- **Log In button:**
  - Full-width, height 54px
  - Background: `#6c63ff` (indigo/purple)
  - Text: white, centered
  - Slight border-radius (Bootstrap default or ~4px)
- **Divider:** "--- or login with ---" in `#b3b3b3` (muted), centered
- **Social buttons (SocialButtons.tsx):**
  - Three inline circular buttons (50px × 50px, border-radius: 50%)
  - Facebook: `#3b5998`, Twitter: `#1da1f2`, Google: `#ea4335`
  - White icons centered in circles (use lucide-react equivalents)
  - Left-aligned with gap between them

### Footer (Footer.tsx)
- Minimal footer with Component Dock link
- Text: "Made with Component Dock" or "More templates at Component Dock"
- Link to `https://www.componentdock.com/`

## Component Composition

```
App.tsx
├── LoginCard.tsx
│   ├── heading + subtitle
│   ├── <form>
│   │   ├── UsernameField (floating label)
│   │   ├── PasswordField (floating label)
│   │   ├── RememberMe checkbox + ForgotPassword link
│   │   ├── LogInButton
│   │   ├── DividerText
│   │   └── SocialButtons
│   └── (footer link)
└── Illustration (img placeholder)
```

## Tailwind Theme Tokens (index.css @theme)

```css
@theme {
  --color-authwell-bg: #f8fafb;
  --color-authwell-field: #edf2f5;
  --color-authwell-border: #e6edf1;
  --color-authwell-primary: #6c63ff;
  --color-authwell-text: #b3b3b3;
  --color-authwell-link: #888;
  --color-authwell-facebook: #3b5998;
  --color-authwell-twitter: #1da1f2;
  --color-authwell-google: #ea4335;
}
```

## Testing Notes

- Test form rendering (all fields present with correct types)
- Test checkbox toggle behavior
- Test button click handler (prevent default, console.log or mock)
- Test social button rendering (3 buttons with correct colors)
- Test responsive layout (mobile stacking)
- Test floating label animation on input focus
- Mock the illustration with a placeholder image
