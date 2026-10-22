# Spec: Jade (ColorLib Accordion 20)

## Purpose

An elegant FAQ / accordion template built with React 19, TypeScript, and Tailwind CSS 4. Recreation of ColorLib Accordion 20 as **Jade**.

## Requirements

### Requirement 1: Hero & Heading

Users SHALL see a clear title and description representing the accordion showcase.

#### Scenario: Display header

- **WHEN** the user loads Jade
- **THEN** they see the main title and introduction

### Requirement 2: Interactive Accordion

Users SHALL be able to expand and collapse accordion items interactively.

#### Scenario: Expand accordion item

- **WHEN** the user clicks an accordion item header
- **THEN** the accordion item expands to reveal its content

### Requirement 3: Footer

Users SHALL see a copyright footer with a branded link to Component Dock.

#### Scenario: Display footer

- **WHEN** the user scrolls to the bottom of the page
- **THEN** they see the footer containing the Component Dock link

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
