# Tidepool — Prep Notes

## Source Mapping

- **ColorLib source:** Jellyfish UI Kit
- **ColorLib slug:** `jellyfish-ui-kit`
- **ColorLib URL:** https://colorlib.com/wp/template/jellyfish-ui-kit/
- **Preview URL:** https://preview.colorlib.com/theme/jellyfish-ui-kit/ (returned 404; fallback to screenshot + zip)

## Replication Research Notes

### How the Source Differs from a Typical Template

This is a **UI component kit**, not a single-purpose landing page. The source
`index.html` showcases dozens of Bootstrap components in a scrollable page.
We recreate the KEY sections as React components, not every Bootstrap widget
from the full kit.

### Sections (from `index.html` analysis)

| #   | Section        | Component Name   | Fidelity Notes |
|-----|----------------|------------------|----------------|
| 1   | Hero           | Hero             | Full-width bg image (underwater/jellyfish photo). Overlay semi-transparent blue. Centered white text heading + subtitle. Use `picsum.photos/seed/tidepool-hero/1920/1080` for placeholder. |
| 2   | Color Scheme   | ColorScheme      | 3×3 grid of color swatches. Each is a colored div with `<h5>` label. Use exact brand hex values. |
| 3   | Cards          | CardShowcase     | 4-card grid: 3 "Anchor" product cards (image + title + text + button) + 1 profile card (avatar + name + role + social). Cards: sharp corners, shadow on hover. |
| 4   | Features       | Features         | 3-column: Settings, Development, Support. Each: icon (lucide-react) + heading + description. |
| 5   | Icons          | Icons            | Icon grid showcase. Source uses icomoon font; use lucide-react icons instead. Show variety. |
| 6   | Avatars        | Avatars          | Circular avatar grid. Use picsum.photos placeholders. Multiple sizes. |
| 7   | Pricing        | Pricing          | 3-tier: Free $0, Pro $15, Enterprise $29. Pro highlighted. Sharp corners. Feature list + CTA. |
| 8   | Alerts         | Alerts           | Alert variants: with icon + shadow, dismissible (close button). Use brand colors. |
| 9   | Badge          | BadgeShowcase    | Contextual badges (all brand colors) + pill variant badges. |
| 10  | Buttons        | ButtonShowcase   | Solid, outline, pill, sizes (sm/md/lg). Use brand color palette. |
| 11  | Carousel       | Carousel         | 3-slide carousel with labels, prev/next, indicators. |
| 12  | Dropdowns      | DropdownShowcase | Dropdown menu examples (click to toggle). |
| 13  | Forms          | FormShowcase     | Text input, select, checkbox, radio, textarea. Focusable, styled. |

### Key Design Decisions

- **Sharp corners everywhere** — the source overrides Bootstrap's default
  border-radius to 0 on cards and pricing. This is a deliberate design choice.
- **Work Sans font** — loaded via Google Fonts. Light weight (300) for body.
- **Color palette** — Bootstrap's standard palette extended with indigo (#6A67CE),
  teal (#2DDE98), pink (#A626AA), purple (#8E43E7), orange (#FF6A00).
- **Flat buttons** — no box-shadow, 0.3s transitions, pill variant uses border-radius 50px.
- **Card shadow on hover** — `0 5px 15px -5px rgba(0,0,0,0.2)`.

### Component Reuse from `packages/ui`

- `Button` / `ButtonLink` — for all button variants (solid, outline, pill)
- `Card` — for product cards, profile cards, pricing cards
- `cn()` — for class composition throughout

## TODO (Implementer)

- [ ] Scaffold `apps/tidepool/` from simplest existing app template
- [ ] Set up `package.json` with `@free-react-templates/tidepool`
- [ ] Create `public/CNAME` with `tidepool.free.componentdock.com`
- [ ] Add "Work Sans" Google Font link in `index.html`
- [ ] Create Tailwind theme tokens in `index.css`:
  - Brand colors: primary #007BFF, success #49A942, info #17A2B8, warning #FFC20E, danger #ED1C24, indigo #6A67CE, dark #454D66, teal #2DDE98
  - Font: "Work Sans", sans-serif
- [ ] Implement components in order: Hero → ColorScheme → CardShowcase → Features → Icons → Avatars → Pricing → Alerts → BadgeShowcase → ButtonShowcase → Carousel → DropdownShowcase → FormShowcase
- [ ] Compose in `App.tsx`
- [ ] Footer: "Made with Component Dock" linking to componentdock.com
- [ ] Tests: Vitest + RTL, 100% coverage
- [ ] Run `scripts/verify-app.sh tidepool`
- [ ] Commit as `feat: tidepool (ColorLib jellyfish-ui-kit)`
