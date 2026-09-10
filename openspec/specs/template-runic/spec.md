# Template: Runic (3-Step Onboarding Wizard)

## Purpose

Runic is a single-page three-step ONBOARDING WIZARD in the free-react-templates
monorepo. It is an original React recreation of the ColorLIB "Colorlib Wizard 6"
free template (source: https://colorlib.com/wp/template/colorlib-wizard-6/),
built under a DIFFERENT name (**Runic**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a multi-step form wizard for user/team onboarding: a centered
white card floating over a soft pastel gradient background (blue → lavender →
pink). It features a circular profile picture upload, pill-shaped form fields,
dot-based step indicators, and a friendly "CONTINUE →" CTA button. The design
is minimalist, soft, and approachable.

- **Source template**: [Colorlib Wizard 6](https://colorlib.com/wp/template/colorlib-wizard-6/)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-6/` (unreachable at prep time — 404; fallback to screenshot)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Naming

The ColorLIB source name "Colorlib Wizard 6" is FORBIDDEN as the app name.
**Runic** is the new, original name — single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md
name. Source slug + preview URL are recorded above.

## Design tokens

| Token                       | Value                                    | Notes                                           |
| --------------------------- | ---------------------------------------- | ----------------------------------------------- |
| Background (page)           | Pastel gradient                          | Top: muted light blue → mid: soft lavender → bottom: warm light pink |
| Background (card)           | `#ffffff` (pure white)                   | Centered form card with large rounded corners and drop shadow |
| Accent / CTA               | `#a8b5f0` (light blue periwinkle)        | "CONTINUE →" button background                  |
| Accent hover               | `#95a3e6` (deeper periwinkle)            | Button hover state                              |
| Active step dot            | `#f0a8d0` (pink/lavender)               | Filled circle indicator for active field/step   |
| Step indicator (inactive)  | `#333333` (dark grey)                    | Outlined circle for pending steps               |
| Step indicator (completed) | `#ffffff` (white filled)                 | Completed step dots                             |
| Text primary               | `#333333` (dark grey)                    | Form labels, field text                         |
| Text secondary             | `#999999` (light grey)                   | Inactive elements                               |
| Input background           | `#f5f5f5` (very light grey)              | Pill-shaped input fields                        |
| Input border               | `none` (borderless, bg-only)             | Soft bg differentiation instead of borders      |
| Profile picture border     | `#d4b8e8` (lavender)                     | Circular border around avatar                   |
| Font family (form)         | `Montserrat, sans-serif`                 | Clean geometric sans-serif, uppercase, via Google Fonts |
| Font family (decorative)   | `Bubblegum Sans, sans-serif` (or similar)| Large bubbly display font for decorative header |
| Border radius (card)       | `24px`                                   | Large soft rounded corners                      |
| Border radius (inputs/btn) | `50px` (pill)                            | Fully rounded pill shapes                       |

## Requirements

### Requirement: Page loads with step 1 active

A three-step onboarding wizard SHALL be displayed with a centered white card
floating over a pastel gradient background. Step 1 (profile identity) should
be active.

#### Scenario: Page loads with profile form visible

- **WHEN** the user opens the Runic page
- **THEN** a three-step onboarding wizard should be visible
- **AND** a decorative header "TELL US ABOUT YOURS" should appear above the card in a large semi-transparent bubbly font
- **AND** step 1 should be displayed and active
- **AND** 3 dot-based step indicators should be visible below the card
- **AND** the first dot should be filled (active) and the remaining two should be outlined (inactive)
- **AND** a circular profile picture placeholder should be visible with a "CHOOSE PICTURE" link below it
- **AND** the form should contain "FIRST NAME" input
- **AND** the form should contain "LAST NAME" input
- **AND** the form should contain "TEAM NAME" input
- **AND** the form should contain "EMAIL" input
- **AND** the form should contain "CREATE A PASSWORD" input
- **AND** a "CONTINUE →" button should be visible

### Requirement: Profile picture upload prompt

The profile picture section SHALL display a circular avatar placeholder with
a "CHOOSE PICTURE" action link.

#### Scenario: Choose picture link visible

- **WHEN** the user views step 1
- **THEN** a circular profile picture placeholder should be visible
- **AND** the placeholder should have a lavender border
- **AND** a "CHOOSE PICTURE" link with a camera icon should appear below the placeholder
- **WHEN** the user clicks "CHOOSE PICTURE"
- **THEN** a file picker dialog should open

### Requirement: Active field indicator

Each form field SHALL display a small circular dot indicator to its left. The
currently active/focused field gets a filled pink dot; others are outlined.

#### Scenario: Active field highlighted with filled dot

- **WHEN** the user focuses on the "EMAIL" input
- **THEN** the dot to the left of "EMAIL" should be filled solid pink/lavender
- **AND** dots for all other fields should be outlined (not filled)

#### Scenario: Focus moves between fields

- **WHEN** the user focuses on the "FIRST NAME" input
- **THEN** the dot for "FIRST NAME" should be filled solid pink/lavender
- **AND** the dot for "EMAIL" should revert to outlined

### Requirement: Required fields validation on step 1

Clicking "CONTINUE" on step 1 with empty required fields SHALL show validation
errors and prevent advancement.

#### Scenario: Empty required fields block advancement

- **WHEN** the user is on step 1
- **AND** the "FIRST NAME" field is empty
- **WHEN** the user clicks "CONTINUE"
- **THEN** the user should remain on step 1
- **AND** a validation error should appear on the "FIRST NAME" field
- **AND** a validation error should appear on the "LAST NAME" field
- **AND** a validation error should appear on the "EMAIL" field

### Requirement: Navigate to step 2

Filling all required fields and clicking "CONTINUE" SHALL advance to step 2.

#### Scenario: Advance to step 2

- **WHEN** the user is on step 1 with valid information
- **WHEN** the user clicks "CONTINUE"
- **THEN** step 2 should become active
- **AND** the step indicator should update (dot 1 filled/completed, dot 2 active)
- **AND** step 2 form content should be displayed

### Requirement: Navigate back to step 1

A back action on step 2 SHALL return to step 1 with data preserved.

#### Scenario: Back navigation preserves data

- **WHEN** the user is on step 2
- **WHEN** the user navigates back
- **THEN** step 1 should become active again
- **AND** the previously entered data should be preserved

### Requirement: Navigate through all steps

The wizard SHALL support forward and backward navigation through all 3 steps.

#### Scenario: Navigate to step 3

- **WHEN** the user is on step 2 with valid information
- **WHEN** the user clicks "CONTINUE"
- **THEN** step 2 should show as completed
- **AND** step 3 should become active
- **AND** the step indicator should update (dots 1-2 filled, dot 3 active)

#### Scenario: Submit on final step

- **WHEN** the user is on step 3
- **WHEN** the user clicks the final action button
- **THEN** an onboarding completion message should appear
- **AND** the wizard should show a success/confirmation state

### Requirement: Pill-shaped input fields

All form fields SHALL use pill-shaped (fully rounded) rectangular inputs with
a light grey background, matching the soft aesthetic.

#### Scenario: Input styling

- **WHEN** the user views any form field
- **THEN** the input should have fully rounded corners (pill shape)
- **AND** the input should have a very light grey background
- **AND** placeholder text should be uppercase

### Requirement: Responsive layout on mobile

The wizard SHALL adapt to mobile viewports while maintaining all functionality.

#### Scenario: Mobile viewport layout

- **WHEN** the user opens the page on a viewport width less than 768px
- **THEN** the wizard card should fit the screen width with appropriate padding
- **AND** all form fields should remain usable and accessible
- **AND** the step indicator should remain visible

### Requirement: Footer links to Component Dock

The page footer SHALL include a link to https://www.componentdock.com/.

#### Scenario: Footer displays correctly

- **WHEN** the user views any page
- **THEN** a footer should be visible with a link to componentdock.com
- **AND** the link should display "More templates at Component Dock"
- **AND** the link should open in a new tab

## Verification checklist

- [ ] Preview unreachable (404) — fallback to screenshot used for all design tokens
- [ ] Page background is a pastel gradient (blue → lavender → pink)
- [ ] Centered white card with large rounded corners (24px radius) and drop shadow
- [ ] Decorative header "TELL US ABOUT YOURS" in large semi-transparent bubbly font
- [ ] Step indicator: 3 dot circles below the card, active = filled, inactive = outlined
- [ ] Circular profile picture placeholder with lavender border
- [ ] "CHOOSE PICTURE" link with camera icon below avatar
- [ ] Pill-shaped form inputs: First Name, Last Name, Team Name, Email, Create a Password
- [ ] Uppercase placeholder text in inputs
- [ ] Active field dot indicator (filled pink/lavender for focused field)
- [ ] "CONTINUE →" pill button in periwinkle blue
- [ ] Required field validation prevents advancement
- [ ] 3-step navigation with forward/back support
- [ ] Back navigation preserves entered data
- [ ] Progress dots update as user advances
- [ ] Responsive layout stacks on mobile
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] Uses cn() from packages/ui
- [ ] Font family: Montserrat + decorative display font via Google Fonts
- [ ] 100% test coverage
