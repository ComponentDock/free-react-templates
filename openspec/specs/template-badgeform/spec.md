# Template: Badgeform (Registration Form)

## Purpose

Badgeform is a free two-column registration form template recreating ColorLib
"Reg Form V36" (https://colorlib.com/wp/template/colorlib-regform-36/).
It features a split-panel layout: a white left panel for "General Information"
(business details, title, name, position, company, arena, employees) and a
purple right panel for "Contact Details" (address, zip, country, phone, email,
terms checkbox, and a "Register Badge" submit button). The card sits on a
blue-to-purple gradient background.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
**Preview:** https://preview.colorlib.com/theme/colorlib-regform-36/ (404 — preview unavailable; design sourced from downloaded template + screenshot)
**Downloaded template:** colorlib-regform-36.zip (index.html + css/style.css + js/snippet.js)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-36.jpg

## Design Tokens

| Token                   | Value                                                   | Source            |
| ----------------------- | ------------------------------------------------------- | ----------------- |
| Page background         | `#75e2e9` with gradient `linear-gradient(136deg, #9599e2 0%, #8bc6ec 100%)` | CSS |
| Card background         | `#ffffff`                                               | CSS               |
| Card width              | `1100px`                                                | CSS               |
| Card border-radius      | `10px`                                                  | CSS               |
| Card box-shadow         | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                 | CSS               |
| Card margin             | `95px 0`                                                | CSS               |
| Font family             | `'Montserrat', sans-serif` (Regular 400, Medium 500, Bold 700) | CSS @font-face |
| Left panel background   | `#ffffff`                                               | CSS               |
| Left heading color      | `#2271dd` (blue)                                        | CSS               |
| Left input text color   | `#000000`                                               | CSS               |
| Left input placeholder  | `#666666`                                               | CSS               |
| Left input border       | `border-bottom: 1px solid #ccc`                         | CSS               |
| Left input focus border | `border-bottom: 1px solid #999`                         | CSS               |
| Left select color       | `#666666`                                               | CSS               |
| Right panel background  | `#4835d4` (deep purple/indigo)                          | CSS               |
| Right heading color     | `#ffffff`                                               | CSS               |
| Right input text color  | `#ffffff`                                               | CSS               |
| Right input placeholder | `#f2f2f2`                                               | CSS               |
| Right input border      | `border-bottom: 1px solid rgba(255,255,255,0.3)`        | CSS               |
| Right input focus border| `border-bottom: 1px solid #ccc`                         | CSS               |
| Right select color      | `#f2f2f2`                                               | CSS               |
| Button background       | `#ffffff`                                               | CSS               |
| Button hover background | `#cccccc`                                               | CSS               |
| Button border-radius    | `25px` (pill shape)                                     | CSS               |
| Button width            | `180px`                                                 | CSS               |
| Button box-shadow       | `0px 6px 17px 0px rgba(0, 0, 0, 0.15)`                 | CSS               |
| Button text color       | `#333333`                                               | CSS               |
| Checkbox border         | `1px solid #e5e5e5`                                     | CSS               |
| Terms text color        | `#e5e5e5`                                               | CSS               |
| Terms link color        | `#ffffff` (underline)                                   | CSS               |

## Section Structure

Single full-viewport page with a split-panel form card centered on a gradient background.

1. **Gradient background** — `#75e2e9` fallback with `linear-gradient(136deg, #9599e2, #8bc6ec)`
2. **White card** (1100px, rounded 10px, centered)
   a. **Left panel** (white background, 50% width):
      - Heading: "General Information" (#2271dd blue)
      - Title (select: Businessman/Reporter/Secretary)
      - First Name | Last Name (two-column row)
      - Position (select: Director/Manager/Employee)
      - Company (text input)
      - Business Arena | Employees (two-column row, 73%/50% split)
   b. **Right panel** (purple #4835d4 background, 50% width):
      - Heading: "Contact Details" (white)
      - Street + Nr (text input)
      - Additional Information (text input)
      - Zip Code | Place (two-column row)
      - Country (select: Vietnam/Malaysia/India)
      - Code + | Phone Number (two-column row)
      - Your Email (text input)
      - Terms checkbox ("I do accept the Terms and Conditions")
      - "Register Badge" submit button (white pill)

## Requirements

### Requirement: Page layout

The page SHALL render a full-viewport gradient background (#75e2e9 with
linear-gradient 136deg from #9599e2 to #8bc6ec) with a centered white card.

#### Scenario: Gradient background with centered card

- **WHEN** I visit the Badgeform page
- **THEN** I see a gradient background (purple-to-blue)
- **AND** a white card (1100px, rounded corners) is centered on the page

### Requirement: Split-panel layout

The card SHALL be divided into two equal-width panels: a white left panel and
a purple (#4835d4) right panel, side by side.

#### Scenario: Two-panel card layout

- **WHEN** I visit the Badgeform page
- **THEN** I see a left panel with a white background
- **AND** I see a right panel with a purple (#4835d4) background
- **AND** both panels are displayed side by side

### Requirement: Left panel — General Information heading

The left panel SHALL display a heading "General Information" in blue (#2271dd).

#### Scenario: Blue heading on left panel

- **WHEN** I visit the Badgeform page
- **THEN** I see a heading reading "General Information" on the left panel
- **AND** the heading text is blue (#2271dd)

### Requirement: Left panel — Title select

The left panel SHALL display a select dropdown for Title with options
(Businessman, Reporter, Secretary) and a default "Title" placeholder.

#### Scenario: Title dropdown is visible

- **WHEN** I visit the Badgeform page
- **THEN** I see a select dropdown labeled "Title" on the left panel
- **AND** the dropdown has options: Businessman, Reporter, Secretary

### Requirement: Left panel — First Name / Last Name row

The left panel SHALL display two side-by-side text inputs for First Name
and Last Name.

#### Scenario: Two-column name inputs

- **WHEN** I visit the Badgeform page
- **THEN** I see a text input with placeholder "First Name"
- **AND** I see a text input with placeholder "Last Name"
- **AND** they are displayed in a two-column layout

### Requirement: Left panel — Position select

The left panel SHALL display a select dropdown for Position with options
(Director, Manager, Employee).

#### Scenario: Position dropdown is visible

- **WHEN** I visit the Badgeform page
- **THEN** I see a select dropdown with options: Director, Manager, Employee

### Requirement: Left panel — Company input

The left panel SHALL display a full-width text input for Company.

#### Scenario: Company input is full width

- **WHEN** I visit the Badgeform page
- **THEN** I see a text input with placeholder "Company" on the left panel

### Requirement: Left panel — Business Arena / Employees row

The left panel SHALL display a text input for Business Arena (73% width)
alongside a select dropdown for Employees (50% width).

#### Scenario: Business Arena and Employees side by side

- **WHEN** I visit the Badgeform page
- **THEN** I see a text input with placeholder "Business Arena"
- **AND** I see a select dropdown with options: Trainee, Colleague, Associate

### Requirement: Right panel — Contact Details heading

The right panel SHALL display a heading "Contact Details" in white.

#### Scenario: White heading on right panel

- **WHEN** I visit the Badgeform page
- **THEN** I see a heading reading "Contact Details" on the right panel
- **AND** the heading text is white

### Requirement: Right panel — Street and Additional inputs

The right panel SHALL display text inputs for Street + Nr and Additional
Information, each full width with white text on transparent background.

#### Scenario: Address inputs on right panel

- **WHEN** I visit the Badgeform page
- **THEN** I see a text input with placeholder "Street + Nr"
- **AND** I see a text input with placeholder "Additional Information"

### Requirement: Right panel — Zip Code / Place row

The right panel SHALL display a text input for Zip Code and a select for Place
(Street, District, City) side by side.

#### Scenario: Zip and Place side by side

- **WHEN** I visit the Badgeform page
- **THEN** I see a text input with placeholder "Zip Code"
- **AND** I see a select dropdown with options: Street, District, City

### Requirement: Right panel — Country select

The right panel SHALL display a select dropdown for Country with options
(Vietnam, Malaysia, India).

#### Scenario: Country dropdown is visible

- **WHEN** I visit the Badgeform page
- **THEN** I see a select dropdown with options: Vietnam, Malaysia, India

### Requirement: Right panel — Code / Phone row

The right panel SHALL display a text input for Code + and a text input for
Phone Number side by side.

#### Scenario: Code and Phone side by side

- **WHEN** I visit the Badgeform page
- **THEN** I see a text input with placeholder "Code +"
- **AND** I see a text input with placeholder "Phone Number"

### Requirement: Right panel — Email input

The right panel SHALL display a full-width text input for Your Email.

#### Scenario: Email input on right panel

- **WHEN** I visit the Badgeform page
- **THEN** I see a text input with placeholder "Your Email" on the right panel

### Requirement: Right panel — Terms checkbox

The right panel SHALL display a checkbox with the text "I do accept the Terms
and Conditions of your site." where "Terms and Conditions" is an underlined link.

#### Scenario: Terms checkbox is visible

- **WHEN** I visit the Badgeform page
- **THEN** I see a checkbox on the right panel
- **AND** the checkbox label reads "I do accept the Terms and Conditions of your site."

### Requirement: Right panel — Register Badge button

The right panel SHALL display a white pill-shaped "Register Badge" submit
button with a box-shadow, left-aligned in the panel.

#### Scenario: White pill submit button

- **WHEN** I visit the Badgeform page
- **THEN** I see a submit button labeled "Register Badge"
- **AND** the button has a white background
- **AND** the button is pill-shaped (border-radius 25px)
- **AND** the button has a box-shadow effect

### Requirement: Responsive layout

On viewports narrower than 768px, the split layout SHALL stack vertically
with the left panel on top and the right panel below. On viewports between
768px and 991px, inner form groups within each panel shall stack vertically.

#### Scenario: Mobile view stacks panels vertically

- **WHEN** I visit the Badgeform page on a viewport narrower than 768px
- **THEN** the left panel appears above the right panel
- **AND** both panels take full width

### Requirement: No ColorLib references in app code

The app code SHALL NOT contain any references to ColorLib, colorlib.com, or
preview.colorlib.com. Provenance lives only in the spec, TEMPLATES.md, and PR.

#### Scenario: Clean app code

- **WHEN** I search the app source code for "colorlib"
- **THEN** no matches are found

### Requirement: Footer with Component Dock link

The template footer SHALL link to https://www.componentdock.com/ branded
as "Component Dock".

#### Scenario: Footer attribution

- **WHEN** I scroll to the bottom of the Badgeform page
- **THEN** I see a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

## Verification Checklist

- [ ] Gradient background (#75e2e9 + linear-gradient) fills viewport
- [ ] White card centered on page with border-radius 10px and box-shadow
- [ ] Left panel: white background, "General Information" heading (blue)
- [ ] Left panel: Title select dropdown
- [ ] Left panel: First Name | Last Name two-column inputs
- [ ] Left panel: Position select dropdown
- [ ] Left panel: Company full-width input
- [ ] Left panel: Business Arena (73%) | Employees (50%) row
- [ ] Right panel: purple (#4835d4) background, "Contact Details" heading (white)
- [ ] Right panel: Street + Nr input
- [ ] Right panel: Additional Information input
- [ ] Right panel: Zip Code | Place two-column row
- [ ] Right panel: Country select dropdown
- [ ] Right panel: Code + | Phone Number two-column row
- [ ] Right panel: Your Email input
- [ ] Right panel: Terms checkbox with link
- [ ] Right panel: "Register Badge" white pill button
- [ ] Inputs have bottom-border-only styling (not full border)
- [ ] Responsive: panels stack vertically on mobile (< 768px)
- [ ] Montserrat font family loaded
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
