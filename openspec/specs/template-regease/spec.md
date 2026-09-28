# Spec: Regease — Gaming Email Signup Form

## Purpose

Regease is a free gaming-themed email signup form template that recreates ColorLib "Colorlib Reg Form V9" (https://colorlib.com/wp/template/colorlib-regform-9/) as a React 19 + Tailwind CSS 4 + TypeScript application. The form features a full-page gaming background, a semi-transparent gold/brown signup card on the right, and white text with Poppins typography. It offers a discount incentive for pre-ordering a game title.

## Design Tokens

| Token           | Value                                               | Notes                       |
| --------------- | --------------------------------------------------- | --------------------------- |
| Background      | Full-page image (picsum.photos seeded)              | Gaming/tech theme           |
| Container       | Semi-transparent overlay, max-width 1123px          | Centered with margins       |
| Card background | `rgba(177, 135, 77, 0.75)` (#b1874d at 75%)         | Gold/brown translucent      |
| Text color      | White (#fff)                                        | All text                    |
| Font family     | Poppins (Google Fonts)                              | Weights: 400, 600, 700      |
| Input border    | Bottom-only, 1px solid white                        | Transparent background      |
| Submit button   | White background, gold text (#b1874d), rounded 25px | Box shadow                  |
| Sign-in link    | White border 2px, rounded 25px, transparent bg      | Hover: white bg, gold text  |
| Heading         | 36px, bold, white, Poppins                          | "Sign up"                   |
| Description     | 14px, white, Poppins                                | With bold product name span |

## Requirements

### Requirement: Page layout and branding

Users SHALL see a full-page background image, a centered container with a semi-transparent overlay, and a signup card positioned on the right side of the container, with document title "Regease — Gaming Signup Form" and a Component Dock footer link.

#### Scenario: Page loads with correct title and layout

- WHEN I visit the Regease page
- THEN I should see "Regease — Gaming Signup Form" in the document title
- AND I should see a full-page background image covering the viewport
- AND I should see a centered container with max-width

#### Scenario: Footer links to Component Dock

- WHEN I visit the Regease page
- THEN I should see a link to "https://www.componentdock.com/"
- AND the link should open in a new tab
- AND the link text should contain "Component Dock"

### Requirement: Signup card displays on the right

Users SHALL see a signup card with a semi-transparent gold/brown background positioned on the right side of the container.

#### Scenario: Card is positioned on the right

- WHEN I visit the Regease page
- THEN I should see a signup card
- AND the card should be positioned on the right side

#### Scenario: Card has gold/brown background

- WHEN I visit the Regease page
- THEN the signup card should have a semi-transparent gold/brown background

### Requirement: Form displays all required fields

Users SHALL see a "Sign up" heading, a description about discount, name input, email input, password input with show/hide toggle, terms checkbox, and "Sign up" submit button plus "Sign in" link.

#### Scenario: Form displays heading and description

- WHEN I visit the Regease page
- THEN I should see a "Sign up" heading
- AND I should see a description mentioning discount and a game title

#### Scenario: Form displays all input fields

- WHEN I visit the Regease page
- THEN I should see a name input with placeholder "Your Name"
- AND I should see an email input with placeholder "Email"
- AND I should see a password input with placeholder "Password"
- AND I should see a terms checkbox
- AND I should see a "Sign up" submit button
- AND I should see a "Sign in" link

### Requirement: Password visibility toggle

Users SHALL be able to toggle password visibility using an eye icon button.

#### Scenario: Password starts hidden

- WHEN I visit the Regease page
- THEN the password input should have type "password"

#### Scenario: Clicking toggle shows password

- WHEN I click the password toggle button
- THEN the password input should have type "text"

#### Scenario: Clicking toggle again hides password

- WHEN I click the password toggle button twice
- THEN the password input should have type "password"

### Requirement: Form accepts user input

Users SHALL be able to type in all form fields and toggle the terms checkbox.

#### Scenario: Form accepts text input

- WHEN I type "Jane Doe" in the name field
- THEN the name field should contain "Jane Doe"

#### Scenario: Form accepts email input

- WHEN I type "jane@example.com" in the email field
- THEN the email field should contain "jane@example.com"

#### Scenario: Terms checkbox toggles

- WHEN I click the terms checkbox
- THEN the checkbox should be checked
- WHEN I click the terms checkbox again
- THEN the checkbox should be unchecked

### Requirement: Responsive layout

Users SHALL see a properly formatted layout on both desktop and mobile devices.

#### Scenario: Mobile layout

- WHEN I view on a mobile viewport
- THEN the card should take full width
- AND the submit button should be full width
