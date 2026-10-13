# Template: Dinebook (Wizard / Restaurant Reservation)

## Purpose

Recreation of ColorLib **Colorlib Wizard 7** — a 3-step restaurant table
reservation wizard. The template is a single-page form wizard with a split
layout: full-height food photography on the left, a dark form panel on the
right that advances through three steps.

- **Source slug:** `colorlib-wizard-7`
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-wizard-7/
- **Preview URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html
- **Category:** Bootstrap Wizard / Restaurant
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Description:** "The best free book a table template for any restaurant and
  other food business owner with a 3-step wizard process."

## Design Tokens

Extracted from the original `css/style.css` at the preview URL.

| Token                 | Value                            | Usage                                       |
| --------------------- | -------------------------------- | ------------------------------------------- |
| Font: body            | `Raleway`, sans-serif            | Body text, labels, inputs                   |
| Font: heading         | `Raleway Bold`, sans-serif       | Step headings (h3)                          |
| Font: subheading      | `Raleway SemiBold`, sans-serif   | Input values, button text                   |
| Font: decorative      | `Satisfy`, cursive               | Cursive tagline ("~ Check out our place ~") |
| Background: form      | `#333`                           | Form panel background                       |
| Border: form-inner    | `#524b42`                        | 1px solid border inside form panel          |
| Border: form-control  | `#666`                           | Input underlines, select borders            |
| Text: white           | `#fff`                           | Headings, step indicator                    |
| Text: label           | `#ccc`                           | Form field labels                           |
| Text: secondary       | `#666`                           | Borders, placeholders, step "/ 3"           |
| Accent: gold          | `#cdaa7c`                        | Tagline, check icon circle, button hover    |
| Focus: border         | `#e9e0cf`                        | Input focus underline                       |
| Dropdown: hover       | `#81acee`                        | People dropdown hover highlight             |
| Button: style         | Outlined, 1px solid #666         | Next/Previous buttons                       |
| Button: hover         | bg `#cdaa7c`, border transparent | Button hover fill                           |
| Shadow: form          | `0 7px 18px rgba(0,0,0,0.2)`     | Form panel box shadow                       |
| Layout: split         | 58.88% image / 41.12% form       | Side-by-side layout                         |
| Max width             | `1400px`                         | Wrapper max-width                           |
| Form height           | `562px`                          | Fixed form panel height                     |
| Step indicator        | Bottom-right, "1 / 3" format     | Current step number (40px) + "/ 3" (15px)   |
| Responsive breakpoint | 767px                            | Stacks vertically below 767px               |

## Requirements

### Feature: Dinebook — Restaurant Table Reservation Wizard

#### Scenario: Full-page split layout renders on load

- **GIVEN** the user opens the Dinebook page
- **THEN** a full-viewport split layout is displayed
- **AND** the left side shows a food photography image
- **AND** the right side shows a dark form panel

#### Scenario: Step 1 — Book a table

- **GIVEN** the user is on step 1
- **WHEN** the form header is visible
- **THEN** the heading reads "Book a table"
- **AND** the tagline reads "~ Check out our place ~" in cursive font
- **AND** a "People" dropdown shows options 1 through 5
- **AND** a "Date" picker field is displayed
- **AND** two "Time" dropdowns are displayed (AM and PM)

#### Scenario: Select number of people

- **GIVEN** the user is on step 1
- **WHEN** the user opens the People dropdown
- **THEN** options 1 through 5 are listed
- **WHEN** the user selects a value
- **THEN** the dropdown closes and shows the selected number

#### Scenario: Select date

- **GIVEN** the user is on step 1
- **WHEN** the user clicks the Date field
- **THEN** a date picker opens
- **WHEN** the user picks a date
- **THEN** the date is displayed in "dd M yyyy" format (e.g. "14 MAR 2021")

#### Scenario: Select time range

- **GIVEN** the user is on step 1
- **WHEN** the user selects an AM time
- **AND** the user selects a PM time
- **THEN** both time values are shown in their respective dropdowns

#### Scenario: Navigate to step 2

- **GIVEN** the user has filled in step 1 fields
- **WHEN** the user clicks the "Next" button
- **THEN** step 2 is displayed
- **AND** the step indicator updates to "2 / 3"

#### Scenario: Step 2 — Contact details

- **GIVEN** the user is on step 2
- **WHEN** the form header is visible
- **THEN** the heading reads "Contact details"
- **AND** the tagline reads "~ Check out our place ~"
- **AND** a "Name" text input is displayed
- **AND** a "Phone" text input is displayed
- **AND** an "Email" text input is displayed

#### Scenario: Fill contact details

- **GIVEN** the user is on step 2
- **WHEN** the user types a name into the Name field
- **AND** the user types a phone number into the Phone field
- **AND** the user types an email into the Email field
- **THEN** all three fields show their entered values

#### Scenario: Navigate back to step 1

- **GIVEN** the user is on step 2
- **WHEN** the user clicks the "Previous" button
- **THEN** step 1 is displayed with previously entered values preserved

#### Scenario: Navigate to step 3

- **GIVEN** the user is on step 2 with all fields filled
- **WHEN** the user clicks the "Next" button
- **THEN** step 3 is displayed
- **AND** the step indicator updates to "3 / 3"

#### Scenario: Step 3 — Confirmation

- **GIVEN** the user is on step 3
- **THEN** a check icon in a gold circle is displayed
- **AND** the heading reads "Your table is ready"
- **AND** the tagline reads "~ Happy friends with a say ~" in cursive font
- **AND** no form fields are displayed

#### Scenario: Step indicator updates across steps

- **GIVEN** the user navigates through all three steps
- **THEN** the step indicator shows "1 / 3" on step 1
- **AND** "2 / 3" on step 2
- **AND** "3 / 3" on step 3

#### Scenario: Responsive layout stacks vertically

- **GIVEN** the viewport width is below 767px
- **WHEN** the page loads
- **THEN** the image section stacks above the form panel
- **AND** the form panel takes full width

#### Scenario: Button styling matches design tokens

- **GIVEN** any step with navigation buttons
- **THEN** buttons have outlined borders (1px solid)
- **AND** buttons show uppercase text
- **AND** buttons use Raleway SemiBold font
- **WHEN** the user hovers a button
- **THEN** the button background changes to gold (#cdaa7c)
- **AND** the border becomes transparent

#### Scenario: Form field focus styling

- **GIVEN** the user focuses an input field
- **THEN** the input underline changes to a light beige color (#e9e0cf)

#### Scenario: Component Dock footer link

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a footer link to "https://www.componentdock.com/" is visible
- **AND** the link text reads "Component Dock"

## Verification Checklist

- [ ] 3-step wizard with correct section order: Book a table → Contact details → Confirmation
- [ ] Split layout: image left (~59%) / form panel right (~41%)
- [ ] Dark form panel background (#333) with inner border (#524b42)
- [ ] Raleway font family (Regular, SemiBold, Bold) loaded via Google Fonts
- [ ] Satisfy cursive font for taglines
- [ ] People dropdown (1-5), Date picker, Time dropdowns (AM/PM)
- [ ] Contact fields: Name, Phone, Email with underline-style inputs
- [ ] Confirmation: gold check icon circle, "Your table is ready" message
- [ ] Step indicator: "N / 3" format, bottom-right position
- [ ] Outlined navigation buttons with gold hover
- [ ] Responsive: stacks vertically below 767px
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Uses picsum.photos placeholder images (deterministic seeds)
- [ ] Lucide-react icons replace Material Design Iconic Font icons
- [ ] 100% test coverage (lines, functions, branches, statements)
