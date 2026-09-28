# Template: RegLift (Registration Form)

## Purpose

Recreation of **Colorlib Reg Form V5** — an event registration form with a gradient background, centered white card, and structured form fields including name, company, email, phone, subject dropdown, and radio selection.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-5/
- **Live demo:** https://colorlib.com/etc/regform/colorlib-regform-5/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-5.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

**Note:** The live preview at `preview.colorlib.com/theme/colorlib-regform-5/` returns 404.
Research used the actual demo at `colorlib.com/etc/regform/colorlib-regform-5/` and the CSS file
(`css/style.css`, 686 lines — custom styles, no framework). The screenshot was referenced for
visual confirmation.

## Design tokens captured from the original

| Token | Value |
|---|---|
| Page background | `linear-gradient(to top right, #08aeea 0%, #b721ff 100%)` |
| Card background | `#ffffff` |
| Card border-radius | `10px` |
| Card box-shadow | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)` |
| Card heading background | `#1a1a1a` |
| Card heading text | `#ffffff`, uppercase, 24px, bold |
| Card body padding | `52px 85px` (desktop) · `40px 30px` (mobile) |
| Form row label color | `#555555` |
| Form row label weight | 700 |
| Form row label size | 15px |
| Form row label width | 125px |
| Input background | `#e5e5e5` |
| Input border-radius | `5px` |
| Input height | 50px (line-height) |
| Input padding | `0 22px` |
| Input font-size | 16px |
| Input color | `#555555` |
| Sub-label color | `#999999` |
| Sub-label size | 14px |
| Button background | `#ff4b5a` |
| Button hover | `#eb3746` |
| Button border-radius | `5px` |
| Button text | uppercase, white, bold, 15px |
| Button padding | `0 50px` |
| Button height | 50px |
| Select background | `#e5e5e5` |
| Select border-radius | `5px` |
| Radio checked | `#e5e5e5` |
| Max wrapper width | 790px |
| Mobile breakpoint | 767px |
| Font family | Open Sans (Google Fonts), weights 400, 700 |

## Requirements

### Requirement: Full-viewport gradient background

The page SHALL render a full-height background with a linear gradient from cyan-blue (#08aeea) at bottom-left to purple (#b721ff) at top-right, with content centered.

#### Scenario: Gradient background fills viewport

- **WHEN** I visit the RegLift page
- **THEN** the page background is a gradient from #08aeea (bottom-left) to #b721ff (top-right)
- **AND** the gradient fills the full viewport height
- **AND** the form card is centered horizontally with 45px top padding

### Requirement: White card with dark heading

The system SHALL render a white card with rounded corners, box shadow, and a dark header containing the form title.

#### Scenario: Card appearance

- **WHEN** the form card is displayed
- **THEN** it has a white (#ffffff) background
- **AND** it has a border-radius of 10px
- **AND** it has a box-shadow of `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`
- **AND** it is max-width 790px, centered

#### Scenario: Card heading

- **WHEN** the card heading is displayed
- **THEN** it shows "EVENT REGISTRATION FORM" in uppercase
- **AND** the heading background is #1a1a1a (dark/black)
- **AND** the heading text is white, 24px, bold
- **AND** the heading is centered with 20px vertical padding
- **AND** the top corners match the card border-radius (10px)

### Requirement: Form layout with label+value rows

Each form field SHALL use a horizontal label+value layout with a fixed-width label on the left and input on the right.

#### Scenario: Desktop row layout

- **WHEN** the viewport is wider than 767px
- **THEN** each form row is a flex row with items centered vertically
- **AND** the label ("Name", "Company", etc.) is 125px wide, #555 color, 15px, bold
- **AND** the value (input area) takes the remaining width
- **AND** each row has 40px bottom margin

#### Scenario: Mobile row layout

- **WHEN** the viewport is 767px or narrower
- **THEN** each form row stacks vertically
- **AND** the label becomes a block element above the input
- **AND** the label has 7px bottom margin

### Requirement: Name fields (First Name + Last Name)

The Name row SHALL contain two side-by-side text inputs for First Name and Last Name.

#### Scenario: Two-column name inputs

- **WHEN** the Name row is displayed on desktop
- **THEN** it shows two inputs of equal width side by side
- **AND** the first input is labeled "first name"
- **AND** the second input is labeled "last name"

#### Scenario: Mobile name inputs

- **WHEN** the viewport is 767px or narrower
- **THEN** the First Name and Last Name inputs stack vertically, each full width

### Requirement: Company field

The Company row SHALL contain a single full-width text input.

#### Scenario: Company input

- **WHEN** the Company row is displayed
- **THEN** it shows a single text input spanning the full value width

### Requirement: Email field

The Email row SHALL contain a single full-width email input.

#### Scenario: Email input

- **WHEN** the Email row is displayed
- **THEN** it shows a single email input spanning the full value width

### Requirement: Phone fields (Area Code + Phone Number)

The Phone row SHALL contain two inputs: a narrow Area Code field and a wider Phone Number field.

#### Scenario: Desktop phone layout

- **WHEN** the Phone row is displayed on desktop
- **THEN** the Area Code input is 25% width
- **AND** the Phone Number input is 75% width
- **AND** both have 15px horizontal padding (gap)

#### Scenario: Mobile phone layout

- **WHEN** the viewport is 767px or narrower
- **THEN** the Area Code input is 35% width
- **AND** the Phone Number input is 65% width

### Requirement: Subject dropdown

The Subject row SHALL contain a styled select dropdown with placeholder and options.

#### Scenario: Subject dropdown

- **WHEN** the Subject row is displayed
- **THEN** it shows a custom select dropdown
- **AND** the default selected option is "Choose option" (disabled, selected)
- **AND** the dropdown options are Subject 1, Subject 2, Subject 3
- **AND** the dropdown has the same #e5e5e5 background and 5px border-radius as text inputs

### Requirement: Existing customer radio group

The form SHALL include a radio group asking "Are you an existing customer?" with Yes and No options.

#### Scenario: Radio group display

- **WHEN** the radio group is displayed
- **THEN** the label "Are you an existing customer?" is shown as a block label
- **AND** "Yes" and "No" radio buttons are displayed inline with custom checkmarks
- **AND** "Yes" is checked by default
- **AND** the checked state shows a #e5e5e5 background on the checkmark

### Requirement: Register button

The form SHALL contain a red Register button, centered, with uppercase text.

#### Scenario: Button appearance

- **WHEN** the Register button is displayed
- **THEN** it has a #ff4b5a (red) background
- **AND** it is uppercase with bold white text at 15px
- **AND** it has a border-radius of 5px
- **AND** it has 50px line-height and 0 50px horizontal padding
- **AND** it transitions on hover (0.4s ease)

#### Scenario: Button hover

- **WHEN** I hover over the Register button
- **THEN** the background color changes to #eb3746 (darker red)

### Requirement: Form input styling consistency

All text inputs and the select dropdown SHALL share the same visual style.

#### Scenario: Input visual style

- **WHEN** any text input is displayed
- **THEN** it has a #e5e5e5 background
- **AND** it has a 5px border-radius
- **AND** it has 0 22px horizontal padding
- **AND** it has 50px line-height
- **AND** the text color is #555 at 16px

### Requirement: Responsive wrapper

The form wrapper SHALL have a max-width of 790px and be centered with auto margins.

#### Scenario: Wrapper centering

- **WHEN** the viewport is wider than 790px
- **THEN** the wrapper is centered with 790px max-width
- **AND** the card body has 52px 85px padding

#### Scenario: Mobile wrapper

- **WHEN** the viewport is 767px or narrower
- **THEN** the card body padding reduces to 40px 30px
- **AND** the bottom padding is 50px

## Verification checklist

- [ ] Full-viewport gradient background (#08aeea → #b721ff)
- [ ] White card with 10px border-radius and box-shadow
- [ ] Dark (#1a1a1a) card heading with "EVENT REGISTRATION FORM"
- [ ] Label+value row layout (125px label width)
- [ ] Name row: two side-by-side inputs (First Name, Last Name)
- [ ] Company row: single full-width input
- [ ] Email row: single full-width email input
- [ ] Phone row: Area Code (25%) + Phone Number (75%)
- [ ] Subject dropdown with "Choose option" placeholder
- [ ] "Are you an existing customer?" Yes/No radio group
- [ ] Red (#ff4b5a) Register button, uppercase, bold
- [ ] Button hover transitions to #eb3746
- [ ] All inputs: #e5e5e5 bg, 5px radius, 50px height
- [ ] Open Sans font (weights 400, 700)
- [ ] Responsive: mobile stacks labels above inputs, reduced padding
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains reglift.free.componentdock.com
- [ ] homepage set to https://reglift.free.componentdock.com
