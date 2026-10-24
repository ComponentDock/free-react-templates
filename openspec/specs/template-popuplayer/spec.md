# Template: PopupLayer (Bootstrap Modal Template)
<!-- prep-status: shipped-as=bellpush -->
> **SHIPPED-UNDER** — the ColorLib `modal-10` design this prep describes already
> ships as `apps/bellpush` (<https://bellpush.free.componentdock.com>).
> Do not scaffold `apps/popuplayer`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-bellpush/spec.md`.

## Purpose

Recreation of ColorLib **Modal 10** — a newsletter subscription modal with a background image header, email form, and centered layout.

- **Source:** https://colorlib.com/wp/template/modal-10/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-10/
- **Category:** Bootstrap Modal Templates (Newsletter Subscription)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Design basis:** Bootstrap 4 modal with Poppins font, image header, newsletter form, centered dialog.

## Design Tokens

| Token                | Value                      | Notes                                              |
| -------------------- | -------------------------- | -------------------------------------------------- |
| Brand color          | `#007bff`                  | Primary blue — buttons, links, hover states        |
| Background (page)    | `#ffffff`                  | White                                              |
| Background (modal)   | `#ffffff`                  | White, no border, shadow                           |
| Modal header image   | `bg-1.jpg` (placeholder)   | Background image, height 230px                     |
| Modal body overlap   | `-180px`                   | Body overlaps header image                         |
| Text primary         | `#212529`                  | Near-black for body text                           |
| Text secondary       | `rgba(0, 0, 0, 0.3)`      | Muted for placeholder text                         |
| Font family          | Poppins (Google Fonts)     | Weights 300–900                                    |
| Button background    | `#007bff`                  | Primary blue                                       |
| Button hover         | `#0069d9`                  | Darker blue                                        |
| Button padding       | `py-3 px-4` (12px 16px)   | Generous padding                                   |
| Input background     | `rgba(0, 0, 0, 0.05)`     | Light gray tint                                    |
| Input border-radius  | `0`                        | Square corners (Bootstrap default)                 |
| Input placeholder    | `rgba(0, 0, 0, 0.3)`      | Muted gray                                         |
| Close button         | Ionicons `ion-ios-close`   | Top-right of modal header                          |
| Modal shadow         | `0px 10px 34px -15px rgba(0, 0, 0, 0.24)` | Subtle drop shadow                    |
| Modal max-width      | `500px`                    | Centered dialog                                    |
| Modal border-radius  | `0.3rem`                   | Slight rounding                                    |
| Icon circle          | `200px × 200px`            | Background rgba(255,255,255,0.2), 50% border-radius |

## Requirements

### Feature: PopupLayer template behaviour

#### Scenario: Page loads with launch button

- **GIVEN** the user visits the page
- **THEN** the heading "Modal 10" is visible
- **AND** a "Launch Modal 10" button is displayed

#### Scenario: Modal opens on button click

- **GIVEN** the user clicks the "Launch Modal 10" button
- **THEN** the modal dialog appears centered on screen
- **AND** the modal header shows a background image
- **AND** the modal body displays "Newsletter" heading
- **AND** an email icon is shown

#### Scenario: Newsletter form is displayed

- **GIVEN** the modal is open
- **THEN** the heading "Subscribe to our newsletter" is visible
- **AND** an email input field with placeholder "Enter email address" is shown
- **AND** a "Subscribe" button is displayed

#### Scenario: Form submission

- **GIVEN** the modal is open
- **WHEN** the user enters an email and clicks "Subscribe"
- **THEN** the form submits (prevent default)

#### Scenario: Modal closes

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal closes
- **AND** the page returns to the initial state

#### Scenario: Responsive layout

- **GIVEN** the user views on a mobile device
- **THEN** the modal takes full width
- **AND** the form inputs stack vertically
- **AND** the padding adjusts for smaller screens

## Verification checklist

- [ ] Modal opens and closes correctly
- [ ] Background image header renders (use placeholder)
- [ ] Email form with input and submit button
- [ ] Close button (X) in top-right corner
- [ ] Centered modal dialog (modal-dialog-centered)
- [ ] Modal body overlaps header by -180px
- [ ] Icon circle with semi-transparent background
- [ ] Responsive on mobile (full width, stacked inputs)
- [ ] Poppins font loaded from Google Fonts
- [ ] Brand color #007bff used for buttons
- [ ] Component Dock footer link included
