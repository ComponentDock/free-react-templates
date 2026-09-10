# Template: Registease (User Profile Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 9" — a multi-step user profile
registration wizard template.

- **Source**: https://colorlib.com/wp/template/colorlib-wizard-9/
- **Preview**: https://preview.colorlib.com/theme/colorlib-wizard-9/ (unreachable 404 at prep time; screenshot used as sole reference)
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category**: Multi-step registration / wizard form

## Design tokens

Extracted from screenshot analysis (preview CSS unavailable — 404):

| Token | Value | Source |
|-------|-------|--------|
| Brand color (primary) | `#1A5276` dark blue | Header text, NEXT button fill, background photo blue accents |
| Brand color alt | `#2E6BA6` medium blue | Alternate shade visible in button hover |
| Background | Full-bleed nature photograph (warm browns + blue flowers) | Background behind floating card |
| Card background | `#FFFFFF` white | Floating form card |
| Card shadow | subtle drop shadow | Depth separation from background |
| Card edge | sharp/straight (no border-radius on card) | Clean rectangular card |
| Input border | `#DDDDDD` light gray | Form field borders |
| Input border-radius | `2-4px` | Subtle rounded corners on inputs |
| Label color | `#666666` dark gray | Field labels |
| Step indicator color | `#555555` dark gray | "1/3" step counter |
| Instruction text | `#666666` italic gray | "You must fill all fields..." |
| Font family | Sans-serif (Montserrat or Roboto) | All text elements |
| Button fill | `#1A5276` dark blue solid | NEXT button |
| Button text | White, bold, uppercase | Button label |
| Button border-radius | `~4px` | Slight rounding |
| Button padding | `~20px horizontal / ~12px vertical` | Generous click target |

## Visual design notes (from screenshot)

- Full-viewport background: nature photograph of a person resting on brown
  foliage with vibrant blue grape hyacinth flowers (matching the blue brand
  accent).
- Large centered floating white card with drop shadow.
- Card header: "USER PROFILE" in all caps, bold, dark blue, sans-serif,
  centered.
- Step indicator: small "1/3" text in top-right of card (dark gray).
- Form fields: 2-column grid layout with labeled inputs.
- Each input has a left-edge icon (person, pencil, envelope, phone, graduation
  cap, calendar).
- Below fields: italic instruction text ("You must fill all fields, to be able
  to continue").
- Bottom-right: "NEXT" button — solid dark blue, white uppercase text.
- Clean, professional, modern aesthetic. No ornamentation, strong hierarchy.

## Section order and structure

1. **Full-page background** — nature photo or gradient fallback
2. **Floating card container** — centered, white, drop shadow
   2a. **Header** — "USER PROFILE" title, centered
   2b. **Step indicator** — "1/3" top-right
   2c. **Form fields (Step 1 of 3)** — 2-column grid:
       - Row 1: Full Name (person icon) | Education Level (pencil icon)
       - Row 2: Email ID (envelope icon) | Phone Number (phone icon)
       - Row 3: Specialization (graduation cap icon) | Date of Birth (calendar icon)
   2d. **Instruction text** — italic, below fields
   2e. **Navigation buttons** — NEXT (step 1), PREV + NEXT (step 2), SUBMIT (step 3)
3. **Step 2** — Additional profile fields (address, bio, etc.)
4. **Step 3** — Review / confirmation / profile picture upload

## Gherkin requirements

### Feature: Multi-step user profile wizard

  Background:
    Given the user navigates to the Registease page
    And a full-page background image is displayed
    And a centered white card with drop shadow is visible

  Scenario: Initial page load shows Step 1
    Given the wizard has loaded
    Then the header reads "USER PROFILE"
    And the step indicator shows "1 / 3"
    And 6 form fields are visible in a 2-column grid
    And a "NEXT" button is visible at the bottom-right

  Scenario: Step 1 form fields have correct labels and icons
    Then the "Full Name" field has a person icon
    And the "Education Level" field has a pencil icon
    And the "Email ID" field has an envelope icon
    And the "Phone Number" field has a phone icon
    And the "Specialization" field has a graduation cap icon
    And the "Date of Birth" field has a calendar icon

  Scenario: Instructional text displayed on Step 1
    Given the wizard is on Step 1
    Then italic instruction text is visible below the fields
    And the text reads "You must fill all fields, to be able to continue"

  Scenario: Advance to Step 2
    Given the user fills all Step 1 fields
    When the user clicks the "NEXT" button
    Then the step indicator updates to "2 / 3"
    And new form fields for Step 2 are displayed
    And a "PREV" button appears alongside "NEXT"

  Scenario: Navigate back to Step 1
    Given the wizard is on Step 2
    When the user clicks the "PREV" button
    Then the step indicator returns to "1 / 3"
    And the Step 1 form fields are displayed with previous values preserved

  Scenario: Advance to Step 3
    Given the wizard is on Step 2
    And all Step 2 fields are filled
    When the user clicks the "NEXT" button
    Then the step indicator shows "3 / 3"
    And a review or confirmation section is displayed
    And a "SUBMIT" button replaces "NEXT"

  Scenario: Submit completes the wizard
    Given the wizard is on Step 3
    When the user clicks the "SUBMIT" button
    Then a success confirmation is displayed

  Scenario: Validation prevents advancing with empty fields
    Given the wizard is on Step 1
    And some required fields are empty
    When the user clicks the "NEXT" button
    Then the wizard remains on Step 1
    And validation error messages appear on empty required fields

  Scenario: Step indicator is clickable for direct navigation
    Given the wizard is on Step 2
    When the user clicks step indicator "1"
    Then the wizard navigates to Step 1

  Scenario: Form fields have appropriate input types
    Then "Email ID" accepts email format
    And "Phone Number" accepts phone format
    And "Date of Birth" uses a date picker

  Scenario: Responsive layout on mobile
    Given the viewport width is less than 768px
    Then the form fields stack into a single column
    And the card fits within the viewport with padding

  Scenario: Background image fallback
    Given the background image fails to load
    Then a solid gradient background is displayed

  Scenario: Component Dock footer link
    Then the footer contains a link to "https://www.componentdock.com/"
    And the link text includes "Component Dock"

## Verification checklist

- [ ] Spec is complete with Gherkin scenarios for all visible sections
- [ ] Design tokens match screenshot analysis (brand blue `#1A5276`, white card, gray labels)
- [ ] 3-step wizard flow: Step 1 (profile fields) → Step 2 (additional info) → Step 3 (review/submit)
- [ ] 2-column grid layout for form fields on desktop, single column on mobile
- [ ] Left-edge icons on each input field (lucide-react)
- [ ] Step indicator ("1/3", "2/3", "3/3") in card top-right
- [ ] NEXT/PREV/SUBMIT navigation buttons
- [ ] Instruction text below fields
- [ ] Full-page background image with gradient fallback
- [ ] Floating white card with drop shadow, centered
- [ ] "USER PROFILE" header, dark blue, uppercase, centered
- [ ] Form validation with error messages
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Google Fonts loaded via index.html link
- [ ] Icons from lucide-react
