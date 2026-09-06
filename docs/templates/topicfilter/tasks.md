# TopicFilter — Implementation Notes

Source: ColorLib "Multiselect 02"
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-02/

## Structure order

1. Section container (`.ftco-section` equivalent — 7em vertical padding)
2. Centered heading "Multiselect #02" (28px, black, centered)
3. Multiselect dropdown with label "Select Topics"
4. Options: All, Topic 1–11

## Section-by-section fidelity notes

### Section: Main (single section)

- The template is a single minimal section — a heading and one dropdown
- Center the heading in a max-width container
- The dropdown should be in a `col-lg-4 col-md-6` equivalent (centered, not full-width on desktop)
- On mobile, the dropdown takes full width

### Multiselect dropdown behavior

- Use a `<select multiple>` or custom multi-select component
- Label "Select Topics" above the dropdown
- Options: All, Topic 1 through Topic 11
- Selected options display as coral/pink (#e8647c) label tags with white text
- Tags have a remove/deselect icon (×)
- Dropdown menu has shadow on open
- Hover on dropdown items highlights in coral/pink (#e8647c) with white text

### Design token mapping

| Original CSS                        | Tailwind class / @theme token          |
| ----------------------------------- | -------------------------------------- |
| `color: #e8647c` (brand)            | `bg-[#e8647c]` / `@theme --color-brand` |
| `color: #000` (text)                | `text-black`                           |
| `background: #fff`                  | `bg-white`                             |
| `border-color: #e6e6e6`            | `border-[#e6e6e6]`                     |
| `font-family: "Lato"`              | Google Fonts link in index.html        |
| `font-size: 16px`                   | `text-base`                            |
| `line-height: 1.8`                 | `leading-[1.8]`                        |
| `font-size: 28px` (heading)        | `text-[28px]`                          |
| `padding: 7em 0`                    | `py-28` (approx 7em)                   |
| `box-shadow: 0px 3px 19px -15px...` | `shadow-[0px_3px_19px_-15px_rgba(0,0,0,0.41)]` |

### Components to build

1. **TopicFilter** — main component wrapping the section
   - Heading centered in container
   - Multiselect dropdown with topic options
2. **MultiSelectDropdown** — the dropdown component itself
   - Accepts options array
   - Renders selected items as label tags
   - Dropdown menu with hover states
3. **LabelTag** — the selected-option tag
   - Coral/pink background, white text, remove icon

### Assets

- Use `https://picsum.photos/seed/topicfilter-<n>/<w>/<h>` for any placeholder images (if needed)
- Font: Lato via Google Fonts `<link>` in index.html
- No image assets needed — this is a component snippet

### What differs from original

- React + Tailwind instead of Bootstrap + Semantic UI
- No jQuery dependency
- Custom dropdown component instead of Semantic UI `.ui.selection.dropdown`
- Lato font loaded from Google Fonts instead of self-hosted
- Footer links to Component Dock instead of ColorLib
