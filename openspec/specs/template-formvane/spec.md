# Template: FormVane (Multi-Step User Profile Wizard)

## Purpose

Recreation of **ColorLib Wizard 9** — a three-step user profile wizard form template with progressive disclosure, icon-labeled input fields, a country dropdown, a datepicker, and a category selection grid.

- **Source slug:** `colorlib-wizard-9`
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-9/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-9/ (404 — unreachable; design captured from source HTML/CSS at `https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html` and screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `formvane` (app: `apps/formvane`, package: `@free-react-templates/formvane`)

## Design Tokens

| Token              | Value / Notes                                                                 |
| ------------------ | ----------------------------------------------------------------------------- |
| Brand primary      | `#3377c0` medium blue (headings, buttons, active states, input focus border)  |
| Button hover       | `#3b87d9` lighter blue on hover                                               |
| Page background    | Full-viewport background image (blue floral/nature scene); use `picsum.photos` placeholder |
| Card background    | `#ffffff` pure white, no border-radius (sharp/boxy edges)                     |
| Wrapper background | Subtle repeating pattern behind card (original: `form-bg.png`); omit or use subtle noise |
| Text primary       | `#333333` dark gray (labels, inputs, headings color via font weight)          |
| Text secondary     | `#999999` light gray (body text, input text color)                            |
| Input border       | `#cccccc` thin gray border                                                    |
| Input focus border | `#3377c0` brand blue                                                          |
| Grid inactive bg   | `#b3b3b3` gray (inactive category card labels)                                |
| Grid active bg     | `#3377c0` brand blue (active category card label)                             |
| Font family        | Poppins (Google Fonts: Regular 400, Medium 500, SemiBold 600)                 |
| Card width         | 819px fixed, centered                                                         |
| Card height        | ~548px (fixed in original; use min-height in React for content reflow)        |
| Card padding       | 64px top, 58px left/right, 0 bottom                                           |
| Input height       | 42px                                                                           |
| Button height      | 42px, 112px wide                                                              |
| Button radius      | 0px (sharp corners, rectangular)                                               |
| Step indicator     | Absolute top-right: large number (`#cccccc`, 40px) + "/ 3" suffix            |
| Heading style      | Poppins SemiBold, 35px, uppercase, letter-spacing 3px, centered              |
| Grid item          | 31.25% width, 3-column flex, image thumbnail + vertical text label (writing-mode: tb-rl) |
| Active grid label  | Blue `#3377c0` background, white text                                         |
| Inactive grid label| Gray `#b3b3b3` background, white text                                         |

## Visual Design (from screenshot)

Full-screen nature background (blue floral scene). Centered white card (819px, sharp edges, subtle shadow). Step counter "1 / 3" at top-right. "USER PROFILE" heading in blue uppercase. 6 input fields in 2-column grid, each with a left-side Material Design icon (account, edit, email, smartphone, spellcheck, calendar). Fields have thin gray borders and left padding for icons. "NEXT" button at bottom right (blue filled, white uppercase text). Disabled state shows helper text "Your must fill all fields, to be able to continue." Step 2 shows "RESIDENTIAL ADDRESS" with Country dropdown and similar input grid. Step 3 shows "WHAT ARE YOU DOING?" with a 3x2 grid of category cards (image + vertical text label).

## Gherkin Requirements

### Feature: FormVane — Multi-Step User Profile Wizard

#### Scenario: Page renders with centered card and step indicator

- **Given** the user navigates to the FormVane page
- **When** the page loads
- **Then** a centered white card is displayed on a full-viewport background
- **And** a step indicator shows "1 / 3" in the top-right corner of the card
- **And** the number "1" is large and gray, "/ 3" is smaller and gray

#### Scenario: Step 1 displays User Profile form

- **Given** the user is on Step 1
- **When** the form renders
- **Then** a heading "USER PROFILE" is displayed in blue uppercase
- **And** 6 input fields exist in a 2-column grid layout:
  - Full Name (user icon)
  - Education Level (edit icon)
  - Email ID (email icon)
  - Phone Number (smartphone icon)
  - Specialization (spellcheck icon)
  - Date of Birth (calendar icon)
- **And** each field has a left-aligned icon inside the input area

#### Scenario: Step 1 fields accept input with focus state

- **Given** the user is on Step 1
- **When** the user clicks into an input field
- **Then** the field border changes to brand blue `#3377c0`
- **And** the user can type text into the field

#### Scenario: NEXT button navigates to Step 2

- **Given** the user is on Step 1 and has filled all required fields
- **When** the user clicks the "NEXT" button
- **Then** Step 2 content is displayed
- **And** the step indicator updates to show "2 / 3"

#### Scenario: Step 2 displays Residential Address form

- **Given** the user is on Step 2
- **When** the form renders
- **Then** a heading "RESIDENTIAL ADDRESS" is displayed in blue uppercase
- **And** 6 fields exist in a 2-column grid:
  - Country (dropdown select with options: United States, United Kingdom, Vietnam)
  - Street Address (pin icon)
  - Apartment (home icon)
  - Town / City (pin-drop icon)
  - County (pin icon)
  - Postcode / Zip (password field with eye toggle icon)

#### Scenario: Country field renders as a dropdown

- **Given** the user is on Step 2
- **When** the Country field renders
- **Then** it is a `<select>` element with a chevron-down icon on the right
- **And** it contains options: United States, United Kingdom, Vietnam
- **And** the default display shows "United States"

#### Scenario: Postcode/Zip field has password toggle

- **Given** the user is on Step 2
- **When** the Postcode/Zip field renders
- **Then** it has a password-type input with an eye icon
- **And** clicking the eye icon toggles the field between password and text type

#### Scenario: NEXT button navigates to Step 3

- **Given** the user is on Step 2 and has filled all required fields
- **When** the user clicks "NEXT"
- **Then** Step 3 content is displayed
- **And** the step indicator updates to show "3 / 3"

#### Scenario: Step 3 displays category selection grid

- **Given** the user is on Step 3
- **When** the form renders
- **Then** a heading "WHAT ARE YOU DOING?" is displayed in blue uppercase
- **And** a 3-column grid of 6 category cards is shown:
  - Programming, Sports, Business, Tour Guide, Art-Design, Doctor
- **And** each card has a thumbnail image and a vertical text label

#### Scenario: Category card selection works

- **Given** the user is on Step 3
- **When** the user clicks a category card
- **Then** the card becomes active (label background changes from gray to blue)
- **And** only one card can be active at a time

#### Scenario: Category card hover effect

- **Given** the user is on Step 3
- **When** the user hovers over a category card image
- **Then** the image opacity reduces to ~0.6

#### Scenario: BACK button returns to previous step

- **Given** the user is on Step 2 or Step 3
- **When** the user clicks "BACK"
- **Then** the previous step is displayed
- **And** the step indicator updates accordingly

#### Scenario: BACK button is absent on Step 1

- **Given** the user is on Step 1
- **When** the action buttons render
- **Then** only the "NEXT" button is visible (no "BACK" button)

#### Scenario: Disabled state shows helper text

- **Given** the user has not filled all required fields
- **When** the action buttons render
- **Then** the helper text "Your must fill all fields, to be able to continue" is displayed
- **And** the NEXT button is not clickable

#### Scenario: Responsive layout on mobile

- **Given** the viewport width is less than 768px
- **When** the form renders
- **Then** the card fills the full width with reduced padding
- **And** form fields stack into a single column
- **And** action buttons stack vertically, right-aligned

## Verification checklist

- [ ] 3-step wizard with state management (current step index)
- [ ] Step indicator "N / 3" updates reactively
- [ ] Step 1: 6 icon-labeled input fields in 2-column grid
- [ ] Step 2: Country dropdown + 5 input fields in 2-column grid
- [ ] Step 3: 3x2 category card grid with selection highlight
- [ ] NEXT/BACK navigation with proper disabled states
- [ ] Input focus border turns brand blue
- [ ] Sharp-cornered buttons (no border-radius)
- [ ] Poppins font (Google Fonts: Regular, Medium, SemiBold)
- [ ] Full-viewport background image
- [ ] White card, centered, 819px width
- [ ] Responsive single-column layout under 768px
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `picsum.photos/seed/formvane-N/W/H`
- [ ] All tests pass at 100% coverage
