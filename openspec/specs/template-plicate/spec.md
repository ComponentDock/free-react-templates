# Template: Plicate (UI Components / Accordion)

## Purpose

Recreation of ColorLib [Accordion 05](https://colorlib.com/wp/template/accordion-05/) (`https://preview.colorlib.com/theme/accordion-05/`, preview unreachable, designed from screenshot reference). Built as a clean, responsive interactive accordion component showcase in React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors**: Primary Indigo (`#4f46e5`), Neutral Gray (`#f3f4f6`), Slate Text (`#1f2937`), Accent Blue (`#3b82f6`)
- **Typography**: Inter, sans-serif
- **Accordion Style**: Clean collapsible cards with chevron indicators, smooth toggle transitions, bold headers, and structured body content.
- **Layout**: Centered container with header title, subtitle, and vertical stack of interactive accordion items.

## Requirements & Scenarios

### Requirement 1: Header Section

- The template must display a clear title and subtitle introducing the accordion collection.
- Scenario: User loads the page
  - Given the user visits the Plicate template homepage
  - Then they should see the main header "Interactive Accordion Showcase" and subtitle describing the component set.

### Requirement 2: Interactive Accordion Component

- The template must provide a fully interactive accordion list where clicking an item expands its content while collapsing others (or independently toggleable).
- Scenario: User expands an accordion item
  - Given the user views the accordion list
  - When they click on an accordion header
  - Then the corresponding content area expands with smooth transition and the chevron icon rotates.

### Requirement 3: Footer Attribution

- The template footer must link to Component Dock (`https://www.componentdock.com/`).
- Scenario: User scrolls to the footer
  - Given the user reaches the bottom of the page
  - Then they should see the copyright and a link to Component Dock.

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
