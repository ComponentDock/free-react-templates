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

## Requirements

### Feature: FormNova — Multi-Step Restaurant Booking Wizard

  Background:
- **GIVEN** the user navigates to the FormNova template
- **AND** the page displays a dark wizard panel over a hero image

#### Scenario: Initial rendering

- **THEN** the heading "BOOK A TABLE" is visible
- **AND** the cursive subheading is visible
- **AND** three form fields are visible: People, Date, Time
- **AND** the step counter shows "1 / 3"
- **AND** the "NEXT" button is visible

#### Scenario: Step indicator reflects current step

- **THEN** the step counter displays "1 / 3" on the first step
- **WHEN** the user completes step 1 and advances
- **THEN** the step counter displays "2 / 3"
- **WHEN** the user completes step 2 and advances
- **THEN** the step counter displays "3 / 3"

#### Scenario: People selector

- **GIVEN** the People field is visible with default value "1"
- **WHEN** the user clicks the People dropdown
- **THEN** a list of party size options is shown
- **WHEN** the user selects a party size
- **THEN** the People field updates to show the selected value

#### Scenario: Date picker

- **GIVEN** the Date field is visible
- **WHEN** the user selects a date
- **THEN** the Date field displays the chosen date in "DD MON YYYY" format

#### Scenario: Time range selection

- **GIVEN** the start Time field shows a default value
- **AND** the end Time field shows a default value
- **WHEN** the user selects a start time
- **THEN** the start time field updates
- **WHEN** the user selects an end time
- **THEN** the end time field updates

#### Scenario: Navigation between steps

- **GIVEN** the wizard is on step 1
- **WHEN** the user clicks "NEXT"
- **THEN** the wizard advances to step 2
- **AND** the step counter updates to "2 / 3"

#### Scenario: Back navigation

- **GIVEN** the wizard is on step 2
- **WHEN** the user clicks "BACK"
- **THEN** the wizard returns to step 1
- **AND** the step counter updates to "1 / 3"

#### Scenario: Final step shows confirmation

- **GIVEN** the wizard is on step 3
- **THEN** a booking confirmation summary is displayed
- **AND** a "BOOK NOW" or "CONFIRM" button is visible

#### Scenario: Keyboard accessibility

- **GIVEN** the wizard is rendered
- **WHEN** the user presses Tab
- **THEN** focus moves through form fields in logical order
- **AND** focus indicators are visible on each interactive element

#### Scenario: Responsive layout

- **GIVEN** the viewport is narrower than 768px
- **THEN** the hero image is hidden or stacked above the form panel
- **AND** the form panel takes full width

## Verification checklist

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
