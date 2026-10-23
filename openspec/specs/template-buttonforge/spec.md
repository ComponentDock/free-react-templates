# Template: Buttonforge (UI Components / Dashboard Widgets)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 16** (`https://colorlib.com/wp/template/bootstrap-buttons-16/`, live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-16/`). A modern administrative stats and metric button component library dashboard built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Font Family**: "Poppins", sans-serif (system sans-serif fallback)
- **Background**: Light gray canvas (`#f8f8f8`) with crisp white card containers (`#ffffff`)
- **Brand Colors**:
  - Primary Cyan/Teal accent: `#1fbbd3`
  - Secondary Coral/Orange accent: `#fb582f`
  - Tertiary Teal: `#159688`
  - Quaternary Pink/Magenta: `#e92465`
  - Text primary: `#212529`, muted text: `rgba(0, 0, 0, 0.3)` / `text-slate-400`
- **Button Styling**: Clean rounded-md / pill cards with icon-left and icon-right alignment, statistics badge displays (bold numerical values with subtitle labels), smooth hover transitions.

## Requirements

### Feature: Metric Button Dashboard & Component Grid

As a visitor exploring the Buttonforge UI library,
I want to view interactive metric and status button widgets with clear statistics, icons, and layout variants,
So that I can evaluate dashboard button components.

#### Scenario: Displaying metric button widgets

- **GIVEN** the application is loaded
- **WHEN** the user views the dashboard section
- **THEN** all metric button cards (New Posts, New Comments, Bounce Rate, Total Visits, Projects, Clients, Conversion Rate) should be visible with proper icons and numerical statistics

#### Scenario: Interactive button states and hover effects

- **GIVEN** the metric buttons are rendered
- **WHEN** the user hovers over any button card
- **THEN** the button card displays a subtle hover elevation or color highlight

#### Scenario: Component Dock footer presence

- **GIVEN** the page is scrolled to the footer
- **WHEN** the user looks at the footer section
- **THEN** a prominent link pointing to `https://www.componentdock.com/` ("Component Dock") is displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/buttonforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/buttonforge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] TypeScript strict compilation (`npm run build` / typecheck)
- [ ] Vitest coverage at 100% lines/functions/branches/statements
- [x] App public/CNAME set to `buttonforge.free.componentdock.com`
- [x] Footer includes Component Dock branding link (`https://www.componentdock.com/`)
- [ ] Tailwind `@theme` configuration matches Poppins font and brand colors (`#1fbbd3`, `#fb582f`, `#159688`, `#e92465`)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
