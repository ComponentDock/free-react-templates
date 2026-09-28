# Template: Showpass (Registration Form)

## Purpose

Showpass is a free concert registration form template recreating ColorLib
"Reg Form V35" (https://colorlib.com/wp/template/colorlib-regform-35/).
It features a blue full-screen background with a background image, a
centered form area with semi-transparent pill-shaped inputs, a red
pill-shaped submit button, and a "Registration Form" heading with an
underline accent.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
**Preview:** https://preview.colorlib.com/theme/colorlib-regform-35/ (404 — preview unavailable; design sourced from downloaded template + screenshot)
**Downloaded template:** colorlib-regform-35.zip (colorlib-regform-35/index.html + css/style.css + images/form-v9.jpg)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-35.jpg

## Design Tokens

| Token                  | Value                                          | Source            |
| ---------------------- | ---------------------------------------------- | ----------------- |
| Page background        | `#4077c8` (medium blue)                       | CSS (style.css)   |
| Background image       | `images/form-v9.jpg` (concert/event themed)    | HTML + screenshot |
| Font family            | `'Nunito', sans-serif` (Bold 700, Regular 400) | CSS @font-face     |
| Form card border-radius| `15px`                                         | CSS               |
| Form card margin       | `185px 0` (vertical centering)                 | CSS               |
| Form padding           | `30px 135px 30px 100px`                        | CSS               |
| Heading font-size      | `35px`, text-align center                      | CSS               |
| Heading underline      | `#fff`, `width: 73px`, `height: 3px` (after pseudo) | CSS          |
| Input border           | `2px solid #ccc`                               | CSS               |
| Input background       | `rgba(255, 255, 255, 0.2)` (semi-transparent white) | CSS          |
| Input border-radius    | `27.5px` (pill shape)                          | CSS               |
| Input padding          | `14.5px 0px 14.5px 30px`                      | CSS               |
| Input text color       | `#fff` (white, inherited from card)            | CSS               |
| Input placeholder color| `#e5e5e5`                                     | CSS               |
| Input focus border     | `2px solid #999`                               | CSS               |
| Button background      | `#f25d5d` (coral/red)                          | CSS               |
| Button hover background| `#d95252` (darker red)                         | CSS               |
| Button border-radius   | `25px` (pill shape)                            | CSS               |
| Button width           | `180px`                                        | CSS               |
| Button shadow          | `0px 8px 16px 0px rgba(0,0,0,0.2)`            | CSS               |
| Button color           | `#fff`                                         | CSS               |
| Button margin          | `20px 0 73px 35px`                            | CSS               |
| Card text color        | `#fff`                                         | CSS               |
| Card font-weight       | `700` (bold)                                   | CSS               |
| Card font-size         | `16px`                                         | CSS               |

## Section Structure

The template is a single full-viewport page with no navbar, header, or footer.
Structure order:

1. **Full-screen blue background** (`#4077c8`) with a concert/event background image
2. **Form area** — centered on the page, containing:
   - **Heading:** "Registration Form" (white, centered, with white underline accent)
   - **Form fields (two-column rows):**
     - Row 1: Name (text, placeholder "Your Name") | Email (text, placeholder "Your Email")
     - Row 2: Password (password, placeholder "Your Password") | Confirm Password (password, placeholder "Comfirm Password")
   - **Submit button:** "Register" (red pill, centered, box-shadow)

## Requirements

### Requirement: Page layout

The page SHALL render a full-viewport blue (#4077c8) background with a background
image (using a placeholder concert image from picsum.photos). The form SHALL be
centered vertically and horizontally on the page.

#### Scenario: Full-screen blue background with centered form

- **WHEN** I visit the Showpass page
- **THEN** I see a full-viewport blue (#4077c8) background
- **AND** the form area is centered horizontally and vertically on the page

### Requirement: Registration heading

The form SHALL display a centered heading "Registration Form" in white with a
white underline accent bar below it.

#### Scenario: Heading with underline accent

- **WHEN** I visit the Showpass page
- **THEN** I see a heading reading "Registration Form" centered above the form
- **AND** there is a white underline bar below the heading text
- **AND** the heading text is white

### Requirement: Name and Email row

The form SHALL display two side-by-side inputs for Name and Email with
semi-transparent white backgrounds and pill-shaped borders.

#### Scenario: Two text inputs in first row

- **WHEN** I visit the Showpass page
- **THEN** I see a text input with placeholder "Your Name"
- **AND** I see a text input with placeholder "Your Email"
- **AND** they are displayed in a two-column layout (side by side)
- **AND** both inputs have a semi-transparent white background and pill-shaped rounded corners

### Requirement: Password and Confirm Password row

The form SHALL display two side-by-side password inputs for Password and
Confirm Password with the same pill-shaped styling.

#### Scenario: Two password inputs in second row

- **WHEN** I visit the Showpass page
- **THEN** I see a password input with placeholder "Your Password"
- **AND** I see a password input with placeholder "Comfirm Password" (retaining original placeholder)
- **AND** they are displayed in a two-column layout (side by side)
- **AND** both inputs have a semi-transparent white background and pill-shaped rounded corners

### Requirement: Register button

The form SHALL display a red (#f25d5d) pill-shaped "Register" submit button
with a box-shadow, centered below the form fields.

#### Scenario: Red pill submit button

- **WHEN** I visit the Showpass page
- **THEN** I see a submit button labeled "Register"
- **AND** the button has a red (#f25d5d) background
- **AND** the button is pill-shaped (rounded corners ~25px)
- **AND** the button has a box-shadow effect
- **AND** the button is centered below the form fields

### Requirement: Responsive layout

On viewports narrower than 768px, the two-column input rows SHALL stack
vertically into single-column layout.

#### Scenario: Mobile view stacks columns

- **WHEN** I visit the Showpass page on a viewport narrower than 768px
- **THEN** the Name/Email inputs stack vertically (full width each)
- **AND** the Password/Confirm Password inputs stack vertically (full width each)

## Verification Checklist

- [ ] Full blue (#4077c8) background with background image fills viewport
- [ ] Form area centered vertically and horizontally
- [ ] "Registration Form" heading with white text and white underline accent
- [ ] Name input (text, pill-shaped, semi-transparent background)
- [ ] Email input (text, pill-shaped, semi-transparent background)
- [ ] Password input (password, pill-shaped, semi-transparent background)
- [ ] Confirm Password input (password, pill-shaped, semi-transparent background)
- [ ] Inputs arranged in two-column rows on desktop, single column on mobile
- [ ] "Register" button: red (#f25d5d), pill-shaped, centered, with shadow
- [ ] Button hover darkens to #d95252
- [ ] Nunito font family (loaded via Google Fonts or system fallback)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
