# Template: Zenith (UI Component Showcase category)

## Purpose

An interactive button showcase template with hero, features, pricing, testimonials and CTA sections. Recreation of ColorLib **Bootstrap Buttons 05** (`https://colorlib.com/wp/template/bootstrap-buttons-05/`), built as a modern, interactive Bootstrap-inspired button showcase landing page using React 19, Tailwind CSS 4, and TypeScript.

- **Source Slug**: `bootstrap-buttons-05`
- **Preview URL**: `https://preview.colorlib.com/theme/bootstrap-buttons-05/`
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, TypeScript (strict).
- **Assigned App Name**: `zenith` (folder: `apps/zenith`, deployed at `zenith.free.componentdock.com`).

## Design tokens

- **Brand Colors**:
  - Primary (Indigo/Blue): `#4f46e5` (indigo-600) / `#6366f1` (indigo-500)
  - Secondary (Slate/Gray): `#64748b` (slate-500)
  - Accent / Success: `#10b981` (emerald-500)
  - Warning: `#f59e0b` (amber-500)
  - Danger / Error: `#ef4444` (red-500)
  - Background: `#f8fafc` (slate-50)
  - Surface Card: `#ffffff` (white) with subtle shadow (`shadow-sm`)
- **Typography**:
  - Font Family: `Inter`, `sans-serif`
  - Hero Heading: 3rem font-bold tracking-tight text-slate-900
  - Section Headings: 2rem font-semibold text-slate-800
- **Button Styles & Shapes**:
  - Pill buttons (`rounded-full`), Rounded buttons (`rounded-lg`), Square buttons (`rounded-none`).
  - Solid fills, Outline variants, Ghost variants, Gradient fills (`bg-gradient-to-r from-indigo-500 to-purple-600`).
  - Hover states with scale transitions (`hover:scale-105 transition-transform`), shadow elevations (`hover:shadow-lg`), and ring focus indicators.
- **Section Backgrounds**: Clean light theme with alternating white and slate-50 section backgrounds, subtle borders, and modern card grid containers.

## Requirements

### Feature: Interactive Button Showcase Landing Page

#### Scenario: Hero and Overview Section

- **GIVEN** the user visits the Zenith Button Showcase landing page
- **THEN** they should see a prominent hero banner titled "Zenith Button Showcase" with a subtitle describing modern UI component collections
- **AND** a quick action button to explore button styles and a link to Component Dock footer

#### Scenario: Solid and Variant Buttons Grid

- **GIVEN** the user views the button styles section
- **THEN** they should see categorized groups of buttons including Primary, Secondary, Success, Danger, Warning, and Info variants
- **AND** clicking any button triggers an interactive ripple or active click state feedback

#### Scenario: Button Shapes and Sizes

- **GIVEN** the user views the button shapes and sizes section
- **THEN** they should see small, medium, and large buttons, as well as pill, square, and icon-appended variants

#### Scenario: Interactive Playground & Code Copy

- **GIVEN** the user navigates to the interactive button customizer playground
- **THEN** they can toggle button props (size, variant, rounded, shadow, icon) in real-time
- **AND** see the corresponding React/Tailwind JSX snippet generated and copy it to clipboard

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/zenith/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/zenith/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] App folder created at `apps/zenith` with valid `package.json` (`@free-react-templates/zenith`)
- [ ] `vite.config.ts` includes `injectUiSource()` helper
- [ ] `public/CNAME` contains `zenith.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] All sections rendered matching the spec and 1:1 design tokens
- [ ] Vitest tests passing with 100% coverage (`npm run test:coverage`)
- [ ] Per-app verification passes (`scripts/verify-app.sh zenith`)
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
