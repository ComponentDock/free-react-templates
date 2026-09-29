# SearchSpark — Implementation Notes

## Source
- ColorLib: Search Form Bar 03
- Preview: https://preview.colorlib.com/theme/search-form-bar-03/ (404 — screenshot fallback)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-03.jpg

## Design Notes (from screenshot)

### Layout
- Single full-viewport page, vertically + horizontally centered
- Minimal content: title heading + search bar only
- No header, no nav, no hero, no footer content beyond attribution

### Visual Design
- Very clean, minimal aesthetic
- Light gray (#f5f5f5) background
- Dark gray (#333) centered title text
- White pill-shaped search input with subtle shadow
- Coral-red (#ef5350) circular search icon button on the LEFT side

### Key Differentiator from SearchVane (Bar 02)
- Button is on the LEFT (not right)
- Button is coral-red (not blue)
- No expand/collapse animation — input is always fully visible

## Section Order
1. Page wrapper (full viewport centered flex)
2. Search card (title + search bar)
3. Footer (Component Dock)

## Component Structure
```
App.tsx
├── SearchBar.tsx (title + search input + button)
└── Footer.tsx (from packages/ui or inline)
```

## Implementation Checklist
- [ ] Create app folder: apps/searchspark
- [ ] Copy boilerplate from simplest existing app
- [ ] Set up index.css with Tailwind + theme tokens
- [ ] Implement SearchBar component (input + circular button)
- [ ] Implement Footer
- [ ] Write tests (100% coverage)
- [ ] Set up CNAME + homepage
- [ ] Run verify-app.sh
- [ ] Commit, push, open PR, merge
