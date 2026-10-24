# ProbeBar — Search Form Bar Template
<!-- prep-status: shipped-as=searchgate -->
> **SHIPPED-UNDER** — the ColorLib `search-form-bar-06` design this prep describes already
> ships as `apps/searchgate` (<https://searchgate.free.componentdock.com>).
> Do not scaffold `apps/probebar`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-searchgate/spec.md`.

Recreation of ColorLib "Search Form/Bar 06"
(https://colorlib.com/wp/template/search-form-bar-06/)

## Purpose

ProbeBar is a minimal search form bar component page with a centered heading, a pill-shaped search input and a circular olive-green submit button.

It recreates the ColorLib **Search Form/Bar 06** design (https://colorlib.com/wp/template/search-form-bar-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (from screenshot analysis) — **re-probed 2026-10-23: the demo serves** (measured record below)

- **Font**: System sans-serif (Helvetica/Arial-like), no Google Font loaded
- **Heading font size**: ~24px, weight 400, color #333, centered
- **Background**: #f5f5f5 (very light gray, almost white)
- **Search bar**: white (#fff) input with rounded-left corners, light gray border
- **Search button**: olive-green (#8B9A3B or similar) circle, ~50px diameter, overlapping the left edge of the input
- **Search icon**: white magnifying glass inside the green circle
- **Input**: "Search..." placeholder, transparent/white background, no visible border on the input itself
- **Section padding**: generous vertical padding (~8em)
- **Layout**: centered, single component, clean minimal aesthetic
- **Overall style**: Ultra-minimal — just a title and one search bar component. No footer section in original; recreation will add Component Dock footer per convention.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bootstrap/search-form-bar-06/` — HTTP 200, 1,976 B, title `Search Form/Bar 06`.
>
> Sheet: `https://preview.colorlib.com/theme/bootstrap/search-form-bar-06/css/style.css?v=7aee19ab` (10,477 B).
> Faces it actually declares: `Roboto`, `Poppins`, `Segoe UI`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Screenshot Analysis

The template is a single-component showcase: a centered heading "Search Form/Bar #06" above a search bar. The search bar features a distinctive olive-green circular button with a white magnifying glass icon, positioned at the left of a rounded input field. The green circle overlaps or is flush with the input's left edge, creating a two-part pill shape (circle + rounded rectangle). The background is a clean light gray. The design is extremely minimal — just the search component, no navigation, no cards, no other content. The green is a muted olive tone (not bright green), giving an earthy, understated feel.

## Structure

Single section with:
1. Centered heading ("Search Form/Bar #06" → will use descriptive title)
2. Search form: circular green button (left) + rounded input field (right)
3. Footer with Component Dock branding (added per convention)

## Requirements

### ProbeBar component

#### Scenario: ProbeBar component

- **GIVEN** the page loads, THEN the heading is visible and centered
- **GIVEN** the page loads, THEN the search input is visible with placeholder "Search..."
- **GIVEN** the page loads, THEN the green circular search button is visible to the left of the input
- **GIVEN** the user clicks the search button, THEN no page navigation occurs (form submit prevented)
- **GIVEN** the user types in the search input, THEN the input value updates
- **GIVEN** the user focuses the input, THEN the input is focused and ready for typing
- **GIVEN** the footer is present, THEN it links to componentdock.com

### Responsive behavior

#### Scenario: Responsive behavior

- **GIVEN** a mobile viewport, THEN the search bar scales down proportionally
- **GIVEN** a desktop viewport, THEN the search bar is centered with max-width constraint

## Verification checklist

- [ ] Green circular search button with white magnifying glass icon
- [ ] Pill-shaped search bar (circle button + rounded input)
- [ ] Light gray (#f5f5f5) page background
- [ ] Centered heading above search bar
- [ ] "Search..." placeholder text
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Package name: @free-react-templates/probebar
- [ ] CNAME: probebar.free.componentdock.com
