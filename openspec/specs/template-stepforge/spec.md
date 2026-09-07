# Template: Stepforge (Bootstrap Wizard)

## Purpose

Recreation of [ColorLib Wizard 26](https://colorlib.com/wp/template/colorlib-wizard-26/)
(preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-26/index.html`).
A 3-step booking form wizard with a dark slate background, teal accent, and
floating-label inputs. Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Source mapping

| Field            | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| Source slug      | `colorlib-wizard-26`                                                  |
| Source name      | Colorlib Wizard 26                                                    |
| Live preview     | `https://colorlib.com/etc/bwiz/colorlib-wizard-26/index.html`         |
| Template page    | `https://colorlib.com/wp/template/colorlib-wizard-26/`                |
| Category         | Bootstrap Wizards                                                     |

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token                     | Value                          | Notes                                  |
| ------------------------- | ------------------------------ | -------------------------------------- |
| Page background           | `#383a4f`                      | Dark slate/navy                        |
| Form background           | `#525575`                      | Muted purple-slate                     |
| Brand accent              | `#55e8d5`                      | Teal/mint — step icons, labels, values |
| Button background         | `#43ccba`                      | Teal (slightly desaturated)            |
| Button hover              | `#32998b`                      | Darker teal                            |
| Step icon inactive        | `#ccc`                         | Light gray                             |
| Step icon active/done     | `#55e8d5`                      | Same as brand accent                   |
| Font family               | `Open Sans, sans-serif`        | Google Fonts                           |
| Font weight (body)        | `400`                          |                                        |
| Font weight (button)      | `600`                          |                                        |
| Font weight (headings)    | `700`                          |                                        |
| Container border-radius   | `10px`                         | Wizard card                            |
| Button border-radius      | `5px`                          | Step icons, buttons, date selects      |
| Input border              | `1px solid rgba(255,255,255,0.3)` | Bottom-only underline style         |
| Text primary              | `#fff`                         | Headings, labels, inputs               |
| Text secondary            | `#ccc`                         | Step counter, secondary labels         |
| Text step-label           | `#333`                         | Step text on white tab background      |
| Text select               | `#666`                         | Select dropdown text                   |
| Table header              | `rgba(255,255,255,0.5)`       | Confirm step table headers             |
| Table value               | `#55e8d5`                      | Confirm step table values              |
| Container shadow          | `0px 8px 20px rgba(0,0,0,0.15)` | Subtle drop shadow                   |
| Step icon shadow          | `0px 4px 11px rgba(0,0,0,0.14)` | Smaller drop shadow                  |

## Layout

- Full-viewport centered flex layout (column direction)
- White heading "Form Booking Wizard" centered above the card
- 910px max-width wizard card (90% on tablets, full-width mobile)
- Card is a flex row: step tabs on the left, form content on the right
- Step tabs: vertical column of 3 items, each with a numbered circle + label
- Responsive: on mobile (<575px) step tabs stack vertically above form

## Sections (in order)

### 1. Step Tabs (left sidebar)
- Three vertical step indicators: "1 — Personal Info", "2 — Booking", "3 — Confirm"
- Each has a circular numbered icon (30px padding, 25px font, box-shadow)
- Active/done icon: teal background (#55e8d5); inactive: gray (#ccc)
- Step text: 16px, weight 400, color #333
- Background: white (#fff) per tab row

### 2. Section 1 — Personal Info (step 1/3)
- Heading: "Personal Info" (30px, bold, white) with "1/3" counter (18px, #ccc)
- Fields (floating-label underline style):
  - First Name (text input)
  - Last Name (text input)
  - Phone Number (text input)
  - E-Mail (text input)
  - Date of Birth: three small selects (day, month, year) with 5px border-radius
  - Address Location (full-width text input)
- All inputs: transparent background, bottom border `rgba(255,255,255,0.3)`, white text
- Labels float up on focus/valid with teal color (#55e8d5)

### 3. Section 2 — Booking (step 2/3)
- Heading: "Booking Information" (typo "Infomation" in original — fix to "Information")
- Hero image placeholder (full-width within form)
- Fields:
  - Choose a Room (select with chevron-down icon)
  - Organization Day (text input with datepicker placeholder)
  - Time Open (select with chevron-down icon)

### 4. Section 3 — Confirm (step 3/3)
- Heading: "Confirm Details" (typo "Comfirm" in original — fix to "Confirm")
- Summary table (full-width, left-aligned):
  - Full Name
  - Room
  - Day
  - Time
  - Price: "40.00$" (displayed in teal, bold)

### 5. Navigation Buttons
- "Previous" and "Next" buttons centered at bottom
- Teal background (#43ccba), white text, 150px × 45px, 5px radius
- Hover: darker teal (#32998b)
- "Previous" hidden on first step; button text changes to "Submit" on last step

## Gherkin requirements

```gherkin
Feature: Stepforge booking wizard
  As a user filling out a booking form
  I want a guided multi-step wizard
  So I can complete my booking in organized steps

  Background:
    Given I open the Stepforge wizard page

  Scenario: Page loads with step 1 visible
    Then I should see the heading "Form Booking Wizard"
    And I should see step indicator "1" highlighted in teal
    And I should see "Personal Info" as the active section heading
    And I should see the counter "1/3"

  Scenario: Step 1 contains all personal fields
    Then I should see inputs for "First Name", "Last Name", "Phone Number", "E-Mail"
    And I should see a date-of-birth row with day, month, year selects
    And I should see an "Address Location" input

  Scenario: Floating labels animate on focus
    When I click the "First Name" input
    Then the label should float up and turn teal

  Scenario: Next button advances to step 2
    When I fill required fields in step 1
    And I click the "Next" button
    Then I should see "Booking Information" as the section heading
    And the step indicator "2" should be highlighted in teal

  Scenario: Step 2 contains booking fields
    Then I should see a "Choose a Room" select
    And I should see an "Organization Day" input
    And I should see a "Time Open" select

  Scenario: Previous button returns to step 1
    Given I am on step 2
    When I click the "Previous" button
    Then I should see "Personal Info" as the active section heading

  Scenario: Next button advances to step 3
    When I complete step 1 and step 2
    And I click the "Next" button on step 2
    Then I should see "Confirm Details" as the section heading

  Scenario: Step 3 shows summary table
    Then I should see a summary table with rows for Full Name, Room, Day, Time, Price
    And the price should display as "40.00$"

  Scenario: Submit button appears on final step
    Given I am on step 3
    Then I should see a "Submit" button instead of "Next"

  Scenario: Dark theme styling
    Then the page background should be dark slate
    And the form card background should be muted purple-slate
    And all headings should be white
    And accent elements should be teal

  Scenario: Responsive layout on mobile
    Given I resize the viewport to 375px width
    Then the step indicators should stack vertically above the form
    And the form should be full-width
```

## Verification checklist

- [ ] 3-step wizard navigates forward/backward correctly
- [ ] Step indicators highlight active step in teal (#55e8d5)
- [ ] Step indicators show completed state (teal) after advancing
- [ ] Floating labels animate on focus (translate up + scale + teal)
- [ ] All form fields render with underline style (bottom border only)
- [ ] Date-of-birth renders as three small selects (day/month/year)
- [ ] Booking section shows hero image placeholder
- [ ] Room and Time selects render with custom chevron icon
- [ ] Confirm step displays summary table with all entered values
- [ ] Price displays as "40.00$" in teal bold
- [ ] Navigation buttons: teal (#43ccba), hover darker (#32998b), 5px radius
- [ ] "Previous" hidden on step 1; "Next" becomes "Submit" on step 3
- [ ] Page background: #383a4f; form background: #525575
- [ ] Container has 10px border-radius and drop shadow
- [ ] Responsive: ≤991px tabs stack; ≤575px full-width single-column
- [ ] Font: Open Sans, weights 400/600/700
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
