# Template: SearchFlow (Search Form Bar)

## Purpose

Recreation of ColorLib "Search Form Bar 18" — a full-viewport dark overlay with a white search bar strip at the top. The search bar contains a text input with "Search..." placeholder, a blue "Search" button, and an "X" close button in the top-right corner. The overlay covers the entire page with a dark gray background, focusing attention on the search input.

- **Source slug:** `search-form-bar-18`
- **Source:** https://colorlib.com/wp/template/search-form-bar-18/
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-18/ — returned 404 at prep time — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-18.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Dark Overlay Search

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bootstrap/search-form-bar-18/` — HTTP 200, 4,473 B, title `Search #8`.
>
> Sheet: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-18/css/style.css?v=4238b920` (17,373 B).
> Faces it actually declares: `Roboto`, `Segoe UI`, `Helvetica Neue`, `Noto Sans`.
> The prescribed face `poppins` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable) — **re-probed 2026-10-23: the demo serves** (measured record below).

| Token                       | Value                                               |
| --------------------------- | --------------------------------------------------- |
| Font family                 | `'Poppins', sans-serif` (weight 400)                |
| Page background             | `#ffffff` (white, behind overlay)                   |
| Overlay background          | `#757575` (medium-dark gray, solid)                 |
| Overlay                     | Full-viewport, covers entire page                  |
| Search bar strip background | `#ffffff` (white)                                   |
| Search bar strip position   | Top of viewport, full width                         |
| Search bar strip height     | ~`60px`                                            |
| Search bar strip padding    | ~`16px 40px`                                       |
| Search bar max-width        | ~`600px` (left-aligned within strip)               |
| Search bar height           | ~`44px`                                            |
| Search bar border           | `1px solid #e0e0e0` (light gray)                    |
| Search bar border-radius    | `4px` (slightly rounded, not pill)                 |
| Search bar background       | `#ffffff` (white)                                  |
| Input placeholder color     | `#999999` (muted gray)                             |
| Input text color            | `#333333` (dark gray)                              |
| Search button background    | `#4a8cf7` (medium blue)                            |
| Search button text          | `#ffffff` (white)                                  |
| Search button border-radius | `4px` (slightly rounded, not pill)                 |
| Search button padding       | ~`10px 24px`                                       |
| Search button font-size     | ~`14px`                                            |
| Search button font-weight   | 500                                                |
| Close button position       | Top-right corner of viewport, ~`20px` from edges   |
| Close button color          | `#999999` (gray)                                  |
| Close button hover color    | `#333333` (dark)                                  |
| Close button size           | ~`20px`                                            |

## Requirements

### Requirement: Dark overlay renders full viewport

The overlay SHALL fill the entire viewport with a solid dark gray (#757575) background.

#### Scenario: Overlay renders full viewport

- **GIVEN** the page loads
- **THEN** the viewport is filled with a dark gray background (#757575)
- **AND** no other page content is visible behind the overlay

### Requirement: White search bar strip at top

A white horizontal strip SHALL appear at the top of the viewport, spanning full width, containing the search bar and close button.

#### Scenario: Search bar strip renders at top

- **GIVEN** the overlay is displayed
- **THEN** a white horizontal strip appears at the top of the viewport
- **AND** the strip spans the full width of the viewport
- **AND** the strip has a height of approximately 60px

### Requirement: Close button displays in top-right corner

An "X" close button SHALL appear in the top-right corner of the viewport, colored gray (#999999) with a hover state that darkens to #333333.

#### Scenario: Close button displays in top-right

- **GIVEN** the overlay is displayed
- **THEN** an "X" close button appears in the top-right corner
- **AND** the button is gray (#999999) color
- **WHEN** the user hovers over the close button
- **THEN** the color darkens to #333333

### Requirement: Close button dismisses overlay

Clicking the close button SHALL dismiss the overlay and show a "Search closed" message with a reopen option.

#### Scenario: Close button dismisses overlay

- **GIVEN** the overlay is displayed
- **WHEN** the user clicks the "X" close button
- **THEN** the overlay disappears and a "Search closed" message is shown

### Requirement: Search bar renders in strip with input and button

The search bar SHALL contain a text input with "Search..." placeholder and a blue "Search" button, both with slightly rounded corners (border-radius ~4px, not pill shape).

#### Scenario: Search bar renders in strip

- **GIVEN** the overlay is displayed
- **THEN** a search bar appears in the white strip area
- **AND** the search bar has a white background
- **AND** the search bar has a light gray border (1px solid #e0e0e0)
- **AND** the search bar has slightly rounded corners (~4px)

### Requirement: Search input accepts text

The search bar SHALL contain a text input with "Search..." placeholder text that accepts user input.

#### Scenario: Search input accepts text

- **GIVEN** the overlay is displayed
- **WHEN** the user clicks inside the search input
- **THEN** the input receives focus
- **AND** the placeholder text reads "Search..."
- **AND** the user can type a search query

### Requirement: Search button is visible and styled

A blue "Search" button SHALL appear on the right side of the search bar with slightly rounded corners, white text, and blue (#4a8cf7) background.

#### Scenario: Search button is visible and styled

- **GIVEN** the overlay is displayed
- **THEN** a blue "Search" button appears on the right side of the search bar
- **AND** the button has slightly rounded corners (~4px border-radius)
- **AND** the button text is white
- **AND** the button background is blue (#4a8cf7)

### Requirement: Search button triggers search action

Clicking the Search button SHALL trigger a search action with the entered query text.

#### Scenario: Search button triggers search action

- **GIVEN** the overlay is displayed with text "vacation"
- **WHEN** the user clicks the "Search" button
- **THEN** a search submit action is triggered with the entered query

### Requirement: Enter key triggers search

Pressing the Enter key in the search input SHALL trigger the same search action as clicking the Search button.

#### Scenario: Enter key triggers search

- **GIVEN** the overlay is displayed with text "beach"
- **WHEN** the user presses the Enter key
- **THEN** the same search submit action is triggered

### Requirement: Responsive layout

The overlay and search bar SHALL be responsive below `md` (767.98px — the
sheet's `.cl-col-md-3`/`.cl-col-md-7` stack there, NOT 640px), with the search
bar adjusting width and remaining tappable.

#### Scenario: Responsive layout

- **GIVEN** the overlay is displayed on a mobile viewport (<=767.98px — `.cl-col-md-3`/`.cl-col-md-7` stack below 768, the 576 band is the next one down)
- **THEN** the search bar width adjusts to fit within screen margins
- **AND** the search button remains visible and tappable
- **AND** the close button remains accessible

### Requirement: Footer links to Component Dock

The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **GIVEN** the overlay is displayed
- **THEN** a footer link to https://www.componentdock.com/ is visible
- **AND** the link text contains "Component Dock"
- **AND** the link opens in a new tab

### Requirement: No ColorLib references in app code

The app source code SHALL NOT contain any references to ColorLib, preview.colorlib.com, or colorlib.com. Provenance lives only in the spec, TEMPLATES.md, and PR.

#### Scenario: No ColorLib references in app code

- **GIVEN** the app is built
- **THEN** no source file in apps/searchflow/ contains the string "colorlib" (case-insensitive)

## Verification checklist

- [ ] `npm run verify:app -- searchflow` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 12 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Dark overlay renders full viewport
      - White search bar strip at top
      - Close button displays in top-right corner
      - Close button dismisses overlay
      - Search bar renders in strip with input and button
      - Search input accepts text
      - Search button is visible and styled
      - Search button triggers search action
      - Enter key triggers search
      - Footer links to Component Dock
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
