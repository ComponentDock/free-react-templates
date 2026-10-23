# SignupBloom — Prep Notes

**Source:** ColorLib Signup Form 08
**Slug:** signup-form-08
**Preview:** https://preview.colorlib.com/theme/bootstrap/signup-form-08/
**New Name:** signupbloom

## Structure Order (fidelity)

1. Full-page split layout container (white bg, 7rem vertical padding)
2. Left column (order-md-2 puts RIGHT on desktop): signup form
3. Right column: SVG illustration (file sync / cloud theme)

**Key difference from Form 07:** illustration is on the RIGHT side (cl-order-md-2).

## Section-by-Section Fidelity Notes

### Split Layout
- Two-column flexbox: form on LEFT 50%, illustration on RIGHT 50%
- `.cl-col-md-6.contents` for the form column (no order modifier = left)
- `.cl-col-md-6.cl-order-md-2` for the illustration column (reordered to right)
- Content area: `.cl-col-md-8` centered within the form column
- Responsive: <1200px → form full width, illustration hidden

### Illustration
- Original uses SVG: `images/undraw_file_sync_ot38.svg`
- Use placeholder: `https://picsum.photos/seed/signupbloom/800/1200`
- Full height of the content area
- Displayed on the RIGHT side on desktop (order-md-2)

### Form Fields (key difference from Form 07!)
- Each field has TRANSPARENT background (no #edf2f5 fill)
- Bottom border: `1px solid #ccc` (not #e6edf1)
- No border-radius on inputs (flush, full-width look)
- Labels use absolute positioning with translateY(-50%) for floating effect
- Fields: Name (not "Full Name"), Email, Password, Re-type Password

### Custom Checkbox
- Custom indicator: 20x20px, `#e6e6e6` unchecked, `#38d39f` (green) checked
- Border radius: 4px
- Text: Terms & Conditions + Privacy Policy links
- Checked by default in original

### Register Button
- Full width, `#38d39f` background, DARK text (`#212529`)
- Border radius: 0.25rem (4px)
- Hover: `#29bb8a` background, WHITE text (text color inverts on hover!)
- Focus: box-shadow ring with green tint

### Social Login
- Three full-width buttons stacked vertically (10px margin between)
- Facebook: `#3b5998` bg, hover `#344e86`
- Twitter: `#1da1f2` bg, hover `#0d95e8`
- Google: `#ea4335` bg, hover `#e82e1e`
- Each button is full-width with centered SVG icon
- Divider text: "or register using" (no em-dash wrapper like Form 07)

## Implementation Notes

- Copy simplest existing app as base
- Rename package to `@free-react-templates/signupbloom`
- Create `public/CNAME` with `signupbloom.free.componentdock.com`
- Set `"homepage": "https://signupbloom.free.componentdock.com"` in package.json
- Use picsum placeholder for illustration
- Use lucide-react for any icons (if needed beyond social SVGs)
- Footer must link `https://www.componentdock.com/`
- CRITICAL: form fields are transparent bg + bottom border (NOT filled gray like Form 07)
- CRITICAL: button text is DARK on green bg, turns WHITE on hover
- CRITICAL: illustration is on the RIGHT side (use flex order or CSS grid order)
