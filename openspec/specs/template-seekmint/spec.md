# Seekmint — Search Form Bar 04

Recreation of ColorLib "Search Form/Bar #04"
(https://colorlib.com/wp/template/search-form-bar-04/).

## Source reference

- **Preview URL:** https://preview.colorlib.com/theme/search-form-bar-04/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-04.jpg

## Design tokens (extracted from screenshot)

| Token            | Value                                     |
| ---------------- | ----------------------------------------- |
| Background       | Gradient: #667eea (blue) → #a855f7 (pink) |
| Heading text     | White, centered, ~28px                    |
| Search input bg  | White, rounded-full, shadow               |
| Search button bg | Purple circular (#9333ea), white icon     |
| Placeholder text | Gray (#999)                               |
| Font family      | Poppins (Google Fonts)                    |
| Footer text      | White, semi-transparent                   |

## Layout

Single full-height section:

1. **Gradient background** covering the full viewport
2. **Heading** "Seekmint" centered near top
3. **Search bar** centered below heading — white rounded input with a purple circular search button on the RIGHT side
4. **Footer** at bottom with Component Dock link

## Differences from source

- Name changed from "Search Form/Bar #04" to "Seekmint"
- No ColorLib branding or assets
- Footer links to componentdock.com
- Placeholder images via picsum.photos (none needed for this simple template)

## Scenarios

- [ ] Renders heading with template name
- [ ] Renders search input with placeholder
- [ ] Search button on the right side of the input
- [ ] Typing updates the search input
- [ ] Form submission triggers onSubmit callback
- [ ] Search icon button focuses the input
- [ ] Footer renders Component Dock link
- [ ] Footer renders current year
