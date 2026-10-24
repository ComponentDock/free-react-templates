# Template: ContactArk (Contact Form)
<!-- prep-status: shipped-as=formnet -->
> **SHIPPED-UNDER** — the ColorLib `contact-form-v7` design this prep describes already
> ships as `apps/formnet` (<https://formnet.free.componentdock.com>).
> Do not scaffold `apps/contactark`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-formnet/spec.md`.

## Purpose

Recreation of ColorLib "Contact Form V7" — a clean, minimal, single-page
contact form template centered on a neutral background.

- **Source slug:** `contact-form-v7`
- **ColorLib page:** https://colorlib.com/wp/template/contact-form-v7/
- **Live preview:** https://colorlib.com/etc/cf/ContactFrom_v7/index.html
  (note: `preview.colorlib.com/theme/contact-form-v7/` returns 404;
   design reference extracted from the demo URL above + the ColorLib
   screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v7.jpg`)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the original `css/main.css` served at the demo URL.

### Colors

| Token                 | Hex       | Usage                              |
| ---------------------- | --------- | ---------------------------------- |
| `--bg`                 | `#e6e6e6` | Full-page background (light gray)  |
| `--title-color`        | `#43383e` | Form title ("Get in Touch")        |
| `--input-bg`           | `#ffffff` | Input field backgrounds            |
| `--text`               | `#43383e` | Input text, checkbox label         |
| `--placeholder`        | `#999999` | Placeholder text, left icons       |
| `--btn-gradient-from`  | `#d5007d` | Button gradient start (magenta)    |
| `--btn-gradient-to`    | `#e53935` | Button gradient end (red)          |
| `--btn-text`           | `#ffffff` | Button text                        |
| `--error`              | `#c80000` | Validation error text + border     |
| `--checkbox-checked`   | `#555555` | Checkbox checkmark color           |

### Typography

| Token           | Value                      | Usage                    |
| --------------- | -------------------------- | ------------------------ |
| `--font-body`   | `Oswald-Regular` (Google Fonts) | Body, inputs, links   |
| `--font-medium` | `Oswald-Medium` (Google Fonts) | Title, input text, button |
| `--title-size`  | `30px`                     | Form title               |
| `--input-size`  | `15px`                     | Input text               |
| `--btn-size`    | `16px`                     | Button label             |
| `--placeholder-size` | `14px`                | Placeholder (body font)  |

### Spacing & Layout

| Token              | Value  | Usage                              |
| ------------------ | ------ | ---------------------------------- |
| `--form-width`     | `550px`| Form container max-width           |
| `--form-padding`   | `30px 0 80px 0` | Top/bottom padding on wrapper |
| `--input-height`   | `62px` | Text input height                  |
| `--textarea-min-h` | `199px`| Minimum textarea height            |
| `--icon-area-w`    | `58px` | Left icon label width              |
| `--input-margin-b` | `17px` | Gap between input fields           |

### Button

- **Shape:** Pill / rounded-full (`border-radius: 31px`)
- **Min-width:** `160px`, **Height:** `62px`
- **Background:** animated gradient (`linear-gradient(-135deg, #d5007d, #e53935, #d5007d, #e53935)`) that slides in from left on hover
- **Text:** white, Oswald-Medium, 16px

### Validation

- **Error tooltip:** white background, red border (`#c80000`), positioned at right side of input, 50% vertical centered
- **Error icon:** FontAwesome exclamation-circle (`\f06a`), color `#c80000`
- **Error shows on hover** over the input field (CSS-only, no JS required)

### Icons (left of inputs)

Replace FontAwesome/Linearicons with `lucide-react`:
- Name → `User` icon
- Email → `Mail` icon
- Phone → `Phone` icon

## Requirements

### Feature: ContactArk template behaviour

#### Scenario: Full-page centered layout

- **GIVEN** the user opens the ContactArk page
- **THEN** the page background is light gray (#e6e6e6)
- **AND** the form is centered both vertically and horizontally
- **AND** the form container is 550px wide

#### Scenario: Form title

- **GIVEN** the form is rendered
- **THEN** a title "Get in Touch" is displayed at the top
- **AND** the title uses Oswald-Medium font at 30px
- **AND** the title color is dark charcoal (#43383e)

#### Scenario: Name input field

- **GIVEN** the form is rendered
- **THEN** a Name input is present with placeholder "Name"
- **AND** a User icon is displayed on the left side of the Name input
- **AND** the input has a white background and 62px height

#### Scenario: Email input field

- **GIVEN** the form is rendered
- **THEN** an Email input is present with placeholder "Email"
- **AND** a Mail icon is displayed on the left side of the Email input
- **AND** the input has a white background and 62px height

#### Scenario: Phone input field

- **GIVEN** the form is rendered
- **THEN** a Phone input is present with placeholder "Phone"
- **AND** a Phone icon is displayed on the left side of the Phone input
- **AND** the input has a white background and 62px height

#### Scenario: Message textarea

- **GIVEN** the form is rendered
- **THEN** a Message textarea is present with placeholder "Your message..."
- **AND** the textarea has a white background and minimum height of 199px

#### Scenario: Send copy checkbox

- **GIVEN** the form is rendered
- **THEN** a checkbox labeled "Send copy to my email" is present
- **AND** the checkbox is unchecked by default

#### Scenario: Send Email button

- **GIVEN** the form is rendered
- **THEN** a "Send Email" button is displayed below the checkbox
- **AND** the button has a pill shape (border-radius 31px)
- **AND** the button displays a magenta-to-red gradient background
- **AND** the button text is white and centered
- **AND** on hover the gradient slides in from left to right

#### Scenario: Field validation — name required

- **GIVEN** the user leaves the Name field empty and submits
- **THEN** an error tooltip appears saying "Name is required"
- **AND** the error tooltip has a red border and white background

#### Scenario: Field validation — email format

- **GIVEN** the user enters an invalid email and submits
- **THEN** an error tooltip appears saying "Valid email is required: ex@abc.xyz"

#### Scenario: Field validation — phone required

- **GIVEN** the user leaves the Phone field empty and submits
- **THEN** an error tooltip appears saying "Phone is required"

#### Scenario: Field validation — message required

- **GIVEN** the user leaves the Message field empty and submits
- **THEN** an error tooltip appears saying "Message is required"

#### Scenario: Successful form submission

- **GIVEN** the user fills all fields with valid data
- **WHEN** the user clicks "Send Email"
- **THEN** the form submits successfully

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a viewport narrower than 576px
- **THEN** the form container fills the available width with padding
- **AND** all inputs and button remain usable

## Verification checklist

- [ ] Page renders with #e6e6e6 background, form centered
- [ ] Title "Get in Touch" in Oswald-Medium 30px, color #43383e
- [ ] Name input with User icon, white bg, 62px height, placeholder
- [ ] Email input with Mail icon, white bg, 62px height, placeholder
- [ ] Phone input with Phone icon, white bg, 62px height, placeholder
- [ ] Message textarea, white bg, min-height 199px, placeholder
- [ ] Checkbox "Send copy to my email" unchecked by default
- [ ] Send Email button: pill shape, gradient #d5007d→#e53935, white text
- [ ] Button hover: gradient slides in from left
- [ ] Validation errors show on submit with red border tooltip
- [ ] Responsive: works on mobile viewports
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
