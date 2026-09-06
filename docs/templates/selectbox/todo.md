# SelectBox — Prep Notes

Source: ColorLib Multiselect V03
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-03/
New name: selectbox
Slug: multiselect-03

## Structure order (from preview)

1. `<section class="ftco-section">` — main container with vertical padding
2. Row with centered heading: "Multiselect #03"
3. Row with centered dropdown column (col-md-6 col-lg-4)

Single-page, no navbar/footer/hero. Minimal form component template.

## Section-by-section fidelity notes

### 1. Page layout

- Full-width white background
- Centered content via Bootstrap grid (row justify-content-center)
- Section padding: 7em top/bottom (ftco-section class)
- Container max-width follows Bootstrap 4 breakpoints

### 2. Heading

- Text: "Multiselect #03" (we rename to "SelectBox #03")
- Style: 28px, font-weight 400, color #000, font-family Lato
- Centered via text-center class
- margin-bottom: 5 on row (mb-5)

### 3. Multiselect dropdown

- Uses Semantic UI's `ui fluid selection dropdown` with `multiple` attribute
- Label: "Select Language"
- Options: All, PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS
- The original uses Semantic UI JS for multiselect behavior
- For React: use a custom multiselect component with checkbox-style selection
- Dropdown styling: border #e6e6e6, rounded corners, padding 10px
- Active state: border #e6e6e6 with shadow 0px 3px 19px -15px rgba(0,0,0,0.41)
- Menu items: border-top 1px solid #e6e6e6, font-size 13px
- Hover/active item color: #3e64ff (blue accent)
- Menu item transition: 0.3s ease

### 4. Design tokens to apply

- Body: font-family Lato, 16px, line-height 1.8, color gray, bg #fff
- Accent: #3e64ff (links, active states, primary button)
- Headings: color #000, line-height 1.5
- Borders: #e6e6e6
- Font weights: 300 (light), 400 (normal), 700 (bold)
- Transitions: .3s all ease on interactive elements

### 5. ComponentDock footer (mandatory)

- Every template footer must link https://www.componentdock.com/
- This is a minimal template so footer is simple
- "Made with Component Dock" or similar text

## Implementation approach

- Create `apps/selectbox/` directory
- Copy simplest existing app as scaffold
- Build custom MultiselectDropdown component (Semantic UI not used — use native + custom)
- Use Tailwind for styling + @theme for brand tokens
- No external dependencies beyond React + Tailwind
- Placeholder images: none needed (no images in this template)
