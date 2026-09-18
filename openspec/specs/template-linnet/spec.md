# Linnet

## Purpose

Recreation of ColorLib "Classic" (https://colorlib.com/wp/template/classic/) — a business/agency one-page template with dark overlay hero, tabbed content, filterable portfolio, team cards, monthly/yearly pricing, blog, animated stats, and contact form.

## Requirements

### Requirement: Page loads with all sections

Users SHALL see a complete one-page template with all 13 sections rendered in order.

#### Scenario: All sections present

- **WHEN** a user visits the Linnet homepage
- **THEN** the navbar, hero, about, why-choose-us, services, skills, portfolio, team, pricing, blog, stats, contact, and footer sections are all visible

### Requirement: Pricing tabs switch between monthly and yearly

Users SHALL be able to toggle between monthly and yearly pricing views.

#### Scenario: Switch to yearly pricing

- **WHEN** a user clicks the "Yearly" tab in the pricing section
- **THEN** the price cards display yearly amounts

#### Scenario: Switch back to monthly pricing

- **WHEN** a user clicks the "Monthly" tab in the pricing section
- **THEN** the price cards display monthly amounts

### Requirement: Why Choose Us tabs switch content

Users SHALL be able to switch between Mission, Vision, and Support tab content.

#### Scenario: Switch to Vision tab

- **WHEN** a user clicks the "Our Vision" tab
- **THEN** the vision content is displayed

#### Scenario: Switch to Support tab

- **WHEN** a user clicks the "Our Support" tab
- **THEN** the support content is displayed

### Requirement: Portfolio filter tabs

Users SHALL be able to filter portfolio items by category.

#### Scenario: Filter by category

- **WHEN** a user clicks a category filter button
- **THEN** only portfolio items matching that category are displayed

### Requirement: Contact form submission

Users SHALL be able to submit the contact form.

#### Scenario: Submit contact form

- **WHEN** a user fills in the form and clicks "Send Now"
- **THEN** the form submission is handled without page navigation

### Requirement: Footer links to Component Dock

Every page footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer contains Component Dock link

- **WHEN** a user views the footer
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present
