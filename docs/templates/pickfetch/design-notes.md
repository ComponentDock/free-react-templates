# Pickfetch — Design Notes

## Source reference

- **ColorLib template:** Multiselect 12
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-12/
- **Listing:** https://colorlib.com/wp/template/multiselect-12/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-12.jpg

## Visual design analysis

### Colorlib page context (from listing page)

The ColorLib listing page shows a template titled "Multiselect V12"
with the description: "A free modern multiselect dropdown snippet that
works great for different projects and ensures quick integration. The
user can either pick items from the dropdown or search for them and
separate them with a comma."

The download button is green (#6DAB3C) and preview button is purple
(#B97EBB) — these are ColorLib chrome, not template tokens.

### Preview page analysis

The actual preview at `preview.colorlib.com/theme/bootstrap/multiselect-12/`
reveals:

1. **Page:** Light gray (#efefef) background, Roboto font
2. **Heading:** "Multi-Select #2" — centered, 20px, no special styling
3. **Instructional text:** "State separate with comma \",\"" — gray #b3b3b3
4. **Multi-select:** Bootstrap 4 + Select2 widget, centered in col-7
5. **Selected chips:** Coral pink #f67280 background, white text
6. **Dropdown:** Rounded 7px, box-shadow, searchable, highlighted = coral pink
7. **Options:** US states (Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah)

### Key differences from Picktag (Multiselect 11)

| Aspect         | Picktag (MS11)    | Pickfetch (MS12)     |
| -------------- | ----------------- | -------------------- |
| Brand color    | #65587f (purple)  | #f67280 (coral pink) |
| Page bg        | #ffffff (white)   | #efefef (light gray) |
| Heading        | "Multi-Select #1" | "Multi-Select #2"    |
| Options        | Tech terms        | US state names       |
| Input border   | Bottom border     | No visible border    |
| Dropdown shape | Default           | 7px radius + shadow  |

## Implementation approach

1. Copy simplest existing multi-select app as scaffold
2. Replace brand color with #f67280
3. Update heading to "Multi-Select #2"
4. Change page background to #efefef
5. Update options to US state names
6. Add 7px border-radius and box-shadow to dropdown
7. Remove input border styling
8. Match chip styling: 14px, 2px 10px padding, coral pink bg
9. Add search functionality (case-insensitive filtering)
10. Add Component Dock footer link

## Placeholder assets

- **Images:** Use `https://picsum.photos/seed/pickfetch-<n>/<w>/<h>` if needed
- **Fonts:** Google Fonts Roboto (300, 400, 500)
- **Icons:** lucide-react for remove/clear icons
