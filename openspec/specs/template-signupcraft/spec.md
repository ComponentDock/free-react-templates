# Template: SignupCraft (Registration Form)

## Purpose

Recreation of ColorLib **Signup Form 02** (`https://colorlib.com/wp/template/signup-form-02/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-02/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

A bold, clean, and impactful registration form template. The layout is split into two panels:
an 80% wide content/form area on the left (light gray `#f6f7fc` background) and a 20% wide
image panel on the right showing a full-height background image (`images/bg_1.jpg` — replaced
with `picsum.photos` placeholder). On mobile the panels stack vertically (form first, then image).

The form panel contains an `h3` "Register" heading, a subtitle paragraph, and a multi-row
registration form with fields: First Name, Last Name, Email Address, Phone Number, Website,
Password, Re-type Password, a terms/privacy checkbox, and a "Register" submit button.

## Design Tokens

Extracted from `css/style.css` on the preview (`signup-form-02/css/style.css`):

| Token               | Value                                    | Notes                                          |
| ------------------- | ---------------------------------------- | ---------------------------------------------- |
| heading-font        | Roboto (Google Fonts, wght 300–400)      | Loaded via `@font-face` in preview stylesheet   |
| body-font           | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Full font stack |
| brand-primary       | `#fb771a`                                | Orange — links, btn-primary, checkbox checked    |
| brand-primary-hover | `#eb6304` / `#de5e04`                    | Button hover/active states                       |
| brand-focus-ring    | `rgba(252, 139, 60, 0.5)`               | Box-shadow on button focus                       |
| focus-border-color  | `#fdc197`                                | Light orange — form input focus border           |
| text-dark           | `#212529`                                | Body text, button default color                  |
| text-form           | `#495057`                                | Form input text color                            |
| text-muted          | `#6c757d`                                | Placeholder text, disabled states                |
| text-caption        | `#888`                                   | Checkbox caption text                            |
| link-color          | `#fb771a`                                | Same as brand-primary                            |
| link-hover          | `#c55303`                                | Darker orange on hover, with underline           |
| content-bg          | `#f6f7fc`                                | Left panel background (form area)                |
| page-bg             | `#ffffff`                                | Default body background                          |
| input-bg            | `#ffffff`                                | Form input background                            |
| input-border        | `none`                                   | Borderless inputs; use box-shadow for depth       |
| input-shadow        | `0 1px 2px 0 rgba(0,0,0,0.1)`           | Subtle drop shadow on inputs                     |
| input-focus-shadow  | `0 1px 2px 0 rgba(0,0,0,0.1)`           | Same shadow on focus (no border change)          |
| input-radius        | `4px`                                    | `border-radius: 0.25rem`                         |
| input-height        | `54px`                                   | `.half .cl-btn { height: 54px }`                |
| btn-primary-bg      | `#fb771a`                                | Orange background                                |
| btn-primary-hover   | `#eb6304`                                | Darker orange on hover                           |
| btn-text            | `#fff`                                   | White text on primary button                     |
| btn-border-radius   | `4px`                                    | Rounded corners (not pill)                       |
| btn-height          | `54px`                                   | Same as inputs                                   |
| btn-padding         | `0.375rem 0.75rem` base; `3rem` horizontal via `.cl-px-5` | Wider horizontal padding on Register button |
| btn-transition      | `0.15s ease-in-out`                      | Color, background, border, box-shadow            |
| checkbox-size       | `20px × 20px`                            | `.control__indicator` dimensions                 |
| checkbox-unchecked  | `#e6e6e6`                                | Gray background when unchecked                   |
| checkbox-checked    | `#fb771a`                                | Orange background when checked                   |
| checkbox-hover      | `#ccc`                                   | Darker gray on hover                             |
| checkbox-radius     | `4px`                                    | Same as inputs                                   |
| checkbox-label-size | `14px`                                   | Font size for checkbox caption text              |
| label-size          | (default)                                | Form labels with `margin-bottom: 0.5rem`         |
| heading-size        | `1.75rem`                                | h3 heading font size                             |
| heading-weight      | `500`                                    | Medium weight                                    |
| image-panel-width   | `20%`                                    | Right panel on desktop                           |
| content-panel-width | `80%`                                    | Left panel on desktop                            |
| min-height          | `900px`                                  | Full viewport height, minimum 900px              |
| container-max       | `960px`                                  | At 992px breakpoint                              |

### Font

- **Google Font:** Roboto, weights 300, 400
- Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif`
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from preview HTML)

1. **Split Layout Container** (`.half` — flexbox, full viewport height, min 900px)
   - Two panels side by side on desktop, stacked on mobile

2. **Content Panel** (`.contents` — 80% width, `#f6f7fc` background)
   - `.cl-container` with centered row
   - `cl-col-md-7` column centered vertically and horizontally

3. **Heading** (h3)
   - "Register" — `font-size: 1.75rem`, `font-weight: 500`

4. **Subtitle** (p)
   - "Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing."
   - `margin-bottom: 1.5rem` (`.cl-mb-4`)

5. **Registration Form** (`<form>`)
   - **Row 1** (2 columns):
     - First Name input (placeholder "e.g. John")
     - Last Name input (placeholder "e.g. Smith")
   - **Row 2** (1 column):
     - Email Address input (placeholder "e.g. john@your-domain.com")
   - **Row 3** (2 columns):
     - Phone Number input (placeholder "+00 0000 000 0000")
     - Website input (placeholder "e.g. https://google.com")
   - **Row 4** (2 columns):
     - Password input (placeholder "Your Password")
     - Re-type Password input (placeholder "Your Password")
   - **Checkbox row**:
     - Custom checkbox (checked by default)
     - Caption: "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy."
     - Links to Terms and Conditions and Privacy Policy
     - `margin-bottom: 3rem`, `margin-top: 1.5rem`
   - **Submit button**:
     - "Register" — orange (`#fb771a`), `54px` height, `3rem` horizontal padding
     - Full-width in form column

6. **Image Panel** (`.bg` — 20% width)
   - `background-image: url('images/bg_1.jpg')` — full-height cover image
   - Replaced with `https://picsum.photos/seed/signupcraft/800/1200` placeholder
   - `background-size: cover`, `background-position: center`

## Gherkin Scenarios

### Scenario: Page loads with split layout

- Given the user visits the template page
- When the page finishes loading
- Then a split layout is visible with a form panel and an image panel
- And the form panel has a light gray (`#f6f7fc`) background
- And the image panel displays a full-height background image

### Scenario: Heading and subtitle are visible

- Given the page is loaded
- Then a "Register" heading is visible at the top of the form panel
- And the heading uses font size 1.75rem and weight 500
- And a subtitle paragraph is visible below the heading
- And the subtitle text reads "Lorem ipsum dolor sit amet elit..."

### Scenario: First row has first name and last name fields

- Given the page is loaded
- Then a "First Name" text input is visible with placeholder "e.g. John"
- And a "Last Name" text input is visible with placeholder "e.g. Smith"
- And the two fields are side by side in a 2-column row

### Scenario: Email field spans full width

- Given the page is loaded
- Then an "Email Address" email input is visible
- And the email input has placeholder "e.g. john@your-domain.com"
- And the email field spans the full width of the form

### Scenario: Phone and website fields side by side

- Given the page is loaded
- Then a "Phone Number" text input is visible with placeholder "+00 0000 000 0000"
- And a "Website" text input is visible with placeholder "e.g. https://google.com"
- And the two fields are side by side in a 2-column row

### Scenario: Password fields side by side

- Given the page is loaded
- Then a "Password" password input is visible with placeholder "Your Password"
- And a "Re-type Password" password input is visible with placeholder "Your Password"
- And the two fields are side by side in a 2-column row

### Scenario: Terms checkbox is visible and checked by default

- Given the page is loaded
- Then a checkbox is visible below the password fields
- And the checkbox is checked by default
- And the caption reads "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy."
- And "Terms and Conditions" and "Privacy Policy" are clickable links

### Scenario: Register button styling

- Given the page is loaded
- Then a "Register" submit button is visible at the bottom of the form
- And the button has an orange (`#fb771a`) background
- And the button text is white
- And the button has a 54px height
- And the button has rounded corners (4px border-radius)

### Scenario: Register button hover state

- Given the page is loaded
- When the user hovers over the "Register" button
- Then the button background changes to a darker orange (`#eb6304`)

### Scenario: Form inputs have consistent styling

- Given the page is loaded
- Then all text inputs have a white background
- And all inputs have no visible border (borderless with subtle shadow)
- And all inputs have a 54px height
- And all inputs have a 4px border-radius

### Scenario: Form inputs focus state

- Given the page is loaded
- When the user focuses on a text input
- Then the input gains a light orange (`#fdc197`) focus border
- And the input shadow remains `0 1px 2px 0 rgba(0,0,0,0.1)`

### Scenario: Image panel is responsive

- Given the user views the template on a desktop screen (width >= 992px)
- Then the image panel occupies 20% of the viewport width
- And the form panel occupies 80% of the viewport width

### Scenario: Mobile layout stacks vertically

- Given the user views the template on a mobile screen (width < 992px)
- Then the form panel is displayed first (full width)
- And the image panel is displayed below the form panel (full width)

### Scenario: Footer links to Component Dock

- Given the page is loaded
- Then a footer is visible at the bottom
- And the footer contains a link to "https://www.componentdock.com/"
- And the link text includes "Component Dock"

## Verification Checklist

- [ ] Split layout renders correctly: 80%/20% on desktop, stacked on mobile
- [ ] Heading "Register" displays at 1.75rem / weight 500
- [ ] All 7 form fields render with correct placeholders
- [ ] First Name + Last Name are side by side on desktop
- [ ] Email Address spans full width
- [ ] Phone + Website are side by side on desktop
- [ ] Password + Re-type Password are side by side on desktop
- [ ] Terms checkbox is checked by default with correct caption text
- [ ] "Terms and Conditions" and "Privacy Policy" are clickable links
- [ ] Register button is orange (#fb771a), 54px height, 4px radius
- [ ] Button hover darkens to #eb6304
- [ ] Inputs: white bg, no border, box-shadow, 54px height, 4px radius
- [ ] Input focus shows light orange (#fdc197) border
- [ ] Image panel shows placeholder image with cover sizing
- [ ] Mobile view stacks panels vertically
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app source code
