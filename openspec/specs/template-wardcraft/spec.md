# Template: Wardcraft (3-Step Restaurant Reservation Wizard)

## Purpose

Wardcraft is a single-page three-step RESTAURANT TABLE BOOKING WIZARD in the
free-react-templates monorepo. It is an original React recreation of the ColorLIB
"Colorlib Wizard 7" free template (source: https://colorlib.com/wp/template/colorlib-wizard-7/),
built under a DIFFERENT name (**Wardcraft**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a premium, moody multi-step reservation form for restaurant
table bookings. It features a split layout: a full-height gourmet food photo
on the left and a dark charcoal reservation form card on the right. The form
collects party size, date, and time across 3 steps, with a ghost-style "NEXT"
button and step pagination ("1 / 3"). The design is dark, sophisticated, and
minimalist — targeting upscale dining establishments.

- **Source template**: [Colorlib Wizard 7](https://colorlib.com/wp/template/colorlib-wizard-7/)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-7/` (unreachable at prep time — 404; fallback to screenshot)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Naming

The ColorLIB source name "Colorlib Wizard 7" is FORBIDDEN as the app name.
**Wardcraft** is the new, original name — single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md
name. Source slug + preview URL are recorded above.

## Design tokens

| Token                    | Value                                  | Notes                                        |
| ------------------------ | -------------------------------------- | -------------------------------------------- |
| Background (page)        | `#ffffff` (white)                      | Plain white page behind the browser mockup   |
| Background (card)        | `#1a1a2e` (dark charcoal)              | Right-side reservation form card             |
| Background (card border) | `#444444` (light gray border)          | Thin border around the dark card             |
| Background (food image)  | `#000000` (black)                      | Left-side food photography panel, dark/moody |
| Text primary             | `#ffffff` (white)                      | Card title, form labels, input text, button  |
| Text secondary           | `#999999` (light gray)                 | Input bottom borders, inactive elements      |
| Text accent (subtitle)   | `#e0d5c8` (warm cream/off-white)       | Cursive subtitle text                        |
| Input background         | `#1a1a2e` (matches card bg)            | Form inputs blend into card background       |
| Input border             | `1px solid #444444` (bottom only)      | Subtle bottom-border-only input styling      |
| Button style             | Ghost/outline                          | Transparent bg, `1px solid #999999` border   |
| Button text              | `#ffffff` (white) uppercase            | "NEXT" label                                 |
| Icon color               | `#ffffff` (white)                      | Line-art icons for people, calendar, clock   |
| Font family (heading)    | `Montserrat, sans-serif`               | Bold uppercase main title "BOOK A TABLE"     |
| Font family (subtitle)   | `Dancing Script, cursive` (or similar) | Script/cursive "~ Check out our place ~"     |
| Font family (form)       | `Montserrat, sans-serif`               | Clean sans-serif for labels and inputs       |
| Border radius (card)     | `8px`                                  | Subtle rounded corners on the form card      |
| Border radius (button)   | `4px`                                  | Slightly rounded ghost button                |
| Border radius (input)    | `0` (none)                             | Straight edges, bottom-border-only styling   |

## Requirements

### Requirement: Page loads with split layout

The page SHALL display a split layout: a full-height food photography panel on
the left and a dark reservation form card on the right, overlapping slightly
into the left panel.

#### Scenario: Split layout visible on load

- **WHEN** the user opens the Wardcraft page
- **THEN** a food photography section should occupy the left side of the viewport
- **AND** a dark charcoal reservation form card should appear on the right side
- **AND** the form card should slightly overlap the left food image
- **AND** the page background should be white

### Requirement: Reservation form card header

The reservation form card SHALL display a centered header with a bold uppercase
title and a cursive subtitle below it.

#### Scenario: Card header elements visible

- **WHEN** the user views the reservation form card
- **THEN** the title "BOOK A TABLE" should be displayed in bold uppercase white sans-serif text
- **AND** a subtitle "~ Check out our place ~" should appear below in a cursive/script font
- **AND** the subtitle should be in a warm cream/off-white color

### Requirement: Step 1 — People and Date

Step 1 of the form SHALL collect the number of guests and the reservation date.

#### Scenario: Step 1 form fields visible

- **WHEN** the page loads on step 1
- **THEN** a "People" field with a person icon and dropdown selector should be visible
- **AND** the dropdown should default to "1"
- **AND** a "Date" field with a calendar icon and text input should be visible
- **AND** the date field should display a date in "DD MMM YYYY" format (e.g. "14 MAR 2021")
- **AND** each field should have a white line-art icon to its left
- **AND** each field should have a light gray bottom border (no other borders)
- **AND** the field labels should be in light gray sans-serif

### Requirement: Step 2 — Time selection

Step 2 of the form SHALL collect the reservation time with start and end time
selectors displayed side by side.

#### Scenario: Step 2 form fields visible

- **WHEN** the user advances to step 2
- **THEN** a "Time" field with a clock icon should be visible
- **AND** two time dropdown selectors should appear side by side (start time and end time)
- **AND** the dropdowns should display times like "9 AM" and "7 PM"
- **AND** each dropdown should have a light gray bottom border

### Requirement: Step 3 — Confirmation

Step 3 of the form SHALL display a summary or confirmation of the booking details
and a submit action.

#### Scenario: Step 3 confirmation visible

- **WHEN** the user advances to step 3
- **THEN** a summary of the booking details (people, date, time) should be displayed
- **AND** a "BOOK NOW" or similar CTA button should be visible
- **AND** completing the booking should show a success confirmation

### Requirement: Next button navigation

A "NEXT" ghost button on steps 1 and 2 SHALL advance to the next step. On
step 3, the button text changes to the booking action.

#### Scenario: Next button advances steps

- **WHEN** the user is on step 1
- **THEN** a "NEXT" button should be visible in the bottom-right of the card
- **AND** the button should have a ghost/outline style (transparent bg, gray border)
- **WHEN** the user clicks "NEXT"
- **THEN** step 2 should become active
- **AND** the step indicator should update to "2 / 3"

#### Scenario: Next button on step 2

- **WHEN** the user is on step 2
- **THEN** a "NEXT" button should be visible
- **WHEN** the user clicks "NEXT"
- **THEN** step 3 should become active

### Requirement: Step pagination indicator

The form SHALL display a step counter ("1 / 3", "2 / 3", "3 / 3") below the
action button, right-aligned.

#### Scenario: Step counter updates

- **WHEN** the user is on step 1
- **THEN** "1 / 3" should be displayed below the NEXT button
- **WHEN** the user advances to step 2
- **THEN** "2 / 3" should be displayed

### Requirement: Back navigation

Steps 2 and 3 SHALL support back navigation to the previous step with data
preserved.

#### Scenario: Back navigation on step 2

- **WHEN** the user is on step 2
- **AND** the user navigates back
- **THEN** step 1 should become active
- **AND** the previously selected people count and date should be preserved

### Requirement: People dropdown interaction

The People dropdown SHALL allow selecting a party size from a range of values.

#### Scenario: People dropdown interaction

- **WHEN** the user clicks the People dropdown
- **THEN** a list of party size options should appear (1–10 or similar range)
- **WHEN** the user selects a value
- **THEN** the dropdown should display the selected value

### Requirement: Dark theme form inputs

All form inputs in the card SHALL use dark backgrounds that blend with the card,
light gray bottom borders only, and white text — maintaining the moody premium
aesthetic.

#### Scenario: Input styling consistency

- **WHEN** the user views any form input
- **THEN** the input background should match the dark card background
- **AND** the input should have only a bottom border in light gray
- **AND** the input text should be white
- **AND** the input label should include a white line-art icon

### Requirement: Responsive layout on mobile

The wizard SHALL adapt to mobile viewports by stacking the layout vertically.

#### Scenario: Mobile viewport layout

- **WHEN** the user opens the page on a viewport width less than 768px
- **THEN** the food image should display above or behind the form card
- **AND** the form card should take the full width
- **AND** all form fields should remain usable and accessible
- **AND** the step pagination should remain visible

### Requirement: Footer links to Component Dock

The page footer SHALL include a link to https://www.componentdock.com/.

#### Scenario: Footer displays correctly

- **WHEN** the user views the footer
- **THEN** a link to componentdock.com should be visible
- **AND** the link should display "More templates at Component Dock"
- **AND** the link should open in a new tab

## Verification checklist

- [ ] Preview unreachable (404) — fallback to screenshot used for all design tokens
- [ ] Split layout: food photo left, dark form card right (overlapping)
- [ ] White page background
- [ ] Dark charcoal card with thin light gray border
- [ ] "BOOK A TABLE" bold uppercase title in white sans-serif
- [ ] "~ Check out our place ~" subtitle in cursive/script font (warm cream)
- [ ] Step 1: People dropdown (person icon) + Date input (calendar icon)
- [ ] Step 2: Time selectors — two side-by-side dropdowns (clock icon)
- [ ] Step 3: Booking confirmation/summary + "BOOK NOW" CTA
- [ ] Ghost/outline "NEXT" button (transparent bg, gray border, white text)
- [ ] Step pagination: "1 / 3", "2 / 3", "3 / 3" below button, right-aligned
- [ ] Back navigation preserves data on steps 2–3
- [ ] Dark-themed inputs: dark bg, bottom border only, white text
- [ ] White line-art icons for each field (person, calendar, clock)
- [ ] Mobile responsive: stacked layout below 768px
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] Uses cn() from packages/ui
- [ ] Font family: Montserrat + Dancing Script (or similar cursive) via Google Fonts
- [ ] 100% test coverage
