# FormTide — Design Notes & Implementation Outline

Source: ColorLib "Colorlib Reg Form V36"
Preview: https://preview.colorlib.com/theme/colorlib-regform-36/ (404 at prep time)
Downloaded source: colorlib-regform-36.zip (HTML + CSS + Montserrat fonts + snippet.js)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-36.jpg
Spec: openspec/specs/template-formtide/spec.md

## Structure order (top → bottom, single-page)

1. Full-page gradient background (teal → purple-blue, 136deg)
2. Floating white card container (centered, max-width 1100px, 10px radius, drop shadow)
   2a. Left column — "General Information" (transparent/white bg)
       - Title dropdown (Businessman / Reporter / Secretary)
       - First Name + Last Name (side by side)
       - Position dropdown (Director / Manager / Employee)
       - Company (full width)
       - Business Arena (73%) + Employees dropdown (50%, side by side)
   2b. Right column — "Contact Details" (purple #4835D4 bg)
       - Street + Nr (full width)
       - Additional Information (full width)
       - Zip Code (50%) + Place dropdown (50%, side by side)
       - Country dropdown (Vietnam / Malaysia / India)
       - Code + (50%) + Phone Number (50%, side by side)
       - Your Email (full width)
       - Terms checkbox ("I do accept the Terms and Conditions of your site.")
       - "Register Badge" submit button (pill-shaped, white, centered)
3. Footer — Component Dock link

## Section-by-section fidelity notes

### Full-page gradient background
- Original: `background: #75e2e9` with gradient `linear-gradient(136deg, rgb(149,153,226), rgb(139,198,236))`
- Recreation: use Tailwind `bg-gradient-to-br` from a purple-blue to a light cyan, or apply via `@theme` custom tokens
- CSS approach: `min-h-screen bg-gradient-to-br from-[#9599e2] to-[#8bc6ec]` or similar

### Floating card
- White (#FFFFFF), border-radius 10px, width 1100px
- Box-shadow: `0px 8px 20px 0px rgba(0,0,0,0.15)` — use `shadow-[0_8px_20px_rgba(0,0,0,0.15)]`
- Display: `flex` to create two equal-width columns
- Centered: `mx-auto` with margin-top/bottom ~95px

### Left column — General Information
- No background override (inherits card white)
- Heading: "General Information", color #2271DD, font-weight 500, font-size 25px, padding 33px 50px 0 60px
- All inputs: no border except bottom (`border-b border-[#CCC]`), transparent background, font-size 16px, padding 11.5px 15px 15px 15px
- Input text color: #000000, placeholder: #666666
- Focus state: border-bottom darkens to #999999
- Custom select: `appearance-none` on the select, custom chevron SVG positioned absolutely to the right
- Select text color: #666666, chevron color: #666666
- Paired inputs: use `flex` with `w-1/2` (First/Last Name), `w-[73%]` + `w-1/2` (Business Arena/Employees)
- Form row margin-bottom: 24px, padding-left: 60px, padding-right: 50px

### Right column — Contact Details
- Background: `#4835D4` (vibrant purple/indigo)
- Heading: "Contact Details", color white, same font specs as left
- All inputs: same underline-only pattern but with `border-b-white/30` (rgba(255,255,255,0.3))
- Input text color: #FFFFFF, placeholder: #F2F2F2
- Focus state: border-bottom becomes #CCCCCC
- Select text color: #F2F2F2, chevron: #F2F2F2
- Select option background: #4835D4
- Paired inputs: Zip Code + Place (w-1/2 each), Code + Phone Number (w-1/2 each)
- Same row spacing as left column

### Terms checkbox
- Checkbox: custom styled (hidden native, custom checkmark box)
- Label text: "I do accept the Terms and Conditions of your site."
- Text color: #E5E5E5, font-size 14px
- "Terms and Conditions" link: white, underlined
- Margin-top: 37px from last field

### Register Badge button
- Pill-shaped: border-radius 25px
- White background (#FFFFFF), text color #333333, font-weight 700, font-size 15px
- Width: 180px, padding: 12.5px
- Drop shadow: `0px 6px 17px 0px rgba(0,0,0,0.15)`
- No border
- Hover: background changes to #CCCCCC
- Margin: 6px 0 50px 0 (submit row)
- Centered text-align

### Responsive behavior
- 1199px and below: card gets 20px horizontal margin
- 768–991px: form groups (paired inputs) stack vertically within each column
- Below 767px: entire card stacks (left on top, right on bottom), right section bottom-left radius gets 10px
- Below 575px: form groups stack, padding reduces to 30px, heading padding reduces

### Footer
- Simple Component Dock link
- Must link to https://www.componentdock.com/
- Branded as "Component Dock"

## Implementation tasks

- [ ] Create apps/formtide workspace (copy simplest existing app, rename package)
- [ ] Set up index.html with Montserrat Google Fonts link (weights 400, 500, 700)
- [ ] Build gradient background component (full-page gradient)
- [ ] Build card container (flex, centered, white bg, shadow, rounded)
- [ ] Build left column — General Information section
  - [ ] Heading component (blue, medium weight, 25px)
  - [ ] Select/dropdown component with custom chevron (appearance-none + absolute positioned icon)
  - [ ] Input component (underline-only, transparent bg, no border except bottom)
  - [ ] Paired row layout (flex, specific widths for each pair)
- [ ] Build right column — Contact Details section
  - [ ] Heading component (white)
  - [ ] Same select/input components with purple theme variants
  - [ ] Terms checkbox (custom styled, hidden native + custom checkmark)
- [ ] Build submit button (pill-shaped, white, shadow, hover state)
- [ ] Footer with Component Dock link
- [ ] Responsive breakpoints (767px, 575px, 991px, 1199px)
- [ ] Tests (Vitest + Testing Library, 100% coverage)
- [ ] vite.config.ts with injectUiSource()
- [ ] public/CNAME with formtide.free.componentdock.com
