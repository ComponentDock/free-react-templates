# Tagbox — Implementation Notes

## Source Reference
- **ColorLib slug:** multiselect-11
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-11/
- **Category:** Bootstrap Multi-Select Snippet

## Structure Order (top to bottom)
1. Page container (white background, centered, 7rem vertical padding)
2. Heading: "Multi-Select #1" (centered, Roboto, 20px)
3. Paragraph: "Tags separate with comma \",\"" (centered, gray, light weight)
4. Multi-select dropdown component (7-column centered, Bootstrap form-control style)
5. Footer: Component Dock link

## Section-by-Section Fidelity Notes

### Page Container
- White `#ffffff` background
- Vertically centered with `padding: 7rem 0`
- Max-width constrained to ~7 Bootstrap columns, centered with `justify-content-center`

### Heading
- "Multi-Select #1" text
- Font: Roboto, 20px
- Centered alignment
- No decorative elements

### Subtitle
- "Tags separate with comma \",\""
- Color: `#b3b3b3` (light gray)
- Font weight: 300 (light)
- Centered alignment

### Multi-Select Component
This is the core of the template — a custom multi-select dropdown powered by Select2 (in the original). Recreate with a React equivalent.

**Closed state:**
- Bootstrap `.form-control` appearance (border, padding, rounded corners)
- Shows selected tags as inline pills
- Search input at the left of the tags

**Selected tags (pills):**
- Background: `#65587f` (muted purple)
- Text: white, 14px
- Padding: `2px 10px`
- Border: `rgba(101,88,127,0.2)` (subtle purple)
- Remove button: × character, `rgba(255,255,255,0.5)`, hover white
- No box-shadow

**Open dropdown:**
- Standard dropdown below the select field
- Each option is a list item
- Highlighted (focused) option: `#65587f` background, white text
- Already-selected option: `#f4f4f4` background
- Hover on selected: `#ddd` background, black text

**Search/filter:**
- Typing in the search input filters the dropdown in real-time
- Case-insensitive substring match

### Options List
- Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- Preserve these exact labels in the implementation

### Footer
- Simple centered link to Component Dock
- "Made with Component Dock" or similar

## Implementation Approach
1. Create `apps/tagbox/` from the simplest existing app template
2. Install no new dependencies — use native React state for the multi-select
3. Components: `Tagbox.tsx` (main), `MultiSelect.tsx` (dropdown component)
4. Use `cn()` from `packages/ui` for class merging
5. Tests: Vitest + Testing Library, 100% coverage
6. No ColorLib references in app code — design tokens noted as "muted purple #65587f" etc.

## Design Token Summary for Tailwind
```css
@theme {
  --color-brand: #65587f;
  --color-brand-light: #f4f4f4;
  --color-text-muted: #b3b3b3;
}
```
