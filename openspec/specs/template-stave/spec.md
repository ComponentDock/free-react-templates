# Specification: Stave (ColorLib Accordion 14)

## Purpose

Stave is a React template recreating the ColorLib "Accordion 14" template (`https://colorlib.com/wp/template/accordion-14/`), built with Vite, React 19, Tailwind CSS 4, and TypeScript.
It provides a clean, minimal accordion widget interface with smooth toggle interactions and text highlights.

## Requirements

### Requirement 1: Interactive Accordion Widget

- The page must render an accordion component with multiple collapsible sections.
- Clicking an accordion header expands its content panel and collapses others (or toggles independently).
- Each panel displays rich informational content relevant to accordion UI widgets.

#### Scenario: User expands accordion items

- **WHEN** the Stave application is loaded and the user clicks on the second accordion header
- **THEN** the second panel expands, displaying its content, and other panels remain collapsed.

### Requirement 2: Footer Attribution

- **WHEN** the user scrolls to the footer of the Stave application
- **THEN** a visible link to Component Dock (`https://www.componentdock.com/`) is present.
