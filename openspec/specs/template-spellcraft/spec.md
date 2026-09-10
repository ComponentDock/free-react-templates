# Template: Spellcraft (Restaurant Booking Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 7 (`https://colorlib.com/wp/template/colorlib-wizard-7/`)
- **New Name**: `spellcraft` (App directory: `apps/spellcraft`, Package: `@free-react-templates/spellcraft`)
- **Category**: Forms / Multi-step Wizard (Restaurant Reservation)
- **Description**: An upscale dark-themed 3-step restaurant table booking wizard with split layout — food photography on the left, multi-step booking form on the right. Designed for fine-dining and premium restaurant websites.
- **Source slug**: `colorlib-wizard-7`
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-7/` (404 at prep time — fallback to screenshot analysis)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg`

**Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

## Design Tokens (from screenshot — preview unreachable)

> All tokens extracted via screenshot analysis. The live preview at
> `https://preview.colorlib.com/theme/colorlib-wizard-7/` returned 404.
> Tokens below are best-effort approximations from the visual reference.

| Token | Value | Notes |
|-------|-------|-------|
| Page background | `#1a1a1a` (near-black) | Dark luxury full-page background |
| Card/form background | `#2a2a2e` (dark charcoal) | Wizard card container, subtle light border |
| Card border | `1px solid #3a3a3e` (subtle gray) | Thin light border around the form card |
| Text primary | `#ffffff` (white) | All labels, values, title |
| Text secondary/muted | `#9a9a9a` (light gray) | Step counter, helper text |
| Accent (subtitle) | `#e8a87c` (peach/warm orange) | Cursive subtitle text |
| Font family (heading/body) | `"Poppins", sans-serif` | Clean modern sans-serif |
| Font family (subtitle) | `"Dancing Script", cursive` or similar | Cursive script for warm accent |
| Button style | White outline, border-only, rounded | "NEXT" button — no fill, white border + text |
| Button border radius | `4px` | Slightly rounded corners |
| Button padding | `10px 30px` | Comfortable click target |
| Input border | `1px solid #4a4a4e` (gray underline) | Bottom-border-only style per field |
| Input text color | `#ffffff` (white) | Dropdown/display values |
| Field label color | `#cccccc` (off-white) | Smaller labels above values |
| Step indicator | `1 / 3` light gray text | Bottom-right of form card |
| Step indicator color | `#888888` | Muted gray |
| Split layout | 50/50 horizontal | Left: food image, Right: booking form |
| Image section background | `#000000` (pure black) | Behind food photography |

## Gherkin Requirements

### Feature: Spellcraft — 3-Step Restaurant Table Booking Wizard

  Scenario: Page loads with step 1 active
    Given the user opens the Spellcraft booking page
    Then the page has a split layout with a food image on the left and a booking form on the right
    And the form heading "BOOK A TABLE" is visible in bold white uppercase text
    And the subtitle "Check out our place" is visible in peach/orange cursive script
    And the step indicator shows "1 / 3"
    And the "NEXT" button is visible

  Scenario: Step 1 displays booking fields
    Given the user is on step 1
    Then the form shows a "People" field with a dropdown selector (default value "1")
    And the form shows a "Date" field with a date display
    And the form shows a "Time" section with start and end time dropdowns
    And the "NEXT" button is visible at the bottom

  Scenario: Step 1 to Step 2 navigation
    Given the user is on step 1 with valid selections
    When the user clicks the "NEXT" button
    Then step 2 becomes active
    And the step indicator updates to "2 / 3"
    And the step 1 fields are replaced with step 2 fields

  Scenario: Step 2 displays personal contact information
    Given the user is on step 2
    Then the form shows fields for name and contact information
    And a "NEXT" button is visible to proceed to step 3
    And a back option is available to return to step 1

  Scenario: Step 2 to Step 3 navigation
    Given the user is on step 2 with valid data
    When the user clicks the "NEXT" button
    Then step 3 becomes active
    And the step indicator updates to "3 / 3"

  Scenario: Step 3 displays confirmation or special requests
    Given the user is on step 3
    Then the form shows a summary or special requests field
    And a "BOOK" or submit button is visible
    And a back option is available to return to step 2

  Scenario: Form submission
    Given the user has completed all three steps
    When the user clicks the submit button on step 3
    Then a confirmation message or success state is displayed

  Scenario: Back navigation preserves data
    Given the user is on step 2
    When the user navigates back to step 1
    Then the step 1 fields retain their previously entered values
    And the step indicator shows "1 / 3"

  Scenario: Split layout responsive on mobile
    Given the user views the page on a viewport width less than 768px
    Then the split layout collapses to a single column
    And the food image appears above the form
    And all form fields remain accessible

  Scenario: Dark theme styling
    Given the page is rendered
    Then the background is near-black (#1a1a1a)
    And the form card has a dark charcoal background with subtle border
    And all text is white or light gray
    And the subtitle uses a warm peach/orange accent color

  Scenario: Button styling
    Given the page is rendered
    Then the "NEXT" button has a white outline (no fill) with white text
    And the button has slightly rounded corners
    And the button hover state provides visual feedback

  Scenario: Footer with Component Dock branding
    Given the page is rendered
    Then the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] 3-step wizard form renders with progress indicator ("1 / 3", "2 / 3", "3 / 3")
- [ ] Split layout: food image left, booking form right
- [ ] Step 1: People dropdown, Date display, Time start/end dropdowns
- [ ] Step 2: Name and contact information fields
- [ ] Step 3: Summary or special requests + submit button
- [ ] NEXT/Back navigation between steps
- [ ] Step indicator updates on step change
- [ ] Back navigation preserves previously entered data
- [ ] Dark luxury theme: near-black background, dark charcoal card, white text
- [ ] Peach/orange cursive subtitle accent
- [ ] White outline NEXT button with rounded corners
- [ ] Responsive: single-column on mobile
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
