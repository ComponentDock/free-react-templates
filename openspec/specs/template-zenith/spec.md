# Template: Zenith Button Showcase (UI Component Showcase category)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 05** (`https://colorlib.com/wp/template/bootstrap-buttons-05/`), built as a modern, interactive Bootstrap-inspired button showcase landing page using React 19, Tailwind CSS 4, and TypeScript.

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

## Gherkin Requirements & Scenarios

### Feature: Interactive Button Showcase Landing Page

#### Scenario: Hero and Overview Section

- **Given** the user visits the Zenith Button Showcase landing page
- **Then** they should see a prominent hero banner titled "Zenith Button Showcase" with a subtitle describing modern UI component collections
- **And** a quick action button to explore button styles and a link to Component Dock footer

#### Scenario: Solid and Variant Buttons Grid

- **Given** the user views the button styles section
- **Then** they should see categorized groups of buttons including Primary, Secondary, Success, Danger, Warning, and Info variants
- **And** clicking any button triggers an interactive ripple or active click state feedback

#### Scenario: Button Shapes and Sizes

- **Given** the user views the button shapes and sizes section
- **Then** they should see small, medium, and large buttons, as well as pill, square, and icon-appended variants

#### Scenario: Interactive Playground & Code Copy

- **Given** the user navigates to the interactive button customizer playground
- **Then** they can toggle button props (size, variant, rounded, shadow, icon) in real-time
- **And** see the corresponding React/Tailwind JSX snippet generated and copy it to clipboard

## Verification Checklist

- [ ] App folder created at `apps/zenith` with valid `package.json` (`@free-react-templates/zenith`)
- [ ] `vite.config.ts` includes `injectUiSource()` helper
- [ ] `public/CNAME` contains `zenith.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] All sections rendered matching the spec and 1:1 design tokens
- [ ] Vitest tests passing with 100% coverage (`npm run test:coverage`)
- [ ] Per-app verification passes (`scripts/verify-app.sh zenith`)
