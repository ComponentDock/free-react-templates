# Template: Harbinger (Coming Soon)

## Purpose

Recreation of ColorLib "04 Comming Soon" (`04-comming-soon`).

- **Source:** https://colorlib.com/wp/template/04-comming-soon/
- **Preview (template HTML):** https://colorlib.com/etc/cs/04-comming-soon.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-19.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Coming Soon / Under Construction

## Requirements

### Requirement: Split layout with hero image

The page SHALL display a full-viewport split layout with a hero image on the left and content on the right. On mobile, the layout stacks vertically.

#### Scenario: Desktop split layout

- **WHEN** I visit the Harbinger template on a desktop viewport
- **THEN** I see a hero image occupying the left half of the viewport
- **AND** I see content on the right half

#### Scenario: Mobile stacked layout

- **WHEN** I visit the Harbinger template on a mobile viewport
- **THEN** the hero image and content stack vertically

### Requirement: Under Construction heading

The page SHALL display an "Under Construction" heading and a maintenance description paragraph.

#### Scenario: Heading and description visible

- **WHEN** I visit the Harbinger template
- **THEN** I see a heading with text "Under Construction"
- **AND** I see a paragraph describing scheduled maintenance

### Requirement: Email subscription form

The page SHALL include an email input field and a "NOTIFY US" submit button. On submission, the form is replaced with a confirmation message.

#### Scenario: Email form rendered

- **WHEN** I visit the Harbinger template
- **THEN** I see an email input field
- **AND** I see a button labeled "NOTIFY US"

#### Scenario: Successful email submission

- **WHEN** I enter an email address in the input field
- **AND** I click the "NOTIFY US" button
- **THEN** I see a confirmation message
- **AND** the email form is no longer visible

### Requirement: Social media links

The page SHALL display social media icon links for Facebook, Twitter, Google, Instagram, and Pinterest.

#### Scenario: Social icons present

- **WHEN** I visit the Harbinger template
- **THEN** I see links labeled Facebook, Twitter, Google, Instagram, and Pinterest
- **AND** each link has an aria-label

### Requirement: Component Dock footer

The page SHALL display a footer with a link to Component Dock.

#### Scenario: Footer link

- **WHEN** I visit the Harbinger template
- **THEN** I see a link to "Component Dock" pointing to https://www.componentdock.com/
