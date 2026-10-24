# Template: RegFold (Registration Form)

## Purpose

A Registration Form template with form fields and form submission sections. Recreation of **ColorLib Regform 4** (`colorlib-regform-4`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-4/
- **Preview URL:** https://colorlib.com/etc/regform/colorlib-regform-4/ (preview.colorlib.com returns 404; demo page + screenshot used as reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-4.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library
- **Source design:** ColorLib "Colorlib Regform 4" — https://colorlib.com/wp/template/colorlib-regform-4/

## Design Tokens (extracted from demo CSS)

| Token               | Value                                                   | Usage                            |
| ------------------- | ------------------------------------------------------- | -------------------------------- |
| Font family         | Poppins (400, 700)                                      | Body text, headings, inputs      |
| Page background     | linear-gradient(to top right, #fc2c77 0%, #6c4079 100%) | Pink-to-purple diagonal gradient |
| Card background     | #ffffff (white)                                         | Centered form card               |
| Card border-radius  | 12px (rounded-xl)                                       | Card corners                     |
| Input background    | #fafafa                                                 | Light gray input fields          |
| Input box-shadow    | inset 0 1px 3px rgba(0,0,0,0.08)                        | Subtle inset depth               |
| Input border-radius | 5px                                                     | Rounded inputs                   |
| Label color         | #666666                                                 | Input labels                     |
| Title color         | Dark (#333)                                             | "Registration Form" heading      |
| Submit button       | #4272d7 (blue), 5px radius, white text                  | Submit action                    |
| Submit hover        | #3868cd (darker blue)                                   | Hover state                      |
| Radio text          | #666                                                    | Gender radio labels              |

## Layout Structure

Single centered card on gradient background:

1. **Page wrapper** — full viewport, gradient background, padding
2. **Card** — max-width ~680px, centered, white background, rounded corners, padding
   - **Title** — "Registration Form" (h2)
   - **Row 1** — First Name (text) | Last Name (text) — two columns
   - **Row 2** — Birthday (date input with calendar icon) | Gender (radio: Male/Female) — two columns
   - **Row 3** — Email (email) | Phone Number (text) — two columns
   - **Row 4** — Subject (select dropdown) — full width
   - **Submit button** — "Submit", blue (#4272d7), rounded

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (measured) | `#6c4079` | live sheet paints it ×5 — `background` on `.bg-gra-02`; style.css?v=b5f08591 (13,224 B, sha256 3d0fddb10f90) · <https://colorlib.com/etc/regform/colorlib-regform-4/> |

Measured from the live theme stylesheet: the most-painted colour that paints a surface (background declarations first, then a button/nav/hero selector), never sampled from a screenshot. Alternates in the same sheet: #fc2c77 x5, #3868cd x1, #4272d7 x1.

## Requirements

### Requirement: Page renders the registration form

Users SHALL see a registration form with all required fields.

#### Scenario: Heading is visible

- **WHEN** I visit the registration page
- **THEN** I see a heading "Registration Form"

#### Scenario: Form fields are present

- **WHEN** I visit the registration page
- **THEN** I see input fields for first name, last name, birthday, email, and phone
- **AND** I see radio buttons for gender (Male, Female)
- **AND** I see a subject dropdown
- **AND** I see a Submit button

### Requirement: Form fields are interactive

Users SHALL be able to fill in all form fields.

#### Scenario: Typing in text fields

- **WHEN** I type "John" into the first name field
- **THEN** the first name field contains "John"

#### Scenario: Selecting gender

- **WHEN** I click the "Female" radio button
- **THEN** the Female radio button is checked
- **AND** the Male radio button is unchecked

#### Scenario: Selecting subject

- **WHEN** I select "Subject 2" from the subject dropdown
- **THEN** the subject dropdown shows "Subject 2"

### Requirement: Form submission is handled

Users SHALL be able to submit the form without page navigation.

#### Scenario: Submit button exists

- **WHEN** I visit the registration page
- **THEN** I see a button labeled "Submit"

#### Scenario: Form submission is prevented

- **WHEN** I click the Submit button
- **THEN** the form submission event is prevented (no page reload)

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a Component Dock link.

#### Scenario: Footer link

- **WHEN** I visit the registration page
- **THEN** I see a link to "https://www.componentdock.com/" labeled "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regfold/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regfold/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Page renders the registration form — I see a heading "Registration Form"
- [ ] Form fields are interactive — the first name field contains "John"
- [x] Form submission is handled — I see a button labeled "Submit"
