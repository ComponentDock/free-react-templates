# Multicheck — Implementation Notes

## Source
- ColorLib "Multiselect 19": https://colorlib.com/wp/template/multiselect-19/
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-19/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-19.jpg

## Structure (section order, top-to-bottom)
1. Single content area (`7rem 0` padding)
2. Centered heading: "Multi-Select #9"
3. Bootstrap 4 grid: `container` → `row justify-content-center` → `col-md-5`
4. Multi-select tag/chip widget (Chosen.js plugin)

## Design notes

### Layout
- Minimal: single centered column, no navbar/hero/footer sections in original
- `col-md-5` keeps the dropdown compact and centered
- Body padding: `7rem 0` (generous vertical whitespace)

### Multiselect widget
- Chosen.js plugin transforms `<select multiple>` into a tag/chip input
- Input area: shows "Select Categories" placeholder, selected items as
  colored tag chips with close buttons
- Dropdown panel: search input at top, scrollable list of flat options
- No grouping (unlike Groupcap/Chklmt which use optgroups)
- Flat list of 8 categories: Design, HTML5, CSS3, jQuery, BS4,
  Bootstrap, WordPress, FrontEnd

### Tag chip colors (from CSS)
- Default variant (`.color-1`): `#e5e4cc` (tan/olive)
- Alt variant (`.color-2`): `#c7f0db` (mint green)
- Alt variant (`.color-3`): `#d3f4ff` (sky blue)
- Chips have no shadow (flat), no border

### Design tokens
- Font: Roboto (300/400)
- Background: #efefef (light grey)
- Paragraph text: #b3b3b3
- Heading size: 20px
- Input border-radius: 4px
- Input shadow: `0 1px 4px 0 rgba(0, 0, 0, 0.1)`
- Dropdown shadow: `0 15px 30px 0 rgba(0, 0, 0, 0.2)`
- Input padding: 7px
- Search field height: 32px, font-size: 14px

### Key differences from similar templates
- Groupcap (Multiselect 18): per-group limits, Bootstrap Select plugin,
  checkbox-style selections
- Chklmt (Multiselect 17): global selection limit, Bootstrap Select plugin
- Multicheck (Multiselect 19): Chosen.js plugin, tag/chip style selections,
  no grouping, no selection limits — purely visual tag-based multi-select

## Implementation tasks
1. Create app scaffold (copy simplest existing app, rename package)
2. Build MultiSelectWidget component with:
   - Tag/chip input area showing selected items
   - Dropdown panel with search input
   - Flat option list (no groups)
   - Tag add/remove with close buttons
   - Search filtering
   - Keyboard navigation
3. Wire up 8 category options (Design through FrontEnd)
4. Style: Roboto font, #efefef background, tag chip colors (#e5e4cc default)
5. Footer with Component Dock link
6. Tests (Vitest + Testing Library, 100% coverage)
7. Public/CNAME and homepage configuration
