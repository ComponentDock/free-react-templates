# Template: Registrack (Bootstrap Modal)
<!-- prep-status: shipped-as=modalpoint -->
> **SHIPPED-UNDER** — the ColorLib `modal-16` design this prep describes already
> ships as `apps/modalpoint` (<https://modalpoint.free.componentdock.com>).
> Do not scaffold `apps/registrack`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-modalpoint/spec.md`.

## Purpose

Recreation of ColorLib Modal 16 — a registration form pop-up modal with a
split-screen design (image left, form right) featuring a country dropdown,
full name, email, and date of birth fields. This is a Bootstrap modal
template, not a full-page layout.

- **Source:** https://colorlib.com/wp/template/modal-16/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-16/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Bootstrap Modal (registration form)

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and HTML structure.

| Token                | Value                                                   |
| -------------------- | ------------------------------------------------------- |
| Font family          | `"Roboto", sans-serif` (weights 300, 400)               |
| Heading color        | `#000000`                                               |
| Heading font-size    | `22px`                                                  |
| Paragraph color      | `#777777` (light gray, weight 300)                      |
| Body text color      | `#b3b3b3` (outside modal)                               |
| Modal body bg        | `#efefef` (light gray — differs from Modal 15's `#fff`) |
| Modal shadow         | `0 10px 50px -10px rgba(0,0,0,0.9)`                     |
| Modal border-radius  | `7px`                                                   |
| Button border-radius | `4px`                                                   |
| Button primary       | Bootstrap `btn-primary` (blue)                          |
| Form input border    | `none` (no border, shadow instead)                      |
| Form input shadow    | `0 1px 3px 0 rgba(0,0,0,0.2)`                           |
| Custom select        | Same shadow as inputs, no border                        |
| Privacy link         | `#555555` bold, note text `#999999`                     |
| Image half           | flex: 0 0 50%, cover, center                            |

### Visual design (from screenshot)

Split-screen centered modal on dark overlay, same structure as Modal 15:

- **Left half:** full-bleed photograph (nature image), rounded corners.
- **Right half:** light gray (#efefef) background containing:
  - Heading: "Registration form" (dark, ~22px)
  - Subtext paragraph (gray)
  - Country dropdown (select with country list)
  - Full Name text input
  - Email Address email input
  - Date of Birth: three small inputs in a row (MM / DD / YYYY)
  - Full-width "Sign up" primary button
  - Privacy policy note with bold link

Key difference from Modal 15: the right-side content area uses a light gray
background (#efefef) instead of white. Form inputs use subtle shadows instead
of visible borders. Includes a date-of birth split input (3 fields) and a
country dropdown (not present in Modal 15).

## Requirements

### Feature: Registrack template behaviour

#### Scenario: Modal opens when launch button is clicked

- **GIVEN** the user sees the launch button on the page
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal overlay appears
- **AND** the modal is centered on screen
- **AND** the modal has a split-screen layout (image left, form right)

#### Scenario: Modal displays correct form fields

- **GIVEN** the modal is open
- **THEN** there is a heading "Registration form"
- **AND** there is a paragraph description text
- **AND** there is a "Country" dropdown select
- **AND** there is a "Full Name" text input field
- **AND** there is an "Email Address" email input field
- **AND** there is a "Date of Birth" section with MM, DD, and YYYY input fields
- **AND** there is a "Sign up" submit button

#### Scenario: Country dropdown is populated

- **GIVEN** the modal is open
- **WHEN** the user opens the Country dropdown
- **THEN** there is a list of countries starting with Afghanistan
- **AND** the list includes at least 100 countries

#### Scenario: Date of Birth fields are split

- **GIVEN** the modal is open
- **THEN** the Date of Birth section has three separate input fields
- **AND** the first field has placeholder "MM"
- **AND** the second field has placeholder "DD"
- **AND** the third field has placeholder "YYYY"

#### Scenario: Modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** the user clicks the dark backdrop area outside the modal
- **THEN** the modal closes
- **AND** the page returns to the launch button view

#### Scenario: Modal closes on close button click

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X) in the modal
- **THEN** the modal closes

#### Scenario: Modal is responsive on mobile

- **GIVEN** the modal is open on a mobile viewport
- **THEN** the split-screen layout stacks vertically (image on top, form below)
- **AND** all form fields remain usable
- **AND** the date of birth fields stack vertically
- **AND** the submit button is full-width

#### Scenario: Form validation

- **GIVEN** the modal is open
- **WHEN** the user clicks "Sign up" with empty fields
- **THEN** required field validation messages appear
- **AND** the form does not submit

#### Scenario: Privacy policy link is present

- **GIVEN** the modal is open
- **THEN** there is a note "By signing up you will agree to our Privacy Policy"
- **AND** "Privacy Policy" is a clickable link

## Verification checklist

- [ ] Modal opens on launch button click
- [ ] Modal has split-screen layout (image left 50%, form right 50%)
- [ ] Right panel background is light gray (#efefef)
- [ ] Heading: "Registration form"
- [ ] Country dropdown with full country list
- [ ] Full Name text input
- [ ] Email Address email input
- [ ] Date of Birth: MM / DD / YYYY split inputs
- [ ] "Sign up" full-width primary button
- [ ] Privacy policy note with bold link
- [ ] Form inputs have subtle shadow (no visible border)
- [ ] Modal closes on backdrop click
- [ ] Modal closes on close (X) button
- [ ] Responsive: stacks vertically on mobile
- [ ] Image is placeholder (picsum.photos) — no original assets copied
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Design tokens match reference (Roboto font, #000 headings, #777 body, #efefef modal bg, 7px radius, shadow inputs)
