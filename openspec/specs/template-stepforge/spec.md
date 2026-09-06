# Template: Stepforge (Bootstrap Wizard)

## Purpose

Recreation of the ColorLib "Colorlib Wizard 7" template — a 3-step restaurant
table booking wizard with split-image layout, dark form panel, warm gold accent,
and script-font decorative text.

- **Source:** [ColorLib Wizard 7](https://colorlib.com/wp/template/colorlib-wizard-7/)
- **Preview:** https://preview.colorlib.com/theme/colorlib-wizard-7/ (unreachable — fell back to direct source at `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html`)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Bootstrap Wizards (Multi-step Form)

## Design Tokens

Extracted from the source stylesheet (`css/style.css`) and HTML structure:

| Token                        | Value                                    | Notes                                        |
| ---------------------------- | ---------------------------------------- | -------------------------------------------- |
| Body font                    | `Raleway`, sans-serif, 400 weight        | Main body text, 13px base                    |
| Heading font                 | `Raleway`, sans-serif, 700 weight        | Bold, uppercase headings                     |
| Input font                   | `Raleway`, sans-serif, 600 weight        | SemiBold for form inputs                     |
| Decorative/script font       | `Satisfy`, cursive                       | Script-style taglines and success text       |
| Brand/accent color           | `#cdaa7c`                                | Warm gold/tan — used for script text, check circle, button hover |
| Dark background              | `#333`                                   | Form panel background                        |
| Inner border color           | `#524b42`                                | Warm brown border inside form panel           |
| Text color (on dark)         | `#fff`                                   | White text on dark backgrounds               |
| Label color                  | `#ccc`                                   | Light gray form labels                       |
| Input border                 | `2px solid #666`                         | Gray underline on text inputs                |
| Focus border                 | `#e9e0cf`                                | Light tan on focus                           |
| Select border                | `2px solid #666`                         | Gray border on select boxes                  |
| Button style                 | Transparent, `1px solid #666` border     | Uppercase, Raleway SemiBold                  |
| Button hover                 | `background: #cdaa7c`, border transparent| Gold fill on hover                           |
| Steps indicator color        | `#666`                                   | Large "1/3" step counter                     |
| Dropdown hover               | `#81acee`                                | Light blue highlight                         |
| Success circle               | `38px`, `#cdaa7c` bg, white checkmark    | Completion indicator                         |
| Form panel height            | `562px`                                  | Fixed height                                 |
| Form panel shadow            | `0px 7px 18px 0px rgba(0,0,0,0.2)`       | Subtle drop shadow                           |
| Wizard container width       | `878px`                                  | Max width of wizard                          |
| Image column width           | `58.88%`                                 | Left image portion                           |
| Form column width            | `41.12%`                                 | Right form panel                             |
| Form inner padding           | `68px 37px`                              | Inner form padding                           |
| Responsive breakpoint 1      | `991px`                                  | Adjusted padding and button widths           |
| Responsive breakpoint 2      | `767px`                                  | Stacks to single column (image top, form bottom) |

## Visual Design

From the source HTML at `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html`:

A full-viewport centered wizard with a split layout: a large food/restaurant
image on the left (~59%) and a dark (#333) form panel on the right (~41%).
The form panel has a warm brown (#524b42) inner border and contains:

- Centered form header with bold uppercase title and script-font tagline in gold
- Form fields with icon labels, underline-style borders, and no background
- Custom dropdown for party size, datepicker for date, time range selects
- Navigation buttons (Previous/Next) positioned at bottom-right of the form
- Step indicator ("1/3") in the bottom-right corner
- Final step shows a gold circle with checkmark and "Your table is ready" message

The overall aesthetic is dark and elegant with warm gold accents — a fine-dining
reservation vibe. Each step swaps the left image to match the context.

## Gherkin Requirements

### Background

Given the page loads with a full-viewport centered layout
When the viewport is displayed
Then the wizard container is centered and displays Step 1
And the step indicator shows "1 / 3"
And the left column displays a restaurant/food image
And the right column displays a dark form panel

### Scenario: Step 1 — Book a table

Given the user is on Step 1
When the wizard loads
Then the form header shows "Book a table" in bold uppercase
And a script-font tagline "~ Check out our place ~" is displayed in gold
And a "People" dropdown is shown with options 1–5
And a "Date" datepicker input is shown
And a "Time" row with two select boxes (from-time and to-time) is shown
And a "Next" button is visible at the bottom-right

### Scenario: Custom dropdown selection

Given the user is on Step 1
When the user clicks the "People" dropdown
Then a dropdown list with options 1 through 5 appears
When the user selects a number
Then the dropdown closes and displays the selected number

### Scenario: Navigation to Step 2

Given the user is on Step 1
When the user fills in the party size, date, and time
And clicks the "Next" button
Then the wizard transitions to Step 2
And the step indicator updates to "2 / 3"
And the left image changes
And the form header shows "Contact details"

### Scenario: Step 2 — Contact details

Given the user is on Step 2
When the wizard displays Step 2
Then a "Name" text input with an account icon is shown
And a "Phone" text input with a phone icon is shown
And an "Email" text input with an email icon is shown
And "Previous" and "Next" buttons are visible

### Scenario: Navigation back to Step 1

Given the user is on Step 2
When the user clicks the "Previous" button
Then the wizard returns to Step 1
And the step indicator reverts to "1 / 3"
And the previously entered data is preserved

### Scenario: Navigation to Step 3 (completion)

Given the user is on Step 2
When the user fills in name, phone, and email
And clicks the "Next" button
Then the wizard transitions to Step 3
And the step indicator updates to "3 / 3"

### Scenario: Step 3 — Success confirmation

Given the user is on Step 3
When the wizard displays the final step
Then a gold circle with a checkmark icon is displayed
And the text "Your table is ready" is shown in bold uppercase
And a script-font message "~ Happy friends with a say ~" is shown in gold
And no form fields are displayed
And only a "Previous" button is visible (no "Next" button)

### Scenario: Previous button on Step 3

Given the user is on Step 3
When the user clicks the "Previous" button
Then the wizard returns to Step 2
And the contact details form is displayed again

### Scenario: Responsive layout — tablet

Given the viewport width is between 768px and 991px
When the wizard is displayed
Then the form inner padding is reduced to 60px 29px
And the navigation buttons are slightly narrower

### Scenario: Responsive layout — mobile

Given the viewport width is less than 767px
When the wizard is displayed
Then the layout stacks vertically
And the image occupies the full width above the form
And the form panel occupies the full width below the image
And the navigation buttons span the available width

## Verification Checklist

- [ ] Wizard renders centered in viewport on load
- [ ] Step 1 displays "Book a table" header with script tagline
- [ ] People dropdown opens and allows selection of 1–5
- [ ] Datepicker opens and allows date selection
- [ ] Time selects allow choosing from/to times
- [ ] "Next" button advances to Step 2
- [ ] Step indicator updates correctly (1/3 → 2/3 → 3/3)
- [ ] Left image changes per step
- [ ] Step 2 displays Name, Phone, Email fields with icons
- [ ] "Previous" button returns to Step 1 with data preserved
- [ ] "Next" on Step 2 advances to Step 3
- [ ] Step 3 shows success checkmark circle, bold title, script tagline
- [ ] Step 3 has no "Next" button, only "Previous"
- [ ] "Previous" on Step 3 returns to Step 2
- [ ] Dark form panel (#333) with brown border (#524b42)
- [ ] Gold accent (#cdaa7c) on script text, checkmark circle, button hover
- [ ] Responsive: tablet (768–991px) adjusted padding
- [ ] Responsive: mobile (<767px) stacks to single column
- [ ] Accessibility: focus management between steps
- [ ] Accessibility: aria labels on form controls
- [ ] Accessibility: keyboard navigation through form fields
- [ ] Footer links to https://www.componentdock.com/
