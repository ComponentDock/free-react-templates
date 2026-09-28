# FindSpot — Prep Notes

## Structure order (top to bottom)

1. **Background layer** — Full-viewport hero image (beach/travel scene), CSS `background-size: cover`
2. **Search card** — Centered, dark semi-transparent card (~#2C3E50 at ~90% opacity), max-width ~580px
   - Tab bar: Hotels (active) | Car | Flight
   - Form fields (Hotels tab):
     - Going To (location pin icon, text input)
     - Check-In / Check-Out (calendar icons, date inputs, 2-col row)
     - Travellers (person icon, select dropdown)
     - Add a flight (checkbox, checked default)
     - Add a car (checkbox, unchecked default)
   - Search button (full-width, green #5CB85C)

## Fidelity notes

- **Card background**: Dark navy #2C3E50 with slight transparency (or solid). Use `bg-slate-800/90` or a custom `bg-[#2C3E50]/90` in Tailwind.
- **Tab styling**: Active tab = white bold text; inactive = muted gray-blue. Bottom border or no border visible — just text weight/color difference.
- **Input fields**: White background, light gray border (#D5D5D5), small rounded corners (4px radius). Left icon (gray). Label above in small gray text. Placeholder in lighter gray.
- **Date fields**: Two-column grid layout with gap. Each has calendar icon + MM/DD/YYYY placeholder.
- **Travellers dropdown**: Full-width, same input styling, chevron right-aligned, default text "1 ADULT, 0 CHILDREN, 1 ROOM".
- **Checkboxes**: Green (#5CB85C) fill when checked, outlined when unchecked. Text is white on dark card.
- **Search button**: Full-width, green (#5CB85C) background, white bold text, small rounded corners, no icon.
- **Background image**: Full-viewport, `cover` sizing. Use a travel/beach scene from picsum.photos (e.g. `https://picsum.photos/seed/findspot-hero/1920/1080`).
- **Responsive**: On mobile (<768px), card goes full-width with padding. Check-In/Check-Out stack vertically instead of side-by-side.

## Component breakdown

- `Navbar.tsx` — None (this template has no navigation bar)
- `SearchCard.tsx` — Main card component with tab state, form fields, checkboxes, search button
- `TabBar.tsx` — Sub-component: horizontal tabs with active state
- `FormField.tsx` — Reusable input with icon + label + placeholder
- `DateFields.tsx` — Two-column Check-In/Check-Out row
- `TravellersDropdown.tsx` — Select dropdown with person icon
- `AddonCheckboxes.tsx` — "Add a flight" + "Add a car" checkboxes
- `SearchButton.tsx` — Full-width green CTA
- `HeroBackground.tsx` — Full-viewport background image layer

## Source reference

- ColorLib: `colorlib-search-15`
- Preview: `https://preview.colorlib.com/theme/colorlib-search-15/` (404 — unreachable)
- Fallback: Screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-15.jpg`
