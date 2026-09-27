## Purpose

Recreate Colorlib Regform 2 as a React template named Regsnap. This is a food class registration form with a split-screen card layout: hero image on the left, form fields on the right, set against a vibrant red background.

Source: https://colorlib.com/wp/template/colorlib-regform-2/
Preview was unreachable; this spec is based on the screenshot and the live source HTML/CSS.

## Requirements

### Requirement: Split-screen card layout

The template SHALL render a centered white card (max-width 960px, 10px radius, drop shadow) on a full-page red (#fa4251) background. On desktop the card is split into a left hero image (29.1%) and a right form body (70.9%). On mobile the card stacks vertically with the image on top.

#### Scenario: Desktop layout

- **GIVEN** the viewport is wider than 768px
- **WHEN** the page loads
- **THEN** the card displays a side-by-side layout with the image on the left and the form on the right

#### Scenario: Mobile layout

- **GIVEN** the viewport is 768px or narrower
- **WHEN** the page loads
- **THEN** the card stacks vertically with the image above the form

### Requirement: Registration form fields

The form SHALL include: Name (text input), Birthdate (text input with calendar icon), Gender (select dropdown: Male/Female/Other), Class (select dropdown: Class 1/2/3), Registration Code (text input), and a green Search submit button.

#### Scenario: All fields rendered

- **GIVEN** the page loads
- **WHEN** I inspect the form
- **THEN** the Name, Birthdate, Gender, Class, and Registration Code fields are present
- **AND** the Search button is visible

#### Scenario: Form interaction

- **GIVEN** the form is displayed
- **WHEN** I type in the Name field
- **THEN** the Name field updates with the entered text

#### Scenario: Select interactions

- **GIVEN** the form is displayed
- **WHEN** I select "Male" from the Gender dropdown
- **THEN** the Gender dropdown shows "Male"
- **WHEN** I select "Class 2" from the Class dropdown
- **THEN** The Class dropdown shows "Class 2"

#### Scenario: Form submission

- **GIVEN** the form is displayed
- **WHEN** I click the Search button
- **THEN** the form submits without error

### Requirement: Footer branding

The footer SHALL display "More templates at Component Dock" with a link to https://www.componentdock.com/ that opens in a new tab.

#### Scenario: Footer link present

- **GIVEN** the page loads
- **WHEN** I scroll to the footer
- **THEN** a link to componentdock.com is visible with target="_blank"

### Requirement: Design fidelity

The template SHALL use Roboto font (Google Fonts), a vibrant red (#fa4251) page background, white card, bottom-border-only inputs (#e5e5e5), green (#57b846) submit button with 3px border-radius, and placeholder images from picsum.photos (seeded).

#### Scenario: Design tokens applied

- **GIVEN** the page loads
- **WHEN** I inspect the page
- **THEN** the background color is red (#fa4251)
- **AND** the form card has a white background with rounded corners and shadow
- **AND** inputs have bottom borders only
