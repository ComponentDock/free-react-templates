# RegLift — Implementation Outline

Source: Colorlib Reg Form V5
Demo: https://colorlib.com/etc/regform/colorlib-regform-5/
CSS: 686 lines, hand-written (no framework)

## Section order (top to bottom)

1. **Full-viewport gradient background** — linear-gradient(to top right, #08aeea, #b721ff)
2. **White card** — centered, 790px max-width, 10px radius, box-shadow
3. **Card heading** — dark bar (#1a1a1a), "EVENT REGISTRATION FORM", white uppercase bold
4. **Form body** — padding 52px 85px (desktop), 40px 30px (mobile)
5. **Name row** — label "Name" + two equal-width inputs (first name, last name)
6. **Company row** — label "Company" + single input
7. **Email row** — label "Email" + single email input
8. **Phone row** — label "Phone" + Area Code (25%) + Phone Number (75%)
9. **Subject row** — label "Subject" + custom select dropdown
10. **Radio row** — "Are you an existing customer?" Yes (checked) / No
11. **Register button** — red (#ff4b5a), centered, uppercase, bold
12. **Footer** — Component Dock link

## Design fidelity notes

- **Inputs**: all share #e5e5e5 background, 5px radius, 50px line-height, 22px horizontal padding
- **Labels**: #555, 15px, bold, fixed 125px width on desktop; stack on mobile
- **Sub-labels** (first name, last name, area code, phone number): #999, 14px, positioned below input
- **Select dropdown**: same styling as inputs, custom arrow via Material Design Iconic Font → use lucide-react ChevronDown
- **Radio buttons**: custom styled with #e5e5e5 checked background, no default browser chrome
- **Button**: #ff4b5a → #eb3746 on hover, 0.4s transition
- **Font**: Open Sans via Google Fonts (400, 700)
- **Card heading**: border-radius matches card top corners
- **Mobile**: at 767px breakpoint, labels stack above inputs, phone columns shift to 35%/65%

## Component breakdown

| Component | File | Notes |
|---|---|---|
| App | App.tsx | Composes GradientBg > Card > Heading + Form |
| GradientBg | GradientBg.tsx | Full-viewport wrapper with gradient background |
| Card | Card.tsx | White card container with shadow and radius |
| CardHeading | CardHeading.tsx | Dark header bar with title |
| FormRow | FormRow.tsx | Label + value flex row (reusable) |
| NameRow | NameRow.tsx | Two-column name inputs with sub-labels |
| PhoneRow | PhoneRow.tsx | Area Code + Phone Number with sub-labels |
| SubjectSelect | SubjectSelect.tsx | Custom styled select dropdown |
| CustomerRadio | CustomerRadio.tsx | Yes/No radio group |
| RegisterButton | RegisterButton.tsx | Red submit button |

## Implementation tasks

- [ ] Create `apps/reglift/` workspace (copy simplest existing app, rename package)
- [ ] Add Open Sans via Google Fonts `<link>` in index.html
- [ ] Implement GradientBg with CSS gradient background
- [ ] Implement Card + CardHeading
- [ ] Implement FormRow (reusable label+value pattern)
- [ ] Implement NameRow (two-column)
- [ ] Implement Company, Email rows (single input)
- [ ] Implement PhoneRow (area code + phone number)
- [ ] Implement SubjectSelect (custom dropdown)
- [ ] Implement CustomerRadio (custom radio buttons)
- [ ] Implement RegisterButton (red, hover transition)
- [ ] Implement responsive breakpoints (767px)
- [ ] Add footer with Component Dock link
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh reglift
