# Template: AccordionSeventeen (UI Components / Widget)

## Purpose

Recreation of ColorLib **Bootstrap Accordion V17** (`https://colorlib.com/wp/template/accordion-17/`), previewed at `https://preview.colorlib.com/theme/bac/accordion-17/`. Built as a modern, responsive React 19 + Tailwind CSS 4 widget component showcasing collapsible accordion items with plus/minus toggles, clean typography (Roboto), and themed accent styling (`#72c02c`).

## Design Tokens & Styling

- **Primary Accent / Brand Color**: `#72c02c` (Green active state & minus icon)
- **Background**: `#efefef` (Page / container background)
- **Card Background**: `#ffffff` (Accordion button headers)
- **Typography**: Roboto, sans-serif
- **Active Shadow**: `0 1px 10px 0 rgba(0, 0, 0, 0.1)`
- **Footer Attribution**: Must link to `https://www.componentdock.com/` ("Component Dock").

## Sections & Structure

1. **Header / Hero Section**: Title ("Bootstrap Accordion #7") and subtitle.
2. **Interactive Accordion Section**:
   - Item 1: "How to download and register?" (Default expanded with Minus icon)
   - Item 2: "How to create your paypal account?" (Collapsed with Plus icon)
   - Item 3: "How to link your paypal and bank account?" (Collapsed with Plus icon)
3. **Footer Section**: Branded footer linking `https://www.componentdock.com/`.

## Requirements & Gherkin Scenarios

### Requirement 1: Header Display

The page shall display a clear header ("Bootstrap Accordion #7") with professional typography and light gray background (`#efefef`).

#### Scenario: User loads the accordion widget

- **WHEN** the user opens the accordion application
- **THEN** the main header "Bootstrap Accordion #7" is visible

### Requirement 2: Accordion Interaction

The component shall provide collapsible accordion items with plus (`+`) and minus (`-`) indicators. Expanding an item highlights it with the primary green accent (`#72c02c`) and displays its body content.

#### Scenario: User toggles accordion items

- **WHEN** the user clicks an accordion header
- **THEN** the item expands or collapses, toggling between plus and minus icons and adjusting active styling

### Requirement 3: Footer Attribution

The page footer shall display attribution linking to `https://www.componentdock.com/`.

#### Scenario: User inspects the footer

- **WHEN** the user scrolls to the bottom of the page
- **THEN** the Component Dock link is present and correct
