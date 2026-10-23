# SearchBeacon — Search Form Bar Template

Recreation of ColorLib **Search Form Bar 03**
(https://colorlib.com/wp/template/search-form-bar-03/)

Preview: https://preview.colorlib.com/theme/search-form-bar-03/
(Note: preview URL returned 404 at time of prep — spec based on screenshot analysis)

## Purpose

SearchBeacon is a search form bar component page with a centered serif heading and a pill-shaped search input with a coral circular submit button.

It recreates the ColorLib **Search Form Bar 03** design (https://colorlib.com/wp/template/search-form-bar-03/, preview: https://preview.colorlib.com/theme/search-form-bar-03/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (from screenshot analysis)

- **Font**: system default (no Google Fonts visible — heading appears to be serif or system serif)
- **Background**: #fafafa (very light gray, near-white)
- **Text color**: #000 (heading), #999 (placeholder)
- **Search bar**: white (#fff), border-radius 40px (pill), box-shadow 0px 5px 20px -12px rgba(0,0,0,0.34)
- **Search button**: coral/salmon (#e07057 or similar), 50x50px circle, positioned absolute left of input
- **Search icon**: white magnifying glass, 20px, centered inside coral circle button
- **Input**: height 50px, no border, no shadow, placeholder color rgba(0,0,0,0.7)
- **Section padding**: 7em vertical (centered on page)
- **Layout**: centered, max-width ~33% on large screens (col-lg-4), 50% on medium

## Screenshot Analysis

The template shows a minimalist search bar centered on a light gray background:

- Title "Search Form/Bar #03" centered above the search bar, dark serif-like text
- Pill-shaped (rounded) white search bar with subtle shadow
- Coral/salmon circular button with white magnifying glass icon positioned on the LEFT side of the search bar
- "Search..." placeholder text in the input area to the right of the button
- Clean, modern, minimal design
- Very sparse — only the search component, no other sections

## Structure

Single section with:
1. Centered heading
2. Search form with circular coral button + input (pill-shaped)
3. Footer with Component Dock branding

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/search-form-bar-03/` | HTTP 200 · 1,947 B · title `Search Form/Bar 03` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/search-form-bar-03/css/style.css?v=6cabd44c` | HTTP 200 · 10,489 B · sha256 `f0a3296eeff9` |

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#e07057`.

## Requirements

### SearchBar component

#### Scenario: SearchBar component

- Renders a search input with placeholder "Search..."
- Displays a coral/salmon circular search button on the left with a white magnifying glass icon
- Has pill-shaped (rounded-full) styling
- Has white background with shadow
- The coral button is clickable
- Accepts keyboard input
- Prevents default form submission on Enter
- Focuses input when button is clicked

### App

#### Scenario: App

- Renders the heading "SearchBeacon"
- Renders the SearchBar component
- Uses system/serif font for heading
- Has light gray (#fafafa) background
- Centers content vertically and horizontally on the page

### Footer

#### Scenario: Footer

- Links to https://www.componentdock.com/
- Shows "Component Dock" branding
- Shows copyright text

## Verification checklist

- [ ] Spec covers all visible sections from screenshot
- [ ] Design tokens match screenshot visual analysis
- [ ] Component structure matches section order
- [ ] Naming follows conventions (kebab-case, new original name)
- [ ] No ColorLib references in planned app code
- [ ] Footer links to Component Dock
- [ ] Placeholder images use picsum.photos
- [ ] SearchBar component — Renders a search input with placeholder "Search..."
- [ ] App — Renders the heading "SearchBeacon"

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/search-form-bar-03/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#e07057` — nearest `#ff5858` (d=39)
<!-- live-palette-unverified:end -->
