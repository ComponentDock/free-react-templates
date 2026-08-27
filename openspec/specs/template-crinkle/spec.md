# Template Spec: Crinkle (Accordion 18 Recreation)

## Overview

- **New name**: Crinkle
- **Source**: ColorLib "Bootstrap Accordion V18" (https://colorlib.com/wp/template/accordion-18/)
- **Preview**: https://preview.colorlib.com/theme/accordion-18/ (was 404 at time of spec; fallback to screenshot)
- **Type**: Single-purpose accordion component page (Bootstrap Accordion category)
- **Package**: @free-react-templates/crinkle

## Design Tokens (extracted from ColorLib preview CSS)

### Colors

- **Brand green**: `#72c02c` (active/expanded state)
- **Header inactive text**: `#999999` (rgb(153, 153, 153))
- **Header active text**: `#72c02c` (brand green)
- **Body text**: `#888888` (rgb(136, 136, 136))
- **Item background (inactive)**: `#f9f9f9` (rgb(249, 249, 249))
- **Header background**: `#ffffff` (white)
- **Icon background (inactive)**: `#efefef` (rgb(239, 239, 239))
- **Icon background (active)**: `#72c02c` (brand green)
- **Icon color (active)**: `#ffffff` (white)
- **Page title**: `#000000` (black)

### Typography

- **Font family**: Roboto (Google Fonts)
- **Title size**: ~28px (matching existing accordion templates)
- **Panel header size**: ~20px
- **Body text size**: ~16px (default)
- **Font weight**: 400 (normal) for headers, 400 for body

### Layout

- **Container max-width**: ~600px (centered)
- **Accordion item margin-bottom**: 10px
- **Header padding**: 15px (right padding 0 for icon area)
- **Body padding**: 20px
- **Icon size**: 18px font, padded area ~30x30px
- **Border radius**: 4px on icon area, 0 on items
- **Page title**: "Accordion #18" (matching ColorLib "Bootstrap Accordion #8" pattern)

### Component Behavior

- Single-open accordion (one panel open at a time)
- First panel open by default
- Headers are full-width toggle buttons
- Expand/collapse icon swaps: down chevron (▼) → up chevron (▲)
- Active header text color = brand green
- Inactive header text color = grey (#999)
- Body background = light grey (#f5f5f5 equivalent)
- No borders between items (10px gap)

## Section Structure (1:1 with source)

1. **Page Title** — "Accordion #18" centered, ~28px, font-medium
2. **Accordion** — Three panels:
   - Panel 1: "How to download and register?" (open by default)
   - Panel 2: "How to create your paypal account?"
   - Panel 3: "How to link your paypal and bank account?"
3. **Footer** — Component Dock attribution link

## Gherkin Scenarios

### Scenario: Initial render shows first panel expanded

```
Given the Crinkle page loads
When the page renders
Then the first accordion panel is expanded
And the second and third panels are collapsed
And the first panel's header shows brand green text
And the first panel's header shows the up-chevron icon
And the second and third panels' headers show grey text
And the second and third panels' headers show the down-chevron icon
```

### Scenario: Clicking a collapsed panel expands it and collapses the active one

```
Given the first panel is expanded
When the user clicks the second panel's header
Then the second panel becomes expanded
And the first panel becomes collapsed
And the second panel's header shows brand green text and up-chevron
And the first panel's header shows grey text and down-chevron
```

### Scenario: Clicking an expanded panel collapses it

```
Given the first panel is expanded
When the user clicks the first panel's header
Then the first panel becomes collapsed
And no panel is expanded
And the first panel's header shows grey text and down-chevron
```

### Scenario: Keyboard navigation works

```
Given focus is on the first panel's header
When the user presses Enter
Then the first panel toggles (expands if collapsed, collapses if expanded)
And focus remains on the header
```

### Scenario: Footer links to Component Dock

```
Given the page renders
When the user scrolls to the footer
Then a "More templates at Component Dock" link is visible
And the link href is "https://www.componentdock.com/"
```

### Scenario: Semantic accessibility

```
Given the page renders
Then each panel header is a <button> with aria-expanded and aria-controls
Then each panel body is a <div role="region"> with aria-labelledby pointing to its header
Then icons have aria-hidden="true"
Then the accordion container has no redundant wrapper
```

## Implementation Notes

- Use `packages/ui` `cn()` utility for class composition
- No ColorLib references in source code (provenance only in spec/PR)
- Placeholder images not needed (text-only component)
- Google Fonts: Roboto via `<link>` in index.html
- Icons: lucide-react `ChevronDown` / `ChevronUp` (replacing icomoon)
- Content can be paraphrased but keep same structure
- Follow existing accordion patterns in `apps/bellows`, `apps/concertina`, `apps/crank`
- Footer MUST link https://www.componentdock.com/ branded "Component Dock"
