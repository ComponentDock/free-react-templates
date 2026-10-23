# Template: SearchVane (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 02** — a minimalist, centered search bar component with a blue circular search icon button that expands into a full input field on hover/interaction. Single-page, single-section template focused on the animated search widget.

## Source

- ColorLib slug: `search-form-bar-02`
- Preview: `https://preview.colorlib.com/theme/search-form-bar-02/` (returns 404; fallback to screenshot)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-02.jpg`
- ColorLib page: `https://colorlib.com/wp/template/search-form-bar-02/`
- Category: Search Form & Bar Templates

## Design Tokens (from screenshot analysis)

- **Font:** Poppins (Google Fonts), sans-serif
- **Page background:** #f5f5f5 (very light warm gray)
- **Title text:** #333 (dark gray), 28px, font-weight 500, centered
- **Search input container:** centered, max-width ~500px, relative positioning
- **Search input:** white (#fff) background, border: 1px solid #e0e0e0, border-radius: 50px (pill shape), padding: 14px 55px 14px 20px, font-size: 16px, color: #333, placeholder: #999
- **Search button (circle):** background: #2196f3 (Material blue), border-radius: 50%, width: 44px, height: 44px, white magnifying glass icon (lucide-react Search), positioned absolutely inside input (right side or left of input)
- **Hover animation:** On hover, the circular button remains, and the input expands from collapsed (just the circle) to full width with the text field appearing. The button may pulse/scale slightly on hover.
- **Box shadow on input:** subtle (0 2px 8px rgba(0,0,0,0.1))
- **Footer:** standard Component Dock footer

## Section Structure

1. **Page wrapper** — full viewport, centered flexbox (vertical + horizontal), min-height 100vh, bg #f5f5f5
2. **Search card** — centered container with title and search bar
   - **Title** — "Search" or "Search Form Bar", centered, dark text
   - **Search bar** — animated expandable search input with blue circular icon button
3. **Footer** — Component Dock attribution

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
| live page | `https://preview.colorlib.com/theme/bootstrap/search-form-bar-02/` | HTTP 200 · 1,898 B · title `Search Form/Bar 02` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/search-form-bar-02/css/style.css?v=fd50f59f` | HTTP 200 · 11,097 B · sha256 `c5fb88c2699e` |

**Live palette** (hex × occurrences across the sheets): `#1089ff`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#2196f3`.

## Requirements

### Requirement: Page title

The app SHALL set the document title to "SearchVane" on mount.

#### Scenario: Document title on load

- **WHEN** the app loads
- **THEN** the document title is "SearchVane"

### Requirement: Page layout

The page SHALL display a vertically centered layout with the search bar centered both horizontally and vertically.

#### Scenario: Centered layout

- **WHEN** the app loads
- **THEN** the search bar component is vertically and horizontally centered on the page

#### Scenario: Page background color

- **WHEN** the app loads
- **THEN** the page background is light gray (#f5f5f5)

### Requirement: Title text

The search card SHALL display a title above the search bar.

#### Scenario: Title visible

- **WHEN** the app loads
- **THEN** a title text ("Search") is visible above the search input

#### Scenario: Title styling

- **WHEN** the app loads
- **THEN** the title is centered, dark gray text, and uses the Poppins font

### Requirement: Search input field

The search bar SHALL contain a text input field with placeholder text.

#### Scenario: Input visible

- **WHEN** the app loads
- **THEN** a text input with placeholder "Search..." is visible

#### Scenario: Input styling

- **WHEN** the app loads
- **THEN** the input has a white background, rounded pill shape (border-radius: 50px), and a subtle box shadow

### Requirement: Search button

The search bar SHALL display a blue circular search icon button.

#### Scenario: Button visible

- **WHEN** the app loads
- **THEN** a blue circular button with a magnifying glass icon is visible

#### Scenario: Button styling

- **WHEN** the app loads
- **THEN** the button is blue (#2196f3), circular (border-radius: 50%), and contains a white search icon

### Requirement: Search input interaction

Users SHALL be able to type text into the search input field.

#### Scenario: Type in search field

- **WHEN** the user types "hello world" in the search input
- **THEN** the search input contains "hello world"

#### Scenario: Clear search input

- **WHEN** the user types "test" in the search input and then clears it
- **THEN** the search input is empty

### Requirement: Hover animation

The search bar SHALL have a hover animation effect on the search button.

#### Scenario: Button hover effect

- **WHEN** the user hovers over the search button
- **THEN** the button exhibits a visual hover effect (scale or color change)

### Requirement: Form submission

The search form SHALL handle submission without a page reload.

#### Scenario: Submit search

- **WHEN** the user types "query" in the search input and presses Enter
- **THEN** the page does not reload and the form remains rendered

### Requirement: Responsive design

The search bar SHALL be responsive and work on mobile screen sizes.

#### Scenario: Mobile layout

- **WHEN** the viewport width is 375px
- **THEN** the search bar remains centered and functional

### Requirement: Footer

The footer SHALL display a Component Dock link and copyright.

#### Scenario: Component Dock link

- **WHEN** the app loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

#### Scenario: Copyright text

- **WHEN** the app loads
- **THEN** the footer shows "SearchVane. All rights reserved."

## Verification checklist

- [ ] `npm run verify:app -- searchvane` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 16 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Page title
      - Page layout
      - Title text
      - Search input field
      - Search button
      - Search input interaction
      - Hover animation
      - Form submission
      - Footer
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/search-form-bar-02/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#2196f3` — nearest `#1089ff` (d=25)
<!-- live-palette-unverified:end -->
