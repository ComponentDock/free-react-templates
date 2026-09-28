# SignupTide — Implementation Outline

**Source:** ColorLib Signup Form 10
**Preview:** https://preview.colorlib.com/theme/signup-form-10/ (404 — screenshot reference only)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-10.jpg
**New name:** `signuptide`
**App folder:** `apps/signuptide`

## Structure Order (Section-by-Section)

1. **Page layout** — Full viewport, light gray background (#f5f5f5), centered two-column flexbox
2. **Left column: Social login** — "Or register with" heading + 3 stacked social buttons
3. **Social buttons** — Facebook (#3b5998), Twitter (#1da1f2), Google (#dd4b39), full-width, rectangular, brand-colored
4. **Center divider** — "— or —" with horizontal lines, vertically centered
5. **Right column: Registration card** — White card with shadow, border-radius 4px
6. **Card heading** — "Register" h2, bold, dark gray
7. **Card subtitle** — Gray description text
8. **Form fields** — 4 bottom-border-only inputs: Name, Email, Password, Re-type Password
9. **Terms + Sign In row** — Checkbox "Terms and Conditions" (green) + "Sign In" link (right-aligned, green)
10. **Register button** — Full-width pill button, mint green (#5cb85c), white text
11. **Footer** — Component Dock link

## Design Fidelity Notes

### Layout
- Two-column flexbox, centered on page
- Left column: ~40% width (social buttons)
- Right column: ~40% width (form card)
- Divider: ~20% width (center)
- On mobile (<768px): stack vertically

### Social Buttons
- Full-width within left column
- Slightly rounded corners (4px radius)
- Brand colors: Facebook #3b5998, Twitter #1da1f2, Google #dd4b39
- White icons centered in buttons
- Use lucide-react or simple SVG icons for social logos

### Form Card
- White background, subtle shadow
- Minimal border-radius (4px)
- Inputs: bottom-border only, no box borders
- Placeholder text in gray (#999)
- Register button: pill-shaped (20px radius), mint green (#5cb85c)

### Colors (Brand Palette)
- Primary green: #5cb85c (register button, checkbox, links)
- Facebook blue: #3b5998
- Twitter blue: #1da1f2
- Google red: #dd4b39
- Background: #f5f5f5
- Card: #ffffff
- Text: #333333
- Muted text: #999999
- Border: #dddddd

### Typography
- Font: Roboto (Google Fonts)
- Heading: 700 weight, ~24px
- Subtitle: 400 weight, ~14px, gray
- Body: 400 weight, ~14px
- Button: 600 weight, ~16px

### Icons
- Facebook "f" icon
- Twitter bird icon
- Google "G" icon
- Use simple SVG or lucide-react equivalents
- Checkbox: green checkmark icon

### Footer
- Minimal, links to https://www.componentdock.com/
- "Made with Component Dock" or similar branding
