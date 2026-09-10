# Template: FormVane (Multi-Step User Profile Wizard)

## Purpose

Recreation of **ColorLib Wizard 9** — a three-step user profile wizard form template with progressive disclosure, icon-labeled input fields, a country dropdown, and a category selection grid.

- **Source slug:** `colorlib-wizard-9`
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-9/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-9/ (404 — unreachable; design captured from source HTML/CSS at `https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html` and screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `formvane` (app: `apps/formvane`, package: `@free-react-templates/formvane`)

## Design Tokens

| Token              | Value / Notes                                                                |
| ------------------ | ---------------------------------------------------------------------------- |
| Brand primary      | `#3377c0` medium blue (headings, buttons, active states, input focus border) |
| Button hover       | `#3b87d9` lighter blue on hover                                              |
| Page background    | Full-viewport background image; use `picsum.photos` placeholder              |
| Card background    | `#ffffff` pure white, no border-radius (sharp/boxy edges)                    |
| Text primary       | `#333333` dark gray (labels)                                                 |
| Text secondary     | `#999999` light gray (body text)                                             |
| Input border       | `#cccccc` thin gray border                                                   |
| Input focus border | `#3377c0` brand blue                                                         |
| Grid inactive bg   | `#b3b3b3` gray (inactive category card labels)                               |
| Grid active bg     | `#3377c0` brand blue (active category card label)                            |
| Font family        | Poppins (Google Fonts: Regular 400, Medium 500, SemiBold 600)                |
| Card width         | 819px fixed, centered                                                        |
| Card padding       | 64px top, 58px left/right, 0 bottom                                          |
| Input height       | 42px                                                                         |
| Button height      | 42px, 112px wide                                                             |
| Button radius      | 0px (sharp corners, rectangular)                                             |
| Step indicator     | Absolute top-right: large number (`#cccccc`, 40px) + `/ 3` suffix            |
| Heading style      | Poppins SemiBold, 35px, uppercase, letter-spacing 3px, centered              |
| Grid item          | 31.25% width, 3-column flex, image thumbnail + vertical text label           |

## Requirements

### Requirement: Wizard renders with centered card and step indicator

The wizard SHALL display a centered white card on a full-viewport background with a step indicator showing "1 / 3" in the top-right corner.

#### Scenario: Page renders with centered card and step indicator

- **WHEN** the user navigates to the FormVane page
- **THEN** a centered white card is displayed on a full-viewport background
- **AND** a step indicator shows "1 / 3" in the top-right corner of the card

### Requirement: Step 1 displays User Profile form

Step 1 SHALL display a "USER PROFILE" heading and 6 icon-labeled input fields in a 2-column grid layout.

#### Scenario: Step 1 displays User Profile form

- **WHEN** the user is on Step 1
- **THEN** a heading "USER Profile" is displayed in blue uppercase
- **AND** 6 input fields exist in a 2-column grid layout: Full Name, Education Level, Email ID, Phone Number, Specialization, Date of Birth
- **AND** each field has a left-aligned icon inside the input area

#### Scenario: Step 1 fields accept input with focus state

- **WHEN** the user clicks into an input field
- **THEN** the field border changes to brand blue
- **AND** the user can type text into the field

### Requirement: NEXT button navigates between steps

Clicking NEXT SHALL validate the current step and advance to the next step. The step indicator SHALL update accordingly.

#### Scenario: NEXT button navigates to Step 2

- **GIVEN** the user is on Step 1 and has filled all required fields
- **WHEN** the user clicks the "NEXT" button
- **THEN** Step 2 content is displayed
- **AND** the step indicator updates to show "2 / 3"

### Requirement: Step 2 displays Residential Address form

Step 2 SHALL display a "RESIDENTIAL ADDRESS" heading with a country dropdown and 5 input fields.

#### Scenario: Step 2 displays Residential Address form

- **WHEN** the user is on Step 2
- **THEN** a heading "Residential Address" is displayed in blue uppercase
- **AND** 6 fields exist: Country dropdown, Street Address, Apartment, Town / City, County, Postcode / Zip

#### Scenario: Country field renders as a dropdown

- **WHEN** the Country field renders
- **THEN** it is a select element with a chevron-down icon
- **AND** it contains options: United States, United Kingdom, Viet Nam

#### Scenario: Postcode/Zip field has password toggle

- **WHEN** the Postcode/Zip field renders
- **THEN** it has a password-type input with an eye icon
- **AND** clicking the eye icon toggles the field between password and text type

### Requirement: BACK button returns to previous step

Clicking BACK SHALL return the user to the previous step. BACK SHALL NOT appear on Step 1.

#### Scenario: BACK button returns to previous step

- **GIVEN** the user is on Step 2 or Step 3
- **WHEN** the user clicks "BACK"
- **THEN** the previous step is displayed

#### Scenario: BACK button is absent on Step 1

- **GIVEN** the user is on Step 1
- **THEN** only the "NEXT" button is visible (no "BACK" button)

### Requirement: Validation shows helper text when fields are empty

When required fields are empty, SHALL display helper text and prevent navigation.

#### Scenario: Disabled state shows helper text

- **WHEN** the user has not filled all required fields and clicks NEXT
- **THEN** the helper text "Your must fill all fields, to be able to continue" is displayed
- **AND** the wizard does not advance

### Requirement: Step 3 displays category selection grid

Step 3 SHALL display a "WHAT ARE YOU DOING?" heading with a 3-column grid of 6 category cards.

#### Scenario: Step 3 displays category selection grid

- **WHEN** the user is on Step 3
- **THEN** a heading "What are you doing?" is displayed in blue uppercase
- **AND** a 3-column grid of 6 category cards is shown: Programming, Sports, Business, Tour Guide, Art-Design, Doctor
- **AND** each card has a thumbnail image and a vertical text label

#### Scenario: Category card selection works

- **WHEN** the user clicks a category card
- **THEN** the card becomes active (label background changes from gray to blue)
- **AND** only one card can be active at a time

### Requirement: Footer links to Component Dock

The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the page renders
- **THEN** a footer link to "Component Dock" is displayed
- **AND** the link opens in a new tab

## Verification checklist

- [x] 3-step wizard with state management (current step index)
- [x] Step indicator "N / 3" updates reactively
- [x] Step 1: 6 icon-labeled input fields in 2-column grid
- [x] Step 2: Country dropdown + 5 input fields in 2-column grid
- [x] Step 3: 3x2 category card grid with selection highlight
- [x] NEXT/BACK navigation with proper disabled states
- [x] Input focus border turns brand blue
- [x] Sharp-cornered buttons (no border-radius)
- [x] Poppins font (Google Fonts: Regular, Medium, SemiBold)
- [x] White card, centered, 819px width
- [x] Footer links to `https://www.componentdock.com/`
- [x] No ColorLib references in app code
- [x] Placeholder images via `picsum.photos/seed/formvane-N/W/H`
- [x] All tests pass at 100% coverage
