# Strainer — Design Notes & Task Outline

## Source
- ColorLib: Multiselect 12 ("Multiselect V12")
- URL: https://colorlib.com/wp/template/multiselect-12/
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-12/
- Category: Multi-Select Dropdown Snippet (Bootstrap)

## Visual Design (from screenshot + preview)

The template is a centered card-like layout on a light gray `#efefef` background.
A heading "Multi-Select #2" sits at the top in 20px Roboto.
Below it, a paragraph says "State separate with comma ','" in gray `#b3b3b3`.
The main element is a multi-select dropdown (Select2-powered) spanning 7 columns,
centered in a Bootstrap grid. Selected items appear as coral-pink (`#f67280`)
removable tags with white text. The dropdown menu has no border, rounded corners
(7px), and a prominent box-shadow. Highlighted options use the same coral pink.

## Structure order (top to bottom)
1. Page wrapper (gray background, centered content)
2. Heading (centered, Roboto, 20px)
3. Instruction paragraph (centered, gray, light weight)
4. Multi-select component:
   a. Input area (shows selected tags + search field)
   b. Dropdown list (searchable, scrollable)
5. Footer with Component Dock link

## Section-by-section fidelity notes

| Section | Original | React recreation |
|---------|----------|------------------|
| Background | `#efefef` solid | Tailwind `bg-[#efefef]` |
| Heading | `<h2>` centered, Roboto 20px | Same, Roboto via Google Fonts |
| Subtitle | `<p>` centered, `#b3b3b3`, weight 300 | Same styles |
| Multi-select | Select2 jQuery plugin, Bootstrap | Pure React: custom `<Multiselect>` component with search, tags, keyboard nav |
| Tags | `.select2-selection__choice`, coral pink bg, white text, no border, 14px | Tailwind `bg-[#f67280] text-white text-sm px-2.5 py-0.5 rounded-full` |
| Remove button | `.select2-selection__choice__remove`, fade on hover | Lucide X icon, opacity transition |
| Dropdown | `.select2-dropdown`, no border, shadow, 7px radius | Absolute positioned list, same shadow/radius |
| Highlighted option | `.select2-results__option--highlighted`, `#f67280` bg, white text | Active/hover state with same colors |
| Selected option bg | `#f4f4f4` | Light gray background on already-selected items |
| Search | `.select2-search__field` inline | Input in dropdown, filters options client-side |

## Task checklist for implementer
- [ ] Scaffold `apps/strainer/` from simplest existing app
- [ ] Rename package to `@free-react-templates/strainer`
- [ ] Create `src/components/Multiselect.tsx` — core component
  - Props: `options: string[]`, `placeholder?: string`, `searchPlaceholder?: string`
  - State: selected items array, open/closed, search query
  - Renders: input area with tags + search, dropdown list
  - Keyboard: arrows, Enter to select, Escape to close, Backspace to remove last
- [ ] Create `src/components/MultiselectTag.tsx` — removable tag pill
- [ ] Create `src/App.tsx` — composes Multiselect with heading + subtitle
- [ ] Style with Tailwind, tokens in `src/index.css` via `@theme`
  - `--color-brand: #f67280`
  - `--color-bg: #efefef`
  - `--color-muted: #b3b3b3`
  - `--radius-dropdown: 7px`
  - `--shadow-dropdown: 0 15px 30px 0 rgba(0,0,0,0.2)`
- [ ] Add Google Fonts link for Roboto in `index.html`
- [ ] Set options: Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah
- [ ] Write tests: render, select, deselect, search filter, keyboard nav
- [ ] Verify 100% coverage
- [ ] Run `scripts/verify-app.sh strainer`
- [ ] Footer with Component Dock link
- [ ] `public/CNAME`: `strainer.free.componentdock.com`
- [ ] `package.json` homepage: `https://strainer.free.componentdock.com`
