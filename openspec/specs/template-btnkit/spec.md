# Template: BtnKit (UI Component Showcase & Buttons Gallery)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 13** (https://colorlib.com/wp/template/bootstrap-buttons-13/).

- **New Name:** BtnKit
- **Category:** UI Component Showcase / Dark Mode Buttons & Interactive Elements
- **Preview URL:** https://colorlib.com/wp/template/bootstrap-buttons-13/
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React

## Design Tokens (Captured from Reference & Screenshot)

- **Primary Colors:** Dark mode palette (`bg-slate-950`, `text-slate-100`), vibrant accent colors (`bg-indigo-600`, `bg-emerald-600`, `bg-rose-600`, `bg-amber-500`, `bg-cyan-500`)
- **Typography:** Inter / System sans-serif font family, clean hierarchy (`text-4xl font-extrabold`, `text-lg text-slate-400`)
- **Button Styles & Radii:** Rounded-lg, pill shaped (`rounded-full`), glowing neon effects, hover transitions (`transition-all duration-300 hover:scale-105`), subtle shadows and borders
- **Section Backgrounds:** Deep slate gradients and dark charcoal cards (`bg-slate-900/80 border border-slate-800`)

## Section Structure & Gherkin Requirements

### 1. Navigation Header

- **Requirement:** The app shall display a responsive navigation header with the brand logo ("BtnKit"), direct jump links to button categories (Solid, Outline, Social, Glow, Checkboxes), and a dark/light mode toggle or action button.
- **Scenario:** User views header and clicks category links to scroll to sections.

### 2. Hero Section

- **Requirement:** A striking hero banner presenting the title "Free Dark Mode Bootstrap Buttons", a descriptive subtitle, and quick action buttons to explore or copy code snippets.
- **Scenario:** User lands on the page and sees the hero introduction with prominent CTAs.

### 3. Solid Buttons Showcase

- **Requirement:** A grid of solid color buttons in various sizes (small, medium, large), contextual states (primary, success, danger, warning, info), and hover/active effects.
- **Scenario:** User browses solid button variants and clicks to trigger interactive feedback states.

### 4. Outline & Ghost Buttons Showcase

- **Requirement:** A collection of outlined and ghost buttons with crisp borders and hover fill transitions.
- **Scenario:** User tests outline button styles and hover interactivity.

### 5. Social Media & Icon Buttons

- **Requirement:** Dedicated buttons for social platforms (GitHub, Twitter/X, Discord, Dribbble) featuring official brand colors and Lucide icons.
- **Scenario:** User views social action buttons with icons.

### 6. Interactive Toggles, Checkboxes & Badges

- **Requirement:** Custom styled interactive switches, pill checkboxes, and badge tags demonstrating modern form elements.
- **Scenario:** User toggles switch states and interacts with checkboxes.

### 7. Footer

- **Requirement:** A clean dark footer with copyright information and mandatory attribution link pointing to `https://www.componentdock.com/` ("Component Dock").
- **Scenario:** User scrolls to the bottom and clicks the Component Dock link.

## Verification Checklist

- [ ] App builds successfully without errors (`npm run build`).
- [ ] 100% test coverage on all components (`npm run test:coverage`).
- [ ] Tailwind CSS 4 tokens and `@source` setup properly injected.
- [ ] Footer links to Component Dock.
- [ ] No references to ColorLib in app source code.
