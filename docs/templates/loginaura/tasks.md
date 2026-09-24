# Loginaura — Task Outline

## Template

- Name: Loginaura
- Recreation of: ColorLib Login Form V12
- Source: https://colorlib.com/wp/template/login-form-v12/
- Preview: https://colorlib.com/etc/lf/Login_v12/index.html

## Design Notes

- Full-viewport centered layout on blue-to-cyan gradient (#005bea → #00c6fb)
- Semi-transparent photo overlay on top of gradient
- Circular avatar (120×120px) with white border ring
- "John Doe" heading in Montserrat ExtraBold, white
- Username + Password inputs: white pill shape, left icons (User, Lock)
- Dark Login button (#333333) with gradient reveal on hover
- "Forgot Username / Password?" link (light gray)
- "Create new account →" link (light gray)
- Font: Montserrat (Google Fonts)
- Component Dock footer

## Design Tokens

| Token               | Value      | Usage                          |
| ------------------- | ---------- | ------------------------------ |
| --color-page-start  | #005bea    | Gradient start — blue          |
| --color-page-end    | #00c6fb    | Gradient end — cyan            |
| --color-btn         | #333333    | Button background — dark       |
| --color-btn-hover   | #005bea    | Button hover — gradient reveal |
| --color-avatar-ring | #ffffff    | Avatar border ring             |
| --color-heading     | #ffffff    | Heading text                   |
| --color-body        | #cccccc    | Links, body text               |
| --color-input       | #ffffff    | Input background               |
| --font-body         | Montserrat | Body text via Google Fonts     |

## Files

- apps/loginaura/src/App.tsx
- apps/loginaura/src/components/Avatar.tsx
- apps/loginaura/src/components/LoginForm.tsx
- apps/loginaura/src/components/Footer.tsx
- apps/loginaura/src/App.test.tsx
- apps/loginaura/src/index.css
