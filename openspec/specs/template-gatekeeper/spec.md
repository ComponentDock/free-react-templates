# Template: Gatekeeper (Login Form)

## Purpose

Recreation of ColorLib's **Login Form V18** (slug: `login-form-18`).

- **ColorLib source**: https://colorlib.com/wp/template/login-form-18/
- **Live preview**: https://preview.colorlib.com/theme/bootstrap/login-form-18/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css` + Bootstrap 4.3.1):

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Lato", Arial, sans-serif` | Google Fonts Lato |
| Brand color | `#8d448b` | Purple/magenta — used on icon bg, headings, links, button, checkbox accent |
| Background | `#f8f9fd` | Light blue-gray page background |
| Card background | `#fff` | White login card |
| Card border-radius | `10px` | Rounded card corners |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Subtle drop shadow |
| Icon circle | `80×80px`, bg `#8d448b`, `border-radius: 50%` | Centered user icon (FontAwesome fa-user-o) |
| Icon color | `#fff` | White icon on purple circle |
| Heading color | `#8d448b` | "Have an account?" subheading |
| Form field bg | `rgba(0,0,0,0.05)` | Very light gray |
| Form field height | `48px` | Consistent input height |
| Form field radius | Transparent / default | Rounded-left class from Bootstrap |
| Placeholder color | `rgba(0,0,0,0.2)` | Faint placeholder text |
| Button border-radius | `40px` | Fully rounded pill shape |
| Button bg | `#8d448b` | Purple |
| Button text | `#fff` | White |
| Button hover | Transparent bg, purple border, purple text | Outline-style hover |
| Checkbox accent | `#8d448b` | Purple when checked |
| Body text color | `gray` | Default text |
| Headings color | `#000` | Black headings |
| Body font-size | `16px` | Standard |
| Body line-height | `1.8` | Generous |

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

## Requirements (Gherkin)

### Scenario: Page renders the login card centered on the viewport
  Given the user navigates to the Gatekeeper login page
  Then a single login card is displayed centered horizontally
  And the card has a white background with rounded corners and a box-shadow

### Scenario: Heading section displays above the card
  Given the login page has loaded
  Then the heading "Login #08" (or equivalent "Sign In") is visible above the card
  And the heading is centered and styled in black

### Scenario: Icon circle is displayed inside the card
  Given the login card is visible
  Then a circular purple icon container (80px diameter, #8d448b background) is displayed
  And the icon inside is white

### Scenario: Subheading is displayed below the icon
  Given the login card is visible
  Then the subheading "Have an account?" is displayed below the icon
  And the subheading text color is purple (#8d448b)
  And the subheading is centered

### Scenario: Username input field accepts text
  Given the login card is visible
  Then a username input field is displayed with placeholder "Username"
  And the input field has a light gray background (rgba(0,0,0,0.05))
  And the input field has a height of approximately 48px

### Scenario: Password input field accepts text
  Given the login card is visible
  Then a password input field is displayed with placeholder "Password"
  And the password field masks input characters
  And the input field has a light gray background (rgba(0,0,0,0.05))

### Scenario: Remember Me checkbox is interactive
  Given the login card is visible
  Then a "Remember Me" checkbox is displayed
  And when checked, the checkbox shows a purple (#8d448b) checkmark
  And when unchecked, the checkbox shows an empty state

### Scenario: Forgot Password link is displayed
  Given the login card is visible
  Then a "Forgot Password" link is displayed to the right of the checkbox row
  And the link text color is purple (#8d448b)
  And the link has a hover transition effect

### Scenario: Submit button has pill shape and purple styling
  Given the login card is visible
  Then a "Get Started" button is displayed below the form fields
  And the button has a fully rounded shape (border-radius: 40px)
  And the button background is purple (#8d448b)
  And the button text is white

### Scenario: Button hover effect inverts colors
  Given the login card is visible
  When the user hovers over the "Get Started" button
  Then the button background becomes transparent
  And the button border becomes purple (#8d448b)
  And the button text becomes purple (#8d448b)

### Scenario: Page background is soft blue-gray
  Given the user navigates to the Gatekeeper login page
  Then the page background color is #f8f9fd (soft blue-gray)

### Scenario: Form fields have focus state
  Given the login card is visible
  When the user focuses on a form input field
  Then the field background slightly darkens (rgba(0,0,0,0.07))
  And no outline or border appears on focus

### Scenario: Responsive layout on mobile
  Given the user views the page on a viewport width less than 768px
  Then the login card spans nearly the full width
  And the card padding is reduced
  And all form elements remain accessible

### Scenario: Accessibility - form fields have labels
  Given the login card is visible
  Then the username field has an accessible label (visible or aria-label)
  And the password field has an accessible label (visible or aria-label)
  And the checkbox has an accessible label

### Scenario: Footer links to Component Dock
  Given the user navigates to the Gatekeeper login page
  Then a footer or attribution link to "https://www.componentdock.com/" is present
