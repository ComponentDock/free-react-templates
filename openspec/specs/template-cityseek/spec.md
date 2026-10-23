# Template: CitySeek (Search Form)

## Purpose

Recreation of ColorLib **Search Form 1** (`https://colorlib.com/wp/template/colorlib-search-1/`).
Preview URL: `https://preview.colorlib.com/theme/colorlib-search-1/` (unreachable at time of prep — fell back to screenshot + ColorLib page) — **re-probed 2026-10-23: the demo serves** (measured record below).

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/searchf/colorlib-search-1/` — HTTP 200, 1,106 B, title ``.
>
> Sheet: `https://colorlib.com/etc/searchf/colorlib-search-1/css/style.css?v=3518010b` (7,057 B).
> Faces it actually declares: `Poppins`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

**Category**: Search Form & Bar Templates
**Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
**Description**: A free city search template for directory, listing, or travel-related websites. Features a full-viewport hero with a cityscape background image, a large white heading, and a semi-transparent dark search bar with two input fields and a blue Search button.

## Design Tokens

- **Primary / Brand Colors**:
  - Hero overlay: semi-transparent dark (`rgba(0,0,0,0.4)` to `rgba(0,0,0,0.5)`)
  - Search bar background: semi-transparent dark (`rgba(0,0,0,0.5)`)
  - Input background: white (`#ffffff`)
  - Search button: medium blue (`#4a7cbe` / approx `#5b8ec9`)
  - Heading text: white (`#ffffff`)
  - Placeholder text: light gray (`#999999` / `#aaaaaa`)
- **Font Family**: System sans-serif stack (source uses Bootstrap-compatible sans-serif; likely Helvetica/Arial or similar). Use `Inter, system-ui, sans-serif`.
- **Button Shape**: Rectangular with slight rounding (approx `rounded` or `rounded-sm`), full height of search bar, blue background, white text, bold.
- **Section Backgrounds**:
  - Hero: full-viewport background image with dark overlay, no separate header/nav.
  - No additional sections visible in the screenshot — single-section search landing page.
- **Layout**: Centered content, full-width/height hero, search form horizontally centered with two inputs side-by-side and a Search button on the right.

## Requirements

### Feature: City Search Landing Page

As a visitor, I want to search for cities, attractions, or locations using a clean search form so I can find what I'm looking for quickly.

#### Scenario: Hero section renders with background and heading

- **GIVEN** the user visits the CitySeek page
- **THEN** a full-viewport hero section is displayed
- **AND** a large white heading reads "Discover the Amazing City"
- **AND** the hero has a cityscape background image with a dark overlay

#### Scenario: Search form displays two input fields and a button

- **GIVEN** the user views the hero section
- **THEN** a semi-transparent dark search bar is visible
- **AND** the search bar contains two white input fields side by side
- **AND** the first input has placeholder text "What are you looking for?"
- **AND** the second input has placeholder text "Location"
- **AND** a blue "Search" button is positioned to the right of the inputs

#### Scenario: Search form is responsive on mobile

- **GIVEN** the user views the page on a mobile device
- **THEN** the search inputs stack vertically
- **AND** the Search button spans full width below the inputs
- **AND** the heading remains centered and readable

#### Scenario: Footer attribution

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer links to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] Spec valid (`npm run spec:validate`)
- [ ] Hero section renders with background image and dark overlay
- [ ] Heading "Discover the Amazing City" in white, large font
- [ ] Search bar with two inputs and blue Search button
- [ ] Responsive layout (stacked inputs on mobile)
- [ ] Footer links to Component Dock
- [ ] 100% test coverage (`npm run test:coverage`)

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/searchf/colorlib-search-1/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4a7cbe` — nearest `#4272d7` (d=28)
- `#5b8ec9` — nearest `#4272d7` (d=40)
<!-- live-palette-unverified:end -->
