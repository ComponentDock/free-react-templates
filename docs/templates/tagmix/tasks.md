# Tagmix — Design Notes & Tasks

Source: ColorLib Multiselect 11
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-11/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-11.jpg

## Visual Design (from preview CSS + DOM)

A minimal, clean form-component demo page. White (#fff) background,
centered content with 7rem vertical padding. The primary feature is a
multi-select tag picker: when options are selected, they appear as
purple (#65587f) tag pills with white text and a remove icon. The
dropdown list highlights matching options in the same purple. Font is
Roboto at default sizing. Instruction text in light gray (#b3b3b3)
at weight 300. Very simple — just a heading and one interactive
tag-based multiselect component.

Key difference from Selectrack (Multiselect 10):

- This uses tag-style selection (inline pills) rather than a dropdown
  trigger button with quantity badge
- The search is inline within the selected area, not a separate dropdown
- Purple accent (#65587f) instead of coral-red (#ff5959)
- White background instead of light gray (#f8f9fd)

## Section Order

1. Page wrapper (full viewport, centered, white bg)
2. Title heading ("Multi-Select #1")
3. Instruction text ("Tags separate with comma")
4. Multiselect tag picker (tags + inline search + dropdown)
5. Footer with Component Dock link

## Component Architecture

```
Tagmix (App)
├── PageLayout (wrapper: centered, white bg, 7rem padding)
│   ├── TitleSection (heading "Multi-Select #1", 20px, centered)
│   ├── InstructionText ("Tags separate with comma")
│   ├── TagPicker
│   │   ├── TagList (inline row of selected tag pills)
│   │   │   └── TagPill (label + remove icon ×)
│   │   ├── SearchInput (inline, filters options)
│   │   └── DropdownList (conditionally rendered)
│   │       └── OptionItem (text, highlighted when filtered)
│   └── Footer (Component Dock link)
```

## State Management

- `isOpen: boolean` — dropdown visibility
- `selectedOptions: Set<string>` — currently selected options (rendered as tags)
- `searchQuery: string` — current search filter text
- `filteredOptions` — derived from options array filtered by searchQuery

## Fidelity Notes

- Match the white background (#fff) exactly — not off-white
- Match the purple accent (#65587f) on tag pills, search highlight
- Match tag pill styling: 14px, 2px 10px padding, white text, no border
- Match tag remove icon: semi-transparent white, full white on hover
- Match instruction text: #b3b3b3, font-weight 300
- Match heading: 20px, centered, Roboto
- Match content padding: 7rem top/bottom
- Match dropdown highlight: #65587f purple bg, white text
- Match selected option in dropdown: #f4f4f4 background
- Use lucide-react X icon for tag remove (replaces × text)
- Use picsum.photos for any placeholder imagery (this template has none)
- Roboto font via Google Fonts link in index.html

## Implementation Tasks

- [ ] Create app scaffold: `apps/tagmix/` from simplest existing app
- [ ] Rename package to `@free-react-templates/tagmix`
- [ ] Add Roboto font to `index.html` (Google Fonts)
- [ ] Build PageLayout with centered content + white background + 7rem padding
- [ ] Build TitleSection with heading (20px, centered)
- [ ] Build InstructionText component
- [ ] Build TagPicker with tag list + search input + dropdown
- [ ] Build TagPill component (purple bg, white text, remove icon)
- [ ] Implement open/close dropdown on click
- [ ] Implement outside-click-to-close behavior
- [ ] Implement inline search filtering
- [ ] Implement tag selection (adds pill to tag list)
- [ ] Implement tag removal (removes pill from tag list)
- [ ] Implement dropdown highlight for filtered/selected options
- [ ] Build Footer with Component Dock link
- [ ] Add Tailwind theme tokens (primary: #65587f, bg: #fff, text-muted: #b3b3b3)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify build + typecheck + lint pass
