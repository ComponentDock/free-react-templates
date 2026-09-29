# Searchnook — Design & Implementation Notes

## Source

- **ColorLib**: Search Form/Bar V10
- **URL**: https://colorlib.com/wp/template/search-form-bar-10/
- **Preview**: https://preview.colorlib.com/theme/search-form-bar-10/ (404 at prep time)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-10.jpg

## Design tokens (from screenshot)

- brand-primary: #c084d6 (purple — button, accents)
- brand-light: #e8c8f0 (light lavender — input background)
- page-bg: #f5f5f5 (light gray — full-page)
- text-color: #333333 (dark gray)
- button-radius: 50% (circular)
- input-radius: 9999px (pill shape)
- font: system sans-serif stack

## Structure order

1. Full-page light gray background
2. Centered container (flex column, items-center, justify-center)
3. Title heading ("Searchnook")
4. Expandable search bar:
   - Toggle button (circular, purple, search/X icon)
   - Search input (pill-shaped, lavender bg, hidden when collapsed)
   - Animated expand/collapse transition
5. Footer (Component Dock link)

## Section-by-section fidelity notes

### Background
- Solid light gray (#f5f5f5), full viewport height
- No gradient, no image — matches screenshot exactly

### Title
- Centered, dark text, medium-large font size
- Plain heading, no subtitle

### Expandable search bar
- Collapsed: circular purple button only (search magnifying glass icon)
- Expanded: pill-shaped input slides out to the left of the button
- Button icon swaps from magnifying glass to X when expanded
- Input background: light lavender (#e8c8f0)
- Smooth CSS transition on width/opacity
- Placeholder: "Search..."

### Footer
- Standard monorepo footer with Component Dock link
- Copyright text

## Tasks

- [ ] Create apps/searchnook/ from a simple app template
- [ ] Write SearchBar component (expandable animation)
- [ ] Write Footer component
- [ ] Write App.tsx composing sections
- [ ] Set up Tailwind theme tokens in index.css
- [ ] Write tests (100% coverage)
- [ ] Configure vite.config.ts with injectUiSource
- [ ] Set up public/CNAME + homepage
- [ ] Run verify-app.sh
