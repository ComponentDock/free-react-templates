# Spec: Regvale — Registration Form Template

## Purpose

Recreation of ColorLib Regform 36
(https://colorlib.com/wp/template/colorlib-regform-36/) as a React 19 +
Tailwind CSS 4 registration form template. Preview was unavailable at time of
implementation; screenshot used as primary reference.

## Design Tokens

| Token              | Value     | Notes                               |
| ------------------ | --------- | ----------------------------------- |
| Brand color        | `#463ACC` | Dark purple-blue (card right panel) |
| Page background    | `#EDF2FC` | Light blue-gray                     |
| Card background    | `#FFFFFF` | White                               |
| Text primary       | `#333333` | Dark gray                           |
| Text secondary     | `#777777` | Medium gray                         |
| Input border       | `#DDDDDD` | Light gray                          |
| Input focus border | `#463ACC` | Brand color on focus                |
| Button background  | `#463ACC` | Brand color                         |
| Button hover       | `#3A2FB5` | Darker brand                        |
| Font family        | `Poppins` | Google Fonts, sans-serif            |

## Requirements

### Requirement: Page renders with registration form

Users SHALL see a centered registration card with a heading and subtitle.

#### Scenario: Heading and subtitle visible

- WHEN I visit the Regvale page
- THEN I see a heading "Create Account"
- AND I see a subtitle about creating an account

### Requirement: Form fields present

Users SHALL see all required registration form fields.

#### Scenario: All fields visible

- WHEN I visit the Regvale page
- THEN I see input fields for "First Name", "Last Name", "Email", "Password", "Confirm Password"
- AND I see a "Register" button

### Requirement: First and Last Name side by side

Users SHALL see First Name and Last Name inputs on the same row.

#### Scenario: Name fields in a row

- WHEN I visit the Regvale page
- THEN the "First Name" and "Last Name" inputs are on the same row

### Requirement: Form submission

Users SHALL be able to submit the registration form.

#### Scenario: Form submits without error

- WHEN I visit the Regvale page
- AND I fill in all required fields
- AND I click "Register"
- THEN the form submits without error

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to Component Dock.

#### Scenario: Footer link present

- WHEN I visit the Regvale page
- THEN I see a footer link to "https://www.componentdock.com/"

### Requirement: Side image visible on desktop

Users SHALL see an image on the right side of the card on desktop screens.

#### Scenario: Image visible

- WHEN I visit the Regvale page
- THEN I see an image on the right side of the card
