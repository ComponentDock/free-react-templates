# Spec: RegMint — Split-Panel Registration Form

## Purpose

RegMint is a split-panel registration form template that recreates ColorLib "Signup Form 02" (https://colorlib.com/wp/template/signup-form-02/) as a React 19 + Tailwind CSS 4 + TypeScript application. The form features an 80/20 split layout with a clean registration form on a light background on the left and a lifestyle image strip on the right, using an orange brand color accent.

**Preview URL**: https://preview.colorlib.com/theme/signup-form-02/ (design verified from downloaded source ZIP + screenshot)

## Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| Font family | Roboto (300, 400) | Google Fonts, CSS @font-face |
| Brand color (orange) | `#fb771a` | .cl-btn-primary background, links, checkbox |
| Brand hover | `#eb6304` | .cl-btn-primary:hover |
| Brand active | `#de5e04` | .cl-btn-primary:active |
| Link color | `#fb771a` | a rule |
| Link hover | `#c55303` | a:hover |
| Body text | `#212529` | body color |
| Paragraph text | `#b3b3b3` | p color, weight 300 |
| Form background | `#f6f7fc` | .half .contents background |
| Input background | `#ffffff` | .cl-form-control background |
| Input border (default) | `1px solid #ced4da` | .cl-form-control border |
| Input border (in panel) | none + box-shadow `0 1px 2px 0 rgba(0,0,0,0.1)` | .half .cl-form-control |
| Input border-radius | `4px` | .cl-form-control border-radius |
| Input height | `54px` | .half .cl-form-control height |
| Input focus ring | `0 0 0 0.2rem rgba(251,119,26, 0.25)` | .cl-form-control:focus |
| Placeholder text | `#6c757d` | .cl-form-control::placeholder |
| Button background | `#fb771a` | .cl-btn-primary |
| Button text | `#ffffff` | .cl-btn-primary color |
| Button border-radius | `0.25rem` (4px) | .cl-btn border-radius |
| Button height | `54px` | .half .cl-btn height |
| Button focus ring | `0 0 0 0.2rem rgba(252,139, 60, 0.5)` | .cl-btn:focus |
| Checkbox indicator | `#e6e6e6` (unchecked), `#fb771a` (checked) | .control__indicator |
| Checkbox size | `20×20px`, `border-radius: 4px` | .control__indicator |
| Checkbox caption | `#888`, 14px | .control .caption |
| Terms links | `#888`, underlined | .half a |

## Requirements

### Requirement: Split-panel full-viewport layout

Users SHALL see a full-viewport height split layout with a form content area (80% width) on the left and a background image strip (20% width) on the right.

#### Scenario: Page loads with split layout on desktop

- WHEN I visit the RegMint page on a desktop viewport (≥992px)
- THEN I should see a split layout filling the viewport height
- AND the form content area should be approximately 80% width on the left
- AND the background image strip should be approximately 20% width on the right

#### Scenario: Form content has light background

- WHEN I visit the RegMint page
- THEN the form content area should have a light gray/lavender background (#f6f7fc)

#### Scenario: Layout stacks on mobile

- WHEN I visit the RegMint page on a viewport ≤992px
- THEN the background image strip should appear at the top with 200px height
- AND the form content should appear below, full width

### Requirement: Registration form displays all required fields

Users SHALL see a "Register" heading, descriptive subtitle, first name, last name, email, phone, website, password, re-type password, terms checkbox, and register button.

#### Scenario: Form displays all required fields

- WHEN I visit the RegMint page
- THEN I should see a "Register" heading (h3)
- AND I should see a subtitle paragraph with descriptive text
- AND I should see a "First Name" input with placeholder "e.g. John"
- AND I should see a "Last Name" input with placeholder "e.g. Smith"
- AND I should see an "Email Address" input with placeholder "e.g. john@your-domain.com"
- AND I should see a "Phone Number" input with placeholder "+00 0000 000 0000"
- AND I should see a "Website" input with placeholder "e.g. https://google.com"
- AND I should see a "Password" input with placeholder "Your Password"
- AND I should see a "Re-type Password" input with placeholder "Your Password"
- AND I should see a terms checkbox (pre-checked)
- AND I should see a "Register" submit button

### Requirement: Two-column form grid

First/Last Name, Phone/Website, and Password/Re-type Password SHALL display in a two-column grid layout. Email Address SHALL span full width.

#### Scenario: Two-column fields display side by side

- WHEN I visit the RegMint page on a desktop viewport
- THEN "First Name" and "Last Name" should appear side by side
- AND "Phone Number" and "Website" should appear side by side
- AND "Password" and "Re-type Password" should appear side by side

#### Scenario: Email spans full width

- WHEN I visit the RegMint page
- THEN "Email Address" should span the full form width

### Requirement: Styled form inputs with shadows

All form inputs SHALL use a borderless design with subtle box-shadow, 54px height, white background, and 4px border-radius.

#### Scenario: Inputs have shadow styling

- WHEN I visit the RegMint page
- THEN the text inputs should have no visible border
- AND the inputs should have a subtle box-shadow (0 1px 2px 0 rgba(0,0,0,0.1))
- AND the inputs should have white background
- AND the inputs should have 4px border-radius
- AND the inputs should be 54px tall

#### Scenario: Inputs have correct typography

- WHEN I visit the RegMint page
- THEN the input text should be Roboto font
- AND the placeholder text should be gray (#6c757d)

### Requirement: Custom checkbox with terms text

Users SHALL see a custom-styled checkbox with terms and conditions text including linked "Terms and Conditions" and "Privacy Policy" pages.

#### Scenario: Checkbox displays with terms text

- WHEN I visit the RegMint page
- THEN I should see a custom checkbox (20×20px, 4px radius)
- AND the checkbox should be checked by default
- AND I should see "Creating an account means you're okay with our" text
- AND I should see a "Terms and Conditions" link
- AND I should see a "Privacy Policy" link

#### Scenario: Checkbox toggles

- WHEN I click the terms checkbox
- THEN the checkbox should toggle its checked state

### Requirement: Orange register button

Users SHALL see an orange "Register" button with white text, proper height, and left padding.

#### Scenario: Register button has correct styling

- WHEN I visit the RegMint page
- THEN the "Register" button should have orange background (#fb771a)
- AND the button text should be white
- AND the button should be 54px tall
- AND the button should have left/right padding of 30px
- AND the button should have 4px border-radius

#### Scenario: Register button hover state

- WHEN I hover over the "Register" button
- THEN the button background should darken to #eb6304

### Requirement: Form accepts user input

Users SHALL be able to type in all form fields.

#### Scenario: Form accepts text input

- WHEN I type "Jane" in the first name field
- THEN the first name field should contain "Jane"

#### Scenario: Form accepts email input

- WHEN I type "jane@example.com" in the email field
- THEN the email field should contain "jane@example.com"

#### Scenario: Form accepts password input

- WHEN I type "secret123" in the password field
- THEN the password field should contain "secret123"

### Requirement: Footer links to Component Dock

Users SHALL see a footer link to Component Dock.

#### Scenario: Footer links to Component Dock

- WHEN I visit the RegMint page
- THEN I should see a link to "https://www.componentdock.com/"
- AND the link should open in a new tab
- AND the link text should contain "Component Dock"

### Requirement: Page title and accessibility

The page SHALL have a descriptive document title and use semantic HTML elements.

#### Scenario: Page has correct title

- WHEN I visit the RegMint page
- THEN the document title SHALL contain "RegMint"

#### Scenario: Form uses semantic elements

- WHEN I visit the RegMint page
- THEN the form SHALL use a `<form>` element
- AND inputs SHALL have associated `<label>` elements
- AND the form should use proper heading hierarchy
