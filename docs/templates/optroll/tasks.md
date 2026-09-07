# Optroll — Design Notes & Tasks

Source: ColorLib Multiselect 14
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-14/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-14.jpg

## Visual Design (from preview CSS + DOM)

A minimal, clean form-component demo page. Light gray (#efefef) background,
centered content with 7rem vertical padding. The primary feature is a
multi-select checkbox dropdown: a trigger button opens a dropdown panel
containing a search input, "Select All" toggle, and a scrollable list
of US state checkboxes. All 50 US states are listed. The trigger button
has 4px border-radius and a subtle shadow. The dropdown has 4px
border-radius and a softer shadow. Font is Roboto. Very simple layout.

Key differences from Tagmint (Multiselect 13):

- Different component type: checkbox dropdown (not tag picker)
- Trigger button with shadow (not inline search)
- "Select All" / "Deselect All" toggle
- All 50 US states as options (not 8-9 items)
- Narrower layout (col-md-3 instead of col-7)
- No tag pills — selection shown as checked checkboxes

## Section Order

1. Page wrapper (full viewport, centered, light gray bg)
2. Title heading ("Multi-Select #4")
3. Multi-select checkbox dropdown (trigger + panel + search + checkboxes)
4. Footer with Component Dock link

## Component Architecture

```
Optroll (App)
├── PageLayout (wrapper: centered, light gray bg, 7rem padding)
│   ├── TitleSection (heading "Multi-Select #4", 20px, centered)
│   ├── MultiSelectDropdown
│   │   ├── TriggerButton (shows selected count, 4px radius, shadow)
│   │   └── DropdownPanel (conditionally rendered)
│   │       ├── SearchInput (filters checkboxes)
│   │       ├── SelectAllToggle ("Select All" / "Deselect All")
│   │       └── CheckboxList (scrollable ul of state checkboxes)
│   └── Footer (Component Dock link)
```

## State Management

- `isOpen: boolean` — dropdown visibility
- `selectedStates: Set<string>` — currently checked state codes
- `searchQuery: string` — current search filter text
- `filteredStates` — derived from states array filtered by searchQuery
- `allSelected: boolean` — derived from selectedStates.size === states.length

## Fidelity Notes

- Match the light gray background (#efefef) exactly
- Match trigger button: 40px height, 4px radius, subtle shadow, no border
- Match dropdown: 4px radius, softer shadow, 320px min-width, no border
- Match "Select All": uppercase, 11px, #aaaaaa color
- Match checkbox labels: 5px vertical padding, 4px border-radius
- Match search input: bottom border #efefef
- Use all 50 US states with abbreviation values
- Use lucide-react ChevronDown icon for trigger arrow
- Use picsum.photos for any placeholder imagery (this template has none)
- Roboto font via Google Fonts link in index.html

## Implementation Tasks

- [ ] Create app scaffold: `apps/optroll/` from simplest existing app
- [ ] Rename package to `@free-react-templates/optroll`
- [ ] Add Roboto font to `index.html` (Google Fonts)
- [ ] Build PageLayout with centered content + #efefef background + 7rem padding
- [ ] Build TitleSection with heading (20px, centered)
- [ ] Define US states data (all 50 states with code + name)
- [ ] Build MultiSelectDropdown with trigger button
- [ ] Build DropdownPanel with search, select-all, and checkbox list
- [ ] Implement open/close toggle on trigger click
- [ ] Implement outside-click-to-close behavior
- [ ] Implement live search filtering
- [ ] Implement individual checkbox selection
- [ ] Implement Select All / Deselect All toggle
- [ ] Update trigger button text with selection count
- [ ] Build Footer with Component Dock link
- [ ] Add Tailwind theme tokens (bg: #efefef, text-muted: #b3b3b3)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify build + typecheck + lint pass
