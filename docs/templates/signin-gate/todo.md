# SigninGate — Task Outline & Design Notes

## Structure order (top → bottom)

1. **Page background** — centered container, white (#fff) background
2. **Title + Launch button** — "SigninGate" heading + "Launch Modal" pill button
3. **Modal overlay** — semi-transparent backdrop when modal is open
4. **Modal dialog** — max-width 450px, white background, shadow
   - Close button (X) — top-right, 40x40px
   - Icon — 80px circle, 1px solid #fb8691, person silhouette icon
   - Heading — "Sign In", centered, Poppins font
   - Username input — placeholder "Username", 52px height, 5px border-radius
   - Password input — placeholder "Password", 52px height
   - Login button — full-width, pill (40px radius), #fb8691 bg, white text
   - Remember Me checkbox — custom coral pink indicator
   - Forgot Password link — #fb8691, right-aligned
   - Footer — "Not a member? Create an account", #f8f8f8 bg

## Component breakdown

| Component | File | Notes |
|---|---|---|
| App | src/App.tsx | Renders Page + Modal |
| Page | src/components/Page.tsx | Title + Launch button |
| Modal | src/components/SignInModal.tsx | Full modal with form |
| CloseButton | (inline in Modal) | X icon, 40x40px |
| IconCircle | (inline in Modal) | 80px circle with person icon |
| LoginForm | src/components/LoginForm.tsx | Username, password, checkbox, links |

## Design notes

### Brand color
- Primary: #fb8691 (coral pink) — used on buttons, icon border, links, checkbox
- Use as Tailwind custom theme token

### Typography
- Font: Poppins (Google Fonts, weights 300-900)
- Base: 15px, line-height 1.8
- Headings: weight 400, Poppins

### Button styles
- All buttons: border-radius 40px (pill), transition 0.3s
- Primary: bg #fb8691, border 1px solid #fb8691, color #fff
- Primary hover: bg transparent, color #fb8691

### Form controls
- Height: 52px
- Border-radius: 5px
- Border: 1px solid rgba(0,0,0,0.1)
- Focus: border #fb8691
- Font-size: 16px

### Modal
- Max-width: 450px
- Box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)
- Border: none
- Header: no padding, no border
- Footer: background #f8f8f8, no border

### Fidelity notes
- Match the exact section structure from the original
- The original uses Bootstrap 4 modal classes — recreate with React state + Tailwind
- Icon is an ionicons person icon — use lucide-react User icon instead
- Close button uses ionios-close — use lucide-react X icon
- Checkbox is custom-styled with a fill-control pattern — implement with Tailwind
- The page behind the modal is very simple: just a heading + button
- No images needed — the design is purely form-based
