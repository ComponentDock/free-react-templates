# Selectify — Implementation Tasks

Recreation of ColorLib Multiselect 10
(https://colorlib.com/wp/template/multiselect-10/).

## Design notes

- **Light theme** — page bg `#f8f9fd`, card `#fff`, coral `#ff5959` accent
- **Font:** Lato 400 via Google Fonts `<link>` in index.html
- **Custom checkboxes** — no FontAwesome; use lucide `Square`/`Check` or inline SVG
- **US states data** — 59 entries (50 states + DC + territories), alphabetical
- **Search filtering** — `.toLowerCase().includes(search)` on each option
- **Quantity counter** — derived from checked count in React state
- **Dropdown stays open** while selecting (click-outside or trigger to close)
- **No tag creation** — unlike Thresh (Multiselect 09), search only filters, does not create
- **No images** — the source has none
- **No jQuery, no Bootstrap, no lodash** — pure React + hooks

## Structure order (1:1 from live DOM)

1. **App.tsx** — page layout: dark section, centered heading + control + footer
2. **Heading.tsx** — centered h2 "Selectify" (28px, #000, Lato 400)
3. **MultiselectControl.tsx** — the custom dropdown:
   - Trigger: white card (bg #fff, padding 15px/20px, radius 5px, shadow
     `0px 10px 30px -4px rgba(0,0,0,0.15)`), label "States" (gray, weight 700),
     quantity "(Any)" / "(N)" (coral #ff5959, weight 700), coral ChevronDown icon
   - Panel: white bg, padding 10px/20px, hidden by default
     - Search input: padding 5px/10px, radius 4px, bg rgba(0,0,0,0.05), no border
     - Scrollable list: max-height 200px, overflow-y auto, margin-top 20px
       - Each item: checkbox-wrap label with hidden native checkbox + custom
         20x20 indicator (unchecked: rgba(0,0,0,0.1) square; checked: #ff5959
         filled square with check) + state name text
4. **Footer.tsx** — "Made with Component Dock" link

## Tasks

- [ ] Create `apps/selectify/` from the simplest existing app scaffold
- [ ] Write tests for Heading component (render, text, styling)
- [ ] Write tests for MultiselectControl component:
  - [ ] Renders trigger with "States" label and "(Any)" quantity
  - [ ] Click trigger opens dropdown
  - [ ] Search input filters state list
  - [ ] Checking a state updates quantity counter
  - [ ] Unchecking a state decrements counter
  - [ ] All unchecked → "(Any)"
  - [ ] Click outside closes dropdown
  - [ ] Click trigger again closes dropdown
  - [ ] Selections persist across open/close
  - [ ] 59 states rendered (Alabama through Wyoming)
- [ ] Write tests for Footer component (render, link)
- [ ] Write tests for App component (renders all sections, title)
- [ ] Implement Heading component
- [ ] Implement MultiselectControl component with React state
- [ ] Implement Footer component
- [ ] Implement App component composition
- [ ] Add Lato font via Google Fonts `<link>` in index.html
- [ ] Configure Tailwind theme tokens (#ff5959 accent)
- [ ] Run 100% coverage tests
- [ ] Verify build passes
- [ ] Push and open PR

## Key differences from Thresh (Multiselect 09)

| Aspect  | Thresh                          | Selectify                        |
| ------- | ------------------------------- | -------------------------------- |
| Theme   | Dark (#343434, #000)            | Light (#f8f9fd, #fff)            |
| Accent  | Yellow #f6c523                  | Coral #ff5959                    |
| Engine  | Select2 4.0.4                   | Custom jQuery + lodash           |
| Options | Option1..Option13               | 59 US states                     |
| Tags    | Creates custom tags (tags:true) | No tag creation                  |
| Trigger | Black bg, transparent border    | White bg, no border              |
| Chips   | Yellow tag chips with × remove  | No chips; quantity counter "(N)" |
| Panel   | Black bg, no border             | White bg, no border              |
| Search  | Inline within trigger           | Separate input in panel          |
