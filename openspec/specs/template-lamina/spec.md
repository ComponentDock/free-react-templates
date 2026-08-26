# Template: Lamina (Accordion UI Component)

## Purpose

Recreation of ColorLib **Accordion 07** (`https://colorlib.com/wp/template/accordion-07/`).
Preview URL: `https://preview.colorlib.com/theme/accordion-07/` (returns 404 — fallback to screenshot analysis).

Stack: Vite + React 19 + TypeScript + Tailwind CSS 4.

This template implements a **minimalist vertical accordion component** — three collapsible panels with plus/minus toggles, designed for FAQ or content disclosure patterns. The design is clean, centered, with a dark page background and light accordion rows.

## Design Tokens (extracted from screenshot analysis)

| Token                      | Value                                                                          | Usage                                        |
| -------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- |
| `--color-bg-page`          | `#1a1a1a` / `gray-950`                                                         | Page background (dark)                       |
| `--color-bg-accordion`     | `#ffffff` / `white`                                                            | Accordion item backgrounds                   |
| `--color-border`           | `#e5e7eb` / `gray-200`                                                         | Accordion row borders                        |
| `--color-text-primary`     | `#111827` / `gray-900`                                                         | Accordion headers / questions                |
| `--color-text-body`        | `#374151` / `gray-700`                                                         | Expanded panel body text                     |
| `--color-toggle-collapsed` | `#16a34a` / `green-600`                                                        | Collapsed state toggle button (plus icon)    |
| `--color-toggle-expanded`  | `#2563eb` / `blue-600`                                                         | Expanded state toggle button (minus icon)    |
| `--color-toggle-icon`      | `#ffffff` / `white`                                                            | Toggle button icon color                     |
| `--font-family`            | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | All text                                     |
| `--radius-toggle`          | `0.375rem` / `rounded`                                                         | Toggle button border radius (square-ish)     |
| `--radius-panel`           | `0`                                                                            | Accordion rows have no border radius (sharp) |
| `--spacing-unit`           | `1rem` / `4`                                                                   | Base spacing rhythm                          |
| `--panel-padding`          | `1.5rem` / `6`                                                                 | Panel vertical/horizontal padding            |
| `--gap-items`              | `0.5rem` / `2`                                                                 | Gap between accordion items                  |

### Visual Notes (from screenshot)

- **Page background**: Very dark gray/black (`#1a1a1a`), fills viewport
- **Accordion container**: Centered horizontally, max-width ~600px, generous vertical padding
- **Heading**: "Accordion #07" centered above accordion, dark gray text, generous margin-bottom
- **Accordion items**: Three items stacked vertically with `0.5rem` gap
- **Item structure**: Each item is a bordered white row (`border: 1px solid #e5e7eb`)
- **Header row**: Flex layout — question text left, toggle button right
- **Question text**: Dark gray (`#111827`), medium weight, left-aligned
- **Toggle button**: Square-ish (40x40px), colored background (green when collapsed, blue when expanded), white plus/minus icon, no border radius on inner corners
- **Expanded panel**: White background, same border as header, padded content area with lorem ipsum text in medium gray (`#374151`)
- **Typography**: Clean system sans-serif, clear hierarchy (heading > question > body)
- **No shadows** — pure flat design with borders for separation
- **No animations visible** in static screenshot; implementation should include smooth height transition

## Requirements (Gherkin)

### Feature: Accordion Component

#### Scenario: Page renders with heading and three accordion items

```
Given the user visits the page
Then a centered heading "Accordion #07" is visible
And three accordion items are rendered vertically stacked
And each item shows a question text and a toggle button
And the page background is dark (gray-950)
And the accordion container is centered with max-width ~600px
```

#### Scenario: Initial state — all items collapsed

```
Given the page loads
Then all three accordion items are in collapsed state
And each toggle button shows a plus (+) icon
And each toggle button has green background (green-600)
And no panel content is visible below any header
```

#### Scenario: Expanding an item reveals content

```
Given the page loads with all items collapsed
When the user clicks the toggle button on the second item
Then that item expands to show its content panel
And the toggle button changes to a minus (−) icon
And the toggle button background changes to blue (blue-600)
And the content panel displays body text in gray-700
And the other two items remain collapsed
```

#### Scenario: Collapsing an expanded item hides content

```
Given the second item is expanded
When the user clicks the toggle button on the second item again
Then that item collapses
And the toggle button changes back to a plus (+) icon
And the toggle button background changes back to green (green-600)
And the content panel is no longer visible
```

#### Scenario: Multiple items can be expanded simultaneously

```
Given all items are collapsed
When the user clicks the toggle button on the first item
And then clicks the toggle button on the third item
Then both the first and third items are expanded
And both show minus icons with blue backgrounds
And the second item remains collapsed with a plus icon and green background
```

#### Scenario: Accordion items have correct question texts

```
Given the page renders
Then the first item shows "How to manage account?"
And the second item shows "How to become Pro"
And the third item shows "How to create an account?"
```

#### Scenario: Expanded content displays correct body text

```
Given the second item is expanded
Then its content panel shows "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
```

#### Scenario: Keyboard accessibility

```
Given the page loads
When the user tabs to a toggle button
Then the button receives visible focus ring
When the user presses Enter or Space on a focused toggle button
Then the item toggles expanded/collapsed state
```

#### Scenario: Screen reader semantics

```
Given the page loads
Then each accordion item uses semantic <details>/<summary> or proper ARIA (role="region", aria-expanded on button)
And the heading uses <h1> or <h2> as appropriate
And toggle buttons have aria-controls pointing to their content panel
And expanded state is announced via aria-expanded
```

#### Scenario: Smooth expand/collapse animation

```
Given an item is collapsed
When the user toggles it open
Then the content panel animates height smoothly (CSS transition)
And the toggle icon rotates or swaps cleanly
```

#### Scenario: Responsive layout

```
Given the viewport is mobile width (< 640px)
Then the accordion container uses full width with small horizontal padding
And toggle buttons remain easily tappable (min 44x44px)
And text remains readable without horizontal scroll
```

## Verification Checklist

- [ ] Page background is dark (gray-950)
- [ ] Heading "Accordion #07" centered above accordion
- [ ] Three accordion items stacked vertically with gap
- [ ] Each item: white background, gray-200 border
- [ ] Question texts match source exactly
- [ ] Collapsed state: green toggle button (green-600) with white plus icon
- [ ] Expanded state: blue toggle button (blue-600) with white minus icon
- [ ] Content panel: white background, gray-700 body text, proper padding
- [ ] Only one item expands at a time? (Spec allows multiple — implement as multiple-open)
- [ ] Smooth height transition on expand/collapse
- [ ] Keyboard accessible (Tab, Enter, Space)
- [ ] ARIA semantics correct (details/summary or ARIA pattern)
- [ ] Focus visible rings on interactive elements
- [ ] Responsive: works on mobile, tablet, desktop
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Design tokens in Tailwind @theme (index.css)
- [ ] Placeholder images via picsum.photos if needed (not needed for this template)
- [ ] 100% test coverage (lines, functions, branches, statements)
