# Template: ModalDrift (Modal)
<!-- prep-status: shipped-as=modalpoint -->
> **SHIPPED-UNDER** — the ColorLib `modal-16` design this prep describes already
> ships as `apps/modalpoint` (<https://modalpoint.free.componentdock.com>).
> Do not scaffold `apps/modaldrift`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-modalpoint/spec.md`.

## Purpose

Recreation of the ColorLib "Modal V16" template — a split-screen registration
pop-up modal with a background image on the left half and a multi-field
registration form on the right half.

- **Source:** [ColorLib Modal 16](https://colorlib.com/wp/template/modal-16/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-16/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-16.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)
- **Description:** A full-blown, easy-to-use and Bootstrap-based free
  registration form pop-up modal that features a split-screen design.

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token | Value | Notes |
|-------|-------|-------|
| Body font | `Roboto`, sans-serif, 300 weight | Main body text |
| Heading font | `Roboto`, sans-serif | Same family, default weight |
| Paragraph color | `#b3b3b3` | Light gray text |
| Modal heading color | `#000` (black) | font-size: 22px |
| Modal paragraph color | `#777` | font-size: 14px |
| Button primary | Bootstrap `btn-primary` (#007bff) | border-radius: 4px, full-width |
| Button secondary | Bootstrap `btn-secondary` (#6c757d) | px-4 py-3 for launch button |
| Modal body background | `#efefef` (light gray) | |
| Modal border-radius | `7px` | Rounded corners on modal |
| Modal shadow | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong shadow |
| Form control | No border, transparent bg | box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2) |
| Form control focus | Same shadow | No focus ring glow |
| Custom select | No border, transparent bg | box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2) |
| Privacy link color | `#555` | font-weight: 900 |
| Privacy note color | `#999` | Small text fine print |
| Promo image | `flex: 0 0 50%` | Takes exactly half the modal |
| Page layout | Full viewport height, centered | `height: 100vh` |
| Launch button | `btn-secondary` with `px-4 py-3` | Triggers the modal |

## Visual Design

From the preview HTML/CSS and ColorLib page metadata: A full-viewport page
with vertically and horizontally centered content showing a "Modal #6" heading
and a gray "Launch modal" button. Clicking the button opens a large, centered
Bootstrap modal with a split-screen (flexbox) layout — the left half displays
a background image (placeholder) covering 50% width, and the right half shows
a light gray (#efefef) content area with a bold heading ("Registration form"),
a short description paragraph, and a registration form. The form includes:
a country dropdown select, full name text input, email address input, date
of birth split into three columns (MM, DD, YYYY), a full-width primary "Sign
up" button, and a privacy policy note with link below. The modal has rounded
corners (7px), a deep box-shadow, and the form inputs have transparent borders
with subtle shadows. The overall aesthetic is clean, modern, and focused on
lead capture — the image draws attention while the structured form collects
detailed user information.

## Requirements

### Feature: ModalDrift template behaviour

**Background**
- **GIVEN** the page loads with a centered layout
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Modal #6" is visible
- **AND** a "Launch modal" button is displayed below the title

#### Scenario: Modal opens on button click

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a large modal dialog appears centered in the viewport
- **AND** the modal displays a split-screen layout
- **AND** the left half shows a background image
- **AND** the right half shows a heading "Registration form"
- **AND** the right half shows a description paragraph
- **AND** the right half shows a registration form

#### Scenario: Registration form contains required fields

- **GIVEN** the modal is open
- **WHEN** the user inspects the form
- **THEN** a "Country" dropdown select is visible
- **AND** a "Full Name" text input is visible
- **AND** an "Email Address" input field is visible
- **AND** a "Date of Birth" section with MM, DD, YYYY inputs is visible
- **AND** a "Sign up" submit button is visible
- **AND** a privacy policy note is displayed below the button

#### Scenario: Form submission with valid data

- **GIVEN** the modal is open
- **WHEN** the user selects a country from the dropdown
- **AND** the user enters a full name
- **AND** the user enters a valid email address
- **AND** the user enters a date of birth (MM, DD, YYYY)
- **AND** the user clicks the "Sign up" button
- **THEN** the form submits (or shows validation feedback)

#### Scenario: Form submission with empty fields

- **GIVEN** the modal is open
- **WHEN** the user clicks the "Sign up" button without entering data
- **THEN** required field validation errors appear
- **AND** the form does not submit

#### Scenario: Modal closes on close button click

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal closes with a fade-out animation
- **AND** the page content is visible again

#### Scenario: Modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** the user clicks the dark backdrop area outside the modal
- **THEN** the modal closes
- **AND** the page content is visible again

#### Scenario: Modal closes on Escape key

- **GIVEN** the modal is open
- **WHEN** the user presses the Escape key
- **THEN** the modal closes
- **AND** the page content is visible again

#### Scenario: Modal keyboard accessibility

- **GIVEN** the modal is open
- **WHEN** the user presses Tab repeatedly
- **THEN** focus cycles through the modal form fields only
- **AND** focus does not escape to the background page

#### Scenario: Responsive layout

- **GIVEN** the modal is open on a mobile viewport (< 768px)
- **THEN** the split-screen layout stacks vertically
- **AND** the image appears above the form content
- **AND** all form fields remain usable

#### Scenario: Country dropdown functionality

- **GIVEN** the modal is open
- **WHEN** the user clicks the Country dropdown
- **THEN** a list of countries is displayed
- **AND** the user can select a country
- **AND** the selected country appears in the dropdown

#### Scenario: Date of birth inputs

- **GIVEN** the modal is open
- **WHEN** the user focuses on a date field (MM, DD, or YYYY)
- **THEN** the input accepts text
- **AND** the placeholder text indicates the expected format

## Verification checklist

- [ ] Page renders centered "Modal #6" heading and launch button
- [ ] Launch button triggers modal with split-screen layout
- [ ] Left half displays a placeholder image (50% width)
- [ ] Right half displays heading, description, and form
- [ ] Form has country dropdown, full name, email, date of birth fields
- [ ] Date of birth is split into three columns (MM, DD, YYYY)
- [ ] "Sign up" button is full-width primary style
- [ ] Privacy policy note appears below the button
- [ ] Modal has 7px border-radius and deep shadow
- [ ] Modal body has light gray (#efefef) background
- [ ] Form inputs have transparent borders with subtle shadows
- [ ] Close button (X) closes the modal
- [ ] Backdrop click closes the modal
- [ ] Escape key closes the modal
- [ ] Focus trap works within the modal
- [ ] Responsive: stacks vertically on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/modal-16/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#007bff` — nearest `#fba278` (d=288)
<!-- live-palette-unverified:end -->
