# DualForm — Task Outline & Design Notes

## Structure order (top → bottom)

1. **Page background** — centered container, white (#fff) background
2. **Title + Launch button** — "DualForm" heading + "Launch Modal" pill button
3. **Modal overlay** — semi-transparent backdrop (rgba(0,0,0,0.5))
4. **Modal dialog** — max-width 900px, gradient background, 50px padding
   - Close button (X) — top-right, 40x40px, rgba(0,0,0,0.1) bg
   - Two-column layout (row)
     - **Left column** — Sign In form
       - "Sign In" heading (white, weight 300)
       - Username input (underline style)
       - Password input (underline style)
       - "Sign In" button (#f9e090, 52px height)
       - "Remember Me" checkbox + "Forgot Password" link
       - "— Or Sign In With —" text
       - Facebook + Twitter social buttons
     - **Divider** — vertical 1px line, rgba(255,255,255,0.2)
     - **Right column** — Sign Up form
       - "Sign Up" heading (white, weight 300)
       - First name input (underline style)
       - Last name input (underline style)
       - Email input (underline style)
       - Password input (underline style)
       - "Login" button (#f9e090)
       - Terms text

## Component breakdown

| Component | File | Notes |
|---|---|---|
| App | src/App.tsx | Renders Page + Modal |
| Page | src/components/Page.tsx | Title + Launch button |
| Modal | src/components/AuthModal.tsx | Full modal with gradient bg |
| SignInForm | src/components/SignInForm.tsx | Left column form |
| SignUpForm | src/components/SignUpForm.tsx | Right column form |
| SocialButtons | src/components/SocialButtons.tsx | Facebook + Twitter buttons |
| Divider | (inline in Modal) | Vertical line separator |
| CloseButton | (inline in Modal) | X icon, 40x40px |

## Design notes

### Gradient
- Background: linear-gradient(45deg, #c859ff 0%, #ffab8c 100%)
- Use Tailwind `bg-gradient-to-br from-[#c859ff] to-[#ffab8c]`

### Typography
- Font: Poppins (Google Fonts)
- Modal base: 14px
- Headings: weight 300, white
- Text: rgba(255, 255, 255, 0.8)

### Button styles
- Primary: bg #f9e090, height 52px, font-weight 500
- Social: bg #fff, text #000, border 1px solid rgba(255,255,255,0.4)
- Social hover: bg transparent, text #fff

### Form controls (inside modal)
- Transparent background
- No border except bottom: 1px solid rgba(255,255,255,0.2)
- Height: 40px
- Placeholder: rgba(255,255,255,0.8)

### Divider
- Position: absolute, full height
- Width: 1px
- Color: rgba(255,255,255,0.2)

### Close button
- Size: 40x40px
- Background: rgba(0,0,0,0.1)
- Position: absolute, top-right

### Fidelity notes
- The original uses Bootstrap 4 grid + modal — recreate with React state + Tailwind
- Icons use ionicons — replace with lucide-react (User, X, Facebook, Twitter)
- The gradient is the most distinctive feature — must match exactly
- The split layout stacks vertically on mobile
- Social buttons are full-width in the left column
- Checkbox uses custom fill-control pattern with #f9e090 accent
