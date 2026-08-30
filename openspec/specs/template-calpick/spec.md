# Template: CalPick — Calendar Date Picker

## Purpose

Recreation of ColorLib "Calendar 09" (https://colorlib.com/wp/template/calendar-09/)
as "CalPick" — a calendar date picker component built with React 19, Tailwind CSS 4,
and TypeScript. The original is a Bootstrap-based datetimepicker with a single
centered input field featuring a rounded pill shape with subtle shadow.

Source slug: `calendar-09`
Preview URL: https://preview.colorlib.com/theme/bootstrap/calendar-09/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-09.jpg

## Design Tokens

Extracted from the preview stylesheet (css/style.css):

- **Font family:** "Lato", Arial, sans-serif (loaded via Cloudflare @font-face, weights 300/400/700)
- **Body background:** #f8f9fd (very light lavender-gray)
- **Body text color:** gray (#808080)
- **Link/accent color:** #fc7fb2 (soft pink — used for links and `.bg-primary`)
- **Headings color:** #000 (black)
- **Heading font-weight:** 400 (normal, not bold)
- **Heading line-height:** 1.5
- **Section padding:** 7em 0
- **Input height:** 50px
- **Input border-radius:** 40px (pill/rounded shape)
- **Input border:** none (removed)
- **Input box-shadow:** 0px 5px 13px rgba(0,0,0,0.09) (resting), 0px 5px 13px rgba(0,0,0,0.14) (focus)
- **Input left/right padding:** 20px
- **Transition:** .3s all ease

## Requirements

### Requirement: Page renders a centered heading and date picker

The page SHALL display a centered container with a heading "Calendar #09",
a subheading "Calendar Datepicker", and a single datetime input field.

#### Scenario: Page loads with correct layout

- **WHEN** the page loads
- **THEN** I see a heading "Calendar #09" centered on the page
- **AND** I see a subheading "Calendar Datepicker" below it
- **AND** I see a single input field below the subheading

### Requirement: Date picker input is styled as a pill

The input field SHALL have a rounded pill shape (border-radius 40px), no visible
border, a subtle drop shadow, and a height of 50px.

#### Scenario: Input styling verification

- **GIVEN** the page has loaded
- **WHEN** I examine the date picker input
- **THEN** it has a border-radius of approximately 40px
- **AND** it has no visible border
- **AND** it has a subtle box-shadow
- **AND** it has a height of 50px

### Requirement: Input shows a placeholder

The input field SHALL display a placeholder text "MM/DD/YYYY hh:mm:ss" when empty.

#### Scenario: Placeholder visible when empty

- **GIVEN** the page has loaded
- **WHEN** the input field is empty
- **THEN** I see the placeholder "MM/DD/YYYY hh:mm:ss"

### Requirement: Input accepts user text entry

The input field SHALL accept text input from the user and update its value.

#### Scenario: User types into the input

- **GIVEN** the page has loaded
- **WHEN** I click the input field
- **AND** I type a date string
- **THEN** the input field shows the typed value

### Requirement: Layout is centered and responsive

The date picker section SHALL be centered horizontally within the container and
use a Bootstrap-style grid with the input constrained to a medium column width.

#### Scenario: Desktop layout

- **GIVEN** the page loads on a desktop viewport (>= 768px)
- **WHEN** I view the page
- **THEN** the heading and date picker are centered
- **AND** the input field is constrained to approximately one-third of the container width

#### Scenario: Mobile layout

- **GIVEN** the page loads on a mobile viewport (< 768px)
- **WHEN** I view the page
- **THEN** the heading and date picker are centered
- **AND** the input field spans the full available width

### Requirement: Background color matches reference

The page body background SHALL be the light lavender-gray (#f8f9fd) matching
the original ColorLib template.

#### Scenario: Background color check

- **GIVEN** the page has loaded
- **WHEN** I check the body background color
- **THEN** it is #f8f9fd

### Requirement: Typography matches reference

The page SHALL use the Lato font family (via Google Fonts link), with headings
in black (#000) at font-weight 400, and body text in gray.

#### Scenario: Font family

- **GIVEN** the page has loaded
- **WHEN** I check the computed font-family
- **THEN** it includes "Lato"

#### Scenario: Heading style

- **GIVEN** the page has loaded
- **WHEN** I examine the main heading
- **THEN** the text color is #000
- **AND** the font-weight is 400

## Verification Checklist

- [ ] Page renders with centered heading "Calendar #09"
- [ ] Subheading "Calendar Datepicker" is present
- [ ] Single date input with pill shape (border-radius ~40px)
- [ ] Input has no border, subtle shadow
- [ ] Input height is 50px
- [ ] Placeholder shows "MM/DD/YYYY hh:mm:ss"
- [ ] Input accepts text entry
- [ ] Body background is #f8f9fd
- [ ] Font is Lato (loaded via Google Fonts)
- [ ] Headings are black, weight 400
- [ ] Layout is responsive (centered, column-width on desktop, full-width on mobile)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
