# Template: StepCraft (Account Creation Wizard)

## Purpose

StepCraft is a 3-step account creation wizard recreated from ColorLib Wizard 6
(`https://colorlib.com/wp/template/colorlib-wizard-6/`).
Preview/demo: `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a centered, card-style multi-step wizard form for user registration.
The page background is a full-viewport image; the wizard card floats in the
center. Step 1 collects personal info (avatar upload, name fields, email,
password), Step 2 presents a 3x2 grid of category cards (Programming, Research,
Teacher, Tour Guide, Business, Artist) with background images, and Step 3
collects address details (street name, street number, city, country). Navigation
uses pill-shaped Back/Next buttons with Material Design icons and a dot-based
step indicator below the card.

## Design Tokens

Extracted from `css/style.css` at the demo URL:

### Colors

| Token             | Value               | Usage                                  |
| ----------------- | ------------------- | -------------------------------------- |
| `--brand-pink`    | `#f6c2ec`           | Back button bg, active step dot, form indicator border/fill |
| `--brand-blue`    | `#aac1f0`           | Next/primary button bg                 |
| `--text-muted`    | `#808080`           | Body text, placeholder text            |
| `--text-dark`     | `#333`              | Input text, label text                 |
| `--input-bg`      | `#f7f7f7`           | Form control background                |
| `--card-bg`       | `#ffffff`           | Wizard card background                 |
| `--hover-pink`    | `#dbadd2`           | Back button hover                      |
| `--hover-blue`    | `#98add6`           | Next button hover                      |

### Typography

- Primary font: Poppins (Regular 400, Medium 500, SemiBold 600, Bold 700)
- Body size: 13px
- Labels/avatar picker: 12px, uppercase, font-weight 800
- Placeholders: uppercase, 13px, color #808080
- Category labels: uppercase, Poppins Medium 500, white, 13px

### Shapes & Layout

- Wizard card: 738px wide × 554px tall, border-radius 10px, box-shadow 0px 2px 7px rgba(0,0,0,0.1)
- Form inputs: height 46px, border-radius 23px (pill), background #f7f7f7, no border
- Buttons: height 46px, width 146px, border-radius 23px (pill), uppercase
  - Back button: bg #f6c2ec, padding-left 65px
  - Next button: bg #aac1f0, padding-left 46px
- Category grid: 3 columns, items 134px tall, border-radius 7px, gap 27px
- Step indicators: 10px diameter circles, 8px gap; current step: 22px wide pill
- Form indicator dot: 10px diameter, border 2px solid #f6c2ec, active fill #f6c2ec

### Background

- Page: full-viewport background image (form-wizard-bg.jpg), cover
- On mobile: background removed, card goes edge-to-edge

## Requirements

### Requirement: Full-viewport centered layout

The template SHALL render a full-viewport page with a background image and a
centered white wizard card floating in the middle.

#### Scenario: Page loads with centered card

- **WHEN** the app loads
- **THEN** a white card is centered vertically and horizontally on a background image

#### Scenario: Card dimensions on desktop

- **WHEN** the viewport is wider than 768px
- **THEN** the wizard card is 738px wide and 554px tall with 10px border-radius

### Requirement: Step 1 — Personal Information

Step 1 SHALL display an avatar upload area, three inline text fields (First Name,
Last Name, Team Name), an Email input, a Password input, and navigation buttons.

#### Scenario: Step 1 renders all fields

- **WHEN** the wizard is on step 1
- **THEN** the avatar area with a camera icon and "Choose Picture" label is visible
- **AND** First Name, Last Name, Team Name inputs are displayed in a row
- **AND** Email and Password inputs are displayed below

#### Scenario: Form indicators show active state

- **WHEN** the wizard is on step 1
- **THEN** the first form indicator dot is filled (#f6c2ec) and the others are outlined

### Requirement: Step 2 — Category Selection

Step 2 SHALL display a 3×2 grid of category cards (Programming, Research,
Teacher, Tour Guide, Business, Artist), each with a background image, an icon,
and a white uppercase label.

#### Scenario: Step 2 renders category grid

- **WHEN** the user navigates to step 2
- **THEN** six category cards are displayed in a 3-column, 2-row grid
- **AND** each card shows an icon and a category label (Programming, Research, Teacher, Tour Guide, Business, Artist)

#### Scenario: Category card hover effect

- **WHEN** the user hovers over a category card
- **THEN** the card shows a deeper box-shadow (0px 2px 7px rgba(0,0,0,0.25))

### Requirement: Step 3 — Address Details

Step 3 SHALL display two rows of address inputs: Street Name + Street Number,
then City + Country.

#### Scenario: Step 3 renders address fields

- **WHEN** the user navigates to step 3
- **THEN** Street Name, Street Number, City, and Country inputs are displayed

### Requirement: Step navigation

Navigation SHALL provide Back and Next buttons with pill shapes and Material
Design arrow icons. The Back button appears on steps 2 and 3. The Next button
advances through steps.

#### Scenario: Next button advances step

- **WHEN** the user clicks the Next button on step 1
- **THEN** the wizard transitions to step 2

#### Scenario: Back button returns to previous step

- **WHEN** the user clicks the Back button on step 2
- **THEN** the wizard returns to step 1

#### Scenario: Step indicator updates

- **WHEN** the wizard transitions to a new step
- **THEN** the step indicator dot for the current step becomes a 22px-wide pill

### Requirement: Step indicators

The template SHALL display dot-based step indicators below the wizard card.
The current step is shown as an elongated pill; other steps are small circles.

#### Scenario: Dots render below card

- **WHEN** the page loads
- **THEN** three step indicator dots appear centered below the wizard card

### Requirement: Responsive design

On mobile viewports (width < 768px), the wizard card SHALL expand to full
width, the background image is removed, the form header stacks vertically,
the category grid stacks to single column, and step indicators are hidden.

#### Scenario: Mobile layout

- **WHEN** the viewport is less than 768px wide
- **THEN** the wizard card is full-width with no border-radius or shadow
- **AND** the background image is removed
- **AND** step indicators are hidden

### Requirement: Footer with Component Dock link

The template SHALL display a footer with the template name "StepCraft", a short
description, and a "More templates at Component Dock" link pointing to
https://www.componentdock.com/.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** the footer shows "StepCraft", a description, and a link to Component Dock

## Verification checklist

- [ ] Card renders centered on viewport with background image
- [ ] Step 1 shows avatar area, 3 name fields, email, password
- [ ] Step 2 shows 6 category cards in 3×2 grid with background images
- [ ] Step 3 shows 4 address fields in 2 rows
- [ ] Next button advances steps with animation
- [ ] Back button returns to previous step
- [ ] Step indicators update on navigation (pill for current)
- [ ] Form inputs are pill-shaped (border-radius 23px)
- [ ] Brand colors: pink #f6c2ec (back), blue #aac1f0 (next)
- [ ] Font: Poppins (Google Fonts)
- [ ] Responsive: full-width card on mobile, stacked grid
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
