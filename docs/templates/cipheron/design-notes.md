# Cipheron — Design Notes & Tasks

Source: ColorLib CellOn (`https://colorlib.com/wp/template/cellon/`)
Preview: `https://preview.colorlib.com/theme/cellon/`
Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/cellon-free-ligh-consulting-company-template.jpg`

## Section order & structure

| # | Section        | Layout                              | Notes                                      |
|---|----------------|-------------------------------------|--------------------------------------------|
| 1 | Navbar         | Absolute, full-width, logo + nav    | Hamburger on mobile, green mobile menu bg  |
| 2 | Banner/Hero    | Split: img left, text+CTA right     | Fullscreen height, light-weight headline   |
| 3 | Video          | Full-width bg image + green overlay | Play button visual, text below/right       |
| 4 | About          | 2-col: text left, image right       | White bg, outlined CTA button              |
| 5 | Features       | 7-card grid on green overlay bg     | Icon boxes with hover effect, white cards  |
| 6 | Stats + FAQ    | 2-col: stats left, FAQ right        | Green counters, accordion-style FAQ        |
| 7 | Contact        | Full-width green overlay bg         | Transparent inputs, green borders, CTA    |
| 8 | Footer         | 4-col grid, white bg                | Link columns + social icons + copyright   |

## Design tokens (from CSS)

- Brand: `#6cbb23` (green) — buttons, links, accents, counters, overlays
- Body text: `#777`
- Headings: `#222`
- Page bg: `#f6f6fc`
- Font: Poppins (weights 100, 300, 500)
- Button radius: 20px (circle class)
- Overlay: `rgba(108,187,35,0.85)` on Video, Features, Contact
- Icon bg: `#f0f8e9`, hover → `#6cbb23`
- Contact input border: `#a6d477`

## Tasks

- [ ] Scaffold `apps/cipheron/` (copy simplest existing app, rename)
- [ ] Add Poppins to `index.html` via Google Fonts `<link>`
- [ ] Implement Navbar component (logo, nav links, hamburger)
- [ ] Implement Banner/Hero component (split layout, headline, CTA)
- [ ] Implement Video component (bg image, green overlay, play button)
- [ ] Implement About component (2-col, text+image)
- [ ] Implement Features component (7-card grid, icon boxes)
- [ ] Implement StatsFAQ component (counters + FAQ items)
- [ ] Implement Contact component (form with transparent inputs)
- [ ] Implement Footer component (4-col, social, ComponentDock link)
- [ ] Compose in App.tsx, add theme tokens to index.css
- [ ] Write tests for each component (100% coverage)
- [ ] Verify: typecheck, lint, build pass
