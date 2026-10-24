# Template: Jobsnap (Search Form Bar)

## Purpose

Recreation of ColorLib "Search Form Bar 19" — a simple job search template with a header, full-width hero image, and a white search card overlaying the hero bottom. The search card contains a text input with magnifying glass icon, a categories dropdown, and a blue search button in a horizontal layout.

- **Source slug:** `search-form-bar-19`
- **Source:** https://colorlib.com/wp/template/search-form-bar-19/
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-19/ — returned 404 at prep time — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-19.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Job Search

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bootstrap/search-form-bar-19/` — HTTP 200, 3,320 B, title `Search #9`.
>
> Sheet: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-19/css/style.css?v=d4d74eda` (16,483 B).
> Faces it actually declares: `Roboto`, `Segoe UI`, `Helvetica Neue`, `Noto Sans`.
> The recorded brand `#4a90e2` occurs nowhere in it: the values below are screenshot samples, not measurements — `docs/replication.md` makes the sheet canonical.
> The prescribed face `poppins` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable) — **re-probed 2026-10-23: the demo serves** (measured record below).

| Token                       | Value                                                                    |
| --------------------------- | ------------------------------------------------------------------------ |
| Font family                 | `'Poppins', sans-serif` (weight 400)                                     |
| Page background             | `#ffffff` (white)                                                        |
| Header background           | `#ffffff` (white)                                                        |
| Brand color                 | `#4a90e2` (medium blue — header text, nav links, search button)          |
| Hero image                  | Full-width warm-toned photograph (person with hat, neutral/desert tones) |
| Hero height                 | ~420px                                                                   |
| Search card background      | `#ffffff` (white)                                                        |
| Search card shadow          | `shadow-lg` (subtle drop shadow)                                         |
| Search card border-radius   | ~4px (slightly rounded)                                                  |
| Search card position        | Overlapping bottom of hero, horizontally centered                        |
| Search input border         | `1px solid #d1d5db` (light gray)                                         |
| Search input border-radius  | ~4px                                                                     |
| Search input placeholder    | `#9ca3af` (muted gray)                                                   |
| Search button background    | `#4a90e2` (medium blue)                                                  |
| Search button text          | `#ffffff` (white)                                                        |
| Search button border-radius | ~4px                                                                     |
| Categories dropdown border  | `1px solid #d1d5db` (light gray)                                         |
| Footer background           | `#ffffff` (white)                                                        |
| Footer border               | `1px solid #e5e7eb` (top border)                                         |

## Requirements

### Requirement: Header renders with brand text and navigation links

The header SHALL display a white background with "Brand" text in blue on the left and navigation links ("Home", "About", "Contact") in blue on the right.

#### Scenario: Brand name displayed

- **GIVEN** the page loads
- **THEN** the header shows "Brand" as the logo text in blue (#4a90e2)

#### Scenario: Navigation links displayed

- **GIVEN** the page loads
- **THEN** the header shows links: "Home", "About", "Contact"
- **AND** all nav links are styled in blue (#4a90e2)

### Requirement: Hero section displays full-width background image

The hero section SHALL render a full-width background image with no text overlay, filling the viewport width at approximately 420px height.

#### Scenario: Hero background image renders

- **GIVEN** the page loads
- **THEN** a full-width hero section displays a background image
- **AND** the hero fills the viewport width
- **AND** the hero has no heading or paragraph text overlay

### Requirement: Search form bar overlays hero bottom

A white search card SHALL overlay the bottom of the hero section, horizontally centered, containing a text input, categories dropdown, and search button in a horizontal row.

#### Scenario: Search card positioned over hero

- **GIVEN** the page loads
- **THEN** a white search card overlays the bottom of the hero section
- **AND** the card is horizontally centered
- **AND** the card has a subtle drop shadow

#### Scenario: Text input present

- **GIVEN** the page loads
- **THEN** the search card contains a text input with placeholder "Search Jobs..."
- **AND** the input has a magnifying glass icon on the left

#### Scenario: Categories dropdown present

- **GIVEN** the page loads
- **THEN** the search card contains a "Categories" dropdown select

#### Scenario: Search button present

- **GIVEN** the page loads
- **THEN** the search card contains a blue "Search" button
- **AND** the button has white text and rounded corners

#### Scenario: Horizontal layout

- **GIVEN** the page loads
- **THEN** the search form elements are laid out in a horizontal row
- **AND** the text input takes the majority of the width
- **AND** the dropdown and button sit to the right

### Requirement: Footer links to Component Dock

The footer SHALL display "Made with Component Dock" with a link to https://www.componentdock.com/.

#### Scenario: Footer with Component Dock link

- **GIVEN** the page loads
- **THEN** a footer is present at the bottom
- **AND** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text includes "Component Dock"

### Requirement: No ColorLib references in app code

The app source code SHALL NOT contain any references to "ColorLib" or "colorlib.com" — provenance lives only in the spec, TEMPLATES.md, and the PR.

#### Scenario: No ColorLib strings in app

- **GIVEN** the app source files in `apps/jobsnap/`
- **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification checklist

- [ ] `npm run verify:app -- jobsnap` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 10 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Header renders with brand text and navigation links
      - Hero section displays full-width background image
      - Search form bar overlays hero bottom
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
- [x] Header renders with brand text and navigation links — the header shows "Brand" as the logo text in blue (#4a90e2)
- [ ] Hero section displays full-width background image — a full-width hero section displays a background image
- [ ] Search form bar overlays hero bottom — a white search card overlays the bottom of the hero section
