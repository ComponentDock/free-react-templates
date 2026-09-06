# Template: ModalDrift (Modal)

## Purpose

Recreation of the ColorLib "Modal V16" template — a split-screen registration
pop-up modal with a background image on the left half and a multi-field
registration form on the right half.

- **Source:** [ColorLib Modal 16](https://colorlib.com/wp/template/modal-16/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-16/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-16.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)
- **Description:** A full-blown, easy-to-use and Bootstrap-based free
  registration form pop-up modal that features a split-screen design.

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token | Value | Notes |
|-------|-------|-------|
| Body font | `Roboto`, sans-serif, 300 weight | Main body text |
| Heading font | `Roboto`, sans-serif | Same family, default weight |
| Paragraph color | `#b3b3b3` | Light gray text |
| Modal heading color | `#000` (black) | font-size: 22px |
| Modal paragraph color | `#777` | font-size: 14px |
| Button primary | Bootstrap `btn-primary` (#007bff) | border-radius: 4px, full-width |
| Button secondary | Bootstrap `btn-secondary` (#6c757d) | px-4 py-3 for launch button |
| Modal body background | `#efefef` (light gray) | |
| Modal border-radius | `7px` | Rounded corners on modal |
| Modal shadow | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong shadow |
| Form control | No border, transparent bg | box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2) |
| Form control focus | Same shadow | No focus ring glow |
| Custom select | No border, transparent bg | box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2) |
| Privacy link color | `#555` | font-weight: 900 |
| Privacy note color | `#999` | Small text fine print |
| Promo image | `flex: 0 0 50%` | Takes exactly half the modal |
| Page layout | Full viewport height, centered | `height: 100vh` |
| Launch button | `btn-secondary` with `px-4 py-3` | Triggers the modal |

## Visual Design

From the preview HTML/CSS and ColorLib page metadata: A full-viewport page
with vertically and horizontally centered content showing a "Modal #6" heading
and a gray "Launch modal" button. Clicking the button opens a large, centered
Bootstrap modal with a split-screen (flexbox) layout — the left half displays
a background image (placeholder) covering 50% width, and the right half shows
a light gray (#efefef) content area with a bold heading ("Registration form"),
a short description paragraph, and a registration form. The form includes:
a country dropdown select, full name text input, email address input, date
of birth split into three columns (MM, DD, YYYY), a full-width primary "Sign
up" button, and a privacy policy note with link below. The modal has rounded
corners (7px), a deep box-shadow, and the form inputs have transparent borders
with subtle shadows. The overall aesthetic is clean, modern, and focused on
lead capture — the image draws attention while the structured form collects
detailed user information.

## Gherkin Requirements

### Background
Given the page loads with a centered layout
When the viewport is displayed
Then the content is vertically and horizontally centered
And the page title "Modal #6" is visible
And a "Launch modal" button is displayed below the title

### Scenario: Modal opens on button click
Given the page is loaded
When the user clicks the "Launch modal" button
Then a large modal dialog appears centered in the viewport
And the modal displays a split-screen layout
And the left half shows a background image
And the right half shows a heading "Registration form"
And the right half shows a description paragraph
And the right half shows a registration form

### Scenario: Registration form contains required fields
Given the modal is open
When the user inspects the form
Then a "Country" dropdown select is visible
And a "Full Name" text input is visible
And an "Email Address" input field is visible
And a "Date of Birth" section with MM, DD, YYYY inputs is visible
And a "Sign up" submit button is visible
And a privacy policy note is displayed below the button

### Scenario: Form submission with valid data
Given the modal is open
When the user selects a country from the dropdown
And the user enters a full name
And the user enters a valid email address
And the user enters a date of birth (MM, DD, YYYY)
And the user clicks the "Sign up" button
Then the form submits (or shows validation feedback)

### Scenario: Form submission with empty fields
Given the modal is open
When the user clicks the "Sign up" button without entering data
Then required field validation errors appear
And the form does not submit

### Scenario: Modal closes on close button click
Given the modal is open
When the user clicks the close button (X)
Then the modal closes with a fade-out animation
And the page content is visible again

### Scenario: Modal closes on backdrop click
Given the modal is open
When the user clicks the dark backdrop area outside the modal
Then the modal closes
And the page content is visible again

### Scenario: Modal closes on Escape key
Given the modal is open
When the user presses the Escape key
Then the modal closes
And the page content is visible again

### Scenario: Modal keyboard accessibility
Given the modal is open
When the user presses Tab repeatedly
Then focus cycles through the modal form fields only
And focus does not escape to the background page

### Scenario: Responsive layout
Given the modal is open on a mobile viewport (< 768px)
Then the split-screen layout stacks vertically
And the image appears above the form content
And all form fields remain usable

### Scenario: Country dropdown functionality
Given the modal is open
When the user clicks the Country dropdown
Then a list of countries is displayed
And the user can select a country
And the selected country appears in the dropdown

### Scenario: Date of birth inputs
Given the modal is open
When the user focuses on a date field (MM, DD, or YYYY)
Then the input accepts text
And the placeholder text indicates the expected format

## Verification Checklist

- [ ] Page renders centered "Modal #6" heading and launch button
- [ ] Launch button triggers modal with split-screen layout
- [ ] Left half displays a placeholder image (50% width)
- [ ] Right half displays heading, description, and form
- [ ] Form has country dropdown, full name, email, date of birth fields
- [ ] Date of birth is split into three columns (MM, DD, YYYY)
- [ ] "Sign up" button is full-width primary style
- [ ] Privacy policy note appears below the button
- [ ] Modal has 7px border-radius and deep shadow
- [ ] Modal body has light gray (#efefef) background
- [ ] Form inputs have transparent borders with subtle shadows
- [ ] Close button (X) closes the modal
- [ ] Backdrop click closes the modal
- [ ] Escape key closes the modal
- [ ] Focus trap works within the modal
- [ ] Responsive: stacks vertically on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
