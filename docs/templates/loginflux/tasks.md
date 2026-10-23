# Loginflux — Design Notes

## Source

- ColorLib: Login Form 13 (`login-form-v13`)
- ColorLib URL: `https://colorlib.com/wp/template/login-form-v13/`
- Preview: `https://preview.colorlib.com/theme/login-form-v13/` (404 — no longer available)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v13.jpg`

## Structure order

1. Full-page split layout (left photo panel + right form panel)
2. Left panel: background photo with purple→pink diagonal gradient overlay
3. Right panel: "Sign Up" heading + 5-field form + checkbox + button + sign-in link

## Section-by-section fidelity notes

### Left panel (photo + gradient)
- ~60% width on desktop, full-width on mobile
- Background: stock photo (person using tablet/laptop) — use `https://picsum.photos/seed/loginflux-1/800/1200`
- Gradient overlay: diagonal from top-left (#9B59B6 purple) to bottom-right (#E91E8C pink/magenta)
- Overlay opacity ~60–70% (photo still visible through gradient)
- No text or UI elements on this panel

### Right panel (form)
- ~40% width on desktop, full-width on mobile
- Background: white (#ffffff)
- Vertically centered form content (flex center or padding)
- Padding: generous (~60px horizontal, ~40px vertical)

### "Sign Up" heading
- Large, bold, dark text (~28–32px, font-weight 700)
- Color: near-black (#1a1a1a)
- Bottom margin before first field

### Form fields (5 total)
All fields follow the same pattern:
- Label above input, medium gray (#888888), font-size ~14px, margin-bottom ~4px
- Input: no side/top borders, only bottom border (1px solid #e0e0e0)
- Input text: dark gray (#333333), font-size ~16px
- Input height: ~40px
- Full-width within panel
- Fields in order: Full Name, Email, Username, Password, Repeat Password

### Validation checkmarks
- Green checkmark icon (#2ecc71) appears to the right of Email and Username fields
- Only shown when input is valid (non-empty username, valid email format)
- Use lucide-react `Check` icon, positioned absolute right inside input wrapper

### Password masking
- Password and Repeat Password use `type="password"` by default
- No eye toggle in this design (unlike login-form-16)
- Dots/asterisks for masked input

### Checkbox
- Standard checkbox input with custom purple accent (#9B59B6)
- Label: "I agree to the Terms of User"
- "Terms of User" is a hyperlink (purple color, underline on hover)
- Checked by default in the reference screenshot

### "Sign Up" button
- Full-width (or near-full-width) within form panel
- Gradient background: linear-gradient(to right, #9B59B6, #E91E8C)
- Text: white, bold, ~16px
- Border-radius: ~25px (pill shape)
- Padding: ~12px vertical, ~24px horizontal
- Hover: slight opacity/brightness change

### "Sign in →" link
- Positioned below/right of the submit button
- Dark gray text (#333333) with right arrow (→)
- No underline, hover may underline or change color
- Links to a hypothetical sign-in page (use # as href)

### Responsive behavior
- Desktop (>=992px): side-by-side panels
- Tablet (768–991px): panels stack, left panel ~200px height, form below
- Mobile (<768px): full-width stacked, minimal left panel, form fills screen
- Form padding reduces on smaller screens

## Key implementation notes

- Use Tailwind CSS 4 utility classes
- Gradient overlay: `bg-gradient-to-br from-[#9B59B6] to-[#E91E8C]` with opacity
- Button gradient: same colors, horizontal direction (`bg-gradient-to-r`)
- Pill button: `rounded-full`
- Bottom-border inputs: `border-0 border-b border-gray-300 focus:border-[#9B59B6] outline-none`
- Validation state: `useState` for email/username validity, conditionally render Check icon
- Placeholder images: `https://picsum.photos/seed/loginflux-<n>/<w>/<h>`
- No colorlib.com references in any app file
- Footer MUST link to https://www.componentdock.com/
