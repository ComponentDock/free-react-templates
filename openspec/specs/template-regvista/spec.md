# Template: RegVista (Modern Registration Form)
<!-- prep-status: shipped-as=regfold -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-regform-4` design this prep describes already
> ships as `apps/regfold` (<https://regfold.free.componentdock.com>).
> Do not scaffold `apps/regvista`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-regfold/spec.md`.

## Purpose

Recreation of ColorLib "Colorlib Reg Form V4" — a modern single-card registration form with labeled fields for name, birthday, gender, email, phone, subject dropdown, and a blue submit button on a pink-to-purple gradient background.

- **Source**: https://colorlib.com/wp/template/colorlib-regform-4/
- **Preview**: https://preview.colorlib.com/theme/colorlib-regform-4/ (downloaded source archive + screenshot + CSS used as references)
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category**: Modern registration form (single-card, labeled fields)

## Design tokens

Extracted from source CSS (`css/style.css`):

| Token | Value | Source |
|-------|-------|--------|
| Background gradient | `linear-gradient(to top right, #FC2C77 0%, #6C4079 100%)` | `.bg-gra-02` — pink (#FC2C77) to dark purple (#6C4079), bottom-left to top-right |
| Card background | `#FFFFFF` white | `.card-4 { background: #fff; }` |
| Card border-radius | `10px` | `.card-4 { border-radius: 10px; }` |
| Card box-shadow | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)` | `.card-4` |
| Card body padding | `57px 65px`, bottom `65px` | `.card-4 .cl-card-body { padding: 57px 65px; padding-bottom: 65px; }` |
| Card body mobile padding | `50px 40px` | `@media (max-width: 767px)` |
| Wrapper max-width | `680px` | `.wrapper--w680 { max-width: 680px; }` |
| Page wrapper | `min-height: 100vh`, `padding-top: 130px`, `padding-bottom: 100px` | `.page-wrapper` |
| Font family | `"Poppins", "Arial", "Helvetica Neue", sans-serif` | Google Fonts — weights 400, 700 |
| Body font-size | `14px` | `body { font-size: 14px; }` |
| Title text | `"Registration Form"` | h2.title |
| Title color | `#525252` dark gray | `.title { color: #525252; }` |
| Title font-size | `24px` | `.title { font-size: 24px; }` |
| Title font-weight | `400` | `.title { font-weight: 400; }` |
| Title margin-bottom | `40px` | `.title { margin-bottom: 40px; }` |
| Label color | `#555` | `.label { color: #555; }` |
| Label font-size | `16px` | `.label { font-size: 16px; }` |
| Label text-transform | `capitalize` | `.label { text-transform: capitalize; }` |
| Label margin-bottom | `5px` | `.label { margin-bottom: 5px; }` |
| Input background | `#FAFAFA` light gray | `.input--style-4 { background: #fafafa; }` |
| Input box-shadow | `inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08)` | `.input--style-4` — subtle inset shadow |
| Input border-radius | `5px` | `.input--style-4 { border-radius: 5px; }` |
| Input padding | `0 20px` | `.input--style-4 { padding: 0 20px; }` |
| Input font-size | `16px` | `.input--style-4 { font-size: 16px; }` |
| Input text color | `#666` | `.input--style-4 { color: #666; }` |
| Input line-height | `50px` | `.input--style-4 { line-height: 50px; }` |
| Input placeholder color | `#666` | `.input--style-4::-webkit-input-placeholder { color: #666; }` |
| Input transition | `all 0.4s ease` | `.input--style-4 { transition: all 0.4s ease; }` |
| Input group margin-bottom | `22px` | `.cl-input-group { margin-bottom: 22px; }` |
| Button background | `#4272D7` blue | `.btn--blue { background: #4272d7; }` |
| Button hover | `#3868CD` darker blue | `.btn--blue:hover { background: #3868cd; }` |
| Button border-radius | `5px` | `.btn--radius-2 { border-radius: 5px; }` |
| Button font-size | `18px` | `.cl-btn { font-size: 18px; }` |
| Button text | White `#FFFFFF` | `.cl-btn { color: #fff; }` |
| Button padding | `0 50px`, line-height `50px` | `.cl-btn { padding: 0 50px; line-height: 50px; }` |
| Button transition | `all 0.4s ease` | `.cl-btn { transition: all 0.4s ease; }` |
| Radio checkmark bg (unchecked) | `#E5E5E5` | `.checkmark { background-color: #e5e5e5; }` |
| Radio checkmark bg (checked) | `#E5E5E5` outer + `#57B846` green inner dot | `.radio-container input:checked ~ .checkmark { background-color: #e5e5e5; }` inner `:after` `#57b846` |
| Radio checkmark size | `20px` circle | `.checkmark { height: 20px; width: 20px; border-radius: 50%; }` |
| Radio inner dot size | `12px` circle | `.checkmark:after { width: 12px; height: 12px; border-radius: 50%; }` |
| Radio text color | `#666` | `.radio-container { color: #666; }` |
| Radio text font-size | `16px` | `.radio-container { font-size: 16px; }` |
| Radio margin-right | `45px` | `.m-r-45 { margin-right: 45px; }` |
| Select shell background | `#FAFAFA` with inset shadow | `.rs-select2 .select2-container` |
| Select shell border-radius | `5px` | — |
| Select arrow color | `#999` | `.rs-select2 .select2-selection__arrow:after { color: #999; }` |
| Select height | `50px` | — |
| Date icon color | `#999` | `.input-icon { color: #999; }` |
| Date icon size | `18px` | `.input-icon { font-size: 18px; }` |
| Column width | `calc((100% - 30px) / 2)` | `.cl-col-2` — two-column with 30px gap |
| Column mobile | `100%` | `@media (max-width: 767px)` |
| Row spacing | `space-between` | `.row-space { justify-content: space-between; }` |

## Visual design notes (from source CSS + screenshot analysis)

- Full-page gradient: pink (#FC2C77) to dark purple (#6C4079) from bottom-left to top-right.
- Centered white card (max-width 680px, 10px radius, drop shadow) with generous internal padding (57px 65px).
- "Registration Form" heading in dark gray (#525252), 24px, regular weight.
- All form fields use labeled inputs (not placeholder-only) with `capitalize` text-transform labels in #555.
- Input fields have a light gray (#FAFAFA) background with subtle inset shadow and 5px rounded corners — NOT underline-only like some other regform variants.
- Date input with calendar icon on the right side.
- Gender radio buttons: circular 20px gray checkmarks with green (#57B846) inner dot when selected.
- Subject dropdown styled as a full-width select with gray background and custom arrow.
- Blue submit button (#4272D7) with 5px radius, white text, centered left-aligned.
- Responsive: columns stack to 100% below 767px, card padding reduces.

## Section order and structure

1. **Full-page gradient background** — pink to purple diagonal gradient
2. **Centered white card** — max-width 680px, 10px radius, drop shadow
   2a. **Title** — "Registration Form" (dark gray, 24px, regular weight)
   2b. **Row 1** — First Name + Last Name (side by side, labeled inputs)
   2c. **Row 2** — Birthday (date input with calendar icon) + Gender (radio: Male / Female)
   2d. **Row 3** — Email + Phone Number (side by side, labeled inputs)
   2e. **Subject** — full-width dropdown (Choose option / Subject 1 / Subject 2 / Subject 3)
   2f. **Submit button** — "Submit" (blue, 5px radius, left-aligned)

## Requirements

### Background: page layout

Feature: RegVista registration form

Background:
- **GIVEN** the page has a full-viewport gradient background (pink #FC2C77 to purple #6C4079)
- **AND** a centered white card is displayed with rounded corners and drop shadow

#### Scenario: card renders with correct styling

- **WHEN** the form loads
- **THEN** the card has a white background
- **AND** the card has border-radius 10px
- **AND** the card has a drop shadow (0px 8px 20px rgba(0,0,0,0.15))
- **AND** the card max-width is 680px
- **AND** the card body has padding 57px 65px

### Title and form fields

#### Scenario: form title renders correctly

- **WHEN** the form loads
- **THEN** the heading reads "Registration Form"
- **AND** the heading is colored #525252
- **AND** the heading font-size is 24px
- **AND** the heading font-weight is 400

#### Scenario: first and last name fields render side by side

- **WHEN** the form loads
- **THEN** a "first name" labeled input is visible
- **AND** a "last name" labeled input is visible
- **AND** both inputs are in a two-column row layout

#### Scenario: birthday and gender fields render side by side

- **WHEN** the form loads
- **THEN** a "Birthday" date input is visible with a calendar icon on the right
- **AND** a "Gender" radio group is visible with options: Male, Female
- **AND** Male is selected by default

#### Scenario: email and phone fields render side by side

- **WHEN** the form loads
- **THEN** an "Email" labeled input is visible
- **AND** a "Phone Number" labeled input is visible
- **AND** both inputs are in a two-column row layout

### Input styling

#### Scenario: inputs have light gray background with inset shadow

- **GIVEN** the form is visible
- **THEN** each text input has a #FAFAFA background
- **AND** each text input has an inset box-shadow (0px 1px 3px rgba(0,0,0,0.08))
- **AND** each text input has border-radius 5px
- **AND** each text input has padding 0 20px
- **AND** each text input has line-height 50px
- **AND** each text input text color is #666
- **AND** each input label is colored #555 with font-size 16px and text-transform capitalize

### Subject dropdown

#### Scenario: subject dropdown renders with options

- **WHEN** the form loads
- **THEN** a "Subject" labeled dropdown is visible
- **AND** the dropdown shows "Choose option" as the default selected text
- **AND** the dropdown options include: Subject 1, Subject 2, Subject 3
- **AND** the dropdown has the same light gray background and inset shadow as text inputs
- **AND** a gray (#999) chevron-down arrow is displayed on the right

### Radio buttons

#### Scenario: gender radio buttons render correctly

- **GIVEN** the form is visible
- **THEN** two radio buttons are displayed: Male and Female
- **AND** each radio button has a 20px circular gray (#E55E5E5) checkmark
- **AND** Male is checked by default (green #57B846 inner dot visible)
- **AND** Female is unchecked (no green dot)
- **AND** radio text color is #666
- **AND** Male radio has 45px margin-right from Female

### Submit button

#### Scenario: submit button renders with blue styling

- **WHEN** the form loads
- **THEN** a "Submit" button is visible below the subject dropdown
- **AND** the button has a blue background (#4272D7)
- **AND** the button text is white
- **AND** the button has border-radius 5px
- **AND** the button has padding 0 50px and line-height 50px
- **AND** the button font-size is 18px

#### Scenario: submit button hover state

- **WHEN** I hover over the "Submit" button
- **THEN** the button background changes to #3868CD

### Responsive behavior

#### Scenario: columns stack on mobile

- **GIVEN** the viewport is 767px or narrower
- **WHEN** the form loads
- **THEN** all column pairs stack vertically (100% width each)
- **AND** the card body padding reduces to 50px 40px

## Verification checklist

- [ ] Full-page gradient background renders (pink #FC2C77 → purple #6C4079, bottom-left to top-right)
- [ ] White card centered with correct max-width (680px), 10px radius, drop shadow
- [ ] "Registration Form" heading in dark gray #525252, 24px, weight 400
- [ ] First Name + Last Name labeled inputs in two-column row
- [ ] Birthday date input with calendar icon + Gender radio group (Male/Female)
- [ ] Male selected by default with green #57B846 inner dot
- [ ] Email + Phone Number labeled inputs in two-column row
- [ ] Subject dropdown with "Choose option" default + 3 subject options
- [ ] All inputs: #FAFAFA background, inset shadow, 5px radius, 50px line-height, #666 text
- [ ] All labels: #555, 16px, capitalize text-transform
- [ ] Submit button: blue #4272D7, white text, 5px radius, 18px font
- [ ] Submit hover: #3868CD
- [ ] Responsive: columns stack below 767px, padding reduces
- [ ] Font: Poppins loaded (weights 400, 700)
- [ ] Footer: links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
