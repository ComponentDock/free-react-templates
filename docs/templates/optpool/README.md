# OptPool — Implementation Notes

Source: ColorLib Multiselect 19
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-19/

## Structure order (single-section page)

1. **Navbar** — minimal, can be a simple centered logo or omitted (original has none; the ColorLib frame is chrome, not part of the template)
2. **MultiselectSection** — the only section:
   - Centered heading "Multi-Select #9" (or similar)
   - A multi-select chip/tag input component (Chosen.js replacement)
   - Placeholder: "Select Categories"
   - 8 default options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
3. **Footer** — must link to https://www.componentdock.com/

## Component breakdown

### MultiselectInput (core component)

- Controlled multi-select with search/filter
- Renders a text input + chip list
- Chips appear below the input when options are selected
- Dropdown list opens below on click, closes on blur/outside click
- Each chip has an × close button to deselect
- Three chip color variants (rotating): olive (#e5e4cc), green (#c7f0db), blue (#d3f4ff)
- Search input filters available options as you type

### Design fidelity notes

| Original (Chosen.js)        | React implementation                      |
| --------------------------- | ----------------------------------------- |
| jQuery plugin Chosen 1.8.7  | Custom React multi-select component       |
| `<select multiple>` hidden  | Controlled state array of selected values |
| `.chosen-container-multi`   | Wrapper div with equivalent classes       |
| `.chosen-choices` chip list | Flex-wrapped chip elements                |
| `.search-choice` individual | Chip component with × close button        |
| `.search-field input`       | Inline text input for filtering           |
| `.chosen-drop` dropdown     | Absolute-positioned dropdown list         |
| `chosen-sprite.png` arrow   | CSS chevron or lucide-react icon          |

### Color palette mapping

```css
/* @theme tokens for Tailwind v4 */
--color-brand-olive: #e5e4cc;
--color-brand-green: #c7f0db;
--color-brand-blue: #d3f4ff;
--color-page-bg: #efefef;
--color-text-primary: #444444;
--color-text-secondary: #b3b3b3;
```

### Shadows

- Input: `shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]`
- Dropdown: `shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]`

### Border radius

- Tags/chips: `rounded` (4px)
- Select container: `rounded` (4px)

### Typography

- Body + headings: `font-family: "Roboto", sans-serif` (via Google Fonts link)
- Heading size: `text-xl` (20px)
- Input text: `text-sm` (14px)

## Fidelity checklist

- [ ] Single-section centered layout (col-md-5 equivalent)
- [ ] Light gray #efefef page background
- [ ] "Multi-Select #9" heading centered, Roboto 20px
- [ ] Multi-select with "Select Categories" placeholder
- [ ] 8 predefined category options
- [ ] Chip/tag selection with close buttons
- [ ] Three chip color variants
- [ ] Dropdown with deep shadow
- [ ] Input with subtle shadow
- [ ] Responsive: full-width on mobile
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
