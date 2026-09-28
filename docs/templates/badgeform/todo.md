# Badgeform — Design Notes & Implementation Outline

## Source
- ColorLib: Reg Form V36 (`colorlib-regform-36`)
- Preview: https://preview.colorlib.com/theme/colorlib-regform-36/ (404)
- Downloaded: colorlib-regform-36.zip (index.html + css/style.css + js/snippet.js)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-36.jpg
- Design sourced from downloaded HTML/CSS template (full fidelity)

## Section Order (1:1 with original)

1. Full-viewport gradient background (#75e2e9 + linear-gradient 136deg #9599e2 → #8bc6ec)
2. White card (1100px, border-radius 10px, centered)
   a. Left panel (white, 50%):
      - Heading: "General Information" (#2271dd)
      - Title select (Businessman/Reporter/Secretary)
      - First Name | Last Name (two-column)
      - Position select (Director/Manager/Employee)
      - Company (full width)
      - Business Arena (73%) | Employees (50%) select (Trainee/Colleague/Associate)
   b. Right panel (purple #4835d4, 50%):
      - Heading: "Contact Details" (white)
      - Street + Nr (full width)
      - Additional Information (full width)
      - Zip Code | Place (two-column, Place select: Street/District/City)
      - Country select (Vietnam/Malaysia/India)
      - Code + | Phone Number (two-column)
      - Your Email (full width)
      - Terms checkbox ("I do accept the Terms and Conditions")
      - "Register Badge" button (white pill)

## Fidelity Notes

### Background
- Solid fallback: `#75e2e9` (cyan/teal)
- Gradient: `linear-gradient(136deg, rgb(149,153,226) 0%, rgb(139,198,236) 100%)`
  → Tailwind: `bg-gradient-to-br from-[#9599e2] to-[#8bc6ec]` with fallback

### Card
- White, 1100px wide, border-radius 10px
- Box-shadow: `0px 8px 20px 0px rgba(0,0,0,0.15)`
- Uses `display: flex` for side-by-side panels

### Left Panel
- Background: white (default)
- Heading: `color: #2271dd`, font-weight 500, 25px
- Inputs: transparent background, `border-bottom: 1px solid #ccc`, text color black
- Selects: transparent background, `border-bottom: 1px solid #ccc`, color #666
- Select arrow icon: SVG chevron-down positioned absolutely at right

### Right Panel
- Background: `#4835d4` (deep purple)
- Heading: white, font-weight 500, 25px
- Inputs: transparent background, `border-bottom: 1px solid rgba(255,255,255,0.3)`, text color white
- Selects: same transparent styling, color #f2f2f2
- Select options: background #4835d4 (to match panel)

### Button
- White background, pill-shaped (border-radius 25px)
- Box-shadow: `0px 6px 17px 0px rgba(0,0,0,0.15)`
- Text: #333, bold, 15px
- Hover: background #ccc
- Left-aligned in right panel (padding-left: 60px)

### Checkbox
- Custom checkbox: hidden input + styled checkmark span
- Border: 1px solid #e5e5e5
- Checkmark: white, 3px x 8px, rotated 45deg, shown when checked
- Terms text: #e5e5e5, 14px, link text white underlined

### Responsive
- At max-width 1199px: card gets margin 95px 20px
- At 768-991px: inner form-groups stack vertically (but panels stay side by side)
- At max-width 767px: panels stack vertically (left on top, right below)
  - Right panel loses top-right radius, gains bottom-left radius
  - Left panel gets bottom padding 50px
- At max-width 575px: all form-groups and rows go full width

## Implementation Tasks

- [ ] Create `apps/badgeform/` from simplest existing app, rename package
- [ ] Create `public/CNAME` with `badgeform.free.componentdock.com`
- [ ] Set up `src/App.tsx` composing the single page
- [ ] Create `src/components/BadgeRegistrationForm.tsx` — full page layout
- [ ] Implement gradient background
- [ ] Implement split-panel card (left white, right purple)
- [ ] Implement left panel: heading, selects, text inputs, two-column rows
- [ ] Implement right panel: heading, inputs, selects, checkbox, submit button
- [ ] Implement custom checkbox with checkmark
- [ ] Implement select dropdown styling with chevron icons (use lucide-react ChevronDown)
- [ ] Add responsive stacking for mobile
- [ ] Load Montserrat font via Google Fonts link in `index.html`
- [ ] Write tests for all form elements and responsive behavior
- [ ] Ensure 100% coverage
- [ ] Run verify-app.sh and gate
