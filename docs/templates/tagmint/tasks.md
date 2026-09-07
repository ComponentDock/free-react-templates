# Tagmint — Design Notes & Tasks

Source: ColorLib Multiselect 13
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-13/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-13.jpg

## Visual Design (from preview CSS + DOM)

A minimal, clean form-component demo page. Light gray (#efefef) background,
centered content with 7rem vertical padding. The primary feature is a
multi-select tag picker: when options are selected, they appear as
teal (#29c7ac) tag pills with white text and a remove icon. All elements
have sharp corners (0px border-radius) — tags, dropdown, and form inputs.
The dropdown has a drop shadow. Font is Roboto at default sizing.
Instruction text in light gray (#b3b3b3) at weight 300.

Key differences from Tagwell (Multiselect 12):

- Teal (#29c7ac) accent instead of coral-pink (#f67280)
- Sharp corners (0px border-radius) on everything — tags, dropdown, form
- Options are names instead of US states
- Title says "Multi-Select #3" instead of "Multi-Select #2"

## Section Order

1. Page wrapper (full viewport, centered, light gray bg)
2. Title heading ("Multi-Select #3")
3. Instruction text ("Names separate with comma")
4. Multiselect tag picker (tags + inline search + dropdown)
5. Footer with Component Dock link

## Component Architecture

```
Tagmint (App)
├── PageLayout (wrapper: centered, light gray bg, 7rem padding)
│   ├── TitleSection (heading "Multi-Select #3", 20px, centered)
│   ├── InstructionText ("Names separate with comma")
│   ├── TagPicker
│   │   ├── TagList (inline row of selected tag pills)
│   │   │   └── TagPill (label + remove icon ×, sharp corners)
│   │   ├── SearchInput (inline, filters options)
│   │   └── DropdownList (conditionally rendered, sharp corners + shadow)
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
- Match the teal accent (#29c7ac) on tag pills, search highlight
- Match tag pill styling: 14px, 2px 10px padding, white text, no border
- CRITICAL: Match sharp corners — 0px border-radius on tags, dropdown, form inputs
- Match tag remove icon: semi-transparent white, full white on hover
- Match instruction text: #b3b3b3, font-weight 300
- Match heading: 20px, centered, Roboto
- Match content padding: 7rem top/bottom
- Match dropdown: 0px border-radius, box-shadow 0 15px 30px 0 rgba(0,0,0,0.2), no border
- Match dropdown highlight: #29c7ac teal bg, white text
- Match selected option in dropdown: #f4f4f4 background
- Use lucide-react X icon for tag remove (replaces × text)
- Use picsum.photos for any placeholder imagery (this template has none)
- Roboto font via Google Fonts link in index.html

## Implementation Tasks

- [ ] Create app scaffold: `apps/tagmint/` from simplest existing app
- [ ] Rename package to `@free-react-templates/tagmint`
- [ ] Add Roboto font to `index.html` (Google Fonts)
- [ ] Build PageLayout with centered content + #efefef background + 7rem padding
- [ ] Build TitleSection with heading (20px, centered)
- [ ] Build InstructionText component
- [ ] Build TagPicker with tag list + search input + dropdown
- [ ] Build TagPill component (teal bg, white text, remove icon, sharp corners)
- [ ] Implement open/close dropdown on click
- [ ] Implement outside-click-to-close behavior
- [ ] Implement inline search filtering
- [ ] Implement tag selection (adds pill to tag list)
- [ ] Implement tag removal (removes pill from tag list)
- [ ] Implement dropdown highlight for filtered/selected options
- [ ] Style dropdown with 0px border-radius (sharp corners) and drop shadow
- [ ] Style form-control with 0px border-radius
- [ ] Build Footer with Component Dock link
- [ ] Add Tailwind theme tokens (primary: #29c7ac, bg: #efefef, text-muted: #b3b3b3)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify build + typecheck + lint pass
