# Reserva — Implementation Task Outline

> ColorLib Wizard 19 → Reserva (apps/reserva)
> Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html
> Source CSS: https://colorlib.com/etc/bwiz/colorlib-wizard-19/css/style.css

## Structure Order

1. Navbar / Top bar (skip — not part of the wizard template itself)
2. Gradient background + centered white card container
3. Step indicator bar (Account | Room type | Extra details)
4. Step 1: Account form (2-column grid)
5. Step 2: Room type radio buttons
6. Step 3: Extra details textarea
7. Navigation buttons (Previous / Next / Finish)
8. Footer (Component Dock link)

## Section-by-Section Fidelity Notes

### Background & Container

- `body` background: linear-gradient `#d9afd9 → #5a2170 → #a1c4fd → #c2e9fb`
  (This is a multi-stop gradient at 0deg — pink/purple to blue)
- Container: white, 840px wide, centered, `box-shadow: 0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`
- Container has NO border-radius in the original CSS
- Padding inside: `signup-form` has `padding: 0 0 54px 0`

### Step Indicator

- Bottom border: `1px solid #ebebeb`
- Step items are flexbox, `justify-content: space-between`, each 330px wide with 75px margins
- Step label `h3`: 18px, bold, `#999999`, `cursor: pointer`
- Active step: `h3` color changes to `#6dbdfe`, underline (`:after`) becomes `#6dbdfe`, 3px height
- Hover step: same as active
- The step indicator is inside a `steps` div at the top of the form

### Step 1 — Account Form

- Layout: 2-column grid via `.form-row` (flexbox, `margin: 0 -15px`) with `.form-group` and `.form-select` each `width: 50%; padding: 0 15px; margin-bottom: 15px`
- Fields: Email (input type=email), Country (select), Password (input type=password), Daily Budget (select)
- Newsletter checkbox: positioned with `padding-top: 105px`, width 50%
- Custom checkbox: 18px × 18px, border `#ebebeb`, icon from Material Design Iconic Font `\f26b` when checked (color `#222`)
- Label `.label-agree-term`: 400 weight, 13px
- Country dropdown options: Viet Nam, United States America
- Budget dropdown options: $40, $60

### Step 2 — Room Type

- Label `.label-radio`: uppercase, centered, bold, `padding-bottom: 70px`
- Question text `.radio-label`: 18px
- Radio group: flex column, `padding-bottom: 10px; padding-top: 12px`
- Custom radio: 18px diameter circle, border `#ebebeb`, inner dot 12px, `border-radius: 50%`
- Checked state: border `#6dbdfe`, inner dot `#6dbdfe`
- Labels: `#666`, weight 500, `padding-left: 40px`, cursor pointer
- Business room is `checked` by default in the HTML

### Step 3 — Extra Details

- Label `.radio-label`: 18px
- Textarea: height 150px, margin-top 22px
- Placeholder: "Eg : The room must have air conditional . . ."
- Label: "Room description"

### Navigation Buttons

- Position: absolute, bottom 31px, full width
- Previous (left): `#ebebeb` bg, `#999999` text, float left, padding-left 80px
  - Hover: `#d2d2d2`
- Next/Finish (right): `#6dbdfe` bg, `#fff` text, float right, padding-right 70px
  - Hover: `#3aa6fe`
- Both: 140px × 50px, uppercase text, flex centered
- On first step: Previous is hidden (`.disabled { display: none }`)
- On last step: Next becomes Finish

### Responsive Breakpoints

- 992px: container `width: calc(100% - 40px)`, step margins reduce to 55px
- 768px: steps stack vertically, form-row stacks, content padding 30px, button bottom 20px
- 575px: actions become relative position with `padding-top: 40px`
- 480px: buttons shrink to 100px width

### Footer

- Simple footer with Component Dock link (per conventions)
- No original footer in the ColorLib template — add as required by project rules

## Key Implementation Notes

- Use React state for step navigation (not jQuery Steps)
- Use `<select>` for Country and Budget dropdowns (original uses custom select, but native select is acceptable)
- Custom radio/checkbox styling via Tailwind + CSS or component-level styles
- Font: Poppins from Google Fonts (300–900 weights)
- Icons: Material Design Iconic Font for checkbox checkmark, or substitute lucide-react
- The gradient background is distinctive — must match original color stops precisely
- Step indicator underline animation (0 → 3px on hover/active) is a nice touch to preserve
