# Template: Unfurl (Bootstrap Accordion)

## Purpose

Recreation of **ColorLib "Accordion 18"** (source slug: `accordion-18`, preview URL: `https://preview.colorlib.com/theme/accordion-18/` — currently unreachable, fallback to screenshot only).

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).
Deploy target: `unfurl.free.componentdock.com` (Surge, wildcard CNAME `*.free → na-west1.surge.sh`).
Footer must link: `https://www.componentdock.com/` ("Component Dock").

## Design tokens (from screenshot — preview unreachable)

| Token                            | Value                                                                                                          | Source            |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------- |
| **Brand green (expanded)**       | `#28a745` (Bootstrap success green)                                                                            | Screenshot        |
| **Brand grey (collapsed)**       | `#6c757d` (Bootstrap secondary grey)                                                                           | Screenshot        |
| **Text primary**                 | `#212529` (Bootstrap dark)                                                                                     | Screenshot        |
| **Text muted**                   | `#6c757d`                                                                                                      | Screenshot        |
| **Background**                   | `#ffffff` (white)                                                                                              | Screenshot        |
| **Border**                       | `#dee2e6` (Bootstrap light border)                                                                             | Screenshot        |
| **Font family**                  | System UI stack / `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | Bootstrap default |
| **Accordion header font weight** | `600` (semi-bold)                                                                                              | Screenshot        |
| **Accordion content font size**  | `0.875rem` (14px)                                                                                              | Screenshot        |
| **Button/icon size**             | `1.25rem` × `1.25rem` (20×20px) square                                                                         | Screenshot        |
| **Border radius (buttons)**      | `0.25rem` (4px)                                                                                                | Screenshot        |
| **Spacing rhythm**               | `1rem` (16px) vertical between items                                                                           | Screenshot        |

> **Note:** Preview URL returned 404; all tokens derived from ColorLib screenshot (`https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-18.jpg`).

## Section structure (1:1 from screenshot)

1. **Page Title** — centered, bold, dark text: "Bootstrap Accordion #8"
2. **Accordion List** — vertical stack of 3 accordion items:
   - Item 1 (expanded): "How to download and register?" + lorem ipsum content
   - Item 2 (collapsed): "How to create your paypal account?"
   - Item 3 (collapsed): "How to link your paypal and bank account?"
3. **Footer** — Component Dock link (mandatory)

## Gherkin requirements + scenarios

### Feature: Accordion component

**Scenario: Page renders with title and three accordion items**

```
Given the user opens the page
When the page loads
Then the title "Bootstrap Accordion #8" is visible and centered
And exactly three accordion items are rendered in vertical order
```

**Scenario: First accordion item is expanded by default**

```
Given the page has loaded
When the user views the first accordion item
Then its header reads "How to download and register?"
And its header text is colored with the brand green (#28a745)
And its expand icon is an upward-pointing arrow (white on green square)
And its content panel is visible showing the full lorem ipsum text
And the content panel has a thin left border in the brand green
```

**Scenario: Second and third accordion items are collapsed by default**

```
Given the page has loaded
When the user views the second accordion item
Then its header reads "How to create your paypal account?"
And its header text is colored with the brand grey (#6c757d)
And its expand icon is a downward-pointing arrow (white on grey square)
And its content panel is hidden
And the third accordion item behaves identically with header "How to link your paypal and bank account?"
```

**Scenario: Clicking a collapsed header expands it and collapses others (accordion behavior)**

```
Given the second accordion item is collapsed
When the user clicks its header
Then the second item expands (icon flips upward, content shows)
And the first item collapses (icon flips downward, content hides)
And the header text color changes to brand green
```

**Scenario: Clicking an expanded header collapses it**

```
Given the first accordion item is expanded
When the user clicks its header
Then the first item collapses (icon flips downward, content hides)
And its header text color changes to brand grey
```

**Scenario: Keyboard navigation works for all accordion headers**

```
Given the page has loaded
When the user presses Tab to focus the first accordion header
Then the header receives a visible focus ring
When the user presses Enter or Space
Then the accordion toggles (expands if collapsed, collapses if expanded)
When the user presses ArrowDown
Then focus moves to the next accordion header
When the user presses ArrowUp on the second header
Then focus moves to the first accordion header
```

**Scenario: Accordion content is accessible to screen readers**

```
Given the page has loaded
When a screen reader navigates the accordion
Then each header has role="button" and aria-expanded reflecting state
And each content panel has role="region" and aria-labelledby pointing to its header
And the expanded state is announced correctly
```

### Feature: Footer

**Scenario: Footer contains Component Dock link**

```
Given the page has loaded
When the user scrolls to the footer
Then a link to https://www.componentdock.com/ with text "Component Dock" is present
And the link opens in a new tab (target="_blank" rel="noopener")
```

## Verification checklist

- [ ] Page title renders centered: "Bootstrap Accordion #8"
- [ ] Three accordion items in vertical order
- [ ] Item 1 expanded by default with green styling
- [ ] Items 2–3 collapsed by default with grey styling
- [ ] Accordion behavior: click to toggle, only one open at a time
- [ ] Icons: up arrow (expanded), down arrow (collapsed), white on colored square
- [ ] Content panel left border matches header color
- [ ] Keyboard navigation (Tab, Enter, Space, ArrowUp/Down)
- [ ] ARIA attributes correct (role, aria-expanded, aria-labelledby)
- [ ] Focus visible rings on interactive elements
- [ ] Footer link to Component Dock present and correct
- [ ] Design tokens match screenshot (green #28a745, grey #6c757d, spacing, radii)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeScript strict mode passes
- [ ] Build succeeds
- [ ] Deploy to `unfurl.free.componentdock.com` works
