# Template: JoinPulse (Registration Form)

## Purpose

Recreation of ColorLib **Signup Form 10** (`https://colorlib.com/wp/template/signup-form-10/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-10/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a split-screen registration form template. The left half contains a
centered registration form (Name, Email, Password, Re-type Password, Terms
checkbox, Register button). A "— or —" divider separates the form from social
login buttons (Facebook, Twitter, Google) on the left side. The right half is
empty/white space on desktop, making this a left-aligned form layout. On
mobile, the social login and divider stack above the form.

## Design Tokens

Extracted from `css/style.css` (preview) and the template HTML:

| Token                    | Value                                    | Notes                                           |
| ------------------------ | ---------------------------------------- | ----------------------------------------------- |
| brand-primary            | `#38d39f`                                | Teal/mint green — button background, links       |
| brand-primary-hover      | `#29bb8a`                                | Button hover state                              |
| brand-primary-focus-ring | `rgba(53,185,141,0.5)`                   | Focus box-shadow on buttons                     |
| text-body                | `#212529`                                | Default body text                               |
| text-muted               | `#b3b3b3`                                | Labels, paragraph subtext                       |
| text-placeholder         | `#6c757d`                                | Input placeholder text                          |
| text-link                | `#888`                                   | Link color in form area (forgot pass, terms)    |
| text-input               | `#495057`                                | Form input text color                           |
| border-input-bottom      | `#ccc`                                   | Bottom border on form inputs                    |
| border-form-control      | `#ced4da`                                | Default form control border                     |
| bg-page                  | `#ffffff`                                | Body/contents background                        |
| bg-form-block            | `#ffffff`                                | Form card background                            |
| form-block-shadow        | `0 2px 3px 0 rgba(0,0,0,0.1)`           | Subtle shadow on form block                     |
| form-group-radius        | `7px` (first/last group)                 | Rounded corners on top of first, bottom of last|
| checkbox-accent          | `#38d39f`                                | Checkbox fill color (teal, matches brand)       |
| social-facebook          | `#3b5998`                                | Facebook button background                     |
| social-facebook-hover    | `#344e86`                                | Facebook button hover                           |
| social-twitter           | `#1da1f2`                                | Twitter button background                      |
| social-twitter-hover     | `#0d95e8`                                | Twitter button hover                            |
| social-google            | `#ea4335`                                | Google button background                       |
| social-google-hover      | `#e82e1e`                                | Google button hover                             |
| button-radius            | `30px` (pill)                            | `.btn-pill` — fully rounded Register button     |
| button-font-size         | default (1rem)                           | Standard button text                            |
| input-font-size          | `20px`                                   | Form input text size                            |
| label-font-size          | `12px`                                   | Floating labels                                 |
| forgot-font-size         | `14px`                                   | "Sign In" link                                  |
| control-font-size        | `14px`                                   | Checkbox/label text                             |
| heading-font             | Roboto (Google Fonts, weights 300–600)   | Loaded via `@font-face` / Google Fonts link     |
| body-font                | Roboto, sans-serif                       | System fallback stack                           |

### Font

- **Google Font:** Roboto, weights 300, 400, 500, 600
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from preview HTML)

1. **Page Content** (`.content`)
   - Full-width container with `padding: 7rem 0`
   - White background

2. **Container + Row** (`.cl-container > .cl-row`)
   - Bootstrap-like grid: 12-column flexbox layout
   - Three columns on desktop: col-lg-5 (social), col-lg-2 (divider), col-lg-5 (form)

3. **Left Column — Social Login** (`.cl-col-lg-5`)
   - "Or register with" text: centered, muted (`#b3b3b3`)
   - Three full-width social login buttons stacked vertically:
     - Facebook: `#3b5998` background, white Facebook icon
     - Twitter: `#1da1f2` background, white Twitter icon
     - Google: `#ea4335` background, white Google icon

4. **Center Column — Divider** (`.cl-col-lg-2`)
   - "— or —" text, centered, vertical center on desktop

5. **Right Column — Form** (`.cl-col-lg-5.contents`)
   - **Form Block** (`.form-block`): white background, 30px padding, subtle shadow
   - **Heading:** `<h3>Register</h3>` — Roboto, 1.75rem, weight 500, teal `#38d39f`
   - **Subtext:** `<p>Lorem ipsum dolor sit amet elit...</p>` — muted text
   - **Name Input:** Floating label, bottom-border-only style, transparent background
   - **Email Input:** Same floating label pattern
   - **Password Input:** Same floating label pattern
   - **Re-type Password Input:** Same floating label pattern
   - **Checkbox + Sign In:** "Terms and Conditions" checkbox (checked by default) + "Sign In" link aligned right
   - **Register Button:** Full-width, pill-shaped (`border-radius: 30px`), `#38d39f` background, white text

6. **Responsive:** On mobile (<992px), all columns stack vertically: social buttons first, divider, then form.

## Gherkin Scenarios

### Scenario: Page loads with centered form layout

- **GIVEN** the user visits the JoinPulse page
- **WHEN** the page finishes loading
- **THEN** a white page with centered content is visible
- **AND** the layout contains three columns on desktop (social, divider, form)
- **AND** the columns stack vertically on mobile

### Scenario: Social login buttons display correctly

- **GIVEN** the page is loaded
- **WHEN** the user views the social login area
- **THEN** the text "Or register with" is visible and centered
- **AND** three social login buttons are stacked vertically
- **AND** the Facebook button has a `#3b5998` background with a white Facebook icon
- **AND** the Twitter button has a `#1da1f2` background with a white Twitter icon
- **AND** the Google button has a `#ea4335` background with a white Google icon
- **AND** each social button spans the full width of its column

### Scenario: Divider displays between social and form

- **GIVEN** the page is loaded
- **WHEN** the user views the divider area
- **THEN** the text "— or —" is centered vertically and horizontally
- **AND** the divider is between the social login and form columns

### Scenario: Registration form displays correctly

- **GIVEN** the page is loaded
- **WHEN** the user views the form area
- **THEN** a white form block with subtle shadow is visible
- **AND** the heading "Register" is displayed in teal color
- **AND** a descriptive paragraph is displayed below the heading
- **AND** four input fields are visible: Name, Email, Password, Re-type Password

### Scenario: Floating labels animate on focus

- **GIVEN** the form is displayed
- **WHEN** the user clicks on the Name input
- **THEN** the "Name" label moves above the input field
- **AND** the input border is a bottom-border-only style
- **AND** the input has a transparent background

### Scenario: Terms checkbox interaction

- **GIVEN** the form is displayed
- **THEN** the "Terms and Conditions" checkbox is checked by default
- **WHEN** the user unchecks the checkbox
- **THEN** the checkbox indicator turns gray
- **WHEN** the user re-checks the checkbox
- **THEN** the checkbox indicator turns teal (#38d39f)

### Scenario: Sign In link is present

- **GIVEN** the form is displayed
- **WHEN** the user looks at the checkbox row
- **THEN** a "Sign In" link is visible aligned to the right
- **AND** the link color is `#888`

### Scenario: Register button is pill-shaped and full-width

- **GIVEN** the form is displayed
- **WHEN** the user views the Register button
- **THEN** the button spans the full width of the form
- **AND** the button has a teal (#38d39f) background
- **AND** the button has white text
- **AND** the button has a pill shape (border-radius: 30px)

### Scenario: Responsive layout stacks on mobile

- **GIVEN** the user views the template on a viewport under 992px
- **WHEN** the page renders
- **THEN** the social login buttons stack above the divider
- **AND** the divider stacks above the form
- **AND** the form block takes full width

### Scenario: Footer links to Component Dock

- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"

## Verification Checklist

- [ ] Split layout renders correctly (social | divider | form)
- [ ] Social buttons have correct brand colors (Facebook, Twitter, Google)
- [ ] "Or register with" text is centered above social buttons
- [ ] "— or —" divider is centered between columns
- [ ] "Register" heading is teal (#38d39f)
- [ ] Four form fields render: Name, Email, Password, Re-type Password
- [ ] Floating labels animate up on focus/filled
- [ ] Terms checkbox is checked by default
- [ ] "Sign In" link is present and aligned right
- [ ] Register button is pill-shaped and full-width teal
- [ ] Responsive: stacks on mobile (<992px)
- [ ] No references to ColorLib in app code
- [ ] Footer links to Component Dock
- [ ] Package name: `@free-react-templates/joinpulse`
- [ ] CNAME: `joinpulse.free.componentdock.com`
