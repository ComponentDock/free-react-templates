# Template: TableNook (Split-Screen Restaurant Booking Wizard)
<!-- prep-status: shipped-as=platter -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-7` design this prep describes already
> ships as `apps/platter` (<https://platter.free.componentdock.com>).
> Do not scaffold `apps/tablenook`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-platter/spec.md`.

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 7 (`https://colorlib.com/wp/template/colorlib-wizard-7/`)
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html` (actual preview; `https://preview.colorlib.com/theme/colorlib-wizard-7/` may 404)
- **New Name**: `tablenook` (App directory: `apps/tablenook`, Package: `@free-react-templates/tablenook`)
- **Category**: Forms / Multi-step Restaurant Booking Wizard
- **Description**: A split-screen 3-step restaurant table booking wizard. Left panel shows a full-height food/restaurant image; right panel is a dark charcoal form area with warm gold accents. Steps: (1) Book a Table — people count, date, time; (2) Contact Details — name, phone, email; (3) Confirmation — "Your table is ready" with gold checkmark circle.
- **Source slug**: `colorlib-wizard-7`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg` (1200×972, shows split-screen: food image left, dark form right with gold script tagline)

## Design Tokens (from reference CSS)

| Token                     | Value                                           | Source                                    |
| ------------------------- | ----------------------------------------------- | ----------------------------------------- |
| Font family (body)        | `"Raleway", sans-serif` (Regular weight)        | `body` in `css/style.css`                |
| Font family (headings)    | `"Raleway", sans-serif` (Bold weight)           | `.form-header h3`                         |
| Font family (form labels) | `"Raleway", sans-serif` (SemiBold weight)       | `.form-control`, `.select .select-control`|
| Font family (script/tags) | `"Satisfy", cursive`                            | `.form-header p`, `.ready .text-2`        |
| Form panel background     | `#333` (dark charcoal)                          | `.inner .form-content`                    |
| Form panel height         | `562px`                                         | `.inner .form-content`                    |
| Form panel box-shadow     | `0px 7px 18px 0px rgba(0, 0, 0, 0.2)`          | `.inner .form-content`                    |
| Form inner border         | `1px solid #524b42` (warm dark brown)           | `.inner .form-content .form-inner`        |
| Form inner padding        | `68px 37px`                                     | `.inner .form-content .form-inner`        |
| Heading color             | `#fff` (white)                                  | `.form-header h3`                         |
| Heading font-size         | `25px`                                          | `.form-header h3`                         |
| Heading text-transform    | `uppercase`                                     | `.form-header h3`                         |
| Heading margin-bottom     | `9px`                                           | `.form-header h3`                         |
| Tagline color (gold)      | `#cdaa7c` (warm gold/tan)                       | `.form-header p`, `.ready .text-2`        |
| Tagline font-size         | `18px`                                          | `.form-header p`                          |
| Label color               | `#ccc` (light gray)                             | `.form-row label`                         |
| Input text color          | `#fff` (white)                                  | `.form-control`                           |
| Input font-family         | Raleway SemiBold                                | `.form-control`                           |
| Input border              | `2px solid #666` (gray)                         | `.form-control`                           |
| Input border-bottom-only  | `border: none; border-bottom: 2px solid #666`   | `.form-control`                           |
| Input focus border        | `#e9e0cf` (cream)                               | `.form-control:focus`                     |
| Input height              | `26px`                                          | `.form-control`                           |
| Placeholder color         | `#666` (gray), uppercase                        | `.form-control::-webkit-input-placeholder`|
| Select border             | `2px solid #666` (gray, all sides)              | `select.form-control`                     |
| Select height             | `31px`                                          | `select.form-control`                     |
| Dropdown hover            | `#81acee` (light blue)                          | `.select .dropdown li:hover`              |
| Button transparent        | `border: 1px solid #666`, white text            | `.actions li a`                           |
| Button hover (gold)       | `background: #cdaa7c`, `border-color: transparent`| `.actions li a:hover`                  |
| Button height             | `41px`                                          | `.actions li a`                           |
| Button "next" width       | `92px`                                          | `.actions li a`                           |
| Button "prev" width       | `118px` (step-2)                                | `.actions li.step-2 a`                    |
| Ready circle background   | `#cdaa7c` (gold)                                | `.ready span`                             |
| Ready circle size         | `38px` x `38px`, `border-radius: 50%`           | `.ready span`                             |
| Ready text color          | `#fff` (white)                                  | `.ready .text-1`                          |
| Step indicator position   | Bottom-right of form panel                      | `.steps`                                  |
| Step number font-size     | `40px`, color `#666`                            | `.steps ul:before`                        |
| Step fraction font-size   | `15px`, color `#666`                            | `.steps ul:after`                         |
| Image holder width        | `58.88%`                                        | `.inner .image-holder`                    |
| Form content width        | `41.12%`                                        | `.inner .form-content`                    |
| Body font-size            | `13px`                                          | `body`                                    |
| Container max-width       | `1400px`                                        | `.wrapper`                                |

## Layout Structure

This is a **split-screen** wizard — the viewport is divided into two halves:

1. **Left panel** (image side): 58.88% width, full-height food/restaurant image
2. **Right panel** (form side): 41.12% width, dark charcoal (#333) background, box-shadow

### Wizard Steps (3-step flow)

| Step | Title              | Fields                                                          | Image             |
| ---- | ------------------ | --------------------------------------------------------------- | ----------------- |
| 1    | Book a Table       | People (custom dropdown 1-5), Date (datepicker), Time (2 selects: hour + am/pm) | `form-wizard-1.jpg` |
| 2    | Contact Details    | Name (text), Phone (text), Email (text)                         | `form-wizard-2.jpg` |
| 3    | Your Table is Ready| Confirmation: gold checkmark circle + "Your table is ready"     | `form-wizard-3.jpg` |

### Step Indicator

- Bottom-right corner of the form panel
- Shows current step number (40px, gray) + "/ 3" fraction (15px, gray)
- Uses CSS `::before` and `::after` pseudo-elements on the `<ul>`

### Navigation Buttons

- "Previous" and "Next" buttons positioned absolute at bottom-right of form panel
- Transparent background with gray border
- Gold (#cdaa7c) background on hover
- Step 3 hides the "Next" button (final step)

## Requirements

### Requirement: Split-screen wizard layout

The application SHALL render a full-viewport split-screen layout with an image panel on the left and a form panel on the right.

#### Scenario: Desktop layout

- **GIVEN** the user loads the page on a desktop viewport
- **WHEN** the page renders
- **THEN** the left panel shows a full-height food/restaurant image (58.88% width)
- **AND** the right panel shows a dark charcoal (#333) form area (41.12% width)
- **AND** the form panel has a box-shadow

#### Scenario: Mobile layout

- **GIVEN** the user loads the page on a mobile viewport (< 768px)
- **WHEN** the page renders
- **THEN** the image panel stacks above the form panel (full width each)

### Requirement: Step 1 — Book a Table

Step 1 SHALL display a booking form with People count, Date, and Time fields.

#### Scenario: Step 1 renders correctly

- **GIVEN** the user is on step 1
- **WHEN** the form renders
- **THEN** the heading says "Book a Table" (uppercase, white, bold)
- **AND** a gold script tagline "~ Check out our place ~" is visible
- **AND** a "People" field is visible (dropdown: 1-5)
- **AND** a "Date" field is visible (datepicker)
- **AND** a "Time" field is visible (two selects: hour + am/pm)

#### Scenario: User selects people count

- **GIVEN** the user is on step 1
- **WHEN** the user opens the People dropdown
- **THEN** options 1 through 5 are available
- **AND** selecting an option updates the display

#### Scenario: User picks a date

- **GIVEN** the user is on step 1
- **WHEN** the user clicks the Date field
- **THEN** a datepicker calendar appears
- **AND** selecting a date populates the field

#### Scenario: User picks a time

- **GIVEN** the user is on step 1
- **WHEN** the user selects an hour and am/pm
- **THEN** the time is set

#### Scenario: Advancing to step 2

- **GIVEN** the user is on step 1
- **WHEN** the user clicks "Next"
- **THEN** the form advances to step 2
- **AND** the image changes to `form-wizard-2.jpg`

### Requirement: Step 2 — Contact Details

Step 2 SHALL display contact fields: Name, Phone, and Email.

#### Scenario: Step 2 renders correctly

- **GIVEN** the user is on step 2
- **WHEN** the form renders
- **THEN** the heading says "Contact Details" (uppercase, white, bold)
- **AND** a "Name" input is visible (placeholder "Name")
- **AND** a "Phone" input is visible (placeholder "My phone")
- **AND** an "Email" input is visible (placeholder "Your Email")

#### Scenario: User fills contact details

- **GIVEN** the user is on step 2
- **WHEN** the user enters name, phone, and email
- **AND** clicks "Next"
- **THEN** the form advances to step 3

#### Scenario: Navigating back to step 1

- **GIVEN** the user is on step 2
- **WHEN** the user clicks "Previous"
- **THEN** the form returns to step 1

### Requirement: Step 3 — Confirmation

Step 3 SHALL display a confirmation message with a gold checkmark.

#### Scenario: Step 3 renders correctly

- **GIVEN** the user is on step 3
- **WHEN** the form renders
- **THEN** a gold circle (#cdaa7c) with a checkmark icon is visible
- **AND** the text "Your table is ready" is displayed (uppercase, white, bold)
- **AND** a gold script tagline "~ Happy friends with a say ~" is visible
- **AND** the "Next" button is hidden (final step)

#### Scenario: Navigating back to step 2

- **GIVEN** the user is on step 3
- **WHEN** the user clicks "Previous"
- **THEN** the form returns to step 2

### Requirement: Step navigation

The wizard SHALL support forward/backward navigation via buttons and step indicator.

#### Scenario: Forward navigation

- **GIVEN** the user is on any step before step 3
- **WHEN** the user clicks "Next"
- **THEN** the form advances to the next step
- **AND** the step indicator updates

#### Scenario: Backward navigation

- **GIVEN** the user is on any step after step 1
- **WHEN** the user clicks "Previous"
- **THEN** the form returns to the previous step

#### Scenario: Step indicator updates

- **GIVEN** the user navigates between steps
- **WHEN** the step changes
- **THEN** the step number in the bottom-right updates (1, 2, or 3)

### Requirement: Visual fidelity to reference

The template SHALL match the visual design of the ColorLib Wizard 7 reference.

#### Scenario: Design tokens match

- **GIVEN** the template is rendered
- **WHEN** comparing to the reference
- **THEN** the color palette matches: dark charcoal form (#333), warm gold accents (#cdaa7c), white headings, gray labels (#ccc)
- **AND** the form inputs have bottom-border-only styling (2px solid #666)
- **AND** the font is Raleway (or system sans-serif fallback) with Satisfy for script text
- **AND** the form panel has a box-shadow
- **AND** buttons are transparent with gray border, turning gold on hover

### Requirement: Responsive layout

The wizard SHALL be responsive on mobile devices.

#### Scenario: Mobile layout

- **GIVEN** the user loads the page on a mobile viewport (< 768px)
- **WHEN** the page renders
- **THEN** the split-screen stacks vertically (image on top, form below)
- **AND** the form panel takes full width
- **AND** navigation buttons remain accessible

## Verification Checklist

- [ ] App renders in `apps/tablenook/` with package name `@free-react-templates/tablenook`
- [ ] `vite.config.ts` includes `injectUiSource()`
- [ ] Split-screen layout: image left, dark form right
- [ ] Step 1: "Book a Table" with People, Date, Time fields
- [ ] Step 2: "Contact Details" with Name, Phone, Email fields
- [ ] Step 3: Gold checkmark + "Your table is ready" confirmation
- [ ] Step indicator shows current step / 3 in bottom-right
- [ ] "Previous" / "Next" buttons navigate between steps
- [ ] "Next" button hidden on step 3
- [ ] "Previous" button hidden on step 1
- [ ] Image changes per step (form-wizard-1/2/3.jpg placeholders)
- [ ] Design tokens: #333 panel, #cdaa7c gold, Raleway font, Satisfy script
- [ ] Input fields have bottom-border-only styling
- [ ] Buttons turn gold (#cdaa7c) on hover
- [ ] Responsive: stacks vertically on mobile
- [ ] Footer includes Component Dock link (`https://www.componentdock.com/`)
- [ ] No ColorLib references in app source code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds (`npm run build`)
- [ ] `public/CNAME` contains `tablenook.free.componentdock.com`
- [ ] `homepage` in `package.json` is `https://tablenook.free.componentdock.com`
