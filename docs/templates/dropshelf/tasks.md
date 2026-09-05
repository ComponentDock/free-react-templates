# DropShelf — Implementation Notes

## Template Info

- **New name:** DropShelf
- **Source:** ColorLib Dropdown 11 (https://colorlib.com/wp/template/dropdown-11/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-11/
- **Category:** Bootstrap Dropdowns (component snippet)

## Structure (section order)

1. Full-page centered layout (white background)
2. Centered heading: "Dropdown #1"
3. Centered dropdown component (col-md-5):
   - Trigger: cog icon + "Privacy Settings" label
   - Menu: 4 items (Account, Privacy & Security, Password, Notification)

## Design Notes

### Fonts
- Primary: Roboto (Google Fonts) — used for body and headings
- Secondary: Poppins (Google Fonts) — loaded in preview but not visibly used in this snippet

### Colors
- Background: white (#fff implied)
- Text (dropdown): #888
- Text (paragraph): #b3b3b3
- Border: #efefef
- Hover background (trigger active): #f8f9fa
- Menu item hover text: black

### Layout
- Centered on page with generous padding (7rem top/bottom)
- Heading: 20px, centered
- Dropdown: col-md-5, centered via row justify-content-center
- Trigger: inline-block, 4px border-radius, transparent border by default

### Interactions
- Click toggle: clicking trigger opens/closes the menu
- Click outside: closes the menu
- Trigger hover: shows #efefef border + subtle shadow
- Trigger active/selected: light gray bg (#f8f9fa) with inset shadow
- Menu: slides down with opacity transition (0.3s ease)
- Menu shadow: 0 15px 30px 0 rgba(0,0,0,0.2)

### Implementation Approach
- Use React state for open/close toggle
- Use `onClick` on trigger + `onClickOutside` pattern for closing
- Replace Bootstrap classes with Tailwind equivalents
- Use lucide-react for cog icon (replacing icomoon `icon-cog`)
- Keep the 0.3s transition for smooth open/close

## Fidelity Notes

- Match the centered layout exactly (7rem vertical padding)
- Match the exact box-shadow on menu open
- Match the inset shadow on trigger when menu is open
- The heading text "Dropdown #1" should match the original (keep as-is per replication rules)
- Placeholder image: not needed (this is a component snippet, no images)

## TODO

- [ ] Create `apps/dropshelf/` workspace
- [ ] Create `DropShelf.tsx` component with trigger + menu
- [ ] Create `App.tsx` composing the page layout
- [ ] Write tests (Vitest + RTL) for open/close, click-outside, hover states
- [ ] Verify 100% test coverage
- [ ] Add `public/CNAME` with `dropshelf.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at repo root to register workspace
- [ ] Footer links to https://www.componentdock.com/
