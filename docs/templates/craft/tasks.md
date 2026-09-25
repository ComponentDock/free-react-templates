# Craft (ColorLib Clyde) — Tasks

## Template Info

- **New name:** Craft
- **Original:** ColorLib Clyde (https://colorlib.com/wp/template/clyde/)
- **Preview:** https://preview.colorlib.com/theme/clyde/
- **Type:** Creative portfolio / personal landing

## Sections (from preview)

1. Navbar — dark, brand "Craft.", links: Home, About, Skills, Services, Projects, Blog, Contact
2. Hero — slider with background image, "Hello! This is Craft", "Creative UI/UX Designer & Developer", Hire me + Download CV buttons
3. Counter — 4 stats: 750 Project Complete, 100 Happy Clients, 72 Awards Won, 500 Coffee Cups
4. About — "About Me" heading, description, personal info
5. Skills — progress bars with percentages
6. Services — service cards with icons
7. Projects — filterable portfolio grid
8. Blog — recent posts with images
9. Contact — form + contact info
10. Footer — copyright + Component Dock link

## Design Tokens

- Font: Poppins (Google Fonts)
- Primary dark: navbar bg
- Accent: #007bff (Bootstrap primary)
- Light bg: #f8f9fa
- Assets: picsum.photos seeded placeholders

## Implementation Order

1. Scaffold apps/craft/ (copy drift, rename package)
2. Write spec (openspec/specs/template-craft/spec.md) ✓
3. Implement components: Navbar, Hero, Counter, About, Skills, Services, Projects, Blog, Contact, Footer
4. Write tests for each component
5. Run verify-app.sh craft
6. PR + merge
7. Bookkeeping: [x] + surge URL + readme:status
