# Signupcraft — Implementation Outline

**Source:** ColorLib Signup Form 05
**Preview:** https://preview.colorlib.com/theme/signup-form-05/ (unreachable — design from screenshot)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-05.jpg
**New name:** `signupcraft`
**App folder:** `apps/signupcraft`

## Structure Order (Section-by-Section)

1. **Page layout** — Split-screen: left background image (~40%) + right form card (~60%) on light gray bg
2. **Background image** — Full-height lifestyle/kitchen image on the left (placeholder: picsum)
3. **Form card** — Centered white card with shadow, containing all form elements
4. **SIGN UP heading** — Uppercase, bold, centered h2
5. **Email field** — Label "Email" + input with placeholder "your-email@gmail.com"
6. **Password field** — Label "Password" + masked input with placeholder "Your Password"
7. **Re-type Password field** — Label "Re-type Password" + masked input with placeholder "Re-type Your Password"
8. **Terms checkbox** — Checked by default, "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy..."
9. **Register button** — Full-width orange button (#f5a623), white text, rounded
10. **"or" divider** — Gray centered text separator
11. **Facebook button** — Full-width dark blue (#3b5998) with icon
12. **Twitter button** — Full-width light blue (#1da1f2) with icon
13. **Google button** — Full-width red (#dd4b39) with icon
14. **Footer** — Site name + Component Dock link

## Design Fidelity Notes

### Layout
- Split-screen: flex row with left image (flex: ~40%) and right form card (flex: ~60%)
- On mobile (<768px): stack vertically (flex-col), image on top, card below
- Card is vertically centered in the right column with padding
- Card has white bg + subtle shadow

### Colors
- Page background: #f5f5f5 (light warm gray)
- Card background: #ffffff
- Card shadow: 0 2px 15px rgba(0,0,0,0.1)
- Primary accent (Register button, checkbox, links): #f5a623 (orange)
- Facebook: #3b5998
- Twitter: #1da1f2
- Google: #dd4b39
- Heading: #333333
- Labels: #333333
- Input border: #e0e0e0
- Placeholder: #aaaaaa
- Terms text: #666666
- Button text: #ffffff (all buttons)

### Typography
- Font family: Poppins (Google Fonts) — geometric sans-serif
- Heading: 600 weight, uppercase, centered
- Labels: regular weight, small
- Terms text: small, regular weight

### Form Controls
- Inputs: white bg, light gray border (#e0e0e0), 4px border-radius
- Labels: above each input, dark gray
- Placeholders: light gray text
- Terms checkbox: orange (#f5a623) when checked, positioned inline with text

### Buttons
- Register: full-width, orange bg (#f5a623), white text, 4px radius, ~44px height
- Social buttons: full-width, respective brand colors, white text, 4px radius, ~44px height
- Each social button has an icon on the left + text
- All buttons have hover darkening (~10% darker)

### Responsive
- Desktop: side-by-side split (40/60)
- Tablet: may reduce image width
- Mobile (<768px): stacked vertically, image on top, full-width card below

## Key Implementation Details

1. Use flexbox for the split-screen layout (flex-row desktop, flex-col mobile)
2. Background image: use `https://picsum.photos/seed/signupcraft/800/1200` as placeholder
3. Form is non-functional (display only) — no actual submission logic needed
4. Terms checkbox default checked state with useState
5. Social buttons are non-functional (display only)
6. Social icons: use inline SVG for brand icons (Facebook, Twitter, Google) — lucide-react doesn't have brand icons
7. Footer: "More templates at Component Dock" linking to https://www.componentdock.com/
8. No ColorLib references anywhere in app code
9. Use Tailwind CSS 4 for all styling, cn() utility for conditional classes
10. Card vertical centering: use flex + items-center on the right column
