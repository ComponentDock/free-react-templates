# Template: DialogBox (Login/Registration Modal Form)

## Purpose

Recreation of ColorLib **Modal 05** — a simple and modern free login registration
modal form template with social media icons and responsive layout.

- **Source:** https://colorlib.com/wp/template/modal-05/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-05/
- **Category:** Bootstrap Modal Templates (Login/Registration)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Design basis:** Bootstrap 4 modal with Poppins font, pill-shaped buttons,
  centered modal dialog, social auth icons.

## Design Tokens

| Token                | Value                      | Notes                                              |
| -------------------- | -------------------------- | -------------------------------------------------- |
| Brand color          | `#3e64ff`                  | Primary blue — buttons, hover states, link hover   |
| Background (page)    | `#ffffff`                  | White                                              |
| Background (modal)   | `#ffffff`                  | White, no border, subtle shadow                    |
| Text primary         | `rgba(0, 0, 0, 0.8)`      | Near-black for body text                           |
| Text secondary       | `rgba(0, 0, 0, 0.3)`      | Muted for labels, forgot link                      |
| Font family          | Poppins (Google Fonts)     | Weights 300–900                                    |
| Button border-radius | `40px` (pill)              | Rounded pill shape                                 |
| Button padding       | `py-3 px-4` (12px 16px)   | Generous padding                                   |
| Input height         | `52px`                     | Tall form inputs                                   |
| Input border-radius  | `5px`                      | Slight rounding                                    |
| Social icon size     | `50px × 50px`              | Circular with border                               |
| Social icon hover    | `#3e64ff`                  | Brand blue                                         |
| Modal shadow         | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Subtle drop shadow                |
| Modal max-width      | `450px`                    | Compact centered dialog                            |

## Visual Design (from screenshot)

The screenshot shows a clean white full-page layout with centered content.
The left side displays "Modal 05" heading with a blue rounded "Launch Modal 05"
button. When the modal opens, it appears centered with:
- Close button (X) top-right corner
- "Create Your Account" heading centered
- Three social login icons (Twitter, Facebook, Instagram) as circles
- Full Name input field
- Email Address input field
- Password input field
- Blue rounded "Sign Up" submit button
- "I'm already a member" link at the bottom

Overall aesthetic: minimal, modern, clean white with blue accent color.

## Gherkin Requirements

### Feature: DialogBox — Login/Registration Modal Form

  Background:
    Given the page loads
    Then the background is white
    And the primary font is Poppins

  Scenario: Page displays heading and launch button
    Given the page is loaded
    Then I see "Create Your Account" or similar heading
    And I see a blue rounded "Launch Modal" button

  Scenario: Launch button opens modal
    Given the page is loaded
    When I click the "Launch Modal" button
    Then a centered modal dialog appears
    And the modal has a subtle shadow
    And the modal has a white background

  Scenario: Modal displays close button
    Given the modal is open
    Then I see a close button (X) in the top-right corner
    When I click the close button
    Then the modal closes

  Scenario: Modal displays social login icons
    Given the modal is open
    Then I see three social icons (Twitter, Facebook, Instagram)
    And the icons are circular with a light border
    And hovering an icon turns it blue (#3e64ff)

  Scenario: Modal displays registration form
    Given the modal is open
    Then I see a "Full Name" input field
    And I see an "Email Address" input field
    And I see a "Password" input field
    And I see a "Sign Up" submit button

  Scenario: Form inputs have correct styling
    Given the modal is open
    Then the inputs are 52px tall
    And the inputs have 5px border-radius
    And the labels are uppercase and muted (#rgba(0,0,0,0.3))

  Scenario: Submit button is styled as pill
    Given the modal is open
    Then the "Sign Up" button is blue (#3e64ff)
    And the button has a pill shape (border-radius: 40px)
    And the button text is white

  Scenario: "I'm already a member" link
    Given the modal is open
    Then I see an "I'm already a member" link
    And the link is underlined and muted
    And clicking the link closes or navigates away from the modal

  Scenario: Modal is responsive
    Given the modal is open on a mobile viewport
    Then the modal content fits within the screen
    And the form fields are full-width
    And the social icons remain visible

## Verification Checklist

- [ ] Poppins font loaded via Google Fonts in index.html
- [ ] Brand color #3e64ff used for buttons and hover states
- [ ] Modal opens centered with shadow on button click
- [ ] Close button (X) dismisses the modal
- [ ] Social icons (Twitter, Facebook, Instagram) displayed as circles
- [ ] Social icons hover to brand blue
- [ ] Form has Full Name, Email, Password fields
- [ ] Input height is 52px with 5px border-radius
- [ ] Labels are uppercase, muted color
- [ ] Submit button is pill-shaped (40px radius), blue background
- [ ] "I'm already a member" link is underlined and muted
- [ ] Modal max-width is 450px
- [ ] Responsive layout works on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Package name: @free-react-templates/dialogbox
- [ ] CNAME: dialogbox.free.componentdock.com
