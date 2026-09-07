# Template: OptGrid (Multi-Select Component)

## Purpose

Recreation of the ColorLib "Multiselect 20" multi-select dropdown component demo.

- **Source:** https://colorlib.com/wp/template/multiselect-20/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-20/
- **Category:** Bootstrap component demos — multi-select form controls
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

The original showcases the Chosen.js jQuery plugin rendered as a Bootstrap-styled
multi-select dropdown with three distinct color variants. Each variant displays
the same category options (Design, HTML5, CSS3, jQuery, BS4, Bootstrap,
WordPress, FrontEnd) as selectable chips on a clean gray background.

## Design tokens

Extracted from the live preview at
`https://preview.colorlib.com/theme/bootstrap/multiselect-20/`.

| Token             | Value                                                     |
| ----------------- | --------------------------------------------------------- |
| Font family       | `"Roboto", sans-serif` (primary), `"Poppins"` also loaded |
| Background        | `#efefef` (light gray page background)                    |
| Text color        | `#b3b3b3` (paragraph text)                                |
| Heading color     | Default dark (black)                                      |
| Heading font-size | `20px`                                                    |
| Color-1 chip bg   | `#e5e4cc` (muted yellow-green)                            |
| Color-2 chip bg   | `#c7f0db` (bright mint green)                             |
| Color-3 chip bg   | `#d3f4ff` (light sky blue)                                |
| Chip text         | Inherited dark color                                      |
| Chip padding      | `7px 10px 7px 26px` (with 26px right for close btn)       |
| Chip radius       | `4px` (border-radius)                                     |
| Chip shadow       | `none` (flat chips)                                       |
| Container radius  | `4px`                                                     |
| Container shadow  | `0 1px 4px 0 rgba(0,0,0,0.1)`                             |
| Dropdown shadow   | `0 15px 30px 0 rgba(0,0,0,0.2)`                           |
| Dropdown radius   | `4px`                                                     |
| Section padding   | `7rem 0` (top/bottom)                                     |
| Grid              | Bootstrap row + col-md-5 centered                         |
| Close button      | Positioned `top: 9px; right: 8px` (× icon)                |

## Visual design notes (from screenshot)

The original screenshot shows a vertically-centered gray page with three rows
of multi-select dropdown components. Each row contains a labeled dropdown
container showing selected items as colored pill/chip badges. The three color
variants (muted yellow-green, mint green, sky blue) demonstrate the same
component with different accent palettes. The design is minimal and
form-focused — no hero, no navigation, no footer in the original demo.

## Gherkin requirements

```gherkin
Feature: OptGrid Multi-Select Demo Page

  Background:
    Given the user opens the OptGrid template at the root URL

  Scenario: Page loads with correct title and heading
    Then a heading "Multi-Select #10 (Limit to 5)" is visible
    And the page background color is light gray (#efefef)

  Scenario: Three multi-select variants are displayed
    Then three multi-select components are visible
    And each multi-select contains the options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd

  Scenario: Color variant 1 uses yellow-green chip accent
    Then the first multi-select component has a yellow-green (#e5e4cc) chip accent

  Scenario: Color variant 2 uses mint-green chip accent
    Then the second multi-select component has a mint-green (#c7f0db) chip accent

  Scenario: Color variant 3 uses sky-blue chip accent
    Then the third multi-select component has a sky-blue (#d3f4ff) chip accent

  Scenario: Selecting an option creates a chip tag
    Given the first multi-select is focused
    When the user selects "Design" from the options
    Then a chip labeled "Design" appears in the first multi-select

  Scenario: Removing a selected chip
    Given the first multi-select has "Design" selected
    When the user clicks the close button on the "Design" chip
    Then the "Design" chip is removed from the first multi-select

  Scenario: Dropdown opens with all options
    Given a multi-select is focused
    When the user opens the dropdown
    Then all 8 options are listed in the dropdown

  Scenario: Selection limit enforcement
    Given the first multi-select has 5 options selected
    When the user tries to select a 6th option
    Then no additional chip is added (limit of 5 is enforced)

  Scenario: Responsive layout
    When the viewport width is less than 768px
    Then the multi-select components stack vertically
    And each component spans the full width

  Scenario: Accessibility — keyboard navigation
    Given a multi-select is focused
    When the user presses ArrowDown
    Then the dropdown options are navigable by keyboard

  Scenario: Footer links to Component Dock
    Then a link to "https://www.componentdock.com/" is present in the footer
```

## Verification checklist

- [ ] Page renders with heading "Multi-Select #10 (Limit to 5)"
- [ ] Three multi-select components displayed vertically
- [ ] Color 1 chip accent: #e5e4cc (yellow-green)
- [ ] Color 2 chip accent: #c7f0db (mint-green)
- [ ] Color 3 chip accent: #d3f4ff (sky-blue)
- [ ] Each select offers: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- [ ] Selecting an option creates a chip tag with close button
- [ ] Close button removes the chip
- [ ] Selection limit of 5 enforced
- [ ] Dropdown opens with all options listed
- [ ] Responsive: stacks on mobile viewports
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app source code
- [ ] public/CNAME = optgrid.free.componentdock.com
- [ ] homepage = https://optgrid.free.componentdock.com
