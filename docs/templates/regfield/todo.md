# RegField — Implementation TODO

Source: ColorLib Regform 29
Preview: https://colorlib.com/etc/regform/colorlib-regform-29/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-29.jpg

## Structure order

1. Full-page wrapper (teal #86c1cc background, flex center)
2. Card container (white, 850px, box-shadow, flex row)
   - Left: form panel (padding 30px 40px 30px 47px)
     - Heading "Booking Tickets" (Lora 30px, blue accent bar)
     - Subtext paragraph
     - Row 1: Full Name + Your Email (50/50)
     - Row 2: Person (26.5%) + Date (40.5%) + Ticket Type (36%)
     - Price display ($20.00 / VIP Person)
     - Terms checkbox
     - BUY NOW button (dark #333, 140px)
   - Right: image panel (two images stacked, chevron arrows)

## Fidelity notes

- **Background**: solid teal #86c1cc (not gradient)
- **Card shadow**: 0px 8px 20px rgba(0,0,0,0.15)
- **Heading accent**: 30px × 2px blue (#385cb9) bar positioned absolute left of h2
- **Fonts**: Google Fonts Lora (heading) + Raleway (body/inputs)
- **Input styling**: border #e5e5e5, padding 12.5px 15px, no border-radius (square)
- **Submit button**: dark #333, no border-radius (square), 140px wide, hover → #000
- **Price**: "$20.00" in blue #385cb9, 28px bold; "/ VIP Person" in #666, 16px
- **Checkbox**: custom checkmark with blue (#385cb9) check border, appears on :checked
- **Select dropdown**: custom chevron icon positioned absolute right
- **Right panel**: two images, second overlaps bottom of first; chevron left/right icons at bottom
- **Responsive 991px**: card stacks vertically, form fills width, right panel hidden
- **Responsive 575px**: form fields stack vertically, all columns become 100%

## Component plan

- `src/App.tsx` — page wrapper with teal background + flex center
- `src/components/BookingCard.tsx` — card container (flex row)
- `src/components/BookingForm.tsx` — form panel with all fields
- `src/components/PriceDisplay.tsx` — "$20.00 / VIP Person" block
- `src/components/TermsCheckbox.tsx` — custom checkbox with label
- `src/components/ImagePanel.tsx` — right side images + arrows

## Test targets

- Card renders centered on teal background
- Heading and subtext render
- Name/email fields render side by side
- Person/date/ticket type render in correct proportions
- Number input defaults to 1
- Select shows all 4 options
- Price display shows correct values
- Checkbox toggles
- Submit validates required fields
- Responsive: card stacks at 991px, fields stack at 575px
- Footer links to Component Dock
