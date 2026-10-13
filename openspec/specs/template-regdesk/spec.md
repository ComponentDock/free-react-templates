# Template: RegDesk (Registration Form)

## Purpose

Recreation of **ColorLib Reg Form V30** (`colorlib-regform-30`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-30/
- **Preview URL:** https://colorlib.com/etc/regform/colorlib-regform-30/ (Note: `https://preview.colorlib.com/theme/colorlib-regform-30/` returns 404; falling back to demo page + screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-30.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library
- **Description:** A membership registration form with a split layout — left information panel (blue background) and right registration form on white card, centered on a teal full-page background.

## Design Tokens

| Token              | Value                          | Source               |
| ------------------ | ------------------------------ | -------------------- |
| Page background    | `#75e2e9` (teal/cyan)         | `.page-content` CSS  |
| Card background    | `#ffffff`                      | `.form-v4-content`   |
| Card border-radius | `10px`                         | `.form-v4-content`   |
| Card shadow        | `0px 8px 20px rgba(0,0,0,0.15)` | `.form-v4-content` |
| Card width         | `850px`                        | `.form-v4-content`   |
| Left panel bg      | `#3786bd` (blue)              | `.form-left`         |
| Left panel radius  | `10px` top-left, `10px` bottom-left | `.form-left`   |
| Left panel text    | `#ffffff`, font-weight 300     | `.form-left p`       |
| Font family        | Open Sans (300, 400, 600, 700) | `@font-face`         |
| Heading h2         | font-weight 700, font-size 30px | `.form-v4-content h2` |
| Heading color (form)| `#3786bd`                     | `.form-detail h2`    |
| Label              | `#666666`, font-weight 600, font-size 15px | `.form-detail label` |
| Input border       | `1px solid #e5e5e5`           | `.form-detail input` |
| Input focus border | `1px solid #53c83c` (green)   | `.cl-form-row input:focus` |
| Input radius       | `5px` top-left, `5px` bottom-right | `.form-detail input` |
| Register button bg | `#3786bd`                      | `.register`          |
| Register hover     | `#2f73a3`                      | `.register:hover`    |
| Register btn text  | `#ffffff`, font-weight 700, font-size 15px | `.register` |
| Register btn radius| `5px` top-left, `5px` bottom-right | `.register` |
| "Have An Account" btn bg | `#ffffff`                | `.account`           |
| "Have An Account" text | `#333333`, font-weight 700, font-size 15px | `.account` |
| "Have An Account" hover | `#e5e5e5`                 | `.account:hover`     |
| Checkbox link      | `#3786bd`, underline, font-weight 700 | `.text` |
| Responsive break   | `991px` — stacks to column    | `@media`             |

## Section Structure (order)

1. **Full-page background** — Teal `#75e2e9` page, flexbox centered
2. **Card container** — White 850px card, 10px radius, shadow, flex row
3. **Left panel** — Blue `#3786bd` info section: heading "INFORMATION", description paragraph, secondary paragraph with bold span, "Have An Account" button (white bg, skewed radius)
4. **Right form** — White form section: heading "REGISTER FORM", First Name + Last Name (side by side), Your Email (full width), Password + Confirm Password (side by side), Terms & Conditions checkbox with link, Register button (blue bg, skewed radius)

## Requirements

### Feature: RegDesk template behaviour

#### Scenario: Full-page layout

- **GIVEN** the user navigates to the template
- **WHEN** the page loads
- **THEN** a teal `#75e2e9` background fills the viewport
- **AND** a white card is centered on the page

#### Scenario: Card dimensions and styling

- **GIVEN** the page has loaded
- **WHEN** the card is visible
- **THEN** the card is 850px wide with a 10px border-radius
- **AND** the card has a shadow of `0px 8px 20px rgba(0,0,0,0.15)`

#### Scenario: Left information panel

- **GIVEN** the card is visible
- **WHEN** the user views the left panel
- **THEN** the left panel has a blue `#3786bd` background
- **AND** the panel displays a heading "INFORMATION" in white, bold, 30px
- **AND** the panel shows a description paragraph in white, font-weight 300
- **AND** a secondary paragraph with bold span text is visible
- **AND** a white "Have An Account" button is displayed with 5px/5px skewed radius

#### Scenario: Right registration form

- **GIVEN** the card is visible
- **WHEN** the user views the right form section
- **THEN** the form displays a blue `#3786bd` heading "REGISTER FORM"
- **AND** First Name and Last Name fields are shown side by side
- **AND** Your Email field spans full width
- **AND** Password and Confirm Password fields are shown side by side
- **AND** labels are gray `#666` with font-weight 600 and font-size 15px
- **AND** inputs have a `1px solid #e5e5e5` border with 5px/5px skewed radius

#### Scenario: Form input focus states

- **GIVEN** the registration form is visible
- **WHEN** the user focuses an input field
- **THEN** the border changes to `1px solid #53c83c` (green)

#### Scenario: Terms and conditions checkbox

- **GIVEN** the form is visible
- **WHEN** the user scrolls to the checkbox
- **THEN** the text reads "I agree to the Terms and Conditions"
- **AND** "Terms and Conditions" is a blue `#3786bd` underlined link with font-weight 700

#### Scenario: Register button

- **GIVEN** the form is visible
- **WHEN** the user sees the register button
- **THEN** the button has a blue `#3786bd` background with white text
- **AND** the button has font-weight 700 and font-size 15px
- **AND** on hover the background changes to `#2f73a3`

#### Scenario: Responsive layout (≤991px)

- **GIVEN** the viewport width is ≤991px
- **WHEN** the card is displayed
- **THEN** the card stacks vertically (left panel on top, form below)
- **AND** the left panel gets a top-right radius instead of top-left

#### Scenario: Mobile layout (≤575px)

- **GIVEN** the viewport width is ≤575px
- **WHEN** the form displays the First/Last Name or Password/Confirm rows
- **THEN** the fields stack vertically instead of side by side

## Verification Checklist

- [ ] Teal `#75e2e9` full-page background
- [ ] White 850px card, 10px radius, shadow
- [ ] Left panel: blue `#3786bd`, heading, two text blocks, "Have An Account" button
- [ ] Right form: blue heading, 5 field inputs (3 rows: name pair, email, password pair)
- [ ] Labels: `#666`, weight 600, 15px
- [ ] Inputs: `#e5e5e5` border, `#53c83c` focus border, 5px/5px skewed radius
- [ ] Terms checkbox with blue underlined link
- [ ] Register button: blue bg, white text, hover `#2f73a3`
- [ ] "Have An Account" button: white bg, `#333` text, hover `#e5e5e5`
- [ ] Open Sans font family (300, 400, 600, 700)
- [ ] Responsive: column layout at ≤991px, stacked fields at ≤575px
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
