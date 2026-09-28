# RegVista — Design Notes & Implementation Outline

Source: ColorLib "Colorlib Reg Form V4"
Preview: https://preview.colorlib.com/theme/colorlib-regform-4/ (source archive downloaded)
Downloaded source: colorlib-regform-4.zip (HTML + CSS + Poppins fonts + Material Design Iconic Font subset + snippet.js)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-4.jpg
Spec: openspec/specs/template-regvista/spec.md

## Structure order (top → bottom, single-page)

1. Full-page gradient background (pink #FC2C77 → purple #6C4079, bottom-left to top-right)
2. Centered white card container (max-width 680px, 10px radius, drop shadow)
   2a. Title — "Registration Form" (dark gray, 24px, weight 400)
   2b. Row 1 — First Name + Last Name (side by side, labeled inputs)
   2c. Row 2 — Birthday (date input with calendar icon) + Gender (radio: Male/Female)
   2d. Row 3 — Email + Phone Number (side by side, labeled inputs)
   2e. Subject dropdown (full width, Choose option / Subject 1-3)
   2f. Submit button — "Submit" (blue, 5px radius, left-aligned)
3. Footer — Component Dock link

## Section-by-section fidelity notes

### Full-page gradient background
- Original: `linear-gradient(to top right, #FC2C77 0%, #6C4079 100%)`
- Recreation: Tailwind `bg-gradient-to-tr from-[#FC2C77] to-[#6C4079]` or use @theme tokens
- Page wrapper: `min-h-screen pt-[130px] pb-[100px]` (padding-top 130px, bottom 100px)

### Floating card
- White (#FFFFFF), border-radius 10px, max-width 680px
- Box-shadow: `0px 8px 20px 0px rgba(0,0,0,0.15)` — use `shadow-[0_8px_20px_rgba(0,0,0,0.15)]`
- Centered: `mx-auto`
- Body padding: `57px 65px`, bottom `65px`
- Mobile: padding reduces to `50px 40px` at 767px

### Title
- Text: "Registration Form"
- Color: #525252, font-size 24px, font-weight 400
- Margin-bottom: 40px

### Two-column row layout
- Each row uses flex with `justify-content: space-between`
- Each column: `calc((100% - 30px) / 2)` width (two columns with 30px gap)
- At 767px breakpoint: columns become 100% width (stack vertically)

### Row 1 — First Name + Last Name
- Both are labeled text inputs (label text: "first name" / "last name")
- Label style: #555, 16px, capitalize, margin-bottom 5px
- Input style: #FAFAFA background, inset shadow, 5px radius, 50px line-height, #666 text, padding 0 20px

### Row 2 — Birthday + Gender
- Birthday: date input with calendar icon (Material Design Iconic Font `\f2f9` or equivalent)
  - Same input styling as text inputs
  - Calendar icon: positioned absolute right 18px, color #999, font-size 18px
  - Use native `<input type="date">` with custom styling
- Gender: radio button group (Male / Female)
  - Label text: "Gender"
  - Radio labels: #666, 16px, inline-block, padding-left 30px
  - Custom circular checkmark: 20px circle, #E5E5E5 background, inset shadow
  - Checked state: inner green (#57B846) 12px circle dot
  - Male has `margin-right: 45px` from Female
  - Male checked by default

### Row 3 — Email + Phone Number
- Both labeled text inputs, same styling as Row 1
- Email uses `type="email"`

### Subject dropdown
- Full-width labeled dropdown
- Custom select shell: same #FAFAFA background with inset shadow, 5px radius, 50px height
- Custom arrow: gray (#999) chevron-down, positioned right 20px
- Options: "Choose option" (disabled, selected by default), Subject 1, Subject 2, Subject 3
- Select text color: #555, font-size 16px

### Submit button
- Text: "Submit"
- Background: #4272D7 (blue), hover: #3868CD
- Text color: white
- Border-radius: 5px
- Padding: 0 50px, line-height 50px
- Font-size: 18px, font-weight: normal
- Transition: all 0.4s ease
- Left-aligned within the form (not centered)
- Margin-top: 15px from subject dropdown

### Footer
- Simple Component Dock link
- Must link to https://www.componentdock.com/
- Branded as "Component Dock"

## Implementation tasks

- [ ] Create apps/regvista workspace (copy simplest existing app, rename package)
- [ ] Set up index.html with Poppins Google Fonts link (weights 400, 700)
- [ ] Build gradient background component (full-page pink-to-purple gradient)
- [ ] Build card container (centered, white bg, shadow, rounded, max-width 680px)
- [ ] Build title component ("Registration Form", dark gray, 24px)
- [ ] Build labeled input component (label + styled input with #FAFAFA bg, inset shadow, 5px radius)
- [ ] Build two-column row layout (flex, calc widths, responsive stacking)
- [ ] Build date input with calendar icon (absolute positioned icon, native date picker)
- [ ] Build radio button component (circular custom checkmark, green inner dot, gray outer)
- [ ] Build custom select dropdown (styled shell, custom arrow, select2-like appearance)
- [ ] Build submit button (blue, 5px radius, hover state)
- [ ] Footer with Component Dock link
- [ ] Responsive breakpoints (767px)
- [ ] Tests (Vitest + Testing Library, 100% coverage)
- [ ] vite.config.ts with injectUiSource()
- [ ] public/CNAME with regvista.free.componentdock.com
