# Template: Cauldron (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 6" — a multi-step onboarding/registration wizard form with avatar upload, profile fields, and step pagination. Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-6/ (returns 404 at prep time; design based on screenshot reference). Source slug: `colorlib-wizard-6`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with avatar selection, text fields, step indicator, and a macOS-style browser window chrome wrapper.

## Design Tokens (from screenshot reference)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Roboto', sans-serif` (clean modern sans-serif) | Screenshot analysis |
| Background gradient top | `#a8b8d1` (soft periwinkle blue) | Gradient background |
| Background gradient bottom | `#e8b8d1` (soft pink) | Gradient background |
| Overlay text (bg) | `#8997b5` (muted blue-gray, low opacity) | Background watermark text |
| Form card background | `#f7f7f8` (off-white) | Central form card |
| Form card shadow | Subtle drop shadow (box-shadow) | Card elevation |
| Input field background | `#f2f2f4` (light gray) | Pill-shaped inputs |
| Input field border | `#e0e0e2` (thin gray) | Input borders |
| Input placeholder text | `#9a9aa0` (medium gray) | Uppercase placeholder labels |
| Profile circle accent | `#d8a8d8` (soft pink/mauve) | Avatar ring accent |
| Profile circle outer border | `#e0e0e2` | Avatar outer ring |
| Continue button background | `#a8b8d2` (pastel blue) | CTA button |
| Continue button text | `#ffffff` | Button label |
| Active step dot | `#666666` (dark gray, solid) | Step indicator |
| Inactive step dot | `#cccccc` (light gray, outline) | Step indicator |
| macOS traffic lights | `#ff5f57` red, `#febc2e` yellow, `#28c840` green | Browser chrome |
| Form card border-radius | `~10-12px` | Rounded corners |
| Input border-radius | Full pill/rounded (`~20px`) | Rounded inputs |

## Gherkin Requirements

### Feature: Multi-Step Onboarding Wizard

#### Scenario: Page Load and Background
  Given the user loads the wizard page
  When the page renders
  Then a full-page pastel gradient background is displayed (blue-to-pink)
  And large semi-transparent italic bold text overlays the background reading "TELL US ABOUT YOURSELF"
  And a centered form card with rounded corners is shown
  And the macOS-style browser window chrome bar is at the top

#### Scenario: Step 1 - Profile Setup
  Given the user is on step 1 of the wizard
  When step 1 is displayed
  Then an avatar upload area is shown on the left side of the card
  And the text "CHOOSE PICTURE" with a camera icon is visible below the avatar
  And form fields are displayed on the right: First Name, Last Name, Team Name, Email, Create a Password
  And each input has a small circular accent dot to its left
  And inputs are pill-shaped with uppercase placeholder text
  And a "CONTINUE →" button is shown at the bottom left of the card
  And the first pagination dot is active (solid dark), remaining dots are light/outline

#### Scenario: Avatar Upload Interaction
  Given the user is on step 1
  When the user clicks "CHOOSE PICTURE"
  Then a file picker dialog opens for image selection
  And the selected image replaces the default avatar placeholder

#### Scenario: Step 1 Form Validation
  Given the user is on step 1
  When the user clicks "CONTINUE →" without filling required fields
  Then validation errors appear for the missing required fields (First Name, Last Name, Email, Password)
  And the wizard does not advance to step 2

#### Scenario: Step 1 to Step 2 Navigation
  Given the user has filled all required fields on step 1
  When the user clicks "CONTINUE →"
  Then step 2 content is displayed
  And the pagination updates: step 1 dot becomes light/outline, step 2 dot becomes active/solid
  And the form card smoothly transitions to show step 2 fields

#### Scenario: Step 2 Content
  Given step 2 is displayed
  When the wizard shows step 2
  Then appropriate profile/team configuration fields are shown
  And a back/previous action is available to return to step 1

#### Scenario: Step 2 to Step 3 Navigation
  Given the user has completed step 2
  When the user clicks the continue action
  Then step 3 content is displayed
  And the pagination updates: step 2 dot becomes light/outline, step 3 dot becomes active/solid

#### Scenario: Step 3 Completion
  Given step 3 is displayed
  When the user completes all required fields on step 3
  Then a final submission or confirmation action is available
  And the wizard can be completed

#### Scenario: Pagination Navigation
  Given the wizard has multiple steps
  When the user views the pagination dots below the card
  Then the current step dot is solid dark gray
  And future step dots are light gray outlines
  And completed step dots reflect completion state

#### Scenario: Responsive Layout
  Given the user views the wizard on a mobile device
  When the viewport is narrow
  Then the form card stacks vertically (avatar above fields)
  And the macOS window chrome is hidden or simplified
  And inputs and buttons remain tappable (minimum 44px touch targets)

#### Scenario: Keyboard Accessibility
  Given the wizard is displayed
  When the user navigates with keyboard
  Then all form fields are focusable with visible focus rings
  And the tab order follows logical field sequence
  And the "CONTINUE" button is reachable via Tab/Enter

## Verification Checklist

- [ ] Pastel gradient background renders (blue-to-pink vertical)
- [ ] Background watermark text "TELL US ABOUT YOURSELF" is visible but low-opacity
- [ ] macOS-style browser window chrome bar at top with traffic light buttons
- [ ] Central form card has rounded corners (~10-12px) and subtle shadow
- [ ] Avatar upload area with "CHOOSE PICTURE" text and camera icon
- [ ] Five pill-shaped inputs with uppercase placeholder labels
- [ ] Small accent dot (mauve/pink) on each input field
- [ ] "CONTINUE →" button in pastel blue with white text
- [ ] Pagination dots below card (active = solid dark, inactive = light outline)
- [ ] Multi-step navigation works (step 1 → 2 → 3)
- [ ] Form validation prevents advancing with missing required fields
- [ ] Responsive layout on mobile (stacked vertical)
- [ ] Keyboard accessible (focus rings, tab order)
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
