# Spec: Formmint

> Recreation of ColorLib **Contact Form V10**
> (https://colorlib.com/wp/template/contact-form-v10/)
> Preview: https://colorlib.com/etc/cf/ContactFrom_v10/index.html

## Purpose

A minimal, single-column contact form template with a centered pill-shaped form
on a light gray background. Uses Ubuntu font, purple/indigo accent palette, and
rounded pill inputs with a focus-expansion animation. The form collects Full
Name, E-mail, Phone, and Message, with a purple "Send" button centered below.

## Design Tokens

Extracted from the ColorLib preview CSS (`main.css`):

| Token              | Value                    | Notes                                     |
| ------------------ | ------------------------ | ----------------------------------------- |
| Page background    | `#f2f2f2`                | Light gray, full viewport                 |
| Form title color   | `#403866`                | Dark indigo/purple, uppercase             |
| Button background  | `#827ffe`                | Bright purple/indigo (pseudo-element)     |
| Button hover       | `#403866`                | Dark indigo on hover, expands 20px wider  |
| Input text color   | `#8f8fa1`                | Medium gray                               |
| Placeholder color  | `#bdbdd3`                | Light purple-gray                         |
| Error color        | `#c80000`                | Red (validation tooltips)                 |
| Font family        | `Ubuntu`, sans-serif      | Google Font, Ubuntu-Bold weight           |
| Input border-radius| `31px`                   | Pill-shaped, rounded                      |
| Button border-radius| `31px`                  | Pill-shaped, matches inputs               |
| Input height       | `62px` (text inputs)     | 62px for text, min-height 169px textarea  |
| Input padding      | `0 35px`                 | Horizontal padding                        |
| Focus effect       | `calc(100% + 20px)`      | Input pseudo-element expands 10px wider   |
| Button text        | uppercase, white `#fff`  | Font-size 16px                            |
| Form width         | `550px`                  | Centered in viewport                      |
| Form title font    | 30px, uppercase          | Dark purple heading                       |
| Error tooltip      | 14px border-radius, white bg, red border | Positioned right of input |

## Requirements

### Requirement: Page renders centered contact form

Users SHALL see a centered contact form with a title and four fields on a light
gray background.

#### Scenario: Form visible on load

- **WHEN** the app loads
- **THEN** a form with title "Send Us A Message" is visible
- **AND** the page background is light gray (#f2f2f2)

### Requirement: Form fields present

Users SHALL see Full Name, E-mail, Phone, and Message fields.

#### Scenario: All input fields exist

- **WHEN** the app loads
- **THEN** a text input with placeholder "Full Name" exists
- **AND** a text input with placeholder "E-mail" exists
- **AND** a text input with placeholder "Phone" exists
- **AND** a textarea with placeholder "Your Message" exists

### Requirement: User can type into all fields

Users SHALL be able to type text into every form field.

#### Scenario: Typing in all fields

- **WHEN** the user types "John Doe" into the name field
- **AND** types "john@example.com" into the email field
- **AND** types "555-1234" into the phone field
- **AND** types "Hello there" into the message textarea
- **THEN** all four fields contain the typed text

### Requirement: Send button present and styled

Users SHALL see a purple "Send" button centered below the form fields.

#### Scenario: Send button visible

- **WHEN** the app loads
- **THEN** a button labeled "Send" is visible
- **AND** the button has a purple background (#827ffe)
- **AND** the button text is white and uppercase

#### Scenario: Button hover effect

- **WHEN** the user hovers over the Send button
- **THEN** the button background changes to dark indigo (#403866)

### Requirement: Input focus expansion effect

Inputs SHALL visually expand slightly when focused, matching the original
ColorLib animation behavior.

#### Scenario: Input expands on focus

- **WHEN** the user clicks on a form input
- **THEN** the input visually widens by approximately 10px on each side

### Requirement: Form has pill-shaped inputs

All inputs and the button SHALL have fully rounded (pill) borders (31px
border-radius).

#### Scenario: Pill shape visible

- **WHEN** the app loads
- **THEN** each input field has a rounded pill shape
- **AND** the Send button has a rounded pill shape

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer link present

- **WHEN** the app loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

## Verification Checklist

- [ ] Page loads with `#f2f2f2` gray background, form centered at ~550px width
- [ ] Title "Send Us A Message" renders in uppercase, dark indigo (#403866)
- [ ] Ubuntu font loaded via Google Fonts link
- [ ] Four inputs: Full Name, E-mail, Phone, Your Message (textarea)
- [ ] All inputs have pill shape (border-radius: 31px), white background
- [ ] Placeholder text color is `#bdbdd3`
- [ ] Input text color is `#8f8fa1`
- [ ] Send button: purple (#827ffe), white text, uppercase, pill shape
- [ ] Button hover: dark indigo (#403866), expands 20px wider
- [ ] Input focus: pseudo-element expands 10px wider (animation)
- [ ] Footer contains "Component Dock" link to componentdock.com
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
