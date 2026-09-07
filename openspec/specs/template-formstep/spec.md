# Template: FormStep (ColorLib Wizard 1)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 1 (`https://colorlib.com/wp/template/colorlib-wizard-1/`)
- **New Name**: `formstep` (App directory: `apps/formstep`, Package: `@free-react-templates/formstep`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A three-step registration wizard with a split-layout card (image on left, form on right), horizontal step indicators, warm cream background, and olive-green accent. Users fill personal details, address info, and an optional message across three steps.
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-1/index.html`
- **Source slug**: `colorlib-wizard-1`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-1.jpg`

## Design Tokens

Extracted from the ColorLib preview CSS (`css/style.css`):

- **Font family**: Mulish (Google Fonts; original name "Muli" — Regular 400, SemiBold 600)
- **Body text color**: #999 (medium gray)
- **Background**: #f9f6f1 (warm cream/off-white, full viewport)
- **Card**: white (#fff), box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2)
- **Card layout**: 40% image left, 60% form content right; flex row
- **Heading (h3 "Registration")**: color #453e79 (deep purple), font-size 22px, uppercase, letter-spacing 7px, border: 1px solid #dad8e4, inline-block with padding
- **Subtext (p)**: color #6d7f52 (olive green), font-size 20px, SemiBold, centered
- **Input border**: 2px solid #e6e6e6 (light gray)
- **Input focus border**: #e9e0cf (warm beige)
- **Step indicators**: 12px circles, active: #6d7f52 (olive green), inactive: #e9e0cf (warm beige), connector lines 58px wide, 2px thick
- **Next/Submit button**: #6d7f52 (olive green) bg, white text, border-radius via class (Material Design Iconic Font arrow icons)
- **Previous button**: #e9e0cf (warm beige) bg, #666 text
- **Button hover**: Next → #849963, Previous → #cfc7b8
- **Link color**: #6d7f52, hover: #89b843
- **Checkbox/radio tick**: #999 (gray), circular border-radius
- **Custom dropdown hover**: #81acee (blue) bg, white text
- **Responsive**: stacks vertically below 767px; image goes full-width on top

## Requirements

### Requirement: Three-step registration wizard

Users SHALL navigate through 3 sequential steps in a registration form wizard.

#### Scenario: Step 1 displays personal details form

- **WHEN** the FormStep wizard loads
- **THEN** Step 1 ("Registration") is visible with fields: First Name, Last Name, Email, Phone Number, Age, Gender radio (Male/Female), and a terms checkbox

#### Scenario: Step 2 displays address form

- **WHEN** the user completes Step 1 and advances to Step 2
- **THEN** Step 2 shows fields: Address, City, Zip Code, and a Country dropdown

#### Scenario: Step 3 displays message form

- **WHEN** the user completes Step 2 and advances to Step 3
- **THEN** Step 3 shows a Message textarea and a terms-and-conditions checkbox

### Requirement: Horizontal step indicator with progress

Users SHALL see a horizontal step indicator showing 3 dots with connecting lines that reflect the current step.

#### Scenario: Active step is highlighted

- **WHEN** the user is on Step 1
- **THEN** the first dot is olive green (#6d7f52) and the remaining dots are beige (#e9e0cf)

#### Scenario: Completed steps are marked

- **WHEN** the user advances to Step 2
- **THEN** Step 1 dot remains green with a completed connector line, and Step 2 dot becomes green

### Requirement: Navigation buttons

Users SHALL have Previous and Next/Submit buttons for wizard navigation.

#### Scenario: Previous button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** the Previous button is not visible

#### Scenario: Previous button visible on later steps

- **WHEN** the user is on Step 2 or Step 3
- **THEN** a Previous button is visible that returns to the previous step

#### Scenario: Submit button on final step

- **WHEN** the user is on Step 3
- **THEN** the Next button is replaced with a Submit button

### Requirement: Split-layout card design

Each wizard step SHALL display a split-layout card with an image on the left (40%) and form content on the right (60%).

#### Scenario: Image is displayed alongside form

- **WHEN** any wizard step is rendered
- **THEN** a placeholder image appears on the left side of the card and form fields appear on the right

#### Scenario: Responsive stacking on mobile

- **WHEN** the viewport width is below 768px
- **THEN** the card stacks vertically with the image on top and form content below

### Requirement: Form input styling

All form inputs SHALL use underline-style borders (no box borders) with consistent height and placeholder colors.

#### Scenario: Input underline styling

- **WHEN** form inputs are rendered
- **THEN** each input has a 2px bottom border (#e6e6e6), transparent other borders, height 37px, and placeholder text in #999

#### Scenario: Input focus state

- **WHEN** a form input receives focus
- **THEN** the bottom border changes to warm beige (#e9e0cf)

### Requirement: Custom select dropdown

The country selector SHALL be a custom dropdown with hover highlighting.

#### Scenario: Dropdown opens on click

- **WHEN** the user clicks the Country dropdown control
- **THEN** a list of countries appears below with hover highlighting in blue (#81acee)

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Mulish (Google Fonts) loaded for headings and body
- [ ] Warm cream background (#f9f6f1) covers full viewport
- [ ] Card is centered, 920px wide, with white background and subtle shadow
- [ ] Split layout: 40% image / 60% form content
- [ ] 3 horizontal step indicator dots with connecting lines
- [ ] Active step dot is olive green (#6d7f52)
- [ ] Step 1: First Name, Last Name, Email, Phone, Age, Gender radio, terms checkbox
- [ ] Step 2: Address, City, Zip Code, Country dropdown
- [ ] Step 3: Message textarea, terms-and-conditions checkbox
- [ ] Previous/Next buttons with correct styling (beige prev, green next)
- [ ] Submit button on Step 3
- [ ] Form inputs have underline-style borders (2px bottom only)
- [ ] Input focus changes border to warm beige
- [ ] Responsive: stacks vertically below 768px
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
