# BookFlow — Implementation Tasks

**Source:** ColorLib Wizard 26 (`colorlib-wizard-26`)
**Preview URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-26/index.html
**Design tokens captured from:** live CSS at `/css/style.css`
**Page background:** #383a4f | Card: #525575 | Accent: #55e8d5 | Button: #43ccba | Font: Open Sans

## Structure (section order)

1. **Page wrapper** — dark background (#383a4f), flexbox centered
2. **Wizard heading** — "Form Booking Wizard", white, Open Sans 700, 30px, top padding
3. **Wizard card** — 910px, #525575 bg, 10px radius, box-shadow, contains form
4. **Step indicator bar** — horizontal flex, 3 step items, each with colored icon circle + text
5. **Step 1: Personal Info** — form heading "Personal Info" + "1/3" counter, 2-column rows for First/Last Name, Phone/Email, Date of Birth (3 small selects), full-width Address
6. **Step 2: Booking** — form heading "Booking Infomation" + "2/3", room image, Choose a Room dropdown, Organization Day input, Time Open dropdown
7. **Step 3: Confirm** — form heading "Comfirm Details" + "3/3", summary table (Full Name, Room, Day, Time, Price)
8. **Action buttons** — Back (hidden on step 1) + Next/Submit, centered, teal bg (#43ccba)

## Section-by-section fidelity notes

### Step indicator

- 3 equal-width items in horizontal flex
- Inactive: #ccc bg icon circle with white number, grey text
- Active/done: #55e8d5 bg icon circle, white number, text color #333
- Step icon has box-shadow `0px 4px 11px 0px rgba(0,0,0,0.14)`

### Form inputs

- Transparent background, white text, bottom border `rgba(255,255,255,0.3)`
- Floating labels: white, positioned top-left, float up on focus/valid with scale(0.9) + color #55e8d5
- Date selects: small width, white bg, border-radius 5px, grey text

### Booking section

- Room image between heading and form rows
- Custom select button (chevron icon) overlay on dropdowns

### Confirmation table

- Full width, left-aligned, rows as block display
- `<th>` muted white, `<td>` mint-teal bold
- Hardcoded price: "40.00$"

### Buttons

- Height 45px, width 150px, bg #43ccba, radius 5px, white text, font-weight 600
- Hover: bg #32998b
- Centered via flexbox

### Responsive

- @991px: card 90% width, step icon+text stack vertically
- @575px: form rows full-width, date selects stacked, step counter hidden, smaller padding
