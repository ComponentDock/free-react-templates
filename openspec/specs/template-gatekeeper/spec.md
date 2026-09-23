# Template: Gatekeeper (Login Form)

## Purpose

Recreation of ColorLib's **Login Form V18** (slug: `login-form-18`).

- **ColorLib source**: https://colorlib.com/wp/template/login-form-18/
- **Live preview**: https://preview.colorlib.com/theme/bootstrap/login-form-18/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css` + Bootstrap 4.3.1):

| Token                | Value                                         | Notes                                                                      |
| -------------------- | --------------------------------------------- | -------------------------------------------------------------------------- |
| Font family          | `"Lato", Arial, sans-serif`                   | Google Fonts Lato                                                          |
| Brand color          | `#8d448b`                                     | Purple/magenta — used on icon bg, headings, links, button, checkbox accent |
| Background           | `#f8f9fd`                                     | Light blue-gray page background                                            |
| Card background      | `#fff`                                        | White login card                                                           |
| Card border-radius   | `10px`                                        | Rounded card corners                                                       |
| Card shadow          | `0px 10px 34px -15px rgba(0,0,0,0.24)`        | Subtle drop shadow                                                         |
| Icon circle          | `80×80px`, bg `#8d448b`, `border-radius: 50%` | Centered user icon (FontAwesome fa-user-o)                                 |
| Icon color           | `#fff`                                        | White icon on purple circle                                                |
| Heading color        | `#8d448b`                                     | "Have an account?" subheading                                              |
| Form field bg        | `rgba(0,0,0,0.05)`                            | Very light gray                                                            |
| Form field height    | `48px`                                        | Consistent input height                                                    |
| Form field radius    | Transparent / default                         | Rounded-left class from Bootstrap                                          |
| Placeholder color    | `rgba(0,0,0,0.2)`                             | Faint placeholder text                                                     |
| Button border-radius | `40px`                                        | Fully rounded pill shape                                                   |
| Button bg            | `#8d448b`                                     | Purple                                                                     |
| Button text          | `#fff`                                        | White                                                                      |
| Button hover         | Transparent bg, purple border, purple text    | Outline-style hover                                                        |
| Checkbox accent      | `#8d448b`                                     | Purple when checked                                                        |
| Body text color      | `gray`                                        | Default text                                                               |
| Headings color       | `#000`                                        | Black headings                                                             |
| Body font-size       | `16px`                                        | Standard                                                                   |
| Body line-height     | `1.8`                                         | Generous                                                                   |

## Visual Design (from screenshot + preview DOM)

Single-page centered login card on a soft blue-gray background (#f8f9fd). A white rounded card (10px radius) with a subtle box-shadow contains:

1. Centered purple circle icon (user outline icon)
2. "Have an account?" subheading in purple
3. Username input field (light gray bg)
4. Password input field (light gray bg)
5. "Remember Me" checkbox + "Forgot Password" link row
6. Full-width "Get Started" pill button (purple, rounded 40px)

Above the card: centered "Login 08" heading in black.

Layout: Bootstrap grid, centered col-md-6 col-lg-5. Single section, no navbar, no footer.

## Requirements

### Requirement: Page renders the login card centered on the viewport

The login card SHALL be displayed centered horizontally and vertically on the page, with a white background, rounded corners (10px), and a subtle box-shadow.

#### Scenario: Login card is centered

- **GIVEN** the user navigates to the Gatekeeper login page
- **THEN** a single login card is displayed centered horizontally
- **AND** the card has a white background with rounded corners and a box-shadow

### Requirement: Heading section displays above the card

The page heading SHALL display above the login card, centered, in black text.

#### Scenario: Heading is visible

- **GIVEN** the login page has loaded
- **THEN** the heading "Login #08" is visible above the card
- **AND** the heading is centered and styled in black

### Requirement: Icon circle is displayed inside the card

An 80px purple circle with a white user icon SHALL be centered at the top of the login card.

#### Scenario: Purple icon circle renders

- **GIVEN** the login card is visible
- **THEN** a circular purple icon container (80px diameter, brand color background) is displayed
- **AND** the icon inside is white

### Requirement: Subheading is displayed below the icon

The subheading "Have an account?" SHALL be displayed below the icon in purple, centered.

#### Scenario: Subheading is purple and centered

- **GIVEN** the login card is visible
- **THEN** the subheading "Have an account?" is displayed below the icon
- **AND** the subheading text color is purple (brand color)
- **AND** the subheading is centered

### Requirement: Username input field accepts text

A username input field SHALL be displayed with placeholder "Username" and a light gray background.

#### Scenario: Username field renders

- **GIVEN** the login card is visible
- **THEN** a username input field is displayed with placeholder "Username"
- **AND** the input field has a light gray background
- **AND** the input field has a height of approximately 48px

### Requirement: Password input field accepts text

A password input field SHALL be displayed with placeholder "Password" and masks input characters.

#### Scenario: Password field renders

- **GIVEN** the login card is visible
- **THEN** a password input field is displayed with placeholder "Password"
- **AND** the password field masks input characters
- **AND** the input field has a light gray background

### Requirement: Remember Me checkbox is interactive

A "Remember Me" checkbox SHALL be displayed and toggle between checked/unchecked states.

#### Scenario: Checkbox toggles

- **GIVEN** the login card is visible
- **THEN** a "Remember Me" checkbox is displayed
- **AND** when checked, the checkbox shows a purple checkmark
- **AND** when unchecked, the checkbox shows an empty state

### Requirement: Forgot Password link is displayed

A "Forgot Password" link SHALL be displayed to the right of the checkbox row in purple.

#### Scenario: Link renders

- **GIVEN** the login card is visible
- **THEN** a "Forgot Password" link is displayed to the right of the checkbox row
- **AND** the link text color is purple (brand color)
- **AND** the link has a hover transition effect

### Requirement: Submit button has pill shape and purple styling

A "Get Started" button SHALL be displayed as a full-width pill shape with purple background.

#### Scenario: Button renders

- **GIVEN** the login card is visible
- **THEN** a "Get Started" button is displayed below the form fields
- **AND** the button has a fully rounded shape (border-radius: 40px)
- **AND** the button background is purple (brand color)
- **AND** the button text is white

#### Scenario: Button hover inverts colors

- **GIVEN** the login card is visible
- **WHEN** the user hovers over the "Get Started" button
- **THEN** the button background becomes transparent
- **AND** the button border becomes purple
- **AND** the button text becomes purple

### Requirement: Page background is soft blue-gray

The page background SHALL be a soft blue-gray color (#f8f9fd).

#### Scenario: Background color renders

- **GIVEN** the user navigates to the Gatekeeper login page
- **THEN** the page background color is soft blue-gray

### Requirement: Form fields have focus state

Form input fields SHALL show a slightly darker background on focus with no visible outline.

#### Scenario: Focus state applies

- **GIVEN** the login card is visible
- **WHEN** the user focuses on a form input field
- **THEN** the field background slightly darkens
- **AND** no outline or border appears on focus

### Requirement: Responsive layout on mobile

The login card SHALL span nearly the full width on mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the user views the page on a viewport width less than 768px
- **THEN** the login card spans nearly the full width
- **AND** the card padding is reduced
- **AND** all form elements remain accessible

### Requirement: Accessibility - form fields have labels

All form fields SHALL have accessible labels (visible or aria-label).

#### Scenario: Labels are present

- **GIVEN** the login card is visible
- **THEN** the username field has an accessible label
- **AND** the password field has an accessible label
- **AND** the checkbox has an accessible label

### Requirement: Footer links to Component Dock

A footer or attribution link to "https://www.componentdock.com/" SHALL be present.

#### Scenario: Footer link renders

- **GIVEN** the user navigates to the Gatekeeper login page
- **THEN** a footer or attribution link to "https://www.componentdock.com/" is present
