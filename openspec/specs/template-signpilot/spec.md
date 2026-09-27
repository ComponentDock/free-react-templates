# Spec: Signpilot

## Purpose

Signpilot is a free yoga/fitness class registration form template recreating ColorLib
"Reg Form V22" (https://colorlib.com/wp/template/colorlib-regform-22/). It features a
full-page diagonal-split background (light blue + light peach), a centered white card
with a photo on the left and a "Make an Appointment" form on the right, suitable for
yoga studios, fitness classes, and sports booking.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

**Design tokens extracted from the ColorLib screenshot:**

| Token | Value | Notes |
|---|---|---|
| Brand blue | `#87CEEB` | Left half of diagonal split background |
| Brand peach | `#F5D0C4` | Right half of diagonal split background |
| Card background | `#FFFFFF` | White card |
| Card radius | `12px` | Rounded corners on card |
| Button background | `#87CEEB` | Matches brand blue |
| Button text | `#FFFFFF` | White |
| Button radius | `4px` | Slightly rounded |
| Heading color | `#333333` | Dark gray / near-black |
| Heading font | Uppercase bold sans-serif | "MAKE AN APPOINTMENT" |
| Body font | System sans-serif | Clean, modern |
| Input border | `#E0E0E0` | Light gray |
| Input radius | `4px` | Slight rounding |
| Placeholder text | `#999999` | Medium gray |
| Background overlay | Semi-transparent yoga/fitness image | Ghosted behind diagonal split |

**Fidelity note:** Preview URL (preview.colorlib.com) returned 404. Design tokens and
layout are derived from the ColorLib screenshot. The diagonal split background, card
layout, and form structure are matched 1:1.

## Requirements

### Requirement: Page background

The page SHALL render a full-viewport background with a diagonal split — light blue on
the left and light peach/pink on the right, overlaid with a semi-transparent
yoga/fitness background image.

#### Scenario: Diagonal split background is visible

- **WHEN** I visit the Signpilot page
- **THEN** I see a full-viewport background with a diagonal split
- **AND** the left portion is light blue (#87CEEB)
- **AND** the right portion is light peach (#F5D0C4)

#### Scenario: Background overlay image is visible

- **WHEN** I visit the Signpilot page
- **THEN** I see a semi-transparent yoga/fitness image overlaying the diagonal background

### Requirement: Centered card

The page SHALL display a single white card centered on the background with two columns:
a photo on the left and a form on the right.

#### Scenario: Card is centered on the page

- **WHEN** I visit the Signpilot page
- **THEN** I see a white card centered horizontally and vertically on the background
- **AND** the card has rounded corners and a subtle shadow

#### Scenario: Card has two-column layout

- **WHEN** I visit the Signpilot page
- **THEN** the card has a left column with a photo and a right column with the form

### Requirement: Card photo

The left column of the card SHALL display a fitness/yoga photo with rounded corners.

#### Scenario: Photo is visible

- **WHEN** I visit the Signpilot page
- **THEN** I see a fitness/yoga photo in the left column of the card
- **AND** the photo has rounded corners

### Requirement: Form heading

The right column SHALL display the heading "MAKE AN APPOINTMENT" in uppercase bold text.

#### Scenario: Heading is visible

- **WHEN** I visit the Signpilot page
- **THEN** I see a heading with text "MAKE AN APPOINTMENT"
- **AND** the heading is uppercase and bold

### Requirement: Form fields

The form SHALL contain five fields: Name (text input), Mail (email input), Phone (text
input), Choose Your Class (select), and Message (textarea).

#### Scenario: All five fields are rendered

- **WHEN** I visit the Signpilot page
- **THEN** I see a text input labeled "Name"
- **AND** I see an email input labeled "Mail"
- **AND** I see a text input labeled "Phone"
- **AND** I see a select element labeled "Choose Your Class"
- **AND** I see a textarea labeled "Message"

#### Scenario: Fields have rounded borders and placeholder text

- **WHEN** I visit the Signpilot page
- **THEN** each form field has a light gray border with rounded corners
- **AND** each field displays placeholder text in medium gray

### Requirement: Submit button

The form SHALL contain a "BOOK NOW" button with a right arrow, styled with a light blue
background and white text.

#### Scenario: Button is visible and styled

- **WHEN** I visit the Signpilot page
- **THEN** I see a "BOOK NOW →" button with a light blue (#87CEEB) background
- **AND** the button has white text and rounded corners

#### Scenario: Submitting the form shows a success message

- **WHEN** I click the "BOOK NOW →" button
- **THEN** I see a success message indicating the appointment was booked
- **AND** the form fields are cleared

### Requirement: Dark mode toggle

The navbar SHALL include a dark-mode toggle button.

#### Scenario: Toggling dark mode changes the background

- **WHEN** I click the "Dark mode" button in the navbar
- **THEN** the document root receives the "dark" class
- **AND** the button label changes to "Light mode"

#### Scenario: Dark class is removed on unmount

- **WHEN** I enable dark mode and then unmount the navbar
- **THEN** the "dark" class is removed from the document root

### Requirement: Footer with Component Dock link

The page SHALL display a footer that links to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer link is present and opens externally

- **WHEN** I visit the Signpilot page
- **THEN** I see a footer with a link to "Component Dock"
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Page renders full-viewport diagonal split background (blue left, peach right)
- [ ] Semi-transparent background overlay image is visible
- [ ] White card is centered with rounded corners and shadow
- [ ] Left column shows fitness/yoga photo with rounded corners
- [ ] "MAKE AN APPOINTMENT" heading is uppercase and bold
- [ ] All 5 form fields render with correct types and placeholders
- [ ] "BOOK NOW →" button is light blue with white text
- [ ] Form submission shows success message and clears fields
- [ ] Dark mode toggle works correctly
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] Package name is @free-react-templates/signpilot
