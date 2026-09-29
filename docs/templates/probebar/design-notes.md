# ProbeBar — Design Notes & Task Outline

## Source
- ColorLib: Search Form/Bar 06
- URL: https://colorlib.com/wp/template/search-form-bar-06/
- Preview: https://preview.colorlib.com/theme/search-form-bar-06/ (404 — unreachable)
- Analysis based on: screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-06.jpg

## Design Tokens Captured
| Token | Value |
|-------|-------|
| Background | #f5f5f5 (light gray) |
| Button color | #8B9A3B (olive green, approximate from screenshot) |
| Button shape | Circle, ~50px diameter |
| Button icon | White magnifying glass |
| Input background | #fff (white) |
| Input border-radius | Rounded right side (pill with circle) |
| Heading color | #333 (dark gray) |
| Font | System sans-serif |

## Structure Order
1. Page wrapper (light gray background, full viewport)
2. Centered heading
3. Search bar component (green circle button + rounded input)
4. Footer (Component Dock branding)

## Section-by-Section Fidelity Notes

### Heading
- Centered, ~24px, weight 400, dark gray (#333)
- Original text: "Search Form/Bar #06"
- Recreation: "ProbeBar — Search Form Bar" (descriptive, no numbering)

### Search Bar
- Two-part component: circle button (left) + rounded input (right)
- Circle: olive green background, white magnifying glass icon, ~50px
- Input: white background, "Search..." placeholder, no visible border
- The circle and input sit flush / slightly overlap at the junction
- Overall width: ~400px on desktop, responsive down on mobile
- Pill-shaped overall silhouette

### Footer
- Not present in original (component-only template)
- Added per convention: "Made with Component Dock" + link to componentdock.com

## Tasks
- [ ] Create apps/probebar/ with standard Vite + React 19 + Tailwind 4 + TS setup
- [ ] Implement SearchBar component (green circle + input)
- [ ] Add centered heading
- [ ] Add responsive sizing
- [ ] Add footer with Component Dock link
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh probebar
