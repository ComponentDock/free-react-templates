# Spec: Regvox

## Purpose

Regvox is a free member registration form template recreating ColorLib "Colorlib Reg Form V17"
(https://colorlib.com/wp/template/colorlib-regform-17/). It features a centered white card on a
light gray background, a two-column layout with a hero image on the left and a registration form
on the right. The form includes First Name, Last Name, Username, Email Address, Gender (select),
Password, and Confirm Password fields with underline-style borders and inline icons, plus a dark
Register button. Preview was unreachable (404); design derived from the TEMPLATES.md screenshot.

## Design tokens

- **Background**: Light gray `#e0e0e0` → `bg-[#e0e0e0]`
- **Card**: White `#ffffff` → `bg-white`
- **Card shadow**: Soft drop shadow → `shadow-lg`
- **Card border-radius**: Small rounding → `rounded-md`
- **Text (heading)**: Dark `#333` → `text-[#333]`
- **Text (labels/placeholders)**: Medium gray `#666` → `text-[#666]`
- **Input bottom border**: Light gray `#ddd` → `border-b border-[#ddd]`
- **Button background**: Dark `#333` → `bg-[#333]`
- **Button text**: White → `text-white`
- **Button border-radius**: Small → `rounded`
- **Button hover**: Darker `#222` → `hover:bg-[#222]`
- **Font family**: Poppins (Google Fonts) → `font-[Poppins]`
- **Icons**: Gray `#999` → `text-[#999]`

## Requirements

### Requirement: Page layout

The page SHALL render a full-viewport light gray (#e0e0e0) background with a single centered white card.

#### Scenario: Card is centered on the gray background

- **WHEN** I visit the Regvox page
- **THEN** I see a white card centered horizontally and vertically on a light gray background
- **AND** the card has rounded corners and a drop shadow

### Requirement: Two-column card layout

The card SHALL display a two-column flex layout: hero image on the left (approximately 40% width) and the registration form on the right (approximately 60% width).

#### Scenario: Two columns are visible

- **WHEN** I visit the Regvox page
- **THEN** I see an image section on the left side of the card
- **AND** I see a form section on the right side of the card

### Requirement: Hero image

The left column SHALL display a hero image (fashion/lifestyle photo) with a text overlay reading "#Collection 2018" in white italic text positioned at the bottom-left of the image.

#### Scenario: Hero image with overlay text is visible

- **WHEN** I visit the Regvox page
- **THEN** I see a hero image filling the left column
- **AND** I see "#Collection 2018" text overlay on the image in white italic

### Requirement: Registration form heading

The right column SHALL display the heading "REGISTRATION FORM" in bold uppercase text above the form fields.

#### Scenario: Heading is visible

- **WHEN** I visit the Regvox page
- **THEN** I see a heading with text "REGISTRATION FORM"
- **AND** the heading is in uppercase and bold

### Requirement: Form fields

The form SHALL contain seven fields: First Name (text input), Last Name (text input), Username (text input with user icon), Email Address (email input with mail icon), Gender (select dropdown), Password (password input with lock icon), and Confirm Password (password input with lock icon).

#### Scenario: All seven fields are rendered

- **WHEN** I visit the Regvox page
- **THEN** I see a text input labeled "First Name"
- **AND** I see a text input labeled "Last Name"
- **AND** I see a text input labeled "Username"
- **AND** I see an email input labeled "Email Address"
- **AND** I see a select element labeled "Gender"
- **AND** I see a password input labeled "Password"
- **AND** I see a password input labeled "Confirm Password"

#### Scenario: First Name and Last Name are side by side

- **WHEN** I visit the Regvox page
- **THEN** the First Name and Last Name fields appear in a single row, side by side

#### Scenario: Fields have underline-style borders

- **WHEN** I visit the Regvox page
- **THEN** each form field has a bottom border only (no full border box)

#### Scenario: Fields have inline icons

- **WHEN** I visit the Regvox page
- **THEN** the Username field shows a user icon on the right
- **AND** the Email Address field shows a mail icon on the right
- **AND** the Password and Confirm Password fields show lock icons on the right

### Requirement: Register button

The form SHALL contain a dark Register button with white text and an arrow icon, positioned below the form fields.

#### Scenario: Register button is visible and styled

- **WHEN** I visit the Regvox page
- **THEN** I see a "Register" button with a dark background and white text
- **AND** the button has an arrow icon (→) after the text

#### Scenario: Submitting the form shows a success message

- **WHEN** I click the Register button with valid form data
- **THEN** I see a "Registration successful" message
- **AND** the form fields are no longer visible

### Requirement: Dark mode toggle

The navbar SHALL include a dark-mode toggle button.

#### Scenario: Toggling dark mode changes the background

- **WHEN** I click the "Dark mode" button in the navbar
- **THEN** the document root receives the "dark" class
- **AND** the button label changes to "Light mode"

#### Scenario: Dark class is removed on unmount

- **WHEN** I enable dark mode and then unmount the navbar
- **THEN** the "dark" class is removed from the document root

### Requirement: Footer with Component Dock link

The page SHALL display a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present and opens externally

- **WHEN** I visit the Regvox page
- **THEN** I see a footer with a link to "Component Dock"
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Document title

The page SHALL set the document title to "Regvox — Registration Form Template".

#### Scenario: Title is set on mount

- **WHEN** I visit the Regvox page
- **THEN** the document title is "Regvox — Registration Form Template"
