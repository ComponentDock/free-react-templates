# Regcove — Implementation Todo & Design Notes

**Source:** ColorLib Regform 6
**Preview:** https://colorlib.com/wp/template/colorlib-regform-6/
**Live demo:** https://colorlib.com/etc/regform/colorlib-regform-6/
**Spec:** `openspec/specs/template-regcove/spec.md`

## Structure Order (section-by-section)

1. **App wrapper** — full-viewport dark background (#1a1a1a), flex column, centered
2. **Heading** — "Apply for job" white bold 36px, left-aligned, above the card
3. **CSS triangle** — small upward-pointing triangle (10px) at top-left of card body
4. **Card body** — white background, bordered, contains the form rows
5. **Form row: Full Name** — label left (188px), text input right
6. **Form row: Email Address** — label left, email input right, placeholder
7. **Form row: Message** — label left, textarea right, placeholder, min-height 120px
8. **Form row: Upload CV** — label left, styled file button right, helper text below
9. **Card footer** — white background, blue submit button
10. **Component Dock footer link** — required per conventions

## Section-by-Section Fidelity Notes

### Background
- Full viewport dark: `#1a1a1a`, padding 100px top / 50px bottom
- Use `min-h-screen` + Tailwind custom theme for bg color

### Heading
- White, bold, 36px, left-aligned
- Positioned above the card, outside it (card is transparent for heading area)

### Triangle (CSS art)
- Small CSS triangle (10px) using `border` technique, positioned absolute at `bottom: 100%; left: 75px`
- Points upward from card body toward heading
- Pure CSS, no image needed

### Card
- `max-width: 900px`, centered
- Card body: white bg, `1px solid #e5e5e5` border (no top), rounded top corners 3px
- Card footer: white bg, `1px solid #e5e5e5` border (no top), rounded bottom corners 3px, padding 50px 55px

### Form Rows
- Flex layout: label (188px) + input (calc(100% - 188px))
- Bottom border separator: `1px solid #e5e5e5`
- Padding: `24px 55px`
- Labels: 15px, bold (#333)
- Inputs: transparent bg, `1px solid #cccccc` border, 3px radius, 15px font, 38px line-height, `0 20px` padding
- Focus: `box-shadow: 0 1px 5px rgba(0,0,0,0.15)` + `translateY(-3px)`

### Textarea
- Same border/radius as inputs
- `min-height: 120px`, `padding: 10px 20px`, `line-height: 1.2`
- No resize

### File Upload
- Hidden `<input type="file">`
- Styled `<label>` as button: gray bg (#666), 3px radius, white text, 15px
- Hover: darker (#1b1b1b)
- Helper text below: 13px, #999

### Submit Button
- Blue bg (#2c6ed5), hover #185ac1
- 5px radius, white text, bold 15px
- Line-height 50px, padding 0 30px
- Text-transform: capitalize
- Transition: 0.4s ease all

### Responsive
- At < 768px: rows stack vertically (display: block), padding reduces to 30px
- Label text: 100% width, margin-bottom 12px

## Placeholder Images
- This template has no images (form-only page)
- No picsum.photos needed

## Implementation Steps
1. Create `apps/regcove/` (copy simplest existing form app)
2. Rename package to `@free-react-templates/regcove`
3. Create `src/App.tsx` composing the form
4. Create `src/components/` for each section:
   - `ApplyForm.tsx` — the full form component
5. Set up `src/index.css` with Tailwind + theme tokens
6. Write tests first (TDD), then implement
7. Verify with `scripts/verify-app.sh regcove`
8. Update `public/CNAME` and `package.json` homepage
