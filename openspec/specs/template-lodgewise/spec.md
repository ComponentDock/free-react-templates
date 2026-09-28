# Template: Lodgewise (Search Form)

## Purpose

Recreation of ColorLib **Search 14** (hotel/booking search form widget).

- **Source slug:** `colorlib-search-14`
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-search-14/ (unreachable at time of prep — falling back to screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-14.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (from screenshot)

| Token              | Value                                          |
|--------------------|------------------------------------------------|
| Background gradient | peach-to-light-pink gradient (top: ~#f9e4d4, bottom: ~#f5d6cc) |
| Input background   | white (`#ffffff`)                              |
| Input border       | light gray, ~1px solid (`#e0e0e0`)             |
| Input border-radius | 8px (rounded-lg)                              |
| Search button bg   | warm yellow/gold (`#f0c75e` / `#efc050`)      |
| Search button text | dark gray/near-black (`#333`)                  |
| Search button border-radius | 8px (rounded-lg)                    |
| Label text color   | gray (`#888` / muted)                          |
| Value text color   | dark (`#333`)                                  |
| Font family        | Inter or similar sans-serif (system fallback)   |
| Section layout     | full-width horizontal bar, centered on page     |

## Sections (order)

1. **SearchFormBar** — horizontal container, centered vertically and horizontally on the full-page peach gradient background.
   - GOING TO input (text, placeholder "Destination, hotel name")
   - CHECK-IN input (date, placeholder "mm/dd/yyyy")
   - CHECK-OUT input (date, placeholder "mm/dd/yyyy")
   - GUESTS input (number/stepper, default "2 Guests", +/- buttons)
   - Search button (gold background, dark text)

## Gherkin requirements

### Scenario: SearchFormBar renders all fields

```
Given I visit the Lodgewise page
Then I should see a "GOING TO" text input with placeholder "Destination, hotel name"
And I should see a "CHECK-IN" date input
And I should see a "CHECK-OUT" date input
And I should see a "GUESTS" field showing "2 Guests"
And I should see a "Search" button
```

### Scenario: Guest count increments and decrements

```
Given I visit the Lodgewise page
And the guest count is "2 Guests"
When I click the "+" button on the guests field
Then the guest count should show "3 Guests"
When I click the "-" button on the guests field
Then the guest count should show "2 Guests"
```

### Scenario: Guest count cannot go below 1

```
Given I visit the Lodgewise page
And the guest count is "1 Guest"
When I click the "-" button on the guests field
Then the guest count should still show "1 Guest"
```

### Scenario: Search button is clickable

```
Given I visit the Lodgewise page
When I click the "Search" button
Then a search action should be triggered (submit or handler call)
```

## Verification checklist

- [ ] Spec follows OpenSpec format
- [ ] Design tokens match screenshot reference
- [ ] All sections from ColorLib source are included
- [ ] Section order matches original
- [ ] Gherkin scenarios cover all interactive elements
- [ ] Naming: "lodgewise" — no collision with existing apps/specs
- [ ] No references to ColorLib in app code (provenance in spec only)
