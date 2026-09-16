# Horizon — Coming Soon Template

> Recreation of ColorLib "08 Comming Soon" (Coming Soon V23)
> Source: https://colorlib.com/wp/template/08-comming-soon/
> Preview: unreachable (404); design based on screenshot + description.
> Description: "full-screen image background website template with a framed look"

## Purpose

A free coming soon landing page with a full-screen background image and a
centered "framed" content box — bordered with backdrop blur — containing a
countdown timer, email signup, and social links. Distinct from the other seven
ColorLib coming-soon recreations by its elegant framed aesthetic.

## Requirements

### Requirement: Frame layout with background image

The page SHALL display a full-screen background image with a dark overlay
and a centered bordered frame containing the main content.

#### Scenario: Frame renders correctly

- **WHEN** the page loads
- **THEN** a heading "Coming Soon" is visible inside a bordered frame container
- **AND** the frame has a visible white border and semi-transparent background

### Requirement: Countdown timer

The page SHALL include a countdown timer that counts down to a target date.

#### Scenario: Timer displays four time units

- **WHEN** the page loads
- **THEN** four time units are displayed: Days, Hours, Minutes, Seconds
- **AND** the timer has a `role="timer"` with an accessible label

#### Scenario: Timer shows zeros when target has passed

- **WHEN** the current time is after the target date
- **THEN** all four units display "00"

#### Scenario: Timer updates in real time

- **WHEN** 5 seconds elapse
- **THEN** the seconds value decreases by 5

### Requirement: Email signup form

The page SHALL include an email signup form for visitors to notify when the
site launches.

#### Scenario: Form renders with email input and submit button

- **WHEN** the page loads
- **THEN** an email input field is present
- **AND** a submit button labeled "NOTIFY ME" is present
- **AND** the form has an accessible name

#### Scenario: User can type an email address

- **WHEN** the user types into the email input
- **THEN** the typed text appears in the field

### Requirement: Social links

The page SHALL include social media icon links.

#### Scenario: Five social links are rendered

- **WHEN** the page loads
- **THEN** five social icon links are present (Facebook, Twitter, Google Plus, Instagram, Pinterest)
- **AND** each link opens in a new tab
- **AND** each link has an accessible label

### Requirement: Component Dock footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link renders correctly

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ is visible
- **AND** the link text says "More templates at Component Dock"
- **AND** the link opens in a new tab
- **AND** a `contentinfo` landmark is present
