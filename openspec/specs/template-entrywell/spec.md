# Spec: Entrywell — Sign-In/Sign-Up Modal Template

> Recreation of ColorLib Modal 09
> (https://colorlib.com/wp/template/modal-09/)

## Purpose

A single-page React template featuring a centered launch button that opens a
split-layout sign-in/sign-up modal. The modal has a background image on the
left half and a dark form panel on the right with Sign In / Sign Up tab
navigation. The design uses a golden/amber brand color (#e3b04b) with a
Roboto font family.

## Requirements

### Requirement: Page layout and launch button

The template SHALL render a centered hero section with the template name
"Entrywell" and a "Launch Modal" button.

#### Scenario: Page loads with heading and launch button

- **GIVEN** the page is loaded
- **THEN** I see a heading "Entrywell"
- **AND** I see a button "Launch Modal"

#### Scenario: Launch button opens the modal

- **GIVEN** the page is loaded
- **WHEN** I click the "Launch Modal" button
- **THEN** I see a dialog with role "dialog"

### Requirement: Modal opens with split layout

The modal SHALL display a split layout — a background image on the left half
and a dark form panel on the right half with tab navigation.

#### Scenario: Modal has split layout

- **GIVEN** the modal is open
- **THEN** I see a dialog with aria-modal "true"
- **AND** I see a background image on the left panel
- **AND** I see a dark panel (#2b2b28) on the right

#### Scenario: Modal has close button

- **GIVEN** the modal is open
- **THEN** I see a close button labeled "Close modal"

### Requirement: Modal closes on user action

The modal SHALL close when the user clicks the close button, the backdrop,
or presses Escape.

#### Scenario: Modal closes on close button click

- **GIVEN** the modal is open
- **WHEN** I click the close button
- **THEN** the modal is not visible

#### Scenario: Modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** I click the backdrop overlay
- **THEN** the modal is not visible

#### Scenario: Modal closes on Escape key

- **GIVEN** the modal is open
- **WHEN** I press the Escape key
- **THEN** the modal is not visible

#### Scenario: Other keys do not close modal

- **GIVEN** the modal is open
- **WHEN** I press the "a" key
- **THEN** the modal is still visible

### Requirement: Sign In tab is active by default

The Sign In tab SHALL be active by default with the correct form fields.

#### Scenario: Sign In tab is active by default

- **GIVEN** the modal is open
- **THEN** the "Sign In" tab has aria-selected "true"
- **AND** I see a "Sign In" heading

#### Scenario: Sign In form fields

- **GIVEN** the Sign In tab is active
- **THEN** I see a "Username" input with placeholder "Username"
- **AND** I see a "Password" input
- **AND** I see a "Remember Me" checkbox
- **AND** I see a "Sign In" submit button
- **AND** I see a "Forgot Password" link
- **AND** I see "Not a member?" text with a "Sign Up" button

#### Scenario: Sign In form submit does not reload

- **GIVEN** the Sign In tab is active
- **WHEN** I click the "Sign In" submit button
- **THEN** the form submission is prevented (no page reload)

### Requirement: Sign Up tab switch

The user SHALL be able to switch to the Sign Up tab and see the correct
form fields.

#### Scenario: Switch to Sign Up tab

- **GIVEN** the modal is open
- **WHEN** I click the "Sign Up" tab
- **THEN** the "Sign Up" tab has aria-selected "true"
- **AND** I see a "Sign Up" heading

#### Scenario: Sign Up form fields

- **GIVEN** the Sign Up tab is active
- **THEN** I see a "Full Name" input with placeholder "John Doe"
- **AND** I see an "Email Address" input with placeholder "johndoe@gmail.com"
- **AND** I see a "Password" input
- **AND** I see an "I agree all statements in terms of service" checkbox
- **AND** I see a "Sign Up" submit button
- **AND** I see "I'm already a member!" text with a "Sign In" button

#### Scenario: Switch back to Sign In from Sign Up

- **GIVEN** the Sign Up tab is active
- **WHEN** I click the "Sign In" link at the bottom of the form
- **THEN** the "Sign In" tab is active
- **AND** I see the Sign In form

#### Scenario: Sign Up form submit does not reload

- **GIVEN** the Sign Up tab is active
- **WHEN** I click the "Sign Up" submit button
- **THEN** the form submission is prevented (no page reload)

### Requirement: Tab switching hides inactive forms

Switching tabs SHALL hide the inactive tab's form content.

#### Scenario: Sign In form hidden when Sign Up is active

- **GIVEN** the Sign Up tab is active
- **THEN** I do not see a "Username" input

#### Scenario: Sign Up form hidden when Sign In is active

- **GIVEN** the Sign In tab is active after being on Sign Up
- **THEN** I do not see a "John Doe" input

### Requirement: Brand colors and styling

The template SHALL use the correct design tokens from the original.

#### Scenario: Brand color is golden/amber

- **GIVEN** the page is loaded
- **THEN** buttons use background color #e3b04b
- **AND** active tabs use text color #e3b04b

#### Scenario: Modal has correct shadow and no border radius

- **GIVEN** the modal is open
- **THEN** the modal has shadow "0px 10px 34px -15px rgba(0, 0, 0, 0.24)"
- **AND** the modal has no border radius

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer has Component Dock link

- **GIVEN** the page is loaded
- **THEN** I see a link "More templates at Component Dock" pointing to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

### Requirement: Accessibility

The modal SHALL be accessible with proper ARIA attributes and keyboard
navigation.

#### Scenario: Modal has accessible dialog role

- **GIVEN** the modal is open
- **THEN** the dialog has role "dialog" and aria-modal "true"
- **AND** the dialog has an aria-label

#### Scenario: Close button has accessible label

- **GIVEN** the modal is open
- **THEN** the close button has an aria-label "Close modal"
