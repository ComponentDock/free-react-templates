# Tagwell — Design Notes & Tasks

Source: ColorLib Multiselect 12
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-12/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-12.jpg

## Visual Design (from preview CSS + DOM)

A minimal, clean form-component demo page. Light gray (#efefef) background,
centered content with 7rem vertical padding. The primary feature is a
multi-select tag picker: when options are selected, they appear as
coral-pink (#f67280) tag pills with white text and a remove icon. The
dropdown list highlights matching options in the same coral-pink. Font is
Roboto at default sizing. Instruction text in light gray (#b3b3b3)
at weight 300. Very simple — just a heading and one interactive
tag-based multiselect component.

Key differences from Tagmix (Multiselect 11):

- Light gray (#efefef) background instead of white (#fff)
- Coral-pink (#f67280) accent instead of muted purple (#65587f)
- Dropdown has 7px border-radius and drop shadow (Tagmix has none)
- Options are US states instead of tech tags
- Title says "Multi-Select #2" instead of "Multi-Select #1"

## Section Order

1. Page wrapper (full viewport, centered, light gray bg)
2. Title heading ("Multi-Select #2")
3. Instruction text ("State separate with comma")
4. Multiselect tag picker (tags + inline search + dropdown)
5. Footer with Component Dock link

## Component Architecture

```
Tagwell (App)
├── PageLayout (wrapper: centered, light gray bg, 7rem padding)
│   ├── TitleSection (heading "Multi-Select #2", 20px, centered)
│   ├── InstructionText ("State separate with comma")
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

- Match the light gray background (#efefef) exactly
- Match the coral-pink accent (#f67280) on tag pills, search highlight
- Match tag pill styling: 14px, 2px 10px padding, white text, no border
- Match tag remove icon: semi-transparent white, full white on hover
- Match instruction text: #b3b3b3, font-weight 300
- Match heading: 20px, centered, Roboto
- Match content padding: 7rem top/bottom
- Match dropdown: 7px border-radius, box-shadow 0 15px 30px 0 rgba(0,0,0,0.2), no border
- Match dropdown highlight: #f67280 coral-pink bg, white text
- Match selected option in dropdown: #f4f4f4 background
- Use lucide-react X icon for tag remove (replaces × text)
- Use picsum.photos for any placeholder imagery (this template has none)
- Roboto font via Google Fonts link in index.html

## Implementation Tasks

- [ ] Create app scaffold: `apps/tagwell/` from simplest existing app
- [ ] Rename package to `@free-react-templates/tagwell`
- [ ] Add Roboto font to `index.html` (Google Fonts)
- [ ] Build PageLayout with centered content + #efefef background + 7rem padding
- [ ] Build TitleSection with heading (20px, centered)
- [ ] Build InstructionText component
- [ ] Build TagPicker with tag list + search input + dropdown
- [ ] Build TagPill component (coral-pink bg, white text, remove icon)
- [ ] Implement open/close dropdown on click
- [ ] Implement outside-click-to-close behavior
- [ ] Implement inline search filtering
- [ ] Implement tag selection (adds pill to tag list)
- [ ] Implement tag removal (removes pill from tag list)
- [ ] Implement dropdown highlight for filtered/selected options
- [ ] Style dropdown with 7px border-radius and drop shadow
- [ ] Build Footer with Component Dock link
- [ ] Add Tailwind theme tokens (primary: #f67280, bg: #efefef, text-muted: #b3b3b3)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify build + typecheck + lint pass
