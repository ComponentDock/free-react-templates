# Template: FormNova (Bootstrap Wizard)

## Purpose

Recreation of **ColorLib Wizard 7** — a multi-step restaurant table booking
wizard. The original template is a sleek, dark-themed form with a 3-step flow
(party size → contact/details → confirmation) and a food photography hero image.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-wizard-7/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-7/ (returns
  404 as of 2026-09-10; design captured from TEMPLATES.md screenshot only)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/formnova`
- **Package:** `@free-react-templates/formnova`
- **Deploy target:** `https://formnova.free.componentdock.com`

## Design Tokens

Captured from the TEMPLATES.md screenshot (preview unreachable).

| Token                | Value                                    | Notes                                     |
| -------------------- | ---------------------------------------- | ----------------------------------------- |
| Page background      | `#FFFFFF` (white)                        | Wizard centered on white canvas           |
| Panel background     | `#2D2D2D` (dark charcoal)               | Main form container                       |
| Panel border         | `#3E3E3E` (light charcoal)              | Subtle outline on panel                   |
| Input background     | `#333333` (darker charcoal)             | Slightly darker than panel for contrast   |
| Input border         | `#4A4A4A` (gray)                        | Subtle bottom border on inputs            |
| Primary text         | `#FFFFFF` (white)                        | Headings, labels, field values, icons     |
| Accent text          | `#D4C5A9` (warm cream/beige)            | Cursive subheading                        |
| Button background    | `#2D2D2D` (matches panel)               | NEXT button fill                          |
| Button border        | `#FFFFFF` (white)                        | Thin white border on button               |
| Button text          | `#FFFFFF` (white)                        | Button label                              |
| Step counter         | `#FFFFFF` (white)                        | Current step number, slightly larger      |
| **Font — Heading**   | Montserrat (bold, uppercase, ~26px)     | Geometric sans-serif, "BOOK A TABLE"      |
| **Font — Cursive**   | Dancing Script (italic, ~14px)           | Handwritten subheading "~ Check out..."   |
| **Font — Body**      | Montserrat (regular/medium, 11–15px)    | Labels, field values, step counter        |
| **Button radius**    | 0 (sharp corners)                        | Rectangle, no border-radius               |
| **Hero image**       | Full-height food photography             | Dark, moody, upscale restaurant tone      |

## Section Structure

The template is a **centered wizard component** with two visual halves:

1. **Hero Image Panel** (left, behind): Full-height food photography — moody,
   low-key lighting, upscale restaurant vibe. Serves as background context.
2. **Form Panel** (right, overlapping): Dark charcoal card containing:
   - **Heading:** "BOOK A TABLE" — white, uppercase, Montserrat bold.
   - **Subheading:** "~ Check out our place ~" — cream cursive (Dancing Script).
   - **Form Fields** (Step 1 of 3):
     - **People selector** — person icon + dropdown, default value "1".
     - **Date picker** — calendar icon + date field, format "DD MON YYYY".
     - **Time range** — clock icon + two dropdowns (start/end time).
   - **Action Button:** "NEXT" — sharp rectangle, white border, white text.
   - **Step Counter:** "1 / 3" — bottom-right of panel.

## Gherkin Requirements

### Feature: FormNova — Multi-Step Restaurant Booking Wizard

  Background:
    Given the user navigates to the FormNova template
    And the page displays a dark wizard panel over a hero image

  Scenario: Initial rendering
    Then the heading "BOOK A TABLE" is visible
    And the cursive subheading is visible
    And three form fields are visible: People, Date, Time
    And the step counter shows "1 / 3"
    And the "NEXT" button is visible

  Scenario: Step indicator reflects current step
    Then the step counter displays "1 / 3" on the first step
    When the user completes step 1 and advances
    Then the step counter displays "2 / 3"
    When the user completes step 2 and advances
    Then the step counter displays "3 / 3"

  Scenario: People selector
    Given the People field is visible with default value "1"
    When the user clicks the People dropdown
    Then a list of party size options is shown
    When the user selects a party size
    Then the People field updates to show the selected value

  Scenario: Date picker
    Given the Date field is visible
    When the user selects a date
    Then the Date field displays the chosen date in "DD MON YYYY" format

  Scenario: Time range selection
    Given the start Time field shows a default value
    And the end Time field shows a default value
    When the user selects a start time
    Then the start time field updates
    When the user selects an end time
    Then the end time field updates

  Scenario: Navigation between steps
    Given the wizard is on step 1
    When the user clicks "NEXT"
    Then the wizard advances to step 2
    And the step counter updates to "2 / 3"

  Scenario: Back navigation
    Given the wizard is on step 2
    When the user clicks "BACK"
    Then the wizard returns to step 1
    And the step counter updates to "1 / 3"

  Scenario: Final step shows confirmation
    Given the wizard is on step 3
    Then a booking confirmation summary is displayed
    And a "BOOK NOW" or "CONFIRM" button is visible

  Scenario: Keyboard accessibility
    Given the wizard is rendered
    When the user presses Tab
    Then focus moves through form fields in logical order
    And focus indicators are visible on each interactive element

  Scenario: Responsive layout
    Given the viewport is narrower than 768px
    Then the hero image is hidden or stacked above the form panel
    And the form panel takes full width

## Verification Checklist

- [ ] Hero image panel renders with food photography placeholder
- [ ] Dark form panel overlaps hero image correctly
- [ ] "BOOK A TABLE" heading in Montserrat bold uppercase white
- [ ] Cursive subheading in Dancing Script cream color
- [ ] People, Date, Time form fields render with icons
- [ ] Step counter shows "1 / 3" on first step
- [ ] "NEXT" button with sharp corners, white border, white text
- [ ] Wizard advances through 3 steps with correct counter
- [ ] Back navigation returns to previous step
- [ ] Step 3 shows confirmation/summary view
- [ ] Form fields are keyboard-navigable with visible focus
- [ ] Responsive: mobile layout stacks or adjusts panel
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app source code
- [ ] CNAME set to formnova.free.componentdock.com
- [ ] Vite config has injectUiSource()
- [ ] 100% test coverage maintained
