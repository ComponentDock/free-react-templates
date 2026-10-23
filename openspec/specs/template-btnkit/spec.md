# Template: BtnKit (UI Component Showcase & Buttons Gallery)

## Purpose

An UI Component Showcase & Buttons Gallery template with navigation header, hero section and solid buttons showcase sections. Recreation of ColorLib **Bootstrap Buttons 13** (https://colorlib.com/wp/template/bootstrap-buttons-13/).

- **New Name:** BtnKit
- **Category:** UI Component Showcase / Dark Mode Buttons & Interactive Elements
- **Preview URL:** https://colorlib.com/wp/template/bootstrap-buttons-13/
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React

## Design Tokens (Captured from Reference & Screenshot)

- **Primary Colors:** Dark mode palette (`bg-slate-950`, `text-slate-100`), vibrant accent colors (`bg-indigo-600`, `bg-emerald-600`, `bg-rose-600`, `bg-amber-500`, `bg-cyan-500`)
- **Typography:** Inter / System sans-serif font family, clean hierarchy (`text-4xl font-extrabold`, `text-lg text-slate-400`)
- **Button Styles & Radii:** Rounded-lg, pill shaped (`rounded-full`), glowing neon effects, hover transitions (`transition-all duration-300 hover:scale-105`), subtle shadows and borders
- **Section Backgrounds:** Deep slate gradients and dark charcoal cards (`bg-slate-900/80 border border-slate-800`)

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Bootstrap Buttons 13** — https://colorlib.com/wp/template/bootstrap-buttons-13/
- **Preview**: https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/ — HTTP 200 on 2026-10-23; measured `css/style.css` (26,074 bytes). Title served: "Button 03".
- **Measured how**: hex-literal census of `css/style.css`; the count column is the number of literal occurrences in that sheet (smaller than the number of rules that use it when a declaration repeats the value).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Primary blue | `#007bff` | 14 | `a` link colour and `.cl-btn-primary` fill/border |
| Secondary slate | `#6c757d` | 13 | `.cl-btn-secondary` fill and border |
| Orchid accent | `#bd83ce` | 10 | `.cl-btn.cl-btn-secondary` — the page's own secondary override |
| Indigo accent | `#3e64ff` | 9 | `a` and `.cl-btn.cl-btn-primary` page-level override |
| Violet accent | `#8105d8` | 9 | `.cl-btn.btn-tertiary` fill and border |
| Mint accent | `#52de97` | 9 | `.cl-btn.btn-quarternary` fill |
| Charcoal | `#343a40` | 6 | dark checkbox/radio checked state |
| Ink | `#212529` | 5 | `body` text |
| Primary hover | `#0056b3` | 2 | `.cl-btn-primary` hover/disabled variant |

### Typography

| Element | Family | Evidence |
| ------- | ------ | -------- |
| Body | `Poppins` + Arial/Bootstrap 4 stack | 8 `font-family` declarations name Poppins in the sheet |
| Headings | `Poppins` 600/700 | section headings (`Button #03`, `Social Buttons`) inherit the same face |
| Icons | `Ionicons` | `@font-face` icon face used by the social/icon button rows |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radii | `0.25rem` (2), `2px` (1), `100%` (2 — round radio/checkbox), `40px` (1 — social pill) |
| Buttons | solid + outline pair per variant; the social row is a 40px pill |
| Layout | one full-width `.ftco-section` stacking button rows, no hero/photo bands |

### Section order (shipped app, 1:1 with the reference)

`Navbar -> Hero -> SolidButtons -> OutlineButtons -> ShapeVariants -> SizesAndStates -> IconButtons -> Playground -> Footer`

Reference bands: Button #03 -> Social Buttons -> Dropdown Buttons -> Group Buttons -> Checkboxes -> Radios Buttons.

### Delta vs shipped app

- The spec's older token prose ("dark mode palette", `bg-slate-950` / `bg-indigo-600` / `bg-emerald-600` / `bg-rose-600`) is APP-derived, not reference-derived: `apps/btnkit/src/App.tsx` renders `bg-white dark:bg-gray-950` and its `@theme` carries the stock Bootstrap 5 palette (`#0d6efd`, `#198754`, `#dc3545`, `#ffc107`). The reference page is light and its own accents are `#bd83ce` / `#3e64ff` / `#8105d8` / `#52de97`.
- None of those four reference accent families is tokenized in `apps/btnkit`; only the Bootstrap defaults are.

## Requirements

### 1. Navigation Header

#### Scenario: 1. Navigation Header

- **Requirement:** The app shall display a responsive navigation header with the brand logo ("BtnKit"), direct jump links to button categories (Solid, Outline, Social, Glow, Checkboxes), and a dark/light mode toggle or action button.
- **Scenario:** User views header and clicks category links to scroll to sections.

### 2. Hero Section

#### Scenario: 2. Hero Section

- **Requirement:** A striking hero banner presenting the title "Free Dark Mode Bootstrap Buttons", a descriptive subtitle, and quick action buttons to explore or copy code snippets.
- **Scenario:** User lands on the page and sees the hero introduction with prominent CTAs.

### 3. Solid Buttons Showcase

#### Scenario: 3. Solid Buttons Showcase

- **Requirement:** A grid of solid color buttons in various sizes (small, medium, large), contextual states (primary, success, danger, warning, info), and hover/active effects.
- **Scenario:** User browses solid button variants and clicks to trigger interactive feedback states.

### 4. Outline & Ghost Buttons Showcase

#### Scenario: 4. Outline & Ghost Buttons Showcase

- **Requirement:** A collection of outlined and ghost buttons with crisp borders and hover fill transitions.
- **Scenario:** User tests outline button styles and hover interactivity.

### 5. Social Media & Icon Buttons

#### Scenario: 5. Social Media & Icon Buttons

- **Requirement:** Dedicated buttons for social platforms (GitHub, Twitter/X, Discord, Dribbble) featuring official brand colors and Lucide icons.
- **Scenario:** User views social action buttons with icons.

### 6. Interactive Toggles, Checkboxes & Badges

#### Scenario: 6. Interactive Toggles, Checkboxes & Badges

- **Requirement:** Custom styled interactive switches, pill checkboxes, and badge tags demonstrating modern form elements.
- **Scenario:** User toggles switch states and interacts with checkboxes.

### 7. Footer

#### Scenario: 7. Footer

- **Requirement:** A clean dark footer with copyright information and mandatory attribution link pointing to `https://www.componentdock.com/` ("Component Dock").
- **Scenario:** User scrolls to the bottom and clicks the Component Dock link.

## Verification checklist

- [ ] App builds successfully without errors (`npm run build`).
- [ ] 100% test coverage on all components (`npm run test:coverage`).
- [ ] Tailwind CSS 4 tokens and `@source` setup properly injected.
- [ ] Footer links to Component Dock.
- [x] No references to ColorLib in app source code.
- [x] 1. Navigation Header — Requirement:** The app shall display a responsive navigation header with the brand logo ("BtnKit"), direct jump links to button categories (Solid, Outline, Social, Glow…
- [ ] 2. Hero Section — Requirement:** A striking hero banner presenting the title "Free Dark Mode Bootstrap Buttons", a descriptive subtitle, and quick action buttons to explore or copy code snippets
- [ ] 3. Solid Buttons Showcase — Requirement:** A grid of solid color buttons in various sizes (small, medium, large), contextual states (primary, success, danger, warning, info), and hover/active effects
- [ ] 4. Outline & Ghost Buttons Showcase — Requirement:** A collection of outlined and ghost buttons with crisp borders and hover fill transitions
- [ ] 5. Social Media & Icon Buttons — Requirement:** Dedicated buttons for social platforms (GitHub, Twitter/X, Discord, Dribbble) featuring official brand colors and Lucide icons
- [ ] 6. Interactive Toggles, Checkboxes & Badges — Requirement:** Custom styled interactive switches, pill checkboxes, and badge tags demonstrating modern form elements
