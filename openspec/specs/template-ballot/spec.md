# Ballot — Custom Checkbox Template

Recreation of ColorLib Checkbox 14 (https://colorlib.com/wp/template/checkbox-14/)

## Source

- **Original:** ColorLib Checkbox 14
- **Preview:** https://preview.colorlib.com/theme/bootstrap/checkbox-14/
- **Category:** Checkbox
- **New name:** Ballot

## Design tokens

- **Font:** Roboto (300, 400, 500, 700)
- **Brand color (accent):** #7e0cf5 (purple)
- **Checkbox indicator bg:** #e6e6e6 (unchecked), #7e0cf5 (checked)
- **Hover indicator bg:** #cccccc
- **Text color:** #26282b (body), headings same
- **Layout:** Centered container, left-aligned content, max-w-md
- **Background:** White (#fff)

## Structure

1. **CheckboxShowcase** — heading ("Checkbox #14") + subtitle + 4 checkbox items
2. **Footer** — template name + Component Dock link

## Checkbox states

| Label              | Default checked | Disabled |
| ------------------ | --------------- | -------- |
| First checkbox     | true            | false    |
| Second checkbox    | false           | false    |
| Disabled           | false           | true     |
| Disabled & checked | true            | true     |

## Scenarios

### CheckboxShowcase

- GIVEN the page loads WHEN viewing THEN the heading reads "Checkbox #14"
- GIVEN the page loads WHEN viewing THEN 4 checkbox inputs are rendered
- GIVEN the page loads WHEN viewing THEN "First checkbox" is checked by default
- GIVEN the page loads WHEN viewing THEN "Second checkbox" is unchecked
- GIVEN the page loads WHEN viewing THEN "Disabled" is unchecked and disabled
- GIVEN the page loads WHEN viewing THEN "Disabled & checked" is checked and disabled

### Checkbox component

- GIVEN a checkbox WHEN clicking it THEN it toggles checked state
- GIVEN a checkbox with defaultChecked THEN it starts checked
- GIVEN a disabled checkbox WHEN clicking THEN it does not toggle
- GIVEN a checkbox WHEN hovering THEN the indicator changes color

### Footer

- GIVEN the page loads WHEN viewing footer THEN "Ballot" name appears
- GIVEN the page loads WHEN viewing footer THEN Component Dock link points to https://www.componentdock.com/
- GIVEN the page loads WHEN viewing footer THEN link opens in new tab

### App

- GIVEN the page loads WHEN viewing THEN document title is "Ballot — Custom Checkbox Template"
- GIVEN the page loads WHEN viewing THEN main landmark wraps the showcase
- GIVEN the page loads WHEN viewing THEN footer renders with contentinfo role
