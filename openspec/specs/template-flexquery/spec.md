# Template: FlexQuery (FAQ Accordion)

## Purpose

Recreation of ColorLib **Accordion 18** (`https://colorlib.com/wp/template/accordion-18/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-18/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

A minimal, clean FAQ-style accordion page with three collapsible items, centered heading, and green accent on the active/expanded state. The original is a Bootstrap 4 snippet with jQuery collapse; we recreate it with React state and Tailwind.

## Design Tokens

- **Brand Colors**: Primary green accent (`#72c02c`), Neutral white body background (`#ffffff`), Accordion item background (`#f9f9f9`), Accordion button background (`#ffffff`), Accordion button text (`#999999`), Accordion body text (`#888888`), Accordion icon collapsed background (`#efefef`), Accordion icon expanded background (`#72c02c`), Accordion icon expanded text (`#ffffff`), Paragraph muted text (`#b3b3b3`).
- **Font Family**: "Roboto", sans-serif. Load weights 300, 400, 500 via Google Fonts.
- **Button Shapes**: Zero border-radius on accordion items (sharp/square corners). Icon badge has `border-radius: 4px` (slight rounding).
- **Section Backgrounds**: White page background. Accordion items have `#f9f9f9` background with 10px bottom margin. No hero/parallax — single centered heading above the accordion.
- **Layout**: Centered container with `padding: 7rem 0`. Heading is centered, 20px font-size. Accordion items stack vertically with 10px gap. Each item has a full-width clickable header with an icon badge on the right side.

## Requirements & Gherkin Scenarios

### Feature: FAQ Accordion with Expand/Collapse Interaction

As a site visitor, I want to view a clean FAQ accordion so that I can click questions to reveal detailed answers.

#### Scenario: Page renders with initial heading and three accordion items

- Given the user is on the FlexQuery template home page
- Then the heading "Bootstrap Accordion #8" is displayed centered at the top
- And three accordion items are visible
- And the first accordion item ("How to download and register?") is expanded by default
- And the second and third items are collapsed

#### Scenario: Clicking a collapsed accordion item expands it

- Given the user is on the FlexQuery template home page
- And the second accordion item is collapsed
- When the user clicks the header "How to create your paypal account?"
- Then the second accordion item expands and reveals its body text
- And the icon badge changes from a downward chevron on gray background to an upward chevron on green background
- And the header text color changes from gray (#999) to green (#72c02c)

#### Scenario: Clicking the expanded first item collapses it

- Given the user is on the FlexQuery template home page
- And the first accordion item is expanded
- When the user clicks the header "How to download and register?"
- Then the first accordion item collapses and hides its body text
- And the icon badge reverts to a downward chevron on gray background

#### Scenario: Only one item is expanded at a time

- Given the user is on the FlexQuery template home page
- And the first accordion item is expanded
- When the user clicks the third accordion item header "How to link your paypal and bank account?"
- Then the third accordion item expands
- And the first accordion item automatically collapses

#### Scenario: Accordion body text is legible

- Given the user expands any accordion item
- Then the body text is displayed in a muted gray color (#888) with 20px padding on all sides
- And the text describes the FAQ answer content

## Verification Checklist

- [ ] Heading is centered, Roboto font, 20px
- [ ] Three accordion items render with `#f9f9f9` background
- [ ] First item expanded by default, others collapsed
- [ ] Click toggles expand/collapse with correct icon and color transitions
- [ ] Only one item expanded at a time (accordion behavior)
- [ ] Icon badge positioned to the right, vertically centered
- [ ] Green (#72c02c) accent on expanded header text and icon background
- [ ] Gray (#efefef) icon background when collapsed
- [ ] Muted body text (#888) inside expanded panel
- [ ] Responsive: works on mobile (stacked, no overflow)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
