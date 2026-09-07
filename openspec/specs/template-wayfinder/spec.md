# Template: Wayfinder (Form Wizard — Split Layout)

## Purpose

Recreation of ColorLib "Colorlib Wizard 22" — a multi-step travel booking form wizard with split layout (image left, form right), progress indicator, form validation, and confirmation summary. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-22/index.html. Source slug: `colorlib-wizard-22`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with split-panel layout, progress indicator, form validation (zod + react-hook-form), and confirmation summary table.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Muli', sans-serif` | Google Fonts (`css/muli-font.css`) |
| Page background | Full-page image (`images/wizard-v2-bg.jpg` — landscape) | `.page-content` |
| Card background | `#fff` (white) | `.wizard-v2-content` |
| Card border-radius | `10px` | `.wizard-v2-content` |
| Card box-shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.wizard-v2-content` |
| Card width | `993px` | `.wizard-v2-content` |
| Image panel width | `66.61%` of card | `.wizard-image` |
| Image panel bg | `url('../images/wizard-v2.jpg')` cover, center | `.wizard-image` |
| Image panel border-radius | `10px left corners` | `.wizard-image` |
| Form padding | `40px 73px 40px 52px` | `.wizard-form` |
| Heading color | `#333` (dark gray) | `.wizard-form .wizard-header h3` |
| Heading font-size | `36px` | `.wizard-form .wizard-header h3` |
| Heading font-weight | `800` | `.wizard-form .wizard-header h3` |
| Subheading color | `#666` | `.wizard-form .wizard-header p` |
| Subheading font-size | `16px` | `.wizard-form .wizard-header p` |
| Subheading font-weight | `600` | `.wizard-form .wizard-header p` |
| Step circle inactive bg | `#ccc` (light gray) | `.form-register .steps li a` |
| Step circle active/done bg | `#56a3f2` (blue) | `.form-register .steps li.current a` |
| Step circle size | `45px × 45px` | `.form-register .steps li a` |
| Step circle border-radius | `50%` (circle) | `.form-register .steps li a` |
| Step circle text color | `#fff` | `.form-register .steps li .title` |
| Step circle text font-size | `18px` | `.form-register .steps li .title` |
| Step circle text font-weight | `600` | `.form-register .steps li .title` |
| Step connector bg | `#e5e5e5` | `.form-register .steps li a::before` |
| Step connector width | `30px`, height `2px` | `.form-register .steps li a::before` |
| Step connector spacing | `margin-right: 30px` | `.form-register .steps li a` |
| Input border | `1px solid #e5e5e5` | `.inner .form-row .form-holder input` |
| Input border-radius | `5px` | `.inner .form-row .form-holder input` |
| Input padding | `14px 15px` | `.inner .form-row .form-holder input` |
| Input text color | `#333` | `.inner .form-row .form-holder input` |
| Input font-size | `16px` | `.inner .form-row .form-holder input` |
| Input font-weight | `600` | `.inner .form-row .form-holder input` |
| Placeholder color | `#666` | `.inner .form-row .form-holder input::placeholder` |
| Action button bg | `#56a3f2` (blue) | `.actions ul li` |
| Action button hover bg | `#4582bf` (darker blue) | `.actions ul li:hover` |
| Action button shape | `5px border-radius` (rectangle) | `.actions ul li` |
| Action button size | `160px × 50px` | `.actions ul li` |
| Action button text | `#fff`, weight `600`, size `16px` | `.actions ul li a` |
| Previous button | `display: none` (hidden on first render) | `.actions ul li:first-child` |
| Confirmation table border | `1px solid #e5e5e5` | `.inner .form-row.table-responsive` |
| Confirmation table border-radius | `5px` | `.inner .form-row.table-responsive` |
| Confirmation table padding | `22px 26px 16px` | `.inner .form-row.table-responsive` |
| Confirmation label color | `#666` | `.inner .table-responsive tbody th` |
| Confirmation label font-size | `15px` | `.inner .table-responsive tbody th` |
| Confirmation label font-weight | `600` | `.inner .table-responsive tbody th` |
| Confirmation value color | `#333` | `.inner .table-responsive tbody td` |
| Confirmation value font-size | `18px` | `.inner .table-responsive tbody td` |
| Confirmation value font-weight | `700` | `.inner .table-responsive tbody td` |

## Gherkin Requirements

### Feature: Multi-Step Travel Booking Wizard (Split Layout)

#### Scenario: Page Load — Split Panel Layout
  Given the wizard page is loaded
  Then a white card is centered on a full-page background image
  And the card has a left image panel (66.61% width) and a right form panel
  And the form panel displays heading "Form Wizard" (36px, weight 800, #333)
  And subtitle "Nostrud exercitation commodo consequat." (16px, weight 600, #666)
  And the step indicator shows 3 numbered circles (1, 2, 3) connected by lines

#### Scenario: Step 1 — Personal Information
  Given the wizard form is loaded
  When step 1 is displayed
  Then the step 1 circle is highlighted blue (#56a3f2)
  And the following fields are displayed:
    - First Name (text input, placeholder "First Name")
    - Last Name (text input, placeholder "Last Name")
    - Phone Number (text input, placeholder "Phone Number")
    - Email (email input, placeholder "Email")
  And First Name and Last Name are side-by-side (50% each)
  And Phone Number and Email are side-by-side (50% each)
  And a blue "Next" button (160px × 50px, #56a3f2) is displayed

#### Scenario: Step 1 to Step 2 Navigation
  Given the user has filled the personal information fields
  When the user clicks "Next"
  Then step 2 is displayed
  And the step indicator shows step 1 as done (blue), step 2 as active (blue)
  And a "Previous" button appears (or the previous button becomes visible)

#### Scenario: Step 2 — Travel Details
  Given step 2 is displayed
  Then the following fields are displayed:
    - Location (select dropdown, full width, options: United States, United Kingdom, Viet Nam)
    - Date (text input with datepicker, placeholder "15 / Jan / 2018")
    - Time (select dropdown, options: "7:00am - 18:00pm", "9:00am - 21:00pm", "10:00am - 22:00pm", "12:00am - 24:00pm")
  And Location is full-width
  And Date and Time are side-by-side

#### Scenario: Step 2 Navigation Back
  Given the user is on step 2
  When the user clicks "Previous"
  Then step 1 is displayed again with previously entered values preserved

#### Scenario: Step 2 to Step 3 Navigation
  Given the user is on step 2
  When the user clicks "Next"
  Then step 3 (confirmation) is displayed

#### Scenario: Step 3 — Confirmation Summary
  Given step 3 is displayed
  Then a summary table is shown with border (#e5e5e5) and rounded corners (5px)
  And the table displays the following rows:
    - Full Name: <first name> <last name>
    - Phone: <phone number>
    - Email: <email>
    - Travel Location: <selected location>
    - Date: <selected date>
    - Time: <selected time>
  And table labels (th) are in gray (#666, 15px, weight 600)
  And table values (td) are in dark (#333, 18px, weight 700)
  And rows have spacing (padding-bottom: 18px)

#### Scenario: Progress Indicator
  Given the wizard form is loaded
  Then a horizontal step bar is displayed above the form
  And three step circles are shown (1, 2, 3)
  And circles are 45px, connected by 30px gray lines (#e5e5e5, 2px height)
  And the current step circle is blue (#56a3f2)
  And completed step circles also show blue background

#### Scenario: Responsive Layout
  Given the user resizes the browser to mobile width (< 575px)
  Then the image panel is hidden (display: none)
  And the form panel takes full width
  And form fields stack vertically
  And the card remains centered

## Verification Checklist

- [ ] Split layout: image panel (left, 66.61%) + form panel (right)
- [ ] Full-page background image with centered card (993px, 10px radius, shadow)
- [ ] 3-step horizontal progress bar with numbered circles (45px, blue #56a3f2 active)
- [ ] Step circles connected by gray lines (#e5e5e5, 2px)
- [ ] Step 1: First Name, Last Name, Phone, Email — side-by-side pairs
- [ ] Step 2: Location (select), Date (datepicker), Time (select)
- [ ] Step 3: Confirmation table with bordered box, labels #666, values #333 bold
- [ ] Blue rectangular "Next" button (160px × 50px, #56a3f2, 5px radius)
- [ ] "Previous" button hidden on step 1, visible on steps 2–3
- [ ] Muli Google Font loaded
- [ ] Responsive: image hidden on mobile, fields stack vertically
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec)
