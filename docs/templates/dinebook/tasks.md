# Dinebook — Tasks & Design Notes

Source: ColorLib Wizard 7
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html
New name: dinebook
Category: Wizard / Restaurant Reservation

## Tasks

- [ ] Scaffold app from simplest existing wizard/form app
- [ ] Set up Tailwind theme tokens (@theme) matching design tokens
- [ ] Implement WizardLayout component (full-viewport split)
- [ ] Implement Step 1: Book a Table (People dropdown, Date picker, Time dropdowns)
- [ ] Implement Step 2: Contact Details (Name, Phone, Email inputs)
- [ ] Implement Step 3: Confirmation (check icon, messages)
- [ ] Implement step navigation logic (Next/Previous, step state)
- [ ] Implement step indicator (N / 3)
- [ ] Add responsive breakpoint (stack vertically < 767px)
- [ ] Replace Material Design Iconic Font with lucide-react icons
- [ ] Add placeholder food photography (picsum.photos seeds)
- [ ] Add Satisfy cursive font via Google Fonts link in index.html
- [ ] Add Raleway font family via Google Fonts link in index.html
- [ ] Footer with Component Dock link
- [ ] Write tests (Vitest + RTL) for all components and interactions
- [ ] Verify 100% coverage
- [ ] Verify build and typecheck pass

## Design Notes

### Structure Order

1. Full-page wrapper (100vh, flex center)
2. Split layout inside: image holder (left ~59%) + form panel (right ~41%)
3. Form panel contains form-inner (bordered, padded container)
4. Form-inner contains: form header (heading + tagline) → form rows → navigation buttons
5. Step indicator positioned absolute bottom-right of form panel

### Section-by-Section Fidelity Notes

**Step 1 — Book a Table**

- Heading: "BOOK A TABLE" — uppercase, Raleway Bold, 25px, white
- Tagline: "~ Check out our place ~" — Satisfy cursive, 18px, gold #cdaa7c
- People: Custom select dropdown (not native select) with chevron-down icon
  - Options: 1-5
  - On hover: light blue #81acee background
- Date: Text input styled as read-only, uppercase, uses datepicker
  - Format: "dd M yyyy" (e.g. "14 MAR 2021")
- Time: Two native selects side by side
  - Left: AM hours (9 AM, 10 AM, 11 AM, 12 PM)
  - Right: PM hours (7 PM, 8 PM, 9 PM, 10 PM)
  - Border: 2px solid #666, height 31px

**Step 2 — Contact Details**

- Heading: "CONTACT DETAILS" — same styling as step 1
- Tagline: same
- Name: text input, underline style (border-bottom: 2px solid #666)
- Phone: text input, same style
- Email: text input, same style
- All have placeholder text in uppercase, color #666

**Step 3 — Confirmation**

- No form header in traditional sense
- Check icon inside a circle: bg #cdaa7c (gold), 38x38px, border-radius 50%
  - Use lucide-react Check icon
- "YOUR TABLE IS READY" — Raleway Bold, 25px, white, uppercase
- "~ Happy friends with a say ~" — Satisfy, 18px, gold
- Centered layout, no form fields

**Navigation Buttons**

- Positioned absolute, bottom ~79px, right ~52px
- Two buttons: Previous (narrower) and Next (wider on step 2: 118px)
- Style: outlined (border 1px solid #666), white text, uppercase, Raleway SemiBold
- Hover: bg #cdaa7c, border transparent
- Step 3 hides the "Next" button entirely
- Previous button fades out (opacity 0) on step 1

**Step Indicator**

- Positioned absolute, bottom-right
- Large number (40px, #666) + "/ 3" (15px, #666)
- Updates dynamically: 1/3, 2/3, 3/3

**Image Holder**

- Takes ~59% width, full form height
- Original uses different food photos per step
- Use picsum.photos with deterministic seeds (e.g. /seed/dinebook-1/800/562)
- Use 3 different seed images for 3 steps

### Icons Mapping (Original → lucide-react)

- zmdi-account-o → Users
- zmdi-calendar-check → Calendar
- zmdi-alarm → Clock
- zmdi-chevron-down → ChevronDown
- zmdi-caret-down → ChevronDown
- zmdi-phone → Phone
- zmdi-email → Mail
- zmdi-check → Check

### Color Palette Reference

- Form bg: #333 (tailwind: bg-neutral-800 is close, but use exact via @theme)
- Inner border: #524b42 (warm dark brown)
- Gold accent: #cdaa7c (custom @theme token)
- Light beige focus: #e9e0cf
- Label text: #ccc
- Border/input: #666
- White: #fff
