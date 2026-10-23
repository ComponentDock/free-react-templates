# Template: Plicate (UI Components / Accordion)

## Purpose

Recreation of ColorLib [Accordion 05](https://colorlib.com/wp/template/accordion-05/) (`https://preview.colorlib.com/theme/accordion-05/`, preview unreachable, designed from screenshot reference) — **re-probed 2026-10-23: the demo serves** (measured record below). Built as a clean, responsive interactive accordion component showcase in React 19, Tailwind CSS 4, and TypeScript.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bac/accordion-05/` — HTTP 200, 9,961 B, title `Accordion 05`.
>
> Sheet: `https://preview.colorlib.com/theme/bac/accordion-05/css/style.css?v=8d10e590` (17,751 B).
> Faces it actually declares: `Poppins`, `Ionicons`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design Tokens

- **Brand Colors**: Primary Indigo (`#4f46e5`), Neutral Gray (`#f3f4f6`), Slate Text (`#1f2937`), Accent Blue (`#3b82f6`)
- **Typography**: Inter, sans-serif
- **Accordion Style**: Clean collapsible cards with chevron indicators, smooth toggle transitions, bold headers, and structured body content.
- **Layout**: Centered container with header title, subtitle, and vertical stack of interactive accordion items.

## Requirements

### Requirement 1: Header Section

#### Scenario: Header Section

- The template must display a clear title and subtitle introducing the accordion collection.
- Scenario: User loads the page
- **GIVEN** the user visits the Plicate template homepage
- **THEN** they should see the main header "Interactive Accordion Showcase" and subtitle describing the component set

### Requirement 2: Interactive Accordion Component

#### Scenario: Interactive Accordion Component

- The template must provide a fully interactive accordion list where clicking an item expands its content while collapsing others (or independently toggleable).
- Scenario: User expands an accordion item
- **GIVEN** the user views the accordion list
- **WHEN** they click on an accordion header
- **THEN** the corresponding content area expands with smooth transition and the chevron icon rotates

### Requirement 3: Footer Attribution

#### Scenario: Footer Attribution

- The template footer must link to Component Dock (`https://www.componentdock.com/`).
- Scenario: User scrolls to the footer
- **GIVEN** the user reaches the bottom of the page
- **THEN** they should see the copyright and a link to Component Dock

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
- [ ] Header Section — they should see the main header "Interactive Accordion Showcase" and subtitle describing the component set
- [ ] Interactive Accordion Component — the corresponding content area expands with smooth transition and the chevron icon rotates

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bac/accordion-05/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#0056b3` (d=95)
- `#3b82f6` — nearest `#007bff` (d=60)
<!-- live-palette-unverified:end -->
