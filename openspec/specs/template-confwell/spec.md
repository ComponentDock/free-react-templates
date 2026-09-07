# Template: ConfWell (Split-Screen Event Registration Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 3 (`https://colorlib.com/wp/template/colorlib-wizard-3/`)
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-3/index.html`
- **New Name**: `confwell` (App directory: `apps/confwell`, Package: `@free-react-templates/confwell`)
- **Category**: Forms / Multi-step Event Registration Wizard
- **Description**: A split-screen 3-step event registration wizard. Left panel shows a full-height event/conference image. Right panel is a dark textured background area with white text and bottom-border inputs. Steps: (1) Event Information (display-only), (2) Set The Event (price, people count, contact inputs), (3) Request from You (special request, staff questions, terms checkbox). Uses Arvo font, white-on-dark aesthetic, minimal outlined buttons.

## Requirements

### Requirement: Split-screen layout renders on page load

The wizard SHALL display a split-screen layout with a full-height event image on the left (65.78% width) and a dark form panel on the right (34.22% width).

#### Scenario: Page loads with step 1 active

- **WHEN** the user navigates to the ConfWell wizard
- **THEN** the page displays a split-screen layout with image left and dark form right
- **AND** the title "Event Information" is visible (32px, centered, white)
- **AND** event details are displayed: Date, Time, Venue, Address, Website
- **AND** "Next" button is visible at the bottom

### Requirement: Step navigation between wizard steps

The wizard SHALL allow navigation between 3 steps using Previous and Next buttons.

#### Scenario: Navigate to step 2

- **WHEN** the user is on step 1 and clicks "Next"
- **THEN** step 2 becomes active
- **AND** the title "Set The Event" is visible
- **AND** a price display shows "$270"
- **AND** a people count dropdown (1-10) is visible
- **AND** inputs for Name, E-mail, Phone, Address are visible

#### Scenario: Navigate to step 3

- **WHEN** the user is on step 2 and clicks "Next"
- **THEN** step 3 becomes active
- **AND** the title "Request from You" is visible
- **AND** a special request input is visible
- **AND** staff question inputs are visible
- **AND** a terms checkbox is visible

#### Scenario: Navigate back to previous step

- **WHEN** the user is on step 2 and clicks "Previous"
- **THEN** step 1 becomes active again
- **AND** event information is displayed

#### Scenario: Previous button disabled on step 1

- **WHEN** the user is on step 1
- **THEN** the "Previous" button is disabled

#### Scenario: Next button hidden on last step

- **WHEN** the user is on step 3
- **THEN** the "Next" button is not visible

### Requirement: Design tokens match reference

The wizard SHALL use the design tokens from the original ColorLib CSS.

#### Scenario: Visual design tokens

- **WHEN** the wizard is rendered
- **THEN** the body uses font-family "Arvo"
- **AND** headings are 32px, white, font-weight 400
- **AND** inputs have bottom-border only (1px solid rgba(255,255,255,0.4))
- **AND** buttons are outlined (border 1px solid #fff, transparent background)
- **AND** the form panel has a dark background

### Requirement: Responsive layout on mobile

The wizard SHALL stack vertically on smaller viewports.

#### Scenario: Responsive layout on mobile

- **WHEN** the user views the wizard on a viewport width of 375px
- **THEN** the layout stacks vertically
- **AND** the image section is shown at reduced height
- **AND** the form section has padding for mobile

### Requirement: Social links at bottom of form panel

The wizard SHALL display social media icons at the bottom of the form panel.

#### Scenario: Social links rendered

- **WHEN** the wizard is rendered
- **THEN** social links for Facebook, Twitter, Tumblr, and Instagram are visible

### Requirement: Footer links to Component Dock

The wizard SHALL include a footer that links to Component Dock.

#### Scenario: Footer rendered

- **WHEN** the wizard is rendered
- **THEN** a footer is visible with a link to https://www.componentdock.com/
- **AND** the link text contains "Component Dock"

### Requirement: No ColorLib references in app code

The app source files SHALL NOT contain any references to ColorLib.

#### Scenario: No colorlib strings in source

- **WHEN** searching all files in apps/confwell/src/
- **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification Checklist

- [x] Spec exists at `openspec/specs/template-confwell/spec.md`
- [x] Design tokens match reference CSS
- [x] 3-step wizard flow: event info → set event → requests
- [x] Split-screen layout (image left 65.78%, form right 34.22%)
- [x] Arvo font loaded
- [x] White-on-dark aesthetic with bottom-border inputs
- [x] Outlined buttons (transparent bg, white border)
- [x] Social links at bottom of form panel
- [x] Terms checkbox on step 3
- [x] Responsive: stacks vertically on mobile
- [x] No references to ColorLib in app code
- [x] Footer links to `https://www.componentdock.com/`
