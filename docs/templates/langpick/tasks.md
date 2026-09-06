# LangPick — Implementation Notes

Source: ColorLib "Multiselect 03"
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-03/

## Structure order

1. Section container (`.ftco-section` equivalent — 7em vertical padding)
2. Centered heading "Multiselect #03" (28px, black, centered)
3. Multiselect dropdown with label "Select Language"
4. Options: All, PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS

## Section-by-section fidelity notes

### Section: Main (single section)

- The template is a single minimal section — a heading and one dropdown
- Center the heading in a max-width container
- The dropdown should be in a `col-md-6 col-lg-4` equivalent (centered, not full-width on desktop)
- On mobile, the dropdown takes full width

### Multiselect dropdown behavior

- Use a `<select multiple>` or custom multi-select component
- Label "Select Language" above the dropdown
- Options: All, PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS
- Selected options display as blue (#3e64ff) label tags with white text
- Tags have a remove/deselect icon (×)
- Dropdown menu has shadow on open
- Hover on dropdown items shows blue text (#3e64ff) on transparent background
- Dropdown item font-size: 13px, color: black
- Active item color: #3e64ff

### Design token mapping

| Original CSS                        | Tailwind class / @theme token                  |
| ----------------------------------- | ---------------------------------------------- |
| `color: #3e64ff` (brand)            | `bg-[#3e64ff]` / `@theme --color-brand`        |
| `color: #000` (text)                | `text-black`                                   |
| `color: gray` (body)                | `text-gray`                                    |
| `background: #fff`                  | `bg-white`                                     |
| `border-color: #e6e6e6`             | `border-[#e6e6e6]`                             |
| `font-family: "Lato"`               | Google Fonts link in index.html                |
| `font-size: 16px`                   | `text-base`                                    |
| `line-height: 1.8`                  | `leading-[1.8]`                                |
| `font-size: 28px` (heading)         | `text-[28px]`                                  |
| `padding: 7em 0`                    | `py-28` (approx 7em)                           |
| `box-shadow: 0px 3px 19px -15px...` | `shadow-[0px_3px_19px_-15px_rgba(0,0,0,0.41)]` |
| `font-size: 13px` (menu items)      | `text-[13px]`                                  |
| `background: transparent` (hover)   | `hover:bg-transparent`                         |
| `color: #3e64ff` (hover)            | `hover:text-[#3e64ff]`                         |

### Components to build

1. **LangPick** — main component wrapping the section
   - Heading centered in container
   - Multiselect dropdown with language options
2. **MultiSelectDropdown** — the dropdown component itself
   - Accepts options array
   - Renders selected items as label tags
   - Dropdown menu with hover states
   - Blue (#3e64ff) accent for tags and hover
3. **LabelTag** — the selected-option tag
   - Blue background (#3e64ff), white text, remove icon

### Assets

- Use `https://picsum.photos/seed/langpick-<n>/<w>/<h>` for any placeholder images (if needed)
- Font: Lato via Google Fonts `<link>` in index.html
- No image assets needed — this is a component snippet

### What differs from original

- React + Tailwind instead of Bootstrap + Semantic UI
- No jQuery dependency
- Custom dropdown component instead of Semantic UI `.ui.selection.dropdown`
- Lato font loaded from Google Fonts instead of self-hosted
- Footer links to Component Dock instead of ColorLib
- Blue accent (#3e64ff) instead of the original's blue — same hex, verified from CSS
