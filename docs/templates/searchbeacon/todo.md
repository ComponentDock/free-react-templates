# SearchBeacon — Implementation Notes
<!-- prep-status: shipped-as=seekdot -->
> **SHIPPED-UNDER** — the ColorLib `search-form-bar-03` design this prep describes already
> ships as `apps/seekdot` (<https://seekdot.free.componentdock.com>).
> Do not scaffold `apps/searchbeacon`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-seekdot/spec.md`.

<!-- ref-reverify:2026-10-22 -->

> **Reference re-verified live 2026-10-22** —
> `https://preview.colorlib.com/theme/bootstrap/search-form-bar-03/` answers
> HTTP 200 (1,947 B; `style.css` 10,489 B, sha256 `f0a3296eeff9`). Any
> "preview 404 / design from screenshot" note further down is
> **superseded**: take CSS values from the live sheet
> (`docs/replication.md`); the screenshot stays the layout target.

Recreation of ColorLib **Search Form Bar 03**
Source: https://colorlib.com/wp/template/search-form-bar-03/

## Section Order (from screenshot)

1. Page wrapper (full-height centered layout)
2. Heading section ("SearchBeacon" title)
3. Search form (coral button + pill input)
4. Footer (Component Dock branding)

## Section-by-Section Fidelity Notes

### Page wrapper
- Light gray background (#fafafa)
- Full viewport height, flex center content
- System font for body, serif-like for heading

### Heading
- Text: "SearchBeacon" (replacing "Search Form/Bar #03")
- Centered, dark color (#000), appears to be 28-32px
- Font weight: normal/400

### Search bar
- Pill-shaped container: white bg, rounded-full, subtle box-shadow
- Coral/salmon circular button (50x50px) on the LEFT
  - Background: coral/salmon (~#e07057)
  - White magnifying glass icon (20px), centered
  - Cursor: pointer
- Input field extends to the right of the button
  - No border, no background, no shadow
  - Placeholder "Search..." in muted gray
  - Height matches button (~50px)
- Max-width ~400px, centered on page

### Footer
- Component Dock branding with link to https://www.componentdock.com/
- Copyright text

## Design Decisions

- **Preview unreachable (404)**: spec based solely on screenshot analysis
- **Name**: "SearchBeacon" — unique, not taken by any existing app or spec
- **No Google Fonts visible**: heading appears to use system serif — use `font-serif` Tailwind utility
- **Coral button**: key distinguishing feature vs Search Form Bar 01 (gray icon) and 02 (red icon on dark bg)
