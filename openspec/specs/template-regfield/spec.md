# Template: RegField (Registration Form)

## Purpose

Recreation of ColorLib **Regform 29** (https://colorlib.com/wp/template/colorlib-regform-29/).
Preview: https://colorlib.com/etc/regform/colorlib-regform-29/
Source ZIP: https://preview.colorlib.com/downloads/free/colorlib-regform-29.zip (downloaded at prep time).
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-29.jpg

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
A centered ticket-booking form card on a teal background. The form occupies the
left side; two stacked images with left/right navigation arrows sit on the right.
Fonts: Lora (serif heading) + Raleway (sans-serif body/inputs).

## Design tokens

| Token | Value | Source |
|---|---|---|
| Font family — heading | Lora (Bold 700, Regular 400) | CSS `@font-face` |
| Font family — body | Raleway (Regular 400, Medium 500, SemiBold 600, Bold 700) | CSS `@font-face` |
| Page background | `#86c1cc` (teal/cyan) | `.page-content` |
| Card background | `#ffffff` | `.form-v3-content` |
| Card box-shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.form-v3-content` |
| Card width | `850px` | `.form-v3-content` |
| Heading color | `#333333` | `.form-detail h2` |
| Heading size | `30px` | `.form-detail h2` |
| Heading accent line | `#385cb9` (blue), 30px × 2px bar before heading | `.form-detail h2::before` |
| Body text color | `#666666` | `.form-detail .text` |
| Label color | `#666666`, weight 600, size 13px | `.form-detail label` |
| Input text color | `#333333` | `.form-detail input` |
| Input border | `1px solid #e5e5e5` | `.form-detail input` |
| Input padding | `12.5px 15px` | `.form-detail input` |
| Input font | Raleway 15px | `.form-detail input` |
| Input focus border | `#b3b3b3` | `.cl-form-row input:focus` |
| Special price color | `#385cb9` (blue), 28px, weight 700 | `.special span` |
| Special price subtext | `#666666`, 16px, weight 500 | `.special p` |
| Submit button background | `#333333` | `.register` |
| Submit button hover | `#000000` | `.register:hover` |
| Submit button color | `#ffffff` | `.register` |
| Submit button width | `140px` | `.register` |
| Checkbox link color | `#385cb9` (blue, underlined) | `.form-checkbox .text` |
| Checkbox border | `1px solid #e5e5e5` | `.checkmark` |
| Chevron arrow color | `#333333`, 33px | `.form-right i` |
| Form right images | two stacked images, bottom-aligned | `.form-right` |

## Structure

The template is a single full-viewport centered card with two halves:

1. **Left panel (form)** — white background, padding `30px 40px 30px 47px`:
   - Heading: "Booking Tickets" (Lora serif, 30px, with a small blue accent bar to the left)
   - Subtext: "Orci ac auctor augue mauris augue neque gravida in hendrerit gravida rutrum." (Raleway 15px, #666)
   - Field row 1 (two columns, 50% each):
     - Full Name (text input, required)
     - Your Email (text input, required)
   - Field row 2 (three columns: 26.5% / 40.5% / 36%):
     - Person (number input, default 1)
     - Date (date input)
     - Ticket Type (select: VIP, Luxury, Basic, Normal)
   - Price display: "$20.00" (blue, large) + "/ VIP Person" (gray, below)
   - Checkbox: "By booking, you agree to the Terms of Service" (link styled blue/underlined)
   - Submit button: "BUY NOW" (dark #333, 140px wide)

2. **Right panel (images)** — two stacked images with chevron left/right navigation arrows:
   - Image 1 (top, larger)
   - Image 2 (bottom, overlapping)
   - Left arrow (positioned bottom-left of image area)
   - Right arrow (positioned bottom-right of image area)

3. **Responsive**: at 991px the card stacks vertically (form on top, images hidden). At 575px, form fields stack vertically.

## Gherkin scenarios

### Scenario: Full-page layout renders correctly
- GIVEN the user opens the RegField page
- THEN a centered card is visible on a teal (#86c1cc) background
- AND the card has two halves: form panel on the left, image panel on the right

### Scenario: Heading and subtext display
- GIVEN the form panel is visible
- THEN the heading "Booking Tickets" is shown in serif font (Lora)
- AND a small blue accent bar appears to the left of the heading
- AND a descriptive paragraph is shown below the heading in gray text

### Scenario: Name and email fields render in two columns
- GIVEN the form panel is visible
- THEN Full Name and Your Email fields are displayed side by side
- AND both fields have labels in uppercase (FULL NAME:, YOUR EMAIL:)
- AND both fields are required

### Scenario: Booking detail fields render in three columns
- GIVEN the form panel is visible
- THEN Person, Date, and Ticket Type fields are displayed in a row
- AND Person is a number input with default value 1
- AND Date is a date input
- AND Ticket Type is a select dropdown with options: VIP, Luxury, Basic, Normal

### Scenario: Required field validation on submit
- GIVEN the user clicks BUY NOW without filling any fields
- THEN the Full Name field shows a validation error (required)
- AND the Your Email field shows a validation error (required)

### Scenario: Ticket type selection
- GIVEN the user opens the Ticket Type dropdown
- WHEN the user selects "Luxury"
- THEN the selected value changes to "Luxury"

### Scenario: Terms checkbox interaction
- GIVEN the form is visible
- WHEN the user clicks the Terms of Service checkbox
- THEN the checkbox becomes checked
- AND a blue checkmark appears inside the checkbox

### Scenario: Successful form submission
- GIVEN the user fills Full Name with "John Doe"
- AND fills Your Email with "john@example.com"
- AND sets Person to 2
- AND selects a Date
- AND selects Ticket Type "VIP"
- AND checks the Terms of Service checkbox
- WHEN the user clicks BUY NOW
- THEN the form is submitted successfully

### Scenario: Responsive layout at mobile breakpoint
- GIVEN the viewport width is below 575px
- WHEN the RegField page renders
- THEN all form fields stack vertically
- AND the image panel is hidden

### Scenario: Responsive layout at tablet breakpoint
- GIVEN the viewport width is between 576px and 991px
- WHEN the RegField page renders
- THEN the card stacks vertically with form on top
- AND the image panel is hidden

## Verification checklist

- [ ] Card renders centered on teal (#86c1cc) background at 850px width
- [ ] Lora font used for heading, Raleway for body/inputs
- [ ] Blue accent bar (30px × 2px, #385cb9) appears before heading
- [ ] Name and email fields render side by side (50% each)
- [ ] Person/Date/Ticket Type fields render in correct column widths
- [ ] Number input defaults to 1
- [ ] Date input is functional
- [ ] Select dropdown shows VIP/Luxury/Basic/Normal options
- [ ] Price display shows "$20.00" in blue + "/ VIP Person" in gray
- [ ] Checkbox toggles with blue checkmark
- [ ] Submit button is dark (#333) with "BUY NOW" label, 140px wide
- [ ] Submit button hover changes to black (#000)
- [ ] Right panel shows two stacked images with chevron arrows
- [ ] Responsive: card stacks vertically at 991px, image panel hidden
- [ ] Responsive: fields stack vertically at 575px
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Package name: @free-react-templates/regfield
- [ ] CNAME: regfield.free.componentdock.com
- [ ] Homepage: https://regfield.free.componentdock.com
