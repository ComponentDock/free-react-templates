# Signbreeze — Design Notes

## Source
- **ColorLib:** Login Form V06 (`login-form-06`)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/login-form-06/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-06.jpg

## Structure order (1:1 with original)

1. **SplitContainer** — outer `d-flex half` wrapper, 100vh, flex row
2. **BackgroundPanel** (`.bg`) — right half, full-cover background image, hidden on mobile (stacks above at 500px)
3. **FormPanel** (`.contents`) — left half, centered vertically
4. **FormContainer** — centered col-md-7 within FormPanel
5. **Heading** — "Sign In" h3 + descriptive paragraph
6. **LoginForm** — `<form>` wrapping:
   - UsernameField: floating label input (first, top-radius 7px)
   - PasswordField: floating label password input (last, bottom-radius 7px)
   - RememberForgotRow: checkbox + "Forgot Password" link flex row
   - SubmitButton: full-width, 54px height, primary blue
   - OrDivider: centered "— or —" text
   - SocialLogin section:
     - FacebookButton: #3b5998 bg, white text
     - TwitterButton: #1da1f2 bg, white text
     - GoogleButton: #ea4335 bg, white text
7. **Footer** — Component Dock attribution link

## Fidelity notes

### Layout
- Desktop: side-by-side 50/50 split at 100vh
- Mobile (<998px): background image stacks above at 500px fixed height, form below
- Uses Bootstrap grid (`row`, `col-md-7`, `align-items-center`, `justify-content-center`)

### Floating labels
- Labels are absolutely positioned at vertical center of input
- On focus/has-value, label slides up via `margin-top: -20px`
- Transition: `.3s all ease`
- Label font: 12px, color #b3b3b3

### Form group styling
- Each group: border 1px solid #efefef, padding 15px, overflow hidden
- No border-bottom between groups (next group's border-top creates it)
- First group: top corners 7px radius
- Last group: bottom corners 7px radius + border-bottom

### Checkbox
- Custom checkbox using icomoon icon font (checkmark glyph `\e5ca`)
- Unchecked: #e6e6e6 background, 4px border-radius
- Checked: #007bff background, white checkmark
- Hover checked: #1a88ff

### Buttons
- Log In: Bootstrap btn-primary (#007bff), 54px height, 30px horizontal padding, full width
- Social buttons: full-width block, white text, 10px bottom margin
  - Facebook: #3b5998 → hover #344e86
  - Twitter: #1da1f2 → hover #0d95e8
  - Google: #ea4335 → hover #e82e1e

### Typography
- Font: Google Fonts Roboto (weights 300, 400)
- Headings: Roboto with system fallback
- Paragraphs: Roboto 300, color #b3b3b3
- Links: color #888, underline, transition .3s

### Background image
- Right panel uses `background-image: url('images/bg_1.jpg')`
- `background-size: cover; background-position: center`
- On mobile: height 500px instead of 50vh

## Implementation approach

1. Copy simplest existing app as base (e.g. `apps/aurora`)
2. Create `src/components/` with:
   - `SplitLayout.tsx` — the 50/50 flex container
   - `BackgroundPanel.tsx` — right half with picsum placeholder
   - `LoginForm.tsx` — the form with floating labels
   - `SocialLogin.tsx` — the three social buttons
   - `RememberMe.tsx` — custom checkbox component
   - `Footer.tsx` — Component Dock attribution
3. Use Tailwind `@theme` for design tokens
4. Use `picsum.photos/seed/signbreeze/1200/800` for background image
5. Use `lucide-react` for social icons (Facebook, Twitter/X, Google)
6. Floating label via CSS transition + peer utility classes
