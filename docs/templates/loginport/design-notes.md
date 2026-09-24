# LoginPort — Design Notes

## Source
- **ColorLib template**: Login Form V8
- **Source URL**: https://colorlib.com/wp/template/login-form-v8/
- **Live preview**: https://colorlib.com/etc/lf/Login_v8/index.html
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v8.jpg

## Section order (top to bottom)

1. **Full-viewport container** — white (#ffffff) background, flex center,
   min-height 100vh, padding 15px
2. **Card wrapper** — 500px max-width, white bg, border-radius 20px,
   box-shadow 0 3px 20px rgba(0,0,0,0.1), overflow hidden
3. **Green header strip** — absolute-positioned at card top, full width,
   #57b846 bg, "Sign In" title in JosefinSans-Bold 30px white, centered,
   padding-top 50px, padding-bottom 39px
4. **Form body** — positioned below header with top padding (~178px to clear
   the absolute header), left/right padding 55px
5. **Username input** — gray (#ebebeb) bg, border-radius 27px, 55px tall,
   placeholder "Username", Ubuntu-Bold 15px, dark green text (#1b3815)
6. **Password input** — same styling, placeholder "Password", type=password
7. **Focus expansion** — on :focus, a pseudo-element background expands
   width by 20px with 0.4s transition, creating a subtle grow effect
8. **"Forgot" row** — right-aligned, "Forgot" in #999999 + "Username /
   Password?" in #57b846 link, padding-top 13px, padding-bottom 23px
9. **Submit button** — full-width, 50px tall, #57b846 bg, border-radius 25px,
   "Sign in" uppercase white text, Ubuntu-Bold 15px, hover darkens to #1b3815
10. **Sign-up section** — centered, "Don't have an account?" in #999999,
    "SIGN UP NOW" in #57b846 bold uppercase, padding-top 170px, padding-bottom
    40px

## Component breakdown for React implementation

### App.tsx
- Single `LoginPort` component (no routing needed)
- Imports Google Fonts: Ubuntu (400, 700) + Josefin Sans (700) via
  `<link>` in index.html

### Components
- `LoginCard.tsx` — the 500px card container with shadow + rounded corners
- `HeaderStrip.tsx` — the green banner with title (could be inline in card)
- `FormField.tsx` — reusable input wrapper with pill styling + focus expansion
  (accepts type, placeholder, name props)
- `SubmitButton.tsx` — the green pill button with hover transition
- `SignUpLink.tsx` — the bottom "Don't have an account?" section

### index.css (@theme tokens)
```
--color-brand: #57b846;
--color-brand-dark: #1b3815;
--color-input-bg: #ebebeb;
--color-text-dark: #1b3815;
--color-text-muted: #999999;
--color-text-link: #666666;
--color-error: #c80000;
```

## Fidelity notes

- The original uses Bootstrap CSS reset + custom vendor CSS (animate.css,
  animsition). In React we use Tailwind's preflight + custom theme tokens.
- The original's `.focus-input100` pseudo-element creates a expanding
  background on focus. Implement with a sibling div that grows via
  `peer-focus:` Tailwind or a CSS transition on width.
- The original uses Font Awesome icons (not present in this template —
  no icons needed). No icon library required.
- The green header strip is `position: absolute` at the top of the card.
  Form content has `padding-top: 178px` to clear it.
- Responsive: at ≤576px, form padding reduces to 15px. Card stays centered.
- The original references `images/icons/favicon.ico` — use a generic favicon
  or the project default.
