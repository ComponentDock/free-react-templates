# Template: Coursegrid (Courses Mega-Menu Dropdown)

## Purpose

Recreation of ColorLib **Dropdown 19** — a courses dropdown snippet featuring a
3-column mega-menu navigation organized by subject category (Math, Computing,
Economic), each with colored left-border accents and uppercase headings.
Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-19/
Source page: https://colorlib.com/wp/template/dropdown-19/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Description: A centered "Courses" trigger with a layers icon and a rotating
down-arrow. Clicking opens a wide (680px min-width) mega-menu positioned
centered below the trigger. The menu contains three equal-width columns —
Math (blue accent), Computing (amber accent), and Economic (red accent) —
each with an uppercase heading and a list of course links with parenthetical
counts. The menu animates in with opacity + margin-top transition. A badge
number appears on the trigger icon.

## Design Tokens

Extracted from the preview CSS (css/style.css) at
https://preview.colorlib.com/theme/bootstrap/dropdown-19/css/style.css:

- **Font family (body/headings):** "Roboto", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- **Font weight (body):** 300 (light)
- **Background (page):** #efefef (light gray)
- **Body text color:** #b3b3b3
- **Heading color:** #000000
- **Heading font-size (h2):** 20px
- **Trigger link color:** #888
- **Trigger hover/active color:** #000000
- **Arrow rotation:** 180deg when menu is open
- **Badge (number):** 24px × 24px circle, background #007bff (Bootstrap primary),
  font-size 13px, color #fff, border 2px solid #fff, positioned top -10px right -10px
- **Menu background:** #ffffff
- **Menu border:** 1px solid transparent
- **Menu shadow:** 0 15px 30px 0 rgba(0, 0, 0, 0.2)
- **Menu min-width:** 680px
- **Menu positioning:** centered below trigger (left 50%, transform translate -50%)
- **Menu padding:** 10px outer, 20px mega-menu inner
- **Menu opacity:** 0 (hidden) → 1 (visible)
- **Menu transition:** 0.3s margin-top ease, 0.3s opacity ease, 0.3s visibility ease
- **Column layout:** 3 equal columns (33.333% each), flexbox
- **Column 1 (Math):** heading color text-primary (#007bff blue),
  border-left 2px solid #007bff
- **Column 2 (Computing):** heading color text-warning (#ffc107 amber),
  border-left 2px solid #ffc107
- **Column 3 (Economic):** heading color text-danger (#dc3545 red),
  border-left 2px solid #dc3545
- **Column heading:** font-size 14px, text-transform uppercase, font-weight 700
- **Column list:** padding-left 20px after left border
- **Column list links:** font-size 14px, font-weight 400, color gray, hover to #000
- **Link transition:** 0.3s all ease
- **Section heading:** centered, font-size 20px, margin 7rem vertical padding

## Requirements

### Requirement: Page renders with centered heading and trigger

The page SHALL render a centered heading and a courses dropdown trigger.

#### Scenario: Heading displays correctly

- **WHEN** the page loads
- **THEN** a centered heading "Dropdown #9" is visible

#### Scenario: Courses trigger renders

- **WHEN** the page loads
- **THEN** a "Courses" link is visible with a layers icon to its left
- **AND** a down-arrow icon is to the right of "Courses"
- **AND** a badge showing number "5" is positioned at the top-right of the icon

### Requirement: Dropdown menu opens and closes on trigger click

The mega-menu SHALL open on click and close on second click.

#### Scenario: Menu hidden by default

- **WHEN** the page loads
- **THEN** the dropdown menu is not visible

#### Scenario: Opens menu on click

- **WHEN** the user clicks the "Courses" trigger
- **THEN** the dropdown menu becomes visible with 3 columns

#### Scenario: Closes menu on second click

- **WHEN** the user clicks the "Courses" trigger while the menu is open
- **THEN** the dropdown menu becomes hidden

#### Scenario: Arrow rotates when open

- **WHEN** the dropdown menu is open
- **THEN** the down-arrow is rotated 180 degrees

### Requirement: Mega-menu contains three columns with correct content

The menu SHALL display three equal columns for Math, Computing, and Economic.

#### Scenario: Math column renders correctly

- **WHEN** the dropdown menu is open
- **THEN** the first column heading "Math" is visible in blue (#007bff)
- **AND** the column has a left border of 2px solid #007bff
- **AND** the column contains: Early math(5), Pre-Algebra(22), Algebra 1(12),
  Geometry(81), Trigonometry(9), Precalculus(16)

#### Scenario: Computing column renders correctly

- **WHEN** the dropdown menu is open
- **THEN** the second column heading "Computing" is visible in amber (#ffc107)
- **AND** the column has a left border of 2px solid #ffc107
- **AND** the column contains: Computer Programming(5), Computer Science(12),
  Hour of Code(81), Computer Animation(9), Graphic Design(16), Logo Design(22)

#### Scenario: Economic column renders correctly

- **WHEN** the dropdown menu is open
- **THEN** the third column heading "Economic" is visible in red (#dc3545)
- **AND** the column has a left border of 2px solid #dc3545
- **AND** the column contains: Microeconomics(32), Macroeconomics(61),
  Finance(73), Capital Markets(88), World Economy(19), Accounting(93)

#### Scenario: Columns are equal width

- **WHEN** the dropdown menu is open
- **THEN** each of the three columns occupies approximately 33.3% of the menu width

### Requirement: Menu styling and animation

The menu SHALL have a white background with box-shadow and smooth animation.

#### Scenario: Menu styling

- **WHEN** the dropdown menu opens
- **THEN** the menu has a white background
- **AND** the menu has a box-shadow of 0 15px 30px 0 rgba(0,0,0,0.2)
- **AND** the menu has a min-width of 680px
- **AND** the menu is centered below the trigger

#### Scenario: Menu animation

- **WHEN** the dropdown menu opens
- **THEN** the menu fades in with opacity transition (0.3s ease)
- **AND** the menu slides down with margin-top transition (0.3s ease)

#### Scenario: Column headings are uppercase

- **WHEN** the dropdown menu is open
- **THEN** all column headings ("Math", "Computing", "Economic") are displayed
  in uppercase

#### Scenario: Links have hover effect

- **WHEN** the user hovers over a menu link
- **THEN** the link color transitions from gray to black (0.3s ease)

### Requirement: Accessibility and footer

The dropdown SHALL use proper ARIA attributes and the page SHALL include a footer
linking to Component Dock.

#### Scenario: Accessibility

- **WHEN** the dropdown trigger renders
- **THEN** the trigger link has aria-haspopup="true"
- **AND** the trigger link has aria-expanded="false" when closed
- **AND** the trigger link has aria-expanded="true" when open

#### Scenario: Footer with Component Dock link

- **WHEN** the page renders
- **THEN** a footer is visible
- **AND** the footer contains a link to "https://www.componentdock.com/"

## Verification Checklist

- [ ] Heading "Dropdown #9" centered on page
- [ ] "Courses" trigger with layers icon and down-arrow renders
- [ ] Badge number "5" appears on trigger icon
- [ ] Click toggles dropdown open/close
- [ ] Arrow rotates 180deg when menu opens
- [ ] Menu has white background with box-shadow
- [ ] Menu min-width is 680px, centered below trigger
- [ ] Menu animates in (opacity + margin-top)
- [ ] Math column: blue heading, blue left border, 6 course links
- [ ] Computing column: amber heading, amber left border, 6 course links
- [ ] Economic column: red heading, red left border, 6 course links
- [ ] All column headings are uppercase
- [ ] Link hover transitions from gray to black
- [ ] Outside click closes dropdown (if implemented)
- [ ] aria-expanded toggles correctly
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Vitest + Testing Library tests at 100% coverage
