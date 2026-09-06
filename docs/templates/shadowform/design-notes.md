# Shadowform — Design Notes & Task Outline

Source: ColorLib "Modal 09" (slug: `modal-09`)
Preview: https://preview.colorlib.com/theme/bootstrap/modal-09/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-09.jpg

## Structure (section order, top to bottom)

1. **Page shell** — white `.ftco-section` filling viewport, centered content
   - Heading: template name ("Shadowform")
   - Primary button: "Launch Modal" (gold `#e3b04b`, rounded 4px)

2. **Modal overlay** — semi-transparent backdrop, click-outside-to-close
   - Bootstrap modal fade/slide animation (0.3s ease-out transform)

3. **Modal dialog** — 900px max-width, no border, no radius, box-shadow
   - **Close button** — 40×40px, absolute top-right, `rgba(0,0,0,0.1)` bg,
     white close icon (use lucide-react `X` icon)

4. **Modal body — two-column split** (`.row no-gutters`, `.col-md-6` each)
   - **Left column: image panel** — full-height background image
     (use `picsum.photos/seed/shadowform-1/450/600` placeholder)
   - **Right column: dark form panel** — `background: #2b2b28`
     - **Tab navigation** — "Sign In" (active by default) + "Sign Up"
       - Active tab: gold text (`#e3b04b`)
       - Inactive tab: `rgba(255,255,255,0.1)`
       - Tab border: none
     - **Sign In tab content:**
       - Heading: "Sign In" (white, Roboto 400)
       - Username field — uppercase label, transparent input, bottom border
       - Password field — same styling
       - Submit button — gold bg, white text, 52px height, 4px radius
       - "Remember Me" checkbox — custom gold accent indicator
       - "Forgot Password" link — `rgba(255,255,255,0.3)`
       - "Not a member? Sign Up" — switches to Sign Up tab
     - **Sign Up tab content:**
       - Heading: "Sign Up"
       - Full Name, Email Address, Password fields — same input styling
       - Terms checkbox — "I agree all statements in terms of service"
       - Submit button — same gold styling
       - "I'm already a member! Sign In" — switches to Sign In tab

## Fidelity notes

### Colors
- Brand accent: `#e3b04b` (gold/amber) — used EVERYWHERE: buttons, links,
  active tabs, checkbox indicators
- Modal body: `#2b2b28` (near-black dark gray)
- Modal text: `rgba(255,255,255,0.8)` for body, `0.7` for inputs, `0.2`
  for placeholders, `0.3` for auxiliary text, `0.1` for inactive tabs
- Close button bg: `rgba(0,0,0,0.1)` — NOT white, NOT transparent
- Page: white (`#fff`)

### Typography
- Font: Roboto (Google Fonts, weights 300/400/700)
- Body: 14px, line-height 1.8, weight 400
- Headings: weight 400, line-height 1.5
- Form labels: uppercase, 12px, letter-spacing 1px
- Tab links: 16px, weight 400
- Button: 15px

### Buttons
- Primary (submit): `#e3b04b` bg, white text, `border-radius: 4px`,
  height 52px, font-size 15px
- Hover: transparent bg, `#e3b04b` border + text
- Launch button: same gold styling, `py-3 px-4` padding

### Form inputs
- Background: transparent
- Border: bottom only, `1px solid rgba(255,255,255,0.1)`
- Text color: `rgba(255,255,255,0.7)`
- Placeholder: `rgba(255,255,255,0.2)`
- Height: 30px (modal form), 52px (submit button)
- Focus: no outline, transparent border

### Custom checkbox
- 16×16px indicator, 3px border-radius
- Border: `1px solid rgba(255,255,255,0.4)`
- Checked: `#e3b04b` bg + border, white checkmark SVG
- Label: `rgba(255,255,255,0.3)`

### Modal
- Max-width: 900px
- Border: none
- Border-radius: 0
- Shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
- Animation: transform 0.3s ease-out (Bootstrap fade)

### Layout
- Two-column split via Bootstrap grid (`.row no-gutters` + `.col-md-6`)
- Left: background-image panel (cover, center)
- Right: dark form panel
- Stacks vertically on mobile (< 768px)
- Image panel min-height 300px on mobile

## Tasks

- [ ] Scaffold app from simplest existing template (copy + rename package)
- [ ] Install Google Fonts (Roboto 300/400/700) in `index.html`
- [ ] Create `src/App.tsx` — page shell + modal state
- [ ] Create `src/components/LaunchSection.tsx` — heading + button
- [ ] Create `src/components/AuthModal.tsx` — modal wrapper
- [ ] Create `src/components/CloseButton.tsx` — 40x40px close icon
- [ ] Create `src/components/ImagePanel.tsx` — left column bg image
- [ ] Create `src/components/AuthForm.tsx` — tabbed Sign In / Sign Up
- [ ] Create `src/components/SignInForm.tsx` — username, password, submit
- [ ] Create `src/components/SignUpForm.tsx` — name, email, password, submit
- [ ] Create `src/components/CustomCheckbox.tsx` — gold accent checkbox
- [ ] Add theme tokens to `src/index.css` (`@theme` block)
- [ ] Write tests for each component (100% coverage)
- [ ] Update `TEMPLATES.md` — set `[x]` for Modal 09
- [ ] Update `README.md` status table
- [ ] Run `scripts/verify-app.sh shadowform` — typecheck + lint + tests + build
- [ ] Commit as `feat: add Shadowform (ColorLib Modal 09)` and push PR
