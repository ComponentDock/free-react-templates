# Template: MailKite (Contact Form)

## Purpose

Recreation of **ColorLib Contact Form V2** — a single-page, full-screen contact form with a striking gradient-over-photo background and a centered white form card.

- **Source:** https://colorlib.com/wp/template/contact-form-v2/
- **Preview:** https://preview.colorlib.com/theme/contact-form-v2/ (404 — offline at time of prep)
- **Fallback reference:** Screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v2.jpg` (analyzed 2026-09-17)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Category:** Contact Form / Single Page

## Design Tokens

> Extracted from screenshot analysis (preview was unreachable).

| Token              | Value                          | Notes                                                    |
| ------------------ | ------------------------------ | -------------------------------------------------------- |
| brand-pink         | `#E91E8C`                      | Left side of background gradient, button gradient start  |
| brand-coral        | `#F46036`                      | Right side of background gradient, button gradient end   |
| card-bg            | `#FFFFFF`                      | Centered form card                                       |
| card-radius        | `16px`                         | Rounded corners on the form card                         |
| card-shadow        | `0 8px 32px rgba(0,0,0,0.18)`  | Subtle drop shadow on card                               |
| heading-color      | `#1A1A1A`                      | Dark text for "Contact Us" heading                       |
| label-color        | `#AAAAAA`                      | Uppercase, small, light gray field labels                |
| field-border       | `#E0E0E0`                      | Bottom-border line on inputs (underlined style)          |
| field-focus-border | `#E91E8C`                      | Pink accent on focused field                             |
| body-color         | `#333333`                      | Default text color                                       |
| font-family        | `"Poppins", sans-serif`        | Modern sans-serif, inferred from visual weight            |
| btn-gradient       | `linear-gradient(135deg, #E91E8C, #F46036)` | Matches background gradient               |
| btn-color          | `#FFFFFF`                      | Button text color                                        |
| btn-radius         | `4px`                          | Slightly rounded button corners                          |
| btn-padding        | `12px 32px`                    | Generous horizontal padding                              |
| overlay-opacity    | `0.65`                         | Gradient overlay on background image                     |

## Requirements

### Feature: MailKite Contact Form

  As a visitor to the MailKite site,
  I want to send a message through a clean, attractive contact form,
  So that I can reach out to the site owner.

  Background:
- **GIVEN** the page loads with a full-screen mountain photograph background
- **AND** a pink-to-coral gradient overlay covers the background

#### Scenario: Page renders correctly

- **GIVEN** I am on the MailKite page
- **THEN** I see a centered white card on screen
- **AND** the card has rounded corners
- **AND** the card has a subtle drop shadow
- **AND** the card is approximately 400px wide

#### Scenario: Heading is displayed

- **GIVEN** I am on the MailKite page
- **THEN** the card displays "Contact Us" as the heading
- **AND** the heading is bold and centered
- **AND** the heading uses dark text color

#### Scenario: Form fields are rendered

- **GIVEN** I am on the MailKite page
- **THEN** I see a NAME text input field
- **AND** the NAME field has a placeholder showing a sample name
- **AND** I see an EMAIL input field
- **AND** I see a MESSAGE textarea field
- **AND** all fields use an underline-only border style
- **AND** field labels are small, uppercase, and light gray

#### Scenario: Field focus highlighting

- **GIVEN** I am on the MailKite page
- **WHEN** I click into the NAME field
- **THEN** the field's bottom border changes to the brand pink color
- **WHEN** I click into the EMAIL field
- **THEN** the field's bottom border changes to the brand pink color
- **WHEN** I click into the MESSAGE field
- **THEN** the field's bottom border changes to the brand pink color

#### Scenario: Submit button renders

- **GIVEN** I am on the MailKite page
- **THEN** I see a "Send Your Message" button
- **AND** the button has a pink-to-coral gradient background
- **AND** the button text is white
- **AND** the button is centered below the form fields

#### Scenario: Form validation — empty name

- **GIVEN** I am on the MailKite page
- **WHEN** I leave the NAME field empty
- **AND** I fill in the EMAIL field with "test@example.com"
- **AND** I fill in the MESSAGE field with "Hello"
- **AND** I click the "Send Your Message" button
- **THEN** the form does not submit
- **AND** an error indicator appears on the NAME field

#### Scenario: Form validation — empty email

- **GIVEN** I am on the MailKite page
- **WHEN** I fill in the NAME field with "Jane Doe"
- **AND** I leave the EMAIL field empty
- **AND** I fill in the MESSAGE field with "Hello"
- **AND** I click the "Send Your Message" button
- **THEN** the form does not submit
- **AND** an error indicator appears on the EMAIL field

#### Scenario: Form validation — invalid email

- **GIVEN** I am on the MailKite page
- **WHEN** I fill in the NAME field with "Jane Doe"
- **AND** I fill in the EMAIL field with "not-an-email"
- **AND** I fill in the MESSAGE field with "Hello"
- **AND** I click the "Send Your Message" button
- **THEN** the form does not submit
- **AND** an error indicator appears on the EMAIL field

#### Scenario: Form validation — empty message

- **GIVEN** I am on the MailKite page
- **WHEN** I fill in the NAME field with "Jane Doe"
- **AND** I fill in the EMAIL field with "test@example.com"
- **AND** I leave the MESSAGE field empty
- **AND** I click the "Send Your Message" button
- **THEN** the form does not submit
- **AND** an error indicator appears on the MESSAGE field

#### Scenario: Successful form submission

- **GIVEN** I am on the MailKite page
- **WHEN** I fill in the NAME field with "Jane Doe"
- **AND** I fill in the EMAIL field with "jane@example.com"
- **AND** I fill in the MESSAGE field with "I'd like to discuss a project."
- **AND** I click the "Send Your Message" button
- **THEN** the form submits successfully
- **AND** a success message is displayed
- **AND** the form fields are cleared

#### Scenario: Responsive layout — mobile

- **GIVEN** I am on the MailKite page with a viewport width of 375px
- **THEN** the card fills most of the screen width with padding
- **AND** the heading, fields, and button remain visible and usable
- **AND** the background image and gradient overlay still cover the viewport

## Verification Checklist

- [ ] Full-screen background image with pink-to-coral gradient overlay
- [ ] Centered white card with rounded corners and drop shadow
- [ ] "Contact Us" heading — bold, dark, centered
- [ ] NAME, EMAIL, MESSAGE fields with underline-only borders
- [ ] Uppercase light-gray labels above each field
- [ ] Field focus triggers pink bottom-border highlight
- [ ] "Send Your Message" button with matching gradient, white text
- [ ] Form validation for all required fields (name, email, message)
- [ ] Email format validation
- [ ] Success feedback on valid submission
- [ ] Responsive: card adapts to mobile viewport
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for background image placeholder
- [ ] Uses Poppins font via Google Fonts link in index.html
