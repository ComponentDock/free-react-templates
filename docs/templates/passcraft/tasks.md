# PassCraft — Implementation Tasks & Design Notes

Source: ColorLib "Login Form 03" (login-form-03)
Preview: https://preview.colorlib.com/theme/bootstrap/login-form-03/
New name: passcraft

## Structure Order

1. `index.html` — Roboto font link, page title
2. `src/App.tsx` — Compose the full-viewport split layout
3. `src/components/LoginCard.tsx` — The white form card (heading, inputs, checkbox, button)
4. `src/components/HeroSection.tsx` — Left half with background image
5. `src/components/Footer.tsx` — Component Dock attribution
6. `src/index.css` — Tailwind entry + theme tokens (@theme block with brand colors)

## Section-by-Section Fidelity Notes

### Split Layout (App.tsx)
- Full viewport height: `h-screen min-h-[700px]` with `flex` or grid
- Left: background image container (50% width), `bg-cover bg-center`
- Right: `#f6f7fc` background, contains the form card
- Responsive: on < 992px, switch to column, image goes on top at 200px height

### LoginCard (LoginCard.tsx)
- White background, `p-10` (40px) / `p-6` on mobile
- Negative margin-top (~300px) to overlap the hero image
- Centered vertically on the right half
- Heading: "Login to **PassCraft**" (h3, bold on brand name)
  - Use "Component Dock" or "PassCraft" instead of "Colorlib"
- Username field: label "Username", placeholder "your-email@gmail.com"
- Password field: label "Password", placeholder "Your Password"
- Remember me row: checkbox (checked default) + "Remember me" label on left,
  "Forgot Password" link on right, using flexbox justify-between
- Log In button: full-width, orange (#fb771a), white text, 54px height

### Input Styling
- Background: #efefef
- Border: none
- Border-radius: 4px
- Height: 54px
- Focus: no shadow, no outline (matching original)
- Labels: normal weight, small text
- Placeholder text: lighter gray

### Checkbox
- Custom checkbox with hidden native input
- Indicator: 20x20px, #e6e6e6 (unchecked), #fb771a (checked)
- Checkmark: white icon when checked
- "Remember me" caption: 14px, #888

### Footer
- Simple Component Dock attribution
- Link: https://www.componentdock.com/
- Text: "Made with Component Dock" or similar
