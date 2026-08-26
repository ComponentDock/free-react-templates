# Template: Accordion Sixteen (UI Components)

## Purpose

Recreation of ColorLib **Bootstrap Accordion V16** (`https://colorlib.com/wp/template/accordion-16/`), previewed at `https://colorlib.com/etc/accordion/colorlib-accordion-16/`. Built as a modern, responsive React component showcasing collapsible accordion items with smooth transitions, clean typography (Open Sans & Roboto Slab), and themed styling.

## Design Tokens & Styling

- **Primary Color**: `#563d7c` (Deep Purple theme brand accent)
- **Neutral Text**: `#6B6B6B` (Body text)
- **Background**: Light/clean container background with rounded accordion panel cards
- **Typography**: Open Sans for body / Roboto Slab for headings
- **Radius**: Rounded interactive accordion panels (`rounded-lg` / `rounded-xl`)
- **Footer Attribution**: Must link to `https://www.componentdock.com/` ("Component Dock").

## Sections & Structure

1. **Header / Hero Section**: Title ("Bootstrap Accordion #6" / Accordion Showcase) and introductory subtitle.
2. **Interactive Accordion Section**:
   - Item 1: "How to download and register?" (Default expanded)
   - Item 2: "How to create your paypal account?"
   - Item 3: "How to link your paypal and bank account?"
   - Item 4: "How to update your billing information?"
   - Item 5: "How to contact customer support?"
3. **Footer Section**: Copyright and branded link to Component Dock (`https://www.componentdock.com/`).

## Gherkin Requirements & Scenarios

### Feature: Accordion Sixteen Interactive Showcase

#### Scenario: User views the accordion list on load

- Given the user visits the Accordion Sixteen template page
- When the page loads successfully
- Then the main heading "Bootstrap Accordion #6" is visible
- And Item 1 ("How to download and register?") is expanded by default showing its content
- And Items 2 through 5 are collapsed

#### Scenario: User toggles accordion items

- Given the accordion list is displayed
- When the user clicks on Item 2 ("How to create your paypal account?") header
- Then Item 2 expands to reveal its description
- And the chevron icon rotates or toggles state accordingly

#### Scenario: Footer displays Component Dock attribution

- Given the user scrolls to the bottom of the page
- When the footer is rendered
- Then a link pointing to `https://www.componentdock.com/` with anchor text containing "Component Dock" is present

## Verification Checklist

- [ ] Spec validated via `npm run spec:validate`
- [ ] App workspace `@free-react-templates/accordion-sixteen` created in `apps/accordion-sixteen`
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Verification gate passes successfully (`scripts/verify-app.sh accordion-sixteen`)
