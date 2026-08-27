# Spec: Jade (ColorLib Accordion 20)

## Purpose

Recreation of ColorLib Accordion 20 as **Jade**, an elegant FAQ / accordion template built with React 19, TypeScript, and Tailwind CSS 4.

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
