# Convene — Conference Event Template

Recreation of ColorLib "Manup" (https://colorlib.com/wp/template/manup/).

## Purpose

A single-page conference/event landing page with hero, countdown, about, speakers, schedule, pricing, blog, newsletter, contact, and footer.

## Requirements

### Requirement: Renders all sections

The app SHALL display navbar, hero, counter, about, speakers, schedule, pricing, blog, newsletter, contact, and footer sections.

#### Scenario: All sections visible

- **WHEN** the app loads
- **THEN** the navbar shows "Convene" branding
- **AND** the hero shows "Change Your Mind"
- **AND** the counter shows countdown labels
- **AND** the about section shows "About Conference"
- **AND** the speakers section shows "Who's Speaking"
- **AND** the schedule section shows "Our Schedule"
- **AND** the pricing section shows "Ticket Pricing"
- **AND** the blog section shows "Latest News"
- **AND** the newsletter shows "Subscribe Newsletter"
- **AND** the contact section shows "Location"
- **AND** the footer is visible

### Requirement: Sets document title

The app SHALL set the document title on load.

#### Scenario: Title on load

- **WHEN** the app loads
- **THEN** the document title is "Convene — Conference Event Template"

### Requirement: Schedule tab switching

The schedule section SHALL allow switching between day tabs.

#### Scenario: Switch between days

- **WHEN** the user clicks "Day 2"
- **THEN** Day 2 sessions are displayed
- **WHEN** the user clicks "Day 3"
- **THEN** Day 3 sessions are displayed

### Requirement: Newsletter subscription

The newsletter section SHALL accept email subscriptions.

#### Scenario: Subscribe with email

- **WHEN** the user enters "test@example.com" and clicks Subscribe
- **THEN** a success message is shown

### Requirement: Mobile menu toggle

The navbar SHALL support mobile menu toggling.

#### Scenario: Open mobile menu

- **WHEN** the user clicks the menu button
- **THEN** the mobile navigation opens

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/.

#### Scenario: Component Dock link present

- **GIVEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" exists
