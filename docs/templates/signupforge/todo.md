# SignupForge — Prep Notes

**Source:** ColorLib Signup Form 07
**Slug:** signup-form-07
**Preview:** https://preview.colorlib.com/theme/bootstrap/signup-form-07/
**New Name:** signupforge

## Structure Order (fidelity)

1. Full-page split layout container (white bg, 7rem vertical padding)
2. Left column: SVG illustration (remote work theme)
3. Right column (centered):
   a. h3 "Sign Up" heading
   b. Subtext paragraph
   c. Form with 4 stacked fields (Full Name, Email, Password, Re-type Password)
   d. Custom checkbox for Terms & Conditions
   e. Full-width "Register" button
   f. Divider text "— or register with —"
   g. Social login row (Facebook, Twitter, Google)

## Section-by-Section Fidelity Notes

### Split Layout
- Two-column flexbox: left 50% illustration, right 50% form
- `.cl-col-md-6` for each column
- Content area: `.cl-col-md-8` centered within the right column
- Responsive: <1200px → form full width, illustration hidden

### Illustration
- Original uses SVG: `images/undraw_remotely_2j6y.svg`
- Use placeholder: `https://picsum.photos/seed/signupforge/800/1200`
- Full height of the content area

### Form Fields
- Each field has `#edf2f5` background
- Bottom border `1px solid #e6edf1` separating fields
- No border-radius on inputs (flush, full-width look)
- Labels use absolute positioning with translateY(-50%) in original
- In React, use standard label-above-input pattern for accessibility
- Fields: Full Name, Email, Password, Re-type Password

### Custom Checkbox
- Custom indicator: 20x20px, `#e6e6e6` unchecked, `#6c63ff` checked
- Border radius: 4px
- Text: Terms & Conditions + Privacy Policy links
- Checked by default in original

### Register Button
- Full width, `#6c63ff` background, white text
- Border radius: 0.25rem (4px)
- Hover: `#483dff`
- Focus: box-shadow ring

### Social Login
- Three full-width buttons stacked vertically (10px margin between)
- Facebook: `#3b5998` bg, hover `#344e86`
- Twitter: `#1da1f2` bg, hover `#0d95e8`
- Google: `#ea4335` bg, hover `#e82e1e`
- Each button is full-width with centered SVG icon
- White text/icon color

## Implementation Notes

- Copy simplest existing app as base (e.g., a simple signup template)
- Rename package to `@free-react-templates/signupforge`
- Create `public/CNAME` with `signupforge.free.componentdock.com`
- Set `"homepage": "https://signupforge.free.componentdock.com"` in package.json
- Use picsum placeholder for illustration
- Use lucide-react for any icons (if needed beyond social SVGs)
- Footer must link `https://www.componentdock.com/`
