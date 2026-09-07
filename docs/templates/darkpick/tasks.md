# DarkPick — Implementation Tasks & Design Notes

## Source
- **ColorLib:** Multiselect 09
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-09/
- **New name:** darkpick

## Section Order (from preview)

1. **Page background** — dark near-black (#111), full viewport
2. **Centered heading** — "DarkPick" in white, 28px, Lato 700
3. **Dropdown trigger** — dark card (rgba(0,0,0,0.8)), 4px radius, shadow
4. **Dropdown option list** — opens below trigger, dark background
5. **Footer** — Component Dock link

## Design Fidelity Notes

### Colors
- Page background: `#111` (near-black, not pure black)
- Dropdown card: `rgba(0, 0, 0, 0.8)` — semi-transparent dark
- Selected option bg: `#000` (solid black)
- Highlighted/hover bg: `rgba(255, 255, 255, 0.1)` (white at 10%)
- Accent/highlight: `#f6c523` (golden yellow) — used for selected text, checkmarks, hover text
- Search field text: `rgba(255, 255, 255, 0.8)`
- Focus border: `rgba(0, 0, 0, 0.1)`

### Typography
- Primary font: Lato (weights 300, 400, 700) — load via Google Fonts
- Heading: Lato 700, 28px, white
- Options: Lato 400
- Icons: Font Awesome 4.7 (checkmark \f00c for selected)

### Shapes
- Border radius: 4px on dropdown container
- Box shadow: `0px 3px 22px -15px rgba(0,0,0, 0.8)`
- Focus shadow: `0px 3px 22px -15px rgba(0,0,0, 0.63)`
- Border: 2px transparent default, visible on focus

### Transitions
- Selection state: 0.3s transition on background/color
- Respects `prefers-reduced-motion: reduce`

## Implementation Tasks

- [ ] Create `apps/darkpick/` from simplest existing app (copy + rename)
- [ ] Set up Lato font (Google Fonts link in index.html)
- [ ] Set up Font Awesome 4.7 (CDN link in index.html)
- [ ] Create dark page background (#111)
- [ ] Build centered heading component
- [ ] Build dropdown trigger (dark card, 4px radius, shadow)
- [ ] Build option list (opens/closes, keyboard nav)
- [ ] Implement multi-select with golden checkmarks
- [ ] Implement search/filter input
- [ ] Add selection transitions (0.3s)
- [ ] Add `prefers-reduced-motion` support
- [ ] Add footer with Component Dock link
- [ ] Write Vitest tests (100% coverage)
- [ ] Run `scripts/verify-app.sh darkpick`
- [ ] Update TEMPLATES.md status
